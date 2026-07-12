import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpenCheck, NotebookTabs, RotateCcw, Sparkles, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useFlashcards } from "../lib/storage";
import { getTopicMeta } from "../data/topicsConfig";
import { getQuestion } from "../data/questionBank";

export const Route = createFileRoute("/app/flashcards")({
  component: MistakeFlashcards,
});

function MistakeFlashcards() {
  const { flashcards, remove, clearBad } = useFlashcards();
  const demoCards = flashcards.length
    ? flashcards
    : [
        {
          id: "demo-bile",
          userId: "demo",
          topic: "nutrition",
          subject: "biology",
          questionId: "demo",
          front: "What does bile do to fats?",
          back: "Bile emulsifies fats into small droplets, increasing the surface area for lipase.",
          originalQuestion: "Explain the role of bile in digestion.",
          markSchemePoint: "Bile emulsifies fats.",
          createdAt: Date.now(),
        },
      ];

  return (
    <div className="animate-enter space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Flashcards</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Review cards from missed markscheme points and Study Notebook source content.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              clearBad();
              toast.success("Bad generated flashcards cleared");
            }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-soft hover:bg-secondary"
          >
            <Trash2 className="h-4 w-4" />
            Clear bad generated flashcards
          </button>
          <Link
            to="/app/study-notebook"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            <Sparkles className="h-4 w-4" />
            Regenerate Flashcards
          </Link>
          <Link
            to="/app/study-notebook"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-soft hover:bg-secondary"
          >
            <NotebookTabs className="h-4 w-4" />
            Study Notebook
          </Link>
        </div>
      </div>

      {flashcards.length === 0 && (
        <div className="rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm text-warning-foreground">
          Demo card shown. Your saved cards will appear here after practice or Study Notebook.
        </div>
      )}

      <div className="stagger-grid grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {demoCards.map((card) => (
          <Flashcard
            key={card.id}
            card={card}
            onDelete={card.userId === "demo" ? undefined : remove}
          />
        ))}
      </div>
    </div>
  );
}

function Flashcard({
  card,
  onDelete,
}: {
  card: {
    id: string;
    userId: string;
    topic: string;
    subject: string;
    questionId: string;
    front: string;
    back: string;
    originalQuestion: string;
    markSchemePoint: string;
    source?: string;
    type?: string;
    difficulty?: string;
  };
  onDelete?: (id: string) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const question = getQuestion(card.questionId);
  const sourceLabel = question
    ? "Practice question"
    : card.questionId === "demo"
      ? "Demo card"
      : "Study Notebook";
  const topicLabel = friendlyTopicLabel(card.subject, card.topic);
  const typeLabel = friendlyTypeLabel(card.type);

  return (
    <article className="group">
      <div className="flip-card" data-flipped={flipped}>
        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          className="flip-card-inner relative h-[23rem] w-full text-left"
          aria-label={`Flip flashcard: ${card.front}`}
        >
          <div className="flip-face glass-card absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition group-hover:-translate-y-0.5 group-hover:shadow-glow">
            <CardChrome
              side="Front"
              topicLabel={topicLabel}
              sourceLabel={sourceLabel}
              typeLabel={typeLabel}
            />
            <div className="mt-5 flex min-h-0 flex-1 items-center">
              <p className="max-h-40 overflow-y-auto pr-1 text-lg font-semibold leading-snug">
                {card.front}
              </p>
            </div>
            <CardContext text={card.source ?? card.originalQuestion} />
          </div>
          <div className="flip-face flip-back glass-card absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 shadow-glow">
            <CardChrome
              side="Back"
              topicLabel={topicLabel}
              sourceLabel={sourceLabel}
              typeLabel={typeLabel}
            />
            <div className="mt-5 flex min-h-0 flex-1 items-center">
              <p className="max-h-44 overflow-y-auto pr-1 text-base font-semibold leading-relaxed">
                {card.back}
              </p>
            </div>
            <CardContext text={card.markSchemePoint || card.originalQuestion} />
          </div>
        </button>
      </div>

      <div className="mt-3 flex min-h-9 items-center justify-between gap-3 px-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <BookOpenCheck className="h-3.5 w-3.5" />
          Tap to flip
        </span>
        <div className="flex items-center gap-3">
          {question && (
            <Link
              to="/app/question/$id"
              params={{ id: card.questionId }}
              search={{ mode: "practice" }}
              className="font-semibold text-primary hover:underline"
            >
              Retry original question
            </Link>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={() => {
                onDelete(card.id);
                toast.success("Flashcard deleted");
              }}
              className="inline-flex items-center gap-1 font-semibold text-destructive hover:underline"
              aria-label={`Delete flashcard: ${card.front}`}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function CardChrome({
  side,
  topicLabel,
  sourceLabel,
  typeLabel,
}: {
  side: "Front" | "Back";
  topicLabel: string;
  sourceLabel: string;
  typeLabel: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="min-w-0 truncate">{topicLabel}</span>
        <span className="inline-flex items-center gap-1">
          <RotateCcw className="h-3.5 w-3.5" />
          Flip
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-primary">{side}</div>
        <div className="flex min-w-0 flex-wrap justify-end gap-1.5">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
            {typeLabel}
          </span>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground">
            {sourceLabel}
          </span>
        </div>
      </div>
    </>
  );
}

function friendlyTypeLabel(type?: string) {
  if (!type) return "Markscheme Point";
  return type
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function CardContext({ text }: { text: string }) {
  return (
    <div className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
      <p className="line-clamp-3">{text}</p>
    </div>
  );
}

function friendlyTopicLabel(subject: string, topic: string) {
  const meta = getTopicMeta(subject, topic);
  if (meta.name && meta.name !== topic) return meta.name;
  return topic
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
