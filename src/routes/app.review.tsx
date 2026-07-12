import { createFileRoute, Link } from "@tanstack/react-router";
import { useAttempts } from "../lib/storage";
import { getQuestion, getTopicMeta, getSubjectName } from "../lib/questions";
import { useAuth } from "../lib/auth";
import { Check, CircleAlert, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/app/review")({
  component: ReviewPage,
});

function ReviewPage() {
  const { user } = useAuth();
  const { attempts } = useAttempts();

  if (!user) return null;

  const ordered = [...attempts].filter((a) => a.examBoard === user.examBoard).reverse();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Review mistakes</h1>
        <p className="mt-1 text-muted-foreground">Your attempt history for your syllabus.</p>
      </div>

      {ordered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-sm text-muted-foreground">
            You haven&apos;t attempted any questions yet.{" "}
            <Link to="/app/subjects" className="font-medium text-primary hover:underline">
              Start with a topic
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {ordered.map((a) => {
            const q = getQuestion(a.questionId);
            if (!q) return null;
            const pct = Math.round((a.score / a.total) * 100);
            return (
              <li key={a.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">
                      {getSubjectName(user.examBoard, a.subject)} ·{" "}
                      {getTopicMeta(a.subject, a.topic).name} ·{" "}
                      {new Date(a.date).toLocaleDateString()}
                    </div>
                    <p className="mt-1 font-semibold">{q.questionText}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${
                      pct >= 80
                        ? "bg-success/15 text-success"
                        : pct >= 50
                          ? "bg-warning/15 text-warning"
                          : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {a.score}/{a.total}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">Your answer</div>
                    <div className="mt-1 rounded-xl border border-border bg-secondary/40 p-3 text-sm leading-relaxed">
                      {a.answer || <em className="text-muted-foreground">(empty)</em>}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">Model answer</div>
                    <div className="mt-1 rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm leading-relaxed">
                      {q.modelAnswer}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-muted-foreground">
                    {a.score === a.total ? (
                      <span className="inline-flex items-center gap-1 text-success">
                        <Check className="h-3.5 w-3.5" /> Full marks
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-warning">
                        <CircleAlert className="h-3.5 w-3.5" /> {a.total - a.score} mark
                        {a.total - a.score === 1 ? "" : "s"} away from full
                      </span>
                    )}
                  </div>
                  <Link
                    to="/app/question/$id"
                    params={{ id: q.id }}
                    search={{ mode: "practice" as const }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
                  >
                    <RotateCcw className="h-4 w-4" /> Try again
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
