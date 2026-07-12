import type { Question } from "./questionBank";
import type { ExamBoardId, Qualification } from "./syllabusConfig";

const BOARDS: { examBoard: ExamBoardId; qualification: Qualification; label: string }[] = [
  { examBoard: "edexcel-igcse", qualification: "IGCSE", label: "Edexcel International GCSE" },
  { examBoard: "cambridge-igcse", qualification: "IGCSE", label: "Cambridge IGCSE" },
  { examBoard: "oxfordaqa-igcse", qualification: "IGCSE", label: "OxfordAQA International GCSE" },
  { examBoard: "aqa-gcse", qualification: "GCSE", label: "AQA GCSE" },
  { examBoard: "ocr-gcse", qualification: "GCSE", label: "OCR GCSE" },
];

type BiologyTopic = {
  id: string;
  name: string;
  paper: string;
  concepts: {
    term: string;
    detail: string;
    process: string;
    effect: string;
    method: string;
    keywords: string[];
  }[];
};

const TOPICS: BiologyTopic[] = [
  {
    id: "cells",
    name: "Cells and Microscopes",
    paper: "Paper 1",
    concepts: [
      {
        term: "nucleus",
        detail: "contains genetic material",
        process: "controls cell activities",
        effect: "allows inherited information to be passed on",
        method: "use a light microscope and calculate magnification",
        keywords: ["nucleus", "genetic material", "DNA", "controls"],
      },
      {
        term: "mitochondria",
        detail: "site of aerobic respiration",
        process: "release energy from glucose",
        effect: "provides energy for cell processes",
        method: "compare cells with different energy demands",
        keywords: ["mitochondria", "respiration", "energy", "glucose"],
      },
      {
        term: "cell membrane",
        detail: "partially permeable boundary",
        process: "controls movement of substances",
        effect: "maintains a stable internal environment",
        method: "observe osmosis using plant tissue",
        keywords: ["cell membrane", "partially permeable", "diffusion", "osmosis"],
      },
    ],
  },
  {
    id: "enzymes",
    name: "Enzymes",
    paper: "Paper 1",
    concepts: [
      {
        term: "active site",
        detail: "has a complementary shape to the substrate",
        process: "forms enzyme-substrate complexes",
        effect: "speeds up the reaction without being used up",
        method: "measure reaction rate at different temperatures",
        keywords: ["active site", "substrate", "complementary", "enzyme-substrate"],
      },
      {
        term: "denaturation",
        detail: "changes the shape of the active site",
        process: "prevents the substrate from fitting",
        effect: "reduces or stops enzyme activity",
        method: "use iodine or Benedict's reagent to track digestion",
        keywords: ["denature", "active site", "temperature", "pH"],
      },
    ],
  },
  {
    id: "nutrition",
    name: "Nutrition",
    paper: "Paper 1",
    concepts: [
      {
        term: "villi",
        detail: "increase surface area in the small intestine",
        process: "absorb soluble digested food molecules",
        effect: "moves nutrients quickly into the blood",
        method: "compare surface area using folded models",
        keywords: ["villi", "surface area", "absorption", "diffusion"],
      },
      {
        term: "amylase",
        detail: "digests starch into sugars",
        process: "breaks glycosidic bonds in starch",
        effect: "produces soluble glucose or maltose for absorption",
        method: "test for starch using iodine solution",
        keywords: ["amylase", "starch", "sugar", "iodine"],
      },
    ],
  },
  {
    id: "gas-exchange",
    name: "Gas Exchange",
    paper: "Paper 1",
    concepts: [
      {
        term: "alveoli",
        detail: "have thin walls and a large surface area",
        process: "oxygen diffuses into the blood",
        effect: "supports aerobic respiration in cells",
        method: "use breathing rate data before and after exercise",
        keywords: ["alveoli", "surface area", "diffusion", "oxygen"],
      },
      {
        term: "ventilation",
        detail: "moves air in and out of the lungs",
        process: "maintains steep concentration gradients",
        effect: "increases the rate of gas exchange",
        method: "measure breathing rate with a spirometer trace",
        keywords: ["ventilation", "concentration gradient", "carbon dioxide", "oxygen"],
      },
    ],
  },
  {
    id: "transport",
    name: "Transport in Humans",
    paper: "Paper 1",
    concepts: [
      {
        term: "red blood cells",
        detail: "contain haemoglobin",
        process: "transport oxygen around the body",
        effect: "supplies respiring tissues",
        method: "interpret blood composition data",
        keywords: ["red blood cell", "haemoglobin", "oxygen", "respiration"],
      },
      {
        term: "heart valves",
        detail: "prevent backflow of blood",
        process: "keep blood moving in one direction",
        effect: "maintains efficient circulation",
        method: "label a heart diagram",
        keywords: ["valve", "backflow", "one direction", "heart"],
      },
    ],
  },
  {
    id: "plant-transport",
    name: "Plant Transport",
    paper: "Paper 1",
    concepts: [
      {
        term: "xylem",
        detail: "transports water and mineral ions",
        process: "moves water up the plant in the transpiration stream",
        effect: "supplies leaves for photosynthesis",
        method: "use a potometer to estimate transpiration rate",
        keywords: ["xylem", "water", "mineral ions", "transpiration"],
      },
      {
        term: "stomata",
        detail: "openings controlled by guard cells",
        process: "allow water vapour and gases to diffuse",
        effect: "affect transpiration and gas exchange",
        method: "compare leaf surfaces under a microscope",
        keywords: ["stomata", "guard cells", "water vapour", "diffusion"],
      },
    ],
  },
  {
    id: "respiration",
    name: "Respiration",
    paper: "Paper 1",
    concepts: [
      {
        term: "aerobic respiration",
        detail: "uses oxygen to break down glucose",
        process: "releases energy in cells",
        effect: "produces carbon dioxide and water",
        method: "compare breathing rate before and after exercise",
        keywords: ["aerobic", "oxygen", "glucose", "energy"],
      },
      {
        term: "anaerobic respiration",
        detail: "happens when there is not enough oxygen",
        process: "partially breaks down glucose",
        effect: "produces lactic acid in muscles",
        method: "explain oxygen debt after intense exercise",
        keywords: ["anaerobic", "lactic acid", "oxygen debt", "glucose"],
      },
    ],
  },
  {
    id: "reproduction",
    name: "Reproduction",
    paper: "Paper 2",
    concepts: [
      {
        term: "fertilisation",
        detail: "fusion of male and female gametes",
        process: "combines genetic material",
        effect: "forms a zygote with variation",
        method: "compare sexual and asexual reproduction",
        keywords: ["fertilisation", "gamete", "zygote", "variation"],
      },
      {
        term: "pollination",
        detail: "transfer of pollen to a stigma",
        process: "allows male gametes to reach the ovule",
        effect: "can lead to seed formation",
        method: "label flower structures",
        keywords: ["pollen", "stigma", "ovule", "seed"],
      },
    ],
  },
  {
    id: "inheritance",
    name: "Inheritance",
    paper: "Paper 2",
    concepts: [
      {
        term: "alleles",
        detail: "different versions of the same gene",
        process: "can be dominant or recessive",
        effect: "determine inherited characteristics",
        method: "complete a Punnett square",
        keywords: ["allele", "gene", "dominant", "recessive"],
      },
      {
        term: "meiosis",
        detail: "produces gametes",
        process: "halves the chromosome number",
        effect: "restores the full number at fertilisation",
        method: "compare mitosis and meiosis",
        keywords: ["meiosis", "gamete", "chromosome", "haploid"],
      },
    ],
  },
  {
    id: "ecology",
    name: "Ecology",
    paper: "Paper 2",
    concepts: [
      {
        term: "deforestation",
        detail: "removes trees from ecosystems",
        process: "reduces photosynthesis and may release carbon dioxide",
        effect: "can increase global warming and reduce biodiversity",
        method: "evaluate human impacts on ecosystems",
        keywords: ["deforestation", "photosynthesis", "carbon dioxide", "biodiversity"],
      },
      {
        term: "eutrophication",
        detail: "fertilisers enter water",
        process: "algal bloom blocks light and decomposers use oxygen",
        effect: "aquatic organisms may die",
        method: "interpret dissolved oxygen data",
        keywords: ["fertiliser", "algal bloom", "decomposer", "oxygen"],
      },
    ],
  },
  {
    id: "variation",
    name: "Variation and Selection",
    paper: "Paper 2",
    concepts: [
      {
        term: "natural selection",
        detail: "individuals vary within a population",
        process: "better adapted organisms survive and reproduce",
        effect: "advantageous alleles become more common",
        method: "explain adaptation using selection pressure",
        keywords: ["variation", "adapted", "survive", "reproduce"],
      },
      {
        term: "mutation",
        detail: "a change in DNA",
        process: "can create new alleles",
        effect: "may cause useful, harmful, or neutral variation",
        method: "link mutation to evolution",
        keywords: ["mutation", "DNA", "allele", "variation"],
      },
    ],
  },
  {
    id: "practical",
    name: "Practical Skills",
    paper: "Paper 1/2",
    concepts: [
      {
        term: "control variables",
        detail: "factors kept the same",
        process: "make the investigation fair",
        effect: "improves validity of the conclusion",
        method: "identify independent, dependent, and control variables",
        keywords: ["control variable", "valid", "fair test", "independent variable"],
      },
      {
        term: "repeat measurements",
        detail: "collect more than one reading",
        process: "allow a mean to be calculated",
        effect: "reduces the effect of random errors",
        method: "spot anomalies in a results table",
        keywords: ["repeat", "mean", "anomaly", "random error"],
      },
    ],
  },
];

const DIFFICULTIES = [
  { difficulty: "easy" as const, marks: 2, command: "State and explain" },
  { difficulty: "medium" as const, marks: 4, command: "Describe and explain" },
  { difficulty: "hard" as const, marks: 6, command: "Evaluate and explain in detail" },
];

function pointsFor(topic: BiologyTopic, concept: BiologyTopic["concepts"][number], marks: number) {
  const points = [
    {
      point: `Identifies ${concept.term} correctly.`,
      keywords: [[concept.term, ...concept.keywords.slice(0, 2)]],
    },
    {
      point: `States that ${concept.term} ${concept.detail}.`,
      keywords: [concept.detail.split(" ").slice(0, 4), concept.keywords],
    },
    {
      point: `Explains that it ${concept.process}.`,
      keywords: [concept.process.split(" ").slice(0, 5), concept.keywords],
    },
    {
      point: `Links the process to the effect: ${concept.effect}.`,
      keywords: [concept.effect.split(" ").slice(0, 5), concept.keywords],
    },
    {
      point: `Applies the idea to ${topic.name.toLowerCase()} in an exam context.`,
      keywords: [[topic.name.toLowerCase().split(" ")[0], "exam", "context", "apply"]],
    },
    {
      point: `Mentions a suitable practical or data method: ${concept.method}.`,
      keywords: [concept.method.split(" ").slice(0, 5), ["method", "data", "measure"]],
    },
  ];
  return points.slice(0, marks);
}

function makeQuestion(
  board: (typeof BOARDS)[number],
  topic: BiologyTopic,
  difficulty: (typeof DIFFICULTIES)[number],
  index: number,
): Question {
  const concept = topic.concepts[index % topic.concepts.length];
  const scenario = [
    `A student is revising ${topic.name.toLowerCase()} for ${board.label}.`,
    `An exam question asks about ${concept.term} in ${topic.name.toLowerCase()}.`,
    `A teacher gives a diagram or data set linked to ${concept.term}.`,
    `A past-paper-style question focuses on ${concept.term}.`,
  ][index % 4];
  const points = pointsFor(topic, concept, difficulty.marks);

  return {
    id: `${board.examBoard}-biology-${topic.id}-${difficulty.difficulty}-${String(index + 1).padStart(2, "0")}`,
    qualification: board.qualification,
    examBoard: board.examBoard,
    subject: "biology",
    topic: topic.id,
    paper: topic.paper,
    questionText: `${scenario} ${difficulty.command} how ${concept.term} is important. [${difficulty.marks} marks]`,
    marks: difficulty.marks,
    markSchemePoints: points,
    examinerKeywords: [...new Set(points.flatMap((point) => point.keywords.flat()))],
    modelAnswer: `${concept.term} is important because it ${concept.detail}. It ${concept.process}, which means ${concept.effect}. In an exam answer, this should be linked clearly to ${topic.name.toLowerCase()} and supported with accurate biological vocabulary.`,
    difficulty: difficulty.difficulty,
    suggestedMinutes: difficulty.marks + 1,
    hints: [
      `Think about the role of ${concept.term}.`,
      `Link ${concept.term} to ${concept.process}.`,
      `Use the phrase "${concept.keywords[0]}" and explain the effect, not just the description.`,
    ],
    examinerTip:
      difficulty.difficulty === "hard"
        ? "For full marks, link the biological process to the effect and include a practical or data point where relevant."
        : "Use the key term first, then add a because-link to earn the explanation mark.",
  };
}

export const BIOLOGY_TOPIC_PACK_QUESTIONS: Question[] = BOARDS.flatMap((board) =>
  TOPICS.flatMap((topic) =>
    DIFFICULTIES.flatMap((difficulty) =>
      Array.from({ length: 20 }, (_, index) => makeQuestion(board, topic, difficulty, index)),
    ),
  ),
);
