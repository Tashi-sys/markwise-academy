import { useEffect, useState, useCallback } from "react";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { getCurrentUser } from "./auth";
import { db } from "./firebase";

export type Attempt = {
  id: string;
  userId: string;
  questionId: string;
  topic: string;
  subject: string;
  examBoard: string;
  qualification: string;
  answer: string;
  score: number;
  total: number;
  date: number;
  elapsedSeconds?: number;
  qualityTags?: string[];
  missedPoints?: string[];
  awardedPoints?: string[];
};

const KEY_PREFIX = "markwise:attempts:v2";
const FLASHCARD_KEY_PREFIX = "markwise:flashcards:v1";
const ATTEMPTS_FIRESTORE_COLLECTION = "markwiseAttemptStates";
const ATTEMPTS_EVENT = "markwise:attempts:changed";

function storageKey(userId: string) {
  return `${KEY_PREFIX}:${userId}`;
}

function read(userId?: string): Attempt[] {
  if (typeof window === "undefined") return [];
  const id = userId ?? getCurrentUser()?.id;
  if (!id) return [];
  try {
    const raw = window.localStorage.getItem(storageKey(id));
    return raw ? (JSON.parse(raw) as Attempt[]) : [];
  } catch {
    return [];
  }
}

function writeLocalAttempts(userId: string, items: Attempt[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(userId), JSON.stringify(items));
  window.dispatchEvent(new Event(ATTEMPTS_EVENT));
}

function write(userId: string, items: Attempt[]) {
  writeLocalAttempts(userId, items);
  void saveAttemptsToFirebase(userId, items);
}

function normaliseAttempts(value: unknown): Attempt[] {
  return Array.isArray(value) ? (value as Attempt[]) : [];
}

async function saveAttemptsToFirebase(userId: string, items: Attempt[]) {
  if (typeof window === "undefined") return;
  try {
    await setDoc(
      doc(db, ATTEMPTS_FIRESTORE_COLLECTION, userId),
      {
        attempts: items.filter((attempt) => attempt.userId === userId),
        userId,
        updatedAt: Date.now(),
      },
      { merge: true },
    );
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise attempt Firebase save failed. Using localStorage fallback.", error);
    }
  }
}

async function loadAttemptsFromFirebase(userId: string) {
  if (typeof window === "undefined") return null;
  try {
    const snapshot = await getDoc(doc(db, ATTEMPTS_FIRESTORE_COLLECTION, userId));
    if (!snapshot.exists()) return null;
    return normaliseAttempts(snapshot.data().attempts).filter((attempt) => attempt.userId === userId);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise attempt Firebase load failed. Using localStorage fallback.", error);
    }
    return null;
  }
}

function subscribeToFirebaseAttempts(userId: string, onItems: (items: Attempt[]) => void) {
  if (typeof window === "undefined") return () => {};
  return onSnapshot(
    doc(db, ATTEMPTS_FIRESTORE_COLLECTION, userId),
    (snapshot) => {
      if (!snapshot.exists()) return;
      const attempts = normaliseAttempts(snapshot.data().attempts).filter((attempt) => attempt.userId === userId);
      writeLocalAttempts(userId, attempts);
      onItems(attempts);
    },
    (error) => {
      if (import.meta.env.DEV) {
        console.warn("MarkWise attempt Firebase subscription failed. Using localStorage fallback.", error);
      }
    },
  );
}

export function recordAttempt(a: Omit<Attempt, "id" | "date" | "userId">) {
  const user = getCurrentUser();
  if (!user) return;
  const items = read(user.id);
  items.push({ ...a, userId: user.id, id: crypto.randomUUID(), date: Date.now() });
  write(user.id, items);
}

export type MistakeFlashcard = {
  id: string;
  userId: string;
  topic: string;
  subject: string;
  questionId: string;
  front: string;
  back: string;
  originalQuestion: string;
  markSchemePoint: string;
  createdAt: number;
  source?: string;
  type?:
    | "definition"
    | "process"
    | "exam_phrase"
    | "common_mistake"
    | "markscheme_point"
    | "practical_skill";
  difficulty?: "easy" | "medium" | "hard";
};

function flashcardStorageKey(userId: string) {
  return `${FLASHCARD_KEY_PREFIX}:${userId}`;
}

function readFlashcards(userId?: string): MistakeFlashcard[] {
  if (typeof window === "undefined") return [];
  const id = userId ?? getCurrentUser()?.id;
  if (!id) return [];
  try {
    const raw = window.localStorage.getItem(flashcardStorageKey(id));
    return raw ? (JSON.parse(raw) as MistakeFlashcard[]) : [];
  } catch {
    return [];
  }
}

function writeFlashcards(userId: string, items: MistakeFlashcard[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(flashcardStorageKey(userId), JSON.stringify(items));
  window.dispatchEvent(new Event("markwise:flashcards:changed"));
}

export function recordFlashcards(cards: Omit<MistakeFlashcard, "userId">[]) {
  const user = getCurrentUser();
  if (!user || cards.length === 0) return;
  const existing = readFlashcards(user.id);
  const seen = new Set(existing.map((card) => flashcardSignature(card)));
  const next = [
    ...cards
      .filter((card) => isUsefulFlashcard(card))
      .filter((card) => !seen.has(flashcardSignature(card)))
      .map((card) => ({ ...card, userId: user.id })),
    ...existing,
  ].slice(0, 80);
  writeFlashcards(user.id, next);
}

export function deleteFlashcard(id: string) {
  const user = getCurrentUser();
  if (!user) return;
  writeFlashcards(
    user.id,
    readFlashcards(user.id).filter((card) => card.id !== id),
  );
}

export function clearBadGeneratedFlashcards() {
  const user = getCurrentUser();
  if (!user) return;
  writeFlashcards(
    user.id,
    readFlashcards(user.id).filter((card) => isUsefulFlashcard(card)),
  );
}

function flashcardSignature(card: Pick<MistakeFlashcard, "front" | "back" | "questionId">) {
  return `${card.questionId}:${card.front.trim().toLowerCase()}:${card.back.trim().toLowerCase()}`;
}

function isUsefulFlashcard(card: Pick<MistakeFlashcard, "front" | "back" | "topic">) {
  const front = card.front.trim();
  const back = card.back.trim();
  if (front.length < 10 || back.length < 10) return false;
  if (isMetadataMeaningQuestion(front)) return false;
  if (isMetadataOnly(card.topic) || isMetadataOnly(back)) return false;
  return !["definition from your source", "use precise source wording"].includes(
    back.toLowerCase(),
  );
}

function isMetadataMeaningQuestion(front: string) {
  return /^what does (edexcel|cambridge|igcse|gcse|biology|chemistry|physics|maths|paper|topic|notes|subject|syllabus|exam board|notebook|study notebook) mean\??$/i.test(
    front.trim(),
  );
}

function isMetadataOnly(value: string) {
  return /^(edexcel|cambridge|igcse|gcse|biology|chemistry|physics|maths|paper|topic|notes|subject|syllabus|exam board|notebook|study notebook)$/i.test(
    value.trim(),
  );
}

export function useFlashcards() {
  const [items, setItems] = useState<MistakeFlashcard[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const user = getCurrentUser();
      setUserId(user?.id ?? null);
      setItems(user ? readFlashcards(user.id) : []);
    };
    sync();
    window.addEventListener("markwise:flashcards:changed", sync);
    window.addEventListener("markwise:auth:changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("markwise:flashcards:changed", sync);
      window.removeEventListener("markwise:auth:changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const reset = useCallback(() => {
    if (userId) writeFlashcards(userId, []);
  }, [userId]);

  const remove = useCallback((id: string) => deleteFlashcard(id), []);
  const clearBad = useCallback(() => clearBadGeneratedFlashcards(), []);

  return { flashcards: items, reset, remove, clearBad };
}

export function useAttempts() {
  const [items, setItems] = useState<Attempt[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const user = getCurrentUser();
      setUserId(user?.id ?? null);
      setItems(user ? read(user.id) : []);
    };
    sync();
    let unsubscribeFirebase = () => {};
    const user = getCurrentUser();
    if (user) {
      void loadAttemptsFromFirebase(user.id).then((remoteAttempts) => {
        if (!remoteAttempts) {
          const localAttempts = read(user.id);
          if (localAttempts.length) void saveAttemptsToFirebase(user.id, localAttempts);
          return;
        }
        writeLocalAttempts(user.id, remoteAttempts);
        setItems(remoteAttempts);
      });
      unsubscribeFirebase = subscribeToFirebaseAttempts(user.id, setItems);
    }
    window.addEventListener(ATTEMPTS_EVENT, sync);
    window.addEventListener("markwise:auth:changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      unsubscribeFirebase();
      window.removeEventListener(ATTEMPTS_EVENT, sync);
      window.removeEventListener("markwise:auth:changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const reset = useCallback(() => {
    if (userId) write(userId, []);
  }, [userId]);

  return { attempts: items, reset };
}

export function topicStats(items: Attempt[], topic: string, subject?: string) {
  const filtered = items.filter(
    (a) => a.topic === topic && (subject ? a.subject === subject : true),
  );
  const total = filtered.reduce((s, a) => s + a.total, 0);
  const score = filtered.reduce((s, a) => s + a.score, 0);
  const acc = total > 0 ? Math.round((score / total) * 100) : 0;
  return { count: filtered.length, acc };
}

export function subjectStats(items: Attempt[], subject: string) {
  const filtered = items.filter((a) => a.subject === subject);
  const total = filtered.reduce((s, a) => s + a.total, 0);
  const score = filtered.reduce((s, a) => s + a.score, 0);
  const acc = total > 0 ? Math.round((score / total) * 100) : 0;
  return { count: filtered.length, acc };
}

export function statusFromAcc(acc: number, count: number) {
  if (count === 0) return { label: "Not started", tone: "muted" as const };
  if (acc >= 80) return { label: "Strong", tone: "success" as const };
  if (acc >= 60) return { label: "Improving", tone: "warning" as const };
  return { label: "Needs work", tone: "destructive" as const };
}

export function computeStreak(items: Attempt[]): number {
  if (items.length === 0) return 0;
  const days = new Set(
    items.map((a) => {
      const d = new Date(a.date);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }),
  );
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (days.has(key)) streak++;
    else if (i === 0) continue;
    else break;
  }
  return streak;
}
