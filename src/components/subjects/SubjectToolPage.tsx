import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { useAuth } from "../../lib/auth";
import {
  resolveUserSubjectScope,
  type SubjectScope,
  type SubjectToolSearch,
} from "../../lib/subjectScope";

export function SubjectToolPage({
  search,
  children,
}: {
  search: SubjectToolSearch;
  children: (scope: SubjectScope, userId: string) => ReactNode;
}) {
  const { user, ready } = useAuth();
  if (!ready || !user) return <p className="text-muted-foreground">Loading…</p>;
  const scope = resolveUserSubjectScope(user, search);
  if (!scope)
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <h1 className="text-2xl font-bold">Choose a subject first</h1>
        <p className="mt-2 text-muted-foreground">
          Open a subject from your profile to use its study tools and syllabus.
        </p>
        <Link
          to="/app/subjects"
          className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
        >
          Choose subject
        </Link>
      </div>
    );
  return (
    <div className="space-y-6" key={`${user.id}:${scope.key}:${search.view ?? ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <Link
          to="/app/subject/$subject"
          params={{ subject: scope.subject }}
          search={{ examBoard: scope.examBoard, qualification: scope.qualification }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> {scope.subjectName} tools
        </Link>
        <p className="text-sm text-muted-foreground">
          {scope.boardName} · {scope.syllabusCode}
        </p>
      </div>
      {children(scope, user.id)}
    </div>
  );
}
