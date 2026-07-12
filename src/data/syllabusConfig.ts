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

const SUBJECT_BLURBS: Record<string, string> = {
  biology: "Practise explanation, description, and practical questions.",
  chemistry: "Improve calculation, bonding, and practical answers.",
  physics: "Train equations, explanations, and graph questions.",
  mathematics: "Practise structured problem-solving questions.",
  "mathematics-a": "Practise structured problem-solving questions.",
  "mathematics-b": "Practise structured problem-solving questions.",
  psychology: "Revise studies, theories, results, and evaluations.",
  "computer-science": "Algorithms, programming, and data representation.",
  business: "Marketing, finance, and business decision-making.",
  "business-studies": "Marketing, finance, and business decision-making.",
  economics: "Markets, government policy, trade, and development.",
  geography: "Physical and human geography with exam-style case explanations.",
  history: "Source skills, causation, consequence, and essay planning.",
  "english-language": "Reading, writing, and language analysis.",
  "english-language-a": "Reading, writing, and language analysis.",
  "english-language-b": "Reading, writing, and language analysis.",
  "english-literature": "Themes, poetry, and prose analysis.",
  french: "Reading and writing practice for high-frequency exam contexts.",
  spanish: "Reading and writing practice for high-frequency exam contexts.",
  german: "Reading and writing practice for high-frequency exam contexts.",
  chinese: "Reading and writing practice for high-frequency exam contexts.",
  "mandarin-chinese": "Reading and writing practice for high-frequency exam contexts.",
  arabic: "Reading and writing practice for high-frequency exam contexts.",
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
      subject("mathematics-b", "Mathematics B"),
      subject("further-pure-mathematics", "Further Pure Mathematics"),
      subject("english-language-a", "English Language A"),
      subject("english-language-b", "English Language B"),
      subject("english-literature", "English Literature"),
      subject("business", "Business"),
      subject("economics", "Economics"),
      subject("geography", "Geography"),
      subject("history", "History"),
      subject("computer-science", "Computer Science"),
      subject("french", "French"),
      subject("spanish", "Spanish"),
      subject("german", "German"),
      subject("chinese", "Chinese"),
      subject("arabic", "Arabic"),
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
      subject("english-language", "English Language"),
      subject("english-literature", "English Literature"),
      subject("business-studies", "Business Studies"),
      subject("economics", "Economics"),
      subject("geography", "Geography"),
      subject("history", "History"),
      subject("computer-science", "Computer Science"),
      subject("french", "French"),
      subject("spanish", "Spanish"),
      subject("german", "German"),
      subject("mandarin-chinese", "Mandarin Chinese"),
      subject("arabic", "Arabic"),
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
      subject("english-language", "English Language"),
      subject("english-literature", "English Literature"),
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
      subject("english-language", "English Language"),
      subject("english-literature", "English Literature"),
      subject("geography", "Geography"),
      subject("history", "History"),
      subject("computer-science", "Computer Science"),
      subject("business", "Business"),
      subject("economics", "Economics"),
      subject("psychology", "Psychology"),
      subject("french", "French"),
      subject("spanish", "Spanish"),
      subject("german", "German"),
      subject("chinese", "Chinese"),
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
      subject("english-language", "English Language"),
      subject("english-literature", "English Literature"),
      subject("computer-science", "Computer Science"),
      subject("business", "Business"),
      subject("geography", "Geography"),
      subject("history", "History"),
      subject("psychology", "Psychology"),
      subject("french", "French"),
      subject("spanish", "Spanish"),
      subject("german", "German"),
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
  },
  "cambridge-igcse": {
    biology: "0610",
    chemistry: "0620",
    physics: "0625",
  },
  "oxfordaqa-igcse": {
    biology: "9201",
    chemistry: "9202",
    physics: "9203",
  },
  "aqa-gcse": {
    biology: "8461",
    chemistry: "8462",
    physics: "8463",
  },
  "ocr-gcse": {
    biology: "J247",
    chemistry: "J248",
    physics: "J249",
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
  "mathematics-b": "from-fuchsia-400 to-fuchsia-600",
  "additional-mathematics": "from-fuchsia-400 to-fuchsia-600",
  "further-mathematics": "from-fuchsia-400 to-fuchsia-600",
  "further-pure-mathematics": "from-fuchsia-400 to-fuchsia-600",
  psychology: "from-rose-400 to-rose-600",
  "computer-science": "from-violet-400 to-violet-600",
  business: "from-amber-400 to-amber-600",
  "business-studies": "from-amber-400 to-amber-600",
  "english-language": "from-orange-400 to-orange-600",
  "english-language-a": "from-orange-400 to-orange-600",
  "english-language-b": "from-orange-400 to-orange-600",
  "english-literature": "from-orange-400 to-orange-600",
  economics: "from-teal-400 to-teal-600",
  geography: "from-lime-500 to-emerald-600",
  history: "from-red-400 to-red-600",
  french: "from-blue-400 to-red-500",
  spanish: "from-yellow-400 to-red-500",
  german: "from-zinc-500 to-red-500",
  chinese: "from-red-500 to-yellow-500",
  "mandarin-chinese": "from-red-500 to-yellow-500",
  arabic: "from-emerald-500 to-sky-500",
};

export function getSubjectAccent(subjectId: string): string {
  return SUBJECT_ACCENTS[subjectId] ?? "from-primary to-accent";
}
