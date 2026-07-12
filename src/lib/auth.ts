import { useCallback, useEffect, useState } from "react";
import type { ExamBoardId, Qualification } from "../data/syllabusConfig";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  selectedSubjects: string[];
  targetGrade: string;
  weakestSubject: string;
  preferredPracticeMode: "practice" | "exam" | "mixed";
  createdAt: number;
};

type StoredUser = UserProfile & { password: string };

const SESSION_KEY = "markwise:session:v1";
const USERS_KEY = "markwise:users:v1";
const AUTH_EVENT = "markwise:auth:changed";

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

export function getCurrentUser(): UserProfile | null {
  const sessionId = readSessionId();
  if (!sessionId) return null;
  const user = readUsers().find((u) => u.id === sessionId);
  if (!user) return null;
  const { password: _, ...profile } = user;
  return profile;
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

export type SignupInput = {
  name: string;
  email: string;
  password: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  selectedSubjects: string[];
  targetGrade: string;
  weakestSubject: string;
  preferredPracticeMode: "practice" | "exam" | "mixed";
};

export type AuthResult = { ok: true; user: UserProfile } | { ok: false; error: string };

export function signup(input: SignupInput): AuthResult {
  const email = input.email.trim().toLowerCase();
  if (!input.name.trim()) return { ok: false, error: "Please enter your full name." };
  if (!email.includes("@")) return { ok: false, error: "Please enter a valid email." };
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
    qualification: input.qualification,
    examBoard: input.examBoard,
    selectedSubjects: input.selectedSubjects,
    targetGrade: input.targetGrade,
    weakestSubject: input.weakestSubject,
    preferredPracticeMode: input.preferredPracticeMode,
    createdAt: Date.now(),
  };

  users.push(profile);
  writeUsers(users);
  writeSessionId(profile.id);

  const { password: _, ...user } = profile;
  return { ok: true, user };
}

export function login(email: string, password: string): AuthResult {
  const normalised = email.trim().toLowerCase();
  const user = readUsers().find((u) => u.email === normalised && u.password === password);
  if (!user) return { ok: false, error: "Invalid email or password." };
  writeSessionId(user.id);
  const { password: _, ...profile } = user;
  return { ok: true, user: profile };
}

export function logout() {
  writeSessionId(null);
}

export function updateUserProfile(
  updates: Partial<
    Pick<
      UserProfile,
      "selectedSubjects" | "name" | "targetGrade" | "weakestSubject" | "preferredPracticeMode"
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

  const { password: _, ...user } = users[idx];
  return { ok: true, user };
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());
    setReady(true);
    const sync = () => setUser(getCurrentUser());
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
        "selectedSubjects" | "name" | "targetGrade" | "weakestSubject" | "preferredPracticeMode"
      >
    >,
  ) => Promise<AuthResult>;
};
