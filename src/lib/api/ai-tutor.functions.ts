import { subjectScopeSchema } from "../subjectScope";
import { getSubjectSyllabusGrounding } from "./subject-syllabus";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  callTutor,
  callMarkWiseAI,
  friendlyOpenAIError,
  getAISettings,
  jsonInstructions,
} from "./openai.server";

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

const studentProfileSchema = z
  .object({
    examBoard: z.string().optional(),
    subject: z.string().optional(),
    paper: z.string().optional(),
    targetGrade: z.string().optional(),
    weakTopics: z.array(z.string()).optional(),
    userProfileSubjects: z.array(z.string()).optional(),
  })
  .optional();

const tutorContextSchema = z
  .object({
    selectedTutorMode: z.string().optional(),
    selectedExamBoard: z.string().optional(),
    selectedSubject: z.string().nullable().optional(),
    selectedTopic: z.string().nullable().optional(),
    userProfileSubjects: z.array(z.string()).optional(),
    recentAttemptContext: z.unknown().optional(),
  })
  .optional();

const questionContextSchema = z
  .object({
    question: z.string().optional(),
    studentAnswer: z.string().optional(),
    marks: z.number().optional(),
    markschemePoints: z.array(z.string()).optional(),
    modelAnswer: z.string().optional(),
    topic: z.string().optional(),
  })
  .optional();

export const askAITutor = createServerFn({ method: "POST" })
  .validator(
    z.object({
      subjectScope: subjectScopeSchema.optional(),
      mode: z.string(),
      message: z.string(),
      userMessage: z.string().optional(),
      selectedTutorMode: z.string().optional(),
      intent: z
        .enum([
          "greeting",
          "general",
          "choose-for-me",
          "subject-specific",
          "marking",
          "model-answer",
          "keyword",
          "revision-coaching",
        ])
        .optional(),
      chatHistory: z.array(chatMessageSchema),
      studentProfile: studentProfileSchema,
      tutorContext: tutorContextSchema,
      currentQuestionContext: questionContextSchema,
    }),
  )
  .handler(async ({ data }) => {
    try {
      const activeSyllabus = data.subjectScope
        ? getSubjectSyllabusGrounding(data.subjectScope)
        : undefined;
      const reply = await callTutor({
        activeSyllabus,
        endpoint: "/api/ai-tutor",
        mode: data.mode,
        userMessage: data.userMessage ?? data.message,
        selectedTutorMode: data.selectedTutorMode ?? data.mode,
        intent: data.intent,
        chatHistory: data.chatHistory,
        studentProfile: data.studentProfile,
        tutorContext: data.tutorContext,
        currentQuestionContext: data.currentQuestionContext,
      });
      return { reply };
    } catch (error) {
      return { reply: friendlyOpenAIError(error) };
    }
  });

export const makeFlashcardsWithAI = createServerFn({ method: "POST" })
  .validator(
    z.object({
      sourceText: z.string(),
      topic: z.string().optional(),
      count: z.number().min(1).max(12).default(6),
    }),
  )
  .handler(async ({ data }) => {
    try {
      return (await callMarkWiseAI({
        format: "json",
        instructions: jsonInstructions(`{
  "flashcards": [
    {
      "front": "string",
      "back": "string",
      "topic": "string",
      "source": "string",
      "type": "definition | process | exam_phrase | common_mistake | markscheme_point | practical_skill",
      "difficulty": "easy | medium | hard"
    }
  ]
}

You are an expert IGCSE revision flashcard creator. Create high-quality flashcards only from the provided source content. Do not make flashcards from metadata, file titles, exam board names, subject names, paper names, or generic labels. Focus on examinable content, definitions, processes, markscheme points, common mistakes, keywords, and model answer phrases. Each flashcard must help a student revise for an IGCSE exam.`),
        input: {
          endpoint: "/api/make-flashcards",
          task: "Create strict JSON IGCSE revision flashcards from sourceText only. Ignore metadata and reject generic cards such as 'What does IGCSE mean?'.",
          ...data,
        },
      })) as {
        flashcards: {
          front: string;
          back: string;
          topic: string;
          source?: string;
          type?: string;
          difficulty?: string;
        }[];
      };
    } catch {
      return {
        flashcards: [
          {
            front: data.topic
              ? `What should I remember for ${data.topic}?`
              : "What should I revise?",
            back: data.sourceText.slice(0, 240) || "Review the missed markscheme point.",
            topic: data.topic ?? "Revision",
          },
        ],
      };
    }
  });

export const getAISettingsStatus = createServerFn({ method: "GET" }).handler(async () =>
  getAISettings(),
);
