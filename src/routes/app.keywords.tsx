import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BIOLOGY_KEYWORD_BANK } from "../data/examKeywordBank";
import { getTopicMeta } from "../data/topicsConfig";

export const Route = createFileRoute("/app/keywords")({
  component: ExamKeywords,
});

function ExamKeywords() {
  const topics = Object.keys(BIOLOGY_KEYWORD_BANK);
  const [topic, setTopic] = useState(topics[0] ?? "ecology");
  const [selected, setSelected] = useState(BIOLOGY_KEYWORD_BANK[topic]?.[0]?.keyword ?? "");
  const keywords = BIOLOGY_KEYWORD_BANK[topic] ?? [];
  const entry = keywords.find((item) => item.keyword === selected) ?? keywords[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Exam Keywords</h1>
        <p className="mt-1 text-muted-foreground">
          Biology phrases students need to write in markscheme language.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {topics.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => {
              setTopic(id);
              setSelected(BIOLOGY_KEYWORD_BANK[id]?.[0]?.keyword ?? "");
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium ${
              topic === id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-secondary"
            }`}
          >
            {getTopicMeta("biology", id).name}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="grid gap-2 sm:grid-cols-2">
            {keywords.map((item) => (
              <button
                key={item.keyword}
                type="button"
                onClick={() => setSelected(item.keyword)}
                className={`rounded-xl border p-3 text-left text-sm transition ${
                  selected === item.keyword
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background hover:bg-secondary"
                }`}
              >
                {item.keyword}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          {entry ? (
            <>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Definition
              </div>
              <h2 className="mt-2 text-2xl font-bold">{entry.keyword}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{entry.definition}</p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">No keywords for this topic yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
