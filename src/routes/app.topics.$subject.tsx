import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Layers, Settings } from "lucide-react";
import { z } from "zod";
import { getTopicsForSubjectAndSyllabus, getTopicMeta } from "../data/topicsConfig";
import { filterQuestions } from "../data/questionBank";
import {
  getExamBoard,
  getQualificationLabel,
  getSubjectName,
  getSyllabusCode,
} from "../data/syllabusConfig";
import { useAttempts, topicStats, statusFromAcc } from "../lib/storage";
import { useAuth } from "../lib/auth";
import { findUserSubjectSyllabus } from "../lib/userSyllabus";

const topicSearch = z.object({
  examBoard: z.string().optional(),
  qualification: z.string().optional(),
});

export const Route = createFileRoute("/app/topics/$subject")({
  validateSearch: (s) => topicSearch.parse(s),
  loader: ({ params }) => ({ subject: params.subject }),
  component: TopicsPage,
  notFoundComponent: () => (
    <div className="rounded-2xl border border-border bg-card p-8 text-center">
      <h2 className="text-xl font-semibold">Subject not found</h2>
      <Link
        to="/app/subjects"
        className="mt-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
      >
        Back to subjects
      </Link>
    </div>
  ),
});

function TopicsPage() {
  const { subject } = Route.useParams();
  const search = Route.useSearch();
  const { user } = useAuth();
  const { attempts } = useAttempts();

  if (!user) return null;

  const selection = findUserSubjectSyllabus(user, subject, search.examBoard, search.qualification);
  if (!selection) throw notFound();

  const activeExamBoard = selection.examBoard;
  const activeQualification = selection.qualification;
  const subjectName = getSubjectName(activeExamBoard, subject);
  const examBoard = getExamBoard(activeExamBoard);
  const syllabusCode = getSyllabusCode(activeExamBoard, subject);
  const qualificationLabel = getQualificationLabel(activeQualification);

  const topicsMeta = getTopicsForSubjectAndSyllabus({
    subjectId: subject,
    examBoard: activeExamBoard,
    qualification: activeQualification,
    syllabusCode,
  });
  const syllabusQuestions = filterQuestions({
    qualification: activeQualification,
    examBoard: activeExamBoard,
    subject,
    syllabusCode,
  });
  const userAttempts = attempts.filter(
    (a) =>
      a.examBoard === activeExamBoard && a.qualification === activeQualification && a.subject === subject,
  );

  const questionTopicIds = [...new Set(syllabusQuestions.map((question) => question.topic))];
  const topicEntries = questionTopicIds
    .filter((id) => topicsMeta[id] || getTopicMeta(subject, id))
    .map((id) => {
      const meta = topicsMeta[id] ?? getTopicMeta(subject, id);
      const stats = topicStats(userAttempts, id, subject);
      const status = statusFromAcc(stats.acc, stats.count);
      const qCount = syllabusQuestions.filter((question) => question.topic === id).length;
      return { id, meta, stats, status, qCount, hasQ: qCount > 0 };
    });

  const hasAnyQuestions = topicEntries.some((topic) => topic.hasQ);
  const totalQuestions = syllabusQuestions.length;

  return (
    <div className="animate-enter space-y-8">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-primary">
              <Layers className="h-4 w-4" />
              Active syllabus
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {subjectName} · {examBoard?.name ?? activeExamBoard} · {syllabusCode ?? "No code"}
            </h1>
            <p className="mt-1 text-muted-foreground">
              {subjectName} • {examBoard?.name ?? activeExamBoard} • {qualificationLabel}
              {syllabusCode ? ` • ${syllabusCode}` : ""}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:w-72">
            <div className="rounded-xl border border-border bg-background/60 p-3">
              <div className="text-xs font-medium text-muted-foreground">Topics</div>
              <div className="mt-1 text-2xl font-bold">{topicEntries.length}</div>
            </div>
            <div className="rounded-xl border border-border bg-background/60 p-3">
              <div className="text-xs font-medium text-muted-foreground">Questions</div>
              <div className="mt-1 text-2xl font-bold">{totalQuestions}</div>
            </div>
          </div>
        </div>
      </div>

      {!hasAnyQuestions ? (
        <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
          <BookOpen className="mx-auto h-9 w-9 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No topics found for this syllabus yet.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Check your syllabus selection or try another exam board.
          </p>
          <Link
            to="/app/profile"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            <Settings className="h-4 w-4" />
            Change syllabus
          </Link>
        </div>
      ) : (
        <div className="stagger-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicEntries.map(({ id, meta, stats, status, qCount, hasQ }) => {
            const toneClass =
              status.tone === "success"
                ? "bg-success/15 text-success shadow-[0_0_24px_oklch(0.7_0.17_152_/_0.22)]"
                : status.tone === "warning"
                  ? "bg-primary/15 text-primary shadow-[0_0_24px_oklch(0.548_0.222_263_/_0.18)]"
                  : status.tone === "destructive"
                    ? "bg-warning/15 text-warning shadow-[0_0_24px_oklch(0.78_0.16_75_/_0.22)]"
                    : "bg-secondary text-muted-foreground";
            const inner = (
              <div
                className={`interactive-card glass-card group h-full rounded-2xl border border-border bg-card p-5 shadow-soft ${
                  hasQ ? "" : "shimmer-lock opacity-75"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{meta.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{meta.blurb}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${toneClass}`}
                  >
                    {status.label}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    Accuracy: <strong className="text-foreground">{stats.acc}%</strong>
                  </span>
                  <span>
                    {stats.count} attempted · {qCount} question{qCount === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`progress-fill h-full rounded-full ${
                      status.tone === "success"
                        ? "bg-success"
                        : status.tone === "warning"
                          ? "bg-primary"
                          : status.tone === "destructive"
                            ? "bg-warning"
                            : "bg-primary/40"
                    }`}
                    style={{ width: `${stats.acc}%` }}
                  />
                </div>
                {hasQ && (
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Practise <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                )}
                {!hasQ && (
                  <div className="mt-4 text-xs italic text-muted-foreground">
                    No questions added yet
                  </div>
                )}
              </div>
            );
            return hasQ ? (
              <Link
                key={id}
                to="/app/practice/$subject/$topic"
                params={{ subject, topic: id }}
                search={{ examBoard: activeExamBoard, qualification: activeQualification }}
              >
                {inner}
              </Link>
            ) : (
              <div key={id}>{inner}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
