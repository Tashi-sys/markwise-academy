import { getSubjectsForBoard, isStemSubject } from "../data/syllabusConfig";
import { useCallback, useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import type { ExamBoardId, Qualification } from "../data/syllabusConfig";
import { db } from "./firebase";

export type SubjectSyllabusSelection = {
  subject: string;
  examBoard: ExamBoardId;
  qualification: Qualification;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role?: "student" | "teacher";
  qualification: Qualification;
  examBoard: ExamBoardId;
  selectedSubjects: string[];
  subjectSyllabuses: SubjectSyllabusSelection[];
  targetGrade: string;
  weakestSubject: string;
  preferredPracticeMode: "practice" | "exam" | "mixed";
  createdAt: number;
};

type StoredUser = UserProfile & { password: string };

const SESSION_KEY = "markwise:session:v1";
const USERS_KEY = "markwise:users:v1";
const AUTH_EVENT = "markwise:auth:changed";
const USER_PROFILES_COLLECTION = "users";
const ALLOWED_EMAIL_PROVIDERS = new Set([
  "gmail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "yahoo.com",
  "proton.me",
  "protonmail.com",
  "aol.com",
]);

const ALLOWED_EMAIL_TLDS = new Set([
  "com",
  "edu",
  "org",
  "net",
  "ac.uk",
  "co.uk",
  "school",
  "academy",
  "io",
]);

export function validateEmailAddress(value: string): { ok: true } | { ok: false; error: string } {
  const email = value.trim().toLowerCase();
  const basic = new RegExp("^[a-z0-9.!#$%&'*+/=?^_{|}~-]+@[a-z0-9-]+(?:\\.[a-z0-9-]+)+$").test(
    email,
  );
  if (!basic) {
    return {
      ok: false,
      error: "Enter a real email address, like name@gmail.com or name@school.edu.",
    };
  }

  const [, domain = ""] = email.split("@");
  const domainParts = domain.split(".");
  const tld = domainParts.slice(-1)[0];
  const twoPartTld = domainParts.slice(-2).join(".");
  const hasAllowedProvider = ALLOWED_EMAIL_PROVIDERS.has(domain);
  const hasAllowedTld = ALLOWED_EMAIL_TLDS.has(tld) || ALLOWED_EMAIL_TLDS.has(twoPartTld);

  if (!hasAllowedProvider && !hasAllowedTld) {
    return {
      ok: false,
      error:
        "Use a recognised email provider or school email ending, like Gmail, iCloud, Outlook, .com, or .edu.",
    };
  }

  return { ok: true, email };
}

export function userProfileDocumentId(user: Pick<UserProfile, "id" | "name">) {
  const slug = user.name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || user.id;
}

function publicUserProfile(user: UserProfile) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role ?? "student",
    qualification: user.qualification,
    examBoard: user.examBoard,
    selectedSubjects: user.selectedSubjects,
    subjectSyllabuses: user.subjectSyllabuses,
    targetGrade: user.targetGrade,
    weakestSubject: user.weakestSubject,
    preferredPracticeMode: user.preferredPracticeMode,
    createdAt: user.createdAt,
  };
}

async function syncUserProfileToFirebase(user: UserProfile) {
  if (typeof window === "undefined") return;
  try {
    const profile = publicUserProfile(user);
    await setDoc(
      doc(db, USER_PROFILES_COLLECTION, userProfileDocumentId(user)),
      {
        ...profile,
        localUserId: user.id,
        updatedAt: Date.now(),
      },
      { merge: true },
    );
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(
        "MarkWise user profile Firebase save failed. Using localStorage fallback.",
        error,
      );
    }
  }
}

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
  window.dispatchEvent(new Event(AUTH_EVENT));
}

function readSessionId(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(SESSION_KEY);
}

function writeSessionId(id: string | null) {
  if (typeof window === "undefined") return;
  if (id) window.localStorage.setItem(SESSION_KEY, id);
  else window.localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event(AUTH_EVENT));
}

function normaliseUser(user: StoredUser): StoredUser {
  const selections = user.subjectSyllabuses?.length
    ? user.subjectSyllabuses
    : user.selectedSubjects.map((subject) => ({
        subject,
        examBoard: user.examBoard,
        qualification: user.qualification,
      }));
  const subjectSyllabuses = selections.filter((selection) =>
    getSubjectsForBoard(selection.examBoard).some((subject) => subject.id === selection.subject),
  );
  return {
    ...user,
    role: user.role === "teacher" ? "teacher" : "student",
    subjectSyllabuses,
    selectedSubjects: [...new Set(subjectSyllabuses.map((selection) => selection.subject))],
    weakestSubject:
      user.weakestSubject && isStemSubject(user.weakestSubject) ? user.weakestSubject : "",
  };
}

export function getCurrentUser(): UserProfile | null {
  const sessionId = readSessionId();
  if (!sessionId) return null;
  const user = readUsers().find((u) => u.id === sessionId);
  if (!user) return null;
  const { password: _, ...profile } = normaliseUser(user);
  return profile;
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

export type SignupInput = {
  name: string;
  email: string;
  role?: "student" | "teacher";
  password: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  selectedSubjects: string[];
  subjectSyllabuses?: SubjectSyllabusSelection[];
  targetGrade: string;
  weakestSubject: string;
  preferredPracticeMode: "practice" | "exam" | "mixed";
};

export type AuthResult = { ok: true; user: UserProfile } | { ok: false; error: string };

export function signup(input: SignupInput): AuthResult {
  const email = input.email.trim().toLowerCase();
  if (!input.name.trim()) return { ok: false, error: "Please enter your full name." };
  const emailStatus = validateEmailAddress(email);
  if (!emailStatus.ok) return { ok: false, error: emailStatus.error };
  if (input.password.length < 6)
    return { ok: false, error: "Password must be at least 6 characters." };
  if (input.selectedSubjects.length === 0)
    return { ok: false, error: "Select at least one subject." };

  const users = readUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, error: "An account with this email already exists." };
  }

  const profile: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email,
    password: input.password,
    role: input.role === "teacher" ? "teacher" : "student",
    qualification: input.qualification,
    examBoard: input.examBoard,
    selectedSubjects: input.selectedSubjects,
    subjectSyllabuses: input.subjectSyllabuses?.length
      ? input.subjectSyllabuses
      : input.selectedSubjects.map((subject) => ({
          subject,
          examBoard: input.examBoard,
          qualification: input.qualification,
        })),
    targetGrade: input.targetGrade,
    weakestSubject: input.weakestSubject,
    preferredPracticeMode: input.preferredPracticeMode,
    createdAt: Date.now(),
  };

  users.push(profile);
  writeUsers(users);
  writeSessionId(profile.id);

  const { password: _, ...user } = profile;
  void syncUserProfileToFirebase(user);
  return { ok: true, user };
}

export function login(email: string, password: string): AuthResult {
  const normalised = email.trim().toLowerCase();
  const user = readUsers().find((u) => u.email === normalised && u.password === password);
  if (!user) return { ok: false, error: "Invalid email or password." };
  writeSessionId(user.id);
  const { password: _, ...profile } = normaliseUser(user);
  void syncUserProfileToFirebase(profile);
  return { ok: true, user: profile };
}

export function logout() {
  writeSessionId(null);
}

export function updateUserProfile(
  updates: Partial<
    Pick<
      UserProfile,
      | "selectedSubjects"
      | "subjectSyllabuses"
      | "name"
      | "targetGrade"
      | "weakestSubject"
      | "preferredPracticeMode"
    >
  >,
): AuthResult {
  const current = getCurrentUser();
  if (!current) return { ok: false, error: "Not signed in." };

  const users = readUsers();
  const idx = users.findIndex((u) => u.id === current.id);
  if (idx === -1) return { ok: false, error: "User not found." };

  users[idx] = { ...users[idx], ...updates };
  writeUsers(users);

  const { password: _, ...user } = normaliseUser(users[idx]);
  void syncUserProfileToFirebase(user);
  return { ok: true, user };
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = getCurrentUser();
    setUser(current);
    if (current) void syncUserProfileToFirebase(current);
    setReady(true);
    const sync = () => {
      const next = getCurrentUser();
      setUser(next);
      if (next) void syncUserProfileToFirebase(next);
    };
    window.addEventListener(AUTH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AUTH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const refresh = useCallback(() => setUser(getCurrentUser()), []);

  return { user, ready, refresh, isAuthenticated: !!user };
}

/** Replace localStorage auth with Supabase/Firebase by swapping these functions. */
export type AuthProvider = {
  getCurrentUser: () => UserProfile | null;
  login: (email: string, password: string) => Promise<AuthResult>;
  signup: (input: SignupInput) => Promise<AuthResult>;
  logout: () => Promise<void>;
  updateUserProfile: (
    updates: Partial<
      Pick<
        UserProfile,
        | "selectedSubjects"
        | "subjectSyllabuses"
        | "name"
        | "targetGrade"
        | "weakestSubject"
        | "preferredPracticeMode"
      >
    >,
  ) => Promise<AuthResult>;
};
