import type { Question } from "./questionBank";

export const OXFORD_AQA_CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: "oxfordaqa-chemistry-atomic-structure-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the arrangement and movement of particles in a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles are closely packed.",
        keywords: [["closely packed", "closely", "packed"]],
      },
      {
        point: "Particles are in fixed positions.",
        keywords: [["fixed positions", "fixed", "positions"]],
      },
      {
        point: "Particles vibrate about fixed positions.",
        keywords: [
          ["fixed positions", "fixed", "positions"],
          ["vibrate", "vibrate"],
        ],
      },
    ],
    examinerKeywords: ["solid", "closely packed", "fixed positions", "vibrate"],
    modelAnswer:
      "In a solid, particles are closely packed in fixed positions and vibrate about those fixed positions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about States of matter.",
      "Avoid: Saying particles in a solid do not move at all.",
      "Avoid: Saying particles move freely.",
    ],
    examinerTip: "Avoid this common mistake: Saying particles in a solid do not move at all.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the arrangement and movement of particles in a gas.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles are far apart.",
        keywords: [["far apart", "apart"]],
      },
      {
        point: "Particles are randomly arranged.",
        keywords: [["random", "random"]],
      },
      {
        point: "Particles move quickly and randomly in all directions.",
        keywords: [
          ["random", "random"],
          ["all directions", "directions"],
        ],
      },
    ],
    examinerKeywords: ["gas", "far apart", "random", "all directions"],
    modelAnswer:
      "In a gas, particles are far apart and randomly arranged. They move quickly and randomly in all directions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about States of matter.",
      "Avoid: Saying gas particles are close together.",
      "Avoid: Saying gas particles only vibrate.",
    ],
    examinerTip: "Avoid this common mistake: Saying gas particles are close together.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain what happens to particles when a liquid boils.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles gain kinetic energy.",
        keywords: [["kinetic energy", "kinetic", "energy"]],
      },
      {
        point: "Particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Forces between particles are overcome.",
        keywords: [["forces", "forces"]],
      },
      {
        point: "Particles become far apart and form a gas.",
        keywords: [["gas"]],
      },
    ],
    examinerKeywords: ["boiling", "kinetic energy", "forces", "gas"],
    modelAnswer:
      "When a liquid boils, its particles gain kinetic energy and move faster. The forces between particles are overcome, so the particles move far apart and form a gas.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Changes of state.",
      "Avoid: Saying particles are destroyed.",
      "Avoid: Saying covalent bonds always break during boiling.",
    ],
    examinerTip: "Avoid this common mistake: Saying particles are destroyed.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define diffusion.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Diffusion is the net movement of particles.",
        keywords: [["diffusion", "diffusion"]],
      },
      {
        point: "Particles move from a region of higher concentration to lower concentration.",
        keywords: [
          ["higher concentration", "higher", "concentration"],
          ["lower concentration", "lower", "concentration"],
        ],
      },
      {
        point: "Movement is due to random motion.",
        keywords: [["random motion", "random", "motion"]],
      },
    ],
    examinerKeywords: ["diffusion", "higher concentration", "lower concentration", "random motion"],
    modelAnswer:
      "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration due to random motion.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Diffusion.",
      "Avoid: Saying particles move from low to high concentration.",
      "Avoid: Forgetting random motion.",
    ],
    examinerTip: "Avoid this common mistake: Saying particles move from low to high concentration.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define element.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An element contains only one type of atom.",
        keywords: [
          ["element", "element"],
          ["one type of atom", "type", "atom"],
        ],
      },
      {
        point: "It cannot be broken down into simpler substances by chemical means.",
        keywords: [["chemical means", "chemical", "means"]],
      },
    ],
    examinerKeywords: ["element", "one type of atom", "chemical means"],
    modelAnswer:
      "An element is a substance that contains only one type of atom and cannot be broken down into simpler substances by chemical means.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Atoms and elements.",
      "Avoid: Saying an element contains different atoms chemically bonded.",
      "Avoid: Confusing element with compound.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying an element contains different atoms chemically bonded.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define compound.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A compound contains two or more different elements.",
        keywords: [
          ["compound", "compound"],
          ["different elements", "different", "elements"],
        ],
      },
      {
        point: "The elements are chemically bonded.",
        keywords: [
          ["different elements", "different", "elements"],
          ["chemically bonded", "chemically", "bonded"],
        ],
      },
      {
        point: "The elements are combined in fixed proportions.",
        keywords: [
          ["different elements", "different", "elements"],
          ["fixed proportions", "fixed", "proportions"],
        ],
      },
    ],
    examinerKeywords: ["compound", "different elements", "chemically bonded", "fixed proportions"],
    modelAnswer:
      "A compound contains two or more different elements chemically bonded together in fixed proportions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Compounds.",
      "Avoid: Saying compounds are mixtures.",
      "Avoid: Forgetting chemically bonded.",
    ],
    examinerTip: "Avoid this common mistake: Saying compounds are mixtures.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the relative charges of protons, neutrons and electrons.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Proton has charge +1.",
        keywords: [
          ["proton", "proton"],
          ["charge", "charge"],
        ],
      },
      {
        point: "Neutron has charge 0.",
        keywords: [
          ["neutron", "neutron"],
          ["charge", "charge"],
        ],
      },
      {
        point: "Electron has charge -1.",
        keywords: [
          ["electron", "electron"],
          ["charge", "charge"],
        ],
      },
    ],
    examinerKeywords: ["proton", "neutron", "electron", "charge"],
    modelAnswer: "A proton has charge +1, a neutron has charge 0 and an electron has charge -1.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Atomic structure.",
      "Avoid: Saying neutrons are positive.",
      "Avoid: Saying electrons are positive.",
    ],
    examinerTip: "Avoid this common mistake: Saying neutrons are positive.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the relative masses of protons, neutrons and electrons.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Proton has relative mass 1.",
        keywords: [
          ["relative mass", "relative", "mass"],
          ["proton", "proton"],
        ],
      },
      {
        point: "Neutron has relative mass 1.",
        keywords: [
          ["relative mass", "relative", "mass"],
          ["neutron", "neutron"],
        ],
      },
      {
        point: "Electron has very small or negligible relative mass.",
        keywords: [
          ["relative mass", "relative", "mass"],
          ["electron", "electron"],
        ],
      },
    ],
    examinerKeywords: ["relative mass", "proton", "neutron", "electron"],
    modelAnswer:
      "Protons and neutrons each have relative mass 1. Electrons have a very small relative mass, often treated as negligible.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Atomic structure.",
      "Avoid: Saying electrons have relative mass 1.",
      "Avoid: Saying neutrons have no mass.",
    ],
    examinerTip: "Avoid this common mistake: Saying electrons have relative mass 1.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "An atom has atomic number 13 and mass number 27. Calculate the number of protons, neutrons and electrons in the atom.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of protons = 13.",
        keywords: [
          ["atomic number", "atomic", "number"],
          ["mass number", "mass", "number"],
        ],
      },
      {
        point: "Number of electrons = 13 for a neutral atom.",
        keywords: [
          ["atomic number", "atomic", "number"],
          ["mass number", "mass", "number"],
        ],
      },
      {
        point: "Number of neutrons = mass number - atomic number.",
        keywords: [
          ["atomic number", "atomic", "number"],
          ["mass number", "mass", "number"],
        ],
      },
      {
        point: "Number of neutrons = 27 - 13 = 14.",
        keywords: [
          ["atomic number", "atomic", "number"],
          ["mass number", "mass", "number"],
        ],
      },
    ],
    examinerKeywords: ["atomic number", "mass number", "protons", "neutrons", "electrons"],
    modelAnswer:
      "The atom has 13 protons. Since it is neutral, it has 13 electrons. Number of neutrons = 27 - 13 = 14.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Atomic number and mass number.",
      "Avoid: Adding atomic number and mass number.",
      "Avoid: Including electrons in mass number.",
    ],
    examinerTip: "Avoid this common mistake: Adding atomic number and mass number.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define isotope.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Isotopes are atoms of the same element.",
        keywords: [
          ["isotopes", "isotopes"],
          ["same element", "same", "element"],
        ],
      },
      {
        point: "They have the same number of protons.",
        keywords: [
          ["same element", "same", "element"],
          ["same protons", "same", "protons"],
        ],
      },
      {
        point: "They have different numbers of neutrons.",
        keywords: [["different neutrons", "different", "neutrons"]],
      },
    ],
    examinerKeywords: ["isotopes", "same element", "same protons", "different neutrons"],
    modelAnswer:
      "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Isotopes.",
      "Avoid: Saying isotopes have different proton numbers.",
      "Avoid: Saying isotopes are different elements.",
    ],
    examinerTip: "Avoid this common mistake: Saying isotopes have different proton numbers.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why isotopes of the same element have the same chemical properties.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They have the same number of electrons.",
        keywords: [["outer electrons", "outer", "electrons"]],
      },
      {
        point: "They have the same electronic structure.",
        keywords: [["electronic structure", "electronic", "structure"]],
      },
      {
        point: "Chemical properties depend on outer-shell electrons.",
        keywords: [
          ["chemical properties", "chemical", "properties"],
          ["outer electrons", "outer", "electrons"],
        ],
      },
    ],
    examinerKeywords: [
      "isotopes",
      "chemical properties",
      "electronic structure",
      "outer electrons",
    ],
    modelAnswer:
      "Isotopes of the same element have the same number of electrons and the same electronic structure. Chemical properties depend on outer-shell electrons, so isotopes react in the same way.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Isotopes.",
      "Avoid: Saying chemical properties depend mainly on neutrons.",
      "Avoid: Saying isotopes have different electron arrangements.",
    ],
    examinerTip: "Avoid this common mistake: Saying chemical properties depend mainly on neutrons.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText: "Write the electronic structure of an atom with 16 electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "First shell contains 2 electrons.",
        keywords: [["16 electrons", "electrons"]],
      },
      {
        point: "Electronic structure is 2,8,6.",
        keywords: [
          ["electronic structure", "electronic", "structure"],
          ["2,8,6", "2,8,6"],
        ],
      },
    ],
    examinerKeywords: ["electronic structure", "16 electrons", "2,8,6"],
    modelAnswer: "2,8,6",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Electronic structure.",
      "Avoid: Writing 2,6,8.",
      "Avoid: Putting all 16 electrons in one shell.",
    ],
    examinerTip: "Avoid this common mistake: Writing 2,6,8.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State how elements are arranged in the modern periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Elements are arranged in order of increasing atomic number.",
        keywords: [["atomic number", "atomic", "number"]],
      },
      {
        point: "Elements with similar chemical properties are in the same group.",
        keywords: [["similar properties", "similar", "properties"]],
      },
    ],
    examinerKeywords: ["periodic table", "atomic number", "groups", "similar properties"],
    modelAnswer:
      "Elements are arranged in order of increasing atomic number, with elements that have similar chemical properties in the same group.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Periodic table.",
      "Avoid: Saying elements are arranged only by mass.",
      "Avoid: Forgetting atomic number.",
    ],
    examinerTip: "Avoid this common mistake: Saying elements are arranged only by mass.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how group number and period number are linked to electronic structure.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "For main group elements, group number is linked to the number of outer-shell electrons.",
        keywords: [
          ["group number", "group", "number"],
          ["period number", "period", "number"],
        ],
      },
      {
        point: "Elements in the same group have the same number of outer-shell electrons.",
        keywords: [
          ["group number", "group", "number"],
          ["period number", "period", "number"],
        ],
      },
      {
        point: "Period number shows the number of occupied electron shells.",
        keywords: [
          ["group number", "group", "number"],
          ["period number", "period", "number"],
        ],
      },
      {
        point: "Elements in the same period have the same number of occupied shells.",
        keywords: [
          ["group number", "group", "number"],
          ["period number", "period", "number"],
        ],
      },
    ],
    examinerKeywords: ["group number", "period number", "outer-shell electrons", "electron shells"],
    modelAnswer:
      "For main group elements, the group number is linked to the number of outer-shell electrons. Elements in the same group have the same number of outer electrons. The period number shows the number of occupied electron shells.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Groups and periods.",
      "Avoid: Saying group number equals number of shells.",
      "Avoid: Saying period number equals outer electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying group number equals number of shells.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the general positions of metals and non-metals in the periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Metals are mainly on the left and centre.",
        keywords: [
          ["metals", "metals"],
          ["left", "left"],
        ],
      },
      {
        point: "Non-metals are mainly on the right.",
        keywords: [
          ["metals", "metals"],
          ["non-metals", "non-metals"],
        ],
      },
    ],
    examinerKeywords: ["metals", "non-metals", "periodic table", "left", "right"],
    modelAnswer:
      "Metals are mainly found on the left and centre of the periodic table. Non-metals are mainly found on the right.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Metals and non-metals.",
      "Avoid: Saying metals are mainly on the right.",
      "Avoid: Saying non-metals are mainly on the left.",
    ],
    examinerTip: "Avoid this common mistake: Saying metals are mainly on the right.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe and explain the trend in reactivity down Group 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Reactivity increases down Group 1.",
        keywords: [
          ["Group 1", "group"],
          ["reactivity increases", "reactivity", "increases"],
        ],
      },
      {
        point: "Atoms get larger down the group.",
        keywords: [["Group 1", "group"]],
      },
      {
        point: "The outer electron is further from the nucleus.",
        keywords: [["outer electron", "outer", "electron"]],
      },
      {
        point: "The outer electron is lost more easily.",
        keywords: [
          ["outer electron", "outer", "electron"],
          ["lost more easily", "lost", "more", "easily"],
        ],
      },
    ],
    examinerKeywords: ["Group 1", "reactivity increases", "outer electron", "lost more easily"],
    modelAnswer:
      "Reactivity increases down Group 1. The atoms get larger and the outer electron is further from the nucleus, so it is lost more easily.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Group 1.",
      "Avoid: Saying reactivity decreases down Group 1.",
      "Avoid: Explaining using gaining electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying reactivity decreases down Group 1.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe and explain the trend in reactivity down Group 7.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Reactivity decreases down Group 7.",
        keywords: [
          ["Group 7", "group"],
          ["reactivity decreases", "reactivity", "decreases"],
        ],
      },
      {
        point: "Atoms get larger down the group.",
        keywords: [["Group 7", "group"]],
      },
      {
        point: "The outer shell is further from the nucleus.",
        keywords: [["outer", "shell", "further"]],
      },
      {
        point: "It becomes harder to gain an electron.",
        keywords: [["gain electron", "gain", "electron"]],
      },
    ],
    examinerKeywords: ["Group 7", "halogens", "reactivity decreases", "gain electron"],
    modelAnswer:
      "Reactivity decreases down Group 7. Atoms get larger down the group, so the outer shell is further from the nucleus and it becomes harder to gain an electron.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Group 7.",
      "Avoid: Saying reactivity increases down Group 7.",
      "Avoid: Explaining using loss of electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying reactivity increases down Group 7.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Predict",
    questionText:
      "Chlorine is added to potassium bromide solution. Predict the reaction and explain your answer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Chlorine displaces bromine.",
        keywords: [
          ["chlorine", "chlorine"],
          ["bromine", "bromine"],
        ],
      },
      {
        point: "Chlorine is more reactive than bromine.",
        keywords: [
          ["chlorine", "chlorine"],
          ["bromine", "bromine"],
        ],
      },
      {
        point: "Potassium chloride forms.",
        keywords: [["potassium bromide", "potassium", "bromide"]],
      },
      {
        point: "The solution becomes orange or brown due to bromine.",
        keywords: [["bromine", "bromine"]],
      },
    ],
    examinerKeywords: ["chlorine", "potassium bromide", "displacement", "bromine", "reactivity"],
    modelAnswer:
      "Chlorine displaces bromine from potassium bromide because chlorine is more reactive than bromine. Potassium chloride and bromine form, so the solution becomes orange-brown.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Halogen displacement.",
      "Avoid: Saying bromine displaces chlorine.",
      "Avoid: Saying no reaction occurs.",
    ],
    examinerTip: "Avoid this common mistake: Saying bromine displaces chlorine.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why noble gases are unreactive.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Noble gases have full outer electron shells.",
        keywords: [
          ["noble gases", "noble", "gases"],
          ["full outer shell", "full", "outer", "shell"],
        ],
      },
      {
        point: "They do not need to gain or lose electrons.",
        keywords: [["they", "need", "gain"]],
      },
      {
        point: "Full outer shells make them stable.",
        keywords: [
          ["full outer shell", "full", "outer", "shell"],
          ["stable", "stable"],
        ],
      },
    ],
    examinerKeywords: ["noble gases", "full outer shell", "stable", "unreactive"],
    modelAnswer:
      "Noble gases are unreactive because they have full outer electron shells, so they do not need to gain or lose electrons.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Noble gases.",
      "Avoid: Saying noble gases have one outer electron.",
      "Avoid: Saying they are very reactive.",
    ],
    examinerTip: "Avoid this common mistake: Saying noble gases have one outer electron.",
  },
  {
    id: "oxfordaqa-chemistry-atomic-structure-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how atomic structure links to the arrangement and properties of elements in the periodic table.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Elements are arranged by increasing atomic number.",
        keywords: [
          ["atomic structure", "atomic", "structure"],
          ["atomic number", "atomic", "number"],
        ],
      },
      {
        point: "Atomic number is the number of protons.",
        keywords: [
          ["atomic structure", "atomic", "structure"],
          ["atomic number", "atomic", "number"],
        ],
      },
      {
        point: "Electronic structure determines chemical properties.",
        keywords: [["atomic structure", "atomic", "structure"]],
      },
      {
        point: "Elements in the same group have the same number of outer-shell electrons.",
        keywords: [
          ["atomic number", "atomic", "number"],
          ["outer-shell electrons", "outer-shell", "electrons"],
        ],
      },
      {
        point: "Group 1 metals react by losing one electron.",
        keywords: [["group", "metals", "react"]],
      },
      {
        point: "Group 7 non-metals react by gaining one electron.",
        keywords: [["group", "metals", "react"]],
      },
    ],
    examinerKeywords: [
      "atomic structure",
      "periodic table",
      "atomic number",
      "outer-shell electrons",
      "groups",
    ],
    modelAnswer:
      "Elements are arranged in order of increasing atomic number, which is the number of protons. Electronic structure determines chemical properties. Elements in the same group have the same number of outer-shell electrons, so they react in similar ways. Group 1 metals lose one electron, while Group 7 non-metals gain one electron.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying elements are arranged randomly.",
      "Avoid: Forgetting protons define atomic number.",
    ],
    examinerTip: "Avoid this common mistake: Saying elements are arranged randomly.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define ionic bond.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An ionic bond is a strong electrostatic attraction.",
        keywords: [
          ["ionic bond", "ionic", "bond"],
          ["electrostatic attraction", "electrostatic", "attraction"],
        ],
      },
      {
        point: "The attraction is between oppositely charged ions.",
        keywords: [
          ["electrostatic attraction", "electrostatic", "attraction"],
          ["oppositely charged ions", "oppositely", "charged", "ions"],
        ],
      },
    ],
    examinerKeywords: ["ionic bond", "electrostatic attraction", "oppositely charged ions"],
    modelAnswer:
      "An ionic bond is a strong electrostatic attraction between oppositely charged ions.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Ionic bonding.",
      "Avoid: Saying ionic bonding is sharing electrons.",
      "Avoid: Forgetting oppositely charged ions.",
    ],
    examinerTip: "Avoid this common mistake: Saying ionic bonding is sharing electrons.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how sodium and chlorine form sodium chloride.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium loses one electron.",
        keywords: [
          ["sodium", "sodium"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Sodium forms a Na+ ion.",
        keywords: [["sodium", "sodium"], ["Na+"]],
      },
      {
        point: "Chlorine gains one electron.",
        keywords: [
          ["chlorine", "chlorine"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Chloride ions and sodium ions are attracted by strong electrostatic forces.",
        keywords: [["sodium", "sodium"]],
      },
    ],
    examinerKeywords: ["sodium", "chlorine", "electron transfer", "Na+", "Cl-"],
    modelAnswer:
      "Sodium loses one electron to form a Na+ ion. Chlorine gains one electron to form a Cl- ion. The oppositely charged ions are held together by strong electrostatic attraction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Ionic bonding.",
      "Avoid: Saying sodium gains an electron.",
      "Avoid: Saying chlorine loses an electron.",
    ],
    examinerTip: "Avoid this common mistake: Saying sodium gains an electron.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why ionic compounds have high melting points.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices.",
        keywords: [
          ["ionic compound", "ionic", "compound"],
          ["giant ionic lattice", "giant", "ionic", "lattice"],
        ],
      },
      {
        point: "There are strong electrostatic attractions between oppositely charged ions.",
        keywords: [["strong electrostatic attraction", "strong", "electrostatic", "attraction"]],
      },
      {
        point: "A lot of energy is needed to overcome the attractions.",
        keywords: [["strong electrostatic attraction", "strong", "electrostatic", "attraction"]],
      },
      {
        point: "Therefore they have high melting points.",
        keywords: [["high melting point", "high", "melting", "point"]],
      },
    ],
    examinerKeywords: [
      "ionic compound",
      "giant ionic lattice",
      "strong electrostatic attraction",
      "high melting point",
    ],
    modelAnswer:
      "Ionic compounds have giant ionic lattices with strong electrostatic attractions between oppositely charged ions. A lot of energy is needed to overcome these attractions, so ionic compounds have high melting points.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Ionic properties.",
      "Avoid: Saying weak intermolecular forces are broken.",
      "Avoid: Forgetting giant ionic lattice.",
    ],
    examinerTip: "Avoid this common mistake: Saying weak intermolecular forces are broken.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Solid sodium chloride contains ions.",
        keywords: [
          ["sodium chloride", "sodium", "chloride"],
          ["solid", "solid"],
        ],
      },
      {
        point: "In the solid, the ions are fixed in position.",
        keywords: [
          ["solid", "solid"],
          ["mobile ions", "mobile", "ions"],
        ],
      },
      {
        point: "Molten sodium chloride has mobile ions.",
        keywords: [
          ["sodium chloride", "sodium", "chloride"],
          ["molten", "molten"],
        ],
      },
      {
        point: "Mobile ions carry charge.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
    ],
    examinerKeywords: ["sodium chloride", "solid", "molten", "mobile ions", "conduct"],
    modelAnswer:
      "Solid sodium chloride contains ions, but they are fixed in position and cannot move. When molten, the ions are mobile and can carry charge, so molten sodium chloride conducts electricity.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Ionic properties.",
      "Avoid: Saying solid sodium chloride has no ions.",
      "Avoid: Saying electrons conduct in molten sodium chloride.",
    ],
    examinerTip: "Avoid this common mistake: Saying solid sodium chloride has no ions.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define covalent bond.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A covalent bond is a shared pair of electrons.",
        keywords: [
          ["covalent bond", "covalent", "bond"],
          ["shared pair", "shared", "pair"],
        ],
      },
      {
        point: "The shared pair is between two atoms.",
        keywords: [["shared pair", "shared", "pair"]],
      },
    ],
    examinerKeywords: ["covalent bond", "shared pair", "electrons"],
    modelAnswer: "A covalent bond is a shared pair of electrons between two atoms.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Covalent bonding.",
      "Avoid: Saying covalent bonding is electron transfer.",
      "Avoid: Forgetting shared pair.",
    ],
    examinerTip: "Avoid this common mistake: Saying covalent bonding is electron transfer.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why simple molecular substances usually have low melting and boiling points.",
    marks: 4,
    markSchemePoints: [
      {
        point: "They contain small molecules.",
        keywords: [["they", "contain", "small"]],
      },
      {
        point: "There are weak forces between molecules.",
        keywords: [["intermolecular forces", "intermolecular", "forces"]],
      },
      {
        point: "Only weak intermolecular forces are overcome during melting or boiling.",
        keywords: [
          ["simple molecular", "simple", "molecular"],
          ["low melting point", "melting", "point"],
        ],
      },
      {
        point: "Little energy is needed.",
        keywords: [["little energy", "little", "energy"]],
      },
    ],
    examinerKeywords: [
      "simple molecular",
      "low melting point",
      "intermolecular forces",
      "little energy",
    ],
    modelAnswer:
      "Simple molecular substances contain small molecules with weak forces between molecules. Only these weak intermolecular forces are overcome during melting or boiling, so little energy is needed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Simple molecular substances.",
      "Avoid: Saying covalent bonds inside molecules are broken during boiling.",
      "Avoid: Forgetting intermolecular forces.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying covalent bonds inside molecules are broken during boiling.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why simple molecular substances do not usually conduct electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They contain molecules.",
        keywords: [["they", "contain", "molecules"]],
      },
      {
        point: "They do not contain mobile ions.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
      {
        point: "They do not have delocalised electrons to carry charge.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
    ],
    examinerKeywords: [
      "simple molecular",
      "conduct electricity",
      "mobile ions",
      "delocalised electrons",
    ],
    modelAnswer:
      "Simple molecular substances do not usually conduct electricity because they do not contain mobile ions or delocalised electrons to carry charge.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Simple molecular substances.",
      "Avoid: Saying all covalent substances conduct.",
      "Avoid: Saying molecules are charged ions.",
    ],
    examinerTip: "Avoid this common mistake: Saying all covalent substances conduct.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why diamond has a high melting point.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Diamond has a giant covalent structure.",
        keywords: [
          ["diamond", "diamond"],
          ["giant covalent", "giant", "covalent"],
        ],
      },
      {
        point: "Each carbon atom is bonded to four other carbon atoms.",
        keywords: [["each", "carbon", "atom"]],
      },
      {
        point: "There are many strong covalent bonds.",
        keywords: [
          ["giant covalent", "giant", "covalent"],
          ["strong covalent bonds", "strong", "covalent", "bonds"],
        ],
      },
      {
        point: "A lot of energy is needed to break the bonds.",
        keywords: [["strong covalent bonds", "strong", "covalent", "bonds"]],
      },
    ],
    examinerKeywords: ["diamond", "giant covalent", "strong covalent bonds", "high melting point"],
    modelAnswer:
      "Diamond has a giant covalent structure where each carbon atom is bonded to four other carbon atoms. There are many strong covalent bonds, so a lot of energy is needed to break them.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Giant covalent structures.",
      "Avoid: Saying diamond has weak intermolecular forces.",
      "Avoid: Saying each carbon bonds to three others.",
    ],
    examinerTip: "Avoid this common mistake: Saying diamond has weak intermolecular forces.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why graphite conducts electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Each carbon atom bonds to three other carbon atoms.",
        keywords: [["carbon", "carbon"]],
      },
      {
        point: "One electron from each carbon atom is delocalised.",
        keywords: [
          ["delocalised electrons", "delocalised", "electrons"],
          ["carbon", "carbon"],
        ],
      },
      {
        point: "Delocalised electrons can move and carry charge.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
    ],
    examinerKeywords: ["graphite", "conduct electricity", "delocalised electrons", "carbon"],
    modelAnswer:
      "In graphite, each carbon atom bonds to three other carbon atoms, leaving one electron delocalised. These delocalised electrons can move through the structure and carry charge.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Graphite.",
      "Avoid: Saying ions move in graphite.",
      "Avoid: Saying graphite does not conduct electricity.",
    ],
    examinerTip: "Avoid this common mistake: Saying ions move in graphite.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why graphite is soft and slippery.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Graphite has layers of carbon atoms.",
        keywords: [
          ["graphite", "graphite"],
          ["layers", "layers"],
        ],
      },
      {
        point: "There are weak forces between the layers.",
        keywords: [
          ["layers", "layers"],
          ["weak forces", "weak", "forces"],
        ],
      },
      {
        point: "The layers can slide over each other easily.",
        keywords: [
          ["layers", "layers"],
          ["slide", "slide"],
        ],
      },
    ],
    examinerKeywords: ["graphite", "layers", "weak forces", "slide"],
    modelAnswer:
      "Graphite consists of layers of carbon atoms with weak forces between the layers. The layers can slide over each other easily, making graphite soft and slippery.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Graphite.",
      "Avoid: Saying covalent bonds between layers are weak.",
      "Avoid: Forgetting layers.",
    ],
    examinerTip: "Avoid this common mistake: Saying covalent bonds between layers are weak.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe metallic bonding.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metals contain positive metal ions.",
        keywords: [["positive ions", "positive", "ions"]],
      },
      {
        point: "There are delocalised electrons.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
      {
        point:
          "There is strong electrostatic attraction between positive metal ions and delocalised electrons.",
        keywords: [
          ["positive ions", "positive", "ions"],
          ["delocalised electrons", "delocalised", "electrons"],
        ],
      },
    ],
    examinerKeywords: [
      "metallic bonding",
      "positive ions",
      "delocalised electrons",
      "electrostatic attraction",
    ],
    modelAnswer:
      "Metallic bonding is the strong electrostatic attraction between positive metal ions and delocalised electrons.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Metallic bonding.",
      "Avoid: Saying metals contain negative ions only.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying metals contain negative ions only.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why metals conduct electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metals contain delocalised electrons.",
        keywords: [
          ["metals", "metals"],
          ["delocalised electrons", "delocalised", "electrons"],
        ],
      },
      {
        point: "The electrons are free to move.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
      {
        point: "The electrons carry charge through the metal.",
        keywords: [
          ["delocalised electrons", "delocalised", "electrons"],
          ["charge", "charge"],
        ],
      },
    ],
    examinerKeywords: ["metals", "conduct electricity", "delocalised electrons", "charge"],
    modelAnswer:
      "Metals conduct electricity because they contain delocalised electrons that are free to move and carry charge through the metal.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Metal properties.",
      "Avoid: Saying ions move through solid metals.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying ions move through solid metals.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why metals are malleable.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metals have layers of atoms or ions.",
        keywords: [["layers", "layers"]],
      },
      {
        point: "The layers can slide over each other.",
        keywords: [
          ["layers", "layers"],
          ["slide", "slide"],
        ],
      },
      {
        point: "Metallic bonding is not broken completely when layers slide.",
        keywords: [
          ["layers", "layers"],
          ["slide", "slide"],
        ],
      },
    ],
    examinerKeywords: ["malleable", "layers", "slide", "metallic bonding"],
    modelAnswer:
      "Metals are malleable because layers of metal atoms or ions can slide over each other without the metallic bonding being completely broken.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Metal properties.",
      "Avoid: Saying metals are brittle.",
      "Avoid: Forgetting layers can slide.",
    ],
    examinerTip: "Avoid this common mistake: Saying metals are brittle.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why alloys are harder than pure metals.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alloys contain atoms of different sizes.",
        keywords: [
          ["alloy", "alloy"],
          ["different sized atoms", "different", "sized", "atoms"],
        ],
      },
      {
        point: "The regular layers of metal atoms are distorted.",
        keywords: [
          ["different sized atoms", "different", "sized", "atoms"],
          ["layers", "layers"],
        ],
      },
      {
        point: "Layers cannot slide over each other easily.",
        keywords: [
          ["layers", "layers"],
          ["slide", "slide"],
        ],
      },
    ],
    examinerKeywords: ["alloy", "harder", "different sized atoms", "layers", "slide"],
    modelAnswer:
      "Alloys contain atoms of different sizes, which distort the regular layers of metal atoms. This makes it harder for the layers to slide over each other, so alloys are harder.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Alloys.",
      "Avoid: Saying alloys are softer because they are mixtures.",
      "Avoid: Forgetting layers of atoms.",
    ],
    examinerTip: "Avoid this common mistake: Saying alloys are softer because they are mixtures.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what a polymer is.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A polymer is a large molecule.",
        keywords: [
          ["polymer", "polymer"],
          ["large molecule", "large", "molecule"],
        ],
      },
      {
        point: "It is made from many smaller molecules called monomers.",
        keywords: [
          ["large molecule", "large", "molecule"],
          ["monomers", "monomers"],
        ],
      },
    ],
    examinerKeywords: ["polymer", "large molecule", "monomers"],
    modelAnswer:
      "A polymer is a large molecule made from many smaller molecules called monomers joined together.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Polymers.",
      "Avoid: Saying a polymer is one small molecule.",
      "Avoid: Confusing monomer and polymer.",
    ],
    examinerTip: "Avoid this common mistake: Saying a polymer is one small molecule.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State why nanoparticles may have different properties from larger particles of the same substance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Nanoparticles are very small.",
        keywords: [
          ["nanoparticles", "nanoparticles"],
          ["small", "small"],
        ],
      },
      {
        point: "They have a high surface area to volume ratio.",
        keywords: [["surface area to volume ratio", "surface", "area", "volume"]],
      },
      {
        point: "This can make them more reactive or give different properties.",
        keywords: [["properties", "properties"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "small", "surface area to volume ratio", "properties"],
    modelAnswer:
      "Nanoparticles are very small and have a high surface area to volume ratio, so they may be more reactive or have different properties from larger particles of the same substance.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Nanoparticles.",
      "Avoid: Saying nanoparticles are always visible to the naked eye.",
      "Avoid: Ignoring surface area to volume ratio.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying nanoparticles are always visible to the naked eye.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State one use and one possible risk of nanoparticles.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Uses include catalysts, sunscreens, cosmetics or medicine.",
        keywords: [
          ["uses", "uses"],
          ["catalysts", "catalysts"],
        ],
      },
      {
        point: "Possible risks include unknown health effects or entering cells/body tissues.",
        keywords: [["risks", "risks"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "uses", "risks", "catalysts", "medicine"],
    modelAnswer:
      "Nanoparticles can be used as catalysts. A possible risk is that they may enter body tissues and have unknown health effects.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Nanoparticles.",
      "Avoid: Giving no risk.",
      "Avoid: Saying nanoparticles are always completely safe.",
    ],
    examinerTip: "Avoid this common mistake: Giving no risk.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare ionic, covalent and metallic bonding.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic bonding involves electron transfer.",
        keywords: [
          ["ionic", "ionic"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Ionic bonding is electrostatic attraction between oppositely charged ions.",
        keywords: [["ionic", "ionic"]],
      },
      {
        point: "Covalent bonding involves sharing pairs of electrons.",
        keywords: [
          ["covalent", "covalent"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Covalent bonding usually occurs between non-metal atoms.",
        keywords: [["covalent", "covalent"]],
      },
      {
        point:
          "Metallic bonding is attraction between positive metal ions and delocalised electrons.",
        keywords: [
          ["metallic", "metallic"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Delocalised electrons allow metals to conduct electricity.",
        keywords: [
          ["electron transfer", "electron", "transfer"],
          ["delocalised electrons", "delocalised", "electrons"],
        ],
      },
    ],
    examinerKeywords: [
      "ionic",
      "covalent",
      "metallic",
      "electron transfer",
      "sharing",
      "delocalised electrons",
    ],
    modelAnswer:
      "Ionic bonding involves electron transfer and electrostatic attraction between oppositely charged ions. Covalent bonding involves sharing pairs of electrons, usually between non-metal atoms. Metallic bonding is the attraction between positive metal ions and delocalised electrons, and these delocalised electrons allow metals to conduct electricity.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Comparing structures.",
      "Avoid: Saying ionic bonding is sharing electrons.",
      "Avoid: Saying covalent bonding occurs between ions.",
    ],
    examinerTip: "Avoid this common mistake: Saying ionic bonding is sharing electrons.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why diamond, graphite and sodium chloride have different properties.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Diamond has a giant covalent structure with many strong covalent bonds.",
        keywords: [
          ["diamond", "diamond"],
          ["structure", "structure"],
        ],
      },
      {
        point: "Diamond is hard and has a high melting point.",
        keywords: [["diamond", "diamond"]],
      },
      {
        point: "Graphite has layers with weak forces between layers.",
        keywords: [["graphite", "graphite"]],
      },
      {
        point: "Graphite has delocalised electrons so it conducts electricity.",
        keywords: [["graphite", "graphite"]],
      },
      {
        point: "Sodium chloride has a giant ionic lattice.",
        keywords: [["sodium chloride", "sodium", "chloride"]],
      },
      {
        point: "Molten sodium chloride conducts electricity because ions are mobile.",
        keywords: [["sodium chloride", "sodium", "chloride"]],
      },
    ],
    examinerKeywords: ["diamond", "graphite", "sodium chloride", "structure", "properties"],
    modelAnswer:
      "Diamond has a giant covalent structure with many strong covalent bonds, making it hard with a high melting point. Graphite has layers with weak forces between them and delocalised electrons, so it is soft and conducts electricity. Sodium chloride has a giant ionic lattice and conducts when molten because ions are mobile.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Structure and properties.",
      "Avoid: Saying diamond conducts electricity.",
      "Avoid: Saying graphite has no delocalised electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying diamond conducts electricity.",
  },
  {
    id: "oxfordaqa-chemistry-bonding-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how bonding and structure determine the properties of substances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices and strong electrostatic attractions.",
        keywords: [["ionic", "ionic"]],
      },
      {
        point: "Ionic compounds have high melting points and conduct when molten or dissolved.",
        keywords: [["ionic", "ionic"]],
      },
      {
        point:
          "Simple molecular substances have weak intermolecular forces and low boiling points.",
        keywords: [["simple", "molecular", "substances"]],
      },
      {
        point: "Giant covalent structures have many strong covalent bonds and high melting points.",
        keywords: [
          ["structure", "structure"],
          ["covalent", "covalent"],
        ],
      },
      {
        point: "Metals contain delocalised electrons that carry charge.",
        keywords: [["metals", "contain", "delocalised"]],
      },
      {
        point: "Alloys are harder because different sized atoms distort metal layers.",
        keywords: [["alloys", "harder", "because"]],
      },
    ],
    examinerKeywords: ["bonding", "structure", "properties", "ionic", "covalent", "metallic"],
    modelAnswer:
      "Ionic compounds have giant ionic lattices with strong electrostatic attractions, so they have high melting points and conduct when molten or dissolved. Simple molecular substances have weak intermolecular forces, so they have low boiling points. Giant covalent structures have many strong covalent bonds and high melting points. Metals conduct because they contain delocalised electrons, while alloys are harder because different sized atoms distort the layers.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Using the same explanation for every structure.",
      "Avoid: Forgetting charge carriers for conductivity.",
    ],
    examinerTip: "Avoid this common mistake: Using the same explanation for every structure.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what the reactivity series shows.",
    marks: 2,
    markSchemePoints: [
      {
        point: "It shows metals in order of reactivity.",
        keywords: [
          ["reactivity series", "reactivity", "series"],
          ["metals", "metals"],
        ],
      },
      {
        point: "The most reactive metals are at the top.",
        keywords: [["metals", "metals"]],
      },
    ],
    examinerKeywords: ["reactivity series", "metals", "order", "reactivity"],
    modelAnswer:
      "The reactivity series shows metals in order of reactivity, with the most reactive metals at the top.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Reactivity series.",
      "Avoid: Saying it shows melting points.",
      "Avoid: Putting least reactive metals at the top.",
    ],
    examinerTip: "Avoid this common mistake: Saying it shows melting points.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the product formed when magnesium reacts with oxygen.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Magnesium oxide.",
        keywords: [
          ["magnesium", "magnesium"],
          ["magnesium oxide", "magnesium", "oxide"],
        ],
      },
    ],
    examinerKeywords: ["magnesium", "oxygen", "magnesium oxide"],
    modelAnswer: "Magnesium oxide is formed.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Think about Metals and oxygen.",
      "Avoid: Writing magnesium hydroxide.",
      "Avoid: Writing magnesium carbonate.",
    ],
    examinerTip: "Avoid this common mistake: Writing magnesium hydroxide.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products when magnesium reacts with dilute hydrochloric acid.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Magnesium chloride is formed.",
        keywords: [
          ["magnesium", "magnesium"],
          ["magnesium chloride", "magnesium", "chloride"],
        ],
      },
      {
        point: "Hydrogen gas is formed.",
        keywords: [["hydrogen", "hydrogen"]],
      },
    ],
    examinerKeywords: ["magnesium", "hydrochloric acid", "magnesium chloride", "hydrogen"],
    modelAnswer:
      "Magnesium reacts with dilute hydrochloric acid to form magnesium chloride and hydrogen.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Metals and acids.",
      "Avoid: Writing magnesium sulfate.",
      "Avoid: Writing carbon dioxide.",
    ],
    examinerTip: "Avoid this common mistake: Writing magnesium sulfate.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for hydrogen gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place a lighted splint near the gas.",
        keywords: [["lighted splint", "lighted", "splint"]],
      },
      {
        point: "Hydrogen burns with a squeaky pop.",
        keywords: [
          ["hydrogen", "hydrogen"],
          ["squeaky pop", "squeaky"],
        ],
      },
    ],
    examinerKeywords: ["hydrogen", "lighted splint", "squeaky pop"],
    modelAnswer: "Place a lighted splint near the gas. Hydrogen burns with a squeaky pop.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Metals and acids.",
      "Avoid: Using a glowing splint.",
      "Avoid: Saying hydrogen turns limewater milky.",
    ],
    examinerTip: "Avoid this common mistake: Using a glowing splint.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the reaction of sodium with water.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium floats on water.",
        keywords: [
          ["sodium", "sodium"],
          ["water", "water"],
        ],
      },
      {
        point: "It moves around on the surface.",
        keywords: [["moves", "around", "surface"]],
      },
      {
        point: "Fizzing occurs because hydrogen gas is produced.",
        keywords: [["hydrogen", "hydrogen"]],
      },
      {
        point: "Sodium hydroxide solution is formed.",
        keywords: [
          ["sodium", "sodium"],
          ["sodium hydroxide", "sodium", "hydroxide"],
        ],
      },
    ],
    examinerKeywords: ["sodium", "water", "hydrogen", "sodium hydroxide", "alkaline"],
    modelAnswer:
      "Sodium floats and moves on the surface of water. It fizzes as hydrogen gas is produced, and sodium hydroxide solution forms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Metals and water.",
      "Avoid: Saying oxygen gas is produced.",
      "Avoid: Forgetting sodium hydroxide.",
    ],
    examinerTip: "Avoid this common mistake: Saying oxygen gas is produced.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why zinc displaces copper from copper(II) sulfate solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Zinc is more reactive than copper.",
        keywords: [
          ["zinc", "zinc"],
          ["copper sulfate", "copper", "sulfate"],
        ],
      },
      {
        point: "Zinc atoms lose electrons to form zinc ions.",
        keywords: [
          ["zinc", "zinc"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Copper ions gain electrons to form copper atoms.",
        keywords: [
          ["copper sulfate", "copper", "sulfate"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Copper is displaced from solution.",
        keywords: [["copper sulfate", "copper", "sulfate"]],
      },
    ],
    examinerKeywords: ["zinc", "copper sulfate", "displacement", "reactivity", "electron transfer"],
    modelAnswer:
      "Zinc is more reactive than copper, so zinc displaces copper from copper(II) sulfate solution. Zinc atoms lose electrons to form zinc ions, while copper ions gain electrons to form copper atoms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Displacement reactions.",
      "Avoid: Saying copper is more reactive than zinc.",
      "Avoid: Saying zinc ions become zinc atoms.",
    ],
    examinerTip: "Avoid this common mistake: Saying copper is more reactive than zinc.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText: "Write the ionic equation for the reaction between zinc and copper(II) ions.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Zinc atoms form zinc ions.",
        keywords: [
          ["zinc", "zinc"],
          ["copper ions", "copper", "ions"],
        ],
      },
      {
        point: "Copper(II) ions form copper atoms.",
        keywords: [["copper ions", "copper", "ions"]],
      },
      {
        point: "Zn + Cu2+ → Zn2+ + Cu.",
        keywords: [["zn + cu2+ → zn2+ + cu."]],
      },
    ],
    examinerKeywords: ["ionic equation", "zinc", "copper ions", "displacement"],
    modelAnswer: "Zn + Cu2+ → Zn2+ + Cu",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Displacement reactions.",
      "Avoid: Including sulfate ions as reacting ions.",
      "Avoid: Reversing the equation.",
    ],
    examinerTip: "Avoid this common mistake: Including sulfate ions as reacting ions.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define oxidation and reduction in terms of electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Oxidation is loss of electrons.",
        keywords: [
          ["oxidation", "oxidation"],
          ["electrons", "electrons"],
        ],
      },
      {
        point: "Reduction is gain of electrons.",
        keywords: [
          ["reduction", "reduction"],
          ["electrons", "electrons"],
        ],
      },
    ],
    examinerKeywords: ["oxidation", "reduction", "electrons", "OIL RIG"],
    modelAnswer: "Oxidation is loss of electrons and reduction is gain of electrons.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Oxidation and reduction.",
      "Avoid: Reversing OIL RIG.",
      "Avoid: Saying oxidation is gain of electrons.",
    ],
    examinerTip: "Avoid this common mistake: Reversing OIL RIG.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "In the reaction CuO + H2 → Cu + H2O, identify the substance reduced and explain your answer.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Copper(II) oxide is reduced.",
        keywords: [["copper oxide", "copper", "oxide"]],
      },
      {
        point: "Copper(II) oxide loses oxygen.",
        keywords: [
          ["copper oxide", "copper", "oxide"],
          ["loss of oxygen", "loss", "oxygen"],
        ],
      },
      {
        point: "Copper is formed.",
        keywords: [["copper oxide", "copper", "oxide"]],
      },
    ],
    examinerKeywords: ["copper oxide", "hydrogen", "reduction", "loss of oxygen"],
    modelAnswer: "Copper(II) oxide is reduced because it loses oxygen to form copper.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Oxidation and reduction.",
      "Avoid: Saying hydrogen is reduced.",
      "Avoid: Forgetting loss of oxygen.",
    ],
    examinerTip: "Avoid this common mistake: Saying hydrogen is reduced.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how the method of extracting a metal depends on its position in the reactivity series.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Metals below carbon can be extracted by reduction with carbon or carbon monoxide.",
        keywords: [
          ["carbon", "carbon"],
          ["reduction", "reduction"],
        ],
      },
      {
        point: "Metals above carbon are too reactive to be reduced by carbon.",
        keywords: [["carbon", "carbon"]],
      },
      {
        point: "Metals above carbon are extracted by electrolysis.",
        keywords: [
          ["carbon", "carbon"],
          ["electrolysis", "electrolysis"],
        ],
      },
      {
        point: "Very unreactive metals may occur native.",
        keywords: [["very", "unreactive", "metals"]],
      },
    ],
    examinerKeywords: ["extraction", "reactivity series", "carbon", "electrolysis", "reduction"],
    modelAnswer:
      "Metals below carbon can be extracted by reduction with carbon or carbon monoxide. Metals above carbon are too reactive to be reduced by carbon and are extracted by electrolysis. Very unreactive metals may occur native.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Metal extraction.",
      "Avoid: Saying aluminium is extracted using carbon.",
      "Avoid: Saying iron must be extracted by electrolysis.",
    ],
    examinerTip: "Avoid this common mistake: Saying aluminium is extracted using carbon.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain the role of carbon monoxide in the extraction of iron.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Carbon monoxide is a reducing agent.",
        keywords: [
          ["carbon monoxide", "carbon", "monoxide"],
          ["reducing agent", "reducing", "agent"],
        ],
      },
      {
        point: "It reduces iron oxide to iron.",
        keywords: [
          ["iron oxide", "iron", "oxide"],
          ["iron", "iron"],
        ],
      },
      {
        point: "Carbon monoxide is oxidised to carbon dioxide.",
        keywords: [
          ["carbon monoxide", "carbon", "monoxide"],
          ["iron oxide", "iron", "oxide"],
        ],
      },
    ],
    examinerKeywords: ["carbon monoxide", "reducing agent", "iron oxide", "iron"],
    modelAnswer:
      "Carbon monoxide acts as a reducing agent. It reduces iron oxide to iron and is oxidised to carbon dioxide.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Iron extraction.",
      "Avoid: Saying carbon monoxide oxidises iron.",
      "Avoid: Saying carbon monoxide is only a fuel.",
    ],
    examinerTip: "Avoid this common mistake: Saying carbon monoxide oxidises iron.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText: "Write the equation for the reduction of iron(III) oxide by carbon monoxide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Correct reactants are Fe2O3 and CO.",
        keywords: [["correct", "reactants", "fe2o3"]],
      },
      {
        point: "Balanced equation is Fe2O3 + 3CO → 2Fe + 3CO2.",
        keywords: [["balanced", "equation", "fe2o3"]],
      },
    ],
    examinerKeywords: ["iron(III) oxide", "carbon monoxide", "reduction", "blast furnace"],
    modelAnswer: "Fe2O3 + 3CO → 2Fe + 3CO2",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Iron extraction equation.",
      "Avoid: Not balancing carbon monoxide.",
      "Avoid: Writing FeO instead of Fe2O3.",
    ],
    examinerTip: "Avoid this common mistake: Not balancing carbon monoxide.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define electrolysis.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Electrolysis is the decomposition of an ionic compound.",
        keywords: [
          ["electrolysis", "electrolysis"],
          ["decomposition", "decomposition"],
        ],
      },
      {
        point: "It uses electricity.",
        keywords: [["electricity", "electricity"]],
      },
    ],
    examinerKeywords: ["electrolysis", "decomposition", "ionic compound", "electricity"],
    modelAnswer: "Electrolysis is the decomposition of an ionic compound using electricity.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Electrolysis.",
      "Avoid: Saying electrolysis joins substances together.",
      "Avoid: Forgetting electricity.",
    ],
    examinerTip: "Avoid this common mistake: Saying electrolysis joins substances together.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State where cations and anions move during electrolysis.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Cations move to the cathode.",
        keywords: [
          ["cations", "cations"],
          ["cathode", "cathode"],
        ],
      },
      {
        point: "Anions move to the anode.",
        keywords: [
          ["anions", "anions"],
          ["anode", "anode"],
        ],
      },
    ],
    examinerKeywords: ["cations", "anions", "cathode", "anode"],
    modelAnswer: "Cations move to the cathode, and anions move to the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Electrolysis.",
      "Avoid: Saying cations move to the anode.",
      "Avoid: Saying anions move to the cathode.",
    ],
    examinerTip: "Avoid this common mistake: Saying cations move to the anode.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products formed during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Lead forms at the cathode.",
        keywords: [
          ["lead bromide", "lead", "bromide"],
          ["lead", "lead"],
        ],
      },
      {
        point: "Bromine forms at the anode.",
        keywords: [
          ["bromine", "bromine"],
          ["anode", "anode"],
        ],
      },
    ],
    examinerKeywords: ["lead bromide", "lead", "bromine", "cathode", "anode"],
    modelAnswer: "Lead is formed at the cathode and bromine is formed at the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Molten electrolysis.",
      "Avoid: Saying hydrogen forms from molten lead bromide.",
      "Avoid: Saying oxygen forms at the anode.",
    ],
    examinerTip: "Avoid this common mistake: Saying hydrogen forms from molten lead bromide.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText:
      "Write the half-equation for the reaction at the cathode during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Pb2+ ions gain electrons.",
        keywords: [
          ["Pb2+", "pb2+"],
          ["electrons", "electrons"],
        ],
      },
      {
        point: "Pb2+ + 2e- → Pb.",
        keywords: [["Pb2+", "pb2+"]],
      },
    ],
    examinerKeywords: ["half-equation", "cathode", "Pb2+", "electrons", "lead"],
    modelAnswer: "Pb2+ + 2e- → Pb",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Half-equations.",
      "Avoid: Writing Pb → Pb2+ + 2e-.",
      "Avoid: Using bromide ions at the cathode.",
    ],
    examinerTip: "Avoid this common mistake: Writing Pb → Pb2+ + 2e-.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText:
      "Write the half-equation for the reaction at the anode during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Bromide ions lose electrons.",
        keywords: [["electrons", "electrons"]],
      },
      {
        point: "2Br- → Br2 + 2e-.",
        keywords: [["Br-"]],
      },
    ],
    examinerKeywords: ["half-equation", "anode", "Br-", "bromine", "electrons"],
    modelAnswer: "2Br- → Br2 + 2e-",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Half-equations.",
      "Avoid: Writing Br2 + 2e- → 2Br-.",
      "Avoid: Forgetting bromine is diatomic.",
    ],
    examinerTip: "Avoid this common mistake: Writing Br2 + 2e- → 2Br-.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State the products formed during electrolysis of concentrated aqueous sodium chloride using inert electrodes.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Hydrogen forms at the cathode.",
        keywords: [["hydrogen", "hydrogen"]],
      },
      {
        point: "Chlorine forms at the anode.",
        keywords: [["chlorine", "chlorine"]],
      },
      {
        point: "Sodium hydroxide remains in solution.",
        keywords: [
          ["sodium chloride", "sodium", "chloride"],
          ["sodium hydroxide", "sodium", "hydroxide"],
        ],
      },
    ],
    examinerKeywords: ["sodium chloride", "brine", "hydrogen", "chlorine", "sodium hydroxide"],
    modelAnswer:
      "Hydrogen is formed at the cathode, chlorine is formed at the anode, and sodium hydroxide remains in solution.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Aqueous electrolysis.",
      "Avoid: Saying sodium metal forms in aqueous solution.",
      "Avoid: Saying oxygen forms at the anode for concentrated brine.",
    ],
    examinerTip: "Avoid this common mistake: Saying sodium metal forms in aqueous solution.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why aluminium is extracted by electrolysis rather than reduction with carbon.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Aluminium is more reactive than carbon.",
        keywords: [
          ["aluminium", "aluminium"],
          ["carbon", "carbon"],
        ],
      },
      {
        point: "Carbon cannot reduce aluminium oxide.",
        keywords: [
          ["aluminium", "aluminium"],
          ["carbon", "carbon"],
        ],
      },
      {
        point: "Electrolysis is needed to extract aluminium.",
        keywords: [
          ["aluminium", "aluminium"],
          ["electrolysis", "electrolysis"],
        ],
      },
    ],
    examinerKeywords: ["aluminium", "extraction", "electrolysis", "carbon", "reactivity"],
    modelAnswer:
      "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide. Aluminium is therefore extracted by electrolysis.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Aluminium extraction.",
      "Avoid: Saying aluminium is below carbon.",
      "Avoid: Saying aluminium is extracted in a blast furnace.",
    ],
    examinerTip: "Avoid this common mistake: Saying aluminium is below carbon.",
  },
  {
    id: "oxfordaqa-chemistry-chemical-changes-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how the reactivity series is used to predict metal reactions, extraction methods and electrolysis products.",
    marks: 6,
    markSchemePoints: [
      {
        point: "More reactive metals displace less reactive metals from their compounds.",
        keywords: [["more", "reactive", "metals"]],
      },
      {
        point: "Metals above hydrogen react with acids to produce hydrogen.",
        keywords: [["acids", "acids"]],
      },
      {
        point: "Metals below carbon can be extracted by reduction with carbon or carbon monoxide.",
        keywords: [["metals", "below", "carbon"]],
      },
      {
        point: "Metals above carbon are extracted by electrolysis.",
        keywords: [["electrolysis", "electrolysis"]],
      },
      {
        point:
          "In aqueous electrolysis, metals more reactive than hydrogen usually remain in solution.",
        keywords: [["electrolysis", "electrolysis"]],
      },
      {
        point: "Hydrogen forms instead of very reactive metals in aqueous solution.",
        keywords: [["hydrogen", "forms", "instead"]],
      },
    ],
    examinerKeywords: ["reactivity series", "displacement", "acids", "extraction", "electrolysis"],
    modelAnswer:
      "The reactivity series predicts that more reactive metals displace less reactive metals from compounds. Metals above hydrogen react with acids to produce hydrogen. Metals below carbon can be extracted by carbon reduction, while metals above carbon require electrolysis. In aqueous electrolysis, very reactive metals remain in solution, so hydrogen forms instead.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying less reactive metals displace more reactive metals.",
      "Avoid: Saying aluminium is extracted by carbon reduction.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying less reactive metals displace more reactive metals.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how melting point can be used to test the purity of a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Measure the melting point of the solid.",
        keywords: [["melting point", "melting", "point"]],
      },
      {
        point: "A pure solid has a sharp melting point.",
        keywords: [
          ["melting point", "melting", "point"],
          ["sharp", "sharp"],
        ],
      },
      {
        point:
          "An impure solid melts over a range of temperatures and usually at a lower temperature.",
        keywords: [
          ["range", "range"],
          ["impure", "impure"],
        ],
      },
    ],
    examinerKeywords: ["purity", "melting point", "sharp", "range", "impure"],
    modelAnswer:
      "Measure the melting point of the solid. A pure solid has a sharp melting point, while an impure solid melts over a range of temperatures and usually at a lower temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Purity.",
      "Avoid: Saying pure substances melt over a wide range.",
      "Avoid: Only checking colour.",
    ],
    examinerTip: "Avoid this common mistake: Saying pure substances melt over a wide range.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how boiling point can show whether a liquid is pure.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A pure liquid boils at a fixed temperature.",
        keywords: [
          ["pure", "pure"],
          ["fixed temperature", "fixed", "temperature"],
        ],
      },
      {
        point: "An impure liquid boils over a range of temperatures.",
        keywords: [
          ["pure", "pure"],
          ["impure", "impure"],
        ],
      },
      {
        point: "The measured boiling point can be compared with a data value.",
        keywords: [["boiling point", "boiling", "point"]],
      },
    ],
    examinerKeywords: ["boiling point", "pure", "impure", "fixed temperature", "range"],
    modelAnswer:
      "A pure liquid boils at a fixed temperature. An impure liquid usually boils over a range of temperatures, so the measured boiling point can be compared with a known data value.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Boiling point and purity.",
      "Avoid: Saying impurities have no effect on boiling point.",
      "Avoid: Only looking at colour.",
    ],
    examinerTip: "Avoid this common mistake: Saying impurities have no effect on boiling point.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by a formulation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A formulation is a mixture.",
        keywords: [
          ["formulation", "formulation"],
          ["mixture", "mixture"],
        ],
      },
      {
        point:
          "It has been designed as a useful product with substances in carefully measured amounts.",
        keywords: [
          ["useful product", "useful", "product"],
          ["measured amounts", "measured", "amounts"],
        ],
      },
    ],
    examinerKeywords: ["formulation", "mixture", "useful product", "measured amounts"],
    modelAnswer:
      "A formulation is a mixture designed as a useful product, with substances present in carefully measured amounts.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Formulations.",
      "Avoid: Saying a formulation is a pure substance.",
      "Avoid: Ignoring measured amounts.",
    ],
    examinerTip: "Avoid this common mistake: Saying a formulation is a pure substance.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how paper chromatography can be used to separate dyes in ink.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Draw a pencil baseline near the bottom of chromatography paper.",
        keywords: [
          ["chromatography", "chromatography"],
          ["pencil baseline", "pencil", "baseline"],
        ],
      },
      {
        point: "Place a spot of ink on the baseline.",
        keywords: [["pencil baseline", "pencil", "baseline"]],
      },
      {
        point: "Put the paper in a solvent with the solvent level below the baseline.",
        keywords: [
          ["pencil baseline", "pencil", "baseline"],
          ["solvent", "solvent"],
        ],
      },
      {
        point: "Allow the solvent to rise up the paper.",
        keywords: [["solvent", "solvent"]],
      },
      {
        point: "Different dyes move different distances and separate.",
        keywords: [
          ["dyes", "dyes"],
          ["separate", "separate"],
        ],
      },
    ],
    examinerKeywords: ["chromatography", "pencil baseline", "solvent", "dyes", "separate"],
    modelAnswer:
      "Draw a pencil baseline on chromatography paper and place a spot of ink on it. Put the paper in a solvent with the solvent below the baseline. As the solvent rises, different dyes move different distances and separate.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Chromatography.",
      "Avoid: Drawing the baseline in ink.",
      "Avoid: Putting the solvent level above the spot.",
    ],
    examinerTip: "Avoid this common mistake: Drawing the baseline in ink.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "A dye spot moves 4.5 cm and the solvent front moves 9.0 cm. Calculate the Rf value.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rf = distance moved by substance ÷ distance moved by solvent front.",
        keywords: [["solvent front", "solvent", "front"]],
      },
      {
        point: "Rf = 4.5 ÷ 9.0.",
        keywords: [["rf = 4.5 ÷ 9.0."]],
      },
      {
        point: "Rf = 0.50.",
        keywords: [["0.50", "0.50"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "solvent front", "0.50"],
    modelAnswer: "Rf = 4.5 ÷ 9.0 = 0.50.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Rf values.",
      "Avoid: Dividing solvent distance by spot distance.",
      "Avoid: Adding units to Rf.",
    ],
    examinerTip: "Avoid this common mistake: Dividing solvent distance by spot distance.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how chromatography can show whether a sample is pure or a mixture.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A pure substance produces one spot.",
        keywords: [
          ["pure", "pure"],
          ["one spot", "spot"],
        ],
      },
      {
        point: "A mixture produces more than one spot.",
        keywords: [
          ["mixture", "mixture"],
          ["one spot", "spot"],
        ],
      },
      {
        point: "Different substances move different distances on the chromatogram.",
        keywords: [["different", "substances", "move"]],
      },
    ],
    examinerKeywords: ["chromatography", "pure", "mixture", "one spot", "more than one spot"],
    modelAnswer:
      "A pure substance gives one spot on a chromatogram. A mixture gives more than one spot because different substances move different distances.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Chromatography interpretation.",
      "Avoid: Saying a pure substance gives many spots.",
      "Avoid: Ignoring the number of spots.",
    ],
    examinerTip: "Avoid this common mistake: Saying a pure substance gives many spots.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for hydrogen gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place a lighted splint near the gas.",
        keywords: [["lighted splint", "lighted", "splint"]],
      },
      {
        point: "Hydrogen burns with a squeaky pop.",
        keywords: [
          ["hydrogen", "hydrogen"],
          ["squeaky pop", "squeaky"],
        ],
      },
    ],
    examinerKeywords: ["hydrogen", "lighted splint", "squeaky pop"],
    modelAnswer: "Place a lighted splint near the gas. Hydrogen burns with a squeaky pop.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Gas tests.",
      "Avoid: Using a glowing splint.",
      "Avoid: Saying hydrogen turns limewater milky.",
    ],
    examinerTip: "Avoid this common mistake: Using a glowing splint.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for oxygen gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place a glowing splint in the gas.",
        keywords: [["glowing splint", "glowing", "splint"]],
      },
      {
        point: "Oxygen relights the glowing splint.",
        keywords: [
          ["oxygen", "oxygen"],
          ["glowing splint", "glowing", "splint"],
        ],
      },
    ],
    examinerKeywords: ["oxygen", "glowing splint", "relights"],
    modelAnswer: "Place a glowing splint in the gas. Oxygen relights the glowing splint.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Gas tests.",
      "Avoid: Using a lighted splint and listening for a pop.",
      "Avoid: Using limewater.",
    ],
    examinerTip: "Avoid this common mistake: Using a lighted splint and listening for a pop.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for carbon dioxide gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Bubble the gas through limewater.",
        keywords: [["limewater", "limewater"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["limewater", "limewater"],
        ],
      },
    ],
    examinerKeywords: ["carbon dioxide", "limewater", "milky"],
    modelAnswer: "Bubble the gas through limewater. Carbon dioxide turns limewater milky.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Gas tests.",
      "Avoid: Using a glowing splint.",
      "Avoid: Saying limewater turns blue.",
    ],
    examinerTip: "Avoid this common mistake: Using a glowing splint.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for chlorine gas.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use damp blue litmus paper.",
        keywords: [["damp blue litmus", "damp", "blue", "litmus"]],
      },
      {
        point: "Chlorine bleaches the litmus paper white after turning it red.",
        keywords: [
          ["chlorine", "chlorine"],
          ["damp blue litmus", "damp", "blue", "litmus"],
        ],
      },
    ],
    examinerKeywords: ["chlorine", "damp blue litmus", "bleaches", "white"],
    modelAnswer: "Chlorine turns damp blue litmus paper red, then bleaches it white.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Gas tests.",
      "Avoid: Using dry litmus only.",
      "Avoid: Saying chlorine gives a squeaky pop.",
    ],
    examinerTip: "Avoid this common mistake: Using dry litmus only.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the flame test colours for lithium, sodium and potassium ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lithium ions give a crimson or red flame.",
        keywords: [
          ["flame test", "flame", "test"],
          ["lithium", "lithium"],
        ],
      },
      {
        point: "Sodium ions give a yellow flame.",
        keywords: [
          ["flame test", "flame", "test"],
          ["sodium", "sodium"],
        ],
      },
      {
        point: "Potassium ions give a lilac flame.",
        keywords: [
          ["flame test", "flame", "test"],
          ["potassium", "potassium"],
        ],
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
    hints: [
      "Think about Flame tests.",
      "Avoid: Saying sodium gives lilac.",
      "Avoid: Saying potassium gives yellow.",
    ],
    examinerTip: "Avoid this common mistake: Saying sodium gives lilac.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the flame test colours for calcium and copper(II) ions.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Calcium ions give an orange-red or brick-red flame.",
        keywords: [
          ["flame test", "flame", "test"],
          ["calcium", "calcium"],
        ],
      },
      {
        point: "Copper(II) ions give a blue-green flame.",
        keywords: [
          ["flame test", "flame", "test"],
          ["copper", "copper"],
        ],
      },
    ],
    examinerKeywords: ["flame test", "calcium", "copper", "orange-red", "blue-green"],
    modelAnswer: "Calcium gives an orange-red flame and copper(II) gives a blue-green flame.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Flame tests.",
      "Avoid: Saying copper gives yellow.",
      "Avoid: Saying calcium gives lilac.",
    ],
    examinerTip: "Avoid this common mistake: Saying copper gives yellow.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for ammonium ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add aqueous sodium hydroxide.",
        keywords: [["sodium hydroxide", "sodium", "hydroxide"]],
      },
      {
        point: "Warm the mixture.",
        keywords: [["warm", "warm"]],
      },
      {
        point: "Ammonia gas is produced and turns damp red litmus paper blue.",
        keywords: [
          ["ammonia", "ammonia"],
          ["damp red litmus", "damp", "litmus"],
        ],
      },
    ],
    examinerKeywords: ["ammonium ions", "sodium hydroxide", "warm", "ammonia", "damp red litmus"],
    modelAnswer:
      "Add aqueous sodium hydroxide and warm. If ammonium ions are present, ammonia gas is produced and turns damp red litmus paper blue.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Think about Cation tests.", "Avoid: Forgetting to warm.", "Avoid: Using limewater."],
    examinerTip: "Avoid this common mistake: Forgetting to warm.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "A solution forms a blue precipitate when aqueous sodium hydroxide is added. Identify the cation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Copper(II) ions are present.",
        keywords: [["copper(II)", "copper(ii)"]],
      },
      {
        point: "Copper(II) ions form a blue precipitate with aqueous sodium hydroxide.",
        keywords: [
          ["blue precipitate", "blue", "precipitate"],
          ["sodium hydroxide", "sodium", "hydroxide"],
        ],
      },
    ],
    examinerKeywords: ["blue precipitate", "sodium hydroxide", "copper(II)", "Cu2+"],
    modelAnswer: "The cation is copper(II), Cu2+.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Think about Cation tests.", "Avoid: Writing iron(II).", "Avoid: Writing aluminium."],
    examinerTip: "Avoid this common mistake: Writing iron(II).",
  },
  {
    id: "oxfordaqa-chemistry-analysis-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State the precipitate colours formed by iron(II) ions and iron(III) ions with aqueous sodium hydroxide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Iron(II) ions form a green precipitate.",
        keywords: [
          ["iron(II)", "iron(ii)"],
          ["green precipitate", "green", "precipitate"],
        ],
      },
      {
        point: "Iron(III) ions form a red-brown precipitate.",
        keywords: [
          ["iron(III)", "iron(iii)"],
          ["green precipitate", "green", "precipitate"],
        ],
      },
    ],
    examinerKeywords: ["iron(II)", "iron(III)", "green precipitate", "red-brown precipitate"],
    modelAnswer:
      "Iron(II) ions form a green precipitate, while iron(III) ions form a red-brown precipitate.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Cation tests.",
      "Avoid: Reversing iron(II) and iron(III).",
      "Avoid: Saying both are blue.",
    ],
    examinerTip: "Avoid this common mistake: Reversing iron(II) and iron(III).",
  },
  {
    id: "oxfordaqa-chemistry-analysis-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for carbonate ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add dilute acid.",
        keywords: [["dilute acid", "dilute", "acid"]],
      },
      {
        point: "Carbon dioxide gas is produced.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["limewater", "limewater"],
        ],
      },
    ],
    examinerKeywords: ["carbonate", "dilute acid", "carbon dioxide", "limewater", "milky"],
    modelAnswer:
      "Add dilute acid. If carbonate ions are present, carbon dioxide is produced and turns limewater milky.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Anion tests.",
      "Avoid: Using silver nitrate.",
      "Avoid: Saying hydrogen is produced.",
    ],
    examinerTip: "Avoid this common mistake: Using silver nitrate.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for sulfate ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Acidify the sample with dilute hydrochloric acid.",
        keywords: [["acidify", "acidify"]],
      },
      {
        point: "Add aqueous barium chloride or barium nitrate.",
        keywords: [
          ["barium chloride", "barium", "chloride"],
          ["barium nitrate", "barium", "nitrate"],
        ],
      },
      {
        point: "A white precipitate forms if sulfate ions are present.",
        keywords: [
          ["sulfate", "sulfate"],
          ["white precipitate", "white", "precipitate"],
        ],
      },
    ],
    examinerKeywords: [
      "sulfate",
      "barium chloride",
      "barium nitrate",
      "white precipitate",
      "acidify",
    ],
    modelAnswer:
      "Acidify the sample with dilute hydrochloric acid, then add aqueous barium chloride. A white precipitate shows sulfate ions are present.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Anion tests.",
      "Avoid: Using silver nitrate for sulfate.",
      "Avoid: Forgetting to acidify.",
    ],
    examinerTip: "Avoid this common mistake: Using silver nitrate for sulfate.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State the precipitate colours formed by chloride, bromide and iodide ions with acidified silver nitrate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Chloride ions form a white precipitate.",
        keywords: [
          ["halide ions", "halide", "ions"],
          ["chloride", "chloride"],
        ],
      },
      {
        point: "Bromide ions form a cream precipitate.",
        keywords: [
          ["halide ions", "halide", "ions"],
          ["bromide", "bromide"],
        ],
      },
      {
        point: "Iodide ions form a yellow precipitate.",
        keywords: [
          ["halide ions", "halide", "ions"],
          ["iodide", "iodide"],
        ],
      },
    ],
    examinerKeywords: [
      "halide ions",
      "silver nitrate",
      "chloride",
      "bromide",
      "iodide",
      "white",
      "cream",
      "yellow",
    ],
    modelAnswer:
      "Chloride gives a white precipitate, bromide gives a cream precipitate and iodide gives a yellow precipitate.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Halide tests.",
      "Avoid: Reversing bromide and iodide colours.",
      "Avoid: Saying all halides give white precipitates.",
    ],
    examinerTip: "Avoid this common mistake: Reversing bromide and iodide colours.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "A salt gives a yellow flame and forms a white precipitate with acidified silver nitrate. Identify the salt and explain your answer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Yellow flame shows sodium ions.",
        keywords: [
          ["yellow flame", "yellow", "flame"],
          ["sodium", "sodium"],
        ],
      },
      {
        point: "White precipitate with acidified silver nitrate shows chloride ions.",
        keywords: [
          ["white precipitate", "white", "precipitate"],
          ["chloride", "chloride"],
        ],
      },
      {
        point: "The salt is sodium chloride.",
        keywords: [
          ["sodium", "sodium"],
          ["chloride", "chloride"],
        ],
      },
      {
        point: "Both the cation and anion are identified.",
        keywords: [["both", "cation", "anion"]],
      },
    ],
    examinerKeywords: [
      "yellow flame",
      "white precipitate",
      "sodium",
      "chloride",
      "sodium chloride",
    ],
    modelAnswer:
      "The salt is sodium chloride. The yellow flame shows sodium ions and the white precipitate with acidified silver nitrate shows chloride ions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Unknown salt identification.",
      "Avoid: Writing potassium chloride.",
      "Avoid: Writing sodium sulfate.",
    ],
    examinerTip: "Avoid this common mistake: Writing potassium chloride.",
  },
  {
    id: "oxfordaqa-chemistry-analysis-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how chemical tests can be used to identify unknown substances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Flame tests identify some metal cations by flame colour.",
        keywords: [
          ["flame tests", "flame", "tests"],
          ["gas tests", "tests"],
        ],
      },
      {
        point: "Aqueous sodium hydroxide identifies some cations by precipitate colour.",
        keywords: [["aqueous", "sodium", "hydroxide"]],
      },
      {
        point: "Ammonium ions produce ammonia when warmed with sodium hydroxide.",
        keywords: [["ammonium", "ions", "produce"]],
      },
      {
        point: "Acidified silver nitrate identifies halide ions by precipitate colour.",
        keywords: [["acidified", "silver", "nitrate"]],
      },
      {
        point: "Barium ions identify sulfate ions by forming a white precipitate.",
        keywords: [["barium", "ions", "identify"]],
      },
      {
        point:
          "Carbonates react with dilute acid to form carbon dioxide, which turns limewater milky.",
        keywords: [["carbonates", "react", "with"]],
      },
    ],
    examinerKeywords: [
      "chemical analysis",
      "flame tests",
      "precipitation",
      "gas tests",
      "unknown substances",
    ],
    modelAnswer:
      "Flame tests identify some metal cations by flame colour. Aqueous sodium hydroxide identifies cations by precipitate colour, and ammonium ions produce ammonia when warmed with sodium hydroxide. Acidified silver nitrate identifies halides, barium ions identify sulfates, and carbonates produce carbon dioxide with dilute acid, which turns limewater milky.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Using only one test for every ion.",
      "Avoid: Forgetting to acidify in anion tests.",
    ],
    examinerTip: "Avoid this common mistake: Using only one test for every ion.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what acids produce in aqueous solution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Acids produce hydrogen ions, H+.",
        keywords: [
          ["acid", "acid"],
          ["hydrogen ions", "hydrogen", "ions"],
        ],
      },
    ],
    examinerKeywords: ["acid", "aqueous", "hydrogen ions", "H+"],
    modelAnswer: "Acids produce hydrogen ions, H+, in aqueous solution.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Think about Acids.",
      "Avoid: Saying acids produce OH- ions.",
      "Avoid: Writing hydrogen gas instead of hydrogen ions.",
    ],
    examinerTip: "Avoid this common mistake: Saying acids produce OH- ions.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what alkalis produce in aqueous solution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Alkalis produce hydroxide ions, OH-.",
        keywords: [
          ["alkali", "alkali"],
          ["hydroxide ions", "hydroxide", "ions"],
        ],
      },
    ],
    examinerKeywords: ["alkali", "aqueous", "hydroxide ions", "OH-"],
    modelAnswer: "Alkalis produce hydroxide ions, OH-, in aqueous solution.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Think about Alkalis.",
      "Avoid: Saying alkalis produce H+ ions.",
      "Avoid: Writing oxygen ions.",
    ],
    examinerTip: "Avoid this common mistake: Saying alkalis produce H+ ions.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the pH scale in terms of acidic, neutral and alkaline solutions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Acidic solutions have pH less than 7.",
        keywords: [["acidic", "acidic"]],
      },
      {
        point: "Neutral solutions have pH 7.",
        keywords: [["neutral", "neutral"]],
      },
      {
        point: "Alkaline solutions have pH greater than 7.",
        keywords: [["alkaline", "alkaline"]],
      },
    ],
    examinerKeywords: ["pH", "acidic", "neutral", "alkaline", "7"],
    modelAnswer:
      "Acidic solutions have pH below 7, neutral solutions have pH 7 and alkaline solutions have pH above 7.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about pH scale.",
      "Avoid: Saying acids have pH above 7.",
      "Avoid: Saying neutral is pH 0.",
    ],
    examinerTip: "Avoid this common mistake: Saying acids have pH above 7.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the colour of litmus in acidic and alkaline solutions.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Litmus is red in acidic solution.",
        keywords: [
          ["litmus", "litmus"],
          ["acid", "acid"],
        ],
      },
      {
        point: "Litmus is blue in alkaline solution.",
        keywords: [
          ["litmus", "litmus"],
          ["alkali", "alkali"],
        ],
      },
    ],
    examinerKeywords: ["litmus", "acid", "alkali", "red", "blue"],
    modelAnswer: "Litmus is red in acidic solution and blue in alkaline solution.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Indicators.",
      "Avoid: Reversing red and blue.",
      "Avoid: Saying litmus is green in acid.",
    ],
    examinerTip: "Avoid this common mistake: Reversing red and blue.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State the colour of universal indicator in a strong acid, a neutral solution and a strong alkali.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Strong acid gives red.",
        keywords: [
          ["strong acid", "strong", "acid"],
          ["strong alkali", "strong", "alkali"],
        ],
      },
      {
        point: "Neutral solution gives green.",
        keywords: [
          ["neutral", "neutral"],
          ["green", "green"],
        ],
      },
      {
        point: "Strong alkali gives purple or violet.",
        keywords: [
          ["strong acid", "strong", "acid"],
          ["strong alkali", "strong", "alkali"],
        ],
      },
    ],
    examinerKeywords: [
      "universal indicator",
      "strong acid",
      "neutral",
      "strong alkali",
      "red",
      "green",
      "purple",
    ],
    modelAnswer:
      "Universal indicator is red in a strong acid, green in a neutral solution and purple in a strong alkali.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Universal indicator.",
      "Avoid: Saying neutral is red.",
      "Avoid: Saying strong alkali is orange.",
    ],
    examinerTip: "Avoid this common mistake: Saying neutral is red.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["OH-"]],
      },
    ],
    examinerKeywords: ["neutralisation", "ionic equation", "H+", "OH-", "water"],
    modelAnswer: "H+ + OH- → H2O",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Neutralisation.",
      "Avoid: Writing salt as the only product.",
      "Avoid: Forgetting hydroxide ions.",
    ],
    examinerTip: "Avoid this common mistake: Writing salt as the only product.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain the difference between a strong acid and a weak acid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A strong acid completely ionises in water.",
        keywords: [
          ["strong acid", "strong", "acid"],
          ["weak acid", "weak", "acid"],
        ],
      },
      {
        point: "A weak acid partially ionises in water.",
        keywords: [
          ["strong acid", "strong", "acid"],
          ["weak acid", "weak", "acid"],
        ],
      },
      {
        point: "A strong acid produces a higher concentration of H+ ions.",
        keywords: [
          ["strong acid", "strong", "acid"],
          ["weak acid", "weak", "acid"],
        ],
      },
      {
        point: "The comparison must be for acids of the same concentration.",
        keywords: [
          ["strong acid", "strong", "acid"],
          ["weak acid", "weak", "acid"],
        ],
      },
    ],
    examinerKeywords: [
      "strong acid",
      "weak acid",
      "complete ionisation",
      "partial ionisation",
      "H+",
    ],
    modelAnswer:
      "A strong acid completely ionises in water, while a weak acid only partially ionises. For acids of the same concentration, a strong acid produces a higher concentration of H+ ions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Strong and weak acids.",
      "Avoid: Saying weak acid means dilute acid.",
      "Avoid: Saying strong acid means concentrated acid.",
    ],
    examinerTip: "Avoid this common mistake: Saying weak acid means dilute acid.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products when an acid reacts with a metal.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A salt is formed.",
        keywords: [["salt", "salt"]],
      },
      {
        point: "Hydrogen is formed.",
        keywords: [["hydrogen", "hydrogen"]],
      },
    ],
    examinerKeywords: ["acid", "metal", "salt", "hydrogen"],
    modelAnswer: "An acid reacts with a metal to form a salt and hydrogen.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Acid reactions.",
      "Avoid: Writing carbon dioxide as the gas.",
      "Avoid: Forgetting hydrogen.",
    ],
    examinerTip: "Avoid this common mistake: Writing carbon dioxide as the gas.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products when an acid reacts with a metal carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A salt is formed.",
        keywords: [["salt", "salt"]],
      },
      {
        point: "Water is formed.",
        keywords: [["water", "water"]],
      },
      {
        point: "Carbon dioxide is formed.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
    ],
    examinerKeywords: ["acid", "carbonate", "salt", "water", "carbon dioxide"],
    modelAnswer: "An acid reacts with a metal carbonate to form a salt, water and carbon dioxide.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Acid reactions.",
      "Avoid: Writing hydrogen gas.",
      "Avoid: Forgetting water.",
    ],
    examinerTip: "Avoid this common mistake: Writing hydrogen gas.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products when an acid reacts with a base.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A salt is formed.",
        keywords: [["salt", "salt"]],
      },
      {
        point: "Water is formed.",
        keywords: [["water", "water"]],
      },
    ],
    examinerKeywords: ["acid", "base", "neutralisation", "salt", "water"],
    modelAnswer: "An acid reacts with a base to form a salt and water.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Acid reactions.",
      "Avoid: Writing hydrogen as a product.",
      "Avoid: Forgetting water.",
    ],
    examinerTip: "Avoid this common mistake: Writing hydrogen as a product.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Name",
    questionText: "Name the salts made from hydrochloric acid, sulfuric acid and nitric acid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Hydrochloric acid forms chlorides.",
        keywords: [
          ["hydrochloric acid", "hydrochloric", "acid"],
          ["sulfuric acid", "sulfuric", "acid"],
        ],
      },
      {
        point: "Sulfuric acid forms sulfates.",
        keywords: [
          ["hydrochloric acid", "hydrochloric", "acid"],
          ["sulfuric acid", "sulfuric", "acid"],
        ],
      },
      {
        point: "Nitric acid forms nitrates.",
        keywords: [
          ["hydrochloric acid", "hydrochloric", "acid"],
          ["sulfuric acid", "sulfuric", "acid"],
        ],
      },
    ],
    examinerKeywords: [
      "hydrochloric acid",
      "sulfuric acid",
      "nitric acid",
      "chloride",
      "sulfate",
      "nitrate",
    ],
    modelAnswer:
      "Hydrochloric acid forms chlorides, sulfuric acid forms sulfates and nitric acid forms nitrates.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Salt names.",
      "Avoid: Saying hydrochloric acid forms nitrates.",
      "Avoid: Saying sulfuric acid forms sulfides.",
    ],
    examinerTip: "Avoid this common mistake: Saying hydrochloric acid forms nitrates.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText:
      "Describe how to prepare pure dry copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Warm dilute sulfuric acid.",
        keywords: [["sulfuric acid", "sulfuric", "acid"]],
      },
      {
        point: "Add excess copper(II) oxide.",
        keywords: [
          ["copper sulfate", "copper", "sulfate"],
          ["copper oxide", "copper", "oxide"],
        ],
      },
      {
        point: "Stir until no more reacts.",
        keywords: [["stir", "until", "more"]],
      },
      {
        point: "Filter to remove excess copper(II) oxide.",
        keywords: [
          ["copper sulfate", "copper", "sulfate"],
          ["copper oxide", "copper", "oxide"],
        ],
      },
      {
        point: "Heat the filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["filter", "filter"]],
      },
    ],
    examinerKeywords: ["copper sulfate", "copper oxide", "sulfuric acid", "filter", "crystallise"],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess copper(II) oxide while stirring until no more reacts. Filter off the excess solid. Heat the filtrate until nearly saturated, then leave it to cool so crystals form. Filter and dry the crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Soluble salts.",
      "Avoid: Using copper metal instead of copper oxide.",
      "Avoid: Not adding excess solid.",
    ],
    examinerTip: "Avoid this common mistake: Using copper metal instead of copper oxide.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText:
      "Describe how to prepare a soluble salt from an acid and an alkali using titration.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a pipette to measure a fixed volume of alkali into a conical flask.",
        keywords: [["alkali", "alkali"]],
      },
      {
        point: "Add indicator.",
        keywords: [["indicator", "indicator"]],
      },
      {
        point: "Add acid from a burette until the end-point.",
        keywords: [
          ["acid", "acid"],
          ["burette", "burette"],
        ],
      },
      {
        point: "Repeat using the same volumes but without indicator.",
        keywords: [["indicator", "indicator"]],
      },
      {
        point: "Evaporate the solution until nearly saturated.",
        keywords: [["evaporate", "solution", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["crystals", "crystals"]],
      },
    ],
    examinerKeywords: ["titration", "acid", "alkali", "indicator", "burette", "crystals"],
    modelAnswer:
      "Measure alkali into a conical flask using a pipette and add indicator. Add acid from a burette until the end-point. Repeat using the same volumes but without indicator. Evaporate the solution until nearly saturated, then cool, filter and dry the crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Titration.",
      "Avoid: Leaving indicator in the final salt solution.",
      "Avoid: Not using a burette.",
    ],
    examinerTip: "Avoid this common mistake: Leaving indicator in the final salt solution.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how to prepare an insoluble salt by precipitation.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mix two suitable soluble salt solutions.",
        keywords: [["insoluble salt", "insoluble", "salt"]],
      },
      {
        point: "An insoluble salt precipitate forms.",
        keywords: [["insoluble salt", "insoluble", "salt"]],
      },
      {
        point: "Filter the mixture to collect the precipitate.",
        keywords: [["filter", "filter"]],
      },
      {
        point: "Wash and dry the precipitate.",
        keywords: [["wash", "wash"], ["dry"]],
      },
    ],
    examinerKeywords: ["insoluble salt", "precipitation", "filter", "wash", "dry"],
    modelAnswer:
      "Mix two soluble salt solutions that produce the required insoluble salt. A precipitate forms. Filter the mixture, then wash and dry the precipitate.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Insoluble salts.",
      "Avoid: Using crystallisation for an insoluble salt.",
      "Avoid: Forgetting to wash the precipitate.",
    ],
    examinerTip: "Avoid this common mistake: Using crystallisation for an insoluble salt.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State three solubility rules for common salts.",
    marks: 3,
    markSchemePoints: [
      {
        point: "All nitrates are soluble.",
        keywords: [["nitrates", "nitrates"]],
      },
      {
        point: "All sodium, potassium and ammonium salts are soluble.",
        keywords: [
          ["sodium", "sodium"],
          ["potassium", "potassium"],
        ],
      },
      {
        point: "Most chlorides are soluble except silver chloride and lead(II) chloride.",
        keywords: [["chlorides", "chlorides"]],
      },
      {
        point: "Most carbonates are insoluble except sodium, potassium and ammonium carbonates.",
        keywords: [
          ["sodium", "sodium"],
          ["potassium", "potassium"],
        ],
      },
    ],
    examinerKeywords: [
      "solubility",
      "nitrates",
      "sodium",
      "potassium",
      "ammonium",
      "chlorides",
      "carbonates",
    ],
    modelAnswer:
      "All nitrates are soluble. All sodium, potassium and ammonium salts are soluble. Most chlorides are soluble except silver chloride and lead(II) chloride.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Solubility rules.",
      "Avoid: Saying all carbonates are soluble.",
      "Avoid: Saying all chlorides are insoluble.",
    ],
    examinerTip: "Avoid this common mistake: Saying all carbonates are soluble.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare acidic oxides and basic oxides.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Acidic oxides are usually oxides of non-metals.",
        keywords: [
          ["acidic oxide", "acidic", "oxide"],
          ["basic oxide", "basic", "oxide"],
        ],
      },
      {
        point: "Acidic oxides react with bases to form salts.",
        keywords: [
          ["acidic oxide", "acidic", "oxide"],
          ["basic oxide", "basic", "oxide"],
        ],
      },
      {
        point: "Basic oxides are usually oxides of metals.",
        keywords: [
          ["acidic oxide", "acidic", "oxide"],
          ["basic oxide", "basic", "oxide"],
        ],
      },
      {
        point: "Basic oxides react with acids to form salts and water.",
        keywords: [
          ["acidic oxide", "acidic", "oxide"],
          ["basic oxide", "basic", "oxide"],
        ],
      },
    ],
    examinerKeywords: ["acidic oxide", "basic oxide", "metal oxide", "non-metal oxide", "salt"],
    modelAnswer:
      "Acidic oxides are usually non-metal oxides and react with bases to form salts. Basic oxides are usually metal oxides and react with acids to form salts and water.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Acidic and basic oxides.",
      "Avoid: Saying all metal oxides are acidic.",
      "Avoid: Saying acidic oxides react with acids.",
    ],
    examinerTip: "Avoid this common mistake: Saying all metal oxides are acidic.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by an amphoteric oxide and give one example.",
    marks: 3,
    markSchemePoints: [
      {
        point: "An amphoteric oxide reacts with acids.",
        keywords: [
          ["amphoteric oxide", "amphoteric", "oxide"],
          ["acid", "acid"],
        ],
      },
      {
        point: "It also reacts with bases.",
        keywords: [["base", "base"]],
      },
      {
        point: "Examples include aluminium oxide or zinc oxide.",
        keywords: [
          ["amphoteric oxide", "amphoteric", "oxide"],
          ["aluminium oxide", "aluminium", "oxide"],
        ],
      },
    ],
    examinerKeywords: ["amphoteric oxide", "acid", "base", "aluminium oxide", "zinc oxide"],
    modelAnswer:
      "An amphoteric oxide reacts with both acids and bases. Aluminium oxide is an example.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Amphoteric oxides.",
      "Avoid: Saying amphoteric means reacts with neither acids nor bases.",
      "Avoid: Giving sodium oxide as the best example.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying amphoteric means reacts with neither acids nor bases.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "A solid reacts with dilute acid to form a gas that turns limewater milky. Identify the ion in the solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Carbonate ions are present.",
        keywords: [
          ["carbonate", "carbonate"],
          ["carbon dioxide", "carbon", "dioxide"],
        ],
      },
      {
        point: "The gas is carbon dioxide.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["limewater", "limewater"],
        ],
      },
    ],
    examinerKeywords: ["carbonate", "acid", "carbon dioxide", "limewater", "milky"],
    modelAnswer:
      "The solid contains carbonate ions. Carbonates react with acids to produce carbon dioxide, which turns limewater milky.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Carbonate test.",
      "Avoid: Writing sulfate ions.",
      "Avoid: Saying hydrogen turns limewater milky.",
    ],
    examinerTip: "Avoid this common mistake: Writing sulfate ions.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why aqueous ammonia is alkaline.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ammonia dissolves in water.",
        keywords: [
          ["ammonia", "ammonia"],
          ["water", "water"],
        ],
      },
      {
        point: "It reacts with water to produce hydroxide ions.",
        keywords: [
          ["hydroxide ions", "hydroxide", "ions"],
          ["water", "water"],
        ],
      },
      {
        point: "Hydroxide ions make the solution alkaline.",
        keywords: [
          ["alkaline", "alkaline"],
          ["hydroxide ions", "hydroxide", "ions"],
        ],
      },
    ],
    examinerKeywords: ["ammonia", "alkaline", "hydroxide ions", "water"],
    modelAnswer:
      "Ammonia dissolves in water and reacts with water to produce hydroxide ions. The hydroxide ions make the solution alkaline.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Ammonia.",
      "Avoid: Saying ammonia produces H+ ions.",
      "Avoid: Saying ammonia is acidic.",
    ],
    examinerTip: "Avoid this common mistake: Saying ammonia produces H+ ions.",
  },
  {
    id: "oxfordaqa-chemistry-acids-bases-salts-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how acids react with metals, bases and carbonates, and how salts can be prepared from these reactions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Acids react with metals to form salts and hydrogen.",
        keywords: [
          ["acid", "acid"],
          ["metal", "metal"],
        ],
      },
      {
        point: "Acids react with bases to form salts and water.",
        keywords: [
          ["acid", "acid"],
          ["base", "base"],
        ],
      },
      {
        point: "Acids react with carbonates to form salts, water and carbon dioxide.",
        keywords: [
          ["acid", "acid"],
          ["carbonate", "carbonate"],
        ],
      },
      {
        point:
          "Soluble salts can be prepared by reacting acid with excess insoluble base or carbonate.",
        keywords: [
          ["acid", "acid"],
          ["base", "base"],
        ],
      },
      {
        point: "Excess solid is removed by filtration.",
        keywords: [["excess", "solid", "removed"]],
      },
      {
        point: "The filtrate is evaporated and cooled to form crystals.",
        keywords: [["crystals", "crystals"]],
      },
    ],
    examinerKeywords: ["acid", "metal", "base", "carbonate", "salt preparation", "crystals"],
    modelAnswer:
      "Acids react with metals to form salts and hydrogen, with bases to form salts and water, and with carbonates to form salts, water and carbon dioxide. A soluble salt can be prepared by reacting an acid with excess insoluble base or carbonate, filtering off the excess solid, then evaporating and cooling the filtrate to form crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying all acid reactions produce hydrogen.",
      "Avoid: Forgetting carbon dioxide from carbonates.",
    ],
    examinerTip: "Avoid this common mistake: Saying all acid reactions produce hydrogen.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the law of conservation of mass.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Mass is conserved in a chemical reaction.",
        keywords: [
          ["conservation of mass", "conservation", "mass"],
          ["total mass", "total", "mass"],
        ],
      },
      {
        point: "The total mass of reactants equals the total mass of products.",
        keywords: [
          ["conservation of mass", "conservation", "mass"],
          ["reactants", "reactants"],
        ],
      },
    ],
    examinerKeywords: ["conservation of mass", "reactants", "products", "total mass"],
    modelAnswer:
      "Mass is conserved in a chemical reaction, so the total mass of reactants equals the total mass of products.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Conservation of mass.",
      "Avoid: Saying mass is lost in every reaction.",
      "Avoid: Only comparing number of substances.",
    ],
    examinerTip: "Avoid this common mistake: Saying mass is lost in every reaction.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of calcium carbonate, CaCO3. Ar: Ca = 40, C = 12, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use Mr = 40 + 12 + (3 × 16).",
        keywords: [["use mr = 40 + 12 + (3 × "]],
      },
      {
        point: "3 × 16 = 48.",
        keywords: [["3 × 16 = 48."]],
      },
      {
        point: "Mr = 100.",
        keywords: [["100"]],
      },
    ],
    examinerKeywords: ["relative formula mass", "Mr", "calcium carbonate", "100"],
    modelAnswer: "Mr of CaCO3 = 40 + 12 + (3 × 16) = 100.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Relative formula mass.",
      "Avoid: Forgetting there are three oxygen atoms.",
      "Avoid: Using atomic numbers instead of Ar values.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting there are three oxygen atoms.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calculate the percentage by mass of carbon in carbon dioxide, CO2. Ar: C = 12, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Mr of CO2 = 12 + 32 = 44.",
        keywords: [["mr of co2 = 12 + 32 = 44"]],
      },
      {
        point: "Percentage carbon = 12 ÷ 44 × 100.",
        keywords: [
          ["percentage by mass", "percentage", "mass"],
          ["carbon dioxide", "carbon", "dioxide"],
        ],
      },
      {
        point: "Percentage carbon = 27.3%.",
        keywords: [
          ["percentage by mass", "percentage", "mass"],
          ["carbon dioxide", "carbon", "dioxide"],
        ],
      },
    ],
    examinerKeywords: ["percentage by mass", "carbon dioxide", "carbon", "27.3%"],
    modelAnswer: "Mr of CO2 = 44. Percentage of carbon = 12 ÷ 44 × 100 = 27.3%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Percentage by mass.",
      "Avoid: Using 16 as the mass of oxygen in CO2.",
      "Avoid: Forgetting ×100.",
    ],
    examinerTip: "Avoid this common mistake: Using 16 as the mass of oxygen in CO2.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText: "Calculate the number of moles in 12 g of magnesium. Ar: Mg = 24.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Moles = mass ÷ Ar.",
        keywords: [
          ["moles", "moles"],
          ["mass", "mass"],
        ],
      },
      {
        point: "Moles = 12 ÷ 24 = 0.50 mol.",
        keywords: [
          ["moles", "moles"],
          ["0.50 mol", "0.50"],
        ],
      },
    ],
    examinerKeywords: ["moles", "mass", "magnesium", "0.50 mol"],
    modelAnswer: "Moles of Mg = 12 ÷ 24 = 0.50 mol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Moles from mass.",
      "Avoid: Multiplying mass by Ar.",
      "Avoid: Forgetting units.",
    ],
    examinerTip: "Avoid this common mistake: Multiplying mass by Ar.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText: "Calculate the mass of 0.25 mol of carbon dioxide. Mr: CO2 = 44.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Mass = moles × Mr.",
        keywords: [
          ["mass", "mass"],
          ["moles", "moles"],
        ],
      },
      {
        point: "Mass = 0.25 × 44 = 11 g.",
        keywords: [["mass", "mass"]],
      },
    ],
    examinerKeywords: ["mass", "moles", "carbon dioxide", "11 g"],
    modelAnswer: "Mass = 0.25 × 44 = 11 g.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Mass from moles.",
      "Avoid: Dividing 0.25 by 44.",
      "Avoid: Forgetting units.",
    ],
    examinerTip: "Avoid this common mistake: Dividing 0.25 by 44.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with oxygen: 2Mg + O2 → 2MgO. Calculate the mass of magnesium oxide formed from 4.8 g of magnesium. Ar: Mg = 24, O = 16.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of Mg = 4.8 ÷ 24 = 0.20 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mole ratio Mg : MgO is 1 : 1.",
        keywords: [["mole", "ratio"]],
      },
      {
        point: "Moles of MgO = 0.20 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mr of MgO = 24 + 16 = 40.",
        keywords: [["mr of mgo = 24 + 16 = 40"]],
      },
      {
        point: "Mass of MgO = 0.20 × 40 = 8.0 g.",
        keywords: [["8.0 g"]],
      },
    ],
    examinerKeywords: ["reacting masses", "magnesium", "magnesium oxide", "moles", "8.0 g"],
    modelAnswer:
      "Moles of Mg = 4.8 ÷ 24 = 0.20 mol. The ratio Mg:MgO is 1:1, so 0.20 mol of MgO forms. Mr of MgO = 40, so mass = 0.20 × 40 = 8.0 g.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Reacting masses.",
      "Avoid: Using the 2 in the equation as a direct mass multiplier.",
      "Avoid: Forgetting the mole ratio.",
    ],
    examinerTip:
      "Avoid this common mistake: Using the 2 in the equation as a direct mass multiplier.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "A compound contains 24 g of carbon and 6 g of hydrogen. Calculate its empirical formula. Ar: C = 12, H = 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Moles of carbon = 24 ÷ 12 = 2.",
        keywords: [["carbon", "carbon"]],
      },
      {
        point: "Moles of hydrogen = 6 ÷ 1 = 6.",
        keywords: [["hydrogen", "hydrogen"]],
      },
      {
        point: "Ratio C:H = 2:6 = 1:3.",
        keywords: [["ratio"]],
      },
      {
        point: "Empirical formula = CH3.",
        keywords: [["empirical formula", "empirical", "formula"], ["CH3"]],
      },
    ],
    examinerKeywords: ["empirical formula", "carbon", "hydrogen", "CH3"],
    modelAnswer:
      "Moles of C = 24 ÷ 12 = 2. Moles of H = 6 ÷ 1 = 6. Ratio C:H = 2:6 = 1:3, so the empirical formula is CH3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Empirical formula.",
      "Avoid: Using masses directly as the ratio.",
      "Avoid: Not simplifying the ratio.",
    ],
    examinerTip: "Avoid this common mistake: Using masses directly as the ratio.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Find",
    questionText:
      "A compound has empirical formula CH2 and relative molecular mass 56. Find its molecular formula. Ar: C = 12, H = 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of empirical formula CH2 = 12 + 2 = 14.",
        keywords: [
          ["molecular formula", "molecular", "formula"],
          ["empirical formula", "empirical", "formula"],
        ],
      },
      {
        point: "Multiplier = 56 ÷ 14 = 4.",
        keywords: [["multiplier"]],
      },
      {
        point: "Multiply each atom number by 4.",
        keywords: [["multiply", "each", "atom"]],
      },
      {
        point: "Molecular formula = C4H8.",
        keywords: [
          ["molecular formula", "molecular", "formula"],
          ["empirical formula", "empirical", "formula"],
        ],
      },
    ],
    examinerKeywords: ["molecular formula", "empirical formula", "CH2", "C4H8"],
    modelAnswer:
      "The mass of CH2 is 14. The multiplier is 56 ÷ 14 = 4. Therefore the molecular formula is C4H8.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Molecular formula.",
      "Avoid: Writing CH2 as the molecular formula.",
      "Avoid: Dividing 14 by 56.",
    ],
    examinerTip: "Avoid this common mistake: Writing CH2 as the molecular formula.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain what is meant by a limiting reactant.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The limiting reactant is completely used up in a reaction.",
        keywords: [
          ["limiting reactant", "limiting", "reactant"],
          ["used up", "used"],
        ],
      },
      {
        point: "It limits the amount of product formed.",
        keywords: [["amount of product", "amount", "product"]],
      },
    ],
    examinerKeywords: ["limiting reactant", "used up", "amount of product"],
    modelAnswer:
      "The limiting reactant is the reactant that is completely used up and therefore limits the amount of product formed.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Limiting reactants.",
      "Avoid: Saying it is the reactant in excess.",
      "Avoid: Saying it does not affect product amount.",
    ],
    examinerTip: "Avoid this common mistake: Saying it is the reactant in excess.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "Hydrogen reacts with oxygen: 2H2 + O2 → 2H2O. If 4 mol of H2 reacts with 1 mol of O2, identify the limiting reactant.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The equation shows 2 mol H2 reacts with 1 mol O2.",
        keywords: [["equation", "shows", "reacts"]],
      },
      {
        point: "1 mol O2 needs 2 mol H2.",
        keywords: [["needs"]],
      },
      {
        point: "There is more H2 than needed, so O2 is limiting.",
        keywords: [["limiting reactant", "limiting", "reactant"]],
      },
    ],
    examinerKeywords: ["limiting reactant", "hydrogen", "oxygen", "mole ratio"],
    modelAnswer:
      "The equation shows 2 mol H2 reacts with 1 mol O2. 1 mol O2 only needs 2 mol H2, but 4 mol H2 is present, so oxygen is the limiting reactant.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Limiting reactants.",
      "Avoid: Choosing the reactant with the larger number of moles.",
      "Avoid: Ignoring the mole ratio.",
    ],
    examinerTip:
      "Avoid this common mistake: Choosing the reactant with the larger number of moles.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [
          ["concentration", "concentration"],
          ["mass", "mass"],
        ],
      },
      {
        point: "Concentration = 5.0 ÷ 0.250.",
        keywords: [["concentration", "concentration"]],
      },
      {
        point: "Concentration = 20 g/dm3.",
        keywords: [
          ["concentration", "concentration"],
          ["g/dm3", "g/dm3"],
        ],
      },
    ],
    examinerKeywords: ["concentration", "g/dm3", "mass", "volume", "20"],
    modelAnswer: "250 cm3 = 0.250 dm3. Concentration = 5.0 ÷ 0.250 = 20 g/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Concentration in g/dm3.",
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Dividing volume by mass.",
    ],
    examinerTip: "Avoid this common mistake: Not converting cm3 to dm3.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calculate the concentration in mol/dm3 of a solution containing 0.20 mol of solute in 500 cm3 of solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert 500 cm3 to 0.500 dm3.",
        keywords: [["convert"]],
      },
      {
        point: "Concentration = moles ÷ volume.",
        keywords: [
          ["concentration", "concentration"],
          ["moles", "moles"],
        ],
      },
      {
        point: "Concentration = 0.20 ÷ 0.500.",
        keywords: [["concentration", "concentration"]],
      },
      {
        point: "Concentration = 0.40 mol/dm3.",
        keywords: [
          ["concentration", "concentration"],
          ["mol/dm3", "mol/dm3"],
        ],
      },
    ],
    examinerKeywords: ["concentration", "mol/dm3", "moles", "volume", "0.40"],
    modelAnswer: "500 cm3 = 0.500 dm3. Concentration = 0.20 ÷ 0.500 = 0.40 mol/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Concentration in mol/dm3.",
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Multiplying moles by volume.",
    ],
    examinerTip: "Avoid this common mistake: Not converting cm3 to dm3.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calculate the volume of 0.50 mol of gas at room temperature and pressure. Molar gas volume = 24 dm3/mol.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Volume = moles × molar gas volume.",
        keywords: [
          ["gas volume", "volume"],
          ["moles", "moles"],
        ],
      },
      {
        point: "Volume = 0.50 × 24 = 12 dm3.",
        keywords: [["gas volume", "volume"], ["24 dm3"]],
      },
    ],
    examinerKeywords: ["gas volume", "moles", "24 dm3", "12 dm3"],
    modelAnswer: "Volume = 0.50 × 24 = 12 dm3.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Think about Gas volumes.", "Avoid: Dividing 0.50 by 24.", "Avoid: Forgetting units."],
    examinerTip: "Avoid this common mistake: Dividing 0.50 by 24.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl2 + H2. Calculate the volume of hydrogen produced at room temperature and pressure from 2.4 g of magnesium. Ar: Mg = 24. Molar gas volume = 24 dm3/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of Mg = 2.4 ÷ 24 = 0.10 mol.",
        keywords: [["moles", "moles"], ["2.4 dm3"]],
      },
      {
        point: "Mole ratio Mg : H2 is 1 : 1.",
        keywords: [["mole", "ratio"]],
      },
      {
        point: "Moles of H2 = 0.10 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Volume = 0.10 × 24.",
        keywords: [["gas volume", "volume"]],
      },
      {
        point: "Volume = 2.4 dm3.",
        keywords: [["gas volume", "volume"], ["2.4 dm3"]],
      },
    ],
    examinerKeywords: ["magnesium", "hydrogen", "moles", "gas volume", "2.4 dm3"],
    modelAnswer:
      "Moles of Mg = 2.4 ÷ 24 = 0.10 mol. The ratio Mg:H2 is 1:1, so 0.10 mol of H2 forms. Volume = 0.10 × 24 = 2.4 dm3.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Gas volumes from equations.",
      "Avoid: Using the 2 in front of HCl as the hydrogen ratio.",
      "Avoid: Forgetting molar gas volume.",
    ],
    examinerTip: "Avoid this common mistake: Using the 2 in front of HCl as the hydrogen ratio.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "A reaction has a theoretical yield of 20.0 g but only 15.0 g is made. Calculate the percentage yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage yield = actual yield ÷ theoretical yield × 100.",
        keywords: [
          ["percentage yield", "percentage", "yield"],
          ["actual yield", "actual", "yield"],
        ],
      },
      {
        point: "Percentage yield = 15.0 ÷ 20.0 × 100.",
        keywords: [
          ["percentage yield", "percentage", "yield"],
          ["actual yield", "actual", "yield"],
        ],
      },
      {
        point: "Percentage yield = 75.0%.",
        keywords: [
          ["percentage yield", "percentage", "yield"],
          ["actual yield", "actual", "yield"],
        ],
      },
    ],
    examinerKeywords: ["percentage yield", "actual yield", "theoretical yield", "75%"],
    modelAnswer: "Percentage yield = 15.0 ÷ 20.0 × 100 = 75.0%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Percentage yield.",
      "Avoid: Dividing theoretical yield by actual yield.",
      "Avoid: Forgetting ×100.",
    ],
    examinerTip: "Avoid this common mistake: Dividing theoretical yield by actual yield.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by atom economy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Atom economy measures how much of the reactant mass becomes useful product.",
        keywords: [
          ["atom economy", "atom", "economy"],
          ["useful product", "useful", "product"],
        ],
      },
      {
        point: "High atom economy means less waste is produced.",
        keywords: [
          ["atom economy", "atom", "economy"],
          ["waste", "waste"],
        ],
      },
    ],
    examinerKeywords: ["atom economy", "useful product", "waste", "reactant mass"],
    modelAnswer:
      "Atom economy measures the percentage of reactant mass that becomes the desired product. A high atom economy means less waste is produced.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Atom economy.",
      "Avoid: Confusing atom economy with percentage yield.",
      "Avoid: Saying it measures reaction rate.",
    ],
    examinerTip: "Avoid this common mistake: Confusing atom economy with percentage yield.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calculate the atom economy for making CaO in the reaction CaCO3 → CaO + CO2. Mr: CaCO3 = 100, CaO = 56.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Atom economy = Mr of desired product ÷ total Mr of products × 100.",
        keywords: [["atom economy", "atom", "economy"]],
      },
      {
        point: "Atom economy = 56 ÷ 100 × 100.",
        keywords: [["atom economy", "atom", "economy"]],
      },
      {
        point: "Atom economy = 56%.",
        keywords: [["atom economy", "atom", "economy"], ["56%"]],
      },
    ],
    examinerKeywords: ["atom economy", "calcium oxide", "calcium carbonate", "56%"],
    modelAnswer: "Atom economy = 56 ÷ 100 × 100 = 56%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Atom economy calculation.",
      "Avoid: Using only the Mr of carbon dioxide.",
      "Avoid: Forgetting ×100.",
    ],
    examinerTip: "Avoid this common mistake: Using only the Mr of carbon dioxide.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [
          ["moles", "moles"],
          ["concentration", "concentration"],
        ],
      },
      {
        point: "Moles = 0.100 × 0.0250 = 0.00250 mol.",
        keywords: [
          ["moles", "moles"],
          ["0.00250 mol", "0.00250"],
        ],
      },
    ],
    examinerKeywords: ["titration", "moles", "concentration", "volume", "0.00250 mol"],
    modelAnswer: "25.0 cm3 = 0.0250 dm3. Moles of NaOH = 0.100 × 0.0250 = 0.00250 mol.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Titration calculation.",
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Dividing concentration by volume.",
    ],
    examinerTip: "Avoid this common mistake: Not converting cm3 to dm3.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calcium carbonate decomposes: CaCO3 → CaO + CO2. Calculate the mass of calcium oxide produced from 10.0 g of calcium carbonate. Mr: CaCO3 = 100, CaO = 56.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of CaCO3 = 10.0 ÷ 100 = 0.100 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mole ratio CaCO3 : CaO is 1 : 1.",
        keywords: [["mole", "ratio", "caco3"]],
      },
      {
        point: "Moles of CaO = 0.100 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mass of CaO = moles × Mr.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mass of CaO = 0.100 × 56 = 5.60 g.",
        keywords: [["5.60 g", "5.60"]],
      },
    ],
    examinerKeywords: ["calcium carbonate", "calcium oxide", "moles", "reacting masses", "5.60 g"],
    modelAnswer:
      "Moles of CaCO3 = 10.0 ÷ 100 = 0.100 mol. The ratio CaCO3:CaO is 1:1, so 0.100 mol of CaO forms. Mass of CaO = 0.100 × 56 = 5.60 g.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Multi-step calculation.",
      "Avoid: Using 10.0 × 100.",
      "Avoid: Forgetting the mole ratio.",
    ],
    examinerTip: "Avoid this common mistake: Using 10.0 × 100.",
  },
  {
    id: "oxfordaqa-chemistry-quantitative-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain the steps used to solve a reacting masses calculation.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Write or use a balanced symbol equation.",
        keywords: [["balanced equation", "balanced", "equation"]],
      },
      {
        point: "Calculate relative formula masses.",
        keywords: [
          ["reacting masses", "reacting", "masses"],
          ["mass", "mass"],
        ],
      },
      {
        point: "Convert the known mass into moles.",
        keywords: [
          ["moles", "moles"],
          ["mole ratio", "mole", "ratio"],
        ],
      },
      {
        point: "Use the mole ratio from the balanced equation.",
        keywords: [
          ["balanced equation", "balanced", "equation"],
          ["mole ratio", "mole", "ratio"],
        ],
      },
      {
        point: "Calculate moles of the required substance.",
        keywords: [
          ["moles", "moles"],
          ["mole ratio", "mole", "ratio"],
        ],
      },
      {
        point: "Convert moles into mass using mass = moles × Mr.",
        keywords: [
          ["moles", "moles"],
          ["mole ratio", "mole", "ratio"],
        ],
      },
    ],
    examinerKeywords: ["reacting masses", "balanced equation", "moles", "mole ratio", "mass"],
    modelAnswer:
      "First use the balanced symbol equation and calculate the relevant formula masses. Convert the known mass into moles using moles = mass ÷ Mr. Use the mole ratio from the balanced equation to find the moles of the required substance, then convert moles into mass using mass = moles × Mr.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Skipping the balanced equation.",
      "Avoid: Using mass ratios without checking mole ratios.",
    ],
    examinerTip: "Avoid this common mistake: Skipping the balanced equation.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State how elements are arranged in the modern periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Elements are arranged in order of increasing atomic number.",
        keywords: [["atomic number", "atomic", "number"]],
      },
      {
        point: "Elements with similar chemical properties are placed in the same group.",
        keywords: [["similar properties", "similar", "properties"]],
      },
    ],
    examinerKeywords: ["periodic table", "atomic number", "groups", "similar properties"],
    modelAnswer:
      "Elements are arranged in order of increasing atomic number, with elements that have similar chemical properties placed in the same group.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Periodic table arrangement.",
      "Avoid: Saying elements are arranged only by mass.",
      "Avoid: Saying groups are horizontal rows.",
    ],
    examinerTip: "Avoid this common mistake: Saying elements are arranged only by mass.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by a group and a period in the periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A group is a vertical column.",
        keywords: [
          ["group", "group"],
          ["vertical", "vertical"],
        ],
      },
      {
        point: "A period is a horizontal row.",
        keywords: [
          ["period", "period"],
          ["horizontal", "horizontal"],
        ],
      },
    ],
    examinerKeywords: ["group", "period", "vertical", "horizontal"],
    modelAnswer:
      "A group is a vertical column and a period is a horizontal row in the periodic table.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Groups and periods.",
      "Avoid: Reversing group and period.",
      "Avoid: Saying groups are horizontal.",
    ],
    examinerTip: "Avoid this common mistake: Reversing group and period.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why elements in the same group have similar chemical properties.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Elements in the same group have the same number of outer-shell electrons.",
        keywords: [
          ["same group", "same", "group"],
          ["outer-shell electrons", "outer-shell", "electrons"],
        ],
      },
      {
        point: "Chemical properties depend on outer-shell electrons.",
        keywords: [
          ["outer-shell electrons", "outer-shell", "electrons"],
          ["chemical properties", "chemical", "properties"],
        ],
      },
      {
        point: "They react in similar ways.",
        keywords: [["they", "react", "similar"]],
      },
    ],
    examinerKeywords: ["same group", "outer-shell electrons", "chemical properties"],
    modelAnswer:
      "Elements in the same group have the same number of outer-shell electrons. Since chemical properties depend on outer-shell electrons, they react in similar ways.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Electronic structure.",
      "Avoid: Saying they have the same number of shells.",
      "Avoid: Saying chemical properties depend mainly on neutrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying they have the same number of shells.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State two physical properties of Group 1 metals.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They are soft.",
        keywords: [["soft", "soft"]],
      },
      {
        point: "They have low density.",
        keywords: [["low density", "density"]],
      },
      {
        point: "They have relatively low melting points.",
        keywords: [["low density", "density"]],
      },
      {
        point: "They are shiny when freshly cut.",
        keywords: [["they", "shiny", "when"]],
      },
    ],
    examinerKeywords: ["Group 1", "alkali metals", "soft", "low density"],
    modelAnswer: "Group 1 metals are soft and have low densities.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Group 1.",
      "Avoid: Saying they are very hard.",
      "Avoid: Saying they are gases.",
    ],
    examinerTip: "Avoid this common mistake: Saying they are very hard.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the reaction of sodium with water.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium floats on water.",
        keywords: [
          ["sodium", "sodium"],
          ["water", "water"],
        ],
      },
      {
        point: "It moves on the surface.",
        keywords: [["moves", "surface"]],
      },
      {
        point: "Fizzing occurs.",
        keywords: [["fizzing", "fizzing"]],
      },
      {
        point: "Hydrogen gas and sodium hydroxide solution are produced.",
        keywords: [
          ["sodium", "sodium"],
          ["hydrogen", "hydrogen"],
        ],
      },
    ],
    examinerKeywords: ["sodium", "water", "hydrogen", "sodium hydroxide", "fizzing"],
    modelAnswer:
      "Sodium floats and moves on the surface of water. It fizzes as hydrogen gas is produced, and sodium hydroxide solution forms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Group 1 reactions.",
      "Avoid: Saying oxygen is produced.",
      "Avoid: Forgetting sodium hydroxide.",
    ],
    examinerTip: "Avoid this common mistake: Saying oxygen is produced.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe and explain the trend in reactivity down Group 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Reactivity increases down Group 1.",
        keywords: [
          ["Group 1", "group"],
          ["reactivity increases", "reactivity", "increases"],
        ],
      },
      {
        point: "Atoms get larger down the group.",
        keywords: [["Group 1", "group"]],
      },
      {
        point: "The outer electron is further from the nucleus.",
        keywords: [["outer electron", "outer", "electron"]],
      },
      {
        point: "The outer electron is lost more easily.",
        keywords: [
          ["outer electron", "outer", "electron"],
          ["lost easily", "lost", "easily"],
        ],
      },
    ],
    examinerKeywords: ["Group 1", "reactivity increases", "outer electron", "lost easily"],
    modelAnswer:
      "Reactivity increases down Group 1 because atoms get larger and the outer electron is further from the nucleus, so it is lost more easily.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Group 1 trend.",
      "Avoid: Saying reactivity decreases down Group 1.",
      "Avoid: Explaining using gaining electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying reactivity decreases down Group 1.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText: "Write a balanced equation for the reaction of sodium with water.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Correct reactants: sodium and water.",
        keywords: [
          ["sodium", "sodium"],
          ["water", "water"],
        ],
      },
      {
        point: "Correct products: sodium hydroxide and hydrogen.",
        keywords: [
          ["sodium", "sodium"],
          ["sodium hydroxide", "sodium", "hydroxide"],
        ],
      },
      {
        point: "Balanced equation: 2Na + 2H2O → 2NaOH + H2.",
        keywords: [["balanced equation", "balanced", "equation"]],
      },
    ],
    examinerKeywords: ["sodium", "water", "sodium hydroxide", "hydrogen", "balanced equation"],
    modelAnswer: "2Na + 2H2O → 2NaOH + H2",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Group 1 equations.",
      "Avoid: Forgetting hydrogen.",
      "Avoid: Writing NaO instead of NaOH.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting hydrogen.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the physical states of chlorine, bromine and iodine at room temperature.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Chlorine is a gas.",
        keywords: [["chlorine", "chlorine"]],
      },
      {
        point: "Bromine is a liquid.",
        keywords: [["bromine", "bromine"]],
      },
      {
        point: "Iodine is a solid.",
        keywords: [["iodine", "iodine"]],
      },
    ],
    examinerKeywords: ["chlorine", "bromine", "iodine", "states"],
    modelAnswer:
      "Chlorine is a gas, bromine is a liquid and iodine is a solid at room temperature.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Group 7.",
      "Avoid: Saying bromine is a gas.",
      "Avoid: Saying iodine is a liquid.",
    ],
    examinerTip: "Avoid this common mistake: Saying bromine is a gas.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe and explain the trend in reactivity down Group 7.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Reactivity decreases down Group 7.",
        keywords: [
          ["Group 7", "group"],
          ["reactivity decreases", "reactivity", "decreases"],
        ],
      },
      {
        point: "Atoms get larger down the group.",
        keywords: [["Group 7", "group"]],
      },
      {
        point: "The outer shell is further from the nucleus.",
        keywords: [["outer", "shell", "further"]],
      },
      {
        point: "It becomes harder to gain an electron.",
        keywords: [["gain electron", "gain", "electron"]],
      },
    ],
    examinerKeywords: ["Group 7", "halogens", "reactivity decreases", "gain electron"],
    modelAnswer:
      "Reactivity decreases down Group 7 because atoms get larger, so the outer shell is further from the nucleus and it becomes harder to gain an electron.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Group 7 trend.",
      "Avoid: Saying reactivity increases down Group 7.",
      "Avoid: Explaining using loss of electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying reactivity increases down Group 7.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Predict",
    questionText:
      "Chlorine is added to potassium bromide solution. Predict the reaction and explain your answer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Chlorine displaces bromine.",
        keywords: [
          ["chlorine", "chlorine"],
          ["bromine", "bromine"],
        ],
      },
      {
        point: "Chlorine is more reactive than bromine.",
        keywords: [
          ["chlorine", "chlorine"],
          ["bromine", "bromine"],
        ],
      },
      {
        point: "Potassium chloride forms.",
        keywords: [["potassium bromide", "potassium", "bromide"]],
      },
      {
        point: "The solution becomes orange or brown due to bromine.",
        keywords: [["bromine", "bromine"]],
      },
    ],
    examinerKeywords: ["chlorine", "potassium bromide", "displacement", "bromine"],
    modelAnswer:
      "Chlorine displaces bromine from potassium bromide because chlorine is more reactive than bromine. Potassium chloride and bromine form, so the solution becomes orange-brown.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Halogen displacement.",
      "Avoid: Saying bromine displaces chlorine.",
      "Avoid: Saying no reaction occurs.",
    ],
    examinerTip: "Avoid this common mistake: Saying bromine displaces chlorine.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText:
      "Write a balanced equation for the reaction between chlorine and potassium bromide solution.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Chlorine reacts with potassium bromide.",
        keywords: [
          ["chlorine", "chlorine"],
          ["potassium bromide", "potassium", "bromide"],
        ],
      },
      {
        point: "Balanced equation: Cl2 + 2KBr → 2KCl + Br2.",
        keywords: [["balanced", "equation", "2kbr"]],
      },
    ],
    examinerKeywords: ["chlorine", "potassium bromide", "potassium chloride", "bromine"],
    modelAnswer: "Cl2 + 2KBr → 2KCl + Br2",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Halogen displacement equation.",
      "Avoid: Forgetting halogens are diatomic.",
      "Avoid: Writing Br instead of Br2.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting halogens are diatomic.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why noble gases are unreactive.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Noble gases have full outer electron shells.",
        keywords: [
          ["noble gases", "noble", "gases"],
          ["full outer shell", "full", "outer", "shell"],
        ],
      },
      {
        point: "They are stable.",
        keywords: [["stable", "stable"]],
      },
      {
        point: "They do not need to gain, lose or share electrons.",
        keywords: [["they", "need", "gain"]],
      },
    ],
    examinerKeywords: ["noble gases", "full outer shell", "stable", "unreactive"],
    modelAnswer:
      "Noble gases are unreactive because they have full outer electron shells, making them stable, so they do not need to gain, lose or share electrons.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Group 0.",
      "Avoid: Saying noble gases have one outer electron.",
      "Avoid: Saying they are very reactive.",
    ],
    examinerTip: "Avoid this common mistake: Saying noble gases have one outer electron.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the trend in boiling point down Group 0.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Boiling point increases down the group.",
        keywords: [
          ["Group 0", "group"],
          ["boiling point", "boiling", "point"],
        ],
      },
      {
        point: "The atoms become larger down the group.",
        keywords: [["Group 0", "group"]],
      },
    ],
    examinerKeywords: ["Group 0", "noble gases", "boiling point", "increases"],
    modelAnswer:
      "The boiling points of the noble gases increase down Group 0 as the atoms become larger.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Group 0 trends.",
      "Avoid: Saying boiling point decreases down Group 0.",
      "Avoid: Discussing reactivity instead of boiling point.",
    ],
    examinerTip: "Avoid this common mistake: Saying boiling point decreases down Group 0.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State three typical properties of transition metals.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They have high melting points.",
        keywords: [["high density", "high", "density"]],
      },
      {
        point: "They have high densities.",
        keywords: [["high density", "high", "density"]],
      },
      {
        point: "They form coloured compounds.",
        keywords: [["coloured compounds", "coloured", "compounds"]],
      },
      {
        point: "They can act as catalysts.",
        keywords: [["catalysts", "catalysts"]],
      },
      {
        point: "They can have variable oxidation states.",
        keywords: [["they", "have", "variable"]],
      },
    ],
    examinerKeywords: ["transition metals", "high density", "coloured compounds", "catalysts"],
    modelAnswer:
      "Transition metals usually have high melting points, high densities and form coloured compounds.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Transition metals.",
      "Avoid: Saying they are all gases.",
      "Avoid: Saying they are very soft like Group 1 metals.",
    ],
    examinerTip: "Avoid this common mistake: Saying they are all gases.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Give",
    questionText:
      "Give one example of a transition metal or transition metal compound used as a catalyst.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Iron is used in the Haber process.",
        keywords: [["iron", "iron"]],
      },
      {
        point: "Nickel is used in hydrogenation.",
        keywords: [["nickel", "nickel"]],
      },
      {
        point: "Vanadium(V) oxide is used in the Contact process.",
        keywords: [["vanadium oxide", "vanadium", "oxide"]],
      },
    ],
    examinerKeywords: ["transition metal", "catalyst", "iron", "nickel", "vanadium oxide"],
    modelAnswer: "Iron is used as a catalyst in the Haber process.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Transition metals as catalysts.",
      "Avoid: Giving sodium as a transition metal.",
      "Avoid: Giving a catalyst with no process.",
    ],
    examinerTip: "Avoid this common mistake: Giving sodium as a transition metal.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare Group 1 metals with transition metals.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Group 1 metals are more reactive than many transition metals.",
        keywords: [
          ["Group 1", "group"],
          ["transition metals", "transition", "metals"],
        ],
      },
      {
        point: "Group 1 metals are soft and have low densities.",
        keywords: [
          ["Group 1", "group"],
          ["transition metals", "transition", "metals"],
        ],
      },
      {
        point: "Transition metals are harder and denser.",
        keywords: [["transition metals", "transition", "metals"]],
      },
      {
        point: "Transition metals often have higher melting points.",
        keywords: [["transition metals", "transition", "metals"]],
      },
      {
        point: "Group 1 compounds are usually white or colourless.",
        keywords: [
          ["Group 1", "group"],
          ["coloured compounds", "coloured", "compounds"],
        ],
      },
      {
        point: "Transition metals often form coloured compounds and can act as catalysts.",
        keywords: [
          ["transition metals", "transition", "metals"],
          ["coloured compounds", "coloured", "compounds"],
        ],
      },
    ],
    examinerKeywords: [
      "Group 1",
      "transition metals",
      "reactivity",
      "density",
      "coloured compounds",
    ],
    modelAnswer:
      "Group 1 metals are soft, low-density and very reactive. Transition metals are usually harder, denser and have higher melting points. Group 1 compounds are often white or colourless, while transition metals often form coloured compounds and can act as catalysts.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Transition metals vs Group 1.",
      "Avoid: Saying transition metals are softer than Group 1 metals.",
      "Avoid: Saying Group 1 compounds are usually brightly coloured.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying transition metals are softer than Group 1 metals.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the general positions of metals and non-metals in the periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Metals are mainly on the left and centre.",
        keywords: [
          ["metals", "metals"],
          ["left", "left"],
        ],
      },
      {
        point: "Non-metals are mainly on the right.",
        keywords: [
          ["metals", "metals"],
          ["non-metals", "non-metals"],
        ],
      },
    ],
    examinerKeywords: ["metals", "non-metals", "left", "right", "periodic table"],
    modelAnswer:
      "Metals are mainly on the left and centre of the periodic table, while non-metals are mainly on the right.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Metals and non-metals.",
      "Avoid: Saying metals are mainly on the right.",
      "Avoid: Saying non-metals are mainly on the left.",
    ],
    examinerTip: "Avoid this common mistake: Saying metals are mainly on the right.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why potassium is more reactive than sodium.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Potassium is below sodium in Group 1.",
        keywords: [
          ["potassium", "potassium"],
          ["sodium", "sodium"],
        ],
      },
      {
        point: "The outer electron in potassium is further from the nucleus.",
        keywords: [
          ["potassium", "potassium"],
          ["outer electron", "outer", "electron"],
        ],
      },
      {
        point: "The outer electron is lost more easily.",
        keywords: [["outer electron", "outer", "electron"]],
      },
    ],
    examinerKeywords: ["potassium", "sodium", "Group 1", "outer electron", "reactivity"],
    modelAnswer:
      "Potassium is more reactive than sodium because its outer electron is further from the nucleus and is lost more easily.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Predicting properties.",
      "Avoid: Saying potassium gains electrons more easily.",
      "Avoid: Saying sodium is more reactive because it is smaller.",
    ],
    examinerTip: "Avoid this common mistake: Saying potassium gains electrons more easily.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Predict",
    questionText:
      "Bromine is added to potassium iodide solution. Predict the products and explain why the reaction occurs.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Bromine displaces iodine.",
        keywords: [
          ["bromine", "bromine"],
          ["iodine", "iodine"],
        ],
      },
      {
        point: "Bromine is more reactive than iodine.",
        keywords: [
          ["bromine", "bromine"],
          ["iodine", "iodine"],
        ],
      },
      {
        point: "Potassium bromide forms.",
        keywords: [["potassium iodide", "potassium", "iodide"]],
      },
      {
        point: "Iodine forms.",
        keywords: [["iodine", "iodine"]],
      },
    ],
    examinerKeywords: ["bromine", "potassium iodide", "iodine", "displacement", "reactivity"],
    modelAnswer:
      "Bromine displaces iodine from potassium iodide because bromine is more reactive than iodine. Potassium bromide and iodine are formed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Predicting displacement.",
      "Avoid: Saying iodine displaces bromine.",
      "Avoid: Saying no reaction occurs.",
    ],
    examinerTip: "Avoid this common mistake: Saying iodine displaces bromine.",
  },
  {
    id: "oxfordaqa-chemistry-periodicity-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how electronic structure causes periodic trends in Group 1, Group 7 and Group 0.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Group 1 atoms have one outer-shell electron.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point:
          "Group 1 reactivity increases down the group because the outer electron is lost more easily.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "Group 7 atoms have seven outer-shell electrons.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point:
          "Group 7 reactivity decreases down the group because it becomes harder to gain an electron.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "Group 0 atoms have full outer shells.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "Full outer shells make Group 0 elements stable and unreactive.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
    ],
    examinerKeywords: ["electronic structure", "Group 1", "Group 7", "Group 0", "outer electrons"],
    modelAnswer:
      "Group 1 atoms have one outer electron and become more reactive down the group because this electron is lost more easily. Group 7 atoms have seven outer electrons and become less reactive down the group because it becomes harder to gain an electron. Group 0 atoms have full outer shells, making them stable and unreactive.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Using the same trend for all groups.",
      "Avoid: Saying Group 7 loses electrons.",
    ],
    examinerTip: "Avoid this common mistake: Using the same trend for all groups.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by rate of reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Rate of reaction is the change in amount of reactant or product.",
        keywords: [
          ["rate of reaction", "rate", "reaction"],
          ["change", "change"],
        ],
      },
      {
        point: "The change is measured per unit time.",
        keywords: [
          ["change", "change"],
          ["per unit time", "unit", "time"],
        ],
      },
    ],
    examinerKeywords: ["rate of reaction", "change", "per unit time"],
    modelAnswer:
      "Rate of reaction is the change in amount of reactant used or product formed per unit time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Rate of reaction.",
      "Avoid: Saying rate is only the final amount of product.",
      "Avoid: Forgetting time.",
    ],
    examinerTip: "Avoid this common mistake: Saying rate is only the final amount of product.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain collision theory.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Reacting particles must collide.",
        keywords: [["particles", "particles"]],
      },
      {
        point: "Collisions must have enough energy.",
        keywords: [
          ["collision theory", "collision", "theory"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point: "Successful collisions lead to reaction.",
        keywords: [
          ["collision theory", "collision", "theory"],
          ["successful collisions", "successful", "collisions"],
        ],
      },
    ],
    examinerKeywords: [
      "collision theory",
      "particles",
      "activation energy",
      "successful collisions",
    ],
    modelAnswer:
      "For a reaction to occur, particles must collide with enough energy. These successful collisions lead to reaction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Collision theory.",
      "Avoid: Saying every collision causes reaction.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Saying every collision causes reaction.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why increasing temperature increases the rate of reaction.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles gain kinetic energy.",
        keywords: [
          ["kinetic energy", "kinetic", "energy"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point: "Particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
      {
        point:
          "A greater proportion of particles have energy greater than or equal to activation energy.",
        keywords: [
          ["kinetic energy", "kinetic", "energy"],
          ["activation energy", "activation", "energy"],
        ],
      },
    ],
    examinerKeywords: ["temperature", "kinetic energy", "collisions", "activation energy"],
    modelAnswer:
      "Increasing temperature gives particles more kinetic energy, so they move faster and collide more often. A greater proportion of particles also have enough energy to overcome the activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Temperature.",
      "Avoid: Only saying particles move faster.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Only saying particles move faster.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why increasing concentration increases the rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "There are more particles per unit volume.",
        keywords: [["particles", "particles"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "particles"]],
      },
      {
        point: "There are more successful collisions per second.",
        keywords: [
          ["collision frequency", "collision", "frequency"],
          ["successful collisions", "successful", "collisions"],
        ],
      },
    ],
    examinerKeywords: [
      "concentration",
      "particles",
      "collision frequency",
      "successful collisions",
    ],
    modelAnswer:
      "Increasing concentration means there are more particles per unit volume, so particles collide more frequently and there are more successful collisions per second.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Concentration.",
      "Avoid: Saying particles have more energy.",
      "Avoid: Forgetting per unit volume.",
    ],
    examinerTip: "Avoid this common mistake: Saying particles have more energy.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why increasing pressure increases the rate of a reaction between gases.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Gas particles are closer together.",
        keywords: [
          ["gas particles", "particles"],
          ["closer together", "closer", "together"],
        ],
      },
      {
        point: "There are more particles per unit volume.",
        keywords: [["gas particles", "particles"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["gas particles", "particles"]],
      },
    ],
    examinerKeywords: ["pressure", "gas particles", "closer together", "collisions"],
    modelAnswer:
      "Increasing pressure makes gas particles closer together, so there are more particles per unit volume and collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Pressure.",
      "Avoid: Explaining pressure for solids.",
      "Avoid: Saying particles have less chance of colliding.",
    ],
    examinerTip: "Avoid this common mistake: Explaining pressure for solids.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why powdered calcium carbonate reacts faster with acid than large chips of calcium carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Powder has a larger surface area.",
        keywords: [
          ["surface area", "surface", "area"],
          ["powder", "powder"],
        ],
      },
      {
        point: "More particles are exposed to acid.",
        keywords: [["more", "particles", "exposed"]],
      },
      {
        point: "Collisions happen more frequently.",
        keywords: [["collisions", "collisions"]],
      },
    ],
    examinerKeywords: ["surface area", "powder", "calcium carbonate", "collisions"],
    modelAnswer:
      "Powdered calcium carbonate has a larger surface area than large chips, so more particles are exposed to acid and collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Surface area.",
      "Avoid: Saying powder has less surface area.",
      "Avoid: Saying particles move faster because they are smaller.",
    ],
    examinerTip: "Avoid this common mistake: Saying powder has less surface area.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how a catalyst increases the rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst provides an alternative reaction pathway.",
        keywords: [
          ["catalyst", "catalyst"],
          ["alternative pathway", "alternative", "pathway"],
        ],
      },
      {
        point: "The alternative pathway has lower activation energy.",
        keywords: [
          ["alternative pathway", "alternative", "pathway"],
          ["lower activation energy", "lower", "activation", "energy"],
        ],
      },
      {
        point: "More particles have enough energy to react.",
        keywords: [["lower activation energy", "lower", "activation", "energy"]],
      },
    ],
    examinerKeywords: ["catalyst", "alternative pathway", "lower activation energy"],
    modelAnswer:
      "A catalyst provides an alternative reaction pathway with lower activation energy, so more particles have enough energy to react.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Catalysts.",
      "Avoid: Saying catalysts are used up.",
      "Avoid: Saying catalysts increase activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Saying catalysts are used up.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the rate of reaction between magnesium and dilute hydrochloric acid.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Add magnesium to dilute hydrochloric acid.",
        keywords: [
          ["magnesium", "magnesium"],
          ["hydrochloric acid", "hydrochloric", "acid"],
        ],
      },
      {
        point: "Collect hydrogen gas using a gas syringe.",
        keywords: [
          ["gas syringe", "syringe"],
          ["hydrogen", "hydrogen"],
        ],
      },
      {
        point: "Measure gas volume at regular time intervals.",
        keywords: [["gas syringe", "syringe"]],
      },
      {
        point: "Keep variables such as temperature, acid volume and magnesium mass constant.",
        keywords: [
          ["magnesium", "magnesium"],
          ["hydrochloric acid", "hydrochloric", "acid"],
        ],
      },
      {
        point: "Repeat and calculate a mean.",
        keywords: [["repeat", "calculate", "mean"]],
      },
    ],
    examinerKeywords: ["magnesium", "hydrochloric acid", "gas syringe", "rate", "hydrogen"],
    modelAnswer:
      "Add magnesium to dilute hydrochloric acid and collect hydrogen in a gas syringe. Record the gas volume at regular time intervals while keeping temperature, acid volume and magnesium mass constant. Repeat and calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Rate experiments.",
      "Avoid: Not measuring time.",
      "Avoid: Changing multiple variables.",
    ],
    examinerTip: "Avoid this common mistake: Not measuring time.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how rate of reaction is found from a graph of gas volume against time.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rate is the gradient of the graph.",
        keywords: [
          ["rate", "rate"],
          ["gradient", "gradient"],
        ],
      },
      {
        point: "Gradient = change in gas volume ÷ change in time.",
        keywords: [
          ["gradient", "gradient"],
          ["gas volume", "volume"],
        ],
      },
      {
        point: "A steeper gradient means a faster rate.",
        keywords: [
          ["rate", "rate"],
          ["gradient", "gradient"],
        ],
      },
    ],
    examinerKeywords: ["rate", "gradient", "gas volume", "time"],
    modelAnswer:
      "The rate is found from the gradient of the graph. Gradient equals change in gas volume divided by change in time. A steeper gradient means a faster rate.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Graphs.",
      "Avoid: Using final volume as the rate.",
      "Avoid: Forgetting time.",
    ],
    examinerTip: "Avoid this common mistake: Using final volume as the rate.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why a gas volume-time graph becomes horizontal at the end of a reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The reaction has finished.",
        keywords: [["reaction finished", "reaction", "finished"]],
      },
      {
        point: "One reactant has been used up.",
        keywords: [["reactant", "been", "used"]],
      },
      {
        point: "No more gas is being produced.",
        keywords: [
          ["gas volume-time graph", "volume-time", "graph"],
          ["no more gas", "more"],
        ],
      },
    ],
    examinerKeywords: ["gas volume-time graph", "horizontal", "reaction finished", "no more gas"],
    modelAnswer:
      "The graph becomes horizontal because the reaction has finished. One reactant has been used up, so no more gas is produced.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about End of reaction.",
      "Avoid: Saying the rate is fastest when the graph is horizontal.",
      "Avoid: Saying gas is still being produced at the same rate.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying the rate is fastest when the graph is horizontal.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by a reversible reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A reversible reaction can go forwards and backwards.",
        keywords: [
          ["reversible reaction", "reversible", "reaction"],
          ["forward reaction", "forward", "reaction"],
        ],
      },
      {
        point: "Products can react to reform reactants.",
        keywords: [["products", "react", "reform"]],
      },
    ],
    examinerKeywords: ["reversible reaction", "forward reaction", "backward reaction"],
    modelAnswer:
      "A reversible reaction can go forwards and backwards, so the products can react to reform the reactants.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Reversible reactions.",
      "Avoid: Saying reversible reactions only go one way.",
      "Avoid: Saying products cannot react.",
    ],
    examinerTip: "Avoid this common mistake: Saying reversible reactions only go one way.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe dynamic equilibrium.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Dynamic equilibrium occurs in a closed system.",
        keywords: [
          ["dynamic equilibrium", "dynamic", "equilibrium"],
          ["closed system", "closed", "system"],
        ],
      },
      {
        point: "The forward and reverse reactions continue.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "The forward and reverse reactions occur at the same rate.",
        keywords: [["same rate", "same", "rate"]],
      },
      {
        point: "The concentrations of reactants and products remain constant.",
        keywords: [["constant concentrations", "constant", "concentrations"]],
      },
    ],
    examinerKeywords: [
      "dynamic equilibrium",
      "closed system",
      "same rate",
      "constant concentrations",
    ],
    modelAnswer:
      "Dynamic equilibrium occurs in a closed system when the forward and reverse reactions continue at the same rate, so the concentrations of reactants and products remain constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Dynamic equilibrium.",
      "Avoid: Saying reactions stop at equilibrium.",
      "Avoid: Forgetting closed system.",
    ],
    examinerTip: "Avoid this common mistake: Saying reactions stop at equilibrium.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State Le Chatelier's principle.",
    marks: 3,
    markSchemePoints: [
      {
        point: "If a system at equilibrium is changed.",
        keywords: [
          ["equilibrium", "equilibrium"],
          ["oppose change", "oppose", "change"],
        ],
      },
      {
        point: "The equilibrium shifts.",
        keywords: [["equilibrium", "equilibrium"]],
      },
      {
        point: "It shifts to oppose the change.",
        keywords: [["oppose change", "oppose", "change"]],
      },
    ],
    examinerKeywords: ["Le Chatelier", "equilibrium", "oppose change"],
    modelAnswer:
      "If a system at equilibrium is changed, the equilibrium shifts to oppose the change.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Le Chatelier.",
      "Avoid: Saying equilibrium shifts to increase the change.",
      "Avoid: Forgetting equilibrium.",
    ],
    examinerTip: "Avoid this common mistake: Saying equilibrium shifts to increase the change.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "For an exothermic forward reaction, explain the effect of increasing temperature on equilibrium yield.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Increasing temperature favours the endothermic direction.",
        keywords: [
          ["temperature", "temperature"],
          ["endothermic", "endothermic"],
        ],
      },
      {
        point: "The reverse reaction is endothermic.",
        keywords: [["endothermic", "endothermic"]],
      },
      {
        point: "Equilibrium shifts to the left.",
        keywords: [["equilibrium", "equilibrium"]],
      },
      {
        point: "Yield of products from the forward reaction decreases.",
        keywords: [["yield", "yield"]],
      },
    ],
    examinerKeywords: ["exothermic", "temperature", "equilibrium", "yield", "endothermic"],
    modelAnswer:
      "For an exothermic forward reaction, increasing temperature favours the endothermic reverse reaction. The equilibrium shifts left, so the yield of products decreases.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Think about Temperature and equilibrium.",
      "Avoid: Saying higher temperature always increases yield.",
      "Avoid: Forgetting the reverse reaction is endothermic.",
    ],
    examinerTip: "Avoid this common mistake: Saying higher temperature always increases yield.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how increasing pressure affects equilibrium in a gas reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Increasing pressure favours the side with fewer gas molecules.",
        keywords: [
          ["pressure", "pressure"],
          ["gas molecules", "molecules"],
        ],
      },
      {
        point: "Equilibrium shifts to reduce pressure.",
        keywords: [
          ["pressure", "pressure"],
          ["equilibrium", "equilibrium"],
        ],
      },
      {
        point:
          "If both sides have the same number of gas molecules, pressure has no effect on position.",
        keywords: [
          ["pressure", "pressure"],
          ["gas molecules", "molecules"],
        ],
      },
    ],
    examinerKeywords: ["pressure", "equilibrium", "gas molecules", "fewer molecules"],
    modelAnswer:
      "Increasing pressure shifts equilibrium to the side with fewer gas molecules, reducing pressure. If both sides have the same number of gas molecules, pressure has no effect on equilibrium position.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Pressure and equilibrium.",
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying pressure always shifts right.",
    ],
    examinerTip: "Avoid this common mistake: Counting atoms instead of gas molecules.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why a catalyst does not change the equilibrium yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst increases the rate of both forward and reverse reactions equally.",
        keywords: [
          ["catalyst", "catalyst"],
          ["forward", "forward"],
        ],
      },
      {
        point: "Equilibrium is reached faster.",
        keywords: [["equilibrium", "equilibrium"]],
      },
      {
        point: "The position of equilibrium is unchanged.",
        keywords: [["equilibrium", "equilibrium"]],
      },
    ],
    examinerKeywords: ["catalyst", "equilibrium", "yield", "forward", "reverse"],
    modelAnswer:
      "A catalyst increases the rates of the forward and reverse reactions equally, so equilibrium is reached faster but the equilibrium position and yield are unchanged.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Catalysts and equilibrium.",
      "Avoid: Saying a catalyst increases equilibrium yield.",
      "Avoid: Saying a catalyst is used up.",
    ],
    examinerTip: "Avoid this common mistake: Saying a catalyst increases equilibrium yield.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why a compromise temperature is used in the Haber process.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The forward reaction is exothermic.",
        keywords: [["exothermic", "exothermic"]],
      },
      {
        point: "Lower temperature gives a higher ammonia yield.",
        keywords: [
          ["compromise temperature", "compromise", "temperature"],
          ["yield", "yield"],
        ],
      },
      {
        point: "Lower temperature gives a slower rate.",
        keywords: [
          ["compromise temperature", "compromise", "temperature"],
          ["rate", "rate"],
        ],
      },
      {
        point: "A compromise temperature gives reasonable rate and reasonable yield.",
        keywords: [
          ["compromise temperature", "compromise", "temperature"],
          ["yield", "yield"],
        ],
      },
    ],
    examinerKeywords: ["Haber process", "compromise temperature", "yield", "rate", "exothermic"],
    modelAnswer:
      "The forward reaction is exothermic, so a lower temperature gives a higher ammonia yield. However, the rate would be too slow. A compromise temperature gives a reasonable rate and reasonable yield.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Think about Haber process.",
      "Avoid: Saying high temperature gives highest yield for exothermic reaction.",
      "Avoid: Only discussing rate.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying high temperature gives highest yield for exothermic reaction.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why high pressure increases ammonia yield in the Haber process.",
    marks: 4,
    markSchemePoints: [
      {
        point: "There are four moles of gas on the reactant side.",
        keywords: [["fewer gas molecules", "fewer", "molecules"]],
      },
      {
        point: "There are two moles of gas on the product side.",
        keywords: [["fewer gas molecules", "fewer", "molecules"]],
      },
      {
        point: "High pressure favours the side with fewer gas molecules.",
        keywords: [
          ["pressure", "pressure"],
          ["fewer gas molecules", "fewer", "molecules"],
        ],
      },
      {
        point: "Equilibrium shifts towards ammonia.",
        keywords: [["ammonia", "ammonia"]],
      },
    ],
    examinerKeywords: ["Haber process", "pressure", "ammonia", "fewer gas molecules"],
    modelAnswer:
      "In the Haber process, there are four moles of gas on the reactant side and two on the product side. High pressure favours the side with fewer gas molecules, so equilibrium shifts towards ammonia.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Think about Haber pressure.",
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying pressure has no effect.",
    ],
    examinerTip: "Avoid this common mistake: Counting atoms instead of gas molecules.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define oxidation and reduction in terms of electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Oxidation is loss of electrons.",
        keywords: [
          ["oxidation", "oxidation"],
          ["electrons", "electrons"],
        ],
      },
      {
        point: "Reduction is gain of electrons.",
        keywords: [
          ["reduction", "reduction"],
          ["electrons", "electrons"],
        ],
      },
    ],
    examinerKeywords: ["oxidation", "reduction", "electrons", "OIL RIG"],
    modelAnswer: "Oxidation is loss of electrons and reduction is gain of electrons.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Redox.",
      "Avoid: Reversing oxidation and reduction.",
      "Avoid: Forgetting electrons.",
    ],
    examinerTip: "Avoid this common mistake: Reversing oxidation and reduction.",
  },
  {
    id: "oxfordaqa-chemistry-rate-extent-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how rate of reaction and equilibrium are affected by temperature, pressure and catalysts.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Higher temperature increases rate because particles have more kinetic energy.",
        keywords: [
          ["rate", "rate"],
          ["temperature", "temperature"],
        ],
      },
      {
        point: "Higher temperature shifts equilibrium towards the endothermic direction.",
        keywords: [
          ["equilibrium", "equilibrium"],
          ["temperature", "temperature"],
        ],
      },
      {
        point: "Higher pressure increases rate for gases because particles collide more often.",
        keywords: [
          ["rate", "rate"],
          ["pressure", "pressure"],
        ],
      },
      {
        point: "Higher pressure shifts equilibrium to the side with fewer gas molecules.",
        keywords: [
          ["equilibrium", "equilibrium"],
          ["pressure", "pressure"],
        ],
      },
      {
        point: "Catalysts increase rate by lowering activation energy.",
        keywords: [
          ["rate", "rate"],
          ["catalyst", "catalyst"],
        ],
      },
      {
        point: "Catalysts do not change equilibrium yield.",
        keywords: [
          ["equilibrium", "equilibrium"],
          ["catalyst", "catalyst"],
        ],
      },
    ],
    examinerKeywords: ["rate", "equilibrium", "temperature", "pressure", "catalyst"],
    modelAnswer:
      "Higher temperature increases rate because particles have more kinetic energy and more successful collisions, but it shifts equilibrium towards the endothermic direction. Higher pressure increases rate for gases and shifts equilibrium to the side with fewer gas molecules. Catalysts increase rate by lowering activation energy but do not change equilibrium yield.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying catalysts increase yield.",
      "Avoid: Confusing rate with equilibrium position.",
    ],
    examinerTip: "Avoid this common mistake: Saying catalysts increase yield.",
  },
  {
    id: "oxfordaqa-chemistry-energy-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by an exothermic reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An exothermic reaction transfers energy to the surroundings.",
        keywords: [
          ["exothermic", "exothermic"],
          ["energy transferred", "energy", "transferred"],
        ],
      },
      {
        point: "The temperature of the surroundings increases.",
        keywords: [
          ["surroundings", "surroundings"],
          ["temperature increases", "temperature", "increases"],
        ],
      },
    ],
    examinerKeywords: ["exothermic", "energy transferred", "surroundings", "temperature increases"],
    modelAnswer:
      "An exothermic reaction transfers energy to the surroundings, causing the temperature of the surroundings to increase.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Exothermic reactions.",
      "Avoid: Saying energy is taken in from surroundings.",
      "Avoid: Saying temperature decreases.",
    ],
    examinerTip: "Avoid this common mistake: Saying energy is taken in from surroundings.",
  },
  {
    id: "oxfordaqa-chemistry-energy-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by an endothermic reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "An endothermic reaction takes in energy from the surroundings.",
        keywords: [
          ["endothermic", "endothermic"],
          ["energy taken in", "energy", "taken"],
        ],
      },
      {
        point: "The temperature of the surroundings decreases.",
        keywords: [
          ["surroundings", "surroundings"],
          ["temperature decreases", "temperature", "decreases"],
        ],
      },
    ],
    examinerKeywords: ["endothermic", "energy taken in", "surroundings", "temperature decreases"],
    modelAnswer:
      "An endothermic reaction takes in energy from the surroundings, causing the temperature of the surroundings to decrease.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Endothermic reactions.",
      "Avoid: Saying energy is released to surroundings.",
      "Avoid: Saying temperature increases.",
    ],
    examinerTip: "Avoid this common mistake: Saying energy is released to surroundings.",
  },
  {
    id: "oxfordaqa-chemistry-energy-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Give",
    questionText:
      "Give one example of an exothermic reaction and one example of an endothermic reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Combustion or neutralisation is exothermic.",
        keywords: [
          ["exothermic", "exothermic"],
          ["combustion", "combustion"],
        ],
      },
      {
        point: "Thermal decomposition or photosynthesis is endothermic.",
        keywords: [
          ["endothermic", "endothermic"],
          ["thermal decomposition", "thermal", "decomposition"],
        ],
      },
    ],
    examinerKeywords: ["exothermic", "endothermic", "combustion", "thermal decomposition"],
    modelAnswer: "Combustion is exothermic. Thermal decomposition is endothermic.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Examples.",
      "Avoid: Giving two exothermic examples.",
      "Avoid: Saying combustion is endothermic.",
    ],
    examinerTip: "Avoid this common mistake: Giving two exothermic examples.",
  },
  {
    id: "oxfordaqa-chemistry-energy-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the temperature change when an acid reacts with an alkali.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure a fixed volume of acid.",
        keywords: [["acid", "acid"]],
      },
      {
        point: "Measure the initial temperature.",
        keywords: [["temperature change", "temperature", "change"]],
      },
      {
        point: "Add a measured volume of alkali.",
        keywords: [["alkali", "alkali"]],
      },
      {
        point: "Stir the mixture.",
        keywords: [["stir", "mixture"]],
      },
      {
        point: "Record the highest or final temperature and calculate the temperature change.",
        keywords: [["temperature change", "temperature", "change"]],
      },
    ],
    examinerKeywords: ["temperature change", "acid", "alkali", "thermometer", "neutralisation"],
    modelAnswer:
      "Measure a fixed volume of acid and record its initial temperature. Add a measured volume of alkali, stir, then record the highest temperature reached. Calculate the temperature change.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Temperature change practical.",
      "Avoid: Not measuring initial temperature.",
      "Avoid: Changing volumes without control.",
    ],
    examinerTip: "Avoid this common mistake: Not measuring initial temperature.",
  },
  {
    id: "oxfordaqa-chemistry-energy-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the reaction profile for an exothermic reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Reactants are at a higher energy level than products.",
        keywords: [
          ["reactants", "reactants"],
          ["products", "products"],
        ],
      },
      {
        point: "Products are at a lower energy level.",
        keywords: [
          ["products", "products"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point: "There is an activation energy barrier.",
        keywords: [["activation energy", "activation", "energy"]],
      },
    ],
    examinerKeywords: [
      "reaction profile",
      "exothermic",
      "reactants",
      "products",
      "activation energy",
    ],
    modelAnswer:
      "In an exothermic reaction profile, reactants are at a higher energy level than products, and there is an activation energy barrier.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Reaction profiles.",
      "Avoid: Putting products higher than reactants.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Putting products higher than reactants.",
  },
  {
    id: "oxfordaqa-chemistry-energy-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the reaction profile for an endothermic reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Products are at a higher energy level than reactants.",
        keywords: [
          ["reactants", "reactants"],
          ["products", "products"],
        ],
      },
      {
        point: "Reactants are at a lower energy level.",
        keywords: [
          ["reactants", "reactants"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point: "There is an activation energy barrier.",
        keywords: [["activation energy", "activation", "energy"]],
      },
    ],
    examinerKeywords: [
      "reaction profile",
      "endothermic",
      "reactants",
      "products",
      "activation energy",
    ],
    modelAnswer:
      "In an endothermic reaction profile, products are at a higher energy level than reactants, and there is an activation energy barrier.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Reaction profiles.",
      "Avoid: Putting products lower than reactants.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Putting products lower than reactants.",
  },
  {
    id: "oxfordaqa-chemistry-energy-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by activation energy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Activation energy is the minimum energy needed.",
        keywords: [
          ["activation energy", "activation", "energy"],
          ["minimum energy", "minimum", "energy"],
        ],
      },
      {
        point: "It is needed for particles to react.",
        keywords: [["needed", "particles", "react"]],
      },
    ],
    examinerKeywords: ["activation energy", "minimum energy", "reaction"],
    modelAnswer: "Activation energy is the minimum energy needed for particles to react.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Activation energy.",
      "Avoid: Saying activation energy is the energy released.",
      "Avoid: Saying activation energy is only needed for endothermic reactions.",
    ],
    examinerTip: "Avoid this common mistake: Saying activation energy is the energy released.",
  },
  {
    id: "oxfordaqa-chemistry-energy-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how a catalyst changes a reaction profile diagram.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst provides an alternative pathway.",
        keywords: [
          ["catalyst", "catalyst"],
          ["alternative pathway", "alternative", "pathway"],
        ],
      },
      {
        point: "The activation energy is lower.",
        keywords: [["activation energy", "activation", "energy"]],
      },
      {
        point: "The overall energy change is unchanged.",
        keywords: [["activation energy", "activation", "energy"]],
      },
    ],
    examinerKeywords: ["catalyst", "reaction profile", "activation energy", "alternative pathway"],
    modelAnswer:
      "A catalyst provides an alternative pathway with lower activation energy. The overall energy change of the reaction is unchanged.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Catalysts and energy.",
      "Avoid: Saying catalysts change the energy of reactants and products.",
      "Avoid: Saying catalysts increase activation energy.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying catalysts change the energy of reactants and products.",
  },
  {
    id: "oxfordaqa-chemistry-energy-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State whether bond breaking and bond making are endothermic or exothermic.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Bond breaking is endothermic.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "Bond making is exothermic.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
    ],
    examinerKeywords: ["bond breaking", "bond making", "endothermic", "exothermic"],
    modelAnswer: "Bond breaking is endothermic, while bond making is exothermic.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Bond energies.",
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Saying bond making takes in energy.",
    ],
    examinerTip: "Avoid this common mistake: Saying bond breaking releases energy.",
  },
  {
    id: "oxfordaqa-chemistry-energy-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why a reaction is exothermic in terms of bond breaking and bond making.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Energy is taken in to break bonds.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "Energy is released when bonds form.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "More energy is released making bonds than is taken in breaking bonds.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "Energy is transferred to the surroundings.",
        keywords: [["energy released", "energy", "released"]],
      },
    ],
    examinerKeywords: ["exothermic", "bond breaking", "bond making", "energy released"],
    modelAnswer:
      "Energy is taken in to break bonds and released when new bonds form. A reaction is exothermic when more energy is released making bonds than is taken in breaking bonds.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Bond energy explanation.",
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Only discussing bond breaking.",
    ],
    examinerTip: "Avoid this common mistake: Saying bond breaking releases energy.",
  },
  {
    id: "oxfordaqa-chemistry-energy-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for H2 + Cl2 → 2HCl. Bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Energy to break bonds = 436 + 242 = 678 kJ/mol.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy released forming bonds = 2 × 431 = 862 kJ/mol.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy change = energy in - energy out.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy change = 678 - 862.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy change = -184 kJ/mol.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
    ],
    examinerKeywords: ["bond energy", "energy change", "HCl", "-184"],
    modelAnswer:
      "Energy to break bonds = 436 + 242 = 678 kJ/mol. Energy released making bonds = 2 × 431 = 862 kJ/mol. Energy change = 678 - 862 = -184 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Bond energy calculation.",
      "Avoid: Forgetting there are two H-Cl bonds.",
      "Avoid: Doing energy out minus energy in.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting there are two H-Cl bonds.",
  },
  {
    id: "oxfordaqa-chemistry-energy-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how a simple chemical cell produces a voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Two different metals are used as electrodes.",
        keywords: [["electrodes", "electrodes"]],
      },
      {
        point: "The electrodes are placed in an electrolyte.",
        keywords: [
          ["electrodes", "electrodes"],
          ["electrolyte", "electrolyte"],
        ],
      },
      {
        point: "Chemical reactions occur at the electrodes.",
        keywords: [
          ["chemical cell", "chemical", "cell"],
          ["electrodes", "electrodes"],
        ],
      },
      {
        point: "Electrons flow through the external circuit.",
        keywords: [["electrons", "electrons"]],
      },
    ],
    examinerKeywords: ["chemical cell", "electrodes", "electrolyte", "voltage", "electrons"],
    modelAnswer:
      "A simple cell uses two different metal electrodes in an electrolyte. Chemical reactions occur at the electrodes, causing electrons to flow through the external circuit and producing a voltage.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Chemical cells.",
      "Avoid: Using two identical metals and expecting a high voltage.",
      "Avoid: Forgetting electrolyte.",
    ],
    examinerTip:
      "Avoid this common mistake: Using two identical metals and expecting a high voltage.",
  },
  {
    id: "oxfordaqa-chemistry-energy-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why using two metals far apart in the reactivity series gives a larger voltage.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The metals have a bigger difference in reactivity.",
        keywords: [
          ["reactivity series", "reactivity", "series"],
          ["metals", "metals"],
        ],
      },
      {
        point: "There is a bigger tendency for electron transfer.",
        keywords: [["there", "bigger", "tendency"]],
      },
      {
        point: "This produces a larger potential difference.",
        keywords: [["potential difference", "potential", "difference"]],
      },
    ],
    examinerKeywords: ["cell voltage", "reactivity series", "metals", "potential difference"],
    modelAnswer:
      "Metals far apart in the reactivity series have a bigger difference in reactivity, so there is a bigger tendency for electron transfer and a larger voltage is produced.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Cells and reactivity.",
      "Avoid: Saying metal size is the only factor.",
      "Avoid: Ignoring reactivity difference.",
    ],
    examinerTip: "Avoid this common mistake: Saying metal size is the only factor.",
  },
  {
    id: "oxfordaqa-chemistry-energy-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State why some batteries are rechargeable.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The reactions in the battery are reversible.",
        keywords: [
          ["battery", "battery"],
          ["reversible reaction", "reversible", "reaction"],
        ],
      },
      {
        point: "An external current can reverse the chemical reaction.",
        keywords: [
          ["reversible reaction", "reversible", "reaction"],
          ["external current", "external", "current"],
        ],
      },
    ],
    examinerKeywords: ["battery", "rechargeable", "reversible reaction", "external current"],
    modelAnswer:
      "Some batteries are rechargeable because their reactions are reversible, so an external current can reverse the chemical reaction.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Batteries.",
      "Avoid: Saying rechargeable batteries never use chemical reactions.",
      "Avoid: Saying all batteries are rechargeable.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying rechargeable batteries never use chemical reactions.",
  },
  {
    id: "oxfordaqa-chemistry-energy-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products of a hydrogen fuel cell.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Water is produced.",
        keywords: [["water", "water"]],
      },
      {
        point: "Electrical energy is produced.",
        keywords: [["electrical energy", "electrical", "energy"]],
      },
    ],
    examinerKeywords: ["hydrogen fuel cell", "water", "electrical energy"],
    modelAnswer: "A hydrogen fuel cell produces water and electrical energy.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Fuel cells.",
      "Avoid: Saying carbon dioxide is the main product.",
      "Avoid: Forgetting water.",
    ],
    examinerTip: "Avoid this common mistake: Saying carbon dioxide is the main product.",
  },
  {
    id: "oxfordaqa-chemistry-energy-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Give",
    questionText: "Give two advantages of hydrogen fuel cells compared with fossil fuels.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They produce water instead of carbon dioxide during use.",
        keywords: [
          ["water", "water"],
          ["carbon dioxide", "carbon", "dioxide"],
        ],
      },
      {
        point: "They do not release greenhouse gases during use.",
        keywords: [["greenhouse gas", "greenhouse"]],
      },
      {
        point: "They can be more efficient.",
        keywords: [["they", "more", "efficient"]],
      },
      {
        point: "They do not produce sulfur dioxide during use.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
    ],
    examinerKeywords: [
      "hydrogen fuel cell",
      "advantages",
      "water",
      "carbon dioxide",
      "greenhouse gas",
    ],
    modelAnswer:
      "Hydrogen fuel cells produce water instead of carbon dioxide during use and do not release greenhouse gases during use.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Fuel cells.",
      "Avoid: Saying fuel cells burn hydrogen directly.",
      "Avoid: Saying carbon dioxide is produced during use.",
    ],
    examinerTip: "Avoid this common mistake: Saying fuel cells burn hydrogen directly.",
  },
  {
    id: "oxfordaqa-chemistry-energy-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Give",
    questionText: "Give two disadvantages of hydrogen fuel cells.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Hydrogen can be difficult to store.",
        keywords: [["hydrogen fuel cells", "hydrogen", "fuel", "cells"]],
      },
      {
        point: "Hydrogen is flammable.",
        keywords: [
          ["hydrogen fuel cells", "hydrogen", "fuel", "cells"],
          ["flammable", "flammable"],
        ],
      },
      {
        point: "Hydrogen production may require energy from fossil fuels.",
        keywords: [["hydrogen fuel cells", "hydrogen", "fuel", "cells"]],
      },
      {
        point: "Fuel cells can be expensive.",
        keywords: [
          ["hydrogen fuel cells", "hydrogen", "fuel", "cells"],
          ["expensive", "expensive"],
        ],
      },
    ],
    examinerKeywords: ["hydrogen fuel cells", "disadvantages", "storage", "flammable", "expensive"],
    modelAnswer: "Hydrogen is difficult to store and fuel cells can be expensive.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Fuel cells limitations.",
      "Avoid: Saying hydrogen fuel cells always release carbon dioxide directly.",
      "Avoid: Giving advantages instead of disadvantages.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying hydrogen fuel cells always release carbon dioxide directly.",
  },
  {
    id: "oxfordaqa-chemistry-energy-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare exothermic and endothermic reaction profiles.",
    marks: 4,
    markSchemePoints: [
      {
        point: "In exothermic reactions, reactants are higher in energy than products.",
        keywords: [
          ["exothermic", "exothermic"],
          ["reaction profile", "reaction", "profile"],
        ],
      },
      {
        point: "In endothermic reactions, products are higher in energy than reactants.",
        keywords: [
          ["endothermic", "endothermic"],
          ["reaction profile", "reaction", "profile"],
        ],
      },
      {
        point: "Both profiles show activation energy.",
        keywords: [
          ["reaction profile", "reaction", "profile"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point:
          "Exothermic reactions transfer energy to surroundings while endothermic reactions take energy in.",
        keywords: [
          ["exothermic", "exothermic"],
          ["endothermic", "endothermic"],
        ],
      },
    ],
    examinerKeywords: ["exothermic", "endothermic", "reaction profile", "activation energy"],
    modelAnswer:
      "In an exothermic reaction profile, reactants are higher in energy than products. In an endothermic profile, products are higher than reactants. Both profiles show activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Reaction profile comparison.",
      "Avoid: Saying only endothermic reactions need activation energy.",
      "Avoid: Reversing reactants and products.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying only endothermic reactions need activation energy.",
  },
  {
    id: "oxfordaqa-chemistry-energy-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["lid"]],
      },
      {
        point: "Add more insulation.",
        keywords: [["insulation", "insulation"]],
      },
      {
        point: "Take temperature readings quickly.",
        keywords: [["temperature change", "temperature", "change"]],
      },
    ],
    examinerKeywords: ["heat loss", "temperature change", "insulation", "lid"],
    modelAnswer: "Use an insulated cup and place a lid on the cup.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Required practical.",
      "Avoid: Using a metal beaker without insulation.",
      "Avoid: Leaving the cup uncovered.",
    ],
    examinerTip: "Avoid this common mistake: Using a metal beaker without insulation.",
  },
  {
    id: "oxfordaqa-chemistry-energy-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how energy changes are shown by temperature changes, reaction profiles and bond energies.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Exothermic reactions increase the temperature of the surroundings.",
        keywords: [
          ["temperature", "temperature"],
          ["reaction profile", "reaction", "profile"],
        ],
      },
      {
        point: "Endothermic reactions decrease the temperature of the surroundings.",
        keywords: [
          ["temperature", "temperature"],
          ["reaction profile", "reaction", "profile"],
        ],
      },
      {
        point: "Reaction profiles show relative energies of reactants and products.",
        keywords: [["reaction profile", "reaction", "profile"]],
      },
      {
        point: "Activation energy is the minimum energy needed for reaction.",
        keywords: [
          ["energy changes", "energy", "changes"],
          ["reaction profile", "reaction", "profile"],
        ],
      },
      {
        point: "Bond breaking is endothermic.",
        keywords: [["bond energy", "bond", "energy"]],
      },
      {
        point: "Bond making is exothermic.",
        keywords: [["bond energy", "bond", "energy"]],
      },
    ],
    examinerKeywords: [
      "energy changes",
      "temperature",
      "reaction profile",
      "bond energy",
      "activation energy",
    ],
    modelAnswer:
      "Exothermic reactions increase the temperature of the surroundings, while endothermic reactions decrease it. Reaction profiles show the relative energies of reactants and products and the activation energy needed. Bond breaking is endothermic, while bond making is exothermic.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Saying bond breaking releases energy.",
  },
  {
    id: "oxfordaqa-chemistry-organic-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what crude oil is.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Crude oil is a mixture.",
        keywords: [
          ["crude oil", "crude"],
          ["mixture", "mixture"],
        ],
      },
      {
        point: "It contains many different hydrocarbons.",
        keywords: [["hydrocarbons", "hydrocarbons"]],
      },
    ],
    examinerKeywords: ["crude oil", "mixture", "hydrocarbons"],
    modelAnswer: "Crude oil is a mixture of many different hydrocarbons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Crude oil.",
      "Avoid: Saying crude oil is a pure compound.",
      "Avoid: Forgetting hydrocarbons.",
    ],
    examinerTip: "Avoid this common mistake: Saying crude oil is a pure compound.",
  },
  {
    id: "oxfordaqa-chemistry-organic-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Define",
    questionText: "Define hydrocarbon.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A hydrocarbon contains hydrogen atoms.",
        keywords: [
          ["hydrocarbon", "hydrocarbon"],
          ["hydrogen", "hydrogen"],
        ],
      },
      {
        point: "It contains carbon atoms only.",
        keywords: [
          ["carbon", "carbon"],
          ["only", "only"],
        ],
      },
    ],
    examinerKeywords: ["hydrocarbon", "hydrogen", "carbon", "only"],
    modelAnswer: "A hydrocarbon is a compound containing hydrogen and carbon atoms only.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Hydrocarbons.",
      "Avoid: Saying hydrocarbons contain oxygen.",
      "Avoid: Forgetting carbon.",
    ],
    examinerTip: "Avoid this common mistake: Saying hydrocarbons contain oxygen.",
  },
  {
    id: "oxfordaqa-chemistry-organic-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how crude oil is separated by fractional distillation.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Crude oil is heated and vaporised.",
        keywords: [
          ["crude oil", "crude"],
          ["vaporised", "vaporised"],
        ],
      },
      {
        point: "The vapours enter a fractionating column.",
        keywords: [["vapours", "enter", "fractionating"]],
      },
      {
        point: "The column is hotter at the bottom and cooler at the top.",
        keywords: [["column", "hotter", "bottom"]],
      },
      {
        point: "Hydrocarbons condense at different heights.",
        keywords: [["condense", "condense"]],
      },
      {
        point: "Fractions are collected according to boiling point.",
        keywords: [
          ["crude oil", "crude"],
          ["boiling point", "boiling", "point"],
        ],
      },
    ],
    examinerKeywords: [
      "fractional distillation",
      "crude oil",
      "vaporised",
      "condense",
      "boiling point",
    ],
    modelAnswer:
      "Crude oil is heated and vaporised. The vapours enter a fractionating column, which is hotter at the bottom and cooler at the top. Hydrocarbons condense at different heights depending on their boiling points, so fractions are collected.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Fractional distillation.",
      "Avoid: Saying crude oil is separated by filtration.",
      "Avoid: Forgetting boiling points.",
    ],
    examinerTip: "Avoid this common mistake: Saying crude oil is separated by filtration.",
  },
  {
    id: "oxfordaqa-chemistry-organic-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText:
      "Describe how boiling point and viscosity change as hydrocarbon chain length increases.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Boiling point increases.",
        keywords: [["boiling point", "boiling", "point"]],
      },
      {
        point: "Viscosity increases.",
        keywords: [["viscosity", "viscosity"]],
      },
      {
        point: "Flammability decreases.",
        keywords: [["flammability", "flammability"]],
      },
    ],
    examinerKeywords: ["hydrocarbon", "chain length", "boiling point", "viscosity", "flammability"],
    modelAnswer:
      "As hydrocarbon chain length increases, boiling point and viscosity increase, while flammability decreases.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Fractions.",
      "Avoid: Saying longer chains are more flammable.",
      "Avoid: Saying viscosity decreases.",
    ],
    examinerTip: "Avoid this common mistake: Saying longer chains are more flammable.",
  },
  {
    id: "oxfordaqa-chemistry-organic-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the general formula of alkanes.",
    marks: 1,
    markSchemePoints: [
      {
        point: "CnH2n+2.",
        keywords: [["CnH2n+2", "cnh2n+2"]],
      },
    ],
    examinerKeywords: ["alkanes", "general formula", "CnH2n+2"],
    modelAnswer: "The general formula of alkanes is CnH2n+2.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Think about Alkanes.", "Avoid: Writing CnH2n.", "Avoid: Writing CnH2n-2."],
    examinerTip: "Avoid this common mistake: Writing CnH2n.",
  },
  {
    id: "oxfordaqa-chemistry-organic-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Name",
    questionText: "Name the first four alkanes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Methane.",
        keywords: [
          ["methane", "methane"],
          ["ethane", "ethane"],
        ],
      },
      {
        point: "Ethane.",
        keywords: [["ethane", "ethane"]],
      },
      {
        point: "Propane.",
        keywords: [["propane", "propane"]],
      },
      {
        point: "Butane.",
        keywords: [["butane", "butane"]],
      },
    ],
    examinerKeywords: ["methane", "ethane", "propane", "butane", "alkanes"],
    modelAnswer: "The first four alkanes are methane, ethane, propane and butane.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Think about Alkanes.",
      "Avoid: Writing methanol instead of methane.",
      "Avoid: Writing ethene instead of ethane.",
    ],
    examinerTip: "Avoid this common mistake: Writing methanol instead of methane.",
  },
  {
    id: "oxfordaqa-chemistry-organic-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the products of complete combustion of a hydrocarbon.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carbon dioxide is produced.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
      {
        point: "Water is produced.",
        keywords: [["water", "water"]],
      },
    ],
    examinerKeywords: ["complete combustion", "hydrocarbon", "carbon dioxide", "water"],
    modelAnswer: "Complete combustion of a hydrocarbon produces carbon dioxide and water.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Complete combustion.",
      "Avoid: Writing carbon monoxide for complete combustion.",
      "Avoid: Forgetting water.",
    ],
    examinerTip: "Avoid this common mistake: Writing carbon monoxide for complete combustion.",
  },
  {
    id: "oxfordaqa-chemistry-organic-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Write",
    questionText: "Write a balanced equation for the complete combustion of methane.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Correct reactants: CH4 and O2.",
        keywords: [["correct", "reactants"]],
      },
      {
        point: "Correct products: CO2 and H2O.",
        keywords: [["correct", "products"]],
      },
      {
        point: "Balanced equation: CH4 + 2O2 → CO2 + 2H2O.",
        keywords: [["balanced equation", "balanced", "equation"]],
      },
    ],
    examinerKeywords: ["methane", "combustion", "balanced equation", "carbon dioxide", "water"],
    modelAnswer: "CH4 + 2O2 → CO2 + 2H2O",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Combustion equation.",
      "Avoid: Forgetting oxygen.",
      "Avoid: Writing carbon monoxide as the product.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting oxygen.",
  },
  {
    id: "oxfordaqa-chemistry-organic-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State two products that may form during incomplete combustion of a hydrocarbon.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carbon monoxide.",
        keywords: [["carbon monoxide", "carbon", "monoxide"]],
      },
      {
        point: "Carbon or soot.",
        keywords: [
          ["carbon monoxide", "carbon", "monoxide"],
          ["soot", "soot"],
        ],
      },
      {
        point: "Water.",
        keywords: [["water", "water"]],
      },
    ],
    examinerKeywords: ["incomplete combustion", "carbon monoxide", "soot", "water"],
    modelAnswer: "Incomplete combustion can produce carbon monoxide and carbon or soot.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Incomplete combustion.",
      "Avoid: Only writing carbon dioxide.",
      "Avoid: Forgetting carbon monoxide.",
    ],
    examinerTip: "Avoid this common mistake: Only writing carbon dioxide.",
  },
  {
    id: "oxfordaqa-chemistry-organic-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why carbon monoxide is dangerous.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Carbon monoxide is toxic.",
        keywords: [
          ["carbon monoxide", "carbon", "monoxide"],
          ["toxic", "toxic"],
        ],
      },
      {
        point: "It binds to haemoglobin in blood.",
        keywords: [["haemoglobin", "haemoglobin"]],
      },
      {
        point: "This reduces the blood's ability to carry oxygen.",
        keywords: [["oxygen transport", "oxygen", "transport"]],
      },
    ],
    examinerKeywords: ["carbon monoxide", "toxic", "haemoglobin", "oxygen transport"],
    modelAnswer:
      "Carbon monoxide is toxic because it binds to haemoglobin in the blood, reducing the blood's ability to carry oxygen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Carbon monoxide.",
      "Avoid: Saying carbon dioxide binds strongly to haemoglobin.",
      "Avoid: Saying carbon monoxide is harmless.",
    ],
    examinerTip: "Avoid this common mistake: Saying carbon dioxide binds strongly to haemoglobin.",
  },
  {
    id: "oxfordaqa-chemistry-organic-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State what is meant by cracking.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Cracking breaks down long-chain hydrocarbons.",
        keywords: [
          ["cracking", "cracking"],
          ["long-chain hydrocarbons", "long-chain", "hydrocarbons"],
        ],
      },
      {
        point: "It forms smaller, more useful hydrocarbons.",
        keywords: [
          ["long-chain hydrocarbons", "long-chain", "hydrocarbons"],
          ["smaller hydrocarbons", "smaller", "hydrocarbons"],
        ],
      },
    ],
    examinerKeywords: ["cracking", "long-chain hydrocarbons", "smaller hydrocarbons"],
    modelAnswer:
      "Cracking is the breaking down of long-chain hydrocarbons into smaller, more useful hydrocarbons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Cracking.",
      "Avoid: Saying cracking joins small molecules.",
      "Avoid: Forgetting long-chain hydrocarbons.",
    ],
    examinerTip: "Avoid this common mistake: Saying cracking joins small molecules.",
  },
  {
    id: "oxfordaqa-chemistry-organic-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the conditions used for cracking hydrocarbons.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Vaporise the hydrocarbon.",
        keywords: [["vaporise", "hydrocarbon"]],
      },
      {
        point: "Use a high temperature.",
        keywords: [["high temperature", "high", "temperature"]],
      },
      {
        point: "Pass the vapour over a hot catalyst.",
        keywords: [
          ["catalyst", "catalyst"],
          ["vapour", "vapour"],
        ],
      },
    ],
    examinerKeywords: ["cracking", "high temperature", "catalyst", "vapour"],
    modelAnswer: "The hydrocarbon is vaporised and passed over a hot catalyst at high temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Cracking conditions.",
      "Avoid: Saying cracking happens at room temperature.",
      "Avoid: Forgetting catalyst.",
    ],
    examinerTip: "Avoid this common mistake: Saying cracking happens at room temperature.",
  },
  {
    id: "oxfordaqa-chemistry-organic-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the general formula of alkenes.",
    marks: 1,
    markSchemePoints: [
      {
        point: "CnH2n.",
        keywords: [["CnH2n", "cnh2n"]],
      },
    ],
    examinerKeywords: ["alkenes", "general formula", "CnH2n"],
    modelAnswer: "The general formula of alkenes is CnH2n.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Think about Alkenes.", "Avoid: Writing CnH2n+2.", "Avoid: Writing CnH2n-2."],
    examinerTip: "Avoid this common mistake: Writing CnH2n+2.",
  },
  {
    id: "oxfordaqa-chemistry-organic-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why alkenes are described as unsaturated.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Alkenes contain a carbon-carbon double bond.",
        keywords: [["alkenes", "alkenes"]],
      },
      {
        point: "They can undergo addition reactions.",
        keywords: [["addition reaction", "addition", "reaction"]],
      },
    ],
    examinerKeywords: ["alkenes", "unsaturated", "C=C", "addition reaction"],
    modelAnswer:
      "Alkenes are unsaturated because they contain a carbon-carbon double bond and can undergo addition reactions.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Alkenes.",
      "Avoid: Saying alkenes have only single bonds.",
      "Avoid: Saying alkenes are saturated.",
    ],
    examinerTip: "Avoid this common mistake: Saying alkenes have only single bonds.",
  },
  {
    id: "oxfordaqa-chemistry-organic-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe the test for an alkene using bromine water.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add bromine water to the sample.",
        keywords: [["bromine water", "bromine", "water"]],
      },
      {
        point: "Shake the mixture.",
        keywords: [["shake", "mixture"]],
      },
      {
        point: "Bromine water changes from orange to colourless if an alkene is present.",
        keywords: [
          ["alkene", "alkene"],
          ["bromine water", "bromine", "water"],
        ],
      },
    ],
    examinerKeywords: ["alkene", "bromine water", "orange", "colourless"],
    modelAnswer:
      "Add bromine water and shake. If an alkene is present, bromine water changes from orange to colourless.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Bromine water test.",
      "Avoid: Saying bromine water turns blue.",
      "Avoid: Saying alkanes decolourise bromine water without UV light.",
    ],
    examinerTip: "Avoid this common mistake: Saying bromine water turns blue.",
  },
  {
    id: "oxfordaqa-chemistry-organic-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the product when ethene reacts with hydrogen.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Ethane is formed.",
        keywords: [["ethane", "ethane"]],
      },
      {
        point: "This is an addition reaction.",
        keywords: [["addition", "addition"]],
      },
    ],
    examinerKeywords: ["ethene", "hydrogen", "ethane", "addition"],
    modelAnswer: "Ethene reacts with hydrogen to form ethane.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Addition reactions.",
      "Avoid: Writing ethanol.",
      "Avoid: Writing methane.",
    ],
    examinerTip: "Avoid this common mistake: Writing ethanol.",
  },
  {
    id: "oxfordaqa-chemistry-organic-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State the functional group in alcohols and name the alcohol with formula C2H5OH.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Alcohols contain the -OH functional group.",
        keywords: [
          ["alcohol", "alcohol"],
          ["functional group", "functional", "group"],
        ],
      },
      {
        point: "C2H5OH is ethanol.",
        keywords: [["ethanol", "ethanol"]],
      },
    ],
    examinerKeywords: ["alcohol", "functional group", "-OH", "ethanol"],
    modelAnswer: "Alcohols contain the -OH functional group. C2H5OH is ethanol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Alcohols.",
      "Avoid: Writing -COOH as the alcohol functional group.",
      "Avoid: Naming C2H5OH as ethanoic acid.",
    ],
    examinerTip: "Avoid this common mistake: Writing -COOH as the alcohol functional group.",
  },
  {
    id: "oxfordaqa-chemistry-organic-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the functional group in carboxylic acids and name CH3COOH.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carboxylic acids contain the -COOH functional group.",
        keywords: [
          ["carboxylic acid", "carboxylic", "acid"],
          ["-COOH", "-cooh"],
        ],
      },
      {
        point: "CH3COOH is ethanoic acid.",
        keywords: [
          ["carboxylic acid", "carboxylic", "acid"],
          ["ethanoic acid", "ethanoic", "acid"],
        ],
      },
    ],
    examinerKeywords: ["carboxylic acid", "-COOH", "ethanoic acid", "CH3COOH"],
    modelAnswer: "Carboxylic acids contain the -COOH functional group. CH3COOH is ethanoic acid.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Carboxylic acids.",
      "Avoid: Writing -OH only.",
      "Avoid: Naming CH3COOH as ethanol.",
    ],
    examinerTip: "Avoid this common mistake: Writing -OH only.",
  },
  {
    id: "oxfordaqa-chemistry-organic-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how ethene forms poly(ethene).",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ethene is an alkene monomer.",
        keywords: [["ethene", "ethene"]],
      },
      {
        point: "The carbon-carbon double bond opens.",
        keywords: [["double bond", "double", "bond"]],
      },
      {
        point: "Many ethene molecules join together.",
        keywords: [["ethene", "ethene"]],
      },
      {
        point: "Poly(ethene) is formed by addition polymerisation.",
        keywords: [
          ["ethene", "ethene"],
          ["poly(ethene)", "poly(ethene)"],
        ],
      },
    ],
    examinerKeywords: ["ethene", "poly(ethene)", "addition polymerisation", "double bond"],
    modelAnswer:
      "Ethene monomers undergo addition polymerisation. The carbon-carbon double bonds open and many ethene molecules join together to form poly(ethene).",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Polymers.",
      "Avoid: Saying water is produced in addition polymerisation.",
      "Avoid: Keeping the double bond in the polymer backbone.",
    ],
    examinerTip: "Avoid this common mistake: Saying water is produced in addition polymerisation.",
  },
  {
    id: "oxfordaqa-chemistry-organic-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how crude oil can be separated and converted into useful products.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Crude oil is a mixture of hydrocarbons.",
        keywords: [["crude oil", "crude"]],
      },
      {
        point: "Fractional distillation separates hydrocarbons by boiling point.",
        keywords: [
          ["crude oil", "crude"],
          ["fractional distillation", "fractional", "distillation"],
        ],
      },
      {
        point: "Long-chain hydrocarbons have high boiling points and are less flammable.",
        keywords: [["crude oil", "crude"]],
      },
      {
        point: "Cracking breaks long-chain hydrocarbons into shorter molecules.",
        keywords: [["cracking", "cracking"]],
      },
      {
        point: "Cracking produces alkanes and alkenes.",
        keywords: [
          ["cracking", "cracking"],
          ["alkanes", "alkanes"],
        ],
      },
      {
        point: "Alkenes can be used to make polymers.",
        keywords: [
          ["alkenes", "alkenes"],
          ["polymers", "polymers"],
        ],
      },
    ],
    examinerKeywords: [
      "crude oil",
      "fractional distillation",
      "cracking",
      "alkanes",
      "alkenes",
      "polymers",
    ],
    modelAnswer:
      "Crude oil is a mixture of hydrocarbons separated by fractional distillation according to boiling point. Long-chain hydrocarbons have higher boiling points and are less flammable. Cracking breaks long-chain hydrocarbons into shorter, more useful molecules, producing alkanes and alkenes. Alkenes can then be used to make polymers.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying crude oil is pure.",
      "Avoid: Saying cracking joins molecules together.",
    ],
    examinerTip: "Avoid this common mistake: Saying crude oil is pure.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Calculate",
    questionText:
      "An atom has atomic number 11 and mass number 23. Calculate the number of protons, neutrons and electrons.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Protons = 11.",
        keywords: [["protons", "protons"]],
      },
      {
        point: "Electrons = 11 for a neutral atom.",
        keywords: [["electrons", "electrons"]],
      },
      {
        point: "Neutrons = mass number - atomic number.",
        keywords: [
          ["atomic number", "atomic", "number"],
          ["mass number", "mass", "number"],
        ],
      },
      {
        point: "Neutrons = 23 - 11 = 12.",
        keywords: [["neutrons", "neutrons"]],
      },
    ],
    examinerKeywords: ["atomic number", "mass number", "protons", "neutrons", "electrons"],
    modelAnswer: "The atom has 11 protons and 11 electrons. Neutrons = 23 - 11 = 12.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Atomic structure.",
      "Avoid: Adding atomic number and mass number.",
      "Avoid: Forgetting neutral atoms have equal protons and electrons.",
    ],
    examinerTip: "Avoid this common mistake: Adding atomic number and mass number.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Define",
    questionText: "Define isotope.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Atoms of the same element.",
        keywords: [["same protons", "same", "protons"]],
      },
      {
        point: "Same number of protons.",
        keywords: [["same protons", "same", "protons"]],
      },
      {
        point: "Different numbers of neutrons.",
        keywords: [["different neutrons", "different", "neutrons"]],
      },
    ],
    examinerKeywords: ["isotope", "same protons", "different neutrons"],
    modelAnswer:
      "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Isotopes.",
      "Avoid: Saying isotopes have different proton numbers.",
      "Avoid: Saying isotopes are different elements.",
    ],
    examinerTip: "Avoid this common mistake: Saying isotopes have different proton numbers.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Write",
    questionText: "Write the electronic structure of calcium.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Calcium has 20 electrons.",
        keywords: [["calcium", "calcium"]],
      },
      {
        point: "Electronic structure is 2,8,8,2.",
        keywords: [
          ["electronic structure", "electronic", "structure"],
          ["2,8,8,2", "2,8,8,2"],
        ],
      },
    ],
    examinerKeywords: ["calcium", "electronic structure", "2,8,8,2"],
    modelAnswer: "2,8,8,2",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Electronic structure.",
      "Avoid: Writing 2,8,10.",
      "Avoid: Forgetting calcium has 20 electrons.",
    ],
    examinerTip: "Avoid this common mistake: Writing 2,8,10.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Explain",
    questionText: "Explain how magnesium oxide forms from magnesium and oxygen.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Magnesium loses two electrons.",
        keywords: [
          ["magnesium oxide", "magnesium", "oxide"],
          ["electron transfer", "electron", "transfer"],
        ],
      },
      {
        point: "Magnesium forms Mg2+ ions.",
        keywords: [
          ["magnesium oxide", "magnesium", "oxide"],
          ["Mg2+", "mg2+"],
        ],
      },
      {
        point: "Oxygen gains two electrons.",
        keywords: [["electron transfer", "electron", "transfer"]],
      },
      {
        point: "Mg2+ and O2- ions attract by strong electrostatic forces.",
        keywords: [["Mg2+", "mg2+"], ["O2-"]],
      },
    ],
    examinerKeywords: ["magnesium oxide", "electron transfer", "Mg2+", "O2-", "ionic"],
    modelAnswer:
      "Magnesium loses two electrons to form Mg2+. Oxygen gains two electrons to form O2-. The oppositely charged ions are held together by strong electrostatic attraction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Ionic bonding.",
      "Avoid: Saying electrons are shared.",
      "Avoid: Using Mg+ instead of Mg2+.",
    ],
    examinerTip: "Avoid this common mistake: Saying electrons are shared.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Explain",
    questionText:
      "Explain why molten sodium chloride conducts electricity but solid sodium chloride does not.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium chloride contains ions.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
      {
        point: "In the solid, ions are fixed in position.",
        keywords: [
          ["solid", "solid"],
          ["mobile ions", "mobile", "ions"],
        ],
      },
      {
        point: "When molten, ions are mobile.",
        keywords: [
          ["molten", "molten"],
          ["mobile ions", "mobile", "ions"],
        ],
      },
      {
        point: "Mobile ions carry charge.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
    ],
    examinerKeywords: ["molten", "solid", "mobile ions", "conduct electricity"],
    modelAnswer:
      "Solid sodium chloride has ions fixed in position, so they cannot carry charge. Molten sodium chloride has mobile ions, so it conducts electricity.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Ionic properties.",
      "Avoid: Saying electrons carry charge in molten sodium chloride.",
      "Avoid: Saying solid sodium chloride has no ions.",
    ],
    examinerTip:
      "Avoid this common mistake: Saying electrons carry charge in molten sodium chloride.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Define",
    questionText: "Define covalent bond.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A covalent bond is a shared pair of electrons.",
        keywords: [
          ["covalent", "covalent"],
          ["shared pair", "shared", "pair"],
        ],
      },
      {
        point: "The shared pair is between two atoms.",
        keywords: [["shared pair", "shared", "pair"]],
      },
    ],
    examinerKeywords: ["covalent", "shared pair", "electrons"],
    modelAnswer: "A covalent bond is a shared pair of electrons between two atoms.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Covalent bonding.",
      "Avoid: Saying covalent bonding is electron transfer.",
      "Avoid: Forgetting shared pair.",
    ],
    examinerTip: "Avoid this common mistake: Saying covalent bonding is electron transfer.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "Paper 1",
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
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
      {
        point: "Delocalised electrons move and carry charge.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
    ],
    examinerKeywords: ["graphite", "delocalised electrons", "conduct"],
    modelAnswer:
      "Graphite conducts because each carbon atom has one delocalised electron that can move through the structure and carry charge.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Graphite.",
      "Avoid: Saying ions move in graphite.",
      "Avoid: Saying graphite cannot conduct.",
    ],
    examinerTip: "Avoid this common mistake: Saying ions move in graphite.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Explain",
    questionText: "Explain why metals conduct electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metals contain delocalised electrons.",
        keywords: [
          ["metals", "metals"],
          ["delocalised electrons", "delocalised", "electrons"],
        ],
      },
      {
        point: "The electrons are free to move.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
      {
        point: "The electrons carry charge through the metal.",
        keywords: [["delocalised electrons", "delocalised", "electrons"]],
      },
    ],
    examinerKeywords: ["metals", "delocalised electrons", "conduct"],
    modelAnswer:
      "Metals conduct electricity because they contain delocalised electrons that are free to move and carry charge.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Metallic bonding.",
      "Avoid: Saying ions move through solid metals.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying ions move through solid metals.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Explain",
    questionText: "Explain why zinc displaces copper from copper(II) sulfate solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Zinc is more reactive than copper.",
        keywords: [
          ["zinc", "zinc"],
          ["copper sulfate", "copper", "sulfate"],
        ],
      },
      {
        point: "Zinc atoms lose electrons to form zinc ions.",
        keywords: [["zinc", "zinc"]],
      },
      {
        point: "Copper ions gain electrons to form copper atoms.",
        keywords: [["copper sulfate", "copper", "sulfate"]],
      },
      {
        point: "Copper is displaced.",
        keywords: [["copper sulfate", "copper", "sulfate"]],
      },
    ],
    examinerKeywords: ["zinc", "copper sulfate", "displacement", "reactivity"],
    modelAnswer:
      "Zinc displaces copper because zinc is more reactive. Zinc atoms lose electrons to form zinc ions, while copper ions gain electrons to form copper atoms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Reactivity series.",
      "Avoid: Saying copper is more reactive than zinc.",
      "Avoid: Not mentioning electron transfer.",
    ],
    examinerTip: "Avoid this common mistake: Saying copper is more reactive than zinc.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "State",
    questionText: "State where cations and anions move during electrolysis.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Cations move to the cathode.",
        keywords: [
          ["cations", "cations"],
          ["cathode", "cathode"],
        ],
      },
      {
        point: "Anions move to the anode.",
        keywords: [
          ["anions", "anions"],
          ["anode", "anode"],
        ],
      },
    ],
    examinerKeywords: ["cations", "anions", "cathode", "anode"],
    modelAnswer: "Cations move to the cathode and anions move to the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Think about Electrolysis.",
      "Avoid: Reversing anode and cathode.",
      "Avoid: Forgetting cations are positive.",
    ],
    examinerTip: "Avoid this common mistake: Reversing anode and cathode.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Write",
    questionText:
      "Write the half-equation at the cathode during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Lead(II) ions gain electrons.",
        keywords: [["lead bromide", "lead", "bromide"]],
      },
      {
        point: "Pb2+ + 2e- → Pb.",
        keywords: [["Pb2+", "pb2+"]],
      },
    ],
    examinerKeywords: ["lead bromide", "cathode", "Pb2+", "half-equation"],
    modelAnswer: "Pb2+ + 2e- → Pb",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Molten electrolysis.",
      "Avoid: Writing oxidation at the cathode.",
      "Avoid: Forgetting two electrons.",
    ],
    examinerTip: "Avoid this common mistake: Writing oxidation at the cathode.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "State",
    questionText: "State the products when hydrochloric acid reacts with calcium carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Calcium chloride.",
        keywords: [["calcium chloride", "calcium", "chloride"]],
      },
      {
        point: "Water.",
        keywords: [["water"]],
      },
      {
        point: "Carbon dioxide.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
    ],
    examinerKeywords: ["acid", "carbonate", "calcium chloride", "carbon dioxide"],
    modelAnswer:
      "Hydrochloric acid reacts with calcium carbonate to form calcium chloride, water and carbon dioxide.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Think about Acids.", "Avoid: Writing hydrogen gas.", "Avoid: Forgetting water."],
    examinerTip: "Avoid this common mistake: Writing hydrogen gas.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1",
    paperType: "Paper 1",
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
        keywords: [["OH-"]],
      },
    ],
    examinerKeywords: ["neutralisation", "H+", "OH-", "water"],
    modelAnswer: "H+ + OH- → H2O",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Think about Neutralisation.",
      "Avoid: Writing hydrogen gas as product.",
      "Avoid: Forgetting hydroxide ions.",
    ],
    examinerTip: "Avoid this common mistake: Writing hydrogen gas as product.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Describe",
    questionText:
      "Describe how to prepare pure dry copper(II) sulfate crystals from copper(II) oxide and sulfuric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Warm dilute sulfuric acid.",
        keywords: [["warm", "dilute", "sulfuric"]],
      },
      {
        point: "Add excess copper(II) oxide.",
        keywords: [
          ["copper sulfate", "copper", "sulfate"],
          ["excess", "excess"],
        ],
      },
      {
        point: "Stir until no more reacts.",
        keywords: [["stir", "until", "more"]],
      },
      {
        point: "Filter off excess solid.",
        keywords: [
          ["excess", "excess"],
          ["filter", "filter"],
        ],
      },
      {
        point: "Heat filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry crystals.",
        keywords: [["filter", "filter"]],
      },
    ],
    examinerKeywords: ["copper sulfate", "excess", "filter", "crystallise"],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess copper(II) oxide. Stir until no more reacts, then filter off excess solid. Heat the filtrate until nearly saturated, cool, filter and dry the crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Salt preparation.",
      "Avoid: Not using excess solid.",
      "Avoid: Evaporating completely to dryness.",
    ],
    examinerTip: "Avoid this common mistake: Not using excess solid.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Describe",
    questionText: "Describe the test for sulfate ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Acidify with dilute hydrochloric acid.",
        keywords: [["acidify", "with", "dilute"]],
      },
      {
        point: "Add aqueous barium chloride or barium nitrate.",
        keywords: [["barium", "barium"]],
      },
      {
        point: "White precipitate forms.",
        keywords: [["white precipitate", "white", "precipitate"]],
      },
    ],
    examinerKeywords: ["sulfate", "barium", "white precipitate"],
    modelAnswer:
      "Acidify the sample with dilute hydrochloric acid, then add aqueous barium chloride. A white precipitate shows sulfate ions.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Chemical analysis.",
      "Avoid: Using silver nitrate for sulfate.",
      "Avoid: Forgetting to acidify.",
    ],
    examinerTip: "Avoid this common mistake: Using silver nitrate for sulfate.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Identify",
    questionText:
      "A salt gives a lilac flame and a cream precipitate with acidified silver nitrate. Identify the salt.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lilac flame shows potassium ions.",
        keywords: [
          ["lilac", "lilac"],
          ["potassium bromide", "potassium", "bromide"],
        ],
      },
      {
        point: "Cream precipitate shows bromide ions.",
        keywords: [
          ["cream precipitate", "cream", "precipitate"],
          ["potassium bromide", "potassium", "bromide"],
        ],
      },
      {
        point: "Salt is potassium bromide.",
        keywords: [["potassium bromide", "potassium", "bromide"]],
      },
    ],
    examinerKeywords: ["lilac", "cream precipitate", "potassium bromide"],
    modelAnswer:
      "The salt is potassium bromide. The lilac flame shows potassium ions and the cream precipitate shows bromide ions.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Flame tests.",
      "Avoid: Writing potassium chloride.",
      "Avoid: Ignoring one test result.",
    ],
    examinerTip: "Avoid this common mistake: Writing potassium chloride.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of magnesium nitrate, Mg(NO3)2. Ar: Mg = 24, N = 14, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Mr = 24 + 2(14 + 3 × 16).",
        keywords: [["mr = 24 + 2(14 + 3 × 16)"]],
      },
      {
        point: "NO3 = 14 + 48 = 62.",
        keywords: [["no3 = 14 + 48 = 62."]],
      },
      {
        point: "Mr = 24 + 124 = 148.",
        keywords: [["148"]],
      },
    ],
    examinerKeywords: ["Mr", "magnesium nitrate", "148"],
    modelAnswer: "Mr = 24 + 2(14 + 3 × 16) = 24 + 124 = 148.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Quantitative chemistry.",
      "Avoid: Forgetting there are two nitrate groups.",
      "Avoid: Counting only three oxygen atoms.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting there are two nitrate groups.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Calculate",
    questionText: "Calculate the number of moles in 5.6 g of iron. Ar: Fe = 56.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Moles = mass ÷ Ar.",
        keywords: [
          ["moles", "moles"],
          ["mass", "mass"],
        ],
      },
      {
        point: "Moles = 5.6 ÷ 56 = 0.10 mol.",
        keywords: [
          ["moles", "moles"],
          ["0.10 mol", "0.10"],
        ],
      },
    ],
    examinerKeywords: ["moles", "mass", "iron", "0.10 mol"],
    modelAnswer: "Moles = 5.6 ÷ 56 = 0.10 mol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Think about Moles.", "Avoid: Multiplying mass by Ar.", "Avoid: Forgetting mol."],
    examinerTip: "Avoid this common mistake: Multiplying mass by Ar.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Calculate",
    questionText:
      "Calculate the mass of carbon dioxide formed from 5.0 g of calcium carbonate. CaCO3 → CaO + CO2. Mr: CaCO3 = 100, CO2 = 44.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles CaCO3 = 5.0 ÷ 100 = 0.050 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Ratio CaCO3 : CO2 is 1 : 1.",
        keywords: [["ratio", "caco3"]],
      },
      {
        point: "Moles CO2 = 0.050 mol.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mass = moles × Mr.",
        keywords: [["moles", "moles"]],
      },
      {
        point: "Mass CO2 = 0.050 × 44 = 2.2 g.",
        keywords: [["2.2 g"]],
      },
    ],
    examinerKeywords: ["calcium carbonate", "carbon dioxide", "moles", "2.2 g"],
    modelAnswer:
      "Moles of CaCO3 = 5.0 ÷ 100 = 0.050 mol. The ratio is 1:1, so 0.050 mol CO2 forms. Mass = 0.050 × 44 = 2.2 g.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Reacting masses.",
      "Avoid: Using 100 as the Mr of CO2.",
      "Avoid: Ignoring the mole ratio.",
    ],
    examinerTip: "Avoid this common mistake: Using 100 as the Mr of CO2.",
  },
  {
    id: "oxfordaqa-chemistry-paper1-mixed-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "Paper 1",
    questionType: "Explain",
    questionText:
      "Explain how structure and bonding affect melting point and electrical conductivity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices.",
        keywords: [["ionic", "compounds", "have"]],
      },
      {
        point: "Strong electrostatic attractions give high melting points.",
        keywords: [["melting point", "melting", "point"]],
      },
      {
        point: "Ionic compounds conduct when molten or dissolved because ions are mobile.",
        keywords: [["ionic", "compounds", "conduct"]],
      },
      {
        point:
          "Simple molecular substances have weak intermolecular forces and low melting points.",
        keywords: [["melting point", "melting", "point"]],
      },
      {
        point: "Metals conduct because they have delocalised electrons.",
        keywords: [["metals", "conduct", "because"]],
      },
      {
        point: "Giant covalent structures have many strong covalent bonds and high melting points.",
        keywords: [
          ["structure", "structure"],
          ["melting point", "melting", "point"],
        ],
      },
    ],
    examinerKeywords: ["structure", "bonding", "melting point", "conductivity"],
    modelAnswer:
      "Ionic compounds have giant lattices with strong attractions, so they have high melting points and conduct when ions are mobile. Simple molecular substances have weak intermolecular forces and low melting points. Metals conduct because delocalised electrons carry charge. Giant covalent structures have many strong bonds and high melting points.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Using the same explanation for all structures.",
      "Avoid: Forgetting mobile charge carriers.",
    ],
    examinerTip: "Avoid this common mistake: Using the same explanation for all structures.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain why Group 1 metals become more reactive down the group.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Atoms get larger down the group.",
        keywords: [["Group 1", "group"]],
      },
      {
        point: "The outer electron is further from the nucleus.",
        keywords: [["outer electron", "outer", "electron"]],
      },
      {
        point: "Attraction between nucleus and outer electron is weaker.",
        keywords: [["outer electron", "outer", "electron"]],
      },
      {
        point: "The outer electron is lost more easily.",
        keywords: [
          ["outer electron", "outer", "electron"],
          ["lost more easily", "lost", "more", "easily"],
        ],
      },
    ],
    examinerKeywords: ["Group 1", "outer electron", "lost more easily", "reactivity"],
    modelAnswer:
      "Down Group 1, atoms get larger and the outer electron is further from the nucleus, so it is less strongly attracted and is lost more easily.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Periodicity.",
      "Avoid: Saying Group 1 gains electrons.",
      "Avoid: Saying reactivity decreases down the group.",
    ],
    examinerTip: "Avoid this common mistake: Saying Group 1 gains electrons.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain why chlorine displaces bromine from potassium bromide solution.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Chlorine is more reactive than bromine.",
        keywords: [
          ["chlorine", "chlorine"],
          ["bromine", "bromine"],
        ],
      },
      {
        point: "A more reactive halogen displaces a less reactive halide.",
        keywords: [["halogen", "halogen"]],
      },
      {
        point: "Bromine is formed.",
        keywords: [["bromine", "bromine"]],
      },
    ],
    examinerKeywords: ["chlorine", "bromine", "displacement", "halogen"],
    modelAnswer:
      "Chlorine is more reactive than bromine, so it displaces bromide ions from potassium bromide solution to form bromine.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Group 7.",
      "Avoid: Saying bromine displaces chlorine.",
      "Avoid: Saying no reaction happens.",
    ],
    examinerTip: "Avoid this common mistake: Saying bromine displaces chlorine.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "State",
    questionText: "State three typical properties of transition metals.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They have high densities.",
        keywords: [["they", "have", "high"]],
      },
      {
        point: "They form coloured compounds.",
        keywords: [["coloured compounds", "coloured", "compounds"]],
      },
      {
        point: "They can act as catalysts.",
        keywords: [["catalysts", "catalysts"]],
      },
      {
        point: "They have variable oxidation states.",
        keywords: [["they", "have", "variable"]],
      },
    ],
    examinerKeywords: ["transition metals", "coloured compounds", "catalysts", "density"],
    modelAnswer:
      "Transition metals usually have high densities, form coloured compounds and can act as catalysts.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Transition metals.",
      "Avoid: Saying they are soft like Group 1 metals.",
      "Avoid: Saying all compounds are white.",
    ],
    examinerTip: "Avoid this common mistake: Saying they are soft like Group 1 metals.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain why increasing temperature increases rate of reaction.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles gain kinetic energy.",
        keywords: [
          ["kinetic energy", "kinetic", "energy"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point: "Particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Collisions are more frequent.",
        keywords: [["collisions", "collisions"]],
      },
      {
        point: "A greater proportion of particles have energy at least equal to activation energy.",
        keywords: [
          ["kinetic energy", "kinetic", "energy"],
          ["activation energy", "activation", "energy"],
        ],
      },
    ],
    examinerKeywords: ["temperature", "kinetic energy", "collisions", "activation energy"],
    modelAnswer:
      "Higher temperature gives particles more kinetic energy, so they move faster and collide more often. More particles have enough energy to overcome activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Rate of reaction.",
      "Avoid: Only saying particles move faster.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Only saying particles move faster.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain how a catalyst increases rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Provides an alternative reaction pathway.",
        keywords: [["alternative pathway", "alternative", "pathway"]],
      },
      {
        point: "This pathway has lower activation energy.",
        keywords: [
          ["alternative pathway", "alternative", "pathway"],
          ["activation energy", "activation", "energy"],
        ],
      },
      {
        point: "More particles have enough energy to react.",
        keywords: [["activation energy", "activation", "energy"]],
      },
    ],
    examinerKeywords: ["catalyst", "alternative pathway", "activation energy"],
    modelAnswer:
      "A catalyst provides an alternative pathway with lower activation energy, so more particles have enough energy to react.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Catalysts.",
      "Avoid: Saying catalysts are used up.",
      "Avoid: Saying catalysts increase activation energy.",
    ],
    examinerTip: "Avoid this common mistake: Saying catalysts are used up.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Describe",
    questionText: "Describe dynamic equilibrium.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Occurs in a closed system.",
        keywords: [["closed system", "closed", "system"]],
      },
      {
        point: "Forward and reverse reactions continue.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "Forward and reverse reactions occur at the same rate.",
        keywords: [["same rate", "same", "rate"]],
      },
      {
        point: "Concentrations of reactants and products remain constant.",
        keywords: [["constant", "constant"]],
      },
    ],
    examinerKeywords: ["dynamic equilibrium", "closed system", "same rate", "constant"],
    modelAnswer:
      "Dynamic equilibrium occurs in a closed system when forward and reverse reactions continue at the same rate, so concentrations remain constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Equilibrium.",
      "Avoid: Saying reactions stop.",
      "Avoid: Saying concentrations must be equal.",
    ],
    examinerTip: "Avoid this common mistake: Saying reactions stop.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain why a high pressure increases ammonia yield in the Haber process.",
    marks: 4,
    markSchemePoints: [
      {
        point: "There are more gas molecules on the reactant side.",
        keywords: [["fewer gas molecules", "fewer", "molecules"]],
      },
      {
        point: "There are fewer gas molecules on the product side.",
        keywords: [["fewer gas molecules", "fewer", "molecules"]],
      },
      {
        point: "Increasing pressure favours the side with fewer gas molecules.",
        keywords: [
          ["pressure", "pressure"],
          ["fewer gas molecules", "fewer", "molecules"],
        ],
      },
      {
        point: "Equilibrium shifts towards ammonia.",
        keywords: [["ammonia", "ammonia"]],
      },
    ],
    examinerKeywords: ["Haber", "pressure", "ammonia", "fewer gas molecules"],
    modelAnswer:
      "High pressure favours the side with fewer gas molecules. In the Haber process, the product side has fewer gas molecules, so equilibrium shifts towards ammonia.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Think about Haber process.",
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying high pressure always shifts left.",
    ],
    examinerTip: "Avoid this common mistake: Counting atoms instead of gas molecules.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain why bond breaking is endothermic and bond making is exothermic.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Energy is needed to break bonds.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "Therefore bond breaking is endothermic.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "Energy is released when bonds form.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
      {
        point: "Therefore bond making is exothermic.",
        keywords: [
          ["bond breaking", "bond", "breaking"],
          ["bond making", "bond", "making"],
        ],
      },
    ],
    examinerKeywords: ["bond breaking", "bond making", "endothermic", "exothermic"],
    modelAnswer:
      "Energy is needed to break bonds, so bond breaking is endothermic. Energy is released when new bonds form, so bond making is exothermic.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Energy changes.",
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Reversing endothermic and exothermic.",
    ],
    examinerTip: "Avoid this common mistake: Saying bond breaking releases energy.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for H2 + Br2 → 2HBr. Bond energies: H-H = 436 kJ/mol, Br-Br = 193 kJ/mol, H-Br = 366 kJ/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Energy in = 436 + 193 = 629 kJ/mol.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy out = 2 × 366 = 732 kJ/mol.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy change = energy in - energy out.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy change = 629 - 732.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
      {
        point: "Energy change = -103 kJ/mol.",
        keywords: [
          ["bond energy", "bond", "energy"],
          ["energy change", "energy", "change"],
        ],
      },
    ],
    examinerKeywords: ["bond energy", "energy change", "-103"],
    modelAnswer:
      "Energy in = 436 + 193 = 629. Energy out = 2 × 366 = 732. Energy change = 629 - 732 = -103 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Bond energies.",
      "Avoid: Forgetting two H-Br bonds.",
      "Avoid: Missing the negative sign.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting two H-Br bonds.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Give",
    questionText: "Give two advantages and one disadvantage of hydrogen fuel cells.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They produce water during use.",
        keywords: [["water", "water"]],
      },
      {
        point: "They do not release carbon dioxide during use.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
      {
        point: "Hydrogen is difficult to store or is flammable.",
        keywords: [["hydrogen fuel cell", "hydrogen", "fuel", "cell"]],
      },
      {
        point: "Fuel cells can be expensive.",
        keywords: [["hydrogen fuel cell", "hydrogen", "fuel", "cell"]],
      },
    ],
    examinerKeywords: ["hydrogen fuel cell", "water", "carbon dioxide", "storage"],
    modelAnswer:
      "Advantages are that they produce water and no carbon dioxide during use. A disadvantage is that hydrogen is difficult to store.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Fuel cells.",
      "Avoid: Saying carbon dioxide is produced during use.",
      "Avoid: Giving only advantages.",
    ],
    examinerTip: "Avoid this common mistake: Saying carbon dioxide is produced during use.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "State",
    questionText: "State what crude oil is and how it is separated.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Crude oil is a mixture of hydrocarbons.",
        keywords: [
          ["crude oil", "crude"],
          ["hydrocarbons", "hydrocarbons"],
        ],
      },
      {
        point: "It is separated by fractional distillation.",
        keywords: [["fractional distillation", "fractional", "distillation"]],
      },
      {
        point: "Fractions separate because they have different boiling points.",
        keywords: [
          ["crude oil", "crude"],
          ["boiling point", "boiling", "point"],
        ],
      },
    ],
    examinerKeywords: ["crude oil", "hydrocarbons", "fractional distillation", "boiling point"],
    modelAnswer:
      "Crude oil is a mixture of hydrocarbons. It is separated by fractional distillation because the hydrocarbons have different boiling points.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Crude oil.",
      "Avoid: Saying crude oil is pure.",
      "Avoid: Saying it is separated by filtration.",
    ],
    examinerTip: "Avoid this common mistake: Saying crude oil is pure.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Write",
    questionText: "Write a balanced equation for the complete combustion of propane.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Correct reactants: C3H8 and O2.",
        keywords: [["correct", "reactants", "c3h8"]],
      },
      {
        point: "Correct products: CO2 and H2O.",
        keywords: [["correct", "products"]],
      },
      {
        point: "Balanced equation: C3H8 + 5O2 → 3CO2 + 4H2O.",
        keywords: [["balanced equation", "balanced", "equation"]],
      },
    ],
    examinerKeywords: ["propane", "combustion", "balanced equation"],
    modelAnswer: "C3H8 + 5O2 → 3CO2 + 4H2O",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Think about Alkanes.", "Avoid: Forgetting oxygen.", "Avoid: Not balancing oxygen."],
    examinerTip: "Avoid this common mistake: Forgetting oxygen.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Describe",
    questionText: "Describe the test for alkenes using bromine water.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add bromine water.",
        keywords: [["bromine water", "bromine", "water"]],
      },
      {
        point: "Shake the mixture.",
        keywords: [["shake", "mixture"]],
      },
      {
        point: "Bromine water changes from orange to colourless if an alkene is present.",
        keywords: [
          ["alkene", "alkene"],
          ["bromine water", "bromine", "water"],
        ],
      },
    ],
    examinerKeywords: ["alkene", "bromine water", "orange", "colourless"],
    modelAnswer:
      "Add bromine water and shake. If an alkene is present, it changes from orange to colourless.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Alkenes.",
      "Avoid: Saying it turns blue.",
      "Avoid: Saying alkanes decolourise bromine water immediately.",
    ],
    examinerTip: "Avoid this common mistake: Saying it turns blue.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain how ethene forms poly(ethene).",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ethene is an alkene monomer.",
        keywords: [["ethene", "ethene"]],
      },
      {
        point: "The carbon-carbon double bond opens.",
        keywords: [["double bond", "double", "bond"]],
      },
      {
        point: "Many monomers join together.",
        keywords: [["many", "monomers", "join"]],
      },
      {
        point: "Addition polymerisation forms poly(ethene).",
        keywords: [
          ["ethene", "ethene"],
          ["addition polymerisation", "addition", "polymerisation"],
        ],
      },
    ],
    examinerKeywords: ["ethene", "polyethene", "addition polymerisation", "double bond"],
    modelAnswer:
      "Ethene monomers undergo addition polymerisation. Their carbon-carbon double bonds open and many monomers join to form poly(ethene).",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Polymers.",
      "Avoid: Saying water is produced.",
      "Avoid: Using ethane as the monomer.",
    ],
    examinerTip: "Avoid this common mistake: Saying water is produced.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "State",
    questionText: "State the conditions for producing ethanol from ethene.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ethene reacts with steam.",
        keywords: [
          ["ethene", "ethene"],
          ["steam", "steam"],
        ],
      },
      {
        point: "A phosphoric acid catalyst is used.",
        keywords: [["phosphoric acid", "phosphoric", "acid"]],
      },
      {
        point: "High temperature and high pressure are used.",
        keywords: [["high", "temperature", "high"]],
      },
    ],
    examinerKeywords: ["ethene", "steam", "ethanol", "phosphoric acid"],
    modelAnswer:
      "Ethene reacts with steam at high temperature and pressure using a phosphoric acid catalyst.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Think about Alcohols.", "Avoid: Saying yeast is used.", "Avoid: Forgetting steam."],
    examinerTip: "Avoid this common mistake: Saying yeast is used.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "State",
    questionText: "State the products when ethanoic acid reacts with sodium carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sodium ethanoate.",
        keywords: [["sodium", "ethanoate"]],
      },
      {
        point: "Water.",
        keywords: [["water"]],
      },
      {
        point: "Carbon dioxide.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
    ],
    examinerKeywords: ["ethanoic acid", "carbonate", "carbon dioxide"],
    modelAnswer:
      "Ethanoic acid reacts with sodium carbonate to form sodium ethanoate, water and carbon dioxide.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Carboxylic acids.",
      "Avoid: Writing hydrogen gas.",
      "Avoid: Forgetting water.",
    ],
    examinerTip: "Avoid this common mistake: Writing hydrogen gas.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "State",
    questionText: "State the products when ethanol reacts with ethanoic acid.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Ethyl ethanoate.",
        keywords: [["ethyl ethanoate", "ethyl", "ethanoate"]],
      },
      {
        point: "Water.",
        keywords: [["water"]],
      },
    ],
    examinerKeywords: ["ethanol", "ethanoic acid", "ethyl ethanoate", "ester"],
    modelAnswer: "Ethanol reacts with ethanoic acid to form ethyl ethanoate and water.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Think about Esters.", "Avoid: Writing ethene.", "Avoid: Forgetting water."],
    examinerTip: "Avoid this common mistake: Writing ethene.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText: "Explain why incomplete combustion of hydrocarbons is dangerous.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Incomplete combustion produces carbon monoxide.",
        keywords: [
          ["incomplete combustion", "incomplete", "combustion"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Carbon monoxide is toxic.",
        keywords: [
          ["carbon monoxide", "carbon", "monoxide"],
          ["toxic", "toxic"],
        ],
      },
      {
        point: "It reduces oxygen transport in the blood by binding to haemoglobin.",
        keywords: [["haemoglobin", "haemoglobin"]],
      },
    ],
    examinerKeywords: ["incomplete combustion", "carbon monoxide", "toxic", "haemoglobin"],
    modelAnswer:
      "Incomplete combustion can produce carbon monoxide, which is toxic because it binds to haemoglobin and reduces oxygen transport in the blood.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Environmental chemistry.",
      "Avoid: Saying carbon dioxide is the toxic gas here.",
      "Avoid: Forgetting haemoglobin or oxygen transport.",
    ],
    examinerTip: "Avoid this common mistake: Saying carbon dioxide is the toxic gas here.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Calculate",
    questionText:
      "Calculate the concentration in mol/dm3 of 0.050 mol of solute dissolved in 250 cm3 of solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert 250 cm3 to 0.250 dm3.",
        keywords: [["convert"]],
      },
      {
        point: "Concentration = moles ÷ volume.",
        keywords: [
          ["concentration", "concentration"],
          ["moles", "moles"],
        ],
      },
      {
        point: "Concentration = 0.050 ÷ 0.250.",
        keywords: [["concentration", "concentration"]],
      },
      {
        point: "Concentration = 0.20 mol/dm3.",
        keywords: [
          ["concentration", "concentration"],
          ["0.20 mol/dm3", "0.20", "mol/dm3"],
        ],
      },
    ],
    examinerKeywords: ["concentration", "moles", "volume", "0.20 mol/dm3"],
    modelAnswer: "250 cm3 = 0.250 dm3. Concentration = 0.050 ÷ 0.250 = 0.20 mol/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Quantitative chemistry.",
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Multiplying moles by volume.",
    ],
    examinerTip: "Avoid this common mistake: Not converting cm3 to dm3.",
  },
  {
    id: "oxfordaqa-chemistry-paper2-mixed-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 2",
    paperType: "Paper 2",
    questionType: "Explain",
    questionText:
      "Explain how crude oil is separated and how cracking increases the usefulness of crude oil fractions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Crude oil is a mixture of hydrocarbons.",
        keywords: [["crude oil", "crude"]],
      },
      {
        point: "Fractional distillation separates hydrocarbons by boiling point.",
        keywords: [
          ["crude oil", "crude"],
          ["fractional distillation", "fractional", "distillation"],
        ],
      },
      {
        point: "Long-chain hydrocarbons are less useful and less flammable.",
        keywords: [["long", "chain", "hydrocarbons"]],
      },
      {
        point: "Cracking breaks long-chain hydrocarbons into shorter hydrocarbons.",
        keywords: [["cracking", "cracking"]],
      },
      {
        point: "Cracking produces alkanes and alkenes.",
        keywords: [
          ["cracking", "cracking"],
          ["alkenes", "alkenes"],
        ],
      },
      {
        point: "Alkenes can be used to make polymers.",
        keywords: [
          ["alkenes", "alkenes"],
          ["polymers", "polymers"],
        ],
      },
    ],
    examinerKeywords: ["crude oil", "fractional distillation", "cracking", "alkenes", "polymers"],
    modelAnswer:
      "Crude oil is separated by fractional distillation because its hydrocarbons have different boiling points. Cracking breaks less useful long-chain hydrocarbons into shorter molecules, producing alkanes for fuels and alkenes for polymers.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Saying cracking joins small molecules.",
      "Avoid: Forgetting alkenes are useful for polymers.",
    ],
    examinerTip: "Avoid this common mistake: Saying cracking joins small molecules.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText:
      "State the independent variable, dependent variable and one control variable when investigating the effect of temperature on rate of reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Independent variable is temperature.",
        keywords: [
          ["independent variable", "independent", "variable"],
          ["dependent variable", "dependent", "variable"],
        ],
      },
      {
        point: "Dependent variable is rate or time taken.",
        keywords: [
          ["independent variable", "independent", "variable"],
          ["dependent variable", "dependent", "variable"],
        ],
      },
      {
        point: "Control variable could be concentration, volume or mass of reactant.",
        keywords: [
          ["independent variable", "independent", "variable"],
          ["dependent variable", "dependent", "variable"],
        ],
      },
    ],
    examinerKeywords: ["independent variable", "dependent variable", "control variable"],
    modelAnswer:
      "The independent variable is temperature. The dependent variable is rate or time taken. One control variable is concentration.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Variables.",
      "Avoid: Calling rate the independent variable.",
      "Avoid: Not giving a control variable.",
    ],
    examinerTip: "Avoid this common mistake: Calling rate the independent variable.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why repeat readings are taken in experiments.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Repeats improve reliability.",
        keywords: [
          ["repeat readings", "repeat", "readings"],
          ["reliability", "reliability"],
        ],
      },
      {
        point: "They help identify anomalies.",
        keywords: [["they", "help", "identify"]],
      },
      {
        point: "A mean can be calculated.",
        keywords: [["mean", "mean"]],
      },
    ],
    examinerKeywords: ["repeat readings", "reliability", "anomaly", "mean"],
    modelAnswer:
      "Repeat readings improve reliability, help identify anomalous results and allow a mean to be calculated.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Accuracy.",
      "Avoid: Saying repeats remove all errors.",
      "Avoid: Forgetting anomalies.",
    ],
    examinerTip: "Avoid this common mistake: Saying repeats remove all errors.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "A student records 31 s, 32 s, 65 s and 30 s. Identify the anomalous result and calculate the mean of the reliable results.",
    marks: 3,
    markSchemePoints: [
      {
        point: "65 s is anomalous.",
        keywords: [["anomalous result", "anomalous", "result"]],
      },
      {
        point: "Mean = (31 + 32 + 30) ÷ 3.",
        keywords: [["mean", "mean"]],
      },
      {
        point: "Mean = 31 s.",
        keywords: [["mean", "mean"]],
      },
    ],
    examinerKeywords: ["anomalous result", "mean", "31 s"],
    modelAnswer: "65 s is anomalous. Mean = (31 + 32 + 30) ÷ 3 = 31 s.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Anomalies.",
      "Avoid: Including the anomalous result.",
      "Avoid: Choosing 30 s as anomalous.",
    ],
    examinerTip: "Avoid this common mistake: Including the anomalous result.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the most suitable apparatus for measuring exactly 25.0 cm3 of solution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Pipette.",
        keywords: [["pipette", "pipette"]],
      },
    ],
    examinerKeywords: ["pipette", "25.0 cm3", "accurate volume"],
    modelAnswer: "A pipette.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Think about Measuring volume.", "Avoid: Writing beaker.", "Avoid: Writing test tube."],
    examinerTip: "Avoid this common mistake: Writing beaker.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State the apparatus used to add variable volumes accurately in a titration.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Burette.",
        keywords: [["burette", "burette"]],
      },
    ],
    examinerKeywords: ["burette", "titration", "variable volume"],
    modelAnswer: "A burette.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Think about Titration apparatus.",
      "Avoid: Writing pipette.",
      "Avoid: Writing measuring cylinder.",
    ],
    examinerTip: "Avoid this common mistake: Writing pipette.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["eye level", "level"]],
      },
      {
        point: "Read the bottom of the meniscus.",
        keywords: [["meniscus", "meniscus"]],
      },
    ],
    examinerKeywords: ["measuring cylinder", "eye level", "meniscus"],
    modelAnswer:
      "Place the measuring cylinder on a flat surface and read at eye level from the bottom of the meniscus.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Measuring cylinder.",
      "Avoid: Reading from above.",
      "Avoid: Reading the top of the meniscus.",
    ],
    examinerTip: "Avoid this common mistake: Reading from above.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State suitable apparatus to measure the volume of gas produced in a reaction.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Gas syringe.",
        keywords: [
          ["gas syringe", "syringe"],
          ["gas volume", "volume"],
        ],
      },
    ],
    examinerKeywords: ["gas syringe", "gas volume"],
    modelAnswer: "A gas syringe.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Think about Gas collection.",
      "Avoid: Writing thermometer.",
      "Avoid: Writing balance.",
    ],
    examinerTip: "Avoid this common mistake: Writing thermometer.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how to separate an insoluble solid from a liquid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use filtration.",
        keywords: [["filtration", "filtration"]],
      },
      {
        point: "Pour the mixture through filter paper in a funnel.",
        keywords: [["pour", "mixture", "through"]],
      },
      {
        point: "The solid remains as residue and liquid passes through as filtrate.",
        keywords: [
          ["residue", "residue"],
          ["filtrate", "filtrate"],
        ],
      },
    ],
    examinerKeywords: ["filtration", "residue", "filtrate"],
    modelAnswer:
      "Filter the mixture through filter paper in a funnel. The insoluble solid stays as the residue and the liquid passes through as the filtrate.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Filtration.",
      "Avoid: Using evaporation.",
      "Avoid: Confusing residue and filtrate.",
    ],
    examinerTip: "Avoid this common mistake: Using evaporation.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "acids-bases-and-salts",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how to obtain dry crystals from a salt solution.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Heat the solution to evaporate some water.",
        keywords: [["heat", "solution", "evaporate"]],
      },
      {
        point: "Stop when nearly saturated.",
        keywords: [["stop", "when", "nearly"]],
      },
      {
        point: "Leave to cool.",
        keywords: [["cool", "cool"]],
      },
      {
        point: "Crystals form.",
        keywords: [["crystals", "form"]],
      },
      {
        point: "Filter and dry the crystals.",
        keywords: [["dry"]],
      },
    ],
    examinerKeywords: ["crystallisation", "evaporation", "cool", "dry"],
    modelAnswer:
      "Heat the solution until it is nearly saturated, then leave it to cool so crystals form. Filter and dry the crystals.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Crystallisation.",
      "Avoid: Evaporating completely to dryness.",
      "Avoid: Forgetting cooling.",
    ],
    examinerTip: "Avoid this common mistake: Evaporating completely to dryness.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how to carry out paper chromatography to separate dyes.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Draw a pencil baseline.",
        keywords: [["baseline", "baseline"]],
      },
      {
        point: "Place a small spot of dye on the baseline.",
        keywords: [["baseline", "baseline"]],
      },
      {
        point: "Put paper in solvent below the baseline.",
        keywords: [
          ["baseline", "baseline"],
          ["solvent", "solvent"],
        ],
      },
      {
        point: "Allow solvent to rise.",
        keywords: [["solvent", "solvent"]],
      },
      {
        point: "Different dyes separate because they move different distances.",
        keywords: [["dyes", "dyes"]],
      },
    ],
    examinerKeywords: ["chromatography", "baseline", "solvent", "dyes"],
    modelAnswer:
      "Draw a pencil baseline and place a dye spot on it. Put the paper in solvent with the solvent below the baseline. The solvent rises and separates the dyes.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Chromatography.",
      "Avoid: Drawing baseline in ink.",
      "Avoid: Putting solvent above the spot.",
    ],
    examinerTip: "Avoid this common mistake: Drawing baseline in ink.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["rf = 2.4 ÷ 6.0."]],
      },
      {
        point: "Rf = 0.40.",
        keywords: [["0.40", "0.40"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "0.40"],
    modelAnswer: "Rf = 2.4 ÷ 6.0 = 0.40.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Rf values.",
      "Avoid: Dividing solvent front by spot distance.",
      "Avoid: Adding units to Rf.",
    ],
    examinerTip: "Avoid this common mistake: Dividing solvent front by spot distance.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how to carry out an acid-alkali titration.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a pipette to measure alkali into a conical flask.",
        keywords: [["pipette", "pipette"]],
      },
      {
        point: "Add indicator.",
        keywords: [["indicator", "indicator"]],
      },
      {
        point: "Fill burette with acid.",
        keywords: [["burette", "burette"]],
      },
      {
        point: "Add acid slowly while swirling.",
        keywords: [["acid", "slowly", "while"]],
      },
      {
        point: "Stop at the end-point.",
        keywords: [["end-point", "end-point"]],
      },
      {
        point: "Repeat until concordant titres are obtained.",
        keywords: [["repeat", "until", "concordant"]],
      },
    ],
    examinerKeywords: ["titration", "pipette", "burette", "indicator", "end-point"],
    modelAnswer:
      "Use a pipette to add alkali to a conical flask and add indicator. Fill a burette with acid, add it slowly while swirling, stop at the end-point and repeat until concordant titres are obtained.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Titration.",
      "Avoid: Using a beaker for accurate fixed volume.",
      "Avoid: Only doing one titre.",
    ],
    examinerTip: "Avoid this common mistake: Using a beaker for accurate fixed volume.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate the effect of concentration on rate of reaction between marble chips and hydrochloric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use different concentrations of hydrochloric acid.",
        keywords: [["concentration", "concentration"]],
      },
      {
        point: "Keep volume of acid constant.",
        keywords: [["keep", "volume", "acid"]],
      },
      {
        point: "Keep mass and size of marble chips constant.",
        keywords: [["marble chips", "marble", "chips"]],
      },
      {
        point: "Collect carbon dioxide using a gas syringe.",
        keywords: [["gas syringe", "syringe"]],
      },
      {
        point: "Measure gas volume at regular intervals.",
        keywords: [["gas syringe", "syringe"]],
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
      "Think about Rate practical.",
      "Avoid: Changing concentration and temperature together.",
      "Avoid: Not measuring time.",
    ],
    examinerTip: "Avoid this common mistake: Changing concentration and temperature together.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["lid"]],
      },
      {
        point: "Add more insulation.",
        keywords: [["insulation", "insulation"]],
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
    hints: [
      "Think about Temperature change practical.",
      "Avoid: Using a metal beaker.",
      "Avoid: Leaving the cup uncovered.",
    ],
    examinerTip: "Avoid this common mistake: Using a metal beaker.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State two safety precautions when heating a flammable alcohol.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use a water bath instead of a naked flame.",
        keywords: [["water bath", "water", "bath"]],
      },
      {
        point: "Wear eye protection.",
        keywords: [["eye protection", "protection"]],
      },
      {
        point: "Keep alcohol away from flames.",
        keywords: [["keep", "alcohol", "away"]],
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
    hints: [
      "Think about Safety.",
      "Avoid: Heating directly with a Bunsen burner.",
      "Avoid: Using large volumes.",
    ],
    examinerTip: "Avoid this common mistake: Heating directly with a Bunsen burner.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "State",
    questionText: "State three features of a good graph.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Axes are labelled.",
        keywords: [["axes", "axes"]],
      },
      {
        point: "Units are included.",
        keywords: [["units", "units"]],
      },
      {
        point: "A suitable scale is used.",
        keywords: [["scale", "scale"]],
      },
      {
        point: "Points are plotted accurately.",
        keywords: [["points", "plotted", "accurately"]],
      },
      {
        point: "A line or curve of best fit is drawn.",
        keywords: [["best fit", "best"]],
      },
    ],
    examinerKeywords: ["graph", "axes", "units", "scale", "best fit"],
    modelAnswer:
      "A good graph has labelled axes with units, a suitable scale and accurately plotted points with a best-fit line or curve.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Think about Graph skills.",
      "Avoid: Forgetting units.",
      "Avoid: Using an uneven scale.",
    ],
    examinerTip: "Avoid this common mistake: Forgetting units.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain the difference between accuracy and precision.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Accuracy is closeness to the true value.",
        keywords: [
          ["accuracy", "accuracy"],
          ["true value", "true", "value"],
        ],
      },
      {
        point: "Precision is closeness of repeat readings to each other.",
        keywords: [
          ["precision", "precision"],
          ["repeat readings", "repeat", "readings"],
        ],
      },
      {
        point: "Accurate results are near the accepted value.",
        keywords: [["true value", "true", "value"]],
      },
      {
        point: "Precise results have a small spread.",
        keywords: [["precise", "results", "have"]],
      },
    ],
    examinerKeywords: ["accuracy", "precision", "true value", "repeat readings"],
    modelAnswer:
      "Accuracy is how close a result is to the true value. Precision is how close repeat readings are to each other.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Accuracy vs precision.",
      "Avoid: Saying accuracy and precision are identical.",
      "Avoid: Forgetting repeat readings for precision.",
    ],
    examinerTip: "Avoid this common mistake: Saying accuracy and precision are identical.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain why a precipitate is washed with distilled water before drying.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Washing removes soluble impurities.",
        keywords: [["soluble impurities", "soluble", "impurities"]],
      },
      {
        point: "Distilled water does not add extra dissolved ions.",
        keywords: [["distilled water", "distilled", "water"]],
      },
      {
        point: "This gives a purer precipitate.",
        keywords: [
          ["precipitate", "precipitate"],
          ["pure", "pure"],
        ],
      },
    ],
    examinerKeywords: ["precipitate", "distilled water", "soluble impurities", "pure"],
    modelAnswer:
      "The precipitate is washed with distilled water to remove soluble impurities without adding extra ions, giving a purer solid.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Think about Precipitate washing.",
      "Avoid: Washing with tap water.",
      "Avoid: Saying washing dries the precipitate.",
    ],
    examinerTip: "Avoid this common mistake: Washing with tap water.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe tests for hydrogen, oxygen and carbon dioxide.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Hydrogen is tested with a lighted splint.",
        keywords: [
          ["hydrogen", "hydrogen"],
          ["splint", "splint"],
        ],
      },
      {
        point: "Hydrogen gives a squeaky pop.",
        keywords: [["hydrogen", "hydrogen"]],
      },
      {
        point: "Oxygen is tested with a glowing splint.",
        keywords: [
          ["oxygen", "oxygen"],
          ["splint", "splint"],
        ],
      },
      {
        point: "Oxygen relights the glowing splint.",
        keywords: [
          ["oxygen", "oxygen"],
          ["splint", "splint"],
        ],
      },
      {
        point: "Carbon dioxide is bubbled through limewater.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["limewater", "limewater"],
        ],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["limewater", "limewater"],
        ],
      },
    ],
    examinerKeywords: ["hydrogen", "oxygen", "carbon dioxide", "splint", "limewater"],
    modelAnswer:
      "Hydrogen gives a squeaky pop with a lighted splint. Oxygen relights a glowing splint. Carbon dioxide turns limewater milky.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Think about Gas tests.",
      "Avoid: Using the wrong splint test.",
      "Avoid: Forgetting limewater for carbon dioxide.",
    ],
    examinerTip: "Avoid this common mistake: Using the wrong splint test.",
  },
  {
    id: "oxfordaqa-chemistry-practical-skills-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["variables", "variables"]],
      },
      {
        point: "Use suitable apparatus.",
        keywords: [["suitable", "apparatus"]],
      },
      {
        point: "Repeat readings and calculate a mean.",
        keywords: [["repeat", "repeat"]],
      },
      {
        point: "Identify anomalous results and follow safety precautions.",
        keywords: [["safety", "safety"]],
      },
    ],
    examinerKeywords: ["valid", "reliable", "variables", "repeat", "safety"],
    modelAnswer:
      "A valid experiment changes only the independent variable and keeps control variables constant. The dependent variable should be measured accurately using suitable apparatus. Repeats should be done, anomalies identified and a mean calculated, while following safety precautions.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extended response.",
      "Avoid: Changing several variables at once.",
      "Avoid: Not repeating the experiment.",
    ],
    examinerTip: "Avoid this common mistake: Changing several variables at once.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why sodium chloride has a high melting point and conducts electricity when molten.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Sodium chloride has a giant ionic lattice.",
        keywords: [
          ["sodium chloride", "sodium", "chloride"],
          ["ionic lattice", "ionic", "lattice"],
        ],
      },
      {
        point: "Strong electrostatic attractions exist between oppositely charged ions.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
      {
        point: "A lot of energy is needed to overcome these attractions.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
      {
        point: "Solid sodium chloride has ions fixed in position.",
        keywords: [
          ["sodium chloride", "sodium", "chloride"],
          ["mobile ions", "mobile", "ions"],
        ],
      },
      {
        point: "Molten sodium chloride has mobile ions.",
        keywords: [
          ["sodium chloride", "sodium", "chloride"],
          ["mobile ions", "mobile", "ions"],
        ],
      },
      {
        point: "Mobile ions carry charge.",
        keywords: [["mobile ions", "mobile", "ions"]],
      },
    ],
    examinerKeywords: ["sodium chloride", "ionic lattice", "melting point", "mobile ions"],
    modelAnswer:
      "Sodium chloride has a giant ionic lattice with strong attractions between oppositely charged ions, so it has a high melting point. It conducts when molten because the ions are mobile and carry charge.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Bonding and properties.",
      "Avoid: Saying electrons conduct in molten sodium chloride.",
      "Avoid: Forgetting giant ionic lattice.",
    ],
    examinerTip: "Avoid this common mistake: Saying electrons conduct in molten sodium chloride.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how concentration affects rate of reaction and how this can be investigated.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Higher concentration means more particles per unit volume.",
        keywords: [["concentration", "concentration"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
      {
        point: "There are more successful collisions per second.",
        keywords: [["collisions", "collisions"]],
      },
      {
        point: "Use different acid concentrations.",
        keywords: [["concentration", "concentration"]],
      },
      {
        point: "Keep temperature, volume and mass or surface area constant.",
        keywords: [["keep", "temperature", "volume"]],
      },
      {
        point: "Measure gas volume over time or time for fixed volume of gas.",
        keywords: [["measure", "volume", "over"]],
      },
    ],
    examinerKeywords: ["concentration", "rate", "collisions", "control variables"],
    modelAnswer:
      "Higher concentration gives more particles per unit volume, so collisions and successful collisions are more frequent. Investigate using different acid concentrations while keeping temperature, volume and solid mass or surface area constant, then measure gas volume over time.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Rates and practicals.",
      "Avoid: Saying concentration changes activation energy.",
      "Avoid: Not controlling variables.",
    ],
    examinerTip: "Avoid this common mistake: Saying concentration changes activation energy.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare the extraction of aluminium and iron.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Aluminium is more reactive than carbon.",
        keywords: [
          ["aluminium", "aluminium"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Aluminium is extracted by electrolysis.",
        keywords: [
          ["aluminium", "aluminium"],
          ["electrolysis", "electrolysis"],
        ],
      },
      {
        point: "Aluminium oxide is dissolved in molten cryolite.",
        keywords: [["aluminium", "aluminium"]],
      },
      {
        point: "Iron is less reactive than carbon.",
        keywords: [
          ["iron", "iron"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Iron oxide is reduced by carbon monoxide.",
        keywords: [
          ["iron", "iron"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Iron is extracted in a blast furnace.",
        keywords: [
          ["iron", "iron"],
          ["blast furnace", "blast", "furnace"],
        ],
      },
    ],
    examinerKeywords: ["aluminium", "iron", "electrolysis", "blast furnace", "carbon monoxide"],
    modelAnswer:
      "Aluminium is more reactive than carbon, so it is extracted by electrolysis of aluminium oxide dissolved in molten cryolite. Iron is less reactive than carbon, so iron oxide is reduced by carbon monoxide in a blast furnace.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Extraction.",
      "Avoid: Saying aluminium is extracted with carbon.",
      "Avoid: Saying iron needs electrolysis.",
    ],
    examinerTip: "Avoid this common mistake: Saying aluminium is extracted with carbon.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText: "Describe how ethene can be converted into ethanol and then into ethanoic acid.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Ethene reacts with steam.",
        keywords: [
          ["ethene", "ethene"],
          ["steam", "steam"],
        ],
      },
      {
        point: "A phosphoric acid catalyst is used.",
        keywords: [["ethanoic acid", "ethanoic", "acid"]],
      },
      {
        point: "Ethanol is formed.",
        keywords: [["ethanol", "ethanol"]],
      },
      {
        point: "Ethanol is oxidised.",
        keywords: [["ethanol", "ethanol"]],
      },
      {
        point: "Ethanoic acid is formed.",
        keywords: [["ethanoic acid", "ethanoic", "acid"]],
      },
    ],
    examinerKeywords: ["ethene", "ethanol", "steam", "oxidation", "ethanoic acid"],
    modelAnswer:
      "Ethene reacts with steam using a phosphoric acid catalyst to form ethanol. Ethanol can then be oxidised using an oxidising agent to form ethanoic acid.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Organic pathways.",
      "Avoid: Saying ethene is fermented.",
      "Avoid: Skipping ethanol.",
    ],
    examinerTip: "Avoid this common mistake: Saying ethene is fermented.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain the environmental problems caused by burning fossil fuels.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Complete combustion produces carbon dioxide.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Carbon dioxide is a greenhouse gas.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Incomplete combustion produces carbon monoxide.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Carbon monoxide is toxic.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["carbon monoxide", "carbon", "monoxide"],
        ],
      },
      {
        point: "Sulfur dioxide and oxides of nitrogen can form.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
      {
        point: "Sulfur dioxide and oxides of nitrogen cause acid rain.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["acid rain", "acid", "rain"],
        ],
      },
    ],
    examinerKeywords: ["fossil fuels", "carbon dioxide", "carbon monoxide", "acid rain"],
    modelAnswer:
      "Burning fossil fuels produces carbon dioxide, a greenhouse gas. Incomplete combustion produces toxic carbon monoxide. Sulfur dioxide and oxides of nitrogen may also form, causing acid rain.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Fossil fuels.",
      "Avoid: Only mentioning carbon dioxide.",
      "Avoid: Confusing carbon monoxide with carbon dioxide.",
    ],
    examinerTip: "Avoid this common mistake: Only mentioning carbon dioxide.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "periodicity",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare the reactivity trends in Group 1 and Group 7.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Group 1 elements have one outer electron.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "Group 1 reactivity increases down the group.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "The outer electron is lost more easily down Group 1.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "Group 7 elements have seven outer electrons.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "Group 7 reactivity decreases down the group.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
      {
        point: "It becomes harder to gain an electron down Group 7.",
        keywords: [
          ["Group 1", "group"],
          ["Group 7", "group"],
        ],
      },
    ],
    examinerKeywords: ["Group 1", "Group 7", "outer electrons", "reactivity"],
    modelAnswer:
      "Group 1 metals lose one outer electron and become more reactive down the group because this electron is lost more easily. Group 7 elements gain one electron and become less reactive down the group because gaining an electron becomes harder.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Periodic trends.",
      "Avoid: Saying Group 7 loses electrons.",
      "Avoid: Using the same trend for both groups.",
    ],
    examinerTip: "Avoid this common mistake: Saying Group 7 loses electrons.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Describe",
    questionText:
      "Describe how to make pure dry crystals of a soluble salt from an acid and an insoluble base.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Warm the acid.",
        keywords: [["warm", "acid"]],
      },
      {
        point: "Add excess insoluble base.",
        keywords: [
          ["soluble salt", "soluble", "salt"],
          ["excess base", "excess", "base"],
        ],
      },
      {
        point: "Stir until no more reacts.",
        keywords: [["stir", "until", "more"]],
      },
      {
        point: "Filter off excess base.",
        keywords: [
          ["excess base", "excess", "base"],
          ["filter", "filter"],
        ],
      },
      {
        point: "Heat filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry crystals.",
        keywords: [["filter", "filter"]],
      },
    ],
    examinerKeywords: ["soluble salt", "excess base", "filter", "crystallisation"],
    modelAnswer:
      "Warm the acid and add excess insoluble base while stirring. Filter off the excess base, then heat the filtrate until nearly saturated. Cool to form crystals, then filter and dry them.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Salt preparation.",
      "Avoid: Not using excess base.",
      "Avoid: Evaporating to complete dryness.",
    ],
    examinerTip: "Avoid this common mistake: Not using excess base.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [
          ["temperature", "temperature"],
          ["yield", "yield"],
        ],
      },
      {
        point: "A compromise temperature is used.",
        keywords: [["temperature", "temperature"]],
      },
      {
        point: "High pressure favours the side with fewer gas molecules.",
        keywords: [["pressure", "pressure"]],
      },
      {
        point: "High pressure increases ammonia yield but is expensive.",
        keywords: [
          ["pressure", "pressure"],
          ["yield", "yield"],
        ],
      },
      {
        point: "Iron catalyst increases rate but does not change equilibrium yield.",
        keywords: [
          ["catalyst", "catalyst"],
          ["yield", "yield"],
        ],
      },
    ],
    examinerKeywords: ["Haber process", "temperature", "pressure", "catalyst", "yield"],
    modelAnswer:
      "The forward Haber reaction is exothermic, so lower temperature gives higher ammonia yield but slower rate, so a compromise is used. High pressure favours ammonia because there are fewer gas molecules on the product side. Iron catalyst increases rate but not yield.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Haber process.",
      "Avoid: Saying catalysts increase yield.",
      "Avoid: Forgetting compromise conditions.",
    ],
    examinerTip: "Avoid this common mistake: Saying catalysts increase yield.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl2 + H2. Calculate the volume of hydrogen produced from 4.8 g magnesium at room temperature and pressure. Ar: Mg = 24. Molar gas volume = 24 dm3/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles Mg = 4.8 ÷ 24 = 0.20 mol.",
        keywords: [["4.8 dm3"]],
      },
      {
        point: "Ratio Mg : H2 is 1 : 1.",
        keywords: [["ratio"]],
      },
      {
        point: "Moles H2 = 0.20 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Volume = moles × 24.",
        keywords: [["gas volume", "volume"]],
      },
      {
        point: "Volume = 4.8 dm3.",
        keywords: [["gas volume", "volume"], ["4.8 dm3"]],
      },
    ],
    examinerKeywords: ["magnesium", "hydrogen", "gas volume", "4.8 dm3"],
    modelAnswer:
      "Moles Mg = 4.8 ÷ 24 = 0.20 mol. Ratio Mg:H2 is 1:1, so 0.20 mol H2 forms. Volume = 0.20 × 24 = 4.8 dm3.",
    difficulty: "hard",
    suggestedMinutes: 7,
    hints: [
      "Think about Gas volume calculation.",
      "Avoid: Using the 2 before HCl incorrectly.",
      "Avoid: Forgetting gas volume.",
    ],
    examinerTip: "Avoid this common mistake: Using the 2 before HCl incorrectly.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "A salt gives a yellow flame and forms a white precipitate with acidified silver nitrate. Identify the salt and explain your answer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Yellow flame shows sodium ions.",
        keywords: [
          ["yellow flame", "yellow", "flame"],
          ["sodium chloride", "sodium", "chloride"],
        ],
      },
      {
        point: "White precipitate with acidified silver nitrate shows chloride ions.",
        keywords: [
          ["white precipitate", "white", "precipitate"],
          ["sodium chloride", "sodium", "chloride"],
        ],
      },
      {
        point: "The salt is sodium chloride.",
        keywords: [["sodium chloride", "sodium", "chloride"]],
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
    hints: [
      "Think about Chemical analysis.",
      "Avoid: Writing potassium chloride.",
      "Avoid: Ignoring one test.",
    ],
    examinerTip: "Avoid this common mistake: Writing potassium chloride.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
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
        keywords: [["lead bromide", "lead", "bromide"]],
      },
      {
        point: "Gain of electrons is reduction.",
        keywords: [["reduction", "reduction"]],
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
        keywords: [["oxidation", "oxidation"]],
      },
    ],
    examinerKeywords: ["electrolysis", "oxidation", "reduction", "lead bromide"],
    modelAnswer:
      "Pb2+ ions move to the cathode and gain electrons to form lead, so they are reduced. Br- ions move to the anode and lose electrons to form bromine, so they are oxidised.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Electrolysis redox.",
      "Avoid: Reversing oxidation and reduction.",
      "Avoid: Putting lead ions at the anode.",
    ],
    examinerTip: "Avoid this common mistake: Reversing oxidation and reduction.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain why combustion of methane is exothermic in terms of bond breaking and bond making.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Energy is taken in to break bonds in methane and oxygen.",
        keywords: [
          ["methane", "methane"],
          ["bond energy", "bond", "energy"],
        ],
      },
      {
        point: "Energy is released when bonds form in carbon dioxide and water.",
        keywords: [["bond energy", "bond", "energy"]],
      },
      {
        point: "More energy is released making bonds than is taken in breaking bonds.",
        keywords: [["bond energy", "bond", "energy"]],
      },
      {
        point: "Energy is transferred to surroundings.",
        keywords: [["bond energy", "bond", "energy"]],
      },
    ],
    examinerKeywords: ["methane", "combustion", "exothermic", "bond energy"],
    modelAnswer:
      "Energy is taken in to break bonds in methane and oxygen. More energy is released when bonds form in carbon dioxide and water, so the reaction is exothermic.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Bond energy.",
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Not comparing energy in and out.",
    ],
    examinerTip: "Avoid this common mistake: Saying bond breaking releases energy.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText:
      "Explain how water can be made potable and how pure water can be obtained from sea water.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Sedimentation removes large solids.",
        keywords: [["sedimentation", "removes", "large"]],
      },
      {
        point: "Filtration removes insoluble particles.",
        keywords: [["filtration", "filtration"]],
      },
      {
        point: "Chlorination kills microorganisms.",
        keywords: [["chlorination", "chlorination"]],
      },
      {
        point: "Sea water contains dissolved salts.",
        keywords: [["potable water", "potable", "water"]],
      },
      {
        point: "Distillation evaporates water and leaves salts behind.",
        keywords: [
          ["potable water", "potable", "water"],
          ["distillation", "distillation"],
        ],
      },
      {
        point: "Water vapour condenses to form pure water.",
        keywords: [["potable water", "potable", "water"]],
      },
    ],
    examinerKeywords: ["potable water", "filtration", "chlorination", "distillation"],
    modelAnswer:
      "Potable water is made by sedimentation, filtration and chlorination. Pure water can be obtained from sea water by distillation: water evaporates, salts remain, and the vapour condenses.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Water treatment.",
      "Avoid: Saying filtration removes dissolved salts.",
      "Avoid: Forgetting condensation.",
    ],
    examinerTip: "Avoid this common mistake: Saying filtration removes dissolved salts.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how alkenes form polymers and why polymer disposal can be a problem.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Alkenes contain carbon-carbon double bonds.",
        keywords: [["alkenes", "alkenes"]],
      },
      {
        point: "The double bond opens during addition polymerisation.",
        keywords: [["addition polymerisation", "addition", "polymerisation"]],
      },
      {
        point: "Many monomers join to form long polymer chains.",
        keywords: [["many", "monomers", "join"]],
      },
      {
        point: "Many polymers are non-biodegradable.",
        keywords: [["non-biodegradable", "non-biodegradable"]],
      },
      {
        point: "They remain in landfill for a long time.",
        keywords: [["they", "remain", "landfill"]],
      },
      {
        point: "They may harm wildlife or release toxic gases when burned.",
        keywords: [["they", "harm", "wildlife"]],
      },
    ],
    examinerKeywords: ["alkenes", "addition polymerisation", "non-biodegradable", "disposal"],
    modelAnswer:
      "Alkenes form polymers when their double bonds open and many monomers join in addition polymerisation. Disposal is difficult because many polymers are non-biodegradable, stay in landfill, harm wildlife and may release toxic gases when burned.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Polymers.",
      "Avoid: Saying addition polymerisation produces water.",
      "Avoid: Saying all polymers biodegrade quickly.",
    ],
    examinerTip: "Avoid this common mistake: Saying addition polymerisation produces water.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Identify",
    questionText:
      "A solid reacts with dilute acid to produce a gas that turns limewater milky. Identify the ion and write the general word equation.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Carbonate ions are present.",
        keywords: [
          ["carbonate", "carbonate"],
          ["carbon dioxide", "carbon", "dioxide"],
        ],
      },
      {
        point: "Gas is carbon dioxide.",
        keywords: [["carbon dioxide", "carbon", "dioxide"]],
      },
      {
        point: "Carbon dioxide turns limewater milky.",
        keywords: [
          ["carbon dioxide", "carbon", "dioxide"],
          ["limewater", "limewater"],
        ],
      },
      {
        point: "acid + carbonate → salt + water + carbon dioxide.",
        keywords: [
          ["carbonate", "carbonate"],
          ["carbon dioxide", "carbon", "dioxide"],
        ],
      },
    ],
    examinerKeywords: ["carbonate", "carbon dioxide", "limewater", "word equation"],
    modelAnswer:
      "The solid contains carbonate ions. The gas is carbon dioxide. The general equation is acid + carbonate → salt + water + carbon dioxide.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Think about Carbonate analysis.",
      "Avoid: Writing sulfate ions.",
      "Avoid: Forgetting water.",
    ],
    examinerTip: "Avoid this common mistake: Writing sulfate ions.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain the conditions needed for rusting and how galvanising prevents rusting.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Rusting requires water.",
        keywords: [
          ["rusting", "rusting"],
          ["water", "water"],
        ],
      },
      {
        point: "Rusting requires oxygen.",
        keywords: [
          ["rusting", "rusting"],
          ["oxygen", "oxygen"],
        ],
      },
      {
        point: "Galvanising coats iron with zinc.",
        keywords: [
          ["galvanising", "galvanising"],
          ["zinc", "zinc"],
        ],
      },
      {
        point: "Zinc acts as a barrier.",
        keywords: [["zinc", "zinc"]],
      },
      {
        point: "Zinc is more reactive than iron.",
        keywords: [["zinc", "zinc"]],
      },
      {
        point: "Zinc gives sacrificial protection if scratched.",
        keywords: [["zinc", "zinc"]],
      },
    ],
    examinerKeywords: ["rusting", "water", "oxygen", "galvanising", "zinc"],
    modelAnswer:
      "Iron rusts when water and oxygen are present. Galvanising coats iron with zinc, which acts as a barrier. If scratched, zinc corrodes instead because it is more reactive, giving sacrificial protection.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Rusting.",
      "Avoid: Saying only oxygen is needed.",
      "Avoid: Forgetting sacrificial protection.",
    ],
    examinerTip: "Avoid this common mistake: Saying only oxygen is needed.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how chromatography and Rf values can identify substances.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Substances move different distances on chromatography paper.",
        keywords: [["chromatography", "chromatography"]],
      },
      {
        point: "A pure substance gives one spot.",
        keywords: [["pure", "pure"]],
      },
      {
        point: "A mixture gives more than one spot.",
        keywords: [["mixture", "mixture"]],
      },
      {
        point: "Rf values can be calculated.",
        keywords: [["values", "calculated"]],
      },
      {
        point: "Rf values can be compared with known substances using the same solvent.",
        keywords: [["values", "compared", "with"]],
      },
    ],
    examinerKeywords: ["chromatography", "Rf", "pure", "mixture"],
    modelAnswer:
      "Chromatography separates substances because they move different distances. Pure substances give one spot and mixtures give more than one. Rf values can be compared with known substances using the same solvent.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Think about Chromatography.",
      "Avoid: Comparing Rf values from different solvents.",
      "Avoid: Saying mixtures always give one spot.",
    ],
    examinerTip: "Avoid this common mistake: Comparing Rf values from different solvents.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText:
      "Compare alkanes, alkenes, alcohols and carboxylic acids using functional groups and reactions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Alkanes are saturated hydrocarbons with single carbon-carbon bonds.",
        keywords: [["alkanes", "alkanes"]],
      },
      {
        point: "Alkanes undergo combustion.",
        keywords: [["alkanes", "alkanes"]],
      },
      {
        point: "Alkenes contain carbon-carbon double bonds.",
        keywords: [["alkenes", "alkenes"]],
      },
      {
        point: "Alkenes decolourise bromine water and undergo addition reactions.",
        keywords: [["alkenes", "alkenes"]],
      },
      {
        point: "Alcohols contain the -OH functional group and can be oxidised.",
        keywords: [
          ["alcohols", "alcohols"],
          ["functional group", "functional", "group"],
        ],
      },
      {
        point: "Carboxylic acids contain the -COOH functional group and react with carbonates.",
        keywords: [
          ["carboxylic acids", "carboxylic", "acids"],
          ["functional group", "functional", "group"],
        ],
      },
    ],
    examinerKeywords: ["alkanes", "alkenes", "alcohols", "carboxylic acids", "functional group"],
    modelAnswer:
      "Alkanes are saturated hydrocarbons and combust. Alkenes contain C=C bonds, decolourise bromine water and undergo addition. Alcohols contain -OH and can be oxidised. Carboxylic acids contain -COOH and react with carbonates.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Organic comparison.",
      "Avoid: Confusing -OH and -COOH.",
      "Avoid: Saying alkanes contain C=C.",
    ],
    examinerTip: "Avoid this common mistake: Confusing -OH and -COOH.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Compare",
    questionText: "Compare ionic, covalent and metallic bonding.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic bonding involves electron transfer.",
        keywords: [["ionic", "ionic"]],
      },
      {
        point: "Ionic bonding is attraction between oppositely charged ions.",
        keywords: [["ionic", "ionic"]],
      },
      {
        point: "Covalent bonding involves sharing pairs of electrons.",
        keywords: [
          ["covalent", "covalent"],
          ["electrons", "electrons"],
        ],
      },
      {
        point: "Covalent bonding usually occurs between non-metals.",
        keywords: [["covalent", "covalent"]],
      },
      {
        point:
          "Metallic bonding is attraction between positive metal ions and delocalised electrons.",
        keywords: [
          ["metallic", "metallic"],
          ["electrons", "electrons"],
        ],
      },
      {
        point: "Delocalised electrons allow metals to conduct.",
        keywords: [["electrons", "electrons"]],
      },
    ],
    examinerKeywords: ["ionic", "covalent", "metallic", "electrons"],
    modelAnswer:
      "Ionic bonding involves electron transfer and attraction between oppositely charged ions. Covalent bonding involves shared pairs of electrons between non-metals. Metallic bonding is attraction between positive metal ions and delocalised electrons.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Bonding comparison.",
      "Avoid: Saying ionic bonding is sharing.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip: "Avoid this common mistake: Saying ionic bonding is sharing.",
  },
  {
    id: "oxfordaqa-chemistry-synoptic-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 1 / Paper 2",
    paperType: "Theory",
    questionType: "Explain",
    questionText: "Explain how particles, electrons and energy link different areas of chemistry.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Particle theory explains states of matter and rates.",
        keywords: [["rates", "rates"]],
      },
      {
        point: "Electron transfer explains ionic bonding, redox and electrolysis.",
        keywords: [["bonding", "bonding"]],
      },
      {
        point: "Shared electrons explain covalent bonding.",
        keywords: [
          ["electrons", "electrons"],
          ["bonding", "bonding"],
        ],
      },
      {
        point: "Delocalised electrons explain metallic conductivity.",
        keywords: [["electrons", "electrons"]],
      },
      {
        point: "Energy changes explain exothermic and endothermic reactions.",
        keywords: [["energy", "energy"]],
      },
      {
        point: "Activation energy and collision theory explain rates.",
        keywords: [
          ["energy", "energy"],
          ["rates", "rates"],
        ],
      },
    ],
    examinerKeywords: ["particles", "electrons", "energy", "bonding", "rates"],
    modelAnswer:
      "Particles explain states of matter and collision theory. Electron transfer explains ionic bonding, redox and electrolysis. Shared electrons explain covalent bonding and delocalised electrons explain metallic conductivity. Energy changes explain exothermic and endothermic reactions, while activation energy explains rates.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Think about Whole-course synoptic.",
      "Avoid: Only discussing one topic.",
      "Avoid: Not linking examples to particles, electrons or energy.",
    ],
    examinerTip: "Avoid this common mistake: Only discussing one topic.",
  },
];
