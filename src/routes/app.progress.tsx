import { createFileRoute } from "@tanstack/react-router";
import { useAttempts, topicStats, statusFromAcc } from "../lib/storage";
import { TOPICS } from "../lib/questions";
import { useMemo } from "react";

export const Route = createFileRoute("/app/progress")({
  component: ProgressPage,
});

function ProgressPage() {
  const { attempts, reset } = useAttempts();

  const byDay = useMemo(() => {
    const map = new Map<string, { score: number; total: number }>();
    for (const a of attempts) {
      const d = new Date(a.date);
      const key = `${d.getMonth() + 1}/${d.getDate()}`;
      const cur = map.get(key) ?? { score: 0, total: 0 };
      cur.score += a.score;
      cur.total += a.total;
      map.set(key, cur);
    }
    return Array.from(map.entries()).slice(-10).map(([k, v]) => ({
      day: k,
      pct: v.total > 0 ? Math.round((v.score / v.total) * 100) : 0,
    }));
  }, [attempts]);

  const topics = Object.entries(TOPICS).map(([id, meta]) => {
    const s = topicStats(attempts, id);
    return { id, name: meta.name, ...s, status: statusFromAcc(s.acc, s.count) };
  });

  const lossAnalysis = useMemo(() => {
    if (attempts.length === 0) return [];
    const issues: string[] = [];
    const weak = topics.filter((t) => t.count > 0 && t.acc < 70).map((t) => t.name);
    if (weak.length > 0) issues.push(`Your answers in ${weak.slice(0, 2).join(" and ")} miss key examiner keywords.`);
    const avg = attempts.reduce((s, a) => s + a.score, 0) / Math.max(1, attempts.reduce((s, a) => s + a.total, 0));
    if (avg < 0.6) issues.push("You often describe but don't explain — link cause and effect.");
    if (avg < 0.5) issues.push("Your answers are sometimes too short for the number of marks available.");
    if (issues.length === 0) issues.push("You're hitting key markscheme points consistently. Push for the precise examiner phrasing next.");
    return issues;
  }, [attempts, topics]);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your progress</h1>
          <p className="mt-1 text-muted-foreground">How you're improving over time.</p>
        </div>
        {attempts.length > 0 && (
          <button
            onClick={() => {
              if (confirm("Reset all progress?")) reset();
            }}
            className="text-xs text-muted-foreground hover:text-destructive"
          >
            Reset
          </button>
        )}
      </div>

      {/* Score trend */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Average score</h2>
        {byDay.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Answer a few questions to start tracking your scores.</p>
        ) : (
          <TrendChart data={byDay} />
        )}
      </div>

      {/* Topic performance */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Topic performance</h2>
        <ul className="mt-4 divide-y divide-border">
          {topics.map((t) => (
            <li key={t.id} className="flex items-center gap-4 py-3">
              <div className="w-40 min-w-0 truncate text-sm font-medium">{t.name}</div>
              <div className="flex-1">
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full ${
                      t.status.tone === "success"
                        ? "bg-success"
                        : t.status.tone === "warning"
                          ? "bg-warning"
                          : t.status.tone === "destructive"
                            ? "bg-destructive"
                            : "bg-primary/30"
                    }`}
                    style={{ width: `${Math.max(t.count > 0 ? t.acc : 0, 2)}%` }}
                  />
                </div>
              </div>
              <div className="w-16 text-right tabular-nums text-sm font-semibold">
                {t.count > 0 ? `${t.acc}%` : "—"}
              </div>
              <span
                className={`hidden w-24 shrink-0 rounded-full px-2 py-0.5 text-center text-[10px] font-semibold uppercase tracking-wide md:inline-block ${
                  t.status.tone === "success"
                    ? "bg-success/15 text-success"
                    : t.status.tone === "warning"
                      ? "bg-warning/15 text-warning"
                      : t.status.tone === "destructive"
                        ? "bg-destructive/15 text-destructive"
                        : "bg-secondary text-muted-foreground"
                }`}
              >
                {t.status.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mark loss */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Mark loss analysis</h2>
        <ul className="mt-3 space-y-2">
          {lossAnalysis.map((l, i) => (
            <li key={i} className="rounded-xl border border-border bg-secondary/40 p-3 text-sm">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TrendChart({ data }: { data: { day: string; pct: number }[] }) {
  const w = 600;
  const h = 180;
  const pad = 24;
  const max = 100;
  const stepX = data.length > 1 ? (w - pad * 2) / (data.length - 1) : 0;
  const points = data.map((d, i) => [pad + i * stepX, h - pad - (d.pct / max) * (h - pad * 2)] as const);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const area = `${path} L ${pad + (data.length - 1) * stepX} ${h - pad} L ${pad} ${h - pad} Z`;

  return (
    <div className="mt-4 overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 50, 100].map((y) => (
          <line
            key={y}
            x1={pad}
            x2={w - pad}
            y1={h - pad - (y / 100) * (h - pad * 2)}
            y2={h - pad - (y / 100) * (h - pad * 2)}
            stroke="var(--border)"
            strokeDasharray="3 4"
          />
        ))}
        <path d={area} fill="url(#g)" />
        <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" />
        ))}
        {data.map((d, i) => (
          <text key={i} x={points[i][0]} y={h - 6} fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">
            {d.day}
          </text>
        ))}
      </svg>
    </div>
  );
}