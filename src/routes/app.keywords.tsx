import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { filterQuestions } from "../data/questionBank";
import {
  EXAM_BOARDS,
  getExamBoard,
  getQualificationLabel,
  getSubjectName,
  getSubjectsForBoard,
  getSyllabusCode,
  type ExamBoardId,
} from "../data/syllabusConfig";
import { getTopicMeta } from "../data/topicsConfig";
import { useAuth } from "../lib/auth";

export const Route = createFileRoute("/app/keywords")({
  component: ExamKeywords,
});

type KeywordEntry = {
  keyword: string;
  definition: string;
  count: number;
};

const STOP_WORDS = new Set([
  "and",
  "are",
  "because",
  "between",
  "from",
  "have",
  "into",
  "that",
  "their",
  "there",
  "this",
  "with",
  "will",
  "would",
]);

function titleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function cleanKeyword(keyword: string) {
  return keyword.toLowerCase().replace(/\s+/g, " ").trim();
}

function keywordDefinition(keyword: string, sourceText: string) {
  const sentence = sourceText
    .split(/(?<=[.!?])\s+/)
    .find((part) => part.toLowerCase().includes(keyword.toLowerCase()));

  if (sentence && sentence.length <= 220) {
    return sentence.trim();
  }

  return `Use “${keyword}” accurately in your answer and link it directly to the question context.`;
}

function deriveKeywords(questions: ReturnType<typeof filterQuestions>): KeywordEntry[] {
  const entries = new Map<string, KeywordEntry>();

  for (const question of questions) {
    const candidates = [
      ...question.examinerKeywords,
      ...question.markSchemePoints.flatMap((point) => point.keywords.flat()),
    ];

    for (const raw of candidates) {
      const keyword = cleanKeyword(raw);
      if (keyword.length < 3 || STOP_WORDS.has(keyword) || /^\d+$/.test(keyword)) continue;

      const existing = entries.get(keyword);
      if (existing) {
        existing.count += 1;
      } else {
        entries.set(keyword, {
          keyword,
          definition: keywordDefinition(
            keyword,
            `${question.modelAnswer} ${question.markSchemePoints.map((p) => p.point).join(" ")}`,
          ),
          count: 1,
        });
      }
    }
  }

  return [...entries.values()]
    .sort((a, b) => b.count - a.count || a.keyword.localeCompare(b.keyword))
    .slice(0, 48);
}

function ExamKeywords() {
  const { user } = useAuth();
  const [board, setBoard] = useState<ExamBoardId>(user?.examBoard ?? "edexcel-igcse");
  const boardSubjects = getSubjectsForBoard(board);
  const [subject, setSubject] = useState(user?.selectedSubjects[0] ?? boardSubjects[0]?.id ?? "biology");

  const boardInfo = getExamBoard(board);
  const qualification = boardInfo?.qualification ?? user?.qualification ?? "IGCSE";
  const availableSubjects = useMemo(
    () =>
      boardSubjects
        .map((item) => {
          const itemSyllabusCode = getSyllabusCode(board, item.id);
          const count = filterQuestions({
            examBoard: board,
            qualification,
            subject: item.id,
            syllabusCode: itemSyllabusCode,
          }).length;

          return { ...item, count };
        })
        .filter((item) => item.count > 0),
    [board, boardSubjects, qualification],
  );

  const subjectOptions = availableSubjects.length > 0 ? availableSubjects : boardSubjects.map((item) => ({ ...item, count: 0 }));
  const syllabusCode = getSyllabusCode(board, subject);
  const questions = useMemo(
    () => filterQuestions({ examBoard: board, qualification, subject, syllabusCode }),
    [board, qualification, subject, syllabusCode],
  );
  const topics = useMemo(() => [...new Set(questions.map((question) => question.topic))], [questions]);
  const [topic, setTopic] = useState(topics[0] ?? "");

  useEffect(() => {
    if (!subjectOptions.some((item) => item.id === subject)) {
      setSubject(subjectOptions[0]?.id ?? "biology");
    }
  }, [subjectOptions, subject]);

  useEffect(() => {
    if (!topics.includes(topic)) {
      setTopic(topics[0] ?? "");
    }
  }, [topics, topic]);

  const topicQuestions = topic ? questions.filter((question) => question.topic === topic) : questions;
  const keywords = useMemo(() => deriveKeywords(topicQuestions), [topicQuestions]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (!keywords.some((item) => item.keyword === selected)) {
      setSelected(keywords[0]?.keyword ?? "");
    }
  }, [keywords, selected]);

  const entry = keywords.find((item) => item.keyword === selected) ?? keywords[0];
  const subjectName = getSubjectName(board, subject);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Exam Keywords</h1>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Syllabus-aware v2</span>
        </div>
        <p className="mt-1 text-muted-foreground">
          Markscheme language from the selected syllabus and subject question bank.
        </p>
      </div>

      <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:grid-cols-3">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-muted-foreground">Exam board</span>
          <select
            value={board}
            onChange={(event) => setBoard(event.target.value as ExamBoardId)}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground"
          >
            {EXAM_BOARDS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm">
          <span className="font-medium text-muted-foreground">Subject</span>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground"
          >
            {subjectOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.count > 0 ? item.name + " (" + item.count + ")" : item.name}
              </option>
            ))}
          </select>
        </label>

        <div className="rounded-xl border border-border bg-background/60 px-3 py-2 text-sm">
          <div className="font-medium text-muted-foreground">Active syllabus</div>
          <div className="mt-1 font-semibold">
            {subjectName} · {getQualificationLabel(qualification)} {syllabusCode ? `· ${syllabusCode}` : ""}
          </div>
        </div>
      </div>

      {topics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {topics.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTopic(id)}
              className={
                topic === id
                  ? "rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
              }
            >
              {getTopicMeta(subject, id, { examBoard: board, qualification, subjectId: subject, syllabusCode }).name}
            </button>
          ))}
        </div>
      )}

      {keywords.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
          <h2 className="text-xl font-semibold">No exam keywords for this selection yet.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Add question data for {subjectName} and the keyword bank will populate from examiner keywords and mark scheme points.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="grid gap-2 sm:grid-cols-2">
              {keywords.map((item) => (
                <button
                  key={item.keyword}
                  type="button"
                  onClick={() => setSelected(item.keyword)}
                  className={
                    selected === item.keyword
                      ? "rounded-xl border border-primary bg-primary/10 p-3 text-left text-sm text-primary transition"
                      : "rounded-xl border border-border bg-background p-3 text-left text-sm transition hover:bg-secondary"
                  }
                >
                  <span className="font-medium">{titleCase(item.keyword)}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{item.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            {entry && (
              <>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Markscheme use
                </div>
                <h2 className="mt-2 text-2xl font-bold">{titleCase(entry.keyword)}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{entry.definition}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
