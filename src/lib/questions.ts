export type MarkPoint = {
  /** The markscheme bullet shown in feedback. */
  point: string;
  /** Synonym groups — each group is a list of keyword variants; ALL groups must match (each via any of its variants). */
  keywords: string[][];
};

export type Question = {
  id: string;
  subject: "biology";
  topic: string;
  marks: number;
  difficulty: "easy" | "medium" | "hard";
  prompt: string;
  suggestedMinutes: number;
  hints: string[];
  markscheme: MarkPoint[];
  examinerTip: string;
  modelAnswer: string;
};

export const TOPICS: Record<string, { name: string; blurb: string }> = {
  cells: { name: "Cells and microscopes", blurb: "Structure, function, and microscopy." },
  enzymes: { name: "Enzymes", blurb: "Active site, specificity, temperature & pH." },
  nutrition: { name: "Nutrition", blurb: "Diet, digestion, and absorption." },
  "gas-exchange": { name: "Gas exchange", blurb: "Lungs, alveoli, breathing." },
  transport: { name: "Transport in humans", blurb: "Heart, blood, circulation." },
  "plant-transport": { name: "Plant transport", blurb: "Xylem, phloem, transpiration." },
  respiration: { name: "Respiration", blurb: "Aerobic & anaerobic respiration." },
  reproduction: { name: "Reproduction", blurb: "Sexual and asexual reproduction." },
  inheritance: { name: "Inheritance", blurb: "DNA, alleles, Punnett squares." },
  ecology: { name: "Ecology", blurb: "Ecosystems, carbon cycle, human impact." },
  variation: { name: "Variation and selection", blurb: "Natural selection, adaptation." },
  practical: { name: "Practical skills", blurb: "Method, variables, evaluation." },
};

export const QUESTIONS: Question[] = [
  // --- ECOLOGY ---
  {
    id: "eco-deforestation-4",
    subject: "biology",
    topic: "ecology",
    marks: 4,
    difficulty: "medium",
    suggestedMinutes: 4,
    prompt: "Explain how deforestation can contribute to global warming.",
    hints: [
      "Think about what trees normally remove from the air.",
      "Name the process that removes carbon dioxide.",
      "Mention what happens when trees are burned or decay.",
    ],
    markscheme: [
      {
        point: "Fewer trees / less photosynthesis removes carbon dioxide from the atmosphere.",
        keywords: [["fewer trees", "less trees", "fewer plants", "less photosynthesis", "photosynthesis"], ["carbon dioxide", "co2"]],
      },
      {
        point: "Burning or decomposition of trees releases carbon dioxide.",
        keywords: [["burn", "burning", "burnt", "combust", "decompos", "decay", "rot"], ["carbon dioxide", "co2", "released", "release"]],
      },
      {
        point: "Carbon dioxide is a greenhouse gas that traps heat / infrared radiation.",
        keywords: [["greenhouse", "traps heat", "trap heat", "traps infrared", "traps ir", "infrared", "heat"]],
      },
      {
        point: "This leads to an increase in the Earth's temperature / global warming.",
        keywords: [["global warming", "warmer", "warming", "increase in temperature", "temperature rises", "rise in temperature"]],
      },
    ],
    examinerTip:
      "For full marks, link deforestation to both reduced photosynthesis AND increased CO₂ release, then explain the greenhouse effect.",
    modelAnswer:
      "Deforestation reduces the number of trees, so less carbon dioxide is removed from the atmosphere by photosynthesis. When trees are burned or decompose, additional carbon dioxide is released. Carbon dioxide is a greenhouse gas, so it traps infrared radiation in the atmosphere, causing global warming.",
  },
  {
    id: "eco-eutrophication-6",
    subject: "biology",
    topic: "ecology",
    marks: 6,
    difficulty: "hard",
    suggestedMinutes: 6,
    prompt: "Describe how fertiliser runoff from farmland can cause fish in a nearby river to die.",
    hints: [
      "Start with what fertiliser does when it enters water.",
      "What grows quickly because of the extra nutrients?",
      "Think about light, decomposition, and oxygen.",
    ],
    markscheme: [
      { point: "Fertiliser adds nitrate / mineral ions to the water.", keywords: [["nitrate", "mineral ion", "nutrient"]] },
      { point: "Algae / plants grow rapidly (algal bloom).", keywords: [["algae", "algal", "plants grow", "bloom"]] },
      { point: "Algae block light, so plants below cannot photosynthesise and die.", keywords: [["light", "block"], ["photosynth", "die"]] },
      { point: "Bacteria decompose the dead plants/algae.", keywords: [["bacteria", "decompos", "microorganism"]] },
      { point: "Bacteria respire aerobically, using up oxygen in the water.", keywords: [["oxygen"], ["respir", "use up", "consume", "deplete"]] },
      { point: "Fish suffocate / die due to lack of oxygen.", keywords: [["fish"], ["die", "suffocate", "lack of oxygen"]] },
    ],
    examinerTip:
      "Sequence matters: nutrients → algal bloom → blocked light → plants die → bacteria decompose → oxygen depleted → fish die.",
    modelAnswer:
      "Fertiliser washes into the river and adds nitrate ions. This causes algae to grow rapidly, forming an algal bloom that blocks light to the plants below, which cannot photosynthesise and die. Bacteria decompose the dead plants and algae, respiring aerobically and using up the dissolved oxygen in the water. Fish then suffocate and die due to the lack of oxygen.",
  },
  {
    id: "eco-carbon-cycle-3",
    subject: "biology",
    topic: "ecology",
    marks: 3,
    difficulty: "easy",
    suggestedMinutes: 3,
    prompt: "Describe three processes that release carbon dioxide into the atmosphere.",
    hints: [
      "One happens inside living organisms.",
      "One involves dead things being broken down.",
      "One involves fuel.",
    ],
    markscheme: [
      { point: "Respiration by living organisms releases CO₂.", keywords: [["respir"]] },
      { point: "Decomposition / decay of dead organisms releases CO₂.", keywords: [["decompos", "decay", "rot"]] },
      { point: "Combustion / burning of fossil fuels releases CO₂.", keywords: [["combust", "burning", "burn"], ["fossil", "fuel", "wood", "coal", "oil"]] },
    ],
    examinerTip: "Always name the process precisely — 'breathing out' is not the same as 'respiration' in IGCSE biology.",
    modelAnswer:
      "Respiration by plants and animals releases carbon dioxide. Decomposition of dead organisms by bacteria and fungi also releases CO₂. Combustion of fossil fuels such as coal and oil releases additional carbon dioxide into the atmosphere.",
  },

  // --- ENZYMES ---
  {
    id: "enz-temperature-4",
    subject: "biology",
    topic: "enzymes",
    marks: 4,
    difficulty: "medium",
    suggestedMinutes: 4,
    prompt: "Explain the effect of increasing temperature above the optimum on the rate of an enzyme-controlled reaction.",
    hints: [
      "Think about what happens to the enzyme's shape.",
      "What part of the enzyme matters for binding?",
      "Use the word 'denature'.",
    ],
    markscheme: [
      { point: "Above optimum, the enzyme begins to denature.", keywords: [["denatur"]] },
      { point: "The shape of the active site changes.", keywords: [["active site"], ["shape", "change"]] },
      { point: "Substrate can no longer bind / no enzyme-substrate complex forms.", keywords: [["substrate"], ["bind", "fit", "complex"]] },
      { point: "Rate of reaction decreases / falls to zero.", keywords: [["rate"], ["decrease", "fall", "drop", "slow"]] },
    ],
    examinerTip: "Don't say enzymes are 'killed' — they are proteins, not alive. The keyword is 'denatured'.",
    modelAnswer:
      "Above the optimum temperature, the enzyme denatures. The shape of the active site changes so the substrate can no longer bind to form an enzyme-substrate complex, so the rate of reaction decreases sharply.",
  },
  {
    id: "enz-lock-key-3",
    subject: "biology",
    topic: "enzymes",
    marks: 3,
    difficulty: "easy",
    suggestedMinutes: 3,
    prompt: "Using the lock-and-key model, explain why enzymes are specific.",
    hints: [
      "Compare the enzyme to a lock.",
      "What part of the enzyme is the keyhole?",
      "Why will only one substrate fit?",
    ],
    markscheme: [
      { point: "Each enzyme has an active site with a specific shape.", keywords: [["active site"], ["shape", "specific"]] },
      { point: "Only a substrate with a complementary shape can fit.", keywords: [["complementary", "fit", "match"], ["substrate"]] },
      { point: "So each enzyme only catalyses one reaction.", keywords: [["one reaction", "specific", "catalyse", "catalyze"]] },
    ],
    examinerTip: "Use 'complementary' — examiners love that word.",
    modelAnswer:
      "Each enzyme has an active site with a specific shape. Only a substrate with a complementary shape will fit into the active site, like a key into a lock. This means each enzyme can only catalyse one specific reaction.",
  },

  // --- INHERITANCE ---
  {
    id: "inh-meiosis-3",
    subject: "biology",
    topic: "inheritance",
    marks: 3,
    difficulty: "medium",
    suggestedMinutes: 3,
    prompt: "State three differences between mitosis and meiosis.",
    hints: ["Think about the number of cells produced.", "Think about chromosome number.", "Think about genetic variation."],
    markscheme: [
      { point: "Mitosis produces 2 cells; meiosis produces 4 cells.", keywords: [["2", "two"], ["4", "four"]] },
      { point: "Mitosis daughter cells are diploid; meiosis produces haploid cells.", keywords: [["diploid"], ["haploid"]] },
      { point: "Mitosis produces genetically identical cells; meiosis produces genetically different cells.", keywords: [["identical"], ["different", "variation", "varied"]] },
    ],
    examinerTip: "When the question says 'state three differences', use clear contrast words: mitosis… whereas meiosis…",
    modelAnswer:
      "Mitosis produces two daughter cells whereas meiosis produces four. Mitosis daughter cells are diploid, but meiosis produces haploid gametes. Mitosis produces genetically identical cells, whereas meiosis produces genetically different cells.",
  },

  // --- GAS EXCHANGE ---
  {
    id: "gas-alveoli-4",
    subject: "biology",
    topic: "gas-exchange",
    marks: 4,
    difficulty: "medium",
    suggestedMinutes: 4,
    prompt: "Explain how the structure of an alveolus is adapted for efficient gas exchange.",
    hints: ["Think about surface area.", "Think about distance for diffusion.", "Think about blood supply and moisture."],
    markscheme: [
      { point: "Large surface area increases rate of diffusion.", keywords: [["large surface", "surface area"]] },
      { point: "Thin walls / one cell thick — short diffusion distance.", keywords: [["thin", "one cell"], ["diffusion", "distance"]] },
      { point: "Good blood supply / dense capillary network maintains a concentration gradient.", keywords: [["capillar", "blood supply"], ["concentration gradient", "gradient"]] },
      { point: "Moist surface allows gases to dissolve before diffusing.", keywords: [["moist", "wet"], ["dissolve", "diffus"]] },
    ],
    examinerTip:
      "Never just list adaptations — always say WHY each one helps gas exchange (e.g. 'thin walls so a short diffusion distance').",
    modelAnswer:
      "Alveoli have a very large surface area, which increases the rate of diffusion. Their walls are only one cell thick, giving a short diffusion distance. A dense network of capillaries carries oxygen away and brings CO₂ in, maintaining a steep concentration gradient. The inner surface is moist, allowing gases to dissolve before diffusing across the membrane.",
  },

  // --- TRANSPORT ---
  {
    id: "trans-heart-3",
    subject: "biology",
    topic: "transport",
    marks: 3,
    difficulty: "easy",
    suggestedMinutes: 3,
    prompt: "Explain why the left ventricle has a thicker muscular wall than the right ventricle.",
    hints: ["Where does each ventricle pump blood to?", "Compare the distances.", "Think about pressure."],
    markscheme: [
      { point: "The left ventricle pumps blood around the whole body / systemic circulation.", keywords: [["body", "systemic"], ["pump"]] },
      { point: "The right ventricle only pumps to the lungs (a shorter distance).", keywords: [["lung", "pulmonary"], ["right"]] },
      { point: "The left side needs to generate a higher pressure, so a thicker muscle is needed.", keywords: [["higher pressure", "more pressure", "pressure"], ["thick", "muscle"]] },
    ],
    examinerTip:
      "The word 'pressure' is the keyword examiners want here — not just 'further' or 'stronger'.",
    modelAnswer:
      "The left ventricle pumps blood around the whole body, whereas the right ventricle only pumps blood to the nearby lungs. The left ventricle therefore needs to generate a much higher pressure, so its muscular wall is thicker to contract more forcefully.",
  },
];

export const SUBJECTS = [
  {
    id: "biology",
    name: "Biology",
    blurb: "Practise explanation, description, and practical questions.",
    status: "available" as const,
    accent: "from-emerald-400 to-emerald-600",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    blurb: "Improve calculation, bonding, and practical answers.",
    status: "soon" as const,
    accent: "from-sky-400 to-sky-600",
  },
  {
    id: "physics",
    name: "Physics",
    blurb: "Train equations, explanations, and graph questions.",
    status: "soon" as const,
    accent: "from-indigo-400 to-indigo-600",
  },
  {
    id: "maths",
    name: "Maths",
    blurb: "Practise structured problem-solving questions.",
    status: "soon" as const,
    accent: "from-fuchsia-400 to-fuchsia-600",
  },
  {
    id: "psychology",
    name: "Psychology",
    blurb: "Revise studies, theories, results, and evaluations.",
    status: "soon" as const,
    accent: "from-rose-400 to-rose-600",
  },
];

export function getQuestion(id: string) {
  return QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsByTopic(topic: string) {
  return QUESTIONS.filter((q) => q.topic === topic);
}

export function getTopicMeta(topic: string) {
  return TOPICS[topic] ?? { name: topic, blurb: "" };
}