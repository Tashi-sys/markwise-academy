import { createFileRoute, Link } from "@tanstack/react-router";
import { TOPICS, QUESTIONS } from "../lib/questions";

export const Route = createFileRoute("/app/practice")({
  component: PracticeIndex,
});

function PracticeIndex() {
  const topics = Object.entries(TOPICS).filter(([id]) =>
    QUESTIONS.some((q) => q.topic === id),
  );
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Practise</h1>
      <p className="text-muted-foreground">Pick a topic to begin.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map(([id, meta]) => (
          <Link
            key={id}
            to="/app/practice/$topic"
            params={{ topic: id }}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:-translate-y-0.5 hover:shadow-glow"
          >
            <div className="font-semibold">{meta.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">{meta.blurb}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}