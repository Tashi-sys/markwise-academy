export type KeywordEntry = {
  keyword: string;
  definition: string;
};

export type CommonMistake = {
  topic: string;
  bad: string;
  better: string;
  why: string;
};

export const BIOLOGY_KEYWORD_BANK: Record<string, KeywordEntry[]> = {
  cells: [
    {
      keyword: "cell membrane",
      definition: "Controls movement of substances into and out of the cell.",
    },
    { keyword: "cytoplasm", definition: "Site of many chemical reactions in the cell." },
    { keyword: "nucleus", definition: "Contains genetic material and controls cell activities." },
    { keyword: "mitochondria", definition: "Site of aerobic respiration." },
    { keyword: "ribosomes", definition: "Site of protein synthesis." },
    {
      keyword: "magnification",
      definition: "How many times larger an image is than the real object.",
    },
  ],
  enzymes: [
    {
      keyword: "active site",
      definition: "The part of an enzyme that binds to a specific substrate.",
    },
    { keyword: "substrate", definition: "The molecule an enzyme acts on." },
    {
      keyword: "complementary",
      definition: "Matching shape between enzyme active site and substrate.",
    },
    {
      keyword: "enzyme-substrate complex",
      definition: "Temporary complex formed when substrate binds to enzyme.",
    },
    {
      keyword: "denatured",
      definition: "Active site changes shape so the substrate no longer fits.",
    },
    { keyword: "optimum temperature", definition: "Temperature where enzyme activity is fastest." },
    {
      keyword: "pH",
      definition: "Measure of acidity or alkalinity that affects enzyme shape and activity.",
    },
    { keyword: "rate of reaction", definition: "How quickly a reaction happens." },
  ],
  nutrition: [
    {
      keyword: "balanced diet",
      definition: "Diet containing the correct proportions of nutrients.",
    },
    { keyword: "amylase", definition: "Enzyme that digests starch into sugars." },
    { keyword: "protease", definition: "Enzyme that digests proteins into amino acids." },
    { keyword: "lipase", definition: "Enzyme that digests lipids into fatty acids and glycerol." },
    {
      keyword: "bile",
      definition: "Alkaline fluid that neutralises stomach acid and emulsifies fats.",
    },
    {
      keyword: "villi",
      definition: "Small intestine projections that increase surface area for absorption.",
    },
  ],
  "gas-exchange": [
    { keyword: "alveoli", definition: "Air sacs where gas exchange takes place." },
    {
      keyword: "diffusion",
      definition: "Net movement from a high concentration to a low concentration.",
    },
    {
      keyword: "concentration gradient",
      definition: "Difference in concentration between two areas.",
    },
    { keyword: "thin walls", definition: "Short diffusion distance for rapid gas exchange." },
    { keyword: "ventilation", definition: "Movement of air into and out of the lungs." },
  ],
  transport: [
    {
      keyword: "double circulation",
      definition: "Blood passes through the heart twice in one full circuit.",
    },
    { keyword: "haemoglobin", definition: "Protein in red blood cells that carries oxygen." },
    {
      keyword: "artery",
      definition: "Blood vessel carrying blood away from the heart at high pressure.",
    },
    { keyword: "vein", definition: "Blood vessel carrying blood towards the heart." },
    { keyword: "capillary", definition: "Tiny blood vessel with a thin wall for exchange." },
  ],
  "plant-transport": [
    { keyword: "xylem", definition: "Transports water and mineral ions from roots to leaves." },
    { keyword: "phloem", definition: "Transports sucrose and amino acids around the plant." },
    { keyword: "transpiration", definition: "Loss of water vapour from leaves." },
    {
      keyword: "stomata",
      definition: "Pores in leaves that allow gas exchange and water vapour loss.",
    },
    { keyword: "guard cells", definition: "Cells that control opening and closing of stomata." },
  ],
  respiration: [
    {
      keyword: "aerobic respiration",
      definition: "Respiration using oxygen to release energy from glucose.",
    },
    {
      keyword: "anaerobic respiration",
      definition: "Respiration without oxygen, releasing less energy.",
    },
    { keyword: "glucose", definition: "Sugar molecule used as the main respiratory substrate." },
    { keyword: "lactic acid", definition: "Product of anaerobic respiration in muscles." },
    {
      keyword: "oxygen debt",
      definition: "Extra oxygen needed after exercise to break down lactic acid.",
    },
  ],
  reproduction: [
    { keyword: "gamete", definition: "Sex cell such as sperm, egg, pollen, or ovum." },
    { keyword: "fertilisation", definition: "Fusion of male and female gamete nuclei." },
    { keyword: "zygote", definition: "Cell formed after fertilisation." },
    { keyword: "pollination", definition: "Transfer of pollen from anther to stigma." },
    { keyword: "implantation", definition: "Embedding of the embryo in the uterus lining." },
  ],
  inheritance: [
    { keyword: "allele", definition: "Different version of the same gene." },
    { keyword: "genotype", definition: "Alleles an organism has." },
    {
      keyword: "phenotype",
      definition: "Observable characteristics caused by genes and environment.",
    },
    { keyword: "dominant", definition: "Allele expressed when only one copy is present." },
    { keyword: "recessive", definition: "Allele expressed only when two copies are present." },
    { keyword: "homozygous", definition: "Having two identical alleles for a gene." },
    { keyword: "heterozygous", definition: "Having two different alleles for a gene." },
    { keyword: "variation", definition: "Differences between individuals in a population." },
  ],
  ecology: [
    { keyword: "biodiversity", definition: "Variety of different species in an ecosystem." },
    {
      keyword: "deforestation",
      definition: "Removal of forests, reducing habitats and photosynthesis.",
    },
    {
      keyword: "photosynthesis",
      definition: "Process where plants use light to make glucose from carbon dioxide and water.",
    },
    {
      keyword: "carbon dioxide",
      definition:
        "Greenhouse gas absorbed by plants and released by respiration, combustion, and decomposition.",
    },
    {
      keyword: "greenhouse gas",
      definition: "Gas that absorbs infrared radiation and traps heat in the atmosphere.",
    },
    {
      keyword: "infrared radiation",
      definition: "Thermal radiation emitted by Earth and absorbed by greenhouse gases.",
    },
    {
      keyword: "decomposition",
      definition: "Breakdown of dead material by microorganisms, releasing carbon dioxide.",
    },
    { keyword: "food chain", definition: "Sequence showing energy transfer between organisms." },
    {
      keyword: "bioaccumulation",
      definition: "Build-up of toxins in organisms higher in a food chain.",
    },
    {
      keyword: "eutrophication",
      definition:
        "Nutrient enrichment causing algal bloom, oxygen depletion, and death of aquatic organisms.",
    },
  ],
  variation: [
    { keyword: "mutation", definition: "Change in DNA that can create genetic variation." },
    {
      keyword: "natural selection",
      definition: "Better-adapted organisms are more likely to survive and reproduce.",
    },
    {
      keyword: "adaptation",
      definition: "Feature that helps an organism survive in its environment.",
    },
    {
      keyword: "selective breeding",
      definition: "Humans breed organisms with desirable characteristics.",
    },
  ],
  practical: [
    { keyword: "independent variable", definition: "Variable deliberately changed." },
    { keyword: "dependent variable", definition: "Variable measured." },
    { keyword: "control variable", definition: "Variable kept the same to make the test valid." },
    {
      keyword: "repeat",
      definition: "Carry out the method again to identify anomalies and improve reliability.",
    },
    {
      keyword: "mean",
      definition: "Average calculated by adding values and dividing by the number of values.",
    },
  ],
};

export const COMMON_MISTAKES: CommonMistake[] = [
  {
    topic: "enzymes",
    bad: "The enzyme dies.",
    better:
      "The enzyme denatures because the active site changes shape, so the substrate is no longer complementary.",
    why: "Enzymes are not alive. Examiners want denatured, active site, and complementary shape.",
  },
  {
    topic: "nutrition",
    bad: "Bile breaks down fat.",
    better: "Bile emulsifies fats into small droplets, increasing the surface area for lipase.",
    why: "Bile does not chemically digest fat; it emulsifies it.",
  },
  {
    topic: "respiration",
    bad: "Respiration gives energy.",
    better: "Respiration releases energy from glucose for cell processes.",
    why: "Energy is released, not produced or given.",
  },
  {
    topic: "ecology",
    bad: "Deforestation is bad for the environment.",
    better:
      "Deforestation reduces photosynthesis and decomposition or burning releases carbon dioxide, increasing greenhouse gas concentration.",
    why: "Vague value judgements do not earn marks unless linked to a process.",
  },
  {
    topic: "gas-exchange",
    bad: "The lungs absorb oxygen.",
    better: "Oxygen diffuses from the alveoli into the blood down a concentration gradient.",
    why: "Use diffusion and concentration gradient for gas exchange marks.",
  },
];

export function getTopicKeywords(topic: string): KeywordEntry[] {
  return BIOLOGY_KEYWORD_BANK[topic] ?? [];
}
