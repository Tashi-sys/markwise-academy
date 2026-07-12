import type { MarkPoint, Question } from "../data/questionBank";
import type { Attempt } from "./storage";
import { getTopicMeta } from "../data/topicsConfig";
import { getQuestion } from "../data/questionBank";
import type { MarkResult } from "./marking";

export type CommandWord = {
  word: string;
  meaning: string;
  reminder: string;
};

export const COMMAND_WORDS: CommandWord[] = [
  {
    word: "calculate",
    meaning: "Use numbers and show working to reach an answer.",
    reminder: "Write the formula or working, then give the final value with units where needed.",
  },
  {
    word: "evaluate",
    meaning: "Use evidence for and against, then make a judgement.",
    reminder: "Give both sides and finish with a clear judgement.",
  },
  {
    word: "compare",
    meaning: "Give similarities and differences.",
    reminder: "Use comparative language such as higher, lower, more, less, whereas.",
  },
  {
    word: "explain",
    meaning: "Give reasons and link cause to effect.",
    reminder: "Use because, therefore, so, which means to build linked reasoning.",
  },
  {
    word: "describe",
    meaning: "Say what happens or what can be seen.",
    reminder: "Give clear points from the question context without needing full reasons.",
  },
  {
    word: "suggest",
    meaning: "Apply your knowledge to an unfamiliar situation.",
    reminder: "Use the information in the question and connect it to a known process.",
  },
  {
    word: "state",
    meaning: "Give a short answer or fact.",
    reminder: "Be direct. A precise keyword is usually enough.",
  },
];

const RED_FLAGS = [
  {
    phrase: "the enzyme dies",
    advice: "In Biology, use 'the enzyme denatures because the active site changes shape.'",
  },
  {
    phrase: "breaks down fat",
    advice: "Say 'bile emulsifies fats' unless you are talking about lipase digestion.",
  },
  {
    phrase: "gives energy",
    advice: "Energy is released by respiration; it is not given or made.",
  },
  {
    phrase: "absorbs energy",
    advice: "Use the exact process, such as absorbs light energy or releases energy from glucose.",
  },
  {
    phrase: "it helps",
    advice: "Replace vague phrasing with the exact process and effect.",
  },
  { phrase: "stuff", advice: "Name the substance, structure, or process." },
  { phrase: "things", advice: "Name the specific variables, molecules, cells, or organisms." },
  {
    phrase: "bad",
    advice: "Explain the specific harmful effect instead of using a judgement word.",
  },
  { phrase: "good", advice: "Explain the specific benefit instead of using a judgement word." },
];

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function detectCommandWord(questionText: string): CommandWord | null {
  const q = normalise(questionText);
  return COMMAND_WORDS.find((item) => new RegExp(`\\b${item.word}\\b`).test(q)) ?? null;
}

export function detectRedFlags(answer: string) {
  const text = normalise(answer);
  return RED_FLAGS.filter((item) => text.includes(item.phrase));
}

export function answerLengthFeedback(answer: string, marks: number): string | null {
  const words = normalise(answer).split(" ").filter(Boolean).length;
  if (words === 0) return null;
  if (marks >= 4 && words < marks * 6) {
    return `This is a ${marks}-mark question, but your answer is only ${words} words. You probably need more linked detail.`;
  }
  if (marks <= 2 && words > 55) {
    return `This is a ${marks}-mark question. Your answer may be too long, so try to be more direct.`;
  }
  return null;
}

export function timingFeedback(
  elapsedSeconds: number,
  marks: number,
  score: number,
  total: number,
) {
  const minutes = elapsedSeconds / 60;
  const suggested = marks <= 2 ? marks : marks <= 4 ? 4.5 : 7;
  if (minutes > suggested * 1.5) {
    return `You spent ${Math.round(minutes)} minutes on a ${marks}-mark question. Try to be more concise.`;
  }
  if (minutes < Math.max(0.5, suggested * 0.35) && score < total) {
    return "You answered very quickly but missed key marks. Slow down and check the command word.";
  }
  return "Your timing is in a sensible range for this mark value.";
}

export function answerQualityTags(answer: string, question: Question, result: MarkResult) {
  const tags = new Set<string>();
  const words = normalise(answer).split(" ").filter(Boolean).length;
  const redFlags = detectRedFlags(answer);
  const command = detectCommandWord(question.questionText);

  if (result.score === result.total) tags.add("Full-mark quality");
  if (result.score > 0) tags.add("Good explanation");
  if (result.missed.length > 0) tags.add("Missing keyword");
  if (redFlags.length > 0) tags.add("Too vague");
  if (
    command?.word === "explain" &&
    !/\b(because|therefore|so|which means|as a result)\b/i.test(answer)
  ) {
    tags.add("Needs cause and effect");
  }
  if (words < question.marks * 5) tags.add("Too short");
  if (question.marks <= 2 && words > 55) tags.add("Too long");
  if (question.examinerKeywords.some((kw) => normalise(answer).includes(normalise(kw)))) {
    tags.add("Strong use of terminology");
  }
  return [...tags].slice(0, 6);
}

export function whyLostMarks(result: MarkResult) {
  if (result.missed.length === 0) {
    return "You did not lose marks here. Your answer covered every listed markscheme point.";
  }
  const first = result.missed[0];
  return `You lost a mark because your answer did not clearly state that ${first.point.replace(/\.$/, "")}. Use markscheme language such as ${acceptedLanguage(first)}.`;
}

export function generateFlashcards(question: Question, result: MarkResult) {
  return result.missed.map((missed, index) => ({
    id: `${question.id}:${Date.now()}:${index}`,
    topic: question.topic,
    subject: question.subject,
    questionId: question.id,
    front: flashcardFront(missed.point),
    back: flashcardBack(missed),
    originalQuestion: question.questionText,
    markSchemePoint: missed.point,
    createdAt: Date.now(),
  }));
}

function flashcardFront(point: string) {
  const cleaned = point.replace(/\.$/, "");
  if (/bile/i.test(cleaned) && /emuls/i.test(cleaned)) return "What does bile do to fats?";
  if (/active site/i.test(cleaned)) return "What happens to the enzyme active site?";
  if (/carbon dioxide/i.test(cleaned)) return "How should carbon dioxide be linked to this answer?";
  return `What markscheme point was missing: ${cleaned}?`;
}

function flashcardBack(point: MarkPoint) {
  return `${point.point.replace(/\.$/, "")}. Key language: ${acceptedLanguage(point)}.`;
}

function acceptedLanguage(point: MarkPoint) {
  return [...new Set(point.keywords.flat().map((keyword) => keyword.trim()))]
    .filter(Boolean)
    .slice(0, 5)
    .join(", ");
}

export function buildStudyPlan(attempts: Attempt[]) {
  const weak = weakestTopic(attempts);
  const topicLabel = weak ? getTopicMeta(weak.subject, weak.topic).name : "Ecology";
  return [
    `Practise 3 ${topicLabel} questions`,
    `Review ${topicLabel} exam keywords`,
    "Retry 2 previous mistakes",
    "Complete 1 mini paper",
  ];
}

export function weakestTopic(attempts: Attempt[]) {
  const map = new Map<
    string,
    { subject: string; topic: string; score: number; total: number; count: number }
  >();
  for (const attempt of attempts) {
    const key = `${attempt.subject}:${attempt.topic}`;
    const row = map.get(key) ?? {
      subject: attempt.subject,
      topic: attempt.topic,
      score: 0,
      total: 0,
      count: 0,
    };
    row.score += attempt.score;
    row.total += attempt.total;
    row.count += 1;
    map.set(key, row);
  }
  return [...map.values()]
    .filter((row) => row.count > 0)
    .sort((a, b) => a.score / a.total - b.score / b.total)[0];
}

export function strongestTopic(attempts: Attempt[]) {
  const map = new Map<
    string,
    { subject: string; topic: string; score: number; total: number; count: number }
  >();
  for (const attempt of attempts) {
    const key = `${attempt.subject}:${attempt.topic}`;
    const row = map.get(key) ?? {
      subject: attempt.subject,
      topic: attempt.topic,
      score: 0,
      total: 0,
      count: 0,
    };
    row.score += attempt.score;
    row.total += attempt.total;
    row.count += 1;
    map.set(key, row);
  }
  return [...map.values()]
    .filter((row) => row.count > 0)
    .sort((a, b) => b.score / b.total - a.score / a.total)[0];
}

export function missedKeywords(attempts: Attempt[]) {
  const counts = new Map<string, number>();
  for (const attempt of attempts) {
    const q = getQuestion(attempt.questionId);
    if (!q) continue;
    for (const point of q.markSchemePoints.slice(attempt.score)) {
      for (const keyword of point.keywords.flat()) {
        counts.set(keyword, (counts.get(keyword) ?? 0) + 1);
      }
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([keyword]) => keyword);
}
