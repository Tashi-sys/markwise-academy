import { EXAM_BOARDS, getSubjectName, type ExamBoardId } from "./syllabusConfig";
import { getTopicMeta, getTopicsForSubject } from "./topicsConfig";

export type MiniPaperExamBoardId = ExamBoardId | "custom";

export type MiniPaperConfigPaper = {
  id: string;
  label: string;
  description: string;
  defaultTime: number;
  tags: string[];
  matchPapers: string[];
  availableTopics?: string[];
  paperType?: string;
  topics?: string[];
  questionTypes?: string[];
};

export type MiniPaperSyllabus = {
  subject: string;
  examBoard: MiniPaperExamBoardId;
  label: string;
  papers: MiniPaperConfigPaper[];
};

export type SyllabusMap = Record<
  ExamBoardId,
  {
    label: string;
    subjects: Record<
      string,
      {
        label: string;
        papers: Record<string, MiniPaperConfigPaper>;
      }
    >;
  }
>;

const GCSE_CORE_PAPERS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "Core paper practice for the first half of the specification.",
    defaultTime: 105,
    tags: ["Theory"],
    matchPapers: ["Paper 1", "GCSE Topic Practice", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "Core paper practice for the second half of the specification.",
    defaultTime: 105,
    tags: ["Theory"],
    matchPapers: ["Paper 2", "GCSE Topic Practice", "International GCSE Topic Practice", "General"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed practice across both main papers.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: [
      "Paper 1",
      "Paper 2",
      "Paper 1/2",
      "GCSE Topic Practice",
      "International GCSE Topic Practice",
      "General",
    ],
  },
];

const OXFORD_AQA_CHEMISTRY_TOPIC_IDS = [
  "atomic-structure-and-periodic-table",
  "structure-bonding-and-properties",
  "chemical-changes",
  "chemical-analysis",
  "acids-bases-and-salts",
  "quantitative-chemistry",
  "periodicity",
  "rate-and-extent-of-chemical-change",
  "energy-changes",
  "organic-chemistry",
];

const AQA_CHEMISTRY_PAPER_1_TOPIC_IDS = [
  "atomic-structure-and-periodic-table",
  "structure-bonding-and-properties",
  "quantitative-chemistry",
  "chemical-changes",
  "energy-changes",
  "paper-1-mixed",
  "practical",
  "high-mark-synoptic",
  "calculation-heavy",
];

const AQA_CHEMISTRY_PAPER_2_TOPIC_IDS = [
  "rate-and-extent-of-chemical-change",
  "organic-chemistry",
  "chemical-analysis",
  "chemistry-of-the-atmosphere",
  "using-resources",
  "paper-2-mixed",
  "practical",
  "high-mark-synoptic",
  "calculation-heavy",
];

const AQA_CHEMISTRY: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "AQA GCSE Chemistry 8462 Paper 1 topic practice.",
    defaultTime: 105,
    tags: ["Theory", "AQA 8462"],
    matchPapers: ["Paper 1", "Paper 1 / Paper 2"],
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "AQA GCSE Chemistry 8462 Paper 2 topic practice.",
    defaultTime: 105,
    tags: ["Theory", "AQA 8462"],
    matchPapers: ["Paper 2", "Paper 1 / Paper 2"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed AQA GCSE Chemistry 8462 practice across both papers.",
    defaultTime: 90,
    tags: ["Mixed", "AQA 8462"],
    matchPapers: ["Paper 1", "Paper 2", "Paper 1 / Paper 2"],
  },
];

const OCR_CHEMISTRY_PAPER_1_3_TOPIC_IDS = [
  "c1-particles",
  "c2-elements-compounds-mixtures",
  "c3-chemical-reactions",
  "practical",
  "paper-1-3-mixed",
  "high-mark-calculation",
];

const OCR_CHEMISTRY_PAPER_2_4_TOPIC_IDS = [
  "c4-predicting-identifying-products",
  "c5-monitoring-controlling-reactions",
  "c6-global-challenges",
  "practical",
  "paper-2-4-mixed",
  "high-mark-calculation",
];

const OCR_CHEMISTRY: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "OCR Gateway GCSE Chemistry J248 foundation-style paper practice.",
    defaultTime: 105,
    tags: ["Gateway", "J248"],
    matchPapers: ["Paper 1", "Paper 1 / Paper 3"],
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "OCR Gateway GCSE Chemistry J248 foundation-style second paper practice.",
    defaultTime: 105,
    tags: ["Gateway", "J248"],
    matchPapers: ["Paper 2", "Paper 2 / Paper 4"],
  },
  {
    id: "paper-3",
    label: "Paper 3",
    description: "OCR Gateway GCSE Chemistry J248 higher-style paper practice.",
    defaultTime: 105,
    tags: ["Gateway", "J248"],
    matchPapers: ["Paper 3", "Paper 1 / Paper 3"],
  },
  {
    id: "paper-4",
    label: "Paper 4",
    description: "OCR Gateway GCSE Chemistry J248 higher-style second paper practice.",
    defaultTime: 105,
    tags: ["Gateway", "J248"],
    matchPapers: ["Paper 4", "Paper 2 / Paper 4"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1-4",
    description: "Mixed OCR Gateway Chemistry J248 practice across all papers.",
    defaultTime: 90,
    tags: ["Mixed", "Gateway"],
    matchPapers: [
      "Paper 1",
      "Paper 2",
      "Paper 3",
      "Paper 4",
      "Paper 1 / Paper 3",
      "Paper 2 / Paper 4",
      "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    ],
  },
];

const EDEXCEL_PHYSICS_PAPER_1_TOPIC_IDS = [
  "forces",
  "electricity",
  "waves",
  "energy-resources-transfers",
  "solids-liquids-gases",
  "practical",
  "paper-1-mixed",
  "calculation-heavy",
  "high-mark-synoptic",
  "required-practical-data-analysis",
  "formula-equation-practice",
];

const EDEXCEL_PHYSICS_PAPER_2_TOPIC_IDS = [
  "magnetism-electromagnetism",
  "radioactivity-particles",
  "astrophysics",
  "practical",
  "paper-2-mixed",
  "calculation-heavy",
  "high-mark-synoptic",
  "required-practical-data-analysis",
  "formula-equation-practice",
];

const CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS = [
  "motion-forces-energy",
  "thermal-physics",
  "waves",
  "electricity-magnetism",
  "nuclear-physics",
  "space-physics",
  "calculation-heavy",
  "high-mark-synoptic",
  "formula-equation-practice",
  "space-physics-mixed",
  "extended-response-practice",
];

const CAMBRIDGE_PHYSICS_PRACTICAL_TOPIC_IDS = [
  "practical",
  "paper-5-6-practical",
  "alternative-to-practical-data-analysis",
];

const OXFORD_AQA_PHYSICS_PAPER_1_TOPIC_IDS = [
  "forces-effects",
  "energy",
  "waves",
  "particle-model",
  "electricity-magnetism",
  "required-practical-skills",
  "calculation-heavy",
  "formula-equation-practice",
];

const OXFORD_AQA_PHYSICS_PAPER_2_TOPIC_IDS = [
  "generating-distributing-electricity",
  "nuclear-physics",
  "space-physics",
  "required-practical-skills",
  "calculation-heavy",
  "high-mark-synoptic",
  "formula-equation-practice",
];

const OXFORD_AQA_PHYSICS_PRACTICAL_TOPIC_IDS = [
  "required-practical-skills",
  "practical-data-analysis",
];

const AQA_PHYSICS_PAPER_1_TOPIC_IDS = [
  "energy",
  "electricity",
  "particle-model",
  "atomic-structure",
  "required-practical-skills",
  "calculation-heavy",
  "formula-equation-practice",
];

const AQA_PHYSICS_PAPER_2_TOPIC_IDS = [
  "forces",
  "waves",
  "magnetism-electromagnetism",
  "space-physics",
  "required-practical-skills",
  "high-mark-synoptic",
  "calculation-heavy",
  "formula-equation-practice",
];

const EDEXCEL_PHYSICS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "Edexcel International GCSE Physics 4PH1 Paper 1 practice.",
    defaultTime: 120,
    tags: ["Theory", "4PH1"],
    matchPapers: ["Paper 1", "Paper 1 / Paper 2"],
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "Edexcel International GCSE Physics 4PH1 Paper 2 practice.",
    defaultTime: 75,
    tags: ["Theory", "4PH1"],
    matchPapers: ["Paper 2", "Paper 1 / Paper 2"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed Edexcel International GCSE Physics 4PH1 practice across both papers.",
    defaultTime: 90,
    tags: ["Mixed", "4PH1"],
    matchPapers: ["Paper 1", "Paper 2", "Paper 1 / Paper 2"],
  },
];

const CAMBRIDGE_PHYSICS: MiniPaperConfigPaper[] = [
  {
    id: "paper-2-mcq",
    label: "Paper 2 Multiple Choice",
    description: "Cambridge IGCSE Physics 0625 multiple-choice style practice.",
    defaultTime: 45,
    tags: ["Multiple Choice", "0625"],
    matchPapers: ["Paper 2", "Paper 3 / Paper 4"],
    availableTopics: CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
  },
  {
    id: "paper-3-theory",
    label: "Paper 3 Theory",
    description: "Cambridge IGCSE Physics 0625 Core structured theory practice.",
    defaultTime: 75,
    tags: ["Theory", "0625"],
    matchPapers: ["Paper 3", "Paper 3 / Paper 4"],
    availableTopics: CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
  },
  {
    id: "paper-4-theory",
    label: "Paper 4 Theory",
    description: "Cambridge IGCSE Physics 0625 Extended structured theory practice.",
    defaultTime: 75,
    tags: ["Theory", "Extended", "0625"],
    matchPapers: ["Paper 4", "Paper 3 / Paper 4"],
    availableTopics: CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
  },
  {
    id: "paper-5-practical",
    label: "Paper 5 Practical Test",
    description: "Cambridge Physics practical methods, variables, graphs and evaluation.",
    defaultTime: 75,
    tags: ["Practical", "0625"],
    matchPapers: ["Paper 5", "Paper 5 / Paper 6"],
    availableTopics: CAMBRIDGE_PHYSICS_PRACTICAL_TOPIC_IDS,
  },
  {
    id: "paper-6-atp",
    label: "Paper 6 Alternative to Practical",
    description: "Cambridge Physics Alternative to Practical data and method questions.",
    defaultTime: 60,
    tags: ["Practical", "ATP", "0625"],
    matchPapers: ["Paper 6", "Paper 5 / Paper 6"],
    availableTopics: CAMBRIDGE_PHYSICS_PRACTICAL_TOPIC_IDS,
  },
  {
    id: "mixed-full",
    label: "Mixed Full Syllabus",
    description: "Mixed Cambridge IGCSE Physics 0625 theory and practical practice.",
    defaultTime: 90,
    tags: ["Mixed", "0625"],
    matchPapers: ["Paper 3 / Paper 4", "Paper 5 / Paper 6"],
    availableTopics: [
      ...CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
      ...CAMBRIDGE_PHYSICS_PRACTICAL_TOPIC_IDS,
    ],
  },
];

const AQA_PHYSICS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "AQA GCSE Physics 8463 Paper 1 practice across energy, electricity and particles.",
    defaultTime: 105,
    tags: ["Theory", "8463"],
    matchPapers: ["Paper 1"],
    availableTopics: AQA_PHYSICS_PAPER_1_TOPIC_IDS,
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description:
      "AQA GCSE Physics 8463 Paper 2 practice across forces, waves, magnetism and space.",
    defaultTime: 105,
    tags: ["Theory", "8463"],
    matchPapers: ["Paper 2"],
    availableTopics: AQA_PHYSICS_PAPER_2_TOPIC_IDS,
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed AQA GCSE Physics 8463 practice across both papers.",
    defaultTime: 90,
    tags: ["Mixed", "8463"],
    matchPapers: ["Paper 1", "Paper 2"],
    availableTopics: [
      ...AQA_PHYSICS_PAPER_1_TOPIC_IDS,
      ...AQA_PHYSICS_PAPER_2_TOPIC_IDS,
      "paper-1-mixed",
      "paper-2-mixed",
      "extended-response-practice",
    ],
  },
  {
    id: "practical-calculation",
    label: "Practical + Calculation",
    description: "Required practical, equation, graph and calculation-heavy AQA Physics practice.",
    defaultTime: 60,
    tags: ["Practical", "Calculations", "8463"],
    matchPapers: ["Paper 1", "Paper 2"],
    availableTopics: [
      "required-practical-skills",
      "calculation-heavy",
      "formula-equation-practice",
      "high-mark-synoptic",
    ],
  },
];

const OXFORD_AQA_PHYSICS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "OxfordAQA International GCSE Physics 9203 Paper 1 practice.",
    defaultTime: 90,
    tags: ["Theory", "9203"],
    matchPapers: ["Paper 1", "Paper 1 / Paper 2"],
    availableTopics: OXFORD_AQA_PHYSICS_PAPER_1_TOPIC_IDS,
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "OxfordAQA International GCSE Physics 9203 Paper 2 practice.",
    defaultTime: 90,
    tags: ["Theory", "9203"],
    matchPapers: ["Paper 2", "Paper 1 / Paper 2"],
    availableTopics: OXFORD_AQA_PHYSICS_PAPER_2_TOPIC_IDS,
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed OxfordAQA Physics 9203 practice across both papers.",
    defaultTime: 90,
    tags: ["Mixed", "9203"],
    matchPapers: ["Paper 1", "Paper 2", "Paper 1 / Paper 2"],
    availableTopics: [
      ...OXFORD_AQA_PHYSICS_PAPER_1_TOPIC_IDS,
      ...OXFORD_AQA_PHYSICS_PAPER_2_TOPIC_IDS,
      "paper-1-2-mixed",
      "extended-response-practice",
    ],
  },
  {
    id: "practical-data",
    label: "Practical/Data Analysis",
    description: "OxfordAQA Physics practical skills, graphs, uncertainty and data analysis.",
    defaultTime: 60,
    tags: ["Practical", "9203"],
    matchPapers: ["Paper 1 / Paper 2"],
    availableTopics: OXFORD_AQA_PHYSICS_PRACTICAL_TOPIC_IDS,
  },
];

const OXFORD_AQA_CHEMISTRY: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "OxfordAQA International GCSE Chemistry 9202 structured paper practice.",
    defaultTime: 90,
    tags: ["Theory"],
    matchPapers: ["Paper 1", "Paper 1 / Paper 2"],
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "OxfordAQA International GCSE Chemistry 9202 structured paper practice.",
    defaultTime: 90,
    tags: ["Theory"],
    matchPapers: ["Paper 2", "Paper 1 / Paper 2"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed OxfordAQA Chemistry 9202 practice across both papers.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: ["Paper 1", "Paper 2", "Paper 1 / Paper 2"],
  },
];

const IGCSE_CORE_PAPERS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1",
    description: "First-paper practice for the main International GCSE specification content.",
    defaultTime: 105,
    tags: ["Theory"],
    matchPapers: ["Paper 1", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2",
    label: "Paper 2",
    description: "Second-paper practice for extended and applied International GCSE content.",
    defaultTime: 105,
    tags: ["Theory"],
    matchPapers: ["Paper 2", "International GCSE Topic Practice", "General"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed practice across both International GCSE papers.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: [
      "Paper 1",
      "Paper 2",
      "Paper 1/2",
      "International GCSE Topic Practice",
      "General",
    ],
  },
];

const EDEXCEL_BIOLOGY: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1B / Paper 1",
    description: "Structured Biology questions covering main specification content.",
    defaultTime: 120,
    tags: ["Theory", "Core"],
    matchPapers: ["Paper 1"],
  },
  {
    id: "paper-2",
    label: "Paper 2B / Paper 2",
    description: "Additional structured Biology questions and extended specification content.",
    defaultTime: 75,
    tags: ["Theory", "Extended"],
    matchPapers: ["Paper 2"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed Biology practice across both Edexcel IGCSE papers.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: ["Paper 1", "Paper 2", "Paper 1/2"],
  },
];

const CAMBRIDGE_BIOLOGY: MiniPaperConfigPaper[] = [
  {
    id: "paper-1-mcq",
    label: "Paper 1 Multiple Choice",
    description: "Short-answer and quick-recall practice for multiple-choice style content.",
    defaultTime: 45,
    tags: ["Multiple Choice"],
    matchPapers: ["Paper 1"],
  },
  {
    id: "paper-2-mcq",
    label: "Paper 2 Multiple Choice",
    description: "Additional quick-recall practice for multiple-choice style content.",
    defaultTime: 45,
    tags: ["Multiple Choice"],
    matchPapers: ["Paper 2"],
  },
  {
    id: "paper-3-theory",
    label: "Paper 3 Theory",
    description: "Structured theory questions for Cambridge IGCSE Biology.",
    defaultTime: 75,
    tags: ["Theory"],
    matchPapers: ["Paper 1"],
  },
  {
    id: "paper-4-theory",
    label: "Paper 4 Theory",
    description: "Extended structured theory questions for Cambridge IGCSE Biology.",
    defaultTime: 75,
    tags: ["Theory", "Extended"],
    matchPapers: ["Paper 2"],
  },
  {
    id: "paper-5-practical",
    label: "Paper 5 Practical Test",
    description: "Practical skills, variables, graphs, reliability, and experimental design.",
    defaultTime: 75,
    tags: ["Practical"],
    matchPapers: ["Paper 1/2"],
    availableTopics: ["practical"],
  },
  {
    id: "paper-6-atp",
    label: "Paper 6 Alternative to Practical",
    description:
      "Alternative-to-practical questions using experimental data and method evaluation.",
    defaultTime: 60,
    tags: ["Practical", "ATP"],
    matchPapers: ["Paper 1/2"],
    availableTopics: ["practical"],
  },
  {
    id: "mixed-theory",
    label: "Mixed Theory",
    description: "Mixed structured theory practice across Cambridge Biology papers.",
    defaultTime: 75,
    tags: ["Mixed", "Theory"],
    matchPapers: ["Paper 1", "Paper 2"],
  },
  {
    id: "mixed-full",
    label: "Mixed Full Syllabus",
    description: "Mixed practice across theory and practical-style Biology questions.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: ["Paper 1", "Paper 2", "Paper 1/2"],
  },
];

const CAMBRIDGE_SCIENCE: MiniPaperConfigPaper[] = [
  {
    id: "paper-1-mcq",
    label: "Paper 1 Multiple Choice",
    description: "Fast multiple-choice style checks across core science content.",
    defaultTime: 45,
    tags: ["Multiple Choice"],
    matchPapers: ["Paper 1", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2-mcq",
    label: "Paper 2 Multiple Choice",
    description: "Extended multiple-choice style checks across syllabus content.",
    defaultTime: 45,
    tags: ["Multiple Choice"],
    matchPapers: ["Paper 2", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-3-theory",
    label: "Paper 3 Theory",
    description: "Structured theory questions for Cambridge IGCSE Science.",
    defaultTime: 75,
    tags: ["Theory"],
    matchPapers: ["Paper 1", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-4-theory",
    label: "Paper 4 Theory",
    description: "Extended structured theory questions for Cambridge IGCSE Science.",
    defaultTime: 75,
    tags: ["Theory", "Extended"],
    matchPapers: ["Paper 2", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-5-practical",
    label: "Paper 5 Practical Test",
    description: "Practical-method, graph, variable, and evaluation questions.",
    defaultTime: 75,
    tags: ["Practical"],
    matchPapers: ["Paper 1/2", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-6-atp",
    label: "Paper 6 Alternative to Practical",
    description: "Alternative-to-practical questions using experimental data and method critique.",
    defaultTime: 60,
    tags: ["Practical", "ATP"],
    matchPapers: ["Paper 1/2", "International GCSE Topic Practice", "General"],
  },
  {
    id: "mixed-full",
    label: "Mixed Full Syllabus",
    description: "Mixed practice across Cambridge theory and practical paper styles.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: [
      "Paper 1",
      "Paper 2",
      "Paper 1/2",
      "International GCSE Topic Practice",
      "General",
    ],
  },
];

const CAMBRIDGE_MATHS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1-core",
    label: "Paper 1 Core",
    description: "Shorter Core-tier mathematics practice.",
    defaultTime: 60,
    tags: ["Core"],
    matchPapers: ["International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2-extended",
    label: "Paper 2 Extended",
    description: "Shorter Extended-tier mathematics practice.",
    defaultTime: 90,
    tags: ["Extended"],
    matchPapers: ["International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-3-core",
    label: "Paper 3 Core",
    description: "Longer Core-tier problem-solving practice.",
    defaultTime: 120,
    tags: ["Core"],
    matchPapers: ["International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-4-extended",
    label: "Paper 4 Extended",
    description: "Longer Extended-tier problem-solving practice.",
    defaultTime: 150,
    tags: ["Extended"],
    matchPapers: ["International GCSE Topic Practice", "General"],
  },
  {
    id: "mixed",
    label: "Mixed Core + Extended",
    description: "Mixed mathematics practice across Cambridge paper styles.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: ["International GCSE Topic Practice", "General"],
  },
];

const GCSE_MATHS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1-non-calculator",
    label: "Paper 1 Non-calculator",
    description: "Non-calculator problem-solving and method practice.",
    defaultTime: 90,
    tags: ["Non-calculator"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2-calculator",
    label: "Paper 2 Calculator",
    description: "Calculator paper practice with multi-step problems.",
    defaultTime: 90,
    tags: ["Calculator"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
  {
    id: "paper-3-calculator",
    label: "Paper 3 Calculator",
    description: "Further calculator paper practice across the specification.",
    defaultTime: 90,
    tags: ["Calculator"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2 + Paper 3",
    description: "Mixed GCSE Maths practice across non-calculator and calculator papers.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
];

const PSYCHOLOGY_PAPERS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1 Cognition and Behaviour",
    description: "Memory, perception, development, and research methods practice.",
    defaultTime: 105,
    tags: ["Theory"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2",
    label: "Paper 2 Social Context and Behaviour",
    description: "Social influence, language, brain, neuropsychology, and issues debates.",
    defaultTime: 105,
    tags: ["Theory"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
  {
    id: "mixed",
    label: "Mixed Psychology Papers",
    description: "Mixed practice across both GCSE Psychology papers.",
    defaultTime: 90,
    tags: ["Mixed"],
    matchPapers: ["GCSE Topic Practice", "General"],
  },
];

const COMPUTER_SCIENCE_PAPERS: MiniPaperConfigPaper[] = [
  {
    id: "paper-1",
    label: "Paper 1 Computer Systems",
    description: "Systems architecture, memory, networks, security, and data representation.",
    defaultTime: 90,
    tags: ["Theory"],
    matchPapers: ["GCSE Topic Practice", "International GCSE Topic Practice", "General"],
  },
  {
    id: "paper-2",
    label: "Paper 2 Computational Thinking",
    description: "Algorithms, programming logic, pseudocode, and problem solving.",
    defaultTime: 90,
    tags: ["Programming"],
    matchPapers: ["GCSE Topic Practice", "International GCSE Topic Practice", "General"],
  },
  {
    id: "mixed",
    label: "Mixed Paper 1 + Paper 2",
    description: "Mixed Computer Science practice across theory and algorithms.",
    defaultTime: 75,
    tags: ["Mixed"],
    matchPapers: ["GCSE Topic Practice", "International GCSE Topic Practice", "General"],
  },
];

const DEFAULT_QUESTION_TYPES = [
  "State",
  "Describe",
  "Explain",
  "Suggest",
  "Data Analysis",
  "Extended Response",
];

const QUESTION_TYPES_BY_SUBJECT: Record<string, string[]> = {
  biology: [
    "State",
    "Describe",
    "Explain",
    "Suggest",
    "Practical Skills",
    "Graph Interpretation",
    "Calculation",
  ],
  chemistry: [
    "State",
    "Describe",
    "Explain",
    "Calculate",
    "Practical Skills",
    "Chemical Test",
    "Evaluation",
  ],
  physics: [
    "State",
    "Describe",
    "Explain",
    "Calculate",
    "Graph Interpretation",
    "Practical Skills",
  ],
  mathematics: ["Calculation", "Proof", "Problem Solving", "Graph", "Geometry", "Multi-step"],
  psychology: ["State", "Describe", "Explain", "Evaluate", "Application", "Research Methods"],
  "computer-science": [
    "Code Writing",
    "Trace Table",
    "Debugging",
    "Algorithm Design",
    "Explain Code",
    "Binary Calculation",
  ],
  "english-language": ["Analysis", "Comparison", "Evaluation", "Creative Writing", "Transactional"],
  "english-literature": ["Essay", "Extract Analysis", "Theme", "Character", "Context"],
  business: ["Explain", "Calculate", "Analyse", "Evaluate", "Case Study"],
  economics: ["Define", "Explain", "Calculate", "Analyse", "Evaluate"],
  geography: ["Describe", "Explain", "Case Study", "Data Response", "Evaluate"],
  history: ["Source Inference", "Utility", "Explain", "Essay", "Judgement"],
};

const EDEXCEL_BIOLOGY_PAPER_1_TOPIC_IDS = [
  "cells",
  "biological-molecules",
  "enzymes",
  "movement-of-substances",
  "nutrition",
  "respiration",
  "gas-exchange",
  "transport",
  "plant-transport",
  "excretion",
  "coordination-response",
  "reproduction",
  "inheritance",
  "variation",
  "ecology",
  "characteristics-variety",
  "plant-nutrition",
  "human-influences",
];

const EDEXCEL_BIOLOGY_PAPER_2_TOPIC_IDS = [
  "enzymes",
  "respiration",
  "microorganisms-biotechnology",
  "biological-resources",
  "practical",
];

const CAMBRIDGE_BIOLOGY_TOPIC_IDS = [
  "characteristics-variety",
  "cells",
  "movement-of-substances",
  "biological-molecules",
  "enzymes",
  "plant-nutrition",
  "nutrition",
  "plant-transport",
  "transport",
  "diseases-immunity",
  "gas-exchange",
  "respiration",
  "excretion",
  "coordination-response",
  "drugs",
  "reproduction",
  "inheritance",
  "variation",
  "ecology",
  "human-influences",
  "microorganisms-biotechnology",
];

const AQA_BIOLOGY_PAPER_1_TOPIC_IDS = [
  "cell-biology",
  "organisation",
  "infection-response",
  "bioenergetics",
  "required-practical-data-skills",
];

const AQA_BIOLOGY_PAPER_2_TOPIC_IDS = [
  "homeostasis-response",
  "inheritance-variation-evolution",
  "ecology",
  "mixed-paper-2-synoptic",
  "required-practical-data-skills",
];

const OXFORD_AQA_BIOLOGY_TOPIC_IDS = [
  "organisation",
  "bioenergetics",
  "ecology",
  "organisms-interaction-environment",
  "inheritance",
  "variation",
];

const OCR_BIOLOGY_PAPER_1_TOPIC_IDS = [
  "cell-level-systems",
  "scaling-up",
  "organism-level-systems",
  "practical",
  "mixed-synoptic-data",
];

const OCR_BIOLOGY_PAPER_2_TOPIC_IDS = [
  "community-level-systems",
  "genes-inheritance-selection",
  "global-challenges",
  "practical",
  "mixed-synoptic-data",
];

const PAPER_TOPIC_IDS: Record<
  string,
  Record<string, Partial<Record<ExamBoardId | "default", string[]>>>
> = {
  biology: {
    "paper-1": {
      default: [
        "cells",
        "enzymes",
        "nutrition",
        "gas-exchange",
        "transport",
        "plant-transport",
        "respiration",
        "reproduction",
        "inheritance",
        "variation",
        "ecology",
        "practical",
      ],
      "edexcel-igcse": EDEXCEL_BIOLOGY_PAPER_1_TOPIC_IDS,
      "oxfordaqa-igcse": OXFORD_AQA_BIOLOGY_TOPIC_IDS,
      "aqa-gcse": AQA_BIOLOGY_PAPER_1_TOPIC_IDS,
      "ocr-gcse": OCR_BIOLOGY_PAPER_1_TOPIC_IDS,
    },
    "paper-2": {
      default: ["inheritance", "variation", "ecology", "practical"],
      "edexcel-igcse": EDEXCEL_BIOLOGY_PAPER_2_TOPIC_IDS,
      "oxfordaqa-igcse": OXFORD_AQA_BIOLOGY_TOPIC_IDS,
      "aqa-gcse": AQA_BIOLOGY_PAPER_2_TOPIC_IDS,
      "ocr-gcse": OCR_BIOLOGY_PAPER_2_TOPIC_IDS,
    },
    "paper-1-mcq": {
      default: [
        "cells",
        "enzymes",
        "nutrition",
        "transport",
        "respiration",
        "inheritance",
        "ecology",
      ],
      "cambridge-igcse": CAMBRIDGE_BIOLOGY_TOPIC_IDS,
    },
    "paper-2-mcq": {
      default: [
        "cells",
        "enzymes",
        "nutrition",
        "transport",
        "respiration",
        "inheritance",
        "ecology",
      ],
      "cambridge-igcse": CAMBRIDGE_BIOLOGY_TOPIC_IDS,
    },
    "paper-3-theory": {
      default: [
        "cells",
        "enzymes",
        "nutrition",
        "transport",
        "respiration",
        "inheritance",
        "ecology",
        "practical",
      ],
      "cambridge-igcse": CAMBRIDGE_BIOLOGY_TOPIC_IDS,
    },
    "paper-4-theory": {
      default: [
        "cells",
        "enzymes",
        "nutrition",
        "transport",
        "respiration",
        "inheritance",
        "variation",
        "ecology",
        "practical",
      ],
      "cambridge-igcse": CAMBRIDGE_BIOLOGY_TOPIC_IDS,
    },
    "paper-5-practical": { default: ["practical"] },
    "paper-6-atp": { default: ["practical"] },
  },
  chemistry: {
    "paper-1": {
      default: [
        "atomic-structure",
        "bonding",
        "acids",
        "rates-of-reaction",
        "electrolysis",
        "organic-chemistry",
      ],
      "edexcel-igcse": [
        "covalent-bonding",
        "metallic-bonding",
        "electrolysis",
        "acids-alkalis-salts",
        "chemical-tests",
        "metals-reactivity",
        "energetics",
        "rates-of-reaction",
        "reversible-reactions-equilibrium",
        "air-water",
        "fuels",
        "organic-intro-alkanes",
        "alkenes",
        "alcohols",
        "carboxylic-acids",
        "esters",
        "polymers",
        "organic-mixed",
        "practical",
        "quantitative-chemistry",
        "final-synoptic",
      ],
      "aqa-gcse": AQA_CHEMISTRY_PAPER_1_TOPIC_IDS,
      "ocr-gcse": OCR_CHEMISTRY_PAPER_1_3_TOPIC_IDS,
      "oxfordaqa-igcse": OXFORD_AQA_CHEMISTRY_TOPIC_IDS,
    },
    "paper-2": {
      default: ["rates-of-reaction", "acids", "electrolysis", "organic-chemistry"],
      "edexcel-igcse": [
        "covalent-bonding",
        "metallic-bonding",
        "electrolysis",
        "acids-alkalis-salts",
        "chemical-tests",
        "metals-reactivity",
        "energetics",
        "rates-of-reaction",
        "reversible-reactions-equilibrium",
        "air-water",
        "fuels",
        "organic-intro-alkanes",
        "alkenes",
        "alcohols",
        "carboxylic-acids",
        "esters",
        "polymers",
        "organic-mixed",
        "practical",
        "quantitative-chemistry",
        "final-synoptic",
      ],
      "aqa-gcse": AQA_CHEMISTRY_PAPER_2_TOPIC_IDS,
      "ocr-gcse": OCR_CHEMISTRY_PAPER_2_4_TOPIC_IDS,
      "oxfordaqa-igcse": OXFORD_AQA_CHEMISTRY_TOPIC_IDS,
    },
    "paper-1-mcq": {
      default: [
        "atomic-structure",
        "bonding",
        "rates-of-reaction",
        "acids",
        "electrolysis",
        "organic-chemistry",
      ],
    },
    "paper-2-mcq": {
      default: [
        "atomic-structure",
        "bonding",
        "rates-of-reaction",
        "acids",
        "electrolysis",
        "organic-chemistry",
      ],
    },
    "paper-3-theory": {
      default: [
        "atomic-structure",
        "bonding",
        "rates-of-reaction",
        "acids",
        "electrolysis",
        "organic-chemistry",
      ],
      "ocr-gcse": OCR_CHEMISTRY_PAPER_1_3_TOPIC_IDS,
    },
    "paper-3": {
      default: [
        "atomic-structure",
        "bonding",
        "rates-of-reaction",
        "acids",
        "electrolysis",
        "organic-chemistry",
      ],
      "ocr-gcse": OCR_CHEMISTRY_PAPER_1_3_TOPIC_IDS,
    },
    "paper-4-theory": {
      default: [
        "atomic-structure",
        "bonding",
        "rates-of-reaction",
        "acids",
        "electrolysis",
        "organic-chemistry",
      ],
      "ocr-gcse": OCR_CHEMISTRY_PAPER_2_4_TOPIC_IDS,
    },
    "paper-4": {
      default: [
        "atomic-structure",
        "bonding",
        "rates-of-reaction",
        "acids",
        "electrolysis",
        "organic-chemistry",
      ],
      "ocr-gcse": OCR_CHEMISTRY_PAPER_2_4_TOPIC_IDS,
    },
  },
  physics: {
    "paper-1": {
      default: ["energy", "electricity", "waves", "magnetism"],
      "edexcel-igcse": EDEXCEL_PHYSICS_PAPER_1_TOPIC_IDS,
      "oxfordaqa-igcse": OXFORD_AQA_PHYSICS_PAPER_1_TOPIC_IDS,
      "aqa-gcse": AQA_PHYSICS_PAPER_1_TOPIC_IDS,
    },
    "paper-2": {
      default: ["forces", "waves", "electricity", "magnetism"],
      "edexcel-igcse": EDEXCEL_PHYSICS_PAPER_2_TOPIC_IDS,
      "oxfordaqa-igcse": OXFORD_AQA_PHYSICS_PAPER_2_TOPIC_IDS,
      "aqa-gcse": AQA_PHYSICS_PAPER_2_TOPIC_IDS,
    },
    "paper-1-mcq": { default: ["forces", "energy", "waves", "electricity", "magnetism"] },
    "paper-2-mcq": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "cambridge-igcse": CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
    },
    "paper-3-theory": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "cambridge-igcse": CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
    },
    "paper-4-theory": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "cambridge-igcse": CAMBRIDGE_PHYSICS_THEORY_TOPIC_IDS,
    },
    "paper-5-practical": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "cambridge-igcse": CAMBRIDGE_PHYSICS_PRACTICAL_TOPIC_IDS,
    },
    "paper-6-atp": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "cambridge-igcse": CAMBRIDGE_PHYSICS_PRACTICAL_TOPIC_IDS,
    },
    "practical-data": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "oxfordaqa-igcse": OXFORD_AQA_PHYSICS_PRACTICAL_TOPIC_IDS,
    },
    "practical-calculation": {
      default: ["forces", "energy", "waves", "electricity", "magnetism"],
      "aqa-gcse": [
        "required-practical-skills",
        "calculation-heavy",
        "formula-equation-practice",
        "high-mark-synoptic",
      ],
    },
  },
  mathematics: {
    "paper-1": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
    "paper-2": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
    "paper-1-core": { default: ["algebra", "geometry", "statistics"] },
    "paper-2-extended": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
    "paper-3-core": { default: ["algebra", "geometry", "statistics"] },
    "paper-4-extended": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
    "paper-1-non-calculator": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
    "paper-2-calculator": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
    "paper-3-calculator": { default: ["algebra", "geometry", "trigonometry", "statistics"] },
  },
  psychology: {
    "paper-1": { default: ["memory", "attachment", "research-methods"] },
    "paper-2": { default: ["social-influence", "research-methods"] },
  },
  "computer-science": {
    "paper-1": { default: ["data-representation", "networks"] },
    "paper-2": { default: ["algorithms", "programming"] },
  },
};

export const MINI_PAPER_SYLLABUSES: MiniPaperSyllabus[] = [
  ...EXAM_BOARDS.flatMap((board) =>
    board.subjects.map((subject) => ({
      subject: subject.id,
      examBoard: board.id,
      label: `${board.name.replace("International GCSE", "IGCSE")} ${getSubjectName(
        board.id,
        subject.id,
      )}`,
      papers: papersFor(subject.id, board.id),
    })),
  ),
  {
    subject: "computer-science",
    examBoard: "oxfordaqa-igcse",
    label: "OxfordAQA Computer Science",
    papers: COMPUTER_SCIENCE_PAPERS,
  },
];

export const syllabusMap: SyllabusMap = EXAM_BOARDS.reduce((map, board) => {
  map[board.id] = {
    label: board.name,
    subjects: Object.fromEntries(
      board.subjects.map((subject) => [
        subject.id,
        {
          label: subject.name,
          papers: Object.fromEntries(
            papersFor(subject.id, board.id).map((paper) => [paper.id, paper]),
          ),
        },
      ]),
    ),
  };
  return map;
}, {} as SyllabusMap);

function papersFor(subject: string, examBoard: ExamBoardId): MiniPaperConfigPaper[] {
  const canonicalSubject = canonicalSubjectId(subject);
  if (canonicalSubject === "biology" && examBoard === "edexcel-igcse") {
    return enrichPapers(subject, examBoard, EDEXCEL_BIOLOGY);
  }
  if (canonicalSubject === "biology" && examBoard === "cambridge-igcse") {
    return enrichPapers(subject, examBoard, CAMBRIDGE_BIOLOGY);
  }
  if (canonicalSubject === "physics" && examBoard === "cambridge-igcse") {
    return enrichPapers(subject, examBoard, CAMBRIDGE_PHYSICS);
  }
  if (["chemistry", "physics"].includes(subject) && examBoard === "cambridge-igcse") {
    return enrichPapers(subject, examBoard, CAMBRIDGE_SCIENCE);
  }
  if (subject === "physics" && examBoard === "edexcel-igcse") {
    return enrichPapers(subject, examBoard, EDEXCEL_PHYSICS);
  }
  if (subject === "physics" && examBoard === "oxfordaqa-igcse") {
    return enrichPapers(subject, examBoard, OXFORD_AQA_PHYSICS);
  }
  if (subject === "physics" && examBoard === "aqa-gcse") {
    return enrichPapers(subject, examBoard, AQA_PHYSICS);
  }
  if (subject === "chemistry" && examBoard === "aqa-gcse") {
    return enrichPapers(subject, examBoard, AQA_CHEMISTRY);
  }
  if (subject === "chemistry" && examBoard === "ocr-gcse") {
    return enrichPapers(subject, examBoard, OCR_CHEMISTRY);
  }
  if (subject === "chemistry" && examBoard === "oxfordaqa-igcse") {
    return enrichPapers(subject, examBoard, OXFORD_AQA_CHEMISTRY);
  }
  if (canonicalSubject === "mathematics" && examBoard === "cambridge-igcse") {
    return enrichPapers(subject, examBoard, CAMBRIDGE_MATHS);
  }
  if (canonicalSubject === "mathematics" && examBoard.endsWith("-gcse")) {
    return enrichPapers(subject, examBoard, GCSE_MATHS);
  }
  if (canonicalSubject === "psychology") return enrichPapers(subject, examBoard, PSYCHOLOGY_PAPERS);
  if (canonicalSubject === "computer-science") {
    return enrichPapers(subject, examBoard, COMPUTER_SCIENCE_PAPERS);
  }
  return enrichPapers(
    subject,
    examBoard,
    examBoard.includes("igcse") ? IGCSE_CORE_PAPERS : GCSE_CORE_PAPERS,
  );
}

function enrichPapers(subject: string, examBoard: ExamBoardId, papers: MiniPaperConfigPaper[]) {
  return papers.map((paper) => enrichPaper(subject, examBoard, paper));
}

function enrichPaper(
  subject: string,
  examBoard: ExamBoardId,
  paper: MiniPaperConfigPaper,
): MiniPaperConfigPaper {
  const availableTopics = topicIdsForPaper(subject, examBoard, paper);
  const paperType = paper.tags[0] ?? "Theory";
  return {
    ...paper,
    paperType,
    tags: [...new Set([paperType, ...paper.tags])],
    availableTopics,
    topics: availableTopics.map((topicId) => getTopicMeta(subject, topicId).name),
    questionTypes: questionTypesForPaper(subject, paperType),
  };
}

function topicIdsForPaper(subject: string, examBoard: ExamBoardId, paper: MiniPaperConfigPaper) {
  if (paper.availableTopics?.length) return paper.availableTopics;

  const canonicalSubject = canonicalSubjectId(subject);
  const bySubject = PAPER_TOPIC_IDS[canonicalSubject];
  if (paper.id.includes("mixed") && bySubject) {
    const boardSpecificTopics = Object.entries(bySubject)
      .filter(([paperId]) => !paperId.includes("mixed"))
      .flatMap(([, boardMap]) => boardMap[examBoard] ?? boardMap.default ?? []);
    const validMixedTopics = [...new Set(boardSpecificTopics)].filter(
      (topicId) => getTopicsForSubject(subject)[topicId],
    );
    if (validMixedTopics.length) return validMixedTopics;
  }

  if (paper.id.includes("mixed")) return Object.keys(getTopicsForSubject(subject));

  const boardTopics = bySubject?.[paper.id];
  const configured = boardTopics?.[examBoard] ?? boardTopics?.default;
  const valid = configured?.filter((topicId) => getTopicsForSubject(subject)[topicId]);
  return valid?.length ? valid : Object.keys(getTopicsForSubject(subject));
}

function questionTypesForPaper(subject: string, paperType: string) {
  if (paperType === "Multiple Choice") return ["Multiple Choice"];
  if (["Practical", "ATP"].includes(paperType)) {
    return ["Practical Design", "Variables", "Graph", "Table", "Evaluation", "Conclusion"];
  }
  return QUESTION_TYPES_BY_SUBJECT[canonicalSubjectId(subject)] ?? DEFAULT_QUESTION_TYPES;
}

function canonicalSubjectId(subject: string) {
  if (subject.includes("mathematics")) return "mathematics";
  if (subject.startsWith("english-language")) return "english-language";
  if (subject === "business-studies") return "business";
  return subject;
}

export function getMiniPaperSyllabuses(subject: string): MiniPaperSyllabus[] {
  return MINI_PAPER_SYLLABUSES.filter((item) => item.subject === subject);
}

export function getMiniPaperSyllabus(subject: string, examBoard: MiniPaperExamBoardId) {
  return MINI_PAPER_SYLLABUSES.find(
    (item) => item.subject === subject && item.examBoard === examBoard,
  );
}

export function getSyllabusSubjects(examBoard: ExamBoardId) {
  const board = EXAM_BOARDS.find((item) => item.id === examBoard);
  const mappedSubjects = syllabusMap[examBoard]?.subjects ?? {};
  return Object.keys(mappedSubjects).map((subjectId) => {
    const subject = board?.subjects.find((item) => item.id === subjectId);
    return {
      id: subjectId,
      name: mappedSubjects[subjectId].label,
      blurb: subject?.blurb,
    };
  });
}
