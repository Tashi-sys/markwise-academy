import type { Question } from "./questionBank";

export const OCR_CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: "ocr-gateway-chemistry-c1-particles-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the arrangement and movement of particles in a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles are closely packed.",
        keywords: [["particles", "closely", "packed"]],
      },
      {
        point: "Particles are arranged in a regular pattern.",
        keywords: [["particles", "arranged", "regular"]],
      },
      {
        point: "Particles vibrate about fixed positions.",
        keywords: [["particles", "vibrate", "about"]],
      },
    ],
    examinerKeywords: ["solid", "closely packed", "regular", "vibrate", "fixed positions"],
    modelAnswer:
      "In a solid, particles are closely packed in a regular arrangement and vibrate about fixed positions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particles in a solid can move freely.",
      "Avoid: Saying particles stop moving completely.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Particle model. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the arrangement and movement of particles in a liquid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles are close together.",
        keywords: [["particles", "close", "together"]],
      },
      {
        point: "Particles are randomly arranged.",
        keywords: [["particles", "randomly", "arranged"]],
      },
      {
        point: "Particles can move around each other.",
        keywords: [["particles", "move", "around"]],
      },
    ],
    examinerKeywords: ["liquid", "close together", "random", "move around"],
    modelAnswer:
      "In a liquid, particles are close together and randomly arranged. They can move around each other.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying liquid particles are fixed in position.",
      "Avoid: Saying liquid particles are far apart.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Particle model. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the arrangement and movement of particles in a gas.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles are far apart.",
        keywords: [["particles", "apart"]],
      },
      {
        point: "Particles are randomly arranged.",
        keywords: [["particles", "randomly", "arranged"]],
      },
      {
        point: "Particles move quickly in all directions.",
        keywords: [["particles", "move", "quickly"]],
      },
    ],
    examinerKeywords: ["gas", "far apart", "random", "move quickly"],
    modelAnswer:
      "In a gas, particles are far apart, randomly arranged and move quickly in all directions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying gas particles are close together.",
      "Avoid: Saying gas particles vibrate in fixed positions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Particle model. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain what happens to particles when a solid melts.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles gain energy.",
        keywords: [["particles", "gain", "energy"]],
      },
      {
        point: "Particles vibrate more strongly.",
        keywords: [["particles", "vibrate", "more"]],
      },
      {
        point:
          "Forces between particles are partly overcome, so particles can move around each other.",
        keywords: [["forces", "particles", "partly"]],
      },
    ],
    examinerKeywords: ["melting", "particles", "energy", "forces"],
    modelAnswer:
      "When a solid melts, particles gain energy and vibrate more strongly. Some forces between particles are overcome, allowing particles to move around each other.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying particles are destroyed.", "Avoid: Saying the atoms expand."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Changes of state. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why the temperature stays constant while a liquid is boiling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Energy is still being transferred to the substance.",
        keywords: [["energy", "still", "being"]],
      },
      {
        point: "The energy is used to overcome forces between particles.",
        keywords: [["energy", "used", "overcome"]],
      },
      {
        point: "The energy is not used to increase the temperature.",
        keywords: [["energy", "used", "increase"]],
      },
    ],
    examinerKeywords: ["boiling", "temperature constant", "overcome forces", "energy"],
    modelAnswer:
      "During boiling, energy is used to overcome forces between particles rather than increase temperature, so the temperature stays constant.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying no energy is transferred during boiling.",
      "Avoid: Saying particles stop moving.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Boiling. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define diffusion.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Diffusion is the spreading out of particles.",
        keywords: [["diffusion", "spreading", "particles"]],
      },
      {
        point:
          "Particles move from an area of higher concentration to an area of lower concentration.",
        keywords: [["particles", "move", "area"]],
      },
    ],
    examinerKeywords: ["diffusion", "higher concentration", "lower concentration", "particles"],
    modelAnswer:
      "Diffusion is the spreading out of particles from an area of higher concentration to an area of lower concentration.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying diffusion only happens in liquids.",
      "Avoid: Forgetting concentration difference.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Diffusion. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why diffusion happens faster at a higher temperature.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles gain kinetic energy.",
        keywords: [["particles", "gain", "kinetic"]],
      },
      {
        point: "Particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Particles spread out more quickly.",
        keywords: [["particles", "spread", "more"]],
      },
    ],
    examinerKeywords: ["diffusion", "temperature", "kinetic energy", "move faster"],
    modelAnswer:
      "At a higher temperature, particles have more kinetic energy and move faster, so they spread out more quickly.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particles become lighter.",
      "Avoid: Saying diffusion stops at high temperature.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Diffusion. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the relative charges of protons, neutrons and electrons.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Proton has charge +1.",
        keywords: [["proton", "charge"]],
      },
      {
        point: "Neutron has charge 0.",
        keywords: [["neutron", "charge"]],
      },
      {
        point: "Electron has charge -1.",
        keywords: [["electron", "charge"]],
      },
    ],
    examinerKeywords: ["proton", "neutron", "electron", "charge"],
    modelAnswer: "A proton has charge +1, a neutron has charge 0 and an electron has charge -1.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying neutrons are positive.", "Avoid: Confusing charge with mass."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atomic structure. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the relative masses of protons, neutrons and electrons.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Proton has relative mass 1.",
        keywords: [["proton", "relative", "mass"]],
      },
      {
        point: "Neutron has relative mass 1.",
        keywords: [["neutron", "relative", "mass"]],
      },
      {
        point: "Electron has very small or negligible relative mass.",
        keywords: [["electron", "very", "small"]],
      },
    ],
    examinerKeywords: ["relative mass", "proton", "neutron", "electron"],
    modelAnswer:
      "Protons and neutrons each have relative mass 1. Electrons have a very small or negligible relative mass.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying electrons have mass 1.", "Avoid: Saying neutrons have no mass."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atomic structure. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has atomic number 19 and mass number 39. Calculate the number of protons, neutrons and electrons.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Protons = 19.",
        keywords: [["protons"]],
      },
      {
        point: "Electrons = 19 for a neutral atom.",
        keywords: [["electrons", "neutral", "atom"]],
      },
      {
        point: "Neutrons = mass number - atomic number.",
        keywords: [["neutrons", "mass", "atomic"]],
      },
      {
        point: "Neutrons = 39 - 19 = 20.",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["atomic number", "mass number", "protons", "neutrons", "electrons"],
    modelAnswer: "The atom has 19 protons and 19 electrons. Neutrons = 39 - 19 = 20.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Adding atomic number and mass number.",
      "Avoid: Forgetting electrons equal protons in a neutral atom.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atomic number and mass number. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define isotope.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Isotopes are atoms of the same element.",
        keywords: [["isotopes", "atoms", "same"]],
      },
      {
        point: "They have the same number of protons.",
        keywords: [["same", "protons"]],
      },
      {
        point: "They have different numbers of neutrons.",
        keywords: [["different", "numbers", "neutrons"]],
      },
    ],
    examinerKeywords: ["isotope", "same element", "same protons", "different neutrons"],
    modelAnswer:
      "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying isotopes have different proton numbers.",
      "Avoid: Saying isotopes are different elements.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Isotopes. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Bromine has isotopes bromine-79 and bromine-81. 50% of bromine atoms are bromine-79 and 50% are bromine-81. Calculate the relative atomic mass of bromine.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Multiply each isotope mass by its percentage abundance.",
        keywords: [["multiply", "each", "isotope"]],
      },
      {
        point: "(79 × 50) + (81 × 50).",
        keywords: [["relative atomic mass", "isotopes"]],
      },
      {
        point: "Divide by 100.",
        keywords: [["divide"]],
      },
      {
        point: "Relative atomic mass = 80.",
        keywords: [["relative", "atomic", "mass"]],
      },
    ],
    examinerKeywords: ["relative atomic mass", "isotopes", "abundance", "80"],
    modelAnswer: "Relative atomic mass = ((79 × 50) + (81 × 50)) ÷ 100 = 80.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Not using abundance.", "Avoid: Forgetting to divide by 100."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Relative atomic mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Write",
    questionText: "Write the electronic structure of an atom with 16 electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "First shell contains 2 electrons.",
        keywords: [["first", "shell", "contains"]],
      },
      {
        point: "Electronic structure is 2,8,6.",
        keywords: [["electronic", "structure"]],
      },
    ],
    examinerKeywords: ["electronic structure", "16 electrons", "2,8,6"],
    modelAnswer: "2,8,6",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing 2,6,8.", "Avoid: Putting too many electrons in the first shell."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Electronic structure. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a sodium atom forms a sodium ion.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A sodium atom loses one electron.",
        keywords: [["sodium", "atom", "loses"]],
      },
      {
        point: "It forms a positive ion.",
        keywords: [["forms", "positive"]],
      },
      {
        point: "The ion has charge +1.",
        keywords: [["charge"]],
      },
    ],
    examinerKeywords: ["sodium", "ion", "loses electron", "Na+"],
    modelAnswer: "A sodium atom loses one electron to form a positive sodium ion with charge +1.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying sodium gains an electron.", "Avoid: Writing Na- instead of Na+."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Ions. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the plum pudding model of the atom.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The atom was thought to be a sphere of positive charge.",
        keywords: [["atom", "thought", "sphere"]],
      },
      {
        point: "Electrons were embedded in the positive sphere.",
        keywords: [["electrons", "were", "embedded"]],
      },
      {
        point: "There was no nucleus in the model.",
        keywords: [["nucleus", "model"]],
      },
    ],
    examinerKeywords: ["plum pudding model", "positive charge", "electrons", "no nucleus"],
    modelAnswer:
      "The plum pudding model described the atom as a sphere of positive charge with electrons embedded in it. It did not include a nucleus.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying it had a nucleus.", "Avoid: Saying electrons were in shells."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atomic model. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how the alpha particle scattering experiment led to the nuclear model.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Most alpha particles passed straight through the foil.",
        keywords: [["most", "alpha", "particles"]],
      },
      {
        point: "This showed the atom is mostly empty space.",
        keywords: [["showed", "atom", "mostly"]],
      },
      {
        point: "Some particles were deflected.",
        keywords: [["some", "particles", "were"]],
      },
      {
        point: "This showed there is a positive nucleus.",
        keywords: [["showed", "positive", "nucleus"]],
      },
      {
        point: "A few particles bounced back.",
        keywords: [["particles", "bounced", "back"]],
      },
      {
        point: "This showed the nucleus is small, dense and contains most of the mass.",
        keywords: [["showed", "nucleus", "small"]],
      },
    ],
    examinerKeywords: ["alpha scattering", "gold foil", "nucleus", "empty space", "dense"],
    modelAnswer:
      "Most alpha particles passed through the foil, showing the atom is mostly empty space. Some were deflected, showing a positive nucleus. A few bounced back, showing the nucleus is small, dense and contains most of the mass.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying most particles bounced back.",
      "Avoid: Not linking observations to conclusions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Nuclear model. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why nanoparticles can have different properties from larger particles of the same substance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Nanoparticles are very small.",
        keywords: [["nanoparticles", "very", "small"]],
      },
      {
        point: "They have a high surface area to volume ratio.",
        keywords: [["high", "surface", "area"]],
      },
      {
        point: "This can make them more reactive or give different properties.",
        keywords: [["make", "them", "more"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "surface area to volume ratio", "properties"],
    modelAnswer:
      "Nanoparticles are very small and have a high surface area to volume ratio, which can make them more reactive and give them different properties.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particle size never affects properties.",
      "Avoid: Forgetting surface area to volume ratio.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Nanoparticles. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give one use and one possible risk of nanoparticles.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Uses include catalysts, sunscreens, medicine or electronics.",
        keywords: [["uses", "include", "catalysts"]],
      },
      {
        point: "Risks include unknown health effects or entering body tissues.",
        keywords: [["risks", "include", "unknown"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "use", "risk", "health"],
    modelAnswer:
      "Nanoparticles can be used in sunscreens. A possible risk is that they may enter body tissues and have unknown health effects.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Giving no risk.", "Avoid: Saying nanoparticles are always completely safe."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Nanoparticle risks. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Explain",
    questionText: "Explain how melting point can be used to test the purity of a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A pure solid has a sharp melting point.",
        keywords: [["pure", "solid", "sharp"]],
      },
      {
        point: "An impure solid melts over a range of temperatures.",
        keywords: [["impure", "solid", "melts"]],
      },
      {
        point: "Impurities usually lower the melting point.",
        keywords: [["impurities", "usually", "lower"]],
      },
    ],
    examinerKeywords: ["purity", "melting point", "sharp", "range", "impure"],
    modelAnswer:
      "A pure solid has a sharp melting point. An impure solid melts over a range of temperatures and usually at a lower temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying pure solids melt over a wide range.", "Avoid: Only checking colour."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Purity. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c1-particles-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c1-particles",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how particle theory and atomic structure help chemists describe substances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Particle theory describes solids, liquids and gases.",
        keywords: [["particle", "theory", "describes"]],
      },
      {
        point: "Changes of state involve changes in particle arrangement and movement.",
        keywords: [["changes", "state", "involve"]],
      },
      {
        point: "Atoms contain protons, neutrons and electrons.",
        keywords: [["atoms", "contain", "protons"]],
      },
      {
        point: "Atomic number is the number of protons.",
        keywords: [["atomic", "protons"]],
      },
      {
        point: "Electronic structure affects chemical properties.",
        keywords: [["electronic", "structure", "affects"]],
      },
      {
        point:
          "Nanoparticles can have different properties because of high surface area to volume ratio.",
        keywords: [["nanoparticles", "different", "properties"]],
      },
    ],
    examinerKeywords: [
      "particle theory",
      "atomic structure",
      "electronic structure",
      "nanoparticles",
    ],
    modelAnswer:
      "Particle theory explains states of matter and changes of state by particle arrangement and movement. Atomic structure uses protons, neutrons and electrons, with atomic number showing protons. Electronic structure affects chemical properties, and nanoparticles can behave differently due to high surface area to volume ratio.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing states of matter.",
      "Avoid: Not linking electronic structure to properties.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define element.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An element contains only one type of atom.",
        keywords: [["element", "contains", "only"]],
      },
      {
        point: "It cannot be broken down by chemical means.",
        keywords: [["cannot", "broken", "down"]],
      },
    ],
    examinerKeywords: ["element", "one type of atom", "chemical means"],
    modelAnswer:
      "An element is a substance containing only one type of atom and cannot be broken down by chemical means.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Confusing element with compound.",
      "Avoid: Saying elements contain different atoms bonded together.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Elements. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define compound.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A compound contains two or more different elements.",
        keywords: [["compound", "contains", "more"]],
      },
      {
        point: "The elements are chemically bonded.",
        keywords: [["elements", "chemically", "bonded"]],
      },
      {
        point: "The elements are combined in fixed proportions.",
        keywords: [["elements", "combined", "fixed"]],
      },
    ],
    examinerKeywords: ["compound", "different elements", "chemically bonded", "fixed proportions"],
    modelAnswer:
      "A compound contains two or more different elements chemically bonded together in fixed proportions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying compounds are mixtures.", "Avoid: Forgetting chemical bonding."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Compounds. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the difference between a compound and a mixture.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A compound has elements chemically bonded.",
        keywords: [["compound", "elements", "chemically"]],
      },
      {
        point: "A mixture has substances not chemically bonded.",
        keywords: [["mixture", "substances", "chemically"]],
      },
      {
        point: "Compounds have fixed composition.",
        keywords: [["compounds", "fixed", "composition"]],
      },
      {
        point: "Mixtures can be separated by physical methods.",
        keywords: [["mixtures", "separated", "physical"]],
      },
    ],
    examinerKeywords: ["compound", "mixture", "chemically bonded", "physical separation"],
    modelAnswer:
      "A compound contains elements chemically bonded in fixed proportions. A mixture contains substances not chemically bonded and can be separated by physical methods.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying mixtures are chemically bonded.",
      "Avoid: Saying compounds can be separated by filtration.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Mixtures. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to separate an insoluble solid from a liquid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use filtration.",
        keywords: [["filtration"]],
      },
      {
        point: "Pour the mixture through filter paper in a funnel.",
        keywords: [["pour", "mixture", "through"]],
      },
      {
        point: "The solid remains as residue and the liquid passes through as filtrate.",
        keywords: [["solid", "remains", "residue"]],
      },
    ],
    examinerKeywords: ["filtration", "residue", "filtrate"],
    modelAnswer:
      "Filter the mixture through filter paper in a funnel. The insoluble solid stays as the residue and the liquid passes through as the filtrate.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using evaporation for an insoluble solid.",
      "Avoid: Confusing residue and filtrate.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Separating mixtures. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to obtain dry crystals from a salt solution.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Heat the solution to evaporate some water.",
        keywords: [["heat", "solution", "evaporate"]],
      },
      {
        point: "Stop when the solution is nearly saturated.",
        keywords: [["stop", "solution", "nearly"]],
      },
      {
        point: "Leave the solution to cool.",
        keywords: [["leave", "solution", "cool"]],
      },
      {
        point: "Crystals form.",
        keywords: [["crystals", "form"]],
      },
      {
        point: "Filter and dry the crystals.",
        keywords: [["filter", "crystals"]],
      },
    ],
    examinerKeywords: ["crystallisation", "evaporation", "cooling", "dry crystals"],
    modelAnswer:
      "Heat the solution until nearly saturated, then leave it to cool so crystals form. Filter the crystals and dry them.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Evaporating completely to dryness.", "Avoid: Forgetting to cool the solution."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Crystallisation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how simple distillation separates a solvent from a solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The solution is heated.",
        keywords: [["solution", "heated"]],
      },
      {
        point: "The solvent evaporates.",
        keywords: [["solvent", "evaporates"]],
      },
      {
        point: "The vapour passes into a condenser.",
        keywords: [["vapour", "passes", "condenser"]],
      },
      {
        point: "The vapour condenses and is collected as liquid.",
        keywords: [["vapour", "condenses", "collected"]],
      },
    ],
    examinerKeywords: ["simple distillation", "evaporation", "condenser", "condensation"],
    modelAnswer:
      "The solution is heated so the solvent evaporates. The vapour passes into a condenser, condenses back into a liquid and is collected.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying the solute evaporates first.", "Avoid: Forgetting condensation."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Distillation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to carry out paper chromatography to separate dyes.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Draw a pencil baseline.",
        keywords: [["draw", "pencil", "baseline"]],
      },
      {
        point: "Place a small spot of dye on the baseline.",
        keywords: [["place", "small", "spot"]],
      },
      {
        point: "Put the paper in solvent with the solvent below the baseline.",
        keywords: [["paper", "solvent", "below"]],
      },
      {
        point: "Allow the solvent to rise.",
        keywords: [["allow", "solvent", "rise"]],
      },
      {
        point: "Mark the solvent front.",
        keywords: [["mark", "solvent", "front"]],
      },
    ],
    examinerKeywords: ["chromatography", "baseline", "solvent", "solvent front"],
    modelAnswer:
      "Draw a pencil baseline and place a dye spot on it. Put the paper in solvent below the baseline, allow the solvent to rise, then mark the solvent front.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Drawing the baseline in ink.", "Avoid: Putting the solvent above the spot."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Chromatography. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A dye moves 2.5 cm and the solvent front moves 5.0 cm. Calculate the Rf value.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rf = distance moved by substance ÷ distance moved by solvent front.",
        keywords: [["distance", "moved", "substance"]],
      },
      {
        point: "Rf = 2.5 ÷ 5.0.",
        keywords: [["rf", "chromatography"]],
      },
      {
        point: "Rf = 0.50.",
        keywords: [["rf", "chromatography"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "solvent front", "0.50"],
    modelAnswer: "Rf = 2.5 ÷ 5.0 = 0.50.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing solvent front distance by spot distance.",
      "Avoid: Adding units to Rf.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rf values. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define ionic bond.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An ionic bond is a strong electrostatic attraction.",
        keywords: [["ionic", "bond", "strong"]],
      },
      {
        point: "The attraction is between oppositely charged ions.",
        keywords: [["attraction", "oppositely", "charged"]],
      },
    ],
    examinerKeywords: ["ionic bond", "electrostatic attraction", "oppositely charged ions"],
    modelAnswer:
      "An ionic bond is a strong electrostatic attraction between oppositely charged ions.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying ionic bonding is sharing electrons.",
      "Avoid: Forgetting oppositely charged ions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Ionic bonding. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how sodium chloride forms from sodium and chlorine.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium loses one electron.",
        keywords: [["sodium", "loses", "electron"]],
      },
      {
        point: "Sodium forms Na+.",
        keywords: [["sodium", "forms"]],
      },
      {
        point: "Chlorine gains one electron.",
        keywords: [["chlorine", "gains", "electron"]],
      },
      {
        point: "Na+ and Cl- ions attract by strong electrostatic forces.",
        keywords: [["ions", "attract", "strong"]],
      },
    ],
    examinerKeywords: ["sodium chloride", "electron transfer", "Na+", "Cl-", "ionic"],
    modelAnswer:
      "Sodium loses one electron to form Na+. Chlorine gains one electron to form Cl-. The oppositely charged ions are held together by strong electrostatic attraction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying electrons are shared.", "Avoid: Writing the wrong ion charges."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Ionic bonding. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why ionic compounds have high melting points.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices.",
        keywords: [["ionic", "compounds", "giant"]],
      },
      {
        point: "There are strong electrostatic attractions between oppositely charged ions.",
        keywords: [["strong", "electrostatic", "attractions"]],
      },
      {
        point: "A lot of energy is needed to overcome these attractions.",
        keywords: [["energy", "overcome", "these"]],
      },
      {
        point: "This gives high melting points.",
        keywords: [["gives", "high", "melting"]],
      },
    ],
    examinerKeywords: ["ionic", "giant lattice", "electrostatic attraction", "melting point"],
    modelAnswer:
      "Ionic compounds have giant ionic lattices with strong electrostatic attractions between oppositely charged ions, so a lot of energy is needed to melt them.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying weak intermolecular forces are broken.",
      "Avoid: Forgetting giant lattice.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Ionic properties. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define covalent bond.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A covalent bond is a shared pair of electrons.",
        keywords: [["covalent", "bond", "shared"]],
      },
      {
        point: "The shared pair is between two atoms.",
        keywords: [["shared", "pair", "atoms"]],
      },
    ],
    examinerKeywords: ["covalent bond", "shared pair", "electrons"],
    modelAnswer: "A covalent bond is a shared pair of electrons between two atoms.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying covalent bonding is electron transfer.",
      "Avoid: Forgetting shared pair.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Covalent bonding. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why simple molecular substances usually have low boiling points.",
    marks: 4,
    markSchemePoints: [
      {
        point: "They contain small molecules.",
        keywords: [["contain", "small", "molecules"]],
      },
      {
        point: "There are weak intermolecular forces between molecules.",
        keywords: [["weak", "intermolecular", "forces"]],
      },
      {
        point: "Only these forces are overcome when boiling.",
        keywords: [["only", "these", "forces"]],
      },
      {
        point: "Little energy is needed.",
        keywords: [["little", "energy"]],
      },
    ],
    examinerKeywords: ["simple molecular", "low boiling point", "intermolecular forces"],
    modelAnswer:
      "Simple molecular substances have small molecules with weak intermolecular forces between them. Only these forces are overcome when boiling, so little energy is needed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying covalent bonds inside molecules are broken.",
      "Avoid: Forgetting intermolecular forces.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Simple molecules. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why diamond has a high melting point.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Diamond has a giant covalent structure.",
        keywords: [["diamond", "giant", "covalent"]],
      },
      {
        point: "Each carbon atom bonds to four other carbon atoms.",
        keywords: [["each", "carbon", "atom"]],
      },
      {
        point: "There are many strong covalent bonds.",
        keywords: [["many", "strong", "covalent"]],
      },
      {
        point: "A lot of energy is needed to break the bonds.",
        keywords: [["energy", "break", "bonds"]],
      },
    ],
    examinerKeywords: ["diamond", "giant covalent", "strong covalent bonds", "high melting point"],
    modelAnswer:
      "Diamond has a giant covalent structure where each carbon atom bonds to four others. Many strong covalent bonds must be broken, so a lot of energy is needed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying diamond has weak intermolecular forces.",
      "Avoid: Saying each carbon bonds to three others.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Giant covalent structures. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why graphite conducts electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Each carbon atom bonds to three other carbon atoms.",
        keywords: [["each", "carbon", "atom"]],
      },
      {
        point: "One electron from each carbon atom is delocalised.",
        keywords: [["electron", "each", "carbon"]],
      },
      {
        point: "Delocalised electrons can move and carry charge.",
        keywords: [["delocalised", "electrons", "move"]],
      },
    ],
    examinerKeywords: ["graphite", "delocalised electrons", "conduct electricity"],
    modelAnswer:
      "Graphite conducts because each carbon atom has one delocalised electron that can move through the structure and carry charge.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying ions move in graphite.",
      "Avoid: Saying graphite has no mobile electrons.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Graphite. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe metallic bonding.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metals contain positive metal ions.",
        keywords: [["metals", "contain", "positive"]],
      },
      {
        point: "There are delocalised electrons.",
        keywords: [["delocalised", "electrons"]],
      },
      {
        point:
          "There is strong electrostatic attraction between positive ions and delocalised electrons.",
        keywords: [["strong", "electrostatic", "attraction"]],
      },
    ],
    examinerKeywords: ["metallic bonding", "positive ions", "delocalised electrons"],
    modelAnswer:
      "Metallic bonding is the strong electrostatic attraction between positive metal ions and delocalised electrons.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying metallic bonding is sharing pairs of electrons.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Metallic bonding. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why metals conduct electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metals contain delocalised electrons.",
        keywords: [["metals", "contain", "delocalised"]],
      },
      {
        point: "The electrons are free to move.",
        keywords: [["electrons", "free", "move"]],
      },
      {
        point: "The electrons carry charge through the metal.",
        keywords: [["electrons", "carry", "charge"]],
      },
    ],
    examinerKeywords: ["metals", "conduct electricity", "delocalised electrons"],
    modelAnswer:
      "Metals conduct electricity because they contain delocalised electrons that are free to move and carry charge.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying ions move through solid metals.", "Avoid: Forgetting charge carriers."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Metal properties. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why alloys are harder than pure metals.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alloys contain atoms of different sizes.",
        keywords: [["alloys", "contain", "atoms"]],
      },
      {
        point: "The regular layers of metal atoms are distorted.",
        keywords: [["regular", "layers", "metal"]],
      },
      {
        point: "The layers cannot slide over each other easily.",
        keywords: [["layers", "cannot", "slide"]],
      },
    ],
    examinerKeywords: ["alloy", "harder", "different sized atoms", "layers"],
    modelAnswer:
      "Alloys contain atoms of different sizes, which distort the regular layers of metal atoms. This stops layers sliding easily, making alloys harder.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying alloys are softer because they are mixtures.",
      "Avoid: Forgetting layers.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Alloys. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why polymers are usually solid at room temperature.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Polymers are very large molecules.",
        keywords: [["polymers", "very", "large"]],
      },
      {
        point: "There are intermolecular forces between polymer chains.",
        keywords: [["intermolecular", "forces", "polymer"]],
      },
      {
        point: "More energy is needed to overcome these forces.",
        keywords: [["more", "energy", "overcome"]],
      },
    ],
    examinerKeywords: ["polymers", "large molecules", "intermolecular forces"],
    modelAnswer:
      "Polymers are very large molecules with intermolecular forces between chains, so more energy is needed to overcome these forces.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying polymers are ionic lattices.",
      "Avoid: Saying polymers are always gases.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Polymers. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c2-ecm-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c2-elements-compounds-mixtures",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how bonding and structure affect the properties of ionic, covalent and metallic substances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices with strong electrostatic attractions.",
        keywords: [["ionic", "compounds", "giant"]],
      },
      {
        point: "Ionic compounds have high melting points and conduct when molten or dissolved.",
        keywords: [["ionic", "compounds", "high"]],
      },
      {
        point:
          "Simple molecular substances have weak intermolecular forces and low boiling points.",
        keywords: [["simple", "molecular", "substances"]],
      },
      {
        point: "Giant covalent structures have many strong covalent bonds and high melting points.",
        keywords: [["giant", "covalent", "structures"]],
      },
      {
        point: "Metals contain delocalised electrons that carry charge.",
        keywords: [["metals", "contain", "delocalised"]],
      },
      {
        point: "Alloys are harder because different sized atoms distort metal layers.",
        keywords: [["alloys", "harder", "different"]],
      },
    ],
    examinerKeywords: ["bonding", "structure", "properties", "ionic", "covalent", "metallic"],
    modelAnswer:
      "Ionic compounds have giant lattices and strong attractions, so they have high melting points and conduct when ions are mobile. Simple molecular substances have weak intermolecular forces and low boiling points. Giant covalent structures have many strong bonds. Metals conduct using delocalised electrons, and alloys are harder because layers are distorted.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using the same explanation for every structure.",
      "Avoid: Confusing covalent bonds with intermolecular forces.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the law of conservation of mass.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Mass is conserved in a chemical reaction.",
        keywords: [["mass", "conserved", "chemical"]],
      },
      {
        point: "The total mass of reactants equals the total mass of products.",
        keywords: [["total", "mass", "reactants"]],
      },
    ],
    examinerKeywords: ["conservation of mass", "reactants", "products", "total mass"],
    modelAnswer:
      "Mass is conserved in a chemical reaction, so the total mass of reactants equals the total mass of products.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying mass always disappears.", "Avoid: Only comparing number of substances."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Conservation of mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "equation",
    questionType: "Write",
    questionText: "Write the word equation for the reaction between magnesium and oxygen.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Correct reactants: magnesium and oxygen.",
        keywords: [["correct", "reactants", "magnesium"]],
      },
      {
        point: "Correct product: magnesium oxide.",
        keywords: [["correct", "product", "magnesium"]],
      },
    ],
    examinerKeywords: ["magnesium", "oxygen", "magnesium oxide", "word equation"],
    modelAnswer: "magnesium + oxygen → magnesium oxide",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing magnesium hydroxide.", "Avoid: Forgetting oxygen."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Word equations. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "equation",
    questionType: "Balance",
    questionText: "Balance the equation: Mg + O2 → MgO.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Oxygen atoms are balanced.",
        keywords: [["oxygen", "atoms", "balanced"]],
      },
      {
        point: "Balanced equation is 2Mg + O2 → 2MgO.",
        keywords: [["balanced", "equation", "2mgo"]],
      },
    ],
    examinerKeywords: ["balance", "magnesium", "oxygen", "magnesium oxide"],
    modelAnswer: "2Mg + O2 → 2MgO",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Changing formulae instead of coefficients.", "Avoid: Writing MgO2."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Balancing equations. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of magnesium nitrate, Mg(NO3)2. Ar: Mg = 24, N = 14, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "NO3 = 14 + 3 × 16 = 62.",
        keywords: [["relative formula mass", "magnesium nitrate"]],
      },
      {
        point: "Two nitrate groups = 2 × 62 = 124.",
        keywords: [["nitrate", "groups"]],
      },
      {
        point: "Mr = 24 + 124 = 148.",
        keywords: [["relative formula mass", "magnesium nitrate"]],
      },
    ],
    examinerKeywords: ["relative formula mass", "magnesium nitrate", "148"],
    modelAnswer: "Mr = 24 + 2(14 + 3 × 16) = 148.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting two nitrate groups.", "Avoid: Counting oxygen only once."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Relative formula mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "Calculate the number of moles in 6.0 g of carbon. Ar: C = 12.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Moles = mass ÷ Ar.",
        keywords: [["moles", "mass"]],
      },
      {
        point: "Moles = 6.0 ÷ 12 = 0.50 mol.",
        keywords: [["moles"]],
      },
    ],
    examinerKeywords: ["moles", "mass", "carbon", "0.50 mol"],
    modelAnswer: "Moles = 6.0 ÷ 12 = 0.50 mol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Multiplying mass by Ar.", "Avoid: Forgetting units."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Moles. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the mass of calcium oxide formed from 10.0 g of calcium carbonate. CaCO3 → CaO + CO2. Mr: CaCO3 = 100, CaO = 56.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles CaCO3 = 10.0 ÷ 100 = 0.100 mol.",
        keywords: [["moles", "caco3"]],
      },
      {
        point: "Mole ratio CaCO3 : CaO is 1 : 1.",
        keywords: [["mole", "ratio", "caco3"]],
      },
      {
        point: "Moles CaO = 0.100 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mass = moles × Mr.",
        keywords: [["mass", "moles"]],
      },
      {
        point: "Mass CaO = 0.100 × 56 = 5.60 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["reacting masses", "calcium carbonate", "calcium oxide", "5.60 g"],
    modelAnswer:
      "Moles of CaCO3 = 10.0 ÷ 100 = 0.100 mol. Ratio is 1:1, so 0.100 mol CaO forms. Mass = 0.100 × 56 = 5.60 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: ["Avoid: Using 100 as the Mr of calcium oxide.", "Avoid: Ignoring mole ratio."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reacting masses. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A reaction has a theoretical yield of 25.0 g and an actual yield of 20.0 g. Calculate the percentage yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage yield = actual yield ÷ theoretical yield × 100.",
        keywords: [["percentage", "yield", "actual"]],
      },
      {
        point: "Percentage yield = 20.0 ÷ 25.0 × 100.",
        keywords: [["percentage", "yield"]],
      },
      {
        point: "Percentage yield = 80.0%.",
        keywords: [["percentage", "yield"]],
      },
    ],
    examinerKeywords: ["percentage yield", "actual yield", "theoretical yield", "80%"],
    modelAnswer: "Percentage yield = 20.0 ÷ 25.0 × 100 = 80.0%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing theoretical by actual.", "Avoid: Forgetting ×100."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Percentage yield. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by atom economy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Atom economy measures how much reactant mass becomes the desired product.",
        keywords: [["atom", "economy", "measures"]],
      },
      {
        point: "High atom economy means less waste is produced.",
        keywords: [["high", "atom", "economy"]],
      },
    ],
    examinerKeywords: ["atom economy", "desired product", "waste"],
    modelAnswer:
      "Atom economy is the percentage of reactant mass that becomes the desired product. A high atom economy means less waste.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Confusing atom economy with percentage yield.",
      "Avoid: Saying it measures rate.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atom economy. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by an exothermic reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An exothermic reaction transfers energy to the surroundings.",
        keywords: [["exothermic", "reaction", "transfers"]],
      },
      {
        point: "The temperature of the surroundings increases.",
        keywords: [["temperature", "surroundings", "increases"]],
      },
    ],
    examinerKeywords: ["exothermic", "energy transferred", "surroundings"],
    modelAnswer:
      "An exothermic reaction transfers energy to the surroundings, causing the temperature of the surroundings to increase.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying energy is taken in.", "Avoid: Saying temperature decreases."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Exothermic reactions. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by an endothermic reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An endothermic reaction takes in energy from the surroundings.",
        keywords: [["endothermic", "reaction", "takes"]],
      },
      {
        point: "The temperature of the surroundings decreases.",
        keywords: [["temperature", "surroundings", "decreases"]],
      },
    ],
    examinerKeywords: ["endothermic", "energy taken in", "surroundings"],
    modelAnswer:
      "An endothermic reaction takes in energy from the surroundings, causing the temperature of the surroundings to decrease.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying energy is released.", "Avoid: Confusing endothermic with exothermic."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Endothermic reactions. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the reaction profile for an exothermic reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Reactants are at a higher energy level than products.",
        keywords: [["reactants", "higher", "energy"]],
      },
      {
        point: "Products are at a lower energy level.",
        keywords: [["products", "lower", "energy"]],
      },
      {
        point: "There is an activation energy barrier.",
        keywords: [["activation", "energy", "barrier"]],
      },
    ],
    examinerKeywords: ["reaction profile", "exothermic", "activation energy"],
    modelAnswer:
      "In an exothermic reaction profile, reactants are higher in energy than products and there is an activation energy barrier.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Putting products higher than reactants.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reaction profiles. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State whether bond breaking and bond making are endothermic or exothermic.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Bond breaking is endothermic.",
        keywords: [["bond", "breaking", "endothermic"]],
      },
      {
        point: "Bond making is exothermic.",
        keywords: [["bond", "making", "exothermic"]],
      },
    ],
    examinerKeywords: ["bond breaking", "bond making", "endothermic", "exothermic"],
    modelAnswer: "Bond breaking is endothermic and bond making is exothermic.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying bond breaking releases energy.", "Avoid: Reversing the terms."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Bond energies. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for H2 + Cl2 → 2HCl. Bond energies: H-H = 436, Cl-Cl = 242, H-Cl = 431 kJ/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Energy in = 436 + 242 = 678 kJ/mol.",
        keywords: [["energy"]],
      },
      {
        point: "Energy out = 2 × 431 = 862 kJ/mol.",
        keywords: [["energy"]],
      },
      {
        point: "Energy change = energy in - energy out.",
        keywords: [["energy", "change"]],
      },
      {
        point: "Energy change = 678 - 862.",
        keywords: [["energy", "change"]],
      },
      {
        point: "Energy change = -184 kJ/mol.",
        keywords: [["energy", "change", "-184"]],
      },
    ],
    examinerKeywords: ["bond energy", "energy change", "-184"],
    modelAnswer:
      "Energy in = 436 + 242 = 678 kJ/mol. Energy out = 2 × 431 = 862 kJ/mol. Energy change = 678 - 862 = -184 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: ["Avoid: Forgetting two H-Cl bonds.", "Avoid: Doing energy out minus energy in."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Bond energy calculation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "equation",
    questionType: "Write",
    questionText: "Write the ionic equation for neutralisation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Hydrogen ions react with hydroxide ions.",
        keywords: [["hydrogen", "ions", "react"]],
      },
      {
        point: "H+ + OH- → H2O.",
        keywords: [["neutralisation", "h+"]],
      },
    ],
    examinerKeywords: ["neutralisation", "H+", "OH-", "water"],
    modelAnswer: "H+ + OH- → H2O",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing hydrogen gas as product.", "Avoid: Forgetting hydroxide ions."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Neutralisation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products when hydrochloric acid reacts with calcium carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Calcium chloride.",
        keywords: [["calcium", "chloride"]],
      },
      {
        point: "Water.",
        keywords: [["water"]],
      },
      {
        point: "Carbon dioxide.",
        keywords: [["carbon", "dioxide"]],
      },
    ],
    examinerKeywords: ["acid", "carbonate", "calcium chloride", "carbon dioxide"],
    modelAnswer:
      "Hydrochloric acid reacts with calcium carbonate to form calcium chloride, water and carbon dioxide.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing hydrogen gas.", "Avoid: Forgetting water."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Acids and carbonates. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define electrolysis.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Electrolysis is the decomposition of an ionic compound.",
        keywords: [["electrolysis", "decomposition", "ionic"]],
      },
      {
        point: "It uses electricity.",
        keywords: [["uses", "electricity"]],
      },
    ],
    examinerKeywords: ["electrolysis", "decomposition", "ionic compound", "electricity"],
    modelAnswer: "Electrolysis is the decomposition of an ionic compound using electricity.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying electrolysis joins substances.", "Avoid: Forgetting electricity."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Electrolysis. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State where cations and anions move during electrolysis.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Cations move to the cathode.",
        keywords: [["cations", "move", "cathode"]],
      },
      {
        point: "Anions move to the anode.",
        keywords: [["anions", "move", "anode"]],
      },
    ],
    examinerKeywords: ["cations", "anions", "cathode", "anode"],
    modelAnswer: "Cations move to the cathode and anions move to the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Reversing cathode and anode.", "Avoid: Forgetting cations are positive."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Electrolysis. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "equation",
    questionType: "Write",
    questionText:
      "Write the half-equation at the cathode during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Lead ions gain electrons.",
        keywords: [["lead", "ions", "gain"]],
      },
      {
        point: "Pb2+ + 2e- → Pb.",
        keywords: [["lead bromide", "cathode"]],
      },
    ],
    examinerKeywords: ["lead bromide", "cathode", "Pb2+", "half-equation"],
    modelAnswer: "Pb2+ + 2e- → Pb",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing oxidation at the cathode.", "Avoid: Forgetting two electrons."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Half-equations. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define oxidation and reduction in terms of electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Oxidation is loss of electrons.",
        keywords: [["oxidation", "loss", "electrons"]],
      },
      {
        point: "Reduction is gain of electrons.",
        keywords: [["reduction", "gain", "electrons"]],
      },
    ],
    examinerKeywords: ["oxidation", "reduction", "electrons", "OIL RIG"],
    modelAnswer: "Oxidation is loss of electrons and reduction is gain of electrons.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Reversing oxidation and reduction.", "Avoid: Forgetting electrons."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Oxidation and reduction. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c3-reactions-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c3-chemical-reactions",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how energy, moles and electrons are involved in chemical reactions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Balanced equations show reacting ratios.",
        keywords: [["balanced", "equations", "show"]],
      },
      {
        point: "Moles can be used to calculate reacting masses.",
        keywords: [["moles", "used", "calculate"]],
      },
      {
        point: "Exothermic reactions transfer energy to the surroundings.",
        keywords: [["exothermic", "reactions", "transfer"]],
      },
      {
        point: "Endothermic reactions take in energy from the surroundings.",
        keywords: [["endothermic", "reactions", "take"]],
      },
      {
        point: "Oxidation is loss of electrons.",
        keywords: [["oxidation", "loss", "electrons"]],
      },
      {
        point: "Reduction is gain of electrons.",
        keywords: [["reduction", "gain", "electrons"]],
      },
    ],
    examinerKeywords: ["chemical reactions", "moles", "energy", "electrons", "redox"],
    modelAnswer:
      "Balanced equations show reacting ratios, which can be used with moles to calculate reacting masses. Reactions can be exothermic or endothermic depending on energy transfer. Electron transfer also explains redox, where oxidation is loss of electrons and reduction is gain of electrons.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing one part of reactions.",
      "Avoid: Reversing oxidation and reduction.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what the reactivity series shows.",
    marks: 2,
    markSchemePoints: [
      {
        point: "It shows metals in order of reactivity.",
        keywords: [["shows", "metals", "order"]],
      },
      {
        point: "The most reactive metals are at the top.",
        keywords: [["most", "reactive", "metals"]],
      },
    ],
    examinerKeywords: ["reactivity series", "metals", "order", "reactivity"],
    modelAnswer:
      "The reactivity series shows metals in order of reactivity, with the most reactive metals at the top.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying it shows melting points.",
      "Avoid: Putting least reactive metals at the top.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reactivity series. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products when zinc reacts with dilute hydrochloric acid.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Zinc chloride is formed.",
        keywords: [["zinc", "chloride", "formed"]],
      },
      {
        point: "Hydrogen gas is formed.",
        keywords: [["hydrogen", "formed"]],
      },
    ],
    examinerKeywords: ["zinc", "hydrochloric acid", "zinc chloride", "hydrogen"],
    modelAnswer: "Zinc reacts with hydrochloric acid to form zinc chloride and hydrogen.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing carbon dioxide.", "Avoid: Writing zinc sulfate."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Metal reactions. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why magnesium displaces copper from copper sulfate solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Magnesium is more reactive than copper.",
        keywords: [["magnesium", "more", "reactive"]],
      },
      {
        point: "Magnesium atoms lose electrons to form magnesium ions.",
        keywords: [["magnesium", "atoms", "lose"]],
      },
      {
        point: "Copper ions gain electrons to form copper atoms.",
        keywords: [["copper", "ions", "gain"]],
      },
      {
        point: "Copper is displaced.",
        keywords: [["copper", "displaced"]],
      },
    ],
    examinerKeywords: ["magnesium", "copper sulfate", "displacement", "reactivity"],
    modelAnswer:
      "Magnesium is more reactive than copper, so it displaces copper from copper sulfate. Magnesium atoms lose electrons to form magnesium ions, while copper ions gain electrons to form copper atoms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying copper is more reactive than magnesium.",
      "Avoid: Not mentioning electron transfer.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Displacement. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how the method of extracting a metal depends on its position in the reactivity series.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Metals below carbon can be extracted by reduction with carbon or carbon monoxide.",
        keywords: [["metals", "below", "carbon"]],
      },
      {
        point: "Metals above carbon are too reactive to be reduced by carbon.",
        keywords: [["metals", "above", "carbon"]],
      },
      {
        point: "Metals above carbon are extracted by electrolysis.",
        keywords: [["metals", "above", "carbon"]],
      },
      {
        point: "Unreactive metals may occur native.",
        keywords: [["unreactive", "metals", "occur"]],
      },
    ],
    examinerKeywords: ["extraction", "reactivity series", "carbon", "electrolysis"],
    modelAnswer:
      "Metals below carbon can be extracted by reduction with carbon or carbon monoxide. Metals above carbon are too reactive, so they are extracted by electrolysis. Very unreactive metals may occur native.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying aluminium is extracted using carbon.",
      "Avoid: Saying iron needs electrolysis.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extraction. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what acids produce in aqueous solution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Acids produce hydrogen ions, H+.",
        keywords: [["acids", "produce", "hydrogen"]],
      },
    ],
    examinerKeywords: ["acid", "aqueous", "hydrogen ions", "H+"],
    modelAnswer: "Acids produce hydrogen ions, H+, in aqueous solution.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying acids produce OH- ions.",
      "Avoid: Writing hydrogen gas instead of hydrogen ions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Acids. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the difference between a strong acid and a weak acid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A strong acid fully ionises in water.",
        keywords: [["strong", "acid", "fully"]],
      },
      {
        point: "A weak acid partially ionises in water.",
        keywords: [["weak", "acid", "partially"]],
      },
      {
        point: "Strong acids produce a higher concentration of H+ ions.",
        keywords: [["strong", "acids", "produce"]],
      },
      {
        point: "The comparison is for acids of the same concentration.",
        keywords: [["comparison", "acids", "same"]],
      },
    ],
    examinerKeywords: ["strong acid", "weak acid", "ionisation", "H+ ions"],
    modelAnswer:
      "A strong acid fully ionises in water, while a weak acid only partially ionises. For acids of the same concentration, a strong acid produces more H+ ions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying weak means dilute.", "Avoid: Saying strong means concentrated."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Strong and weak acids. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the pH scale in terms of acidic, neutral and alkaline solutions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Acidic solutions have pH less than 7.",
        keywords: [["acidic", "solutions", "less"]],
      },
      {
        point: "Neutral solutions have pH 7.",
        keywords: [["neutral", "solutions"]],
      },
      {
        point: "Alkaline solutions have pH greater than 7.",
        keywords: [["alkaline", "solutions", "greater"]],
      },
    ],
    examinerKeywords: ["pH", "acidic", "neutral", "alkaline", "7"],
    modelAnswer:
      "Acids have pH below 7, neutral solutions have pH 7 and alkaline solutions have pH above 7.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying acids have pH above 7.", "Avoid: Saying neutral is pH 0."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: pH. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to prepare pure dry copper sulfate crystals from copper oxide and sulfuric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Warm dilute sulfuric acid.",
        keywords: [["warm", "dilute", "sulfuric"]],
      },
      {
        point: "Add excess copper oxide.",
        keywords: [["excess", "copper", "oxide"]],
      },
      {
        point: "Stir until no more reacts.",
        keywords: [["stir", "until", "more"]],
      },
      {
        point: "Filter off excess copper oxide.",
        keywords: [["filter", "excess", "copper"]],
      },
      {
        point: "Heat filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["cool", "filter", "crystals"]],
      },
    ],
    examinerKeywords: ["copper sulfate", "copper oxide", "sulfuric acid", "filter", "crystals"],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess copper oxide while stirring. Filter off excess solid. Heat the filtrate until nearly saturated, cool to form crystals, then filter and dry them.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using copper metal instead of copper oxide.",
      "Avoid: Evaporating completely to dryness.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Salt preparation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for hydrogen gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place a lighted splint near the gas.",
        keywords: [["place", "lighted", "splint"]],
      },
      {
        point: "Hydrogen burns with a squeaky pop.",
        keywords: [["hydrogen", "burns", "squeaky"]],
      },
    ],
    examinerKeywords: ["hydrogen", "lighted splint", "squeaky pop"],
    modelAnswer: "Place a lighted splint near the gas. Hydrogen burns with a squeaky pop.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using a glowing splint.", "Avoid: Saying hydrogen turns limewater milky."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for oxygen gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place a glowing splint in the gas.",
        keywords: [["place", "glowing", "splint"]],
      },
      {
        point: "Oxygen relights the glowing splint.",
        keywords: [["oxygen", "relights", "glowing"]],
      },
    ],
    examinerKeywords: ["oxygen", "glowing splint", "relights"],
    modelAnswer: "Place a glowing splint in the gas. Oxygen relights the glowing splint.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using a lighted splint and listening for a pop.", "Avoid: Using limewater."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for carbon dioxide gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Bubble the gas through limewater.",
        keywords: [["bubble", "through", "limewater"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [["carbon", "dioxide", "turns"]],
      },
    ],
    examinerKeywords: ["carbon dioxide", "limewater", "milky"],
    modelAnswer: "Bubble the gas through limewater. Carbon dioxide turns limewater milky.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using a glowing splint.", "Avoid: Saying limewater turns blue."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for chlorine gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use damp blue litmus paper.",
        keywords: [["damp", "blue", "litmus"]],
      },
      {
        point: "Chlorine turns it red then bleaches it white.",
        keywords: [["chlorine", "turns", "bleaches"]],
      },
    ],
    examinerKeywords: ["chlorine", "damp blue litmus", "bleaches", "white"],
    modelAnswer: "Chlorine turns damp blue litmus paper red and then bleaches it white.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Using dry litmus only.", "Avoid: Forgetting bleaching."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the flame test colours for lithium, sodium and potassium ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lithium ions give a crimson flame.",
        keywords: [["lithium", "ions", "give"]],
      },
      {
        point: "Sodium ions give a yellow flame.",
        keywords: [["sodium", "ions", "give"]],
      },
      {
        point: "Potassium ions give a lilac flame.",
        keywords: [["potassium", "ions", "give"]],
      },
    ],
    examinerKeywords: [
      "flame test",
      "lithium",
      "sodium",
      "potassium",
      "crimson",
      "yellow",
      "lilac",
    ],
    modelAnswer:
      "Lithium gives a crimson flame, sodium gives a yellow flame and potassium gives a lilac flame.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying sodium gives lilac.", "Avoid: Saying potassium gives yellow."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Flame tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "data-response",
    questionType: "Identify",
    questionText:
      "A solution forms a blue precipitate when aqueous sodium hydroxide is added. Identify the cation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Copper(II) ions are present.",
        keywords: [["copper", "ions", "present"]],
      },
      {
        point: "Copper(II) ions form a blue precipitate with sodium hydroxide.",
        keywords: [["copper", "ions", "form"]],
      },
    ],
    examinerKeywords: ["blue precipitate", "sodium hydroxide", "copper(II)", "Cu2+"],
    modelAnswer: "The cation is copper(II), Cu2+.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing iron(II).", "Avoid: Ignoring the blue precipitate."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Cation tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the precipitate colours formed by iron(II) and iron(III) ions with aqueous sodium hydroxide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Iron(II) ions form a green precipitate.",
        keywords: [["iron", "ions", "form"]],
      },
      {
        point: "Iron(III) ions form a red-brown precipitate.",
        keywords: [["iron", "ions", "form"]],
      },
    ],
    examinerKeywords: ["iron(II)", "iron(III)", "green", "red-brown"],
    modelAnswer:
      "Iron(II) ions form a green precipitate and iron(III) ions form a red-brown precipitate.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Reversing iron(II) and iron(III).", "Avoid: Saying both are blue."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Cation tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for carbonate ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add dilute acid.",
        keywords: [["dilute", "acid"]],
      },
      {
        point: "Carbon dioxide gas is produced.",
        keywords: [["carbon", "dioxide", "produced"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [["carbon", "dioxide", "turns"]],
      },
    ],
    examinerKeywords: ["carbonate", "acid", "carbon dioxide", "limewater"],
    modelAnswer:
      "Add dilute acid. If carbonate ions are present, carbon dioxide is produced and turns limewater milky.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using silver nitrate.", "Avoid: Saying hydrogen is produced."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Anion tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for sulfate ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Acidify with dilute hydrochloric acid.",
        keywords: [["acidify", "dilute", "hydrochloric"]],
      },
      {
        point: "Add aqueous barium chloride.",
        keywords: [["aqueous", "barium", "chloride"]],
      },
      {
        point: "A white precipitate forms if sulfate ions are present.",
        keywords: [["white", "precipitate", "forms"]],
      },
    ],
    examinerKeywords: ["sulfate", "barium chloride", "white precipitate", "acidify"],
    modelAnswer:
      "Acidify the sample with dilute hydrochloric acid, then add barium chloride solution. A white precipitate shows sulfate ions.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Using silver nitrate for sulfate.", "Avoid: Forgetting to acidify."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Anion tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the precipitate colours formed by chloride, bromide and iodide ions with acidified silver nitrate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Chloride ions form a white precipitate.",
        keywords: [["chloride", "ions", "form"]],
      },
      {
        point: "Bromide ions form a cream precipitate.",
        keywords: [["bromide", "ions", "form"]],
      },
      {
        point: "Iodide ions form a yellow precipitate.",
        keywords: [["iodide", "ions", "form"]],
      },
    ],
    examinerKeywords: ["halide ions", "silver nitrate", "white", "cream", "yellow"],
    modelAnswer:
      "Chloride gives a white precipitate, bromide gives a cream precipitate and iodide gives a yellow precipitate.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Reversing bromide and iodide colours.",
      "Avoid: Saying all halides form white precipitates.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Halide tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "data-response",
    questionType: "Identify",
    questionText:
      "A salt gives a yellow flame and a white precipitate with acidified silver nitrate. Identify the salt and explain your answer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Yellow flame shows sodium ions.",
        keywords: [["yellow", "flame", "shows"]],
      },
      {
        point: "White precipitate shows chloride ions.",
        keywords: [["white", "precipitate", "shows"]],
      },
      {
        point: "The salt is sodium chloride.",
        keywords: [["salt", "sodium", "chloride"]],
      },
      {
        point: "Both cation and anion are identified.",
        keywords: [["both", "cation", "anion"]],
      },
    ],
    examinerKeywords: ["yellow flame", "white precipitate", "sodium chloride"],
    modelAnswer:
      "The salt is sodium chloride. The yellow flame shows sodium ions and the white precipitate with acidified silver nitrate shows chloride ions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Writing potassium chloride.", "Avoid: Ignoring one test result."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Unknown salt. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c4-products-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c4-predicting-identifying-products",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chemists can predict and identify products of reactions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "The reactivity series predicts displacement reactions.",
        keywords: [["reactivity", "series", "predicts"]],
      },
      {
        point: "Acids react with metals to make salts and hydrogen.",
        keywords: [["acids", "react", "metals"]],
      },
      {
        point: "Acids react with carbonates to make salts, water and carbon dioxide.",
        keywords: [["acids", "react", "carbonates"]],
      },
      {
        point: "Flame tests identify some metal ions.",
        keywords: [["flame", "tests", "identify"]],
      },
      {
        point: "Precipitation tests identify some cations and anions.",
        keywords: [["precipitation", "tests", "identify"]],
      },
      {
        point: "Gas tests identify hydrogen, oxygen, carbon dioxide and chlorine.",
        keywords: [["tests", "identify", "hydrogen"]],
      },
    ],
    examinerKeywords: [
      "predict products",
      "identify products",
      "reactivity series",
      "chemical tests",
    ],
    modelAnswer:
      "Chemists use the reactivity series to predict displacement reactions and acid reactions to predict salts, hydrogen or carbon dioxide. Products can be identified using flame tests, precipitation tests and gas tests for hydrogen, oxygen, carbon dioxide and chlorine.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Only discussing prediction.", "Avoid: Not linking tests to observations."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by rate of reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Rate is the change in amount of reactant or product.",
        keywords: [["rate", "change", "amount"]],
      },
      {
        point: "The change is measured per unit time.",
        keywords: [["change", "measured", "unit"]],
      },
    ],
    examinerKeywords: ["rate of reaction", "change", "per unit time"],
    modelAnswer:
      "Rate of reaction is the change in amount of reactant used or product formed per unit time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying rate is only final product amount.", "Avoid: Forgetting time."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rate of reaction. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain collision theory.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Reacting particles must collide.",
        keywords: [["reacting", "particles", "must"]],
      },
      {
        point: "Particles must collide with enough energy.",
        keywords: [["particles", "must", "collide"]],
      },
      {
        point: "Successful collisions lead to reaction.",
        keywords: [["successful", "collisions", "lead"]],
      },
    ],
    examinerKeywords: [
      "collision theory",
      "particles",
      "activation energy",
      "successful collisions",
    ],
    modelAnswer:
      "For a reaction to occur, reacting particles must collide with enough energy. These successful collisions lead to reaction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying every collision causes reaction.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Collision theory. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why increasing temperature increases the rate of reaction.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles gain kinetic energy.",
        keywords: [["particles", "gain", "kinetic"]],
      },
      {
        point: "Particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Collisions happen more frequently.",
        keywords: [["collisions", "happen", "more"]],
      },
      {
        point:
          "A greater proportion of particles have energy equal to or greater than activation energy.",
        keywords: [["greater", "proportion", "particles"]],
      },
    ],
    examinerKeywords: ["temperature", "kinetic energy", "collisions", "activation energy"],
    modelAnswer:
      "Increasing temperature gives particles more kinetic energy, so they move faster and collide more often. More particles have enough energy to overcome the activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Only saying particles move faster.",
      "Avoid: Saying activation energy increases.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Temperature. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why increasing concentration increases rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "There are more particles per unit volume.",
        keywords: [["more", "particles", "unit"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
      {
        point: "There are more successful collisions per second.",
        keywords: [["more", "successful", "collisions"]],
      },
    ],
    examinerKeywords: ["concentration", "particles", "collision frequency"],
    modelAnswer:
      "Higher concentration means more particles per unit volume, so collisions and successful collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particles have more energy.",
      "Avoid: Confusing concentration with temperature.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Concentration. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why powdered calcium carbonate reacts faster with acid than large chips.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Powder has a larger surface area.",
        keywords: [["powder", "larger", "surface"]],
      },
      {
        point: "More particles are exposed to acid.",
        keywords: [["more", "particles", "exposed"]],
      },
      {
        point: "Collisions happen more frequently.",
        keywords: [["collisions", "happen", "more"]],
      },
    ],
    examinerKeywords: ["surface area", "powder", "calcium carbonate", "collisions"],
    modelAnswer:
      "Powdered calcium carbonate has a larger surface area, so more particles are exposed to acid and collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying powder has less surface area.",
      "Avoid: Forgetting collision frequency.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Surface area. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a catalyst increases the rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst provides an alternative reaction pathway.",
        keywords: [["catalyst", "provides", "alternative"]],
      },
      {
        point: "The pathway has lower activation energy.",
        keywords: [["pathway", "lower", "activation"]],
      },
      {
        point: "More particles have enough energy to react.",
        keywords: [["more", "particles", "enough"]],
      },
    ],
    examinerKeywords: ["catalyst", "alternative pathway", "lower activation energy"],
    modelAnswer:
      "A catalyst provides an alternative pathway with lower activation energy, so more particles have enough energy to react.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying catalysts are used up.",
      "Avoid: Saying catalysts increase activation energy.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Catalysts. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the rate of reaction between magnesium and dilute hydrochloric acid.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Add magnesium to dilute hydrochloric acid.",
        keywords: [["magnesium", "dilute", "hydrochloric"]],
      },
      {
        point: "Collect hydrogen gas using a gas syringe.",
        keywords: [["collect", "hydrogen", "syringe"]],
      },
      {
        point: "Measure gas volume at regular time intervals.",
        keywords: [["measure", "volume", "regular"]],
      },
      {
        point: "Keep temperature, acid volume and magnesium mass constant.",
        keywords: [["keep", "temperature", "acid"]],
      },
      {
        point: "Repeat and calculate a mean.",
        keywords: [["repeat", "calculate", "mean"]],
      },
    ],
    examinerKeywords: ["magnesium", "hydrochloric acid", "gas syringe", "hydrogen"],
    modelAnswer:
      "Add magnesium to hydrochloric acid and collect hydrogen in a gas syringe. Record gas volume at regular time intervals while controlling temperature, acid volume and magnesium mass. Repeat and calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Not measuring time.", "Avoid: Changing several variables."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rate practical. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "data-response",
    questionType: "Explain",
    questionText: "Explain how rate is found from a graph of gas volume against time.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rate is the gradient of the graph.",
        keywords: [["rate", "gradient", "graph"]],
      },
      {
        point: "Gradient = change in gas volume ÷ change in time.",
        keywords: [["gradient", "change", "volume"]],
      },
      {
        point: "A steeper gradient means a faster rate.",
        keywords: [["steeper", "gradient", "means"]],
      },
    ],
    examinerKeywords: ["rate", "gradient", "gas volume", "time"],
    modelAnswer:
      "Rate is found from the gradient of the graph. Gradient = change in gas volume ÷ change in time. A steeper gradient means a faster rate.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final volume as the rate.", "Avoid: Forgetting time."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rate graphs. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "data-response",
    questionType: "Explain",
    questionText:
      "Explain why a gas volume-time graph becomes horizontal at the end of a reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The reaction has finished.",
        keywords: [["reaction", "finished"]],
      },
      {
        point: "One reactant has been used up.",
        keywords: [["reactant", "been", "used"]],
      },
      {
        point: "No more gas is produced.",
        keywords: [["more", "produced"]],
      },
    ],
    examinerKeywords: ["horizontal graph", "reaction finished", "reactant used up"],
    modelAnswer:
      "The graph becomes horizontal because the reaction has finished. One reactant has been used up, so no more gas is produced.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the rate is fastest when horizontal.",
      "Avoid: Saying gas is still being produced.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: End of reaction. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A reaction produces 60 cm3 of gas in 150 seconds. Calculate the mean rate in cm3/s.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Mean rate = volume ÷ time.",
        keywords: [["mean", "rate", "volume"]],
      },
      {
        point: "Mean rate = 60 ÷ 150 = 0.40 cm3/s.",
        keywords: [["mean", "rate"]],
      },
    ],
    examinerKeywords: ["mean rate", "gas volume", "time", "0.40"],
    modelAnswer: "Mean rate = 60 ÷ 150 = 0.40 cm3/s.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Dividing time by volume.", "Avoid: Forgetting units."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Mean rate. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a reversible reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A reversible reaction can go forwards and backwards.",
        keywords: [["reversible", "reaction", "forwards"]],
      },
      {
        point: "Products can react to reform reactants.",
        keywords: [["products", "react", "reform"]],
      },
    ],
    examinerKeywords: ["reversible reaction", "forward reaction", "backward reaction"],
    modelAnswer:
      "A reversible reaction can go forwards and backwards, so products can react to reform reactants.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying reversible reactions only go one way.",
      "Avoid: Confusing reversible with complete reaction.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reversible reactions. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe dynamic equilibrium.",
    marks: 4,
    markSchemePoints: [
      {
        point: "It occurs in a closed system.",
        keywords: [["occurs", "closed", "system"]],
      },
      {
        point: "Forward and reverse reactions continue.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "Forward and reverse reactions occur at the same rate.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "Concentrations of reactants and products remain constant.",
        keywords: [["concentrations", "reactants", "products"]],
      },
    ],
    examinerKeywords: [
      "dynamic equilibrium",
      "closed system",
      "same rate",
      "constant concentration",
    ],
    modelAnswer:
      "Dynamic equilibrium occurs in a closed system when forward and reverse reactions continue at the same rate, so concentrations remain constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying reactions stop.", "Avoid: Saying concentrations must be equal."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Dynamic equilibrium. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State Le Chatelier's principle.",
    marks: 3,
    markSchemePoints: [
      {
        point: "If a system at equilibrium is changed.",
        keywords: [["system", "equilibrium", "changed"]],
      },
      {
        point: "The equilibrium shifts.",
        keywords: [["equilibrium", "shifts"]],
      },
      {
        point: "It shifts to oppose the change.",
        keywords: [["shifts", "oppose", "change"]],
      },
    ],
    examinerKeywords: ["Le Chatelier", "equilibrium", "oppose change"],
    modelAnswer:
      "If a system at equilibrium is changed, the equilibrium shifts to oppose the change.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying equilibrium shifts to increase the change.",
      "Avoid: Saying catalysts shift equilibrium.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Le Chatelier. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "For an exothermic forward reaction, explain the effect of increasing temperature on equilibrium yield.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Increasing temperature favours the endothermic direction.",
        keywords: [["increasing", "temperature", "favours"]],
      },
      {
        point: "The reverse reaction is endothermic.",
        keywords: [["reverse", "reaction", "endothermic"]],
      },
      {
        point: "Equilibrium shifts to the left.",
        keywords: [["equilibrium", "shifts", "left"]],
      },
      {
        point: "Yield of products decreases.",
        keywords: [["yield", "products", "decreases"]],
      },
    ],
    examinerKeywords: ["exothermic", "temperature", "equilibrium", "yield"],
    modelAnswer:
      "For an exothermic forward reaction, increasing temperature favours the endothermic reverse reaction. The equilibrium shifts left, so product yield decreases.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying higher temperature always increases yield.",
      "Avoid: Confusing rate and yield.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Temperature and equilibrium. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how increasing pressure affects equilibrium in a gas reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Increasing pressure favours the side with fewer gas molecules.",
        keywords: [["increasing", "pressure", "favours"]],
      },
      {
        point: "Equilibrium shifts to reduce pressure.",
        keywords: [["equilibrium", "shifts", "reduce"]],
      },
      {
        point:
          "If both sides have the same number of gas molecules, there is no effect on equilibrium position.",
        keywords: [["both", "sides", "same"]],
      },
    ],
    examinerKeywords: ["pressure", "equilibrium", "gas molecules", "fewer"],
    modelAnswer:
      "Increasing pressure shifts equilibrium to the side with fewer gas molecules. This reduces pressure. If both sides have the same number of gas molecules, pressure has no effect on position.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying pressure always shifts right.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Pressure and equilibrium. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a catalyst does not change equilibrium yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst increases the rate of both forward and reverse reactions equally.",
        keywords: [["catalyst", "increases", "rate"]],
      },
      {
        point: "Equilibrium is reached faster.",
        keywords: [["equilibrium", "reached", "faster"]],
      },
      {
        point: "The position of equilibrium is unchanged.",
        keywords: [["position", "equilibrium", "unchanged"]],
      },
    ],
    examinerKeywords: ["catalyst", "equilibrium", "yield", "forward", "reverse"],
    modelAnswer:
      "A catalyst increases the rates of the forward and reverse reactions equally, so equilibrium is reached faster but the equilibrium position and yield are unchanged.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying catalysts increase yield.",
      "Avoid: Forgetting both directions are affected.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Catalysts and equilibrium. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a compromise temperature is used in the Haber process.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The forward reaction is exothermic.",
        keywords: [["forward", "reaction", "exothermic"]],
      },
      {
        point: "Lower temperature gives a higher ammonia yield.",
        keywords: [["lower", "temperature", "gives"]],
      },
      {
        point: "Lower temperature gives a slower rate.",
        keywords: [["lower", "temperature", "gives"]],
      },
      {
        point: "A compromise temperature gives a reasonable yield and reasonable rate.",
        keywords: [["compromise", "temperature", "gives"]],
      },
    ],
    examinerKeywords: ["Haber process", "temperature", "yield", "rate", "exothermic"],
    modelAnswer:
      "The forward Haber reaction is exothermic, so lower temperature gives a higher yield but a slower rate. A compromise temperature gives a reasonable yield and rate.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying high temperature gives highest yield.", "Avoid: Only discussing rate."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Haber process. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why high pressure increases ammonia yield in the Haber process.",
    marks: 4,
    markSchemePoints: [
      {
        point: "There are four moles of gas on the reactant side.",
        keywords: [["four", "moles", "reactant"]],
      },
      {
        point: "There are two moles of gas on the product side.",
        keywords: [["moles", "product", "side"]],
      },
      {
        point: "High pressure favours the side with fewer gas molecules.",
        keywords: [["high", "pressure", "favours"]],
      },
      {
        point: "Equilibrium shifts towards ammonia.",
        keywords: [["equilibrium", "shifts", "towards"]],
      },
    ],
    examinerKeywords: ["Haber process", "pressure", "ammonia", "fewer gas molecules"],
    modelAnswer:
      "High pressure favours the side with fewer gas molecules. In the Haber process there are fewer gas molecules on the product side, so equilibrium shifts towards ammonia.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying high pressure favours reactants.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Haber process. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why industrial chemists must balance rate, yield and cost.",
    marks: 4,
    markSchemePoints: [
      {
        point: "High yield increases product amount.",
        keywords: [["high", "yield", "increases"]],
      },
      {
        point: "Fast rate increases production speed.",
        keywords: [["fast", "rate", "increases"]],
      },
      {
        point: "High pressure or temperature may be expensive.",
        keywords: [["high", "pressure", "temperature"]],
      },
      {
        point: "A compromise gives profitable production.",
        keywords: [["compromise", "gives", "profitable"]],
      },
    ],
    examinerKeywords: ["industry", "rate", "yield", "cost", "compromise"],
    modelAnswer:
      "Industrial chemists need a high yield and fast rate to make enough product quickly. However, high temperature or pressure can be expensive, so compromise conditions are used to make production profitable.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: ["Avoid: Only discussing yield.", "Avoid: Ignoring cost."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Industrial conditions. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c5-monitoring-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c5-monitoring-controlling-reactions",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how chemists monitor and control chemical reactions in the laboratory and in industry.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Rates can be monitored by measuring gas volume, mass loss or colour change over time.",
        keywords: [["rates", "monitored", "measuring"]],
      },
      {
        point:
          "Collision theory explains how temperature, concentration and surface area affect rate.",
        keywords: [["collision", "theory", "explains"]],
      },
      {
        point: "Catalysts increase rate by lowering activation energy.",
        keywords: [["catalysts", "increase", "rate"]],
      },
      {
        point: "Equilibrium reactions can be controlled by changing temperature or pressure.",
        keywords: [["equilibrium", "reactions", "controlled"]],
      },
      {
        point: "Industrial processes use compromise conditions.",
        keywords: [["industrial", "processes", "compromise"]],
      },
      {
        point: "Catalysts reduce energy costs but do not change equilibrium yield.",
        keywords: [["catalysts", "reduce", "energy"]],
      },
    ],
    examinerKeywords: ["monitor", "control", "rate", "equilibrium", "catalyst", "industry"],
    modelAnswer:
      "Chemists monitor reactions by measuring gas volume, mass loss or colour change over time. Rate is controlled using temperature, concentration, surface area and catalysts. Equilibrium reactions are controlled using temperature and pressure, while industry uses compromise conditions and catalysts to balance rate, yield and cost.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Confusing rate with yield.",
      "Avoid: Saying catalysts increase equilibrium yield.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the approximate percentages of nitrogen and oxygen in the Earth's atmosphere today.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Nitrogen is about 78%.",
        keywords: [["nitrogen", "about"]],
      },
      {
        point: "Oxygen is about 21%.",
        keywords: [["oxygen", "about"]],
      },
    ],
    examinerKeywords: ["atmosphere", "nitrogen", "oxygen", "78%", "21%"],
    modelAnswer: "The atmosphere is about 78% nitrogen and 21% oxygen.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Reversing nitrogen and oxygen.", "Avoid: Saying oxygen is the largest gas."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Earth's atmosphere. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the Earth's early atmosphere.",
    marks: 3,
    markSchemePoints: [
      {
        point: "It contained large amounts of carbon dioxide.",
        keywords: [["contained", "large", "amounts"]],
      },
      {
        point: "It contained water vapour.",
        keywords: [["contained", "water", "vapour"]],
      },
      {
        point: "There was little or no oxygen.",
        keywords: [["little", "oxygen"]],
      },
    ],
    examinerKeywords: ["early atmosphere", "carbon dioxide", "water vapour", "oxygen"],
    modelAnswer:
      "The early atmosphere contained large amounts of carbon dioxide and water vapour, with little or no oxygen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the early atmosphere had lots of oxygen.",
      "Avoid: Forgetting carbon dioxide.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Early atmosphere. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how oceans formed on early Earth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The Earth cooled.",
        keywords: [["earth", "cooled"]],
      },
      {
        point: "Water vapour condensed.",
        keywords: [["water", "vapour", "condensed"]],
      },
      {
        point: "Liquid water collected to form oceans.",
        keywords: [["liquid", "water", "collected"]],
      },
    ],
    examinerKeywords: ["oceans", "water vapour", "condensation", "cooled"],
    modelAnswer:
      "As the Earth cooled, water vapour in the atmosphere condensed into liquid water. This liquid water collected to form oceans.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying oxygen formed the oceans.", "Avoid: Forgetting condensation."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Oceans. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why carbon dioxide levels in the atmosphere decreased over time.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Carbon dioxide dissolved in oceans.",
        keywords: [["carbon", "dioxide", "dissolved"]],
      },
      {
        point: "Carbonates formed.",
        keywords: [["carbonates", "formed"]],
      },
      {
        point: "Carbon became locked in sedimentary rocks.",
        keywords: [["carbon", "became", "locked"]],
      },
      {
        point: "Plants and algae used carbon dioxide in photosynthesis.",
        keywords: [["plants", "algae", "used"]],
      },
    ],
    examinerKeywords: ["carbon dioxide", "oceans", "carbonates", "photosynthesis"],
    modelAnswer:
      "Carbon dioxide decreased because it dissolved in oceans and became locked up in carbonates and sedimentary rocks. Plants and algae also removed carbon dioxide by photosynthesis.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying carbon dioxide only increased over time.",
      "Avoid: Forgetting photosynthesis.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Carbon dioxide decrease. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why oxygen levels increased in the atmosphere.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Algae and plants evolved.",
        keywords: [["algae", "plants", "evolved"]],
      },
      {
        point: "They carried out photosynthesis.",
        keywords: [["carried", "photosynthesis"]],
      },
      {
        point: "Photosynthesis released oxygen into the atmosphere.",
        keywords: [["photosynthesis", "released", "oxygen"]],
      },
    ],
    examinerKeywords: ["oxygen", "photosynthesis", "algae", "plants"],
    modelAnswer:
      "Oxygen levels increased because algae and plants evolved and carried out photosynthesis, releasing oxygen into the atmosphere.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying respiration increased oxygen.", "Avoid: Forgetting photosynthesis."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Oxygen increase. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State three greenhouse gases.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Carbon dioxide.",
        keywords: [["carbon", "dioxide"]],
      },
      {
        point: "Methane.",
        keywords: [["methane"]],
      },
      {
        point: "Water vapour.",
        keywords: [["water", "vapour"]],
      },
    ],
    examinerKeywords: ["greenhouse gases", "carbon dioxide", "methane", "water vapour"],
    modelAnswer: "Carbon dioxide, methane and water vapour are greenhouse gases.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Writing nitrogen as a main greenhouse gas.",
      "Avoid: Writing oxygen as a main greenhouse gas.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Greenhouse gases. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how greenhouse gases keep the Earth warm.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Short-wave radiation from the Sun passes through the atmosphere.",
        keywords: [["short-wave", "radiation", "passes"]],
      },
      {
        point: "The Earth's surface emits infrared radiation.",
        keywords: [["earth", "surface", "emits"]],
      },
      {
        point: "Greenhouse gases absorb infrared radiation.",
        keywords: [["greenhouse", "gases", "absorb"]],
      },
      {
        point: "Energy is re-radiated, warming the atmosphere.",
        keywords: [["energy", "re-radiated", "warming"]],
      },
    ],
    examinerKeywords: ["greenhouse effect", "infrared radiation", "absorb", "re-radiate"],
    modelAnswer:
      "Radiation from the Sun passes through the atmosphere and warms the Earth. The Earth emits infrared radiation, which greenhouse gases absorb and re-radiate, warming the atmosphere.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying greenhouse gases block all sunlight.",
      "Avoid: Forgetting infrared radiation.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Greenhouse effect. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how increased greenhouse gas levels can cause climate change.",
    marks: 4,
    markSchemePoints: [
      {
        point: "More greenhouse gases absorb more infrared radiation.",
        keywords: [["more", "greenhouse", "gases"]],
      },
      {
        point: "More energy is retained in the atmosphere.",
        keywords: [["more", "energy", "retained"]],
      },
      {
        point: "Global temperature increases.",
        keywords: [["global", "temperature", "increases"]],
      },
      {
        point: "This can cause climate change.",
        keywords: [["cause", "climate", "change"]],
      },
    ],
    examinerKeywords: ["greenhouse gases", "infrared", "global warming", "climate change"],
    modelAnswer:
      "More greenhouse gases absorb more infrared radiation, so more energy is retained in the atmosphere. This increases global temperature and can cause climate change.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying greenhouse gases destroy oxygen.",
      "Avoid: Not mentioning infrared radiation.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Climate change. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define carbon footprint.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A carbon footprint is the total amount of greenhouse gases emitted.",
        keywords: [["carbon", "footprint", "total"]],
      },
      {
        point:
          "It includes direct and indirect emissions from a person, product, event or organisation.",
        keywords: [["includes", "direct", "indirect"]],
      },
    ],
    examinerKeywords: ["carbon footprint", "greenhouse gases", "direct", "indirect"],
    modelAnswer:
      "A carbon footprint is the total amount of greenhouse gases emitted directly and indirectly by a person, product, event or organisation.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying it only means carbon dioxide from breathing.",
      "Avoid: Forgetting indirect emissions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Carbon footprint. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two pollutants produced by burning fuels in engines.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carbon monoxide.",
        keywords: [["carbon", "monoxide"]],
      },
      {
        point: "Oxides of nitrogen.",
        keywords: [["oxides", "nitrogen"]],
      },
      {
        point: "Sulfur dioxide.",
        keywords: [["sulfur", "dioxide"]],
      },
      {
        point: "Particulates.",
        keywords: [["particulates"]],
      },
    ],
    examinerKeywords: [
      "pollutants",
      "carbon monoxide",
      "nitrogen oxides",
      "sulfur dioxide",
      "particulates",
    ],
    modelAnswer:
      "Carbon monoxide and oxides of nitrogen can be produced by burning fuels in engines.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing oxygen as a pollutant.", "Avoid: Only writing carbon dioxide."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atmospheric pollutants. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why carbon monoxide is dangerous.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Carbon monoxide is toxic.",
        keywords: [["carbon", "monoxide", "toxic"]],
      },
      {
        point: "It binds to haemoglobin in the blood.",
        keywords: [["binds", "haemoglobin", "blood"]],
      },
      {
        point: "It reduces the blood's ability to carry oxygen.",
        keywords: [["reduces", "blood", "ability"]],
      },
    ],
    examinerKeywords: ["carbon monoxide", "toxic", "haemoglobin", "oxygen"],
    modelAnswer:
      "Carbon monoxide is toxic because it binds to haemoglobin, reducing the blood's ability to carry oxygen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Confusing carbon monoxide with carbon dioxide.",
      "Avoid: Forgetting oxygen transport.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Carbon monoxide. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how sulfur dioxide causes environmental problems.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sulfur dioxide dissolves in rainwater.",
        keywords: [["sulfur", "dioxide", "dissolves"]],
      },
      {
        point: "It forms acid rain.",
        keywords: [["forms", "acid", "rain"]],
      },
      {
        point: "Acid rain damages plants, buildings or aquatic life.",
        keywords: [["acid", "rain", "damages"]],
      },
    ],
    examinerKeywords: ["sulfur dioxide", "acid rain", "environmental damage"],
    modelAnswer:
      "Sulfur dioxide dissolves in rainwater to form acid rain, which can damage plants, buildings and aquatic life.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sulfur dioxide mainly causes global warming.",
      "Avoid: Forgetting acid rain.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Acid rain. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what crude oil is.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Crude oil is a mixture.",
        keywords: [["crude", "mixture"]],
      },
      {
        point: "It contains many different hydrocarbons.",
        keywords: [["contains", "many", "different"]],
      },
    ],
    examinerKeywords: ["crude oil", "mixture", "hydrocarbons"],
    modelAnswer: "Crude oil is a mixture of many different hydrocarbons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying crude oil is a pure compound.", "Avoid: Forgetting hydrocarbons."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Crude oil. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how crude oil is separated by fractional distillation.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Crude oil is heated and vaporised.",
        keywords: [["crude", "heated", "vaporised"]],
      },
      {
        point: "Vapours enter a fractionating column.",
        keywords: [["vapours", "enter", "fractionating"]],
      },
      {
        point: "The column is hotter at the bottom and cooler at the top.",
        keywords: [["column", "hotter", "bottom"]],
      },
      {
        point: "Hydrocarbons condense at different heights.",
        keywords: [["hydrocarbons", "condense", "different"]],
      },
      {
        point: "Fractions are collected according to boiling point.",
        keywords: [["fractions", "collected", "according"]],
      },
    ],
    examinerKeywords: ["fractional distillation", "crude oil", "boiling point", "condense"],
    modelAnswer:
      "Crude oil is heated and vaporised. The vapours enter a fractionating column that is hotter at the bottom and cooler at the top. Hydrocarbons condense at different heights depending on boiling point.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying crude oil is separated by filtration.",
      "Avoid: Forgetting boiling points.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Fractional distillation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why cracking is useful.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Cracking breaks long-chain hydrocarbons into shorter hydrocarbons.",
        keywords: [["cracking", "breaks", "long-chain"]],
      },
      {
        point: "Shorter hydrocarbons are more useful as fuels.",
        keywords: [["shorter", "hydrocarbons", "more"]],
      },
      {
        point: "Cracking produces alkenes.",
        keywords: [["cracking", "produces", "alkenes"]],
      },
      {
        point: "Alkenes can be used to make polymers.",
        keywords: [["alkenes", "used", "make"]],
      },
    ],
    examinerKeywords: ["cracking", "long-chain hydrocarbons", "alkenes", "polymers"],
    modelAnswer:
      "Cracking breaks long-chain hydrocarbons into shorter, more useful fuels. It also produces alkenes, which can be used to make polymers.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying cracking joins small molecules.", "Avoid: Forgetting alkenes."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Cracking. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for alkenes using bromine water.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add bromine water to the sample.",
        keywords: [["bromine", "water", "sample"]],
      },
      {
        point: "Shake the mixture.",
        keywords: [["shake", "mixture"]],
      },
      {
        point: "Bromine water changes from orange to colourless if an alkene is present.",
        keywords: [["bromine", "water", "changes"]],
      },
    ],
    examinerKeywords: ["alkene", "bromine water", "orange", "colourless"],
    modelAnswer:
      "Add bromine water and shake. If an alkene is present, bromine water changes from orange to colourless.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying bromine water turns blue.", "Avoid: Forgetting colourless."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Alkenes. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how ethene forms poly(ethene).",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ethene is an alkene monomer.",
        keywords: [["ethene", "alkene", "monomer"]],
      },
      {
        point: "The carbon-carbon double bond opens.",
        keywords: [["carbon-carbon", "double", "bond"]],
      },
      {
        point: "Many monomers join together.",
        keywords: [["many", "monomers", "join"]],
      },
      {
        point: "Addition polymerisation forms poly(ethene).",
        keywords: [["addition", "polymerisation", "forms"]],
      },
    ],
    examinerKeywords: ["ethene", "polyethene", "addition polymerisation", "double bond"],
    modelAnswer:
      "Ethene monomers undergo addition polymerisation. Their carbon-carbon double bonds open and many monomers join to form poly(ethene).",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying water is produced.", "Avoid: Using ethane as the monomer."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Polymers. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a finite resource.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A finite resource is limited in supply.",
        keywords: [["finite", "resource", "limited"]],
      },
      {
        point: "It cannot be replaced quickly enough to meet demand.",
        keywords: [["cannot", "replaced", "quickly"]],
      },
    ],
    examinerKeywords: ["finite resource", "limited", "supply", "demand"],
    modelAnswer:
      "A finite resource is limited in supply and cannot be replaced quickly enough to meet demand.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying finite resources are unlimited.",
      "Avoid: Confusing finite with renewable.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Finite resources. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why recycling metals is useful.",
    marks: 4,
    markSchemePoints: [
      {
        point: "It conserves finite metal ores.",
        keywords: [["conserves", "finite", "metal"]],
      },
      {
        point: "It reduces mining.",
        keywords: [["reduces", "mining"]],
      },
      {
        point: "It usually saves energy compared with extraction from ores.",
        keywords: [["usually", "saves", "energy"]],
      },
      {
        point: "It reduces waste sent to landfill.",
        keywords: [["reduces", "waste", "sent"]],
      },
    ],
    examinerKeywords: ["recycling", "metals", "finite resources", "energy", "landfill"],
    modelAnswer:
      "Recycling metals conserves finite ores, reduces mining, saves energy compared with extraction from ores and reduces waste sent to landfill.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying recycling creates more ore.",
      "Avoid: Only saying it is good without explanation.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Recycling. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c6-global-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "c6-global-challenges",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how chemistry helps respond to global challenges linked to fuels, materials and climate.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Fractional distillation separates crude oil into useful fractions.",
        keywords: [["fractional", "distillation", "separates"]],
      },
      {
        point: "Cracking makes shorter hydrocarbons and alkenes.",
        keywords: [["cracking", "makes", "shorter"]],
      },
      {
        point: "Alkenes can make polymers.",
        keywords: [["alkenes", "make", "polymers"]],
      },
      {
        point: "Recycling conserves finite resources.",
        keywords: [["recycling", "conserves", "finite"]],
      },
      {
        point: "Reducing fossil fuel use can reduce carbon dioxide emissions.",
        keywords: [["reducing", "fossil", "fuel"]],
      },
      {
        point: "Understanding greenhouse gases helps explain climate change.",
        keywords: [["understanding", "greenhouse", "gases"]],
      },
    ],
    examinerKeywords: [
      "global challenges",
      "crude oil",
      "cracking",
      "recycling",
      "greenhouse gases",
    ],
    modelAnswer:
      "Chemistry helps by separating crude oil into useful fractions, cracking long hydrocarbons into useful fuels and alkenes, and using alkenes to make polymers. Recycling conserves finite resources, and understanding greenhouse gases helps explain and reduce climate change impacts.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing crude oil.",
      "Avoid: Not linking chemistry to climate or resources.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "State",
    questionText:
      "State the independent variable, dependent variable and one control variable when investigating the effect of temperature on rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Independent variable is temperature.",
        keywords: [["independent", "variable", "temperature"]],
      },
      {
        point: "Dependent variable is rate or time taken.",
        keywords: [["dependent", "variable", "rate"]],
      },
      {
        point: "A control variable could be concentration, volume or mass of reactant.",
        keywords: [["control", "variable", "could"]],
      },
    ],
    examinerKeywords: [
      "independent variable",
      "dependent variable",
      "control variable",
      "temperature",
      "rate",
    ],
    modelAnswer:
      "The independent variable is temperature. The dependent variable is rate or time taken. One control variable is concentration.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Calling rate the independent variable.",
      "Avoid: Not giving a control variable.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Variables. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Explain",
    questionText: "Explain why repeat readings are taken in experiments.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Repeats improve reliability.",
        keywords: [["repeats", "improve", "reliability"]],
      },
      {
        point: "They help identify anomalous results.",
        keywords: [["help", "identify", "anomalous"]],
      },
      {
        point: "A mean can be calculated.",
        keywords: [["mean", "calculated"]],
      },
    ],
    examinerKeywords: ["repeat readings", "reliability", "anomaly", "mean"],
    modelAnswer:
      "Repeat readings improve reliability, help identify anomalous results and allow a mean to be calculated.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying repeats remove all errors.", "Avoid: Forgetting anomalies."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reliability. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Identify",
    questionText:
      "A student records 31 s, 32 s, 65 s and 30 s. Identify the anomalous result and calculate the mean of the reliable results.",
    marks: 3,
    markSchemePoints: [
      {
        point: "65 s is anomalous.",
        keywords: [["anomalous"]],
      },
      {
        point: "Mean = (31 + 32 + 30) ÷ 3.",
        keywords: [["mean"]],
      },
      {
        point: "Mean = 31 s.",
        keywords: [["mean"]],
      },
    ],
    examinerKeywords: ["anomalous result", "mean", "31 s"],
    modelAnswer: "65 s is anomalous. Mean = (31 + 32 + 30) ÷ 3 = 31 s.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Including the anomalous result.", "Avoid: Choosing 30 s as anomalous."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Anomalies. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the most suitable apparatus for measuring exactly 25.0 cm3 of solution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Pipette.",
        keywords: [["pipette"]],
      },
    ],
    examinerKeywords: ["pipette", "25.0 cm3", "accurate volume"],
    modelAnswer: "A pipette.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing beaker.", "Avoid: Writing test tube."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Measuring volume. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the apparatus used to add variable volumes accurately in a titration.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Burette.",
        keywords: [["burette"]],
      },
    ],
    examinerKeywords: ["burette", "titration", "variable volume"],
    modelAnswer: "A burette.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing pipette.", "Avoid: Writing measuring cylinder."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Titration apparatus. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to read a measuring cylinder accurately.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Place it on a flat surface.",
        keywords: [["place", "flat", "surface"]],
      },
      {
        point: "Read at eye level.",
        keywords: [["read", "level"]],
      },
      {
        point: "Read the bottom of the meniscus.",
        keywords: [["read", "bottom", "meniscus"]],
      },
    ],
    examinerKeywords: ["measuring cylinder", "eye level", "meniscus"],
    modelAnswer:
      "Place the measuring cylinder on a flat surface and read at eye level from the bottom of the meniscus.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Reading from above.", "Avoid: Reading the top of the meniscus."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Meniscus. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State suitable apparatus to measure the volume of gas produced in a reaction.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Gas syringe.",
        keywords: [["syringe"]],
      },
    ],
    examinerKeywords: ["gas syringe", "gas volume"],
    modelAnswer: "A gas syringe.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing thermometer.", "Avoid: Writing balance."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas collection. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to separate an insoluble solid from a liquid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use filtration.",
        keywords: [["filtration"]],
      },
      {
        point: "Pour the mixture through filter paper in a funnel.",
        keywords: [["pour", "mixture", "through"]],
      },
      {
        point: "The solid remains as residue and the liquid passes through as filtrate.",
        keywords: [["solid", "remains", "residue"]],
      },
    ],
    examinerKeywords: ["filtration", "residue", "filtrate"],
    modelAnswer:
      "Filter the mixture through filter paper in a funnel. The insoluble solid stays as the residue and the liquid passes through as the filtrate.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using evaporation.", "Avoid: Confusing residue and filtrate."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Filtration. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to obtain dry crystals from a salt solution.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Heat the solution to evaporate some water.",
        keywords: [["heat", "solution", "evaporate"]],
      },
      {
        point: "Stop when the solution is nearly saturated.",
        keywords: [["stop", "solution", "nearly"]],
      },
      {
        point: "Leave to cool.",
        keywords: [["leave", "cool"]],
      },
      {
        point: "Crystals form.",
        keywords: [["crystals", "form"]],
      },
      {
        point: "Filter and dry the crystals.",
        keywords: [["filter", "crystals"]],
      },
    ],
    examinerKeywords: ["crystallisation", "evaporation", "cool", "dry"],
    modelAnswer:
      "Heat the solution until it is nearly saturated, then leave it to cool so crystals form. Filter and dry the crystals.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Evaporating completely to dryness.", "Avoid: Forgetting cooling."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Crystallisation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to carry out paper chromatography to separate dyes.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Draw a pencil baseline.",
        keywords: [["draw", "pencil", "baseline"]],
      },
      {
        point: "Place a small spot of dye on the baseline.",
        keywords: [["place", "small", "spot"]],
      },
      {
        point: "Put paper in solvent below the baseline.",
        keywords: [["paper", "solvent", "below"]],
      },
      {
        point: "Allow solvent to rise.",
        keywords: [["allow", "solvent", "rise"]],
      },
      {
        point: "Mark the solvent front.",
        keywords: [["mark", "solvent", "front"]],
      },
    ],
    examinerKeywords: ["chromatography", "baseline", "solvent", "solvent front"],
    modelAnswer:
      "Draw a pencil baseline and place a dye spot on it. Put the paper in solvent with the solvent below the baseline. Let the solvent rise, then mark the solvent front.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Drawing baseline in ink.", "Avoid: Putting solvent above the spot."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Chromatography. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A spot moves 2.4 cm and the solvent front moves 6.0 cm. Calculate the Rf value.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rf = distance moved by spot ÷ distance moved by solvent front.",
        keywords: [["distance", "moved", "spot"]],
      },
      {
        point: "Rf = 2.4 ÷ 6.0.",
        keywords: [["rf", "chromatography"]],
      },
      {
        point: "Rf = 0.40.",
        keywords: [["rf", "chromatography"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "0.40"],
    modelAnswer: "Rf = 2.4 ÷ 6.0 = 0.40.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing solvent front by spot distance.", "Avoid: Adding units to Rf."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rf values. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to carry out an acid-alkali titration accurately.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a pipette to measure alkali into a conical flask.",
        keywords: [["pipette", "measure", "alkali"]],
      },
      {
        point: "Add indicator.",
        keywords: [["indicator"]],
      },
      {
        point: "Fill burette with acid.",
        keywords: [["fill", "burette", "acid"]],
      },
      {
        point: "Add acid slowly while swirling.",
        keywords: [["acid", "slowly", "while"]],
      },
      {
        point: "Stop at the end-point.",
        keywords: [["stop", "end-point"]],
      },
      {
        point: "Repeat until concordant titres are obtained.",
        keywords: [["repeat", "until", "concordant"]],
      },
    ],
    examinerKeywords: ["titration", "pipette", "burette", "indicator", "endpoint"],
    modelAnswer:
      "Use a pipette to add alkali to a conical flask and add indicator. Fill a burette with acid, add it slowly while swirling, stop at the end-point and repeat until concordant titres are obtained.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Using a beaker for accurate fixed volume.", "Avoid: Only doing one titre."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Titration. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate the effect of concentration on rate of reaction between marble chips and hydrochloric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use different concentrations of hydrochloric acid.",
        keywords: [["different", "concentrations", "hydrochloric"]],
      },
      {
        point: "Keep volume of acid constant.",
        keywords: [["keep", "volume", "acid"]],
      },
      {
        point: "Keep mass and size of marble chips constant.",
        keywords: [["keep", "mass", "size"]],
      },
      {
        point: "Collect carbon dioxide using a gas syringe.",
        keywords: [["collect", "carbon", "dioxide"]],
      },
      {
        point: "Measure gas volume at regular intervals.",
        keywords: [["measure", "volume", "regular"]],
      },
      {
        point: "Repeat and calculate a mean.",
        keywords: [["repeat", "calculate", "mean"]],
      },
    ],
    examinerKeywords: ["rate", "concentration", "marble chips", "gas syringe"],
    modelAnswer:
      "React marble chips with different concentrations of hydrochloric acid, keeping acid volume and marble chip mass and size constant. Collect carbon dioxide with a gas syringe, record volume over time, repeat and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing concentration and temperature together.",
      "Avoid: Not measuring time.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rate practical. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest two improvements to reduce heat loss in a temperature change experiment.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use an insulated cup.",
        keywords: [["insulated"]],
      },
      {
        point: "Use a lid.",
        keywords: [["heat loss", "insulation"]],
      },
      {
        point: "Add more insulation.",
        keywords: [["more", "insulation"]],
      },
      {
        point: "Take readings quickly.",
        keywords: [["take", "readings", "quickly"]],
      },
    ],
    examinerKeywords: ["heat loss", "insulation", "lid"],
    modelAnswer: "Use an insulated cup and place a lid on it.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using a metal beaker.", "Avoid: Leaving the cup uncovered."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Temperature change. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "State",
    questionText: "State two safety precautions when heating a flammable liquid.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use a water bath instead of a naked flame.",
        keywords: [["water", "bath", "instead"]],
      },
      {
        point: "Wear eye protection.",
        keywords: [["wear", "protection"]],
      },
      {
        point: "Keep the liquid away from flames.",
        keywords: [["keep", "liquid", "away"]],
      },
      {
        point: "Use small volumes.",
        keywords: [["small", "volumes"]],
      },
    ],
    examinerKeywords: ["safety", "flammable", "water bath", "eye protection"],
    modelAnswer: "Use a water bath instead of a naked flame and wear eye protection.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Heating directly with a Bunsen burner.", "Avoid: Using large volumes."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Safety. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State three features of a good graph.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Axes are labelled.",
        keywords: [["axes", "labelled"]],
      },
      {
        point: "Units are included.",
        keywords: [["units", "included"]],
      },
      {
        point: "A suitable scale is used.",
        keywords: [["suitable", "scale", "used"]],
      },
      {
        point: "Points are plotted accurately.",
        keywords: [["points", "plotted", "accurately"]],
      },
      {
        point: "A line or curve of best fit is drawn.",
        keywords: [["line", "curve", "best"]],
      },
    ],
    examinerKeywords: ["graph", "axes", "units", "scale", "best fit"],
    modelAnswer:
      "A good graph has labelled axes with units, a suitable scale and accurately plotted points with a best-fit line or curve.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting units.", "Avoid: Using an uneven scale."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Graph skills. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the difference between accuracy and precision.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Accuracy is closeness to the true value.",
        keywords: [["accuracy", "closeness", "true"]],
      },
      {
        point: "Precision is closeness of repeat readings to each other.",
        keywords: [["precision", "closeness", "repeat"]],
      },
      {
        point: "Accurate results are near the accepted value.",
        keywords: [["accurate", "results", "near"]],
      },
      {
        point: "Precise results have a small spread.",
        keywords: [["precise", "results", "small"]],
      },
    ],
    examinerKeywords: ["accuracy", "precision", "true value", "repeat readings"],
    modelAnswer:
      "Accuracy is how close a result is to the true value. Precision is how close repeat readings are to each other.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying accuracy and precision are identical.",
      "Avoid: Forgetting repeat readings for precision.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Accuracy and precision. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Explain",
    questionText: "Explain why a precipitate is washed with distilled water before drying.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Washing removes soluble impurities.",
        keywords: [["washing", "removes", "soluble"]],
      },
      {
        point: "Distilled water does not add extra dissolved ions.",
        keywords: [["distilled", "water", "does"]],
      },
      {
        point: "This gives a purer precipitate.",
        keywords: [["gives", "purer", "precipitate"]],
      },
    ],
    examinerKeywords: ["precipitate", "distilled water", "soluble impurities", "pure"],
    modelAnswer:
      "The precipitate is washed with distilled water to remove soluble impurities without adding extra ions, giving a purer solid.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Washing with tap water.", "Avoid: Saying washing dries the precipitate."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Precipitate washing. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe tests for hydrogen, oxygen and carbon dioxide.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Hydrogen is tested with a lighted splint.",
        keywords: [["hydrogen", "tested", "lighted"]],
      },
      {
        point: "Hydrogen gives a squeaky pop.",
        keywords: [["hydrogen", "gives", "squeaky"]],
      },
      {
        point: "Oxygen is tested with a glowing splint.",
        keywords: [["oxygen", "tested", "glowing"]],
      },
      {
        point: "Oxygen relights the glowing splint.",
        keywords: [["oxygen", "relights", "glowing"]],
      },
      {
        point: "Carbon dioxide is bubbled through limewater.",
        keywords: [["carbon", "dioxide", "bubbled"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [["carbon", "dioxide", "turns"]],
      },
    ],
    examinerKeywords: ["hydrogen", "oxygen", "carbon dioxide", "splint", "limewater"],
    modelAnswer:
      "Hydrogen gives a squeaky pop with a lighted splint. Oxygen relights a glowing splint. Carbon dioxide turns limewater milky.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using the wrong splint test.",
      "Avoid: Forgetting limewater for carbon dioxide.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-c7-practical-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how to design a valid and reliable chemistry experiment.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Change only the independent variable.",
        keywords: [["change", "only", "independent"]],
      },
      {
        point: "Measure the dependent variable accurately.",
        keywords: [["measure", "dependent", "variable"]],
      },
      {
        point: "Keep control variables constant.",
        keywords: [["keep", "control", "variables"]],
      },
      {
        point: "Use suitable apparatus.",
        keywords: [["suitable", "apparatus"]],
      },
      {
        point: "Repeat readings and calculate a mean.",
        keywords: [["repeat", "readings", "calculate"]],
      },
      {
        point: "Identify anomalous results and follow safety precautions.",
        keywords: [["identify", "anomalous", "results"]],
      },
    ],
    examinerKeywords: ["valid", "reliable", "variables", "repeat", "safety"],
    modelAnswer:
      "A valid experiment changes only the independent variable and keeps control variables constant. The dependent variable should be measured accurately using suitable apparatus. Repeats should be done, anomalies identified and a mean calculated, while following safety precautions.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Changing several variables at once.", "Avoid: Not repeating the experiment."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has atomic number 11 and mass number 23. Calculate the number of protons, neutrons and electrons.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Protons = 11.",
        keywords: [["protons"]],
      },
      {
        point: "Electrons = 11 in a neutral atom.",
        keywords: [["electrons", "neutral", "atom"]],
      },
      {
        point: "Neutrons = mass number - atomic number.",
        keywords: [["neutrons", "mass", "atomic"]],
      },
      {
        point: "Neutrons = 23 - 11 = 12.",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["atomic number", "mass number", "protons", "neutrons", "electrons"],
    modelAnswer: "The atom has 11 protons and 11 electrons. Neutrons = 23 - 11 = 12.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Adding atomic number and mass number.",
      "Avoid: Forgetting electrons equal protons in a neutral atom.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atomic structure. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why isotopes of the same element have the same chemical properties.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They have the same number of electrons.",
        keywords: [["same", "electrons"]],
      },
      {
        point: "They have the same electronic structure.",
        keywords: [["same", "electronic", "structure"]],
      },
      {
        point: "Chemical properties depend on outer-shell electrons.",
        keywords: [["chemical", "properties", "depend"]],
      },
    ],
    examinerKeywords: ["isotopes", "same electrons", "electronic structure", "chemical properties"],
    modelAnswer:
      "Isotopes have the same number of electrons and the same electronic structure. Chemical properties depend on outer-shell electrons, so isotopes react in the same way.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying neutrons control chemical properties.",
      "Avoid: Saying isotopes have different electron arrangements.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Isotopes. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why gases can be compressed but solids cannot easily be compressed.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gas particles are far apart.",
        keywords: [["particles", "apart"]],
      },
      {
        point: "There is empty space between gas particles.",
        keywords: [["empty", "space", "particles"]],
      },
      {
        point: "Solid particles are closely packed.",
        keywords: [["solid", "particles", "closely"]],
      },
      {
        point: "There is very little empty space between solid particles.",
        keywords: [["very", "little", "empty"]],
      },
    ],
    examinerKeywords: ["gas", "solid", "compressed", "particles", "empty space"],
    modelAnswer:
      "Gases can be compressed because their particles are far apart with empty space between them. Solids cannot easily be compressed because their particles are closely packed with very little empty space.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying gas particles shrink.",
      "Avoid: Saying solids have large gaps between particles.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Particle model. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to separate a soluble salt from a salt solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Heat the solution.",
        keywords: [["heat", "solution"]],
      },
      {
        point: "Evaporate some water.",
        keywords: [["evaporate", "some", "water"]],
      },
      {
        point: "Allow the solution to cool.",
        keywords: [["allow", "solution", "cool"]],
      },
      {
        point: "Filter and dry the crystals.",
        keywords: [["filter", "crystals"]],
      },
    ],
    examinerKeywords: ["crystallisation", "evaporation", "cool", "crystals"],
    modelAnswer:
      "Heat the solution to evaporate some water, then leave it to cool so crystals form. Filter and dry the crystals.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Using filtration only.", "Avoid: Evaporating completely to dryness."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Separation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A spot moves 3.0 cm and the solvent front moves 7.5 cm. Calculate the Rf value.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rf = distance moved by spot ÷ distance moved by solvent front.",
        keywords: [["distance", "moved", "spot"]],
      },
      {
        point: "Rf = 3.0 ÷ 7.5.",
        keywords: [["rf", "chromatography"]],
      },
      {
        point: "Rf = 0.40.",
        keywords: [["rf", "chromatography"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "0.40"],
    modelAnswer: "Rf = 3.0 ÷ 7.5 = 0.40.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing solvent front by spot distance.", "Avoid: Adding units to Rf."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Chromatography. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how magnesium chloride forms from magnesium and chlorine.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Magnesium loses two electrons.",
        keywords: [["magnesium", "loses", "electrons"]],
      },
      {
        point: "Magnesium forms Mg2+ ions.",
        keywords: [["magnesium", "forms", "ions"]],
      },
      {
        point: "Chlorine atoms gain one electron each to form Cl- ions.",
        keywords: [["chlorine", "atoms", "gain"]],
      },
      {
        point: "Oppositely charged ions attract by strong electrostatic forces.",
        keywords: [["oppositely", "charged", "ions"]],
      },
    ],
    examinerKeywords: ["magnesium chloride", "electron transfer", "Mg2+", "Cl-"],
    modelAnswer:
      "Magnesium loses two electrons to form Mg2+. Two chlorine atoms each gain one electron to form Cl- ions. The oppositely charged ions are held by strong electrostatic attraction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying electrons are shared.", "Avoid: Writing Mg+ instead of Mg2+."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Ionic bonding. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why molten sodium chloride conducts electricity but solid sodium chloride does not.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium chloride contains ions.",
        keywords: [["sodium", "chloride", "contains"]],
      },
      {
        point: "In the solid, ions are fixed in position.",
        keywords: [["solid", "ions", "fixed"]],
      },
      {
        point: "When molten, ions are mobile.",
        keywords: [["molten", "ions", "mobile"]],
      },
      {
        point: "Mobile ions carry charge.",
        keywords: [["mobile", "ions", "carry"]],
      },
    ],
    examinerKeywords: ["sodium chloride", "solid", "molten", "mobile ions"],
    modelAnswer:
      "Solid sodium chloride has ions fixed in position, so it cannot conduct. Molten sodium chloride has mobile ions that carry charge, so it conducts.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying electrons carry charge in molten sodium chloride.",
      "Avoid: Saying solid sodium chloride has no ions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Ionic properties. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why graphite is soft and conducts electricity.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Graphite has layers of carbon atoms.",
        keywords: [["graphite", "layers", "carbon"]],
      },
      {
        point: "There are weak forces between layers.",
        keywords: [["weak", "forces", "layers"]],
      },
      {
        point: "Layers can slide over each other.",
        keywords: [["layers", "slide", "over"]],
      },
      {
        point: "Each carbon atom bonds to three other carbon atoms.",
        keywords: [["each", "carbon", "atom"]],
      },
      {
        point: "Delocalised electrons move and carry charge.",
        keywords: [["delocalised", "electrons", "move"]],
      },
    ],
    examinerKeywords: ["graphite", "layers", "weak forces", "delocalised electrons"],
    modelAnswer:
      "Graphite is soft because it has layers with weak forces between them, so layers slide. It conducts because each carbon bonds to three others, leaving delocalised electrons that move and carry charge.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Saying ions move in graphite.", "Avoid: Saying graphite has no layers."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Graphite. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "Calculate the number of moles in 5.6 g of iron. Ar: Fe = 56.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Moles = mass ÷ Ar.",
        keywords: [["moles", "mass"]],
      },
      {
        point: "Moles = 5.6 ÷ 56 = 0.10 mol.",
        keywords: [["moles"]],
      },
    ],
    examinerKeywords: ["moles", "iron", "0.10 mol"],
    modelAnswer: "Moles = 5.6 ÷ 56 = 0.10 mol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Multiplying mass by Ar.", "Avoid: Forgetting mol."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Moles. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the mass of carbon dioxide formed from 5.0 g of calcium carbonate. CaCO3 → CaO + CO2. Mr: CaCO3 = 100, CO2 = 44.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles CaCO3 = 5.0 ÷ 100 = 0.050 mol.",
        keywords: [["moles", "caco3"]],
      },
      {
        point: "Ratio CaCO3 : CO2 is 1 : 1.",
        keywords: [["ratio", "caco3"]],
      },
      {
        point: "Moles CO2 = 0.050 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mass = moles × Mr.",
        keywords: [["mass", "moles"]],
      },
      {
        point: "Mass CO2 = 0.050 × 44 = 2.2 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["calcium carbonate", "carbon dioxide", "moles", "2.2 g"],
    modelAnswer:
      "Moles of CaCO3 = 5.0 ÷ 100 = 0.050 mol. The ratio is 1:1, so 0.050 mol CO2 forms. Mass = 0.050 × 44 = 2.2 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: ["Avoid: Using 100 as Mr of CO2.", "Avoid: Ignoring mole ratio."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reacting masses. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why bond breaking is endothermic and bond making is exothermic.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Energy is needed to break bonds.",
        keywords: [["energy", "break", "bonds"]],
      },
      {
        point: "Therefore bond breaking is endothermic.",
        keywords: [["therefore", "bond", "breaking"]],
      },
      {
        point: "Energy is released when bonds form.",
        keywords: [["energy", "released", "bonds"]],
      },
      {
        point: "Therefore bond making is exothermic.",
        keywords: [["therefore", "bond", "making"]],
      },
    ],
    examinerKeywords: ["bond breaking", "bond making", "endothermic", "exothermic"],
    modelAnswer:
      "Energy is needed to break bonds, so bond breaking is endothermic. Energy is released when bonds form, so bond making is exothermic.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Reversing endothermic and exothermic.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Energy changes. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for H2 + Br2 → 2HBr. Bond energies: H-H = 436, Br-Br = 193, H-Br = 366 kJ/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Energy in = 436 + 193 = 629 kJ/mol.",
        keywords: [["energy"]],
      },
      {
        point: "Energy out = 2 × 366 = 732 kJ/mol.",
        keywords: [["energy"]],
      },
      {
        point: "Energy change = energy in - energy out.",
        keywords: [["energy", "change"]],
      },
      {
        point: "Energy change = 629 - 732.",
        keywords: [["energy", "change"]],
      },
      {
        point: "Energy change = -103 kJ/mol.",
        keywords: [["energy", "change", "-103"]],
      },
    ],
    examinerKeywords: ["bond energy", "energy change", "-103"],
    modelAnswer:
      "Energy in = 436 + 193 = 629. Energy out = 2 × 366 = 732. Energy change = 629 - 732 = -103 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: ["Avoid: Forgetting two H-Br bonds.", "Avoid: Missing the negative sign."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Bond energy. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products when nitric acid reacts with magnesium carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Magnesium nitrate.",
        keywords: [["magnesium", "nitrate"]],
      },
      {
        point: "Water.",
        keywords: [["water"]],
      },
      {
        point: "Carbon dioxide.",
        keywords: [["carbon", "dioxide"]],
      },
    ],
    examinerKeywords: ["acid", "carbonate", "magnesium nitrate", "carbon dioxide"],
    modelAnswer:
      "Nitric acid reacts with magnesium carbonate to form magnesium nitrate, water and carbon dioxide.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing hydrogen gas.", "Avoid: Naming the salt incorrectly."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Acids. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to prepare pure dry zinc sulfate crystals from zinc oxide and sulfuric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Warm dilute sulfuric acid.",
        keywords: [["warm", "dilute", "sulfuric"]],
      },
      {
        point: "Add excess zinc oxide.",
        keywords: [["excess", "zinc", "oxide"]],
      },
      {
        point: "Stir until no more reacts.",
        keywords: [["stir", "until", "more"]],
      },
      {
        point: "Filter off excess zinc oxide.",
        keywords: [["filter", "excess", "zinc"]],
      },
      {
        point: "Heat filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["cool", "filter", "crystals"]],
      },
    ],
    examinerKeywords: ["zinc sulfate", "zinc oxide", "sulfuric acid", "filter", "crystallise"],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess zinc oxide while stirring. Filter off excess solid, heat the filtrate until nearly saturated, then cool, filter and dry the crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Not using excess solid.", "Avoid: Evaporating completely to dryness."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Salt preparation. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products formed during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Lead forms at the cathode.",
        keywords: [["lead", "forms", "cathode"]],
      },
      {
        point: "Bromine forms at the anode.",
        keywords: [["bromine", "forms", "anode"]],
      },
    ],
    examinerKeywords: ["lead bromide", "lead", "bromine", "electrolysis"],
    modelAnswer: "Lead forms at the cathode and bromine forms at the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying hydrogen forms in molten lead bromide.",
      "Avoid: Saying oxygen forms at the anode.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Electrolysis. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define oxidation and reduction in terms of electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Oxidation is loss of electrons.",
        keywords: [["oxidation", "loss", "electrons"]],
      },
      {
        point: "Reduction is gain of electrons.",
        keywords: [["reduction", "gain", "electrons"]],
      },
    ],
    examinerKeywords: ["oxidation", "reduction", "electrons", "OIL RIG"],
    modelAnswer: "Oxidation is loss of electrons and reduction is gain of electrons.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Reversing oxidation and reduction.", "Avoid: Forgetting electrons."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Redox. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of calcium hydroxide, Ca(OH)2. Ar: Ca = 40, O = 16, H = 1.",
    marks: 3,
    markSchemePoints: [
      {
        point: "OH = 16 + 1 = 17.",
        keywords: [["relative formula mass", "calcium hydroxide"]],
      },
      {
        point: "Two hydroxide groups = 2 × 17 = 34.",
        keywords: [["hydroxide", "groups"]],
      },
      {
        point: "Mr = 40 + 34 = 74.",
        keywords: [["relative formula mass", "calcium hydroxide"]],
      },
    ],
    examinerKeywords: ["relative formula mass", "calcium hydroxide", "74"],
    modelAnswer: "Mr = 40 + 2(16 + 1) = 74.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting two hydroxide groups.", "Avoid: Counting oxygen only once."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Relative formula mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A reaction has a theoretical yield of 40.0 g and an actual yield of 30.0 g. Calculate the percentage yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage yield = actual yield ÷ theoretical yield × 100.",
        keywords: [["percentage", "yield", "actual"]],
      },
      {
        point: "Percentage yield = 30.0 ÷ 40.0 × 100.",
        keywords: [["percentage", "yield"]],
      },
      {
        point: "Percentage yield = 75.0%.",
        keywords: [["percentage", "yield"]],
      },
    ],
    examinerKeywords: ["percentage yield", "actual yield", "theoretical yield", "75%"],
    modelAnswer: "Percentage yield = 30.0 ÷ 40.0 × 100 = 75.0%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing theoretical by actual.", "Avoid: Writing 0.75%."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Percentage yield. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why nanoparticles can be effective catalysts.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Nanoparticles are very small.",
        keywords: [["nanoparticles", "very", "small"]],
      },
      {
        point: "They have a high surface area to volume ratio.",
        keywords: [["high", "surface", "area"]],
      },
      {
        point: "More reactant particles can contact the surface.",
        keywords: [["more", "reactant", "particles"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "catalysts", "surface area to volume ratio"],
    modelAnswer:
      "Nanoparticles are very small and have a high surface area to volume ratio, so more reactant particles can contact the surface.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying nanoparticles have low surface area.", "Avoid: Ignoring particle size."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Nanoparticles. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper13-mixed-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-1-3-mixed",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how structure and bonding affect melting point and electrical conductivity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices.",
        keywords: [["ionic", "compounds", "giant"]],
      },
      {
        point: "Strong electrostatic attractions give high melting points.",
        keywords: [["strong", "electrostatic", "attractions"]],
      },
      {
        point: "Ionic compounds conduct when molten or dissolved because ions are mobile.",
        keywords: [["ionic", "compounds", "conduct"]],
      },
      {
        point:
          "Simple molecular substances have weak intermolecular forces and low melting points.",
        keywords: [["simple", "molecular", "substances"]],
      },
      {
        point: "Metals conduct because they have delocalised electrons.",
        keywords: [["metals", "conduct", "delocalised"]],
      },
      {
        point: "Giant covalent structures have many strong covalent bonds and high melting points.",
        keywords: [["giant", "covalent", "structures"]],
      },
    ],
    examinerKeywords: ["structure", "bonding", "melting point", "conductivity"],
    modelAnswer:
      "Ionic compounds have giant lattices with strong attractions, so they have high melting points and conduct when ions are mobile. Simple molecular substances have weak intermolecular forces and low melting points. Metals conduct because of delocalised electrons. Giant covalent structures have many strong bonds and high melting points.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using the same explanation for every substance.",
      "Avoid: Forgetting mobile charge carriers.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why zinc displaces copper from copper sulfate solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Zinc is more reactive than copper.",
        keywords: [["zinc", "more", "reactive"]],
      },
      {
        point: "Zinc atoms lose electrons to form zinc ions.",
        keywords: [["zinc", "atoms", "lose"]],
      },
      {
        point: "Copper ions gain electrons to form copper atoms.",
        keywords: [["copper", "ions", "gain"]],
      },
      {
        point: "Copper is displaced.",
        keywords: [["copper", "displaced"]],
      },
    ],
    examinerKeywords: ["zinc", "copper sulfate", "displacement", "reactivity"],
    modelAnswer:
      "Zinc is more reactive than copper, so zinc displaces copper from copper sulfate. Zinc atoms lose electrons to form zinc ions, while copper ions gain electrons to form copper atoms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying copper is more reactive than zinc.",
      "Avoid: Not mentioning electron transfer.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reactivity series. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why aluminium is extracted by electrolysis rather than by reduction with carbon.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Aluminium is more reactive than carbon.",
        keywords: [["aluminium", "more", "reactive"]],
      },
      {
        point: "Carbon cannot reduce aluminium oxide.",
        keywords: [["carbon", "cannot", "reduce"]],
      },
      {
        point: "Electrolysis is needed.",
        keywords: [["electrolysis"]],
      },
    ],
    examinerKeywords: ["aluminium", "electrolysis", "carbon", "reactivity"],
    modelAnswer:
      "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide. Aluminium is therefore extracted by electrolysis.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying aluminium is below carbon.",
      "Avoid: Saying aluminium is extracted in a blast furnace.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extraction. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the difference between a strong acid and a weak acid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Strong acids fully ionise in water.",
        keywords: [["strong", "acids", "fully"]],
      },
      {
        point: "Weak acids partially ionise in water.",
        keywords: [["weak", "acids", "partially"]],
      },
      {
        point: "Strong acids produce more H+ ions.",
        keywords: [["strong", "acids", "produce"]],
      },
      {
        point: "Comparison should be for acids of the same concentration.",
        keywords: [["comparison", "should", "acids"]],
      },
    ],
    examinerKeywords: ["strong acid", "weak acid", "ionisation", "hydrogen ions"],
    modelAnswer:
      "A strong acid fully ionises in water, while a weak acid only partially ionises. For acids of the same concentration, a strong acid produces a higher concentration of H+ ions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying weak means dilute.", "Avoid: Saying strong means concentrated."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Strong and weak acids. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "data-response",
    questionType: "Identify",
    questionText:
      "A salt gives a lilac flame and a cream precipitate with acidified silver nitrate. Identify the salt.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lilac flame shows potassium ions.",
        keywords: [["lilac", "flame", "shows"]],
      },
      {
        point: "Cream precipitate shows bromide ions.",
        keywords: [["cream", "precipitate", "shows"]],
      },
      {
        point: "The salt is potassium bromide.",
        keywords: [["salt", "potassium", "bromide"]],
      },
    ],
    examinerKeywords: ["lilac flame", "cream precipitate", "potassium bromide"],
    modelAnswer:
      "The salt is potassium bromide. The lilac flame shows potassium ions and the cream precipitate shows bromide ions.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing potassium chloride.", "Avoid: Ignoring one test result."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Chemical tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why increasing concentration increases rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "There are more particles per unit volume.",
        keywords: [["more", "particles", "unit"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
      {
        point: "There are more successful collisions per second.",
        keywords: [["more", "successful", "collisions"]],
      },
    ],
    examinerKeywords: ["concentration", "rate", "collisions"],
    modelAnswer:
      "Increasing concentration means there are more particles per unit volume, so collisions and successful collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particles have more energy.",
      "Avoid: Confusing concentration with temperature.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rates. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a catalyst affects activation energy and rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst provides an alternative reaction pathway.",
        keywords: [["catalyst", "provides", "alternative"]],
      },
      {
        point: "The pathway has lower activation energy.",
        keywords: [["pathway", "lower", "activation"]],
      },
      {
        point: "More particles can react, so rate increases.",
        keywords: [["more", "particles", "react"]],
      },
    ],
    examinerKeywords: ["catalyst", "activation energy", "rate"],
    modelAnswer:
      "A catalyst provides an alternative pathway with lower activation energy, so more particles have enough energy to react and the rate increases.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying catalysts are used up.",
      "Avoid: Saying catalysts increase activation energy.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Catalysts. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe dynamic equilibrium.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Occurs in a closed system.",
        keywords: [["occurs", "closed", "system"]],
      },
      {
        point: "Forward and reverse reactions continue.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "Forward and reverse reactions occur at the same rate.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "Concentrations remain constant.",
        keywords: [["concentrations", "remain", "constant"]],
      },
    ],
    examinerKeywords: ["dynamic equilibrium", "closed system", "same rate", "constant"],
    modelAnswer:
      "Dynamic equilibrium occurs in a closed system when forward and reverse reactions continue at the same rate, so concentrations remain constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying reactions stop.", "Avoid: Saying concentrations must be equal."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Equilibrium. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why high pressure increases ammonia yield in the Haber process.",
    marks: 4,
    markSchemePoints: [
      {
        point: "There are more gas molecules on the reactant side.",
        keywords: [["more", "molecules", "reactant"]],
      },
      {
        point: "There are fewer gas molecules on the product side.",
        keywords: [["fewer", "molecules", "product"]],
      },
      {
        point: "High pressure favours the side with fewer gas molecules.",
        keywords: [["high", "pressure", "favours"]],
      },
      {
        point: "Equilibrium shifts towards ammonia.",
        keywords: [["equilibrium", "shifts", "towards"]],
      },
    ],
    examinerKeywords: ["Haber", "pressure", "ammonia", "gas molecules"],
    modelAnswer:
      "High pressure favours the side with fewer gas molecules. In the Haber process, the product side has fewer gas molecules, so equilibrium shifts towards ammonia.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying high pressure always shifts left.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Haber process. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how crude oil is separated into fractions.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Crude oil is heated and vaporised.",
        keywords: [["crude", "heated", "vaporised"]],
      },
      {
        point: "Vapours enter a fractionating column.",
        keywords: [["vapours", "enter", "fractionating"]],
      },
      {
        point: "The column is hot at the bottom and cooler at the top.",
        keywords: [["column", "bottom", "cooler"]],
      },
      {
        point: "Hydrocarbons condense at different heights.",
        keywords: [["hydrocarbons", "condense", "different"]],
      },
      {
        point: "Fractions are collected according to boiling point.",
        keywords: [["fractions", "collected", "according"]],
      },
    ],
    examinerKeywords: ["crude oil", "fractional distillation", "boiling point"],
    modelAnswer:
      "Crude oil is heated and vaporised. Vapours enter a fractionating column, which is hot at the bottom and cooler at the top. Hydrocarbons condense at different heights according to boiling point.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying crude oil is separated by filtration.",
      "Avoid: Forgetting boiling points.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Crude oil. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for alkenes.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add bromine water.",
        keywords: [["bromine", "water"]],
      },
      {
        point: "Shake the mixture.",
        keywords: [["shake", "mixture"]],
      },
      {
        point: "Bromine water changes from orange to colourless.",
        keywords: [["bromine", "water", "changes"]],
      },
    ],
    examinerKeywords: ["alkenes", "bromine water", "orange", "colourless"],
    modelAnswer:
      "Add bromine water and shake. An alkene changes bromine water from orange to colourless.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying it turns blue.", "Avoid: Using limewater."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Alkenes. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why oxygen levels increased in the atmosphere over time.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Algae and plants evolved.",
        keywords: [["algae", "plants", "evolved"]],
      },
      {
        point: "They carried out photosynthesis.",
        keywords: [["carried", "photosynthesis"]],
      },
      {
        point: "Photosynthesis released oxygen.",
        keywords: [["photosynthesis", "released", "oxygen"]],
      },
    ],
    examinerKeywords: ["oxygen", "photosynthesis", "plants", "algae"],
    modelAnswer:
      "Oxygen increased because algae and plants evolved and carried out photosynthesis, releasing oxygen into the atmosphere.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying respiration increased oxygen.", "Avoid: Forgetting photosynthesis."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atmosphere. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how greenhouse gases cause global warming.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The Earth's surface emits infrared radiation.",
        keywords: [["earth", "surface", "emits"]],
      },
      {
        point: "Greenhouse gases absorb infrared radiation.",
        keywords: [["greenhouse", "gases", "absorb"]],
      },
      {
        point: "Energy is re-radiated back towards Earth.",
        keywords: [["energy", "re-radiated", "back"]],
      },
      {
        point: "More greenhouse gases cause more energy to be retained.",
        keywords: [["more", "greenhouse", "gases"]],
      },
    ],
    examinerKeywords: ["greenhouse gases", "infrared", "global warming"],
    modelAnswer:
      "The Earth's surface emits infrared radiation. Greenhouse gases absorb this radiation and re-radiate energy back towards Earth, so more energy is retained and global temperature increases.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying greenhouse gases block all sunlight.",
      "Avoid: Forgetting infrared radiation.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Greenhouse effect. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how oxides of nitrogen are formed in car engines.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Car engines reach high temperatures.",
        keywords: [["engines", "reach", "high"]],
      },
      {
        point: "Nitrogen and oxygen from the air react.",
        keywords: [["nitrogen", "oxygen", "react"]],
      },
      {
        point: "Oxides of nitrogen are formed.",
        keywords: [["oxides", "nitrogen", "formed"]],
      },
    ],
    examinerKeywords: ["nitrogen oxides", "car engines", "high temperature", "air"],
    modelAnswer:
      "At high temperatures in car engines, nitrogen and oxygen from the air react to form oxides of nitrogen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying nitrogen oxides come only from sulfur in fuel.",
      "Avoid: Forgetting high temperature.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Pollution. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how fresh water is treated to make it potable.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sedimentation removes large solids.",
        keywords: [["sedimentation", "removes", "large"]],
      },
      {
        point: "Filtration removes insoluble particles.",
        keywords: [["filtration", "removes", "insoluble"]],
      },
      {
        point: "Sterilisation kills microbes.",
        keywords: [["sterilisation", "kills", "microbes"]],
      },
      {
        point: "Chlorine, ozone or ultraviolet light can be used.",
        keywords: [["chlorine", "ozone", "ultraviolet"]],
      },
    ],
    examinerKeywords: ["potable water", "sedimentation", "filtration", "sterilisation"],
    modelAnswer:
      "Fresh water is treated by sedimentation, filtration and sterilisation. Chlorine, ozone or ultraviolet light can be used to kill microbes.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying filtration removes dissolved salts.",
      "Avoid: Forgetting sterilisation.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Water treatment. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how pure water can be obtained from sea water by distillation.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sea water is heated.",
        keywords: [["water", "heated"]],
      },
      {
        point: "Water evaporates.",
        keywords: [["water", "evaporates"]],
      },
      {
        point: "Dissolved salts remain behind.",
        keywords: [["dissolved", "salts", "remain"]],
      },
      {
        point: "Water vapour condenses to form pure water.",
        keywords: [["water", "vapour", "condenses"]],
      },
    ],
    examinerKeywords: ["sea water", "distillation", "evaporation", "condensation"],
    modelAnswer:
      "Sea water is heated so water evaporates, leaving salts behind. The water vapour is cooled and condenses to form pure water.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying filtration removes dissolved salts.", "Avoid: Forgetting condensation."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Desalination. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why recycling metals reduces environmental impact.",
    marks: 4,
    markSchemePoints: [
      {
        point: "It reduces mining.",
        keywords: [["reduces", "mining"]],
      },
      {
        point: "It conserves finite ores.",
        keywords: [["conserves", "finite", "ores"]],
      },
      {
        point: "It can use less energy than extraction from ores.",
        keywords: [["less", "energy", "extraction"]],
      },
      {
        point: "It reduces waste sent to landfill.",
        keywords: [["reduces", "waste", "sent"]],
      },
    ],
    examinerKeywords: ["recycling", "metals", "environmental impact", "finite ores"],
    modelAnswer:
      "Recycling metals reduces mining, conserves finite ores, often uses less energy than extraction from ores and reduces landfill waste.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying recycling creates ores.", "Avoid: Only saying it is good."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Recycling. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText: "Suggest three ways to reduce a carbon footprint.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use renewable energy.",
        keywords: [["renewable", "energy"]],
      },
      {
        point: "Improve energy efficiency.",
        keywords: [["improve", "energy", "efficiency"]],
      },
      {
        point: "Use public transport or walk or cycle.",
        keywords: [["public", "transport", "walk"]],
      },
      {
        point: "Recycle materials.",
        keywords: [["recycle", "materials"]],
      },
      {
        point: "Reduce use of fossil fuels.",
        keywords: [["reduce", "fossil", "fuels"]],
      },
    ],
    examinerKeywords: ["carbon footprint", "renewable energy", "recycle", "transport"],
    modelAnswer:
      "A carbon footprint can be reduced by using renewable energy, improving energy efficiency and using public transport instead of cars.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Giving vague answers like be better.",
      "Avoid: Suggesting actions that increase emissions.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Carbon footprint. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain one environmental problem caused by polymer disposal.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Many polymers are non-biodegradable.",
        keywords: [["many", "polymers", "non-biodegradable"]],
      },
      {
        point: "They remain in landfill or the environment for a long time.",
        keywords: [["remain", "landfill", "environment"]],
      },
      {
        point: "They can harm wildlife or release toxic gases when burned.",
        keywords: [["harm", "wildlife", "release"]],
      },
    ],
    examinerKeywords: ["polymers", "disposal", "non-biodegradable", "wildlife"],
    modelAnswer:
      "Many polymers are non-biodegradable, so they remain in landfill or the environment for a long time and can harm wildlife.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying all polymers biodegrade quickly.", "Avoid: Not explaining the problem."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Polymers. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the three essential elements supplied by NPK fertilisers.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Nitrogen.",
        keywords: [["nitrogen"]],
      },
      {
        point: "Phosphorus.",
        keywords: [["phosphorus"]],
      },
      {
        point: "Potassium.",
        keywords: [["potassium"]],
      },
    ],
    examinerKeywords: ["NPK", "nitrogen", "phosphorus", "potassium"],
    modelAnswer: "NPK fertilisers supply nitrogen, phosphorus and potassium.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing sodium for K.", "Avoid: Forgetting potassium."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: NPK fertilisers. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-paper24-mixed-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "paper-2-4-mixed",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chemistry helps reduce problems caused by human use of resources.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Recycling conserves finite resources.",
        keywords: [["recycling", "conserves", "finite"]],
      },
      {
        point: "Water treatment provides potable water.",
        keywords: [["water", "treatment", "provides"]],
      },
      {
        point: "Waste water treatment reduces pollution.",
        keywords: [["waste", "water", "treatment"]],
      },
      {
        point: "Cracking makes more useful fuels from crude oil.",
        keywords: [["cracking", "makes", "more"]],
      },
      {
        point: "Understanding greenhouse gases helps reduce climate impact.",
        keywords: [["understanding", "greenhouse", "gases"]],
      },
      {
        point: "Using catalysts can reduce energy costs in industrial processes.",
        keywords: [["catalysts", "reduce", "energy"]],
      },
    ],
    examinerKeywords: ["resources", "recycling", "water treatment", "cracking", "greenhouse gases"],
    modelAnswer:
      "Chemistry helps by recycling materials, treating water and waste water, and using crude oil more efficiently through cracking. Understanding greenhouse gases helps reduce climate impact, and catalysts can reduce energy costs in industrial processes.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing recycling.",
      "Avoid: Not linking chemistry to resource problems.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Extended response. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-001",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of aluminium sulfate, Al2(SO4)3. Ar: Al = 27, S = 32, O = 16.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of Al2 = 2 × 27 = 54.",
        keywords: [["mass"]],
      },
      {
        point: "Mass of SO4 = 32 + 4 × 16 = 96.",
        keywords: [["mass"]],
      },
      {
        point: "Mass of three sulfate groups = 3 × 96 = 288.",
        keywords: [["mass", "three", "sulfate"]],
      },
      {
        point: "Mr = 54 + 288 = 342.",
        keywords: [["relative formula mass", "aluminium sulfate"]],
      },
    ],
    examinerKeywords: ["relative formula mass", "aluminium sulfate", "342"],
    modelAnswer: "Mr = (2 × 27) + 3(32 + 4 × 16) = 54 + 288 = 342.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Forgetting three sulfate groups.", "Avoid: Multiplying only sulfur by three."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Relative formula mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-002",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the percentage by mass of oxygen in magnesium oxide, MgO. Ar: Mg = 24, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Mr of MgO = 24 + 16 = 40.",
        keywords: [["percentage by mass", "oxygen"]],
      },
      {
        point: "Percentage oxygen = 16 ÷ 40 × 100.",
        keywords: [["percentage", "oxygen"]],
      },
      {
        point: "Percentage oxygen = 40%.",
        keywords: [["percentage", "oxygen"]],
      },
    ],
    examinerKeywords: ["percentage by mass", "oxygen", "magnesium oxide", "40%"],
    modelAnswer: "Mr of MgO = 40. Percentage oxygen = 16 ÷ 40 × 100 = 40%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing 40 by 16.", "Avoid: Forgetting ×100."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Percentage by mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-003",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "Calculate the mass of 0.25 mol of carbon dioxide. Mr: CO2 = 44.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Mass = moles × Mr.",
        keywords: [["mass", "moles"]],
      },
      {
        point: "Mass = 0.25 × 44 = 11 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["mass", "moles", "carbon dioxide", "11 g"],
    modelAnswer: "Mass = 0.25 × 44 = 11 g.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Dividing 0.25 by 44.", "Avoid: Forgetting units."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Moles. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-004",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with oxygen: 2Mg + O2 → 2MgO. Calculate the mass of magnesium oxide formed from 4.8 g magnesium. Ar: Mg = 24, O = 16.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles Mg = 4.8 ÷ 24 = 0.20 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mole ratio Mg : MgO is 1 : 1.",
        keywords: [["mole", "ratio"]],
      },
      {
        point: "Moles MgO = 0.20 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mr MgO = 40.",
        keywords: [["reacting masses", "magnesium oxide"]],
      },
      {
        point: "Mass MgO = 0.20 × 40 = 8.0 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["reacting masses", "magnesium oxide", "8.0 g"],
    modelAnswer:
      "Moles Mg = 4.8 ÷ 24 = 0.20 mol. Ratio Mg:MgO is 1:1, so 0.20 mol MgO forms. Mass = 0.20 × 40 = 8.0 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using the coefficient 2 as a mass multiplier.",
      "Avoid: Using 24 as Mr of magnesium oxide.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Reacting masses. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-005",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the volume of 0.50 mol of gas at room temperature and pressure. Molar gas volume = 24 dm3/mol.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Volume = moles × molar gas volume.",
        keywords: [["volume", "moles", "molar"]],
      },
      {
        point: "Volume = 0.50 × 24 = 12 dm3.",
        keywords: [["volume"]],
      },
    ],
    examinerKeywords: ["gas volume", "moles", "12 dm3"],
    modelAnswer: "Volume = 0.50 × 24 = 12 dm3.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Dividing by 24.", "Avoid: Forgetting units."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas volumes. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-006",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl2 + H2. Calculate the volume of hydrogen produced from 2.4 g magnesium at room temperature and pressure. Ar: Mg = 24. Molar gas volume = 24 dm3/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles Mg = 2.4 ÷ 24 = 0.10 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Ratio Mg : H2 is 1 : 1.",
        keywords: [["ratio"]],
      },
      {
        point: "Moles H2 = 0.10 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Volume = 0.10 × 24.",
        keywords: [["volume"]],
      },
      {
        point: "Volume = 2.4 dm3.",
        keywords: [["volume"]],
      },
    ],
    examinerKeywords: ["magnesium", "hydrogen", "gas volume", "2.4 dm3"],
    modelAnswer:
      "Moles Mg = 2.4 ÷ 24 = 0.10 mol. Ratio Mg:H2 is 1:1, so 0.10 mol H2 forms. Volume = 0.10 × 24 = 2.4 dm3.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: ["Avoid: Using the 2 before HCl incorrectly.", "Avoid: Forgetting gas volume."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Gas volume from mass. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-007",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the concentration in g/dm3 when 5.0 g of sodium chloride is dissolved to make 250 cm3 of solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert 250 cm3 to 0.250 dm3.",
        keywords: [["convert"]],
      },
      {
        point: "Concentration = mass ÷ volume.",
        keywords: [["concentration", "mass", "volume"]],
      },
      {
        point: "Concentration = 5.0 ÷ 0.250.",
        keywords: [["concentration"]],
      },
      {
        point: "Concentration = 20 g/dm3.",
        keywords: [["concentration"]],
      },
    ],
    examinerKeywords: ["concentration", "g/dm3", "20"],
    modelAnswer: "250 cm3 = 0.250 dm3. Concentration = 5.0 ÷ 0.250 = 20 g/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Not converting cm3 to dm3.", "Avoid: Dividing volume by mass."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Concentration. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-008",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "25.0 cm3 of 0.100 mol/dm3 sodium hydroxide is neutralised by hydrochloric acid. Calculate the moles of sodium hydroxide used.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Convert 25.0 cm3 to 0.0250 dm3.",
        keywords: [["convert", "0250"]],
      },
      {
        point: "Moles = concentration × volume.",
        keywords: [["moles", "concentration", "volume"]],
      },
      {
        point: "Moles = 0.100 × 0.0250 = 0.00250 mol.",
        keywords: [["moles", "0250", "00250"]],
      },
    ],
    examinerKeywords: ["titration", "moles", "0.00250 mol"],
    modelAnswer: "25.0 cm3 = 0.0250 dm3. Moles NaOH = 0.100 × 0.0250 = 0.00250 mol.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Not converting cm3 to dm3.", "Avoid: Dividing concentration by volume."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Titration. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-009",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A compound contains 24 g carbon and 6 g hydrogen. Calculate its empirical formula. Ar: C = 12, H = 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Moles carbon = 24 ÷ 12 = 2.",
        keywords: [["moles", "carbon"]],
      },
      {
        point: "Moles hydrogen = 6 ÷ 1 = 6.",
        keywords: [["moles", "hydrogen"]],
      },
      {
        point: "Ratio C:H = 2:6 = 1:3.",
        keywords: [["ratio"]],
      },
      {
        point: "Empirical formula = CH3.",
        keywords: [["empirical", "formula"]],
      },
    ],
    examinerKeywords: ["empirical formula", "carbon", "hydrogen", "CH3"],
    modelAnswer:
      "Moles C = 24 ÷ 12 = 2. Moles H = 6. Ratio = 2:6 = 1:3, so empirical formula is CH3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Using masses directly as the ratio.", "Avoid: Not simplifying the ratio."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Empirical formula. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-010",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for CH4 + 2O2 → CO2 + 2H2O. Bond energies: C-H = 413, O=O = 498, C=O = 805, O-H = 464 kJ/mol.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Energy in = 4(C-H) + 2(O=O).",
        keywords: [["energy"]],
      },
      {
        point: "Energy in = 4 × 413 + 2 × 498 = 2648 kJ/mol.",
        keywords: [["energy", "2648"]],
      },
      {
        point: "Energy out = 2(C=O) + 4(O-H).",
        keywords: [["energy"]],
      },
      {
        point: "Energy out = 2 × 805 + 4 × 464 = 3466 kJ/mol.",
        keywords: [["energy", "3466"]],
      },
      {
        point: "Energy change = energy in - energy out.",
        keywords: [["energy", "change"]],
      },
      {
        point: "Energy change = 2648 - 3466 = -818 kJ/mol.",
        keywords: [["energy", "change", "2648"]],
      },
    ],
    examinerKeywords: ["bond energy", "methane", "combustion", "-818"],
    modelAnswer:
      "Energy in = 4 × 413 + 2 × 498 = 2648 kJ/mol. Energy out = 2 × 805 + 4 × 464 = 3466 kJ/mol. Energy change = 2648 - 3466 = -818 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Forgetting four C-H bonds.", "Avoid: Doing energy out minus energy in."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Bond energy. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-011",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare ionic, covalent and metallic bonding.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic bonding involves electron transfer.",
        keywords: [["ionic", "bonding", "involves"]],
      },
      {
        point: "Ionic bonding is attraction between oppositely charged ions.",
        keywords: [["ionic", "bonding", "attraction"]],
      },
      {
        point: "Covalent bonding involves sharing pairs of electrons.",
        keywords: [["covalent", "bonding", "involves"]],
      },
      {
        point: "Covalent bonding usually occurs between non-metals.",
        keywords: [["covalent", "bonding", "usually"]],
      },
      {
        point:
          "Metallic bonding is attraction between positive metal ions and delocalised electrons.",
        keywords: [["metallic", "bonding", "attraction"]],
      },
      {
        point: "Delocalised electrons allow metals to conduct.",
        keywords: [["delocalised", "electrons", "allow"]],
      },
    ],
    examinerKeywords: ["ionic", "covalent", "metallic", "electrons"],
    modelAnswer:
      "Ionic bonding involves electron transfer and attraction between oppositely charged ions. Covalent bonding involves shared pairs of electrons, usually between non-metals. Metallic bonding is attraction between positive metal ions and delocalised electrons.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Saying ionic bonding is sharing.", "Avoid: Forgetting delocalised electrons."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Bonding comparison. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-012",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 3",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain oxidation and reduction using electrolysis of molten lead(II) bromide.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Pb2+ ions move to the cathode.",
        keywords: [["ions", "move", "cathode"]],
      },
      {
        point: "Pb2+ ions gain electrons to form lead.",
        keywords: [["ions", "gain", "electrons"]],
      },
      {
        point: "Gain of electrons is reduction.",
        keywords: [["gain", "electrons", "reduction"]],
      },
      {
        point: "Br- ions move to the anode.",
        keywords: [["ions", "move", "anode"]],
      },
      {
        point: "Br- ions lose electrons to form bromine.",
        keywords: [["ions", "lose", "electrons"]],
      },
      {
        point: "Loss of electrons is oxidation.",
        keywords: [["loss", "electrons", "oxidation"]],
      },
    ],
    examinerKeywords: ["electrolysis", "oxidation", "reduction", "lead bromide"],
    modelAnswer:
      "Pb2+ ions move to the cathode and gain electrons to form lead, so they are reduced. Br- ions move to the anode and lose electrons to form bromine, so they are oxidised.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Reversing oxidation and reduction.", "Avoid: Putting lead ions at the anode."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Electrolysis redox. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-013",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how concentration affects rate of reaction and how this can be investigated.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Higher concentration means more particles per unit volume.",
        keywords: [["higher", "concentration", "means"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
      {
        point: "There are more successful collisions per second.",
        keywords: [["more", "successful", "collisions"]],
      },
      {
        point: "Use different acid concentrations.",
        keywords: [["different", "acid", "concentrations"]],
      },
      {
        point: "Keep temperature, volume and mass or surface area constant.",
        keywords: [["keep", "temperature", "volume"]],
      },
      {
        point: "Measure gas volume over time or time for a fixed change.",
        keywords: [["measure", "volume", "over"]],
      },
    ],
    examinerKeywords: ["concentration", "rate", "collision theory", "control variables"],
    modelAnswer:
      "Higher concentration gives more particles per unit volume, so collisions and successful collisions happen more frequently. Investigate using different concentrations while controlling temperature, volume and solid mass or surface area, then measure gas volume over time.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying concentration changes activation energy.",
      "Avoid: Not controlling variables.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Rates and practicals. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-014",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how temperature, pressure and catalyst affect the Haber process.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Forward reaction is exothermic.",
        keywords: [["forward", "reaction", "exothermic"]],
      },
      {
        point: "Lower temperature gives higher ammonia yield but slower rate.",
        keywords: [["lower", "temperature", "gives"]],
      },
      {
        point: "A compromise temperature is used.",
        keywords: [["compromise", "temperature", "used"]],
      },
      {
        point: "High pressure favours the side with fewer gas molecules.",
        keywords: [["high", "pressure", "favours"]],
      },
      {
        point: "High pressure increases ammonia yield but is expensive.",
        keywords: [["high", "pressure", "increases"]],
      },
      {
        point: "Iron catalyst increases rate but does not change equilibrium yield.",
        keywords: [["iron", "catalyst", "increases"]],
      },
    ],
    examinerKeywords: ["Haber", "temperature", "pressure", "catalyst", "yield"],
    modelAnswer:
      "The forward reaction is exothermic, so lower temperature gives higher yield but slower rate, so a compromise is used. High pressure favours ammonia because there are fewer gas molecules on the product side but is expensive. Iron catalyst increases rate but not yield.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying catalysts increase yield.",
      "Avoid: Counting atoms instead of gas molecules.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Haber process. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-015",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how crude oil is separated and how cracking increases the usefulness of crude oil fractions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Crude oil is a mixture of hydrocarbons.",
        keywords: [["crude", "mixture", "hydrocarbons"]],
      },
      {
        point: "Fractional distillation separates hydrocarbons by boiling point.",
        keywords: [["fractional", "distillation", "separates"]],
      },
      {
        point: "Long-chain hydrocarbons are less useful and less flammable.",
        keywords: [["long-chain", "hydrocarbons", "less"]],
      },
      {
        point: "Cracking breaks long-chain hydrocarbons into shorter hydrocarbons.",
        keywords: [["cracking", "breaks", "long-chain"]],
      },
      {
        point: "Cracking produces alkanes and alkenes.",
        keywords: [["cracking", "produces", "alkanes"]],
      },
      {
        point: "Alkenes can be used to make polymers.",
        keywords: [["alkenes", "used", "make"]],
      },
    ],
    examinerKeywords: ["crude oil", "fractional distillation", "cracking", "alkenes", "polymers"],
    modelAnswer:
      "Crude oil is separated by fractional distillation because its hydrocarbons have different boiling points. Cracking breaks less useful long-chain hydrocarbons into shorter alkanes and alkenes. Alkenes can be used to make polymers.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Saying crude oil is pure.", "Avoid: Saying cracking joins molecules together."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Organic chemistry. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-016",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how the Earth's atmosphere changed over time.",
    marks: 6,
    markSchemePoints: [
      {
        point: "The early atmosphere contained large amounts of carbon dioxide and water vapour.",
        keywords: [["early", "atmosphere", "contained"]],
      },
      {
        point: "Water vapour condensed to form oceans.",
        keywords: [["water", "vapour", "condensed"]],
      },
      {
        point: "Carbon dioxide dissolved in oceans.",
        keywords: [["carbon", "dioxide", "dissolved"]],
      },
      {
        point: "Carbon dioxide became locked in carbonates and sedimentary rocks.",
        keywords: [["carbon", "dioxide", "became"]],
      },
      {
        point: "Algae and plants photosynthesised.",
        keywords: [["algae", "plants", "photosynthesised"]],
      },
      {
        point: "Photosynthesis reduced carbon dioxide and increased oxygen.",
        keywords: [["photosynthesis", "reduced", "carbon"]],
      },
    ],
    examinerKeywords: ["early atmosphere", "carbon dioxide", "oxygen", "photosynthesis"],
    modelAnswer:
      "The early atmosphere contained much carbon dioxide and water vapour. As Earth cooled, water vapour condensed to form oceans. Carbon dioxide dissolved in oceans and became locked in rocks. Algae and plants photosynthesised, reducing carbon dioxide and increasing oxygen.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Saying oxygen was always 21%.", "Avoid: Forgetting oceans or photosynthesis."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Atmosphere. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-017",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain environmental problems caused by burning fossil fuels.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Complete combustion produces carbon dioxide.",
        keywords: [["complete", "combustion", "produces"]],
      },
      {
        point: "Carbon dioxide is a greenhouse gas linked to climate change.",
        keywords: [["carbon", "dioxide", "greenhouse"]],
      },
      {
        point: "Incomplete combustion produces carbon monoxide.",
        keywords: [["incomplete", "combustion", "produces"]],
      },
      {
        point: "Carbon monoxide is toxic because it reduces oxygen transport in blood.",
        keywords: [["carbon", "monoxide", "toxic"]],
      },
      {
        point: "Sulfur dioxide and oxides of nitrogen can form.",
        keywords: [["sulfur", "dioxide", "oxides"]],
      },
      {
        point: "Sulfur dioxide and oxides of nitrogen cause acid rain.",
        keywords: [["sulfur", "dioxide", "oxides"]],
      },
    ],
    examinerKeywords: ["fossil fuels", "carbon dioxide", "carbon monoxide", "acid rain"],
    modelAnswer:
      "Burning fossil fuels produces carbon dioxide, which is linked to climate change. Incomplete combustion produces toxic carbon monoxide. Sulfur dioxide and oxides of nitrogen can also form and cause acid rain.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only mentioning carbon dioxide.",
      "Avoid: Confusing carbon monoxide and carbon dioxide.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Pollution. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-018",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how recycling, renewable resources and efficient industrial processes support sustainability.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Recycling conserves finite resources.",
        keywords: [["recycling", "conserves", "finite"]],
      },
      {
        point: "Recycling reduces waste sent to landfill.",
        keywords: [["recycling", "reduces", "waste"]],
      },
      {
        point: "Renewable resources can be replaced more quickly.",
        keywords: [["renewable", "resources", "replaced"]],
      },
      {
        point: "Using renewable resources reduces dependence on finite resources.",
        keywords: [["renewable", "resources", "reduces"]],
      },
      {
        point: "Catalysts can lower energy costs in industrial processes.",
        keywords: [["catalysts", "lower", "energy"]],
      },
      {
        point: "Efficient processes reduce waste and improve atom economy.",
        keywords: [["efficient", "processes", "reduce"]],
      },
    ],
    examinerKeywords: [
      "sustainability",
      "recycling",
      "renewable resources",
      "catalysts",
      "atom economy",
    ],
    modelAnswer:
      "Recycling conserves finite resources and reduces landfill waste. Renewable resources can be replaced more quickly, reducing dependence on finite resources. Catalysts and efficient processes reduce energy costs, waste and improve atom economy.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing recycling.",
      "Avoid: Confusing renewable and finite resources.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Sustainability. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-019",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 2 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chemical tests can identify unknown ions and gases.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Flame tests identify some metal ions by flame colour.",
        keywords: [["flame", "tests", "identify"]],
      },
      {
        point: "Sodium hydroxide identifies some cations by precipitate colour.",
        keywords: [["sodium", "hydroxide", "identifies"]],
      },
      {
        point: "Acidified silver nitrate identifies halide ions by precipitate colour.",
        keywords: [["acidified", "silver", "nitrate"]],
      },
      {
        point: "Barium chloride identifies sulfate ions by a white precipitate.",
        keywords: [["barium", "chloride", "identifies"]],
      },
      {
        point: "Carbonates produce carbon dioxide with acid.",
        keywords: [["carbonates", "produce", "carbon"]],
      },
      {
        point: "Gas tests identify hydrogen, oxygen and carbon dioxide.",
        keywords: [["tests", "identify", "hydrogen"]],
      },
    ],
    examinerKeywords: ["chemical tests", "ions", "gases", "flame tests", "precipitates"],
    modelAnswer:
      "Flame tests identify some metal ions by flame colour. Sodium hydroxide identifies cations by precipitate colour. Silver nitrate identifies halides and barium chloride identifies sulfates. Carbonates produce carbon dioxide with acid, and gas tests identify hydrogen, oxygen and carbon dioxide.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using one test for every ion.",
      "Avoid: Not linking observations to identities.",
    ],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Chemical tests. Use precise markscheme language and link observations to conclusions.",
  },
  {
    id: "ocr-gateway-chemistry-high-calc-020",
    qualification: "GCSE",
    examBoard: "ocr-gcse",
    subject: "chemistry",
    topic: "high-mark-calculation",
    paper: "Paper 1 / Paper 2 / Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how particles, electrons, energy and resources link different areas of chemistry.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Particle theory explains states of matter and rates of reaction.",
        keywords: [["particle", "theory", "explains"]],
      },
      {
        point: "Electron transfer explains ionic bonding, redox and electrolysis.",
        keywords: [["electron", "transfer", "explains"]],
      },
      {
        point: "Shared electrons explain covalent bonding.",
        keywords: [["shared", "electrons", "explain"]],
      },
      {
        point: "Energy changes explain exothermic and endothermic reactions.",
        keywords: [["energy", "changes", "explain"]],
      },
      {
        point: "Activation energy and collision theory explain rates.",
        keywords: [["activation", "energy", "collision"]],
      },
      {
        point: "Resource chemistry explains recycling, crude oil use and environmental impacts.",
        keywords: [["resource", "chemistry", "explains"]],
      },
    ],
    examinerKeywords: ["particles", "electrons", "energy", "resources", "synoptic"],
    modelAnswer:
      "Particle theory explains states of matter and rates. Electron transfer explains ionic bonding, redox and electrolysis, while shared electrons explain covalent bonding. Energy changes explain exothermic and endothermic reactions, and activation energy links to rates. Resource chemistry links crude oil, recycling and environmental impacts.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Only discussing one topic.", "Avoid: Not linking ideas across the course."],
    examinerTip:
      "OCR Gateway GCSE Chemistry J248: Whole-course synoptic. Use precise markscheme language and link observations to conclusions.",
  },
];
