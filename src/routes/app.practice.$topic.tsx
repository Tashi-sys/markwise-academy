import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { getQuestionsByTopic, getTopicMeta } from "../lib/questions";

export const Route = createFileRoute("/app/practice/$topic")({
  component: PracticeSetup,
});

type Length = "any" | "1-2" | "3-4" | "5-6";
type Difficulty = "any" | "easy" | "medium" | "hard";
type Mode = "practice" | "exam" | "hint";

function PracticeSetup() {
  const { topic } = Route.useParams();
  const meta = getTopicMeta(topic);
  const all = getQuestionsByTopic(topic);
  const navigate = useNavigate();

  const [length, setLength] = useState<Length>("any");
  const [difficulty, setDifficulty] = useState<Difficulty>("any");
  const [mode, setMode] = useState<Mode>("practice");

  const filtered = all.filter((q) => {
    if (difficulty !== "any" && q.difficulty !== difficulty) return false;
    if (length === "1-2" && !(q.marks >= 1 && q.marks <= 2)) return false;
    if (length === "3-4" && !(q.marks >= 3 && q.marks <= 4)) return false;
    if (length === "5-6" && !(q.marks >= 5 && q.marks <= 6)) return false;
    return true;
  });

  const start = () => {
    const pool = filtered.length > 0 ? filtered : all;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    navigate({ to: "/app/question/$id", params: { id: pick.id }, search: { mode } });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <div className="text-sm text-muted-foreground">Biology</div>
        <h1 className="text-3xl font-bold tracking-tight">{meta.name}</h1>
        <p className="mt-1 text-muted-foreground">{meta.blurb}</p>
      </div>

      <Section title="Question length">
        <ChoiceRow value={length} onChange={setLength} options={[
          { v: "any", l: "Mixed" },
          { v: "1-2", l: "1–2 marks" },
          { v: "3-4", l: "3–4 marks" },
          { v: "5-6", l: "5–6 marks" },
        ]} />
      </Section>

      <Section title="Difficulty">
        <ChoiceRow value={difficulty} onChange={setDifficulty} options={[
          { v: "any", l: "Any" },
          { v: "easy", l: "Easy" },
          { v: "medium", l: "Medium" },
          { v: "hard", l: "Hard" },
        ]} />
      </Section>

      <Section title="Mode">
        <div className="grid gap-3 md:grid-cols-3">
          <ModeCard active={mode === "practice"} onClick={() => setMode("practice")} title="Practice" body="Hints + feedback after every answer." />
          <ModeCard active={mode === "exam"} onClick={() => setMode("exam")} title="Exam" body="Timed. Feedback only at the end." />
          <ModeCard active={mode === "hint"} onClick={() => setMode("hint")} title="Hint" body="Reveal layered hints before submitting." />
        </div>
      </Section>

      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="text-sm text-muted-foreground">
          {filtered.length} matching question{filtered.length === 1 ? "" : "s"} in pool
        </div>
        <button
          onClick={start}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
        >
          Start question <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold text-muted-foreground">{title}</div>
      {children}
    </div>
  );
}

function ChoiceRow<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { v: T; l: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.v === value;
        return (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active
                ? "border-primary bg-primary text-primary-foreground shadow-glow"
                : "border-border bg-card text-foreground hover:bg-secondary"
            }`}
          >
            {o.l}
          </button>
        );
      })}
    </div>
  );
}

function ModeCard({
  active,
  onClick,
  title,
  body,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  body: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left shadow-soft transition ${
        active ? "border-primary bg-primary/5 ring-2 ring-primary/30" : "border-border bg-card hover:bg-secondary"
      }`}
    >
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{body}</div>
    </button>
  );
}