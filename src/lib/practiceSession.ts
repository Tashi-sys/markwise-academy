import { z } from "zod";
import type { Question } from "../data/questionBank";
import type { MarkResult } from "./marking";

export type PracticeMode = "practice" | "exam" | "hint";

export type PracticeQuestionState = {
  answer: string;
  hintsShown: number;
  elapsed: number;
  result: MarkResult | null;
  firstScore: { score: number; total: number } | null;
};

export type PracticeSession = {
  version: 1;
  id: string;
  userId: string;
  subject: string;
  topic: string;
  examBoard: Question["examBoard"];
  qualification: Question["qualification"];
  mode: PracticeMode;
  questionIds: string[];
  currentQuestionId: string;
  questionStates: Record<string, PracticeQuestionState>;
  startedAt: number;
  updatedAt: number;
  completedAt: number | null;
};

const KEY_PREFIX = "markwise:practice:v1";
const CHANGE_EVENT = "markwise:practice:changed";
const memorySessions = new Map<string, PracticeSession>();
const scoreSchema = z.object({
  score: z.number().finite().nonnegative(),
  total: z.number().finite().positive(),
});
const stateSchema = z.object({
  answer: z.string(),
  hintsShown: z.number().int().nonnegative(),
  elapsed: z.number().int().nonnegative(),
  result: scoreSchema
    .extend({
      awarded: z.array(z.object({ point: z.string(), matchedKeyword: z.string() })),
      missed: z.array(z.object({ point: z.string(), keywords: z.array(z.array(z.string())) })),
    })
    .nullable(),
  firstScore: scoreSchema.nullable(),
});
const sessionSchema = z
  .object({
    version: z.literal(1),
    id: z.string().min(1),
    userId: z.string().min(1),
    subject: z.string().min(1),
    topic: z.string().min(1),
    examBoard: z.string().min(1),
    qualification: z.string().min(1),
    mode: z.enum(["practice", "exam", "hint"]),
    questionIds: z.array(z.string().min(1)).min(1),
    currentQuestionId: z.string().min(1),
    questionStates: z.record(stateSchema),
    startedAt: z.number().finite().nonnegative(),
    updatedAt: z.number().finite().nonnegative(),
    completedAt: z.number().finite().nonnegative().nullable(),
  })
  .refine(
    (session) =>
      session.questionIds.includes(session.currentQuestionId) &&
      new Set(session.questionIds).size === session.questionIds.length &&
      Object.keys(session.questionStates).every((id) => session.questionIds.includes(id)),
  );

function storageKey(userId: string) {
  return `${KEY_PREFIX}:${userId}`;
}

export function readPracticeSession(userId: string): PracticeSession | null {
  if (typeof window === "undefined") return null;
  const unsaved = memorySessions.get(userId);
  if (unsaved) return unsaved;
  try {
    const raw = window.localStorage.getItem(storageKey(userId));
    if (!raw) return null;
    const parsed = sessionSchema.safeParse(JSON.parse(raw));
    if (!parsed.success || parsed.data.userId !== userId) return null;
    return parsed.data as PracticeSession;
  } catch {
    return null;
  }
}

function writePracticeSession(session: PracticeSession) {
  if (typeof window === "undefined") return session;
  try {
    window.localStorage.setItem(storageKey(session.userId), JSON.stringify(session));
    memorySessions.delete(session.userId);
  } catch {
    // Keep the current visit usable if the browser cannot save local data.
    memorySessions.set(session.userId, session);
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return session;
}

export function subscribePracticeSession(userId: string, onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === storageKey(userId)) {
      memorySessions.delete(userId);
      onChange();
    }
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** A new setup fixes the question order once, including its selected filters. */
export function startPracticeSession(
  userId: string,
  questions: Question[],
  mode: PracticeMode,
  firstQuestionId?: string,
): PracticeSession {
  const first = questions.find((question) => question.id === firstQuestionId) ?? questions[0];
  if (!first) throw new Error("Cannot start practice without questions.");
  const questionIds = [
    ...new Set(
      questions
        .filter(
          (question) =>
            question.subject === first.subject &&
            question.topic === first.topic &&
            question.examBoard === first.examBoard &&
            question.qualification === first.qualification,
        )
        .map((question) => question.id),
    ),
  ];
  for (let index = questionIds.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [questionIds[index], questionIds[swap]] = [questionIds[swap], questionIds[index]];
  }
  if (firstQuestionId && questionIds.includes(firstQuestionId)) {
    questionIds.splice(questionIds.indexOf(firstQuestionId), 1);
    questionIds.unshift(firstQuestionId);
  }
  const now = Date.now();
  return writePracticeSession({
    version: 1,
    id: crypto.randomUUID(),
    userId,
    subject: first.subject,
    topic: first.topic,
    examBoard: first.examBoard,
    qualification: first.qualification,
    mode,
    questionIds,
    currentQuestionId: questionIds[0],
    questionStates: {},
    startedAt: now,
    updatedAt: now,
    completedAt: null,
  });
}

/** Direct question links join the saved set when possible; setup starts explicitly. */
export function ensurePracticeSession(
  userId: string,
  question: Question,
  pool: Question[],
  mode: PracticeMode,
): PracticeSession {
  const existing = readPracticeSession(userId);
  if (
    existing &&
    existing.completedAt === null &&
    existing.mode === mode &&
    existing.subject === question.subject &&
    existing.topic === question.topic &&
    existing.examBoard === question.examBoard &&
    existing.qualification === question.qualification &&
    existing.questionIds.includes(question.id)
  ) {
    if (existing.currentQuestionId === question.id) return existing;
    return writePracticeSession({
      ...existing,
      currentQuestionId: question.id,
      updatedAt: Date.now(),
    });
  }
  return startPracticeSession(userId, [question, ...pool], mode, question.id);
}

export function getPracticeQuestionState(
  session: PracticeSession,
  questionId = session.currentQuestionId,
): PracticeQuestionState {
  return (
    session.questionStates[questionId] ?? {
      answer: "",
      hintsShown: 0,
      elapsed: 0,
      result: null,
      firstScore: null,
    }
  );
}

/** Ignore delayed saves from a previous question, setup, or completed session. */
export function savePracticeQuestionState(
  userId: string,
  sessionId: string,
  questionId: string,
  state: PracticeQuestionState,
): PracticeSession | null {
  const session = readPracticeSession(userId);
  if (
    !session ||
    session.id !== sessionId ||
    session.currentQuestionId !== questionId ||
    session.completedAt !== null
  )
    return null;
  return writePracticeSession({
    ...session,
    questionStates: { ...session.questionStates, [questionId]: state },
    updatedAt: Date.now(),
  });
}

export function advancePracticeSession(
  userId: string,
  sessionId: string,
  questionId: string,
): PracticeSession | null {
  const session = readPracticeSession(userId);
  if (
    !session ||
    session.id !== sessionId ||
    session.currentQuestionId !== questionId ||
    session.completedAt !== null
  )
    return null;
  const nextId = session.questionIds[session.questionIds.indexOf(questionId) + 1];
  const now = Date.now();
  return writePracticeSession({
    ...session,
    currentQuestionId: nextId ?? questionId,
    updatedAt: now,
    completedAt: nextId ? null : now,
  });
}

export function completePracticeSession(userId: string, sessionId: string, questionId: string) {
  const session = readPracticeSession(userId);
  if (
    !session ||
    session.id !== sessionId ||
    session.currentQuestionId !== questionId ||
    session.completedAt !== null
  )
    return null;
  return writePracticeSession({ ...session, updatedAt: Date.now(), completedAt: Date.now() });
}
