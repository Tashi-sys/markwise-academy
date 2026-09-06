import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Check,
  CircleAlert,
  Lightbulb,
  SkipForward,
  Sparkles,
  Timer,
  ChevronRight,
  RotateCcw,
  AlertTriangle,
  BadgeCheck,
  LoaderCircle,
} from "lucide-react";
import { MathAnswerEditor } from "../components/MathAnswerEditor";
import { isMathsSubject } from "../lib/mathAnswer";
import {
  advancePracticeSession,
  completePracticeSession,
  ensurePracticeSession,
  getPracticeQuestionState,
  readPracticeSession,
  savePracticeQuestionState,
  type PracticeMode,
  type PracticeQuestionState,
} from "../lib/practiceSession";
import {
  getQuestion,
  getTopicMeta,
  filterQuestions,
  getSubjectName,
  type MarkPoint,
  type Question,
} from "../lib/questions";
import { markAnswer, upgradeAnswer, type MarkResult } from "../lib/marking";
import { recordAttempt, recordFlashcards } from "../lib/storage";
import { canUseQuestion } from "../lib/userSyllabus";
import { useAuth } from "../lib/auth";
import { generateAnswerUpgrade } from "../lib/api/upgrade-answer.functions";
import { markWithAIExaminer } from "../lib/api/exam-training.functions";
import { makeFlashcardsWithAI } from "../lib/api/ai-tutor.functions";
import {
  answerLengthFeedback,
  answerQualityTags,
  detectCommandWord,
  detectRedFlags,
  generateFlashcards,
  timingFeedback,
  whyLostMarks,
} from "../lib/examTraining";
import { toast } from "sonner";
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
      <Link
        to="/app/dashboard"
        className="mt-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
      >
        Back to dashboard
      </Link>
    </div>
  ),
});

function QuestionPage() {
  const { question } = Route.useLoaderData() as { question: Question };
  const { mode } = Route.useSearch();
  const { user } = useAuth();

  if (!user) return null;
  if (!canUseQuestion(user, question)) throw notFound();

  return (
    <PracticeQuestion
      key={`${user.id}:${question.id}:${mode}`}
      question={question}
      mode={mode}
      userId={user.id}
    />
  );
}

function PracticeQuestion({
  question,
  mode,
  userId,
}: {
  question: Question;
  mode: PracticeMode;
  userId: string;
}) {
  const navigate = useNavigate();
  const [state, setState] = useState<PracticeQuestionState>({
    answer: "",
    hintsShown: 0,
    result: null,
    elapsed: 0,
    firstScore: null,
  });
  const { answer, hintsShown, result, elapsed, firstScore } = state;
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [nextLoading, setNextLoading] = useState(false);
  const navigationPending = useRef(false);
  const setAnswer = (value: string) => setState((current) => ({ ...current, answer: value }));

  useEffect(() => {
    const session = ensurePracticeSession(
      userId,
      question,
      filterQuestions({
        examBoard: question.examBoard,
        qualification: question.qualification,
        subject: question.subject,
        topic: question.topic,
      }),
      mode,
    );
    setState(getPracticeQuestionState(session, question.id));
    setSessionId(session.id);
  }, [userId, question, mode]);

  useEffect(() => {
    if (sessionId) savePracticeQuestionState(userId, sessionId, question.id, state);
  }, [userId, sessionId, question.id, state]);

  useEffect(() => {
    if (!sessionId || result || nextLoading) return;
    const t = window.setInterval(
      () =>
        setState((current) => ({
          ...current,
          elapsed: current.elapsed + 1,
        })),
      1000,
    );
    return () => window.clearInterval(t);
  }, [sessionId, result, nextLoading]);

  const meta = getTopicMeta(question.subject, question.topic);
  const subjectLabel = getSubjectName(question.examBoard, question.subject);
  const isMaths = isMathsSubject(question.subject);

  const submit = () => {
    if (answer.trim().length === 0 || nextLoading || result || !sessionId) return;
    const r = markAnswer(question, answer);
    setState((current) => ({
      ...current,
      result: r,
      firstScore: current.firstScore ?? { score: r.score, total: r.total },
    }));
    const qualityTags = answerQualityTags(answer, question, r);
    recordAttempt({
      questionId: question.id,
      topic: question.topic,
      subject: question.subject,
      examBoard: question.examBoard,
      qualification: question.qualification,
      answer,
      score: r.score,
      total: r.total,
      elapsedSeconds: elapsed,
      qualityTags,
      missedPoints: r.missed.map((p) => p.point),
      awardedPoints: r.awarded.map((p) => p.point),
    });
    const cards = generateFlashcards(question, r);
    recordFlashcards(cards);
    if (cards.length > 0)
      toast.success(`${cards.length} mistake flashcard${cards.length === 1 ? "" : "s"} created`);
    if (r.score === r.total) toast.success("Full marks badge unlocked");
    else toast.success("Progress saved");
  };

  const reset = () => {
    if (navigationPending.current) return;
    setState((current) => ({
      answer: "",
      hintsShown: 0,
      result: null,
      elapsed: 0,
      firstScore: current.firstScore,
    }));
  };

  const nextQuestion = async () => {
    if (!sessionId || navigationPending.current) return;
    navigationPending.current = true;
    setNextLoading(true);
    try {
      const session =
        savePracticeQuestionState(userId, sessionId, question.id, state) ??
        readPracticeSession(userId);
      if (!session || session.id !== sessionId || session.currentQuestionId !== question.id) {
        throw new Error("The practice session has changed. Please resume it from your dashboard.");
      }
      const currentIndex = session.questionIds.indexOf(question.id);
      const nextId = session.questionIds.slice(currentIndex + 1).find((id) => getQuestion(id));
      if (nextId) {
        // The destination restores its own snapshot before moving the session cursor.
        await navigate({ to: "/app/question/$id", params: { id: nextId }, search: { mode } });
      } else {
        await navigate({
          to: "/app/topics/$subject",
          params: { subject: question.subject },
          search: { examBoard: question.examBoard, qualification: question.qualification },
        });
        completePracticeSession(userId, sessionId, question.id);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Couldn’t load the next question. Please try again.",
      );
    } finally {
      navigationPending.current = false;
      setNextLoading(false);
    }
  };

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const commandWord = detectCommandWord(question.questionText);
  const redFlags = detectRedFlags(answer);
  const lengthFeedback = isMaths ? null : answerLengthFeedback(answer, question.marks);

  if (!sessionId) {
    return (
      <div role="status" className="p-8 text-center text-muted-foreground">
        Restoring your practice…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6" aria-busy={nextLoading}>
      <Dialog.Root open={nextLoading}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 text-center shadow-soft outline-none"
            onEscapeKeyDown={(event) => event.preventDefault()}
            onPointerDownOutside={(event) => event.preventDefault()}
          >
            <LoaderCircle
              className="mx-auto mb-4 h-8 w-8 animate-spin text-primary"
              aria-hidden="true"
            />
            <Dialog.Title className="text-lg font-semibold">Loading next question</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-muted-foreground">
              Your progress is saved. Getting your next question ready…
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span>{subjectLabel}</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{meta.name}</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{question.marks} marks</span>
          <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
            {mode}
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Timer className="h-4 w-4 animate-pulse-soft" />
          <span className="tabular-nums">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
          <span className="text-xs">/ suggested {question.suggestedMinutes} min</span>
        </div>
      </div>

      <div className="animate-slide-right glass-card rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
        <p className="text-lg font-semibold leading-snug md:text-xl">{question.questionText}</p>
        <p className="mt-2 text-sm text-muted-foreground">[{question.marks} marks]</p>

        {commandWord && (
          <div className="animate-enter mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm">
            <div className="font-semibold text-primary">Command word: {commandWord.word}</div>
            <p className="mt-1 text-muted-foreground">{commandWord.meaning}</p>
            <p className="mt-1 text-foreground">{commandWord.reminder}</p>
          </div>
        )}

        {isMaths ? (
          <MathAnswerEditor
            value={answer}
            onChange={setAnswer}
            disabled={!!result || nextLoading}
            resetKey={question.id}
          />
        ) : (
          <textarea
            aria-label="Your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={!!result || nextLoading}
            placeholder="Type your answer here..."
            rows={8}
            className="mt-6 w-full resize-y rounded-2xl border border-input bg-background px-4 py-3 text-sm leading-relaxed shadow-inner outline-none ring-primary/30 placeholder:text-muted-foreground focus:scale-[1.01] focus:ring-2 disabled:opacity-70"
          />
        )}

        {!isMaths && !result && answer.trim().length > 0 && (
          <div className="animate-enter mt-2 text-right text-xs text-muted-foreground">
            {answer.trim().split(/\s+/).filter(Boolean).length} words · aim for about{" "}
            {question.marks * 8} words
          </div>
        )}

        {!result && (redFlags.length > 0 || lengthFeedback) && (
          <div className="mt-4 space-y-2">
            {redFlags.map((flag) => (
              <div
                key={flag.phrase}
                className="animate-shake-soft flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <p>
                  You wrote "{flag.phrase}". {flag.advice}
                </p>
              </div>
            ))}
            {lengthFeedback && (
              <div className="rounded-xl border border-warning/30 bg-warning/10 p-3 text-sm">
                {lengthFeedback}
              </div>
            )}
          </div>
        )}

        {!result && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={submit}
              disabled={answer.trim().length === 0 || nextLoading}
              className="interactive-button inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              Submit answer
            </button>
            {mode !== "exam" && (
              <button
                type="button"
                onClick={() =>
                  setState((current) => ({
                    ...current,
                    hintsShown: Math.min(current.hintsShown + 1, question.hints.length),
                  }))
                }
                disabled={hintsShown >= question.hints.length || nextLoading}
                className="interactive-button inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary disabled:opacity-50"
              >
                <Lightbulb className="h-4 w-4 text-warning" />
                {hintsShown === 0
                  ? "Show hint"
                  : `Show another hint (${hintsShown}/${question.hints.length})`}
              </button>
            )}
            <button
              type="button"
              onClick={nextQuestion}
              disabled={nextLoading}
              className="interactive-button inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"
            >
              {nextLoading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <SkipForward className="h-4 w-4" />
              )}
              {nextLoading ? "Loading…" : "Skip"}
            </button>
          </div>
        )}

        {!result && hintsShown > 0 && mode !== "exam" && (
          <div className="mt-5 space-y-2">
            {question.hints.slice(0, hintsShown).map((h, i) => (
              <div
                key={i}
                className="animate-enter flex items-start gap-2 rounded-xl border border-warning/30 bg-warning/10 p-3 text-sm"
              >
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-warning">
                    Hint {i + 1}
                  </div>
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
          elapsedSeconds={elapsed}
          firstScore={firstScore}
          onTryAgain={reset}
          onNext={nextQuestion}
          nextLoading={nextLoading}
        />
      )}
    </div>
  );
}

function FeedbackPanel({
  result,
  answer,
  question,
  elapsedSeconds,
  firstScore,
  onTryAgain,
  onNext,
  nextLoading,
}: {
  result: MarkResult;
  answer: string;
  question: Question;
  elapsedSeconds: number;
  firstScore: { score: number; total: number } | null;
  onTryAgain: () => void;
  onNext: () => void;
  nextLoading: boolean;
}) {
  const pct = Math.round((result.score / result.total) * 100);
  const fallbackUpgrade = useMemo(
    () => upgradeAnswer(question, answer, result),
    [question, answer, result],
  );
  const [upgradeLoading, setUpgradeLoading] = useState(false);
  const [upgrade, setUpgrade] = useState<Awaited<ReturnType<typeof generateAnswerUpgrade>> | null>(
    null,
  );
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<Awaited<ReturnType<typeof markWithAIExaminer>> | null>(
    null,
  );
  const [flashcardLoading, setFlashcardLoading] = useState(false);
  const [showLostMarks, setShowLostMarks] = useState(false);
  const qualityTags = useMemo(
    () => answerQualityTags(answer, question, result),
    [answer, question, result],
  );
  const timing = timingFeedback(elapsedSeconds, question.marks, result.score, result.total);
  const improvement =
    firstScore && firstScore.score !== result.score
      ? `Improved from ${firstScore.score}/${firstScore.total} to ${result.score}/${result.total}`
      : null;

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
      <div
        className={`glass-card rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8 ${
          result.score === result.total ? "confetti-burst" : ""
        }`}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Score
            </div>
            <div className="score-orb mt-1 flex h-24 w-24 flex-col items-center justify-center rounded-full text-3xl font-extrabold text-white tabular-nums">
              <span>{result.score}</span>
              <span className="-mt-1 text-sm text-white/75">/{result.total}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{headline}</p>
            {improvement && (
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                <BadgeCheck className="h-3.5 w-3.5" />
                {improvement} · +{result.score - (firstScore?.score ?? result.score)} marks gained
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onTryAgain}
              disabled={nextLoading}
              className="interactive-button inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> Try Again for Full Marks
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={nextLoading}
              className="interactive-button inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              {nextLoading && <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {nextLoading ? "Loading…" : "Next question"}
            </button>
          </div>
        </div>
        {result.score === result.total && (
          <div className="mt-5 rounded-2xl border border-success/30 bg-success/10 p-4 text-sm font-semibold text-success">
            Full marks achieved. Badge unlocked.
          </div>
        )}
        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="progress-fill h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Answer quality
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {qualityTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{timing}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-success">
            <Check className="h-4 w-4" /> Marks awarded
          </h3>
          {result.awarded.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              No marks awarded yet — see the missing points opposite.
            </p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {result.awarded.map((a, i) => (
                <li key={i} className="animate-enter flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 animate-pop text-success" />
                  <span>
                    <span className="font-medium">{markschemeLine(a.point, "awarded")}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      Credited wording: {a.matchedKeyword}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-warning">
            <CircleAlert className="h-4 w-4" /> Missing marks
          </h3>
          {result.missed.length === 0 ? (
            <p className="mt-3 text-sm text-success">Nothing missing — clean answer.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {result.missed.map((m, i) => (
                <li key={i} className="animate-enter flex items-start gap-2">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 animate-pop text-warning" />
                  <span>
                    <span className="font-medium">{markschemeLine(m.point, "missed")}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      Use markscheme language such as: {acceptedLanguage(m)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="animate-enter-delay-2 rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-soft">
        <div className="text-xs font-semibold uppercase tracking-wide text-primary">
          Examiner tip
        </div>
        <p className="mt-2 text-sm">{question.examinerTip}</p>
      </div>

      <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={async () => {
              setAiLoading(true);
              try {
                const response = await markWithAIExaminer({
                  data: {
                    questionText: question.questionText,
                    studentAnswer: answer,
                    topic: question.topic,
                    marks: question.marks,
                    markSchemePoints: question.markSchemePoints,
                    modelAnswer: question.modelAnswer,
                  },
                });
                setAiResult(response);
                toast.success("AI examiner mark complete");
              } finally {
                setAiLoading(false);
              }
            }}
            disabled={aiLoading}
            className="interactive-button inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 disabled:opacity-60"
          >
            <Sparkles className="h-4 w-4" />
            {aiLoading ? "AI Examiner is marking..." : "Mark with AI Examiner"}
          </button>
          <button
            type="button"
            disabled={flashcardLoading || result.missed.length === 0}
            onClick={async () => {
              setFlashcardLoading(true);
              try {
                const response = await makeFlashcardsWithAI({
                  data: {
                    sourceText: result.missed.map((point) => point.point).join("\n"),
                    topic: question.topic,
                    count: Math.min(6, Math.max(1, result.missed.length)),
                  },
                });
                recordFlashcards(
                  response.flashcards.map((card, index) => ({
                    id: `${question.id}:ai:${Date.now()}:${index}`,
                    topic: card.topic || question.topic,
                    subject: question.subject,
                    questionId: question.id,
                    front: card.front,
                    back: card.back,
                    originalQuestion: question.questionText,
                    markSchemePoint: card.back,
                    createdAt: Date.now(),
                  })),
                );
                toast.success("AI flashcards created");
              } finally {
                setFlashcardLoading(false);
              }
            }}
            className="interactive-button inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary disabled:opacity-60"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            {flashcardLoading ? "Creating flashcards..." : "Make Flashcards"}
          </button>
          <button
            type="button"
            onClick={() => setShowLostMarks((v) => !v)}
            className="interactive-button inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
          >
            <CircleAlert className="h-4 w-4 text-warning" />
            Why did I lose marks?
          </button>
        </div>

        {showLostMarks && (
          <div className="mt-4 rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm">
            {whyLostMarks(result)}
          </div>
        )}

        {aiResult && (
          <div className="animate-enter mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">AI examiner result</h3>
              <span className="animate-pop rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                {aiResult.score}/{aiResult.totalMarks}
              </span>
            </div>
            <div className="mt-3 inline-flex rotate-[-2deg] rounded-md border-2 border-primary/60 px-3 py-1 text-xs font-black uppercase tracking-wide text-primary">
              Marked
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-success">
                  Awarded marks
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  {aiResult.awardedMarks.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{markText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-warning">
                  Missing marks
                </div>
                <ul className="mt-2 space-y-2 text-sm">
                  {aiResult.missingMarks.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                      <span>{markText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm">{aiResult.examinerComment}</p>
            <p className="mt-2 text-sm font-medium text-primary">{aiResult.improvementTip}</p>
          </div>
        )}
      </div>

      <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Model answer
        </h3>
        <p className="mt-3 leading-relaxed">{question.modelAnswer}</p>
      </div>

      <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" /> Upgrade my answer
        </h3>
        <button
          type="button"
          disabled={upgradeLoading}
          onClick={async () => {
            setUpgradeLoading(true);
            try {
              const response = await generateAnswerUpgrade({
                data: {
                  questionText: question.questionText,
                  studentAnswer: answer,
                  topic: question.topic,
                  marks: question.marks,
                  markSchemePoints: question.markSchemePoints,
                  modelAnswer: question.modelAnswer,
                },
              });
              setUpgrade(response);
            } finally {
              setUpgradeLoading(false);
            }
          }}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft hover:bg-accent/90 disabled:opacity-60"
        >
          <Sparkles className="h-4 w-4" />
          {upgradeLoading ? "Upgrading your answer..." : "Upgrade My Answer"}
        </button>
        {upgradeLoading && (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="h-24 rounded-xl skeleton-shine" />
            <div className="h-24 rounded-xl skeleton-shine" />
          </div>
        )}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-xs font-medium text-muted-foreground">Original Answer</div>
            <div className="mt-1 rounded-xl border border-border bg-secondary/40 p-3 text-sm leading-relaxed">
              {answer.trim() || <em className="text-muted-foreground">No answer provided.</em>}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-accent">Upgraded Full-Mark Answer</div>
            <div className="mt-1 rounded-xl border border-accent/30 bg-accent/5 p-3 text-sm leading-relaxed">
              <span className={upgrade ? "animate-enter inline-block" : ""}>
                {upgrade?.upgradedAnswer ?? fallbackUpgrade}
              </span>
            </div>
          </div>
        </div>
        {upgrade && (
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <UpgradeDetail title="Keywords Added" body={upgrade.keywordsAdded.join(", ")} />
            <UpgradeDetail title="Why This Scores Higher" body={upgrade.whyThisScoresHigher} />
            <UpgradeDetail title="Exam Technique Tip" body={upgrade.examTechniqueTip} />
          </div>
        )}
      </div>
    </div>
  );
}

function markText(item: string | { point: string }) {
  return typeof item === "string" ? item : item.point;
}

function UpgradeDetail({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 p-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      <p className="mt-1 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function markschemeLine(point: string, status: "awarded" | "missed") {
  const text = point.replace(/\.$/, "");
  return status === "awarded" ? `1 mark awarded for: ${text}.` : `1 mark available for: ${text}.`;
}

function acceptedLanguage(point: MarkPoint) {
  return [...new Set(point.keywords.flat().map((keyword) => keyword.trim()))]
    .filter(Boolean)
    .slice(0, 5)
    .join(", ");
}
