import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Trophy, Target, TrendingUp, ArrowRight, Check, CircleAlert } from "lucide-react";
import { useAttempts, topicStats, computeStreak } from "../lib/storage";
import { TOPICS, getQuestion } from "../lib/questions";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

function Dashboard() {
  const { attempts } = useAttempts();

  const totalQ = attempts.length;
  const totalScore = attempts.reduce((s, a) => s + a.score, 0);
  const totalPossible = attempts.reduce((s, a) => s + a.total, 0);
  const avg = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
  const streak = computeStreak(attempts);

  const topicAcc = Object.keys(TOPICS).map((t) => ({ t, ...topicStats(attempts, t) }));
  const tried = topicAcc.filter((x) => x.count > 0);
  const strongest = tried.length ? [...tried].sort((a, b) => b.acc - a.acc)[0] : null;
  const weakest = tried.length ? [...tried].sort((a, b) => a.acc - b.acc)[0] : null;

  const recent = [...attempts].slice(-5).reverse();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back. Ready to gain some marks?</h1>
        <p className="mt-1 text-muted-foreground">Your training dashboard.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatCard icon={<Target className="h-4 w-4" />} label="Attempted" value={String(totalQ)} />
        <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Average" value={`${avg}%`} />
        <StatCard icon={<Trophy className="h-4 w-4" />} label="Strongest" value={strongest ? TOPICS[strongest.t].name : "—"} small />
        <StatCard icon={<CircleAlert className="h-4 w-4" />} label="Weakest" value={weakest ? TOPICS[weakest.t].name : "—"} small tone="warning" />
        <StatCard icon={<Flame className="h-4 w-4" />} label="Streak" value={`${streak} day${streak === 1 ? "" : "s"}`} />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recommended practice</h2>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Personalised
            </span>
          </div>
          {weakest ? (
            <>
              <p className="mt-2 text-muted-foreground">
                You lost the most marks in <strong className="text-foreground">{TOPICS[weakest.t].name}</strong>.
                Try a structured exam question to push that accuracy up.
              </p>
              <Link
                to="/app/practice/$topic"
                params={{ topic: weakest.t }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                Practise {TOPICS[weakest.t].name} <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          ) : (
            <>
              <p className="mt-2 text-muted-foreground">
                Start with a 4-mark Ecology question — it's a classic IGCSE explainer.
              </p>
              <Link
                to="/app/practice/$topic"
                params={{ topic: "ecology" }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                Start: Ecology <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Quick actions</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/app/subjects" className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary">
              Browse subjects
            </Link>
            <Link to="/app/progress" className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary">
              View progress
            </Link>
            <Link to="/app/review" className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary">
              Review mistakes
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent feedback</h2>
          <Link to="/app/review" className="text-sm text-primary hover:underline">View all</Link>
        </div>
        {recent.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No attempts yet. Answer your first question to populate your feedback log.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-border">
            {recent.map((a) => {
              const q = getQuestion(a.questionId);
              const pct = Math.round((a.score / a.total) * 100);
              return (
                <li key={a.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <div className="min-w-0">
                    <div className="truncate font-medium">{q?.prompt ?? "Question"}</div>
                    <div className="text-xs text-muted-foreground">
                      {TOPICS[a.topic]?.name ?? a.topic}
                    </div>
                  </div>
                  <span
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      pct >= 80
                        ? "bg-success/15 text-success"
                        : pct >= 50
                          ? "bg-warning/15 text-warning"
                          : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {pct >= 80 ? <Check className="h-3 w-3" /> : <CircleAlert className="h-3 w-3" />}
                    {a.score}/{a.total}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone = "primary",
  small = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: "primary" | "warning";
  small?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className={tone === "warning" ? "text-warning" : "text-primary"}>{icon}</span>
        {label}
      </div>
      <div className={`mt-2 font-bold ${small ? "text-base" : "text-2xl"}`}>{value}</div>
    </div>
  );
}