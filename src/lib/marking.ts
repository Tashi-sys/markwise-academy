import type { MarkPoint, Question } from "../data/questionBank";

export type MarkResult = {
  awarded: { point: string; matchedKeyword: string }[];
  missed: MarkPoint[];
  score: number;
  total: number;
};

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordForms(word: string) {
  const forms = new Set([word]);
  if (word.length > 3 && word.endsWith("ies")) forms.add(`${word.slice(0, -3)}y`);
  if (word.length > 3 && word.endsWith("s") && !/(ss|us|is)$/.test(word)) {
    forms.add(word.slice(0, -1));
  }
  if (word.length > 2 && !word.endsWith("s")) forms.add(`${word}s`);
  return forms;
}

function wordsMatch(answerWord: string, keywordWord: string) {
  const answerForms = wordForms(answerWord);
  const keywordForms = wordForms(keywordWord);
  return [...keywordForms].some((form) => answerForms.has(form));
}

function keywordMatches(answer: string, keyword: string) {
  const normalisedKeyword = normalise(keyword);
  if (!normalisedKeyword) return false;

  const paddedAnswer = ` ${answer} `;
  if (paddedAnswer.includes(` ${normalisedKeyword} `)) return true;

  const answerWords = answer.split(" ").filter(Boolean);
  const keywordWords = normalisedKeyword.split(" ").filter(Boolean);

  if (keywordWords.length === 1) {
    return answerWords.some((word) => wordsMatch(word, keywordWords[0]));
  }

  return keywordWords.every((keywordWord) =>
    answerWords.some((answerWord) => wordsMatch(answerWord, keywordWord)),
  );
}

function pointMatches(
  answer: string,
  point: MarkPoint,
): { matched: boolean; matchedKeyword: string } {
  let matchedKeyword = "";
  for (const group of point.keywords) {
    const hit = group.find((kw) => keywordMatches(answer, kw));
    if (!hit) return { matched: false, matchedKeyword: "" };
    if (!matchedKeyword) matchedKeyword = hit;
  }
  return { matched: true, matchedKeyword };
}

export function markAnswer(question: Question, raw: string): MarkResult {
  const answer = normalise(raw);
  const maxMarks = Math.max(0, question.marks || question.markSchemePoints.length);
  const awarded: { point: string; matchedKeyword: string }[] = [];
  const missedCandidates: MarkPoint[] = [];

  for (const p of question.markSchemePoints) {
    const { matched, matchedKeyword } = pointMatches(answer, p);
    if (matched && awarded.length < maxMarks) awarded.push({ point: p.point, matchedKeyword });
    else if (!matched) missedCandidates.push(p);
  }

  const score = Math.min(awarded.length, maxMarks);
  const missed = missedCandidates.slice(0, Math.max(0, maxMarks - score));
  return { awarded, missed, score, total: maxMarks };
}

export function upgradeAnswer(question: Question, raw: string, result: MarkResult): string {
  if (result.missed.length === 0) return raw.trim();
  const trimmed = raw.trim().replace(/\.?\s*$/, "");
  const additions = result.missed.map((m) => m.point.replace(/\.$/, "")).join(". ");
  return `${trimmed}. ${additions}.`;
}
