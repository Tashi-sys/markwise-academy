import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QUESTIONS } from "../lib/questions";
import { getSubjectName } from "../data/syllabusConfig";
import { getTopicMeta } from "../data/topicsConfig";
import { useAuth } from "../lib/auth";

export const Route = createFileRoute("/app/model-answers")({
  component: ModelAnswers,
});

function ModelAnswers() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    if (!user) return [];
    const q = query.toLowerCase().trim();
    return QUESTIONS.filter(
      (item) =>
        item.examBoard === user.examBoard &&
        item.qualification === user.qualification &&
        user.selectedSubjects.includes(item.subject),
    )
      .filter((item) => {
        if (!q) return true;
        return (
          item.questionText.toLowerCase().includes(q) ||
          item.modelAnswer.toLowerCase().includes(q) ||
          getTopicMeta(item.subject, item.topic).name.toLowerCase().includes(q) ||
          item.examinerKeywords.some((keyword) => keyword.toLowerCase().includes(q))
        );
      })
      .slice(0, 60);
  }, [query, user]);

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Model Answers</h1>
        <p className="mt-1 text-muted-foreground">
          Full-mark answer examples grouped from your syllabus question bank.
        </p>
      </div>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by topic, keyword, or question..."
        className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
      />

      <div className="grid gap-4">
        {rows.map((question) => (
          <article
            key={question.id}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{getSubjectName(user.examBoard, question.subject)}</span>
              <span>·</span>
              <span>{getTopicMeta(question.subject, question.topic).name}</span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                {question.marks} marks
              </span>
            </div>
            <h2 className="mt-3 font-semibold leading-snug">{question.questionText}</h2>
            <p className="mt-3 rounded-xl border border-success/20 bg-success/10 p-3 text-sm leading-relaxed">
              {question.modelAnswer}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {question.examinerKeywords.slice(0, 8).map((keyword) => (
                <span key={keyword} className="rounded-full bg-secondary px-2.5 py-1 text-xs">
                  {keyword}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Why it scores full marks: it states each markscheme point clearly and uses accepted
              exam phrases instead of vague wording.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
