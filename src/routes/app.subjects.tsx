import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ArrowRight } from "lucide-react";
import { SUBJECTS } from "../lib/questions";

export const Route = createFileRoute("/app/subjects")({
  component: SubjectsPage,
});

function SubjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Choose a subject</h1>
        <p className="mt-1 text-muted-foreground">More subjects unlocking soon.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SUBJECTS.map((s) => {
          const available = s.status === "available";
          const Card = (
            <div
              className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition ${
                available ? "hover:-translate-y-0.5 hover:shadow-glow" : "opacity-70"
              }`}
            >
              <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl`} />
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{s.name}</h2>
                {available ? (
                  <span className="rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-success">
                    Available
                  </span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    <Lock className="h-3 w-3" /> Soon
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
              {available && (
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open topics <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              )}
            </div>
          );
          return available ? (
            <Link key={s.id} to="/app/topics/$subject" params={{ subject: s.id }}>
              {Card}
            </Link>
          ) : (
            <div key={s.id}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
}