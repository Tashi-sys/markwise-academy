import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import type { UserProfile } from "./auth";
import { userProfileDocumentId } from "./auth";
import { db } from "./firebase";

export const USER_DATA_SYNC_EVENT = "markwise:user-data-sync-requested";

type JsonRecord = Record<string, unknown>;

function cleanForFirestore<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function storageKeys(userId: string) {
  return {
    attempts: `markwise:attempts:v2:${userId}`,
    flashcards: `markwise:flashcards:v1:${userId}`,
    notebooks: `markwise:study-notebooks:v1:${userId}`,
    legacyNotebooks: "markwise:study-notebooks:v1",
    aiChats: "markwise:ai-tutor-chats:v1",
    classroom: "markwise:classroom-hub:v1",
  };
}

function getScopedNotebooks(userId: string) {
  const keys = storageKeys(userId);
  const scoped = readJson<unknown[]>(keys.notebooks, []);
  return scoped.length ? scoped : readJson<unknown[]>(keys.legacyNotebooks, []);
}

function getScopedClassroomState(userId: string) {
  const keys = storageKeys(userId);
  const state = readJson<{
    classrooms?: JsonRecord[];
    posts?: JsonRecord[];
    assignments?: JsonRecord[];
    submissions?: JsonRecord[];
  }>(keys.classroom, {});

  const classrooms = (state.classrooms ?? []).filter(
    (room) => room.ownerUserId === userId || room.memberUserId === userId,
  );
  const classIds = new Set(classrooms.map((room) => String(room.id)));
  const assignments = (state.assignments ?? []).filter((assignment) =>
    classIds.has(String(assignment.classId)),
  );
  const assignmentIds = new Set(assignments.map((assignment) => String(assignment.id)));

  return {
    classrooms,
    posts: (state.posts ?? []).filter((post) => classIds.has(String(post.classId))),
    assignments,
    submissions: (state.submissions ?? []).filter((submission) =>
      assignmentIds.has(String(submission.assignmentId)),
    ),
  };
}

function pct(score: number, total: number) {
  return total > 0 ? Math.round((score / total) * 100) : 0;
}

function computeStreakFromAttempts(attempts: JsonRecord[]) {
  if (!attempts.length) return 0;
  const days = new Set(
    attempts
      .map((attempt) => Number(attempt.date))
      .filter(Boolean)
      .map((date) => {
        const d = new Date(date);
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

function titleCase(value: string) {
  return value
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildProgress(user: UserProfile, attempts: JsonRecord[], flashcards: unknown[]) {
  const totalScore = attempts.reduce((sum, attempt) => sum + Number(attempt.score ?? 0), 0);
  const totalMarks = attempts.reduce((sum, attempt) => sum + Number(attempt.total ?? 0), 0);
  const average = pct(totalScore, totalMarks);
  const streak = computeStreakFromAttempts(attempts);
  const xp = totalScore * 20 + attempts.length * 10 + streak * 15;
  const level = Math.max(1, Math.floor(xp / 250) + 1);

  const topicStats = new Map<string, { subject: string; topic: string; score: number; total: number; attempted: number }>();
  for (const attempt of attempts) {
    const subject = String(attempt.subject ?? "unknown");
    const topic = String(attempt.topic ?? "unknown");
    const key = `${subject}:${topic}`;
    const current = topicStats.get(key) ?? { subject, topic, score: 0, total: 0, attempted: 0 };
    current.score += Number(attempt.score ?? 0);
    current.total += Number(attempt.total ?? 0);
    current.attempted += 1;
    topicStats.set(key, current);
  }

  const rankedTopics = [...topicStats.values()]
    .map((item) => ({ ...item, accuracy: pct(item.score, item.total) }))
    .filter((item) => item.attempted > 0);
  const strongest = rankedTopics.length
    ? [...rankedTopics].sort((a, b) => b.accuracy - a.accuracy || b.attempted - a.attempted)[0]
    : null;
  const weakest = rankedTopics.length
    ? [...rankedTopics].sort((a, b) => a.accuracy - b.accuracy || b.attempted - a.attempted)[0]
    : null;

  const subjectStats = user.selectedSubjects.map((subject) => {
    const subjectAttempts = attempts.filter((attempt) => attempt.subject === subject);
    const score = subjectAttempts.reduce((sum, attempt) => sum + Number(attempt.score ?? 0), 0);
    const total = subjectAttempts.reduce((sum, attempt) => sum + Number(attempt.total ?? 0), 0);
    return {
      subject,
      attempted: subjectAttempts.length,
      average: pct(score, total),
    };
  });

  const badges = [
    { id: "first-attempt", label: "First Attempt", earned: attempts.length >= 1 },
    { id: "full-marks", label: "Full Marks", earned: attempts.some((a) => Number(a.score) === Number(a.total) && Number(a.total) > 0) },
    { id: "flashcard-builder", label: "Flashcard Builder", earned: flashcards.length >= 10 },
    { id: "streak-starter", label: "Streak Starter", earned: streak >= 2 },
    { id: "week-streak", label: "7 Day Streak", earned: streak >= 7 },
    { id: "exam-ready", label: "Exam Ready", earned: average >= 80 && attempts.length >= 10 },
    ...subjectStats.map((subject) => ({
      id: `${subject.subject}-starter`,
      label: `${titleCase(subject.subject)} Starter`,
      earned: subject.attempted >= 1,
    })),
    ...subjectStats.map((subject) => ({
      id: `${subject.subject}-specialist`,
      label: `${titleCase(subject.subject)} Specialist`,
      earned: subject.attempted >= 20,
    })),
  ];

  return {
    attemptedQuestions: attempts.length,
    average,
    totalScore,
    totalMarks,
    strongest,
    weakest,
    weakTopics: rankedTopics.sort((a, b) => a.accuracy - b.accuracy).slice(0, 5),
    streak,
    xp,
    level,
    badges,
    subjects: subjectStats,
  };
}

function buildMistakes(attempts: JsonRecord[]) {
  return attempts
    .filter((attempt) => Number(attempt.total ?? 0) > 0)
    .filter((attempt) => Number(attempt.score ?? 0) < Number(attempt.total ?? 0))
    .map((attempt) => ({
      id: attempt.id,
      questionId: attempt.questionId,
      subject: attempt.subject,
      examBoard: attempt.examBoard,
      qualification: attempt.qualification,
      topic: attempt.topic,
      score: attempt.score,
      total: attempt.total,
      accuracy: pct(Number(attempt.score ?? 0), Number(attempt.total ?? 0)),
      missedPoints: attempt.missedPoints ?? [],
      date: attempt.date,
    }))
    .slice(-200)
    .reverse();
}

export function requestUserDataSync() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(USER_DATA_SYNC_EVENT));
}

export async function syncUserAccountDataToFirebase(user: UserProfile) {
  if (typeof window === "undefined") return;

  const keys = storageKeys(user.id);
  const attempts = readJson<JsonRecord[]>(keys.attempts, []).filter((attempt) => attempt.userId === user.id);
  const flashcards = readJson<JsonRecord[]>(keys.flashcards, []).filter((card) => card.userId === user.id);
  const notebooks = getScopedNotebooks(user.id);
  const aiChats = readJson<unknown[]>(keys.aiChats, []);
  const classroom = getScopedClassroomState(user.id);
  const mistakes = buildMistakes(attempts);
  const progress = buildProgress(user, attempts, flashcards);
  const now = Date.now();
  const userDocId = userProfileDocumentId(user);

  try {
    await setDoc(
      doc(db, "users", userDocId),
      cleanForFirestore({
        id: user.id,
        name: user.name,
        email: user.email,
        qualification: user.qualification,
        examBoard: user.examBoard,
        selectedSubjects: user.selectedSubjects,
        subjectSyllabuses: user.subjectSyllabuses,
        progress,
        updatedAt: now,
      }),
      { merge: true },
    );

    await Promise.all([
      setDoc(doc(db, "users", userDocId, "appData", "notebooks"), cleanForFirestore({ userId: user.id, notebooks, updatedAt: now }), { merge: true }),
      setDoc(doc(db, "users", userDocId, "appData", "aiChats"), cleanForFirestore({ userId: user.id, aiChats, updatedAt: now }), { merge: true }),
      setDoc(doc(db, "users", userDocId, "appData", "flashcards"), cleanForFirestore({ userId: user.id, flashcards, updatedAt: now }), { merge: true }),
      setDoc(doc(db, "users", userDocId, "appData", "mistakes"), cleanForFirestore({ userId: user.id, mistakes, updatedAt: now }), { merge: true }),
      setDoc(doc(db, "users", userDocId, "appData", "classes"), cleanForFirestore({ userId: user.id, ...classroom, updatedAt: now }), { merge: true }),
      setDoc(doc(db, "users", userDocId, "appData", "attempts"), cleanForFirestore({ userId: user.id, attempts, updatedAt: now }), { merge: true }),
      setDoc(doc(db, "users", userDocId, "appData", "progress"), cleanForFirestore({ userId: user.id, ...progress, updatedAt: now }), { merge: true }),
    ]);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise user account data Firebase sync failed. Using localStorage fallback.", error);
    }
  }
}

export function useFirebaseUserDataSync(user: UserProfile | null) {
  useEffect(() => {
    if (!user) return;

    let timeout: ReturnType<typeof setTimeout> | undefined;
    const scheduleSync = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        void syncUserAccountDataToFirebase(user);
      }, 500);
    };

    scheduleSync();

    const events = [
      USER_DATA_SYNC_EVENT,
      "markwise:auth:changed",
      "markwise:attempts:changed",
      "markwise:flashcards:changed",
      "markwise:classroom-hub:changed",
      "markwise:study-notebooks:changed",
      "markwise:ai-tutor-chats:changed",
      "storage",
    ];
    events.forEach((eventName) => window.addEventListener(eventName, scheduleSync));

    return () => {
      if (timeout) clearTimeout(timeout);
      events.forEach((eventName) => window.removeEventListener(eventName, scheduleSync));
    };
  }, [user]);
}
