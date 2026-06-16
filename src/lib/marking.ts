import type { MarkPoint, Question } from "./questions";

export type MarkResult = {
  awarded: { point: string; matchedKeyword: string }[];
  missed: MarkPoint[];
  score: number;
  total: number;
};

function normalise(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ");
}

function pointMatches(answer: string, point: MarkPoint): { matched: boolean; matchedKeyword: string } {
  // Each group must match at least one of its synonyms
  let matchedKeyword = "";
  for (const group of point.keywords) {
    const hit = group.find((kw) => answer.includes(kw.toLowerCase()));
    if (!hit) return { matched: false, matchedKeyword: "" };
    if (!matchedKeyword) matchedKeyword = hit;
  }
  return { matched: true, matchedKeyword };
}

export function markAnswer(question: Question, raw: string): MarkResult {
  const answer = normalise(raw);
  const awarded: { point: string; matchedKeyword: string }[] = [];
  const missed: MarkPoint[] = [];
  for (const p of question.markscheme) {
    const { matched, matchedKeyword } = pointMatches(answer, p);
    if (matched) awarded.push({ point: p.point, matchedKeyword });
    else missed.push(p);
  }
  return { awarded, missed, score: awarded.length, total: question.markscheme.length };
}

/** Upgrade the student answer by appending missing markscheme points. */
export function upgradeAnswer(question: Question, raw: string, result: MarkResult): string {
  if (result.missed.length === 0) return raw.trim();
  const trimmed = raw.trim().replace(/\.?\s*$/, "");
  const additions = result.missed.map((m) => m.point.replace(/\.$/, "")).join(". ");
  return `${trimmed}. ${additions}.`;
}