import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { getQuestionSyllabusCode, QUESTION_BANK, type Question } from "../data/questionBank";
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
import { getUserSubjectSyllabuses } from "../lib/userSyllabus";

export const Route = createFileRoute("/app/common-mistakes")({
  component: CommonMistakes,
});

type MistakeCard = {
  id: string;
  subject: string;
  subjectName: string;
  board: ExamBoardId;
  boardName: string;
  qualification: "GCSE" | "IGCSE";
  syllabusCode?: string;
  topic: string;
  topicName: string;
  bad: string;
  better: string;
  why: string;
  practiceTo: string;
  practiceSearch: {
    examBoard: ExamBoardId;
    qualification: "GCSE" | "IGCSE";
    syllabusCode?: string;
  };
};

function cleanTip(tip: string) {
  return tip.replace(/^avoid this common mistake:\s*/i, "").replace(/\.$/, "").trim();
}

function sentenceCase(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  return trimmed.slice(0, 1).toUpperCase() + trimmed.slice(1);
}

function shortBetterAnswer(question: Question) {
  const markScheme = question.markSchemePoints
    .map((point) => point.point.replace(/\.$/, ""))
    .filter(Boolean)
    .slice(0, Math.min(3, Math.max(1, question.marks)))
    .join(". ");

  if (markScheme) return markScheme + ".";
  return question.modelAnswer.length > 220 ? question.modelAnswer.slice(0, 217) + "..." : question.modelAnswer;
}

function fallbackWeakWording(question: Question, topicName: string) {
  const keywords = [
    ...question.examinerKeywords,
    ...question.markSchemePoints.flatMap((point) => point.keywords.flat()),
  ]
    .map((keyword) => keyword.toLowerCase().trim())
    .filter(Boolean)
    .filter((keyword, index, list) => list.indexOf(keyword) === index)
    .slice(0, 3);

  if (keywords.length > 0) {
    return "Writing a vague answer without markscheme terms like " + keywords.join(", ");
  }

  return "Writing a general " + topicName.toLowerCase() + " answer without enough precise detail";
}

function mistakeFromQuestion(question: Question): MistakeCard | null {
  const board = getExamBoard(question.examBoard);
  const syllabusCode = getSyllabusCode(question.examBoard, question.subject);
  const topicMeta = getTopicMeta(question.subject, question.topic);
  const hasSpecificTip = Boolean(question.examinerTip && /common mistake/i.test(question.examinerTip));
  const bad = hasSpecificTip
    ? cleanTip(question.examinerTip)
    : fallbackWeakWording(question, topicMeta.name);

  if (!bad || bad.length < 8) return null;

  return {
    id: question.id,
    subject: question.subject,
    subjectName: getSubjectName(question.examBoard, question.subject),
    board: question.examBoard,
    boardName: board?.name ?? question.examBoard,
    qualification: question.qualification,
    syllabusCode,
    topic: question.topic,
    topicName: topicMeta.name,
    bad: sentenceCase(bad),
    better: shortBetterAnswer(question),
    why: hasSpecificTip
      ? "This loses marks because examiners want precise " + topicMeta.name.toLowerCase() + " wording linked to the question context."
      : "This is a common low-score pattern: the idea may be relevant, but it needs markscheme keywords and enough specific detail to earn the marks.",
    practiceTo: "/app/practice/" + question.subject + "/" + question.topic,
    practiceSearch: {
      examBoard: question.examBoard,
      qualification: question.qualification,
      syllabusCode,
    },
  };
}

function uniqueMistakes(questions: Question[]) {
  const seen = new Set<string>();
  const mistakes: MistakeCard[] = [];

  for (const question of questions) {
    const mistake = mistakeFromQuestion(question);
    if (!mistake) continue;

    const key = [mistake.board, mistake.subject, mistake.topic, mistake.bad.toLowerCase()].join(":");
    if (seen.has(key)) continue;
    seen.add(key);
    mistakes.push(mistake);
  }

  return mistakes.slice(0, 80);
}

function CommonMistakes() {
  const { user } = useAuth();
  const userSelections = useMemo(() => (user ? getUserSubjectSyllabuses(user) : []), [user]);
  const initialSelection = userSelections[0];
  const [board, setBoard] = useState<ExamBoardId>(initialSelection?.examBoard ?? "edexcel-igcse");
  const boardInfo = getExamBoard(board);
  const qualification = boardInfo?.qualification ?? initialSelection?.qualification ?? "IGCSE";
  const boardSubjects = getSubjectsForBoard(board);
  const boardQuestions = useMemo(
    () =>
      QUESTION_BANK.filter(
        (question) => question.examBoard === board && question.qualification === qualification,
      ),
    [board, qualification],
  );
  const availableSubjects = useMemo(
    () =>
      boardSubjects
        .map((item) => {
          const itemSyllabusCode = getSyllabusCode(board, item.id);
          const count = boardQuestions.filter(
            (question) =>
              question.subject === item.id &&
              (!itemSyllabusCode || getQuestionSyllabusCode(question) === itemSyllabusCode),
          ).length;

          return { ...item, count };
        })
        .filter((item) => item.count > 0),
    [board, boardSubjects, boardQuestions],
  );
  const [subject, setSubject] = useState(initialSelection?.subject ?? availableSubjects[0]?.id ?? "biology");

  useEffect(() => {
    if (!availableSubjects.some((item) => item.id === subject)) {
      setSubject(availableSubjects[0]?.id ?? "biology");
    }
  }, [availableSubjects, subject]);

  const syllabusCode = getSyllabusCode(board, subject);
  const questions = useMemo(
    () =>
      boardQuestions.filter(
        (question) =>
          question.subject === subject &&
          (!syllabusCode || getQuestionSyllabusCode(question) === syllabusCode),
      ),
    [boardQuestions, subject, syllabusCode],
  );
  const topics = useMemo(() => [...new Set(questions.map((question) => question.topic))], [questions]);
  const [topic, setTopic] = useState("all");

  useEffect(() => {
    if (topic !== "all" && !topics.includes(topic)) setTopic("all");
  }, [topic, topics]);

  const scopedQuestions = topic === "all" ? questions : questions.filter((question) => question.topic === topic);
  const mistakes = useMemo(() => uniqueMistakes(scopedQuestions), [scopedQuestions]);
  const selectedSubjectName = getSubjectName(board, subject);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Common Mistakes</h1>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            All subjects
          </span>
        </div>
        <p className="mt-1 text-muted-foreground">
          Spot low-scoring phrasing and replace it with markscheme-style answers for any syllabus.
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
            {availableSubjects.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.count})
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm">
          <span className="font-medium text-muted-foreground">Topic</span>
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground"
          >
            <option value="all">All topics</option>
            {topics.map((item) => (
              <option key={item} value={item}>
                {getTopicMeta(subject, item).name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Active syllabus
            </div>
            <h2 className="mt-1 text-xl font-semibold">
              {selectedSubjectName} · {boardInfo?.name ?? board} · {syllabusCode ?? getQualificationLabel(qualification)}
            </h2>
          </div>
          <div className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
            {mistakes.length} mistakes from {scopedQuestions.length} questions
          </div>
        </div>
      </div>

      {mistakes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center shadow-soft">
          <h2 className="text-lg font-semibold">No common mistakes found for this selection yet.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another topic or syllabus with more examiner tips in the question bank.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mistakes.map((mistake) => (
            <article
              key={mistake.id}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {mistake.subjectName} · {mistake.topicName}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {mistake.boardName} · {mistake.qualification} {mistake.syllabusCode ? "· " + mistake.syllabusCode : ""}
                  </div>
                </div>
                <Link
                  to={mistake.practiceTo}
                  search={mistake.practiceSearch}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Practice topic
                </Link>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-destructive">
                    Weak wording
                  </div>
                  <p className="mt-2 text-sm">{mistake.bad}</p>
                </div>
                <div className="rounded-xl border border-success/30 bg-success/10 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-success">
                    Markscheme wording
                  </div>
                  <p className="mt-2 text-sm">{mistake.better}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{mistake.why}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
