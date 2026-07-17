import type { ExamBoardId, Qualification } from "./syllabusConfig";

export type TopicMeta = { name: string; blurb: string };

const CORE_TOPICS = {
  biology: {
    "cell-biology": { name: "Cell biology", blurb: "Cells, microscopy, transport, division." },
    "cell-level-systems": {
      name: "B1 Cell level systems",
      blurb: "Cells, microscopes, transport, enzymes.",
    },
    cells: { name: "Cells and microscopes", blurb: "Structure, function, and microscopy." },
    "biological-molecules": {
      name: "Biological molecules",
      blurb: "Carbohydrates, proteins, lipids, food tests.",
    },
    enzymes: { name: "Enzymes", blurb: "Active site, specificity, temperature & pH." },
    "movement-of-substances": {
      name: "Movement of substances",
      blurb: "Diffusion, osmosis, active transport.",
    },
    organisation: { name: "Organisation", blurb: "Tissues, organs, digestion, circulation." },
    "scaling-up": {
      name: "B2 Scaling up",
      blurb: "Organ systems, exchange surfaces, transport.",
    },
    "organism-level-systems": {
      name: "B3 Organism level systems",
      blurb: "Coordination, hormones, homeostasis.",
    },
    "infection-response": {
      name: "Infection and response",
      blurb: "Pathogens, defences, drugs, immunity.",
    },
    nutrition: { name: "Nutrition", blurb: "Diet, digestion, and absorption." },
    "plant-nutrition": {
      name: "Plant nutrition",
      blurb: "Photosynthesis, limiting factors, leaf structure.",
    },
    "gas-exchange": { name: "Gas exchange", blurb: "Lungs, alveoli, breathing." },
    transport: { name: "Transport in humans", blurb: "Heart, blood, circulation." },
    "plant-transport": { name: "Plant transport", blurb: "Xylem, phloem, transpiration." },
    respiration: { name: "Respiration", blurb: "Aerobic & anaerobic respiration." },
    bioenergetics: { name: "Bioenergetics", blurb: "Photosynthesis and respiration." },
    excretion: { name: "Excretion", blurb: "Kidneys, urea, water balance." },
    "coordination-response": {
      name: "Coordination and response",
      blurb: "Nerves, hormones, reflexes, homeostasis.",
    },
    "homeostasis-response": {
      name: "Homeostasis and response",
      blurb: "Nervous control, hormones, temperature, glucose.",
    },
    "community-level-systems": {
      name: "B4 Community level systems",
      blurb: "Ecosystems, sampling, competition, cycles.",
    },
    "diseases-immunity": {
      name: "Diseases and immunity",
      blurb: "Pathogens, defences, vaccination, immunity.",
    },
    drugs: { name: "Drugs", blurb: "Antibiotics, painkillers, drug development." },
    reproduction: { name: "Reproduction", blurb: "Sexual and asexual reproduction." },
    inheritance: { name: "Inheritance", blurb: "DNA, alleles, Punnett squares." },
    "inheritance-variation-evolution": {
      name: "Inheritance, variation and evolution",
      blurb: "DNA, genetics, selection, evolution.",
    },
    "genes-inheritance-selection": {
      name: "B5 Genes, inheritance and selection",
      blurb: "Genes, inheritance, variation, selection.",
    },
    variation: { name: "Variation and selection", blurb: "Natural selection, adaptation." },
    ecology: { name: "Ecology", blurb: "Ecosystems, carbon cycle, human impact." },
    "organisms-interaction-environment": {
      name: "Organisms and their environment",
      blurb: "Interactions, ecosystems, sampling, human effects.",
    },
    "characteristics-variety": {
      name: "Characteristics and variety",
      blurb: "Living organisms, classification, biodiversity.",
    },
    "human-influences": {
      name: "Human influences",
      blurb: "Pollution, conservation, food security.",
    },
    "global-challenges": {
      name: "B6 Global challenges",
      blurb: "Disease, biotechnology, food security, sustainability.",
    },
    "required-practical-data-skills": {
      name: "Required practical and data skills",
      blurb: "Variables, graphs, calculations, evaluation.",
    },
    "mixed-paper-2-synoptic": {
      name: "Mixed Paper 2 synoptic",
      blurb: "Linked questions across Paper 2 biology topics.",
    },
    "mixed-synoptic-data": {
      name: "Mixed synoptic and data skills",
      blurb: "OCR data handling, practical and synoptic questions.",
    },
    "microorganisms-biotechnology": {
      name: "Microorganisms and biotechnology",
      blurb: "Fermentation, genetic engineering, biotechnology.",
    },
    "biological-resources": {
      name: "Use of biological resources",
      blurb: "Selective breeding, cloning, crop production.",
    },
    practical: { name: "Practical skills", blurb: "Method, variables, evaluation." },
  },
  chemistry: {
    "atomic-structure": {
      name: "Atomic structure",
      blurb: "Protons, neutrons, electrons, isotopes.",
    },
    bonding: { name: "Bonding", blurb: "Ionic, covalent, metallic bonding." },
    "covalent-bonding": {
      name: "Covalent bonding",
      blurb: "Shared pairs, molecules, giant covalent structures.",
    },
    "metallic-bonding": {
      name: "Metallic bonding",
      blurb: "Metal ions, delocalised electrons, alloys and properties.",
    },
    "rates-of-reaction": {
      name: "Rates of reaction",
      blurb: "Collision theory, catalysts, graphs.",
    },
    acids: { name: "Acids and bases", blurb: "pH, neutralisation, salts." },
    "acids-alkalis-salts": {
      name: "Acids, alkalis and salts",
      blurb: "pH, neutralisation, salt preparation and titrations.",
    },
    electrolysis: { name: "Electrolysis", blurb: "Ions, electrodes, products." },
    "chemical-tests": {
      name: "Chemical tests",
      blurb: "Gas tests, flame tests and ion identification.",
    },
    "metals-reactivity": {
      name: "Metals and reactivity",
      blurb: "Reactivity series, displacement and extraction.",
    },
    energetics: {
      name: "Energetics",
      blurb: "Exothermic, endothermic and energy profile diagrams.",
    },
    "reversible-reactions-equilibrium": {
      name: "Reversible reactions and equilibrium",
      blurb: "Dynamic equilibrium, conditions and yield.",
    },
    "air-water": {
      name: "Air and water",
      blurb: "Composition of air, pollution, water treatment.",
    },
    fuels: { name: "Fuels", blurb: "Combustion, crude oil and fuel choices." },
    "organic-chemistry": {
      name: "Organic chemistry",
      blurb: "Hydrocarbons, polymers, functional groups.",
    },
    "organic-intro-alkanes": {
      name: "Organic chemistry intro and alkanes",
      blurb: "Crude oil, homologous series and alkane reactions.",
    },
    alkenes: {
      name: "Alkenes",
      blurb: "Double bonds, bromine water, addition reactions.",
    },
    alcohols: {
      name: "Alcohols",
      blurb: "Functional groups, oxidation and reactions.",
    },
    "carboxylic-acids": {
      name: "Carboxylic acids",
      blurb: "Weak acids, salts, esters and reactions.",
    },
    esters: { name: "Esters", blurb: "Esterification, naming and uses." },
    polymers: {
      name: "Polymers",
      blurb: "Addition polymers, repeat units and disposal.",
    },
    "organic-mixed": {
      name: "Organic chemistry mixed questions",
      blurb: "Mixed organic identification, reactions and explanations.",
    },
    practical: {
      name: "Practical skills",
      blurb: "Methods, variables, accuracy, graphs and evaluation.",
    },
    "quantitative-chemistry": {
      name: "Quantitative chemistry mixed",
      blurb: "Moles, masses, concentrations and reacting quantities.",
    },
    "final-synoptic": {
      name: "Final synoptic questions",
      blurb: "Mixed Edexcel Chemistry questions across the specification.",
    },
    "atomic-structure-and-periodic-table": {
      name: "Atomic structure and the periodic table",
      blurb:
        "States of matter, atomic structure, isotopes, electronic structure and the Periodic Table.",
    },
    "structure-bonding-and-properties": {
      name: "Structure, bonding and the properties of matter",
      blurb: "Ionic, covalent and metallic bonding, carbon structures and nanoparticles.",
    },
    "chemical-changes": {
      name: "Chemical changes",
      blurb: "Metals, reactivity series, redox, metal carbonates and electrolysis.",
    },
    "chemical-analysis": {
      name: "Chemical analysis",
      blurb:
        "Purity, formulations, chromatography, gas tests, ion tests and instrumental analysis.",
    },
    "acids-bases-and-salts": {
      name: "Acids, bases and salts",
      blurb: "Acids, alkalis, neutralisation, pH and salt preparation.",
    },
    periodicity: {
      name: "Periodicity",
      blurb: "Group trends, Group 1, Group 7, noble gases and transition metals.",
    },
    "rate-and-extent-of-chemical-change": {
      name: "The rate and extent of chemical change",
      blurb: "Rates, collision theory, catalysts, reversible reactions, equilibrium and redox.",
    },
    "energy-changes": {
      name: "Energy changes",
      blurb:
        "Exothermic and endothermic reactions, reaction profiles, bond energies and fuel cells.",
    },
    "chemistry-of-the-atmosphere": {
      name: "Chemistry of the atmosphere",
      blurb: "Earth's atmosphere, greenhouse gases, climate change and pollutants.",
    },
    "using-resources": {
      name: "Using resources",
      blurb: "Finite resources, potable water, life cycle assessment and sustainable materials.",
    },
    "paper-1-mixed": {
      name: "Paper 1 mixed practice",
      blurb: "Mixed AQA Paper 1 questions across atomic structure, bonding and energy.",
    },
    "paper-2-mixed": {
      name: "Paper 2 mixed practice",
      blurb: "Mixed AQA Paper 2 questions across rates, organic, analysis and resources.",
    },
    "high-mark-synoptic": {
      name: "High-mark synoptic questions",
      blurb: "Six-mark and linked-topic questions using precise AQA markscheme language.",
    },
    "calculation-heavy": {
      name: "Calculation-heavy questions",
      blurb: "Moles, concentration, titration, gas volume, yield and bond energy calculations.",
    },
    "c1-particles": {
      name: "C1 Particles",
      blurb: "Particle model, atomic structure, isotopes, electronic structure and nanoparticles.",
    },
    "c2-elements-compounds-mixtures": {
      name: "C2 Elements, compounds and mixtures",
      blurb: "Elements, compounds, separation techniques, bonding, structure and polymers.",
    },
    "c3-chemical-reactions": {
      name: "C3 Chemical reactions",
      blurb: "Equations, masses, moles, yields, energy changes, acids and electrolysis.",
    },
    "c4-predicting-identifying-products": {
      name: "C4 Predicting and identifying reactions and products",
      blurb: "Reactivity, extraction, acids, salts, gas tests and ion identification.",
    },
    "c5-monitoring-controlling-reactions": {
      name: "C5 Monitoring and controlling chemical reactions",
      blurb: "Rates, collision theory, reversible reactions, equilibrium and the Haber process.",
    },
    "c6-global-challenges": {
      name: "C6 Global challenges",
      blurb: "Atmosphere, climate change, crude oil, cracking, finite resources and recycling.",
    },
    "paper-1-3-mixed": {
      name: "Paper 1/3 mixed practice",
      blurb: "Mixed OCR Gateway practice for the C1-C3 side of the specification.",
    },
    "paper-2-4-mixed": {
      name: "Paper 2/4 mixed practice",
      blurb: "Mixed OCR Gateway practice for C4-C6, tests, rates and resources.",
    },
    "high-mark-calculation": {
      name: "High-mark and calculation questions",
      blurb: "Longer OCR Gateway explanations, synoptic links and calculation-heavy practice.",
    },
  },
  physics: {
    forces: { name: "Forces and motion", blurb: "Speed, acceleration, Newton's laws." },
    energy: { name: "Energy", blurb: "Stores, transfers, efficiency." },
    waves: { name: "Waves", blurb: "Properties, sound, EM spectrum." },
    electricity: { name: "Electricity", blurb: "Current, voltage, resistance, circuits." },
    magnetism: { name: "Magnetism", blurb: "Fields, motors, generators." },
    "energy-resources-transfers": {
      name: "Energy resources and transfers",
      blurb: "Energy stores, transfers, efficiency, power and renewable resources.",
    },
    "solids-liquids-gases": {
      name: "Solids, liquids and gases",
      blurb: "Density, pressure, particle model, specific heat capacity and gas laws.",
    },
    "magnetism-electromagnetism": {
      name: "Magnetism and electromagnetism",
      blurb: "Magnetic fields, motors, generators, transformers and electromagnetic induction.",
    },
    "radioactivity-particles": {
      name: "Radioactivity and particles",
      blurb: "Atomic structure, radiation, half-life, nuclear equations and particle physics.",
    },
    astrophysics: {
      name: "Astrophysics",
      blurb: "Solar system, stellar evolution, red-shift and the expanding universe.",
    },
    practical: {
      name: "Practical skills",
      blurb: "Variables, graphs, uncertainty, methods and evaluating physics experiments.",
    },
    "paper-1-mixed": {
      name: "Paper 1 mixed practice",
      blurb: "Mixed Edexcel 4PH1 Paper 1 questions across core physics topics.",
    },
    "paper-2-mixed": {
      name: "Paper 2 mixed practice",
      blurb: "Mixed Edexcel 4PH1 Paper 2 questions across advanced and applied topics.",
    },
    "calculation-heavy": {
      name: "Calculation-heavy physics",
      blurb: "Equation selection, substitution, rearranging, units and multi-step calculations.",
    },
    "high-mark-synoptic": {
      name: "High-mark synoptic questions",
      blurb: "Six-mark explanations linking physics concepts, data and exam scenarios.",
    },
    "required-practical-data-analysis": {
      name: "Required practical and data analysis",
      blurb: "Practical methods, graph interpretation, gradients, uncertainties and conclusions.",
    },
    "formula-equation-practice": {
      name: "Formula and equation practice",
      blurb: "Key 4PH1 formulae, unit conversion, rearranging and substitution practice.",
    },
    "motion-forces-energy": {
      name: "Motion, forces and energy",
      blurb: "Cambridge 0625 motion graphs, forces, momentum, energy transfer and power.",
    },
    "thermal-physics": {
      name: "Thermal physics",
      blurb:
        "Particle model, heat transfer, thermal expansion, specific heat capacity and latent heat.",
    },
    "electricity-magnetism": {
      name: "Electricity and magnetism",
      blurb: "Circuits, resistance, electrical power, magnetic fields and electromagnetic effects.",
    },
    "nuclear-physics": {
      name: "Nuclear physics",
      blurb: "Atomic structure, isotopes, radiation, half-life and nuclear safety.",
    },
    "space-physics": {
      name: "Space physics",
      blurb: "Solar system, stars, redshift, orbital motion and the expanding universe.",
    },
    "paper-3-4-mixed": {
      name: "Paper 3/4 mixed practice",
      blurb: "Structured Cambridge 0625 theory practice across the Physics syllabus.",
    },
    "paper-5-6-practical": {
      name: "Paper 5/6 practical practice",
      blurb: "Practical test and Alternative to Practical data, graphs and evaluation.",
    },
    "alternative-to-practical-data-analysis": {
      name: "Alternative to Practical data analysis",
      blurb: "Tables, graph plotting, gradients, variables, accuracy and experimental conclusions.",
    },
    "space-physics-mixed": {
      name: "Space physics mixed questions",
      blurb: "Mixed Cambridge 0625 practice focused on astronomy and cosmology.",
    },
    "extended-response-practice": {
      name: "Extended-response practice",
      blurb: "Longer explanation questions using precise Cambridge markscheme wording.",
    },
    "forces-effects": {
      name: "Forces and their effects",
      blurb: "OxfordAQA 9203 forces, interactions, resultant forces, moments and motion changes.",
    },
    "particle-model": {
      name: "Particle model of matter",
      blurb: "Density, internal energy, changes of state, gas pressure and particle explanations.",
    },
    "generating-distributing-electricity": {
      name: "Generating and distributing electricity",
      blurb: "Power generation, transformers, National Grid, efficiency and electricity supply.",
    },
    "required-practical-skills": {
      name: "Required practical skills",
      blurb: "OxfordAQA practical methods, variables, safety, uncertainty and evaluating data.",
    },
    "paper-1-2-mixed": {
      name: "Paper 1/2 mixed practice",
      blurb: "Mixed OxfordAQA 9203 Physics practice across both main papers.",
    },
    "practical-data-analysis": {
      name: "Practical/data analysis questions",
      blurb: "Graph plotting, gradients, tables, anomalies, uncertainty and conclusions.",
    },
    "atomic-structure": {
      name: "Atomic structure",
      blurb: "AQA 8463 atoms, isotopes, nuclear radiation, half-life and radiation safety.",
    },
  },
  mathematics: {
    algebra: { name: "Algebra", blurb: "Equations, expressions, factorising." },
    geometry: { name: "Geometry", blurb: "Angles, shapes, area, volume." },
    trigonometry: { name: "Trigonometry", blurb: "Sin, cos, tan, Pythagoras." },
    statistics: { name: "Statistics", blurb: "Averages, graphs, probability." },
  },
  psychology: {
    memory: { name: "Memory", blurb: "Models, types, eyewitness testimony." },
    "social-influence": { name: "Social influence", blurb: "Conformity, obedience, resistance." },
    attachment: { name: "Attachment", blurb: "Bowlby, Ainsworth, deprivation." },
    "research-methods": { name: "Research methods", blurb: "Experiments, ethics, data." },
  },
  "computer-science": {
    algorithms: { name: "Algorithms", blurb: "Searching, sorting, efficiency." },
    programming: { name: "Programming", blurb: "Variables, selection, iteration." },
    "data-representation": { name: "Data representation", blurb: "Binary, hex, images, sound." },
    networks: { name: "Networks", blurb: "Internet, protocols, security." },
  },
  business: {
    "business-activity": { name: "Business activity", blurb: "Needs, sectors, enterprise." },
    marketing: { name: "Marketing", blurb: "Research, mix, segmentation." },
    finance: { name: "Finance", blurb: "Costs, revenue, cash flow." },
    "human-resources": { name: "Human resources", blurb: "Recruitment, motivation, training." },
  },
  economics: {
    "market-system": { name: "Market system", blurb: "Demand, supply, price, and elasticity." },
    "government-policy": {
      name: "Government policy",
      blurb: "Taxes, subsidies, regulation, and objectives.",
    },
    "international-trade": {
      name: "International trade",
      blurb: "Specialisation, exchange rates, and protection.",
    },
    development: { name: "Development", blurb: "Living standards, growth, and inequality." },
  },
  geography: {
    "natural-hazards": { name: "Natural hazards", blurb: "Tectonic and weather hazards." },
    rivers: { name: "Rivers", blurb: "Processes, landforms, flooding, and management." },
    "urban-issues": { name: "Urban issues", blurb: "Urbanisation, opportunities, and challenges." },
    "fieldwork-skills": {
      name: "Fieldwork skills",
      blurb: "Methods, data, evaluation, and conclusions.",
    },
  },
  history: {
    "source-skills": {
      name: "Source skills",
      blurb: "Inference, utility, reliability, and provenance.",
    },
    "causation-consequence": {
      name: "Causation and consequence",
      blurb: "Explaining change and significance.",
    },
    "depth-study": { name: "Depth study", blurb: "Events, people, policies, and turning points." },
    "essay-structure": {
      name: "Essay structure",
      blurb: "Judgements, evidence, and balanced arguments.",
    },
  },
  "english-language": {
    reading: { name: "Reading skills", blurb: "Inference, analysis, comparison." },
    writing: { name: "Writing skills", blurb: "Structure, tone, vocabulary." },
    "language-analysis": { name: "Language analysis", blurb: "Techniques, effects, evaluation." },
  },
  "english-literature": {
    themes: { name: "Themes", blurb: "Character, conflict, context." },
    poetry: { name: "Poetry", blurb: "Form, structure, language analysis." },
    prose: { name: "Prose", blurb: "Narrative, setting, writer's methods." },
  },
  language: {
    reading: { name: "Reading comprehension", blurb: "Inference, vocabulary, and opinions." },
    writing: { name: "Writing", blurb: "Tenses, opinions, reasons, and detail." },
    grammar: { name: "Grammar accuracy", blurb: "Verb forms, agreements, and sentence control." },
  },
} satisfies Record<string, Record<string, TopicMeta>>;

/** Topic lists keyed by subject id — aliases share the same topics where appropriate */
export const TOPICS_BY_SUBJECT: Record<string, Record<string, TopicMeta>> = {
  ...CORE_TOPICS,
  "mathematics-a": CORE_TOPICS.mathematics,
  "mathematics-b": CORE_TOPICS.mathematics,
  "additional-mathematics": CORE_TOPICS.mathematics,
  "further-mathematics": CORE_TOPICS.mathematics,
  "further-pure-mathematics": CORE_TOPICS.mathematics,
  "business-studies": CORE_TOPICS.business,
  "english-language-a": CORE_TOPICS["english-language"],
  "english-language-b": CORE_TOPICS["english-language"],
  french: CORE_TOPICS.language,
  spanish: CORE_TOPICS.language,
  german: CORE_TOPICS.language,
  chinese: CORE_TOPICS.language,
  "mandarin-chinese": CORE_TOPICS.language,
  arabic: CORE_TOPICS.language,
};

const EDEXCEL_IGCSE_BIOLOGY_TOPIC_IDS = [
  "characteristics-variety",
  "cells",
  "biological-molecules",
  "enzymes",
  "movement-of-substances",
  "nutrition",
  "plant-nutrition",
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
  "human-influences",
  "microorganisms-biotechnology",
  "biological-resources",
  "practical",
];

const CAMBRIDGE_IGCSE_BIOLOGY_TOPIC_IDS = [
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
  "practical",
];

const AQA_GCSE_BIOLOGY_TOPIC_IDS = [
  "cell-biology",
  "organisation",
  "infection-response",
  "bioenergetics",
  "homeostasis-response",
  "inheritance-variation-evolution",
  "ecology",
  "required-practical-data-skills",
  "mixed-paper-2-synoptic",
];

const OXFORD_AQA_IGCSE_BIOLOGY_TOPIC_IDS = [
  "organisation",
  "bioenergetics",
  "ecology",
  "organisms-interaction-environment",
  "inheritance",
  "variation",
  "practical",
];

const OCR_GCSE_BIOLOGY_TOPIC_IDS = [
  "cell-level-systems",
  "scaling-up",
  "organism-level-systems",
  "community-level-systems",
  "genes-inheritance-selection",
  "global-challenges",
  "practical",
  "mixed-synoptic-data",
];

const EDEXCEL_IGCSE_CHEMISTRY_TOPIC_IDS = [
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
];

const OXFORD_AQA_IGCSE_CHEMISTRY_TOPIC_IDS = [
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

const AQA_GCSE_CHEMISTRY_TOPIC_IDS = [
  "atomic-structure-and-periodic-table",
  "structure-bonding-and-properties",
  "quantitative-chemistry",
  "chemical-changes",
  "energy-changes",
  "rate-and-extent-of-chemical-change",
  "organic-chemistry",
  "chemical-analysis",
  "chemistry-of-the-atmosphere",
  "using-resources",
  "paper-1-mixed",
  "paper-2-mixed",
  "practical",
  "high-mark-synoptic",
  "calculation-heavy",
];

const OCR_GCSE_CHEMISTRY_TOPIC_IDS = [
  "c1-particles",
  "c2-elements-compounds-mixtures",
  "c3-chemical-reactions",
  "c4-predicting-identifying-products",
  "c5-monitoring-controlling-reactions",
  "c6-global-challenges",
  "practical",
  "paper-1-3-mixed",
  "paper-2-4-mixed",
  "high-mark-calculation",
];

const EDEXCEL_IGCSE_PHYSICS_TOPIC_IDS = [
  "forces",
  "electricity",
  "waves",
  "energy-resources-transfers",
  "solids-liquids-gases",
  "magnetism-electromagnetism",
  "radioactivity-particles",
  "astrophysics",
  "practical",
  "paper-1-mixed",
  "paper-2-mixed",
  "calculation-heavy",
  "high-mark-synoptic",
  "required-practical-data-analysis",
  "formula-equation-practice",
];

const CAMBRIDGE_IGCSE_PHYSICS_TOPIC_IDS = [
  "motion-forces-energy",
  "thermal-physics",
  "waves",
  "electricity-magnetism",
  "nuclear-physics",
  "space-physics",
  "practical",
  "paper-3-4-mixed",
  "paper-5-6-practical",
  "calculation-heavy",
  "high-mark-synoptic",
  "formula-equation-practice",
  "alternative-to-practical-data-analysis",
  "space-physics-mixed",
  "extended-response-practice",
];

const OXFORD_AQA_IGCSE_PHYSICS_TOPIC_IDS = [
  "forces-effects",
  "energy",
  "waves",
  "particle-model",
  "electricity-magnetism",
  "generating-distributing-electricity",
  "nuclear-physics",
  "space-physics",
  "required-practical-skills",
  "paper-1-2-mixed",
  "calculation-heavy",
  "high-mark-synoptic",
  "formula-equation-practice",
  "practical-data-analysis",
  "extended-response-practice",
];

const AQA_GCSE_PHYSICS_TOPIC_IDS = [
  "energy",
  "electricity",
  "particle-model",
  "atomic-structure",
  "forces",
  "waves",
  "magnetism-electromagnetism",
  "space-physics",
  "paper-1-mixed",
  "paper-2-mixed",
  "calculation-heavy",
  "required-practical-skills",
  "high-mark-synoptic",
  "formula-equation-practice",
  "extended-response-practice",
];

const TOPIC_IDS_BY_SUBJECT_AND_BOARD: Partial<
  Record<string, Partial<Record<ExamBoardId, string[]>>>
> = {
  biology: {
    "edexcel-igcse": EDEXCEL_IGCSE_BIOLOGY_TOPIC_IDS,
    "cambridge-igcse": CAMBRIDGE_IGCSE_BIOLOGY_TOPIC_IDS,
    "aqa-gcse": AQA_GCSE_BIOLOGY_TOPIC_IDS,
    "oxfordaqa-igcse": OXFORD_AQA_IGCSE_BIOLOGY_TOPIC_IDS,
    "ocr-gcse": OCR_GCSE_BIOLOGY_TOPIC_IDS,
  },
  chemistry: {
    "edexcel-igcse": EDEXCEL_IGCSE_CHEMISTRY_TOPIC_IDS,
    "aqa-gcse": AQA_GCSE_CHEMISTRY_TOPIC_IDS,
    "oxfordaqa-igcse": OXFORD_AQA_IGCSE_CHEMISTRY_TOPIC_IDS,
    "ocr-gcse": OCR_GCSE_CHEMISTRY_TOPIC_IDS,
  },
  physics: {
    "edexcel-igcse": EDEXCEL_IGCSE_PHYSICS_TOPIC_IDS,
    "cambridge-igcse": CAMBRIDGE_IGCSE_PHYSICS_TOPIC_IDS,
    "oxfordaqa-igcse": OXFORD_AQA_IGCSE_PHYSICS_TOPIC_IDS,
    "aqa-gcse": AQA_GCSE_PHYSICS_TOPIC_IDS,
  },
};

export type TopicMapFilter = {
  subjectId: string;
  qualification?: Qualification;
  examBoard?: ExamBoardId;
  syllabusCode?: string;
};

function pickTopics(subjectId: string, topicIds: string[]): Record<string, TopicMeta> {
  const topics = TOPICS_BY_SUBJECT[subjectId] ?? {};
  return topicIds.reduce<Record<string, TopicMeta>>((picked, topicId) => {
    const meta = topics[topicId];
    if (meta) picked[topicId] = meta;
    return picked;
  }, {});
}

export function getTopicsForSubject(subjectId: string): Record<string, TopicMeta> {
  return TOPICS_BY_SUBJECT[subjectId] ?? {};
}

export function getTopicsForSubjectAndSyllabus({
  subjectId,
  qualification,
  examBoard,
}: TopicMapFilter): Record<string, TopicMeta> {
  if (examBoard) {
    const boardTopicIds = TOPIC_IDS_BY_SUBJECT_AND_BOARD[subjectId]?.[examBoard];
    if (boardTopicIds) return pickTopics(subjectId, boardTopicIds);
  }

  if (subjectId === "biology" && qualification === "IGCSE") {
    return pickTopics(subjectId, EDEXCEL_IGCSE_BIOLOGY_TOPIC_IDS);
  }

  return getTopicsForSubject(subjectId);
}

export function humanizeTopicName(topicId: string): string {
  const smallWords = new Set(["and", "or", "of", "the", "in", "to", "for", "with"]);
  return topicId
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index > 0 && smallWords.has(lower)) return lower;
      if (/^[a-z]\d$/i.test(word)) return word.toUpperCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" " );
}

export function getTopicMeta(
  subjectId: string,
  topicId: string,
  filter?: TopicMapFilter,
): TopicMeta {
  const topics = filter ? getTopicsForSubjectAndSyllabus(filter) : getTopicsForSubject(subjectId);
  return (
    topics[topicId] ??
    getTopicsForSubject(subjectId)[topicId] ?? {
      name: humanizeTopicName(topicId),
      blurb: "",
    }
  );
}
