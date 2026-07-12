import type { Question } from "./questionBank";

export const AQA_CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: "aqa-chemistry-atomic-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
        point: "It cannot be broken down into simpler substances by chemical means.",
        keywords: [["cannot", "broken", "down"]],
      },
    ],
    examinerKeywords: ["element", "one type of atom", "chemical means"],
    modelAnswer:
      "An element is a substance that contains only one type of atom and cannot be broken down into simpler substances by chemical means.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying an element contains different atoms chemically bonded.",
      "Avoid: Confusing element with compound.",
      "Avoid: Forgetting one type of atom.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atoms, elements and compounds. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Saying compounds are mixtures.",
      "Avoid: Forgetting chemically bonded.",
      "Avoid: Saying compounds have variable composition.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Compounds. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the difference between a compound and a mixture.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A compound contains elements chemically bonded.",
        keywords: [["compound", "contains", "elements"]],
      },
      {
        point: "A mixture contains substances not chemically bonded.",
        keywords: [["mixture", "contains", "substances"]],
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
      "A compound contains elements chemically bonded in fixed proportions. A mixture contains substances that are not chemically bonded and can be separated by physical methods.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying mixtures are chemically bonded.",
      "Avoid: Saying compounds can be separated by filtration.",
      "Avoid: Forgetting physical separation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Mixtures. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Saying neutrons are positive.",
      "Avoid: Saying electrons are positive.",
      "Avoid: Confusing charge with mass.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atomic structure. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
      "Protons and neutrons each have relative mass 1. Electrons have a very small relative mass, often treated as negligible.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying electrons have mass 1.",
      "Avoid: Saying neutrons have no mass.",
      "Avoid: Confusing mass and charge.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atomic structure. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has atomic number 17 and mass number 35. Calculate the number of protons, neutrons and electrons.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of protons = 17.",
        keywords: [["protons"]],
      },
      {
        point: "Number of electrons = 17 in a neutral atom.",
        keywords: [["electrons", "neutral", "atom"]],
      },
      {
        point: "Number of neutrons = mass number - atomic number.",
        keywords: [["neutrons", "mass", "atomic"]],
      },
      {
        point: "Number of neutrons = 35 - 17 = 18.",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["atomic number", "mass number", "protons", "neutrons", "electrons"],
    modelAnswer:
      "The atom has 17 protons. Since it is neutral, it has 17 electrons. Neutrons = 35 - 17 = 18.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Adding atomic number and mass number.",
      "Avoid: Forgetting electrons equal protons in a neutral atom.",
      "Avoid: Including electrons in mass number.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atomic number and mass number. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
      "Avoid: Forgetting neutrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Isotopes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
    examinerKeywords: ["isotopes", "chemical properties", "electrons", "outer shell"],
    modelAnswer:
      "Isotopes of the same element have the same number of electrons and the same electronic structure. Chemical properties depend on outer-shell electrons, so isotopes react in the same way.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying neutrons control chemical properties.",
      "Avoid: Saying isotopes have different electronic structures.",
      "Avoid: Forgetting outer-shell electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Isotopes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Chlorine has isotopes chlorine-35 and chlorine-37. 75% of chlorine atoms are chlorine-35 and 25% are chlorine-37. Calculate the relative atomic mass of chlorine.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Multiply each isotope mass by its percentage abundance.",
        keywords: [["multiply", "each", "isotope"]],
      },
      {
        point: "(35 × 75) + (37 × 25).",
        keywords: [["relative atomic mass", "isotopes"]],
      },
      {
        point: "Divide by 100.",
        keywords: [["divide"]],
      },
      {
        point: "Relative atomic mass = 35.5.",
        keywords: [["relative", "atomic", "mass"]],
      },
    ],
    examinerKeywords: ["relative atomic mass", "isotopes", "abundance", "35.5"],
    modelAnswer: "Relative atomic mass = ((35 × 75) + (37 × 25)) ÷ 100 = 35.5.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Averaging 35 and 37 to get 36 without using abundance.",
      "Avoid: Forgetting to divide by 100.",
      "Avoid: Using 75 and 25 as decimals incorrectly.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Relative atomic mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Write",
    questionText: "Write the electronic structure of an atom with 13 electrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "First shell contains 2 electrons.",
        keywords: [["first", "shell", "contains"]],
      },
      {
        point: "Electronic structure is 2,8,3.",
        keywords: [["electronic", "structure"]],
      },
    ],
    examinerKeywords: ["electronic structure", "13 electrons", "2,8,3"],
    modelAnswer: "2,8,3",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing 2,3,8.",
      "Avoid: Putting too many electrons in the first shell.",
      "Avoid: Forgetting the second shell holds 8.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electronic structure. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
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
      "The plum pudding model described the atom as a sphere of positive charge with negative electrons embedded in it. It did not include a nucleus.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the plum pudding model had a nucleus.",
      "Avoid: Saying electrons orbited in shells.",
      "Avoid: Forgetting positive charge.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Development of the atom. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how the alpha particle scattering experiment led to the nuclear model of the atom.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Most alpha particles passed straight through the gold foil.",
        keywords: [["most", "alpha", "particles"]],
      },
      {
        point: "This showed the atom is mostly empty space.",
        keywords: [["showed", "atom", "mostly"]],
      },
      {
        point: "Some alpha particles were deflected.",
        keywords: [["some", "alpha", "particles"]],
      },
      {
        point: "This showed there is a small positive nucleus.",
        keywords: [["showed", "small", "positive"]],
      },
      {
        point: "A few alpha particles were reflected backwards.",
        keywords: [["alpha", "particles", "were"]],
      },
      {
        point: "This showed the nucleus is dense and contains most of the atom's mass.",
        keywords: [["showed", "nucleus", "dense"]],
      },
    ],
    examinerKeywords: ["alpha scattering", "gold foil", "nucleus", "mostly empty space", "dense"],
    modelAnswer:
      "Most alpha particles passed straight through, showing the atom is mostly empty space. Some were deflected, showing there is a small positive nucleus. A few were reflected backwards, showing the nucleus is dense and contains most of the atom's mass.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying most particles bounced back.",
      "Avoid: Forgetting the atom is mostly empty space.",
      "Avoid: Not linking observations to conclusions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alpha scattering. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State how elements are arranged in the modern periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Elements are arranged in order of increasing atomic number.",
        keywords: [["elements", "arranged", "order"]],
      },
      {
        point: "Elements with similar chemical properties are in the same group.",
        keywords: [["elements", "similar", "chemical"]],
      },
    ],
    examinerKeywords: ["periodic table", "atomic number", "groups", "similar properties"],
    modelAnswer:
      "Elements are arranged in order of increasing atomic number, with elements that have similar chemical properties in the same group.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying elements are arranged only by mass.",
      "Avoid: Saying groups are horizontal rows.",
      "Avoid: Forgetting atomic number.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Periodic table. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why Mendeleev left gaps in his periodic table.",
    marks: 3,
    markSchemePoints: [
      {
        point: "He left gaps for undiscovered elements.",
        keywords: [["left", "gaps", "undiscovered"]],
      },
      {
        point: "He predicted the properties of these elements.",
        keywords: [["predicted", "properties", "these"]],
      },
      {
        point: "The later discovery of these elements supported his periodic table.",
        keywords: [["later", "discovery", "these"]],
      },
    ],
    examinerKeywords: ["Mendeleev", "gaps", "undiscovered elements", "predicted properties"],
    modelAnswer:
      "Mendeleev left gaps for elements that had not yet been discovered. He predicted their properties, and later discoveries supported his periodic table.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying he left gaps by accident only.",
      "Avoid: Forgetting predictions.",
      "Avoid: Saying all elements were already known.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Mendeleev. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how group number and period number are linked to electronic structure.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "For main group elements, group number is linked to the number of outer-shell electrons.",
        keywords: [["main", "group", "elements"]],
      },
      {
        point: "Elements in the same group have the same number of outer-shell electrons.",
        keywords: [["elements", "same", "group"]],
      },
      {
        point: "Period number shows the number of occupied electron shells.",
        keywords: [["period", "shows", "occupied"]],
      },
      {
        point: "Elements in the same period have the same number of occupied shells.",
        keywords: [["elements", "same", "period"]],
      },
    ],
    examinerKeywords: ["group", "period", "outer-shell electrons", "electron shells"],
    modelAnswer:
      "For main group elements, the group number is linked to the number of outer-shell electrons. The period number shows the number of occupied electron shells.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying group number equals number of shells.",
      "Avoid: Saying period number equals number of outer electrons.",
      "Avoid: Forgetting outer-shell electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Groups and periods. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the general positions of metals and non-metals in the periodic table.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Metals are mainly on the left and centre.",
        keywords: [["metals", "mainly", "left"]],
      },
      {
        point: "Non-metals are mainly on the right.",
        keywords: [["non-metals", "mainly", "right"]],
      },
    ],
    examinerKeywords: ["metals", "non-metals", "left", "right"],
    modelAnswer:
      "Metals are mainly on the left and centre of the periodic table. Non-metals are mainly on the right.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying metals are mainly on the right.",
      "Avoid: Saying non-metals are mainly on the left.",
      "Avoid: Ignoring transition metals in the centre.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Metals and non-metals. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe and explain the trend in reactivity down Group 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Reactivity increases down Group 1.",
        keywords: [["reactivity", "increases", "down"]],
      },
      {
        point: "Atoms get larger down the group.",
        keywords: [["atoms", "larger", "down"]],
      },
      {
        point: "The outer electron is further from the nucleus.",
        keywords: [["outer", "electron", "further"]],
      },
      {
        point: "The outer electron is lost more easily.",
        keywords: [["outer", "electron", "lost"]],
      },
    ],
    examinerKeywords: ["Group 1", "reactivity increases", "outer electron", "lost easily"],
    modelAnswer:
      "Reactivity increases down Group 1 because atoms get larger and the outer electron is further from the nucleus, so it is lost more easily.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying reactivity decreases down Group 1.",
      "Avoid: Explaining using gaining electrons.",
      "Avoid: Forgetting outer electron loss.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Group 1. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe and explain the trend in reactivity down Group 7.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Reactivity decreases down Group 7.",
        keywords: [["reactivity", "decreases", "down"]],
      },
      {
        point: "Atoms get larger down the group.",
        keywords: [["atoms", "larger", "down"]],
      },
      {
        point: "The outer shell is further from the nucleus.",
        keywords: [["outer", "shell", "further"]],
      },
      {
        point: "It becomes harder to gain an electron.",
        keywords: [["becomes", "harder", "gain"]],
      },
    ],
    examinerKeywords: ["Group 7", "halogens", "reactivity decreases", "gain electron"],
    modelAnswer:
      "Reactivity decreases down Group 7 because atoms get larger, so the outer shell is further from the nucleus and it becomes harder to gain an electron.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying reactivity increases down Group 7.",
      "Avoid: Explaining using loss of electrons.",
      "Avoid: Forgetting halogens gain electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Group 7. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why noble gases are unreactive.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Noble gases have full outer electron shells.",
        keywords: [["noble", "gases", "full"]],
      },
      {
        point: "They are stable.",
        keywords: [["stable"]],
      },
      {
        point: "They do not need to gain, lose or share electrons.",
        keywords: [["need", "gain", "lose"]],
      },
    ],
    examinerKeywords: ["noble gases", "full outer shell", "stable", "unreactive"],
    modelAnswer:
      "Noble gases are unreactive because they have full outer electron shells, making them stable, so they do not need to gain, lose or share electrons.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying noble gases have one outer electron.",
      "Avoid: Saying they are very reactive.",
      "Avoid: Forgetting full outer shell.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Group 0. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atomic-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "atomic-structure-and-periodic-table",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how atomic structure links to the arrangement and properties of elements in the periodic table.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Elements are arranged by increasing atomic number.",
        keywords: [["elements", "arranged", "increasing"]],
      },
      {
        point: "Atomic number is the number of protons.",
        keywords: [["atomic", "protons"]],
      },
      {
        point: "Electronic structure determines chemical properties.",
        keywords: [["electronic", "structure", "determines"]],
      },
      {
        point: "Elements in the same group have the same number of outer-shell electrons.",
        keywords: [["elements", "same", "group"]],
      },
      {
        point: "Group 1 metals react by losing one electron.",
        keywords: [["group", "metals", "react"]],
      },
      {
        point: "Group 7 non-metals react by gaining one electron.",
        keywords: [["group", "non-metals", "react"]],
      },
    ],
    examinerKeywords: ["atomic structure", "periodic table", "atomic number", "outer electrons"],
    modelAnswer:
      "Elements are arranged by increasing atomic number, which is the number of protons. Electronic structure determines chemical properties. Elements in the same group have the same number of outer-shell electrons, so they react similarly. Group 1 metals lose one electron, while Group 7 non-metals gain one electron.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying elements are arranged randomly.",
      "Avoid: Forgetting protons define atomic number.",
      "Avoid: Not linking outer electrons to properties.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        keywords: [["attraction", "between", "oppositely"]],
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
      "Avoid: Calling it a weak force.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ionic bonding. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        point: "Sodium forms Na+ ions.",
        keywords: [["sodium", "forms", "ions"]],
      },
      {
        point: "Chlorine gains one electron.",
        keywords: [["chlorine", "gains", "electron"]],
      },
      {
        point: "Oppositely charged ions are attracted by strong electrostatic forces.",
        keywords: [["oppositely", "charged", "ions"]],
      },
    ],
    examinerKeywords: ["sodium chloride", "electron transfer", "Na+", "Cl-", "ionic"],
    modelAnswer:
      "Sodium loses one electron to form Na+. Chlorine gains one electron to form Cl-. The oppositely charged ions are held together by strong electrostatic attraction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying electrons are shared.",
      "Avoid: Saying sodium gains an electron.",
      "Avoid: Forgetting ion charges.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ionic bonding. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        point: "Therefore ionic compounds have high melting points.",
        keywords: [["therefore", "ionic", "compounds"]],
      },
    ],
    examinerKeywords: [
      "ionic",
      "giant ionic lattice",
      "strong electrostatic attraction",
      "high melting point",
    ],
    modelAnswer:
      "Ionic compounds have giant ionic lattices with strong electrostatic attractions between oppositely charged ions. A lot of energy is needed to overcome these attractions, so they have high melting points.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying weak intermolecular forces are broken.",
      "Avoid: Forgetting giant lattice.",
      "Avoid: Saying covalent bonds hold the ions together.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ionic properties. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.",
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
    examinerKeywords: ["sodium chloride", "solid", "molten", "mobile ions", "conduct"],
    modelAnswer:
      "Solid sodium chloride contains ions, but they are fixed in position and cannot move. Molten sodium chloride conducts because the ions are mobile and can carry charge.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying electrons conduct in molten sodium chloride.",
      "Avoid: Saying solid sodium chloride has no ions.",
      "Avoid: Forgetting ions must be mobile.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ionic properties. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        keywords: [["shared", "pair", "between"]],
      },
    ],
    examinerKeywords: ["covalent bond", "shared pair", "electrons"],
    modelAnswer: "A covalent bond is a shared pair of electrons between two atoms.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying covalent bonding is electron transfer.",
      "Avoid: Forgetting shared pair.",
      "Avoid: Saying covalent bonds are between ions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Covalent bonding. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why simple molecular substances usually have low melting and boiling points.",
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
        point: "Only these weak forces are overcome during melting or boiling.",
        keywords: [["only", "these", "weak"]],
      },
      {
        point: "Little energy is needed.",
        keywords: [["little", "energy"]],
      },
    ],
    examinerKeywords: [
      "simple molecular",
      "low melting point",
      "intermolecular forces",
      "little energy",
    ],
    modelAnswer:
      "Simple molecular substances contain small molecules with weak intermolecular forces between them. Only these weak forces are overcome during melting or boiling, so little energy is needed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying covalent bonds inside molecules are broken during boiling.",
      "Avoid: Forgetting intermolecular forces.",
      "Avoid: Saying all covalent substances have low melting points.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Simple molecules. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why simple molecular substances do not usually conduct electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They contain molecules.",
        keywords: [["contain", "molecules"]],
      },
      {
        point: "They do not contain mobile ions.",
        keywords: [["contain", "mobile", "ions"]],
      },
      {
        point: "They do not contain delocalised electrons.",
        keywords: [["contain", "delocalised", "electrons"]],
      },
    ],
    examinerKeywords: [
      "simple molecular",
      "conduct electricity",
      "mobile ions",
      "delocalised electrons",
    ],
    modelAnswer:
      "Simple molecular substances do not usually conduct electricity because they have no mobile ions or delocalised electrons to carry charge.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying molecules are charged ions.",
      "Avoid: Saying all covalent substances conduct.",
      "Avoid: Forgetting charge carriers.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Simple molecules. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        point: "Each carbon atom is bonded to four other carbon atoms.",
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
      "Diamond has a giant covalent structure where each carbon atom is bonded to four other carbon atoms. There are many strong covalent bonds, so a lot of energy is needed to break them.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying diamond has weak intermolecular forces.",
      "Avoid: Saying each carbon bonds to three others.",
      "Avoid: Forgetting giant covalent structure.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Giant covalent structures. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
    examinerKeywords: ["graphite", "conduct electricity", "delocalised electrons"],
    modelAnswer:
      "In graphite, each carbon atom bonds to three other carbon atoms, leaving one electron delocalised. These delocalised electrons can move and carry charge.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying ions move in graphite.",
      "Avoid: Saying graphite does not conduct.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Graphite. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why graphite is soft and slippery.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Graphite has layers of carbon atoms.",
        keywords: [["graphite", "layers", "carbon"]],
      },
      {
        point: "There are weak forces between the layers.",
        keywords: [["weak", "forces", "between"]],
      },
      {
        point: "The layers can slide over each other easily.",
        keywords: [["layers", "slide", "over"]],
      },
    ],
    examinerKeywords: ["graphite", "layers", "weak forces", "slide"],
    modelAnswer:
      "Graphite has layers of carbon atoms with weak forces between the layers. The layers can slide over each other easily, making graphite soft and slippery.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying covalent bonds between layers are weak.",
      "Avoid: Forgetting layers.",
      "Avoid: Confusing graphite with diamond.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Graphite. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two properties of graphene.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Graphene is one atom thick.",
        keywords: [["graphene", "atom", "thick"]],
      },
      {
        point: "Graphene is very strong.",
        keywords: [["graphene", "very", "strong"]],
      },
      {
        point: "Graphene conducts electricity.",
        keywords: [["graphene", "conducts", "electricity"]],
      },
      {
        point: "Graphene is lightweight.",
        keywords: [["graphene", "lightweight"]],
      },
    ],
    examinerKeywords: ["graphene", "one atom thick", "strong", "conducts"],
    modelAnswer: "Graphene is one atom thick and conducts electricity.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying graphene is a metal.",
      "Avoid: Saying graphene is made from silicon.",
      "Avoid: Forgetting it is one atom thick.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Graphene and fullerenes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
      "Avoid: Saying metallic bonding is sharing pairs of electrons.",
      "Avoid: Forgetting delocalised electrons.",
      "Avoid: Saying metals contain negative ions only.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Metallic bonding. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
    examinerKeywords: ["metals", "conduct electricity", "delocalised electrons", "charge"],
    modelAnswer:
      "Metals conduct electricity because they contain delocalised electrons that are free to move and carry charge through the metal.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying ions move through solid metals.",
      "Avoid: Forgetting delocalised electrons.",
      "Avoid: Saying metals contain no charged particles.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Metal properties. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        point: "Layers cannot slide over each other easily.",
        keywords: [["layers", "cannot", "slide"]],
      },
    ],
    examinerKeywords: ["alloy", "harder", "different sized atoms", "layers", "slide"],
    modelAnswer:
      "Alloys contain atoms of different sizes, which distort the regular layers of metal atoms. This makes it harder for layers to slide, so alloys are harder.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying alloys are softer because they are mixtures.",
      "Avoid: Forgetting layers can slide.",
      "Avoid: Saying atoms disappear.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alloys. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
      "Avoid: Forgetting movement.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: States of matter. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
          "Forces between particles are partly overcome so particles can move around each other.",
        keywords: [["forces", "between", "particles"]],
      },
    ],
    examinerKeywords: ["melting", "particles", "energy", "forces"],
    modelAnswer:
      "When a solid melts, particles gain energy and vibrate more strongly. Some forces between particles are overcome, allowing particles to move around each other.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particles are destroyed.",
      "Avoid: Saying atoms expand.",
      "Avoid: Saying chemical bonds always break during melting.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: State changes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
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
        point: "There are intermolecular forces between polymer molecules.",
        keywords: [["intermolecular", "forces", "between"]],
      },
      {
        point: "More energy is needed to overcome these forces.",
        keywords: [["more", "energy", "overcome"]],
      },
    ],
    examinerKeywords: ["polymers", "large molecules", "intermolecular forces", "solid"],
    modelAnswer:
      "Polymers are very large molecules with intermolecular forces between chains. More energy is needed to overcome these forces, so many polymers are solid at room temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying polymers are ionic lattices.",
      "Avoid: Forgetting intermolecular forces.",
      "Avoid: Saying all polymers are gases.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Polymers. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why nanoparticles may be more reactive than larger particles of the same substance.",
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
        point: "More particles are exposed at the surface.",
        keywords: [["more", "particles", "exposed"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "surface area to volume ratio", "reactivity"],
    modelAnswer:
      "Nanoparticles are very small and have a high surface area to volume ratio, so more particles are exposed at the surface and they may be more reactive.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying nanoparticles are always less reactive.",
      "Avoid: Ignoring surface area to volume ratio.",
      "Avoid: Saying size never affects properties.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Nanoparticles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give one use and one possible risk of nanoparticles.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Uses include catalysts, sunscreens, cosmetics or medicine.",
        keywords: [["uses", "include", "catalysts"]],
      },
      {
        point: "Possible risks include unknown health effects or entering cells and tissues.",
        keywords: [["possible", "risks", "include"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "uses", "risks", "medicine", "sunscreen"],
    modelAnswer:
      "Nanoparticles can be used in sunscreens. A possible risk is that they may enter body tissues and have unknown health effects.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving no risk.",
      "Avoid: Saying nanoparticles are always completely safe.",
      "Avoid: Giving a use unrelated to small particle size.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Nanoparticles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-bonding-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "structure-bonding-and-properties",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how bonding and structure determine the properties of substances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic compounds have giant ionic lattices and strong electrostatic attractions.",
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
      "Ionic compounds have giant lattices with strong attractions, so they have high melting points and conduct when ions are mobile. Simple molecular substances have weak intermolecular forces and low boiling points. Giant covalent structures have many strong bonds and high melting points. Metals conduct because of delocalised electrons, and alloys are harder because different sized atoms distort layers.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using the same explanation for every structure.",
      "Avoid: Forgetting charge carriers for conductivity.",
      "Avoid: Confusing covalent bonds with intermolecular forces.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Saying mass is lost in every reaction.",
      "Avoid: Only comparing number of substances.",
      "Avoid: Forgetting total mass.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Conservation of mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of calcium carbonate, CaCO3. Ar: Ca = 40, C = 12, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use Mr = 40 + 12 + (3 × 16).",
        keywords: [["relative formula mass", "mr"]],
      },
      {
        point: "3 × 16 = 48.",
        keywords: [["relative formula mass", "mr"]],
      },
      {
        point: "Mr = 100.",
        keywords: [["relative formula mass", "mr"]],
      },
    ],
    examinerKeywords: ["relative formula mass", "Mr", "calcium carbonate", "100"],
    modelAnswer: "Mr of CaCO3 = 40 + 12 + (3 × 16) = 100.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting three oxygen atoms.",
      "Avoid: Using atomic numbers instead of Ar values.",
      "Avoid: Adding oxygen only once.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Relative formula mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Dividing 40 by 16.",
      "Avoid: Forgetting ×100.",
      "Avoid: Using 24 as oxygen mass.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Percentage by mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "Calculate the number of moles in 12 g of magnesium. Ar: Mg = 24.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Moles = mass ÷ Ar.",
        keywords: [["moles", "mass"]],
      },
      {
        point: "Moles = 12 ÷ 24 = 0.50 mol.",
        keywords: [["moles"]],
      },
    ],
    examinerKeywords: ["moles", "mass", "magnesium", "0.50 mol"],
    modelAnswer: "Moles of Mg = 12 ÷ 24 = 0.50 mol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Multiplying mass by Ar.",
      "Avoid: Forgetting units.",
      "Avoid: Using 12 as the Ar of magnesium.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Moles from mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Dividing 0.25 by 44.",
      "Avoid: Forgetting units.",
      "Avoid: Using Ar instead of Mr.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Mass from moles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with oxygen: 2Mg + O2 → 2MgO. Calculate the mass of magnesium oxide formed from 4.8 g of magnesium. Ar: Mg = 24, O = 16.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of Mg = 4.8 ÷ 24 = 0.20 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mole ratio Mg : MgO is 1 : 1.",
        keywords: [["mole", "ratio"]],
      },
      {
        point: "Moles of MgO = 0.20 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mr of MgO = 40.",
        keywords: [["reacting masses", "magnesium"]],
      },
      {
        point: "Mass of MgO = 0.20 × 40 = 8.0 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["reacting masses", "magnesium", "magnesium oxide", "moles", "8.0 g"],
    modelAnswer:
      "Moles of Mg = 4.8 ÷ 24 = 0.20 mol. Ratio Mg:MgO is 1:1, so 0.20 mol of MgO forms. Mr of MgO = 40, so mass = 0.20 × 40 = 8.0 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using the 2 in the equation as a direct mass multiplier.",
      "Avoid: Forgetting the mole ratio.",
      "Avoid: Using 24 as Mr of MgO.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Balanced equations and moles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A compound contains 24 g of carbon and 6 g of hydrogen. Calculate its empirical formula. Ar: C = 12, H = 1.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Moles of carbon = 24 ÷ 12 = 2.",
        keywords: [["moles", "carbon"]],
      },
      {
        point: "Moles of hydrogen = 6 ÷ 1 = 6.",
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
      "Moles of C = 24 ÷ 12 = 2. Moles of H = 6 ÷ 1 = 6. Ratio C:H = 2:6 = 1:3, so empirical formula is CH3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using masses directly as the ratio.",
      "Avoid: Not simplifying the ratio.",
      "Avoid: Writing C2H6 instead of CH3.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Empirical formula. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by a limiting reactant.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The limiting reactant is completely used up.",
        keywords: [["limiting", "reactant", "completely"]],
      },
      {
        point: "It limits the amount of product formed.",
        keywords: [["limits", "amount", "product"]],
      },
    ],
    examinerKeywords: ["limiting reactant", "used up", "product formed"],
    modelAnswer:
      "The limiting reactant is the reactant that is completely used up and therefore limits the amount of product formed.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying it is the reactant in excess.",
      "Avoid: Saying it does not affect product amount.",
      "Avoid: Confusing limiting reactant with catalyst.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Limiting reactants. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    examinerKeywords: ["concentration", "g/dm3", "volume", "20"],
    modelAnswer: "250 cm3 = 0.250 dm3. Concentration = 5.0 ÷ 0.250 = 20 g/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Dividing volume by mass.",
      "Avoid: Writing 0.020 g/dm3.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Concentration in g/dm3. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
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
        keywords: [["concentration", "moles", "volume"]],
      },
      {
        point: "Concentration = 0.20 ÷ 0.500.",
        keywords: [["concentration"]],
      },
      {
        point: "Concentration = 0.40 mol/dm3.",
        keywords: [["concentration"]],
      },
    ],
    examinerKeywords: ["concentration", "mol/dm3", "moles", "volume", "0.40"],
    modelAnswer: "500 cm3 = 0.500 dm3. Concentration = 0.20 ÷ 0.500 = 0.40 mol/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Multiplying moles by volume.",
      "Avoid: Writing concentration in g/dm3.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Concentration in mol/dm3. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    examinerKeywords: ["titration", "moles", "concentration", "volume", "0.00250 mol"],
    modelAnswer: "25.0 cm3 = 0.0250 dm3. Moles of NaOH = 0.100 × 0.0250 = 0.00250 mol.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Dividing concentration by volume.",
      "Avoid: Rounding too early.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Titration calculations. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    examinerKeywords: ["gas volume", "moles", "24 dm3", "12 dm3"],
    modelAnswer: "Volume = 0.50 × 24 = 12 dm3.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Dividing 0.50 by 24.",
      "Avoid: Forgetting units.",
      "Avoid: Using 22.4 when 24 is given.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas volumes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl2 + H2. Calculate the volume of hydrogen produced at room temperature and pressure from 2.4 g of magnesium. Ar: Mg = 24. Molar gas volume = 24 dm3/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of Mg = 2.4 ÷ 24 = 0.10 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mole ratio Mg : H2 is 1 : 1.",
        keywords: [["mole", "ratio"]],
      },
      {
        point: "Moles of H2 = 0.10 mol.",
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
    examinerKeywords: ["magnesium", "hydrogen", "moles", "gas volume", "2.4 dm3"],
    modelAnswer:
      "Moles of Mg = 2.4 ÷ 24 = 0.10 mol. Ratio Mg:H2 is 1:1, so 0.10 mol of H2 forms. Volume = 0.10 × 24 = 2.4 dm3.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using the 2 in front of HCl as the hydrogen ratio.",
      "Avoid: Forgetting molar gas volume.",
      "Avoid: Not converting mass to moles first.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas volumes from equations. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A reaction has a theoretical yield of 20.0 g but only 15.0 g is made. Calculate the percentage yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage yield = actual yield ÷ theoretical yield × 100.",
        keywords: [["percentage", "yield", "actual"]],
      },
      {
        point: "Percentage yield = 15.0 ÷ 20.0 × 100.",
        keywords: [["percentage", "yield"]],
      },
      {
        point: "Percentage yield = 75.0%.",
        keywords: [["percentage", "yield"]],
      },
    ],
    examinerKeywords: ["percentage yield", "actual yield", "theoretical yield", "75%"],
    modelAnswer: "Percentage yield = 15.0 ÷ 20.0 × 100 = 75.0%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing theoretical yield by actual yield.",
      "Avoid: Forgetting ×100.",
      "Avoid: Writing 0.75%.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Percentage yield. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
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
    examinerKeywords: ["atom economy", "desired product", "waste", "reactant mass"],
    modelAnswer:
      "Atom economy measures the percentage of reactant mass that becomes the desired product. A high atom economy means less waste.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Confusing atom economy with percentage yield.",
      "Avoid: Saying it measures reaction rate.",
      "Avoid: Forgetting desired product.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atom economy. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the atom economy for making CaO in the reaction CaCO3 → CaO + CO2. Mr: CaCO3 = 100, CaO = 56.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Atom economy = Mr of desired product ÷ total Mr of products × 100.",
        keywords: [["atom", "economy", "desired"]],
      },
      {
        point: "Atom economy = 56 ÷ 100 × 100.",
        keywords: [["atom", "economy"]],
      },
      {
        point: "Atom economy = 56%.",
        keywords: [["atom", "economy"]],
      },
    ],
    examinerKeywords: ["atom economy", "calcium oxide", "calcium carbonate", "56%"],
    modelAnswer: "Atom economy = 56 ÷ 100 × 100 = 56%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using only Mr of carbon dioxide.",
      "Avoid: Forgetting ×100.",
      "Avoid: Confusing atom economy with percentage yield.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atom economy calculation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to make 250 cm3 of a solution of known concentration from a solid solute.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Weigh the required mass of solid.",
        keywords: [["weigh", "mass", "solid"]],
      },
      {
        point: "Dissolve the solid in a small volume of distilled water.",
        keywords: [["dissolve", "solid", "small"]],
      },
      {
        point: "Transfer to a volumetric flask.",
        keywords: [["transfer", "volumetric", "flask"]],
      },
      {
        point: "Make up to the 250 cm3 mark with distilled water.",
        keywords: [["make", "mark", "distilled"]],
      },
      {
        point: "Stopper and invert to mix.",
        keywords: [["stopper", "invert"]],
      },
    ],
    examinerKeywords: [
      "standard solution",
      "volumetric flask",
      "distilled water",
      "known concentration",
    ],
    modelAnswer:
      "Weigh the required mass of solid and dissolve it in distilled water. Transfer to a volumetric flask, make up to the 250 cm3 mark with distilled water, stopper and invert to mix.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using a beaker as the final measuring apparatus.",
      "Avoid: Not making up to the mark.",
      "Avoid: Not mixing the solution.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Concentration required practical. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calcium carbonate decomposes: CaCO3 → CaO + CO2. Calculate the mass of calcium oxide produced from 10.0 g of calcium carbonate. Mr: CaCO3 = 100, CaO = 56.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of CaCO3 = 10.0 ÷ 100 = 0.100 mol.",
        keywords: [["moles", "caco3"]],
      },
      {
        point: "Mole ratio CaCO3 : CaO is 1 : 1.",
        keywords: [["mole", "ratio", "caco3"]],
      },
      {
        point: "Moles of CaO = 0.100 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mass of CaO = moles × Mr.",
        keywords: [["mass", "moles"]],
      },
      {
        point: "Mass of CaO = 0.100 × 56 = 5.60 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["calcium carbonate", "calcium oxide", "moles", "reacting masses", "5.60 g"],
    modelAnswer:
      "Moles of CaCO3 = 10.0 ÷ 100 = 0.100 mol. Ratio CaCO3:CaO is 1:1, so 0.100 mol of CaO forms. Mass = 0.100 × 56 = 5.60 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 10.0 × 100.",
      "Avoid: Forgetting the mole ratio.",
      "Avoid: Using Mr of calcium carbonate for product mass.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Multi-step calculation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A balance has an uncertainty of ±0.01 g. A student measures 2.50 g of solid. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage uncertainty = uncertainty ÷ measurement × 100.",
        keywords: [["percentage", "uncertainty", "measurement"]],
      },
      {
        point: "Percentage uncertainty = 0.01 ÷ 2.50 × 100.",
        keywords: [["percentage", "uncertainty"]],
      },
      {
        point: "Percentage uncertainty = 0.40%.",
        keywords: [["percentage", "uncertainty"]],
      },
    ],
    examinerKeywords: ["uncertainty", "percentage uncertainty", "balance", "0.40%"],
    modelAnswer: "Percentage uncertainty = 0.01 ÷ 2.50 × 100 = 0.40%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing measurement by uncertainty.",
      "Avoid: Forgetting ×100.",
      "Avoid: Ignoring units.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Uncertainty. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-quantitative-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "quantitative-chemistry",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the steps used to solve a reacting masses calculation.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Write or use a balanced symbol equation.",
        keywords: [["write", "balanced", "symbol"]],
      },
      {
        point: "Calculate relative formula masses.",
        keywords: [["calculate", "relative", "formula"]],
      },
      {
        point: "Convert the known mass into moles.",
        keywords: [["convert", "known", "mass"]],
      },
      {
        point: "Use the mole ratio from the balanced equation.",
        keywords: [["mole", "ratio", "balanced"]],
      },
      {
        point: "Calculate moles of the required substance.",
        keywords: [["calculate", "moles", "substance"]],
      },
      {
        point: "Convert moles into mass using mass = moles × Mr.",
        keywords: [["convert", "moles", "mass"]],
      },
    ],
    examinerKeywords: ["reacting masses", "balanced equation", "moles", "mole ratio", "mass"],
    modelAnswer:
      "Use the balanced equation and calculate formula masses. Convert the known mass to moles using moles = mass ÷ Mr. Use the mole ratio to find moles of the required substance, then convert moles to mass using mass = moles × Mr.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Skipping the balanced equation.",
      "Avoid: Using mass ratios without checking mole ratios.",
      "Avoid: Forgetting to convert back to mass.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
      "Avoid: Forgetting it compares metals.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reactivity series. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the product formed when magnesium reacts with oxygen.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Magnesium oxide.",
        keywords: [["magnesium", "oxide"]],
      },
    ],
    examinerKeywords: ["magnesium", "oxygen", "magnesium oxide"],
    modelAnswer: "Magnesium oxide is formed.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Writing magnesium hydroxide.",
      "Avoid: Writing magnesium carbonate.",
      "Avoid: Forgetting oxygen forms an oxide.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Metals and oxygen. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    modelAnswer: "Zinc reacts with dilute hydrochloric acid to form zinc chloride and hydrogen.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing zinc sulfate.",
      "Avoid: Writing carbon dioxide.",
      "Avoid: Forgetting hydrogen.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Metals and acids. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Using a glowing splint.",
      "Avoid: Saying hydrogen turns limewater milky.",
      "Avoid: Forgetting squeaky pop.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why zinc displaces copper from copper(II) sulfate solution.",
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
        point: "Copper is displaced from solution.",
        keywords: [["copper", "displaced", "solution"]],
      },
    ],
    examinerKeywords: ["zinc", "copper sulfate", "displacement", "reactivity", "electron transfer"],
    modelAnswer:
      "Zinc is more reactive than copper, so zinc displaces copper from copper(II) sulfate solution. Zinc atoms lose electrons to form zinc ions, while copper ions gain electrons to form copper atoms.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying copper is more reactive than zinc.",
      "Avoid: Saying zinc ions become zinc atoms.",
      "Avoid: Forgetting electron transfer.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Displacement reactions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Write",
    questionText: "Write the ionic equation for the reaction between zinc and copper(II) ions.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Zinc atoms form zinc ions.",
        keywords: [["zinc", "atoms", "form"]],
      },
      {
        point: "Copper(II) ions form copper atoms.",
        keywords: [["copper", "ions", "form"]],
      },
      {
        point: "Zn + Cu2+ → Zn2+ + Cu.",
        keywords: [["ionic equation", "zinc"]],
      },
    ],
    examinerKeywords: ["ionic equation", "zinc", "copper ions", "displacement"],
    modelAnswer: "Zn + Cu2+ → Zn2+ + Cu",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Including sulfate ions as reacting ions.",
      "Avoid: Reversing the equation.",
      "Avoid: Writing copper as Cu+.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Displacement ionic equation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Reversing OIL RIG.",
      "Avoid: Saying oxidation is gain of electrons.",
      "Avoid: Forgetting electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Oxidation and reduction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    examinerKeywords: ["extraction", "reactivity series", "carbon", "electrolysis", "reduction"],
    modelAnswer:
      "Metals below carbon can be extracted by reduction with carbon or carbon monoxide. Metals above carbon are too reactive to be reduced by carbon, so they are extracted by electrolysis. Very unreactive metals may occur native.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying aluminium is extracted using carbon.",
      "Avoid: Saying iron must be extracted by electrolysis.",
      "Avoid: Not linking extraction to reactivity.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Metal extraction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the role of carbon monoxide in the extraction of iron.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Carbon monoxide is a reducing agent.",
        keywords: [["carbon", "monoxide", "reducing"]],
      },
      {
        point: "It reduces iron oxide to iron.",
        keywords: [["reduces", "iron", "oxide"]],
      },
      {
        point: "Carbon monoxide is oxidised to carbon dioxide.",
        keywords: [["carbon", "monoxide", "oxidised"]],
      },
    ],
    examinerKeywords: ["carbon monoxide", "reducing agent", "iron oxide", "iron"],
    modelAnswer:
      "Carbon monoxide acts as a reducing agent. It reduces iron oxide to iron and is oxidised to carbon dioxide.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying carbon monoxide oxidises iron.",
      "Avoid: Saying carbon monoxide is only a fuel.",
      "Avoid: Forgetting reduction.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Iron extraction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "equation",
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
      "Avoid: Not balancing carbon monoxide.",
      "Avoid: Writing FeO instead of Fe2O3.",
      "Avoid: Writing carbon monoxide as CO2.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Iron extraction equation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
      "Avoid: Forgetting aqueous solution.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Acids and ions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
        keywords: [["neutralisation", "ionic equation"]],
      },
    ],
    examinerKeywords: ["neutralisation", "ionic equation", "H+", "OH-", "water"],
    modelAnswer: "H+ + OH- → H2O",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing salt as the only product.",
      "Avoid: Forgetting hydroxide ions.",
      "Avoid: Writing hydrogen gas as product.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Neutralisation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the difference between a strong acid and a weak acid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A strong acid completely ionises in water.",
        keywords: [["strong", "acid", "completely"]],
      },
      {
        point: "A weak acid partially ionises in water.",
        keywords: [["weak", "acid", "partially"]],
      },
      {
        point: "A strong acid produces a higher concentration of H+ ions.",
        keywords: [["strong", "acid", "produces"]],
      },
      {
        point: "The comparison must be for acids of the same concentration.",
        keywords: [["comparison", "must", "acids"]],
      },
    ],
    examinerKeywords: ["strong acid", "weak acid", "complete ionisation", "partial ionisation"],
    modelAnswer:
      "A strong acid completely ionises in water, while a weak acid only partially ionises. For acids of the same concentration, a strong acid produces a higher concentration of H+ ions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying weak acid means dilute acid.",
      "Avoid: Saying strong acid means concentrated acid.",
      "Avoid: Forgetting ionisation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Strong and weak acids. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
      "Acidic solutions have pH below 7, neutral solutions have pH 7 and alkaline solutions have pH above 7.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying acids have pH above 7.",
      "Avoid: Saying neutral is pH 0.",
      "Avoid: Confusing alkaline and acidic.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: pH scale. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to prepare pure dry copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Warm dilute sulfuric acid.",
        keywords: [["warm", "dilute", "sulfuric"]],
      },
      {
        point: "Add excess copper(II) oxide.",
        keywords: [["excess", "copper", "oxide"]],
      },
      {
        point: "Stir until no more reacts.",
        keywords: [["stir", "until", "more"]],
      },
      {
        point: "Filter to remove excess copper(II) oxide.",
        keywords: [["filter", "remove", "excess"]],
      },
      {
        point: "Heat the filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["cool", "filter", "crystals"]],
      },
    ],
    examinerKeywords: ["copper sulfate", "copper oxide", "sulfuric acid", "filter", "crystallise"],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess copper(II) oxide while stirring until no more reacts. Filter off excess solid. Heat the filtrate until nearly saturated, then cool so crystals form. Filter and dry the crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using copper metal instead of copper oxide.",
      "Avoid: Not adding excess solid.",
      "Avoid: Evaporating completely to dryness.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Salt preparation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Saying electrolysis joins substances together.",
      "Avoid: Forgetting electricity.",
      "Avoid: Saying it only happens to covalent substances.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electrolysis. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    modelAnswer: "Cations move to the cathode, and anions move to the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying cations move to the anode.",
      "Avoid: Saying anions move to the cathode.",
      "Avoid: Forgetting ion charges.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electrolysis ions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
    examinerKeywords: ["lead bromide", "lead", "bromine", "cathode", "anode"],
    modelAnswer: "Lead is formed at the cathode and bromine is formed at the anode.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying hydrogen forms from molten lead bromide.",
      "Avoid: Saying oxygen forms at the anode.",
      "Avoid: Mixing up lead and bromine.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Molten electrolysis. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
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
        point: "Electrolysis is needed to extract aluminium.",
        keywords: [["electrolysis", "extract", "aluminium"]],
      },
    ],
    examinerKeywords: ["aluminium", "extraction", "electrolysis", "carbon", "reactivity"],
    modelAnswer:
      "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide. Aluminium is therefore extracted by electrolysis.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying aluminium is below carbon.",
      "Avoid: Saying aluminium is extracted in a blast furnace.",
      "Avoid: Forgetting aluminium oxide.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Aluminium extraction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-chemical-changes-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-changes",
    paper: "Paper 1",
    paperType: "extended-response",
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
        keywords: [["metals", "above", "hydrogen"]],
      },
      {
        point: "Metals below carbon can be extracted by reduction with carbon or carbon monoxide.",
        keywords: [["metals", "below", "carbon"]],
      },
      {
        point: "Metals above carbon are extracted by electrolysis.",
        keywords: [["metals", "above", "carbon"]],
      },
      {
        point:
          "In aqueous electrolysis, metals more reactive than hydrogen usually remain in solution.",
        keywords: [["aqueous", "electrolysis", "metals"]],
      },
      {
        point: "Hydrogen forms instead of very reactive metals in aqueous solution.",
        keywords: [["hydrogen", "forms", "instead"]],
      },
    ],
    examinerKeywords: ["reactivity series", "displacement", "acids", "extraction", "electrolysis"],
    modelAnswer:
      "The reactivity series predicts that more reactive metals displace less reactive metals from compounds. Metals above hydrogen react with acids to produce hydrogen. Metals below carbon can be extracted by carbon reduction, while metals above carbon require electrolysis. In aqueous electrolysis, very reactive metals remain in solution and hydrogen forms instead.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying less reactive metals displace more reactive metals.",
      "Avoid: Saying aluminium is extracted by carbon reduction.",
      "Avoid: Saying sodium forms from aqueous sodium chloride.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
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
    examinerKeywords: ["exothermic", "energy transferred", "surroundings", "temperature increases"],
    modelAnswer:
      "An exothermic reaction transfers energy to the surroundings, causing the temperature of the surroundings to increase.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy is taken in from surroundings.",
      "Avoid: Saying temperature decreases.",
      "Avoid: Confusing exothermic with endothermic.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Exothermic reactions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
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
    examinerKeywords: ["endothermic", "energy taken in", "surroundings", "temperature decreases"],
    modelAnswer:
      "An endothermic reaction takes in energy from the surroundings, causing the temperature of the surroundings to decrease.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy is released to surroundings.",
      "Avoid: Saying temperature increases.",
      "Avoid: Confusing endothermic with exothermic.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Endothermic reactions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Give",
    questionText:
      "Give one example of an exothermic reaction and one example of an endothermic reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Combustion or neutralisation is exothermic.",
        keywords: [["combustion", "neutralisation", "exothermic"]],
      },
      {
        point: "Thermal decomposition or photosynthesis is endothermic.",
        keywords: [["thermal", "decomposition", "photosynthesis"]],
      },
    ],
    examinerKeywords: ["exothermic", "endothermic", "combustion", "thermal decomposition"],
    modelAnswer: "Combustion is exothermic. Thermal decomposition is endothermic.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving two exothermic examples.",
      "Avoid: Saying combustion is endothermic.",
      "Avoid: Giving vague examples without reaction type.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Examples. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
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
      "Avoid: Putting products higher than reactants.",
      "Avoid: Forgetting activation energy.",
      "Avoid: Confusing exothermic with endothermic.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reaction profiles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the reaction profile for an endothermic reaction.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Products are at a higher energy level than reactants.",
        keywords: [["products", "higher", "energy"]],
      },
      {
        point: "Reactants are at a lower energy level.",
        keywords: [["reactants", "lower", "energy"]],
      },
      {
        point: "There is an activation energy barrier.",
        keywords: [["activation", "energy", "barrier"]],
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
      "Avoid: Putting products lower than reactants.",
      "Avoid: Forgetting activation energy.",
      "Avoid: Confusing endothermic with exothermic.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reaction profiles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by activation energy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Activation energy is the minimum energy needed.",
        keywords: [["activation", "energy", "minimum"]],
      },
      {
        point: "It is needed for particles to react.",
        keywords: [["particles", "react"]],
      },
    ],
    examinerKeywords: ["activation energy", "minimum energy", "reaction"],
    modelAnswer: "Activation energy is the minimum energy needed for particles to react.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying activation energy is the energy released.",
      "Avoid: Saying activation energy is only needed for endothermic reactions.",
      "Avoid: Forgetting minimum energy.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Activation energy. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the temperature change when an acid reacts with an alkali.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure a fixed volume of acid.",
        keywords: [["measure", "fixed", "volume"]],
      },
      {
        point: "Measure the initial temperature.",
        keywords: [["measure", "initial", "temperature"]],
      },
      {
        point: "Add a measured volume of alkali.",
        keywords: [["measured", "volume", "alkali"]],
      },
      {
        point: "Stir the mixture.",
        keywords: [["stir", "mixture"]],
      },
      {
        point: "Record the highest or final temperature and calculate the temperature change.",
        keywords: [["record", "highest", "final"]],
      },
    ],
    examinerKeywords: ["temperature change", "acid", "alkali", "thermometer", "neutralisation"],
    modelAnswer:
      "Measure a fixed volume of acid and record its initial temperature. Add a measured volume of alkali, stir, then record the highest temperature reached. Calculate the temperature change.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Not measuring initial temperature.",
      "Avoid: Changing volumes without control.",
      "Avoid: Forgetting to stir.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Temperature change practical. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
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
        keywords: [["heat loss", "temperature change"]],
      },
      {
        point: "Add more insulation.",
        keywords: [["more", "insulation"]],
      },
      {
        point: "Take temperature readings quickly.",
        keywords: [["take", "temperature", "readings"]],
      },
    ],
    examinerKeywords: ["heat loss", "temperature change", "insulation", "lid"],
    modelAnswer: "Use an insulated cup and place a lid on it.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Using a metal beaker without insulation.",
      "Avoid: Leaving the cup uncovered.",
      "Avoid: Only saying repeat the experiment.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Required practical improvements. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
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
    modelAnswer: "Bond breaking is endothermic, while bond making is exothermic.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Saying bond making takes in energy.",
      "Avoid: Reversing both statements.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Bond energies. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a reaction is exothermic in terms of bond breaking and bond making.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Energy is taken in to break bonds.",
        keywords: [["energy", "taken", "break"]],
      },
      {
        point: "Energy is released when bonds form.",
        keywords: [["energy", "released", "bonds"]],
      },
      {
        point: "More energy is released making bonds than is taken in breaking bonds.",
        keywords: [["more", "energy", "released"]],
      },
      {
        point: "Energy is transferred to the surroundings.",
        keywords: [["energy", "transferred", "surroundings"]],
      },
    ],
    examinerKeywords: ["exothermic", "bond breaking", "bond making", "energy released"],
    modelAnswer:
      "Energy is taken in to break bonds and released when new bonds form. A reaction is exothermic when more energy is released making bonds than is taken in breaking bonds.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Only discussing bond breaking.",
      "Avoid: Not comparing energy taken in and released.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Bond energy explanation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for H2 + Cl2 → 2HCl. Bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Energy to break bonds = 436 + 242 = 678 kJ/mol.",
        keywords: [["energy", "break", "bonds"]],
      },
      {
        point: "Energy released forming bonds = 2 × 431 = 862 kJ/mol.",
        keywords: [["energy", "released", "forming"]],
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
    examinerKeywords: ["bond energy", "energy change", "HCl", "-184"],
    modelAnswer:
      "Energy to break bonds = 436 + 242 = 678 kJ/mol. Energy released making bonds = 2 × 431 = 862 kJ/mol. Energy change = 678 - 862 = -184 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting there are two H-Cl bonds.",
      "Avoid: Doing energy out minus energy in.",
      "Avoid: Missing the negative sign.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Bond energy calculation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how a simple chemical cell produces a voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Two different metals are used as electrodes.",
        keywords: [["different", "metals", "used"]],
      },
      {
        point: "The electrodes are placed in an electrolyte.",
        keywords: [["electrodes", "placed", "electrolyte"]],
      },
      {
        point: "Chemical reactions occur at the electrodes.",
        keywords: [["chemical", "reactions", "occur"]],
      },
      {
        point: "Electrons flow through the external circuit.",
        keywords: [["electrons", "flow", "through"]],
      },
    ],
    examinerKeywords: ["chemical cell", "electrodes", "electrolyte", "voltage", "electrons"],
    modelAnswer:
      "A simple cell uses two different metal electrodes in an electrolyte. Chemical reactions at the electrodes cause electrons to flow through the external circuit, producing a voltage.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using two identical metals and expecting a high voltage.",
      "Avoid: Forgetting electrolyte.",
      "Avoid: Saying ions move through the wire.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cells and batteries. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why using two metals far apart in the reactivity series gives a larger voltage.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The metals have a bigger difference in reactivity.",
        keywords: [["metals", "bigger", "difference"]],
      },
      {
        point: "There is a bigger tendency for electron transfer.",
        keywords: [["bigger", "tendency", "electron"]],
      },
      {
        point: "This produces a larger potential difference.",
        keywords: [["produces", "larger", "potential"]],
      },
    ],
    examinerKeywords: ["cell voltage", "reactivity series", "metals", "potential difference"],
    modelAnswer:
      "Metals far apart in the reactivity series have a bigger difference in reactivity, so there is a bigger tendency for electron transfer and a larger voltage is produced.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying metal size is the only factor.",
      "Avoid: Ignoring reactivity difference.",
      "Avoid: Saying identical metals give the largest voltage.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cells and reactivity. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products of a hydrogen fuel cell.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Water is produced.",
        keywords: [["water", "produced"]],
      },
      {
        point: "Electrical energy is produced.",
        keywords: [["electrical", "energy", "produced"]],
      },
    ],
    examinerKeywords: ["hydrogen fuel cell", "water", "electrical energy"],
    modelAnswer: "A hydrogen fuel cell produces water and electrical energy.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying carbon dioxide is the main product.",
      "Avoid: Forgetting water.",
      "Avoid: Saying hydrogen is produced.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fuel cells. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give two advantages of hydrogen fuel cells compared with fossil fuels.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They produce water instead of carbon dioxide during use.",
        keywords: [["produce", "water", "instead"]],
      },
      {
        point: "They do not release greenhouse gases during use.",
        keywords: [["release", "greenhouse", "gases"]],
      },
      {
        point: "They can be more efficient.",
        keywords: [["more", "efficient"]],
      },
      {
        point: "They do not produce sulfur dioxide during use.",
        keywords: [["produce", "sulfur", "dioxide"]],
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
      "Avoid: Saying fuel cells burn hydrogen directly.",
      "Avoid: Saying carbon dioxide is produced during use.",
      "Avoid: Giving only one advantage.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fuel cells advantages. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give two disadvantages of hydrogen fuel cells.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Hydrogen can be difficult to store.",
        keywords: [["hydrogen", "difficult", "store"]],
      },
      {
        point: "Hydrogen is flammable.",
        keywords: [["hydrogen", "flammable"]],
      },
      {
        point: "Hydrogen production may require energy from fossil fuels.",
        keywords: [["hydrogen", "production", "require"]],
      },
      {
        point: "Fuel cells can be expensive.",
        keywords: [["fuel", "cells", "expensive"]],
      },
    ],
    examinerKeywords: ["hydrogen fuel cells", "disadvantages", "storage", "flammable", "expensive"],
    modelAnswer: "Hydrogen is difficult to store and fuel cells can be expensive.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying hydrogen fuel cells always release carbon dioxide directly.",
      "Avoid: Giving advantages instead of disadvantages.",
      "Avoid: Saying hydrogen is completely risk-free.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fuel cells limitations. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare exothermic and endothermic reaction profiles.",
    marks: 4,
    markSchemePoints: [
      {
        point: "In exothermic reactions, reactants are higher in energy than products.",
        keywords: [["exothermic", "reactions", "reactants"]],
      },
      {
        point: "In endothermic reactions, products are higher in energy than reactants.",
        keywords: [["endothermic", "reactions", "products"]],
      },
      {
        point: "Both profiles show activation energy.",
        keywords: [["both", "profiles", "show"]],
      },
      {
        point:
          "Exothermic reactions transfer energy to surroundings while endothermic reactions take energy in.",
        keywords: [["exothermic", "reactions", "transfer"]],
      },
    ],
    examinerKeywords: ["exothermic", "endothermic", "reaction profile", "activation energy"],
    modelAnswer:
      "In an exothermic reaction profile, reactants are higher in energy than products. In an endothermic profile, products are higher than reactants. Both profiles show activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying only endothermic reactions need activation energy.",
      "Avoid: Reversing reactants and products.",
      "Avoid: Not comparing both reactions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reaction profile comparison. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State why some batteries are rechargeable.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The reactions in the battery are reversible.",
        keywords: [["reactions", "battery", "reversible"]],
      },
      {
        point: "An external current can reverse the chemical reaction.",
        keywords: [["external", "current", "reverse"]],
      },
    ],
    examinerKeywords: ["battery", "rechargeable", "reversible reaction", "external current"],
    modelAnswer:
      "Some batteries are rechargeable because their reactions are reversible, so an external current can reverse the chemical reaction.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying rechargeable batteries never use chemical reactions.",
      "Avoid: Saying all batteries are rechargeable.",
      "Avoid: Forgetting reversible reactions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cells and batteries. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a catalyst changes a reaction profile diagram.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A catalyst provides an alternative pathway.",
        keywords: [["catalyst", "provides", "alternative"]],
      },
      {
        point: "The activation energy is lower.",
        keywords: [["activation", "energy", "lower"]],
      },
      {
        point: "The overall energy change is unchanged.",
        keywords: [["overall", "energy", "change"]],
      },
    ],
    examinerKeywords: ["catalyst", "reaction profile", "activation energy", "alternative pathway"],
    modelAnswer:
      "A catalyst provides an alternative pathway with lower activation energy. The overall energy change of the reaction is unchanged.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying catalysts change the energy of reactants and products.",
      "Avoid: Saying catalysts increase activation energy.",
      "Avoid: Saying catalysts are used up.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Catalysts and energy. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-energy-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "energy-changes",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how energy changes are shown by temperature changes, reaction profiles and bond energies.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Exothermic reactions increase the temperature of the surroundings.",
        keywords: [["exothermic", "reactions", "increase"]],
      },
      {
        point: "Endothermic reactions decrease the temperature of the surroundings.",
        keywords: [["endothermic", "reactions", "decrease"]],
      },
      {
        point: "Reaction profiles show relative energies of reactants and products.",
        keywords: [["reaction", "profiles", "show"]],
      },
      {
        point: "Activation energy is the minimum energy needed for reaction.",
        keywords: [["activation", "energy", "minimum"]],
      },
      {
        point: "Bond breaking is endothermic.",
        keywords: [["bond", "breaking", "endothermic"]],
      },
      {
        point: "Bond making is exothermic.",
        keywords: [["bond", "making", "exothermic"]],
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
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Forgetting activation energy.",
      "Avoid: Confusing temperature change with energy change.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by rate of reaction.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Rate of reaction is the change in amount of reactant or product.",
        keywords: [["rate", "reaction", "change"]],
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
    hints: ["Avoid: Saying rate is only the final amount of product.", "Avoid: Forgetting time."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rate of reaction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "Collisions must have enough energy.",
        keywords: [["collisions", "must", "enough"]],
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
      "For a reaction to occur, particles must collide with enough energy. These successful collisions lead to reaction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying every collision causes reaction.",
      "Avoid: Forgetting activation energy.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Collision theory. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
      {
        point:
          "A greater proportion of particles have energy greater than or equal to activation energy.",
        keywords: [["greater", "proportion", "particles"]],
      },
    ],
    examinerKeywords: ["temperature", "kinetic energy", "collisions", "activation energy"],
    modelAnswer:
      "Increasing temperature gives particles more kinetic energy, so they move faster and collide more often. A greater proportion of particles also have enough energy to overcome the activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Only saying particles move faster.", "Avoid: Forgetting activation energy."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Temperature. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why increasing concentration increases the rate of reaction.",
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
      "Avoid: Saying particles have more energy.",
      "Avoid: Confusing concentration with temperature.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Concentration. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why increasing pressure increases the rate of a reaction between gases.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Gas particles are closer together.",
        keywords: [["particles", "closer", "together"]],
      },
      {
        point: "There are more particles per unit volume.",
        keywords: [["more", "particles", "unit"]],
      },
      {
        point: "Particles collide more frequently.",
        keywords: [["particles", "collide", "more"]],
      },
    ],
    examinerKeywords: ["pressure", "gas particles", "closer together", "collisions"],
    modelAnswer:
      "Increasing pressure makes gas particles closer together, so there are more particles per unit volume and collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Explaining pressure for solids.", "Avoid: Forgetting this applies to gases."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Pressure. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why powdered calcium carbonate reacts faster with acid than large calcium carbonate chips.",
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
      "Powdered calcium carbonate has a larger surface area than large chips, so more particles are exposed to acid and collisions happen more frequently.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying powder has less surface area.",
      "Avoid: Forgetting collision frequency.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Surface area. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "The alternative pathway has lower activation energy.",
        keywords: [["alternative", "pathway", "lower"]],
      },
      {
        point: "More particles have enough energy to react.",
        keywords: [["more", "particles", "enough"]],
      },
    ],
    examinerKeywords: ["catalyst", "alternative pathway", "lower activation energy"],
    modelAnswer:
      "A catalyst provides an alternative reaction pathway with lower activation energy, so more particles have enough energy to react.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying catalysts are used up.",
      "Avoid: Saying catalysts increase activation energy.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Catalysts. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "Keep variables such as temperature, acid volume and magnesium mass constant.",
        keywords: [["keep", "variables", "such"]],
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
    suggestedMinutes: 8,
    hints: ["Avoid: Not measuring time.", "Avoid: Changing several variables."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rate practical. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "data-response",
    questionType: "Explain",
    questionText: "Explain how rate of reaction is found from a graph of gas volume against time.",
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
      "The rate is found from the gradient of the graph. Gradient equals change in gas volume divided by change in time. A steeper gradient means a faster rate.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final volume as the rate.", "Avoid: Forgetting time."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rate graphs. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "No more gas is being produced.",
        keywords: [["more", "being", "produced"]],
      },
    ],
    examinerKeywords: ["gas volume-time graph", "horizontal", "reaction finished", "no more gas"],
    modelAnswer:
      "The graph becomes horizontal because the reaction has finished. One reactant has been used up, so no more gas is produced.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the rate is fastest when horizontal.",
      "Avoid: Saying gas is still being produced.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: End of reaction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
      "A reversible reaction can go forwards and backwards, so the products can react to reform the reactants.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying reversible reactions only go one way.",
      "Avoid: Confusing reversible with complete reaction.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reversible reactions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe dynamic equilibrium.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Dynamic equilibrium occurs in a closed system.",
        keywords: [["dynamic", "equilibrium", "occurs"]],
      },
      {
        point: "The forward and reverse reactions continue.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "The forward and reverse reactions occur at the same rate.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "The concentrations of reactants and products remain constant.",
        keywords: [["concentrations", "reactants", "products"]],
      },
    ],
    examinerKeywords: [
      "dynamic equilibrium",
      "closed system",
      "same rate",
      "constant concentrations",
    ],
    modelAnswer:
      "Dynamic equilibrium occurs in a closed system when the forward and reverse reactions continue at the same rate, so concentrations of reactants and products remain constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying reactions stop at equilibrium.",
      "Avoid: Saying concentrations must be equal.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Dynamic equilibrium. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Le Chatelier's principle. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "Yield of products from the forward reaction decreases.",
        keywords: [["yield", "products", "forward"]],
      },
    ],
    examinerKeywords: ["exothermic", "temperature", "equilibrium", "yield", "endothermic"],
    modelAnswer:
      "For an exothermic forward reaction, increasing temperature favours the endothermic reverse reaction. The equilibrium shifts left, so the yield of products decreases.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying higher temperature always increases yield.",
      "Avoid: Confusing rate and yield.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Temperature and equilibrium. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
          "If both sides have the same number of gas molecules, pressure has no effect on position.",
        keywords: [["both", "sides", "same"]],
      },
    ],
    examinerKeywords: ["pressure", "equilibrium", "gas molecules", "fewer molecules"],
    modelAnswer:
      "Increasing pressure shifts equilibrium to the side with fewer gas molecules, reducing pressure. If both sides have the same number of gas molecules, pressure has no effect on equilibrium position.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying pressure always shifts right.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Pressure and equilibrium. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a catalyst does not change the equilibrium yield.",
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
      "Avoid: Saying a catalyst increases equilibrium yield.",
      "Avoid: Forgetting both directions are affected.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Catalysts and equilibrium. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
        point: "A compromise temperature gives reasonable rate and reasonable yield.",
        keywords: [["compromise", "temperature", "gives"]],
      },
    ],
    examinerKeywords: ["Haber process", "compromise temperature", "yield", "rate", "exothermic"],
    modelAnswer:
      "The forward reaction is exothermic, so a lower temperature gives a higher ammonia yield. However, the rate would be too slow. A compromise temperature gives a reasonable rate and reasonable yield.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying high temperature gives highest yield for an exothermic reaction.",
      "Avoid: Only discussing rate.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Haber process. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
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
      "In the Haber process, there are four moles of gas on the reactant side and two on the product side. High pressure favours the side with fewer gas molecules, so equilibrium shifts towards ammonia.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Counting atoms instead of gas molecules.",
      "Avoid: Saying high pressure favours reactants.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Haber pressure. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate the effect of concentration on rate of reaction between sodium thiosulfate and hydrochloric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use different concentrations of sodium thiosulfate.",
        keywords: [["different", "concentrations", "sodium"]],
      },
      {
        point: "Keep volume of acid and sodium thiosulfate constant.",
        keywords: [["keep", "volume", "acid"]],
      },
      {
        point: "Keep temperature constant.",
        keywords: [["keep", "temperature", "constant"]],
      },
      {
        point: "Place the flask on a cross.",
        keywords: [["place", "flask", "cross"]],
      },
      {
        point: "Add acid and start the timer.",
        keywords: [["acid", "start", "timer"]],
      },
      {
        point: "Record the time for the cross to disappear and repeat.",
        keywords: [["record", "time", "cross"]],
      },
    ],
    examinerKeywords: ["sodium thiosulfate", "hydrochloric acid", "concentration", "cross", "rate"],
    modelAnswer:
      "Use different concentrations of sodium thiosulfate while keeping volumes and temperature constant. Place the flask on a cross, add hydrochloric acid and start the timer. Record the time for the cross to disappear. Repeat and calculate a mean.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing temperature as well as concentration.",
      "Avoid: Not starting the timer when acid is added.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Required practical. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-rate-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "rate-and-extent-of-chemical-change",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how rate of reaction and equilibrium are affected by temperature, pressure and catalysts.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Higher temperature increases rate because particles have more kinetic energy.",
        keywords: [["higher", "temperature", "increases"]],
      },
      {
        point: "Higher temperature shifts equilibrium towards the endothermic direction.",
        keywords: [["higher", "temperature", "shifts"]],
      },
      {
        point: "Higher pressure increases rate for gases because particles collide more often.",
        keywords: [["higher", "pressure", "increases"]],
      },
      {
        point: "Higher pressure shifts equilibrium to the side with fewer gas molecules.",
        keywords: [["higher", "pressure", "shifts"]],
      },
      {
        point: "Catalysts increase rate by lowering activation energy.",
        keywords: [["catalysts", "increase", "rate"]],
      },
      {
        point: "Catalysts do not change equilibrium yield.",
        keywords: [["catalysts", "change", "equilibrium"]],
      },
    ],
    examinerKeywords: ["rate", "equilibrium", "temperature", "pressure", "catalyst"],
    modelAnswer:
      "Higher temperature increases rate because particles have more kinetic energy and more successful collisions, but it shifts equilibrium towards the endothermic direction. Higher pressure increases rate for gases and shifts equilibrium to the side with fewer gas molecules. Catalysts increase rate by lowering activation energy but do not change equilibrium yield.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying catalysts increase yield.",
      "Avoid: Confusing rate with equilibrium position.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Crude oil. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define hydrocarbon.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A hydrocarbon contains carbon atoms.",
        keywords: [["hydrocarbon", "contains", "carbon"]],
      },
      {
        point: "It contains hydrogen atoms only in addition to carbon.",
        keywords: [["contains", "hydrogen", "atoms"]],
      },
    ],
    examinerKeywords: ["hydrocarbon", "carbon", "hydrogen", "only"],
    modelAnswer: "A hydrocarbon is a compound containing carbon and hydrogen atoms only.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying hydrocarbons contain oxygen.", "Avoid: Forgetting the word only."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Hydrocarbons. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
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
        point: "The vapours enter a fractionating column.",
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
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying crude oil is separated by filtration.",
      "Avoid: Forgetting boiling points.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fractional distillation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how boiling point, viscosity and flammability change as hydrocarbon chain length increases.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Boiling point increases.",
        keywords: [["boiling", "point", "increases"]],
      },
      {
        point: "Viscosity increases.",
        keywords: [["viscosity", "increases"]],
      },
      {
        point: "Flammability decreases.",
        keywords: [["flammability", "decreases"]],
      },
    ],
    examinerKeywords: ["chain length", "boiling point", "viscosity", "flammability"],
    modelAnswer:
      "As hydrocarbon chain length increases, boiling point and viscosity increase, while flammability decreases.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying longer chains are more flammable.",
      "Avoid: Saying viscosity decreases.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fractions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the general formula of alkanes.",
    marks: 1,
    markSchemePoints: [
      {
        point: "CnH2n+2.",
        keywords: [["cnh2n"]],
      },
    ],
    examinerKeywords: ["alkanes", "general formula", "CnH2n+2"],
    modelAnswer: "The general formula of alkanes is CnH2n+2.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing CnH2n.", "Avoid: Forgetting the +2."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alkanes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Name",
    questionText: "Name the first four alkanes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Methane.",
        keywords: [["methane"]],
      },
      {
        point: "Ethane.",
        keywords: [["ethane"]],
      },
      {
        point: "Propane.",
        keywords: [["propane"]],
      },
      {
        point: "Butane.",
        keywords: [["butane"]],
      },
    ],
    examinerKeywords: ["methane", "ethane", "propane", "butane", "alkanes"],
    modelAnswer: "The first four alkanes are methane, ethane, propane and butane.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Writing methanol instead of methane.",
      "Avoid: Writing ethene instead of ethane.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alkanes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products of complete combustion of a hydrocarbon.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carbon dioxide is produced.",
        keywords: [["carbon", "dioxide", "produced"]],
      },
      {
        point: "Water is produced.",
        keywords: [["water", "produced"]],
      },
    ],
    examinerKeywords: ["complete combustion", "hydrocarbon", "carbon dioxide", "water"],
    modelAnswer: "Complete combustion of a hydrocarbon produces carbon dioxide and water.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing carbon monoxide for complete combustion.", "Avoid: Forgetting water."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Complete combustion. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "equation",
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
        keywords: [["balanced", "equation", "2h2o"]],
      },
    ],
    examinerKeywords: ["methane", "combustion", "balanced equation", "carbon dioxide", "water"],
    modelAnswer: "CH4 + 2O2 → CO2 + 2H2O",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting oxygen.", "Avoid: Writing carbon monoxide as the product."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Combustion equation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two products that may form during incomplete combustion of a hydrocarbon.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carbon monoxide.",
        keywords: [["carbon", "monoxide"]],
      },
      {
        point: "Carbon or soot.",
        keywords: [["carbon", "soot"]],
      },
      {
        point: "Water.",
        keywords: [["water"]],
      },
    ],
    examinerKeywords: ["incomplete combustion", "carbon monoxide", "soot", "water"],
    modelAnswer: "Incomplete combustion can produce carbon monoxide and carbon or soot.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Only writing carbon dioxide.", "Avoid: Forgetting carbon monoxide."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Incomplete combustion. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
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
        point: "This reduces the blood's ability to carry oxygen.",
        keywords: [["reduces", "blood", "ability"]],
      },
    ],
    examinerKeywords: ["carbon monoxide", "toxic", "haemoglobin", "oxygen transport"],
    modelAnswer:
      "Carbon monoxide is toxic because it binds to haemoglobin in the blood, reducing the blood's ability to carry oxygen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying carbon dioxide binds strongly to haemoglobin.",
      "Avoid: Forgetting oxygen transport.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Carbon monoxide. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by cracking.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Cracking breaks down long-chain hydrocarbons.",
        keywords: [["cracking", "breaks", "down"]],
      },
      {
        point: "It forms smaller, more useful hydrocarbons.",
        keywords: [["forms", "smaller", "more"]],
      },
    ],
    examinerKeywords: ["cracking", "long-chain hydrocarbons", "smaller hydrocarbons"],
    modelAnswer:
      "Cracking is the breaking down of long-chain hydrocarbons into smaller, more useful hydrocarbons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying cracking joins small molecules.",
      "Avoid: Saying cracking only produces alkanes.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cracking. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
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
        keywords: [["high", "temperature"]],
      },
      {
        point: "Pass the vapour over a hot catalyst.",
        keywords: [["pass", "vapour", "over"]],
      },
    ],
    examinerKeywords: ["cracking", "high temperature", "catalyst", "vapour"],
    modelAnswer: "The hydrocarbon is vaporised and passed over a hot catalyst at high temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying cracking happens at room temperature.", "Avoid: Forgetting catalyst."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cracking conditions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the general formula of alkenes.",
    marks: 1,
    markSchemePoints: [
      {
        point: "CnH2n.",
        keywords: [["cnh2n"]],
      },
    ],
    examinerKeywords: ["alkenes", "general formula", "CnH2n"],
    modelAnswer: "The general formula of alkenes is CnH2n.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing CnH2n+2.", "Avoid: Forgetting alkenes are unsaturated."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alkenes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why alkenes are described as unsaturated.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Alkenes contain a carbon-carbon double bond.",
        keywords: [["alkenes", "contain", "carbon-carbon"]],
      },
      {
        point: "They can undergo addition reactions.",
        keywords: [["undergo", "addition", "reactions"]],
      },
    ],
    examinerKeywords: ["alkenes", "unsaturated", "C=C", "addition reaction"],
    modelAnswer:
      "Alkenes are unsaturated because they contain a carbon-carbon double bond and can undergo addition reactions.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying alkenes have only single bonds.",
      "Avoid: Saying alkenes are saturated.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Unsaturated hydrocarbons. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for an alkene using bromine water.",
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
      "AQA GCSE Chemistry 8462: Bromine water test. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the product when ethene reacts with hydrogen.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Ethane is formed.",
        keywords: [["ethane", "formed"]],
      },
      {
        point: "This is an addition reaction.",
        keywords: [["addition", "reaction"]],
      },
    ],
    examinerKeywords: ["ethene", "hydrogen", "ethane", "addition"],
    modelAnswer: "Ethene reacts with hydrogen to form ethane.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing ethanol.", "Avoid: Writing methane."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Addition reactions. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
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
        point: "Many ethene molecules join together.",
        keywords: [["many", "ethene", "molecules"]],
      },
      {
        point: "Poly(ethene) is formed by addition polymerisation.",
        keywords: [["poly", "ethene", "formed"]],
      },
    ],
    examinerKeywords: ["ethene", "poly(ethene)", "addition polymerisation", "double bond"],
    modelAnswer:
      "Ethene monomers undergo addition polymerisation. The carbon-carbon double bonds open and many ethene molecules join together to form poly(ethene).",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying water is produced in addition polymerisation.",
      "Avoid: Using ethane as the monomer.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Addition polymerisation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the functional group in alcohols and name the alcohol with formula C2H5OH.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Alcohols contain the -OH functional group.",
        keywords: [["alcohols", "contain", "functional"]],
      },
      {
        point: "C2H5OH is ethanol.",
        keywords: [["c2h5oh", "ethanol"]],
      },
    ],
    examinerKeywords: ["alcohol", "functional group", "-OH", "ethanol"],
    modelAnswer: "Alcohols contain the -OH functional group. C2H5OH is ethanol.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing -COOH as the alcohol functional group.",
      "Avoid: Naming C2H5OH as ethanoic acid.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alcohols. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the functional group in carboxylic acids and name CH3COOH.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Carboxylic acids contain the -COOH functional group.",
        keywords: [["carboxylic", "acids", "contain"]],
      },
      {
        point: "CH3COOH is ethanoic acid.",
        keywords: [["ch3cooh", "ethanoic", "acid"]],
      },
    ],
    examinerKeywords: ["carboxylic acid", "-COOH", "ethanoic acid", "CH3COOH"],
    modelAnswer: "Carboxylic acids contain the -COOH functional group. CH3COOH is ethanoic acid.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing -OH only.", "Avoid: Naming CH3COOH as ethanol."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Carboxylic acids. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-organic-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "organic-chemistry",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how crude oil can be separated and converted into useful products.",
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
        point: "Long-chain hydrocarbons have high boiling points and are less flammable.",
        keywords: [["long-chain", "hydrocarbons", "high"]],
      },
      {
        point: "Cracking breaks long-chain hydrocarbons into shorter molecules.",
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
    hints: ["Avoid: Saying crude oil is pure.", "Avoid: Saying cracking joins molecules together."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how melting point can be used to test the purity of a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Measure the melting point of the solid.",
        keywords: [["measure", "melting", "point"]],
      },
      {
        point: "A pure solid has a sharp melting point.",
        keywords: [["pure", "solid", "sharp"]],
      },
      {
        point:
          "An impure solid melts over a range of temperatures and usually at a lower temperature.",
        keywords: [["impure", "solid", "melts"]],
      },
    ],
    examinerKeywords: ["purity", "melting point", "sharp", "range", "impure"],
    modelAnswer:
      "Measure the melting point of the solid. A pure solid has a sharp melting point, while an impure solid melts over a range of temperatures and usually at a lower temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying pure substances melt over a wide range.",
      "Avoid: Only checking colour.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Pure substances. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a formulation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A formulation is a mixture.",
        keywords: [["formulation", "mixture"]],
      },
      {
        point: "It is designed as a useful product with substances in carefully measured amounts.",
        keywords: [["designed", "useful", "product"]],
      },
    ],
    examinerKeywords: ["formulation", "mixture", "useful product", "measured amounts"],
    modelAnswer:
      "A formulation is a mixture designed as a useful product, with substances present in carefully measured amounts.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a formulation is a pure substance.",
      "Avoid: Confusing formulation with formula.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Formulations. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how paper chromatography can be used to separate dyes in ink.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Draw a pencil baseline near the bottom of chromatography paper.",
        keywords: [["draw", "pencil", "baseline"]],
      },
      {
        point: "Place a spot of ink on the baseline.",
        keywords: [["place", "spot", "baseline"]],
      },
      {
        point: "Put the paper in a solvent with the solvent level below the baseline.",
        keywords: [["paper", "solvent", "level"]],
      },
      {
        point: "Allow the solvent to rise up the paper.",
        keywords: [["allow", "solvent", "rise"]],
      },
      {
        point: "Different dyes move different distances and separate.",
        keywords: [["different", "dyes", "move"]],
      },
    ],
    examinerKeywords: ["chromatography", "pencil baseline", "solvent", "dyes", "separate"],
    modelAnswer:
      "Draw a pencil baseline on chromatography paper and place a spot of ink on it. Put the paper in a solvent with the solvent below the baseline. As the solvent rises, different dyes move different distances and separate.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Drawing the baseline in ink.",
      "Avoid: Putting the solvent level above the spot.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Chromatography method. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A dye spot moves 4.5 cm and the solvent front moves 9.0 cm. Calculate the Rf value.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rf = distance moved by substance ÷ distance moved by solvent front.",
        keywords: [["distance", "moved", "substance"]],
      },
      {
        point: "Rf = 4.5 ÷ 9.0.",
        keywords: [["rf", "chromatography"]],
      },
      {
        point: "Rf = 0.50.",
        keywords: [["rf", "chromatography"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "solvent front", "0.50"],
    modelAnswer: "Rf = 4.5 ÷ 9.0 = 0.50.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing solvent distance by spot distance.", "Avoid: Adding units to Rf."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rf values. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chromatography can show whether a sample is pure or a mixture.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A pure substance produces one spot.",
        keywords: [["pure", "substance", "produces"]],
      },
      {
        point: "A mixture produces more than one spot.",
        keywords: [["mixture", "produces", "more"]],
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
      "Avoid: Saying a pure substance gives many spots.",
      "Avoid: Ignoring the number of spots.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Chromatography interpretation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Gas tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Gas tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Gas tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
        point: "Chlorine bleaches the litmus paper white after turning it red.",
        keywords: [["chlorine", "bleaches", "litmus"]],
      },
    ],
    examinerKeywords: ["chlorine", "damp blue litmus", "bleaches", "white"],
    modelAnswer: "Chlorine turns damp blue litmus paper red, then bleaches it white.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Using dry litmus only.", "Avoid: Forgetting bleaching."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the flame test colours for lithium, sodium and potassium ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lithium ions give a crimson or red flame.",
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
      "AQA GCSE Chemistry 8462: Flame tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the flame test colours for calcium and copper(II) ions.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Calcium ions give an orange-red or brick-red flame.",
        keywords: [["calcium", "ions", "give"]],
      },
      {
        point: "Copper(II) ions give a blue-green flame.",
        keywords: [["copper", "ions", "give"]],
      },
    ],
    examinerKeywords: ["flame test", "calcium", "copper", "orange-red", "blue-green"],
    modelAnswer: "Calcium gives an orange-red flame and copper(II) gives a blue-green flame.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying copper gives yellow.", "Avoid: Saying calcium gives lilac."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Flame tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for ammonium ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Add aqueous sodium hydroxide.",
        keywords: [["aqueous", "sodium", "hydroxide"]],
      },
      {
        point: "Warm the mixture.",
        keywords: [["warm", "mixture"]],
      },
      {
        point: "Ammonia gas is produced and turns damp red litmus paper blue.",
        keywords: [["ammonia", "produced", "turns"]],
      },
    ],
    examinerKeywords: ["ammonium ions", "sodium hydroxide", "warm", "ammonia", "damp red litmus"],
    modelAnswer:
      "Add aqueous sodium hydroxide and warm. If ammonium ions are present, ammonia gas is produced and turns damp red litmus paper blue.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting to warm.", "Avoid: Using limewater."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cation tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
        point: "Copper(II) ions form a blue precipitate with aqueous sodium hydroxide.",
        keywords: [["copper", "ions", "form"]],
      },
    ],
    examinerKeywords: ["blue precipitate", "sodium hydroxide", "copper(II)", "Cu2+"],
    modelAnswer: "The cation is copper(II), Cu2+.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing iron(II).", "Avoid: Ignoring the blue precipitate."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cation tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the precipitate colours formed by iron(II) ions and iron(III) ions with aqueous sodium hydroxide.",
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
    examinerKeywords: ["iron(II)", "iron(III)", "green precipitate", "red-brown precipitate"],
    modelAnswer:
      "Iron(II) ions form a green precipitate, while iron(III) ions form a red-brown precipitate.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: ["Avoid: Reversing iron(II) and iron(III).", "Avoid: Saying both are blue."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cation tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
    examinerKeywords: ["carbonate", "dilute acid", "carbon dioxide", "limewater", "milky"],
    modelAnswer:
      "Add dilute acid. If carbonate ions are present, carbon dioxide is produced and turns limewater milky.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using silver nitrate.", "Avoid: Saying hydrogen is produced."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Anion tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe the test for sulfate ions.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Acidify the sample with dilute hydrochloric acid.",
        keywords: [["acidify", "sample", "dilute"]],
      },
      {
        point: "Add aqueous barium chloride or barium nitrate.",
        keywords: [["aqueous", "barium", "chloride"]],
      },
      {
        point: "A white precipitate forms if sulfate ions are present.",
        keywords: [["white", "precipitate", "forms"]],
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
    hints: ["Avoid: Using silver nitrate for sulfate.", "Avoid: Forgetting to acidify."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Anion tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
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
      "Avoid: Reversing bromide and iodide colours.",
      "Avoid: Saying all halides give white precipitates.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Halide tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give two advantages of instrumental methods of analysis.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They are sensitive.",
        keywords: [["sensitive"]],
      },
      {
        point: "They are accurate.",
        keywords: [["accurate"]],
      },
      {
        point: "They are fast.",
        keywords: [["fast"]],
      },
      {
        point: "They can detect very small amounts of substances.",
        keywords: [["detect", "very", "small"]],
      },
    ],
    examinerKeywords: ["instrumental methods", "sensitive", "accurate", "fast"],
    modelAnswer:
      "Instrumental methods are sensitive and can detect very small amounts of substances.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying they are always slower than chemical tests.",
      "Avoid: Giving vague answers like better without explanation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Instrumental methods. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "data-response",
    questionType: "Identify",
    questionText:
      "A salt gives a yellow flame and forms a white precipitate with acidified silver nitrate. Identify the salt and explain your answer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Yellow flame shows sodium ions.",
        keywords: [["yellow", "flame", "shows"]],
      },
      {
        point: "White precipitate with acidified silver nitrate shows chloride ions.",
        keywords: [["white", "precipitate", "acidified"]],
      },
      {
        point: "The salt is sodium chloride.",
        keywords: [["salt", "sodium", "chloride"]],
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
    hints: ["Avoid: Writing potassium chloride.", "Avoid: Ignoring one of the test results."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Unknown salt identification. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-analysis-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemical-analysis",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chemical tests can be used to identify unknown substances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Flame tests identify some metal cations by flame colour.",
        keywords: [["flame", "tests", "identify"]],
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
        keywords: [["carbonates", "react", "dilute"]],
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
      "Avoid: Using only one test for every ion.",
      "Avoid: Not linking observations to ions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the approximate percentage of nitrogen and oxygen in the Earth's atmosphere today.",
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
      "AQA GCSE Chemistry 8462: Current atmosphere. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two other gases found in small amounts in the Earth's atmosphere.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Argon.",
        keywords: [["argon"]],
      },
      {
        point: "Carbon dioxide.",
        keywords: [["carbon", "dioxide"]],
      },
      {
        point: "Water vapour.",
        keywords: [["water", "vapour"]],
      },
      {
        point: "Other noble gases.",
        keywords: [["other", "noble", "gases"]],
      },
    ],
    examinerKeywords: ["argon", "carbon dioxide", "water vapour", "atmosphere"],
    modelAnswer: "Carbon dioxide and argon are found in small amounts in the atmosphere.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing nitrogen as a trace gas.", "Avoid: Writing oxygen as a trace gas."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Current atmosphere. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
      "Avoid: Saying early atmosphere had lots of oxygen.",
      "Avoid: Forgetting carbon dioxide.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Early atmosphere. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
    examinerKeywords: ["oceans", "water vapour", "condensed", "cooled"],
    modelAnswer:
      "As the Earth cooled, water vapour in the atmosphere condensed into liquid water. This liquid water collected to form oceans.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying oxygen formed the oceans.", "Avoid: Forgetting condensation."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Formation of oceans. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why the percentage of carbon dioxide in the atmosphere decreased over time.",
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
        point: "Sedimentary rocks formed.",
        keywords: [["sedimentary", "rocks", "formed"]],
      },
      {
        point: "Plants and algae used carbon dioxide in photosynthesis.",
        keywords: [["plants", "algae", "used"]],
      },
    ],
    examinerKeywords: [
      "carbon dioxide",
      "oceans",
      "carbonates",
      "photosynthesis",
      "sedimentary rocks",
    ],
    modelAnswer:
      "Carbon dioxide decreased because it dissolved in oceans and became locked up in carbonates and sedimentary rocks. Plants and algae also removed carbon dioxide by photosynthesis.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying carbon dioxide only increased over time.",
      "Avoid: Forgetting photosynthesis.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Carbon dioxide decrease. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
    hints: ["Avoid: Saying respiration increased oxygen.", "Avoid: Forgetting plants or algae."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Oxygen increase. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
      "Avoid: Writing oxygen as a main greenhouse gas.",
      "Avoid: Writing nitrogen as a main greenhouse gas.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Greenhouse gases. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
      "Short-wave radiation from the Sun passes through the atmosphere and warms the Earth's surface. The surface emits infrared radiation, which greenhouse gases absorb and re-radiate, warming the atmosphere.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying greenhouse gases block all sunlight.",
      "Avoid: Forgetting infrared radiation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Greenhouse effect. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two human activities that increase carbon dioxide levels.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Burning fossil fuels.",
        keywords: [["burning", "fossil", "fuels"]],
      },
      {
        point: "Deforestation.",
        keywords: [["deforestation"]],
      },
    ],
    examinerKeywords: ["carbon dioxide", "fossil fuels", "deforestation"],
    modelAnswer: "Burning fossil fuels and deforestation increase carbon dioxide levels.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying photosynthesis increases carbon dioxide.",
      "Avoid: Forgetting deforestation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Human activities. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two human activities that increase methane levels.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Agriculture or cattle farming.",
        keywords: [["agriculture", "cattle", "farming"]],
      },
      {
        point: "Landfill sites.",
        keywords: [["landfill", "sites"]],
      },
      {
        point: "Rice fields.",
        keywords: [["rice", "fields"]],
      },
    ],
    examinerKeywords: ["methane", "cattle", "landfill", "rice fields"],
    modelAnswer: "Cattle farming and landfill sites increase methane levels.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Only writing fossil fuel burning.",
      "Avoid: Saying methane is only produced by photosynthesis.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Methane. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
        point: "More energy is trapped or re-radiated.",
        keywords: [["more", "energy", "trapped"]],
      },
      {
        point: "Global temperature increases.",
        keywords: [["global", "temperature", "increases"]],
      },
      {
        point: "This causes climate change.",
        keywords: [["causes", "climate", "change"]],
      },
    ],
    examinerKeywords: ["greenhouse gases", "infrared", "global warming", "climate change"],
    modelAnswer:
      "Higher greenhouse gas levels absorb more infrared radiation, so more energy is retained in the atmosphere. This increases global temperature and causes climate change.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying greenhouse gases destroy all oxygen.",
      "Avoid: Forgetting infrared radiation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Climate change. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State three possible effects of climate change.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sea level rise.",
        keywords: [["level", "rise"]],
      },
      {
        point: "More extreme weather.",
        keywords: [["more", "extreme", "weather"]],
      },
      {
        point: "Changes in rainfall patterns.",
        keywords: [["changes", "rainfall", "patterns"]],
      },
      {
        point: "Changes in species distribution.",
        keywords: [["changes", "species", "distribution"]],
      },
      {
        point: "Loss of habitats.",
        keywords: [["loss", "habitats"]],
      },
    ],
    examinerKeywords: ["climate change", "sea level", "extreme weather", "rainfall", "habitats"],
    modelAnswer:
      "Climate change can cause sea level rise, more extreme weather and changes in rainfall patterns.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Only saying it gets hotter.", "Avoid: Writing effects not linked to climate."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Climate effects. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
        point: "It is caused directly and indirectly by a person, product, event or organisation.",
        keywords: [["caused", "directly", "indirectly"]],
      },
    ],
    examinerKeywords: ["carbon footprint", "greenhouse gases", "direct", "indirect"],
    modelAnswer:
      "A carbon footprint is the total amount of greenhouse gases emitted directly and indirectly by a person, product, event or organisation.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying it is only carbon dioxide from breathing.",
      "Avoid: Forgetting indirect emissions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Carbon footprint. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
        point: "Reduce meat consumption.",
        keywords: [["reduce", "meat", "consumption"]],
      },
      {
        point: "Recycle or reuse products.",
        keywords: [["recycle", "reuse", "products"]],
      },
    ],
    examinerKeywords: [
      "carbon footprint",
      "renewable energy",
      "efficiency",
      "transport",
      "recycle",
    ],
    modelAnswer:
      "A carbon footprint can be reduced by using renewable energy, improving energy efficiency and using public transport instead of cars.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Giving vague answers like be better.",
      "Avoid: Suggesting actions that increase emissions.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reducing carbon footprint. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Atmospheric pollutants. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
        point: "It binds to haemoglobin.",
        keywords: [["binds", "haemoglobin"]],
      },
      {
        point: "It reduces the blood's ability to carry oxygen.",
        keywords: [["reduces", "blood", "ability"]],
      },
    ],
    examinerKeywords: ["carbon monoxide", "toxic", "haemoglobin", "oxygen"],
    modelAnswer:
      "Carbon monoxide is toxic because it binds to haemoglobin in the blood, reducing the blood's ability to carry oxygen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Confusing carbon monoxide with carbon dioxide.",
      "Avoid: Forgetting oxygen transport.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Carbon monoxide. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
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
      "Sulfur dioxide dissolves in rainwater and forms acid rain, which can damage plants, buildings and aquatic life.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sulfur dioxide causes global warming mainly.",
      "Avoid: Forgetting acid rain.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Sulfur dioxide. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how oxides of nitrogen are formed in car engines.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Car engines have high temperatures.",
        keywords: [["engines", "high", "temperatures"]],
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
      "At the high temperatures in car engines, nitrogen and oxygen from the air react to form oxides of nitrogen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying nitrogen oxides come only from fuel sulfur.",
      "Avoid: Forgetting high temperature.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Nitrogen oxides. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two problems caused by particulates.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They cause global dimming.",
        keywords: [["cause", "global", "dimming"]],
      },
      {
        point: "They cause breathing problems.",
        keywords: [["cause", "breathing", "problems"]],
      },
      {
        point: "They can cause health problems.",
        keywords: [["cause", "health", "problems"]],
      },
    ],
    examinerKeywords: ["particulates", "global dimming", "breathing problems", "health"],
    modelAnswer: "Particulates can cause global dimming and breathing problems.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying particulates are harmless.", "Avoid: Only discussing carbon dioxide."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Particulates. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-atmosphere-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "chemistry-of-the-atmosphere",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how the Earth's atmosphere changed over time and how human activity is changing it today.",
    marks: 6,
    markSchemePoints: [
      {
        point: "The early atmosphere contained much carbon dioxide and water vapour.",
        keywords: [["early", "atmosphere", "contained"]],
      },
      {
        point: "Water vapour condensed to form oceans.",
        keywords: [["water", "vapour", "condensed"]],
      },
      {
        point:
          "Carbon dioxide decreased because it dissolved in oceans and became locked in rocks.",
        keywords: [["carbon", "dioxide", "decreased"]],
      },
      {
        point: "Photosynthesis by algae and plants increased oxygen levels.",
        keywords: [["photosynthesis", "algae", "plants"]],
      },
      {
        point: "Burning fossil fuels increases carbon dioxide levels today.",
        keywords: [["burning", "fossil", "fuels"]],
      },
      {
        point: "Agriculture and landfill increase methane levels today.",
        keywords: [["agriculture", "landfill", "increase"]],
      },
    ],
    examinerKeywords: [
      "early atmosphere",
      "carbon dioxide",
      "oxygen",
      "photosynthesis",
      "human activity",
    ],
    modelAnswer:
      "The early atmosphere contained much carbon dioxide and water vapour. As Earth cooled, water vapour condensed to form oceans. Carbon dioxide decreased by dissolving in oceans, forming rocks and being used in photosynthesis. Photosynthesis increased oxygen. Today, burning fossil fuels increases carbon dioxide and agriculture and landfill increase methane.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying oxygen was always 21%.",
      "Avoid: Forgetting photosynthesis or human activity.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
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
      "AQA GCSE Chemistry 8462: Finite resources. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by sustainable development.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Development that meets the needs of people today.",
        keywords: [["development", "meets", "needs"]],
      },
      {
        point: "It does not prevent future generations from meeting their needs.",
        keywords: [["does", "prevent", "future"]],
      },
    ],
    examinerKeywords: ["sustainable development", "future generations", "needs"],
    modelAnswer:
      "Sustainable development meets the needs of people today without preventing future generations from meeting their needs.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying it only means recycling.", "Avoid: Forgetting future generations."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Sustainable development. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by potable water.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Potable water is water that is safe to drink.",
        keywords: [["potable", "water", "safe"]],
      },
      {
        point: "It contains low levels of dissolved salts and microbes.",
        keywords: [["contains", "levels", "dissolved"]],
      },
    ],
    examinerKeywords: ["potable water", "safe to drink", "dissolved salts", "microbes"],
    modelAnswer:
      "Potable water is water that is safe to drink and has low levels of dissolved salts and microbes.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying potable water is pure water.", "Avoid: Forgetting safe to drink."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Potable water. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
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
        point: "Chlorination or ozone or ultraviolet light can be used for sterilisation.",
        keywords: [["chlorination", "ozone", "ultraviolet"]],
      },
    ],
    examinerKeywords: [
      "potable water",
      "sedimentation",
      "filtration",
      "sterilisation",
      "chlorination",
    ],
    modelAnswer:
      "Fresh water is treated by sedimentation to remove large solids, filtration to remove insoluble particles and sterilisation to kill microbes. Chlorine, ozone or ultraviolet light can be used for sterilisation.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying filtration removes dissolved salts.",
      "Avoid: Forgetting sterilisation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Water treatment. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how pure water can be obtained from sea water.",
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
    examinerKeywords: ["sea water", "distillation", "evaporation", "condensation", "salts"],
    modelAnswer:
      "Sea water is heated so water evaporates, leaving dissolved salts behind. The water vapour is then condensed to form pure water.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying filtration removes dissolved salts.", "Avoid: Forgetting condensation."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Desalination. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why desalination is not widely used in some countries.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Desalination requires large amounts of energy.",
        keywords: [["desalination", "requires", "large"]],
      },
      {
        point: "It is expensive.",
        keywords: [["expensive"]],
      },
      {
        point: "Some countries have cheaper fresh water supplies available.",
        keywords: [["some", "countries", "cheaper"]],
      },
    ],
    examinerKeywords: ["desalination", "energy", "expensive", "fresh water"],
    modelAnswer:
      "Desalination requires large amounts of energy, making it expensive. Some countries can use cheaper fresh water sources instead.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying desalination uses no energy.",
      "Avoid: Saying all countries must use desalination.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Desalination evaluation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how sewage is treated.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Screening removes large objects.",
        keywords: [["screening", "removes", "large"]],
      },
      {
        point: "Sedimentation separates sludge from effluent.",
        keywords: [["sedimentation", "separates", "sludge"]],
      },
      {
        point: "Aerobic biological treatment breaks down organic matter.",
        keywords: [["aerobic", "biological", "treatment"]],
      },
      {
        point: "Anaerobic digestion breaks down sludge.",
        keywords: [["anaerobic", "digestion", "breaks"]],
      },
    ],
    examinerKeywords: ["sewage", "screening", "sedimentation", "aerobic", "anaerobic"],
    modelAnswer:
      "Sewage is screened to remove large objects. Sedimentation separates sludge from effluent. The effluent is treated aerobically, while sludge is broken down by anaerobic digestion.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying sewage is only filtered once.", "Avoid: Confusing sludge and effluent."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Waste water treatment. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is considered in a life cycle assessment.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Extracting and processing raw materials.",
        keywords: [["extracting", "processing", "materials"]],
      },
      {
        point: "Manufacturing the product.",
        keywords: [["manufacturing", "product"]],
      },
      {
        point: "Using the product.",
        keywords: [["product"]],
      },
      {
        point: "Disposal, recycling or reuse at the end of life.",
        keywords: [["disposal", "recycling", "reuse"]],
      },
    ],
    examinerKeywords: [
      "life cycle assessment",
      "raw materials",
      "manufacturing",
      "use",
      "disposal",
    ],
    modelAnswer:
      "A life cycle assessment considers raw material extraction, manufacture, use, and disposal or recycling at the end of the product's life.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Only considering disposal.", "Avoid: Ignoring raw materials and manufacture."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Life cycle assessment. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why life cycle assessments can be difficult to complete accurately.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Some data may be hard to collect.",
        keywords: [["some", "data", "hard"]],
      },
      {
        point: "Different assumptions may be made.",
        keywords: [["different", "assumptions", "made"]],
      },
      {
        point: "Judgements can be subjective.",
        keywords: [["judgements", "subjective"]],
      },
    ],
    examinerKeywords: ["life cycle assessment", "data", "assumptions", "subjective"],
    modelAnswer:
      "Life cycle assessments can be difficult because some data is hard to collect, assumptions may be needed and some judgements are subjective.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying LCAs are always perfectly accurate.", "Avoid: Forgetting assumptions."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Life cycle assessment evaluation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
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
        point: "It reduces the need for mining.",
        keywords: [["reduces", "need", "mining"]],
      },
      {
        point: "It reduces energy use compared with extraction from ores.",
        keywords: [["reduces", "energy", "compared"]],
      },
      {
        point: "It reduces waste going to landfill.",
        keywords: [["reduces", "waste", "going"]],
      },
    ],
    examinerKeywords: ["recycling", "metals", "finite ores", "energy", "landfill"],
    modelAnswer:
      "Recycling metals conserves finite ores, reduces mining, usually uses less energy than extraction from ores and reduces waste sent to landfill.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying recycling creates more metal ore.",
      "Avoid: Only saying it is good without explanation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reduce, reuse, recycle. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the two substances needed for iron to rust.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Water.",
        keywords: [["water"]],
      },
      {
        point: "Oxygen.",
        keywords: [["oxygen"]],
      },
    ],
    examinerKeywords: ["rusting", "iron", "water", "oxygen"],
    modelAnswer: "Iron needs water and oxygen to rust.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying only oxygen is needed.", "Avoid: Saying carbon dioxide is required."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Corrosion. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how painting prevents iron from rusting.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Paint acts as a barrier.",
        keywords: [["paint", "acts", "barrier"]],
      },
      {
        point: "It prevents water reaching the iron.",
        keywords: [["prevents", "water", "reaching"]],
      },
      {
        point: "It prevents oxygen reaching the iron.",
        keywords: [["prevents", "oxygen", "reaching"]],
      },
    ],
    examinerKeywords: ["painting", "barrier", "water", "oxygen", "rusting"],
    modelAnswer:
      "Paint acts as a barrier that prevents water and oxygen from reaching the iron, so rusting is prevented.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying paint reacts with rust.", "Avoid: Forgetting oxygen or water."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Preventing corrosion. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how galvanising prevents iron from rusting.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Iron is coated with zinc.",
        keywords: [["iron", "coated", "zinc"]],
      },
      {
        point: "Zinc acts as a barrier to water and oxygen.",
        keywords: [["zinc", "acts", "barrier"]],
      },
      {
        point: "Zinc is more reactive than iron.",
        keywords: [["zinc", "more", "reactive"]],
      },
      {
        point: "Zinc provides sacrificial protection if the coating is scratched.",
        keywords: [["zinc", "provides", "sacrificial"]],
      },
    ],
    examinerKeywords: ["galvanising", "zinc", "barrier", "sacrificial protection"],
    modelAnswer:
      "Galvanising coats iron with zinc. Zinc acts as a barrier to water and oxygen. If scratched, zinc corrodes instead of iron because zinc is more reactive, giving sacrificial protection.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Only mentioning barrier protection.",
      "Avoid: Saying zinc is less reactive than iron.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Galvanising. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why alloys are often more useful than pure metals.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alloys contain different sized atoms.",
        keywords: [["alloys", "contain", "different"]],
      },
      {
        point: "The layers of atoms are distorted.",
        keywords: [["layers", "atoms", "distorted"]],
      },
      {
        point: "This makes the alloy harder because layers cannot slide easily.",
        keywords: [["makes", "alloy", "harder"]],
      },
    ],
    examinerKeywords: ["alloys", "different sized atoms", "layers", "harder"],
    modelAnswer:
      "Alloys contain different sized atoms that distort the layers of metal atoms. This makes it harder for layers to slide, so alloys are harder and often more useful.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying alloys are always softer.", "Avoid: Forgetting layers of atoms."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alloys. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two properties of ceramics.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They are hard.",
        keywords: [["hard"]],
      },
      {
        point: "They have high melting points.",
        keywords: [["high", "melting", "points"]],
      },
      {
        point: "They are brittle.",
        keywords: [["brittle"]],
      },
      {
        point: "They are electrical insulators.",
        keywords: [["electrical", "insulators"]],
      },
    ],
    examinerKeywords: ["ceramics", "hard", "brittle", "high melting point", "insulator"],
    modelAnswer: "Ceramics are hard and have high melting points.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying ceramics are very flexible.",
      "Avoid: Saying ceramics conduct electricity well.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ceramics. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why low-density poly(ethene) and high-density poly(ethene) have different properties.",
    marks: 3,
    markSchemePoints: [
      {
        point: "They are made under different conditions.",
        keywords: [["made", "under", "different"]],
      },
      {
        point: "They have different structures.",
        keywords: [["different", "structures"]],
      },
      {
        point: "Different structures give different properties.",
        keywords: [["different", "structures", "give"]],
      },
    ],
    examinerKeywords: ["poly(ethene)", "low density", "high density", "structure", "properties"],
    modelAnswer:
      "Low-density and high-density poly(ethene) are made under different conditions, giving different polymer structures. These different structures give different properties.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying they are different monomers.", "Avoid: Ignoring structure."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Polymers. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a composite material.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A composite is made from two or more materials.",
        keywords: [["composite", "made", "more"]],
      },
      {
        point: "The materials have different properties and combine to give useful properties.",
        keywords: [["materials", "different", "properties"]],
      },
    ],
    examinerKeywords: ["composite", "two or more materials", "properties"],
    modelAnswer:
      "A composite material is made from two or more materials with different properties, combined to give useful properties.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a composite must be a pure substance.",
      "Avoid: Confusing composite with compound.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Composites. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State three essential elements supplied by NPK fertilisers.",
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
    examinerKeywords: ["NPK fertilisers", "nitrogen", "phosphorus", "potassium"],
    modelAnswer: "NPK fertilisers supply nitrogen, phosphorus and potassium.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing sodium for K.", "Avoid: Forgetting potassium."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fertilisers. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why ammonia is important in the production of fertilisers.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ammonia contains nitrogen.",
        keywords: [["ammonia", "contains", "nitrogen"]],
      },
      {
        point: "Nitrogen is needed for plant growth.",
        keywords: [["nitrogen", "plant", "growth"]],
      },
      {
        point: "Ammonia can be used to make ammonium salts or fertilisers.",
        keywords: [["ammonia", "used", "make"]],
      },
    ],
    examinerKeywords: ["ammonia", "fertilisers", "nitrogen", "ammonium salts"],
    modelAnswer:
      "Ammonia contains nitrogen, which plants need for growth. It can be used to make ammonium salts and fertilisers.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying ammonia contains phosphorus.", "Avoid: Forgetting plant growth."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Haber process and fertilisers. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-resources-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "using-resources",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chemistry can help improve sustainability when using resources.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Recycling conserves finite resources.",
        keywords: [["recycling", "conserves", "finite"]],
      },
      {
        point: "Life cycle assessments compare environmental impacts.",
        keywords: [["life", "cycle", "assessments"]],
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
        point: "Corrosion prevention extends the lifetime of metal objects.",
        keywords: [["corrosion", "prevention", "extends"]],
      },
      {
        point: "Using renewable resources reduces dependence on finite resources.",
        keywords: [["renewable", "resources", "reduces"]],
      },
    ],
    examinerKeywords: [
      "sustainability",
      "recycling",
      "life cycle assessment",
      "water treatment",
      "corrosion",
    ],
    modelAnswer:
      "Chemistry improves sustainability by recycling materials to conserve finite resources, using life cycle assessments to compare environmental impacts and treating water to make it potable. Waste water treatment reduces pollution, corrosion prevention extends product lifetime and renewable resources reduce dependence on finite resources.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: ["Avoid: Only discussing recycling.", "Avoid: Not linking chemistry to sustainability."],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has atomic number 12 and mass number 24. Calculate the number of protons, neutrons and electrons.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of protons = 12.",
        keywords: [["protons"]],
      },
      {
        point: "Number of electrons = 12 in a neutral atom.",
        keywords: [["electrons", "neutral", "atom"]],
      },
      {
        point: "Number of neutrons = mass number - atomic number.",
        keywords: [["neutrons", "mass", "atomic"]],
      },
      {
        point: "Number of neutrons = 24 - 12 = 12.",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["atomic number", "mass number", "protons", "neutrons", "electrons"],
    modelAnswer: "The atom has 12 protons and 12 electrons. Neutrons = 24 - 12 = 12.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Adding atomic number and mass number.",
      "Avoid: Forgetting electrons equal protons in a neutral atom.",
      "Avoid: Including electrons in mass number.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atomic structure. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why isotopes of chlorine have the same chemical properties but different masses.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Isotopes have the same number of protons.",
        keywords: [["isotopes", "same", "protons"]],
      },
      {
        point: "They have the same number of electrons.",
        keywords: [["same", "electrons"]],
      },
      {
        point: "They have the same electronic structure, so chemical properties are the same.",
        keywords: [["same", "electronic", "structure"]],
      },
      {
        point: "They have different numbers of neutrons, so their masses are different.",
        keywords: [["different", "numbers", "neutrons"]],
      },
    ],
    examinerKeywords: ["isotopes", "same electrons", "different neutrons", "chemical properties"],
    modelAnswer:
      "Chlorine isotopes have the same number of electrons and the same electronic structure, so they have the same chemical properties. They have different numbers of neutrons, so their masses are different.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying isotopes have different electron arrangements.",
      "Avoid: Saying neutrons control chemical properties.",
      "Avoid: Forgetting different neutrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Isotopes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how the alpha particle scattering experiment changed the model of the atom.",
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
        point: "Some alpha particles were deflected.",
        keywords: [["some", "alpha", "particles"]],
      },
      {
        point: "This showed there is a positive nucleus.",
        keywords: [["showed", "positive", "nucleus"]],
      },
      {
        point: "A few alpha particles were reflected backwards.",
        keywords: [["alpha", "particles", "were"]],
      },
      {
        point: "This showed the nucleus is small, dense and contains most of the mass.",
        keywords: [["showed", "nucleus", "small"]],
      },
    ],
    examinerKeywords: ["alpha scattering", "gold foil", "nucleus", "empty space", "dense"],
    modelAnswer:
      "Most alpha particles passed straight through the foil, showing the atom is mostly empty space. Some were deflected, showing there is a positive nucleus. A few bounced back, showing the nucleus is small, dense and contains most of the atom's mass.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying most particles bounced back.",
      "Avoid: Not linking observations to conclusions.",
      "Avoid: Forgetting the atom is mostly empty space.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alpha scattering. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why elements in the same group have similar chemical properties.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Elements in the same group have the same number of outer-shell electrons.",
        keywords: [["elements", "same", "group"]],
      },
      {
        point: "Chemical properties depend on outer-shell electrons.",
        keywords: [["chemical", "properties", "depend"]],
      },
      {
        point: "They react in similar ways.",
        keywords: [["react", "similar", "ways"]],
      },
    ],
    examinerKeywords: ["group", "outer-shell electrons", "chemical properties"],
    modelAnswer:
      "Elements in the same group have the same number of outer-shell electrons. Chemical properties depend on outer-shell electrons, so they react in similar ways.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying they have the same number of shells.",
      "Avoid: Saying chemical properties depend on neutrons.",
      "Avoid: Forgetting outer-shell electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Periodic table. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how magnesium oxide forms from magnesium and oxygen.",
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
        point: "Oxygen gains two electrons.",
        keywords: [["oxygen", "gains", "electrons"]],
      },
      {
        point: "Mg2+ and O2- ions are held by strong electrostatic attraction.",
        keywords: [["ions", "held", "strong"]],
      },
    ],
    examinerKeywords: ["magnesium oxide", "electron transfer", "Mg2+", "O2-", "ionic bonding"],
    modelAnswer:
      "Magnesium loses two electrons to form Mg2+ ions. Oxygen gains two electrons to form O2- ions. The oppositely charged ions are held together by strong electrostatic attraction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying electrons are shared.",
      "Avoid: Writing Mg+ instead of Mg2+.",
      "Avoid: Forgetting oxygen gains electrons.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ionic bonding. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why sodium chloride has a high melting point.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Sodium chloride has a giant ionic lattice.",
        keywords: [["sodium", "chloride", "giant"]],
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
        point: "Therefore sodium chloride has a high melting point.",
        keywords: [["therefore", "sodium", "chloride"]],
      },
    ],
    examinerKeywords: [
      "sodium chloride",
      "giant ionic lattice",
      "electrostatic attraction",
      "melting point",
    ],
    modelAnswer:
      "Sodium chloride has a giant ionic lattice with strong electrostatic attractions between oppositely charged ions. A lot of energy is needed to overcome these attractions, so it has a high melting point.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying weak intermolecular forces are broken.",
      "Avoid: Forgetting giant ionic lattice.",
      "Avoid: Saying covalent bonds hold the ions together.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Ionic properties. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
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
        point: "Only intermolecular forces are overcome during boiling.",
        keywords: [["only", "intermolecular", "forces"]],
      },
      {
        point: "Little energy is needed.",
        keywords: [["little", "energy"]],
      },
    ],
    examinerKeywords: ["simple molecular", "low boiling point", "intermolecular forces"],
    modelAnswer:
      "Simple molecular substances contain small molecules with weak intermolecular forces between molecules. Only these weak forces are overcome during boiling, so little energy is needed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying covalent bonds inside molecules are broken.",
      "Avoid: Forgetting intermolecular forces.",
      "Avoid: Saying all covalent substances have low boiling points.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Covalent substances. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why graphite conducts electricity and diamond does not.",
    marks: 4,
    markSchemePoints: [
      {
        point: "In graphite, each carbon atom bonds to three other carbon atoms.",
        keywords: [["graphite", "each", "carbon"]],
      },
      {
        point: "Graphite has delocalised electrons.",
        keywords: [["graphite", "delocalised", "electrons"]],
      },
      {
        point: "Delocalised electrons can move and carry charge.",
        keywords: [["delocalised", "electrons", "move"]],
      },
      {
        point:
          "In diamond, all outer electrons are used in covalent bonds, so there are no delocalised electrons.",
        keywords: [["diamond", "outer", "electrons"]],
      },
    ],
    examinerKeywords: ["graphite", "diamond", "delocalised electrons", "conduct electricity"],
    modelAnswer:
      "Graphite conducts because each carbon atom bonds to three others, leaving delocalised electrons that can move and carry charge. Diamond does not conduct because all outer electrons are used in covalent bonds.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying ions move in graphite.",
      "Avoid: Saying diamond has delocalised electrons.",
      "Avoid: Not comparing both structures.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Graphite. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
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
    hints: [
      "Avoid: Forgetting there are three sulfate groups.",
      "Avoid: Multiplying only sulfur by three.",
      "Avoid: Using atomic numbers instead of Ar values.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Quantitative chemistry. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the mass of magnesium oxide formed when 6.0 g of magnesium reacts with oxygen. 2Mg + O2 → 2MgO. Ar: Mg = 24, O = 16.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of Mg = 6.0 ÷ 24 = 0.25 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mole ratio Mg : MgO is 1 : 1.",
        keywords: [["mole", "ratio"]],
      },
      {
        point: "Moles of MgO = 0.25 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mr of MgO = 40.",
        keywords: [["magnesium", "magnesium oxide"]],
      },
      {
        point: "Mass of MgO = 0.25 × 40 = 10.0 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["magnesium", "magnesium oxide", "moles", "reacting masses", "10.0 g"],
    modelAnswer:
      "Moles of Mg = 6.0 ÷ 24 = 0.25 mol. The ratio Mg:MgO is 1:1, so 0.25 mol MgO forms. Mr of MgO = 40, so mass = 0.25 × 40 = 10.0 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 24 as the Mr of magnesium oxide.",
      "Avoid: Ignoring mole ratio.",
      "Avoid: Multiplying the mass directly by 2.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reacting masses. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why aluminium is extracted by electrolysis but iron is extracted by reduction with carbon monoxide.",
    marks: 4,
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
        point: "Aluminium must be extracted by electrolysis.",
        keywords: [["aluminium", "must", "extracted"]],
      },
      {
        point:
          "Iron is less reactive than carbon, so iron oxide can be reduced by carbon monoxide.",
        keywords: [["iron", "less", "reactive"]],
      },
    ],
    examinerKeywords: ["aluminium", "iron", "electrolysis", "carbon monoxide", "reactivity"],
    modelAnswer:
      "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide and electrolysis is needed. Iron is less reactive than carbon, so iron oxide can be reduced by carbon monoxide.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying aluminium is extracted in a blast furnace.",
      "Avoid: Saying iron needs electrolysis.",
      "Avoid: Not linking extraction to reactivity.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reactivity series. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the products when sulfuric acid reacts with magnesium carbonate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Magnesium sulfate is formed.",
        keywords: [["magnesium", "sulfate", "formed"]],
      },
      {
        point: "Water is formed.",
        keywords: [["water", "formed"]],
      },
      {
        point: "Carbon dioxide is formed.",
        keywords: [["carbon", "dioxide", "formed"]],
      },
    ],
    examinerKeywords: ["acid", "carbonate", "magnesium sulfate", "water", "carbon dioxide"],
    modelAnswer:
      "Sulfuric acid reacts with magnesium carbonate to form magnesium sulfate, water and carbon dioxide.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Writing hydrogen as the gas.",
      "Avoid: Forgetting water.",
      "Avoid: Naming the salt incorrectly.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Acids. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why hydrochloric acid with pH 1 has a higher concentration of hydrogen ions than ethanoic acid with pH 3.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lower pH means higher concentration of H+ ions.",
        keywords: [["lower", "means", "higher"]],
      },
      {
        point: "Hydrochloric acid is a strong acid and fully ionises.",
        keywords: [["hydrochloric", "acid", "strong"]],
      },
      {
        point: "Ethanoic acid is a weak acid and partially ionises.",
        keywords: [["ethanoic", "acid", "weak"]],
      },
    ],
    examinerKeywords: ["pH", "hydrogen ions", "strong acid", "weak acid", "ionisation"],
    modelAnswer:
      "A lower pH means a higher concentration of H+ ions. Hydrochloric acid is strong and fully ionises in water, while ethanoic acid is weak and only partially ionises.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying weak acid means dilute only.",
      "Avoid: Saying higher pH means more H+ ions.",
      "Avoid: Forgetting ionisation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Strong and weak acids. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
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
        point: "Heat the filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["cool", "filter", "crystals"]],
      },
    ],
    examinerKeywords: [
      "copper sulfate",
      "copper oxide",
      "sulfuric acid",
      "filter",
      "crystallisation",
    ],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess copper oxide while stirring until no more reacts. Filter off the excess solid. Heat the filtrate until nearly saturated, cool to form crystals, then filter and dry them.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using copper metal instead of copper oxide.",
      "Avoid: Not adding excess solid.",
      "Avoid: Evaporating completely to dryness.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Salt preparation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the products formed during electrolysis of concentrated sodium chloride solution using inert electrodes.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Hydrogen is formed at the cathode.",
        keywords: [["hydrogen", "formed", "cathode"]],
      },
      {
        point: "Chlorine is formed at the anode.",
        keywords: [["chlorine", "formed", "anode"]],
      },
      {
        point: "Sodium hydroxide remains in solution.",
        keywords: [["sodium", "hydroxide", "remains"]],
      },
    ],
    examinerKeywords: ["sodium chloride solution", "hydrogen", "chlorine", "sodium hydroxide"],
    modelAnswer:
      "Hydrogen forms at the cathode, chlorine forms at the anode and sodium hydroxide remains in solution.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sodium metal forms in aqueous solution.",
      "Avoid: Saying oxygen forms from concentrated sodium chloride solution.",
      "Avoid: Forgetting sodium hydroxide.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electrolysis. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Write",
    questionText:
      "Write the half-equation for the reaction at the cathode during electrolysis of molten lead(II) bromide.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Lead ions gain electrons.",
        keywords: [["lead", "ions", "gain"]],
      },
      {
        point: "Pb2+ + 2e- → Pb.",
        keywords: [["cathode", "lead ions"]],
      },
    ],
    examinerKeywords: ["cathode", "lead ions", "half-equation", "reduction"],
    modelAnswer: "Pb2+ + 2e- → Pb",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing oxidation at the cathode.",
      "Avoid: Forgetting two electrons.",
      "Avoid: Using bromide ions at the cathode.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electrolysis half-equations. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State whether bond breaking and bond making are exothermic or endothermic.",
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
    hints: [
      "Avoid: Saying bond breaking releases energy.",
      "Avoid: Saying bond making takes in energy.",
      "Avoid: Reversing the terms.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Energy changes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the energy change for H2 + Cl2 → 2HCl. Bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol.",
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
    examinerKeywords: ["bond energy", "energy change", "HCl", "-184"],
    modelAnswer:
      "Energy in = 436 + 242 = 678 kJ/mol. Energy out = 2 × 431 = 862 kJ/mol. Energy change = 678 - 862 = -184 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting two H-Cl bonds.",
      "Avoid: Doing energy out minus energy in.",
      "Avoid: Missing the negative sign.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Bond energies. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why two metals far apart in the reactivity series produce a larger voltage in a chemical cell.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The metals have a greater difference in reactivity.",
        keywords: [["metals", "greater", "difference"]],
      },
      {
        point: "There is a greater tendency for electron transfer.",
        keywords: [["greater", "tendency", "electron"]],
      },
      {
        point: "This produces a larger potential difference.",
        keywords: [["produces", "larger", "potential"]],
      },
    ],
    examinerKeywords: ["chemical cell", "reactivity series", "voltage", "electron transfer"],
    modelAnswer:
      "Metals far apart in the reactivity series have a greater difference in reactivity, so there is a greater tendency for electron transfer and a larger voltage is produced.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying identical metals produce the biggest voltage.",
      "Avoid: Ignoring reactivity difference.",
      "Avoid: Saying ions move through the wire.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Chemical cells. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper1-mixed-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how electrons are involved in bonding, redox and electrolysis.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionic bonding involves transfer of electrons.",
        keywords: [["ionic", "bonding", "involves"]],
      },
      {
        point: "Covalent bonding involves sharing pairs of electrons.",
        keywords: [["covalent", "bonding", "involves"]],
      },
      {
        point: "Metallic bonding involves delocalised electrons.",
        keywords: [["metallic", "bonding", "involves"]],
      },
      {
        point: "Oxidation is loss of electrons.",
        keywords: [["oxidation", "loss", "electrons"]],
      },
      {
        point: "Reduction is gain of electrons.",
        keywords: [["reduction", "gain", "electrons"]],
      },
      {
        point: "During electrolysis, ions gain or lose electrons at electrodes.",
        keywords: [["during", "electrolysis", "ions"]],
      },
    ],
    examinerKeywords: ["electrons", "bonding", "redox", "electrolysis", "oxidation", "reduction"],
    modelAnswer:
      "Ionic bonding involves electron transfer, covalent bonding involves shared pairs of electrons and metallic bonding involves delocalised electrons. In redox, oxidation is loss of electrons and reduction is gain of electrons. In electrolysis, ions gain or lose electrons at electrodes.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying all bonding involves transfer.",
      "Avoid: Reversing oxidation and reduction.",
      "Avoid: Not linking electrolysis to electrodes.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
          "A greater proportion of particles have energy greater than or equal to activation energy.",
        keywords: [["greater", "proportion", "particles"]],
      },
    ],
    examinerKeywords: ["temperature", "kinetic energy", "collisions", "activation energy"],
    modelAnswer:
      "Increasing temperature gives particles more kinetic energy, so they move faster and collide more often. A greater proportion of particles have enough energy to overcome activation energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Only saying particles move faster.",
      "Avoid: Forgetting activation energy.",
      "Avoid: Saying activation energy increases.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rates. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the effect of concentration on the rate of reaction between sodium thiosulfate and hydrochloric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use different concentrations of sodium thiosulfate.",
        keywords: [["different", "concentrations", "sodium"]],
      },
      {
        point: "Keep volume of sodium thiosulfate and hydrochloric acid constant.",
        keywords: [["keep", "volume", "sodium"]],
      },
      {
        point: "Keep temperature constant.",
        keywords: [["keep", "temperature", "constant"]],
      },
      {
        point: "Place the flask on a cross.",
        keywords: [["place", "flask", "cross"]],
      },
      {
        point: "Add hydrochloric acid and start the timer.",
        keywords: [["hydrochloric", "acid", "start"]],
      },
      {
        point: "Record the time for the cross to disappear and repeat.",
        keywords: [["record", "time", "cross"]],
      },
    ],
    examinerKeywords: ["sodium thiosulfate", "hydrochloric acid", "concentration", "cross", "rate"],
    modelAnswer:
      "Use different concentrations of sodium thiosulfate while keeping volumes and temperature constant. Place the flask on a cross, add hydrochloric acid and start the timer. Record the time for the cross to disappear, then repeat and calculate a mean.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing temperature as well as concentration.",
      "Avoid: Not starting the timer when acid is added.",
      "Avoid: Not repeating.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rates practical. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a catalyst affects rate of reaction and activation energy.",
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
        point: "More particles have enough energy to react, increasing the rate.",
        keywords: [["more", "particles", "enough"]],
      },
    ],
    examinerKeywords: ["catalyst", "alternative pathway", "activation energy", "rate"],
    modelAnswer:
      "A catalyst provides an alternative pathway with lower activation energy. More particles have enough energy to react, so the rate increases.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying catalysts are used up.",
      "Avoid: Saying catalysts increase activation energy.",
      "Avoid: Saying catalysts change the products.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Catalysts. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe dynamic equilibrium.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Dynamic equilibrium occurs in a closed system.",
        keywords: [["dynamic", "equilibrium", "occurs"]],
      },
      {
        point: "The forward and reverse reactions continue.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "The forward and reverse reactions happen at the same rate.",
        keywords: [["forward", "reverse", "reactions"]],
      },
      {
        point: "The concentrations of reactants and products remain constant.",
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
      "Dynamic equilibrium occurs in a closed system when forward and reverse reactions continue at the same rate, so the concentrations of reactants and products remain constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying reactions stop at equilibrium.",
      "Avoid: Saying concentrations must be equal.",
      "Avoid: Forgetting closed system.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Equilibrium. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
        point: "Lower temperature gives higher ammonia yield.",
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
      "The forward reaction is exothermic, so a lower temperature gives a higher ammonia yield. However, the rate would be too slow. A compromise temperature gives a reasonable yield and a reasonable rate.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying high temperature gives the highest yield.",
      "Avoid: Only discussing rate.",
      "Avoid: Only discussing yield.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Haber process. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
    examinerKeywords: ["crude oil", "fractional distillation", "boiling point", "condense"],
    modelAnswer:
      "Crude oil is heated and vaporised. The vapours enter a fractionating column that is hotter at the bottom and cooler at the top. Hydrocarbons condense at different heights depending on their boiling points, so fractions are collected.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying crude oil is separated by filtration.",
      "Avoid: Forgetting boiling points.",
      "Avoid: Saying all fractions condense at the same height.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Crude oil. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
    examinerKeywords: ["cracking", "long-chain hydrocarbons", "short-chain", "alkenes", "polymers"],
    modelAnswer:
      "Cracking breaks long-chain hydrocarbons into shorter hydrocarbons, which are more useful as fuels. It also produces alkenes, which can be used to make polymers.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying cracking joins molecules together.",
      "Avoid: Saying cracking only produces alkanes.",
      "Avoid: Forgetting alkenes.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Cracking. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
    hints: [
      "Avoid: Saying bromine water turns blue.",
      "Avoid: Saying alkanes decolourise bromine water without UV light.",
      "Avoid: Forgetting colourless.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Alkenes. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "Write",
    questionText: "Write a balanced equation for the complete combustion of propane.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Correct reactants are C3H8 and O2.",
        keywords: [["correct", "reactants", "c3h8"]],
      },
      {
        point: "Correct products are CO2 and H2O.",
        keywords: [["correct", "products"]],
      },
      {
        point: "Balanced equation: C3H8 + 5O2 → 3CO2 + 4H2O.",
        keywords: [["balanced", "equation", "c3h8"]],
      },
    ],
    examinerKeywords: ["propane", "combustion", "balanced equation", "carbon dioxide", "water"],
    modelAnswer: "C3H8 + 5O2 → 3CO2 + 4H2O",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting oxygen.",
      "Avoid: Writing carbon monoxide as the product.",
      "Avoid: Not balancing oxygen.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Organic chemistry. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
        point: "Cream precipitate with acidified silver nitrate shows bromide ions.",
        keywords: [["cream", "precipitate", "acidified"]],
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
    hints: [
      "Avoid: Writing potassium chloride.",
      "Avoid: Writing sodium bromide.",
      "Avoid: Ignoring one test result.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Chemical analysis. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
      "Avoid: Saying hydrogen relights a glowing splint.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas tests. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why carbon dioxide levels in the early atmosphere decreased over time.",
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
        point: "Sedimentary rocks formed.",
        keywords: [["sedimentary", "rocks", "formed"]],
      },
      {
        point: "Plants and algae used carbon dioxide in photosynthesis.",
        keywords: [["plants", "algae", "used"]],
      },
    ],
    examinerKeywords: [
      "carbon dioxide",
      "oceans",
      "carbonates",
      "photosynthesis",
      "sedimentary rocks",
    ],
    modelAnswer:
      "Carbon dioxide decreased because it dissolved in oceans and became locked up in carbonates and sedimentary rocks. Plants and algae also removed carbon dioxide by photosynthesis.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying carbon dioxide only increased over time.",
      "Avoid: Forgetting photosynthesis.",
      "Avoid: Saying oxygen caused the decrease directly.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atmosphere. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
        point: "More greenhouse gases cause more energy to be retained, increasing temperature.",
        keywords: [["more", "greenhouse", "gases"]],
      },
    ],
    examinerKeywords: ["greenhouse gases", "infrared radiation", "global warming", "temperature"],
    modelAnswer:
      "The Earth's surface emits infrared radiation. Greenhouse gases absorb this radiation and re-radiate energy back towards Earth. More greenhouse gases mean more energy is retained, increasing global temperature.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying greenhouse gases block all sunlight.",
      "Avoid: Forgetting infrared radiation.",
      "Avoid: Saying nitrogen is the main greenhouse gas.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Greenhouse effect. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how oxides of nitrogen are formed in car engines and why they are harmful.",
    marks: 4,
    markSchemePoints: [
      {
        point: "High temperatures in engines cause nitrogen and oxygen from the air to react.",
        keywords: [["high", "temperatures", "engines"]],
      },
      {
        point: "Oxides of nitrogen are formed.",
        keywords: [["oxides", "nitrogen", "formed"]],
      },
      {
        point: "Oxides of nitrogen can cause acid rain.",
        keywords: [["oxides", "nitrogen", "cause"]],
      },
      {
        point: "They can cause respiratory problems or photochemical smog.",
        keywords: [["cause", "respiratory", "problems"]],
      },
    ],
    examinerKeywords: [
      "oxides of nitrogen",
      "car engines",
      "high temperature",
      "acid rain",
      "respiratory",
    ],
    modelAnswer:
      "At high engine temperatures, nitrogen and oxygen from the air react to form oxides of nitrogen. These can cause acid rain, respiratory problems and photochemical smog.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying nitrogen oxides come from sulfur in fuel.",
      "Avoid: Forgetting high temperature.",
      "Avoid: Only naming the pollutant without harm.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atmospheric pollutants. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
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
        point: "Chlorination, ozone or ultraviolet light can be used for sterilisation.",
        keywords: [["chlorination", "ozone", "ultraviolet"]],
      },
    ],
    examinerKeywords: [
      "potable water",
      "sedimentation",
      "filtration",
      "sterilisation",
      "chlorination",
    ],
    modelAnswer:
      "Fresh water is treated by sedimentation to remove large solids, filtration to remove insoluble particles and sterilisation to kill microbes. Chlorine, ozone or ultraviolet light can be used for sterilisation.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying filtration removes dissolved salts.",
      "Avoid: Forgetting sterilisation.",
      "Avoid: Calling potable water pure water.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Potable water. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how sewage is treated.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Screening removes large objects.",
        keywords: [["screening", "removes", "large"]],
      },
      {
        point: "Sedimentation separates sludge from effluent.",
        keywords: [["sedimentation", "separates", "sludge"]],
      },
      {
        point: "The effluent is treated aerobically.",
        keywords: [["effluent", "treated", "aerobically"]],
      },
      {
        point: "Sludge is treated by anaerobic digestion.",
        keywords: [["sludge", "treated", "anaerobic"]],
      },
    ],
    examinerKeywords: ["sewage", "screening", "sedimentation", "effluent", "sludge"],
    modelAnswer:
      "Sewage is screened to remove large objects. Sedimentation separates sludge from effluent. Effluent is treated aerobically, while sludge is treated by anaerobic digestion.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying sewage is only filtered once.",
      "Avoid: Confusing sludge and effluent.",
      "Avoid: Forgetting biological treatment.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Waste water. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State four stages considered in a life cycle assessment.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Extracting and processing raw materials.",
        keywords: [["extracting", "processing", "materials"]],
      },
      {
        point: "Manufacturing the product.",
        keywords: [["manufacturing", "product"]],
      },
      {
        point: "Using the product.",
        keywords: [["product"]],
      },
      {
        point: "Disposal, recycling or reuse at the end of life.",
        keywords: [["disposal", "recycling", "reuse"]],
      },
    ],
    examinerKeywords: ["life cycle assessment", "raw materials", "manufacture", "use", "disposal"],
    modelAnswer:
      "A life cycle assessment considers raw material extraction, manufacture, use, and disposal, reuse or recycling at the end of life.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Only considering disposal.",
      "Avoid: Ignoring raw materials.",
      "Avoid: Ignoring product use.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Life cycle assessment. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how galvanising prevents iron from rusting.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Iron is coated with zinc.",
        keywords: [["iron", "coated", "zinc"]],
      },
      {
        point: "Zinc acts as a barrier to oxygen and water.",
        keywords: [["zinc", "acts", "barrier"]],
      },
      {
        point: "Zinc is more reactive than iron.",
        keywords: [["zinc", "more", "reactive"]],
      },
      {
        point: "Zinc gives sacrificial protection if the coating is scratched.",
        keywords: [["zinc", "gives", "sacrificial"]],
      },
    ],
    examinerKeywords: ["galvanising", "zinc", "barrier", "sacrificial protection", "rusting"],
    modelAnswer:
      "Galvanising coats iron with zinc. Zinc acts as a barrier to water and oxygen. If scratched, zinc corrodes instead of iron because it is more reactive, giving sacrificial protection.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Only mentioning barrier protection.",
      "Avoid: Saying zinc is less reactive than iron.",
      "Avoid: Forgetting water or oxygen.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Corrosion. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why ammonia is useful in making fertilisers.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ammonia contains nitrogen.",
        keywords: [["ammonia", "contains", "nitrogen"]],
      },
      {
        point: "Nitrogen is needed for plant growth.",
        keywords: [["nitrogen", "plant", "growth"]],
      },
      {
        point: "Ammonia can be used to make ammonium salts or NPK fertilisers.",
        keywords: [["ammonia", "used", "make"]],
      },
    ],
    examinerKeywords: ["ammonia", "nitrogen", "fertilisers", "plant growth"],
    modelAnswer:
      "Ammonia contains nitrogen, which plants need for growth. It can be used to make ammonium salts and NPK fertilisers.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying ammonia contains phosphorus.",
      "Avoid: Forgetting nitrogen.",
      "Avoid: Not linking to plant growth.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Fertilisers. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-paper2-mixed-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how chemistry can reduce environmental impact when using fuels, materials and water.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Cleaner fuels or fuel cells can reduce greenhouse gas emissions during use.",
        keywords: [["cleaner", "fuels", "fuel"]],
      },
      {
        point: "Catalytic converters reduce harmful pollutants from vehicles.",
        keywords: [["catalytic", "converters", "reduce"]],
      },
      {
        point: "Life cycle assessments compare environmental impacts of products.",
        keywords: [["life", "cycle", "assessments"]],
      },
      {
        point: "Recycling reduces waste and conserves finite resources.",
        keywords: [["recycling", "reduces", "waste"]],
      },
      {
        point: "Water treatment makes potable water safely.",
        keywords: [["water", "treatment", "makes"]],
      },
      {
        point: "Waste water treatment reduces pollution before water is released.",
        keywords: [["waste", "water", "treatment"]],
      },
    ],
    examinerKeywords: ["environmental impact", "fuels", "materials", "water", "recycling", "LCA"],
    modelAnswer:
      "Chemistry can reduce environmental impact by using cleaner fuels or fuel cells, catalytic converters to reduce vehicle pollutants, and life cycle assessments to compare products. Recycling conserves resources and reduces waste, while water and waste water treatment provide safe water and reduce pollution.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing one area.",
      "Avoid: Not linking chemistry to environmental impact.",
      "Avoid: Forgetting water treatment.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to prepare a pure dry sample of copper sulfate crystals from copper oxide and sulfuric acid.",
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
        point: "Heat the filtrate until nearly saturated.",
        keywords: [["heat", "filtrate", "until"]],
      },
      {
        point: "Cool, filter and dry the crystals.",
        keywords: [["cool", "filter", "crystals"]],
      },
    ],
    examinerKeywords: ["making salts", "copper sulfate", "excess", "filter", "crystallisation"],
    modelAnswer:
      "Warm dilute sulfuric acid and add excess copper oxide while stirring. When no more reacts, filter off the excess solid. Heat the filtrate until nearly saturated, cool to form crystals, then filter and dry the crystals.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Not using excess copper oxide.",
      "Avoid: Evaporating completely to dryness.",
      "Avoid: Using copper metal instead of copper oxide.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Making salts. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the electrolysis of an aqueous solution using inert electrodes.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Place the electrolyte in a beaker or electrolysis cell.",
        keywords: [["place", "electrolyte", "beaker"]],
      },
      {
        point: "Insert inert electrodes such as graphite.",
        keywords: [["insert", "inert", "electrodes"]],
      },
      {
        point: "Connect the electrodes to a direct current power supply.",
        keywords: [["connect", "electrodes", "direct"]],
      },
      {
        point: "Collect or test products at each electrode.",
        keywords: [["collect", "test", "products"]],
      },
      {
        point: "Record observations at the cathode and anode.",
        keywords: [["record", "observations", "cathode"]],
      },
    ],
    examinerKeywords: ["electrolysis", "aqueous solution", "inert electrodes", "cathode", "anode"],
    modelAnswer:
      "Place the electrolyte in a beaker and insert graphite electrodes. Connect the electrodes to a direct current power supply. Collect or test the products formed at each electrode and record observations.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using alternating current.",
      "Avoid: Not identifying cathode and anode.",
      "Avoid: Using reactive electrodes when inert electrodes are required.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electrolysis. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the temperature change when hydrochloric acid reacts with sodium hydroxide solution.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure a fixed volume of hydrochloric acid.",
        keywords: [["measure", "fixed", "volume"]],
      },
      {
        point: "Record the initial temperature.",
        keywords: [["record", "initial", "temperature"]],
      },
      {
        point: "Add a measured volume of sodium hydroxide solution.",
        keywords: [["measured", "volume", "sodium"]],
      },
      {
        point: "Stir the mixture.",
        keywords: [["stir", "mixture"]],
      },
      {
        point: "Record the highest or final temperature and calculate the temperature change.",
        keywords: [["record", "highest", "final"]],
      },
    ],
    examinerKeywords: ["temperature change", "acid", "alkali", "neutralisation", "thermometer"],
    modelAnswer:
      "Measure a fixed volume of hydrochloric acid and record its initial temperature. Add a measured volume of sodium hydroxide, stir, then record the highest temperature reached. Calculate the temperature change.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Not recording initial temperature.",
      "Avoid: Not stirring.",
      "Avoid: Changing volumes without controlling them.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Temperature change. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate the effect of surface area on the rate of reaction between calcium carbonate and hydrochloric acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use different sizes of calcium carbonate pieces or powder.",
        keywords: [["different", "sizes", "calcium"]],
      },
      {
        point: "Keep mass of calcium carbonate constant.",
        keywords: [["keep", "mass", "calcium"]],
      },
      {
        point: "Keep volume and concentration of acid constant.",
        keywords: [["keep", "volume", "concentration"]],
      },
      {
        point: "Collect carbon dioxide gas using a gas syringe.",
        keywords: [["collect", "carbon", "dioxide"]],
      },
      {
        point: "Measure gas volume at regular time intervals.",
        keywords: [["measure", "volume", "regular"]],
      },
      {
        point: "Repeat and calculate a mean.",
        keywords: [["repeat", "calculate", "mean"]],
      },
    ],
    examinerKeywords: [
      "surface area",
      "calcium carbonate",
      "hydrochloric acid",
      "gas syringe",
      "rate",
    ],
    modelAnswer:
      "Use calcium carbonate pieces of different sizes while keeping the mass constant. React each with the same volume and concentration of hydrochloric acid. Collect carbon dioxide with a gas syringe, measure volume over time, repeat and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing mass and surface area together.",
      "Avoid: Not measuring time.",
      "Avoid: Not controlling acid concentration.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rates of reaction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to carry out paper chromatography to separate dyes.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Draw a pencil baseline on chromatography paper.",
        keywords: [["draw", "pencil", "baseline"]],
      },
      {
        point: "Place a small spot of dye on the baseline.",
        keywords: [["place", "small", "spot"]],
      },
      {
        point: "Place the paper in solvent with the solvent below the baseline.",
        keywords: [["place", "paper", "solvent"]],
      },
      {
        point: "Allow the solvent to rise up the paper.",
        keywords: [["allow", "solvent", "rise"]],
      },
      {
        point: "Remove the paper and mark the solvent front.",
        keywords: [["remove", "paper", "mark"]],
      },
    ],
    examinerKeywords: ["chromatography", "pencil baseline", "solvent", "solvent front"],
    modelAnswer:
      "Draw a pencil baseline and place a dye spot on it. Put the paper in solvent with the solvent level below the baseline. Let the solvent rise, then remove the paper and mark the solvent front.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Drawing the baseline in ink.",
      "Avoid: Putting the solvent above the spot.",
      "Avoid: Forgetting the solvent front.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Chromatography. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to obtain potable water from a sample of dirty fresh water.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Allow sedimentation to remove large solids.",
        keywords: [["allow", "sedimentation", "remove"]],
      },
      {
        point: "Filter the water to remove insoluble particles.",
        keywords: [["filter", "water", "remove"]],
      },
      {
        point: "Sterilise the water to kill microbes.",
        keywords: [["sterilise", "water", "kill"]],
      },
      {
        point: "Use chlorine, ozone or ultraviolet light for sterilisation.",
        keywords: [["chlorine", "ozone", "ultraviolet"]],
      },
    ],
    examinerKeywords: ["potable water", "sedimentation", "filtration", "sterilisation"],
    modelAnswer:
      "Allow solids to settle by sedimentation, then filter the water to remove insoluble particles. Sterilise the water using chlorine, ozone or ultraviolet light to kill microbes.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Calling potable water pure water.",
      "Avoid: Saying filtration removes dissolved salts.",
      "Avoid: Forgetting sterilisation.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Water purification. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to carry out an acid-alkali titration accurately.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a pipette to measure a fixed volume of alkali into a conical flask.",
        keywords: [["pipette", "measure", "fixed"]],
      },
      {
        point: "Add a few drops of indicator.",
        keywords: [["drops", "indicator"]],
      },
      {
        point: "Fill a burette with acid.",
        keywords: [["fill", "burette", "acid"]],
      },
      {
        point: "Add acid slowly while swirling the flask.",
        keywords: [["acid", "slowly", "while"]],
      },
      {
        point: "Stop at the end-point when the indicator changes colour.",
        keywords: [["stop", "end-point", "indicator"]],
      },
      {
        point: "Repeat until concordant titres are obtained.",
        keywords: [["repeat", "until", "concordant"]],
      },
    ],
    examinerKeywords: ["titration", "pipette", "burette", "indicator", "concordant"],
    modelAnswer:
      "Use a pipette to add a fixed volume of alkali to a conical flask and add indicator. Fill a burette with acid and add it slowly while swirling. Stop at the end-point and repeat until concordant titres are obtained.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using a measuring cylinder instead of a pipette.",
      "Avoid: Only doing one titre.",
      "Avoid: Adding too much indicator.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Titration. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "State",
    questionText:
      "State the independent variable, dependent variable and one control variable when investigating the effect of concentration on rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Independent variable is concentration.",
        keywords: [["independent", "variable", "concentration"]],
      },
      {
        point: "Dependent variable is rate or time taken.",
        keywords: [["dependent", "variable", "rate"]],
      },
      {
        point: "A control variable could be temperature, volume or mass of reactant.",
        keywords: [["control", "variable", "could"]],
      },
    ],
    examinerKeywords: [
      "independent variable",
      "dependent variable",
      "control variable",
      "concentration",
      "rate",
    ],
    modelAnswer:
      "The independent variable is concentration. The dependent variable is rate or time taken. One control variable is temperature.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Calling rate the independent variable.",
      "Avoid: Not giving a control variable.",
      "Avoid: Changing more than one variable.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Variables. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
    hints: [
      "Avoid: Saying repeats remove all errors.",
      "Avoid: Forgetting anomalies.",
      "Avoid: Saying repeats improve validity only.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Repeat readings. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Identify",
    questionText:
      "A student records 28 s, 29 s, 60 s and 27 s. Identify the anomalous result and calculate the mean of the reliable results.",
    marks: 3,
    markSchemePoints: [
      {
        point: "60 s is anomalous.",
        keywords: [["anomalous"]],
      },
      {
        point: "Mean = (28 + 29 + 27) ÷ 3.",
        keywords: [["mean"]],
      },
      {
        point: "Mean = 28 s.",
        keywords: [["mean"]],
      },
    ],
    examinerKeywords: ["anomalous result", "mean", "28 s"],
    modelAnswer: "60 s is anomalous. Mean of reliable results = (28 + 29 + 27) ÷ 3 = 28 s.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Including the anomalous result.",
      "Avoid: Choosing the lowest value as anomalous.",
      "Avoid: Not dividing by three.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Anomalies. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
    hints: [
      "Avoid: Writing beaker.",
      "Avoid: Writing test tube.",
      "Avoid: Writing measuring cylinder for exact 25.0 cm3.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Measuring volume. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
    hints: [
      "Avoid: Writing pipette.",
      "Avoid: Writing measuring cylinder.",
      "Avoid: Writing conical flask.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Burette. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to read a measuring cylinder accurately.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Place the measuring cylinder on a flat surface.",
        keywords: [["place", "measuring", "cylinder"]],
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
    hints: [
      "Avoid: Reading from above.",
      "Avoid: Reading the top of the meniscus.",
      "Avoid: Holding the cylinder in the air.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Meniscus. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
      "Avoid: Using evaporation.",
      "Avoid: Confusing residue and filtrate.",
      "Avoid: Saying the solid dissolves.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Filtration. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1",
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
    examinerKeywords: ["crystallisation", "evaporation", "cooling", "dry crystals"],
    modelAnswer:
      "Heat the solution until it is nearly saturated, then leave it to cool so crystals form. Filter the crystals and dry them.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Evaporating completely to dryness.",
      "Avoid: Forgetting cooling.",
      "Avoid: Not filtering crystals.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Crystallisation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A spot moves 3.2 cm and the solvent front moves 8.0 cm. Calculate the Rf value.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rf = distance moved by spot ÷ distance moved by solvent front.",
        keywords: [["distance", "moved", "spot"]],
      },
      {
        point: "Rf = 3.2 ÷ 8.0.",
        keywords: [["rf", "chromatography"]],
      },
      {
        point: "Rf = 0.40.",
        keywords: [["rf", "chromatography"]],
      },
    ],
    examinerKeywords: ["Rf", "chromatography", "solvent front", "0.40"],
    modelAnswer: "Rf = 3.2 ÷ 8.0 = 0.40.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing solvent front by spot distance.",
      "Avoid: Adding units to Rf.",
      "Avoid: Using total paper length instead of solvent front.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rf values. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the difference between accuracy and precision.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Accuracy is closeness to the true or accepted value.",
        keywords: [["accuracy", "closeness", "true"]],
      },
      {
        point: "Precision is closeness of repeat readings to each other.",
        keywords: [["precision", "closeness", "repeat"]],
      },
      {
        point: "Accurate results are near the correct value.",
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
      "Avoid: Saying precise results are always accurate.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Accuracy and precision. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
      "A good graph has labelled axes with units, a suitable scale and accurately plotted points with a line or curve of best fit.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting units.",
      "Avoid: Using an uneven scale.",
      "Avoid: Joining points dot-to-dot when a best-fit curve is needed.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Graph skills. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
    hints: [
      "Avoid: Heating directly with a Bunsen burner.",
      "Avoid: Using large volumes.",
      "Avoid: Not wearing eye protection.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Safety. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-practical-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
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
        point: "Identify anomalies and follow safety precautions.",
        keywords: [["identify", "anomalies", "follow"]],
      },
    ],
    examinerKeywords: ["valid", "reliable", "variables", "repeat", "safety"],
    modelAnswer:
      "A valid experiment changes only the independent variable and keeps control variables constant. The dependent variable should be measured accurately using suitable apparatus. Repeats should be done, anomalies identified and a mean calculated, while following safety precautions.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing several variables at once.",
      "Avoid: Not repeating the experiment.",
      "Avoid: Ignoring safety.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended response. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why sodium chloride has a high melting point and conducts electricity when molten.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Sodium chloride has a giant ionic lattice.",
        keywords: [["sodium", "chloride", "giant"]],
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
        point: "Solid sodium chloride has ions fixed in position.",
        keywords: [["solid", "sodium", "chloride"]],
      },
      {
        point: "Molten sodium chloride has mobile ions.",
        keywords: [["molten", "sodium", "chloride"]],
      },
      {
        point: "Mobile ions carry charge.",
        keywords: [["mobile", "ions", "carry"]],
      },
    ],
    examinerKeywords: ["sodium chloride", "ionic lattice", "melting point", "mobile ions"],
    modelAnswer:
      "Sodium chloride has a giant ionic lattice with strong electrostatic attractions between oppositely charged ions, so it has a high melting point. It conducts when molten because the ions are mobile and can carry charge.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying electrons conduct in molten sodium chloride.",
      "Avoid: Forgetting giant ionic lattice.",
      "Avoid: Saying solid sodium chloride conducts.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Bonding and properties. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare the bonding and properties of diamond, graphite and graphene.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Diamond has each carbon atom bonded to four others.",
        keywords: [["diamond", "each", "carbon"]],
      },
      {
        point: "Diamond is hard and has a high melting point.",
        keywords: [["diamond", "hard", "high"]],
      },
      {
        point: "Graphite has layers with each carbon atom bonded to three others.",
        keywords: [["graphite", "layers", "each"]],
      },
      {
        point: "Graphite has delocalised electrons, so it conducts electricity.",
        keywords: [["graphite", "delocalised", "electrons"]],
      },
      {
        point: "Graphene is one layer of carbon atoms.",
        keywords: [["graphene", "layer", "carbon"]],
      },
      {
        point: "Graphene is strong and conducts electricity.",
        keywords: [["graphene", "strong", "conducts"]],
      },
    ],
    examinerKeywords: ["diamond", "graphite", "graphene", "carbon", "delocalised electrons"],
    modelAnswer:
      "Diamond has each carbon bonded to four others, making it hard with a high melting point. Graphite has layers where each carbon bonds to three others, leaving delocalised electrons that conduct electricity. Graphene is one layer of carbon atoms and is strong and conductive.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying diamond conducts electricity.",
      "Avoid: Saying graphite has no delocalised electrons.",
      "Avoid: Not mentioning graphene is one layer.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Structure comparison. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare the extraction of aluminium and iron.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Aluminium is more reactive than carbon.",
        keywords: [["aluminium", "more", "reactive"]],
      },
      {
        point: "Aluminium is extracted by electrolysis.",
        keywords: [["aluminium", "extracted", "electrolysis"]],
      },
      {
        point: "Aluminium oxide is dissolved in molten cryolite.",
        keywords: [["aluminium", "oxide", "dissolved"]],
      },
      {
        point: "Iron is less reactive than carbon.",
        keywords: [["iron", "less", "reactive"]],
      },
      {
        point: "Iron oxide is reduced by carbon monoxide.",
        keywords: [["iron", "oxide", "reduced"]],
      },
      {
        point: "Iron is extracted in a blast furnace.",
        keywords: [["iron", "extracted", "blast"]],
      },
    ],
    examinerKeywords: ["aluminium", "iron", "electrolysis", "blast furnace", "carbon monoxide"],
    modelAnswer:
      "Aluminium is more reactive than carbon, so it is extracted by electrolysis of aluminium oxide dissolved in molten cryolite. Iron is less reactive than carbon, so iron oxide is reduced by carbon monoxide in a blast furnace.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying aluminium is extracted with carbon.",
      "Avoid: Saying iron needs electrolysis.",
      "Avoid: Forgetting cryolite.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extraction. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Higher concentration gives more particles per unit volume, so collisions and successful collisions happen more frequently. Investigate using different concentrations while keeping temperature, volume and solid mass or surface area constant, then measure gas volume over time or time for a fixed change.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying concentration changes activation energy.",
      "Avoid: Changing several variables.",
      "Avoid: Not measuring time.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rates and practicals. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how temperature, pressure and catalyst affect the Haber process.",
    marks: 6,
    markSchemePoints: [
      {
        point: "The forward reaction is exothermic.",
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
    examinerKeywords: ["Haber process", "temperature", "pressure", "catalyst", "yield"],
    modelAnswer:
      "The forward Haber reaction is exothermic, so lower temperature gives a higher ammonia yield but slower rate, so a compromise temperature is used. High pressure favours ammonia because there are fewer gas molecules on the product side but is expensive. Iron catalyst increases rate but not yield.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying catalysts increase yield.",
      "Avoid: Forgetting compromise conditions.",
      "Avoid: Counting atoms instead of gas molecules.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Haber process. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
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
      "Crude oil is a mixture of hydrocarbons separated by fractional distillation because hydrocarbons have different boiling points. Cracking breaks less useful long-chain hydrocarbons into shorter alkanes and alkenes. Alkanes are useful fuels and alkenes can make polymers.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying crude oil is pure.",
      "Avoid: Saying cracking joins molecules together.",
      "Avoid: Forgetting alkenes.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Organic chemistry. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how chemical tests can identify unknown ions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Flame tests identify some metal ions by flame colour.",
        keywords: [["flame", "tests", "identify"]],
      },
      {
        point: "Sodium hydroxide solution identifies some cations by precipitate colour.",
        keywords: [["sodium", "hydroxide", "solution"]],
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
        point: "Barium chloride identifies sulfate ions by a white precipitate.",
        keywords: [["barium", "chloride", "identifies"]],
      },
      {
        point: "Carbonates react with acid to produce carbon dioxide, which turns limewater milky.",
        keywords: [["carbonates", "react", "acid"]],
      },
    ],
    examinerKeywords: ["chemical tests", "flame tests", "precipitate", "ions", "unknown"],
    modelAnswer:
      "Flame tests identify some metal ions by flame colour. Sodium hydroxide identifies cations by precipitate colour and ammonium ions by ammonia gas. Acidified silver nitrate identifies halides, barium chloride identifies sulfates, and carbonates produce carbon dioxide with acid, turning limewater milky.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using only one test for every ion.",
      "Avoid: Not linking observations to ions.",
      "Avoid: Forgetting to acidify silver nitrate.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Chemical analysis. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
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
    examinerKeywords: [
      "early atmosphere",
      "carbon dioxide",
      "water vapour",
      "photosynthesis",
      "oxygen",
    ],
    modelAnswer:
      "The early atmosphere contained much carbon dioxide and water vapour. As Earth cooled, water vapour condensed to form oceans. Carbon dioxide dissolved in oceans and became locked in rocks. Algae and plants photosynthesised, reducing carbon dioxide and increasing oxygen.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying oxygen was always 21%.",
      "Avoid: Forgetting oceans.",
      "Avoid: Forgetting photosynthesis.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atmosphere. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
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
    examinerKeywords: [
      "fossil fuels",
      "carbon dioxide",
      "carbon monoxide",
      "acid rain",
      "greenhouse gas",
    ],
    modelAnswer:
      "Burning fossil fuels produces carbon dioxide, a greenhouse gas linked to climate change. Incomplete combustion produces toxic carbon monoxide, which reduces oxygen transport in blood. Sulfur dioxide and oxides of nitrogen can form and cause acid rain.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only mentioning carbon dioxide.",
      "Avoid: Confusing carbon monoxide with carbon dioxide.",
      "Avoid: Forgetting acid rain.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Pollution. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare the treatment of fresh water, sea water and waste water.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Fresh water can be made potable by sedimentation.",
        keywords: [["fresh", "water", "made"]],
      },
      {
        point: "Fresh water is filtered to remove insoluble particles.",
        keywords: [["fresh", "water", "filtered"]],
      },
      {
        point: "Fresh water is sterilised to kill microbes.",
        keywords: [["fresh", "water", "sterilised"]],
      },
      {
        point: "Sea water requires desalination because it contains dissolved salts.",
        keywords: [["water", "requires", "desalination"]],
      },
      {
        point: "Distillation or reverse osmosis can desalinate sea water.",
        keywords: [["distillation", "reverse", "osmosis"]],
      },
      {
        point: "Waste water treatment includes screening, sedimentation and biological treatment.",
        keywords: [["waste", "water", "treatment"]],
      },
    ],
    examinerKeywords: ["fresh water", "sea water", "waste water", "potable", "desalination"],
    modelAnswer:
      "Fresh water is treated by sedimentation, filtration and sterilisation. Sea water needs desalination, such as distillation or reverse osmosis, because it contains dissolved salts. Waste water is treated by screening, sedimentation and biological treatment.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying filtration removes dissolved salts.",
      "Avoid: Confusing potable water with pure water.",
      "Avoid: Ignoring waste water treatment.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Water treatment. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how recycling, life cycle assessments and renewable resources support sustainable development.",
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
        point: "Life cycle assessments compare environmental impacts across a product's life.",
        keywords: [["life", "cycle", "assessments"]],
      },
      {
        point: "LCAs help choose lower-impact products or processes.",
        keywords: [["lcas", "help", "choose"]],
      },
      {
        point: "Renewable resources can be replaced more quickly.",
        keywords: [["renewable", "resources", "replaced"]],
      },
      {
        point: "Using renewable resources reduces dependence on finite resources.",
        keywords: [["renewable", "resources", "reduces"]],
      },
    ],
    examinerKeywords: [
      "sustainability",
      "recycling",
      "life cycle assessment",
      "renewable resources",
    ],
    modelAnswer:
      "Recycling conserves finite resources and reduces landfill waste. Life cycle assessments compare environmental impacts across a product's life and help choose lower-impact options. Renewable resources can be replaced more quickly, reducing dependence on finite resources.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing recycling.",
      "Avoid: Saying LCAs only look at disposal.",
      "Avoid: Confusing renewable and finite resources.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Sustainability. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain the conditions needed for rusting and how galvanising prevents rusting.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Rusting requires water.",
        keywords: [["rusting", "requires", "water"]],
      },
      {
        point: "Rusting requires oxygen.",
        keywords: [["rusting", "requires", "oxygen"]],
      },
      {
        point: "Galvanising coats iron with zinc.",
        keywords: [["galvanising", "coats", "iron"]],
      },
      {
        point: "Zinc acts as a barrier to water and oxygen.",
        keywords: [["zinc", "acts", "barrier"]],
      },
      {
        point: "Zinc is more reactive than iron.",
        keywords: [["zinc", "more", "reactive"]],
      },
      {
        point: "Zinc gives sacrificial protection if scratched.",
        keywords: [["zinc", "gives", "sacrificial"]],
      },
    ],
    examinerKeywords: ["rusting", "water", "oxygen", "galvanising", "zinc"],
    modelAnswer:
      "Iron rusts when water and oxygen are present. Galvanising coats iron with zinc, which acts as a barrier. If scratched, zinc corrodes instead because it is more reactive, giving sacrificial protection.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying only oxygen is needed.",
      "Avoid: Only explaining barrier protection.",
      "Avoid: Saying zinc is less reactive than iron.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Corrosion. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText:
      "Compare alkanes, alkenes, alcohols and carboxylic acids using functional groups and reactions.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Alkanes are saturated hydrocarbons with single carbon-carbon bonds.",
        keywords: [["alkanes", "saturated", "hydrocarbons"]],
      },
      {
        point: "Alkanes undergo combustion.",
        keywords: [["alkanes", "undergo", "combustion"]],
      },
      {
        point: "Alkenes contain carbon-carbon double bonds.",
        keywords: [["alkenes", "contain", "carbon-carbon"]],
      },
      {
        point: "Alkenes decolourise bromine water and undergo addition reactions.",
        keywords: [["alkenes", "decolourise", "bromine"]],
      },
      {
        point: "Alcohols contain the -OH functional group and can be oxidised.",
        keywords: [["alcohols", "contain", "functional"]],
      },
      {
        point: "Carboxylic acids contain the -COOH functional group and react with carbonates.",
        keywords: [["carboxylic", "acids", "contain"]],
      },
    ],
    examinerKeywords: ["alkanes", "alkenes", "alcohols", "carboxylic acids", "functional group"],
    modelAnswer:
      "Alkanes are saturated hydrocarbons and combust. Alkenes contain C=C bonds, decolourise bromine water and undergo addition. Alcohols contain -OH and can be oxidised. Carboxylic acids contain -COOH and react with carbonates.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Confusing -OH and -COOH.",
      "Avoid: Saying alkanes contain C=C.",
      "Avoid: Saying alkenes are saturated.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Organic comparison. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how alkenes form polymers and why polymer disposal can cause environmental problems.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Alkenes contain carbon-carbon double bonds.",
        keywords: [["alkenes", "contain", "carbon-carbon"]],
      },
      {
        point: "The double bond opens during addition polymerisation.",
        keywords: [["double", "bond", "opens"]],
      },
      {
        point: "Many monomers join to form long polymer chains.",
        keywords: [["many", "monomers", "join"]],
      },
      {
        point: "Many polymers are non-biodegradable.",
        keywords: [["many", "polymers", "non-biodegradable"]],
      },
      {
        point: "They remain in landfill for a long time.",
        keywords: [["remain", "landfill", "long"]],
      },
      {
        point: "They may harm wildlife or release toxic gases when burned.",
        keywords: [["harm", "wildlife", "release"]],
      },
    ],
    examinerKeywords: [
      "alkenes",
      "addition polymerisation",
      "polymers",
      "non-biodegradable",
      "disposal",
    ],
    modelAnswer:
      "Alkenes form polymers when their double bonds open and many monomers join in addition polymerisation. Disposal is difficult because many polymers are non-biodegradable, remain in landfill, harm wildlife and may release toxic gases when burned.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying addition polymerisation produces water.",
      "Avoid: Saying polymers biodegrade quickly.",
      "Avoid: Using alkanes as monomers.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Polymers. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how to use a titration to find the concentration of an acid.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a pipette to measure a known volume of alkali into a conical flask.",
        keywords: [["pipette", "measure", "known"]],
      },
      {
        point: "Add indicator.",
        keywords: [["indicator"]],
      },
      {
        point: "Add acid from a burette until the end-point.",
        keywords: [["acid", "burette", "until"]],
      },
      {
        point: "Record the titre and repeat to obtain concordant results.",
        keywords: [["record", "titre", "repeat"]],
      },
      {
        point: "Use concentration × volume to calculate moles of the known solution.",
        keywords: [["concentration", "volume", "calculate"]],
      },
      {
        point: "Use the balanced equation and titre volume to calculate the acid concentration.",
        keywords: [["balanced", "equation", "titre"]],
      },
    ],
    examinerKeywords: ["titration", "concentration", "burette", "pipette", "moles"],
    modelAnswer:
      "Use a pipette to measure alkali into a flask and add indicator. Add acid from a burette to the end-point, record the titre and repeat for concordant results. Calculate moles of the known solution, use the balanced equation to find moles of acid, then divide by titre volume in dm3.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Not using the balanced equation.",
      "Avoid: Using one rough titre only.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Calculations and practicals. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why nanoparticles have different properties and why their use must be evaluated.",
    marks: 6,
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
        point: "This can make them more reactive.",
        keywords: [["make", "them", "more"]],
      },
      {
        point: "They can be useful in medicine, catalysts or sunscreens.",
        keywords: [["useful", "medicine", "catalysts"]],
      },
      {
        point: "They may enter cells or body tissues.",
        keywords: [["enter", "cells", "body"]],
      },
      {
        point: "Their long-term health or environmental effects may be unknown.",
        keywords: [["long-term", "health", "environmental"]],
      },
    ],
    examinerKeywords: ["nanoparticles", "surface area to volume ratio", "uses", "risks"],
    modelAnswer:
      "Nanoparticles are very small and have a high surface area to volume ratio, which can make them more reactive. They are useful in medicine, catalysts and sunscreens, but they may enter cells or tissues and their long-term health or environmental effects may be unknown.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying nanoparticles are always safe.",
      "Avoid: Ignoring surface area to volume ratio.",
      "Avoid: Giving uses without risks.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Nanoparticles and sustainability. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how activation energy links energy changes, reaction profiles, rates and catalysts.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Activation energy is the minimum energy needed for particles to react.",
        keywords: [["activation", "energy", "minimum"]],
      },
      {
        point: "Reaction profiles show the activation energy barrier.",
        keywords: [["reaction", "profiles", "show"]],
      },
      {
        point: "Higher temperature increases the proportion of particles with enough energy.",
        keywords: [["higher", "temperature", "increases"]],
      },
      {
        point: "This increases rate of reaction.",
        keywords: [["increases", "rate", "reaction"]],
      },
      {
        point: "Catalysts provide an alternative pathway with lower activation energy.",
        keywords: [["catalysts", "provide", "alternative"]],
      },
      {
        point: "More particles can react, so catalysts increase rate.",
        keywords: [["more", "particles", "react"]],
      },
    ],
    examinerKeywords: ["activation energy", "reaction profile", "temperature", "catalyst", "rate"],
    modelAnswer:
      "Activation energy is the minimum energy needed for reaction and is shown on reaction profiles. Higher temperature gives more particles enough energy to react, increasing rate. Catalysts provide an alternative pathway with lower activation energy, so more particles react and rate increases.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying catalysts increase activation energy.",
      "Avoid: Saying every collision is successful.",
      "Avoid: Not linking to reaction profiles.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Energy and rates. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
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
    examinerKeywords: [
      "electrolysis",
      "molten lead bromide",
      "oxidation",
      "reduction",
      "electrons",
    ],
    modelAnswer:
      "Pb2+ ions move to the cathode and gain electrons to form lead, so they are reduced. Br- ions move to the anode and lose electrons to form bromine, so they are oxidised.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Reversing oxidation and reduction.",
      "Avoid: Putting lead ions at the anode.",
      "Avoid: Forgetting bromine is Br2.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Electrolysis and redox. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate methods used to reduce carbon footprint.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Using renewable energy reduces fossil fuel use.",
        keywords: [["renewable", "energy", "reduces"]],
      },
      {
        point: "Improving energy efficiency reduces energy demand.",
        keywords: [["improving", "energy", "efficiency"]],
      },
      {
        point: "Public transport, walking or cycling reduces emissions from cars.",
        keywords: [["public", "transport", "walking"]],
      },
      {
        point: "Recycling reduces emissions from extracting and processing raw materials.",
        keywords: [["recycling", "reduces", "emissions"]],
      },
      {
        point: "Some methods may be expensive or require lifestyle changes.",
        keywords: [["some", "methods", "expensive"]],
      },
      {
        point: "A balanced judgement should be made about effectiveness and practicality.",
        keywords: [["balanced", "judgement", "should"]],
      },
    ],
    examinerKeywords: [
      "carbon footprint",
      "renewable energy",
      "efficiency",
      "recycling",
      "evaluation",
    ],
    modelAnswer:
      "Renewable energy and energy efficiency reduce fossil fuel use and energy demand. Public transport, walking and cycling reduce car emissions. Recycling reduces emissions from extracting raw materials. However, some methods are expensive or require lifestyle changes, so the best approach combines several practical methods.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only listing methods without evaluation.",
      "Avoid: Not giving limitations.",
      "Avoid: Forgetting a final judgement.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Climate change. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-synoptic-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how particles, electrons and energy link different areas of chemistry.",
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
        point: "Delocalised electrons explain metallic conductivity.",
        keywords: [["delocalised", "electrons", "explain"]],
      },
      {
        point: "Energy changes explain exothermic and endothermic reactions.",
        keywords: [["energy", "changes", "explain"]],
      },
      {
        point: "Activation energy and collision theory explain rates.",
        keywords: [["activation", "energy", "collision"]],
      },
    ],
    examinerKeywords: ["particles", "electrons", "energy", "bonding", "rates", "redox"],
    modelAnswer:
      "Particles explain states of matter and collision theory. Electron transfer explains ionic bonding, redox and electrolysis. Shared electrons explain covalent bonding, while delocalised electrons explain metallic conductivity. Energy changes explain exothermic and endothermic reactions, and activation energy explains rates.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only discussing one topic.",
      "Avoid: Not linking examples to particles, electrons or energy.",
      "Avoid: Forgetting rates or bonding.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Whole-course synoptic. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the relative formula mass of calcium nitrate, Ca(NO3)2. Ar: Ca = 40, N = 14, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "NO3 = 14 + 3 × 16 = 62.",
        keywords: [["relative formula mass", "calcium nitrate"]],
      },
      {
        point: "Two nitrate groups = 2 × 62 = 124.",
        keywords: [["nitrate", "groups"]],
      },
      {
        point: "Mr = 40 + 124 = 164.",
        keywords: [["relative formula mass", "calcium nitrate"]],
      },
    ],
    examinerKeywords: ["relative formula mass", "calcium nitrate", "164"],
    modelAnswer: "Mr = 40 + 2(14 + 3 × 16) = 40 + 124 = 164.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting two nitrate groups.",
      "Avoid: Counting oxygen only once.",
      "Avoid: Using atomic numbers instead of relative atomic masses.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Relative formula mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the percentage by mass of oxygen in calcium carbonate, CaCO3. Ar: Ca = 40, C = 12, O = 16.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mr of CaCO3 = 40 + 12 + 3 × 16 = 100.",
        keywords: [["caco3"]],
      },
      {
        point: "Mass of oxygen = 3 × 16 = 48.",
        keywords: [["mass", "oxygen"]],
      },
      {
        point: "Percentage oxygen = 48 ÷ 100 × 100.",
        keywords: [["percentage", "oxygen"]],
      },
      {
        point: "Percentage oxygen = 48%.",
        keywords: [["percentage", "oxygen"]],
      },
    ],
    examinerKeywords: ["percentage by mass", "oxygen", "calcium carbonate", "48%"],
    modelAnswer:
      "Mr of CaCO3 = 100. Mass of oxygen = 48. Percentage oxygen = 48 ÷ 100 × 100 = 48%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using one oxygen atom only.",
      "Avoid: Forgetting ×100.",
      "Avoid: Dividing 100 by 48.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Percentage by mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the number of moles in 8.0 g of copper oxide, CuO. Ar: Cu = 64, O = 16.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Mr of CuO = 64 + 16 = 80.",
        keywords: [["moles", "copper oxide"]],
      },
      {
        point: "Moles = mass ÷ Mr.",
        keywords: [["moles", "mass"]],
      },
      {
        point: "Moles = 8.0 ÷ 80 = 0.10 mol.",
        keywords: [["moles"]],
      },
    ],
    examinerKeywords: ["moles", "copper oxide", "Mr", "0.10 mol"],
    modelAnswer: "Mr of CuO = 80. Moles = 8.0 ÷ 80 = 0.10 mol.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using copper mass only.",
      "Avoid: Multiplying mass by Mr.",
      "Avoid: Forgetting units.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Moles from mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the mass of 0.40 mol of sodium chloride, NaCl. Ar: Na = 23, Cl = 35.5.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Mr of NaCl = 23 + 35.5 = 58.5.",
        keywords: [["nacl"]],
      },
      {
        point: "Mass = moles × Mr.",
        keywords: [["mass", "moles"]],
      },
      {
        point: "Mass = 0.40 × 58.5 = 23.4 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["mass", "moles", "sodium chloride", "23.4 g"],
    modelAnswer: "Mr of NaCl = 58.5. Mass = 0.40 × 58.5 = 23.4 g.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing moles by Mr.",
      "Avoid: Using chlorine as 35 only if 35.5 is given.",
      "Avoid: Forgetting grams.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Mass from moles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the mass of iron produced from 16.0 g of iron(III) oxide. Fe2O3 + 3CO → 2Fe + 3CO2. Mr: Fe2O3 = 160, Ar: Fe = 56.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of Fe2O3 = 16.0 ÷ 160 = 0.100 mol.",
        keywords: [["moles", "fe2o3"]],
      },
      {
        point: "Mole ratio Fe2O3 : Fe is 1 : 2.",
        keywords: [["mole", "ratio", "fe2o3"]],
      },
      {
        point: "Moles of Fe = 0.200 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Mass = moles × Ar.",
        keywords: [["mass", "moles"]],
      },
      {
        point: "Mass of Fe = 0.200 × 56 = 11.2 g.",
        keywords: [["mass"]],
      },
    ],
    examinerKeywords: ["reacting masses", "iron oxide", "iron", "moles", "11.2 g"],
    modelAnswer:
      "Moles Fe2O3 = 16.0 ÷ 160 = 0.100 mol. Ratio Fe2O3:Fe is 1:2, so moles Fe = 0.200 mol. Mass Fe = 0.200 × 56 = 11.2 g.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Ignoring the 1:2 mole ratio.",
      "Avoid: Using 160 as the mass of iron.",
      "Avoid: Multiplying by carbon monoxide.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Reacting masses. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the volume of carbon dioxide produced from 0.25 mol of carbon dioxide gas at room temperature and pressure. Molar gas volume = 24 dm3/mol.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Volume = moles × 24.",
        keywords: [["volume", "moles"]],
      },
      {
        point: "Volume = 0.25 × 24 = 6.0 dm3.",
        keywords: [["volume"]],
      },
    ],
    examinerKeywords: ["gas volume", "moles", "24 dm3", "6.0 dm3"],
    modelAnswer: "Volume = 0.25 × 24 = 6.0 dm3.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Dividing 0.25 by 24.",
      "Avoid: Forgetting units.",
      "Avoid: Using cm3 without conversion.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas volume. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calcium carbonate decomposes: CaCO3 → CaO + CO2. Calculate the volume of CO2 produced from 5.0 g of CaCO3 at room temperature and pressure. Mr: CaCO3 = 100. Molar gas volume = 24 dm3/mol.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of CaCO3 = 5.0 ÷ 100 = 0.050 mol.",
        keywords: [["moles", "caco3"]],
      },
      {
        point: "Mole ratio CaCO3 : CO2 is 1 : 1.",
        keywords: [["mole", "ratio", "caco3"]],
      },
      {
        point: "Moles of CO2 = 0.050 mol.",
        keywords: [["moles"]],
      },
      {
        point: "Volume = moles × 24.",
        keywords: [["volume", "moles"]],
      },
      {
        point: "Volume = 0.050 × 24 = 1.2 dm3.",
        keywords: [["volume"]],
      },
    ],
    examinerKeywords: ["calcium carbonate", "carbon dioxide", "gas volume", "1.2 dm3"],
    modelAnswer:
      "Moles CaCO3 = 5.0 ÷ 100 = 0.050 mol. Ratio CaCO3:CO2 is 1:1, so 0.050 mol CO2 forms. Volume = 0.050 × 24 = 1.2 dm3.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using mass directly in the gas volume equation.",
      "Avoid: Forgetting mole ratio.",
      "Avoid: Using 24 as Mr.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Gas volume from mass. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the concentration in g/dm3 when 12.0 g of glucose is dissolved to make 300 cm3 of solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert 300 cm3 to 0.300 dm3.",
        keywords: [["convert"]],
      },
      {
        point: "Concentration = mass ÷ volume.",
        keywords: [["concentration", "mass", "volume"]],
      },
      {
        point: "Concentration = 12.0 ÷ 0.300.",
        keywords: [["concentration"]],
      },
      {
        point: "Concentration = 40 g/dm3.",
        keywords: [["concentration"]],
      },
    ],
    examinerKeywords: ["concentration", "g/dm3", "volume", "40"],
    modelAnswer: "300 cm3 = 0.300 dm3. Concentration = 12.0 ÷ 0.300 = 40 g/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Dividing volume by mass.",
      "Avoid: Writing 0.040 g/dm3.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Concentration g/dm3. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the concentration in mol/dm3 of a solution containing 0.075 mol of solute in 250 cm3 of solution.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert 250 cm3 to 0.250 dm3.",
        keywords: [["convert"]],
      },
      {
        point: "Concentration = moles ÷ volume.",
        keywords: [["concentration", "moles", "volume"]],
      },
      {
        point: "Concentration = 0.075 ÷ 0.250.",
        keywords: [["concentration"]],
      },
      {
        point: "Concentration = 0.300 mol/dm3.",
        keywords: [["concentration"]],
      },
    ],
    examinerKeywords: ["concentration", "mol/dm3", "0.300", "volume"],
    modelAnswer: "250 cm3 = 0.250 dm3. Concentration = 0.075 ÷ 0.250 = 0.300 mol/dm3.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Multiplying moles by volume.",
      "Avoid: Rounding too early.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Concentration mol/dm3. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "25.0 cm3 of 0.200 mol/dm3 sodium hydroxide is used in a titration. Calculate the moles of sodium hydroxide.",
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
        point: "Moles = 0.200 × 0.0250 = 0.00500 mol.",
        keywords: [["moles", "0250", "00500"]],
      },
    ],
    examinerKeywords: ["titration", "moles", "concentration", "volume", "0.00500 mol"],
    modelAnswer: "25.0 cm3 = 0.0250 dm3. Moles = 0.200 × 0.0250 = 0.00500 mol.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Dividing concentration by volume.",
      "Avoid: Using 25.0 dm3.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Titration moles. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "25.0 cm3 of sodium hydroxide solution is neutralised by 20.0 cm3 of 0.100 mol/dm3 hydrochloric acid. NaOH + HCl → NaCl + H2O. Calculate the concentration of sodium hydroxide.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Moles of HCl = 0.100 × 0.0200 = 0.00200 mol.",
        keywords: [["moles", "0200", "00200"]],
      },
      {
        point: "Mole ratio HCl : NaOH is 1 : 1.",
        keywords: [["mole", "ratio", "naoh"]],
      },
      {
        point: "Moles of NaOH = 0.00200 mol.",
        keywords: [["moles", "naoh", "00200"]],
      },
      {
        point: "Volume of NaOH = 0.0250 dm3.",
        keywords: [["volume", "naoh", "0250"]],
      },
      {
        point: "Concentration of NaOH = 0.00200 ÷ 0.0250 = 0.0800 mol/dm3.",
        keywords: [["concentration", "naoh", "00200"]],
      },
    ],
    examinerKeywords: ["titration", "concentration", "sodium hydroxide", "0.0800 mol/dm3"],
    modelAnswer:
      "Moles HCl = 0.100 × 0.0200 = 0.00200 mol. The ratio is 1:1, so moles NaOH = 0.00200 mol. Concentration NaOH = 0.00200 ÷ 0.0250 = 0.0800 mol/dm3.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Not converting cm3 to dm3.",
      "Avoid: Using the wrong volume for sodium hydroxide.",
      "Avoid: Ignoring the mole ratio.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Titration concentration. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A reaction has a theoretical yield of 32.0 g. The actual yield is 24.0 g. Calculate the percentage yield.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage yield = actual yield ÷ theoretical yield × 100.",
        keywords: [["percentage", "yield", "actual"]],
      },
      {
        point: "Percentage yield = 24.0 ÷ 32.0 × 100.",
        keywords: [["percentage", "yield"]],
      },
      {
        point: "Percentage yield = 75.0%.",
        keywords: [["percentage", "yield"]],
      },
    ],
    examinerKeywords: ["percentage yield", "actual yield", "theoretical yield", "75%"],
    modelAnswer: "Percentage yield = 24.0 ÷ 32.0 × 100 = 75.0%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing theoretical by actual.",
      "Avoid: Forgetting ×100.",
      "Avoid: Writing 0.75%.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Percentage yield. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the atom economy for making hydrogen in the reaction CH4 + 2H2O → CO2 + 4H2. Mr: CH4 = 16, H2O = 18, CO2 = 44, H2 = 2.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mr of desired product = 4 × 2 = 8.",
        keywords: [["desired", "product"]],
      },
      {
        point: "Total Mr of products = 44 + 8 = 52.",
        keywords: [["total", "products"]],
      },
      {
        point: "Atom economy = 8 ÷ 52 × 100.",
        keywords: [["atom", "economy"]],
      },
      {
        point: "Atom economy = 15.4%.",
        keywords: [["atom", "economy"]],
      },
    ],
    examinerKeywords: ["atom economy", "hydrogen", "desired product", "15.4%"],
    modelAnswer:
      "Mr of desired product H2 = 4 × 2 = 8. Total Mr of products = 44 + 8 = 52. Atom economy = 8 ÷ 52 × 100 = 15.4%.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using only one H2 molecule.",
      "Avoid: Using reactants incorrectly when products are easier here.",
      "Avoid: Forgetting ×100.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Atom economy. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A compound contains 52.2% carbon, 13.0% hydrogen and 34.8% oxygen by mass. Calculate its empirical formula. Ar: C = 12, H = 1, O = 16.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Assume 100 g: C = 52.2 g, H = 13.0 g, O = 34.8 g.",
        keywords: [["assume"]],
      },
      {
        point: "Moles C = 52.2 ÷ 12 = 4.35.",
        keywords: [["moles"]],
      },
      {
        point: "Moles H = 13.0 ÷ 1 = 13.0.",
        keywords: [["moles"]],
      },
      {
        point: "Moles O = 34.8 ÷ 16 = 2.175.",
        keywords: [["moles"]],
      },
      {
        point: "Divide by 2.175 to get ratio C:H:O = 2:6:1, so empirical formula = C2H6O.",
        keywords: [["divide", "ratio", "empirical"]],
      },
    ],
    examinerKeywords: ["empirical formula", "percentage composition", "C2H6O"],
    modelAnswer:
      "Assume 100 g. Moles: C = 52.2 ÷ 12 = 4.35, H = 13.0, O = 34.8 ÷ 16 = 2.175. Divide by 2.175 to get 2:6:1, so the empirical formula is C2H6O.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using percentages directly as ratios.",
      "Avoid: Not dividing by the smallest number of moles.",
      "Avoid: Rounding too early.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Empirical formula. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Find",
    questionText:
      "A compound has empirical formula CH2O and relative molecular mass 180. Find its molecular formula. Ar: C = 12, H = 1, O = 16.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of empirical formula CH2O = 12 + 2 + 16 = 30.",
        keywords: [["mass", "empirical", "formula"]],
      },
      {
        point: "Multiplier = 180 ÷ 30 = 6.",
        keywords: [["multiplier"]],
      },
      {
        point: "Multiply each atom number by 6.",
        keywords: [["multiply", "each", "atom"]],
      },
      {
        point: "Molecular formula = C6H12O6.",
        keywords: [["molecular", "formula", "c6h12o6"]],
      },
    ],
    examinerKeywords: ["molecular formula", "empirical formula", "C6H12O6"],
    modelAnswer: "Mass of CH2O = 30. Multiplier = 180 ÷ 30 = 6. Molecular formula = C6H12O6.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Writing CH2O as the molecular formula.",
      "Avoid: Only multiplying carbon.",
      "Avoid: Dividing 30 by 180.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Molecular formula. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Identify",
    questionText:
      "Hydrogen reacts with oxygen: 2H2 + O2 → 2H2O. If 3 mol of H2 reacts with 1 mol of O2, identify the limiting reactant and explain.",
    marks: 4,
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
        point: "There are 3 mol H2, so hydrogen is in excess.",
        keywords: [["hydrogen", "excess"]],
      },
      {
        point: "Oxygen is the limiting reactant.",
        keywords: [["oxygen", "limiting", "reactant"]],
      },
    ],
    examinerKeywords: ["limiting reactant", "hydrogen", "oxygen", "mole ratio"],
    modelAnswer:
      "The equation shows 2 mol H2 reacts with 1 mol O2. 1 mol O2 needs only 2 mol H2, but 3 mol H2 is present, so hydrogen is in excess and oxygen is the limiting reactant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Choosing the reactant with the smaller coefficient only.",
      "Avoid: Ignoring mole ratio.",
      "Avoid: Saying hydrogen is limiting because there is more of it.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Limiting reactant. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A measuring cylinder has an uncertainty of ±0.5 cm3. A student measures 25.0 cm3. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Percentage uncertainty = uncertainty ÷ measurement × 100.",
        keywords: [["percentage", "uncertainty", "measurement"]],
      },
      {
        point: "Percentage uncertainty = 0.5 ÷ 25.0 × 100.",
        keywords: [["percentage", "uncertainty"]],
      },
      {
        point: "Percentage uncertainty = 2.0%.",
        keywords: [["percentage", "uncertainty"]],
      },
    ],
    examinerKeywords: ["uncertainty", "percentage uncertainty", "measuring cylinder", "2.0%"],
    modelAnswer: "Percentage uncertainty = 0.5 ÷ 25.0 × 100 = 2.0%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing measurement by uncertainty.",
      "Avoid: Forgetting ×100.",
      "Avoid: Using ±0.5 as 5.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Uncertainty. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A reaction produces 48 cm3 of gas in 120 seconds. Calculate the mean rate of reaction in cm3/s.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Mean rate = volume of gas ÷ time.",
        keywords: [["mean", "rate", "volume"]],
      },
      {
        point: "Mean rate = 48 ÷ 120 = 0.40 cm3/s.",
        keywords: [["mean", "rate"]],
      },
    ],
    examinerKeywords: ["rate", "gas volume", "time", "0.40 cm3/s"],
    modelAnswer: "Mean rate = 48 ÷ 120 = 0.40 cm3/s.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Dividing time by volume.",
      "Avoid: Forgetting units.",
      "Avoid: Using minutes without converting.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Rate calculation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1",
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
    examinerKeywords: ["bond energy", "methane", "combustion", "-818 kJ/mol"],
    modelAnswer:
      "Energy in = 4 × 413 + 2 × 498 = 2648 kJ/mol. Energy out = 2 × 805 + 4 × 464 = 3466 kJ/mol. Energy change = 2648 - 3466 = -818 kJ/mol.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Forgetting four C-H bonds.",
      "Avoid: Forgetting four O-H bonds in 2H2O.",
      "Avoid: Doing energy out minus energy in.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Bond energy calculation. Use precise markscheme language and show working for calculations.",
  },
  {
    id: "aqa-chemistry-calculation-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "chemistry",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain the steps used to solve a multi-step chemistry calculation involving mass, moles and gas volume.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Write or use a balanced symbol equation.",
        keywords: [["write", "balanced", "symbol"]],
      },
      {
        point: "Calculate relative formula masses where needed.",
        keywords: [["calculate", "relative", "formula"]],
      },
      {
        point: "Convert known mass into moles using moles = mass ÷ Mr.",
        keywords: [["convert", "known", "mass"]],
      },
      {
        point: "Use the mole ratio from the balanced equation.",
        keywords: [["mole", "ratio", "balanced"]],
      },
      {
        point: "Convert moles into the required quantity.",
        keywords: [["convert", "moles", "quantity"]],
      },
      {
        point: "For gas volume at room temperature and pressure, use volume = moles × 24 dm3.",
        keywords: [["volume", "room", "temperature"]],
      },
    ],
    examinerKeywords: [
      "multi-step calculation",
      "moles",
      "mass",
      "gas volume",
      "balanced equation",
    ],
    modelAnswer:
      "Start with the balanced equation and calculate any formula masses needed. Convert the known mass to moles using moles = mass ÷ Mr. Use the mole ratio to find moles of the required substance. Then convert to the requested quantity; for gas volume at room temperature and pressure, use volume = moles × 24 dm3.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Skipping the balanced equation.",
      "Avoid: Using mass ratios instead of mole ratios.",
      "Avoid: Forgetting the gas volume conversion.",
    ],
    examinerTip:
      "AQA GCSE Chemistry 8462: Extended calculation strategy. Use precise markscheme language and show working for calculations.",
  },
];
