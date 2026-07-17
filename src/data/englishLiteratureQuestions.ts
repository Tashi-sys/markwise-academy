import type { ExamBoardId } from "./syllabusConfig";
import type { Question } from "./questionBank";

type LitSpec = {
  board: ExamBoardId;
  qualification: Question["qualification"];
  syllabusCode: string;
  boardLabel: string;
  notice: string;
  tasks: Array<{
    topic: string;
    paper: string;
    title: string;
    marks: number;
    focus: string;
    stem: string;
    ao: string[];
    keywords: string[];
    model: string;
    tip: string;
  }>;
};

const SPECS: LitSpec[] = [
  {
    board: "edexcel-igcse",
    qualification: "IGCSE",
    syllabusCode: "4ET1",
    boardLabel: "Pearson Edexcel International GCSE English Literature 4ET1",
    notice: "AI-generated original practice - not a real Pearson past paper question.",
    tasks: [
      {
        topic: "poetry",
        paper: "4ET1/01 Component 1 Section A: Unseen Poetry",
        title: "Unseen Poetry",
        marks: 20,
        focus: "memory and change",
        stem: "Read the original unseen poem printed below. Explore how the writer presents memory and change. In your answer, consider language, form and structure.",
        ao: ["AO2"],
        keywords: ["language", "form", "structure", "imagery", "tone", "speaker"],
        model:
          "A strong response tracks how the speaker's memories shift from certainty to uncertainty, analysing imagery, tone and structural movement rather than retelling the poem.",
        tip: "For Edexcel unseen poetry, stay close to the poem and keep linking methods to the writer's effects.",
      },
      {
        topic: "poetry",
        paper: "4ET1/01 Component 1 Section B: Anthology Poetry Comparison",
        title: "Anthology Poetry Comparison",
        marks: 30,
        focus: "conflict and identity",
        stem: "Compare how conflict affects identity in two poems from the Pearson Edexcel International GCSE anthology. Use your own anthology copy; do not rely on full poem text being printed here.",
        ao: ["AO2", "AO3"],
        keywords: ["compare", "conflict", "identity", "context", "language", "structure"],
        model:
          "A full answer compares both poems throughout, balancing close method analysis with relevant context and a clear judgement about how identity is shaped by conflict.",
        tip: "Do not write two separate mini-essays. Use comparative topic sentences from the start.",
      },
      {
        topic: "prose",
        paper: "4ET1/01 Component 1 Section C: Modern Prose",
        title: "Modern Prose Essay",
        marks: 40,
        focus: "power and responsibility",
        stem: "Explore how the writer presents power and responsibility in the modern prose text you have studied. Refer closely to moments from across the whole text.",
        ao: ["AO1", "AO4"],
        keywords: ["argument", "whole text", "references", "interpretation", "personal response"],
        model:
          "A strong response builds a whole-text argument, selecting precise references and explaining how the writer develops ideas about responsibility over time.",
        tip: "Avoid plot summary; every paragraph should prove part of your interpretation.",
      },
      {
        topic: "themes",
        paper: "4ET1/02 Component 2: Modern Drama and Literary Heritage Texts",
        title: "Drama and Heritage Texts",
        marks: 30,
        focus: "tension and relationships",
        stem: "Explore how a writer presents tension within relationships in a drama or literary heritage text you have studied. Use your own copy of the text for references.",
        ao: ["AO1", "AO2", "AO4"],
        keywords: ["tension", "relationships", "dramatic methods", "structure", "whole text"],
        model:
          "A high-level answer analyses how tension is created through dialogue, stagecraft or narrative pattern, while keeping a clear personal argument.",
        tip: "Mention the writer by name and analyse choices, not just events.",
      },
    ],
  },
  {
    board: "cambridge-igcse",
    qualification: "IGCSE",
    syllabusCode: "0475",
    boardLabel: "Cambridge IGCSE Literature in English 0475",
    notice: "AI-generated original practice - not a real Cambridge past paper question.",
    tasks: [
      {
        topic: "poetry",
        paper: "0475/01 Paper 1: Poetry and Prose",
        title: "Section A Poetry Essay",
        marks: 25,
        focus: "speaker, feeling and change",
        stem: "Explore the ways in which the poet presents a powerful change in feeling in one poem you have studied. Support your ideas with detailed references to the poem.",
        ao: ["AO1", "AO2", "AO3", "AO4"],
        keywords: ["detailed knowledge", "meaning", "language", "form", "personal response"],
        model:
          "A strong Cambridge response combines detailed knowledge, close analysis of poetic methods and a sensitive personal response to how the speaker's feelings change.",
        tip: "Cambridge rewards personal response, but it must be supported by precise reference and method analysis.",
      },
      {
        topic: "prose",
        paper: "0475/01 Paper 1: Poetry and Prose",
        title: "Section B Prose Essay",
        marks: 25,
        focus: "setting and character",
        stem: "How does the writer make a setting significant in one prose text you have studied? Refer to details from across the text in your answer.",
        ao: ["AO1", "AO2", "AO3", "AO4"],
        keywords: ["setting", "character", "language", "structure", "whole text"],
        model:
          "A high-level answer explains how setting shapes character and meaning, analysing descriptive choices and linking them to the writer's wider ideas.",
        tip: "Do not bolt context on. Explain how context or ideas deepen your reading of the text.",
      },
      {
        topic: "themes",
        paper: "0475/02 Paper 2: Drama",
        title: "Drama Essay",
        marks: 25,
        focus: "conflict and dramatic tension",
        stem: "How does the dramatist make conflict so dramatically powerful in the play you have studied? Support your ideas with moments from the play.",
        ao: ["AO1", "AO2", "AO3", "AO4"],
        keywords: ["dramatic tension", "dialogue", "stagecraft", "audience", "personal response"],
        model:
          "A strong answer considers the play in performance, analysing dialogue, stage directions and structure while explaining audience impact.",
        tip: "For drama, write about dramatic methods and audience response, not only characters' feelings.",
      },
      {
        topic: "poetry",
        paper: "0475/04 Paper 4: Unseen",
        title: "Unseen Literature",
        marks: 25,
        focus: "unseen mood and imagery",
        stem: "Read the original unseen passage printed below. Explore how the writer creates mood and develops a vivid impression of the speaker's experience.",
        ao: ["AO1", "AO2", "AO3", "AO4"],
        keywords: ["unseen", "mood", "imagery", "structure", "response"],
        model:
          "A confident answer forms an interpretation quickly, then supports it with close comments on imagery, tone, structure and shifts in mood.",
        tip: "Start with what the text makes you feel, then prove that response through writer's methods.",
      },
    ],
  },
  {
    board: "aqa-gcse",
    qualification: "GCSE",
    syllabusCode: "8702",
    boardLabel: "AQA GCSE English Literature 8702",
    notice: "AI-generated original practice - not a real AQA past paper question.",
    tasks: [
      {
        topic: "themes",
        paper: "8702/1 Paper 1 Section A: Shakespeare",
        title: "Shakespeare Extract-to-Whole Essay",
        marks: 34,
        focus: "ambition and power",
        stem: "Starting with a key moment from your Shakespeare play, explore how Shakespeare presents ambition and power. Write about the moment and the play as a whole.",
        ao: ["AO1", "AO2", "AO3", "AO4"],
        keywords: ["extract", "whole play", "Shakespeare", "methods", "context", "AO4"],
        model:
          "A strong AQA answer moves between the extract moment and the whole play, analysing Shakespeare's language and dramatic methods while linking context to the argument.",
        tip: "AQA Paper 1 needs extract plus whole-play coverage. Do not stay trapped in one scene.",
      },
      {
        topic: "prose",
        paper: "8702/1 Paper 1 Section B: 19th-century Novel",
        title: "19th-century Novel Extract-to-Whole Essay",
        marks: 30,
        focus: "fear and social pressure",
        stem: "Starting with a key moment from your 19th-century novel, explore how the writer presents fear and social pressure. Refer to the moment and the novel as a whole.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["19th-century", "whole novel", "methods", "context", "critical style"],
        model:
          "A high-level answer develops a critical argument, uses precise references and connects methods to relevant social or historical context.",
        tip: "Context only earns credit when it explains the writer's choices or the text's meanings.",
      },
      {
        topic: "themes",
        paper: "8702/2 Paper 2 Section A: Modern Texts",
        title: "Modern Texts Essay",
        marks: 30,
        focus: "responsibility and change",
        stem: "Explore how the writer presents responsibility and change in the modern prose or drama text you have studied.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["responsibility", "change", "writer's methods", "context", "argument"],
        model:
          "A strong response keeps a clear line of argument and analyses how characters, structure and key moments develop the theme.",
        tip: "Write about the writer's message, not just whether a character is good or bad.",
      },
      {
        topic: "poetry",
        paper: "8702/2 Paper 2 Section B and C: Poetry",
        title: "Poetry Comparison and Unseen",
        marks: 30,
        focus: "conflict and memory",
        stem: "Compare how poets present conflict and memory in two poems you have studied. Use your own anthology copy for references.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["compare", "poetry", "language", "form", "structure", "context"],
        model:
          "A strong comparison links both poems in every paragraph, analysing methods and relevant context while building a clear comparative judgement.",
        tip: "Make comparison the spine of the answer, not an extra sentence at the end.",
      },
    ],
  },
  {
    board: "oxfordaqa-igcse",
    qualification: "IGCSE",
    syllabusCode: "9275",
    boardLabel: "OxfordAQA International GCSE English Literature 9275",
    notice: "AI-generated original practice - not a real OxfordAQA past paper question.",
    tasks: [
      {
        topic: "prose",
        paper: "9275/1 Paper 1 Section A: Prose Fiction",
        title: "Prose Fiction Essay",
        marks: 30,
        focus: "identity and isolation",
        stem: "Explore how the writer presents identity and isolation in one prose fiction text you have studied. Use your own copy for detailed references.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["theme", "context", "methods", "personal response", "coherent writing"],
        model:
          "A strong OxfordAQA answer engages with themes and ideas, analyses methods and expresses a clear informed response.",
        tip: "Keep AO1 ideas, AO2 methods and AO3 personal response working together in each paragraph.",
      },
      {
        topic: "themes",
        paper: "9275/1 Paper 1 Section B: Drama",
        title: "Drama Passage-based Question",
        marks: 30,
        focus: "conflict and authority",
        stem: "Using a key passage or moment from your drama text, explore how the dramatist presents conflict and authority. Refer to the passage focus and the play as a whole.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["drama", "authority", "stagecraft", "audience", "whole text"],
        model:
          "A high-level answer analyses stagecraft, dialogue and structure, while making a personal judgement about how authority is presented.",
        tip: "If no extract is printed, use a precise moment from your own copy and analyse it closely.",
      },
      {
        topic: "poetry",
        paper: "9275/2A Paper 2A: Poetry and Unseen Texts",
        title: "Poetry and Unseen Texts",
        marks: 30,
        focus: "voice and viewpoint",
        stem: "Explore how a poet creates a distinctive voice and viewpoint. Refer to language, form and structure in your answer.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["voice", "viewpoint", "language", "form", "structure"],
        model:
          "A strong answer explains the speaker's viewpoint and analyses the poetic choices that shape the reader's response.",
        tip: "OxfordAQA wants informed personal response, so make your interpretation clear.",
      },
      {
        topic: "prose",
        paper: "9275/2B Paper 2B and NEA Route",
        title: "NEA-style Extended Response",
        marks: 30,
        focus: "moral choice and endings",
        stem: "To what extent does the writer make a character's moral choice important to the ending of the text? Use detailed references from your studied prose text.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["moral choice", "ending", "structure", "interpretation", "references"],
        model:
          "A high-level response weighs the importance of the choice, linking character development, structure and the writer's wider ideas.",
        tip: "Use 'to what extent' as a judgement question, not a simple theme description.",
      },
    ],
  },
  {
    board: "ocr-gcse",
    qualification: "GCSE",
    syllabusCode: "J352",
    boardLabel: "OCR GCSE English Literature J352",
    notice: "AI-generated original practice - not a real OCR past paper question.",
    tasks: [
      {
        topic: "themes",
        paper: "J352/01 Component 01 Section A: Modern Prose or Drama",
        title: "Modern Prose or Drama Extract Comparison",
        marks: 20,
        focus: "belonging and pressure",
        stem: "Compare how belonging and pressure are presented in a key moment from your studied modern text and in the original unseen extract printed here.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["compare", "unseen", "extract", "methods", "belonging", "pressure"],
        model:
          "A strong OCR comparison balances both extracts, identifying similarities and differences while analysing language, form and structure.",
        tip: "OCR rewards comparison. Keep both extracts in view throughout the answer.",
      },
      {
        topic: "prose",
        paper: "J352/01 Component 01 Section B: 19th-century Prose",
        title: "19th-century Prose Essay",
        marks: 40,
        focus: "fear and moral conflict",
        stem: "Explore how the writer presents fear and moral conflict in the 19th-century prose text you have studied. Refer to your own copy for evidence.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["19th-century", "moral conflict", "language", "structure", "context"],
        model:
          "A high-level response develops an informed argument, uses well-chosen references and analyses how the writer shapes fear through methods and context.",
        tip: "Use context to illuminate meaning, not as a separate history paragraph.",
      },
      {
        topic: "poetry",
        paper: "J352/02 Component 02 Section A: Poetry Across Time",
        title: "Poetry Comparison",
        marks: 30,
        focus: "loss and resilience",
        stem: "Compare how poets present loss and resilience in two poems you have studied. Use your anthology copy for precise references.",
        ao: ["AO1", "AO2", "AO3"],
        keywords: ["compare", "loss", "resilience", "form", "structure", "context"],
        model:
          "A strong response compares methods and meanings continuously, showing how each poet shapes a different response to loss.",
        tip: "Comparison should be woven through topic sentences, evidence and analysis.",
      },
      {
        topic: "themes",
        paper: "J352/02 Component 02 Section B: Shakespeare",
        title: "Shakespeare Essay",
        marks: 40,
        focus: "power and justice",
        stem: "Explore how Shakespeare presents power and justice in the play you have studied. Refer to a key moment and the play as a whole.",
        ao: ["AO1", "AO2", "AO3", "AO4"],
        keywords: ["Shakespeare", "power", "justice", "dramatic methods", "audience", "AO4"],
        model:
          "A high-level OCR answer analyses dramatic methods, links the key moment to the whole play and writes accurately with a clear critical style.",
        tip: "Remember AO4 where assessed: expression, spelling and punctuation matter too.",
      },
    ],
  },
];

const DIFFICULTY_VARIANTS = [
  {
    difficulty: "easy" as const,
    prefix: "Focus on clear understanding and two precise references.",
    suffix: "Write a planned paragraph answer before expanding it.",
  },
  {
    difficulty: "medium" as const,
    prefix: "Develop a connected essay response with close method analysis.",
    suffix: "Include a clear thesis and link every paragraph back to the question.",
  },
  {
    difficulty: "hard" as const,
    prefix: "Build a high-level critical argument with alternative interpretations.",
    suffix: "Make a judgement about the writer's overall message and effects.",
  },
];

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeQuestion(
  spec: LitSpec,
  task: LitSpec["tasks"][number],
  variantIndex: number,
): Question {
  const variant = DIFFICULTY_VARIANTS[variantIndex % DIFFICULTY_VARIANTS.length];
  const markSchemePoints = [
    {
      point: `AO coverage: addresses ${task.ao.join(", ")} for ${task.paper}.`,
      keywords: [task.ao, [spec.syllabusCode, task.paper.split(" ")[0]]],
    },
    {
      point:
        "Shows detailed knowledge of the studied text or printed unseen material with precise references.",
      keywords: [["detailed", "reference", "evidence", "quotation"]],
    },
    {
      point:
        "Analyses writer's methods such as language, form, structure, narrative voice or dramatic technique.",
      keywords: [["language", "form", "structure", "methods", "effect"]],
    },
    {
      point: "Explains meanings, themes and ideas instead of retelling the plot.",
      keywords: [["theme", "meaning", "idea", "interpretation"]],
    },
    {
      point:
        "Uses relevant context only when it deepens interpretation of the text or writer's choices.",
      keywords: [["context", "relevant", "writer", "purpose"]],
    },
    {
      point: "Develops a clear personal critical response with a sustained line of argument.",
      keywords: [["argument", "judgement", "personal", "response"]],
    },
    {
      point: "For comparison tasks, makes direct links between texts throughout the response.",
      keywords: [["compare", "similarly", "whereas", "both"]],
    },
  ].slice(0, Math.min(7, Math.max(4, Math.ceil(task.marks / 6))));

  return {
    id: `${spec.board}-english-literature-${slug(task.title)}-${variant.difficulty}-${String(variantIndex + 1).padStart(2, "0")}`,
    qualification: spec.qualification,
    examBoard: spec.board,
    subject: "english-literature",
    topic: task.topic,
    paper: task.paper,
    paperType: task.title,
    questionType: "Original syllabus-specific literature practice",
    session: spec.notice,
    questionText: `${spec.notice}\n\n${spec.boardLabel}\n${task.paper}\n\n${variant.prefix}\n\n${task.stem}\n\nFocus: ${task.focus}.\n\nDo not reproduce copyrighted set-text extracts here; use your own copy where needed. [${task.marks} marks]`,
    marks: task.marks,
    markSchemePoints,
    examinerKeywords: [
      ...new Set([...task.keywords, ...task.ao, "writer's methods", "references", "argument"]),
    ],
    modelAnswer: `${task.model} ${variant.suffix}`,
    difficulty: variant.difficulty,
    suggestedMinutes: Math.max(15, Math.round(task.marks * 1.8)),
    hints: [
      `Use the correct ${spec.boardLabel} paper structure: ${task.paper}.`,
      `Cover ${task.ao.join(", ")} rather than writing a generic context paragraph.`,
      task.tip,
    ],
    examinerTip: task.tip,
  };
}

export const ENGLISH_LITERATURE_QUESTIONS: Question[] = SPECS.flatMap((spec) =>
  spec.tasks.flatMap((task) =>
    DIFFICULTY_VARIANTS.map((_, index) => makeQuestion(spec, task, index)),
  ),
);
