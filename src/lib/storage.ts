import { useEffect, useState, useCallback } from "react";

export type Attempt = {
  id: string;
  questionId: string;
  topic: string;
  subject: string;
  answer: string;
  score: number;
  total: number;
  date: number;
};

const KEY = "markwise:attempts:v1";

function read(): Attempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attempt[]) : [];
  } catch {
    return [];
  }
}

function write(items: Attempt[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("markwise:attempts:changed"));
}

export function recordAttempt(a: Omit<Attempt, "id" | "date">) {
  const items = read();
  items.push({ ...a, id: crypto.randomUUID(), date: Date.now() });
  write(items);
}

export function useAttempts() {
  const [items, setItems] = useState<Attempt[]>([]);
  useEffect(() => {
    setItems(read());
    const onChange = () => setItems(read());
    window.addEventListener("markwise:attempts:changed", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("markwise:attempts:changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);
  const reset = useCallback(() => write([]), []);
  return { attempts: items, reset };
}

export function topicStats(items: Attempt[], topic: string) {
  const filtered = items.filter((a) => a.topic === topic);
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
    else if (i === 0) continue; // allow today to be empty
    else break;
  }
  return streak;
}