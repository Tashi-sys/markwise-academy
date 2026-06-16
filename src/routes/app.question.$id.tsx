import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import {
  Check,
  CircleAlert,
  Lightbulb,
  SkipForward,
  Sparkles,
  Timer,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { getQuestion, getTopicMeta, getQuestionsByTopic } from "../lib/questions";
import { markAnswer, upgradeAnswer, type MarkResult } from "../lib/marking";
import { recordAttempt } from "../lib/storage";
import { z } from "zod";

const search = z.object({
  mode: z.enum(["practice", "exam", "hint"]).optional().default("practice"),
});

export const Route = createFileRoute("/app/question/$id")({
  validateSearch: (s) => search.parse(s),
  loader: ({ params }) => {
    const q = getQuestion(params.id);
    if (!q) throw notFound();
    return { question: q };
  },
  component: QuestionPage,
  notFoundComponent: () => (
    <div className="rounded-2xl border border-border bg-card p-8 text-center">
      <h2 className="text-xl font-semibold">Question not found</h2>
      <Link to="/app" className="mt-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
        Back to dashboard
      </Link>
    </div>
  ),
});

function QuestionPage() {
  const { question } = Route.useLoaderData();
  const { mode } = Route.useSearch();
  const navigate = useNavigate();

  const meta = getTopicMeta(question.topic);
  const [answer, setAnswer] = useState("");
  const [hintsShown, setHintsShown] = useState(0);
  const [result, setResult] = useState<MarkResult | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (result) return;
    const t = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(t);
  }, [result]);

  const submit = () => {
    if (answer.trim().length === 0) return;
    const r = markAnswer(question, answer);
    setResult(r);
    recordAttempt({
      questionId: question.id,
      topic: question.topic,
      subject: question.subject,
      answer,
      score: r.score,
      total: r.total,
    });
  };

  const reset = () => {
    setAnswer("");
    setHintsShown(0);
    setResult(null);
    setElapsed(0);
  };

  const nextQuestion = () => {
    const pool = getQuestionsByTopic(question.topic).filter((q) => q.id !== question.id);
    const pick = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
    if (pick) {
      navigate({ to: "/app/question/$id", params: { id: pick.id }, search: { mode } });
      reset();
    } else {
      navigate({ to: "/app/topics/$subject", params: { subject: "biology" } });
    }
  };

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span>Biology</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{meta.name}</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{question.marks} marks</span>
          <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
            {mode}
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Timer className="h-4 w-4" />
          <span className="tabular-nums">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
          <span className="text-xs">/ suggested {question.suggestedMinutes} min</span>
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
        <p className="text-lg font-semibold leading-snug md:text-xl">{question.prompt}</p>
        <p className="mt-2 text-sm text-muted-foreground">[{question.marks} marks]</p>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={!!result}
          placeholder="Type your answer here..."
          rows={8}
          className="mt-6 w-full resize-y rounded-2xl border border-input bg-background px-4 py-3 text-sm leading-relaxed shadow-inner outline-none ring-primary/30 placeholder:text-muted-foreground focus:ring-2 disabled:opacity-70"
        />

        {!result && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={submit}
              disabled={answer.trim().length === 0}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              Submit answer
            </button>
            {mode !== "exam" && (
              <button
                onClick={() => setHintsShown((h) => Math.min(h + 1, question.hints.length))}
                disabled={hintsShown >= question.hints.length}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary disabled:opacity-50"
              >
                <Lightbulb className="h-4 w-4 text-warning" />
                {hintsShown === 0 ? "Show hint" : `Show another hint (${hintsShown}/${question.hints.length})`}
              </button>
            )}
            <button
              onClick={nextQuestion}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"
            >
              <SkipForward className="h-4 w-4" />
              Skip
            </button>
          </div>
        )}

        {/* Hints */}
        {!result && hintsShown > 0 && mode !== "exam" && (
          <div className="mt-5 space-y-2">
            {question.hints.slice(0, hintsShown).map((h, i) => (
              <div key={i} className="flex items-start gap-2 rounded-xl border border-warning/30 bg-warning/10 p-3 text-sm">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-warning">Hint {i + 1}</div>
                  <p className="mt-0.5 text-foreground">{h}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {result && (
        <FeedbackPanel
          result={result}
          answer={answer}
          question={question}
          onTryAgain={reset}
          onNext={nextQuestion}
        />
      )}
    </div>
  );
}

function FeedbackPanel({
  result,
  answer,
  question,
  onTryAgain,
  onNext,
}: {
  result: MarkResult;
  answer: string;
  question: ReturnType<typeof getQuestion> & object;
  onTryAgain: () => void;
  onNext: () => void;
}) {
  const pct = Math.round((result.score / result.total) * 100);
  const upgraded = useMemo(() => upgradeAnswer(question, answer, result), [question, answer, result]);

  const headline =
    pct === 100
      ? "Full marks — that's an exam-ready answer."
      : pct >= 75
        ? "You're close. Just one or two points away from full marks."
        : pct >= 50
          ? "Your idea is on track — let's tighten the wording."
          : "Good start. Let's add the keywords examiners look for.";

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Score</div>
            <div className="mt-1 text-4xl font-extrabold tabular-nums">
              {result.score}
              <span className="text-muted-foreground">/{result.total}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{headline}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onTryAgain}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> Try again
            </button>
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              Next question
            </button>
          </div>
        </div>
        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-success">
            <Check className="h-4 w-4" /> Marks awarded
          </h3>
          {result.awarded.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No marks awarded yet — see the missing points opposite.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {result.awarded.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{a.point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-warning">
            <CircleAlert className="h-4 w-4" /> Missing marks
          </h3>
          {result.missed.length === 0 ? (
            <p className="mt-3 text-sm text-success">Nothing missing — clean answer.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {result.missed.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                  <span>{m.point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-soft">
        <div className="text-xs font-semibold uppercase tracking-wide text-primary">Examiner tip</div>
        <p className="mt-2 text-sm">{question.examinerTip}</p>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Model answer</h3>
        <p className="mt-3 leading-relaxed">{question.modelAnswer}</p>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" /> Upgrade my answer
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-xs font-medium text-muted-foreground">Your answer</div>
            <div className="mt-1 rounded-xl border border-border bg-secondary/40 p-3 text-sm leading-relaxed">
              {answer.trim() || <em className="text-muted-foreground">No answer provided.</em>}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-accent">Upgraded answer</div>
            <div className="mt-1 rounded-xl border border-accent/30 bg-accent/5 p-3 text-sm leading-relaxed">
              {upgraded}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}