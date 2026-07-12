import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Clock, FileText } from "lucide-react";
import { filterQuestions } from "../data/questionBank";
import { getExamBoard, getSubjectName } from "../data/syllabusConfig";
import {
  getMiniPaperSyllabus,
  getMiniPaperSyllabuses,
  type MiniPaperConfigPaper,
  type MiniPaperExamBoardId,
} from "../data/miniPaperConfig";
import { getTopicMeta } from "../data/topicsConfig";
import { useAuth } from "../lib/auth";
import { markAnswer } from "../lib/marking";
import { recordAttempt, topicStats, useAttempts } from "../lib/storage";
import { toast } from "sonner";

export const Route = createFileRoute("/app/mini-paper")({
  component: MiniPaper,
});

type PaperState = "setup" | "running" | "complete";
type TopicScope = "whole" | "specific" | "weak" | "mixed";
type Difficulty = "mixed" | "easy" | "medium" | "hard";

const CUSTOM_KEY = "markwise:mini-paper-custom:v1";

function MiniPaper() {
  const { user } = useAuth();
  const { attempts } = useAttempts();
  const [subject, setSubject] = useState("biology");
  const [examBoard, setExamBoard] = useState<MiniPaperExamBoardId>("edexcel-igcse");
  const [paperId, setPaperId] = useState("mixed");
  const [topicScope, setTopicScope] = useState<TopicScope>("whole");
  const [topic, setTopic] = useState("mixed");
  const [difficulty, setDifficulty] = useState<Difficulty>("mixed");
  const [countPreset, setCountPreset] = useState("10");
  const [count, setCount] = useState(10);
  const [timeLimit, setTimeLimit] = useState(35);
  const [state, setState] = useState<PaperState>("setup");
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [customPaper, setCustomPaper] = useState(() => readCustomPaper());

  const availableSyllabuses = getMiniPaperSyllabuses(subject);
  const selectedSyllabus = getMiniPaperSyllabus(subject, examBoard);
  const selectedBoard =
    examBoard === "custom"
      ? getExamBoard(user?.examBoard ?? "edexcel-igcse")
      : getExamBoard(examBoard);
  const selectedPaper =
    examBoard === "custom"
      ? customPaper
      : selectedSyllabus?.papers.find((paper) => paper.id === paperId);
  const realExamBoard = examBoard === "custom" ? user?.examBoard : examBoard;
  const realQualification = selectedBoard?.qualification ?? user?.qualification;

  const subjects = useMemo(() => {
    if (!user) return [];
    return user.selectedSubjects.filter((subjectId) => {
      if (getMiniPaperSyllabuses(subjectId).length > 0) return true;
      return (
        filterQuestions({
          qualification: user.qualification,
          examBoard: user.examBoard,
          subject: subjectId,
        }).length > 0
      );
    });
  }, [user]);

  const topics = useMemo(() => {
    if (!user || !realExamBoard || !realQualification) return [];
    const base = [
      ...new Set(
        filterQuestions({
          qualification: realQualification,
          examBoard: realExamBoard,
          subject,
        }).map((q) => q.topic),
      ),
    ];
    if (!selectedPaper?.availableTopics?.length) return base;
    return base.filter((topicId) => paperIncludesTopic(selectedPaper, subject, topicId));
  }, [realExamBoard, realQualification, selectedPaper, subject, user]);

  const weakTopics = useMemo(() => {
    const rows = topics.map((topicId) => ({
      topic: topicId,
      ...topicStats(
        attempts.filter(
          (attempt) => attempt.examBoard === realExamBoard && attempt.subject === subject,
        ),
        topicId,
        subject,
      ),
    }));
    return rows.filter((row) => row.count > 0 && row.acc < 65).map((row) => row.topic);
  }, [attempts, realExamBoard, subject, topics]);

  const pool = useMemo(() => {
    if (!user || !realExamBoard || !realQualification || !selectedPaper) return [];
    const topicFilter = topicScope === "specific" && topic !== "mixed" ? topic : undefined;
    const allowedTopics =
      topicScope === "weak" && weakTopics.length > 0
        ? new Set(weakTopics)
        : selectedPaper.availableTopics?.length
          ? selectedPaper.availableTopics
          : null;

    return filterQuestions({
      qualification: realQualification,
      examBoard: realExamBoard,
      subject,
      topic: topicFilter,
      difficulty: difficulty === "mixed" ? undefined : difficulty,
    })
      .filter((question) => selectedPaper.matchPapers.includes(question.paper ?? "General"))
      .filter((question) =>
        !allowedTopics
          ? true
          : Array.isArray(allowedTopics)
            ? paperIncludesTopic(selectedPaper, subject, question.topic)
            : allowedTopics.has(question.topic),
      )
      .slice(0, count);
  }, [
    count,
    difficulty,
    realExamBoard,
    realQualification,
    selectedPaper,
    subject,
    topic,
    topicScope,
    user,
    weakTopics,
  ]);

  useEffect(() => {
    if (!user) return;
    if (user.selectedSubjects.includes(subject)) return;
    setSubject(user.selectedSubjects[0] ?? "biology");
  }, [subject, user]);

  useEffect(() => {
    const nextBoard =
      availableSyllabuses.find((syllabus) => syllabus.examBoard === user?.examBoard)?.examBoard ??
      availableSyllabuses[0]?.examBoard ??
      "custom";
    if (
      examBoard === "custom" ||
      availableSyllabuses.some((syllabus) => syllabus.examBoard === examBoard)
    )
      return;
    setExamBoard(nextBoard);
  }, [availableSyllabuses, examBoard, user?.examBoard]);

  useEffect(() => {
    const papers = examBoard === "custom" ? [customPaper] : (selectedSyllabus?.papers ?? []);
    if (papers.some((paper) => paper.id === paperId)) return;
    setPaperId(papers[0]?.id ?? "custom-paper");
  }, [customPaper, examBoard, paperId, selectedSyllabus]);

  useEffect(() => {
    if (!selectedPaper) return;
    setTimeLimit(selectedPaper.defaultTime);
  }, [selectedPaper]);

  useEffect(() => {
    if (state !== "running") return;
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [state]);

  if (!user) return null;

  const results = pool.map((question) => ({
    question,
    result: markAnswer(question, answers[question.id] ?? ""),
  }));
  const score = results.reduce((sum, item) => sum + item.result.score, 0);
  const total = results.reduce((sum, item) => sum + item.result.total, 0);
  const pct = total ? Math.round((score / total) * 100) : 0;
  const weakest = [...results]
    .filter((item) => item.result.score < item.result.total)
    .map((item) => item.question.topic)[0];
  const grade = pct >= 85 ? "8/9" : pct >= 70 ? "7" : pct >= 55 ? "5/6" : pct >= 40 ? "4" : "1-3";
  const paperMissedKeywords = [
    ...new Set(
      results.flatMap((item) => item.result.missed.flatMap((point) => point.keywords.flat())),
    ),
  ].slice(0, 8);
  const paperTopicNames =
    selectedPaper?.topics ??
    selectedPaper?.availableTopics?.map((topicId) => getTopicMeta(subject, topicId).name) ??
    [];
  const paperQuestionTypes = selectedPaper?.questionTypes ?? ["Mixed"];
  const paperType = selectedPaper?.paperType ?? selectedPaper?.tags[0] ?? "Mixed";

  const resetPaperState = () => {
    setIndex(0);
    setAnswers({});
    setElapsed(0);
  };

  const submitPaper = () => {
    for (const item of results) {
      recordAttempt({
        questionId: item.question.id,
        topic: item.question.topic,
        subject: item.question.subject,
        examBoard: item.question.examBoard,
        qualification: item.question.qualification,
        answer: answers[item.question.id] ?? "",
        score: item.result.score,
        total: item.result.total,
        elapsedSeconds: elapsed / Math.max(1, pool.length),
        missedPoints: item.result.missed.map((p) => p.point),
        awardedPoints: item.result.awarded.map((p) => p.point),
      });
    }
    setState("complete");
    toast.success("Mini paper submitted");
  };

  if (state === "setup") {
    return (
      <div className="animate-enter mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mini Paper</h1>
          <p className="mt-1 text-muted-foreground">
            Choose your subject, syllabus, paper, topic scope, difficulty, question count, and time.
          </p>
        </div>

        <div className="glass-card grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft md:grid-cols-2">
          <label className="text-sm font-medium">
            Subject
            <select
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setTopic("mixed");
                setTopicScope("whole");
                resetPaperState();
              }}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              {subjects.map((subjectId) => (
                <option key={subjectId} value={subjectId}>
                  {getSubjectName(user.examBoard, subjectId)}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium">
            Exam board / syllabus
            <select
              value={examBoard}
              onChange={(e) => {
                setExamBoard(e.target.value as MiniPaperExamBoardId);
                setTopic("mixed");
                setTopicScope("whole");
                resetPaperState();
              }}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              {availableSyllabuses.map((syllabus) => (
                <option key={syllabus.examBoard} value={syllabus.examBoard}>
                  {syllabus.label}
                </option>
              ))}
              <option value="custom">Custom Syllabus</option>
            </select>
          </label>

          {examBoard === "custom" && (
            <CustomPaperEditor
              paper={customPaper}
              subject={subject}
              availableTopics={topics}
              onChange={(paper) => {
                setCustomPaper(paper);
                saveCustomPaper(paper);
                setPaperId(paper.id);
                resetPaperState();
              }}
            />
          )}

          <div className="md:col-span-2">
            <div className="mb-3 text-sm font-semibold text-muted-foreground">Paper</div>
            <div className="stagger-grid grid gap-3 md:grid-cols-3">
              {(examBoard === "custom" ? [customPaper] : (selectedSyllabus?.papers ?? [])).map(
                (paper) => (
                  <button
                    key={paper.id}
                    type="button"
                    onClick={() => {
                      setPaperId(paper.id);
                      setTimeLimit(paper.defaultTime);
                      resetPaperState();
                    }}
                    className={`interactive-card rounded-2xl border p-4 text-left shadow-soft ${
                      paper.id === paperId
                        ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                        : "border-border bg-card hover:bg-secondary"
                    }`}
                  >
                    <div className="font-semibold">{paper.label}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {paper.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        {paper.paperType ?? paper.tags[0] ?? "Theory"}
                      </span>
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {(paper.topics ?? paper.availableTopics ?? []).length || "All"} topics
                      </span>
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(paper.questionTypes ?? ["Mixed"]).slice(0, 4).map((type) => (
                        <span
                          key={type}
                          className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                      {(paper.topics ?? []).slice(0, 5).join(", ")}
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground">
                      {paper.defaultTime} min default
                    </div>
                  </button>
                ),
              )}
            </div>
          </div>

          <label className="text-sm font-medium">
            Topic scope
            <select
              value={topicScope}
              onChange={(e) => {
                setTopicScope(e.target.value as TopicScope);
                resetPaperState();
              }}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              <option value="whole">Whole paper</option>
              <option value="specific">Specific topic</option>
              <option value="weak">Weak topics only</option>
              <option value="mixed">Mixed topics</option>
            </select>
          </label>

          <label className="text-sm font-medium">
            Specific topic
            <select
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                resetPaperState();
              }}
              disabled={topicScope !== "specific"}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 disabled:opacity-50"
            >
              <option value="mixed">Choose a topic</option>
              {topics.map((id) => (
                <option key={id} value={id}>
                  {getTopicMeta(subject, id).name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium">
            Difficulty
            <select
              value={difficulty}
              onChange={(e) => {
                setDifficulty(e.target.value as Difficulty);
                resetPaperState();
              }}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              <option value="mixed">Mixed</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label className="text-sm font-medium">
            Question count
            <select
              value={countPreset}
              onChange={(e) => {
                setCountPreset(e.target.value);
                if (e.target.value !== "custom") setCount(Number(e.target.value));
                resetPaperState();
              }}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              <option value="5">5 questions</option>
              <option value="10">10 questions</option>
              <option value="15">15 questions</option>
              <option value="custom">Custom</option>
            </select>
          </label>

          {countPreset === "custom" && (
            <label className="text-sm font-medium">
              Custom question count
              <input
                type="number"
                min={1}
                max={20}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
              />
            </label>
          )}

          <label className="text-sm font-medium">
            Time limit
            <input
              type="number"
              min={5}
              max={180}
              value={timeLimit}
              onChange={(e) => setTimeLimit(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </label>

          <div className="rounded-xl border border-border bg-secondary/30 p-4 text-sm">
            <div className="font-semibold">{pool.length} matching questions</div>
            <div className="text-muted-foreground">
              {pool.reduce((sum, q) => sum + q.marks, 0)} total marks · {timeLimit} minutes
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {selectedSyllabus?.label ?? customPaper.label} — {selectedPaper?.label}
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {paperType}
              </span>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                {paperTopicNames.length || "All"} topics
              </span>
              {paperQuestionTypes.slice(0, 3).map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {pool.length < count && (
            <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-sm md:col-span-2">
              {pool.length === 0
                ? "No questions available for this paper yet. Try Mixed Practice or generate a new past-paper-style question."
                : `Not enough questions available for this paper yet. Add more questions or choose Mixed Practice. Showing ${pool.length} of ${count} requested questions.`}
            </div>
          )}

          <button
            type="button"
            onClick={() => setState("running")}
            disabled={pool.length === 0}
            className="interactive-button inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2"
          >
            <FileText className="h-4 w-4" />
            Start {selectedPaper?.label ?? "mini paper"}
          </button>
        </div>
      </div>
    );
  }

  if (state === "complete") {
    return (
      <div className="animate-enter space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mini Paper Results</h1>
          <p className="mt-1 text-muted-foreground">
            {selectedSyllabus?.label ?? customPaper.label} — {selectedPaper?.label} {paperType}
          </p>
        </div>
        <div className="stagger-grid grid gap-4 md:grid-cols-4">
          <Stat label="Score" value={`${score}/${total}`} />
          <Stat label="Percentage" value={`${pct}%`} />
          <Stat label="Estimated grade" value={grade} />
          <Stat
            label="Weakest topic"
            value={weakest ? getTopicMeta(subject, weakest).name : "None"}
          />
        </div>
        <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="mb-5 rounded-xl border border-border bg-secondary/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Topics included
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {paperTopicNames.slice(0, 10).map((topicName) => (
                <span
                  key={topicName}
                  className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                >
                  {topicName}
                </span>
              ))}
            </div>
          </div>
          <h2 className="font-semibold">Recommended next practice</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {weakest
              ? `Practise 3 more ${selectedPaper?.label ?? "paper"} ${getTopicMeta(subject, weakest).name} questions.`
              : `Try another ${selectedPaper?.label ?? "mini paper"} with a higher difficulty.`}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {paperMissedKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-warning/15 px-2.5 py-1 text-xs text-warning"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const current = pool[index];
  const remaining = Math.max(0, timeLimit * 60 - elapsed);
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  return (
    <div className="animate-enter mx-auto max-w-4xl space-y-5">
      <div className="glass-card sticky top-4 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div>
          <div className="font-semibold">
            Question {index + 1} of {pool.length}
          </div>
          <div className="text-xs text-muted-foreground">
            {selectedSyllabus?.label ?? customPaper.label} — {selectedPaper?.label}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 animate-pulse-soft" />
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </div>
      </div>
      <div
        key={current.id}
        className="animate-slide-right glass-card rounded-2xl border border-border bg-card p-6 shadow-soft"
      >
        <p className="text-lg font-semibold">{current.questionText}</p>
        <p className="mt-1 text-sm text-muted-foreground">[{current.marks} marks]</p>
        <textarea
          value={answers[current.id] ?? ""}
          onChange={(event) =>
            setAnswers((prev) => ({ ...prev, [current.id]: event.target.value }))
          }
          rows={8}
          className="mt-5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
          className="interactive-button rounded-full border border-border px-4 py-2 text-sm disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {pool.map((q, i) => (
            <button
              key={q.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`interactive-button h-9 w-9 rounded-full text-sm ${
                i === index ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {index === pool.length - 1 ? (
          <button
            type="button"
            onClick={submitPaper}
            className="interactive-button rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Submit paper
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            className="interactive-button rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

function CustomPaperEditor({
  paper,
  subject,
  availableTopics,
  onChange,
}: {
  paper: MiniPaperConfigPaper;
  subject: string;
  availableTopics: string[];
  onChange: (paper: MiniPaperConfigPaper) => void;
}) {
  const topicText = (paper.availableTopics ?? [])
    .map((topicId) => getTopicMeta(subject, topicId).name)
    .join(", ");

  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-4 md:col-span-2">
      <div className="mb-3 text-sm font-semibold">Custom paper structure</div>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          value={paper.label}
          onChange={(e) => onChange({ ...paper, label: e.target.value })}
          placeholder="Paper name"
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm"
        />
        <input
          type="number"
          value={paper.defaultTime}
          onChange={(e) => onChange({ ...paper, defaultTime: Number(e.target.value) })}
          placeholder="Default time"
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm"
        />
        <input
          value={paper.paperType ?? "Custom"}
          onChange={(e) =>
            onChange({
              ...paper,
              paperType: e.target.value,
              tags: [e.target.value || "Custom"],
            })
          }
          placeholder="Paper type, e.g. Theory, Practical, Coding"
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm md:col-span-2"
        />
        <input
          value={paper.description}
          onChange={(e) => onChange({ ...paper, description: e.target.value })}
          placeholder="Paper description"
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm md:col-span-2"
        />
        <input
          value={topicText}
          onChange={(e) =>
            onChange({
              ...paper,
              availableTopics: parseCustomTopics(e.target.value, subject, availableTopics),
              topics: e.target.value
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean),
            })
          }
          placeholder="Topics included, separated by commas"
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm md:col-span-2"
        />
        <input
          value={(paper.questionTypes ?? []).join(", ")}
          onChange={(e) =>
            onChange({
              ...paper,
              questionTypes: parseList(e.target.value),
            })
          }
          placeholder="Question types, e.g. Explain, Graph, Evaluation"
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm md:col-span-2"
        />
      </div>
    </div>
  );
}

function readCustomPaper(): MiniPaperConfigPaper {
  if (typeof window === "undefined") return defaultCustomPaper();
  try {
    const raw = window.localStorage.getItem(CUSTOM_KEY);
    return raw ? (JSON.parse(raw) as MiniPaperConfigPaper) : defaultCustomPaper();
  } catch {
    return defaultCustomPaper();
  }
}

function saveCustomPaper(paper: MiniPaperConfigPaper) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CUSTOM_KEY, JSON.stringify(paper));
}

function defaultCustomPaper(): MiniPaperConfigPaper {
  return {
    id: "custom-paper",
    label: "Custom Paper",
    description: "Your own paper structure saved locally on this device.",
    defaultTime: 60,
    tags: ["Custom"],
    paperType: "Custom",
    topics: [],
    questionTypes: ["Mixed"],
    matchPapers: [
      "Paper 1",
      "Paper 2",
      "Paper 1/2",
      "General",
      "GCSE Topic Practice",
      "International GCSE Topic Practice",
    ],
  };
}

function parseList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function paperIncludesTopic(paper: MiniPaperConfigPaper, subject: string, topicId: string) {
  if (!paper.availableTopics?.length) return true;
  const topicName = getTopicMeta(subject, topicId).name.toLowerCase();
  return paper.availableTopics.some((item) => {
    const normalised = item.trim().toLowerCase();
    return normalised === topicId.toLowerCase() || normalised === topicName;
  });
}

function parseCustomTopics(value: string, subject: string, availableTopics: string[]) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const found = availableTopics.find((topicId) => {
        const topicName = getTopicMeta(subject, topicId).name.toLowerCase();
        return topicId.toLowerCase() === item.toLowerCase() || topicName === item.toLowerCase();
      });
      return found ?? item;
    });
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}
