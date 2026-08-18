import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../lib/auth";
import { getSubjectAccent, getSyllabusCode } from "../data/syllabusConfig";
import { subjectHasQuestions } from "../data/questionBank";
import { getUserSubjectSyllabuses } from "../lib/userSyllabus";

export const Route = createFileRoute("/app/practice/")({
  component: PracticeIndex,
});

function PracticeIndex() {
  const { user } = useAuth();
  if (!user) return null;

  const subjects = getUserSubjectSyllabuses(user).map((selection) => ({
    ...selection,
    accent: getSubjectAccent(selection.subject),
    syllabusCode: getSyllabusCode(selection.examBoard, selection.subject),
    hasQuestions: subjectHasQuestions(
      selection.examBoard,
      selection.subject,
      selection.qualification,
      getSyllabusCode(selection.examBoard, selection.subject),
    ),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Practise</h1>
        <p className="text-muted-foreground">Choose a subject, then pick a topic.</p>
      </div>

      {subjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Add subjects on the{" "}
            <Link to="/app/subjects" className="font-medium text-primary hover:underline">
              Subjects
            </Link>{" "}
            page first.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <div key={s.key}>
              {s.hasQuestions ? (
                <Link
                  to="/app/topics/$subject"
                  params={{ subject: s.subject }}
                  search={{ examBoard: s.examBoard, qualification: s.qualification }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <div
                    className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl`}
                  />
                  <div className="font-semibold">{s.subjectName}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.boardName}{s.syllabusCode ? ` · ${s.syllabusCode}` : ""}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Choose topic <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ) : (
                <div className="rounded-2xl border border-border bg-card p-5 opacity-70 shadow-soft">
                  <div className="font-semibold">{s.subjectName}</div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    No questions have been added for {s.boardName} yet.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
