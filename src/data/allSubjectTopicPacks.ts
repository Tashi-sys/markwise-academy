import type { Question } from "./questionBank";
import { EXAM_BOARDS, getSubjectName } from "./syllabusConfig";
import { getTopicsForSubject } from "./topicsConfig";

const DIFFICULTIES = [
  { difficulty: "easy" as const, marks: 2, command: "State and explain" },
  { difficulty: "medium" as const, marks: 4, command: "Describe and explain" },
  { difficulty: "hard" as const, marks: 6, command: "Evaluate and explain in detail" },
];

const SUBJECT_LANGUAGE: Record<
  string,
  {
    concepts: string[];
    skills: string[];
    method: string;
    tip: string;
  }
> = {
  chemistry: {
    concepts: ["particles", "bonding", "energy change", "ions", "reaction conditions"],
    skills: ["balanced equations", "observations", "collision theory", "calculations"],
    method: "use the data, equation, or observation from the question",
    tip: "Use chemical vocabulary and link structure or particles to the property.",
  },
  physics: {
    concepts: ["resultant force", "energy transfer", "field", "wave behaviour", "circuit variable"],
    skills: [
      "equation substitution",
      "unit conversion",
      "graph interpretation",
      "cause and effect",
    ],
    method: "state the equation, substitute values, and explain the physical meaning",
    tip: "Quote the equation or law, then connect it directly to the scenario.",
  },
  mathematics: {
    concepts: ["method", "working", "formula", "accuracy", "reasoning"],
    skills: ["substitution", "rearranging", "calculation", "checking units"],
    method: "show each line of working clearly",
    tip: "Method marks come from visible working, not just the final answer.",
  },
  "mathematics-a": {
    concepts: ["method", "working", "formula", "accuracy", "reasoning"],
    skills: ["substitution", "rearranging", "calculation", "checking units"],
    method: "show each line of working clearly",
    tip: "Method marks come from visible working, not just the final answer.",
  },
  "mathematics-b": {
    concepts: ["method", "working", "formula", "accuracy", "reasoning"],
    skills: ["substitution", "rearranging", "calculation", "checking units"],
    method: "show each line of working clearly",
    tip: "Method marks come from visible working, not just the final answer.",
  },
  "additional-mathematics": {
    concepts: ["algebraic manipulation", "function behaviour", "proof", "trigonometric identity"],
    skills: ["factorising", "solving", "sketching", "justifying"],
    method: "use a formal mathematical method and justify each step",
    tip: "For higher mathematics, write enough working for the examiner to follow your logic.",
  },
  "further-mathematics": {
    concepts: ["algebraic manipulation", "function behaviour", "proof", "trigonometric identity"],
    skills: ["factorising", "solving", "sketching", "justifying"],
    method: "use a formal mathematical method and justify each step",
    tip: "For higher mathematics, write enough working for the examiner to follow your logic.",
  },
  "further-pure-mathematics": {
    concepts: ["algebraic manipulation", "function behaviour", "proof", "trigonometric identity"],
    skills: ["factorising", "solving", "sketching", "justifying"],
    method: "use a formal mathematical method and justify each step",
    tip: "For higher mathematics, write enough working for the examiner to follow your logic.",
  },
  "english-language": {
    concepts: ["writer's method", "language choice", "structure", "reader effect", "tone"],
    skills: ["quotation", "inference", "analysis", "evaluation"],
    method: "use a short quotation and explain the effect on the reader",
    tip: "Use point, evidence, explain, then zoom in on a word or method.",
  },
  "english-language-a": {
    concepts: ["writer's method", "language choice", "structure", "reader effect", "tone"],
    skills: ["quotation", "inference", "analysis", "evaluation"],
    method: "use a short quotation and explain the effect on the reader",
    tip: "Use point, evidence, explain, then zoom in on a word or method.",
  },
  "english-language-b": {
    concepts: ["writer's method", "language choice", "structure", "reader effect", "tone"],
    skills: ["quotation", "inference", "analysis", "evaluation"],
    method: "use a short quotation and explain the effect on the reader",
    tip: "Use point, evidence, explain, then zoom in on a word or method.",
  },
  "english-literature": {
    concepts: ["theme", "character", "context", "structure", "imagery"],
    skills: ["embedded quotation", "analysis", "comparison", "judgement"],
    method: "link evidence to the writer's message and the whole text",
    tip: "Keep returning to the writer's intention, not just the plot.",
  },
  business: {
    concepts: ["stakeholders", "costs", "market research", "cash flow", "motivation"],
    skills: ["application", "advantage", "disadvantage", "recommendation"],
    method: "apply the point to the business context in the question",
    tip: "Name the business concept, apply it, then explain the impact on profit, costs, or customers.",
  },
  "business-studies": {
    concepts: ["stakeholders", "costs", "market research", "cash flow", "motivation"],
    skills: ["application", "advantage", "disadvantage", "recommendation"],
    method: "apply the point to the business context in the question",
    tip: "Name the business concept, apply it, then explain the impact on profit, costs, or customers.",
  },
  economics: {
    concepts: ["demand", "supply", "opportunity cost", "externality", "exchange rate"],
    skills: ["diagram explanation", "chain of reasoning", "evaluation", "policy impact"],
    method: "build a chain of reasoning from cause to economic effect",
    tip: "Use economic terms precisely and avoid one-step explanations.",
  },
  geography: {
    concepts: ["process", "management strategy", "case evidence", "sustainability", "risk"],
    skills: ["data interpretation", "place-specific detail", "explanation", "evaluation"],
    method: "use named evidence or data where the question asks for support",
    tip: "For geography, link process, place, and impact.",
  },
  history: {
    concepts: ["cause", "consequence", "significance", "provenance", "interpretation"],
    skills: ["source inference", "own knowledge", "balanced judgement", "chronology"],
    method: "support each point with precise own knowledge or source detail",
    tip: "Explain why the evidence matters, not just what happened.",
  },
  "computer-science": {
    concepts: ["algorithm", "data representation", "network protocol", "security", "logic"],
    skills: ["trace table", "pseudocode", "binary conversion", "comparison"],
    method: "state the technical term and apply it to the scenario",
    tip: "Use exact computing vocabulary and show intermediate working for algorithms or conversions.",
  },
  psychology: {
    concepts: ["theory", "study", "variable", "validity", "ethical issue"],
    skills: ["outline", "evaluate", "apply", "research methods"],
    method: "name the concept or study and explain what it shows",
    tip: "For psychology, pair a named concept with evidence or evaluation.",
  },
  french: {
    concepts: ["opinion", "tense", "reason", "detail", "time phrase"],
    skills: ["reading inference", "translation", "accurate grammar", "written response"],
    method: "identify the opinion or grammar cue before answering",
    tip: "Accuracy and range matter more than overcomplicated sentences.",
  },
  spanish: {
    concepts: ["opinion", "tense", "reason", "detail", "time phrase"],
    skills: ["reading inference", "translation", "accurate grammar", "written response"],
    method: "identify the opinion or grammar cue before answering",
    tip: "Accuracy and range matter more than overcomplicated sentences.",
  },
  german: {
    concepts: ["opinion", "tense", "reason", "detail", "time phrase"],
    skills: ["reading inference", "translation", "accurate grammar", "written response"],
    method: "identify the opinion or grammar cue before answering",
    tip: "Accuracy and range matter more than overcomplicated sentences.",
  },
  chinese: {
    concepts: ["opinion", "tense", "reason", "detail", "time phrase"],
    skills: ["reading inference", "translation", "accurate grammar", "written response"],
    method: "identify the opinion or grammar cue before answering",
    tip: "Accuracy and range matter more than overcomplicated sentences.",
  },
  "mandarin-chinese": {
    concepts: ["opinion", "tense", "reason", "detail", "time phrase"],
    skills: ["reading inference", "translation", "accurate grammar", "written response"],
    method: "identify the opinion or grammar cue before answering",
    tip: "Accuracy and range matter more than overcomplicated sentences.",
  },
  arabic: {
    concepts: ["opinion", "tense", "reason", "detail", "time phrase"],
    skills: ["reading inference", "translation", "accurate grammar", "written response"],
    method: "identify the opinion or grammar cue before answering",
    tip: "Accuracy and range matter more than overcomplicated sentences.",
  },
};

const DEFAULT_LANGUAGE = {
  concepts: ["key idea", "method", "evidence", "application", "evaluation"],
  skills: ["explain", "apply", "compare", "evaluate"],
  method: "use the command word and apply the point to the question",
  tip: "Make each point explicit and use subject-specific vocabulary.",
};

function languageFor(subject: string) {
  return SUBJECT_LANGUAGE[subject] ?? DEFAULT_LANGUAGE;
}

function title(text: string) {
  return text
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function makeQuestion(args: {
  examBoard: string;
  qualification: "GCSE" | "IGCSE";
  boardName: string;
  subject: string;
  subjectName: string;
  topic: string;
  topicName: string;
  topicBlurb: string;
  difficulty: (typeof DIFFICULTIES)[number];
  index: number;
}): Question {
  const lang = languageFor(args.subject);
  const concept = lang.concepts[args.index % lang.concepts.length];
  const skill = lang.skills[args.index % lang.skills.length];
  const context = [
    `A ${args.qualification} student is answering a ${args.boardName} ${args.subjectName} question on ${args.topicName}.`,
    `A past-paper-style item gives a short scenario about ${args.topicName}.`,
    `An examiner asks for a focused answer about ${concept} in ${args.topicName}.`,
    `A revision worksheet includes data or evidence linked to ${args.topicName}.`,
  ][args.index % 4];
  const marks = args.difficulty.marks;
  const markSchemePoints = [
    {
      point: `Identifies the relevant ${args.subjectName} concept: ${concept}.`,
      keywords: [[concept, args.topicName.toLowerCase(), args.subjectName.toLowerCase()]],
    },
    {
      point: `Uses accurate subject vocabulary linked to ${args.topicName}.`,
      keywords: [[args.topicName.toLowerCase().split(" ")[0], "accurate", "keyword", concept]],
    },
    {
      point: `Applies the idea to the context in the question.`,
      keywords: [["context", "apply", "scenario", args.boardName.toLowerCase().split(" ")[0]]],
    },
    {
      point: `Develops the answer with ${skill}.`,
      keywords: [[skill, "because", "therefore", "leads"]],
    },
    {
      point: `Includes a clear chain of reasoning rather than a vague statement.`,
      keywords: [["because", "therefore", "so", "chain", "reason"]],
    },
    {
      point: `Uses a suitable method or evidence: ${lang.method}.`,
      keywords: [lang.method.split(" ").slice(0, 5), ["method", "evidence", "data"]],
    },
  ].slice(0, marks);

  return {
    id: `${args.examBoard}-${args.subject}-${args.topic}-${args.difficulty.difficulty}-${String(args.index + 1).padStart(2, "0")}`,
    qualification: args.qualification,
    examBoard: args.examBoard as Question["examBoard"],
    subject: args.subject,
    topic: args.topic,
    paper:
      args.qualification === "IGCSE" ? "International GCSE Topic Practice" : "GCSE Topic Practice",
    session: "Original MarkWise Pack",
    questionText: `${context} ${args.difficulty.command} the importance of ${concept}. [${marks} marks]`,
    marks,
    markSchemePoints,
    examinerKeywords: [...new Set(markSchemePoints.flatMap((point) => point.keywords.flat()))],
    modelAnswer: `${concept} is important in ${args.topicName} because it links directly to ${args.topicBlurb.toLowerCase()} A full-mark answer uses accurate ${args.subjectName} vocabulary, applies the point to the scenario, and develops the reasoning clearly.`,
    difficulty: args.difficulty.difficulty,
    suggestedMinutes: marks + 1,
    hints: [
      `Think about the ${args.subjectName} idea behind ${args.topicName}.`,
      `Use the key phrase "${concept}" and apply it to the scenario.`,
      `Add a because-link and include ${skill} for the higher mark.`,
    ],
    examinerTip: lang.tip,
  };
}

export const ALL_SUBJECT_TOPIC_PACK_QUESTIONS: Question[] = EXAM_BOARDS.flatMap((board) =>
  board.subjects.flatMap((subject) => {
    if (subject.id === "biology") return [];
    const topics = Object.entries(getTopicsForSubject(subject.id));
    return topics.flatMap(([topic, meta]) =>
      DIFFICULTIES.flatMap((difficulty) =>
        Array.from({ length: 20 }, (_, index) =>
          makeQuestion({
            examBoard: board.id,
            qualification: board.qualification,
            boardName: board.name,
            subject: subject.id,
            subjectName: getSubjectName(board.id, subject.id) || title(subject.id),
            topic,
            topicName: meta.name,
            topicBlurb: meta.blurb,
            difficulty,
            index,
          }),
        ),
      ),
    );
  }),
);
