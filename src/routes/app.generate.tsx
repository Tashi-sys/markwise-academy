import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { generatePracticeQuestion } from "../lib/api/exam-training.functions";
import { getTopicMeta, getTopicsForSubject } from "../data/topicsConfig";
import { getMiniPaperSyllabus } from "../data/miniPaperConfig";
import { getSubjectName } from "../data/syllabusConfig";
import { useAuth } from "../lib/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/app/generate")({
  component: GenerateQuestion,
});

function GenerateQuestion() {
  const { user } = useAuth();
  const [subject, setSubject] = useState(user?.selectedSubjects[0] ?? "biology");
  const syllabus = user ? getMiniPaperSyllabus(subject, user.examBoard) : undefined;
  const papers = useMemo(() => syllabus?.papers ?? [], [syllabus]);
  const [paperId, setPaperId] = useState(papers[0]?.id ?? "mixed");
  const selectedPaper = papers.find((paper) => paper.id === paperId) ?? papers[0];
  const topics = selectedPaper?.availableTopics?.length
    ? selectedPaper.availableTopics
    : Object.keys(getTopicsForSubject(subject));
  const [topic, setTopic] = useState(topics[0] ?? "ecology");
  const [marks, setMarks] = useState(4);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [commandWord, setCommandWord] = useState("Explain");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState<Awaited<
    ReturnType<typeof generatePracticeQuestion>
  > | null>(null);

  if (!user) return null;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Generate Practice Question</h1>
        <p className="mt-1 text-muted-foreground">
          Creates past-paper-style practice, not real past-paper questions.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft md:grid-cols-2">
        <label className="text-sm font-medium">
          Topic
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
          >
            {topics.map((id) => (
              <option key={id} value={id}>
                {getTopicMeta(subject, id).name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Subject
          <select
            value={subject}
            onChange={(event) => {
              const nextSubject = event.target.value;
              const nextPaper = getMiniPaperSyllabus(nextSubject, user.examBoard)?.papers[0];
              setSubject(nextSubject);
              setPaperId(nextPaper?.id ?? "mixed");
              setTopic(
                nextPaper?.availableTopics?.[0] ??
                  Object.keys(getTopicsForSubject(nextSubject))[0] ??
                  "mixed",
              );
            }}
            className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
          >
            {user.selectedSubjects.map((subjectId) => (
              <option key={subjectId} value={subjectId}>
                {getSubjectName(user.examBoard, subjectId)}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Paper
          <select
            value={selectedPaper?.id ?? paperId}
            onChange={(event) => {
              const nextPaper = papers.find((paper) => paper.id === event.target.value);
              setPaperId(event.target.value);
              setTopic(nextPaper?.availableTopics?.[0] ?? topics[0] ?? "mixed");
            }}
            className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
          >
            {papers.map((paper) => (
              <option key={paper.id} value={paper.id}>
                {paper.label} · {paper.paperType ?? "Mixed"}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Marks
          <input
            type="number"
            min={1}
            max={6}
            value={marks}
            onChange={(event) => setMarks(Number(event.target.value))}
            className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="text-sm font-medium">
          Difficulty
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value as "easy" | "medium" | "hard")}
            className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label className="text-sm font-medium">
          Command word
          <select
            value={commandWord}
            onChange={(event) => setCommandWord(event.target.value)}
            className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
          >
            {["State", "Describe", "Explain", "Compare", "Suggest", "Evaluate", "Calculate"].map(
              (word) => (
                <option key={word}>{word}</option>
              ),
            )}
          </select>
        </label>
        <button
          type="button"
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            try {
              const response = await generatePracticeQuestion({
                data: {
                  examBoard: user.examBoard,
                  subject,
                  paper: selectedPaper?.label ?? "Mixed Practice",
                  paperType: selectedPaper?.paperType ?? "Mixed",
                  topic,
                  marks,
                  difficulty,
                  commandWord,
                },
              });
              setGenerated(response);
              toast.success("AI generation complete");
            } finally {
              setLoading(false);
            }
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 disabled:opacity-60 md:col-span-2"
        >
          <Sparkles className="h-4 w-4" />
          {loading ? "Generating past-paper-style question..." : "Generate Practice Question"}
        </button>
      </div>

      {generated && (
        <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-soft">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {generated.label}
          </span>
          <h2 className="mt-4 text-xl font-semibold">{generated.questionText}</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Panel title="Markscheme" items={generated.markSchemePoints.map((p) => p.point)} />
            <Panel title="Hints" items={generated.hints} />
          </div>
          <p className="mt-4 rounded-xl border border-success/20 bg-success/10 p-3 text-sm">
            {generated.modelAnswer}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{generated.examinerTip}</p>
        </div>
      )}
    </div>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      <ul className="mt-2 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
