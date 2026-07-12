import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { useAuth, updateUserProfile } from "../lib/auth";
import { getSyllabusSubjects } from "../data/miniPaperConfig";
import { subjectHasQuestions } from "../data/questionBank";
import { getSyllabusCode } from "../data/syllabusConfig";
import { SubjectCard } from "../components/subjects/SubjectCard";
import { useState } from "react";

export const Route = createFileRoute("/app/subjects")({
  component: SubjectsPage,
});

function SubjectsPage() {
  const { user, refresh } = useAuth();
  const [saving, setSaving] = useState<string | null>(null);

  if (!user) return null;

  const boardSubjects = getSyllabusSubjects(user.examBoard);
  const studying = new Set(user.selectedSubjects);

  const toggleStudying = (subjectId: string) => {
    setSaving(subjectId);
    const next = studying.has(subjectId)
      ? user.selectedSubjects.filter((s) => s !== subjectId)
      : [...user.selectedSubjects, subjectId];
    updateUserProfile({ selectedSubjects: next });
    refresh();
    setSaving(null);
  };

  return (
    <div className="animate-enter space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your subjects</h1>
        <p className="mt-1 text-muted-foreground">
          Subjects for your exam board. Mark the ones you&apos;re studying — only your syllabus
          questions will appear.
        </p>
      </div>

      <div className="stagger-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {boardSubjects.map((s) => {
          const isStudying = studying.has(s.id);
          const hasQuestions = subjectHasQuestions(
            user.examBoard,
            s.id,
            user.qualification,
            getSyllabusCode(user.examBoard, s.id),
          );

          return (
            <SubjectCard
              key={s.id}
              id={s.id}
              name={s.name}
              blurb={s.blurb}
              isStudying={isStudying}
              hasQuestions={hasQuestions}
              onToggleStudying={() => toggleStudying(s.id)}
              toggleLabel={saving === s.id ? "Saving…" : undefined}
              topicsHref={isStudying && hasQuestions ? `/app/topics/${s.id}` : undefined}
            />
          );
        })}
      </div>

      {user.selectedSubjects.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">
            Select at least one subject above to start practising.
          </p>
          <Link
            to="/app/profile"
            className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
          >
            Or update subjects in your profile
          </Link>
        </div>
      )}
    </div>
  );
}
