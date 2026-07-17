import type { ExamBoardId, Qualification } from "./syllabusConfig";
import type { MarkPoint, Question } from "./questionBank";
import { PROVIDED_RAW_QUESTION_PACKS } from "./providedQuestionPacks";

type RawProvidedQuestion = {
  id: string;
  qualification: string;
  examBoard: string;
  subject: string;
  syllabusCode?: string;
  topic: string;
  subtopic?: string;
  paper?: string;
  paperType?: string;
  questionType?: string;
  year?: number;
  session?: string;
  questionText: string;
  marks: number;
  commandWord?: string;
  difficulty?: string;
  answerType?: string;
  markSchemePoints: Array<string | MarkPoint>;
  examinerKeywords?: string[];
  modelAnswer: string;
  commonMistakes?: string[];
  hints?: string[];
  examinerTip?: string;
};

export const PROVIDED_QUESTION_COMBOS = [
  ["edexcel-igcse", "business"],
  ["edexcel-igcse", "computer-science"],
  ["edexcel-igcse", "economics"],
  ["edexcel-igcse", "geography"],
  ["edexcel-igcse", "history"],
  ["edexcel-igcse", "french"],
  ["edexcel-igcse", "spanish"],
  ["edexcel-igcse", "mathematics-a"],
  ["cambridge-igcse", "business-studies"],
  ["cambridge-igcse", "computer-science"],
  ["cambridge-igcse", "economics"],
  ["cambridge-igcse", "geography"],
  ["cambridge-igcse", "history"],
  ["cambridge-igcse", "japanese"],
  ["cambridge-igcse", "mathematics"],
  ["aqa-gcse", "business"],
  ["aqa-gcse", "computer-science"],
  ["aqa-gcse", "economics"],
  ["aqa-gcse", "geography"],
  ["aqa-gcse", "history"],
  ["aqa-gcse", "mathematics"],
  ["ocr-gcse", "business"],
  ["ocr-gcse", "computer-science"],
  ["ocr-gcse", "economics"],
  ["ocr-gcse", "geography"],
  ["ocr-gcse", "history"],
  ["ocr-gcse", "mathematics"],
  ["oxfordaqa-igcse", "computer-science"],
  ["oxfordaqa-igcse", "economics"],
  ["oxfordaqa-igcse", "geography"],
  ["oxfordaqa-igcse", "mathematics"],
] as const satisfies ReadonlyArray<readonly [ExamBoardId, string]>;

const PROVIDED_COMBO_KEYS = new Set(
  PROVIDED_QUESTION_COMBOS.map(([board, subject]) => `${board}:${subject}`),
);

export function isProvidedQuestionCombo(question: Pick<Question, "examBoard" | "subject">) {
  return PROVIDED_COMBO_KEYS.has(`${question.examBoard}:${question.subject}`);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeQualification(value: string): Qualification {
  const normalized = value.toLowerCase();
  if (normalized.includes("igcse") || normalized.includes("international gcse")) {
    return "IGCSE";
  }
  return "GCSE";
}

function normalizeExamBoard(value: string): ExamBoardId {
  const normalized = value.toLowerCase();
  if (normalized.includes("cambridge")) return "cambridge-igcse";
  if (normalized.includes("oxford")) return "oxfordaqa-igcse";
  if (normalized.includes("aqa")) return "aqa-gcse";
  if (normalized.includes("ocr")) return "ocr-gcse";
  return "edexcel-igcse";
}

function normalizeSubject(raw: RawProvidedQuestion, examBoard: ExamBoardId) {
  const normalized = raw.subject.toLowerCase();
  if (normalized.includes("computer")) return "computer-science";
  if (normalized.includes("economic")) return "economics";
  if (normalized.includes("geograph")) return "geography";
  if (normalized.includes("history")) return "history";
  if (normalized.includes("math")) {
    return examBoard === "edexcel-igcse" ? "mathematics-a" : "mathematics";
  }
  if (normalized.includes("business")) {
    return examBoard === "cambridge-igcse" ? "business-studies" : "business";
  }
  return slugify(raw.subject);
}

function normalizeDifficulty(value?: string): Question["difficulty"] {
  if (value === "medium" || value === "hard") return value;
  return "easy";
}

function normalizeMarkPoint(point: string | MarkPoint, examinerKeywords: string[]): MarkPoint {
  if (typeof point !== "string") return point;
  const keywords = examinerKeywords
    .filter((keyword) => point.toLowerCase().includes(keyword.toLowerCase()))
    .map((keyword) => [keyword]);
  return {
    point,
    keywords: keywords.length > 0 ? keywords : [point.split(/\s+/).slice(0, 3)],
  };
}

function normalizeQuestion(raw: RawProvidedQuestion): Question {
  const examBoard = normalizeExamBoard(raw.examBoard);
  const subject = normalizeSubject(raw, examBoard);
  const examinerKeywords = raw.examinerKeywords ?? [];
  const topic = slugify(raw.topic);

  return {
    id: slugify(raw.id),
    qualification: normalizeQualification(raw.qualification),
    examBoard,
    subject,
    topic,
    paper: raw.paper,
    paperType: raw.paperType ?? raw.paper,
    questionType: raw.questionType ?? raw.answerType ?? raw.commandWord,
    year: raw.year,
    session: raw.session,
    questionText: raw.questionText,
    marks: raw.marks,
    markSchemePoints: raw.markSchemePoints.map((point) =>
      normalizeMarkPoint(point, examinerKeywords),
    ),
    examinerKeywords,
    modelAnswer: raw.modelAnswer,
    difficulty: normalizeDifficulty(raw.difficulty),
    suggestedMinutes: Math.max(2, Math.ceil(raw.marks * 1.5)),
    hints: raw.hints ?? raw.commonMistakes ?? [],
    examinerTip:
      raw.examinerTip ??
      (raw.commonMistakes?.length
        ? `Avoid: ${raw.commonMistakes[0]}`
        : `Use precise ${raw.subject} terminology from the mark scheme.`),
  };
}

export const PROVIDED_QUESTIONS: Question[] = PROVIDED_RAW_QUESTION_PACKS.map((raw) =>
  normalizeQuestion(raw as RawProvidedQuestion),
);
