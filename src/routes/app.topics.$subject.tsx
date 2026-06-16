import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TOPICS, QUESTIONS } from "../lib/questions";
import { useAttempts, topicStats, statusFromAcc } from "../lib/storage";

export const Route = createFileRoute("/app/topics/$subject")({
  loader: ({ params }) => {
    if (params.subject !== "biology") throw notFound();
    return { subject: params.subject };
  },
  component: TopicsPage,
  notFoundComponent: () => (
    <div className="rounded-2xl border border-border bg-card p-8 text-center">
      <h2 className="text-xl font-semibold">Subject not available yet</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Only Biology is unlocked in this preview.
      </p>
      <Link to="/app/subjects" className="mt-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
        Back to subjects
      </Link>
    </div>
  ),
});

function TopicsPage() {
  const { attempts } = useAttempts();

  const topicEntries = Object.entries(TOPICS).map(([id, meta]) => {
    const stats = topicStats(attempts, id);
    const status = statusFromAcc(stats.acc, stats.count);
    const qCount = QUESTIONS.filter((q) => q.topic === id).length;
    return { id, meta, stats, status, qCount };
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Biology · Topics</h1>
        <p className="mt-1 text-muted-foreground">Pick a topic to start practising.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topicEntries.map(({ id, meta, stats, status, qCount }) => {
          const hasQ = qCount > 0;
          const toneClass =
            status.tone === "success"
              ? "bg-success/15 text-success"
              : status.tone === "warning"
                ? "bg-warning/15 text-warning"
                : status.tone === "destructive"
                  ? "bg-destructive/15 text-destructive"
                  : "bg-secondary text-muted-foreground";
          const inner = (
            <div
              className={`group h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition ${
                hasQ ? "hover:-translate-y-0.5 hover:shadow-glow" : "opacity-70"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{meta.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{meta.blurb}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${toneClass}`}>
                  {status.label}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>Accuracy: <strong className="text-foreground">{stats.acc}%</strong></span>
                <span>{stats.count} attempted · {qCount} question{qCount === 1 ? "" : "s"}</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className={`h-full rounded-full ${
                    status.tone === "success"
                      ? "bg-success"
                      : status.tone === "warning"
                        ? "bg-warning"
                        : status.tone === "destructive"
                          ? "bg-destructive"
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
              {!hasQ && <div className="mt-4 text-xs italic text-muted-foreground">Questions coming soon</div>}
            </div>
          );
          return hasQ ? (
            <Link key={id} to="/app/practice/$topic" params={{ topic: id }}>
              {inner}
            </Link>
          ) : (
            <div key={id}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}