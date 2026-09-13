import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import type { Qualification } from "../data/syllabusConfig";
import { useAuth, updateUserProfile, type SubjectSyllabusSelection } from "../lib/auth";
import { EXAM_BOARDS, getSyllabusCode } from "../data/syllabusConfig";
import { subjectHasQuestions } from "../data/questionBank";
import { SubjectCard } from "../components/subjects/SubjectCard";
import { getUserSubjectSyllabuses, selectionKey } from "../lib/userSyllabus";

export const Route = createFileRoute("/app/subjects")({
  component: SubjectsPage,
});

const ALL_SUBJECT_OPTIONS = EXAM_BOARDS.flatMap((board) =>
  board.subjects.map((subject) => ({
    key: selectionKey({
      subject: subject.id,
      examBoard: board.id,
      qualification: board.qualification,
    }),
    id: subject.id,
    name: subject.name,
    blurb: subject.blurb,
    examBoard: board.id,
    boardName: board.name,
    qualification: board.qualification,
  })),
);

function SubjectsPage() {
  const { user, refresh } = useAuth();
  const [saving, setSaving] = useState<string | null>(null);
  const [qualificationFilter, setQualificationFilter] = useState<"all" | Qualification>("all");

  if (!user) return null;

  const userSelections = getUserSubjectSyllabuses(user);
  const studying = new Set(userSelections.map((selection) => selection.key));
  const visibleSubjectOptions =
    qualificationFilter === "all"
      ? ALL_SUBJECT_OPTIONS
      : ALL_SUBJECT_OPTIONS.filter((option) => option.qualification === qualificationFilter);

  const saveSelections = (selections: SubjectSyllabusSelection[]) => {
    const selectedSubjects = [...new Set(selections.map((selection) => selection.subject))];
    updateUserProfile({ selectedSubjects, subjectSyllabuses: selections });
    refresh();
  };

  const toggleStudying = (option: (typeof ALL_SUBJECT_OPTIONS)[number]) => {
    setSaving(option.key);
    const current = userSelections.map(({ subject, examBoard, qualification }) => ({
      subject,
      examBoard,
      qualification,
    }));
    const next = studying.has(option.key)
      ? current.filter((selection) => selectionKey(selection) !== option.key)
      : [
          ...current,
          { subject: option.id, examBoard: option.examBoard, qualification: option.qualification },
        ];
    saveSelections(next);
    setSaving(null);
  };

  return (
    <div className="animate-enter space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your STEM subjects</h1>
        <p className="mt-1 text-muted-foreground">
          Select maths, sciences, and computer science from your syllabus. Each card opens only the
          questions for that exact board.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["all", "IGCSE", "GCSE"] as const).map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setQualificationFilter(filter)}
            className={
              qualificationFilter === filter
                ? "rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                : "rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary"
            }
          >
            {filter === "all" ? "All subjects" : filter}
          </button>
        ))}
      </div>

      <div className="stagger-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleSubjectOptions.map((s) => {
          const isStudying = studying.has(s.key);
          const syllabusCode = getSyllabusCode(s.examBoard, s.id);
          const hasQuestions = subjectHasQuestions(
            s.examBoard,
            s.id,
            s.qualification,
            syllabusCode,
          );
          const query = new URLSearchParams({
            examBoard: s.examBoard,
            qualification: s.qualification,
          });

          return (
            <SubjectCard
              key={s.key}
              id={s.id}
              name={s.name}
              blurb={
                s.qualification + " · " + s.boardName + (syllabusCode ? " · " + syllabusCode : "")
              }
              isStudying={isStudying}
              hasQuestions={hasQuestions}
              onToggleStudying={() => toggleStudying(s)}
              toggleLabel={saving === s.key ? "Saving..." : undefined}
              topicsHref={
                isStudying && hasQuestions
                  ? "/app/topics/" + s.id + "?" + query.toString()
                  : undefined
              }
            />
          );
        })}
      </div>

      {userSelections.length === 0 && (
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
