import { subjectScopeSchema } from "../subjectScope";
import { getSubjectSyllabusGrounding } from "./subject-syllabus";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { callMarkWiseAI, jsonInstructions } from "./openai.server";

const markPointSchema = z.object({
  point: z.string(),
  keywords: z.array(z.array(z.string())),
});

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pointMatches(answer: string, point: z.infer<typeof markPointSchema>) {
  const matched: string[] = [];
  for (const group of point.keywords) {
    const hit = group.find((keyword) => answer.includes(normalise(keyword)));
    if (!hit) return { matched: false, matchedKeyword: "" };
    matched.push(hit);
  }
  return { matched: true, matchedKeyword: matched[0] ?? "" };
}

export const markWithAIExaminer = createServerFn({ method: "POST" })
  .validator(
    z.object({
      questionText: z.string(),
      studentAnswer: z.string(),
      topic: z.string(),
      marks: z.number(),
      markSchemePoints: z.array(markPointSchema),
      modelAnswer: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      return (await callMarkWiseAI({
        format: "json",
        instructions: jsonInstructions(`{
  "score": 3,
  "totalMarks": 4,
  "awardedMarks": ["string"],
  "missingMarks": ["string"],
  "vagueParts": ["string"],
  "examinerComment": "string",
  "improvementTip": "string"
}`),
        input: {
          endpoint: "/api/ai-mark-answer",
          task: "Mark the answer strictly using the provided markscheme points.",
          ...data,
        },
      })) as {
        score: number;
        totalMarks: number;
        awardedMarks: string[];
        missingMarks: string[];
        vagueParts: string[];
        examinerComment: string;
        improvementTip: string;
      };
    } catch {
      return fallbackAIMarking(data);
    }
  });

function fallbackAIMarking(data: {
  studentAnswer: string;
  markSchemePoints: z.infer<typeof markPointSchema>[];
}) {
  const answer = normalise(data.studentAnswer);
  const awarded = [];
  const missing = [];

  for (const point of data.markSchemePoints) {
    const match = pointMatches(answer, point);
    if (match.matched) {
      awarded.push({
        point: `1 mark awarded for: ${point.point.replace(/\.$/, "")}.`,
        evidence: match.matchedKeyword,
      });
    } else {
      missing.push({
        point: `1 mark available for: ${point.point.replace(/\.$/, "")}.`,
        neededLanguage: [...new Set(point.keywords.flat())].slice(0, 5),
      });
    }
  }

  const vagueParts = ["stuff", "things", "it helps", "good", "bad"].filter((phrase) =>
    answer.includes(phrase),
  );
  const score = awarded.length;

  return {
    score,
    total: data.markSchemePoints.length,
    totalMarks: data.markSchemePoints.length,
    awardedMarks: awarded,
    missingMarks: missing,
    vagueParts,
    examinerComment:
      score === data.markSchemePoints.length
        ? "This is a full-mark answer because it covers every listed markscheme point using creditworthy language."
        : "This answer has some credit, but it needs the missing markscheme points stated more explicitly.",
    improvementTip:
      missing[0]?.neededLanguage.length > 0
        ? `Add the phrase "${missing[0].neededLanguage[0]}" and link it directly to the question.`
        : "Keep each mark as one precise sentence and check the command word before submitting.",
  };
}

export const generatePracticeQuestion = createServerFn({ method: "POST" })
  .validator(
    z.object({
      subjectScope: subjectScopeSchema.optional(),
      examBoard: z.string(),
      subject: z.string(),
      paper: z.string(),
      paperType: z.string(),
      topic: z.string(),
      marks: z.number().min(1).max(6),
      difficulty: z.enum(["easy", "medium", "hard"]),
      commandWord: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      const activeSyllabus = data.subjectScope
        ? getSubjectSyllabusGrounding(data.subjectScope)
        : undefined;
      return normaliseGeneratedQuestion(
        (await callMarkWiseAI({
          format: "json",
          instructions: jsonInstructions(`{
  "question": "string",
  "marks": 4,
  "commandWord": "Explain",
  "topic": "Ecology",
  "difficulty": "Medium",
  "markschemePoints": ["string"],
  "acceptedKeywords": ["string"],
  "hints": ["string"],
  "modelAnswer": "string",
  "examinerTip": "string"
}`),
          input: {
            endpoint: "/api/generate-question",
            task: "Generate an original past-paper-style question. Do not copy real past paper questions.",
            ...data,
            activeSyllabus,
          },
        })) as GeneratedQuestionJson,
      );
    } catch {
      return fallbackGeneratedQuestion(data);
    }
  });

type GeneratedQuestionJson = {
  question: string;
  marks: number;
  commandWord: string;
  topic: string;
  difficulty: string;
  markschemePoints: string[];
  acceptedKeywords: string[];
  hints: string[];
  modelAnswer: string;
  examinerTip: string;
};

function fallbackGeneratedQuestion(data: {
  examBoard: string;
  subject: string;
  paper: string;
  paperType: string;
  topic: string;
  marks: number;
  difficulty: "easy" | "medium" | "hard";
  commandWord: string;
}) {
  const topicName = data.topic
    .split("-")
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
  const points = Array.from({ length: data.marks }, (_, index) => ({
    point: `${topicName} answer includes creditworthy point ${index + 1} linked to ${data.examBoard} ${data.paper} markscheme expectations.`,
    keywords: [
      [topicName.toLowerCase().split(" ")[0] ?? "keyword"],
      ["because", "therefore", "so"],
    ],
  }));
  return {
    label: `${data.examBoard} · ${data.subject} · ${data.paper} · ${data.paperType}`,
    questionText: `${data.commandWord} how ${topicName.toLowerCase()} would appear in a ${data.examBoard} ${data.subject} ${data.paper} ${data.paperType.toLowerCase()} question. Do not copy real past paper questions. [${data.marks} marks]`,
    markSchemePoints: points,
    modelAnswer: points.map((point) => point.point).join(" "),
    hints: [
      "Identify the key process in the topic.",
      "Use one clear sentence per mark.",
      "Link cause and effect using because or therefore.",
    ],
    examinerTip:
      "Generated as a past-paper-style practice question for this exam board, subject, paper, and topic. It is not copied from a real past paper.",
    acceptedKeywords: [...new Set(points.flatMap((point) => point.keywords.flat()))],
  };
}

function normaliseGeneratedQuestion(data: GeneratedQuestionJson) {
  return {
    label: `${data.difficulty} · ${data.commandWord} · ${data.topic}`,
    questionText: `${data.question} [${data.marks} marks]`,
    markSchemePoints: data.markschemePoints.map((point) => ({
      point,
      keywords: [[point.split(" ")[0]?.toLowerCase() ?? "keyword"]],
    })),
    modelAnswer: data.modelAnswer,
    hints: data.hints,
    examinerTip: data.examinerTip,
    acceptedKeywords: data.acceptedKeywords,
  };
}
