import { createFileRoute } from "@tanstack/react-router";
import { COMMON_MISTAKES } from "../data/examKeywordBank";
import { getTopicMeta } from "../data/topicsConfig";

export const Route = createFileRoute("/app/common-mistakes")({
  component: CommonMistakes,
});

function CommonMistakes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Common Mistakes</h1>
        <p className="mt-1 text-muted-foreground">
          Replace vague GCSE/IGCSE answers with creditworthy markscheme phrasing.
        </p>
      </div>

      <div className="grid gap-4">
        {COMMON_MISTAKES.map((mistake) => (
          <article
            key={`${mistake.topic}:${mistake.bad}`}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {getTopicMeta("biology", mistake.topic).name}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-destructive">
                  Bad answer
                </div>
                <p className="mt-2 text-sm">{mistake.bad}</p>
              </div>
              <div className="rounded-xl border border-success/30 bg-success/10 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-success">
                  Better answer
                </div>
                <p className="mt-2 text-sm">{mistake.better}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{mistake.why}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
