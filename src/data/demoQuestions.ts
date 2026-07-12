/**
 * Demo / licensed question data — add real past-paper questions here manually.
 * Do NOT scrape copyrighted papers. Each entry must be manually authored or licensed.
 */
import type { ExamBoardId, Qualification } from "./syllabusConfig";

export type MarkPoint = {
  point: string;
  keywords: string[][];
};

export type DemoQuestion = {
  id: string;
  qualification: Qualification;
  examBoard: ExamBoardId;
  subject: string;
  topic: string;
  paper?: string;
  year?: number;
  session?: string;
  questionText: string;
  marks: number;
  markSchemePoints: MarkPoint[];
  examinerKeywords: string[];
  modelAnswer: string;
  difficulty: "easy" | "medium" | "hard";
  suggestedMinutes: number;
  hints: string[];
  examinerTip: string;
};

type Q = Omit<DemoQuestion, "examinerKeywords"> & { examinerKeywords?: string[] };

function q(input: Q): DemoQuestion {
  const examinerKeywords =
    input.examinerKeywords ?? input.markSchemePoints.flatMap((p) => p.keywords.flat());
  return { ...input, examinerKeywords };
}

function boardQuestion(
  base: Omit<Q, "id" | "qualification" | "examBoard">,
  examBoard: ExamBoardId,
  qualification: Qualification,
  idSuffix: string,
): DemoQuestion {
  return q({
    ...base,
    id: `${idSuffix}-${examBoard}`,
    qualification,
    examBoard,
  });
}

/** Shorthand for GCSE board variants of the same question stem */
function gcse(
  base: Omit<Q, "id" | "qualification" | "examBoard">,
  boards: ExamBoardId[],
  idPrefix: string,
) {
  return boards.map((b) => boardQuestion(base, b, "GCSE", `${idPrefix}-${b}`));
}

/** Shorthand for IGCSE board variants */
function igcse(
  base: Omit<Q, "id" | "qualification" | "examBoard">,
  boards: ExamBoardId[],
  idPrefix: string,
) {
  return boards.map((b) => boardQuestion(base, b, "IGCSE", `${idPrefix}-${b}`));
}

const GCSE_BOARDS: ExamBoardId[] = ["aqa-gcse", "ocr-gcse"];
const IGCSE_BOARDS: ExamBoardId[] = ["cambridge-igcse", "edexcel-igcse"];

// ─── BIOLOGY (original MarkWise questions restored + cross-board) ───────────

const bioEcoDeforestation = {
  subject: "biology",
  topic: "ecology",
  paper: "Paper 2",
  year: 2023,
  session: "May/June",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain how deforestation can contribute to global warming.",
  hints: [
    "Think about what trees normally remove from the air.",
    "Name the process that removes carbon dioxide.",
    "Mention what happens when trees are burned or decay.",
  ],
  markSchemePoints: [
    {
      point: "Fewer trees / less photosynthesis removes carbon dioxide from the atmosphere.",
      keywords: [
        ["fewer trees", "less trees", "photosynthesis"],
        ["carbon dioxide", "co2"],
      ],
    },
    {
      point: "Burning or decomposition of trees releases carbon dioxide.",
      keywords: [
        ["burn", "burning", "decompos", "decay"],
        ["carbon dioxide", "co2", "released"],
      ],
    },
    {
      point: "Carbon dioxide is a greenhouse gas that traps heat / infrared radiation.",
      keywords: [["greenhouse", "traps heat", "infrared"]],
    },
    {
      point: "This leads to an increase in the Earth's temperature / global warming.",
      keywords: [["global warming", "warmer", "temperature rises"]],
    },
  ],
  examinerTip:
    "For full marks, link deforestation to both reduced photosynthesis AND increased CO₂ release, then explain the greenhouse effect.",
  modelAnswer:
    "Deforestation reduces the number of trees, so less carbon dioxide is removed from the atmosphere by photosynthesis. When trees are burned or decompose, additional carbon dioxide is released. Carbon dioxide is a greenhouse gas, so it traps infrared radiation in the atmosphere, causing global warming.",
};

const bioEcoEutrophication = {
  subject: "biology",
  topic: "ecology",
  paper: "Paper 2",
  year: 2022,
  session: "May/June",
  marks: 6,
  difficulty: "hard" as const,
  suggestedMinutes: 6,
  questionText:
    "Describe how fertiliser runoff from farmland can cause fish in a nearby river to die.",
  hints: [
    "Start with what fertiliser does when it enters water.",
    "What grows quickly because of the extra nutrients?",
    "Think about light, decomposition, and oxygen.",
  ],
  markSchemePoints: [
    {
      point: "Fertiliser adds nitrate / mineral ions to the water.",
      keywords: [["nitrate", "mineral ion", "nutrient"]],
    },
    {
      point: "Algae / plants grow rapidly (algal bloom).",
      keywords: [["algae", "algal", "plants grow", "bloom"]],
    },
    {
      point: "Algae block light, so plants below cannot photosynthesise and die.",
      keywords: [
        ["light", "block"],
        ["photosynth", "die"],
      ],
    },
    {
      point: "Bacteria decompose the dead plants/algae.",
      keywords: [["bacteria", "decompos", "microorganism"]],
    },
    {
      point: "Bacteria respire aerobically, using up oxygen in the water.",
      keywords: [["oxygen"], ["respir", "use up", "consume", "deplete"]],
    },
    {
      point: "Fish suffocate / die due to lack of oxygen.",
      keywords: [["fish"], ["die", "suffocate", "lack of oxygen"]],
    },
  ],
  examinerTip:
    "Sequence matters: nutrients → algal bloom → blocked light → plants die → bacteria decompose → oxygen depleted → fish die.",
  modelAnswer:
    "Fertiliser washes into the river and adds nitrate ions. This causes algae to grow rapidly, forming an algal bloom that blocks light to the plants below, which cannot photosynthesise and die. Bacteria decompose the dead plants and algae, respiring aerobically and using up the dissolved oxygen in the water. Fish then suffocate and die due to the lack of oxygen.",
};

const bioEcoCarbon = {
  subject: "biology",
  topic: "ecology",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Describe three processes that release carbon dioxide into the atmosphere.",
  hints: [
    "One happens inside living organisms.",
    "One involves dead things being broken down.",
    "One involves fuel.",
  ],
  markSchemePoints: [
    { point: "Respiration by living organisms releases CO₂.", keywords: [["respir"]] },
    {
      point: "Decomposition / decay of dead organisms releases CO₂.",
      keywords: [["decompos", "decay", "rot"]],
    },
    {
      point: "Combustion / burning of fossil fuels releases CO₂.",
      keywords: [
        ["combust", "burning", "burn"],
        ["fossil", "fuel", "coal", "oil"],
      ],
    },
  ],
  examinerTip:
    "Always name the process precisely — 'breathing out' is not the same as 'respiration' in exam biology.",
  modelAnswer:
    "Respiration by plants and animals releases carbon dioxide. Decomposition of dead organisms by bacteria and fungi also releases CO₂. Combustion of fossil fuels such as coal and oil releases additional carbon dioxide into the atmosphere.",
};

const bioEnzTemp = {
  subject: "biology",
  topic: "enzymes",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText:
    "Explain the effect of increasing temperature above the optimum on the rate of an enzyme-controlled reaction.",
  hints: [
    "Think about what happens to the enzyme's shape.",
    "What part of the enzyme matters for binding?",
    "Use the word 'denature'.",
  ],
  markSchemePoints: [
    { point: "Above optimum, the enzyme begins to denature.", keywords: [["denatur"]] },
    {
      point: "The shape of the active site changes.",
      keywords: [["active site"], ["shape", "change"]],
    },
    {
      point: "Substrate can no longer bind / no enzyme-substrate complex forms.",
      keywords: [["substrate"], ["bind", "fit", "complex"]],
    },
    {
      point: "Rate of reaction decreases / falls to zero.",
      keywords: [["rate"], ["decrease", "fall", "drop", "slow"]],
    },
  ],
  examinerTip:
    "Don't say enzymes are 'killed' — they are proteins, not alive. The keyword is 'denatured'.",
  modelAnswer:
    "Above the optimum temperature, the enzyme denatures. The shape of the active site changes so the substrate can no longer bind to form an enzyme-substrate complex, so the rate of reaction decreases sharply.",
};

const bioEnzLockKey = {
  subject: "biology",
  topic: "enzymes",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Using the lock-and-key model, explain why enzymes are specific.",
  hints: [
    "Compare the enzyme to a lock.",
    "What part of the enzyme is the keyhole?",
    "Why will only one substrate fit?",
  ],
  markSchemePoints: [
    {
      point: "Each enzyme has an active site with a specific shape.",
      keywords: [["active site"], ["shape", "specific"]],
    },
    {
      point: "Only a substrate with a complementary shape can fit.",
      keywords: [["complementary", "fit", "match"], ["substrate"]],
    },
    {
      point: "So each enzyme only catalyses one reaction.",
      keywords: [["one reaction", "specific", "catalyse", "catalyze"]],
    },
  ],
  examinerTip: "Use 'complementary' — examiners love that word.",
  modelAnswer:
    "Each enzyme has an active site with a specific shape. Only a substrate with a complementary shape will fit into the active site, like a key into a lock. This means each enzyme can only catalyse one specific reaction.",
};

const bioInhMeiosis = {
  subject: "biology",
  topic: "inheritance",
  marks: 3,
  difficulty: "medium" as const,
  suggestedMinutes: 3,
  questionText: "State three differences between mitosis and meiosis.",
  hints: [
    "Think about the number of cells produced.",
    "Think about chromosome number.",
    "Think about genetic variation.",
  ],
  markSchemePoints: [
    {
      point: "Mitosis produces 2 cells; meiosis produces 4 cells.",
      keywords: [
        ["2", "two"],
        ["4", "four"],
      ],
    },
    {
      point: "Mitosis daughter cells are diploid; meiosis produces haploid cells.",
      keywords: [["diploid"], ["haploid"]],
    },
    {
      point:
        "Mitosis produces genetically identical cells; meiosis produces genetically different cells.",
      keywords: [["identical"], ["different", "variation", "varied"]],
    },
  ],
  examinerTip:
    "When the question says 'state three differences', use clear contrast words: mitosis… whereas meiosis…",
  modelAnswer:
    "Mitosis produces two daughter cells whereas meiosis produces four. Mitosis daughter cells are diploid, but meiosis produces haploid gametes. Mitosis produces genetically identical cells, whereas meiosis produces genetically different cells.",
};

const bioGasAlveoli = {
  subject: "biology",
  topic: "gas-exchange",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain how the structure of an alveolus is adapted for efficient gas exchange.",
  hints: [
    "Think about surface area.",
    "Think about distance for diffusion.",
    "Think about blood supply and moisture.",
  ],
  markSchemePoints: [
    {
      point: "Large surface area increases rate of diffusion.",
      keywords: [["large surface", "surface area"]],
    },
    {
      point: "Thin walls / one cell thick — short diffusion distance.",
      keywords: [
        ["thin", "one cell"],
        ["diffusion", "distance"],
      ],
    },
    {
      point: "Good blood supply / dense capillary network maintains a concentration gradient.",
      keywords: [
        ["capillar", "blood supply"],
        ["concentration gradient", "gradient"],
      ],
    },
    {
      point: "Moist surface allows gases to dissolve before diffusing.",
      keywords: [
        ["moist", "wet"],
        ["dissolve", "diffus"],
      ],
    },
  ],
  examinerTip:
    "Never just list adaptations — always say WHY each one helps gas exchange (e.g. 'thin walls so a short diffusion distance').",
  modelAnswer:
    "Alveoli have a very large surface area, which increases the rate of diffusion. Their walls are only one cell thick, giving a short diffusion distance. A dense network of capillaries carries oxygen away and brings CO₂ in, maintaining a steep concentration gradient. The inner surface is moist, allowing gases to dissolve before diffusing across the membrane.",
};

const bioTransportHeart = {
  subject: "biology",
  topic: "transport",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText:
    "Explain why the left ventricle has a thicker muscular wall than the right ventricle.",
  hints: [
    "Where does each ventricle pump blood to?",
    "Compare the distances.",
    "Think about pressure.",
  ],
  markSchemePoints: [
    {
      point: "The left ventricle pumps blood around the whole body / systemic circulation.",
      keywords: [["body", "systemic"], ["pump"]],
    },
    {
      point: "The right ventricle only pumps to the lungs (a shorter distance).",
      keywords: [["lung", "pulmonary"], ["right"]],
    },
    {
      point: "The left side needs to generate a higher pressure, so a thicker muscle is needed.",
      keywords: [
        ["higher pressure", "more pressure", "pressure"],
        ["thick", "muscle"],
      ],
    },
  ],
  examinerTip:
    "The word 'pressure' is the keyword examiners want here — not just 'further' or 'stronger'.",
  modelAnswer:
    "The left ventricle pumps blood around the whole body, whereas the right ventricle only pumps blood to the nearby lungs. The left ventricle therefore needs to generate a much higher pressure, so its muscular wall is thicker to contract more forcefully.",
};

// ─── CHEMISTRY ───────────────────────────────────────────────────────────────

const chemRates = {
  subject: "chemistry",
  topic: "rates-of-reaction",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain why increasing the temperature increases the rate of a chemical reaction.",
  hints: ["Particles move faster.", "Collision frequency.", "Activation energy."],
  markSchemePoints: [
    {
      point: "Particles move faster / have more kinetic energy.",
      keywords: [["faster", "kinetic energy"]],
    },
    { point: "More frequent collisions.", keywords: [["collision", "frequent"]] },
    {
      point: "More collisions have energy ≥ activation energy.",
      keywords: [["activation energy"]],
    },
    {
      point: "Therefore more successful collisions per second.",
      keywords: [["successful", "rate"]],
    },
  ],
  examinerTip: "Mention activation energy — examiners expect it.",
  modelAnswer:
    "Particles move faster with more kinetic energy, collide more frequently, and more collisions exceed the activation energy, increasing the rate.",
};

const chemBonding = {
  subject: "chemistry",
  topic: "bonding",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Describe the structure and bonding in sodium chloride.",
  hints: ["Ionic bonding.", "Regular lattice.", "Electrostatic attraction."],
  markSchemePoints: [
    {
      point: "Sodium loses electron, chlorine gains electron.",
      keywords: [
        ["sodium", "lose"],
        ["chlorine", "gain", "electron"],
      ],
    },
    { point: "Oppositely charged ions formed.", keywords: [["ion", "positive", "negative"]] },
    {
      point: "Giant ionic lattice held by electrostatic forces.",
      keywords: [["lattice", "electrostatic", "ionic"]],
    },
  ],
  examinerTip: "Use 'electrostatic attraction' not just 'bonds'.",
  modelAnswer:
    "Sodium donates an electron to chlorine forming Na⁺ and Cl⁻ ions in a giant ionic lattice held by strong electrostatic forces.",
};

// ─── PHYSICS ─────────────────────────────────────────────────────────────────

const phyEnergy = {
  subject: "physics",
  topic: "energy",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Define efficiency of a device.",
  hints: ["Useful output.", "Total input.", "As a ratio or percentage."],
  markSchemePoints: [
    {
      point: "Efficiency = useful energy output / total energy input.",
      keywords: [["useful"], ["total", "input"], ["output"]],
    },
    { point: "Or useful power output / total power input.", keywords: [["power"]] },
    {
      point: "Expressed as a decimal or percentage.",
      keywords: [["percentage", "decimal", "percent"]],
    },
  ],
  examinerTip: "Give the equation and explain what the terms mean.",
  modelAnswer:
    "Efficiency is the ratio of useful energy output to total energy input, often expressed as a percentage.",
};

const phyElectricity = {
  subject: "physics",
  topic: "electricity",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain why the current decreases when more lamps are added in series.",
  hints: ["Total resistance.", "Same current in series.", "V = IR."],
  markSchemePoints: [
    { point: "Adding lamps increases total resistance.", keywords: [["resistance", "increase"]] },
    { point: "Voltage of supply stays the same.", keywords: [["voltage", "supply", "same"]] },
    {
      point: "Using V = IR, current decreases.",
      keywords: [
        ["current", "decrease"],
        ["v=ir", "ohm"],
      ],
    },
    { point: "Each lamp gets less voltage / dimmer.", keywords: [["dimmer", "less voltage"]] },
  ],
  examinerTip: "Link resistance change to V=IR explicitly.",
  modelAnswer:
    "More lamps increase total resistance. With fixed supply voltage, I = V/R so current falls and each lamp is dimmer.",
};

// ─── MATHEMATICS ─────────────────────────────────────────────────────────────

const mathAlgebra = {
  subject: "mathematics",
  topic: "algebra",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Solve the equation 3x + 7 = 22. Show your working.",
  hints: ["Subtract 7 from both sides.", "Divide by 3."],
  markSchemePoints: [
    { point: "Subtract 7: 3x = 15.", keywords: [["3x=15", "3x = 15", "subtract"]] },
    { point: "Divide by 3: x = 5.", keywords: [["x=5", "x = 5", "divide"]] },
    { point: "Correct final answer with working shown.", keywords: [["5"]] },
  ],
  examinerTip: "Always show each step for method marks.",
  modelAnswer: "3x + 7 = 22 → 3x = 15 → x = 5",
};

const mathGeometry = {
  subject: "mathematics-a",
  topic: "geometry",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "A triangle has angles 52° and 68°. Calculate the size of the third angle.",
  hints: ["Angles in a triangle sum to 180°."],
  markSchemePoints: [
    { point: "States angles in triangle sum to 180°.", keywords: [["180"]] },
    { point: "Adds known angles: 52 + 68 = 120.", keywords: [["120", "52", "68"]] },
    { point: "Subtracts: 180 − 120 = 60.", keywords: [["60", "subtract"]] },
    { point: "Third angle is 60°.", keywords: [["60"]] },
  ],
  examinerTip: "State the angle fact before calculating.",
  modelAnswer: "Angles in a triangle sum to 180°. 180 − (52 + 68) = 60°.",
};

const mathBTrig = {
  subject: "mathematics-b",
  topic: "trigonometry",
  marks: 3,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "A right-angled triangle has opposite side 5 cm and hypotenuse 13 cm. Find sin θ.",
  hints: ["sin θ = opposite / hypotenuse."],
  markSchemePoints: [
    {
      point: "States sin θ = opposite / hypotenuse.",
      keywords: [["sin", "opposite", "hypotenuse"]],
    },
    { point: "Substitutes 5 and 13.", keywords: [["5", "13"]] },
    { point: "Answer is 5/13.", keywords: [["5/13", "0.38"]] },
  ],
  examinerTip: "Label the sides clearly before substituting.",
  modelAnswer: "sin θ = opposite/hypotenuse = 5/13",
};

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const engWriting = {
  subject: "english-language",
  topic: "writing",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 5,
  questionText:
    "Describe how a writer creates tension in an opening paragraph. Refer to one language technique.",
  hints: ["Short sentences.", "Semantic field.", "Pathetic fallacy."],
  markSchemePoints: [
    {
      point: "Identifies a technique (e.g. short sentences, imagery).",
      keywords: [["short sentence", "imagery", "technique", "metaphor"]],
    },
    {
      point: "Quotes or references specific words/phrases.",
      keywords: [["quote", "word", "phrase", "example"]],
    },
    {
      point: "Explains the effect on the reader.",
      keywords: [["reader", "effect", "feel", "tension"]],
    },
    { point: "Links effect to building tension.", keywords: [["tension", "suspense", "unease"]] },
  ],
  examinerTip: "Use Point → Evidence → Explain structure.",
  modelAnswer:
    "The writer uses short sentences to create tension. For example, 'He stopped. Listened.' slows the pace and makes the reader anxious about what might happen next.",
};

const engAnalysis = {
  subject: "english-language",
  topic: "language-analysis",
  marks: 3,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain how the writer uses figurative language to describe a storm.",
  hints: ["Identify simile or metaphor.", "Explain the comparison.", "Effect on reader."],
  markSchemePoints: [
    {
      point: "Identifies figurative language.",
      keywords: [["metaphor", "simile", "figurative", "personification"]],
    },
    {
      point: "Explains what is being compared.",
      keywords: [["compare", "like", "as if", "represents"]],
    },
    {
      point: "Explains effect — storm seems powerful/frightening.",
      keywords: [["powerful", "frightening", "violent", "effect"]],
    },
  ],
  examinerTip: "Name the device, unpack the comparison, then analyse effect.",
  modelAnswer:
    "The writer uses a metaphor comparing clouds to 'a grey army', suggesting the storm is organised and overwhelming, making it feel threatening.",
};

const engLitTheme = {
  subject: "english-literature",
  topic: "themes",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 5,
  questionText: "How does the writer present the theme of conflict in the extract?",
  hints: ["Identify conflict type.", "Use a quotation.", "Explain effect."],
  markSchemePoints: [
    {
      point: "Identifies type of conflict.",
      keywords: [["conflict", "internal", "external", "war"]],
    },
    { point: "Selects relevant quotation.", keywords: [["quote", "quotation", "evidence"]] },
    {
      point: "Analyses language or structure.",
      keywords: [["language", "word", "structure", "technique"]],
    },
    { point: "Links to theme of conflict.", keywords: [["conflict", "tension", "theme"]] },
  ],
  examinerTip: "Always embed short quotations within your analysis.",
  modelAnswer:
    "The writer presents conflict through violent imagery, describing 'clashing blades', which creates a sense of physical struggle and highlights the brutality of war.",
};

// ─── BUSINESS ────────────────────────────────────────────────────────────────

const busMarketing = {
  subject: "business",
  topic: "marketing",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain two reasons why a business conducts market research.",
  hints: ["Understand customers.", "Reduce risk.", "Identify demand."],
  markSchemePoints: [
    {
      point: "First reason identified (e.g. understand customer needs).",
      keywords: [["customer", "needs", "demand", "preferences"]],
    },
    { point: "Explanation of first reason.", keywords: [["target", "product", "meet", "satisfy"]] },
    {
      point: "Second reason identified (e.g. reduce risk).",
      keywords: [["risk", "competition", "price", "sales"]],
    },
    { point: "Explanation of second reason.", keywords: [["profit", "decision", "avoid", "plan"]] },
  ],
  examinerTip: "Two distinct reasons with developed explanations.",
  modelAnswer:
    "Market research identifies customer needs so products match demand. It also reduces risk by testing ideas before launch, avoiding costly failures.",
};

const busFinance = {
  subject: "business-studies",
  topic: "finance",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Define the term 'revenue'.",
  hints: ["Money coming in.", "From sales."],
  markSchemePoints: [
    { point: "Revenue is income from sales.", keywords: [["income", "money", "revenue"]] },
    {
      point: "Calculated as price × quantity sold.",
      keywords: [["price", "quantity", "sold", "sales"]],
    },
    { point: "Also called turnover.", keywords: [["turnover", "sales revenue"]] },
  ],
  examinerTip: "Give definition plus how it is calculated.",
  modelAnswer:
    "Revenue is the total income from sales, calculated as price × quantity sold. Also known as turnover.",
};

// ─── PSYCHOLOGY ──────────────────────────────────────────────────────────────

const psyMemory = {
  subject: "psychology",
  topic: "memory",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Outline the multi-store model of memory.",
  hints: ["Three stores.", "Encoding, storage, retrieval.", "Sensory, STM, LTM."],
  markSchemePoints: [
    {
      point: "Memory has separate stores: sensory, STM, LTM.",
      keywords: [["sensory", "short-term", "stm", "long-term", "ltm"]],
    },
    {
      point: "Information passes between stores.",
      keywords: [["transfer", "pass", "attention", "rehearsal"]],
    },
    {
      point: "Each store has different duration/capacity.",
      keywords: [["duration", "capacity", "limited"]],
    },
    {
      point: "Processes: encoding, storage, retrieval.",
      keywords: [["encoding", "storage", "retrieval"]],
    },
  ],
  examinerTip: "Name all three stores and their characteristics.",
  modelAnswer:
    "The multi-store model proposes sensory, short-term and long-term memory stores. Information is encoded, stored and retrieved, with limited STM capacity and longer LTM duration.",
};

const psySocial = {
  subject: "psychology",
  topic: "social-influence",
  marks: 3,
  difficulty: "medium" as const,
  suggestedMinutes: 3,
  questionText: "Explain one factor that affects conformity.",
  hints: ["Group size.", "Unanimity.", "Task difficulty."],
  markSchemePoints: [
    {
      point: "Identifies a factor (e.g. group size).",
      keywords: [["group size", "unanimity", "task", "difficulty", "anonymity"]],
    },
    {
      point: "Explains how the factor increases/decreases conformity.",
      keywords: [["increase", "decrease", "more", "less", "conform"]],
    },
    {
      point: "Uses an example or elaboration.",
      keywords: [["asch", "example", "research", "study", "people"]],
    },
  ],
  examinerTip: "One factor explained in depth beats listing several.",
  modelAnswer:
    "Larger group size increases conformity because individuals feel greater pressure to agree with the majority, as shown in Asch's line study.",
};

// ─── COMPUTER SCIENCE ────────────────────────────────────────────────────────

const csAlgorithms = {
  subject: "computer-science",
  topic: "algorithms",
  marks: 4,
  difficulty: "medium" as const,
  suggestedMinutes: 4,
  questionText: "Explain the difference between linear search and binary search.",
  hints: ["Sorted data.", "Halving.", "Efficiency."],
  markSchemePoints: [
    {
      point: "Linear search checks each item in order.",
      keywords: [["linear", "each", "sequential", "one by one"]],
    },
    { point: "Binary search requires sorted data.", keywords: [["binary", "sorted", "order"]] },
    {
      point: "Binary search halves the search space each step.",
      keywords: [["half", "middle", "divide"]],
    },
    {
      point: "Binary search is more efficient for large lists.",
      keywords: [["efficient", "faster", "large"]],
    },
  ],
  examinerTip: "Compare both method AND requirement for sorted data.",
  modelAnswer:
    "Linear search checks items sequentially. Binary search requires sorted data and repeatedly halves the search range, making it faster on large lists.",
};

const csBinary = {
  subject: "computer-science",
  topic: "data-representation",
  marks: 3,
  difficulty: "easy" as const,
  suggestedMinutes: 3,
  questionText: "Convert the binary number 1011 to denary.",
  hints: ["Place values: 8, 4, 2, 1.", "Add the columns with 1."],
  markSchemePoints: [
    { point: "Shows place values or working.", keywords: [["8", "4", "2", "1", "place"]] },
    { point: "1×8 + 0×4 + 1×2 + 1×1.", keywords: [["8", "2", "1", "add"]] },
    { point: "Answer is 11.", keywords: [["11"]] },
  ],
  examinerTip: "Show place-value working for method marks.",
  modelAnswer: "1011₂ = 8 + 0 + 2 + 1 = 11",
};

// Compact original question templates used to make every displayed subject usable.
type QuestionBase = Omit<Q, "id" | "qualification" | "examBoard">;

const BOARD_QUALIFICATION: Record<ExamBoardId, Qualification> = {
  "edexcel-igcse": "IGCSE",
  "cambridge-igcse": "IGCSE",
  "oxfordaqa-igcse": "IGCSE",
  "aqa-gcse": "GCSE",
  "ocr-gcse": "GCSE",
};

function subjectForBoard(subject: string, board: ExamBoardId): string {
  if (subject === "mathematics" && board === "edexcel-igcse") return "mathematics-a";
  if (subject === "further-mathematics" && board === "edexcel-igcse")
    return "further-pure-mathematics";
  if (subject === "further-mathematics" && board === "cambridge-igcse")
    return "additional-mathematics";
  if (subject === "business" && board === "cambridge-igcse") return "business-studies";
  if (subject === "english-language" && board === "edexcel-igcse") return "english-language-a";
  if (subject === "chinese" && board === "cambridge-igcse") return "mandarin-chinese";
  return subject;
}

function compactQuestion(input: {
  subject: string;
  topic: string;
  questionText: string;
  marks?: number;
  difficulty?: "easy" | "medium" | "hard";
  points: string[];
  keywords: string[][];
  modelAnswer: string;
  tip?: string;
}): QuestionBase {
  return {
    subject: input.subject,
    topic: input.topic,
    marks: input.marks ?? input.points.length,
    difficulty: input.difficulty ?? "medium",
    suggestedMinutes: Math.max(3, input.marks ?? input.points.length),
    questionText: input.questionText,
    hints: [
      "Identify exactly what the command word is asking you to do.",
      "Use subject vocabulary, then link it to the question context.",
    ],
    markSchemePoints: input.points.map((point, index) => ({
      point,
      keywords: [input.keywords[index] ?? point.toLowerCase().split(" ").slice(0, 4)],
    })),
    examinerTip: input.tip ?? "Make each markscheme point explicit rather than implied.",
    modelAnswer: input.modelAnswer,
  };
}

function boardSet(subject: string): ExamBoardId[] {
  if (subject === "economics") return ["edexcel-igcse", "cambridge-igcse", "aqa-gcse"];
  if (subject === "psychology") return ["aqa-gcse", "ocr-gcse"];
  if (subject === "further-mathematics") return ["edexcel-igcse", "cambridge-igcse", "aqa-gcse"];
  return ["edexcel-igcse", "cambridge-igcse", "aqa-gcse", "ocr-gcse"];
}

function expand(subject: string, bases: QuestionBase[], idPrefix: string): DemoQuestion[] {
  return boardSet(subject).flatMap((board) =>
    bases.map((base, index) =>
      q({
        ...base,
        subject: subjectForBoard(subject, board),
        id: `${idPrefix}-${index + 1}-${board}`,
        qualification: BOARD_QUALIFICATION[board],
        examBoard: board,
      }),
    ),
  );
}

function languageQuestions(language: string): DemoQuestion[] {
  return boardSet(language).map((board) =>
    q({
      subject: subjectForBoard(language, board),
      topic: "writing",
      id: `lang-${language}-${board}`,
      qualification: BOARD_QUALIFICATION[board],
      examBoard: board,
      marks: 4,
      difficulty: "easy",
      suggestedMinutes: 5,
      questionText:
        "Write four sentences about your school routine. Include an opinion, a reason, and a time phrase.",
      hints: ["Use a clear time phrase.", "Add because/therefore-style reasoning."],
      markSchemePoints: [
        {
          point: "Mentions school routine or subjects.",
          keywords: [["school", "lesson", "class", "study"]],
        },
        { point: "Includes an opinion.", keywords: [["like", "prefer", "enjoy", "opinion"]] },
        { point: "Gives a reason.", keywords: [["because", "reason", "as", "since"]] },
        {
          point: "Uses a time phrase or sequence.",
          keywords: [["morning", "after", "then", "time"]],
        },
      ],
      examinerTip:
        "For language writing, range plus accuracy usually scores better than long risky sentences.",
      modelAnswer:
        "A strong answer gives four accurate sentences about school, includes an opinion, explains it with a reason, and uses a time phrase such as in the morning or after lunch.",
    }),
  );
}

const chemistryMore = [
  compactQuestion({
    subject: "chemistry",
    topic: "atomic-structure",
    questionText:
      "Describe the structure of an atom, including the charge and position of each subatomic particle.",
    points: [
      "Protons are positive and in the nucleus.",
      "Neutrons are neutral and in the nucleus.",
      "Electrons are negative and move around the nucleus.",
    ],
    keywords: [
      ["proton", "positive", "nucleus"],
      ["neutron", "neutral", "nucleus"],
      ["electron", "negative", "shell"],
    ],
    modelAnswer:
      "An atom has a small nucleus containing positive protons and neutral neutrons. Negative electrons occupy shells or energy levels around the nucleus.",
  }),
  compactQuestion({
    subject: "chemistry",
    topic: "acids",
    questionText:
      "Explain what happens during neutralisation between hydrochloric acid and sodium hydroxide.",
    points: [
      "Hydrogen ions from the acid react with hydroxide ions.",
      "Water is formed.",
      "A salt, sodium chloride, is produced.",
    ],
    keywords: [
      ["hydrogen", "h+", "hydroxide", "oh"],
      ["water", "h2o"],
      ["salt", "sodium chloride", "nacl"],
    ],
    modelAnswer:
      "In neutralisation, H+ ions from hydrochloric acid react with OH- ions from sodium hydroxide to form water. Sodium chloride is also formed as the salt.",
  }),
  compactQuestion({
    subject: "chemistry",
    topic: "electrolysis",
    questionText:
      "Molten lead bromide is electrolysed. Explain why lead forms at the negative electrode.",
    points: [
      "Lead ions are positive.",
      "Positive ions move to the negative electrode.",
      "Lead ions gain electrons and are reduced.",
    ],
    keywords: [
      ["lead ions", "pb", "positive"],
      ["negative electrode", "cathode"],
      ["gain electrons", "reduced", "reduction"],
    ],
    modelAnswer:
      "Pb2+ ions are attracted to the negative electrode because they are positive. They gain electrons there, so they are reduced to lead atoms.",
  }),
];

const physicsMore = [
  compactQuestion({
    subject: "physics",
    topic: "forces",
    questionText:
      "A cyclist accelerates from rest. Explain why the resultant force must be forwards.",
    points: [
      "Acceleration is in the direction of the resultant force.",
      "The driving force is greater than resistive forces.",
      "Newton's second law links resultant force to acceleration.",
    ],
    keywords: [
      ["acceleration", "direction"],
      ["driving force", "resistive", "greater"],
      ["resultant force", "f=ma", "newton"],
    ],
    modelAnswer:
      "The cyclist accelerates forwards, so the resultant force is forwards. This means the driving force is larger than air resistance and friction.",
  }),
  compactQuestion({
    subject: "physics",
    topic: "waves",
    questionText: "State two differences between transverse and longitudinal waves.",
    points: [
      "Transverse vibrations are perpendicular to wave direction.",
      "Longitudinal vibrations are parallel to wave direction.",
      "Longitudinal waves have compressions and rarefactions.",
    ],
    keywords: [
      ["transverse", "perpendicular"],
      ["longitudinal", "parallel"],
      ["compression", "rarefaction"],
    ],
    modelAnswer:
      "In transverse waves, oscillations are perpendicular to the direction of travel. In longitudinal waves, oscillations are parallel and form compressions and rarefactions.",
  }),
  compactQuestion({
    subject: "physics",
    topic: "magnetism",
    questionText: "Explain why a current-carrying wire in a magnetic field can experience a force.",
    points: [
      "A current produces a magnetic field around the wire.",
      "This field interacts with the external magnetic field.",
      "The interaction produces a force on the wire.",
    ],
    keywords: [
      ["current", "magnetic field"],
      ["interacts", "external field"],
      ["force", "motor effect"],
    ],
    modelAnswer:
      "Current in the wire creates a magnetic field. This interacts with the external magnetic field, producing a force called the motor effect.",
  }),
];

const mathsMore = [
  compactQuestion({
    subject: "mathematics",
    topic: "algebra",
    questionText: "Factorise x² + 7x + 12.",
    points: [
      "Finds two numbers that multiply to 12.",
      "The numbers add to 7.",
      "Gives (x + 3)(x + 4).",
    ],
    keywords: [
      ["multiply", "12"],
      ["add", "7"],
      ["x+3", "x+4", "factor"],
    ],
    modelAnswer:
      "The numbers are 3 and 4 because 3 × 4 = 12 and 3 + 4 = 7, so x² + 7x + 12 = (x + 3)(x + 4).",
  }),
  compactQuestion({
    subject: "mathematics",
    topic: "statistics",
    questionText: "The numbers 4, 6, 7, 9, 9 are a data set. Calculate the mean.",
    points: ["Adds all values to get 35.", "Divides by 5.", "Gives mean of 7."],
    keywords: [["35"], ["divide", "5"], ["7"]],
    modelAnswer:
      "The total is 4 + 6 + 7 + 9 + 9 = 35. There are 5 values, so the mean is 35 ÷ 5 = 7.",
  }),
  compactQuestion({
    subject: "mathematics",
    topic: "trigonometry",
    questionText:
      "In a right-angled triangle, the adjacent side is 8 cm and the hypotenuse is 10 cm. Find cos θ.",
    points: [
      "Uses cosine as adjacent divided by hypotenuse.",
      "Substitutes 8 over 10.",
      "Simplifies to 0.8.",
    ],
    keywords: [
      ["cos", "adjacent", "hypotenuse"],
      ["8", "10"],
      ["0.8", "4/5"],
    ],
    modelAnswer: "cos θ = adjacent ÷ hypotenuse = 8 ÷ 10 = 0.8.",
  }),
  compactQuestion({
    subject: "mathematics",
    topic: "geometry",
    questionText:
      "Calculate the area of a trapezium with parallel sides 6 cm and 10 cm and height 5 cm.",
    points: [
      "Uses half times sum of parallel sides times height.",
      "Substitutes 6, 10, and 5.",
      "Gives 40 cm².",
    ],
    keywords: [
      ["half", "parallel", "height"],
      ["6", "10", "5"],
      ["40", "cm2", "cm²"],
    ],
    modelAnswer: "Area = 1/2 × (6 + 10) × 5 = 40 cm².",
  }),
];

const furtherMathsMore = [
  compactQuestion({
    subject: "further-mathematics",
    topic: "algebra",
    questionText: "Solve x² - 5x + 6 = 0.",
    points: ["Factorises the quadratic.", "Identifies (x - 2)(x - 3).", "Gives x = 2 or x = 3."],
    keywords: [
      ["factor", "quadratic"],
      ["x-2", "x-3"],
      ["2", "3"],
    ],
    modelAnswer: "x² - 5x + 6 = (x - 2)(x - 3), so x = 2 or x = 3.",
  }),
  compactQuestion({
    subject: "further-mathematics",
    topic: "trigonometry",
    questionText: "Sketch the key features of y = sin x for 0° ≤ x ≤ 360°.",
    points: [
      "Passes through 0°, 180°, and 360°.",
      "Maximum is 1 at 90°.",
      "Minimum is -1 at 270°.",
    ],
    keywords: [
      ["0", "180", "360"],
      ["maximum", "1", "90"],
      ["minimum", "-1", "270"],
    ],
    modelAnswer:
      "The sine graph crosses the x-axis at 0°, 180°, and 360°, reaches 1 at 90°, and reaches -1 at 270°.",
  }),
];

const computerScienceMore = [
  compactQuestion({
    subject: "computer-science",
    topic: "programming",
    questionText: "Explain the difference between selection and iteration in an algorithm.",
    points: [
      "Selection makes a decision using a condition.",
      "Iteration repeats instructions.",
      "Gives an example such as IF or WHILE/FOR.",
    ],
    keywords: [
      ["selection", "condition", "if"],
      ["iteration", "repeat", "loop"],
      ["if", "while", "for"],
    ],
    modelAnswer:
      "Selection uses a condition to choose a path, for example IF score > 50. Iteration repeats code, for example a FOR loop or WHILE loop.",
  }),
  compactQuestion({
    subject: "computer-science",
    topic: "networks",
    questionText: "Explain why packet switching is used to send data across the internet.",
    points: [
      "Data is split into packets.",
      "Packets can take different routes.",
      "Packets are reassembled at the destination.",
    ],
    keywords: [
      ["split", "packets"],
      ["different routes", "route"],
      ["reassembled", "destination"],
    ],
    modelAnswer:
      "Packet switching splits data into packets. Each packet may travel by a different route and is reassembled when it reaches the destination.",
  }),
];

const businessMore = [
  compactQuestion({
    subject: "business",
    topic: "business-activity",
    questionText: "Explain one advantage and one disadvantage of operating as a sole trader.",
    points: [
      "Owner keeps control or profits.",
      "Owner has unlimited liability.",
      "Links the point to business risk or decision-making.",
    ],
    keywords: [
      ["control", "profit"],
      ["unlimited liability", "debts"],
      ["risk", "decision"],
    ],
    modelAnswer:
      "A sole trader can make decisions quickly and keep the profits. However, they have unlimited liability, so personal possessions may be at risk if debts cannot be paid.",
  }),
  compactQuestion({
    subject: "business",
    topic: "finance",
    questionText: "Explain why cash flow is important for a small business.",
    points: [
      "Cash flow shows money entering and leaving.",
      "It helps pay short-term costs.",
      "Poor cash flow can cause failure even if profitable.",
    ],
    keywords: [
      ["money in", "money out"],
      ["pay", "costs", "wages"],
      ["failure", "profit", "cash"],
    ],
    modelAnswer:
      "Cash flow tracks money coming in and going out. A business needs enough cash to pay wages, suppliers, and rent; without it, it may fail even when sales are strong.",
  }),
  compactQuestion({
    subject: "business",
    topic: "human-resources",
    questionText: "Explain two ways a business could motivate employees.",
    points: [
      "Financial methods include pay rises or bonuses.",
      "Non-financial methods include training or praise.",
      "Explains how motivation may improve productivity.",
    ],
    keywords: [
      ["pay", "bonus", "financial"],
      ["training", "praise", "responsibility"],
      ["productivity", "work harder", "motivation"],
    ],
    modelAnswer:
      "A business could use bonuses to reward good work and training to help employees feel valued. Motivation may raise productivity because staff are more willing to work hard.",
  }),
];

const economicsMore = [
  compactQuestion({
    subject: "economics",
    topic: "market-system",
    questionText: "Explain how an increase in demand can affect price in a competitive market.",
    points: [
      "Demand shifts right or increases.",
      "There is excess demand at the original price.",
      "Price rises until a new equilibrium is reached.",
    ],
    keywords: [
      ["demand", "increase", "right"],
      ["excess demand", "shortage"],
      ["price rises", "equilibrium"],
    ],
    modelAnswer:
      "An increase in demand creates excess demand at the original price. Firms can charge more, so price rises until a new equilibrium is reached.",
  }),
  compactQuestion({
    subject: "economics",
    topic: "government-policy",
    questionText: "Explain one reason a government may tax cigarettes.",
    points: [
      "Cigarettes create external costs.",
      "A tax raises price and may reduce consumption.",
      "Tax revenue can fund healthcare or public services.",
    ],
    keywords: [
      ["external cost", "health"],
      ["tax", "price", "reduce"],
      ["revenue", "healthcare", "government"],
    ],
    modelAnswer:
      "Cigarettes create external costs such as health problems. A tax raises their price, discouraging consumption, and the revenue can help fund healthcare.",
  }),
  compactQuestion({
    subject: "economics",
    topic: "international-trade",
    questionText: "Explain one benefit of specialisation for an economy.",
    points: [
      "Resources are used where they are most efficient.",
      "Output or productivity can rise.",
      "Trade allows access to more goods.",
    ],
    keywords: [
      ["efficient", "resources"],
      ["output", "productivity"],
      ["trade", "goods"],
    ],
    modelAnswer:
      "Specialisation lets workers or countries focus on what they do best, increasing productivity and output. Through trade, consumers can access a wider range of goods.",
  }),
  compactQuestion({
    subject: "economics",
    topic: "development",
    questionText: "Explain why GDP per head may not fully measure living standards.",
    points: [
      "It is an average and hides inequality.",
      "It may ignore quality of life factors.",
      "It may not include informal economic activity.",
    ],
    keywords: [
      ["average", "inequality"],
      ["quality of life", "health", "education"],
      ["informal", "unpaid"],
    ],
    modelAnswer:
      "GDP per head is an average, so it can hide inequality. It also misses quality-of-life factors such as health, education, and informal work.",
  }),
];

const psychologyMore = [
  compactQuestion({
    subject: "psychology",
    topic: "research-methods",
    questionText: "Explain one strength and one weakness of using a laboratory experiment.",
    points: [
      "High control over variables.",
      "Easier to establish cause and effect.",
      "May lack ecological validity.",
    ],
    keywords: [
      ["control", "variables"],
      ["cause", "effect"],
      ["ecological validity", "artificial"],
    ],
    modelAnswer:
      "Laboratory experiments control variables, making cause and effect easier to identify. A weakness is that the setting may be artificial, reducing ecological validity.",
  }),
  compactQuestion({
    subject: "psychology",
    topic: "attachment",
    questionText: "Outline one effect of insecure attachment.",
    points: [
      "Names an insecure attachment type or feature.",
      "Describes behaviour such as avoidance or resistance.",
      "Links to later relationships or emotional development.",
    ],
    keywords: [
      ["insecure", "avoidant", "resistant"],
      ["avoid", "cling", "distress"],
      ["relationship", "emotion"],
    ],
    modelAnswer:
      "Insecure attachment may involve avoidant or resistant behaviour, such as avoiding comfort or showing high distress. It can affect later emotional development and relationships.",
  }),
  compactQuestion({
    subject: "psychology",
    topic: "memory",
    questionText: "Explain why leading questions can reduce eyewitness accuracy.",
    points: [
      "Leading questions contain misleading information.",
      "They can alter or reconstruct memory.",
      "This may make recall less accurate.",
    ],
    keywords: [
      ["leading", "misleading"],
      ["alter", "reconstruct", "memory"],
      ["accuracy", "recall"],
    ],
    modelAnswer:
      "Leading questions may include misleading information, which can alter a witness's memory. This reconstructed memory may make later recall less accurate.",
  }),
  compactQuestion({
    subject: "psychology",
    topic: "social-influence",
    questionText: "Explain how group size can affect conformity.",
    points: [
      "Conformity can increase as group size increases.",
      "More people create greater social pressure.",
      "The effect may level off after a certain group size.",
    ],
    keywords: [
      ["group size", "increase"],
      ["social pressure", "majority"],
      ["level off", "plateau"],
    ],
    modelAnswer:
      "As group size increases, conformity often increases because the majority creates more social pressure. However, this effect may level off once the group is already large.",
  }),
];

const geographyMore = [
  compactQuestion({
    subject: "geography",
    topic: "natural-hazards",
    questionText: "Explain why earthquakes can cause more deaths in low-income countries.",
    points: [
      "Buildings may be less earthquake-resistant.",
      "Emergency services may have fewer resources.",
      "Infrastructure damage can delay rescue and medical care.",
    ],
    keywords: [
      ["buildings", "earthquake-resistant"],
      ["emergency", "resources"],
      ["infrastructure", "rescue", "medical"],
    ],
    modelAnswer:
      "Deaths may be higher where buildings are not designed to withstand shaking. Limited emergency services and damaged roads can delay rescue and medical treatment.",
  }),
  compactQuestion({
    subject: "geography",
    topic: "rivers",
    questionText: "Explain how deposition can form a floodplain.",
    points: [
      "A river floods and spreads over surrounding land.",
      "Velocity decreases outside the channel.",
      "Sediment is deposited in layers over time.",
    ],
    keywords: [
      ["flood", "surrounding land"],
      ["velocity", "slower"],
      ["sediment", "deposited", "layers"],
    ],
    modelAnswer:
      "When a river floods, water spreads over the valley floor. The water slows, so sediment is deposited. Repeated flooding builds up a flat floodplain.",
  }),
  compactQuestion({
    subject: "geography",
    topic: "urban-issues",
    questionText: "Explain one opportunity and one challenge created by rapid urbanisation.",
    points: [
      "Opportunity such as jobs, services, or transport.",
      "Challenge such as housing shortage or congestion.",
      "Develops each point with impact on people.",
    ],
    keywords: [
      ["jobs", "services", "transport"],
      ["housing", "congestion", "pollution"],
      ["people", "impact"],
    ],
    modelAnswer:
      "Urbanisation can create jobs and better access to services. It can also cause housing shortages and congestion, reducing quality of life for residents.",
  }),
];

const historyMore = [
  compactQuestion({
    subject: "history",
    topic: "source-skills",
    questionText: "Explain two features that affect the usefulness of a historical source.",
    points: [
      "Content can provide relevant evidence.",
      "Provenance affects perspective or purpose.",
      "Context helps judge reliability or limitations.",
    ],
    keywords: [
      ["content", "evidence"],
      ["provenance", "purpose", "author"],
      ["context", "reliability", "limitation"],
    ],
    modelAnswer:
      "A source is useful if its content gives relevant evidence. Its provenance, such as author and purpose, also matters because it may reveal bias or limitations.",
  }),
  compactQuestion({
    subject: "history",
    topic: "causation-consequence",
    questionText: "Explain why long-term causes are important in historical change.",
    points: [
      "Long-term causes build pressure over time.",
      "They create conditions for later events.",
      "They should be linked to short-term triggers.",
    ],
    keywords: [
      ["long-term", "pressure"],
      ["conditions", "background"],
      ["trigger", "short-term"],
    ],
    modelAnswer:
      "Long-term causes build pressure and create the conditions for change. A short-term trigger may start the event, but the deeper causes explain why change was possible.",
  }),
  compactQuestion({
    subject: "history",
    topic: "essay-structure",
    questionText:
      "Describe how to structure a balanced answer to a 'How far do you agree?' question.",
    points: [
      "Gives evidence supporting the statement.",
      "Gives evidence challenging the statement.",
      "Reaches a judgement based on relative importance.",
    ],
    keywords: [
      ["support", "agree", "evidence"],
      ["challenge", "disagree", "however"],
      ["judgement", "importance", "overall"],
    ],
    modelAnswer:
      "A balanced answer explains evidence that supports the statement, then evidence that challenges it. The conclusion should judge which side is stronger and why.",
  }),
];

const englishLanguageMore = [
  compactQuestion({
    subject: "english-language",
    topic: "reading",
    questionText: "Explain how a writer can create tension in an opening paragraph.",
    points: [
      "Identifies a method such as short sentences or withholding information.",
      "Uses a precise example or reference.",
      "Explains the effect on the reader.",
    ],
    keywords: [
      ["short sentence", "withhold", "method"],
      ["example", "reference"],
      ["reader", "tension", "effect"],
    ],
    modelAnswer:
      "A writer can use short sentences and withhold information to create uncertainty. This makes the reader ask questions and builds tension from the start.",
  }),
  compactQuestion({
    subject: "english-language",
    topic: "writing",
    questionText:
      "Write the opening of a speech persuading students to volunteer in the local community.",
    points: [
      "Uses direct address or rhetorical question.",
      "Gives a clear persuasive viewpoint.",
      "Uses an example of community benefit.",
    ],
    keywords: [
      ["you", "we", "rhetorical"],
      ["persuade", "should", "must"],
      ["community", "benefit", "help"],
    ],
    modelAnswer:
      "A strong opening directly addresses the audience, states that volunteering matters, and gives a vivid benefit such as helping younger pupils or elderly residents.",
  }),
];

const englishLiteratureMore = [
  compactQuestion({
    subject: "english-literature",
    topic: "poetry",
    questionText: "Explain how a poet can use structure to present a change in mood.",
    points: [
      "Identifies a structural feature such as stanza shift or volta.",
      "Links the feature to a change in mood.",
      "Uses terminology accurately.",
    ],
    keywords: [
      ["stanza", "volta", "shift"],
      ["mood", "change"],
      ["structure", "terminology"],
    ],
    modelAnswer:
      "A poet might use a volta or stanza break to mark a change from calm to anger. The structural shift makes the change in mood clear to the reader.",
  }),
  compactQuestion({
    subject: "english-literature",
    topic: "prose",
    questionText: "Explain how a writer can present a character as isolated.",
    points: [
      "Refers to behaviour, setting, or dialogue.",
      "Explains how the method suggests isolation.",
      "Links to theme or reader response.",
    ],
    keywords: [
      ["behaviour", "setting", "dialogue"],
      ["isolated", "alone"],
      ["theme", "reader"],
    ],
    modelAnswer:
      "A writer can place the character in an empty setting and give them limited dialogue. This suggests isolation and encourages the reader to notice their loneliness.",
  }),
];

function topicQuestion(subject: string, topic: string, title: string): QuestionBase {
  return compactQuestion({
    subject,
    topic,
    questionText: `Explain one important idea from the topic ${title}.`,
    points: [
      `Identifies a correct idea from ${title}.`,
      "Uses accurate subject vocabulary.",
      "Develops the explanation by linking cause and effect.",
    ],
    keywords: [
      title.toLowerCase().split(" ").slice(0, 3),
      ["accurate", "keyword", "term", "vocabulary"],
      ["because", "therefore", "leads", "effect"],
    ],
    modelAnswer: `A strong answer names a precise idea from ${title}, uses the correct key term, and explains how it affects the process or outcome in the question.`,
    tip: "Name the topic idea first, then develop it with a clear because link.",
  });
}

const biologyTopicFillers = [
  topicQuestion("biology", "cells", "cells and microscopes"),
  topicQuestion("biology", "nutrition", "nutrition and digestion"),
  topicQuestion("biology", "plant-transport", "plant transport"),
  topicQuestion("biology", "respiration", "aerobic respiration"),
  topicQuestion("biology", "reproduction", "sexual reproduction"),
  topicQuestion("biology", "variation", "variation and selection"),
  compactQuestion({
    subject: "biology",
    topic: "cells",
    questionText: "Explain why microscopes are useful when studying specialised cells.",
    points: [
      "Microscopes magnify cells or small structures.",
      "They allow organelles or cell structures to be seen.",
      "This helps link cell structure to function.",
    ],
    keywords: [
      ["microscope", "magnify", "magnification"],
      ["organelle", "structure"],
      ["function", "specialised"],
    ],
    modelAnswer:
      "Microscopes magnify very small cells and structures so organelles can be seen. This helps scientists link a specialised cell's structure to its function.",
  }),
  compactQuestion({
    subject: "biology",
    topic: "nutrition",
    questionText: "Describe how the small intestine is adapted for absorption.",
    points: [
      "Villi provide a large surface area.",
      "A thin wall gives a short diffusion distance.",
      "A good blood supply maintains a concentration gradient.",
    ],
    keywords: [
      ["villi", "surface area"],
      ["thin", "diffusion distance"],
      ["blood supply", "concentration gradient"],
    ],
    modelAnswer:
      "The small intestine has villi, giving a large surface area. The villi have thin walls and a good blood supply, so digested food molecules diffuse into the blood quickly.",
  }),
  compactQuestion({
    subject: "biology",
    topic: "respiration",
    questionText: "Compare aerobic and anaerobic respiration in muscle cells.",
    points: [
      "Aerobic respiration uses oxygen.",
      "Aerobic respiration releases more energy.",
      "Anaerobic respiration produces lactic acid.",
    ],
    keywords: [
      ["oxygen", "aerobic"],
      ["more energy", "releases energy"],
      ["lactic acid", "anaerobic"],
    ],
    modelAnswer:
      "Aerobic respiration uses oxygen and releases more energy from glucose. Anaerobic respiration happens without enough oxygen and produces lactic acid in muscle cells.",
  }),
  compactQuestion({
    subject: "biology",
    topic: "reproduction",
    questionText: "Explain why sexual reproduction produces variation in offspring.",
    points: [
      "Gametes from two parents fuse.",
      "Each gamete contains a different combination of alleles.",
      "The offspring inherit genetic material from both parents.",
    ],
    keywords: [
      ["gamete", "fuse", "fertilisation"],
      ["allele", "different"],
      ["genetic material", "both parents"],
    ],
    modelAnswer:
      "In sexual reproduction, gametes from two parents fuse. Each gamete carries a different combination of alleles, so offspring inherit genetic material from both parents and show variation.",
  }),
  compactQuestion({
    subject: "biology",
    topic: "practical",
    questionText:
      "A student tests how pH affects enzyme activity. Explain why a buffer solution is used.",
    points: [
      "A buffer keeps pH constant.",
      "pH is the independent variable being tested.",
      "Keeping pH controlled makes results valid.",
    ],
    keywords: [
      ["buffer", "constant", "pH"],
      ["independent variable", "tested"],
      ["valid", "control"],
    ],
    modelAnswer:
      "A buffer solution keeps the pH constant at the chosen value. This controls the independent variable properly, making the results more valid.",
  }),
  compactQuestion({
    subject: "biology",
    topic: "practical",
    questionText:
      "A student investigates how light intensity affects photosynthesis. State three variables that should be controlled.",
    points: [
      "Controls temperature.",
      "Controls carbon dioxide concentration or source.",
      "Controls plant species, pondweed length, or time measured.",
    ],
    keywords: [
      ["temperature"],
      ["carbon dioxide", "co2", "hydrogencarbonate"],
      ["species", "length", "time"],
    ],
    modelAnswer:
      "The student should control temperature, carbon dioxide availability, and the amount or type of plant material used, such as the same length of pondweed.",
  }),
];

const chemistryTopicFillers = [
  compactQuestion({
    subject: "chemistry",
    topic: "organic-chemistry",
    questionText: "Describe how alkanes and alkenes differ in structure and reactivity.",
    points: [
      "Alkanes contain only single carbon-carbon bonds.",
      "Alkenes contain a carbon-carbon double bond.",
      "Alkenes are more reactive and can decolourise bromine water.",
    ],
    keywords: [
      ["alkane", "single"],
      ["alkene", "double"],
      ["reactive", "bromine", "decolourise"],
    ],
    modelAnswer:
      "Alkanes are saturated hydrocarbons with only single carbon-carbon bonds. Alkenes are unsaturated because they contain a carbon-carbon double bond, so they react with bromine water and turn it colourless.",
  }),
];

const mathsTopicFillers = [
  compactQuestion({
    subject: "further-mathematics",
    topic: "geometry",
    questionText: "A circle has radius 6 cm. Calculate its area in terms of pi.",
    points: ["Uses area equals pi r squared.", "Substitutes r = 6.", "Gives 36 pi cm squared."],
    keywords: [["pi", "r", "squared"], ["6"], ["36", "pi"]],
    modelAnswer: "Area = pi r squared = pi x 6 squared = 36 pi cm squared.",
  }),
  compactQuestion({
    subject: "further-mathematics",
    topic: "statistics",
    questionText: "Explain why the interquartile range is useful when comparing two data sets.",
    points: [
      "It measures spread of the middle 50 percent.",
      "It is less affected by extreme values than the range.",
      "It helps compare consistency between data sets.",
    ],
    keywords: [
      ["middle", "50", "spread"],
      ["extreme", "outlier", "range"],
      ["compare", "consistent"],
    ],
    modelAnswer:
      "The interquartile range measures the spread of the middle 50 percent of values. It is less affected by outliers than the range, so it helps compare how consistent two data sets are.",
  }),
];

const businessTopicFillers = [
  compactQuestion({
    subject: "business",
    topic: "marketing",
    questionText: "Explain why market segmentation can help a business design its marketing mix.",
    points: [
      "Segmentation divides customers into groups.",
      "The business can target products, price, promotion, or place.",
      "This can increase sales by meeting customer needs more closely.",
    ],
    keywords: [
      ["segment", "groups", "customers"],
      ["product", "price", "promotion", "place"],
      ["sales", "needs", "target"],
    ],
    modelAnswer:
      "Market segmentation groups customers by features such as age or income. The business can then adapt its product, price, promotion, or place to meet that group's needs, which may increase sales.",
  }),
];

const geographyTopicFillers = [
  compactQuestion({
    subject: "geography",
    topic: "fieldwork-skills",
    questionText:
      "Explain why using more than one fieldwork site can improve a geographical enquiry.",
    points: [
      "It gives more data for comparison.",
      "It can make the results more representative.",
      "It helps identify patterns or anomalies.",
    ],
    keywords: [
      ["compare", "data"],
      ["representative", "reliable"],
      ["pattern", "anomaly"],
    ],
    modelAnswer:
      "Using more than one fieldwork site gives data that can be compared. This can make conclusions more representative and helps identify patterns or anomalies.",
  }),
];

const historyTopicFillers = [
  compactQuestion({
    subject: "history",
    topic: "depth-study",
    questionText: "Explain why detailed own knowledge is important in a depth-study answer.",
    points: [
      "Specific evidence supports the point being made.",
      "Accurate detail shows understanding of the period.",
      "Evidence helps build a stronger judgement.",
    ],
    keywords: [
      ["specific", "evidence"],
      ["accurate", "period", "context"],
      ["judgement", "argument"],
    ],
    modelAnswer:
      "Detailed own knowledge gives specific evidence for each point. Accurate detail shows understanding of the period and helps build a convincing judgement.",
  }),
];

const englishTopicFillers = [
  compactQuestion({
    subject: "english-language",
    topic: "language-analysis",
    questionText: "Explain how a writer can use imagery to make a setting seem threatening.",
    points: [
      "Identifies imagery or a related language method.",
      "Explains the connotations of the image.",
      "Links the effect to a threatening atmosphere.",
    ],
    keywords: [
      ["imagery", "metaphor", "simile"],
      ["connotation", "suggests"],
      ["threatening", "atmosphere", "reader"],
    ],
    modelAnswer:
      "A writer might use violent imagery to describe the setting, such as comparing trees to claws. The connotations of danger make the place seem threatening to the reader.",
  }),
  compactQuestion({
    subject: "english-literature",
    topic: "themes",
    questionText: "Explain how a writer can develop a theme across a whole text.",
    points: [
      "Identifies a theme such as power, conflict, or identity.",
      "Refers to repeated moments or changes across the text.",
      "Links the theme to the writer's message.",
    ],
    keywords: [
      ["theme", "power", "conflict", "identity"],
      ["repeated", "develop", "change"],
      ["message", "writer"],
    ],
    modelAnswer:
      "A writer can develop a theme by returning to it at key moments and showing how characters change. This helps reveal the writer's wider message.",
  }),
];

function languageTopicQuestion(language: string, topic: "reading" | "grammar"): DemoQuestion[] {
  const prompt =
    topic === "reading"
      ? "Read a short text about free time. Explain how you would identify the writer's opinion and one supporting detail."
      : "Explain how to improve grammatical accuracy in a short written answer.";
  const modelAnswer =
    topic === "reading"
      ? "A strong answer identifies opinion words, then supports the inference with a specific detail from the text."
      : "A strong answer checks verb tense, agreement, word order, and spelling so the meaning is clear.";
  const points =
    topic === "reading"
      ? [
          "Identifies opinion language.",
          "Selects a supporting detail.",
          "Explains the meaning in context.",
        ]
      : [
          "Checks verb tense.",
          "Checks agreement or word order.",
          "Keeps meaning clear and accurate.",
        ];
  const keywords =
    topic === "reading"
      ? [
          ["opinion", "like", "prefer"],
          ["detail", "evidence"],
          ["context", "meaning"],
        ]
      : [
          ["tense", "verb"],
          ["agreement", "word order"],
          ["accurate", "meaning"],
        ];

  return boardSet(language).map((board) =>
    q({
      ...compactQuestion({
        subject: subjectForBoard(language, board),
        topic,
        questionText: prompt,
        points,
        keywords,
        modelAnswer,
      }),
      id: `lang-${language}-${topic}-${board}`,
      qualification: BOARD_QUALIFICATION[board],
      examBoard: board,
    }),
  );
}

const mathBTopicFillers: DemoQuestion[] = ["algebra", "geometry", "statistics"].map((topic) =>
  q({
    ...compactQuestion({
      subject: "mathematics-b",
      topic,
      questionText: `Answer a structured Mathematics B question on ${topic}. Show the method clearly.`,
      points: [
        "States a correct method.",
        "Substitutes or works accurately.",
        "Gives a final answer.",
      ],
      keywords: [["method", "formula"], ["working", "substitute"], ["answer"]],
      modelAnswer:
        "A full-mark response shows the method, carries out the working accurately, and states the final answer clearly.",
    }),
    id: `math-b-${topic}-edexcel`,
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
);

const ADDITIONAL_QUESTIONS: DemoQuestion[] = [
  ...expand("biology", biologyTopicFillers, "bio-topic"),
  ...expand("chemistry", chemistryMore, "chem-extra"),
  ...expand("chemistry", chemistryTopicFillers, "chem-topic"),
  ...expand("physics", physicsMore, "phy-extra"),
  ...expand("mathematics", mathsMore, "math-extra"),
  ...expand("further-mathematics", furtherMathsMore, "fmath-extra"),
  ...expand("further-mathematics", mathsTopicFillers, "fmath-topic"),
  ...mathBTopicFillers,
  ...expand("computer-science", computerScienceMore, "cs-extra"),
  ...expand("business", businessMore, "bus-extra"),
  ...expand("business", businessTopicFillers, "bus-topic"),
  ...expand("economics", economicsMore, "econ-extra"),
  ...expand("psychology", psychologyMore, "psy-extra"),
  ...expand("geography", geographyMore, "geo-extra"),
  ...expand("geography", geographyTopicFillers, "geo-topic"),
  ...expand("history", historyMore, "hist-extra"),
  ...expand("history", historyTopicFillers, "hist-topic"),
  ...expand("english-language", englishLanguageMore, "elang-extra"),
  ...expand("english-language", [englishTopicFillers[0]], "elang-topic"),
  q({
    ...englishLanguageMore[0],
    subject: "english-language-b",
    id: "elang-b-reading-edexcel",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
  q({
    ...englishLanguageMore[1],
    subject: "english-language-b",
    id: "elang-b-writing-edexcel",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
  q({
    ...englishTopicFillers[0],
    subject: "english-language-b",
    id: "elang-b-analysis-edexcel",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
  ...expand("english-literature", englishLiteratureMore, "elit-extra"),
  ...expand("english-literature", [englishTopicFillers[1]], "elit-topic"),
  ...["french", "spanish", "german", "chinese", "arabic"].flatMap(languageQuestions),
  ...["french", "spanish", "german", "chinese", "arabic"].flatMap((language) => [
    ...languageTopicQuestion(language, "reading"),
    ...languageTopicQuestion(language, "grammar"),
  ]),
];

// ─── Assemble full bank ──────────────────────────────────────────────────────

export const DEMO_QUESTIONS: DemoQuestion[] = [
  // Biology — all boards, restored original questions
  ...igcse(bioEcoDeforestation, IGCSE_BOARDS, "bio-eco-deforest"),
  ...gcse(bioEcoDeforestation, GCSE_BOARDS, "bio-eco-deforest"),
  ...igcse(bioEcoEutrophication, IGCSE_BOARDS, "bio-eco-eutroph"),
  ...gcse(bioEcoEutrophication, GCSE_BOARDS, "bio-eco-eutroph"),
  ...igcse(bioEcoCarbon, IGCSE_BOARDS, "bio-eco-carbon"),
  ...gcse(bioEcoCarbon, GCSE_BOARDS, "bio-eco-carbon"),
  ...igcse(bioEnzTemp, IGCSE_BOARDS, "bio-enz-temp"),
  ...gcse(bioEnzTemp, GCSE_BOARDS, "bio-enz-temp"),
  ...igcse(bioEnzLockKey, IGCSE_BOARDS, "bio-enz-lockkey"),
  ...gcse(bioEnzLockKey, GCSE_BOARDS, "bio-enz-lockkey"),
  ...igcse(bioInhMeiosis, IGCSE_BOARDS, "bio-inh-meiosis"),
  ...gcse(bioInhMeiosis, GCSE_BOARDS, "bio-inh-meiosis"),
  ...igcse(bioGasAlveoli, IGCSE_BOARDS, "bio-gas-alveoli"),
  ...gcse(bioGasAlveoli, GCSE_BOARDS, "bio-gas-alveoli"),
  ...igcse(bioTransportHeart, IGCSE_BOARDS, "bio-trans-heart"),
  ...gcse(bioTransportHeart, GCSE_BOARDS, "bio-trans-heart"),

  // Chemistry — all boards
  ...igcse(chemRates, IGCSE_BOARDS, "chem-rates"),
  ...igcse(chemBonding, IGCSE_BOARDS, "chem-bonding"),
  ...gcse(chemBonding, GCSE_BOARDS, "chem-bonding"),
  ...gcse(chemRates, GCSE_BOARDS, "chem-rates"),

  // Physics — all boards
  ...igcse(phyEnergy, IGCSE_BOARDS, "phy-energy"),
  ...igcse(phyElectricity, IGCSE_BOARDS, "phy-electricity"),
  ...gcse(phyElectricity, GCSE_BOARDS, "phy-electricity"),
  ...gcse(phyEnergy, GCSE_BOARDS, "phy-energy"),

  // Maths
  q({
    ...mathAlgebra,
    id: "math-algebra-cambridge",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
  }),
  q({ ...mathAlgebra, id: "math-algebra-aqa", qualification: "GCSE", examBoard: "aqa-gcse" }),
  q({ ...mathAlgebra, id: "math-algebra-ocr", qualification: "GCSE", examBoard: "ocr-gcse" }),
  q({
    ...mathGeometry,
    id: "math-geo-edexcel-a",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
  q({
    ...mathBTrig,
    id: "math-trig-edexcel-b",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),

  // English
  q({ ...engWriting, id: "eng-write-aqa", qualification: "GCSE", examBoard: "aqa-gcse" }),
  q({ ...engWriting, id: "eng-write-ocr", qualification: "GCSE", examBoard: "ocr-gcse" }),
  q({
    ...engAnalysis,
    id: "eng-analysis-cambridge",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
  }),
  q({
    ...engAnalysis,
    subject: "english-language-a",
    id: "eng-analysis-edexcel-a",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
  q({ ...engLitTheme, id: "eng-lit-aqa", qualification: "GCSE", examBoard: "aqa-gcse" }),
  q({
    ...engLitTheme,
    id: "eng-lit-cambridge",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "english-literature",
  }),

  // Business
  q({
    ...busMarketing,
    id: "bus-market-edexcel",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
  }),
  q({ ...busMarketing, id: "bus-market-aqa", qualification: "GCSE", examBoard: "aqa-gcse" }),
  q({ ...busMarketing, id: "bus-market-ocr", qualification: "GCSE", examBoard: "ocr-gcse" }),
  q({
    ...busFinance,
    id: "bus-finance-cambridge",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "business-studies",
  }),

  // Psychology (AQA + OCR only — not offered on IGCSE boards in syllabus)
  q({ ...psyMemory, id: "psy-memory-aqa", qualification: "GCSE", examBoard: "aqa-gcse" }),
  q({ ...psySocial, id: "psy-social-ocr", qualification: "GCSE", examBoard: "ocr-gcse" }),

  // Computer Science — all boards that offer it
  ...(["cambridge-igcse", "edexcel-igcse", "aqa-gcse", "ocr-gcse"] as ExamBoardId[]).flatMap(
    (board) => {
      const qual: Qualification = IGCSE_BOARDS.includes(board) ? "IGCSE" : "GCSE";
      return [
        q({ ...csAlgorithms, id: `cs-algo-${board}`, qualification: qual, examBoard: board }),
        q({ ...csBinary, id: `cs-binary-${board}`, qualification: qual, examBoard: board }),
      ];
    },
  ),
  ...ADDITIONAL_QUESTIONS,
];
