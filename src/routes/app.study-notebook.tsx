import { SubjectToolPage } from "../components/subjects/SubjectToolPage";
import {
  subjectToolSearch,
  type SubjectScope,
  notebookMatchesScope,
  scopeSearch,
} from "../lib/subjectScope";
import { createFileRoute, Link } from "@tanstack/react-router";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  Brain,
  FilePlus,
  FileText,
  Layers,
  MessageSquare,
  Network,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import {
  EXAM_BOARDS,
  type ExamBoardId,
  getExamBoard,
  getSubjectName,
} from "../data/syllabusConfig";
import { askStudyNotebook } from "../lib/api/study-notebook.functions";
import { getCurrentUser, useAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { recordFlashcards } from "../lib/storage";
import { requestUserDataSync } from "../lib/userDataSync";

export const Route = createFileRoute("/app/study-notebook")({
  validateSearch: (search) => subjectToolSearch.parse(search),
  component: ScopedNotebook,
});

type SourceStatus = "Processing" | "Ready" | "Error";
type NotebookSource = {
  id: string;
  title: string;
  type: string;
  text: string;
  addedAt: number;
  wordCount: number;
  status: SourceStatus;
  chunks: SourceChunk[];
};
type SourceChunk = {
  id: string;
  sourceId: string;
  sourceTitle: string;
  chunkText: string;
  pageNumber?: number;
  topicTags: string[];
  keywords: string[];
};
type Notebook = {
  id: string;
  title: string;
  subject: string;
  examBoard: string;
  qualification?: string;
  paper: string;
  topics: string[];
  sources: NotebookSource[];
  chats: NotebookMessage[];
  lastOpened: number;
};
type NotebookMessage = {
  role: "user" | "assistant";
  content: string;
  sourcesUsed?: { sourceTitle: string; section: string }[];
  followUps?: string[];
};
type GeneratedQuestion = {
  question: string;
  marks: number;
  commandWord: string;
  markschemePoints: string[];
  modelAnswer: string;
  hints: string[];
  sourceUsed: string;
};
type MindMapNode = {
  label: string;
  description: string;
};
type MindMapBranch = MindMapNode & {
  children: MindMapNode[];
};
type MindMapData = {
  message: string;
  center: MindMapNode;
  branches: MindMapBranch[];
};
type NotebookOutputType = "notes" | "summary" | "flashcards" | "mindmap" | "quiz";
type NotebookGenerationContext = {
  selectedSubject: string;
  selectedExamBoard: string;
  selectedTopic: string;
  requestedOutputType: NotebookOutputType;
};

const STORAGE_KEY = "markwise:study-notebooks:v1";
const NOTEBOOKS_FIRESTORE_COLLECTION = "markwiseNotebookStates";
const UNTITLED_NOTEBOOK_TITLE = "Untitled notebook";
const QUICK_ACTIONS = [
  "Summarise Sources",
  "Create Flashcards",
  "Regenerate Flashcards",
  "Generate Exam Questions",
  "Extract Keywords",
  "Make Study Plan",
  "Explain Like I'm 15",
  "Find Weak Areas",
  "Create Mind Map",
  "Regenerate Mind Map",
  "Compare Sources",
];
const BANNED_METADATA_WORDS = new Set([
  "edexcel",
  "cambridge",
  "igcse",
  "gcse",
  "biology",
  "chemistry",
  "physics",
  "maths",
  "paper",
  "topic",
  "notes",
  "subject",
  "syllabus",
  "exam board",
  "notebook",
  "study notebook",
  "demo",
  "source",
  "cambridge biology",
  "edexcel biology",
]);
const BIOLOGY_KEYWORDS = [
  "cell",
  "enzyme",
  "photosynthesis",
  "respiration",
  "diffusion",
  "osmosis",
  "organelle",
  "ecosystem",
];

function ScopedNotebook() {
  const search = Route.useSearch();
  return (
    <SubjectToolPage search={search}>
      {(context, userId) => (
        <StudyNotebookPage
          key={`${userId}:${context.key}:${search.view ?? ""}`}
          context={context}
          view={search.view}
        />
      )}
    </SubjectToolPage>
  );
}

function StudyNotebookPage({
  context,
  view,
}: {
  context: SubjectScope;
  view?: "notes" | "notebook";
}) {
  const { user } = useAuth();
  const [notebooks, setNotebooks] = useState<Notebook[]>(() => readNotebooks());
  const [activeId, setActiveId] = useState(() => notebooks[0]?.id ?? "");
  const [notebookSyncReady, setNotebookSyncReady] = useState(false);
  const [sourceText, setSourceText] = useState("");
  const sourceTextRef = useRef<HTMLTextAreaElement | null>(null);
  const [sourceTitle, setSourceTitle] = useState("");
  const [selectedSourceId, setSelectedSourceId] = useState("all");
  const [selectedSourceOnly, setSelectedSourceOnly] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [requestedOutputType, setRequestedOutputType] = useState<NotebookOutputType>(
    view === "notes" ? "notes" : "summary",
  );
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [activePanel, setActivePanel] = useState<"summary" | "keywords" | "questions" | "mindmap">(
    "summary",
  );
  const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[]>([]);

  const scopedNotebooks = notebooks.filter((notebook) => notebookMatchesScope(notebook, context));
  const activeNotebook =
    scopedNotebooks.find((notebook) => notebook.id === activeId) ?? scopedNotebooks[0];
  const allChunks = useMemo(
    () => activeNotebook?.sources.flatMap((source) => source.chunks) ?? [],
    [activeNotebook],
  );
  const keywordRows = useMemo(() => buildKeywordRows(allChunks), [allChunks]);
  const board = getExamBoard(context.examBoard);
  const activeSubjectName = context.subjectName;
  const generationContext = useMemo<NotebookGenerationContext>(
    () => ({
      selectedSubject: activeSubjectName,
      selectedExamBoard: context.boardName,
      selectedTopic:
        selectedTopic.trim() ||
        activeNotebook?.topics[0] ||
        inferTopicFromChunks(activeNotebook?.sources.flatMap((source) => source.chunks) ?? []) ||
        "Source content",
      requestedOutputType,
    }),
    [activeNotebook, activeSubjectName, requestedOutputType, selectedTopic, context.boardName],
  );
  const summary = useMemo(
    () => buildSummary(allChunks, generationContext),
    [allChunks, generationContext],
  );
  const selectedFlashcardChunks = useMemo(() => {
    if (!activeNotebook || !selectedSourceOnly || selectedSourceId === "all") return allChunks;
    return activeNotebook.sources
      .filter((source) => source.id === selectedSourceId)
      .flatMap((source) => source.chunks);
  }, [activeNotebook, allChunks, selectedSourceId, selectedSourceOnly]);

  const touchNotebook = (id: string) => {
    setNotebooks((items) =>
      items.map((item) => (item.id === id ? { ...item, lastOpened: Date.now() } : item)),
    );
  };

  useEffect(() => {
    if (!user) {
      setNotebookSyncReady(false);
      setNotebooks([]);
      setActiveId("");
      return;
    }

    setNotebookSyncReady(false);
    const localNotebooks = readNotebooks(user.id);
    setNotebooks(localNotebooks);
    setActiveId((current) =>
      localNotebooks.some((notebook) => notebook.id === current)
        ? current
        : (localNotebooks[0]?.id ?? ""),
    );
    void loadNotebooksFromFirebase(user.id).then((remoteNotebooks) => {
      if (!remoteNotebooks) {
        if (localNotebooks.length) void saveNotebooksToFirebase(user.id, localNotebooks);
        setNotebookSyncReady(true);
        return;
      }
      writeLocalNotebooks(user.id, remoteNotebooks);
      setNotebooks(remoteNotebooks);
      setActiveId((current) =>
        remoteNotebooks.some((notebook) => notebook.id === current)
          ? current
          : (remoteNotebooks[0]?.id ?? ""),
      );
      setNotebookSyncReady(true);
    });

    return subscribeToFirebaseNotebooks(user.id, (remoteNotebooks) => {
      writeLocalNotebooks(user.id, remoteNotebooks);
      setNotebooks(remoteNotebooks);
      setActiveId((current) =>
        remoteNotebooks.some((notebook) => notebook.id === current)
          ? current
          : (remoteNotebooks[0]?.id ?? ""),
      );
    });
  }, [user?.id]);

  useEffect(() => {
    if (!user || !notebookSyncReady) return;
    saveNotebooks(notebooks, user.id);
  }, [notebookSyncReady, notebooks, user]);

  useEffect(() => {
    if (activeNotebook) touchNotebook(activeNotebook.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  if (!user) return null;

  const createNotebook = () => {
    if (!notebookSyncReady) return;
    const subject = context.subject;
    const notebook: Notebook = {
      id: crypto.randomUUID(),
      title: UNTITLED_NOTEBOOK_TITLE,
      subject,
      examBoard: context.examBoard,
      qualification: context.qualification,
      paper: "All papers",
      topics: [],
      sources: [],
      chats: [],
      lastOpened: Date.now(),
    };
    setNotebooks((items) => [notebook, ...items]);
    setActiveId(notebook.id);
    toast.success("Notebook created");
  };

  const updateNotebook = (id: string, patch: Partial<Notebook>) => {
    setNotebooks((items) =>
      items.map((item) => (item.id === id ? { ...item, ...patch, lastOpened: Date.now() } : item)),
    );
  };

  const deleteNotebook = (id: string) => {
    const next = notebooks.filter((item) => item.id !== id);
    setNotebooks(next);
    setActiveId(next[0]?.id ?? "");
    toast.success("Notebook deleted");
  };

  const addTextSource = () => {
    if (!activeNotebook) return;
    if (!sourceText.trim()) {
      sourceTextRef.current?.focus();
      toast.warning("Type or paste a note first, then add it.");
      return;
    }
    const kind = "Note / source";
    const title =
      sourceTitle.trim() || inferSourceTitle(sourceText, kind, activeNotebook.sources.length + 1);
    const source = makeSource(title, kind, sourceText);
    const sources = [source, ...activeNotebook.sources];
    updateNotebook(activeNotebook.id, {
      title: shouldAutoNameNotebook(activeNotebook)
        ? `${context.subjectName} · ${context.syllabusCode}`
        : activeNotebook.title,
      sources,
      topics: [
        ...new Set([...activeNotebook.topics, ...source.chunks.flatMap((c) => c.topicTags)]),
      ],
    });
    if (!selectedTopic.trim()) setSelectedTopic(inferTopicFromText(sourceText));
    setSourceText("");
    setSourceTitle("");
    toast.success("Source added");
  };

  const deleteSource = (sourceId: string) => {
    if (!activeNotebook) return;
    updateNotebook(activeNotebook.id, {
      sources: activeNotebook.sources.filter((source) => source.id !== sourceId),
    });
  };

  const askSources = async (text = message) => {
    if (!activeNotebook || !text.trim()) return;
    const retrieved = retrieveChunks(text, allChunks);
    const userMessage: NotebookMessage = { role: "user", content: text.trim() };
    updateNotebook(activeNotebook.id, { chats: [...activeNotebook.chats, userMessage] });
    setMessage("");
    setLoading(true);
    const response = await askStudyNotebook({
      data: {
        subjectScope: scopeSearch(context),
        message: text,
        mode: "Ask Sources",
        notebook: {
          title: activeNotebook.title,
          examBoard: generationContext.selectedExamBoard,
          subject: generationContext.selectedSubject,
          topic: generationContext.selectedTopic,
          paper: activeNotebook.paper,
        },
        requestedOutputType: generationContext.requestedOutputType,
        selectedSources: groupChunksBySource(retrieved),
      },
    });
    updateNotebook(activeNotebook.id, {
      chats: [
        ...activeNotebook.chats,
        userMessage,
        {
          role: "assistant",
          content: response.reply,
          sourcesUsed: response.sourcesUsed,
          followUps: response.suggestedFollowUps,
        },
      ],
    });
    setLoading(false);
  };

  const runQuickAction = (action: string) => {
    if (!activeNotebook) return;
    if (action === "Create Flashcards" || action === "Regenerate Flashcards") {
      const cards = generateNotebookFlashcards(
        activeNotebook,
        selectedFlashcardChunks,
        selectedSourceOnly ? selectedSourceId : "all",
        generationContext,
      );
      if (cards.length === 0) {
        toast.warning(
          "No useful flashcards could be generated from this source. Try adding more detailed notes.",
        );
        return;
      }
      recordFlashcards(cards);
      toast.success(`${cards.length} useful flashcards saved`);
      setActivePanel("keywords");
      return;
    }
    if (action === "Generate Exam Questions") {
      setGeneratedQuestions(makeQuestions(activeNotebook, allChunks, generationContext));
      setActivePanel("questions");
      toast.success("Exam questions generated");
      return;
    }
    if (action === "Extract Keywords") {
      setActivePanel("keywords");
      return;
    }
    if (action === "Create Mind Map" || action === "Regenerate Mind Map") {
      const mindMap = buildMindMap(selectedFlashcardChunks, generationContext);
      if (mindMap.message) {
        toast.warning(mindMap.message);
      } else if (action === "Regenerate Mind Map") {
        toast.success("Mind map regenerated from source content");
      }
      setActivePanel("mindmap");
      return;
    }
    setActivePanel("summary");
    askSources(action);
  };

  const uploadFile = async (file: File) => {
    if (!activeNotebook) return;
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (["txt", "md", "markdown"].includes(ext)) {
      const text = await file.text();
      const source = makeSource(file.name, ext.toUpperCase(), text);
      updateNotebook(activeNotebook.id, {
        title: shouldAutoNameNotebook(activeNotebook)
          ? `${context.subjectName} · ${context.syllabusCode}`
          : activeNotebook.title,
        sources: [source, ...activeNotebook.sources],
        topics: [
          ...new Set([...activeNotebook.topics, ...source.chunks.flatMap((c) => c.topicTags)]),
        ],
      });
      if (!selectedTopic.trim()) setSelectedTopic(inferTopicFromText(text));
      toast.success("Text source uploaded");
      return;
    }
    const source = makeSource(file.name, ext.toUpperCase() || "File", "");
    source.status = "Error";
    source.text = "PDF/DOCX parsing is coming soon. Paste the key text for now.";
    updateNotebook(activeNotebook.id, { sources: [source, ...activeNotebook.sources] });
    toast.warning("File parsing coming soon. Paste notes for now.");
  };

  if (!activeNotebook) {
    return (
      <div className="animate-enter grid min-h-[60vh] place-items-center">
        <div className="max-w-lg rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
          <BookOpen className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            {view === "notes" ? "Revision Notes" : "Notebook"} · {context.subjectName}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Create source-grounded notebooks for notes, syllabus extracts, markschemes, and revision
            material.
          </p>
          <button
            type="button"
            onClick={createNotebook}
            disabled={!notebookSyncReady}
            className="interactive-button mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            {notebookSyncReady ? "Create your first notebook" : "Loading notebooks…"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-enter relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 rounded-full bg-gradient-to-r from-primary/12 via-accent/10 to-sky-400/10 blur-3xl" />
      <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="glass-card rounded-3xl border border-border bg-card/90 p-4 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Notebooks</h2>
            <button
              type="button"
              onClick={createNotebook}
              disabled={!notebookSyncReady}
              className="interactive-button grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="stagger-grid mt-4 space-y-2">
            {scopedNotebooks.map((notebook) => (
              <button
                key={notebook.id}
                type="button"
                onClick={() => setActiveId(notebook.id)}
                className={`interactive-card w-full rounded-2xl border p-3 text-left ${
                  notebook.id === activeNotebook.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background/70 hover:bg-secondary"
                }`}
              >
                <div className="font-semibold">{notebook.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {notebook.subject} · {notebook.paper}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2 py-0.5">
                    {notebook.sources.length} sources
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-0.5">
                    {new Date(notebook.lastOpened).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <main className="space-y-5">
          <section className="glass-card rounded-3xl border border-border bg-card/90 p-5 shadow-soft">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{activeNotebook.title}</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {context.boardName} · {context.subjectName} · {activeNotebook.paper}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>{activeNotebook.sources.length} sources</Badge>
                  <Badge>{allChunks.length} chunks</Badge>
                  <Badge>AI: source-grounded</Badge>
                  {activeNotebook.topics.slice(0, 5).map((topic) => (
                    <Badge key={topic}>{topic}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const title = window.prompt("Rename notebook", activeNotebook.title);
                    if (title) updateNotebook(activeNotebook.id, { title });
                  }}
                  className="rounded-full border border-border px-3 py-2 text-sm hover:bg-secondary"
                >
                  Rename
                </button>
                <button
                  type="button"
                  onClick={() => deleteNotebook(activeNotebook.id)}
                  className="rounded-full border border-destructive/30 px-3 py-2 text-sm text-destructive hover:bg-destructive/10"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              <div className="text-sm font-semibold text-muted-foreground">
                Exam board
                <p className="mt-1 rounded-xl border border-border bg-secondary/30 px-3 py-2 text-foreground">
                  {context.boardName} {context.syllabusCode}
                </p>
              </div>
              <div className="text-sm font-semibold text-muted-foreground">
                Subject
                <p className="mt-1 rounded-xl border border-border bg-secondary/30 px-3 py-2 text-foreground">
                  {context.subjectName}
                </p>
              </div>
              <label className="text-xs font-semibold text-muted-foreground">
                Topic
                <input
                  value={selectedTopic}
                  onChange={(event) => setSelectedTopic(event.target.value)}
                  placeholder={activeNotebook.topics[0] || "e.g. Electrolysis"}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground"
                />
              </label>
              <label className="text-xs font-semibold text-muted-foreground">
                Output type
                <select
                  value={requestedOutputType}
                  onChange={(event) => {
                    const value = event.target.value as NotebookOutputType;
                    setRequestedOutputType(value);
                    if (value === "mindmap") setActivePanel("mindmap");
                    if (value === "summary" || value === "notes") setActivePanel("summary");
                    if (value === "quiz") setActivePanel("questions");
                    if (value === "flashcards") setActivePanel("keywords");
                  }}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground"
                >
                  <option value="notes">Notes</option>
                  <option value="summary">Summary</option>
                  <option value="flashcards">Flashcards</option>
                  <option value="mindmap">Mind Map</option>
                  <option value="quiz">Quiz</option>
                </select>
              </label>
            </div>
          </section>

          {activeNotebook.sources.length === 0 && (
            <section className="rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center">
              <FilePlus className="mx-auto h-9 w-9 text-primary" />
              <h2 className="mt-3 text-xl font-semibold">Add sources to start studying</h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
                Paste notes, upload documents, or add your own revision material. MarkWise will help
                you turn them into summaries, flashcards, and exam questions.
              </p>
            </section>
          )}

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <section className="glass-card rounded-3xl border border-border bg-card/90 p-5 shadow-soft">
              <h2 className="flex items-center gap-2 font-semibold">
                <Layers className="h-4 w-4 text-primary" /> Sources
              </h2>
              <div className="mt-4 grid gap-3">
                <input
                  value={sourceTitle}
                  onChange={(event) => setSourceTitle(event.target.value)}
                  placeholder="Source title"
                  className="rounded-xl border border-input bg-background px-3 py-2 text-sm"
                />
                <textarea
                  ref={sourceTextRef}
                  value={sourceText}
                  onChange={(event) => setSourceText(event.target.value)}
                  placeholder="Paste notes, markscheme text, syllabus points, or revision material..."
                  rows={5}
                  className="rounded-2xl border border-input bg-background px-3 py-2 text-sm"
                />
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={addTextSource}
                    className="interactive-button rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
                  >
                    Add Note / Source
                  </button>
                  <label className="interactive-button cursor-pointer rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">
                    Upload File
                    <input
                      type="file"
                      accept=".txt,.md,.markdown,.pdf,.docx"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) uploadFile(file);
                      }}
                    />
                  </label>
                </div>
                {activeNotebook.sources.length > 0 && (
                  <div className="rounded-2xl border border-border bg-background/70 p-3">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <input
                        type="checkbox"
                        checked={selectedSourceOnly}
                        onChange={(event) => setSelectedSourceOnly(event.target.checked)}
                        className="h-4 w-4 accent-primary"
                      />
                      Generate from selected source only
                    </label>
                    <select
                      value={selectedSourceId}
                      onChange={(event) => {
                        setSelectedSourceId(event.target.value);
                        setSelectedSourceOnly(event.target.value !== "all");
                      }}
                      className="mt-3 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="all">All sources</option>
                      {activeNotebook.sources.map((source) => (
                        <option key={source.id} value={source.id}>
                          {source.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <div className="stagger-grid mt-5 space-y-3">
                {activeNotebook.sources.map((source) => (
                  <div
                    key={source.id}
                    className="interactive-card rounded-2xl border border-border bg-background/70 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold">{source.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {source.type} · {source.wordCount} words ·{" "}
                          {new Date(source.addedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteSource(source.id)}
                        className="rounded-full p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge>{source.status}</Badge>
                      <Badge>{source.chunks.length} chunks</Badge>
                      {source.chunks[0]?.keywords.slice(0, 4).map((keyword) => (
                        <Badge key={keyword}>{keyword}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card flex min-h-[620px] flex-col rounded-3xl border border-border bg-card/90 shadow-soft">
              <div className="border-b border-border p-5">
                <h2 className="flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-4 w-4 text-primary" /> Ask your sources
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action}
                      type="button"
                      onClick={() => runQuickAction(action)}
                      className="interactive-card rounded-2xl border border-border bg-background/80 p-3 text-left text-xs font-semibold hover:border-primary/40"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto p-5">
                {activeNotebook.chats.map((chat, index) => (
                  <div key={index} className={chat.role === "user" ? "text-right" : ""}>
                    <div
                      className={`inline-block max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        chat.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                      }`}
                    >
                      {chat.content}
                    </div>
                    {chat.sourcesUsed && chat.sourcesUsed.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {chat.sourcesUsed.map((source) => (
                          <Badge key={`${source.sourceTitle}-${source.section}`}>
                            {source.sourceTitle}, {source.section}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {chat.followUps && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {chat.followUps.map((followUp) => (
                          <button
                            key={followUp}
                            type="button"
                            onClick={() => askSources(followUp)}
                            className="rounded-full border border-border px-2.5 py-1 text-xs hover:bg-secondary"
                          >
                            {followUp}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 animate-pulse-soft text-primary" />
                    Study Notebook is reading your sources...
                  </div>
                )}
              </div>
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") askSources();
                    }}
                    placeholder="Ask about your sources..."
                    className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => askSources()}
                    className="interactive-button rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
                  >
                    Ask
                  </button>
                </div>
              </div>
            </section>
          </div>

          <NotebookOutput
            panel={activePanel}
            summary={summary}
            keywordRows={keywordRows}
            questions={generatedQuestions}
            chunks={selectedFlashcardChunks}
            context={generationContext}
            onRegenerateMindMap={() => {
              const mindMap = buildMindMap(selectedFlashcardChunks, generationContext);
              if (mindMap.message) toast.warning(mindMap.message);
              else toast.success("Mind map regenerated from source content");
              setActivePanel("mindmap");
            }}
            onClearBadMindMap={() => {
              localStorage.removeItem("markwise:study-notebook:mindmap");
              toast.success("Bad generated mind map cleared");
              setActivePanel("mindmap");
            }}
          />

          <div className="grid gap-3 md:grid-cols-4">
            <Link
              to="/app/practice"
              className="rounded-2xl border border-border bg-card p-4 text-sm font-semibold hover:bg-secondary"
            >
              Send to Practice
            </Link>
            <Link
              to="/app/mini-paper"
              className="rounded-2xl border border-border bg-card p-4 text-sm font-semibold hover:bg-secondary"
            >
              Send to Mini Paper
            </Link>
            <Link
              to="/app/flashcards"
              className="rounded-2xl border border-border bg-card p-4 text-sm font-semibold hover:bg-secondary"
            >
              Save as Flashcards
            </Link>
            <Link
              to="/app/ai-tutor"
              className="rounded-2xl border border-border bg-card p-4 text-sm font-semibold hover:bg-secondary"
            >
              Save to AI Notes
            </Link>
          </div>

          <p className="rounded-2xl border border-border bg-card p-4 text-xs text-muted-foreground">
            Study Notebook answers are based on your uploaded sources and AI interpretation. Always
            check official specifications, teachers, or markschemes for final exam accuracy.
          </p>
        </main>
      </div>
    </div>
  );
}

function NotebookOutput({
  panel,
  summary,
  keywordRows,
  questions,
  chunks,
  context,
  onRegenerateMindMap,
  onClearBadMindMap,
}: {
  panel: "summary" | "keywords" | "questions" | "mindmap";
  summary: ReturnType<typeof buildSummary>;
  keywordRows: ReturnType<typeof buildKeywordRows>;
  questions: GeneratedQuestion[];
  chunks: SourceChunk[];
  context: NotebookGenerationContext;
  onRegenerateMindMap: () => void;
  onClearBadMindMap: () => void;
}) {
  if (panel === "keywords") {
    return (
      <section className="glass-card rounded-3xl border border-border bg-card p-5 shadow-soft">
        <h2 className="flex items-center gap-2 font-semibold">
          <Search className="h-4 w-4 text-primary" /> Extracted Keywords
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {keywordRows.slice(0, 12).map((row) => (
            <div key={row.keyword} className="rounded-2xl border border-border bg-secondary/30 p-4">
              <div className="font-semibold text-primary">{row.keyword}</div>
              <p className="mt-1 text-sm">{row.definition}</p>
              <p className="mt-2 text-xs text-muted-foreground">Source: {row.source}</p>
              <p className="mt-2 text-xs">Exam sentence: {row.examSentence}</p>
              <p className="mt-1 text-xs text-warning">Common mistake: {row.commonMistake}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (panel === "questions") {
    return (
      <section className="glass-card rounded-3xl border border-border bg-card p-5 shadow-soft">
        <h2 className="flex items-center gap-2 font-semibold">
          <FileText className="h-4 w-4 text-primary" /> Exam Questions From Sources
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {questions.map((question) => (
            <div
              key={question.question}
              className="rounded-2xl border border-border bg-secondary/30 p-4"
            >
              <div className="text-xs font-semibold text-primary">
                {question.commandWord} · {question.marks} marks
              </div>
              <p className="mt-2 font-semibold">{question.question}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {question.markschemePoints.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">{question.modelAnswer}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Source used: {question.sourceUsed}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (panel === "mindmap") {
    const mindMap = buildMindMap(chunks, context);
    return (
      <section className="glass-card rounded-3xl border border-border bg-card p-5 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="flex items-center gap-2 font-semibold">
            <Network className="h-4 w-4 text-primary" /> Mind Map
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onRegenerateMindMap}
              className="interactive-button rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              Regenerate Mind Map
            </button>
            <button
              type="button"
              onClick={onClearBadMindMap}
              className="interactive-button rounded-full border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive hover:bg-destructive/15"
            >
              Clear bad generated mind map
            </button>
          </div>
        </div>

        {mindMap.message ? (
          <div className="mt-4 rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm text-warning-foreground">
            {mindMap.message}
          </div>
        ) : (
          <div className="mt-5 rounded-3xl bg-secondary/25 p-4 md:p-6">
            <div className="mx-auto max-w-xl rounded-2xl bg-primary px-5 py-4 text-center text-primary-foreground shadow-glow">
              <div className="text-lg font-bold">{mindMap.center.label}</div>
              <p className="mt-1 text-sm opacity-90">{mindMap.center.description}</p>
            </div>

            <div className="stagger-grid mt-6 grid gap-4 lg:grid-cols-2">
              {mindMap.branches.map((branch) => (
                <article
                  key={branch.label}
                  title={branch.description}
                  className="interactive-card rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10">
                      <Brain className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">{branch.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {branch.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {branch.children.map((child) => (
                      <details
                        key={`${branch.label}-${child.label}`}
                        title={child.description}
                        className="rounded-2xl border border-border bg-background/80 p-3 text-sm open:bg-primary/5"
                      >
                        <summary className="cursor-pointer list-none font-semibold">
                          {child.label}
                        </summary>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {child.description}
                        </p>
                      </details>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="glass-card rounded-3xl border border-border bg-card p-5 shadow-soft">
      <h2 className="font-semibold">Source Summary</h2>
      {summary.message ? (
        <div className="mt-4 rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm text-warning-foreground">
          {summary.message}
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <SummaryCard title="Short summary">
              <p className="text-sm leading-relaxed">{summary.shortSummary}</p>
            </SummaryCard>
            <SummaryCard title="Detailed summary">
              <div className="space-y-2">
                {summary.detailedSummary.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SummaryCard>
          </div>

          <SummaryCard title="Key terms">
            <div className="grid gap-3 md:grid-cols-2">
              {summary.keyTerms.map((item) => (
                <div
                  key={item.term}
                  className="rounded-2xl border border-border bg-background/70 p-3"
                >
                  <div className="font-semibold text-primary">{item.term}</div>
                  <p className="mt-1 text-sm leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </SummaryCard>

          <SummaryCard title="Must-know exam phrases">
            <ul className="grid gap-2 md:grid-cols-2">
              {summary.mustKnowExamPhrases.map((phrase) => (
                <li key={phrase} className="rounded-2xl bg-primary/10 px-3 py-2 text-sm">
                  {phrase}
                </li>
              ))}
            </ul>
          </SummaryCard>

          <div className="grid gap-4 lg:grid-cols-2">
            <SummaryCard title="Common mistakes">
              <div className="space-y-3">
                {summary.commonMistakes.map((mistake) => (
                  <div
                    key={mistake.weakAnswer}
                    className="rounded-2xl border border-border bg-background/70 p-3"
                  >
                    <p className="text-sm">
                      <span className="font-semibold text-destructive">Weak:</span>{" "}
                      {mistake.weakAnswer}
                    </p>
                    <p className="mt-2 text-sm">
                      <span className="font-semibold text-success">Better:</span>{" "}
                      {mistake.betterAnswer}
                    </p>
                  </div>
                ))}
              </div>
            </SummaryCard>

            <SummaryCard title="Possible exam questions">
              <div className="space-y-3">
                {summary.possibleExamQuestions.map((question) => (
                  <div
                    key={question.question}
                    className="rounded-2xl border border-border bg-background/70 p-3"
                  >
                    <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-primary">
                      <Badge>{question.commandWord}</Badge>
                      <Badge>{question.topic}</Badge>
                      <Badge>{question.marks} marks</Badge>
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-relaxed">
                      {question.question}
                    </p>
                  </div>
                ))}
              </div>
            </SummaryCard>
          </div>
        </div>
      )}
    </section>
  );
}

function SummaryCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed">{body || "Add sources to generate this."}</p>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function makeSource(title: string, type: string, text: string): NotebookSource {
  const id = crypto.randomUUID();
  const chunks = chunkText(text).map((chunkText, index) => ({
    id: `${id}:${index}`,
    sourceId: id,
    sourceTitle: title,
    chunkText,
    topicTags: detectTopicTags(chunkText),
    keywords: extractKeywords(chunkText).slice(0, 8),
  }));
  return {
    id,
    title,
    type,
    text,
    addedAt: Date.now(),
    wordCount: countWords(text),
    status: "Ready",
    chunks,
  };
}

function shouldAutoNameNotebook(notebook: Notebook) {
  return notebook.title === UNTITLED_NOTEBOOK_TITLE || isOldEmptyAutoTitle(notebook);
}

function isOldEmptyAutoTitle(notebook: Notebook) {
  return (
    notebook.sources.length === 0 &&
    /^(edexcel|cambridge|aqa|ocr|igcse|gcse).+notebook$/i.test(notebook.title)
  );
}

function inferNotebookTitle(notebook: Notebook, text: string, boardName: string) {
  const subject = inferSubjectName(text, notebook.subject);
  return `${shortBoardName(inferBoardName(text, boardName))} ${subject}`;
}

function inferSourceTitle(text: string, kind: string, fallbackIndex: number) {
  const keywords = extractKeywords(text).slice(0, 3);
  if (keywords.length > 0) {
    return keywords.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  return `${kind} ${fallbackIndex}`;
}

function resolveExamBoardId(boardName: string | undefined, fallback: ExamBoardId): ExamBoardId {
  const found = EXAM_BOARDS.find(
    (board) => board.id === boardName || board.name.toLowerCase() === boardName?.toLowerCase(),
  );
  return found?.id ?? fallback;
}

function inferTopicFromChunks(chunks: SourceChunk[]) {
  return inferTopicFromText(chunks.map((chunk) => chunk.chunkText).join(" "));
}

function inferTopicFromText(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("electrolysis")) return "Electrolysis";
  if (lower.includes("cathode") || lower.includes("anode")) return "Electrolysis";
  if (lower.includes("enzyme") || lower.includes("active site")) return "Enzymes";
  if (lower.includes("respiration")) return "Respiration";
  if (lower.includes("eutrophication")) return "Eutrophication";
  if (lower.includes("meiosis") || lower.includes("genotype")) return "Inheritance";
  return "";
}

function inferBoardName(text: string, fallback: string) {
  const lower = `${text} ${fallback}`.toLowerCase();
  if (/(cambridge|caie|cie)/.test(lower)) return "Cambridge IGCSE";
  if (/(edexcel|pearson)/.test(lower)) return "Edexcel IGCSE";
  if (/\baqa\b/.test(lower)) return "AQA GCSE";
  if (/\bocr\b/.test(lower)) return "OCR GCSE";
  return fallback;
}

function shortBoardName(boardName: string) {
  if (/cambridge/i.test(boardName)) return "Cambridge";
  if (/edexcel|pearson/i.test(boardName)) return "Edexcel";
  if (/aqa/i.test(boardName)) return "AQA";
  if (/ocr/i.test(boardName)) return "OCR";
  return boardName.replace("International GCSE", "IGCSE").replace(/\s+GCSE$/i, "");
}

function inferSubjectName(text: string, fallbackSubject: string) {
  const lower = text.toLowerCase();
  const subjectSignals: { name: string; terms: string[] }[] = [
    {
      name: "Biology",
      terms: ["biology", "cell", "enzyme", "photosynthesis", "respiration", "ecology", "genetic"],
    },
    {
      name: "Chemistry",
      terms: ["chemistry", "atom", "ion", "electrolysis", "acid", "alkane", "reaction rate"],
    },
    {
      name: "Physics",
      terms: ["physics", "force", "energy", "wave", "circuit", "voltage", "momentum"],
    },
    {
      name: "Maths",
      terms: ["maths", "mathematics", "algebra", "trigonometry", "quadratic", "histogram"],
    },
    {
      name: "Computer Science",
      terms: ["computer science", "algorithm", "binary", "python", "network", "programming"],
    },
    {
      name: "Business",
      terms: ["business", "cash flow", "marketing", "stakeholder", "enterprise", "profit"],
    },
    {
      name: "Economics",
      terms: ["economics", "demand", "supply", "inflation", "exchange rate", "market"],
    },
    {
      name: "Geography",
      terms: ["geography", "river", "coastal", "urban", "tectonic", "climate"],
    },
    {
      name: "History",
      terms: ["history", "source utility", "provenance", "treaty", "revolution", "empire"],
    },
    {
      name: "English",
      terms: ["english", "language", "literature", "poem", "novel", "writer's methods"],
    },
  ];
  return (
    subjectSignals.find((subject) => subject.terms.some((term) => lower.includes(term)))?.name ??
    fallbackSubject
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

function chunkText(text: string) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const chunks = [];
  for (let i = 0; i < words.length; i += 140) chunks.push(words.slice(i, i + 140).join(" "));
  return chunks;
}

function retrieveChunks(query: string, chunks: SourceChunk[]) {
  const terms = extractKeywords(query).slice(0, 8);
  return [...chunks]
    .map((chunk) => ({
      chunk,
      score: terms.reduce(
        (sum, term) => sum + (chunk.chunkText.toLowerCase().includes(term) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.chunk);
}

function groupChunksBySource(chunks: SourceChunk[]) {
  const map = new Map<string, string[]>();
  for (const chunk of chunks) {
    map.set(chunk.sourceTitle, [...(map.get(chunk.sourceTitle) ?? []), chunk.chunkText]);
  }
  return [...map.entries()].map(([sourceTitle, chunks]) => ({ sourceTitle, chunks }));
}

function cleanNotebookSourceContent(text: string) {
  return text
    .replace(/#{1,6}\s*/g, "")
    .replace(/\b(edexcel|cambridge|aqa|ocr)\s+(international\s+)?(igcse|gcse)\b/gi, "")
    .replace(/\b(igcse|gcse)\s+(biology|chemistry|physics|maths)\s+paper\s+\d+\b/gi, "")
    .replace(/\b(topic|paper|notes|demo notes|source title|exam board|subject):?\s*\d*/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSummary(chunks: SourceChunk[], context: NotebookGenerationContext) {
  const sourceContent = cleanNotebookSourceContent(
    chunks.map((chunk) => chunk.chunkText).join(" "),
  );
  if (sourceContent.length < 300 || isMostlyMetadata(sourceContent)) {
    return emptySummary("Add detailed source notes before generating a summary.");
  }

  const detected = detectSummaryConcepts(sourceContent, context);
  if (detected.length === 0) {
    return emptySummary(
      `Add more ${context.selectedSubject} notes for ${context.selectedTopic} before generating this output.`,
    );
  }

  const keyTerms = detected.slice(0, 8).map(({ term, definition }) => ({ term, definition }));
  const mustKnowExamPhrases = detected.flatMap((concept) => concept.examPhrases).slice(0, 8);
  const commonMistakes = detected.flatMap((concept) => concept.commonMistakes).slice(0, 5);
  const possibleExamQuestions = detected.flatMap((concept) => concept.questions).slice(0, 6);
  const topicList = detected.map((concept) => concept.topic).filter(uniqueByValue);

  const summary = {
    message: "",
    shortSummary: `These notes cover key IGCSE content including ${joinList(topicList.slice(0, 8))}. They focus on exam wording, common mistakes, and markscheme-style phrases.`,
    detailedSummary: makeDetailedSummary(detected),
    keyTerms,
    mustKnowExamPhrases,
    commonMistakes,
    possibleExamQuestions,
  };

  return validateSummary(summary)
    ? summary
    : emptySummary(
        "The generated summary was low quality. Please regenerate or check that your source contains detailed revision notes.",
      );
}

function buildMindMap(chunks: SourceChunk[], context: NotebookGenerationContext): MindMapData {
  const sourceContent = cleanNotebookSourceContent(
    chunks.map((chunk) => chunk.chunkText).join(" "),
  );
  if (sourceContent.length < 300 || isMostlyMetadata(sourceContent)) {
    return emptyMindMap("Add detailed source notes before generating a mind map.");
  }

  const lower = sourceContent.toLowerCase();
  let branches: MindMapBranch[] = [];

  if (isChemistryContext(context, sourceContent)) {
    branches = buildChemistryMindMapBranches(lower);
  } else if (isBiologyContext(context, sourceContent)) {
    branches = buildBiologyMindMapBranches(lower);
  }

  const mindMap = {
    message: "",
    center: {
      label: `${context.selectedSubject} ${context.selectedTopic} Revision`,
      description: `${context.selectedExamBoard} concepts from your uploaded source text.`,
    },
    branches: branches.filter((branch) => validateMindMapBranch(branch, context, sourceContent)),
  };

  if (hasSubjectMismatch(mindMap, context, sourceContent)) {
    return emptyMindMap("Generated output did not match your selected subject. Regenerating...");
  }

  return validateMindMap(mindMap, context, sourceContent)
    ? mindMap
    : emptyMindMap(
        `Add more ${context.selectedSubject} notes for ${context.selectedTopic} before generating a mind map.`,
      );
}

function buildChemistryMindMapBranches(lower: string) {
  const branches: MindMapBranch[] = [];

  if (
    lower.includes("electrolysis") ||
    lower.includes("electrode") ||
    lower.includes("cathode") ||
    lower.includes("anode")
  ) {
    branches.push(
      makeMindMapBranch(
        "Electrolysis definition",
        "The decomposition of an ionic compound using electricity.",
        [
          [
            "Ionic compound",
            "Contains positive and negative ions that can move when molten or dissolved.",
          ],
          ["Electric current", "Provides energy for ions to gain or lose electrons."],
          ["Decomposition", "The compound is broken down into simpler substances."],
          ["Electrolyte", "The molten or aqueous ionic substance that conducts electricity."],
        ],
      ),
      makeMindMapBranch("Electrodes", "Conductors that connect the electrolyte to the circuit.", [
        ["Cathode", "The negative electrode where positive ions gain electrons."],
        ["Anode", "The positive electrode where negative ions lose electrons."],
        ["Inert electrodes", "Graphite or platinum electrodes that do not react in the process."],
        ["Electron transfer", "Reduction occurs at the cathode and oxidation occurs at the anode."],
      ]),
      makeMindMapBranch(
        "Molten compounds",
        "Molten ionic compounds contain only the compound's own mobile ions.",
        [
          ["Mobile ions", "Ions are free to move when the solid ionic lattice melts."],
          ["Metal at cathode", "Positive metal ions are reduced to metal atoms."],
          ["Non-metal at anode", "Negative ions are oxidised to non-metal atoms or molecules."],
          ["No water present", "There are no hydrogen or hydroxide ions competing for discharge."],
        ],
      ),
      makeMindMapBranch(
        "Aqueous solutions",
        "Water adds hydrogen and hydroxide ions, so discharge depends on reactivity.",
        [
          [
            "Hydrogen ions",
            "Hydrogen may form at the cathode if the metal is more reactive than hydrogen.",
          ],
          ["Hydroxide ions", "Oxygen often forms at the anode unless a halide ion is present."],
          ["Halide ions", "Chloride, bromide, or iodide ions form halogen molecules at the anode."],
          ["Reactivity series", "Helps predict whether a metal or hydrogen is produced."],
        ],
      ),
      makeMindMapBranch("Half equations", "Show electron gain or loss at each electrode.", [
        ["Reduction", "Gain of electrons at the cathode."],
        ["Oxidation", "Loss of electrons at the anode."],
        ["Balance charge", "Electrons are added to balance the ionic charges."],
        ["State symbols", "Use state symbols when the question asks for them."],
      ]),
      makeMindMapBranch(
        "Aluminium extraction",
        "Aluminium oxide is electrolysed when molten in cryolite.",
        [
          ["Aluminium oxide", "The ionic compound that provides aluminium ions."],
          ["Cryolite", "Lowers the melting point and reduces energy costs."],
          ["Molten electrolyte", "Allows ions to move to the electrodes."],
          ["Carbon anodes", "React with oxygen and must be replaced."],
        ],
      ),
      makeMindMapBranch(
        "Brine electrolysis",
        "Electrolysis of concentrated sodium chloride solution.",
        [
          ["Chlorine", "Produced at the anode from chloride ions."],
          ["Hydrogen", "Produced at the cathode from hydrogen ions."],
          ["Sodium hydroxide", "Left in solution after electrolysis."],
          ["Industrial products", "Chlorine, hydrogen, and sodium hydroxide are useful chemicals."],
        ],
      ),
      makeMindMapBranch("Exam tips", "Use electrode language and electron transfer precisely.", [
        ["Name the electrode", "State whether the process happens at the cathode or anode."],
        ["Use ion charges", "Show the correct ion charge in equations."],
        ["Explain movement", "Ions move to oppositely charged electrodes."],
        ["Do not say atoms flow", "Current in the electrolyte is carried by ions, not atoms."],
      ]),
    );
  }

  return branches;
}

function buildBiologyMindMapBranches(lower: string) {
  const branches: MindMapBranch[] = [];

  if (lower.includes("enzyme") || lower.includes("active site") || lower.includes("substrate")) {
    branches.push(
      makeMindMapBranch(
        "Enzymes",
        "Biological catalysts that speed up reactions without being used up.",
        [
          ["Biological catalysts", "Enzymes increase the rate of reactions and are reusable."],
          ["Active site", "The part of the enzyme where the substrate binds."],
          ["Substrate", "The molecule that fits into the enzyme active site."],
          [
            "Enzyme-substrate complex",
            "Forms when the substrate binds to the active site before products are released.",
          ],
          [
            "Optimum temperature",
            "The temperature where enzyme activity is fastest before denaturation risk increases.",
          ],
          [
            "Denaturation",
            "The active site changes shape so the substrate is no longer complementary.",
          ],
        ],
      ),
    );
  }

  if (lower.includes("bile") || lower.includes("emulsif") || lower.includes("lipase")) {
    branches.push(
      makeMindMapBranch(
        "Digestion and Bile",
        "Bile helps fat digestion by neutralising acid and emulsifying fats.",
        [
          ["Liver", "Bile is produced by the liver."],
          ["Gall bladder", "Bile is stored in the gall bladder before release."],
          ["Neutralises stomach acid", "Bile makes conditions less acidic for intestinal enzymes."],
          ["Emulsifies fats", "Large fat globules are broken into smaller droplets."],
          ["Increases surface area", "Small droplets give lipase more surface area to act on."],
          ["Lipase", "The enzyme that digests lipids into fatty acids and glycerol."],
        ],
      ),
    );
  }

  if (lower.includes("respiration") || lower.includes("glucose")) {
    branches.push(
      makeMindMapBranch("Respiration", "A reaction that releases energy from glucose.", [
        ["Glucose", "The fuel broken down during respiration."],
        ["Oxygen", "Used in aerobic respiration to release energy efficiently."],
        ["Carbon dioxide", "A product of aerobic respiration."],
        ["Water", "A product of aerobic respiration."],
        ["Releases energy", "Energy is released for movement, active transport, and growth."],
        ["Life processes", "Released energy is used by cells for essential processes."],
      ]),
    );
  }

  if (
    lower.includes("deforestation") ||
    lower.includes("photosynthesis") ||
    lower.includes("greenhouse")
  ) {
    branches.push(
      makeMindMapBranch(
        "Ecology",
        "Human and biological processes that affect carbon dioxide and climate.",
        [
          ["Deforestation", "Removal of trees reduces carbon dioxide uptake."],
          ["Photosynthesis", "Plants remove carbon dioxide from the atmosphere."],
          ["Carbon dioxide", "A greenhouse gas linked to global warming."],
          ["Greenhouse gas", "A gas that absorbs outgoing infrared radiation."],
          ["Infrared radiation", "Radiation trapped by greenhouse gases in the atmosphere."],
          ["Global warming", "The increase in average global temperature."],
        ],
      ),
    );
  }

  if (lower.includes("eutrophication") || (lower.includes("nitrate") && lower.includes("algae"))) {
    branches.push(
      makeMindMapBranch(
        "Eutrophication",
        "Excess nitrates cause algal growth, oxygen loss, and aquatic animal death.",
        [
          ["Fertilisers", "May be washed from fields into rivers or lakes."],
          ["Nitrates", "Mineral ions that increase algal growth."],
          ["Algal bloom", "Rapid algae growth that covers the water surface."],
          ["Light blocked", "Aquatic plants cannot photosynthesise effectively."],
          ["Decomposers", "Bacteria break down dead plants and algae."],
          ["Oxygen decrease", "Decomposers respire, reducing dissolved oxygen."],
          ["Fish death", "Fish die when oxygen levels become too low."],
        ],
      ),
    );
  }

  if (
    lower.includes("meiosis") ||
    lower.includes("haploid") ||
    lower.includes("genotype") ||
    lower.includes("phenotype")
  ) {
    branches.push(
      makeMindMapBranch(
        "Inheritance and Meiosis",
        "How genetic information is passed on and varied in sexual reproduction.",
        [
          ["Gene", "A section of DNA that codes for a characteristic."],
          ["Allele", "A version of a gene."],
          ["Genotype", "The alleles an organism has."],
          ["Phenotype", "The observable characteristic produced by genes and environment."],
          ["Haploid gametes", "Sex cells with half the normal chromosome number."],
          ["Diploid zygote", "The fertilised cell with chromosomes restored in pairs."],
          [
            "Genetic variation",
            "Differences between offspring produced by meiosis and fertilisation.",
          ],
        ],
      ),
    );
  }

  if (
    lower.includes("reliability") ||
    lower.includes("independent variable") ||
    lower.includes("dependent variable") ||
    lower.includes("control variable") ||
    lower.includes("accuracy")
  ) {
    branches.push(
      makeMindMapBranch(
        "Practical Skills",
        "Planning and evaluating investigations using variables, repeats, and measurements.",
        [
          ["Independent variable", "The variable deliberately changed by the student."],
          ["Dependent variable", "The variable measured as the result."],
          ["Control variables", "Variables kept the same to make the test fair."],
          ["Reliability", "Consistency improved by repeats and calculating a mean."],
          ["Accuracy", "How close a measurement is to the true value."],
          ["Repeat experiment", "Repeats help identify anomalies."],
          ["Calculate mean", "A mean reduces the effect of random error."],
        ],
      ),
    );
  }

  return branches;
}

function makeMindMapBranch(
  label: string,
  description: string,
  children: [string, string][],
): MindMapBranch {
  return {
    label,
    description,
    children: children.map(([childLabel, childDescription]) => ({
      label: childLabel,
      description: childDescription,
    })),
  };
}

function emptyMindMap(message: string): MindMapData {
  return {
    message,
    center: { label: "", description: "" },
    branches: [],
  };
}

function validateMindMap(
  mindMap: MindMapData,
  context: NotebookGenerationContext,
  sourceContent: string,
) {
  if (mindMap.message) return true;
  if (!mindMap.center.label || mindMap.branches.length === 0) return false;
  return mindMap.branches.every((branch) => validateMindMapBranch(branch, context, sourceContent));
}

function validateMindMapBranch(
  branch: MindMapBranch,
  context: NotebookGenerationContext,
  sourceContent: string,
) {
  if (isBannedMetadataPhrase(branch.label) || isBannedMetadataPhrase(branch.description)) {
    return false;
  }
  if (hasSubjectMismatch(branch, context, sourceContent)) return false;
  if (branch.children.length < 2) return false;
  return branch.children.every(
    (child) =>
      child.label.trim().length > 2 &&
      child.description.trim().length > 12 &&
      !isBannedMetadataPhrase(child.label) &&
      !isBannedMetadataPhrase(child.description) &&
      !hasSubjectMismatch(child, context, sourceContent),
  );
}

type SummaryConcept = {
  topic: string;
  term: string;
  definition: string;
  detail: string;
  examPhrases: string[];
  commonMistakes: { weakAnswer: string; betterAnswer: string }[];
  questions: { question: string; marks: number; topic: string; commandWord: string }[];
};

function emptySummary(message: string) {
  return {
    message,
    shortSummary: "",
    detailedSummary: "",
    keyTerms: [] as { term: string; definition: string }[],
    mustKnowExamPhrases: [] as string[],
    commonMistakes: [] as { weakAnswer: string; betterAnswer: string }[],
    possibleExamQuestions: [] as {
      question: string;
      marks: number;
      topic: string;
      commandWord: string;
    }[],
  };
}

function detectSummaryConcepts(
  sourceContent: string,
  context: NotebookGenerationContext,
): SummaryConcept[] {
  const lower = sourceContent.toLowerCase();
  const concepts: SummaryConcept[] = [];

  if (isChemistryContext(context, sourceContent)) {
    if (
      lower.includes("electrolysis") ||
      lower.includes("electrode") ||
      lower.includes("cathode") ||
      lower.includes("anode")
    ) {
      concepts.push({
        topic: "Electrolysis",
        term: "Electrolysis",
        definition: "The decomposition of an ionic compound using electricity.",
        detail:
          "Electrolysis uses an electric current to decompose molten or aqueous ionic compounds. Positive ions move to the cathode and gain electrons, while negative ions move to the anode and lose electrons.",
        examPhrases: [
          "Positive ions are attracted to the negative cathode and gain electrons.",
          "Negative ions are attracted to the positive anode and lose electrons.",
        ],
        commonMistakes: [
          {
            weakAnswer: "Electrolysis splits atoms using electricity.",
            betterAnswer:
              "Electrolysis decomposes ionic compounds using electricity as ions gain or lose electrons at electrodes.",
          },
        ],
        questions: [
          {
            question: "Explain what happens to ions during electrolysis.",
            marks: 4,
            topic: "Electrolysis",
            commandWord: "Explain",
          },
        ],
      });
      concepts.push({
        topic: "Electrolysis",
        term: "Half equation",
        definition: "An equation showing electron gain or electron loss at one electrode.",
        detail:
          "Half equations show oxidation or reduction. At the cathode, ions gain electrons; at the anode, ions lose electrons. The electrons must balance the ion charge.",
        examPhrases: [
          "Reduction is gain of electrons at the cathode.",
          "Oxidation is loss of electrons at the anode.",
        ],
        commonMistakes: [
          {
            weakAnswer: "Electrons are made at the cathode.",
            betterAnswer: "Electrons are transferred; positive ions gain electrons at the cathode.",
          },
        ],
        questions: [
          {
            question: "Write a half equation for the ion discharged at an electrode.",
            marks: 2,
            topic: "Electrolysis",
            commandWord: "Write",
          },
        ],
      });
    }
    return concepts.filter((concept) => !hasSubjectMismatch(concept, context, sourceContent));
  }

  if (!isBiologyContext(context, sourceContent)) return concepts;

  if (lower.includes("enzyme") || lower.includes("active site")) {
    concepts.push({
      topic: "Enzymes",
      term: "Enzyme",
      definition: "A biological catalyst that speeds up reactions without being used up.",
      detail:
        "Enzymes have specific active sites. Substrates bind to the active site to form enzyme-substrate complexes, and enzymes can be reused after the reaction.",
      examPhrases: [
        "The substrate is complementary to the active site.",
        "An enzyme-substrate complex forms when the substrate binds to the active site.",
      ],
      commonMistakes: [
        {
          weakAnswer: "The enzyme is used up.",
          betterAnswer: "The enzyme is not used up and can be reused after the reaction.",
        },
      ],
      questions: [
        {
          question: "Explain how an enzyme catalyses a reaction.",
          marks: 3,
          topic: "Enzymes",
          commandWord: "Explain",
        },
      ],
    });
  }

  if (lower.includes("denature") || lower.includes("temperature") || lower.includes("optimum")) {
    concepts.push({
      topic: "Enzymes",
      term: "Denatured",
      definition: "When the enzyme active site changes shape so the substrate no longer fits.",
      detail:
        "Enzyme activity increases with temperature up to an optimum. At high temperatures, enzymes denature because the active site changes shape, so fewer enzyme-substrate complexes form.",
      examPhrases: [
        "The enzyme denatures because the active site changes shape.",
        "The substrate is no longer complementary to the active site.",
      ],
      commonMistakes: [
        {
          weakAnswer: "The enzyme dies.",
          betterAnswer: "The enzyme denatures because the active site changes shape.",
        },
      ],
      questions: [
        {
          question: "Explain why enzyme activity decreases at high temperatures.",
          marks: 3,
          topic: "Enzymes",
          commandWord: "Explain",
        },
      ],
    });
  }

  if (lower.includes("bile") || lower.includes("emulsif") || lower.includes("lipase")) {
    concepts.push({
      topic: "Digestion",
      term: "Bile",
      definition: "A substance produced by the liver that neutralises acid and emulsifies fats.",
      detail:
        "Bile emulsifies fats into small droplets, increasing the surface area for lipase to digest fats faster.",
      examPhrases: [
        "Bile emulsifies fats into small droplets, increasing the surface area for lipase.",
      ],
      commonMistakes: [
        {
          weakAnswer: "Bile breaks down fat.",
          betterAnswer:
            "Bile emulsifies fats into small droplets, increasing the surface area for lipase.",
        },
      ],
      questions: [
        {
          question: "Explain the role of bile in fat digestion.",
          marks: 3,
          topic: "Digestion",
          commandWord: "Explain",
        },
      ],
    });
  }

  if (lower.includes("respiration") || lower.includes("glucose")) {
    concepts.push({
      topic: "Respiration",
      term: "Respiration",
      definition: "A chemical reaction that releases energy from glucose.",
      detail:
        "Respiration releases energy from glucose for cell processes. Strong answers should say energy is released, not made.",
      examPhrases: ["Respiration releases energy from glucose."],
      commonMistakes: [
        {
          weakAnswer: "Respiration makes energy.",
          betterAnswer: "Respiration releases energy from glucose.",
        },
      ],
      questions: [
        {
          question: "State what happens during respiration.",
          marks: 2,
          topic: "Respiration",
          commandWord: "State",
        },
      ],
    });
  }

  if (lower.includes("deforestation") || lower.includes("carbon dioxide")) {
    concepts.push({
      topic: "Ecology",
      term: "Deforestation",
      definition: "The removal of trees from an area, which can affect carbon dioxide levels.",
      detail:
        "Deforestation reduces the number of trees, so less carbon dioxide is removed by photosynthesis. Burning or decomposition releases carbon dioxide, a greenhouse gas that traps infrared radiation.",
      examPhrases: [
        "Less carbon dioxide is removed by photosynthesis.",
        "Carbon dioxide is a greenhouse gas that traps infrared radiation.",
      ],
      commonMistakes: [
        {
          weakAnswer: "Deforestation causes global warming because there are fewer trees.",
          betterAnswer:
            "Deforestation means less carbon dioxide is removed by photosynthesis, and carbon dioxide traps infrared radiation as a greenhouse gas.",
        },
      ],
      questions: [
        {
          question: "Explain how deforestation contributes to global warming.",
          marks: 4,
          topic: "Ecology",
          commandWord: "Explain",
        },
      ],
    });
  }

  if (lower.includes("eutrophication") || (lower.includes("nitrate") && lower.includes("algae"))) {
    concepts.push({
      topic: "Eutrophication",
      term: "Eutrophication",
      definition: "The process where excess nitrates cause algal growth and oxygen loss in water.",
      detail:
        "Fertilisers are washed into water, nitrate levels increase, algae grow rapidly, light is blocked, aquatic plants die, decomposers respire, oxygen levels fall, and fish die.",
      examPhrases: [
        "Decomposers respire and oxygen levels fall.",
        "An algal bloom blocks light from aquatic plants.",
      ],
      commonMistakes: [
        {
          weakAnswer: "Fertilisers poison the fish.",
          betterAnswer:
            "Fertilisers increase nitrate levels, causing algal growth; decomposers then respire and reduce oxygen levels.",
        },
      ],
      questions: [
        {
          question: "Describe the process of eutrophication.",
          marks: 5,
          topic: "Eutrophication",
          commandWord: "Describe",
        },
      ],
    });
  }

  if (lower.includes("meiosis") || lower.includes("haploid") || lower.includes("diploid")) {
    concepts.push({
      topic: "Inheritance",
      term: "Haploid",
      definition: "A cell with half the normal number of chromosomes.",
      detail:
        "Meiosis produces genetically different haploid gametes. During fertilisation, the sperm and egg fuse to restore the diploid chromosome number.",
      examPhrases: [
        "Meiosis produces genetically different haploid gametes.",
        "Fertilisation restores the diploid chromosome number.",
      ],
      commonMistakes: [
        {
          weakAnswer: "Meiosis makes identical cells.",
          betterAnswer: "Meiosis produces genetically different haploid gametes.",
        },
      ],
      questions: [
        {
          question: "Explain why meiosis is important in sexual reproduction.",
          marks: 3,
          topic: "Inheritance",
          commandWord: "Explain",
        },
      ],
    });
  }

  if (lower.includes("genotype") || lower.includes("phenotype")) {
    concepts.push({
      topic: "Inheritance",
      term: "Genotype",
      definition: "The alleles an organism has for a characteristic.",
      detail:
        "Genotype is the alleles an organism has, while phenotype is the observable characteristic produced by the genotype and environmental factors.",
      examPhrases: ["Phenotype is affected by genotype and environmental factors."],
      commonMistakes: [
        {
          weakAnswer: "Genotype means what an organism looks like.",
          betterAnswer:
            "Genotype is the alleles an organism has; phenotype is the observable characteristic.",
        },
      ],
      questions: [
        {
          question: "Describe the difference between genotype and phenotype.",
          marks: 3,
          topic: "Inheritance",
          commandWord: "Describe",
        },
      ],
    });
  }

  if (
    lower.includes("reliability") ||
    lower.includes("independent variable") ||
    lower.includes("dependent variable")
  ) {
    concepts.push({
      topic: "Practical Skills",
      term: "Reliability",
      definition: "How consistent results are when an experiment is repeated.",
      detail:
        "Practical investigations require a clear independent variable, dependent variable, and control variables. Repeating the experiment and calculating a mean improves reliability.",
      examPhrases: [
        "Repeating the experiment and calculating a mean improves reliability.",
        "The independent variable is changed and the dependent variable is measured.",
      ],
      commonMistakes: [
        {
          weakAnswer: "Do the experiment once to make it reliable.",
          betterAnswer: "Repeat the experiment, identify anomalies, and calculate a mean.",
        },
      ],
      questions: [
        {
          question: "Describe how reliability can be improved in a biology experiment.",
          marks: 2,
          topic: "Practical Skills",
          commandWord: "Describe",
        },
      ],
    });
  }

  return concepts.filter((concept) => !isBannedMetadataPhrase(concept.term));
}

function makeDetailedSummary(concepts: SummaryConcept[]) {
  return concepts
    .slice(0, 8)
    .map((concept) => concept.detail)
    .filter(uniqueByValue)
    .join("\n\n");
}

function validateSummary(summary: ReturnType<typeof emptySummary>) {
  if (summary.message) return true;
  if (!summary.shortSummary || !summary.detailedSummary) return false;
  if (/#\s*(edexcel|cambridge|igcse|gcse|biology|paper|notes)/i.test(summary.shortSummary)) {
    return false;
  }
  if (summary.keyTerms.some((item) => isBannedMetadataPhrase(item.term))) return false;
  if (
    summary.mustKnowExamPhrases.some((phrase) =>
      /^use (edexcel|cambridge|igcse|gcse|biology|paper|notes|topic) accurately in context/i.test(
        phrase,
      ),
    )
  ) {
    return false;
  }
  return !summary.possibleExamQuestions.some((question) =>
    /(importance|meaning) of (edexcel|cambridge|igcse|gcse|biology|paper|notes|topic)/i.test(
      question.question,
    ),
  );
}

function isMostlyMetadata(text: string) {
  const words = text.toLowerCase().match(/[a-z][a-z-]{3,}/g) ?? [];
  if (words.length === 0) return true;
  const metadataCount = words.filter((word) => BANNED_METADATA_WORDS.has(word)).length;
  return metadataCount / words.length > 0.45;
}

function isChemistryContext(context: NotebookGenerationContext, sourceContent: string) {
  const subject = context.selectedSubject.toLowerCase();
  const topic = context.selectedTopic.toLowerCase();
  const source = sourceContent.toLowerCase();
  return (
    subject.includes("chemistry") ||
    topic.includes("electrolysis") ||
    source.includes("electrolysis") ||
    source.includes("cathode") ||
    source.includes("anode")
  );
}

function isBiologyContext(context: NotebookGenerationContext, sourceContent: string) {
  const subject = context.selectedSubject.toLowerCase();
  if (subject.includes("biology")) return true;
  if (subject.includes("chemistry")) return false;
  const source = sourceContent.toLowerCase();
  return BIOLOGY_KEYWORDS.some((keyword) => source.includes(keyword));
}

function hasSubjectMismatch(
  item: { label?: string; description?: string; topic?: string; term?: string; detail?: string },
  context: NotebookGenerationContext,
  sourceContent: string,
) {
  if (!context.selectedSubject.toLowerCase().includes("chemistry")) return false;
  const source = sourceContent.toLowerCase();
  const text = [item.label, item.description, item.topic, item.term, item.detail]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return BIOLOGY_KEYWORDS.some((keyword) => text.includes(keyword) && !source.includes(keyword));
}

function joinList(items: string[]) {
  if (items.length <= 1) return items[0] ?? "the uploaded source content";
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function uniqueByValue<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

function buildKeywordRows(chunks: SourceChunk[]) {
  const seen = new Set<string>();
  return chunks.flatMap((chunk) =>
    chunk.keywords
      .filter((keyword) => {
        if (seen.has(keyword)) return false;
        seen.add(keyword);
        return true;
      })
      .map((keyword) => ({
        keyword,
        definition: `In your source, ${keyword} is linked to ${firstSentence(chunk.chunkText).slice(0, 120)}`,
        source: chunk.sourceTitle,
        examSentence: `A strong exam answer should use "${keyword}" and link it clearly to the question.`,
        commonMistake: `Mentioning ${keyword} without explaining its effect.`,
      })),
  );
}

function makeQuestions(
  notebook: Notebook,
  chunks: SourceChunk[],
  context: NotebookGenerationContext,
) {
  const keywords = buildKeywordRows(chunks).slice(0, 4);
  return keywords.map((row, index) => ({
    question: `Explain the importance of ${row.keyword} in ${context.selectedSubject} ${context.selectedTopic}.`,
    marks: index % 2 === 0 ? 3 : 4,
    commandWord: "Explain",
    markschemePoints: [
      `States what ${row.keyword} means in context.`,
      "Uses source vocabulary accurately.",
      "Links the idea to an exam-style consequence or application.",
    ],
    modelAnswer: `${row.keyword} is important because it links to the source idea: ${row.definition}. A full-mark answer uses precise wording and explains the effect.`,
    hints: ["Define the keyword.", "Use source wording.", "Add a because-link."],
    sourceUsed: row.source,
  }));
}

function generateNotebookFlashcards(
  notebook: Notebook,
  chunks: SourceChunk[],
  scopeId: string,
  context: NotebookGenerationContext,
) {
  const sourceContent = chunks.map((chunk) => chunk.chunkText).join(" ");
  const sourceTitle =
    scopeId === "all" ? notebook.title : (chunks[0]?.sourceTitle ?? notebook.title);
  if (sourceContent.trim().length < 40) return [];

  const candidates = [
    ...makePatternFlashcards(sourceContent, sourceTitle, context),
    ...makeSentenceFlashcards(sourceContent, sourceTitle),
  ];
  const seen = new Set<string>();
  return candidates
    .filter((card) => validateNotebookFlashcard(card, sourceContent))
    .filter((card) => {
      const key = `${card.front.toLowerCase()}:${card.back.toLowerCase()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12)
    .map((card, index) => ({
      ...card,
      id: `${notebook.id}:notebook:${Date.now()}:${index}`,
      subject: notebook.subject,
      questionId: notebook.id,
      originalQuestion: sourceTitle,
      markSchemePoint: card.back,
      createdAt: Date.now(),
    }));
}

function makePatternFlashcards(
  sourceContent: string,
  sourceTitle: string,
  context: NotebookGenerationContext,
) {
  const lower = sourceContent.toLowerCase();
  const cards: {
    front: string;
    back: string;
    topic: string;
    source: string;
    type:
      | "definition"
      | "process"
      | "exam_phrase"
      | "common_mistake"
      | "markscheme_point"
      | "practical_skill";
    difficulty: "easy" | "medium" | "hard";
  }[] = [];

  if (isChemistryContext(context, sourceContent)) {
    if (lower.includes("electrolysis") || lower.includes("cathode") || lower.includes("anode")) {
      cards.push({
        front: "What is electrolysis?",
        back: "Electrolysis is the decomposition of an ionic compound using electricity.",
        topic: "Electrolysis",
        source: sourceTitle,
        type: "definition",
        difficulty: "easy",
      });
      cards.push({
        front: "What happens at the cathode and anode during electrolysis?",
        back: "Positive ions move to the negative cathode and gain electrons. Negative ions move to the positive anode and lose electrons.",
        topic: "Electrolysis",
        source: sourceTitle,
        type: "process",
        difficulty: "medium",
      });
    }
    return cards;
  }

  if (lower.includes("enzyme") || lower.includes("active site")) {
    cards.push({
      front: "What does it mean when an enzyme denatures?",
      back: "The enzyme's active site changes shape, so the substrate is no longer complementary and fewer enzyme-substrate complexes form.",
      topic: "Enzymes",
      source: sourceTitle,
      type: "definition",
      difficulty: "medium",
    });
    if (lower.includes("temperature") || lower.includes("high temperatures")) {
      cards.push({
        front: "Why does enzyme activity decrease at high temperatures?",
        back: "At high temperatures, the enzyme denatures. The active site changes shape, so the substrate no longer fits and fewer enzyme-substrate complexes form.",
        topic: "Enzymes",
        source: sourceTitle,
        type: "process",
        difficulty: "medium",
      });
    }
  }

  if (lower.includes("bile") || lower.includes("emulsif")) {
    cards.push({
      front: "What does bile do to fats?",
      back: "Bile emulsifies fats into small droplets, increasing the surface area for lipase to digest fats faster.",
      topic: "Digestion",
      source: sourceTitle,
      type: "markscheme_point",
      difficulty: "easy",
    });
  }

  if (lower.includes("deforestation")) {
    cards.push({
      front: "How can deforestation contribute to global warming?",
      back: "Deforestation reduces the number of trees, so less carbon dioxide is removed by photosynthesis. Burning or decomposition of trees releases carbon dioxide, a greenhouse gas that traps infrared radiation.",
      topic: "Ecology",
      source: sourceTitle,
      type: "process",
      difficulty: "medium",
    });
  }

  if (
    lower.includes("eutrophication") ||
    (lower.includes("fertiliser") && lower.includes("algae"))
  ) {
    cards.push({
      front: "Describe the sequence of eutrophication.",
      back: "Fertilisers are washed into water, nitrate levels increase, algae grow rapidly, light is blocked, aquatic plants die, decomposers respire, oxygen levels fall, and fish die.",
      topic: "Eutrophication",
      source: sourceTitle,
      type: "process",
      difficulty: "hard",
    });
  }

  if (lower.includes("meiosis") || lower.includes("haploid")) {
    cards.push({
      front: "Why is meiosis important in sexual reproduction?",
      back: "Meiosis produces genetically different haploid gametes. During fertilisation, the sperm and egg fuse to restore the diploid chromosome number.",
      topic: "Inheritance",
      source: sourceTitle,
      type: "markscheme_point",
      difficulty: "medium",
    });
  }

  if (lower.includes("genotype") && lower.includes("phenotype")) {
    cards.push({
      front: "What is the difference between genotype and phenotype?",
      back: "Genotype is the alleles an organism has. Phenotype is the observable characteristic produced by the genotype and environmental factors.",
      topic: "Inheritance",
      source: sourceTitle,
      type: "definition",
      difficulty: "easy",
    });
  }

  if (lower.includes("reliability") || lower.includes("repeat") || lower.includes("mean")) {
    cards.push({
      front: "How can reliability be improved in a biology experiment?",
      back: "Repeat the experiment, identify anomalies, and calculate a mean so the result is less affected by random error.",
      topic: "Practical Skills",
      source: sourceTitle,
      type: "practical_skill",
      difficulty: "medium",
    });
  }

  return cards;
}

function makeSentenceFlashcards(sourceContent: string, sourceTitle: string) {
  return splitSentences(sourceContent)
    .map(cleanEducationalSentence)
    .filter((sentence) => sentence.length > 45)
    .filter((sentence) => hasEducationalSignal(sentence))
    .slice(0, 8)
    .map((sentence) => {
      const topic = inferFlashcardTopic(sentence);
      return {
        front: `What is the key exam point about ${topic.toLowerCase()}?`,
        back: sentence,
        topic,
        source: sourceTitle,
        type: inferFlashcardType(sentence),
        difficulty: sentence.length > 150 ? "hard" : "medium",
      };
    });
}

function validateNotebookFlashcard(
  card: {
    front: string;
    back: string;
    topic: string;
    source: string;
    type: string;
    difficulty: string;
  },
  sourceContent: string,
) {
  if (card.front.trim().length < 10 || card.back.trim().length < 10) return false;
  if (!card.topic || isBannedMetadataPhrase(card.topic)) return false;
  if (!card.source || !card.type || !card.difficulty) return false;
  if (isMetadataMeaningQuestion(card.front)) return false;
  if (isBannedMetadataPhrase(card.back)) return false;
  return isBasedOnSourceContent(card.back, sourceContent);
}

function isBasedOnSourceContent(answer: string, sourceContent: string) {
  const sourceWords = new Set(extractContentWords(sourceContent));
  return extractContentWords(answer).some((word) => sourceWords.has(word));
}

function splitSentences(text: string) {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function cleanEducationalSentence(sentence: string) {
  return sentence
    .replace(/^(edexcel|cambridge|aqa|ocr)\s+(igcse|gcse)?\s*/i, "")
    .replace(/^(igcse|gcse)\s+/i, "")
    .replace(/^(biology|chemistry|physics|maths|paper\s+\d+|topic|notes)\s*[:|-]\s*/i, "")
    .trim();
}

function hasEducationalSignal(sentence: string) {
  const lower = sentence.toLowerCase();
  if (isBannedMetadataPhrase(lower)) return false;
  return [
    "because",
    "therefore",
    "causes",
    "increases",
    "decreases",
    "produces",
    "changes",
    "enzyme",
    "active site",
    "photosynthesis",
    "respiration",
    "diffusion",
    "osmosis",
    "meiosis",
    "reliability",
    "evaluate",
    "explain",
  ].some((signal) => lower.includes(signal));
}

function inferFlashcardTopic(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("enzyme") || lower.includes("active site")) return "Enzymes";
  if (lower.includes("bile") || lower.includes("lipase") || lower.includes("digestion")) {
    return "Digestion";
  }
  if (lower.includes("deforestation") || lower.includes("eutrophication")) return "Ecology";
  if (lower.includes("meiosis") || lower.includes("genotype") || lower.includes("phenotype")) {
    return "Inheritance";
  }
  if (lower.includes("reliability") || lower.includes("repeat") || lower.includes("variable")) {
    return "Practical Skills";
  }
  if (lower.includes("photosynthesis")) return "Photosynthesis";
  if (lower.includes("respiration")) return "Respiration";
  return "Exam Content";
}

function inferFlashcardType(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("mistake") || lower.includes("avoid")) return "common_mistake" as const;
  if (lower.includes("sequence") || lower.includes("process") || lower.includes("because")) {
    return "process" as const;
  }
  if (lower.includes("repeat") || lower.includes("variable") || lower.includes("reliability")) {
    return "practical_skill" as const;
  }
  if (lower.includes("means") || lower.includes("is defined")) return "definition" as const;
  return "markscheme_point" as const;
}

function extractContentWords(text: string) {
  return (
    text
      .toLowerCase()
      .match(/[a-z][a-z-]{4,}/g)
      ?.filter((word) => !BANNED_METADATA_WORDS.has(word)) ?? []
  );
}

function isMetadataMeaningQuestion(front: string) {
  return /^what does (edexcel|cambridge|igcse|gcse|biology|chemistry|physics|maths|paper|topic|notes|subject|syllabus|exam board|notebook|study notebook) mean\??$/i.test(
    front.trim(),
  );
}

function isBannedMetadataPhrase(value: string) {
  const normalised = value.trim().toLowerCase();
  return (
    BANNED_METADATA_WORDS.has(normalised) || /^(paper|topic|subject|notes)\s*\d*$/i.test(value)
  );
}

function detectTopicTags(text: string) {
  return extractKeywords(text)
    .filter((word) =>
      ["enzyme", "ecology", "genetic", "algebra", "network", "memory", "business"].some((topic) =>
        word.includes(topic),
      ),
    )
    .slice(0, 4);
}

function extractKeywords(text: string) {
  const stop = new Set([
    "about",
    "after",
    "again",
    "because",
    "could",
    "their",
    "there",
    "these",
    "those",
    "which",
    "would",
    "should",
  ]);
  return [
    ...new Set(
      text
        .toLowerCase()
        .match(/[a-z][a-z-]{4,}/g)
        ?.filter((word) => !stop.has(word)) ?? [],
    ),
  ];
}

function countWords(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

function firstSentence(text: string) {
  return (
    text
      .replace(/\s+/g, " ")
      .split(/[.!?]/)
      .map((item) => item.trim())
      .find((item) => item.length > 30) ?? ""
  );
}

function notebookStorageKey(userId: string) {
  return `${STORAGE_KEY}:${userId}`;
}

function normaliseNotebooks(value: unknown): Notebook[] {
  if (!Array.isArray(value)) return [];
  return (value as Notebook[]).map((notebook) =>
    isOldEmptyAutoTitle(notebook) ? { ...notebook, title: UNTITLED_NOTEBOOK_TITLE } : notebook,
  );
}

function readNotebooks(userId = getCurrentUser()?.id): Notebook[] {
  if (typeof window === "undefined" || !userId) return [];
  try {
    const scopedRaw = window.localStorage.getItem(notebookStorageKey(userId));
    if (scopedRaw) return normaliseNotebooks(JSON.parse(scopedRaw));

    const legacyRaw = window.localStorage.getItem(STORAGE_KEY);
    if (!legacyRaw) return [];
    const legacyNotebooks = normaliseNotebooks(JSON.parse(legacyRaw));
    if (legacyNotebooks.length) {
      writeLocalNotebooks(userId, legacyNotebooks);
      window.localStorage.removeItem(STORAGE_KEY);
    }
    return legacyNotebooks;
  } catch {
    return [];
  }
}

function writeLocalNotebooks(userId: string, notebooks: Notebook[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(notebookStorageKey(userId), JSON.stringify(notebooks));
  window.dispatchEvent(new Event("markwise:study-notebooks:changed"));
  requestUserDataSync();
}

function saveNotebooks(notebooks: Notebook[], userId = getCurrentUser()?.id) {
  if (!userId) return;
  writeLocalNotebooks(userId, notebooks);
  void saveNotebooksToFirebase(userId, notebooks);
}

async function saveNotebooksToFirebase(userId: string, notebooks: Notebook[]) {
  if (typeof window === "undefined") return;
  try {
    await setDoc(
      doc(db, NOTEBOOKS_FIRESTORE_COLLECTION, userId),
      {
        notebooks,
        userId,
        updatedAt: Date.now(),
      },
      { merge: true },
    );
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise notebook Firebase save failed. Using localStorage fallback.", error);
    }
  }
}

async function loadNotebooksFromFirebase(userId: string) {
  if (typeof window === "undefined") return null;
  try {
    const snapshot = await getDoc(doc(db, NOTEBOOKS_FIRESTORE_COLLECTION, userId));
    if (!snapshot.exists()) return null;
    return normaliseNotebooks(snapshot.data().notebooks);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise notebook Firebase load failed. Using localStorage fallback.", error);
    }
    return null;
  }
}

function subscribeToFirebaseNotebooks(
  userId: string,
  onNotebooks: (notebooks: Notebook[]) => void,
) {
  if (typeof window === "undefined") return () => {};
  return onSnapshot(
    doc(db, NOTEBOOKS_FIRESTORE_COLLECTION, userId),
    (snapshot) => {
      if (!snapshot.exists()) return;
      onNotebooks(normaliseNotebooks(snapshot.data().notebooks));
    },
    (error) => {
      if (import.meta.env.DEV) {
        console.warn(
          "MarkWise notebook Firebase subscription failed. Using localStorage fallback.",
          error,
        );
      }
    },
  );
}
