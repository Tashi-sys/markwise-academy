import { SubjectToolPage } from "../components/subjects/SubjectToolPage";
import { subjectToolSearch, type SubjectScope, matchesSubjectScope } from "../lib/subjectScope";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookOpenCheck, Search } from "lucide-react";
import { QUESTIONS } from "../lib/questions";
import {
  getExamBoard,
  getQualificationLabel,
  getSubjectName,
  getSyllabusCode,
} from "../data/syllabusConfig";
import { getTopicMeta } from "../data/topicsConfig";
import { useAuth } from "../lib/auth";

export const Route = createFileRoute("/app/model-answers")({
  validateSearch: (search) => subjectToolSearch.parse(search),
  component: ScopedPage,
});

function ScopedPage() {
  const search = Route.useSearch();
  return (
    <SubjectToolPage search={search}>
      {(context, userId) => (
        <ModelAnswers
          key={`${userId}:${context.key}:${search.view ?? ""}`}
          context={context}
          userId={userId}
          view={search.view}
        />
      )}
    </SubjectToolPage>
  );
}

function ModelAnswers({
  context,
}: {
  context: SubjectScope;
  userId: string;
  view?: "notes" | "notebook";
}) {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const syllabusOptions = [context];

  const rows = useMemo(() => {
    if (!user) return [];
    const q = query.toLowerCase().trim();
    return QUESTIONS.filter((item) => matchesSubjectScope(item, context))
      .filter((item) => {
        if (!q) return true;
        const boardName = getExamBoard(item.examBoard)?.name ?? item.examBoard;
        return (
          item.questionText.toLowerCase().includes(q) ||
          item.modelAnswer.toLowerCase().includes(q) ||
          getSubjectName(item.examBoard, item.subject).toLowerCase().includes(q) ||
          boardName.toLowerCase().includes(q) ||
          getTopicMeta(item.subject, item.topic).name.toLowerCase().includes(q) ||
          item.examinerKeywords.some((keyword) => keyword.toLowerCase().includes(q))
        );
      })
      .slice(0, 160);
  }, [context, query, user]);

  if (!user) return null;

  const totalAvailable = QUESTIONS.filter((item) => matchesSubjectScope(item, context)).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Model Answers</h1>
          <p className="mt-1 text-muted-foreground">
            Full-mark answer examples for {context.subjectName} · {context.boardName}{" "}
            {context.syllabusCode}.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-soft">
          <span className="font-semibold text-foreground">{totalAvailable}</span>{" "}
          <span className="text-muted-foreground">model answers available</span>
        </div>
      </div>

      {syllabusOptions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center shadow-soft">
          <BookOpenCheck className="mx-auto h-9 w-9 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No subjects selected yet.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Add subjects with their syllabuses first, then model answers will appear here.
          </p>
          <Link
            to="/app/profile"
            className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            Choose subjects
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-3 ">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by topic, keyword, or question..."
                className="w-full rounded-2xl border border-input bg-card px-10 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
              />
            </label>
          </div>

          {rows.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
              <h2 className="text-xl font-semibold">No model answers found.</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Try another search term for this syllabus.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {rows.map((question) => {
                const board = getExamBoard(question.examBoard);
                const syllabusCode = getSyllabusCode(question.examBoard, question.subject);
                return (
                  <article
                    key={question.id}
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {getSubjectName(question.examBoard, question.subject)}
                      </span>
                      <span>·</span>
                      <span>{board?.name ?? question.examBoard}</span>
                      <span>·</span>
                      <span>{getQualificationLabel(question.qualification)}</span>
                      {syllabusCode && (
                        <span className="rounded-full bg-secondary px-2 py-0.5 font-semibold">
                          {syllabusCode}
                        </span>
                      )}
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                        {question.marks} marks
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-medium text-muted-foreground">
                      {getTopicMeta(question.subject, question.topic).name}
                    </div>
                    <h2 className="mt-3 font-semibold leading-snug">{question.questionText}</h2>
                    <p className="mt-3 rounded-xl border border-success/20 bg-success/10 p-3 text-sm leading-relaxed">
                      {question.modelAnswer}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {question.examinerKeywords.slice(0, 10).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Why it scores full marks: it states each markscheme point clearly and uses
                      accepted exam phrases instead of vague wording.
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
