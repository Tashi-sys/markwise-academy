import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, Lock } from "lucide-react";
import { getSubjectAccent } from "../../data/syllabusConfig";

export type SubjectCardProps = {
  id: string;
  name: string;
  blurb?: string;
  isStudying?: boolean;
  hasQuestions?: boolean;
  showLock?: boolean;
  onToggleStudying?: () => void;
  toggleLabel?: string;
  topicsHref?: string;
};

export function SubjectCard({
  id,
  name,
  blurb,
  isStudying = false,
  hasQuestions = false,
  showLock = false,
  onToggleStudying,
  toggleLabel,
  topicsHref,
}: SubjectCardProps) {
  const accent = getSubjectAccent(id);

  return (
    <div
      className={`interactive-card glass-card group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft ${
        isStudying
          ? "shadow-glow ring-2 ring-primary/20"
          : showLock
            ? "shimmer-lock opacity-75"
            : ""
      }`}
    >
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`}
      />

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:rotate-3 group-hover:scale-110">
            <BookOpenCheck className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        {isStudying ? (
          <span className="shrink-0 rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
            Studying
          </span>
        ) : showLock ? (
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            <Lock className="h-3 w-3" /> Locked
          </span>
        ) : hasQuestions ? (
          <span className="shrink-0 rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-success">
            Available
          </span>
        ) : (
          <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            No papers
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {blurb ??
          (hasQuestions
            ? "Questions available for your syllabus."
            : "No questions have been added for this syllabus yet.")}
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className={`progress-fill h-full rounded-full bg-gradient-to-r ${
            hasQuestions ? "from-primary via-accent to-cyan-500" : "from-muted to-secondary"
          }`}
          style={{ width: hasQuestions ? (isStudying ? "86%" : "62%") : "24%" }}
        />
      </div>

      {id === "biology" && (
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-semibold text-muted-foreground opacity-0 transition group-hover:opacity-100">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Practise</span>
          <span className="rounded-full bg-success/10 px-2 py-1 text-success">Get marks</span>
          <span className="rounded-full bg-accent/10 px-2 py-1 text-accent">Improve</span>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {onToggleStudying && (
          <button
            type="button"
            onClick={onToggleStudying}
            className={`interactive-button rounded-full border px-3 py-1.5 text-xs font-medium ${
              isStudying
                ? "border-border bg-secondary text-foreground hover:bg-secondary/80"
                : "border-primary bg-primary/10 text-primary hover:bg-primary/20"
            }`}
          >
            {toggleLabel ?? (isStudying ? "Remove from profile" : "Add to profile")}
          </button>
        )}

        {topicsHref && (isStudying || !onToggleStudying) && (
          <Link
            to={topicsHref}
            className="interactive-button inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Open subject <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
