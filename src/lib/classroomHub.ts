import { useCallback, useEffect, useMemo, useState } from "react";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import type { ExamBoardId, Qualification } from "../data/syllabusConfig";
import { filterQuestions, type Question } from "../data/questionBank";
import { getCurrentUser } from "./auth";
import { db } from "./firebase";

export type ClassroomRole = "teacher" | "student";
export type ClassroomAssignmentType =
  | "practice-questions"
  | "mini-mock"
  | "written-task"
  | "flashcards"
  | "revision-note";
export type ClassroomAssignmentStatus = "draft" | "assigned" | "closed";
export type ClassroomSubmissionStatus =
  | "not-started"
  | "in-progress"
  | "submitted"
  | "marked"
  | "late";

export type Classroom = {
  id: string;
  name: string;
  subject: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  syllabusCode?: string;
  teacherName: string;
  classCode: string;
  description: string;
  bannerColor: string;
  createdAt: number;
  updatedAt: number;
  role: ClassroomRole;
  ownerUserId?: string;
  memberUserId?: string;
};

export type ClassPost = {
  id: string;
  classId: string;
  authorName: string;
  authorRole: ClassroomRole;
  content: string;
  createdAt: number;
  attachments: string[];
  type?: "announcement" | "reminder" | "assignment" | "feedback";
};

export type Assignment = {
  id: string;
  classId: string;
  title: string;
  description: string;
  subject: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  syllabusCode?: string;
  topic?: string;
  paper?: string;
  dueDate: string;
  points: number;
  assignmentType: ClassroomAssignmentType;
  linkedQuestionIds: string[];
  status: ClassroomAssignmentStatus;
  createdAt: number;
  updatedAt: number;
};

export type SubmissionAnswer = {
  questionId: string;
  answer: string;
  selfMark?: "correct" | "partial" | "incorrect";
};

export type Submission = {
  id: string;
  assignmentId: string;
  studentName: string;
  status: ClassroomSubmissionStatus;
  submittedAt?: number;
  score?: number;
  totalMarks?: number;
  feedback?: string;
  answers?: SubmissionAnswer[];
  updatedAt?: number;
};

type ClassroomState = {
  classrooms: Classroom[];
  posts: ClassPost[];
  assignments: Assignment[];
  submissions: Submission[];
};

export type AssignmentQuestionFilter = {
  qualification: Qualification;
  examBoard: ExamBoardId;
  subject: string;
  syllabusCode?: string;
  topic?: string;
  paper?: string;
  difficulty?: Question["difficulty"] | "any";
};

const STORAGE_KEY = "markwise:classroom-hub:v1";
const EVENT_NAME = "markwise:classroom-hub:changed";
const FIRESTORE_COLLECTION = "markwiseClassroomStates";

const EMPTY_STATE: ClassroomState = {
  classrooms: [],
  posts: [],
  assignments: [],
  submissions: [],
};

export const BANNER_COLORS = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-slate-700 to-slate-950",
];

export const MOCK_CLASS_STUDENTS = ["You", "Student A", "Student B", "Student C"];

function safeParseState(raw: string | null): ClassroomState {
  if (!raw) return EMPTY_STATE;
  try {
    const parsed = JSON.parse(raw) as Partial<ClassroomState>;
    return {
      classrooms: Array.isArray(parsed.classrooms) ? parsed.classrooms : [],
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      assignments: Array.isArray(parsed.assignments) ? parsed.assignments : [],
      submissions: Array.isArray(parsed.submissions) ? parsed.submissions : [],
    };
  } catch {
    return EMPTY_STATE;
  }
}

function readState(): ClassroomState {
  if (typeof window === "undefined") return EMPTY_STATE;
  return safeParseState(window.localStorage.getItem(STORAGE_KEY));
}

function writeLocalState(state: ClassroomState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(EVENT_NAME));
}

function writeState(state: ClassroomState) {
  writeLocalState(state);
  void saveClassroomStateToFirebase(state);
}

function randomId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function generateClassCode(existing: Classroom[]) {
  let code = "";
  do {
    code = `MW-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  } while (existing.some((room) => room.classCode === code));
  return code;
}

function currentUserId() {
  return getCurrentUser()?.id ?? "guest";
}

function currentName() {
  return getCurrentUser()?.name ?? "You";
}

function canCurrentUserSeeClassroom(room: Classroom) {
  const userId = currentUserId();
  if (room.ownerUserId || room.memberUserId) {
    return room.ownerUserId === userId || room.memberUserId === userId;
  }
  return false;
}

function scopeStateToCurrentUser(state: ClassroomState): ClassroomState {
  const classrooms = state.classrooms.filter(canCurrentUserSeeClassroom);
  const classIds = new Set(classrooms.map((room) => room.id));
  const assignmentIds = new Set(
    state.assignments.filter((assignment) => classIds.has(assignment.classId)).map((assignment) => assignment.id),
  );
  return {
    classrooms,
    posts: state.posts.filter((post) => classIds.has(post.classId)),
    assignments: state.assignments.filter((assignment) => classIds.has(assignment.classId)),
    submissions: state.submissions.filter((submission) => assignmentIds.has(submission.assignmentId)),
  };
}

function firestoreUserId() {
  const user = getCurrentUser();
  return user?.id ?? null;
}

function cleanForFirestore(state: ClassroomState): ClassroomState {
  return JSON.parse(JSON.stringify(scopeStateToCurrentUser(state))) as ClassroomState;
}

async function saveClassroomStateToFirebase(state: ClassroomState) {
  if (typeof window === "undefined") return;
  const userId = firestoreUserId();
  if (!userId) return;
  try {
    await setDoc(
      doc(db, FIRESTORE_COLLECTION, userId),
      {
        ...cleanForFirestore(state),
        userId,
        updatedAt: Date.now(),
      },
      { merge: true },
    );
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise classroom Firebase save failed. Using localStorage fallback.", error);
    }
  }
}

async function loadClassroomStateFromFirebase() {
  if (typeof window === "undefined") return null;
  const userId = firestoreUserId();
  if (!userId) return null;
  try {
    const snapshot = await getDoc(doc(db, FIRESTORE_COLLECTION, userId));
    if (!snapshot.exists()) return null;
    return safeParseState(JSON.stringify(snapshot.data()));
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("MarkWise classroom Firebase load failed. Using localStorage fallback.", error);
    }
    return null;
  }
}

function subscribeToFirebaseClassroomState(onState: (state: ClassroomState) => void) {
  if (typeof window === "undefined") return () => {};
  const userId = firestoreUserId();
  if (!userId) return () => {};
  return onSnapshot(
    doc(db, FIRESTORE_COLLECTION, userId),
    (snapshot) => {
      if (!snapshot.exists()) return;
      const remoteState = safeParseState(JSON.stringify(snapshot.data()));
      writeLocalState(remoteState);
      onState(scopeStateToCurrentUser(remoteState));
    },
    (error) => {
      if (import.meta.env.DEV) {
        console.warn("MarkWise classroom Firebase subscription failed. Using localStorage fallback.", error);
      }
    },
  );
}

export function getClassrooms(): Classroom[] {
  return scopeStateToCurrentUser(readState()).classrooms;
}

export function getClassById(classId: string): Classroom | undefined {
  return scopeStateToCurrentUser(readState()).classrooms.find((room) => room.id === classId);
}

export function createClassroom(
  input: Omit<Classroom, "id" | "classCode" | "createdAt" | "updatedAt"> & {
    classCode?: string;
  },
): Classroom {
  const state = readState();
  const now = Date.now();
  const classroom: Classroom = {
    ...input,
    id: randomId("class"),
    classCode: input.classCode?.trim().toUpperCase() || generateClassCode(state.classrooms),
    createdAt: now,
    updatedAt: now,
    ownerUserId: currentUserId(),
    memberUserId: currentUserId(),
  };
  writeState({
    ...state,
    classrooms: [classroom, ...state.classrooms],
    posts: [
      {
        id: randomId("post"),
        classId: classroom.id,
        authorName: classroom.teacherName,
        authorRole: "teacher",
        content: `Welcome to ${classroom.name}. Revision tasks and announcements will appear here.`,
        createdAt: now,
        attachments: [],
        type: "announcement",
      },
      ...state.posts,
    ],
  });
  return classroom;
}

export function updateClassroom(classId: string, updates: Partial<Classroom>): Classroom | null {
  const state = readState();
  let updated: Classroom | null = null;
  const classrooms = state.classrooms.map((room) => {
    if (room.id !== classId) return room;
    updated = { ...room, ...updates, updatedAt: Date.now() };
    return updated;
  });
  writeState({ ...state, classrooms });
  return updated;
}

export function deleteClassroom(classId: string) {
  const state = readState();
  const assignmentIds = new Set(
    state.assignments.filter((assignment) => assignment.classId === classId).map((a) => a.id),
  );
  writeState({
    classrooms: state.classrooms.filter((room) => room.id !== classId),
    posts: state.posts.filter((post) => post.classId !== classId),
    assignments: state.assignments.filter((assignment) => assignment.classId !== classId),
    submissions: state.submissions.filter(
      (submission) => !assignmentIds.has(submission.assignmentId),
    ),
  });
}

export function joinClassroomByCode(code: string): Classroom | null {
  const state = readState();
  const target = state.classrooms.find(
    (room) => room.classCode.toUpperCase() === code.trim().toUpperCase() && room.role === "teacher",
  );
  if (!target) return null;
  const userId = currentUserId();
  const existing = state.classrooms.find(
    (room) => room.classCode === target.classCode && room.memberUserId === userId,
  );
  if (existing) return existing;
  const joined: Classroom = {
    ...target,
    id: randomId("class"),
    role: "student",
    teacherName: target.teacherName,
    ownerUserId: target.ownerUserId,
    memberUserId: userId,
    updatedAt: Date.now(),
  };
  writeState({ ...state, classrooms: [joined, ...state.classrooms] });
  return joined;
}

export function getClassPosts(classId: string): ClassPost[] {
  return readState()
    .posts.filter((post) => post.classId === classId)
    .sort((a, b) => b.createdAt - a.createdAt);
}

export function createClassPost(
  input: Omit<ClassPost, "id" | "createdAt" | "attachments"> & {
    attachments?: string[];
  },
): ClassPost {
  const state = readState();
  const post: ClassPost = {
    ...input,
    id: randomId("post"),
    createdAt: Date.now(),
    attachments: input.attachments ?? [],
  };
  writeState({ ...state, posts: [post, ...state.posts] });
  return post;
}

export function deleteClassPost(postId: string) {
  const state = readState();
  writeState({ ...state, posts: state.posts.filter((post) => post.id !== postId) });
}

export function getAssignmentsForClass(classId: string): Assignment[] {
  return readState()
    .assignments.filter((assignment) => assignment.classId === classId)
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getAssignmentById(assignmentId: string): Assignment | undefined {
  return readState().assignments.find((assignment) => assignment.id === assignmentId);
}

export function createAssignment(input: Omit<Assignment, "id" | "createdAt" | "updatedAt">) {
  const state = readState();
  const now = Date.now();
  const assignment: Assignment = {
    ...input,
    id: randomId("assignment"),
    createdAt: now,
    updatedAt: now,
  };
  writeState({
    ...state,
    assignments: [assignment, ...state.assignments],
    posts: [
      {
        id: randomId("post"),
        classId: input.classId,
        authorName: currentName(),
        authorRole: "teacher",
        content: `New assignment posted: ${input.title}`,
        createdAt: now,
        attachments: [],
        type: "assignment",
      },
      ...state.posts,
    ],
  });
  return assignment;
}

export function updateAssignment(assignmentId: string, updates: Partial<Assignment>) {
  const state = readState();
  let updated: Assignment | null = null;
  const assignments = state.assignments.map((assignment) => {
    if (assignment.id !== assignmentId) return assignment;
    updated = { ...assignment, ...updates, updatedAt: Date.now() };
    return updated;
  });
  writeState({ ...state, assignments });
  return updated;
}

export function deleteAssignment(assignmentId: string) {
  const state = readState();
  writeState({
    ...state,
    assignments: state.assignments.filter((assignment) => assignment.id !== assignmentId),
    submissions: state.submissions.filter((submission) => submission.assignmentId !== assignmentId),
  });
}

export function getSubmissionsForAssignment(assignmentId: string): Submission[] {
  return readState().submissions.filter((submission) => submission.assignmentId === assignmentId);
}

export function createOrUpdateSubmission(input: Omit<Submission, "id"> & { id?: string }) {
  const state = readState();
  const existing = state.submissions.find(
    (submission) =>
      submission.assignmentId === input.assignmentId &&
      submission.studentName === input.studentName,
  );
  const next: Submission = {
    ...existing,
    ...input,
    id: existing?.id ?? input.id ?? randomId("submission"),
    updatedAt: Date.now(),
  };
  writeState({
    ...state,
    submissions: existing
      ? state.submissions.map((submission) => (submission.id === existing.id ? next : submission))
      : [next, ...state.submissions],
  });
  return next;
}

export function findQuestionsForAssignment(filter: AssignmentQuestionFilter): Question[] {
  return filterQuestions({
    qualification: filter.qualification,
    examBoard: filter.examBoard,
    subject: filter.subject,
    syllabusCode: filter.syllabusCode,
    topic: filter.topic || undefined,
    difficulty: filter.difficulty === "any" ? undefined : filter.difficulty,
  }).filter((question) => {
    if (!filter.paper) return true;
    const paper = `${question.paper ?? ""} ${question.paperType ?? ""}`.toLowerCase();
    return paper.includes(filter.paper.toLowerCase());
  });
}

export function useClassroomHub() {
  const [state, setState] = useState<ClassroomState>(() => scopeStateToCurrentUser(readState()));

  useEffect(() => {
    const sync = () => setState(scopeStateToCurrentUser(readState()));
    sync();
    void loadClassroomStateFromFirebase().then((remoteState) => {
      if (!remoteState) return;
      writeLocalState(remoteState);
      setState(scopeStateToCurrentUser(remoteState));
    });
    const unsubscribeFirebase = subscribeToFirebaseClassroomState(setState);
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    window.addEventListener("markwise:auth:changed", sync);
    return () => {
      unsubscribeFirebase();
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("markwise:auth:changed", sync);
    };
  }, []);

  const refresh = useCallback(() => setState(scopeStateToCurrentUser(readState())), []);

  return useMemo(
    () => ({
      ...state,
      refresh,
      storageKey: STORAGE_KEY,
    }),
    [refresh, state],
  );
}

export function getUpcomingAssignment(classrooms: Classroom[], assignments: Assignment[]) {
  const classIds = new Set(classrooms.map((room) => room.id));
  return assignments
    .filter((assignment) => classIds.has(assignment.classId) && assignment.status !== "closed")
    .filter((assignment) => assignment.dueDate)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];
}

export function formatClassroomDate(value?: string | number) {
  if (!value) return "No date";
  const date = typeof value === "number" ? new Date(value) : new Date(value);
  if (Number.isNaN(date.getTime())) return "No date";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
