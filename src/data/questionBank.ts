import type { ExamBoardId, Qualification } from "./syllabusConfig";
import { getSyllabusCode, isStemSubject } from "./syllabusConfig";
import { ALL_SUBJECT_TOPIC_PACK_QUESTIONS } from "./allSubjectTopicPacks";
import { AQA_BIOLOGY_QUESTIONS } from "./aqaBiologyQuestions";
import { AQA_CHEMISTRY_QUESTIONS } from "./aqaChemistryQuestions";
import { AQA_PHYSICS_QUESTIONS } from "./aqaPhysicsQuestions";
import { BIOLOGY_TOPIC_PACK_QUESTIONS } from "./biologyTopicPacks";
import { CAMBRIDGE_BIOLOGY_QUESTIONS } from "./cambridgeBiologyQuestions";
import { CAMBRIDGE_PHYSICS_QUESTIONS } from "./cambridgePhysicsQuestions";
import { DEMO_QUESTIONS } from "./demoQuestions";
import { EDEXCEL_BIOLOGY_QUESTIONS } from "./edexcelBiologyQuestions";
import { EDEXCEL_CHEMISTRY_QUESTIONS } from "./edexcelChemistryQuestions";
import { ENGLISH_LITERATURE_QUESTIONS } from "./englishLiteratureQuestions";
import { EDEXCEL_PHYSICS_QUESTIONS } from "./edexcelPhysicsQuestions";
import { OCR_BIOLOGY_QUESTIONS } from "./ocrBiologyQuestions";
import { OCR_CHEMISTRY_QUESTIONS } from "./ocrChemistryQuestions";
import { OXFORD_AQA_BIOLOGY_QUESTIONS } from "./oxfordAqaBiologyQuestions";
import { OXFORD_AQA_CHEMISTRY_QUESTIONS } from "./oxfordAqaChemistryQuestions";
import { OXFORD_AQA_PHYSICS_QUESTIONS } from "./oxfordAqaPhysicsQuestions";
import { PAST_PAPER_QUESTIONS } from "./pastPaperQuestions";
import { isProvidedQuestionCombo, PROVIDED_QUESTIONS } from "./providedQuestions";

export type MarkPoint = {
  point: string;
  keywords: string[][];
};

export type Question = {
  id: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  subject: string;
  topic: string;
  paper?: string;
  paperType?: string;
  questionType?: string;
  year?: number;
  session?: string;
  questionText: string;
  marks: number;
  markSchemePoints: MarkPoint[];
  examinerKeywords: string[];
  modelAnswer: string;
  difficulty: "easy" | "medium" | "hard";
  suggestedMinutes: number;
  hints: string[];
  examinerTip: string;
};

const BLOCK_GENERIC_FILLER_SUBJECTS = new Set([
  "english-language",
  "english-language-a",
  "english-language-b",
  "english-literature",
  "french",
  "spanish",
  "german",
  "chinese",
  "mandarin-chinese",
  "japanese",
  "arabic",
]);

/**
 * Live question bank.
 *
 * Licensed past-paper entries are loaded first. Original Biology exam-style seed
 * questions keep the competition demo usable without copying copyrighted papers.
 */
const ALL_QUESTIONS: Question[] = [
  ...PROVIDED_QUESTIONS,
  ...ENGLISH_LITERATURE_QUESTIONS,
  ...PAST_PAPER_QUESTIONS.filter((q) => !isProvidedQuestionCombo(q)),
  ...EDEXCEL_BIOLOGY_QUESTIONS,
  ...EDEXCEL_CHEMISTRY_QUESTIONS,
  ...EDEXCEL_PHYSICS_QUESTIONS,
  ...CAMBRIDGE_BIOLOGY_QUESTIONS,
  ...CAMBRIDGE_PHYSICS_QUESTIONS,
  ...AQA_BIOLOGY_QUESTIONS,
  ...AQA_CHEMISTRY_QUESTIONS,
  ...AQA_PHYSICS_QUESTIONS,
  ...OXFORD_AQA_BIOLOGY_QUESTIONS,
  ...OXFORD_AQA_CHEMISTRY_QUESTIONS,
  ...OXFORD_AQA_PHYSICS_QUESTIONS,
  ...OCR_BIOLOGY_QUESTIONS,
  ...OCR_CHEMISTRY_QUESTIONS,
  ...BIOLOGY_TOPIC_PACK_QUESTIONS.filter(
    (q) =>
      q.examBoard !== "edexcel-igcse" &&
      q.examBoard !== "cambridge-igcse" &&
      q.examBoard !== "aqa-gcse" &&
      q.examBoard !== "oxfordaqa-igcse" &&
      q.examBoard !== "ocr-gcse",
  ),
  ...ALL_SUBJECT_TOPIC_PACK_QUESTIONS.filter(
    (q) =>
      !isProvidedQuestionCombo(q) &&
      !BLOCK_GENERIC_FILLER_SUBJECTS.has(q.subject) &&
      !(
        (q.examBoard === "edexcel-igcse" ||
          q.examBoard === "oxfordaqa-igcse" ||
          q.examBoard === "aqa-gcse" ||
          q.examBoard === "ocr-gcse") &&
        q.subject === "chemistry"
      ) &&
      !(
        (q.examBoard === "edexcel-igcse" ||
          q.examBoard === "cambridge-igcse" ||
          q.examBoard === "aqa-gcse" ||
          q.examBoard === "oxfordaqa-igcse") &&
        q.subject === "physics"
      ) &&
      !(
        (q.examBoard === "edexcel-igcse" ||
          q.examBoard === "cambridge-igcse" ||
          q.examBoard === "aqa-gcse" ||
          q.examBoard === "oxfordaqa-igcse" ||
          q.examBoard === "ocr-gcse") &&
        q.subject === "english-literature"
      ),
  ),
  ...DEMO_QUESTIONS.filter(
    (q) =>
      !isProvidedQuestionCombo(q) &&
      q.subject === "biology" &&
      q.examBoard !== "edexcel-igcse" &&
      q.examBoard !== "cambridge-igcse" &&
      q.examBoard !== "aqa-gcse" &&
      q.examBoard !== "oxfordaqa-igcse" &&
      q.examBoard !== "ocr-gcse",
  ),
];

export const QUESTION_BANK: Question[] = ALL_QUESTIONS.filter((question) =>
  isStemSubject(question.subject),
);

export type QuestionFilter = {
  qualification?: Qualification;
  examBoard?: ExamBoardId;
  subject?: string;
  syllabusCode?: string;
  topic?: string;
  difficulty?: Question["difficulty"];
};

const TOPIC_ALIASES: Record<string, string[]> = {
  cells: ["cell-structure", "cells-and-microscopes", "microscopy"],
  "movement-of-substances": [
    "movement-of-substances-into-and-out-of-cells",
    "diffusion-osmosis-active-transport",
  ],
  transport: ["transport-in-humans", "circulation"],
  "plant-transport": ["transport-in-plants", "transpiration"],
  ecology: ["ecology-and-ecosystems", "ecosystems"],
  "human-influences": ["human-influences-on-the-environment", "environmental-impact"],
  "biological-resources": [
    "use-of-biological-resources",
    "food-production",
    "selective-breeding",
    "genetic-modification",
    "cloning",
  ],
};

function normalizeTopic(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function topicMatches(questionTopic: string, filterTopic: string) {
  const normalizedQuestionTopic = normalizeTopic(questionTopic);
  const normalizedFilterTopic = normalizeTopic(filterTopic);
  if (normalizedQuestionTopic === normalizedFilterTopic) return true;

  const aliases = TOPIC_ALIASES[normalizedFilterTopic] ?? [];
  return aliases.map(normalizeTopic).includes(normalizedQuestionTopic);
}

export function filterQuestions(filter: QuestionFilter): Question[] {
  return QUESTION_BANK.filter((q) => {
    if (filter.qualification && q.qualification !== filter.qualification) return false;
    if (filter.examBoard && q.examBoard !== filter.examBoard) return false;
    if (filter.subject && q.subject !== filter.subject) return false;
    if (filter.syllabusCode && getQuestionSyllabusCode(q) !== filter.syllabusCode) return false;
    if (filter.topic && !topicMatches(q.topic, filter.topic)) return false;
    if (filter.difficulty && q.difficulty !== filter.difficulty) return false;
    return true;
  });
}

export function getQuestionSyllabusCode(question: Pick<Question, "examBoard" | "subject">) {
  return getSyllabusCode(question.examBoard, question.subject);
}

function getLegacyEnglishLiteratureQuestion(id: string): Question | undefined {
  const match = id.match(
    /^(edexcel-igcse|cambridge-igcse|aqa-gcse|oxfordaqa-igcse|ocr-gcse)-english-literature-([a-z-]+)-(easy|medium|hard)-\d+$/,
  );
  if (!match) return undefined;

  const [, examBoard, topic, difficulty] = match;
  return QUESTION_BANK.find(
    (q) =>
      q.examBoard === examBoard &&
      q.subject === "english-literature" &&
      q.topic === topic &&
      q.difficulty === difficulty,
  );
}

export function getQuestion(id: string): Question | undefined {
  return QUESTION_BANK.find((q) => q.id === id) ?? getLegacyEnglishLiteratureQuestion(id);
}

export function getQuestionsByTopic(
  topic: string,
  filter?: Omit<QuestionFilter, "topic">,
): Question[] {
  return filterQuestions({ ...filter, topic });
}

export function subjectHasQuestions(
  examBoard: ExamBoardId,
  subject: string,
  qualification?: Qualification,
  syllabusCode?: string,
): boolean {
  return filterQuestions({ examBoard, subject, qualification, syllabusCode }).length > 0;
}

export function getTopicsWithQuestions(
  examBoard: ExamBoardId,
  subject: string,
  qualification?: Qualification,
  syllabusCode?: string,
): string[] {
  const topics = new Set(
    filterQuestions({ examBoard, subject, qualification, syllabusCode }).map((q) => q.topic),
  );
  return [...topics];
}

export function getSubjectsWithQuestions(
  examBoard: ExamBoardId,
  qualification?: Qualification,
): string[] {
  const subjects = new Set(filterQuestions({ examBoard, qualification }).map((q) => q.subject));
  return [...subjects];
}

let warnedAboutSyllabusData = false;

export function warnAboutInvalidSyllabusData() {
  if (!import.meta.env.DEV || warnedAboutSyllabusData) return;
  warnedAboutSyllabusData = true;

  const missing = {
    qualification: 0,
    examBoard: 0,
    subject: 0,
    syllabusCode: 0,
    topic: 0,
  };

  for (const question of QUESTION_BANK) {
    if (!question.qualification) missing.qualification += 1;
    if (!question.examBoard) missing.examBoard += 1;
    if (!question.subject) missing.subject += 1;
    if (!getQuestionSyllabusCode(question)) missing.syllabusCode += 1;
    if (!question.topic) missing.topic += 1;
  }

  const warnings = Object.entries(missing).filter(([, count]) => count > 0);
  if (warnings.length > 0) {
    console.warn(
      `MarkWise data warning: ${warnings
        .map(([field, count]) => `${count} questions are missing ${field}`)
        .join("; ")}.`,
    );
  }
}

warnAboutInvalidSyllabusData();
