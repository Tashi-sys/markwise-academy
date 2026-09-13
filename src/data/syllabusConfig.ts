export type Qualification = "GCSE" | "IGCSE";

export type ExamBoardId =
  | "edexcel-igcse"
  | "cambridge-igcse"
  | "oxfordaqa-igcse"
  | "aqa-gcse"
  | "ocr-gcse";

export type SyllabusSubject = {
  id: string;
  name: string;
  blurb?: string;
};

export type ExamBoard = {
  id: ExamBoardId;
  name: string;
  qualification: Qualification;
  subjects: SyllabusSubject[];
};

export const STEM_SUBJECT_IDS = new Set([
  "biology",
  "chemistry",
  "physics",
  "mathematics",
  "mathematics-a",
  "further-pure-mathematics",
  "additional-mathematics",
  "further-mathematics",
  "computer-science",
]);

export function isStemSubject(subjectId: string): boolean {
  return STEM_SUBJECT_IDS.has(subjectId);
}

const SUBJECT_BLURBS: Record<string, string> = {
  biology: "Practise explanation, description, and practical questions.",
  chemistry: "Improve calculation, bonding, and practical answers.",
  physics: "Train equations, explanations, and graph questions.",
  mathematics: "Practise structured problem-solving questions.",
  "mathematics-a": "Practise structured problem-solving questions.",
  psychology: "Revise studies, theories, results, and evaluations.",
  "computer-science": "Algorithms, programming, and data representation.",
  business: "Marketing, finance, and business decision-making.",
  "business-studies": "Marketing, finance, and business decision-making.",
  economics: "Markets, government policy, trade, and development.",
  geography: "Physical and human geography with exam-style case explanations.",
  history: "Source skills, causation, consequence, and essay planning.",
  "english-language": "Reading, writing, and language analysis.",
  "english-literature": "Themes, poetry, and prose analysis.",
  french: "Reading and writing practice for high-frequency exam contexts.",
  spanish: "Reading and writing practice for high-frequency exam contexts.",
  japanese: "Reading and writing practice for high-frequency exam contexts.",
};

function subject(id: string, name: string, blurb?: string): SyllabusSubject {
  return { id, name, blurb: blurb ?? SUBJECT_BLURBS[id] };
}

export const EXAM_BOARDS: ExamBoard[] = [
  {
    id: "edexcel-igcse",
    name: "Edexcel International GCSE",
    qualification: "IGCSE",
    subjects: [
      subject("biology", "Biology"),
      subject("chemistry", "Chemistry"),
      subject("physics", "Physics"),
      subject("mathematics-a", "Mathematics A"),
      subject("further-pure-mathematics", "Further Pure Mathematics"),
      subject("computer-science", "Computer Science"),
    ],
  },
  {
    id: "cambridge-igcse",
    name: "Cambridge IGCSE",
    qualification: "IGCSE",
    subjects: [
      subject("biology", "Biology"),
      subject("chemistry", "Chemistry"),
      subject("physics", "Physics"),
      subject("mathematics", "Mathematics"),
      subject("additional-mathematics", "Additional Mathematics"),
      subject("computer-science", "Computer Science"),
    ],
  },
  {
    id: "oxfordaqa-igcse",
    name: "OxfordAQA International GCSE",
    qualification: "IGCSE",
    subjects: [
      subject("biology", "Biology"),
      subject("chemistry", "Chemistry"),
      subject("physics", "Physics"),
      subject("mathematics", "Mathematics"),
      subject("computer-science", "Computer Science"),
    ],
  },
  {
    id: "aqa-gcse",
    name: "AQA GCSE",
    qualification: "GCSE",
    subjects: [
      subject("biology", "Biology"),
      subject("chemistry", "Chemistry"),
      subject("physics", "Physics"),
      subject("mathematics", "Mathematics"),
      subject("further-mathematics", "Further Mathematics"),
      subject("computer-science", "Computer Science"),
    ],
  },
  {
    id: "ocr-gcse",
    name: "OCR GCSE",
    qualification: "GCSE",
    subjects: [
      subject("biology", "Biology"),
      subject("chemistry", "Chemistry"),
      subject("physics", "Physics"),
      subject("mathematics", "Mathematics"),
      subject("computer-science", "Computer Science"),
    ],
  },
];

export function getExamBoard(id: ExamBoardId): ExamBoard | undefined {
  return EXAM_BOARDS.find((b) => b.id === id);
}

export function getBoardsForQualification(qualification: Qualification): ExamBoard[] {
  return EXAM_BOARDS.filter((b) => b.qualification === qualification);
}

export function getSubjectsForBoard(boardId: ExamBoardId): SyllabusSubject[] {
  return getExamBoard(boardId)?.subjects ?? [];
}

export function getSubjectName(boardId: ExamBoardId, subjectId: string): string {
  return getSubjectsForBoard(boardId).find((s) => s.id === subjectId)?.name ?? subjectId;
}

const SYLLABUS_CODES: Partial<Record<ExamBoardId, Record<string, string>>> = {
  "edexcel-igcse": {
    biology: "4BI1",
    chemistry: "4CH1",
    physics: "4PH1",
    "mathematics-a": "4MA1",
    "further-pure-mathematics": "4PM1",
    "english-language-a": "4EA1",
    business: "4BS1",
    "computer-science": "4CP0",
    economics: "4EC1",
    geography: "4GE1",
    history: "4HI1",
    french: "4FR1",
    spanish: "4SP1",
    arabic: "4AA1",
    "english-literature": "4ET1",
  },
  "cambridge-igcse": {
    biology: "0610",
    chemistry: "0620",
    physics: "0625",
    mathematics: "0580",
    "additional-mathematics": "0606",
    "english-language": "0500",
    "business-studies": "0450",
    "computer-science": "0478",
    economics: "0455",
    geography: "0460",
    history: "0470",
    "english-literature": "0475",
    "mandarin-chinese": "0547",
    japanese: "0716",
  },
  "oxfordaqa-igcse": {
    biology: "9201",
    chemistry: "9202",
    physics: "9203",
    mathematics: "9260",
    "english-language": "9270",
    "computer-science": "9210",
    economics: "9214",
    geography: "9230",
    "english-literature": "9275",
  },
  "aqa-gcse": {
    biology: "8461",
    chemistry: "8462",
    physics: "8463",
    mathematics: "8300",
    "further-mathematics": "8365",
    "english-language": "8700",
    business: "8132",
    "computer-science": "8525",
    economics: "8136",
    geography: "8035",
    history: "8145",
    "english-literature": "8702",
    psychology: "8182",
  },
  "ocr-gcse": {
    biology: "J247",
    chemistry: "J248",
    physics: "J249",
    mathematics: "J560",
    "english-language": "J351",
    business: "J204",
    "computer-science": "J277",
    economics: "J205",
    geography: "J383",
    history: "J411",
    "english-literature": "J352",
    psychology: "J203",
  },
};

export function getSyllabusCode(boardId: ExamBoardId, subjectId: string): string | undefined {
  return SYLLABUS_CODES[boardId]?.[subjectId];
}

export function getQualificationLabel(qualification: Qualification): string {
  return qualification === "IGCSE" ? "International GCSE" : "GCSE";
}

export const SUBJECT_ACCENTS: Record<string, string> = {
  biology: "from-emerald-400 to-emerald-600",
  chemistry: "from-sky-400 to-sky-600",
  physics: "from-indigo-400 to-indigo-600",
  mathematics: "from-fuchsia-400 to-fuchsia-600",
  "mathematics-a": "from-fuchsia-400 to-fuchsia-600",
  "additional-mathematics": "from-fuchsia-400 to-fuchsia-600",
  "further-mathematics": "from-fuchsia-400 to-fuchsia-600",
  "further-pure-mathematics": "from-fuchsia-400 to-fuchsia-600",
  psychology: "from-rose-400 to-rose-600",
  "computer-science": "from-violet-400 to-violet-600",
  business: "from-amber-400 to-amber-600",
  "business-studies": "from-amber-400 to-amber-600",
  "english-language": "from-orange-400 to-orange-600",
  "english-literature": "from-orange-400 to-orange-600",
  economics: "from-teal-400 to-teal-600",
  geography: "from-lime-500 to-emerald-600",
  history: "from-red-400 to-red-600",
  french: "from-blue-400 to-red-500",
  spanish: "from-yellow-400 to-red-500",
  japanese: "from-rose-400 to-red-500",
};

export function getSubjectAccent(subjectId: string): string {
  return SUBJECT_ACCENTS[subjectId] ?? "from-primary to-accent";
}
