import type { Question } from "./questionBank";

export const AQA_PHYSICS_QUESTIONS: Question[] = [
  {
    id: "aqa-gcse-physics-energy-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two energy stores of a moving object raised above the ground.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Kinetic energy store because the object is moving",
        keywords: [["kinetic energy", "moving"]],
      },
      {
        point: "Gravitational potential energy store because the object is raised above the ground",
        keywords: [["gravitational potential energy"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "gravitational potential energy", "moving", "height"],
    modelAnswer: "The object has kinetic energy and gravitational potential energy.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy is stored as movement instead of kinetic energy.",
      "Avoid: Forgetting gravitational potential energy depends on height.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy stores. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "A ball falls from a shelf. Describe the main energy transfer as it falls.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Energy is transferred from the gravitational potential energy store",
        keywords: [["gravitational potential energy", "energy transfer"]],
      },
      {
        point: "Energy is transferred to the kinetic energy store of the ball",
        keywords: [["kinetic energy", "energy transfer"]],
      },
    ],
    examinerKeywords: ["gravitational potential energy", "kinetic energy", "energy transfer"],
    modelAnswer:
      "Energy is transferred from the ball's gravitational potential energy store to its kinetic energy store.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying gravity is used up.",
      "Avoid: Saying energy is created as the ball falls.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy transfers. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 50 N moves a box 4.0 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Substitution: work done = 50 × 4.0",
        keywords: [["work done"]],
      },
      {
        point: "Answer: 200 J",
        keywords: [["200"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "joules"],
    modelAnswer: "work done = force × distance = 50 × 4.0 = 200 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using time instead of distance.", "Avoid: Giving the unit as N instead of J."],
    examinerTip:
      "AQA GCSE Physics 8463: Work done. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 2.0 kg object moves at 5.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 0.5 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: KE = 0.5 × 2.0 × 5.0²",
        keywords: [["mark point"]],
      },
      {
        point: "Calculation: KE = 0.5 × 2.0 × 25",
        keywords: [["calculation"]],
      },
      {
        point: "Answer: 25 J",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "joules"],
    modelAnswer: "KE = 0.5 × 2.0 × 5.0² = 25 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square the speed.",
      "Avoid: Using velocity instead of speed incorrectly.",
      "Avoid: Giving the answer in kg m/s.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Kinetic energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 12 kg object is lifted through a height of 2.0 m. The gravitational field strength is 9.8 N/kg. Calculate the increase in gravitational potential energy.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Formula: gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: GPE = 12 × 9.8 × 2.0",
        keywords: [["gpe"]],
      },
      {
        point: "Answer: 235.2 J",
        keywords: [["235"]],
      },
      {
        point: "Accept 235 J or 240 J depending on rounding",
        keywords: [["accept", "235", "240"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "mass",
      "gravitational field strength",
      "height",
      "joules",
    ],
    modelAnswer: "GPE = mgh = 12 × 9.8 × 2.0 = 235.2 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to multiply by gravitational field strength.",
      "Avoid: Using weight as mass.",
      "Avoid: Giving the answer in N.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gravitational potential energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State when energy is stored elastically in an object.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Energy is stored elastically when an object is stretched or compressed",
        keywords: [["elastic potential energy", "stretched", "compressed"]],
      },
      {
        point: "The object must be able to return to its original shape",
        keywords: [["original shape"]],
      },
    ],
    examinerKeywords: ["elastic potential energy", "stretched", "compressed", "original shape"],
    modelAnswer:
      "Energy is stored elastically when an object is stretched or compressed and can return to its original shape.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying elastic energy only applies to rubber.",
      "Avoid: Confusing elastic potential energy with kinetic energy.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Elastic potential energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the principle of conservation of energy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Energy cannot be created or destroyed",
        keywords: [["energy", "cannot be created", "cannot be destroyed"]],
      },
      {
        point: "Energy can only be transferred between stores or dissipated to the surroundings",
        keywords: [["energy", "transferred", "dissipated"]],
      },
    ],
    examinerKeywords: [
      "energy",
      "cannot be created",
      "cannot be destroyed",
      "transferred",
      "dissipated",
    ],
    modelAnswer:
      "Energy cannot be created or destroyed; it can only be transferred between stores or dissipated to the surroundings.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying energy is used up.", "Avoid: Saying wasted energy disappears."],
    examinerTip:
      "AQA GCSE Physics 8463: Conservation of energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by energy being dissipated.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Dissipated energy is transferred to less useful energy stores",
        keywords: [["dissipated", "less useful"]],
      },
      {
        point: "It is often transferred to thermal energy stores of the surroundings",
        keywords: [["thermal energy store", "surroundings"]],
      },
      {
        point: "The energy becomes spread out and harder to use",
        keywords: [["spread out"]],
      },
    ],
    examinerKeywords: [
      "dissipated",
      "less useful",
      "thermal energy store",
      "surroundings",
      "spread out",
    ],
    modelAnswer:
      "Dissipated energy is energy transferred to less useful stores, often thermal energy stores of the surroundings, so it becomes spread out and harder to use.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying dissipated energy is destroyed.",
      "Avoid: Saying dissipated energy is always useful.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy dissipation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A machine transfers 3000 J of energy in 12 s. Calculate the power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 3000 / 12",
        keywords: [["power"]],
      },
      {
        point: "Answer: 250 W",
        keywords: [["250"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "watts"],
    modelAnswer: "power = energy transferred / time = 3000 / 12 = 250 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Giving the answer in J instead of W."],
    examinerTip:
      "AQA GCSE Physics 8463: Power. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A device has input energy of 800 J and useful output energy of 520 J. Calculate the efficiency as a percentage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output energy", "input energy"]],
      },
      {
        point: "Substitution: efficiency = 520 / 800 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 65%",
        keywords: [["mark point"]],
      },
      {
        point: "Percentage sign must be included",
        keywords: [["percentage"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output energy", "input energy", "percentage"],
    modelAnswer: "efficiency = 520 / 800 × 100 = 65%.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy instead of useful output energy.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Efficiency. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe what the width of an arrow represents in a Sankey diagram.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The width of an arrow represents the amount of energy transferred",
        keywords: [["arrow width", "energy transfer"]],
      },
      {
        point: "A wider arrow represents a larger energy transfer",
        keywords: [["arrow width", "energy transfer", "larger amount"]],
      },
    ],
    examinerKeywords: ["Sankey diagram", "arrow width", "energy transfer", "larger amount"],
    modelAnswer:
      "The width of an arrow shows the amount of energy transferred. Wider arrows show larger energy transfers.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying arrow width represents time.",
      "Avoid: Saying all arrows should be the same width.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Sankey diagrams. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.50 kg block has a specific heat capacity of 900 J/kg °C. Calculate the energy needed to raise its temperature by 20 °C.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "mass", "temperature change"]],
      },
      {
        point: "Substitution: energy = 0.50 × 900 × 20",
        keywords: [["energy"]],
      },
      {
        point: "Answer: 9000 J",
        keywords: [["9000"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["unit", "must", "included"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "mass", "temperature change", "energy", "joules"],
    modelAnswer: "E = mcΔT = 0.50 × 900 × 20 = 9000 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Forgetting to multiply by mass.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to determine the specific heat capacity of a metal block using an electrical heater.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Measure the mass of the metal block",
        keywords: [["metal block", "e = vit"]],
      },
      {
        point:
          "Place an electrical heater and thermometer or temperature probe into holes in the block",
        keywords: [["heater", "temperature rise", "e = vit"]],
      },
      {
        point: "Measure the initial temperature",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point:
          "Measure current, potential difference and time to calculate energy transferred using E = VIt",
        keywords: [["e = vit"]],
      },
      {
        point: "Measure the temperature rise of the block",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point:
          "Calculate specific heat capacity using c = E / (mΔT), insulating the block to reduce energy loss",
        keywords: [["specific heat capacity", "e = vit"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "metal block",
      "heater",
      "temperature rise",
      "E = VIt",
      "insulation",
    ],
    modelAnswer:
      "Measure the mass of the metal block. Insert a heater and thermometer, then record the initial temperature. Switch on the heater and measure current, potential difference and time so energy can be calculated using E = VIt. Measure the temperature rise and calculate c = E / (mΔT). Insulate the block to reduce energy loss.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting to measure mass.",
      "Avoid: Ignoring energy loss to the surroundings.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: specific heat capacity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two renewable energy resources.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Valid examples include solar, wind, hydroelectric, tidal, wave, geothermal and biofuel",
        keywords: [["solar", "wind", "hydroelectric"]],
      },
      {
        point: "Any two valid renewable resources are acceptable",
        keywords: [["renewable"]],
      },
    ],
    examinerKeywords: ["renewable", "solar", "wind", "hydroelectric", "tidal", "geothermal"],
    modelAnswer: "Solar and wind are renewable energy resources.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Giving coal as renewable.", "Avoid: Giving natural gas as renewable."],
    examinerTip:
      "AQA GCSE Physics 8463: Renewable resources. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why fossil fuels are described as non-renewable.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Fossil fuels take millions of years to form",
        keywords: [["fossil fuels", "millions of years"]],
      },
      {
        point: "They are used much faster than they are replaced",
        keywords: [["used faster"]],
      },
    ],
    examinerKeywords: ["fossil fuels", "non-renewable", "millions of years", "used faster"],
    modelAnswer:
      "Fossil fuels are non-renewable because they take millions of years to form and are used much faster than they are replaced.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying fossil fuels can never run out.",
      "Avoid: Saying fossil fuels are renewable because they come from nature.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Non-renewable resources. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the use of solar panels for generating electricity.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Solar energy is renewable",
        keywords: [["solar panels", "renewable"]],
      },
      {
        point: "Solar panels produce no greenhouse gases during operation",
        keywords: [["solar panels", "greenhouse gases"]],
      },
      {
        point: "Output depends on sunlight, weather and time of day",
        keywords: [["weather"]],
      },
      {
        point: "Solar panels may have high initial costs or require large areas",
        keywords: [["solar panels"]],
      },
      {
        point: "A justified conclusion should balance low pollution with intermittent output",
        keywords: [["intermittent", "conclusion"]],
      },
    ],
    examinerKeywords: [
      "solar panels",
      "renewable",
      "greenhouse gases",
      "weather",
      "intermittent",
      "conclusion",
    ],
    modelAnswer:
      "Solar panels use a renewable resource and produce no greenhouse gases during operation. However, their output depends on sunlight, weather and time of day, and they can be expensive to install. Overall, they are useful for low-pollution electricity but may need storage or backup.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying solar panels work equally well at night.",
      "Avoid: Only giving advantages.",
      "Avoid: Not giving a judgement.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Solar energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two disadvantages of using wind turbines to generate electricity.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Wind turbines produce variable output because wind speed changes",
        keywords: [["wind turbines", "variable output", "wind speed"]],
      },
      {
        point: "They may cause visual pollution, noise pollution or affect wildlife",
        keywords: [["noise", "visual pollution", "wildlife"]],
      },
    ],
    examinerKeywords: [
      "wind turbines",
      "variable output",
      "wind speed",
      "noise",
      "visual pollution",
      "wildlife",
    ],
    modelAnswer:
      "Wind turbines produce variable output because wind speed changes, and they can cause noise or visual pollution.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying wind turbines release carbon dioxide during operation.",
      "Avoid: Only saying they are bad without explaining why.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Wind energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain one advantage and one disadvantage of using fossil-fuel power stations.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Advantage: fossil-fuel power stations can provide reliable electricity or respond quickly to demand",
        keywords: [["fossil fuels", "reliable", "demand"]],
      },
      {
        point: "Explanation: fuel can be burned when electricity is needed",
        keywords: [["explanation", "fuel", "can"]],
      },
      {
        point: "Disadvantage: burning fossil fuels releases carbon dioxide or pollutants",
        keywords: [["fossil fuels", "carbon dioxide"]],
      },
      {
        point:
          "Explanation: carbon dioxide contributes to climate change or pollutants affect health",
        keywords: [["carbon dioxide", "climate change"]],
      },
    ],
    examinerKeywords: [
      "fossil fuels",
      "reliable",
      "demand",
      "carbon dioxide",
      "pollution",
      "climate change",
    ],
    modelAnswer:
      "An advantage is that fossil-fuel power stations can generate electricity reliably when demand is high. A disadvantage is that burning fossil fuels releases carbon dioxide, which contributes to climate change.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying fossil fuels are renewable.",
      "Avoid: Giving an advantage or disadvantage without explanation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Fossil-fuel power stations. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText: "Suggest two ways to reduce unwanted energy transfers from a house.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use loft insulation, cavity wall insulation or double glazing",
        keywords: [["insulation", "double glazing", "loft insulation"]],
      },
      {
        point: "Use draught excluders, carpets, curtains or reflective foil behind radiators",
        keywords: [["draught excluder"]],
      },
    ],
    examinerKeywords: [
      "insulation",
      "double glazing",
      "loft insulation",
      "cavity wall",
      "draught excluder",
    ],
    modelAnswer: "Use loft insulation and double glazing to reduce unwanted energy transfers.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying open windows to reduce heat loss.",
      "Avoid: Giving vague answers such as use less energy.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Reducing unwanted energy transfers. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-energy-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "A ball rolls down a ramp. Explain why its final kinetic energy is less than the gravitational potential energy it lost.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gravitational potential energy is transferred as the ball moves down",
        keywords: [["gravitational potential energy"]],
      },
      {
        point: "Some energy is transferred to the kinetic energy store of the ball",
        keywords: [["kinetic energy"]],
      },
      {
        point: "Some energy is dissipated as thermal energy due to friction",
        keywords: [["friction", "thermal energy", "dissipated"]],
      },
      {
        point: "Some energy may be transferred by sound, so final kinetic energy is lower",
        keywords: [["kinetic energy", "sound"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "kinetic energy",
      "friction",
      "thermal energy",
      "sound",
      "dissipated",
    ],
    modelAnswer:
      "As the ball rolls down, gravitational potential energy is transferred mainly to kinetic energy. Some energy is dissipated as thermal energy due to friction and some may be transferred by sound, so the final kinetic energy is less than the energy lost from the gravitational store.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Ignoring friction or sound.",
      "Avoid: Not naming energy stores.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy transfer synoptic. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by electric current.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Electric current is the rate of flow of electric charge",
        keywords: [["current", "rate of flow", "charge"]],
      },
      {
        point: "Current is measured in amperes",
        keywords: [["current", "amperes"]],
      },
    ],
    examinerKeywords: ["current", "rate of flow", "charge", "amperes"],
    modelAnswer: "Electric current is the rate of flow of electric charge, measured in amperes.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying current is the energy transferred.",
      "Avoid: Confusing current with potential difference.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electric current. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.60 A flows for 45 s. Calculate the charge transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.60 × 45",
        keywords: [["charge"]],
      },
      {
        point: "Answer: 27 C",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "coulombs"],
    modelAnswer: "charge = current × time = 0.60 × 45 = 27 C.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing current by time.", "Avoid: Using A as the unit for charge."],
    examinerTip:
      "AQA GCSE Physics 8463: Charge. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by potential difference.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Potential difference is the energy transferred per unit charge",
        keywords: [["potential difference", "energy transferred", "per unit charge"]],
      },
      {
        point: "It is measured in volts",
        keywords: [["volts"]],
      },
    ],
    examinerKeywords: ["potential difference", "energy transferred", "per unit charge", "volts"],
    modelAnswer:
      "Potential difference is the energy transferred per unit charge, measured in volts.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying potential difference is the flow of charge.",
      "Avoid: Giving the unit as amperes.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Potential difference. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A component has a potential difference of 12 V and a current of 0.40 A. Calculate its resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: potential difference = current × resistance",
        keywords: [["resistance", "potential difference", "current"]],
      },
      {
        point: "Rearrangement: resistance = potential difference / current",
        keywords: [["resistance", "potential difference", "current"]],
      },
      {
        point: "Substitution: resistance = 12 / 0.40",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 30 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "potential difference", "current", "ohms"],
    modelAnswer: "R = V / I = 12 / 0.40 = 30 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Giving the answer in volts."],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how current behaves in a series circuit.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Current is the same at every point in a series circuit",
        keywords: [["series circuit", "same current"]],
      },
      {
        point: "There is only one path for charge to flow",
        keywords: [["one path", "charge"]],
      },
    ],
    examinerKeywords: ["series circuit", "same current", "one path", "charge"],
    modelAnswer:
      "In a series circuit, the current is the same at every point because there is only one path for charge to flow.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying current is shared between components in series.",
      "Avoid: Confusing series and parallel circuits.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Series circuits. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why lamps connected in parallel are usually brighter than identical lamps connected in series to the same supply.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Each lamp in parallel has the full supply potential difference across it",
        keywords: [["parallel", "full potential difference"]],
      },
      {
        point: "In series, the supply potential difference is shared between lamps",
        keywords: [["series", "shared potential difference"]],
      },
      {
        point: "The lamps in parallel transfer more power, so they are brighter",
        keywords: [["parallel", "power"]],
      },
    ],
    examinerKeywords: [
      "parallel",
      "full potential difference",
      "series",
      "shared potential difference",
      "power",
    ],
    modelAnswer:
      "In parallel, each lamp has the full supply potential difference. In series, the potential difference is shared between lamps. The parallel lamps transfer more power, so they are brighter.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying current is always the same in each parallel branch.",
      "Avoid: Only saying parallel is brighter without explaining why.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Parallel circuits. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A motor has a current of 3.0 A and a potential difference of 24 V. Calculate the electrical power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = current × potential difference",
        keywords: [["power", "current", "potential difference"]],
      },
      {
        point: "Substitution: power = 3.0 × 24",
        keywords: [["power"]],
      },
      {
        point: "Answer: 72 W",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["power", "current", "potential difference", "watts"],
    modelAnswer: "power = current × potential difference = 3.0 × 24 = 72 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using resistance instead of potential difference.",
      "Avoid: Giving the unit as J.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electrical power. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 40 W lamp is switched on for 300 s. Calculate the energy transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy transferred", "power", "time"]],
      },
      {
        point: "Substitution: energy = 40 × 300",
        keywords: [["energy transferred"]],
      },
      {
        point: "Answer: 12000 J",
        keywords: [["12000"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "joules"],
    modelAnswer: "energy transferred = power × time = 40 × 300 = 12000 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing power by time.", "Avoid: Writing W as the unit for energy."],
    examinerTip:
      "AQA GCSE Physics 8463: Energy transfer. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to connect an ammeter and voltmeter to measure the current through and potential difference across a resistor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Connect the ammeter in series with the resistor",
        keywords: [["ammeter", "series", "resistor"]],
      },
      {
        point: "Connect the voltmeter in parallel across the resistor",
        keywords: [["voltmeter", "parallel", "resistor"]],
      },
      {
        point: "Include a power supply and switch",
        keywords: [["include", "power", "supply"]],
      },
      {
        point: "Record current and potential difference readings for the resistor",
        keywords: [["resistor"]],
      },
    ],
    examinerKeywords: ["ammeter", "series", "voltmeter", "parallel", "resistor"],
    modelAnswer:
      "Connect the ammeter in series with the resistor to measure current. Connect the voltmeter in parallel across the resistor to measure potential difference.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Connecting the ammeter in parallel.",
      "Avoid: Connecting the voltmeter in series.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Circuit meters. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by an ohmic conductor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Current is directly proportional to potential difference",
        keywords: [["directly proportional"]],
      },
      {
        point: "The resistance remains constant",
        keywords: [["constant resistance", "constant temperature"]],
      },
      {
        point: "This is true only if temperature remains constant",
        keywords: [["constant resistance", "constant temperature"]],
      },
    ],
    examinerKeywords: [
      "ohmic conductor",
      "directly proportional",
      "constant resistance",
      "constant temperature",
    ],
    modelAnswer:
      "An ohmic conductor has current directly proportional to potential difference, so resistance is constant, provided temperature stays constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying all conductors are ohmic.", "Avoid: Forgetting constant temperature."],
    examinerTip:
      "AQA GCSE Physics 8463: Ohmic conductors. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the resistance of a wire depends on its length.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes power supply, ammeter, voltmeter, switch, crocodile clips, metre rule and resistance wire",
        keywords: [["resistance wire", "ammeter", "voltmeter"]],
      },
      {
        point: "Independent variable is length of wire",
        keywords: [["length", "r = v/i"]],
      },
      {
        point: "Dependent variable is resistance calculated using R = V / I",
        keywords: [["resistance wire", "r = v/i"]],
      },
      {
        point:
          "Connect the ammeter in series and voltmeter in parallel across the selected wire length",
        keywords: [["length", "ammeter", "voltmeter"]],
      },
      {
        point: "Keep wire material, diameter and temperature constant",
        keywords: [["r = v/i"]],
      },
      {
        point:
          "Use a low current, switch off between readings, repeat readings and calculate means",
        keywords: [["r = v/i"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "length",
      "ammeter",
      "voltmeter",
      "R = V/I",
      "control variables",
    ],
    modelAnswer:
      "Set up a circuit with a power supply, switch and ammeter in series with the resistance wire. Connect a voltmeter across the selected wire length using crocodile clips. Change the wire length, record V and I, and calculate R = V / I. Keep material, diameter and temperature constant, use low current, switch off between readings and repeat.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing wire thickness as well as length.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Not calculating resistance.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: resistance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain how rubbing a plastic rod with a cloth can make the rod negatively charged.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Friction causes electrons to transfer between the cloth and rod",
        keywords: [["friction", "electrons", "transfer"]],
      },
      {
        point: "Electrons move onto the plastic rod",
        keywords: [["electrons"]],
      },
      {
        point: "The rod becomes negatively charged because it has gained electrons",
        keywords: [["electrons", "negative charge"]],
      },
    ],
    examinerKeywords: [
      "static electricity",
      "friction",
      "electrons",
      "transfer",
      "negative charge",
    ],
    modelAnswer:
      "When the rod is rubbed, electrons are transferred from the cloth to the plastic rod. The rod gains electrons, so it becomes negatively charged.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying protons move between the cloth and rod.",
      "Avoid: Saying the rod becomes negative by losing electrons.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Static electricity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe what happens when two objects with the same type of electric charge are brought near each other.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Objects with the same type of electric charge repel",
        keywords: [["same charge", "repel"]],
      },
      {
        point: "There is a non-contact electrostatic force between them",
        keywords: [["electrostatic force", "non-contact"]],
      },
    ],
    examinerKeywords: ["same charge", "repel", "electrostatic force", "non-contact"],
    modelAnswer: "They repel each other due to a non-contact electrostatic force.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying same charges attract.",
      "Avoid: Saying objects must touch to exert a force.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Static charge forces. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the function of the live wire, neutral wire and earth wire in a mains plug.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The live wire carries the alternating potential difference from the supply",
        keywords: [["live wire"]],
      },
      {
        point: "The neutral wire completes the circuit",
        keywords: [["neutral wire"]],
      },
      {
        point: "The earth wire is a safety wire that connects the metal case to ground",
        keywords: [["earth wire", "safety"]],
      },
    ],
    examinerKeywords: ["live wire", "neutral wire", "earth wire", "mains plug", "safety"],
    modelAnswer:
      "The live wire carries the alternating potential difference from the supply. The neutral wire completes the circuit. The earth wire is a safety wire connected to the metal case and ground.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the earth wire normally carries current.",
      "Avoid: Confusing the neutral and earth wires.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Domestic electricity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how a fuse protects an electrical appliance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "If the current becomes too large, the fuse wire heats up",
        keywords: [["fuse", "large current", "heats"]],
      },
      {
        point: "The fuse wire melts and breaks the circuit",
        keywords: [["fuse", "melts", "breaks circuit"]],
      },
      {
        point: "This disconnects the appliance and reduces the risk of overheating or fire",
        keywords: [["disconnects", "appliance", "reduces"]],
      },
    ],
    examinerKeywords: ["fuse", "large current", "heats", "melts", "breaks circuit", "safety"],
    modelAnswer:
      "If the current is too large, the fuse wire heats up and melts. This breaks the circuit and disconnects the appliance, reducing the risk of overheating or fire.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a fuse reduces current gradually.",
      "Avoid: Saying a fuse can be reset after melting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Fuse safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how an earth wire and fuse protect a user if the live wire touches the metal case of an appliance.",
    marks: 5,
    markSchemePoints: [
      {
        point: "The metal case could become live if the live wire touches it",
        keywords: [["metal case", "live wire"]],
      },
      {
        point: "The earth wire provides a low-resistance path to ground",
        keywords: [["earth wire", "low resistance"]],
      },
      {
        point: "A large current flows through the earth wire",
        keywords: [["earth wire", "low resistance", "large current"]],
      },
      {
        point: "The large current melts the fuse",
        keywords: [["fuse", "large current"]],
      },
      {
        point:
          "The circuit is broken, disconnecting the appliance and reducing electric shock risk",
        keywords: [["electric shock"]],
      },
    ],
    examinerKeywords: [
      "earth wire",
      "fuse",
      "metal case",
      "live wire",
      "low resistance",
      "large current",
      "electric shock",
    ],
    modelAnswer:
      "If the live wire touches the metal case, the case could become live. The earth wire provides a low-resistance path to ground, causing a large current to flow. This melts the fuse and breaks the circuit, disconnecting the appliance and reducing the risk of electric shock.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying the earth wire carries current in normal use.",
      "Avoid: Not linking large current to the fuse melting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Earth wire safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why the resistance of a filament lamp increases as the current increases.",
    marks: 4,
    markSchemePoints: [
      {
        point: "As current increases, the filament gets hotter",
        keywords: [["filament lamp"]],
      },
      {
        point: "The metal ions vibrate more",
        keywords: [["ions vibrate"]],
      },
      {
        point: "Electrons collide more often with vibrating ions",
        keywords: [["ions vibrate", "electrons"]],
      },
      {
        point: "The resistance increases",
        keywords: [["resistance"]],
      },
    ],
    examinerKeywords: [
      "filament lamp",
      "temperature",
      "ions vibrate",
      "electrons",
      "collisions",
      "resistance",
    ],
    modelAnswer:
      "As the current increases, the filament gets hotter. The metal ions vibrate more, so electrons collide with them more often. This makes it harder for charge to flow, so resistance increases.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying resistance decreases because current increases.",
      "Avoid: Not linking temperature to increased collisions.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance and temperature. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how the resistance of an LDR and an NTC thermistor changes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The resistance of an LDR decreases as light intensity increases",
        keywords: [["ldr", "light intensity", "resistance decreases"]],
      },
      {
        point: "The resistance of an LDR increases in darker conditions",
        keywords: [["ldr", "resistance decreases"]],
      },
      {
        point: "The resistance of an NTC thermistor decreases as temperature increases",
        keywords: [["thermistor", "temperature", "resistance decreases"]],
      },
      {
        point: "The resistance of an NTC thermistor increases as temperature decreases",
        keywords: [["thermistor", "temperature", "resistance decreases"]],
      },
    ],
    examinerKeywords: [
      "LDR",
      "light intensity",
      "thermistor",
      "temperature",
      "resistance decreases",
    ],
    modelAnswer:
      "The resistance of an LDR decreases when light intensity increases. The resistance of an NTC thermistor decreases when temperature increases.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying LDR resistance increases in bright light.",
      "Avoid: Saying NTC thermistor resistance increases when temperature increases.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: LDRs and thermistors. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Three resistors of 4 Ω, 6 Ω and 10 Ω are connected in series. Calculate the total resistance.",
    marks: 2,
    markSchemePoints: [
      {
        point: "In series, total resistance is the sum of the individual resistances",
        keywords: [["series", "total resistance", "sum"]],
      },
      {
        point: "Total resistance = 4 + 6 + 10 = 20 Ω",
        keywords: [["total resistance"]],
      },
    ],
    examinerKeywords: ["series", "total resistance", "sum", "ohms"],
    modelAnswer: "Total resistance = 4 + 6 + 10 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using the parallel resistance rule.", "Avoid: Forgetting the unit Ω."],
    examinerTip:
      "AQA GCSE Physics 8463: Series resistance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-electricity-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student investigates the I-V characteristic of a resistor. Suggest two ways to improve the reliability and safety of the experiment.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Repeat readings at each potential difference and calculate a mean",
        keywords: [["i-v characteristic", "repeat", "mean"]],
      },
      {
        point: "Check for anomalous results",
        keywords: [["check", "anomalous", "results"]],
      },
      {
        point: "Use a low current or switch off between readings to reduce heating",
        keywords: [["i-v characteristic", "heating"]],
      },
      {
        point: "Do not exceed safe current or voltage ratings of the components",
        keywords: [["i-v characteristic"]],
      },
    ],
    examinerKeywords: ["I-V characteristic", "repeat", "mean", "anomaly", "heating", "safety"],
    modelAnswer:
      "The student should repeat readings and calculate a mean to improve reliability. They should also switch off between readings or use a low current to reduce heating and avoid exceeding safe component ratings.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Only saying be careful.",
      "Avoid: Ignoring heating of the resistor.",
      "Avoid: Not linking repeats to reliability.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Circuit evaluation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the arrangement and motion of particles in a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles are closely packed",
        keywords: [["closely packed"]],
      },
      {
        point: "Particles are arranged in fixed positions or a regular pattern",
        keywords: [["fixed positions", "regular pattern"]],
      },
      {
        point: "Particles vibrate about fixed positions",
        keywords: [["fixed positions", "vibrate"]],
      },
    ],
    examinerKeywords: ["solid", "closely packed", "fixed positions", "regular pattern", "vibrate"],
    modelAnswer:
      "In a solid, particles are closely packed in fixed positions and vibrate about those positions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying solid particles do not move at all.",
      "Avoid: Saying solid particles move freely past each other.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Solids. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare the arrangement and motion of particles in a liquid and in a gas.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Liquid particles are close together, while gas particles are far apart",
        keywords: [["liquid", "gas", "particles"]],
      },
      {
        point: "Liquid particles move past each other",
        keywords: [["liquid", "particles"]],
      },
      {
        point: "Gas particles move randomly and rapidly in all directions",
        keywords: [["gas", "particles", "random motion"]],
      },
      {
        point: "Forces between gas particles are weaker than in liquids",
        keywords: [["liquid", "gas", "particles"]],
      },
    ],
    examinerKeywords: [
      "liquid",
      "gas",
      "particles",
      "close together",
      "far apart",
      "random motion",
    ],
    modelAnswer:
      "Liquid particles are close together and move past each other. Gas particles are far apart and move randomly and rapidly in all directions, with weaker forces between them.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying liquid particles are fixed.",
      "Avoid: Saying gas particles have no mass.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Liquids and gases. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define density.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Density is mass per unit volume",
        keywords: [["density", "mass", "unit volume"]],
      },
      {
        point: "Density can be calculated using density = mass / volume",
        keywords: [["density", "mass", "mass / volume"]],
      },
    ],
    examinerKeywords: ["density", "mass", "unit volume", "mass / volume"],
    modelAnswer: "Density is mass per unit volume.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying density is weight per unit area.",
      "Avoid: Confusing density with pressure.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Density. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A block has a mass of 540 g and a volume of 200 cm³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 540 / 200",
        keywords: [["density"]],
      },
      {
        point: "Answer: 2.7 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 540 / 200 = 2.7 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying mass by volume.", "Avoid: Forgetting the unit g/cm³."],
    examinerTip:
      "AQA GCSE Physics 8463: Density calculation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to determine the density of an irregularly shaped stone.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Use a balance to measure the mass of the stone",
        keywords: [["balance", "mass / volume"]],
      },
      {
        point:
          "Use a measuring cylinder or displacement can to measure volume by water displacement",
        keywords: [["water displacement", "volume"]],
      },
      {
        point: "Record the initial and final water levels",
        keywords: [["water displacement"]],
      },
      {
        point: "Volume of stone = final reading - initial reading",
        keywords: [["volume"]],
      },
      {
        point: "Calculate density using density = mass / volume",
        keywords: [["density", "volume", "mass / volume"]],
      },
    ],
    examinerKeywords: [
      "density",
      "irregular object",
      "balance",
      "water displacement",
      "volume",
      "mass / volume",
    ],
    modelAnswer:
      "Measure the stone's mass using a balance. Put water in a measuring cylinder and record the initial volume. Lower the stone fully into the water and record the final volume. The difference is the stone's volume. Calculate density using mass divided by volume.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using length × width × height for an irregular object.",
      "Avoid: Not subtracting the initial water level.",
      "Avoid: Not fully submerging the stone.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: density. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by the internal energy of a substance.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Internal energy is the total energy stored by the particles of a substance",
        keywords: [["internal energy", "particles", "total"]],
      },
      {
        point: "It is the sum of the particles' kinetic and potential energies",
        keywords: [["particles", "kinetic energy", "potential energy"]],
      },
    ],
    examinerKeywords: [
      "internal energy",
      "particles",
      "kinetic energy",
      "potential energy",
      "total",
    ],
    modelAnswer:
      "Internal energy is the total kinetic and potential energy of the particles in a substance.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying internal energy is only temperature.",
      "Avoid: Ignoring potential energy between particles.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Internal energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State what happens to the average kinetic energy of particles when temperature increases.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The average kinetic energy of the particles increases",
        keywords: [["average kinetic energy", "particles"]],
      },
      {
        point: "The particles move or vibrate faster",
        keywords: [["particles", "faster"]],
      },
    ],
    examinerKeywords: ["temperature", "average kinetic energy", "particles", "faster"],
    modelAnswer: "The average kinetic energy increases, so the particles move or vibrate faster.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying particles get larger.",
      "Avoid: Saying temperature measures potential energy only.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Temperature. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a metal rod expands when heated.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Heating increases the kinetic energy of the metal particles",
        keywords: [["kinetic energy"]],
      },
      {
        point: "The particles vibrate more vigorously",
        keywords: [["vibrate"]],
      },
      {
        point: "The average separation between particles increases, so the rod expands",
        keywords: [["separation", "expands"]],
      },
    ],
    examinerKeywords: ["thermal expansion", "kinetic energy", "vibrate", "separation", "expands"],
    modelAnswer:
      "Heating gives the metal particles more kinetic energy, so they vibrate more vigorously. Their average separation increases, so the rod expands.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying particles themselves expand.",
      "Avoid: Not referring to vibration or separation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Thermal expansion. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define specific heat capacity.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C",
        keywords: [["specific heat capacity", "energy", "1 kg"]],
      },
      {
        point: "Accept 1 K instead of 1 °C",
        keywords: [["1 kg", "1 °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "1 kg", "1 °C", "J/kg °C"],
    modelAnswer:
      "Specific heat capacity is the energy needed to raise the temperature of 1 kg of a substance by 1 °C.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: ["Avoid: Forgetting to mention 1 kg.", "Avoid: Confusing it with specific latent heat."],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.75 kg block is heated using 6750 J of energy. Its temperature rises by 20 °C. Calculate the specific heat capacity of the block.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "energy", "mass"]],
      },
      {
        point: "Rearrangement: specific heat capacity = energy / (mass × temperature change)",
        keywords: [["specific heat capacity", "energy", "mass"]],
      },
      {
        point: "Substitution: c = 6750 / (0.75 × 20)",
        keywords: [["6750"]],
      },
      {
        point: "c = 6750 / 15",
        keywords: [["6750"]],
      },
      {
        point: "Answer: 450 J/kg °C",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature change", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = E / mΔT = 6750 / (0.75 × 20) = 450 J/kg °C.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting brackets around mass × temperature change.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity calculation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe what happens to the temperature of a pure substance while it is melting.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The temperature remains constant during melting",
        keywords: [["melting", "constant temperature"]],
      },
      {
        point:
          "Energy supplied is used to overcome forces between particles rather than increasing kinetic energy",
        keywords: [["energy", "forces between particles"]],
      },
    ],
    examinerKeywords: ["melting", "constant temperature", "energy", "forces between particles"],
    modelAnswer:
      "During melting, the temperature stays constant because energy is used to overcome forces between particles.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying temperature keeps rising during melting.",
      "Avoid: Not explaining where the energy goes.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Change of state. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define specific latent heat.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Specific latent heat is the energy required to change the state of 1 kg of a substance",
        keywords: [["specific latent heat", "energy", "change of state"]],
      },
      {
        point: "The change of state occurs without a change in temperature",
        keywords: [["change of state"]],
      },
    ],
    examinerKeywords: [
      "specific latent heat",
      "energy",
      "change of state",
      "1 kg",
      "constant temperature",
    ],
    modelAnswer:
      "Specific latent heat is the energy needed to change the state of 1 kg of a substance without changing its temperature.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Confusing latent heat with specific heat capacity.",
      "Avoid: Forgetting there is no temperature change.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific latent heat. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how gas particles produce pressure on the walls of a container.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gas particles move randomly in all directions",
        keywords: [["gas particles", "random motion"]],
      },
      {
        point: "They collide with the walls of the container",
        keywords: [["they", "collide", "walls"]],
      },
      {
        point: "The collisions exert a force on the walls",
        keywords: [["collisions", "force"]],
      },
      {
        point: "Pressure is produced because force acts over an area",
        keywords: [["force", "pressure"]],
      },
    ],
    examinerKeywords: ["gas particles", "random motion", "collisions", "force", "pressure"],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls. Each collision exerts a force on the walls, and force over an area produces pressure.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying pressure is caused by particles sticking to the wall.",
      "Avoid: Not mentioning collisions.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gas pressure. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "A sealed container of gas is heated at constant volume. Explain why the pressure increases.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Heating increases the average kinetic energy of the gas particles",
        keywords: [["gas", "kinetic energy"]],
      },
      {
        point: "The particles move faster",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "They collide with the container walls more frequently",
        keywords: [["they", "collide", "container"]],
      },
      {
        point: "The collisions are more forceful, so pressure increases",
        keywords: [["collisions", "pressure"]],
      },
    ],
    examinerKeywords: [
      "gas",
      "constant volume",
      "temperature",
      "kinetic energy",
      "collisions",
      "pressure",
    ],
    modelAnswer:
      "Heating increases the gas particles' kinetic energy, so they move faster. They collide with the walls more often and more forcefully, increasing the pressure.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying the particles expand.",
      "Avoid: Saying volume increases even though the container is sealed.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gas pressure and temperature. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A gas at constant volume has pressure 100 kPa at 300 K. The temperature increases to 450 K. Calculate the new pressure.",
    marks: 4,
    markSchemePoints: [
      {
        point: "For a fixed mass of gas at constant volume, pressure / temperature is constant",
        keywords: [["pressure", "temperature", "constant volume"]],
      },
      {
        point: "Formula: p1 / T1 = p2 / T2",
        keywords: [["mark point"]],
      },
      {
        point: "Substitution: 100 / 300 = p2 / 450",
        keywords: [["100", "300", "450"]],
      },
      {
        point: "Answer: p2 = 150 kPa",
        keywords: [["kpa"]],
      },
    ],
    examinerKeywords: ["pressure", "temperature", "constant volume", "kelvin", "kPa"],
    modelAnswer: "p1 / T1 = p2 / T2, so 100 / 300 = p2 / 450. p2 = 150 kPa.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using Celsius instead of kelvin.",
      "Avoid: Assuming pressure decreases when temperature increases.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Pressure law. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how thermal energy is transferred by conduction through a metal.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles at the hot end vibrate more",
        keywords: [["particles", "hot", "end"]],
      },
      {
        point: "Energy is transferred to neighbouring particles by collisions",
        keywords: [["collisions"]],
      },
      {
        point: "Delocalised electrons in metals gain kinetic energy",
        keywords: [["delocalised electrons", "kinetic energy"]],
      },
      {
        point: "Delocalised electrons move through the metal and transfer energy by collisions",
        keywords: [["collisions", "delocalised electrons"]],
      },
    ],
    examinerKeywords: [
      "conduction",
      "vibrations",
      "collisions",
      "delocalised electrons",
      "kinetic energy",
    ],
    modelAnswer:
      "At the hot end, particles vibrate more and pass energy to neighbouring particles by collisions. In metals, delocalised electrons also gain kinetic energy and transfer energy through the metal by collisions.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying atoms move through the whole solid.",
      "Avoid: Forgetting delocalised electrons in metals.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Conduction. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how convection currents form in a liquid heated from below.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The liquid near the heater gains thermal energy and expands",
        keywords: [["liquid", "expands"]],
      },
      {
        point: "Its density decreases",
        keywords: [["density decreases"]],
      },
      {
        point: "The warmer, less dense liquid rises",
        keywords: [["liquid", "rises"]],
      },
      {
        point: "Cooler, denser liquid sinks to replace it, forming a convection current",
        keywords: [["convection", "liquid", "sinks"]],
      },
    ],
    examinerKeywords: ["convection", "liquid", "expands", "density decreases", "rises", "sinks"],
    modelAnswer:
      "Liquid near the heater warms up and expands, so its density decreases. The less dense liquid rises, while cooler, denser liquid sinks to replace it, forming a convection current.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Saying convection occurs in solids.", "Avoid: Not mentioning density changes."],
    examinerTip:
      "AQA GCSE Physics 8463: Convection. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State two surface properties that make an object a good absorber of infrared radiation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A black or dark surface is a good absorber",
        keywords: [["black", "dark", "absorber"]],
      },
      {
        point: "A matt surface is a better absorber than a shiny surface",
        keywords: [["matt", "absorber"]],
      },
    ],
    examinerKeywords: ["infrared radiation", "black", "dark", "matt", "absorber"],
    modelAnswer: "A black, matt surface is a good absorber of infrared radiation.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying shiny white surfaces are the best absorbers.",
      "Avoid: Confusing absorption with reflection.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Thermal radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why evaporation causes cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The highest-energy particles escape from the surface of the liquid",
        keywords: [["surface", "highest-energy particles"]],
      },
      {
        point: "The average kinetic energy of the particles left behind decreases",
        keywords: [["average kinetic energy"]],
      },
      {
        point: "Lower average kinetic energy means lower temperature",
        keywords: [["average kinetic energy"]],
      },
    ],
    examinerKeywords: [
      "evaporation",
      "surface",
      "highest-energy particles",
      "average kinetic energy",
      "cooling",
    ],
    modelAnswer:
      "During evaporation, the highest-energy particles escape from the liquid surface. The remaining particles have lower average kinetic energy, so the liquid cools.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying all particles leave with the same energy.",
      "Avoid: Not linking cooling to average kinetic energy.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Evaporation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-particle-model-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to compare the effectiveness of two materials as thermal insulators.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes identical beakers, hot water, thermometers, stopwatch and insulating materials",
        keywords: [["apparatus", "includes", "identical"]],
      },
      {
        point: "Independent variable is type of insulating material",
        keywords: [["independent", "variable", "type"]],
      },
      {
        point: "Dependent variable is temperature drop or rate of cooling",
        keywords: [["temperature drop", "rate of cooling", "cooling curve"]],
      },
      {
        point:
          "Control variables include volume of water, starting temperature, beaker type and insulation thickness",
        keywords: [["temperature drop", "control variables"]],
      },
      {
        point: "Record temperature at regular time intervals and repeat for each material",
        keywords: [["temperature drop", "repeat"]],
      },
      {
        point: "Calculate mean temperature drop or plot cooling curves; handle hot water safely",
        keywords: [["temperature drop", "cooling curve"]],
      },
    ],
    examinerKeywords: [
      "thermal insulation",
      "temperature drop",
      "rate of cooling",
      "control variables",
      "repeat",
      "cooling curve",
    ],
    modelAnswer:
      "Wrap identical beakers with equal thicknesses of the two materials. Add the same volume of hot water at the same starting temperature to each beaker. Record temperature at regular intervals for a fixed time. Repeat and compare mean temperature drops or cooling curves. Handle hot water safely.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing both material and thickness.",
      "Avoid: Using different starting temperatures.",
      "Avoid: Only recording one final temperature.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Thermal insulation practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the structure of an atom.",
    marks: 3,
    markSchemePoints: [
      {
        point: "An atom has a small central nucleus",
        keywords: [["atom", "nucleus"]],
      },
      {
        point: "The nucleus contains protons and neutrons",
        keywords: [["nucleus", "protons", "neutrons"]],
      },
      {
        point: "Electrons move around the nucleus in shells or energy levels",
        keywords: [["nucleus", "electrons", "shells"]],
      },
    ],
    examinerKeywords: ["atom", "nucleus", "protons", "neutrons", "electrons", "shells"],
    modelAnswer:
      "An atom has a small central nucleus containing protons and neutrons. Electrons move around the nucleus in shells or energy levels.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying electrons are inside the nucleus.",
      "Avoid: Forgetting neutrons are in the nucleus.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Atomic model. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has mass number 35 and proton number 17. Calculate the number of neutrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: number of neutrons = mass number - proton number",
        keywords: [["mass number", "proton number", "neutrons"]],
      },
      {
        point: "Substitution: neutrons = 35 - 17",
        keywords: [["neutrons"]],
      },
      {
        point: "Answer: 18 neutrons",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["mass number", "proton number", "neutrons", "nucleus"],
    modelAnswer: "number of neutrons = 35 - 17 = 18 neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding mass number and proton number.",
      "Avoid: Confusing neutrons with electrons.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear notation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define isotopes.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Isotopes are atoms of the same element with the same number of protons",
        keywords: [["isotopes", "same element", "same protons"]],
      },
      {
        point: "They have different numbers of neutrons",
        keywords: [["different neutrons"]],
      },
    ],
    examinerKeywords: ["isotopes", "same element", "same protons", "different neutrons"],
    modelAnswer:
      "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying isotopes have different numbers of protons.",
      "Avoid: Saying isotopes are different elements.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Isotopes. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the nature, charge and penetrating power of alpha radiation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alpha radiation consists of helium nuclei or two protons and two neutrons",
        keywords: [["alpha", "helium nucleus"]],
      },
      {
        point: "Alpha radiation has a charge of +2",
        keywords: [["alpha", "+2 charge"]],
      },
      {
        point: "Alpha radiation is weakly penetrating and is stopped by paper or skin",
        keywords: [["alpha", "weakly penetrating", "paper"]],
      },
    ],
    examinerKeywords: ["alpha", "helium nucleus", "+2 charge", "weakly penetrating", "paper"],
    modelAnswer:
      "Alpha radiation is made of helium nuclei, has a +2 charge and is stopped by paper or skin.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying alpha radiation is an electron.",
      "Avoid: Saying alpha has no charge.",
      "Avoid: Saying alpha is highly penetrating.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Alpha radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe what happens in beta-minus decay.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A neutron changes into a proton",
        keywords: [["neutron", "proton", "proton number increases"]],
      },
      {
        point: "An electron is emitted from the nucleus as beta radiation",
        keywords: [["beta-minus", "electron"]],
      },
      {
        point: "The proton number increases by 1 and the mass number stays the same",
        keywords: [["proton", "proton number increases", "mass number unchanged"]],
      },
    ],
    examinerKeywords: [
      "beta-minus",
      "neutron",
      "proton",
      "electron",
      "proton number increases",
      "mass number unchanged",
    ],
    modelAnswer:
      "In beta-minus decay, a neutron changes into a proton and an electron is emitted. The proton number increases by 1 and the mass number stays the same.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying an orbital electron is emitted.",
      "Avoid: Saying mass number decreases by 4.",
      "Avoid: Saying proton number decreases.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Beta radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare gamma radiation with alpha radiation.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Gamma radiation is an electromagnetic wave, while alpha radiation is a helium nucleus",
        keywords: [["gamma", "alpha", "electromagnetic wave"]],
      },
      {
        point: "Gamma radiation has no charge, while alpha radiation has charge +2",
        keywords: [["gamma", "alpha"]],
      },
      {
        point: "Gamma radiation is much more penetrating than alpha radiation",
        keywords: [["gamma", "alpha", "penetrating"]],
      },
      {
        point: "Alpha radiation is more strongly ionising than gamma radiation",
        keywords: [["gamma", "alpha", "ionising"]],
      },
    ],
    examinerKeywords: [
      "gamma",
      "alpha",
      "electromagnetic wave",
      "helium nucleus",
      "penetrating",
      "ionising",
    ],
    modelAnswer:
      "Gamma radiation is an electromagnetic wave with no charge and high penetrating power. Alpha radiation is a helium nucleus with +2 charge, low penetrating power and stronger ionising ability.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying gamma is a particle with mass.",
      "Avoid: Saying alpha is more penetrating than gamma.",
      "Avoid: Confusing ionising ability with penetration.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gamma radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by ionising radiation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ionising radiation has enough energy to remove electrons from atoms or molecules",
        keywords: [["ionising radiation", "remove electrons", "atoms"]],
      },
      {
        point: "Removing electrons forms ions",
        keywords: [["ions"]],
      },
      {
        point: "Ionisation can damage living cells or DNA",
        keywords: [["cell damage", "dna"]],
      },
    ],
    examinerKeywords: [
      "ionising radiation",
      "remove electrons",
      "atoms",
      "ions",
      "cell damage",
      "DNA",
    ],
    modelAnswer:
      "Ionising radiation has enough energy to remove electrons from atoms or molecules, forming ions. This can damage cells or DNA.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying ionising radiation adds protons.",
      "Avoid: Not mentioning electron removal.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Ionising radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two sources of background radiation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A natural source such as rocks, radon gas, cosmic rays, food or living things",
        keywords: [["rocks", "radon", "cosmic rays"]],
      },
      {
        point:
          "A man-made source such as medical radiation, nuclear power or nuclear weapons fallout",
        keywords: [["medical radiation", "nuclear power"]],
      },
    ],
    examinerKeywords: [
      "background radiation",
      "rocks",
      "radon",
      "cosmic rays",
      "medical radiation",
      "nuclear power",
    ],
    modelAnswer:
      "Two sources of background radiation are radon gas from rocks and cosmic rays from space.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying background radiation only comes from nuclear power stations.",
      "Avoid: Giving light or sound as examples.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Background radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the corrected count rate from a radioactive source.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure the background count rate without the source",
        keywords: [["background count", "count rate"]],
      },
      {
        point: "Place the source a fixed distance from the detector",
        keywords: [["detector"]],
      },
      {
        point: "Measure the count for a known time and calculate count rate",
        keywords: [["count rate"]],
      },
      {
        point: "Subtract the background count rate to find corrected count rate",
        keywords: [["background count", "count rate", "corrected count rate"]],
      },
      {
        point: "Use tongs, shielding, distance and short exposure time for safety",
        keywords: [["safety"]],
      },
    ],
    examinerKeywords: [
      "background count",
      "detector",
      "count rate",
      "corrected count rate",
      "safety",
    ],
    modelAnswer:
      "Measure the background count rate first. Place the radioactive source a fixed distance from the detector and record counts for a known time. Calculate count rate and subtract background. Use tongs, shielding, distance and short exposure time.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting to subtract background.",
      "Avoid: Changing the source-detector distance.",
      "Avoid: Handling the source directly.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Detecting radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define half-life.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Half-life is the time taken for the activity or count rate of a radioactive source to halve",
        keywords: [["half-life", "activity", "count rate"]],
      },
      {
        point: "It can also be the time taken for the number of undecayed nuclei to halve",
        keywords: [["halve", "undecayed nuclei"]],
      },
    ],
    examinerKeywords: ["half-life", "activity", "count rate", "halve", "undecayed nuclei"],
    modelAnswer:
      "Half-life is the time taken for the activity or count rate of a radioactive source, or the number of undecayed nuclei, to fall to half its original value.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying half-life is half the total lifetime of a sample.",
      "Avoid: Saying the source disappears after one half-life.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Half-life. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has an initial count rate of 800 counts per minute. Its half-life is 3.0 minutes. Calculate the count rate after 9.0 minutes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of half-lives = 9.0 / 3.0 = 3",
        keywords: [["half-life"]],
      },
      {
        point: "After one half-life: 800 / 2 = 400 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "After three half-lives: 800 / 2 / 2 / 2",
        keywords: [["half-life"]],
      },
      {
        point: "Answer: 100 counts per minute",
        keywords: [["count rate", "counts per minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer:
      "9.0 minutes is 3 half-lives. The count rate halves three times: 800 → 400 → 200 → 100 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Dividing by 3 instead of halving three times.",
      "Avoid: Subtracting a fixed amount each half-life.",
      "Avoid: Forgetting the unit.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Half-life calculation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why radioactive decay is described as random.",
    marks: 2,
    markSchemePoints: [
      {
        point: "It is not possible to predict exactly when a particular nucleus will decay",
        keywords: [["nucleus", "predict"]],
      },
      {
        point: "Only the probability of decay or average behaviour of many nuclei can be predicted",
        keywords: [["predict", "probability"]],
      },
    ],
    examinerKeywords: ["random", "radioactive decay", "nucleus", "predict", "probability"],
    modelAnswer:
      "Radioactive decay is random because it is impossible to predict exactly when a particular nucleus will decay. Only the average behaviour of many nuclei can be predicted.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying random means half-life changes every time.",
      "Avoid: Saying decay can be controlled by temperature.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Random decay. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "A nucleus emits an alpha particle. Describe the changes to its proton number and mass number.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The proton number decreases by 2",
        keywords: [["proton number", "decreases"]],
      },
      {
        point: "The mass number decreases by 4",
        keywords: [["mass number", "decreases"]],
      },
    ],
    examinerKeywords: ["alpha decay", "proton number", "mass number", "decreases"],
    modelAnswer:
      "After alpha decay, the proton number decreases by 2 and the mass number decreases by 4.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the mass number stays the same.",
      "Avoid: Saying the proton number increases by 2.",
      "Avoid: Confusing alpha decay with beta decay.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Alpha decay. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State three precautions for handling a radioactive source safely in a school laboratory.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use tongs or forceps to handle the source",
        keywords: [["tongs"]],
      },
      {
        point: "Keep the source as far from the body as possible",
        keywords: [["keep", "source", "far"]],
      },
      {
        point:
          "Minimise exposure time and store the source in a shielded container when not in use",
        keywords: [["exposure time"]],
      },
    ],
    examinerKeywords: ["radioactive source", "tongs", "distance", "exposure time", "shielding"],
    modelAnswer:
      "Use tongs, keep the source away from the body and minimise exposure time. Store it in a shielded container when not in use.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying gloves alone fully protect from radiation.",
      "Avoid: Suggesting direct handling of the source.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Radiation safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a radioactive tracer used inside the body should emit gamma radiation and have a short half-life.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gamma radiation is penetrating enough to leave the body and be detected",
        keywords: [["gamma radiation", "penetrating", "detected"]],
      },
      {
        point: "A short half-life reduces the time the patient is exposed to radiation",
        keywords: [["short half-life"]],
      },
      {
        point: "This reduces radiation dose and risk of cell damage",
        keywords: [["dose"]],
      },
      {
        point:
          "The half-life must still be long enough for the tracer to be detected during the test",
        keywords: [["detected"]],
      },
    ],
    examinerKeywords: [
      "radioactive tracer",
      "gamma radiation",
      "penetrating",
      "short half-life",
      "dose",
      "detected",
    ],
    modelAnswer:
      "Gamma radiation can escape the body and be detected outside the patient. A short half-life reduces the time the patient is exposed, reducing dose and cell damage risk. The half-life must still be long enough for the tracer to be detected.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Choosing alpha radiation for an internal tracer.",
      "Avoid: Saying the half-life should be very long.",
      "Avoid: Forgetting the tracer must still be detectable.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Medical tracers. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe nuclear fission.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A neutron is absorbed by a large unstable nucleus",
        keywords: [["neutron", "unstable nucleus"]],
      },
      {
        point: "The nucleus splits into two smaller nuclei",
        keywords: [["splits"]],
      },
      {
        point: "Energy is released",
        keywords: [["energy released"]],
      },
      {
        point: "More neutrons are released and can cause further fission reactions",
        keywords: [["neutron"]],
      },
    ],
    examinerKeywords: [
      "nuclear fission",
      "neutron",
      "unstable nucleus",
      "splits",
      "energy released",
      "chain reaction",
    ],
    modelAnswer:
      "In nuclear fission, a neutron is absorbed by a large unstable nucleus. The nucleus splits into two smaller nuclei, releasing energy and more neutrons. These neutrons can cause further fission reactions.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying fission joins nuclei together.",
      "Avoid: Forgetting neutrons are released.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear fission. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare nuclear fission and nuclear fusion.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Fission is the splitting of a large unstable nucleus",
        keywords: [["fission", "splitting"]],
      },
      {
        point: "Fusion is the joining of small nuclei",
        keywords: [["fusion", "joining"]],
      },
      {
        point: "Both processes release energy",
        keywords: [["energy released"]],
      },
      {
        point: "Fusion occurs in stars and requires very high temperature and pressure",
        keywords: [["fusion", "stars"]],
      },
    ],
    examinerKeywords: ["fission", "fusion", "splitting", "joining", "energy released", "stars"],
    modelAnswer:
      "Fission is the splitting of a large unstable nucleus, while fusion is the joining of small nuclei. Both release energy. Fusion occurs in stars and needs very high temperature and pressure.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Mixing up fission and fusion.",
      "Avoid: Saying only fission releases energy.",
      "Avoid: Not mentioning conditions for fusion.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear fusion. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the purpose of control rods and a moderator in a nuclear reactor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Control rods absorb neutrons",
        keywords: [["control rods", "absorb neutrons"]],
      },
      {
        point: "This controls the rate of the chain reaction",
        keywords: [["control rods", "chain reaction"]],
      },
      {
        point: "The moderator slows down neutrons",
        keywords: [["moderator", "slow neutrons"]],
      },
      {
        point: "Slower neutrons are more likely to cause further fission",
        keywords: [["slow neutrons", "fission"]],
      },
    ],
    examinerKeywords: [
      "control rods",
      "moderator",
      "absorb neutrons",
      "slow neutrons",
      "chain reaction",
      "fission",
    ],
    modelAnswer:
      "Control rods absorb neutrons, controlling the rate of the chain reaction. The moderator slows neutrons so they are more likely to be absorbed by nuclei and cause further fission.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying control rods slow neutrons.",
      "Avoid: Saying the moderator absorbs all neutrons.",
      "Avoid: Confusing the roles of the two components.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear reactor. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the use of nuclear power stations for generating electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Nuclear power stations can generate large amounts of electricity reliably",
        keywords: [["nuclear power"]],
      },
      {
        point: "They release no carbon dioxide during normal operation",
        keywords: [["carbon dioxide"]],
      },
      {
        point: "Nuclear fuel is non-renewable",
        keywords: [["nuclear power", "non-renewable"]],
      },
      {
        point: "Radioactive waste must be stored safely for a long time",
        keywords: [["radioactive waste"]],
      },
      {
        point: "Accidents could release radioactive material",
        keywords: [["radioactive waste", "accident risk"]],
      },
      {
        point:
          "A justified conclusion should balance reliable low-carbon electricity against waste and safety risks",
        keywords: [["reliable", "carbon dioxide", "conclusion"]],
      },
    ],
    examinerKeywords: [
      "nuclear power",
      "reliable",
      "carbon dioxide",
      "radioactive waste",
      "non-renewable",
      "accident risk",
      "conclusion",
    ],
    modelAnswer:
      "Nuclear power stations can produce large amounts of reliable electricity and do not release carbon dioxide during normal operation. However, nuclear fuel is non-renewable and radioactive waste must be stored safely for a long time. Accidents could release radioactive material. Overall, nuclear power is useful for reliable low-carbon electricity, but waste and safety risks must be managed carefully.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying nuclear power releases lots of carbon dioxide during normal operation.",
      "Avoid: Only giving advantages or only disadvantages.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear power evaluation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-atomic-structure-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "atomic-structure",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A corrected count rate decreases from 960 counts per minute to 120 counts per minute. Determine how many half-lives have passed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "960 to 480 is one half-life",
        keywords: [["half-life"]],
      },
      {
        point: "480 to 240 is two half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "240 to 120 is three half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "Answer: 3 half-lives",
        keywords: [["half-life"]],
      },
    ],
    examinerKeywords: ["half-life", "corrected count rate", "halve", "counts per minute"],
    modelAnswer:
      "The count rate halves from 960 to 480, then 240, then 120. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing 960 by 120 and saying 8 half-lives.",
      "Avoid: Subtracting a fixed amount each half-life.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Half-life graph. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a force.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A force is a push or pull",
        keywords: [["force", "push", "pull"]],
      },
      {
        point: "A force can change the motion, shape or direction of an object",
        keywords: [["force", "motion", "shape"]],
      },
    ],
    examinerKeywords: ["force", "push", "pull", "motion", "shape", "direction"],
    modelAnswer:
      "A force is a push or pull that can change an object's motion, shape or direction.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a force is energy.",
      "Avoid: Only saying force makes things move without mentioning other effects.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Forces and interactions. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Classify",
    questionText:
      "Classify friction, weight, tension and electrostatic force as contact or non-contact forces.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Friction is a contact force",
        keywords: [["friction", "contact"]],
      },
      {
        point: "Tension is a contact force",
        keywords: [["tension", "contact"]],
      },
      {
        point: "Weight is a non-contact force caused by gravity",
        keywords: [["weight", "contact", "non-contact"]],
      },
      {
        point: "Electrostatic force is a non-contact force",
        keywords: [["electrostatic", "contact", "non-contact"]],
      },
    ],
    examinerKeywords: ["friction", "tension", "weight", "electrostatic", "contact", "non-contact"],
    modelAnswer:
      "Friction and tension are contact forces. Weight and electrostatic force are non-contact forces.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying weight is a contact force.",
      "Avoid: Saying friction can act without surfaces touching.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Contact and non-contact forces. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A box has a force of 85 N acting to the right and a force of 30 N acting to the left. Calculate the resultant force on the box.",
    marks: 3,
    markSchemePoints: [
      {
        point:
          "Forces act in opposite directions, so subtract the smaller force from the larger force",
        keywords: [["opposite directions", "subtract", "direction"]],
      },
      {
        point: "Substitution: resultant force = 85 - 30",
        keywords: [["resultant force"]],
      },
      {
        point: "Answer: 55 N to the right",
        keywords: [["right"]],
      },
    ],
    examinerKeywords: [
      "resultant force",
      "opposite directions",
      "subtract",
      "newtons",
      "direction",
    ],
    modelAnswer: "Resultant force = 85 - 30 = 55 N to the right.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Adding the forces to get 115 N.", "Avoid: Forgetting to give the direction."],
    examinerTip:
      "AQA GCSE Physics 8463: Resultant force. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain what happens to the motion of an object when the resultant force on it is zero.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A zero resultant force means the forces are balanced",
        keywords: [["resultant force", "zero", "balanced"]],
      },
      {
        point: "The object remains at rest if it is already stationary",
        keywords: [["stationary"]],
      },
      {
        point: "The object continues moving at constant velocity if it is already moving",
        keywords: [["constant velocity"]],
      },
    ],
    examinerKeywords: ["resultant force", "zero", "balanced", "stationary", "constant velocity"],
    modelAnswer:
      "If the resultant force is zero, the forces are balanced. A stationary object stays stationary, and a moving object continues at constant velocity.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying zero resultant force always means the object stops.",
      "Avoid: Saying balanced forces mean no forces are acting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Balanced forces. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A cyclist travels 750 m in 100 s. Calculate the average speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 750 / 100",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 7.5 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 750 / 100 = 7.5 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit m/s."],
    examinerTip:
      "AQA GCSE Physics 8463: Speed. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A car accelerates from 6.0 m/s to 26 m/s in 5.0 s. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
      {
        point: "Substitution: acceleration = (26 - 6.0) / 5.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 4.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (26 - 6.0) / 5.0 = 20 / 5.0 = 4.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final velocity only.", "Avoid: Writing m/s instead of m/s²."],
    examinerTip:
      "AQA GCSE Physics 8463: Acceleration. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "graph",
    questionType: "State",
    questionText: "State what the gradient of a distance-time graph represents.",
    marks: 1,
    markSchemePoints: [
      {
        point: "The gradient of a distance-time graph represents speed",
        keywords: [["distance-time graph", "gradient", "speed"]],
      },
    ],
    examinerKeywords: ["distance-time graph", "gradient", "speed"],
    modelAnswer: "The gradient represents speed.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Saying it represents acceleration.", "Avoid: Saying it represents distance."],
    examinerTip:
      "AQA GCSE Physics 8463: Distance-time graphs. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A velocity-time graph shows a constant velocity of 14 m/s for 12 s. Calculate the distance travelled.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Distance travelled is the area under a velocity-time graph",
        keywords: [["velocity-time graph", "area under graph", "distance"]],
      },
      {
        point: "Substitution: distance = 14 × 12",
        keywords: [["distance"]],
      },
      {
        point: "Answer: 168 m",
        keywords: [["168"]],
      },
    ],
    examinerKeywords: ["velocity-time graph", "area under graph", "distance", "metres"],
    modelAnswer: "Distance is the area under the graph. distance = 14 × 12 = 168 m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Finding the gradient instead of the area.", "Avoid: Giving the unit as m/s."],
    examinerTip:
      "AQA GCSE Physics 8463: Velocity-time graphs. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resultant force of 150 N acts on a 25 kg object. Calculate the acceleration of the object.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: force = mass × acceleration",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Rearrangement: acceleration = force / mass",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Substitution: acceleration = 150 / 25",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 6.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "resultant force", "m/s²"],
    modelAnswer: "F = ma, so a = F / m = 150 / 25 = 6.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by mass.", "Avoid: Forgetting the force must be resultant."],
    examinerTip:
      "AQA GCSE Physics 8463: Newton's second law. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An object has a mass of 7.0 kg. The gravitational field strength is 9.8 N/kg. Calculate its weight.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: weight = 7.0 × 9.8",
        keywords: [["weight"]],
      },
      {
        point: "Answer: 68.6 N",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "newtons"],
    modelAnswer: "weight = mass × gravitational field strength = 7.0 × 9.8 = 68.6 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Weight. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.40 kg ball moves at 15 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.40 × 15",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 6.0 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.40 × 15 = 6.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using grams instead of kilograms.", "Avoid: Writing the unit as N."],
    examinerTip:
      "AQA GCSE Physics 8463: Momentum. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the principle of conservation of momentum.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "In a closed system, total momentum before an interaction equals total momentum after the interaction",
        keywords: [["closed system", "before", "after"]],
      },
      {
        point: "No external resultant force acts on the system",
        keywords: [["no external force"]],
      },
    ],
    examinerKeywords: [
      "conservation of momentum",
      "closed system",
      "before",
      "after",
      "no external force",
    ],
    modelAnswer:
      "In a closed system with no external resultant force, the total momentum before an interaction equals the total momentum after it.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying momentum is always zero.",
      "Avoid: Forgetting the closed system condition.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Conservation of momentum. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two factors that increase the stopping distance of a car.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Higher speed increases stopping distance",
        keywords: [["stopping distance", "speed"]],
      },
      {
        point:
          "Wet or icy roads, worn tyres, poor brakes, tiredness, alcohol or drugs can increase stopping distance",
        keywords: [["stopping distance", "wet road", "brakes"]],
      },
    ],
    examinerKeywords: [
      "stopping distance",
      "speed",
      "wet road",
      "brakes",
      "tyres",
      "reaction time",
    ],
    modelAnswer: "A higher speed and wet roads both increase stopping distance.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying lower speed increases stopping distance.",
      "Avoid: Giving vague answers such as bad driving without explanation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Stopping distance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how crumple zones reduce the force on passengers during a collision.",
    marks: 4,
    markSchemePoints: [
      {
        point: "During a collision, the car's momentum changes",
        keywords: [["momentum"]],
      },
      {
        point: "Crumple zones increase the time taken for the car to stop",
        keywords: [["crumple zone"]],
      },
      {
        point: "For the same change in momentum, increasing stopping time reduces force",
        keywords: [["momentum", "stopping time", "force"]],
      },
      {
        point: "Crumple zones also absorb or dissipate energy by deforming",
        keywords: [["crumple zone", "energy"]],
      },
    ],
    examinerKeywords: [
      "crumple zone",
      "momentum",
      "stopping time",
      "force",
      "energy",
      "deformation",
    ],
    modelAnswer:
      "Crumple zones deform during a crash, increasing the time taken for the car to stop. For the same change in momentum, a longer stopping time reduces the force on passengers. Energy is also dissipated as the crumple zone deforms.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying crumple zones prevent momentum changing.",
      "Avoid: Not linking stopping time to force.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Vehicle safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a falling object eventually reaches terminal velocity.",
    marks: 4,
    markSchemePoints: [
      {
        point: "At first, weight is greater than air resistance, so the object accelerates",
        keywords: [["weight", "air resistance"]],
      },
      {
        point: "As speed increases, air resistance increases",
        keywords: [["air resistance"]],
      },
      {
        point: "The resultant force decreases, so acceleration decreases",
        keywords: [["resultant force"]],
      },
      {
        point:
          "Terminal velocity is reached when air resistance equals weight and resultant force is zero",
        keywords: [["terminal velocity", "weight", "air resistance"]],
      },
    ],
    examinerKeywords: [
      "terminal velocity",
      "weight",
      "air resistance",
      "resultant force",
      "balanced forces",
    ],
    modelAnswer:
      "At first the object's weight is greater than air resistance, so it accelerates. As speed increases, air resistance increases. Eventually air resistance equals weight, so resultant force is zero and the object falls at constant terminal velocity.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying terminal velocity means the object stops.",
      "Avoid: Forgetting air resistance increases with speed.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Terminal velocity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to find the centre of mass of an irregular flat card.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Suspend the card freely from a hole near its edge",
        keywords: [["suspend"]],
      },
      {
        point: "Hang a plumb line from the same point",
        keywords: [["plumb line"]],
      },
      {
        point: "Draw the vertical line shown by the plumb line",
        keywords: [["plumb line"]],
      },
      {
        point: "Repeat from a different suspension point",
        keywords: [["repeat", "different", "suspension"]],
      },
      {
        point: "The centre of mass is where the lines cross",
        keywords: [["centre of mass"]],
      },
    ],
    examinerKeywords: ["centre of mass", "irregular card", "plumb line", "suspend", "intersection"],
    modelAnswer:
      "Suspend the card from a hole and hang a plumb line from the same point. Mark the vertical line. Repeat from another hole. The centre of mass is where the two lines intersect.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Only drawing one line.",
      "Avoid: Not letting the card hang freely.",
      "Avoid: Not using a plumb line.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Centre of mass. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why an object with a wide base and low centre of mass is more stable.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A wide base increases stability",
        keywords: [["wide base"]],
      },
      {
        point: "A low centre of mass makes the object less likely to topple",
        keywords: [["low centre of mass", "topple"]],
      },
      {
        point: "The line of action of the weight is less likely to fall outside the base",
        keywords: [["line of action"]],
      },
    ],
    examinerKeywords: ["wide base", "low centre of mass", "stable", "line of action", "topple"],
    modelAnswer:
      "A wide base and low centre of mass make the object more stable because the line of action of its weight is less likely to pass outside the base.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a high centre of mass is more stable.",
      "Avoid: Not mentioning the line of action of weight.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Stability. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 20 N acts at a perpendicular distance of 0.45 m from a pivot. Calculate the moment of the force.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance from pivot",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: moment = 20 × 0.45",
        keywords: [["moment", "n m"]],
      },
      {
        point: "Answer: 9.0 N m",
        keywords: [["n m"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 20 × 0.45 = 9.0 N m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using distance not perpendicular to the force.",
      "Avoid: Forgetting the unit N m.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Moments. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how a longer spanner makes it easier to loosen a tight nut.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A longer spanner increases the perpendicular distance from the pivot",
        keywords: [["spanner", "perpendicular distance", "pivot"]],
      },
      {
        point: "Moment = force × perpendicular distance",
        keywords: [["moment", "perpendicular distance"]],
      },
      {
        point: "For the same force, a larger moment is produced",
        keywords: [["moment", "larger moment"]],
      },
    ],
    examinerKeywords: ["spanner", "moment", "perpendicular distance", "pivot", "larger moment"],
    modelAnswer:
      "A longer spanner gives a greater perpendicular distance from the pivot. Since moment = force × distance, the same force produces a larger turning effect.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the force becomes larger automatically.",
      "Avoid: Not linking distance to moment.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Levers. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-forces-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate the relationship between force and extension for a spring.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Apparatus includes spring, clamp stand, ruler, pointer and slotted masses",
        keywords: [["spring", "ruler"]],
      },
      {
        point: "Measure the original length of the spring",
        keywords: [["spring"]],
      },
      {
        point:
          "Add masses one at a time and calculate force using weight = mass × gravitational field strength",
        keywords: [["force"]],
      },
      {
        point: "Measure the new length and calculate extension",
        keywords: [["extension"]],
      },
      {
        point: "Repeat readings and calculate mean extension for each force",
        keywords: [["force", "extension", "repeat"]],
      },
      {
        point: "Plot force against extension and avoid exceeding the limit of proportionality",
        keywords: [["force", "extension", "limit of proportionality"]],
      },
    ],
    examinerKeywords: [
      "spring",
      "force",
      "extension",
      "ruler",
      "repeat",
      "mean",
      "limit of proportionality",
    ],
    modelAnswer:
      "Hang a spring from a clamp stand with a ruler beside it. Measure its original length, then add masses one at a time. Calculate the force from the weight of the masses, measure the new length and calculate extension. Repeat readings, calculate means and plot force against extension. Do not overload the spring beyond its limit of proportionality.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using total length instead of extension.",
      "Avoid: Not calculating force from mass.",
      "Avoid: Overstretching the spring.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: force and extension. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define wavelength.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Wavelength is the distance from a point on one wave to the same point on the next wave",
        keywords: [["wavelength", "distance", "same point"]],
      },
      {
        point: "Examples include crest to crest or compression to compression",
        keywords: [["crest", "compression"]],
      },
    ],
    examinerKeywords: ["wavelength", "distance", "same point", "next wave", "crest", "compression"],
    modelAnswer:
      "Wavelength is the distance from one point on a wave to the same point on the next wave, such as crest to crest.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying wavelength is wave height.",
      "Avoid: Confusing wavelength with amplitude.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Wave properties. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by frequency.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Frequency is the number of waves passing a point each second",
        keywords: [["frequency", "waves per second"]],
      },
      {
        point: "Frequency is measured in hertz",
        keywords: [["frequency", "hertz"]],
      },
    ],
    examinerKeywords: ["frequency", "waves per second", "hertz", "Hz"],
    modelAnswer: "Frequency is the number of waves passing a point each second, measured in hertz.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying frequency is wavelength.", "Avoid: Giving the unit as seconds."],
    examinerTip:
      "AQA GCSE Physics 8463: Frequency. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A wave has frequency 12 Hz and wavelength 0.25 m. Calculate the wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 12 × 0.25",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 3.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 12 × 0.25 = 3.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing frequency by wavelength.", "Avoid: Giving the answer in Hz."],
    examinerTip:
      "AQA GCSE Physics 8463: Wave speed. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare transverse waves and longitudinal waves.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "In transverse waves, oscillations are perpendicular to the direction of energy transfer",
        keywords: [["transverse", "perpendicular"]],
      },
      {
        point:
          "In longitudinal waves, oscillations are parallel to the direction of energy transfer",
        keywords: [["longitudinal", "parallel"]],
      },
      {
        point: "Transverse waves have crests and troughs",
        keywords: [["transverse", "crests"]],
      },
      {
        point: "Longitudinal waves have compressions and rarefactions",
        keywords: [["longitudinal", "compressions"]],
      },
    ],
    examinerKeywords: [
      "transverse",
      "longitudinal",
      "perpendicular",
      "parallel",
      "crests",
      "compressions",
    ],
    modelAnswer:
      "In transverse waves, oscillations are perpendicular to energy transfer and the waves have crests and troughs. In longitudinal waves, oscillations are parallel to energy transfer and the waves have compressions and rarefactions.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Mixing up parallel and perpendicular.",
      "Avoid: Only giving examples without comparing oscillations.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Transverse and longitudinal waves. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why sound cannot travel through a vacuum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sound is a mechanical wave",
        keywords: [["sound", "mechanical wave"]],
      },
      {
        point: "Sound transfers energy by vibrations of particles",
        keywords: [["sound", "particles", "vibrations"]],
      },
      {
        point: "A vacuum has no particles to vibrate",
        keywords: [["particles", "vacuum"]],
      },
    ],
    examinerKeywords: ["sound", "mechanical wave", "particles", "vibrations", "vacuum"],
    modelAnswer:
      "Sound needs particles to vibrate and transfer energy. A vacuum has no particles, so sound cannot travel through it.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sound travels through space like light.",
      "Avoid: Only saying there is no air without mentioning particles.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Sound waves. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student hears an echo 1.2 s after making a sound. The speed of sound is 340 m/s. Calculate the distance to the wall.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed of sound", "distance"]],
      },
      {
        point: "Total distance travelled by sound = 340 × 1.2 = 408 m",
        keywords: [["distance"]],
      },
      {
        point: "The sound travels to the wall and back",
        keywords: [["sound", "travels", "wall"]],
      },
      {
        point: "Distance to wall = 408 / 2 = 204 m",
        keywords: [["distance"]],
      },
    ],
    examinerKeywords: ["echo", "speed of sound", "distance", "divide by 2", "metres"],
    modelAnswer:
      "Total distance = 340 × 1.2 = 408 m. This is to the wall and back, so distance to wall = 408 / 2 = 204 m.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Forgetting to divide by 2.", "Avoid: Giving the unit as m/s."],
    examinerTip:
      "AQA GCSE Physics 8463: Echoes. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the law of reflection.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The angle of incidence equals the angle of reflection",
        keywords: [["reflection", "angle of incidence", "angle of reflection"]],
      },
      {
        point: "Both angles are measured from the normal",
        keywords: [["angle of incidence", "angle of reflection", "normal"]],
      },
    ],
    examinerKeywords: ["reflection", "angle of incidence", "angle of reflection", "normal"],
    modelAnswer:
      "The angle of incidence equals the angle of reflection, and both are measured from the normal.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Saying the reflected ray refracts.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Reflection. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate reflection from a plane mirror using a ray box.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Place a plane mirror on paper and draw around it",
        keywords: [["plane mirror"]],
      },
      {
        point: "Draw a normal at 90° to the mirror",
        keywords: [["normal"]],
      },
      {
        point: "Use a ray box to shine a ray at the mirror",
        keywords: [["ray box"]],
      },
      {
        point: "Mark and draw the incident and reflected rays",
        keywords: [["ray box", "incident ray", "reflected ray"]],
      },
      {
        point: "Measure the angles of incidence and reflection from the normal using a protractor",
        keywords: [["normal", "protractor"]],
      },
    ],
    examinerKeywords: [
      "plane mirror",
      "ray box",
      "normal",
      "incident ray",
      "reflected ray",
      "protractor",
    ],
    modelAnswer:
      "Place the mirror on paper and draw around it. Draw a normal at 90° to the mirror. Shine a ray at the mirror using a ray box, mark the incident and reflected rays, then measure both angles from the normal using a protractor.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Not drawing the normal.",
      "Avoid: Only taking one reading.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: reflection. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why light refracts when it enters glass from air at an angle.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Light changes speed when it enters glass",
        keywords: [["speed changes", "glass"]],
      },
      {
        point: "One side of the wavefront changes speed before the other side",
        keywords: [["speed changes"]],
      },
      {
        point: "The ray changes direction towards the normal",
        keywords: [["normal"]],
      },
    ],
    examinerKeywords: ["refraction", "speed changes", "air", "glass", "normal"],
    modelAnswer:
      "Light slows down when it enters glass from air. Since it enters at an angle, one side of the wavefront slows first, so the ray bends towards the normal.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying light bends because it loses energy.",
      "Avoid: Saying light bends away from the normal when entering glass.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Refraction. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the two conditions needed for total internal reflection.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Light must travel from a more optically dense medium to a less optically dense medium",
        keywords: [["optically dense"]],
      },
      {
        point: "The angle of incidence must be greater than the critical angle",
        keywords: [["critical angle", "angle of incidence"]],
      },
    ],
    examinerKeywords: [
      "total internal reflection",
      "optically dense",
      "critical angle",
      "angle of incidence",
    ],
    modelAnswer:
      "Light must travel from a more optically dense medium to a less dense medium, and the angle of incidence must be greater than the critical angle.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying it occurs from air into glass.",
      "Avoid: Saying the angle must be less than the critical angle.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Total internal reflection. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how a convex lens forms a real image of a distant object on a screen.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rays from a distant object are nearly parallel",
        keywords: [["parallel rays"]],
      },
      {
        point: "The convex lens refracts the rays so they meet",
        keywords: [["convex lens"]],
      },
      {
        point: "A real image forms where the rays meet, near the principal focus",
        keywords: [["principal focus", "real image"]],
      },
    ],
    examinerKeywords: [
      "convex lens",
      "parallel rays",
      "refraction",
      "principal focus",
      "real image",
    ],
    modelAnswer:
      "Rays from a distant object are almost parallel. A convex lens refracts them so they meet near the principal focus, forming a real image on the screen.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a convex lens always makes rays diverge.",
      "Avoid: Saying a real image cannot form on a screen.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Lenses. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the order of the electromagnetic spectrum from longest wavelength to shortest wavelength.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Radio waves, microwaves and infrared are at the long-wavelength end",
        keywords: [["radio", "microwave", "infrared"]],
      },
      {
        point: "Visible light, ultraviolet and X-rays follow",
        keywords: [["visible", "ultraviolet", "x-rays"]],
      },
      {
        point: "Gamma rays have the shortest wavelength",
        keywords: [["gamma"]],
      },
    ],
    examinerKeywords: [
      "radio",
      "microwave",
      "infrared",
      "visible",
      "ultraviolet",
      "X-rays",
      "gamma",
    ],
    modelAnswer:
      "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Putting gamma rays at the longest wavelength end.",
      "Avoid: Mixing up infrared and ultraviolet.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnetic spectrum. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two properties that all electromagnetic waves have in common.",
    marks: 2,
    markSchemePoints: [
      {
        point: "All electromagnetic waves are transverse waves",
        keywords: [["electromagnetic waves", "transverse"]],
      },
      {
        point: "All electromagnetic waves travel at the same speed in a vacuum",
        keywords: [["electromagnetic waves", "same speed", "vacuum"]],
      },
    ],
    examinerKeywords: ["electromagnetic waves", "transverse", "same speed", "vacuum"],
    modelAnswer: "They are transverse waves and travel at the same speed in a vacuum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying all electromagnetic waves have the same frequency.",
      "Avoid: Saying they need air to travel.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnetic wave properties. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give one use of infrared radiation and one use of X-rays.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A valid use of infrared includes thermal imaging, remote controls or heaters",
        keywords: [["infrared", "thermal imaging", "remote control"]],
      },
      {
        point:
          "A valid use of X-rays includes medical imaging, airport security or checking materials",
        keywords: [["x-rays", "medical imaging"]],
      },
    ],
    examinerKeywords: [
      "infrared",
      "thermal imaging",
      "remote control",
      "X-rays",
      "medical imaging",
    ],
    modelAnswer:
      "Infrared can be used for thermal imaging. X-rays can be used for medical imaging of bones.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving the same use for both.",
      "Avoid: Saying X-rays are used for radio broadcasting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Uses of electromagnetic radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why X-rays and gamma rays can be hazardous to living tissue.",
    marks: 3,
    markSchemePoints: [
      {
        point: "X-rays and gamma rays are ionising radiation",
        keywords: [["x-rays", "gamma rays", "ionising"]],
      },
      {
        point: "They can remove electrons from atoms or molecules",
        keywords: [["they", "can", "remove"]],
      },
      {
        point: "This can damage cells or DNA and increase cancer risk",
        keywords: [["dna damage", "cells", "cancer"]],
      },
    ],
    examinerKeywords: ["X-rays", "gamma rays", "ionising", "DNA damage", "cells", "cancer"],
    modelAnswer:
      "X-rays and gamma rays are ionising, so they can remove electrons from atoms. This can damage cells or DNA and increase the risk of cancer.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying they are harmless because they are invisible.",
      "Avoid: Not mentioning ionisation or cell damage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Hazards of electromagnetic radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how ultrasound can be used to form an image inside the body.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ultrasound pulses are sent into the body",
        keywords: [["ultrasound", "pulses"]],
      },
      {
        point: "The waves reflect at boundaries between different tissues",
        keywords: [["tissue boundary"]],
      },
      {
        point: "The time taken for echoes to return is measured",
        keywords: [["echo"]],
      },
      {
        point: "A computer uses the echo times and intensities to produce an image",
        keywords: [["echo", "image"]],
      },
    ],
    examinerKeywords: ["ultrasound", "pulses", "reflection", "tissue boundary", "echo", "image"],
    modelAnswer:
      "Ultrasound pulses are sent into the body and reflect at boundaries between tissues. The returning echoes are detected, and their time delay and strength are used to form an image.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying ultrasound is ionising radiation.",
      "Avoid: Not mentioning reflection or echoes.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Ultrasound. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe what happens when water waves pass through a gap similar in size to their wavelength.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The waves spread out after passing through the gap",
        keywords: [["spread out", "gap"]],
      },
      {
        point: "This spreading is called diffraction",
        keywords: [["diffraction", "spread out"]],
      },
      {
        point: "Diffraction is greatest when the gap size is similar to the wavelength",
        keywords: [["diffraction", "gap", "wavelength"]],
      },
    ],
    examinerKeywords: ["diffraction", "spread out", "gap", "wavelength"],
    modelAnswer:
      "The waves spread out after passing through the gap. This is diffraction, and it is greatest when the gap is similar in size to the wavelength.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the waves only reflect back.",
      "Avoid: Saying diffraction is greatest when the gap is much larger than the wavelength.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Diffraction. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the speed of water waves in a ripple tank.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a ripple tank with a vibrating dipper to produce regular waves",
        keywords: [["ripple tank", "wave speed"]],
      },
      {
        point:
          "Measure the distance across several wavelengths and divide by the number of wavelengths",
        keywords: [["wavelength", "wave speed"]],
      },
      {
        point: "Record or set the frequency of the dipper",
        keywords: [["frequency"]],
      },
      {
        point: "Calculate wave speed using wave speed = frequency × wavelength",
        keywords: [["wavelength", "frequency", "wave speed"]],
      },
      {
        point: "Repeat readings and calculate a mean",
        keywords: [["repeat"]],
      },
      {
        point: "Keep water depth constant because wave speed depends on depth",
        keywords: [["wave speed", "water depth"]],
      },
    ],
    examinerKeywords: [
      "ripple tank",
      "wavelength",
      "frequency",
      "wave speed",
      "repeat",
      "water depth",
    ],
    modelAnswer:
      "Use a vibrating dipper to produce regular waves in a ripple tank. Measure the distance across several wavelengths and divide by the number of wavelengths to find wavelength. Record the frequency and calculate speed using v = fλ. Repeat readings and keep water depth constant.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Measuring only one wavelength.",
      "Avoid: Not controlling water depth.",
      "Avoid: Using period as frequency without converting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: ripple tank. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the role of the lens in the human eye.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The lens refracts light",
        keywords: [["lens"]],
      },
      {
        point: "It focuses light onto the retina",
        keywords: [["retina", "focus"]],
      },
      {
        point: "The lens can change shape to focus on objects at different distances",
        keywords: [["lens", "focus", "change shape"]],
      },
    ],
    examinerKeywords: ["eye", "lens", "refraction", "retina", "focus", "change shape"],
    modelAnswer:
      "The lens refracts light and focuses it on the retina. It can change shape to focus on near or distant objects.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the lens detects light.",
      "Avoid: Saying the lens forms the image on the cornea.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: The eye. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-waves-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student counts 24 waves passing a point in 8.0 s. The wavelength is 0.35 m. Calculate the frequency and wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "number of waves", "time"]],
      },
      {
        point: "Substitution: frequency = 24 / 8.0",
        keywords: [["frequency"]],
      },
      {
        point: "Frequency = 3.0 Hz",
        keywords: [["frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["frequency", "wavelength", "wave speed"]],
      },
      {
        point: "Substitution: wave speed = 3.0 × 0.35 = 1.05 m/s",
        keywords: [["wave speed"]],
      },
    ],
    examinerKeywords: ["frequency", "number of waves", "time", "wavelength", "wave speed"],
    modelAnswer:
      "frequency = 24 / 8.0 = 3.0 Hz. wave speed = frequency × wavelength = 3.0 × 0.35 = 1.05 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 8.0 / 24 for frequency.",
      "Avoid: Giving wave speed in Hz.",
      "Avoid: Forgetting to calculate frequency first.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Wave data. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a permanent magnet.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A permanent magnet produces its own magnetic field",
        keywords: [["permanent magnet", "magnetic field"]],
      },
      {
        point: "It does not need an electric current to be magnetic",
        keywords: [["magnetic field", "no current"]],
      },
    ],
    examinerKeywords: ["permanent magnet", "magnetic field", "no current"],
    modelAnswer:
      "A permanent magnet produces its own magnetic field without needing an electric current.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a permanent magnet only works when connected to a battery.",
      "Avoid: Confusing permanent magnets with electromagnets.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Permanent magnets. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two materials that can be attracted by a magnet.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Iron is attracted by a magnet",
        keywords: [["iron"]],
      },
      {
        point: "Steel, nickel or cobalt are also magnetic materials",
        keywords: [["steel", "nickel", "cobalt"]],
      },
    ],
    examinerKeywords: ["iron", "steel", "nickel", "cobalt", "magnetic material"],
    modelAnswer: "Iron and steel can be attracted by a magnet.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying aluminium is strongly magnetic.",
      "Avoid: Saying all metals are magnetic.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Magnetic materials. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field pattern around a bar magnet.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Field lines go from the north pole to the south pole outside the magnet",
        keywords: [["field lines", "north", "south"]],
      },
      {
        point: "The field is strongest near the poles where field lines are closest together",
        keywords: [["field lines", "strongest near poles"]],
      },
      {
        point: "Field lines do not cross",
        keywords: [["field lines"]],
      },
    ],
    examinerKeywords: ["bar magnet", "field lines", "north", "south", "strongest near poles"],
    modelAnswer:
      "Magnetic field lines leave the north pole and enter the south pole outside the magnet. They are closest together near the poles, where the field is strongest, and they do not cross.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing arrows from south to north outside the magnet.",
      "Avoid: Saying field lines cross.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Magnetic fields. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to use plotting compasses to map the magnetic field around a bar magnet.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Place the bar magnet on paper and draw around it",
        keywords: [["bar magnet"]],
      },
      {
        point: "Place a plotting compass near the magnet and mark the needle direction",
        keywords: [["plotting compass", "needle"]],
      },
      {
        point: "Move the compass to different positions and mark more directions",
        keywords: [["move", "compass", "different"]],
      },
      {
        point:
          "Join the marks to draw field lines with arrows from north to south outside the magnet",
        keywords: [["field lines", "north to south"]],
      },
    ],
    examinerKeywords: ["plotting compass", "bar magnet", "needle", "field lines", "north to south"],
    modelAnswer:
      "Place the magnet on paper and draw around it. Put a plotting compass near the magnet and mark the direction of the needle. Repeat at many positions and join the marks to draw field lines with arrows from north to south outside the magnet.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Drawing field lines without using compass directions.",
      "Avoid: Putting arrows from south to north outside the magnet.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Magnetic field practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a compass needle points north.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The Earth has a magnetic field",
        keywords: [["earth's magnetic field", "magnet"]],
      },
      {
        point: "A compass needle is a small magnet",
        keywords: [["compass", "magnet"]],
      },
      {
        point: "The compass needle aligns with the Earth's magnetic field",
        keywords: [["earth's magnetic field", "compass", "magnet"]],
      },
    ],
    examinerKeywords: ["Earth's magnetic field", "compass", "magnet", "aligns"],
    modelAnswer:
      "A compass needle is a small magnet. It points north because it aligns with the Earth's magnetic field.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the compass points north because of gravity.",
      "Avoid: Saying a compass is not magnetic.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Earth's magnetic field. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field around a straight wire carrying a current.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The magnetic field forms concentric circles around the wire",
        keywords: [["concentric circles", "magnetic field"]],
      },
      {
        point: "The direction of the field depends on the direction of the current",
        keywords: [["current-carrying wire", "current direction"]],
      },
      {
        point: "The field is stronger closer to the wire or when the current is larger",
        keywords: [["current-carrying wire", "current direction", "stronger"]],
      },
    ],
    examinerKeywords: [
      "current-carrying wire",
      "concentric circles",
      "magnetic field",
      "current direction",
      "stronger",
    ],
    modelAnswer:
      "A current-carrying wire has magnetic field lines in concentric circles around it. The field direction depends on current direction, and the field is stronger near the wire or with a larger current.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Drawing straight field lines along the wire.",
      "Avoid: Saying field direction is independent of current direction.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Magnetic effect of current. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field inside a solenoid carrying a current.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The magnetic field inside a solenoid is strong",
        keywords: [["solenoid", "magnetic field", "strong"]],
      },
      {
        point: "The field is nearly uniform inside the solenoid",
        keywords: [["solenoid", "uniform"]],
      },
      {
        point: "The field pattern is similar to a bar magnet",
        keywords: [["bar magnet"]],
      },
    ],
    examinerKeywords: ["solenoid", "magnetic field", "strong", "uniform", "bar magnet"],
    modelAnswer:
      "Inside a current-carrying solenoid, the magnetic field is strong and nearly uniform. The field pattern is similar to a bar magnet.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying there is no field inside the solenoid.",
      "Avoid: Saying the field is strongest far away from the solenoid.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Solenoids. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two ways to increase the strength of an electromagnet.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Increase the current in the coil",
        keywords: [["increase current"]],
      },
      {
        point: "Increase the number of turns on the coil or add a soft iron core",
        keywords: [["increase current", "soft iron core"]],
      },
    ],
    examinerKeywords: ["electromagnet", "increase current", "more turns", "soft iron core"],
    modelAnswer: "Increase the current and add more turns to the coil.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying use a wooden core.", "Avoid: Saying decrease the current."],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnets. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how current affects the strength of an electromagnet.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes power supply, variable resistor, ammeter, switch, coil, soft iron core and paper clips",
        keywords: [["ammeter", "variable resistor", "paper clips"]],
      },
      {
        point: "Independent variable is current in the coil",
        keywords: [["current", "variable resistor"]],
      },
      {
        point:
          "Dependent variable is electromagnet strength, measured by number or mass of paper clips lifted",
        keywords: [["electromagnet", "variable resistor", "paper clips"]],
      },
      {
        point:
          "Control variables include number of turns, core material and distance from paper clips",
        keywords: [["variable resistor", "paper clips", "control variables"]],
      },
      {
        point: "Repeat each current and calculate a mean",
        keywords: [["current"]],
      },
      {
        point: "Switch off between readings to prevent overheating",
        keywords: [["switch", "off", "readings"]],
      },
    ],
    examinerKeywords: [
      "electromagnet",
      "current",
      "ammeter",
      "variable resistor",
      "paper clips",
      "control variables",
    ],
    modelAnswer:
      "Set up a coil around a soft iron core with a power supply, switch, ammeter and variable resistor. Change the current and measure strength by counting paper clips lifted. Keep the number of turns, core material and distance from clips constant. Repeat each current, calculate means and switch off between readings to avoid overheating.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing the number of turns while changing current.",
      "Avoid: Not measuring current with an ammeter.",
      "Avoid: Leaving the coil on for too long.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnet practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by the motor effect.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The motor effect is the force on a current-carrying conductor",
        keywords: [["motor effect", "force", "current-carrying conductor"]],
      },
      {
        point: "The force occurs when the conductor is in a magnetic field",
        keywords: [["force", "magnetic field"]],
      },
    ],
    examinerKeywords: ["motor effect", "force", "current-carrying conductor", "magnetic field"],
    modelAnswer:
      "The motor effect is the force on a current-carrying conductor placed in a magnetic field.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the motor effect is electromagnetic induction.",
      "Avoid: Forgetting current must be present.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Motor effect. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what Fleming's left-hand rule is used to determine.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Fleming's left-hand rule is used to determine the direction of the force or motion",
        keywords: [["fleming's left-hand rule", "force", "motion"]],
      },
      {
        point: "It applies to a current-carrying conductor in a magnetic field",
        keywords: [["current", "magnetic field"]],
      },
    ],
    examinerKeywords: ["Fleming's left-hand rule", "force", "motion", "current", "magnetic field"],
    modelAnswer:
      "Fleming's left-hand rule is used to find the direction of the force on a current-carrying conductor in a magnetic field.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Using the left-hand rule for electromagnetic induction.",
      "Avoid: Saying it gives the size of the force.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Fleming's left-hand rule. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State two ways to increase the force on a current-carrying wire in a magnetic field.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Increase the current in the wire",
        keywords: [["current"]],
      },
      {
        point: "Use a stronger magnetic field or increase the length of wire in the field",
        keywords: [["magnetic field", "length of wire"]],
      },
    ],
    examinerKeywords: ["motor effect", "force", "current", "magnetic field", "length of wire"],
    modelAnswer: "Increase the current and use a stronger magnetic field.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: ["Avoid: Saying reduce current.", "Avoid: Saying remove the magnetic field."],
    examinerTip:
      "AQA GCSE Physics 8463: Motor effect force. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a coil in an electric motor rotates when current flows through it.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Current flows through the coil in a magnetic field",
        keywords: [["coil", "magnetic field"]],
      },
      {
        point: "Forces act on opposite sides of the coil due to the motor effect",
        keywords: [["coil", "motor effect"]],
      },
      {
        point: "The forces act in opposite directions",
        keywords: [["forces", "act", "opposite"]],
      },
      {
        point: "The forces create a turning effect on the coil",
        keywords: [["coil", "turning effect"]],
      },
      {
        point:
          "The split-ring commutator reverses the current every half-turn to keep the coil rotating in the same direction",
        keywords: [["coil", "split-ring commutator"]],
      },
    ],
    examinerKeywords: [
      "electric motor",
      "coil",
      "magnetic field",
      "motor effect",
      "turning effect",
      "split-ring commutator",
    ],
    modelAnswer:
      "When current flows through the coil in a magnetic field, the motor effect produces forces on opposite sides of the coil. These forces act in opposite directions, creating a turning effect. The split-ring commutator reverses the current every half-turn so the coil keeps rotating in the same direction.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying the coil rotates because it is attracted to the battery.",
      "Avoid: Forgetting the split-ring commutator.",
      "Avoid: Not mentioning forces on opposite sides.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electric motors. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how a potential difference can be induced in a coil using a magnet.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Move a magnet into or out of the coil",
        keywords: [["coil", "magnet"]],
      },
      {
        point: "The magnetic field through the coil changes",
        keywords: [["coil", "magnet"]],
      },
      {
        point: "A potential difference is induced across the ends of the coil",
        keywords: [["induced potential difference", "coil"]],
      },
    ],
    examinerKeywords: ["induced potential difference", "coil", "magnet", "changing magnetic field"],
    modelAnswer:
      "A potential difference is induced when a magnet is moved into or out of a coil because the magnetic field through the coil changes.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a stationary magnet in a stationary coil always induces a voltage.",
      "Avoid: Forgetting that the magnetic field must change.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnetic induction. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe two ways to increase the size of the induced potential difference in a coil and magnet experiment.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Move the magnet faster or move the coil faster",
        keywords: [["faster movement"]],
      },
      {
        point:
          "Use a stronger magnet, increase the number of turns on the coil or use an iron core",
        keywords: [["stronger magnet", "iron core"]],
      },
    ],
    examinerKeywords: [
      "induced potential difference",
      "faster movement",
      "stronger magnet",
      "more turns",
      "iron core",
    ],
    modelAnswer:
      "The induced potential difference can be increased by moving the magnet faster and by using a coil with more turns.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying leave the magnet stationary inside the coil.",
      "Avoid: Saying reduce the number of turns.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Induced potential difference. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "data-response",
    questionType: "State",
    questionText:
      "A magnet is pushed into a coil connected to a sensitive meter. The meter deflects to the right. State what happens to the meter when the magnet is pulled out at the same speed.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The meter deflects in the opposite direction",
        keywords: [["opposite direction"]],
      },
      {
        point: "The size of the deflection is the same if the speed is the same",
        keywords: [["same speed"]],
      },
    ],
    examinerKeywords: ["coil", "magnet", "induced current", "opposite direction", "same speed"],
    modelAnswer:
      "The meter deflects to the left, with the same size of deflection if the magnet is pulled out at the same speed.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the meter deflects in the same direction.",
      "Avoid: Saying there is no deflection when the magnet is moving.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Direction of induced current. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how an alternating potential difference is generated in a simple a.c. generator.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A coil rotates in a magnetic field",
        keywords: [["a.c. generator", "magnetic field"]],
      },
      {
        point: "The magnetic field through the coil changes as it rotates",
        keywords: [["a.c. generator", "magnetic field"]],
      },
      {
        point: "A potential difference is induced across the coil",
        keywords: [["a.c. generator", "induced potential difference"]],
      },
      {
        point: "The direction of the induced potential difference reverses every half-turn",
        keywords: [["a.c. generator", "induced potential difference", "reverses"]],
      },
      {
        point: "Slip rings and brushes connect the rotating coil to the external circuit",
        keywords: [["a.c. generator", "rotating coil", "slip rings"]],
      },
      {
        point:
          "The output is alternating because the direction of the induced potential difference repeatedly changes",
        keywords: [["a.c. generator", "induced potential difference"]],
      },
    ],
    examinerKeywords: [
      "a.c. generator",
      "rotating coil",
      "magnetic field",
      "induced potential difference",
      "reverses",
      "slip rings",
      "brushes",
    ],
    modelAnswer:
      "In an a.c. generator, a coil rotates in a magnetic field. As it rotates, the magnetic field through the coil changes, inducing a potential difference. The direction of the potential difference reverses every half-turn. Slip rings and brushes connect the coil to the external circuit, so the output is alternating.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Confusing slip rings with a split-ring commutator.",
      "Avoid: Saying the output is direct current.",
      "Avoid: Forgetting the magnetic field must change.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: AC generator. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why transformers only work with alternating current.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Alternating current in the primary coil produces a changing magnetic field",
        keywords: [["alternating current", "changing magnetic field"]],
      },
      {
        point: "The changing magnetic field is transferred through the iron core",
        keywords: [["changing magnetic field"]],
      },
      {
        point: "The changing magnetic field induces a potential difference in the secondary coil",
        keywords: [["changing magnetic field", "secondary coil"]],
      },
      {
        point:
          "Direct current would produce a steady magnetic field after switching on, so no continuous potential difference is induced",
        keywords: [["induced potential difference"]],
      },
    ],
    examinerKeywords: [
      "transformer",
      "alternating current",
      "changing magnetic field",
      "induced potential difference",
      "secondary coil",
    ],
    modelAnswer:
      "Alternating current in the primary coil produces a changing magnetic field in the iron core. This changing field induces a potential difference in the secondary coil. Direct current produces a steady magnetic field after switching on, so it does not continuously induce a potential difference.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying transformers work better with d.c.",
      "Avoid: Not mentioning a changing magnetic field.",
      "Avoid: Saying the coils must touch.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Transformers. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 300 turns on the primary coil and 1200 turns on the secondary coil. The primary voltage is 20 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary turns", "secondary turns", "voltage"]],
      },
      {
        point: "Substitution: Vs / 20 = 1200 / 300",
        keywords: [["1200", "300"]],
      },
      {
        point: "Vs = 20 × 4",
        keywords: [["mark point"]],
      },
      {
        point: "Answer: 80 V",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["transformer", "primary turns", "secondary turns", "voltage", "turns ratio"],
    modelAnswer: "Vs / Vp = Ns / Np, so Vs / 20 = 1200 / 300 = 4. Therefore Vs = 80 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the turns ratio upside down.",
      "Avoid: Giving the answer in turns instead of volts.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Transformer calculation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-magnetism-electromagnetism-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why step-up transformers are used before electricity is transmitted over long distances.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Step-up transformers increase the potential difference",
        keywords: [["step-up transformer"]],
      },
      {
        point: "For the same power transfer, increasing potential difference decreases current",
        keywords: [["same", "power", "transfer"]],
      },
      {
        point: "Lower current reduces heating in transmission cables",
        keywords: [["low current", "heating losses"]],
      },
      {
        point: "Less energy is dissipated, so transmission is more efficient",
        keywords: [["less", "energy", "dissipated"]],
      },
    ],
    examinerKeywords: [
      "step-up transformer",
      "high voltage",
      "low current",
      "heating losses",
      "efficiency",
    ],
    modelAnswer:
      "Step-up transformers increase the potential difference. For the same power, this reduces the current, so less energy is wasted as heating in the transmission cables and electricity transmission is more efficient.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Saying step-up transformers make electricity safer for homes.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: National Grid. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the force that keeps planets in orbit around the Sun.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Gravity or gravitational force keeps planets in orbit",
        keywords: [["gravity", "gravitational force", "orbit"]],
      },
    ],
    examinerKeywords: ["gravity", "gravitational force", "orbit"],
    modelAnswer: "Planets are kept in orbit by gravitational force.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying magnetism keeps planets in orbit.",
      "Avoid: Saying no force acts on planets in space.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Solar System. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a planet moving at constant speed in a circular orbit is accelerating.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Velocity is a vector quantity with magnitude and direction",
        keywords: [["velocity", "direction changes", "vector"]],
      },
      {
        point: "The direction of the planet's velocity changes continuously in orbit",
        keywords: [["velocity", "direction changes", "orbit"]],
      },
      {
        point: "A change in velocity means the planet is accelerating",
        keywords: [["velocity"]],
      },
    ],
    examinerKeywords: ["velocity", "direction changes", "vector", "acceleration", "orbit"],
    modelAnswer:
      "The planet's speed may be constant, but its direction is always changing. Velocity includes direction, so the planet's velocity changes and it is accelerating.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying constant speed means no acceleration.",
      "Avoid: Confusing speed with velocity.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Orbital motion. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A moon travels 900000 km in one orbit. The orbit takes 75 days. Calculate the average orbital speed in km/day.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["distance", "time"]],
      },
      {
        point: "Substitution: speed = 900000 / 75",
        keywords: [["speed", "900000"]],
      },
      {
        point: "Answer: 12000 km/day",
        keywords: [["km/day"]],
      },
    ],
    examinerKeywords: ["orbital speed", "distance", "time", "km/day"],
    modelAnswer: "speed = distance / time = 900000 / 75 = 12000 km/day.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit km/day."],
    examinerTip:
      "AQA GCSE Physics 8463: Orbital speed. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a satellite in a lower orbit has a shorter orbital period than a satellite in a higher orbit.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A lower orbit has a smaller orbital radius or shorter path",
        keywords: [["lower orbit", "orbital radius", "shorter period"]],
      },
      {
        point: "Gravity is stronger closer to the planet",
        keywords: [["gravity"]],
      },
      {
        point: "The satellite moves faster and completes an orbit in less time",
        keywords: [["faster"]],
      },
    ],
    examinerKeywords: ["lower orbit", "orbital radius", "gravity", "faster", "shorter period"],
    modelAnswer:
      "A satellite in a lower orbit has a shorter path and experiences stronger gravity. It moves faster, so it completes one orbit in a shorter time.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying lower satellites move slower.",
      "Avoid: Saying orbital period depends only on satellite mass.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Satellite orbit. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how the speed of a comet changes as it moves around the Sun in an elliptical orbit.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The comet moves faster when it is closer to the Sun",
        keywords: [["comet", "faster near sun"]],
      },
      {
        point: "The comet moves slower when it is further from the Sun",
        keywords: [["comet", "slower further away"]],
      },
      {
        point: "The Sun's gravitational force is stronger when the comet is closer",
        keywords: [["comet"]],
      },
    ],
    examinerKeywords: [
      "comet",
      "elliptical orbit",
      "faster near Sun",
      "slower further away",
      "gravity",
    ],
    modelAnswer:
      "A comet moves fastest when it is closest to the Sun and slowest when it is furthest away because the Sun's gravitational force is stronger at smaller distances.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying comets move at constant speed.",
      "Avoid: Saying the comet stops at the furthest point.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Comets. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the main process that releases energy in the Sun.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The Sun releases energy by nuclear fusion",
        keywords: [["sun", "nuclear fusion"]],
      },
      {
        point: "Hydrogen nuclei fuse to form helium nuclei",
        keywords: [["hydrogen", "helium"]],
      },
    ],
    examinerKeywords: ["Sun", "nuclear fusion", "hydrogen", "helium"],
    modelAnswer:
      "The Sun releases energy by nuclear fusion, mainly hydrogen nuclei fusing to form helium.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the Sun burns like a chemical fire.",
      "Avoid: Confusing fusion with fission.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: The Sun. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why nuclear fusion can occur in the core of a star.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The core has extremely high temperature",
        keywords: [["core", "high temperature", "high pressure"]],
      },
      {
        point: "The core has extremely high pressure or density",
        keywords: [["core", "high temperature", "high pressure"]],
      },
      {
        point: "These conditions allow small nuclei to overcome repulsion and fuse",
        keywords: [["nuclei"]],
      },
    ],
    examinerKeywords: ["nuclear fusion", "core", "high temperature", "high pressure", "nuclei"],
    modelAnswer:
      "The core of a star has very high temperature and pressure. These conditions allow small nuclei to overcome repulsion and fuse together.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying fusion occurs because stars contain oxygen.",
      "Avoid: Not mentioning high temperature or pressure.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Fusion in stars. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how a star forms from a nebula.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A nebula is a cloud of gas and dust",
        keywords: [["nebula", "gas and dust"]],
      },
      {
        point: "Gravity pulls the gas and dust together",
        keywords: [["gas and dust", "gravity"]],
      },
      {
        point: "As the material collapses, temperature and pressure increase",
        keywords: [["material", "collapses", "temperature"]],
      },
      {
        point: "A protostar forms and becomes a main sequence star when fusion begins",
        keywords: [["protostar", "fusion"]],
      },
    ],
    examinerKeywords: ["nebula", "gas and dust", "gravity", "protostar", "fusion"],
    modelAnswer:
      "A star forms from a nebula, a cloud of gas and dust. Gravity pulls the material together, increasing temperature and pressure. A protostar forms, and when fusion starts it becomes a main sequence star.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Saying stars form from planets.", "Avoid: Forgetting the role of gravity."],
    examinerTip:
      "AQA GCSE Physics 8463: Star formation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a main sequence star is stable for a long period of time.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gravity acts inwards on the star",
        keywords: [["gravity"]],
      },
      {
        point: "Radiation pressure or gas pressure from fusion acts outwards",
        keywords: [["radiation pressure", "fusion"]],
      },
      {
        point: "The inward and outward forces are balanced",
        keywords: [["balanced forces"]],
      },
      {
        point: "The star remains stable while hydrogen fusion continues steadily",
        keywords: [["main sequence", "fusion"]],
      },
    ],
    examinerKeywords: [
      "main sequence",
      "gravity",
      "radiation pressure",
      "fusion",
      "balanced forces",
    ],
    modelAnswer:
      "A main sequence star is stable because gravity pulls inwards while pressure from fusion pushes outwards. These forces are balanced while hydrogen fusion continues steadily.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying no forces act on a stable star.",
      "Avoid: Ignoring fusion as the source of outward pressure.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Main sequence stars. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText:
      "Describe the life cycle of a star with a similar mass to the Sun after the main sequence stage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The star expands and cools to become a red giant",
        keywords: [["red giant", "cools"]],
      },
      {
        point: "The outer layers are ejected",
        keywords: [["outer", "layers", "are"]],
      },
      {
        point: "A planetary nebula may form",
        keywords: [["planetary nebula"]],
      },
      {
        point: "The remaining core becomes a white dwarf and then cools",
        keywords: [["white dwarf", "cools"]],
      },
    ],
    examinerKeywords: ["Sun-like star", "red giant", "planetary nebula", "white dwarf", "cools"],
    modelAnswer:
      "After the main sequence, a Sun-like star becomes a red giant. Its outer layers are ejected to form a planetary nebula, leaving a white dwarf that cools over time.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying the Sun will become a black hole.",
      "Avoid: Forgetting the white dwarf stage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Sun-like star life cycle. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the final stages in the life cycle of a very massive star.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The massive star becomes a red supergiant",
        keywords: [["massive star", "red supergiant"]],
      },
      {
        point: "It explodes as a supernova",
        keywords: [["supernova"]],
      },
      {
        point: "The remaining core may become a neutron star",
        keywords: [["neutron star"]],
      },
      {
        point: "If the core is massive enough, it becomes a black hole",
        keywords: [["massive star", "black hole"]],
      },
    ],
    examinerKeywords: ["massive star", "red supergiant", "supernova", "neutron star", "black hole"],
    modelAnswer:
      "A very massive star becomes a red supergiant and then explodes as a supernova. The remaining core becomes a neutron star or, if massive enough, a black hole.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying massive stars become white dwarfs.",
      "Avoid: Forgetting the supernova stage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Massive star life cycle. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define a galaxy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A galaxy is a large collection of stars",
        keywords: [["galaxy", "stars"]],
      },
      {
        point: "It also contains gas and dust held together by gravity",
        keywords: [["gas", "dust", "gravity"]],
      },
    ],
    examinerKeywords: ["galaxy", "stars", "gas", "dust", "gravity"],
    modelAnswer: "A galaxy is a large collection of stars, gas and dust held together by gravity.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a galaxy is one star system only.",
      "Avoid: Confusing a galaxy with a solar system.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Galaxies. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define one light-year.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A light-year is a distance, not a time",
        keywords: [["light-year", "distance", "light travels"]],
      },
      {
        point: "It is the distance light travels in one year",
        keywords: [["light-year", "distance", "light travels"]],
      },
    ],
    examinerKeywords: ["light-year", "distance", "light travels", "one year"],
    modelAnswer: "One light-year is the distance travelled by light in one year.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a light-year is a unit of time.",
      "Avoid: Saying it is one year of travel by any object.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Light-year. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Light travels at 3.0 × 10⁸ m/s. Calculate the distance travelled by light in 25 s.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: distance = 3.0 × 10⁸ × 25",
        keywords: [["distance"]],
      },
      {
        point: "Answer: 7.5 × 10⁹ m",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["light", "speed", "distance", "time", "standard form"],
    modelAnswer: "distance = speed × time = 3.0 × 10⁸ × 25 = 7.5 × 10⁹ m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing speed by time.",
      "Avoid: Writing 7.5 × 10⁸ m.",
      "Avoid: Forgetting the unit m.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Light distance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by redshift in light from distant galaxies.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The wavelength of light from the galaxy is increased",
        keywords: [["wavelength increases"]],
      },
      {
        point: "The light is shifted towards the red end of the spectrum",
        keywords: [["red end", "spectrum"]],
      },
    ],
    examinerKeywords: ["redshift", "wavelength increases", "red end", "spectrum"],
    modelAnswer:
      "Redshift means the wavelength of light from a distant galaxy is increased, shifting it towards the red end of the spectrum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying redshift means the galaxy turns red.",
      "Avoid: Saying wavelength decreases.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Redshift. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how redshift provides evidence that the Universe is expanding.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Light from most distant galaxies is redshifted",
        keywords: [["redshift", "distant galaxies"]],
      },
      {
        point: "Redshift shows that these galaxies are moving away",
        keywords: [["redshift", "moving away"]],
      },
      {
        point: "More distant galaxies usually have greater redshifts",
        keywords: [["redshift", "distant galaxies", "greater redshift"]],
      },
      {
        point: "This suggests space is expanding and galaxies are moving apart",
        keywords: [["moving away", "expanding universe"]],
      },
    ],
    examinerKeywords: [
      "redshift",
      "distant galaxies",
      "moving away",
      "greater redshift",
      "expanding Universe",
    ],
    modelAnswer:
      "Most distant galaxies show redshift, meaning their light has longer wavelength and they are moving away. More distant galaxies generally have greater redshifts, supporting the idea that the Universe is expanding.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying redshift means galaxies are moving towards Earth.",
      "Avoid: Not linking redshift to expansion.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Expanding Universe. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe cosmic microwave background radiation and state what it is evidence for.",
    marks: 3,
    markSchemePoints: [
      {
        point:
          "Cosmic microwave background radiation is microwave radiation detected from all directions in space",
        keywords: [["cosmic microwave background radiation", "microwave", "all directions"]],
      },
      {
        point: "It is cooled radiation from the early Universe",
        keywords: [["early universe"]],
      },
      {
        point: "It is evidence for the Big Bang model",
        keywords: [["big bang"]],
      },
    ],
    examinerKeywords: [
      "cosmic microwave background radiation",
      "microwave",
      "all directions",
      "early Universe",
      "Big Bang",
    ],
    modelAnswer:
      "Cosmic microwave background radiation is microwave radiation detected from all directions in space. It is leftover cooled radiation from the early Universe and supports the Big Bang model.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying CMB radiation is sound from the Big Bang.",
      "Avoid: Saying it only comes from nearby stars.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Cosmic microwave background radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the evidence supporting the Big Bang model.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Redshift of distant galaxies shows most galaxies are moving away",
        keywords: [["redshift", "distant galaxies"]],
      },
      {
        point: "Greater redshift for more distant galaxies supports expansion",
        keywords: [["redshift", "distant galaxies", "expansion"]],
      },
      {
        point: "Cosmic microwave background radiation is detected from all directions",
        keywords: [["cosmic microwave background radiation"]],
      },
      {
        point: "CMB radiation is interpreted as radiation from the early Universe",
        keywords: [["cmb", "radiation", "interpreted"]],
      },
      {
        point: "Together these support a hot, dense beginning",
        keywords: [["hot dense beginning"]],
      },
      {
        point:
          "A justified conclusion states that the evidence strongly supports the Big Bang model",
        keywords: [["big bang"]],
      },
    ],
    examinerKeywords: [
      "Big Bang",
      "redshift",
      "distant galaxies",
      "expansion",
      "cosmic microwave background radiation",
      "hot dense beginning",
    ],
    modelAnswer:
      "The Big Bang model is supported by redshift from distant galaxies, showing they are moving away and that the Universe is expanding. More distant galaxies have greater redshifts. Cosmic microwave background radiation is detected from all directions and is interpreted as cooled radiation from the early Universe. Together, these strongly support a hot, dense beginning.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Only mentioning one piece of evidence.",
      "Avoid: Saying CMB radiation is visible light from stars.",
      "Avoid: Not giving a conclusion.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Big Bang evidence. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare the surface temperature of a blue star and a red star.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A blue star has a higher surface temperature than a red star",
        keywords: [["blue star", "red star", "surface temperature"]],
      },
      {
        point: "A red star has a lower surface temperature than a blue star",
        keywords: [["blue star", "red star", "surface temperature"]],
      },
    ],
    examinerKeywords: ["blue star", "red star", "surface temperature", "hotter", "cooler"],
    modelAnswer: "A blue star is hotter at the surface than a red star. A red star is cooler.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying red stars are hotter because red looks warm.",
      "Avoid: Saying colour does not relate to temperature.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Star colour and temperature. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-space-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why two stars with the same luminosity can appear to have different brightnesses from Earth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Apparent brightness depends on distance from Earth",
        keywords: [["apparent brightness", "distance"]],
      },
      {
        point:
          "A more distant star appears dimmer because its light spreads out over a larger area",
        keywords: [["light spreads out", "dimmer"]],
      },
      {
        point: "A closer star with the same luminosity appears brighter",
        keywords: [["luminosity"]],
      },
    ],
    examinerKeywords: [
      "luminosity",
      "apparent brightness",
      "distance",
      "light spreads out",
      "dimmer",
    ],
    modelAnswer:
      "Stars with the same luminosity can appear different in brightness because they are at different distances. The further star appears dimmer because its light is spread over a larger area.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying stars with the same luminosity must look equally bright.",
      "Avoid: Only mentioning colour instead of distance.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Apparent brightness. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A machine transfers 4800 J of energy in 16 s. Calculate the power of the machine.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 4800 / 16",
        keywords: [["power"]],
      },
      {
        point: "Answer: 300 W",
        keywords: [["300"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "watts"],
    modelAnswer: "power = energy transferred / time = 4800 / 16 = 300 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Giving the answer in J."],
    examinerTip:
      "AQA GCSE Physics 8463: Energy calculation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 4.0 kg object moves at 3.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 0.5 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: KE = 0.5 × 4.0 × 3.0²",
        keywords: [["mark point"]],
      },
      {
        point: "Calculation: KE = 0.5 × 4.0 × 9",
        keywords: [["calculation"]],
      },
      {
        point: "Answer: 18 J",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "joules"],
    modelAnswer: "KE = 0.5 × 4.0 × 3.0² = 18 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square speed.",
      "Avoid: Using momentum instead of kinetic energy.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Kinetic energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A device has useful output energy of 360 J and input energy of 900 J. Calculate the efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output", "input energy"]],
      },
      {
        point: "Substitution: efficiency = 360 / 900 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 40%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "input energy", "percentage"],
    modelAnswer: "efficiency = 360 / 900 × 100 = 40%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting to multiply by 100.", "Avoid: Using input divided by output."],
    examinerTip:
      "AQA GCSE Physics 8463: Efficiency. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain one advantage and one disadvantage of using wind turbines to generate electricity.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Advantage: wind is renewable",
        keywords: [["wind turbines", "renewable", "wind speed"]],
      },
      {
        point: "Explanation: wind will not run out or is naturally replaced",
        keywords: [["wind turbines", "wind speed"]],
      },
      {
        point: "Disadvantage: output is variable",
        keywords: [["variable output"]],
      },
      {
        point: "Explanation: wind speed changes, so electricity generation is not constant",
        keywords: [["wind turbines", "wind speed", "electricity generation"]],
      },
    ],
    examinerKeywords: [
      "wind turbines",
      "renewable",
      "variable output",
      "wind speed",
      "electricity generation",
    ],
    modelAnswer:
      "An advantage is that wind is renewable, so it will not run out. A disadvantage is that output is variable because wind speed changes, so electricity generation is not constant.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying wind turbines release carbon dioxide during operation.",
      "Avoid: Giving an advantage or disadvantage without explanation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy resources. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.80 A flows for 30 s. Calculate the charge transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.80 × 30",
        keywords: [["charge"]],
      },
      {
        point: "Answer: 24 C",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "coulombs"],
    modelAnswer: "charge = current × time = 0.80 × 30 = 24 C.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing current by time.", "Avoid: Giving the answer in A."],
    examinerTip:
      "AQA GCSE Physics 8463: Electric charge. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resistor has a current of 0.25 A and a potential difference of 5.0 V. Calculate the resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: potential difference = current × resistance",
        keywords: [["resistance", "potential difference", "current"]],
      },
      {
        point: "Rearrangement: resistance = potential difference / current",
        keywords: [["resistance", "potential difference", "current"]],
      },
      {
        point: "Substitution: resistance = 5.0 / 0.25",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "potential difference", "current", "ohms"],
    modelAnswer: "R = V / I = 5.0 / 0.25 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying current by potential difference.", "Avoid: Giving the unit as V."],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Two resistors of 8 Ω and 12 Ω are connected in series. Calculate the total resistance.",
    marks: 2,
    markSchemePoints: [
      {
        point: "In series, total resistance is the sum of the resistances",
        keywords: [["series", "total resistance", "sum"]],
      },
      {
        point: "Total resistance = 8 + 12 = 20 Ω",
        keywords: [["total resistance"]],
      },
    ],
    examinerKeywords: ["series", "total resistance", "sum", "ohms"],
    modelAnswer: "Total resistance = 8 + 12 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using a parallel resistance method.", "Avoid: Forgetting the unit Ω."],
    examinerTip:
      "AQA GCSE Physics 8463: Series circuits. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how a fuse protects a circuit when the current becomes too large.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A large current heats the fuse wire",
        keywords: [["fuse", "large current", "heats"]],
      },
      {
        point: "The fuse wire melts",
        keywords: [["fuse", "melts"]],
      },
      {
        point: "The circuit is broken, disconnecting the supply",
        keywords: [["circuit", "broken", "disconnecting"]],
      },
    ],
    examinerKeywords: ["fuse", "large current", "heats", "melts", "breaks circuit"],
    modelAnswer:
      "If the current becomes too large, the fuse wire heats up and melts. This breaks the circuit and disconnects the supply.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying the fuse reduces current slowly.", "Avoid: Saying a fuse can be reset."],
    examinerTip:
      "AQA GCSE Physics 8463: Domestic electricity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A liquid has mass 96 g and volume 80 cm³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 96 / 80",
        keywords: [["density"]],
      },
      {
        point: "Answer: 1.2 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 96 / 80 = 1.2 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying mass by volume.", "Avoid: Using cm² instead of cm³."],
    examinerTip:
      "AQA GCSE Physics 8463: Density. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why the pressure of a gas in a sealed container increases when the gas is heated.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Heating increases the kinetic energy of gas particles",
        keywords: [["gas particles", "kinetic energy"]],
      },
      {
        point: "The particles move faster",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "They collide with the container walls more frequently",
        keywords: [["they", "collide", "container"]],
      },
      {
        point: "The collisions are more forceful, so pressure increases",
        keywords: [["collisions", "pressure"]],
      },
    ],
    examinerKeywords: ["gas particles", "temperature", "kinetic energy", "collisions", "pressure"],
    modelAnswer:
      "Heating increases the kinetic energy of the gas particles, so they move faster. They collide with the walls more often and more forcefully, increasing the pressure.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying particles expand.",
      "Avoid: Saying volume increases even though the container is sealed.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gas pressure. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 1.5 kg block has a specific heat capacity of 400 J/kg °C. Calculate the energy needed to raise its temperature by 10 °C.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "mass", "temperature change"]],
      },
      {
        point: "Substitution: energy = 1.5 × 400 × 10",
        keywords: [["energy"]],
      },
      {
        point: "Answer: 6000 J",
        keywords: [["6000"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["unit", "must", "included"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "mass", "temperature change", "energy"],
    modelAnswer: "E = mcΔT = 1.5 × 400 × 10 = 6000 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Forgetting to multiply by mass.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how thermal energy is transferred through a metal by conduction.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles at the hot end vibrate more",
        keywords: [["particles", "hot", "end"]],
      },
      {
        point: "Energy is transferred to neighbouring particles by collisions",
        keywords: [["collisions"]],
      },
      {
        point: "Delocalised electrons gain kinetic energy",
        keywords: [["delocalised electrons", "kinetic energy"]],
      },
      {
        point: "Delocalised electrons transfer energy through the metal by collisions",
        keywords: [["collisions", "delocalised electrons"]],
      },
    ],
    examinerKeywords: [
      "conduction",
      "vibrations",
      "collisions",
      "delocalised electrons",
      "kinetic energy",
    ],
    modelAnswer:
      "At the hot end, particles vibrate more and transfer energy to neighbouring particles by collisions. Delocalised electrons in the metal also gain kinetic energy and transfer energy by collisions.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying atoms move through the whole solid.",
      "Avoid: Forgetting delocalised electrons.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Conduction. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has proton number 11 and mass number 23. Calculate the number of neutrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Number of neutrons = mass number - proton number",
        keywords: [["mass number", "proton number", "neutrons"]],
      },
      {
        point: "Number of neutrons = 23 - 11 = 12",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["mass number", "proton number", "neutrons"],
    modelAnswer: "Number of neutrons = 23 - 11 = 12.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding mass number and proton number.",
      "Avoid: Confusing neutrons with electrons.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Atomic structure. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define isotopes.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Isotopes are atoms of the same element",
        keywords: [["isotopes", "same element"]],
      },
      {
        point: "They have the same number of protons but different numbers of neutrons",
        keywords: [["same element", "protons", "neutrons"]],
      },
    ],
    examinerKeywords: ["isotopes", "same element", "protons", "neutrons"],
    modelAnswer:
      "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying isotopes have different numbers of protons.",
      "Avoid: Saying isotopes are different elements.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Isotopes. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare the penetrating power of alpha, beta and gamma radiation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alpha is the least penetrating and is stopped by paper or skin",
        keywords: [["alpha", "penetrating", "paper"]],
      },
      {
        point: "Beta has medium penetrating power and is stopped by thin aluminium",
        keywords: [["beta", "penetrating", "aluminium"]],
      },
      {
        point: "Gamma is the most penetrating and is reduced by thick lead or concrete",
        keywords: [["gamma", "penetrating", "lead"]],
      },
    ],
    examinerKeywords: ["alpha", "beta", "gamma", "penetrating", "paper", "aluminium", "lead"],
    modelAnswer:
      "Alpha is the least penetrating and is stopped by paper. Beta is more penetrating and is stopped by thin aluminium. Gamma is the most penetrating and needs thick lead or concrete to reduce it.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying alpha is the most penetrating.",
      "Avoid: Confusing penetration with ionisation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Radiation properties. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has count rate 640 counts per minute. After two half-lives, calculate the count rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "After one half-life: 640 / 2 = 320 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "After two half-lives: 320 / 2 = 160 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "Answer: 160 counts per minute",
        keywords: [["count rate", "counts per minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "The count rate halves twice: 640 → 320 → 160 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Dividing by 2 only once.", "Avoid: Subtracting a fixed amount."],
    examinerTip:
      "AQA GCSE Physics 8463: Half-life. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe what happens during nuclear fission.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A neutron is absorbed by a large unstable nucleus",
        keywords: [["neutron", "unstable nucleus"]],
      },
      {
        point: "The nucleus splits into two smaller nuclei",
        keywords: [["splits"]],
      },
      {
        point: "Energy is released",
        keywords: [["energy released"]],
      },
      {
        point: "More neutrons are released, which may cause further fission",
        keywords: [["neutron"]],
      },
    ],
    examinerKeywords: [
      "nuclear fission",
      "neutron",
      "unstable nucleus",
      "splits",
      "energy released",
      "chain reaction",
    ],
    modelAnswer:
      "In nuclear fission, a neutron is absorbed by a large unstable nucleus. The nucleus splits into two smaller nuclei, releasing energy and more neutrons, which can cause a chain reaction.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Saying fission joins nuclei.", "Avoid: Forgetting neutrons are released."],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear fission. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the use of nuclear power stations for generating electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Nuclear power stations can generate large amounts of electricity reliably",
        keywords: [["nuclear power"]],
      },
      {
        point: "They release no carbon dioxide during normal operation",
        keywords: [["carbon dioxide"]],
      },
      {
        point: "Nuclear fuel is non-renewable",
        keywords: [["nuclear power"]],
      },
      {
        point: "Radioactive waste must be stored safely for a long time",
        keywords: [["radioactive waste"]],
      },
      {
        point: "Accidents could release radioactive material",
        keywords: [["radioactive waste", "accident risk"]],
      },
      {
        point:
          "A justified conclusion should balance reliable low-carbon electricity against waste and safety risks",
        keywords: [["reliable", "carbon dioxide", "conclusion"]],
      },
    ],
    examinerKeywords: [
      "nuclear power",
      "reliable",
      "carbon dioxide",
      "radioactive waste",
      "accident risk",
      "conclusion",
    ],
    modelAnswer:
      "Nuclear power stations generate large amounts of reliable electricity and release no carbon dioxide during normal operation. However, nuclear fuel is non-renewable, radioactive waste must be stored safely for a long time, and accidents could release radioactive material. Nuclear power is useful for low-carbon electricity if waste and safety risks are controlled.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying nuclear power releases lots of carbon dioxide during normal operation.",
      "Avoid: Only giving advantages.",
      "Avoid: Not giving a judgement.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear power evaluation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student measures the specific heat capacity of a metal block using an electrical heater. Suggest two ways to reduce energy loss to the surroundings.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Insulate the metal block with insulating material",
        keywords: [["insulate", "metal", "block"]],
      },
      {
        point: "Use a lid, reduce draughts or ensure the heater fits tightly in the block",
        keywords: [["lid", "reduce", "draughts"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy loss", "insulation", "surroundings"],
    modelAnswer:
      "Insulate the metal block and ensure the heater fits tightly into the block to reduce energy loss to the surroundings.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying use a higher current without reducing energy loss.",
      "Avoid: Ignoring heat transfer to the surroundings.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical evaluation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper1-mixed-mock-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Calculate",
    questionText:
      "A 1200 W kettle is used for 180 s to heat water. Calculate the energy transferred and explain why not all of this energy usefully heats the water.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["power", "energy transferred"]],
      },
      {
        point: "Substitution: energy = 1200 × 180",
        keywords: [["energy transferred"]],
      },
      {
        point: "Energy transferred = 216000 J",
        keywords: [["energy transferred"]],
      },
      {
        point: "Some energy is transferred to thermal energy stores of the kettle and surroundings",
        keywords: [["energy transferred", "thermal energy", "surroundings"]],
      },
      {
        point:
          "Some energy may be dissipated by heating the air or by sound, so not all energy usefully heats the water",
        keywords: [["energy transferred", "dissipated"]],
      },
    ],
    examinerKeywords: [
      "power",
      "energy transferred",
      "thermal energy",
      "surroundings",
      "dissipated",
    ],
    modelAnswer:
      "Energy transferred = power × time = 1200 × 180 = 216000 J. Not all of this energy usefully heats the water because some energy is transferred to the kettle and surroundings, and some may be dissipated to the air or as sound.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Dividing power by time.",
      "Avoid: Saying energy is destroyed.",
      "Avoid: Ignoring wasted energy transfers.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Synoptic energy and electricity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A car travels 1.8 km in 120 s. Calculate its average speed in m/s.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert distance: 1.8 km = 1800 m",
        keywords: [["distance", "m/s"]],
      },
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 1800 / 120",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 15 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "conversion", "m/s"],
    modelAnswer: "1.8 km = 1800 m. speed = 1800 / 120 = 15 m/s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using 1.8 m instead of 1800 m.", "Avoid: Multiplying distance by time."],
    examinerTip:
      "AQA GCSE Physics 8463: Speed. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A resultant force of 72 N acts on a 9.0 kg object. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: force = mass × acceleration",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Rearrangement: acceleration = force / mass",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Substitution: acceleration = 72 / 9.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 8.0 m/s²",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "resultant force"],
    modelAnswer: "F = ma, so a = 72 / 9.0 = 8.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by mass.", "Avoid: Writing m/s instead of m/s²."],
    examinerTip:
      "AQA GCSE Physics 8463: Newton's second law. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how an airbag reduces injury during a car collision.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The passenger's momentum changes during the collision",
        keywords: [["momentum"]],
      },
      {
        point: "The airbag increases the time taken for the passenger to stop",
        keywords: [["airbag"]],
      },
      {
        point: "For the same change in momentum, increasing stopping time reduces force",
        keywords: [["momentum", "stopping time", "force"]],
      },
      {
        point: "The airbag spreads the force over a larger area, reducing pressure",
        keywords: [["airbag", "force", "area"]],
      },
    ],
    examinerKeywords: ["airbag", "momentum", "stopping time", "force", "area", "pressure"],
    modelAnswer:
      "In a collision, the passenger's momentum changes to zero. The airbag increases the stopping time, reducing the force for the same change in momentum. It also spreads the force over a larger area, reducing pressure on the body.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying airbags prevent momentum changing.",
      "Avoid: Not linking stopping time to force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Momentum and safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two factors that can increase the thinking distance of a driver.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Tiredness, alcohol, drugs or distractions can increase reaction time",
        keywords: [["reaction time", "tiredness", "alcohol"]],
      },
      {
        point:
          "A higher speed increases thinking distance because the car travels further during the reaction time",
        keywords: [["thinking distance", "reaction time", "speed"]],
      },
    ],
    examinerKeywords: ["thinking distance", "reaction time", "tiredness", "alcohol", "speed"],
    modelAnswer:
      "Tiredness can increase reaction time, increasing thinking distance. Higher speed also increases thinking distance because the car travels further while the driver reacts.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving braking distance factors only, such as worn tyres.",
      "Avoid: Not linking thinking distance to reaction time.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Stopping distance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 30 N acts at a perpendicular distance of 0.20 m from a pivot. Calculate the moment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: moment = 30 × 0.20",
        keywords: [["moment", "n m"]],
      },
      {
        point: "Answer: 6.0 N m",
        keywords: [["n m"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 30 × 0.20 = 6.0 N m.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using distance that is not perpendicular.", "Avoid: Forgetting the unit N m."],
    examinerTip:
      "AQA GCSE Physics 8463: Moments. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A wave has frequency 25 Hz and wavelength 0.12 m. Calculate its wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 25 × 0.12",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 3.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 25 × 0.12 = 3.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing wavelength by frequency.", "Avoid: Giving the unit as Hz."],
    examinerTip:
      "AQA GCSE Physics 8463: Waves. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the law of reflection and how the angles are measured.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The angle of incidence equals the angle of reflection",
        keywords: [["angle of incidence", "angle of reflection", "reflection"]],
      },
      {
        point: "Both angles are measured from the normal",
        keywords: [["angle of incidence", "angle of reflection", "normal"]],
      },
    ],
    examinerKeywords: ["angle of incidence", "angle of reflection", "normal", "reflection"],
    modelAnswer:
      "The angle of incidence equals the angle of reflection, and both angles are measured from the normal.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Saying the reflected angle is always 90°.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Reflection. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two properties of all electromagnetic waves in a vacuum.",
    marks: 2,
    markSchemePoints: [
      {
        point: "They are transverse waves",
        keywords: [["transverse"]],
      },
      {
        point: "They travel at the same speed in a vacuum",
        keywords: [["same speed", "vacuum"]],
      },
    ],
    examinerKeywords: ["electromagnetic waves", "transverse", "same speed", "vacuum"],
    modelAnswer:
      "All electromagnetic waves are transverse and travel at the same speed in a vacuum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying they all have the same wavelength.",
      "Avoid: Saying they need air to travel.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnetic spectrum. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why X-rays can be dangerous to living tissue.",
    marks: 3,
    markSchemePoints: [
      {
        point: "X-rays are ionising radiation",
        keywords: [["x-rays", "ionising"]],
      },
      {
        point: "They can remove electrons from atoms or molecules",
        keywords: [["remove electrons"]],
      },
      {
        point: "This can damage cells or DNA and increase cancer risk",
        keywords: [["dna damage", "cancer"]],
      },
    ],
    examinerKeywords: ["X-rays", "ionising", "remove electrons", "DNA damage", "cancer"],
    modelAnswer:
      "X-rays are ionising, so they can remove electrons from atoms or molecules. This can damage cells or DNA and increase the risk of cancer.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying X-rays are harmless because they are invisible.",
      "Avoid: Not mentioning ionisation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: X-ray hazard. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field pattern around a bar magnet.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Field lines go from north to south outside the magnet",
        keywords: [["field lines", "north", "south"]],
      },
      {
        point: "The field is strongest at the poles",
        keywords: [["field lines", "poles", "strongest"]],
      },
      {
        point: "Field lines are closest together where the field is strongest",
        keywords: [["field lines", "strongest"]],
      },
    ],
    examinerKeywords: ["bar magnet", "field lines", "north", "south", "poles", "strongest"],
    modelAnswer:
      "Field lines go from north to south outside the magnet. They are closest together at the poles, where the magnetic field is strongest.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing arrows from south to north outside the magnet.",
      "Avoid: Saying field lines cross.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Magnetic fields. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two ways to increase the strength of an electromagnet.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Increase the current in the coil",
        keywords: [["current"]],
      },
      {
        point: "Increase the number of turns on the coil or add a soft iron core",
        keywords: [["turns", "soft iron core"]],
      },
    ],
    examinerKeywords: ["electromagnet", "current", "turns", "soft iron core"],
    modelAnswer: "Increase the current and add more turns to the coil.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying use a plastic core.", "Avoid: Saying reduce the current."],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnets. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by the motor effect.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The motor effect is the force on a current-carrying conductor",
        keywords: [["motor effect", "force", "current-carrying conductor"]],
      },
      {
        point: "The force occurs when the conductor is in a magnetic field",
        keywords: [["force", "magnetic field"]],
      },
    ],
    examinerKeywords: ["motor effect", "force", "current-carrying conductor", "magnetic field"],
    modelAnswer:
      "The motor effect is the force on a current-carrying conductor in a magnetic field.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the motor effect is induction.",
      "Avoid: Forgetting that current must flow.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Motor effect. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 200 turns on the primary coil and 800 turns on the secondary coil. The primary voltage is 15 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["turns ratio", "primary voltage", "secondary voltage"]],
      },
      {
        point: "Substitution: Vs / 15 = 800 / 200",
        keywords: [["800", "200"]],
      },
      {
        point: "Vs = 15 × 4",
        keywords: [["mark point"]],
      },
      {
        point: "Answer: 60 V",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["transformer", "turns ratio", "primary voltage", "secondary voltage"],
    modelAnswer: "Vs / Vp = Ns / Np. Vs / 15 = 800 / 200 = 4, so Vs = 60 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using the turns ratio upside down.", "Avoid: Forgetting the unit V."],
    examinerTip:
      "AQA GCSE Physics 8463: Transformer. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why electricity is transmitted at a high potential difference in the National Grid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "For the same power transfer, higher potential difference means lower current",
        keywords: [["high potential difference", "low current"]],
      },
      {
        point: "Lower current reduces heating in transmission cables",
        keywords: [["low current", "heating losses"]],
      },
      {
        point: "Less energy is dissipated to the surroundings",
        keywords: [["less", "energy", "dissipated"]],
      },
      {
        point: "This makes transmission more efficient",
        keywords: [["makes", "transmission", "more"]],
      },
    ],
    examinerKeywords: [
      "National Grid",
      "high potential difference",
      "low current",
      "heating losses",
      "efficiency",
    ],
    modelAnswer:
      "For the same power, a high potential difference means a lower current. A lower current reduces heating losses in the cables, so less energy is dissipated and transmission is more efficient.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Saying high voltage is used because homes need extremely high voltage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: National Grid. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a planet in a circular orbit is accelerating even if its speed is constant.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Velocity is a vector quantity",
        keywords: [["velocity", "vector"]],
      },
      {
        point: "The planet's direction changes continuously as it orbits",
        keywords: [["direction changes", "orbit"]],
      },
      {
        point: "A changing velocity means the planet is accelerating",
        keywords: [["velocity"]],
      },
    ],
    examinerKeywords: ["velocity", "vector", "direction changes", "acceleration", "orbit"],
    modelAnswer:
      "Velocity includes direction. A planet in orbit constantly changes direction, so its velocity changes even if speed is constant. Therefore it is accelerating.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying constant speed means no acceleration.",
      "Avoid: Not mentioning direction.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Orbits. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe the life cycle of a star with a similar mass to the Sun after the main sequence stage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The star becomes a red giant",
        keywords: [["red giant"]],
      },
      {
        point: "The outer layers are ejected",
        keywords: [["outer", "layers", "are"]],
      },
      {
        point: "A planetary nebula forms",
        keywords: [["planetary nebula"]],
      },
      {
        point: "The core becomes a white dwarf and cools",
        keywords: [["white dwarf", "cools"]],
      },
    ],
    examinerKeywords: ["Sun-like star", "red giant", "planetary nebula", "white dwarf", "cools"],
    modelAnswer:
      "After the main sequence, a Sun-like star becomes a red giant. It ejects outer layers to form a planetary nebula, leaving a white dwarf that cools.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying the Sun becomes a black hole.",
      "Avoid: Forgetting the white dwarf stage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Star life cycle. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how redshift supports the idea that the Universe is expanding.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Light from distant galaxies is shifted to longer wavelengths",
        keywords: [["longer wavelength", "distant galaxies"]],
      },
      {
        point: "This is redshift",
        keywords: [["redshift"]],
      },
      {
        point: "Redshift shows that most distant galaxies are moving away",
        keywords: [["redshift", "distant galaxies", "moving away"]],
      },
      {
        point: "This supports the idea that space is expanding and galaxies are moving apart",
        keywords: [["moving away", "expanding universe"]],
      },
    ],
    examinerKeywords: [
      "redshift",
      "longer wavelength",
      "distant galaxies",
      "moving away",
      "expanding Universe",
    ],
    modelAnswer:
      "Redshift means light from distant galaxies has increased wavelength. This shows that most distant galaxies are moving away, supporting the idea that space is expanding and galaxies are moving apart.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying redshift means galaxies move towards Earth.",
      "Avoid: Not mentioning wavelength increase.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Redshift. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two pieces of evidence for the Big Bang model.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Redshift of distant galaxies shows that galaxies are moving away",
        keywords: [["redshift", "galaxies moving away"]],
      },
      {
        point: "Greater redshift for more distant galaxies supports expansion",
        keywords: [["redshift", "galaxies moving away"]],
      },
      {
        point: "Cosmic microwave background radiation is detected from all directions",
        keywords: [["cosmic microwave background radiation"]],
      },
      {
        point: "CMB radiation is interpreted as leftover radiation from the early Universe",
        keywords: [["early universe"]],
      },
    ],
    examinerKeywords: [
      "Big Bang",
      "redshift",
      "galaxies moving away",
      "cosmic microwave background radiation",
      "early Universe",
    ],
    modelAnswer:
      "Redshift from distant galaxies shows that most galaxies are moving away, supporting expansion. Cosmic microwave background radiation is detected from all directions and is interpreted as leftover radiation from the early Universe.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Only naming evidence without describing it.",
      "Avoid: Saying CMB radiation is sound.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Big Bang. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student uses a ripple tank to measure wave speed. Suggest two control variables for this experiment.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Keep the depth of water constant",
        keywords: [["water depth"]],
      },
      {
        point:
          "Keep the frequency of the dipper constant, or keep the same ripple tank and water conditions",
        keywords: [["ripple tank", "water depth", "frequency"]],
      },
    ],
    examinerKeywords: ["ripple tank", "control variable", "water depth", "frequency"],
    modelAnswer: "The student should keep the water depth and the dipper frequency constant.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying wave speed is a control variable.",
      "Avoid: Giving vague answers such as keep everything the same.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Required practical: waves. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-paper2-mixed-mock-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how an electric generator transfers energy and how increasing the speed of rotation affects the output.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A generator transfers kinetic energy to electrical energy",
        keywords: [["generator", "kinetic energy", "electrical energy"]],
      },
      {
        point: "A coil rotates in a magnetic field",
        keywords: [["coil", "magnetic field"]],
      },
      {
        point: "The changing magnetic field induces a potential difference",
        keywords: [["magnetic field"]],
      },
      {
        point: "Increasing the speed of rotation increases the rate of change of magnetic field",
        keywords: [["magnetic field"]],
      },
      {
        point: "This increases the induced potential difference or output",
        keywords: [["induced potential difference"]],
      },
    ],
    examinerKeywords: [
      "generator",
      "kinetic energy",
      "electrical energy",
      "coil",
      "magnetic field",
      "induced potential difference",
    ],
    modelAnswer:
      "A generator transfers kinetic energy to electrical energy. As the coil rotates in a magnetic field, the magnetic field through the coil changes and induces a potential difference. Increasing the speed of rotation increases the rate of change of the magnetic field, so the induced potential difference is larger.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying a generator stores electricity.",
      "Avoid: Forgetting the magnetic field must change.",
      "Avoid: Saying faster rotation decreases the output.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Synoptic electromagnetism and energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A train travels 2.4 km in 80 s. Calculate its average speed in m/s.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert distance: 2.4 km = 2400 m",
        keywords: [["distance", "m/s"]],
      },
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 2400 / 80",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 30 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "conversion", "m/s"],
    modelAnswer: "2.4 km = 2400 m. speed = distance / time = 2400 / 80 = 30 m/s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using 2.4 m instead of 2400 m.",
      "Avoid: Multiplying distance by time.",
      "Avoid: Forgetting the unit m/s.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Speed. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A car accelerates from 5.0 m/s to 29 m/s in 6.0 s. Calculate the acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
      {
        point: "Substitution: acceleration = (29 - 5.0) / 6.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 4.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (29 - 5.0) / 6.0 = 24 / 6.0 = 4.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using final velocity only.",
      "Avoid: Writing m/s instead of m/s².",
      "Avoid: Forgetting to subtract the initial velocity.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Acceleration. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A resultant force of 180 N acts on a 15 kg object. Calculate the acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: force = mass × acceleration",
        keywords: [["mass", "acceleration", "m/s²"]],
      },
      {
        point: "Rearrangement: acceleration = force / mass",
        keywords: [["mass", "acceleration", "m/s²"]],
      },
      {
        point: "Substitution: acceleration = 180 / 15",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 12 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["resultant force", "mass", "acceleration", "m/s²"],
    modelAnswer: "F = ma, so a = F / m = 180 / 15 = 12 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying force by mass.",
      "Avoid: Forgetting the force must be resultant.",
      "Avoid: Giving the answer in newtons.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Newton's second law. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A rock has a mass of 8.5 kg. The gravitational field strength is 9.8 N/kg. Calculate the weight of the rock.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: weight = 8.5 × 9.8",
        keywords: [["weight"]],
      },
      {
        point: "Answer: 83.3 N",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "newtons"],
    modelAnswer: "weight = mass × gravitational field strength = 8.5 × 9.8 = 83.3 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Giving weight in kg.",
      "Avoid: Dividing by gravitational field strength.",
      "Avoid: Confusing mass and weight.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Weight. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.75 kg ball moves at 12 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.75 × 12",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 9.0 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.75 × 12 = 9.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Writing the unit as N.",
      "Avoid: Dividing velocity by mass.",
      "Avoid: Using speed squared.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Momentum. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 240 N moves a crate 3.5 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Substitution: work done = 240 × 3.5",
        keywords: [["work done"]],
      },
      {
        point: "Answer: 840 J",
        keywords: [["840"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "joules"],
    modelAnswer: "work done = force × distance = 240 × 3.5 = 840 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using time instead of distance.",
      "Avoid: Giving the answer in N.",
      "Avoid: Not using distance in the direction of the force.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Work done. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 5.0 kg object moves at 8.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 0.5 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: KE = 0.5 × 5.0 × 8.0²",
        keywords: [["mark point"]],
      },
      {
        point: "Calculation: KE = 0.5 × 5.0 × 64",
        keywords: [["calculation"]],
      },
      {
        point: "Answer: 160 J",
        keywords: [["160"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "joules"],
    modelAnswer: "KE = 0.5 × 5.0 × 8.0² = 160 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square speed.",
      "Avoid: Using momentum equation.",
      "Avoid: Giving the unit as kg m/s.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Kinetic energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 25 kg object is lifted through a vertical height of 1.6 m. The gravitational field strength is 9.8 N/kg. Calculate the increase in gravitational potential energy.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Formula: gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: GPE = 25 × 9.8 × 1.6",
        keywords: [["gpe"]],
      },
      {
        point: "Answer: 392 J",
        keywords: [["392"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["unit", "must", "included"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "mass",
      "gravitational field strength",
      "height",
      "joules",
    ],
    modelAnswer: "GPE = mgh = 25 × 9.8 × 1.6 = 392 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting gravitational field strength.",
      "Avoid: Using horizontal distance instead of vertical height.",
      "Avoid: Giving the answer in N.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gravitational potential energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A motor transfers 9600 J of energy in 24 s. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 9600 / 24",
        keywords: [["power"]],
      },
      {
        point: "Answer: 400 W",
        keywords: [["400"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "watts"],
    modelAnswer: "power = energy transferred / time = 9600 / 24 = 400 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying energy by time.",
      "Avoid: Giving the unit as J.",
      "Avoid: Confusing power with energy.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Power. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A pump has an input power of 850 W and useful output power of 510 W. Calculate the efficiency as a percentage.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output power / total input power × 100",
        keywords: [["efficiency", "useful output power", "input power"]],
      },
      {
        point: "Substitution: efficiency = 510 / 850 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 60%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output power", "input power", "percentage"],
    modelAnswer: "efficiency = 510 / 850 × 100 = 60%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using input divided by output.",
      "Avoid: Using wasted power as useful power.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Efficiency. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.25 A flows for 4.0 minutes. Calculate the charge transferred.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert time: 4.0 minutes = 240 s",
        keywords: [["time"]],
      },
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.25 × 240",
        keywords: [["charge"]],
      },
      {
        point: "Answer: 60 C",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "seconds", "coulombs"],
    modelAnswer: "4.0 minutes = 240 s. charge = current × time = 0.25 × 240 = 60 C.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using 4.0 s instead of 240 s.",
      "Avoid: Giving the answer in A.",
      "Avoid: Dividing current by time.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Charge. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A component has a potential difference of 9.0 V and a current of 0.15 A. Calculate the resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: potential difference = current × resistance",
        keywords: [["resistance", "potential difference", "current"]],
      },
      {
        point: "Rearrangement: resistance = potential difference / current",
        keywords: [["resistance", "potential difference", "current"]],
      },
      {
        point: "Substitution: resistance = 9.0 / 0.15",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 60 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "potential difference", "current", "ohms"],
    modelAnswer: "R = V / I = 9.0 / 0.15 = 60 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying voltage by current.",
      "Avoid: Giving the unit as V.",
      "Avoid: Dividing current by voltage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A heater has current 5.0 A and potential difference 230 V. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = current × potential difference",
        keywords: [["power", "current", "potential difference"]],
      },
      {
        point: "Substitution: power = 5.0 × 230",
        keywords: [["power"]],
      },
      {
        point: "Answer: 1150 W",
        keywords: [["1150"]],
      },
    ],
    examinerKeywords: ["power", "current", "potential difference", "watts"],
    modelAnswer: "power = current × potential difference = 5.0 × 230 = 1150 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using resistance instead of potential difference.",
      "Avoid: Giving the unit as J.",
      "Avoid: Dividing voltage by current.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electrical power. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 2.0 kW heater is used for 15 minutes. Calculate the energy transferred in joules.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Convert power: 2.0 kW = 2000 W",
        keywords: [["power", "kw to w"]],
      },
      {
        point: "Convert time: 15 minutes = 900 s",
        keywords: [["time", "minutes to seconds"]],
      },
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy transferred", "power", "time"]],
      },
      {
        point: "Substitution: energy = 2000 × 900",
        keywords: [["energy transferred"]],
      },
      {
        point: "Answer: 1800000 J",
        keywords: [["1800000"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "kW to W", "minutes to seconds"],
    modelAnswer:
      "2.0 kW = 2000 W and 15 minutes = 900 s. energy = power × time = 2000 × 900 = 1800000 J.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Not converting kW to W.",
      "Avoid: Using 15 s instead of 900 s.",
      "Avoid: Giving the answer in W.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy transferred electrically. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A metal block has mass 1.35 kg and volume 5.0 × 10⁻⁴ m³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 1.35 / 5.0 × 10⁻⁴",
        keywords: [["density"]],
      },
      {
        point: "Answer: 2700 kg/m³",
        keywords: [["kg/m³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "kg/m³"],
    modelAnswer: "density = mass / volume = 1.35 / 5.0 × 10⁻⁴ = 2700 kg/m³.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Multiplying mass by volume.",
      "Avoid: Giving kg/m² instead of kg/m³.",
      "Avoid: Incorrectly handling standard form.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Density. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.60 kg block is heated with 7200 J of energy. Its temperature rises by 24 °C. Calculate its specific heat capacity.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "energy", "mass"]],
      },
      {
        point: "Rearrangement: specific heat capacity = energy / (mass × temperature change)",
        keywords: [["specific heat capacity", "energy", "mass"]],
      },
      {
        point: "Substitution: c = 7200 / (0.60 × 24)",
        keywords: [["7200"]],
      },
      {
        point: "c = 7200 / 14.4",
        keywords: [["7200"]],
      },
      {
        point: "Answer: 500 J/kg °C",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature change", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = E / mΔT = 7200 / (0.60 × 24) = 500 J/kg °C.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting brackets around mass × temperature change.",
      "Avoid: Giving the unit as J.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A sound wave has frequency 680 Hz and wavelength 0.50 m. Calculate the speed of the wave.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 680 × 0.50",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 340 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 680 × 0.50 = 340 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing wavelength by frequency.",
      "Avoid: Giving the unit as Hz.",
      "Avoid: Using period instead of frequency.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Wave speed. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A moment of 18 N m is produced by a force acting 0.45 m from a pivot. Calculate the force.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Rearrangement: force = moment / perpendicular distance",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: force = 18 / 0.45",
        keywords: [["force"]],
      },
      {
        point: "Answer: 40 N",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "newtons"],
    modelAnswer: "force = moment / perpendicular distance = 18 / 0.45 = 40 N.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Multiplying moment by distance.",
      "Avoid: Forgetting the unit N.",
      "Avoid: Using a non-perpendicular distance.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Moments. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 500 turns on the primary coil and 2000 turns on the secondary coil. The primary voltage is 12 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["turns ratio", "primary voltage", "secondary voltage"]],
      },
      {
        point: "Substitution: Vs / 12 = 2000 / 500",
        keywords: [["2000", "500"]],
      },
      {
        point: "Vs = 12 × 4",
        keywords: [["mark point"]],
      },
      {
        point: "Answer: 48 V",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: [
      "transformer",
      "turns ratio",
      "primary voltage",
      "secondary voltage",
      "volts",
    ],
    modelAnswer: "Vs / Vp = Ns / Np, so Vs / 12 = 2000 / 500 = 4. Vs = 48 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the turns ratio upside down.",
      "Avoid: Giving the answer in turns.",
      "Avoid: Mixing primary and secondary values.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Transformer. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-calculation-heavy-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has an activity of 1600 Bq. After 18 minutes, its activity is 200 Bq. Calculate the half-life.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Activity halves from 1600 to 800 to 400 to 200",
        keywords: [["activity", "halve"]],
      },
      {
        point: "This is 3 half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "Total time = 18 minutes",
        keywords: [["minutes"]],
      },
      {
        point: "Formula: half-life = total time / number of half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "Half-life = 18 / 3 = 6 minutes",
        keywords: [["half-life", "minutes"]],
      },
    ],
    examinerKeywords: ["half-life", "activity", "halve", "Bq", "minutes"],
    modelAnswer:
      "1600 halves to 800, then 400, then 200, so 3 half-lives have passed. half-life = 18 / 3 = 6 minutes.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Dividing 1600 by 200 and saying 8 minutes.",
      "Avoid: Counting the number of half-lives incorrectly.",
      "Avoid: Subtracting a fixed amount each time.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Half-life. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to determine the specific heat capacity of a metal block using an electrical heater.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Measure the mass of the metal block",
        keywords: [["metal block", "e = vit"]],
      },
      {
        point:
          "Insert an electrical heater and thermometer or temperature probe into holes in the block",
        keywords: [["heater", "temperature rise", "e = vit"]],
      },
      {
        point: "Measure the initial temperature of the block",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point:
          "Measure current, potential difference and time to calculate energy transferred using E = VIt",
        keywords: [["e = vit"]],
      },
      {
        point: "Measure the temperature rise of the block",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point:
          "Calculate specific heat capacity using c = E / (mΔT) and insulate the block to reduce energy loss",
        keywords: [["specific heat capacity", "e = vit"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "metal block",
      "heater",
      "temperature rise",
      "E = VIt",
      "insulation",
    ],
    modelAnswer:
      "Measure the block's mass. Insert a heater and thermometer into the block and record the initial temperature. Switch on the heater and measure current, potential difference and time to calculate energy using E = VIt. Measure the temperature rise and calculate c = E / (mΔT). Insulate the block to reduce energy loss.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting to measure mass.",
      "Avoid: Ignoring energy loss to surroundings.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest two improvements to reduce energy loss in the specific heat capacity practical.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Insulate the block using insulating material",
        keywords: [["insulate", "block", "insulating"]],
      },
      {
        point: "Ensure the heater and thermometer fit tightly, use a lid or reduce draughts",
        keywords: [["tight fit"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "energy loss",
      "insulation",
      "tight fit",
      "surroundings",
    ],
    modelAnswer:
      "Insulate the block and make sure the heater fits tightly in the hole to reduce energy loss to the surroundings.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying use a higher current without explaining energy loss.",
      "Avoid: Only saying be careful.",
      "Avoid: Suggesting a change that affects the material being tested.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity uncertainty. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the resistance of a wire depends on its length.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Use a power supply, switch, ammeter, voltmeter, crocodile clips, metre rule and resistance wire",
        keywords: [["resistance wire", "ammeter", "voltmeter"]],
      },
      {
        point: "Independent variable is wire length",
        keywords: [["length", "r = v/i"]],
      },
      {
        point: "Dependent variable is resistance calculated using R = V / I",
        keywords: [["resistance wire", "r = v/i"]],
      },
      {
        point:
          "Connect the ammeter in series and voltmeter in parallel across the selected wire length",
        keywords: [["length", "ammeter", "voltmeter"]],
      },
      {
        point: "Keep wire material, diameter and temperature constant",
        keywords: [["r = v/i"]],
      },
      {
        point:
          "Use a low current, switch off between readings, repeat readings and calculate means",
        keywords: [["r = v/i"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "length",
      "ammeter",
      "voltmeter",
      "R = V/I",
      "control variables",
    ],
    modelAnswer:
      "Set up a circuit with a power supply, switch and ammeter in series with a resistance wire. Use crocodile clips to select different wire lengths and connect a voltmeter across the selected length. Record current and potential difference, calculate R = V / I, keep wire material and diameter constant, use low current and repeat readings.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Changing wire thickness as well as length.",
      "Avoid: Not calculating resistance.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why the circuit should be switched off between readings in a resistance wire practical.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Current causes the wire to heat up",
        keywords: [["current", "causes", "wire"]],
      },
      {
        point: "Heating changes the resistance of the wire",
        keywords: [["resistance wire", "heating", "resistance changes"]],
      },
      {
        point:
          "Switching off between readings keeps temperature more constant and improves reliability",
        keywords: [["temperature", "reliability"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "heating",
      "temperature",
      "resistance changes",
      "reliability",
    ],
    modelAnswer:
      "The current heats the wire. Heating changes the resistance, so switching off between readings keeps the temperature more constant and makes the results more reliable.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying heating has no effect on resistance.",
      "Avoid: Only saying it saves energy.",
      "Avoid: Not linking temperature to reliability.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance wire safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate the I-V characteristic of a filament lamp.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Set up a circuit with power supply, switch, variable resistor and filament lamp",
        keywords: [["i-v characteristic", "filament lamp", "variable resistor"]],
      },
      {
        point: "Connect an ammeter in series with the lamp",
        keywords: [["i-v characteristic", "ammeter"]],
      },
      {
        point: "Connect a voltmeter in parallel across the lamp",
        keywords: [["i-v characteristic", "voltmeter"]],
      },
      {
        point: "Change the potential difference using the variable resistor",
        keywords: [["i-v characteristic", "variable resistor"]],
      },
      {
        point:
          "Record current and potential difference for a range of values, including both polarities if possible",
        keywords: [["i-v characteristic"]],
      },
      {
        point:
          "Plot current against potential difference and switch off between readings to reduce heating",
        keywords: [["i-v characteristic"]],
      },
    ],
    examinerKeywords: [
      "I-V characteristic",
      "filament lamp",
      "ammeter",
      "voltmeter",
      "variable resistor",
      "graph",
    ],
    modelAnswer:
      "Set up a circuit with the filament lamp, power supply, switch, variable resistor and ammeter in series. Connect a voltmeter across the lamp. Vary the potential difference, record current and voltage for several values, then plot current against potential difference. Switch off between readings to limit heating.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Only taking one reading.",
      "Avoid: Not plotting a graph.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: I-V characteristics. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to determine the density of an irregularly shaped stone.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure the mass of the stone using a balance",
        keywords: [["balance"]],
      },
      {
        point: "Add water to a measuring cylinder and record the initial volume",
        keywords: [["measuring cylinder", "water displacement"]],
      },
      {
        point: "Lower the stone fully into the water",
        keywords: [["water displacement"]],
      },
      {
        point: "Record the final volume and calculate stone volume by displacement",
        keywords: [["record", "final", "volume"]],
      },
      {
        point: "Calculate density using density = mass / volume",
        keywords: [["density"]],
      },
    ],
    examinerKeywords: [
      "density",
      "irregular object",
      "balance",
      "measuring cylinder",
      "water displacement",
    ],
    modelAnswer:
      "Measure the stone's mass using a balance. Record the initial water volume in a measuring cylinder, then fully submerge the stone and record the final volume. The volume of the stone is the difference. Calculate density using mass divided by volume.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using length × width × height for an irregular object.",
      "Avoid: Not subtracting the initial water volume.",
      "Avoid: Not fully submerging the stone.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Density practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest two ways to reduce uncertainty when measuring the volume of an irregular object by water displacement.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Read the bottom of the meniscus at eye level",
        keywords: [["meniscus", "eye level"]],
      },
      {
        point:
          "Use a narrower measuring cylinder with smaller scale divisions, remove air bubbles or repeat readings",
        keywords: [["air bubbles"]],
      },
    ],
    examinerKeywords: ["uncertainty", "water displacement", "meniscus", "eye level", "air bubbles"],
    modelAnswer:
      "Read the bottom of the meniscus at eye level and use a measuring cylinder with smaller divisions. Also make sure there are no air bubbles on the object.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Only saying human error.",
      "Avoid: Not explaining how uncertainty is reduced.",
      "Avoid: Forgetting the object must be fully submerged.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Density uncertainty. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate the relationship between force and extension for a spring.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a spring, clamp stand, ruler, pointer and slotted masses",
        keywords: [["spring", "ruler"]],
      },
      {
        point: "Measure the original length of the spring",
        keywords: [["spring"]],
      },
      {
        point:
          "Add masses one at a time and calculate force using weight = mass × gravitational field strength",
        keywords: [["force"]],
      },
      {
        point: "Measure the new length and calculate extension",
        keywords: [["extension"]],
      },
      {
        point: "Repeat readings and calculate mean extension",
        keywords: [["extension", "repeat"]],
      },
      {
        point: "Plot force against extension and do not exceed the limit of proportionality",
        keywords: [["force", "extension", "limit of proportionality"]],
      },
    ],
    examinerKeywords: [
      "spring",
      "force",
      "extension",
      "ruler",
      "repeat",
      "limit of proportionality",
    ],
    modelAnswer:
      "Hang a spring from a clamp stand with a ruler beside it. Measure its original length. Add masses one at a time, calculate the force from their weight, measure the new length and calculate extension. Repeat readings, calculate means and plot force against extension, avoiding loads beyond the limit of proportionality.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using total length instead of extension.",
      "Avoid: Not calculating force from mass.",
      "Avoid: Overstretching the spring.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Force and extension. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A force-extension graph is a straight line through the origin up to 4.0 N. Explain what this shows about the spring.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Force is directly proportional to extension",
        keywords: [["force-extension graph", "directly proportional"]],
      },
      {
        point: "The spring obeys Hooke's law up to 4.0 N",
        keywords: [["hooke's law"]],
      },
      {
        point: "The spring has not exceeded its limit of proportionality in this range",
        keywords: [["spring", "has", "not"]],
      },
    ],
    examinerKeywords: [
      "force-extension graph",
      "straight line",
      "origin",
      "directly proportional",
      "Hooke's law",
    ],
    modelAnswer:
      "The straight line through the origin shows that force is directly proportional to extension, so the spring obeys Hooke's law up to 4.0 N.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the spring does not extend.",
      "Avoid: Not mentioning direct proportionality.",
      "Avoid: Saying Hooke's law applies after the line curves.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Force-extension graph. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the effect of resultant force on the acceleration of a trolley.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Use a trolley, ramp or bench, pulley, string, hanging masses and light gates or motion sensor",
        keywords: [["trolley", "light gates"]],
      },
      {
        point: "Independent variable is resultant force, changed by changing the hanging mass",
        keywords: [["resultant force"]],
      },
      {
        point: "Dependent variable is acceleration",
        keywords: [["acceleration"]],
      },
      {
        point:
          "Keep total mass constant if testing force only by transferring masses between trolley and hanger",
        keywords: [["trolley"]],
      },
      {
        point: "Measure acceleration using light gates, data logger or motion sensor",
        keywords: [["acceleration", "light gates"]],
      },
      {
        point: "Repeat readings and calculate means",
        keywords: [["repeat"]],
      },
    ],
    examinerKeywords: [
      "resultant force",
      "acceleration",
      "trolley",
      "light gates",
      "control mass",
      "repeat",
    ],
    modelAnswer:
      "Attach a trolley to a hanging mass over a pulley. Change the resultant force by changing the hanging mass, and measure acceleration using light gates or a motion sensor. Keep total mass constant by moving masses between trolley and hanger. Repeat each force and calculate mean acceleration.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing both force and total mass without control.",
      "Avoid: Using a stopwatch for very short times without improvement.",
      "Avoid: Not measuring acceleration.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Acceleration practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest why light gates give more reliable acceleration data than a stopwatch in a trolley experiment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Light gates reduce human reaction-time error",
        keywords: [["light gates", "reaction time"]],
      },
      {
        point: "They record time more precisely",
        keywords: [["they", "record", "time"]],
      },
      {
        point: "The data logger can calculate speed or acceleration from measured times",
        keywords: [["data logger", "acceleration"]],
      },
    ],
    examinerKeywords: ["light gates", "reaction time", "precision", "data logger", "acceleration"],
    modelAnswer:
      "Light gates reduce reaction-time error and measure time more precisely than a hand-operated stopwatch. A data logger can use the timings to calculate speed or acceleration.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying light gates remove all errors.",
      "Avoid: Only saying they are easier.",
      "Avoid: Not mentioning reaction time.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Acceleration uncertainty. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the speed of water waves in a ripple tank.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a ripple tank and vibrating dipper to produce regular waves",
        keywords: [["ripple tank", "wave speed"]],
      },
      {
        point:
          "Measure the distance across several wavelengths and divide by the number of wavelengths",
        keywords: [["wavelength", "wave speed"]],
      },
      {
        point: "Record or set the frequency of the dipper",
        keywords: [["frequency"]],
      },
      {
        point: "Calculate wave speed using wave speed = frequency × wavelength",
        keywords: [["wavelength", "frequency", "wave speed"]],
      },
      {
        point: "Repeat readings and calculate a mean",
        keywords: [["repeat"]],
      },
      {
        point: "Keep water depth constant because it affects wave speed",
        keywords: [["wave speed", "water depth"]],
      },
    ],
    examinerKeywords: [
      "ripple tank",
      "wavelength",
      "frequency",
      "wave speed",
      "repeat",
      "water depth",
    ],
    modelAnswer:
      "Use a vibrating dipper to create regular waves in a ripple tank. Measure the distance across several wavelengths and divide by the number of wavelengths to find wavelength. Record the frequency and calculate speed using v = fλ. Repeat readings and keep water depth constant.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Measuring only one wavelength.",
      "Avoid: Not controlling water depth.",
      "Avoid: Using period as frequency without converting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Ripple tank practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate the frequency of sound waves using an oscilloscope.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Connect a microphone to an oscilloscope",
        keywords: [["oscilloscope", "microphone"]],
      },
      {
        point: "Use a signal generator or sound source to produce sound",
        keywords: [["sound wave"]],
      },
      {
        point: "Adjust the oscilloscope to show a clear trace",
        keywords: [["oscilloscope"]],
      },
      {
        point: "Measure the period from the trace using the time-base",
        keywords: [["period"]],
      },
      {
        point: "Calculate frequency using frequency = 1 / period",
        keywords: [["period", "frequency"]],
      },
    ],
    examinerKeywords: ["oscilloscope", "microphone", "sound wave", "period", "frequency"],
    modelAnswer:
      "Connect a microphone to an oscilloscope and produce a sound using a signal generator or speaker. Adjust the oscilloscope to show a clear trace, measure the period using the time-base, then calculate frequency using f = 1 / T.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using amplitude to calculate frequency.",
      "Avoid: Not using the time-base.",
      "Avoid: Confusing period with wavelength.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Sound wave practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate reflection from a plane mirror using a ray box.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Place a plane mirror on paper and draw around it",
        keywords: [["plane mirror"]],
      },
      {
        point: "Draw a normal at 90° to the mirror",
        keywords: [["normal"]],
      },
      {
        point: "Use a ray box to shine a ray at the mirror",
        keywords: [["ray box"]],
      },
      {
        point: "Mark and draw the incident and reflected rays",
        keywords: [["ray box", "incident ray", "reflected ray"]],
      },
      {
        point: "Measure the angles of incidence and reflection from the normal using a protractor",
        keywords: [["normal", "protractor"]],
      },
    ],
    examinerKeywords: [
      "plane mirror",
      "ray box",
      "normal",
      "incident ray",
      "reflected ray",
      "protractor",
    ],
    modelAnswer:
      "Place the mirror on paper and draw around it. Draw a normal at 90° to the mirror. Shine a ray at the mirror with a ray box, mark the incident and reflected rays, then measure both angles from the normal using a protractor.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Not drawing the normal.",
      "Avoid: Only taking one reading.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Reflection practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate refraction through a glass block.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Place a glass block on paper and draw around it",
        keywords: [["glass block"]],
      },
      {
        point: "Shine a narrow ray of light into the block at an angle",
        keywords: [["ray box", "angle"]],
      },
      {
        point: "Mark the incident and emergent rays",
        keywords: [["ray box"]],
      },
      {
        point: "Remove the block and draw the ray path through the block",
        keywords: [["ray box"]],
      },
      {
        point: "Measure angles from the normal using a protractor and repeat for different angles",
        keywords: [["normal", "angle", "protractor"]],
      },
    ],
    examinerKeywords: ["refraction", "glass block", "ray box", "normal", "angle", "protractor"],
    modelAnswer:
      "Place the glass block on paper and draw around it. Shine a narrow ray into the block at an angle, mark the incident and emergent rays, then remove the block and draw the ray path. Measure angles from the normal and repeat for different incident angles.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Measuring angles from the surface instead of the normal.",
      "Avoid: Not drawing around the block.",
      "Avoid: Only marking one point on each ray.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Refraction practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the corrected count rate from a radioactive source.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure background count rate without the source",
        keywords: [["background count", "count rate"]],
      },
      {
        point: "Place the source a fixed distance from the detector",
        keywords: [["detector"]],
      },
      {
        point: "Measure the count for a known time and calculate count rate",
        keywords: [["count rate"]],
      },
      {
        point: "Subtract background count rate from measured count rate",
        keywords: [["background count", "count rate"]],
      },
      {
        point: "Use tongs, shielding, distance and short exposure time for safety",
        keywords: [["safety"]],
      },
    ],
    examinerKeywords: [
      "background count",
      "detector",
      "count rate",
      "corrected count rate",
      "safety",
    ],
    modelAnswer:
      "First measure the background count rate. Place the source a fixed distance from the detector and record counts for a known time. Calculate count rate, then subtract background count rate to find corrected count rate. Use tongs, shielding and short exposure time.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting to subtract background.",
      "Avoid: Changing the source-detector distance.",
      "Avoid: Handling the source directly.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Radiation practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Describe",
    questionText:
      "Describe how to plot a graph from experimental data so that it is suitable for analysis.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Put the independent variable on the x-axis and dependent variable on the y-axis",
        keywords: [["x-axis", "y-axis"]],
      },
      {
        point: "Label both axes with quantities and units",
        keywords: [["x-axis", "units"]],
      },
      {
        point: "Choose a suitable scale that uses most of the graph paper",
        keywords: [["graph", "scale"]],
      },
      {
        point: "Plot points accurately using small crosses or dots",
        keywords: [["y-axis"]],
      },
      {
        point: "Draw a line of best fit or smooth curve as appropriate",
        keywords: [["line of best fit"]],
      },
    ],
    examinerKeywords: ["graph", "x-axis", "y-axis", "units", "scale", "line of best fit"],
    modelAnswer:
      "Put the independent variable on the x-axis and dependent variable on the y-axis. Label axes with units, choose a suitable scale, plot points accurately and draw a line of best fit or smooth curve.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting units on axes.",
      "Avoid: Using a scale that wastes graph paper.",
      "Avoid: Joining every point with straight lines when a best-fit line is needed.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Graph skills. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Describe",
    questionText: "Describe how to determine the gradient of a straight-line graph.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Choose two points far apart on the line of best fit",
        keywords: [["line of best fit"]],
      },
      {
        point: "Calculate change in y divided by change in x",
        keywords: [["change in y", "change in x"]],
      },
      {
        point: "Include correct units if the graph axes have units",
        keywords: [["units"]],
      },
    ],
    examinerKeywords: ["gradient", "line of best fit", "change in y", "change in x", "units"],
    modelAnswer:
      "Choose two points far apart on the line of best fit. Calculate gradient = change in y / change in x, using units from the axes if required.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using points not on the best-fit line.",
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Choosing points too close together.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gradient. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student measures a length as 40.0 cm using a ruler with uncertainty ±0.1 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage uncertainty", "uncertainty", "measured value"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.1 / 40.0 × 100",
        keywords: [["percentage uncertainty", "uncertainty", "percentage"]],
      },
      {
        point: "Answer: 0.25%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.1 / 40.0 × 100 = 0.25%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving off the percentage sign.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Uncertainty. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-required-practical-skills-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student records times of 2.10 s, 2.12 s, 2.09 s and 3.41 s. Identify the anomalous result and calculate the mean time excluding it.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The anomalous result is 3.41 s",
        keywords: [["anomalous result"]],
      },
      {
        point: "Mean should be calculated using only 2.10 s, 2.12 s and 2.09 s",
        keywords: [["mean"]],
      },
      {
        point: "Substitution: mean = (2.10 + 2.12 + 2.09) / 3",
        keywords: [["mean"]],
      },
      {
        point: "Answer: 2.10 s",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["anomalous result", "mean", "exclude", "repeat readings", "seconds"],
    modelAnswer:
      "The anomalous result is 3.41 s. Mean = (2.10 + 2.12 + 2.09) / 3 = 6.31 / 3 = 2.10 s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Including the anomaly in the mean.",
      "Avoid: Dividing by 4 after excluding the anomaly.",
      "Avoid: Identifying 2.09 s as the anomaly.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Anomalies and repeats. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how seat belts, airbags and crumple zones reduce injuries in a car collision.",
    marks: 6,
    markSchemePoints: [
      {
        point: "During a collision, the passenger's momentum changes to zero",
        keywords: [["momentum"]],
      },
      {
        point: "Seat belts increase the time taken for the passenger to stop",
        keywords: [["seat", "belts", "increase"]],
      },
      {
        point: "For the same change in momentum, increasing stopping time reduces force",
        keywords: [["momentum", "stopping time", "force"]],
      },
      {
        point: "Airbags increase stopping time and spread the force over a larger area",
        keywords: [["stopping time", "force", "airbag"]],
      },
      {
        point: "Spreading force over a larger area reduces pressure on the body",
        keywords: [["force", "pressure"]],
      },
      {
        point: "Crumple zones deform, absorb energy and increase the stopping time of the car",
        keywords: [["stopping time", "crumple zone"]],
      },
    ],
    examinerKeywords: ["momentum", "stopping time", "force", "airbag", "pressure", "crumple zone"],
    modelAnswer:
      "In a crash, the passenger's momentum changes to zero. Seat belts and airbags increase the stopping time, reducing the force. Airbags also spread the force over a larger area, reducing pressure. Crumple zones deform, absorb energy and increase the stopping time of the car.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying safety features stop momentum from changing.",
      "Avoid: Not linking stopping time to reduced force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Vehicle safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate the use of solar panels and gas-fired power stations for generating electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Solar panels use a renewable energy resource",
        keywords: [["solar panels", "renewable"]],
      },
      {
        point: "Solar panels produce no greenhouse gases during operation",
        keywords: [["solar panels", "gas-fired power station"]],
      },
      {
        point: "Solar output depends on sunlight, weather and time of day",
        keywords: [["solar panels"]],
      },
      {
        point: "Gas-fired power stations can respond quickly to changes in demand",
        keywords: [["gas-fired power station", "demand"]],
      },
      {
        point: "Gas is non-renewable and releases carbon dioxide when burned",
        keywords: [["gas-fired power station", "renewable", "carbon dioxide"]],
      },
      {
        point: "A justified conclusion should compare reliability, pollution and sustainability",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "solar panels",
      "gas-fired power station",
      "renewable",
      "carbon dioxide",
      "reliable",
      "demand",
    ],
    modelAnswer:
      "Solar panels use a renewable resource and produce no greenhouse gases during operation, but their output depends on sunlight, weather and time of day. Gas-fired power stations can respond quickly to demand, but gas is non-renewable and releases carbon dioxide. Solar is more sustainable, while gas is more controllable.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying solar panels work equally well at night.",
      "Avoid: Saying gas is renewable.",
      "Avoid: Only giving one side of the comparison.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Energy resources. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how a vacuum flask reduces thermal energy transfer from hot liquid to the surroundings.",
    marks: 6,
    markSchemePoints: [
      {
        point: "The vacuum reduces conduction because there are very few particles",
        keywords: [["vacuum flask", "conduction"]],
      },
      {
        point: "The vacuum prevents convection because there are no particles to move in bulk",
        keywords: [["vacuum flask", "convection"]],
      },
      {
        point: "Shiny silvered surfaces reflect infrared radiation",
        keywords: [["infrared radiation", "silvered surface"]],
      },
      {
        point: "Shiny surfaces are poor emitters of infrared radiation",
        keywords: [["infrared radiation"]],
      },
      {
        point: "The stopper reduces convection and evaporation from the top",
        keywords: [["convection", "evaporation"]],
      },
      {
        point: "Overall, conduction, convection, radiation and evaporation are reduced",
        keywords: [["conduction", "convection", "evaporation"]],
      },
    ],
    examinerKeywords: [
      "vacuum flask",
      "conduction",
      "convection",
      "infrared radiation",
      "silvered surface",
      "evaporation",
    ],
    modelAnswer:
      "The vacuum reduces conduction because there are very few particles and prevents convection because particles cannot move in bulk. Silvered surfaces reflect infrared radiation and are poor emitters. The stopper reduces convection and evaporation from the top. These features reduce thermal energy transfer.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying convection occurs through a vacuum.",
      "Avoid: Saying shiny surfaces are good emitters.",
      "Avoid: Only naming parts without explaining them.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Thermal insulation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a fuse and earth wire protect a user of a metal-cased appliance.",
    marks: 6,
    markSchemePoints: [
      {
        point: "If the live wire touches the metal case, the case could become live",
        keywords: [["metal case", "live wire"]],
      },
      {
        point: "The earth wire provides a low-resistance path to ground",
        keywords: [["earth wire", "low resistance"]],
      },
      {
        point: "A large current flows through the earth wire",
        keywords: [["earth wire", "low resistance"]],
      },
      {
        point: "The large current causes the fuse wire to heat up and melt",
        keywords: [["fuse"]],
      },
      {
        point: "The fuse breaks the circuit and disconnects the supply",
        keywords: [["fuse"]],
      },
      {
        point: "This prevents the user receiving a large electric shock from the case",
        keywords: [["electric shock"]],
      },
    ],
    examinerKeywords: [
      "fuse",
      "earth wire",
      "metal case",
      "live wire",
      "low resistance",
      "electric shock",
    ],
    modelAnswer:
      "If the live wire touches the metal case, the case could become live. The earth wire gives a low-resistance path to ground, so a large current flows. This melts the fuse, breaking the circuit and disconnecting the supply, reducing electric shock risk.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the earth wire normally carries current.",
      "Avoid: Saying the fuse reduces voltage slowly.",
      "Avoid: Not linking large current to the fuse melting.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electrical safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the use of nuclear fission power stations for generating electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Nuclear power stations can generate large amounts of electricity reliably",
        keywords: [["nuclear fission", "electricity generation"]],
      },
      {
        point: "They release no carbon dioxide during normal operation",
        keywords: [["carbon dioxide"]],
      },
      {
        point: "Nuclear fuel is non-renewable",
        keywords: [["nuclear fission"]],
      },
      {
        point: "Radioactive waste must be stored safely for a long time",
        keywords: [["radioactive waste"]],
      },
      {
        point: "Accidents could release radioactive material into the environment",
        keywords: [["radioactive waste", "accident risk"]],
      },
      {
        point:
          "A justified conclusion should balance reliable low-carbon electricity against waste and safety risks",
        keywords: [["electricity generation", "reliable", "carbon dioxide"]],
      },
    ],
    examinerKeywords: [
      "nuclear fission",
      "electricity generation",
      "reliable",
      "carbon dioxide",
      "radioactive waste",
      "accident risk",
    ],
    modelAnswer:
      "Nuclear fission power stations produce large amounts of reliable electricity and do not release carbon dioxide during normal operation. However, nuclear fuel is non-renewable and radioactive waste must be stored safely for a long time. Accidents could release radioactive material. Nuclear power is useful for low-carbon electricity, but waste and safety risks must be managed.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying nuclear power releases carbon dioxide during normal operation.",
      "Avoid: Ignoring radioactive waste.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear power. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText:
      "Compare the energy transfers and physics principles in an electric motor and an electrical generator.",
    marks: 6,
    markSchemePoints: [
      {
        point: "An electric motor uses the motor effect",
        keywords: [["electric motor", "motor effect"]],
      },
      {
        point: "A current-carrying coil in a magnetic field experiences forces and rotates",
        keywords: [["coil"]],
      },
      {
        point: "A motor transfers electrical energy to kinetic energy",
        keywords: [["electric motor", "motor effect", "energy transfer"]],
      },
      {
        point: "A generator uses electromagnetic induction",
        keywords: [["generator", "electromagnetic induction"]],
      },
      {
        point: "A rotating coil in a magnetic field induces a potential difference",
        keywords: [["coil"]],
      },
      {
        point: "A generator transfers kinetic energy to electrical energy",
        keywords: [["electric motor", "generator", "energy transfer"]],
      },
    ],
    examinerKeywords: [
      "electric motor",
      "generator",
      "motor effect",
      "electromagnetic induction",
      "coil",
      "energy transfer",
    ],
    modelAnswer:
      "A motor uses the motor effect: a current-carrying coil in a magnetic field experiences forces and rotates, transferring electrical energy to kinetic energy. A generator uses electromagnetic induction: rotating a coil in a magnetic field induces a potential difference, transferring kinetic energy to electrical energy.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying motors and generators are identical.",
      "Avoid: Confusing motor effect with induction.",
      "Avoid: Not comparing energy transfers.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Motors and generators. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain, using the particle model, why the pressure of a gas in a sealed container increases when the temperature increases.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Gas particles move randomly in all directions",
        keywords: [["gas particles", "random motion"]],
      },
      {
        point: "They collide with the walls of the container",
        keywords: [["they", "collide", "walls"]],
      },
      {
        point: "Collisions exert forces on the walls, producing pressure",
        keywords: [["collisions", "pressure"]],
      },
      {
        point: "Increasing temperature increases the average kinetic energy of the particles",
        keywords: [["temperature", "kinetic energy"]],
      },
      {
        point: "Particles move faster and collide more frequently with the walls",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Collisions are more forceful, so pressure increases at constant volume",
        keywords: [["collisions", "pressure"]],
      },
    ],
    examinerKeywords: [
      "gas particles",
      "random motion",
      "collisions",
      "pressure",
      "temperature",
      "kinetic energy",
    ],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls, exerting forces that produce pressure. When temperature increases, particles gain average kinetic energy and move faster. They collide with the walls more often and more forcefully, so pressure increases because volume is constant.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gas particles expand.",
      "Avoid: Not linking collisions to pressure.",
      "Avoid: Saying volume increases when the container is sealed.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Gas pressure. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how redshift and cosmic microwave background radiation support the Big Bang model.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Light from distant galaxies is redshifted",
        keywords: [["redshift", "distant galaxies"]],
      },
      {
        point: "Redshift shows that most distant galaxies are moving away",
        keywords: [["redshift", "distant galaxies", "moving away"]],
      },
      {
        point: "More distant galaxies generally have greater redshift, supporting expansion",
        keywords: [["redshift", "distant galaxies", "expansion"]],
      },
      {
        point: "Cosmic microwave background radiation is detected from all directions",
        keywords: [["cosmic microwave background radiation"]],
      },
      {
        point: "CMB radiation is interpreted as cooled radiation from the early Universe",
        keywords: [["cmb", "radiation", "interpreted"]],
      },
      {
        point: "Together the evidence supports the idea that the Universe began hot and dense",
        keywords: [["together", "evidence", "supports"]],
      },
    ],
    examinerKeywords: [
      "redshift",
      "distant galaxies",
      "moving away",
      "expansion",
      "cosmic microwave background radiation",
      "Big Bang",
    ],
    modelAnswer:
      "Redshift shows that light from distant galaxies has increased wavelength, meaning most galaxies are moving away. More distant galaxies generally have greater redshift, supporting expansion. Cosmic microwave background radiation is detected from all directions and is interpreted as cooled radiation from the early Universe. Together, these support the Big Bang model of a hot, dense beginning.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying redshift means galaxies move towards Earth.",
      "Avoid: Saying CMB radiation is sound.",
      "Avoid: Only describing one piece of evidence.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Big Bang evidence. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the use of ionising radiation in medical imaging and cancer treatment.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionising radiation can be used in X-ray imaging to diagnose medical conditions",
        keywords: [["ionising radiation", "medical imaging"]],
      },
      {
        point: "Radioactive tracers can show the function of organs",
        keywords: [["tracers"]],
      },
      {
        point: "Radiotherapy can kill cancer cells",
        keywords: [["radiotherapy"]],
      },
      {
        point: "Ionising radiation can damage healthy cells and DNA",
        keywords: [["ionising radiation", "dna damage"]],
      },
      {
        point: "Risks are reduced using shielding, short exposure times and controlled doses",
        keywords: [["shielding"]],
      },
      {
        point:
          "A justified conclusion should state that benefits can outweigh risks when radiation is carefully controlled",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "ionising radiation",
      "medical imaging",
      "tracers",
      "radiotherapy",
      "DNA damage",
      "shielding",
    ],
    modelAnswer:
      "Ionising radiation is useful because X-rays and tracers can diagnose conditions, and radiotherapy can kill cancer cells. However, it can damage healthy cells and DNA. Risks are reduced by shielding, short exposure times and controlled doses. The benefits can outweigh the risks when exposure is carefully controlled.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying medical radiation is completely safe.",
      "Avoid: Only discussing imaging and not treatment.",
      "Avoid: Not giving a judgement.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Medical radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare ultrasound and X-rays for medical imaging.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ultrasound is a sound wave with frequency above the human hearing range",
        keywords: [["ultrasound"]],
      },
      {
        point: "Ultrasound reflects at boundaries between tissues and can form images",
        keywords: [["ultrasound"]],
      },
      {
        point: "Ultrasound is non-ionising and is suitable for imaging a fetus",
        keywords: [["ultrasound", "non-ionising", "ionising"]],
      },
      {
        point: "X-rays are electromagnetic waves and are ionising",
        keywords: [["x-rays", "ionising"]],
      },
      {
        point: "X-rays pass through soft tissue but are absorbed more by bone",
        keywords: [["x-rays"]],
      },
      {
        point: "X-rays give clear images of bones but can damage cells or DNA",
        keywords: [["x-rays"]],
      },
    ],
    examinerKeywords: [
      "ultrasound",
      "X-rays",
      "medical imaging",
      "reflection",
      "non-ionising",
      "ionising",
    ],
    modelAnswer:
      "Ultrasound is high-frequency sound that reflects at tissue boundaries to form images. It is non-ionising, so it is useful for fetus scans. X-rays are ionising electromagnetic waves. They pass through soft tissue but are absorbed more by bone, giving clear bone images, but they can damage cells or DNA.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying ultrasound is ionising.",
      "Avoid: Saying X-rays are sound waves.",
      "Avoid: Only giving uses with no safety comparison.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Ultrasound and X-rays. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe the main stages in the life cycle of a very massive star.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A star forms from a nebula of gas and dust",
        keywords: [["nebula"]],
      },
      {
        point: "Gravity pulls the gas and dust together to form a protostar",
        keywords: [["protostar"]],
      },
      {
        point: "Fusion begins and the star becomes a main sequence star",
        keywords: [["main sequence", "fusion"]],
      },
      {
        point: "When hydrogen fuel runs low, the star expands into a red supergiant",
        keywords: [["red supergiant"]],
      },
      {
        point: "The star explodes as a supernova",
        keywords: [["supernova"]],
      },
      {
        point: "The remaining core becomes a neutron star or black hole",
        keywords: [["main sequence"]],
      },
    ],
    examinerKeywords: [
      "nebula",
      "protostar",
      "main sequence",
      "fusion",
      "red supergiant",
      "supernova",
    ],
    modelAnswer:
      "A massive star forms when gas and dust in a nebula collapse under gravity to form a protostar. When fusion begins, it becomes a main sequence star. After hydrogen fuel runs low, it expands into a red supergiant and explodes as a supernova. The remaining core becomes a neutron star or black hole.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying massive stars become white dwarfs.",
      "Avoid: Forgetting the supernova stage.",
      "Avoid: Not mentioning fusion in the main sequence.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Star life cycles. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why transformers are used when electrical energy is transmitted over long distances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Step-up transformers increase the potential difference before transmission",
        keywords: [["transformer", "step-up", "step-down"]],
      },
      {
        point: "For the same power transfer, a higher potential difference means a lower current",
        keywords: [["high potential difference", "low current"]],
      },
      {
        point: "A lower current reduces heating in transmission cables",
        keywords: [["low current", "heating losses"]],
      },
      {
        point: "Less energy is dissipated to the surroundings",
        keywords: [["less", "energy", "dissipated"]],
      },
      {
        point: "Step-down transformers reduce the potential difference near consumers",
        keywords: [["transformer", "step-up", "step-down"]],
      },
      {
        point: "This makes the supply safer and suitable for use in homes",
        keywords: [["makes", "supply", "safer"]],
      },
    ],
    examinerKeywords: [
      "transformer",
      "step-up",
      "step-down",
      "high potential difference",
      "low current",
      "heating losses",
    ],
    modelAnswer:
      "Step-up transformers increase potential difference before transmission. For the same power, a higher potential difference means a lower current, so less energy is wasted as heating in cables. Near consumers, step-down transformers reduce the potential difference to a safer value suitable for homes.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Forgetting the step-down transformer.",
      "Avoid: Saying transformers work with direct current.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electricity transmission. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a submarine must be designed with a strong hull for deep water.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Pressure in a liquid increases with depth",
        keywords: [["pressure", "depth"]],
      },
      {
        point: "At greater depth there is more water above the submarine",
        keywords: [["submarine", "depth"]],
      },
      {
        point: "The weight of this water produces a greater force per unit area",
        keywords: [["weight of water", "force per unit area"]],
      },
      {
        point: "Pressure acts in all directions on the submarine",
        keywords: [["submarine", "pressure"]],
      },
      {
        point: "There is a large pressure difference between outside and inside",
        keywords: [["pressure"]],
      },
      {
        point: "A strong hull reduces the risk of the submarine being crushed",
        keywords: [["submarine", "strong hull"]],
      },
    ],
    examinerKeywords: [
      "submarine",
      "pressure",
      "depth",
      "weight of water",
      "force per unit area",
      "strong hull",
    ],
    modelAnswer:
      "Liquid pressure increases with depth because there is more water above the submarine. The weight of water produces a larger force per unit area, and pressure acts in all directions. Deep underwater, outside pressure is much greater than inside pressure, so a strong hull is needed to prevent crushing.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying pressure only acts downward.",
      "Avoid: Saying pressure decreases with depth.",
      "Avoid: Not linking pressure to force per unit area.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Pressure and depth. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Evaluate",
    questionText:
      "A student investigates the relationship between force and extension for a spring. Evaluate how the method could be improved.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a ruler fixed close to the spring to reduce parallax error",
        keywords: [["spring", "parallax"]],
      },
      {
        point: "Use a pointer attached to the spring to improve reading accuracy",
        keywords: [["spring", "pointer"]],
      },
      {
        point: "Measure extension by subtracting original length from loaded length",
        keywords: [["extension"]],
      },
      {
        point: "Add loads gradually and avoid exceeding the limit of proportionality",
        keywords: [["limit of proportionality"]],
      },
      {
        point: "Repeat each load and calculate a mean extension",
        keywords: [["extension"]],
      },
      {
        point:
          "A justified conclusion should explain that these changes reduce uncertainty and improve reliability",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "spring",
      "force",
      "extension",
      "parallax",
      "pointer",
      "limit of proportionality",
    ],
    modelAnswer:
      "The ruler should be fixed close to the spring and a pointer used to reduce parallax error. The student should measure original length and subtract it from each loaded length to find extension. Loads should be added gradually so the limit of proportionality is not exceeded. Repeating readings and calculating a mean improves reliability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using total length instead of extension.",
      "Avoid: Ignoring the limit of proportionality.",
      "Avoid: Only saying repeat without explaining why.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Practical evaluation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the uses and hazards of ultraviolet, X-ray and gamma radiation.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Ultraviolet can be used in fluorescent lamps or security marking but can damage skin cells",
        keywords: [["ultraviolet"]],
      },
      {
        point:
          "X-rays can be used for medical imaging because they pass through soft tissue but are absorbed by bone",
        keywords: [["x-rays", "medical imaging"]],
      },
      {
        point: "Gamma radiation can be used for sterilising equipment or treating cancer",
        keywords: [["gamma", "sterilising"]],
      },
      {
        point: "X-rays and gamma rays are ionising and can damage DNA",
        keywords: [["x-rays", "gamma", "ionising"]],
      },
      {
        point: "Risks can be reduced by shielding, limiting exposure time and controlling dose",
        keywords: [["x-rays"]],
      },
      {
        point: "A justified conclusion should link usefulness to controlled risk",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "ultraviolet",
      "X-rays",
      "gamma",
      "medical imaging",
      "sterilising",
      "ionising",
    ],
    modelAnswer:
      "Ultraviolet is useful in fluorescent lamps and security marking but can damage skin. X-rays are useful for medical imaging because they pass through soft tissue but are absorbed by bone. Gamma rays can sterilise equipment and treat cancer. X-rays and gamma are ionising and can damage DNA, so shielding, exposure time and dose must be controlled.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying all electromagnetic waves are equally dangerous.",
      "Avoid: Giving uses without hazards.",
      "Avoid: Not mentioning ionisation or DNA damage.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnetic radiation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a bus is more likely to topple if it has a high centre of mass and turns a corner quickly.",
    marks: 6,
    markSchemePoints: [
      {
        point: "The weight of the bus acts through its centre of mass",
        keywords: [["centre of mass", "weight"]],
      },
      {
        point: "A high centre of mass makes the bus less stable",
        keywords: [["centre of mass"]],
      },
      {
        point:
          "When the bus turns quickly, the line of action of the weight can move outside the base",
        keywords: [["line of action", "weight", "base"]],
      },
      {
        point: "If the line of action of weight is outside the base, there is a turning effect",
        keywords: [["line of action", "weight", "base"]],
      },
      {
        point: "This turning effect can cause the bus to topple",
        keywords: [["turning effect"]],
      },
      {
        point: "A wider base or lower centre of mass would improve stability",
        keywords: [["centre of mass", "stability", "base"]],
      },
    ],
    examinerKeywords: [
      "centre of mass",
      "stability",
      "line of action",
      "weight",
      "base",
      "turning effect",
    ],
    modelAnswer:
      "The weight of the bus acts through its centre of mass. A high centre of mass makes it less stable. When the bus turns quickly, the line of action of weight may pass outside the base, producing a turning effect that can make the bus topple. A lower centre of mass or wider base improves stability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying a high centre of mass makes the bus more stable.",
      "Avoid: Not mentioning the line of action of weight.",
      "Avoid: Ignoring the base.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Stability. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "A lift motor raises passengers. Explain why the input power is greater than the useful output power and how efficiency could be improved.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Useful output power increases gravitational potential energy of the passengers and lift",
        keywords: [["useful output power", "gravitational potential energy"]],
      },
      {
        point: "Some input energy is dissipated by friction as thermal energy",
        keywords: [["input power", "friction", "thermal energy"]],
      },
      {
        point: "Some energy may be transferred as sound",
        keywords: [["some", "energy", "may"]],
      },
      {
        point: "Therefore useful output power is less than input power",
        keywords: [["input power", "useful output power"]],
      },
      {
        point: "Lubrication or better bearings can reduce friction",
        keywords: [["friction"]],
      },
      {
        point: "Reducing wasted energy increases efficiency",
        keywords: [["efficiency"]],
      },
    ],
    examinerKeywords: [
      "input power",
      "useful output power",
      "gravitational potential energy",
      "friction",
      "thermal energy",
      "efficiency",
    ],
    modelAnswer:
      "Useful output power raises the lift and passengers, increasing gravitational potential energy. Some input energy is dissipated as thermal energy due to friction and as sound, so useful output power is less than input power. Lubrication and better bearings reduce friction, reducing wasted energy and increasing efficiency.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Saying efficiency can be greater than 100%.",
      "Avoid: Not identifying useful and wasted transfers.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Efficiency. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate safety precautions for using a radioactive source in a school laboratory.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use tongs or forceps to increase distance from the source",
        keywords: [["tongs", "distance"]],
      },
      {
        point: "Keep exposure time as short as possible",
        keywords: [["time"]],
      },
      {
        point: "Use shielding or store the source in a shielded container",
        keywords: [["shielding"]],
      },
      {
        point: "Point the source away from people",
        keywords: [["point", "source", "away"]],
      },
      {
        point: "Never touch the source directly",
        keywords: [["never", "touch", "source"]],
      },
      {
        point:
          "A justified conclusion should link time, distance and shielding to reducing radiation dose",
        keywords: [["time", "distance", "shielding"]],
      },
    ],
    examinerKeywords: ["radioactive source", "tongs", "time", "distance", "shielding", "dose"],
    modelAnswer:
      "A radioactive source should be handled with tongs to increase distance, and exposure time should be kept short. Shielding or a shielded container should be used, and the source should be pointed away from people. It should never be touched directly. These precautions reduce dose by using time, distance and shielding.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gloves alone fully protect the user.",
      "Avoid: Ignoring time, distance or shielding.",
      "Avoid: Suggesting direct handling.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Radiation safety. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how momentum ideas are used to reduce injuries in sports helmets.",
    marks: 6,
    markSchemePoints: [
      {
        point: "In an impact, the head's momentum changes",
        keywords: [["momentum"]],
      },
      {
        point: "The helmet increases the time taken for the head to stop",
        keywords: [["helmet"]],
      },
      {
        point: "For the same change in momentum, increasing stopping time reduces force",
        keywords: [["momentum", "stopping time", "force"]],
      },
      {
        point: "The helmet spreads the force over a larger area",
        keywords: [["helmet", "force", "area"]],
      },
      {
        point: "This reduces pressure on the skull",
        keywords: [["pressure"]],
      },
      {
        point: "Some energy is dissipated as the helmet deforms",
        keywords: [["helmet"]],
      },
    ],
    examinerKeywords: ["helmet", "momentum", "stopping time", "force", "area", "pressure"],
    modelAnswer:
      "In an impact, the head's momentum changes. The helmet increases the time taken for the head to stop, reducing force for the same change in momentum. It also spreads the force over a larger area, reducing pressure on the skull, and dissipates energy as it deforms.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the helmet prevents momentum changing.",
      "Avoid: Not linking stopping time to force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Momentum and helmets. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-high-mark-synoptic-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the thickness of insulation affects the rate of cooling of hot water.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Use identical beakers, hot water, thermometers or temperature probes, stopwatch and insulation of different thicknesses",
        keywords: [["insulation thickness", "temperature"]],
      },
      {
        point: "Independent variable is insulation thickness",
        keywords: [["insulation thickness"]],
      },
      {
        point: "Dependent variable is temperature drop or rate of cooling",
        keywords: [["rate of cooling", "temperature"]],
      },
      {
        point:
          "Control variables include volume of water, starting temperature, beaker type and room conditions",
        keywords: [["temperature", "control variables"]],
      },
      {
        point: "Record temperature at regular time intervals and repeat for each thickness",
        keywords: [["temperature", "time", "repeat"]],
      },
      {
        point:
          "Calculate mean temperature drop per minute or plot cooling curves; handle hot water safely",
        keywords: [["temperature"]],
      },
    ],
    examinerKeywords: [
      "insulation thickness",
      "rate of cooling",
      "temperature",
      "time",
      "control variables",
      "repeat",
    ],
    modelAnswer:
      "Wrap identical beakers with different thicknesses of insulation. Add the same volume of hot water at the same starting temperature to each beaker. Measure temperature at regular intervals for a fixed time. Keep beaker type and room conditions constant. Repeat and calculate mean temperature drop per minute or plot cooling curves. Handle hot water safely.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing both insulation material and thickness.",
      "Avoid: Using different starting temperatures.",
      "Avoid: Only recording one final temperature.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Planning cooling experiment. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange speed = distance / time to make distance the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Multiply both sides by time",
        keywords: [["time"]],
      },
      {
        point: "Answer: distance = speed × time",
        keywords: [["speed", "distance", "time"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "rearrange"],
    modelAnswer: "distance = speed × time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing distance = speed / time.", "Avoid: Forgetting to multiply by time."],
    examinerTip:
      "AQA GCSE Physics 8463: Speed equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking acceleration, change in velocity and time taken.",
    marks: 1,
    markSchemePoints: [
      {
        point: "acceleration = change in velocity / time taken",
        keywords: [["acceleration", "change in velocity", "time taken"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time taken"],
    modelAnswer: "acceleration = change in velocity / time taken.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Using final velocity instead of change in velocity.",
      "Avoid: Writing acceleration = time / change in velocity.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Acceleration equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange force = mass × acceleration to make acceleration the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with force = mass × acceleration",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Divide both sides by mass",
        keywords: [["mass"]],
      },
      {
        point: "Answer: acceleration = force / mass",
        keywords: [["force", "mass", "acceleration"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "rearrange"],
    modelAnswer: "acceleration = force / mass.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing acceleration = mass / force.", "Avoid: Multiplying force by mass."],
    examinerTip:
      "AQA GCSE Physics 8463: Force equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking weight, mass and gravitational field strength.",
    marks: 1,
    markSchemePoints: [
      {
        point: "weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength"],
    modelAnswer: "weight = mass × gravitational field strength.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Writing weight = mass / gravitational field strength.",
      "Avoid: Using kg as the unit for weight.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Weight equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "Correct",
    questionText: "Correct this equation: momentum = velocity / mass.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Momentum is found by multiplying mass by velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Correct equation: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "multiply"],
    modelAnswer: "The correct equation is momentum = mass × velocity.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Dividing velocity by mass.", "Avoid: Using acceleration instead of velocity."],
    examinerTip:
      "AQA GCSE Physics 8463: Momentum equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange work done = force × distance to make force the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Divide both sides by distance",
        keywords: [["distance"]],
      },
      {
        point: "Answer: force = work done / distance",
        keywords: [["work done", "force", "distance"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "rearrange"],
    modelAnswer: "force = work done / distance.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing force = work done × distance.",
      "Avoid: Dividing distance by work done.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Work done equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation for kinetic energy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "kinetic energy = 0.5 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "The speed must be squared",
        keywords: [["speed squared"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "0.5mv²"],
    modelAnswer: "kinetic energy = 0.5 × mass × speed².",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: ["Avoid: Forgetting to square speed.", "Avoid: Writing kinetic energy = mass × speed."],
    examinerTip:
      "AQA GCSE Physics 8463: Kinetic energy equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "State",
    questionText:
      "State the equation linking gravitational potential energy, mass, gravitational field strength and height.",
    marks: 1,
    markSchemePoints: [
      {
        point: "gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "gravitational field strength"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "mass",
      "gravitational field strength",
      "height",
    ],
    modelAnswer: "gravitational potential energy = mass × gravitational field strength × height.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Forgetting height.", "Avoid: Using speed instead of height."],
    examinerTip:
      "AQA GCSE Physics 8463: Gravitational potential energy equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Rearrange",
    questionText:
      "Rearrange power = energy transferred / time to make energy transferred the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Multiply both sides by time",
        keywords: [["time"]],
      },
      {
        point: "Answer: energy transferred = power × time",
        keywords: [["power", "energy transferred", "time"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "rearrange"],
    modelAnswer: "energy transferred = power × time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing energy = power / time.", "Avoid: Forgetting to multiply by time."],
    examinerTip:
      "AQA GCSE Physics 8463: Power equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Write",
    questionText: "Write the equation for efficiency as a percentage.",
    marks: 2,
    markSchemePoints: [
      {
        point: "efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output", "total input"]],
      },
      {
        point: "Accept equivalent equation using useful output power and total input power",
        keywords: [["useful output", "total input"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "total input", "percentage", "× 100"],
    modelAnswer: "efficiency = useful output energy / total input energy × 100.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy as useful output.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Efficiency equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange charge = current × time to make current the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Divide both sides by time",
        keywords: [["time"]],
      },
      {
        point: "Answer: current = charge / time",
        keywords: [["charge", "current", "time"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "rearrange"],
    modelAnswer: "current = charge / time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing current = charge × time.", "Avoid: Dividing time by charge."],
    examinerTip:
      "AQA GCSE Physics 8463: Charge equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking potential difference, current and resistance.",
    marks: 1,
    markSchemePoints: [
      {
        point: "potential difference = current × resistance",
        keywords: [["potential difference", "current", "resistance"]],
      },
    ],
    examinerKeywords: ["potential difference", "current", "resistance", "V = IR"],
    modelAnswer: "potential difference = current × resistance.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Writing voltage = current / resistance.",
      "Avoid: Confusing resistance with power.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Ohm's law. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Rearrange",
    questionText:
      "Rearrange electrical power = current × potential difference to make potential difference the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with power = current × potential difference",
        keywords: [["current", "potential difference"]],
      },
      {
        point: "Divide both sides by current",
        keywords: [["current"]],
      },
      {
        point: "Answer: potential difference = power / current",
        keywords: [["current", "potential difference"]],
      },
    ],
    examinerKeywords: ["electrical power", "current", "potential difference", "rearrange"],
    modelAnswer: "potential difference = power / current.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing potential difference = power × current.",
      "Avoid: Dividing current by power.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electrical power equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange density = mass / volume to make mass the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Multiply both sides by volume",
        keywords: [["volume"]],
      },
      {
        point: "Answer: mass = density × volume",
        keywords: [["density", "mass", "volume"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "rearrange"],
    modelAnswer: "mass = density × volume.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing mass = density / volume.", "Avoid: Forgetting to multiply by volume."],
    examinerTip:
      "AQA GCSE Physics 8463: Density equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking pressure, force and area.",
    marks: 1,
    markSchemePoints: [
      {
        point: "pressure = force / area",
        keywords: [["pressure", "force", "area"]],
      },
    ],
    examinerKeywords: ["pressure", "force", "area", "P = F/A"],
    modelAnswer: "pressure = force / area.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing pressure = force × area.", "Avoid: Using volume instead of area."],
    examinerTip:
      "AQA GCSE Physics 8463: Pressure equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "equation",
    questionType: "Rearrange",
    questionText:
      "Rearrange energy = mass × specific heat capacity × temperature change to make specific heat capacity the subject.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Start with energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "energy", "mass"]],
      },
      {
        point: "Divide both sides by mass × temperature change",
        keywords: [["mass", "temperature change"]],
      },
      {
        point: "Answer: specific heat capacity = energy / (mass × temperature change)",
        keywords: [["specific heat capacity", "energy", "mass"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "energy",
      "mass",
      "temperature change",
      "rearrange",
    ],
    modelAnswer: "specific heat capacity = energy / (mass × temperature change).",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Forgetting brackets around mass × temperature change.",
      "Avoid: Writing c = E × m × ΔT.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange wave speed = frequency × wavelength to make wavelength the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Divide both sides by frequency",
        keywords: [["frequency"]],
      },
      {
        point: "Answer: wavelength = wave speed / frequency",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "rearrange"],
    modelAnswer: "wavelength = wave speed / frequency.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing wavelength = wave speed × frequency.",
      "Avoid: Dividing frequency by wave speed.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Wave equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking frequency and period.",
    marks: 1,
    markSchemePoints: [
      {
        point: "frequency = 1 / period",
        keywords: [["frequency", "period"]],
      },
    ],
    examinerKeywords: ["frequency", "period", "reciprocal"],
    modelAnswer: "frequency = 1 / period.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing frequency = period.", "Avoid: Writing frequency = period / 1."],
    examinerTip:
      "AQA GCSE Physics 8463: Frequency and period. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 2",
    paperType: "equation",
    questionType: "Write",
    questionText:
      "Write the transformer equation linking primary voltage, secondary voltage, primary turns and secondary turns.",
    marks: 2,
    markSchemePoints: [
      {
        point: "secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary voltage", "secondary voltage", "primary turns"]],
      },
      {
        point: "Accept Vs / Vp = Ns / Np",
        keywords: [["accept"]],
      },
    ],
    examinerKeywords: [
      "transformer",
      "primary voltage",
      "secondary voltage",
      "primary turns",
      "secondary turns",
    ],
    modelAnswer: "secondary voltage / primary voltage = secondary turns / primary turns.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Mixing primary voltage with secondary turns in the same ratio.",
      "Avoid: Writing the voltage ratio upside down without matching the turns ratio.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Transformer equation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-formula-equation-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A count rate falls from 1200 counts per minute to 75 counts per minute. Determine the number of half-lives that have passed.",
    marks: 4,
    markSchemePoints: [
      {
        point: "1200 to 600 is one half-life",
        keywords: [["half-life"]],
      },
      {
        point: "600 to 300 is two half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "300 to 150 is three half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "150 to 75 is four half-lives",
        keywords: [["half-life"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer:
      "1200 halves to 600, then 300, then 150, then 75. Therefore 4 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Dividing 1200 by 75 and saying 16 half-lives.",
      "Avoid: Subtracting a fixed amount each time.",
      "Avoid: Stopping after three halvings.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Half-life. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-001",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain the motion of a skydiver from the moment they jump from a plane until they reach terminal velocity before opening the parachute.",
    marks: 6,
    markSchemePoints: [
      {
        point: "At the start, weight is greater than air resistance",
        keywords: [["weight", "air resistance"]],
      },
      {
        point: "There is a resultant downward force, so the skydiver accelerates",
        keywords: [["skydiver", "resultant force"]],
      },
      {
        point: "As speed increases, air resistance increases",
        keywords: [["air resistance"]],
      },
      {
        point: "The resultant force decreases, so acceleration decreases",
        keywords: [["resultant force", "acceleration"]],
      },
      {
        point: "Eventually air resistance equals weight",
        keywords: [["weight", "air resistance"]],
      },
      {
        point: "The resultant force is zero and the skydiver moves at constant terminal velocity",
        keywords: [["skydiver", "resultant force", "terminal velocity"]],
      },
    ],
    examinerKeywords: [
      "skydiver",
      "weight",
      "air resistance",
      "resultant force",
      "acceleration",
      "terminal velocity",
    ],
    modelAnswer:
      "At first, the skydiver's weight is greater than air resistance, so there is a resultant downward force and the skydiver accelerates. As speed increases, air resistance increases, reducing the resultant force and acceleration. Eventually air resistance equals weight, so the resultant force is zero and the skydiver falls at constant terminal velocity.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying terminal velocity means the skydiver stops.",
      "Avoid: Not mentioning air resistance increases with speed.",
      "Avoid: Saying acceleration stays constant until impact.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Terminal velocity. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-002",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how conduction, convection and radiation transfer thermal energy.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Conduction transfers energy through particle vibrations and collisions",
        keywords: [["conduction"]],
      },
      {
        point: "In metals, delocalised electrons also transfer energy by moving and colliding",
        keywords: [["delocalised electrons"]],
      },
      {
        point: "Convection occurs in fluids when warmer, less dense fluid rises",
        keywords: [["convection"]],
      },
      {
        point: "Cooler, denser fluid sinks to replace it, forming a convection current",
        keywords: [["convection"]],
      },
      {
        point: "Radiation transfers energy by infrared electromagnetic waves",
        keywords: [["radiation", "infrared"]],
      },
      {
        point: "Radiation does not require a medium and can travel through a vacuum",
        keywords: [["radiation"]],
      },
    ],
    examinerKeywords: [
      "conduction",
      "convection",
      "radiation",
      "particles",
      "delocalised electrons",
      "infrared",
    ],
    modelAnswer:
      "Conduction transfers thermal energy through particle vibrations and collisions, and in metals by delocalised electrons. Convection occurs in fluids when warmer, less dense fluid rises and cooler, denser fluid sinks, forming a convection current. Radiation transfers energy by infrared electromagnetic waves and does not need a medium.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying convection happens in solids.",
      "Avoid: Saying radiation needs particles.",
      "Avoid: Not distinguishing the three methods.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Thermal transfer. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-003",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare current and potential difference in series and parallel circuits.",
    marks: 6,
    markSchemePoints: [
      {
        point: "In a series circuit, current is the same at every point",
        keywords: [["series circuit", "current"]],
      },
      {
        point: "In a series circuit, potential difference is shared between components",
        keywords: [["series circuit", "potential difference", "shared"]],
      },
      {
        point: "In a parallel circuit, potential difference is the same across each branch",
        keywords: [["parallel circuit", "potential difference"]],
      },
      {
        point: "In a parallel circuit, current splits between branches",
        keywords: [["parallel circuit", "current", "branches"]],
      },
      {
        point: "The total current in a parallel circuit is the sum of branch currents",
        keywords: [["parallel circuit", "current"]],
      },
      {
        point: "Parallel components can operate independently if one branch is broken",
        keywords: [["parallel circuit"]],
      },
    ],
    examinerKeywords: [
      "series circuit",
      "parallel circuit",
      "current",
      "potential difference",
      "branches",
      "shared",
    ],
    modelAnswer:
      "In a series circuit, current is the same everywhere and potential difference is shared between components. In a parallel circuit, each branch has the full supply potential difference, while current splits between branches. The total current is the sum of branch currents, and parallel components can operate independently.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying current is shared in series.",
      "Avoid: Saying voltage is always shared in parallel.",
      "Avoid: Not comparing both circuit types.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Series and parallel circuits. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-004",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how an alternating potential difference is generated in a simple a.c. generator.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A coil rotates in a magnetic field",
        keywords: [["a.c. generator", "magnetic field"]],
      },
      {
        point: "The magnetic field through the coil changes as it rotates",
        keywords: [["a.c. generator", "magnetic field"]],
      },
      {
        point: "A potential difference is induced across the coil",
        keywords: [["a.c. generator", "induced potential difference"]],
      },
      {
        point: "The direction of the induced potential difference reverses every half-turn",
        keywords: [["a.c. generator", "induced potential difference"]],
      },
      {
        point: "Slip rings and brushes connect the rotating coil to the external circuit",
        keywords: [["a.c. generator", "rotating coil", "slip rings"]],
      },
      {
        point:
          "The output is alternating because the direction of the potential difference repeatedly changes",
        keywords: [["a.c. generator"]],
      },
    ],
    examinerKeywords: [
      "a.c. generator",
      "rotating coil",
      "magnetic field",
      "induced potential difference",
      "slip rings",
      "brushes",
    ],
    modelAnswer:
      "In an a.c. generator, a coil rotates in a magnetic field. As the coil rotates, the magnetic field through it changes and a potential difference is induced. The direction of the induced potential difference reverses every half-turn. Slip rings and brushes connect the rotating coil to the external circuit, producing an alternating output.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Confusing slip rings with a split-ring commutator.",
      "Avoid: Saying the generator stores charge.",
      "Avoid: Forgetting that the output reverses direction.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: AC generator. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-005",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Compare",
    questionText:
      "Compare alpha, beta and gamma radiation in terms of nature, charge, ionising ability and penetrating power.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Alpha radiation is a helium nucleus with charge +2",
        keywords: [["alpha", "charge"]],
      },
      {
        point: "Alpha is strongly ionising but weakly penetrating and is stopped by paper or skin",
        keywords: [["alpha", "ionising", "penetrating"]],
      },
      {
        point: "Beta radiation is an electron with charge -1",
        keywords: [["beta", "charge"]],
      },
      {
        point:
          "Beta has medium ionising ability and medium penetrating power, stopped by thin aluminium",
        keywords: [["beta", "ionising", "penetrating"]],
      },
      {
        point: "Gamma radiation is an electromagnetic wave with no charge",
        keywords: [["gamma", "charge"]],
      },
      {
        point:
          "Gamma is weakly ionising but highly penetrating and is reduced by thick lead or concrete",
        keywords: [["gamma", "ionising", "penetrating"]],
      },
    ],
    examinerKeywords: ["alpha", "beta", "gamma", "charge", "ionising", "penetrating"],
    modelAnswer:
      "Alpha radiation is a helium nucleus with +2 charge. It is strongly ionising but weakly penetrating and is stopped by paper or skin. Beta radiation is an electron with -1 charge and has medium ionising and penetrating power. Gamma radiation is an electromagnetic wave with no charge. It is weakly ionising but highly penetrating.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gamma has high mass.",
      "Avoid: Saying alpha is the most penetrating.",
      "Avoid: Mixing up ionising ability and penetrating power.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Alpha beta gamma. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-006",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the length of a resistance wire affects its resistance.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Use a power supply, ammeter, voltmeter, switch, crocodile clips, resistance wire and metre rule",
        keywords: [["resistance wire", "ammeter", "voltmeter"]],
      },
      {
        point: "Independent variable is wire length and dependent variable is resistance",
        keywords: [["resistance wire", "length", "r = v/i"]],
      },
      {
        point:
          "Connect the ammeter in series and voltmeter in parallel across the selected wire length",
        keywords: [["length", "ammeter", "voltmeter"]],
      },
      {
        point: "Measure potential difference and current for different lengths",
        keywords: [["length", "r = v/i"]],
      },
      {
        point: "Calculate resistance using R = V / I",
        keywords: [["resistance wire", "r = v/i"]],
      },
      {
        point:
          "Keep wire material, diameter and temperature constant; repeat readings and use low current to reduce heating",
        keywords: [["r = v/i"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "length",
      "ammeter",
      "voltmeter",
      "R = V/I",
      "control variables",
    ],
    modelAnswer:
      "Set up a circuit with a power supply, switch, ammeter in series and voltmeter across the selected length of resistance wire. Use crocodile clips and a metre rule to choose different lengths. Record V and I and calculate R = V / I. Keep wire material and diameter constant, use low current to reduce heating, repeat readings and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing wire thickness as well as length.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Not calculating resistance.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Resistance wire practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-007",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain refraction and total internal reflection in terms of wave speed and critical angle.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Refraction occurs when light changes speed at a boundary between materials",
        keywords: [["refraction", "speed changes"]],
      },
      {
        point:
          "If light enters a more optically dense medium, it slows and bends towards the normal",
        keywords: [["normal", "optically dense"]],
      },
      {
        point:
          "If light enters a less optically dense medium, it speeds up and bends away from the normal",
        keywords: [["speed changes", "normal", "optically dense"]],
      },
      {
        point:
          "Total internal reflection occurs from a more optically dense to a less optically dense medium",
        keywords: [["optically dense", "total internal reflection"]],
      },
      {
        point: "The angle of incidence must be greater than the critical angle",
        keywords: [["critical angle"]],
      },
      {
        point: "All the light is reflected back into the original medium",
        keywords: [["all", "light", "reflected"]],
      },
    ],
    examinerKeywords: [
      "refraction",
      "speed changes",
      "normal",
      "optically dense",
      "total internal reflection",
      "critical angle",
    ],
    modelAnswer:
      "Refraction occurs when light changes speed at a boundary. When light enters a more optically dense medium, it slows and bends towards the normal. When it enters a less dense medium, it speeds up and bends away from the normal. Total internal reflection occurs from a more dense to less dense medium when the angle of incidence is greater than the critical angle.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying refraction happens without a speed change.",
      "Avoid: Saying total internal reflection occurs from air into glass.",
      "Avoid: Saying the angle must be less than the critical angle.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Refraction and total internal reflection. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-008",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how a nuclear fission reactor produces useful electrical energy.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A neutron is absorbed by a large unstable nucleus, causing fission",
        keywords: [["neutron"]],
      },
      {
        point: "The nucleus splits and releases energy and more neutrons",
        keywords: [["neutron"]],
      },
      {
        point: "The chain reaction is controlled by control rods absorbing neutrons",
        keywords: [["neutron", "chain reaction", "control rods"]],
      },
      {
        point: "A moderator slows neutrons so they are more likely to cause fission",
        keywords: [["neutron", "moderator"]],
      },
      {
        point: "Energy released heats a coolant or water to produce steam",
        keywords: [["energy", "released", "heats"]],
      },
      {
        point: "Steam turns a turbine connected to a generator, producing electrical energy",
        keywords: [["generator"]],
      },
    ],
    examinerKeywords: [
      "nuclear fission",
      "neutron",
      "chain reaction",
      "control rods",
      "moderator",
      "generator",
    ],
    modelAnswer:
      "In a reactor, a neutron is absorbed by a large unstable nucleus, causing fission. The nucleus splits, releasing energy and more neutrons. Control rods absorb neutrons to control the chain reaction, while a moderator slows neutrons so they can cause more fission. The released energy heats water to make steam, which turns a turbine connected to a generator.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying fusion occurs in nuclear power stations.",
      "Avoid: Confusing control rods and moderator.",
      "Avoid: Forgetting the turbine and generator.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Nuclear reactor. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-009",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to determine the specific heat capacity of a metal block using an electrical heater.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Measure the mass of the metal block",
        keywords: [["metal block", "e = vit"]],
      },
      {
        point:
          "Place an electrical heater and thermometer or temperature probe into holes in the block",
        keywords: [["heater", "temperature rise", "e = vit"]],
      },
      {
        point: "Measure the initial temperature of the block",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point:
          "Measure current, potential difference and heating time to calculate energy transferred using E = VIt or E = Pt",
        keywords: [["energy transferred", "e = vit"]],
      },
      {
        point: "Measure the temperature rise of the block",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point:
          "Calculate specific heat capacity using c = E / (mΔT), insulating the block and repeating to improve reliability",
        keywords: [["specific heat capacity", "e = vit"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "metal block",
      "heater",
      "temperature rise",
      "energy transferred",
      "E = VIt",
    ],
    modelAnswer:
      "Measure the mass of the metal block. Insert a heater and thermometer into the block and record the initial temperature. Switch on the heater and measure current, potential difference and time so energy can be calculated using E = VIt. Record the temperature rise. Calculate c = E / (mΔT). Insulate the block and repeat readings to improve reliability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting to measure mass.",
      "Avoid: Ignoring energy loss to surroundings.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Specific heat capacity practical. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-010",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain the life cycle of a star with a mass similar to the Sun from nebula to final stage.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A nebula of gas and dust collapses under gravity",
        keywords: [["nebula"]],
      },
      {
        point: "A protostar forms as temperature and pressure increase",
        keywords: [["protostar"]],
      },
      {
        point: "Hydrogen fusion begins and the star becomes a main sequence star",
        keywords: [["main sequence", "hydrogen fusion"]],
      },
      {
        point: "After hydrogen fuel decreases, the star expands into a red giant",
        keywords: [["hydrogen fusion", "red giant"]],
      },
      {
        point: "The outer layers are ejected to form a planetary nebula",
        keywords: [["nebula"]],
      },
      {
        point: "The remaining core becomes a white dwarf and cools",
        keywords: [["main sequence", "white dwarf"]],
      },
    ],
    examinerKeywords: [
      "nebula",
      "protostar",
      "main sequence",
      "hydrogen fusion",
      "red giant",
      "white dwarf",
    ],
    modelAnswer:
      "A Sun-like star forms when gas and dust in a nebula collapse under gravity. A protostar forms as temperature and pressure increase. When hydrogen fusion begins, it becomes a main sequence star. After hydrogen fuel decreases, it expands into a red giant. The outer layers are ejected as a planetary nebula, leaving a white dwarf that cools.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the Sun becomes a supernova.",
      "Avoid: Forgetting the protostar stage.",
      "Avoid: Confusing planetary nebula with planet formation.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Sun-like star life cycle. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-011",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to process and present data from an experiment investigating how current varies with potential difference for a fixed resistor.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Record potential difference and current in a table with units in headings",
        keywords: [["current", "potential difference", "table"]],
      },
      {
        point: "Repeat readings where possible and calculate mean current values",
        keywords: [["current"]],
      },
      {
        point: "Plot current on the y-axis against potential difference on the x-axis",
        keywords: [["current", "potential difference"]],
      },
      {
        point: "Use a suitable scale that uses most of the graph paper",
        keywords: [["table", "graph"]],
      },
      {
        point: "Draw a line of best fit",
        keywords: [["line of best fit"]],
      },
      {
        point: "Use the graph shape or gradient to determine the relationship or resistance",
        keywords: [["graph"]],
      },
    ],
    examinerKeywords: [
      "current",
      "potential difference",
      "table",
      "units",
      "graph",
      "line of best fit",
    ],
    modelAnswer:
      "Record potential difference and current in a table with units in headings. Repeat readings and calculate mean currents. Plot current on the y-axis against potential difference on the x-axis using a suitable scale. Draw a line of best fit and use the graph shape or gradient to determine the relationship or resistance.",
    difficulty: "medium",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Forgetting units in table headings.",
      "Avoid: Plotting axes the wrong way round without consistency.",
      "Avoid: Joining points point-to-point instead of using a best-fit line.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Data processing. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-012",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a high-power electrical heater transfers more thermal energy each second than a low-power heater.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Power is the rate of energy transfer",
        keywords: [["power", "rate of energy transfer"]],
      },
      {
        point: "A higher power means more energy is transferred per second",
        keywords: [["power", "per second"]],
      },
      {
        point: "Electrical energy is transferred to thermal energy in the heater",
        keywords: [["electrical energy", "thermal energy"]],
      },
      {
        point: "Therefore the high-power heater produces thermal energy at a greater rate",
        keywords: [["power", "rate of energy transfer", "thermal energy"]],
      },
    ],
    examinerKeywords: [
      "power",
      "rate of energy transfer",
      "electrical energy",
      "thermal energy",
      "per second",
    ],
    modelAnswer:
      "Power is the rate of energy transfer. A high-power heater transfers more electrical energy each second. This energy is transferred to thermal energy, so the high-power heater heats at a greater rate.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying power is the total energy stored.",
      "Avoid: Not mentioning energy per second.",
      "Avoid: Confusing power with voltage only.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electrical heating. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-013",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe reflection, refraction and diffraction of waves.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Reflection is when a wave bounces off a boundary",
        keywords: [["reflection", "boundary"]],
      },
      {
        point: "For reflection, the angle of incidence equals the angle of reflection",
        keywords: [["reflection"]],
      },
      {
        point: "Refraction is a change of direction when a wave changes speed at a boundary",
        keywords: [["refraction", "boundary", "speed changes"]],
      },
      {
        point: "Refraction occurs when waves enter a different medium",
        keywords: [["refraction"]],
      },
      {
        point: "Diffraction is the spreading of waves through a gap or around an obstacle",
        keywords: [["diffraction"]],
      },
      {
        point: "Diffraction is greatest when the gap is similar in size to the wavelength",
        keywords: [["diffraction", "wavelength"]],
      },
    ],
    examinerKeywords: [
      "reflection",
      "refraction",
      "diffraction",
      "boundary",
      "speed changes",
      "wavelength",
    ],
    modelAnswer:
      "Reflection is when a wave bounces off a boundary, with angle of incidence equal to angle of reflection. Refraction is a change in direction when a wave changes speed as it enters a different medium. Diffraction is the spreading of waves through a gap or around an obstacle, greatest when the gap is similar to the wavelength.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Confusing refraction with reflection.",
      "Avoid: Saying diffraction only happens for light.",
      "Avoid: Not mentioning speed change in refraction.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Wave behaviour. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-014",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a radioactive tracer used in the body should have a short half-life and emit gamma radiation.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Gamma radiation is penetrating enough to escape the body",
        keywords: [["gamma radiation", "penetrating"]],
      },
      {
        point: "Escaping gamma radiation can be detected outside the body",
        keywords: [["gamma radiation", "detected"]],
      },
      {
        point: "A short half-life reduces the time the patient is exposed to radiation",
        keywords: [["short half-life"]],
      },
      {
        point: "This reduces the absorbed dose and risk of cell damage",
        keywords: [["dose"]],
      },
      {
        point:
          "The half-life must not be too short because the tracer must remain active long enough to be detected",
        keywords: [["detected", "short half-life"]],
      },
    ],
    examinerKeywords: [
      "radioactive tracer",
      "gamma radiation",
      "penetrating",
      "detected",
      "short half-life",
      "dose",
    ],
    modelAnswer:
      "A tracer should emit gamma radiation because gamma can escape the body and be detected outside. It should have a short half-life so the patient is exposed for less time, reducing dose and risk of cell damage. The half-life must not be so short that the tracer decays before it can be detected.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Choosing alpha radiation for an internal tracer.",
      "Avoid: Saying the half-life should be extremely long.",
      "Avoid: Forgetting the tracer must still be detectable.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Radioactive tracers. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-015",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "A ball rolls down a ramp. Explain the energy transfers and why the final kinetic energy may be less than the initial gravitational potential energy.",
    marks: 5,
    markSchemePoints: [
      {
        point: "At the top, the ball has gravitational potential energy",
        keywords: [["gravitational potential energy"]],
      },
      {
        point: "As it rolls down, gravitational potential energy is transferred to kinetic energy",
        keywords: [["gravitational potential energy", "kinetic energy"]],
      },
      {
        point: "Some energy is dissipated as thermal energy due to friction",
        keywords: [["friction", "thermal energy", "dissipated"]],
      },
      {
        point: "Some energy may be transferred as sound",
        keywords: [["sound"]],
      },
      {
        point:
          "Therefore the final kinetic energy is less than the initial gravitational potential energy",
        keywords: [["gravitational potential energy", "kinetic energy"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "kinetic energy",
      "friction",
      "thermal energy",
      "sound",
      "dissipated",
    ],
    modelAnswer:
      "At the top of the ramp, the ball has gravitational potential energy. As it rolls down, this is transferred to kinetic energy. Some energy is dissipated as thermal energy due to friction and some may be transferred as sound. Therefore the final kinetic energy is less than the initial gravitational potential energy.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Ignoring friction and sound.",
      "Avoid: Not naming energy stores.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Conservation of energy. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-016",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how the principle of moments can be used to balance a beam.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A moment is the turning effect of a force",
        keywords: [["moment", "force"]],
      },
      {
        point: "Moment = force × perpendicular distance from the pivot",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Clockwise moments act in one rotational direction",
        keywords: [["moment", "clockwise"]],
      },
      {
        point: "Anticlockwise moments act in the opposite rotational direction",
        keywords: [["moment", "clockwise", "anticlockwise"]],
      },
      {
        point: "For the beam to balance, total clockwise moment equals total anticlockwise moment",
        keywords: [["moment", "clockwise", "anticlockwise"]],
      },
    ],
    examinerKeywords: [
      "principle of moments",
      "moment",
      "force",
      "perpendicular distance",
      "clockwise",
      "anticlockwise",
    ],
    modelAnswer:
      "A moment is the turning effect of a force and equals force multiplied by perpendicular distance from the pivot. A beam balances when the total clockwise moment equals the total anticlockwise moment. If one side has a larger moment, the beam turns in that direction.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Ignoring distance from the pivot.",
      "Avoid: Saying forces must always be equal for balance.",
      "Avoid: Forgetting clockwise and anticlockwise directions.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Moments. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-017",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how an electromagnet works and how its strength can be increased.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A current in a coil produces a magnetic field",
        keywords: [["current", "coil", "magnetic field"]],
      },
      {
        point: "A soft iron core becomes magnetised by the field",
        keywords: [["soft iron core"]],
      },
      {
        point: "The electromagnet can be switched on and off by controlling the current",
        keywords: [["electromagnet", "current"]],
      },
      {
        point: "Increasing the current increases the magnetic field strength",
        keywords: [["current", "magnetic field"]],
      },
      {
        point:
          "Increasing the number of turns on the coil or using a soft iron core increases strength",
        keywords: [["coil", "soft iron core"]],
      },
    ],
    examinerKeywords: [
      "electromagnet",
      "current",
      "coil",
      "magnetic field",
      "soft iron core",
      "more turns",
    ],
    modelAnswer:
      "An electromagnet works because a current in a coil produces a magnetic field. A soft iron core becomes magnetised and strengthens the field. The magnet can be switched on and off by switching the current on and off. Its strength can be increased by increasing current, adding more turns to the coil or using a soft iron core.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying an electromagnet cannot be switched off.",
      "Avoid: Using a wooden core.",
      "Avoid: Saying decreasing current makes it stronger.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Electromagnets. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-018",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Evaluate",
    questionText:
      "Evaluate a method for measuring the density of an irregular object using water displacement.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Measure mass using a balance",
        keywords: [["balance"]],
      },
      {
        point: "Measure volume using a measuring cylinder or displacement can",
        keywords: [["measure", "volume", "measuring"]],
      },
      {
        point: "Read the bottom of the meniscus at eye level to reduce parallax error",
        keywords: [["meniscus"]],
      },
      {
        point: "Ensure the object is fully submerged",
        keywords: [["ensure", "object", "fully"]],
      },
      {
        point: "Remove air bubbles from the object",
        keywords: [["remove", "air", "bubbles"]],
      },
      {
        point: "Use a narrow measuring cylinder or repeat readings to reduce uncertainty",
        keywords: [["uncertainty"]],
      },
    ],
    examinerKeywords: [
      "density",
      "irregular object",
      "balance",
      "water displacement",
      "meniscus",
      "uncertainty",
    ],
    modelAnswer:
      "Measure the object's mass using a balance. Its volume can be found by water displacement in a measuring cylinder. To improve the method, read the bottom of the meniscus at eye level, ensure the object is fully submerged and remove air bubbles. A narrow measuring cylinder with small divisions or repeated readings reduces uncertainty. Density is mass divided by volume.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using length × width × height for an irregular object.",
      "Avoid: Not fully submerging the object.",
      "Avoid: Ignoring air bubbles or meniscus reading.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Density evaluation. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-019",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Use the particle model to explain melting, boiling and evaporation.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "During melting, particles gain energy and overcome some forces holding them in fixed positions",
        keywords: [["particle model", "melting"]],
      },
      {
        point:
          "Temperature remains constant during a change of state because energy is used to overcome forces",
        keywords: [["change of state"]],
      },
      {
        point: "During boiling, particles throughout the liquid gain enough energy to become gas",
        keywords: [["particle model", "boiling"]],
      },
      {
        point: "Boiling occurs at a fixed temperature for a pure substance",
        keywords: [["boiling"]],
      },
      {
        point: "Evaporation occurs only at the surface of a liquid",
        keywords: [["evaporation"]],
      },
      {
        point:
          "In evaporation, the highest-energy particles escape, reducing the average kinetic energy of the remaining liquid and causing cooling",
        keywords: [["particle model", "evaporation", "kinetic energy"]],
      },
    ],
    examinerKeywords: [
      "particle model",
      "melting",
      "boiling",
      "evaporation",
      "change of state",
      "kinetic energy",
    ],
    modelAnswer:
      "In melting, particles gain energy and overcome some forces holding them in fixed positions. During a change of state, temperature stays constant because energy is used to overcome forces. In boiling, particles throughout the liquid gain enough energy to become gas at a fixed temperature. Evaporation happens only at the surface, where the highest-energy particles escape, lowering the average kinetic energy of the remaining liquid and causing cooling.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying temperature always rises during melting.",
      "Avoid: Saying evaporation happens throughout the liquid.",
      "Avoid: Saying particles themselves expand.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Particle model. Use precise markscheme language, show working for calculations and include correct units.",
  },
  {
    id: "aqa-gcse-physics-extended-response-020",
    qualification: "GCSE",
    examBoard: "aqa-gcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how observations of distant galaxies support the idea that the Universe is expanding.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Light from distant galaxies shows redshift",
        keywords: [["distant galaxies", "redshift"]],
      },
      {
        point: "Redshift means the wavelength of the light is increased",
        keywords: [["redshift", "wavelength"]],
      },
      {
        point: "This indicates the galaxies are moving away from Earth",
        keywords: [["moving away"]],
      },
      {
        point: "More distant galaxies generally show greater redshift",
        keywords: [["distant galaxies", "redshift", "greater redshift"]],
      },
      {
        point: "This supports the idea that space is expanding and galaxies are moving apart",
        keywords: [["moving away", "expanding universe"]],
      },
    ],
    examinerKeywords: [
      "distant galaxies",
      "redshift",
      "wavelength",
      "moving away",
      "greater redshift",
      "expanding Universe",
    ],
    modelAnswer:
      "Light from distant galaxies is redshifted, meaning its wavelength has increased. This shows the galaxies are moving away from Earth. More distant galaxies generally show greater redshift, so they are moving away faster. These observations support the idea that the Universe is expanding and galaxies are moving apart.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying redshift means galaxies are moving towards Earth.",
      "Avoid: Not mentioning wavelength increase.",
      "Avoid: Saying Earth is at the centre of the Universe.",
    ],
    examinerTip:
      "AQA GCSE Physics 8463: Expanding Universe. Use precise markscheme language, show working for calculations and include correct units.",
  },
];
