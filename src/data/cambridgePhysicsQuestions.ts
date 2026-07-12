import type { Question } from "./questionBank";

export const CAMBRIDGE_PHYSICS_QUESTIONS: Question[] = [
  {
    id: "cambridge-igcse-physics-motion-forces-energy-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A runner travels 240 m in 30 s. Calculate the average speed of the runner.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 240 / 30",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 8.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 240 / 30 = 8.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying distance by time instead of dividing.",
      "Avoid: Leaving the answer without the unit m/s.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Speed, distance and time. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is shown by the gradient of a distance-time graph.",
    marks: 1,
    markSchemePoints: [
      {
        point: "The gradient of a distance-time graph represents speed",
        keywords: [["gradient", "distance-time graph", "speed"]],
      },
    ],
    examinerKeywords: ["gradient", "distance-time graph", "speed"],
    modelAnswer: "The gradient of a distance-time graph represents speed.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying the gradient represents acceleration.",
      "Avoid: Saying the area under the graph represents speed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Distance-time graphs. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A car increases its speed from 5.0 m/s to 25 m/s in 10 s. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
      {
        point: "Substitution: acceleration = (25 - 5.0) / 10",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 2.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (25 - 5.0) / 10 = 20 / 10 = 2.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using the final speed only instead of the change in speed.",
      "Avoid: Writing the unit as m/s instead of m/s².",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Acceleration. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A speed-time graph shows a car travelling at 12 m/s for 8.0 s. Calculate the distance travelled.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Distance travelled is the area under a speed-time graph",
        keywords: [["speed-time graph", "area under graph", "distance"]],
      },
      {
        point: "Area = speed × time = 12 × 8.0",
        keywords: [["speed-time graph", "area under graph", "m"]],
      },
      {
        point: "Answer: 96 m",
        keywords: [["m"]],
      },
    ],
    examinerKeywords: ["speed-time graph", "area under graph", "distance", "m"],
    modelAnswer: "Distance is the area under the speed-time graph. Distance = 12 × 8.0 = 96 m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Finding the gradient instead of the area.",
      "Avoid: Giving the answer in m/s instead of m.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Speed-time graphs. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the difference between mass and weight.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass is the amount of matter in an object",
        keywords: [["mass", "matter"]],
      },
      {
        point: "Mass is measured in kilograms",
        keywords: [["mass", "kilograms"]],
      },
      {
        point: "Weight is the gravitational force acting on an object",
        keywords: [["weight", "gravitational force"]],
      },
      {
        point: "Weight is measured in newtons and depends on gravitational field strength",
        keywords: [["weight", "gravitational force", "newtons"]],
      },
    ],
    examinerKeywords: ["mass", "matter", "kilograms", "weight", "gravitational force", "newtons"],
    modelAnswer:
      "Mass is the amount of matter in an object and is measured in kg. Weight is the gravitational force on an object and is measured in N. Weight depends on gravitational field strength, but mass does not.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Saying mass and weight are the same.", "Avoid: Giving weight in kilograms."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Mass and weight. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An object has a mass of 4.5 kg. The gravitational field strength is 10 N/kg. Calculate the weight of the object.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: weight = 4.5 × 10",
        keywords: [["weight", "n"]],
      },
      {
        point: "Answer: 45 N",
        keywords: [["n"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "N"],
    modelAnswer: "weight = mass × gravitational field strength = 4.5 × 10 = 45 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength instead of multiplying.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Weight calculation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A box has a force of 50 N acting to the right and a force of 18 N acting to the left. Determine the resultant force.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Forces act in opposite directions, so subtract the smaller force from the larger force",
        keywords: [["opposite directions", "subtract"]],
      },
      {
        point: "Resultant force = 50 - 18 = 32 N to the right",
        keywords: [["resultant force", "right"]],
      },
    ],
    examinerKeywords: ["resultant force", "opposite directions", "subtract", "right"],
    modelAnswer: "The forces oppose each other, so resultant force = 50 - 18 = 32 N to the right.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding the forces to get 68 N.",
      "Avoid: Giving no direction with the resultant force.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resultant force. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resultant force of 36 N acts on an object of mass 6.0 kg. Calculate the acceleration.",
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
        point: "Substitution: acceleration = 36 / 6.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 6.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["resultant force", "mass", "acceleration", "m/s²"],
    modelAnswer: "F = ma, so a = F / m = 36 / 6.0 = 6.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying force by mass.",
      "Avoid: Forgetting that the force must be the resultant force.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Newton's second law. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["resultant force", "acceleration"]],
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
      "acceleration",
      "balanced forces",
    ],
    modelAnswer:
      "At first the object's weight is greater than air resistance, so it accelerates. As it gets faster, air resistance increases. Eventually air resistance equals weight, so the resultant force is zero and the object falls at constant terminal velocity.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying terminal velocity means the object stops.",
      "Avoid: Forgetting to mention balanced forces.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Friction and drag. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 20 N acts at a perpendicular distance of 0.30 m from a pivot. Calculate the moment of the force.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance from pivot",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: moment = 20 × 0.30",
        keywords: [["moment", "n m"]],
      },
      {
        point: "Answer: 6.0 N m",
        keywords: [["n m"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 20 × 0.30 = 6.0 N m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using centimetres without converting to metres.",
      "Avoid: Forgetting the distance must be perpendicular to the force.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Moments. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
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
        point: "Draw the vertical line shown by the plumb line on the card",
        keywords: [["plumb line"]],
      },
      {
        point: "Repeat by suspending the card from another hole",
        keywords: [["suspend"]],
      },
      {
        point: "The centre of mass is where the lines cross",
        keywords: [["centre of mass"]],
      },
    ],
    examinerKeywords: ["centre of mass", "irregular card", "plumb line", "suspend", "intersection"],
    modelAnswer:
      "Suspend the card from a hole and hang a plumb line from the same point. Mark the vertical line on the card. Repeat from another hole. The centre of mass is where the lines intersect.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Placing the card flat on a table instead of suspending it freely.",
      "Avoid: Only drawing one line.",
      "Avoid: Not using the plumb line as the vertical reference.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Centre of mass. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a racing car is designed with a low centre of mass and a wide wheel base.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A low centre of mass makes the car more stable",
        keywords: [["centre of mass"]],
      },
      {
        point: "A wide wheel base increases the base area",
        keywords: [["wide base"]],
      },
      {
        point:
          "The line of action of the weight is less likely to fall outside the base, so the car is less likely to topple",
        keywords: [["line of action", "topple"]],
      },
    ],
    examinerKeywords: ["centre of mass", "wide base", "stability", "line of action", "topple"],
    modelAnswer:
      "A low centre of mass and wide wheel base make the car more stable. The line of action of its weight is less likely to pass outside the base, so it is less likely to topple.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a high centre of mass is more stable.",
      "Avoid: Not mentioning the line of action of weight.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Stability. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 75 N moves an object 4.0 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Substitution: work done = 75 × 4.0",
        keywords: [["work done"]],
      },
      {
        point: "Answer: 300 J",
        keywords: [["300"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "joules"],
    modelAnswer: "work done = force × distance = 75 × 4.0 = 300 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using power instead of work done.",
      "Avoid: Giving the unit as N instead of J.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Work done. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 2.0 kg trolley moves at 3.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 1/2 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: kinetic energy = 0.5 × 2.0 × 3.0²",
        keywords: [["kinetic energy"]],
      },
      {
        point: "Calculation: kinetic energy = 0.5 × 2.0 × 9.0",
        keywords: [["kinetic energy"]],
      },
      {
        point: "Answer: 9.0 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "J"],
    modelAnswer: "KE = 1/2mv² = 0.5 × 2.0 × 3.0² = 9.0 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square the speed.",
      "Avoid: Using mass × speed instead of kinetic energy.",
      "Avoid: Giving the unit as W.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Kinetic energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 12 kg box is lifted through a height of 1.5 m. The gravitational field strength is 10 N/kg. Calculate the increase in gravitational potential energy.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Formula: gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "height"]],
      },
      {
        point: "Substitution: GPE = 12 × 10 × 1.5",
        keywords: [["gpe"]],
      },
      {
        point: "Answer: 180 J",
        keywords: [["j"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "mass",
      "height",
      "gravitational field strength",
      "J",
    ],
    modelAnswer: "GPE = mgh = 12 × 10 × 1.5 = 180 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting gravitational field strength.",
      "Avoid: Using weight only without multiplying by height.",
      "Avoid: Giving the unit as N.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gravitational potential energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
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
        point:
          "Energy can only be transferred between stores or transformed from one form to another",
        keywords: [["energy", "transferred", "transformed"]],
      },
    ],
    examinerKeywords: [
      "energy",
      "cannot be created",
      "cannot be destroyed",
      "transferred",
      "transformed",
    ],
    modelAnswer:
      "Energy cannot be created or destroyed; it can only be transferred between stores or changed from one form to another.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy is used up.",
      "Avoid: Saying energy disappears when it is wasted.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Energy conservation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A motor transfers 6000 J of energy in 20 s. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 6000 / 20",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 300 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "W"],
    modelAnswer: "power = energy transferred / time = 6000 / 20 = 300 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying energy by time.",
      "Avoid: Giving the answer in joules instead of watts.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Power. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A machine has an input energy of 500 J and a useful output energy of 125 J. Calculate its efficiency.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output", "input energy"]],
      },
      {
        point: "Substitution: efficiency = 125 / 500 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 25%",
        keywords: [["mark point"]],
      },
      {
        point: "Percentage sign must be included",
        keywords: [["percentage"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "input energy", "percentage"],
    modelAnswer: "efficiency = useful output / input × 100 = 125 / 500 × 100 = 25%.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using wasted energy instead of useful output.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving off the percentage sign.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Efficiency. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A force of 180 N acts normally on an area of 0.060 m². Calculate the pressure.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: pressure = force / area",
        keywords: [["pressure", "force", "area"]],
      },
      {
        point: "Substitution: pressure = 180 / 0.060",
        keywords: [["pressure"]],
      },
      {
        point: "Answer: 3000 Pa",
        keywords: [["pa"]],
      },
    ],
    examinerKeywords: ["pressure", "force", "area", "Pa"],
    modelAnswer: "pressure = force / area = 180 / 0.060 = 3000 Pa.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by area.", "Avoid: Giving the answer in N instead of Pa."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pressure. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-motion-forces-energy-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "motion-forces-energy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A trolley of mass 0.80 kg moves at 2.5 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.80 × 2.5",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 2.0 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.80 × 2.5 = 2.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using force × distance.", "Avoid: Writing the unit as N instead of kg m/s."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Momentum. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
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
        point: "Particles are arranged in a fixed or regular pattern",
        keywords: [["fixed positions", "regular arrangement"]],
      },
      {
        point: "Particles vibrate about fixed positions",
        keywords: [["fixed positions", "vibrate"]],
      },
    ],
    examinerKeywords: [
      "solid",
      "closely packed",
      "fixed positions",
      "vibrate",
      "regular arrangement",
    ],
    modelAnswer:
      "In a solid, particles are closely packed in a fixed arrangement and vibrate about fixed positions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying particles in a solid do not move at all.",
      "Avoid: Saying solid particles move freely past each other.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Particle model. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare the particles in a liquid with the particles in a gas.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Liquid particles are close together, while gas particles are far apart",
        keywords: [["liquid", "gas", "particles"]],
      },
      {
        point: "Liquid particles can move past each other",
        keywords: [["liquid", "particles"]],
      },
      {
        point: "Gas particles move randomly and rapidly in all directions",
        keywords: [["gas", "particles", "random motion"]],
      },
      {
        point: "Forces between particles are weaker in gases than in liquids",
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
      "Liquid particles are close together and can move past each other. Gas particles are far apart and move randomly and rapidly in all directions. The forces between gas particles are weaker.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying liquid particles are fixed in place.",
      "Avoid: Saying gas particles have no mass.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Particle model. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Density. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Density calculation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 5 / Paper 6",
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
        keywords: [["measuring cylinder", "displacement", "volume"]],
      },
      {
        point: "Record the initial and final water levels",
        keywords: [["record", "initial", "final"]],
      },
      {
        point: "Volume of stone = final reading - initial reading",
        keywords: [["volume"]],
      },
      {
        point: "Calculate density using density = mass / volume",
        keywords: [["volume", "density", "mass / volume"]],
      },
    ],
    examinerKeywords: [
      "balance",
      "measuring cylinder",
      "displacement",
      "volume",
      "density",
      "mass / volume",
    ],
    modelAnswer:
      "Measure the stone's mass using a balance. Put water in a measuring cylinder and record the initial volume. Lower the stone fully into the water and record the final volume. The difference is the stone's volume. Calculate density using mass divided by volume.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using length × width × height for an irregular object.",
      "Avoid: Forgetting to subtract the initial water level.",
      "Avoid: Not fully submerging the stone.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Measuring density. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State what happens to the average kinetic energy of particles when the temperature of a substance increases.",
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
    modelAnswer:
      "The average kinetic energy of the particles increases, so the particles move or vibrate faster.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying temperature measures potential energy only.",
      "Avoid: Saying particles get larger when heated.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Temperature. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a metal rod expands when heated.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Heating increases the kinetic energy of the particles",
        keywords: [["kinetic energy", "particle separation"]],
      },
      {
        point: "The particles vibrate more vigorously",
        keywords: [["vibrate", "particle separation"]],
      },
      {
        point: "The average separation between particles increases, so the rod expands",
        keywords: [["particle separation", "expands"]],
      },
    ],
    examinerKeywords: [
      "thermal expansion",
      "kinetic energy",
      "vibrate",
      "particle separation",
      "expands",
    ],
    modelAnswer:
      "When the metal is heated, its particles gain kinetic energy and vibrate more vigorously. Their average separation increases, so the rod expands.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the particles themselves expand.",
      "Avoid: Not referring to particle vibration or separation.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal expansion. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define specific heat capacity.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C or 1 K",
        keywords: [["specific heat capacity", "energy", "1 kg"]],
      },
      {
        point: "It is measured in J/kg °C or J/kg K",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "1 kg", "1 °C", "J/kg °C"],
    modelAnswer:
      "Specific heat capacity is the energy needed to raise the temperature of 1 kg of a substance by 1 °C.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Confusing specific heat capacity with latent heat.",
      "Avoid: Forgetting to mention 1 kg.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Specific heat capacity. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 2.0 kg block has specific heat capacity 450 J/kg °C. Calculate the energy needed to raise its temperature by 10 °C.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "mass", "temperature change"]],
      },
      {
        point: "Substitution: energy = 2.0 × 450 × 10",
        keywords: [["energy"]],
      },
      {
        point: "Answer: 9000 J",
        keywords: [["j"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "mass", "temperature change", "energy", "J"],
    modelAnswer: "E = mcΔT = 2.0 × 450 × 10 = 9000 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Forgetting to multiply by mass.",
      "Avoid: Giving the answer in W.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Specific heat capacity calculation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
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
      "During melting, the temperature stays constant because the energy supplied is used to overcome forces between particles.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the temperature keeps rising during melting.",
      "Avoid: Not explaining where the energy goes.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Melting and boiling. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
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
        point: "The change of state happens without a change in temperature",
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
      "Avoid: Forgetting to mention no temperature change.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Specific latent heat. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how thermal energy is transferred by conduction through a metal.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles at the hot end vibrate more",
        keywords: [["particles"]],
      },
      {
        point: "Energy is passed to neighbouring particles by collisions",
        keywords: [["particles", "collisions"]],
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
      "particles",
      "collisions",
      "delocalised electrons",
      "kinetic energy",
    ],
    modelAnswer:
      "At the hot end, particles vibrate more and pass energy to neighbouring particles by collisions. In metals, delocalised electrons also gain kinetic energy and move through the metal, transferring energy by collisions.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying particles move through the whole solid.",
      "Avoid: Forgetting the role of free electrons in metals.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Conduction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how convection currents form in a liquid heated from below.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The liquid near the heater gains thermal energy and expands",
        keywords: [["expands"]],
      },
      {
        point: "Its density decreases",
        keywords: [["density decreases"]],
      },
      {
        point: "The warmer, less dense liquid rises",
        keywords: [["rises"]],
      },
      {
        point: "Cooler, denser liquid sinks to replace it, forming a convection current",
        keywords: [["convection", "cooler liquid sinks"]],
      },
    ],
    examinerKeywords: [
      "convection",
      "expands",
      "density decreases",
      "rises",
      "cooler liquid sinks",
    ],
    modelAnswer:
      "Liquid near the heater warms up and expands, so its density decreases. The less dense liquid rises, while cooler, denser liquid sinks to replace it. This forms a convection current.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Saying convection occurs in solids.", "Avoid: Not mentioning density changes."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Convection. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe two surface properties that make an object a good emitter of thermal radiation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A black or dark surface is a good emitter",
        keywords: [["black", "dark", "emitter"]],
      },
      {
        point: "A matt surface is a better emitter than a shiny surface",
        keywords: [["matt", "emitter"]],
      },
    ],
    examinerKeywords: ["thermal radiation", "black", "dark", "matt", "emitter"],
    modelAnswer: "A black, matt surface is a good emitter of thermal radiation.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying shiny surfaces are the best emitters.",
      "Avoid: Confusing emission with reflection.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why evaporation causes cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The fastest or highest-energy particles escape from the liquid surface",
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
      "During evaporation, the highest-energy particles escape from the liquid surface. The particles left behind have a lower average kinetic energy, so the temperature of the liquid decreases.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying all particles leave at the same energy.",
      "Avoid: Not linking cooling to average kinetic energy.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Evaporation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["force", "pressure", "area"]],
      },
    ],
    examinerKeywords: ["gas particles", "random motion", "collisions", "force", "pressure", "area"],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls. Each collision exerts a force on the walls. The total force over the wall area produces pressure.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying pressure is caused by particles sticking to the wall.",
      "Avoid: Not mentioning collisions.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gas pressure. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "A sealed container of gas is heated at constant volume. Explain why the pressure increases.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Heating increases the kinetic energy of the gas particles",
        keywords: [["gas particles", "kinetic energy"]],
      },
      {
        point: "The particles move faster",
        keywords: [["faster"]],
      },
      {
        point: "They collide with the container walls more frequently",
        keywords: [["they", "collide", "container"]],
      },
      {
        point: "The collisions exert a greater force, so pressure increases",
        keywords: [["collisions", "pressure"]],
      },
    ],
    examinerKeywords: [
      "gas particles",
      "temperature",
      "kinetic energy",
      "faster",
      "collisions",
      "pressure",
    ],
    modelAnswer:
      "Heating gives the gas particles more kinetic energy, so they move faster. They collide with the container walls more often and with greater force, so the pressure increases.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying the particles expand.",
      "Avoid: Saying volume increases even though the container is sealed and constant volume.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gas pressure and temperature. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A gas at constant volume has a pressure of 100 kPa at 300 K. The temperature increases to 360 K. Calculate the new pressure.",
    marks: 4,
    markSchemePoints: [
      {
        point: "For a fixed mass of gas at constant volume, pressure / temperature is constant",
        keywords: [["constant volume", "pressure", "temperature"]],
      },
      {
        point: "Formula: p1 / T1 = p2 / T2",
        keywords: [["mark point"]],
      },
      {
        point: "Substitution: 100 / 300 = p2 / 360",
        keywords: [["100", "300", "360"]],
      },
      {
        point: "Answer: p2 = 120 kPa",
        keywords: [["kpa"]],
      },
    ],
    examinerKeywords: ["constant volume", "pressure", "temperature", "kelvin", "kPa"],
    modelAnswer: "p1 / T1 = p2 / T2, so 100 / 300 = p2 / 360. p2 = 120 kPa.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using Celsius instead of kelvin.",
      "Avoid: Assuming pressure decreases when temperature increases.",
      "Avoid: Using the volume equation instead.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pressure law. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to compare the rate of cooling of hot water in two different cups.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes two cups, hot water, thermometer or temperature probe, stopwatch and measuring cylinder",
        keywords: [["temperature", "hot water safety"]],
      },
      {
        point: "Independent variable is the type of cup",
        keywords: [["independent", "variable", "type"]],
      },
      {
        point: "Dependent variable is temperature drop or rate of cooling",
        keywords: [["cooling", "temperature"]],
      },
      {
        point:
          "Control variables include volume of water, starting temperature and room conditions",
        keywords: [["temperature", "control variables"]],
      },
      {
        point: "Record temperature at regular time intervals for each cup",
        keywords: [["temperature", "time"]],
      },
      {
        point:
          "Repeat and calculate mean temperature drop or plot temperature-time graphs; take care with hot water",
        keywords: [["temperature", "time", "repeat"]],
      },
    ],
    examinerKeywords: [
      "cooling",
      "temperature",
      "time",
      "control variables",
      "repeat",
      "mean",
      "hot water safety",
    ],
    modelAnswer:
      "Put the same volume of hot water at the same starting temperature into each cup. Measure the temperature at regular time intervals using a thermometer and stopwatch. Keep room conditions the same. Repeat the experiment and compare mean temperature drops or cooling curves. Handle hot water carefully.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using different volumes of water.",
      "Avoid: Using different starting temperatures.",
      "Avoid: Only measuring final temperature without recording time.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Cooling experiment. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-thermal-physics-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "thermal-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a shiny silver flask keeps hot liquid warm for a long time.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A shiny silver surface is a poor emitter of thermal radiation",
        keywords: [["shiny", "silver"]],
      },
      {
        point: "It reflects infrared radiation back towards the liquid",
        keywords: [["infrared radiation"]],
      },
      {
        point: "A vacuum or insulating layer reduces conduction",
        keywords: [["conduction", "vacuum"]],
      },
      {
        point: "A vacuum prevents convection because there are no particles to move",
        keywords: [["convection", "vacuum"]],
      },
      {
        point: "Reduced thermal energy transfer keeps the liquid warm for longer",
        keywords: [["reduced", "thermal", "energy"]],
      },
    ],
    examinerKeywords: [
      "shiny",
      "silver",
      "infrared radiation",
      "conduction",
      "convection",
      "vacuum",
      "insulation",
    ],
    modelAnswer:
      "The shiny silver surface reflects infrared radiation and is a poor emitter, so less energy is lost by radiation. A vacuum or insulating layer reduces conduction, and a vacuum prevents convection because there are no particles. This reduces thermal energy transfer, keeping the liquid warm.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying shiny surfaces are good emitters.",
      "Avoid: Saying convection can occur through a vacuum.",
      "Avoid: Only naming insulation without explaining energy transfer.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal transfer synoptic. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Wave properties. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A wave has a frequency of 5.0 Hz and a wavelength of 0.60 m. Calculate the wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 5.0 × 0.60",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 3.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 5.0 × 0.60 = 3.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing frequency by wavelength.",
      "Avoid: Giving the unit as Hz instead of m/s.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Wave speed. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
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
      "In transverse waves, vibrations are perpendicular to the direction of energy transfer and the waves have crests and troughs. In longitudinal waves, vibrations are parallel to the direction of energy transfer and the waves have compressions and rarefactions.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Mixing up perpendicular and parallel.",
      "Avoid: Only giving examples instead of comparing particle motion.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Transverse and longitudinal waves. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A wave has a period of 0.025 s. Calculate its frequency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: frequency = 1 / period",
        keywords: [["frequency", "period"]],
      },
      {
        point: "Substitution: frequency = 1 / 0.025",
        keywords: [["frequency"]],
      },
      {
        point: "Answer: 40 Hz",
        keywords: [["hz"]],
      },
    ],
    examinerKeywords: ["frequency", "period", "reciprocal", "Hz"],
    modelAnswer: "frequency = 1 / period = 1 / 0.025 = 40 Hz.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Using frequency = period.", "Avoid: Giving the unit as seconds."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Frequency and period. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why sound waves cannot travel through a vacuum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sound is a mechanical wave",
        keywords: [["sound", "mechanical wave"]],
      },
      {
        point: "Sound travels by vibrations of particles in a medium",
        keywords: [["sound", "particles", "medium"]],
      },
      {
        point: "A vacuum has no particles to vibrate and transfer energy",
        keywords: [["particles", "vacuum"]],
      },
    ],
    examinerKeywords: ["sound", "mechanical wave", "particles", "medium", "vacuum"],
    modelAnswer:
      "Sound needs particles to vibrate and transfer energy. A vacuum has no particles, so sound cannot travel through it.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sound travels through space like light.",
      "Avoid: Only saying there is no air without mentioning particles.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Sound waves. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A sound wave travels 660 m in 2.0 s. Calculate the speed of sound.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 660 / 2.0",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 330 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["sound", "speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 660 / 2.0 = 330 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Giving the unit as Hz."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Speed of sound. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student hears an echo 0.60 s after making a sound. The speed of sound is 340 m/s. Calculate the distance to the reflecting wall.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed of sound", "time", "distance"]],
      },
      {
        point: "Total distance travelled by sound = 340 × 0.60 = 204 m",
        keywords: [["distance"]],
      },
      {
        point: "The sound travels to the wall and back",
        keywords: [["sound", "travels", "wall"]],
      },
      {
        point: "Distance to wall = 204 / 2 = 102 m",
        keywords: [["distance"]],
      },
    ],
    examinerKeywords: ["echo", "speed of sound", "time", "divide by 2", "distance"],
    modelAnswer:
      "Total distance = 340 × 0.60 = 204 m. This is to the wall and back, so distance to wall = 204 / 2 = 102 m.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to divide by 2.",
      "Avoid: Using 0.30 s without explaining why.",
      "Avoid: Giving the unit as m/s.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Echoes. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the law of reflection.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The angle of incidence equals the angle of reflection",
        keywords: [["angle of incidence", "angle of reflection", "equal"]],
      },
      {
        point: "Both angles are measured from the normal",
        keywords: [["angle of incidence", "angle of reflection", "normal"]],
      },
    ],
    examinerKeywords: ["angle of incidence", "angle of reflection", "normal", "equal"],
    modelAnswer:
      "The angle of incidence is equal to the angle of reflection, and both are measured from the normal.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Saying the reflected ray refracts.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Reflection. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate reflection from a plane mirror using a ray box.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Apparatus includes ray box, plane mirror, paper, pencil, ruler and protractor",
        keywords: [["ray box", "plane mirror", "protractor"]],
      },
      {
        point: "Draw around the mirror and draw a normal at 90° to the mirror",
        keywords: [["normal"]],
      },
      {
        point: "Shine a ray at the mirror and mark the incident and reflected rays",
        keywords: [["ray box"]],
      },
      {
        point: "Measure the angle of incidence and angle of reflection from the normal",
        keywords: [["normal", "angle of incidence", "angle of reflection"]],
      },
      {
        point: "Repeat for different angles and compare the angles",
        keywords: [["angle of incidence", "angle of reflection"]],
      },
    ],
    examinerKeywords: [
      "ray box",
      "plane mirror",
      "normal",
      "angle of incidence",
      "angle of reflection",
      "protractor",
    ],
    modelAnswer:
      "Place the mirror on paper and draw around it. Draw a normal at 90° to the mirror. Shine a ray at the mirror and mark the incident and reflected rays. Measure both angles from the normal and repeat for different incident angles.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Not drawing the normal at 90°.",
      "Avoid: Only taking one reading.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Reflection practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a ray of light bends when it enters glass from air at an angle.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Light changes speed when it enters glass from air",
        keywords: [["speed changes", "air", "glass"]],
      },
      {
        point: "One side of the wavefront slows before the other side",
        keywords: [["one", "side", "wavefront"]],
      },
      {
        point: "The ray refracts towards the normal because glass is optically denser than air",
        keywords: [["air", "glass", "towards normal"]],
      },
    ],
    examinerKeywords: ["refraction", "speed changes", "air", "glass", "towards normal"],
    modelAnswer:
      "Light slows down when it enters glass from air. Because it enters at an angle, one side of the wavefront slows first, so the ray changes direction towards the normal.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying light bends because it loses energy.",
      "Avoid: Saying the ray bends away from the normal when entering glass.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Refraction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the two conditions needed for total internal reflection.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Light must travel from a more optically dense medium to a less optically dense medium",
        keywords: [["optically dense", "less dense"]],
      },
      {
        point: "The angle of incidence must be greater than the critical angle",
        keywords: [["critical angle"]],
      },
    ],
    examinerKeywords: [
      "total internal reflection",
      "optically dense",
      "less dense",
      "critical angle",
    ],
    modelAnswer:
      "Total internal reflection occurs when light travels from a more optically dense medium to a less dense medium and the angle of incidence is greater than the critical angle.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying it happens from air into glass.",
      "Avoid: Saying the angle must be less than the critical angle.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Total internal reflection. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how a converging lens forms a real image of a distant object on a screen.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Rays from a distant object are nearly parallel",
        keywords: [["parallel rays"]],
      },
      {
        point: "The converging lens refracts the rays so they meet",
        keywords: [["converging lens", "refract"]],
      },
      {
        point:
          "A real image forms where the rays meet, near the principal focus, and can be projected on a screen",
        keywords: [["principal focus", "real image", "screen"]],
      },
    ],
    examinerKeywords: [
      "converging lens",
      "parallel rays",
      "refract",
      "principal focus",
      "real image",
      "screen",
    ],
    modelAnswer:
      "Light rays from a distant object are nearly parallel. A converging lens refracts them so they meet near the principal focus, forming a real image on a screen.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the rays diverge after passing through a converging lens.",
      "Avoid: Saying a real image cannot be projected on a screen.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Lenses. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the order of the electromagnetic spectrum from longest wavelength to shortest wavelength.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Radio waves, microwaves and infrared are at the longer wavelength end",
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
      "Cambridge IGCSE Physics 0625: Electromagnetic spectrum. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State two properties that are the same for all electromagnetic waves in a vacuum.",
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
    modelAnswer:
      "All electromagnetic waves are transverse and travel at the same speed in a vacuum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying all electromagnetic waves have the same frequency.",
      "Avoid: Saying they need a medium.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electromagnetic waves. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give one use of infrared radiation and one use of X-rays.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "A valid use of infrared radiation includes remote controls, thermal imaging, heaters or optical fibres",
        keywords: [["infrared", "remote control", "thermal imaging"]],
      },
      {
        point:
          "A valid use of X-rays includes medical imaging, airport security or checking structures",
        keywords: [["x-rays", "medical imaging", "security"]],
      },
    ],
    examinerKeywords: [
      "infrared",
      "remote control",
      "thermal imaging",
      "X-rays",
      "medical imaging",
      "security",
    ],
    modelAnswer:
      "Infrared radiation can be used in remote controls. X-rays can be used for medical imaging of bones.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving the same use for both radiations.",
      "Avoid: Saying X-rays are used for radio communication.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Uses of electromagnetic waves. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why X-rays can be hazardous to living tissue.",
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
        point: "This can damage cells or DNA and increase the risk of cancer",
        keywords: [["cells", "dna", "cancer"]],
      },
    ],
    examinerKeywords: ["X-rays", "ionising", "remove electrons", "cells", "DNA", "cancer"],
    modelAnswer:
      "X-rays are ionising radiation, so they can remove electrons from atoms. This can damage cells or DNA and increase the risk of cancer.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying X-rays are harmless because they are invisible.",
      "Avoid: Not mentioning ionisation or cell damage.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Ionising radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
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
        point: "The time taken for the echoes to return is measured",
        keywords: [["echo"]],
      },
      {
        point: "A computer uses the echo times and intensities to produce an image",
        keywords: [["echo", "image"]],
      },
    ],
    examinerKeywords: ["ultrasound", "pulses", "reflection", "tissue boundary", "echo", "image"],
    modelAnswer:
      "Ultrasound pulses are sent into the body and reflect at boundaries between tissues. The returning echoes are detected. Their time delay and strength are used by a computer to form an image.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying ultrasound uses ionising radiation.",
      "Avoid: Not mentioning reflection or echoes.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Ultrasound. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the speed of water waves in a ripple tank.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Apparatus includes ripple tank, water, vibrating dipper, lamp, screen and ruler",
        keywords: [["ripple tank"]],
      },
      {
        point: "Use the vibrating dipper to produce regular waves",
        keywords: [["wave speed"]],
      },
      {
        point:
          "Measure the distance across several wavelengths and divide by the number of wavelengths",
        keywords: [["wavelength", "wave speed"]],
      },
      {
        point: "Measure or set the frequency of the dipper",
        keywords: [["frequency"]],
      },
      {
        point: "Calculate wave speed using wave speed = frequency × wavelength",
        keywords: [["frequency", "wavelength", "wave speed"]],
      },
      {
        point: "Repeat measurements, calculate a mean and keep water depth constant",
        keywords: [["repeat", "mean"]],
      },
    ],
    examinerKeywords: ["ripple tank", "frequency", "wavelength", "wave speed", "repeat", "mean"],
    modelAnswer:
      "Use a vibrating dipper in a ripple tank to make regular waves. Measure the distance across several wavelengths on the screen and divide by the number of waves to find wavelength. Record the frequency and calculate speed using v = fλ. Repeat and keep water depth constant.",
    difficulty: "medium",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Measuring only one wavelength.",
      "Avoid: Not controlling water depth.",
      "Avoid: Using period as frequency without converting.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Ripple tank practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe what happens when water waves pass through a gap that is similar in size to their wavelength.",
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
      "The waves spread out after passing through the gap. This is diffraction, and it is greatest when the gap is about the same size as the wavelength.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the waves only reflect back.",
      "Avoid: Saying diffraction is greatest when the gap is much larger than the wavelength.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Diffraction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-waves-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 3 / Paper 4",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student counts 15 waves passing a point in 5.0 s. The wavelength is 0.20 m. Calculate the frequency and wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "number of waves", "time"]],
      },
      {
        point: "Substitution: frequency = 15 / 5.0",
        keywords: [["frequency"]],
      },
      {
        point: "Frequency = 3.0 Hz",
        keywords: [["frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["frequency", "wave speed", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 3.0 × 0.20 = 0.60 m/s",
        keywords: [["wave speed"]],
      },
    ],
    examinerKeywords: ["frequency", "number of waves", "time", "wave speed", "wavelength"],
    modelAnswer:
      "frequency = 15 / 5.0 = 3.0 Hz. wave speed = frequency × wavelength = 3.0 × 0.20 = 0.60 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 5.0 / 15 for frequency.",
      "Avoid: Forgetting to calculate frequency first.",
      "Avoid: Giving wave speed in Hz.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Wave data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by electric current.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Electric current is the rate of flow of charge",
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
      "Avoid: Confusing current with voltage.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electric charge. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.60 A flows for 50 s. Calculate the charge transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.60 × 50",
        keywords: [["charge", "c"]],
      },
      {
        point: "Answer: 30 C",
        keywords: [["c"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "C"],
    modelAnswer: "charge = current × time = 0.60 × 50 = 30 C.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing current by time.", "Avoid: Using A as the unit for charge."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Charge calculation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Potential difference. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resistor has a potential difference of 6.0 V across it and a current of 0.30 A through it. Calculate its resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["resistance", "voltage", "current"]],
      },
      {
        point: "Rearrangement: resistance = voltage / current",
        keywords: [["resistance", "voltage", "current"]],
      },
      {
        point: "Substitution: resistance = 6.0 / 0.30",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "voltage", "current", "ohms"],
    modelAnswer: "R = V / I = 6.0 / 0.30 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Writing the unit as V instead of Ω."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resistance. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how current behaves in a series circuit.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Current is the same at all points in a series circuit",
        keywords: [["series circuit", "same current"]],
      },
      {
        point: "There is only one path for charge to flow",
        keywords: [["one path", "charge"]],
      },
    ],
    examinerKeywords: ["series circuit", "same current", "one path", "charge"],
    modelAnswer:
      "In a series circuit, the current is the same at all points because there is only one path for charge to flow.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying current is shared between components in series.",
      "Avoid: Confusing series circuits with parallel circuits.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Series circuits. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["series", "shared voltage"]],
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
      "shared voltage",
      "power",
    ],
    modelAnswer:
      "In parallel, each lamp has the full supply voltage. In series, the voltage is shared between lamps. The parallel lamps transfer more power, so they are brighter.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying current is always the same in each parallel branch.",
      "Avoid: Only saying parallel is brighter without explaining voltage or power.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Parallel circuits. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A motor has a current of 2.0 A and a potential difference of 12 V. Calculate the electrical power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: electrical power = current × voltage",
        keywords: [["power", "current", "voltage"]],
      },
      {
        point: "Substitution: power = 2.0 × 12",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 24 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "W"],
    modelAnswer: "power = current × voltage = 2.0 × 12 = 24 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using resistance instead of voltage.",
      "Avoid: Giving the unit as J instead of W.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical power. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 40 W lamp is switched on for 120 s. Calculate the energy transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy transferred", "power", "time"]],
      },
      {
        point: "Substitution: energy = 40 × 120",
        keywords: [["energy transferred"]],
      },
      {
        point: "Answer: 4800 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "J"],
    modelAnswer: "energy transferred = power × time = 40 × 120 = 4800 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing power by time.", "Avoid: Writing W as the unit for energy."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Energy transferred electrically. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how an ammeter and a voltmeter should be connected to measure the current through and potential difference across a resistor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The ammeter is connected in series with the resistor",
        keywords: [["ammeter", "series", "resistor"]],
      },
      {
        point: "The voltmeter is connected in parallel across the resistor",
        keywords: [["voltmeter", "parallel", "resistor"]],
      },
      {
        point: "The circuit should include a power supply and switch",
        keywords: [["circuit", "should", "include"]],
      },
      {
        point: "Current and potential difference readings are recorded for the resistor",
        keywords: [["resistor", "current", "potential difference"]],
      },
    ],
    examinerKeywords: [
      "ammeter",
      "series",
      "voltmeter",
      "parallel",
      "resistor",
      "current",
      "potential difference",
    ],
    modelAnswer:
      "Connect the ammeter in series with the resistor to measure the current through it. Connect the voltmeter in parallel across the resistor to measure the potential difference across it.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Connecting the ammeter in parallel.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Measuring voltage across the power supply instead of the resistor.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Circuit symbols and meters. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
      "An ohmic conductor has current directly proportional to potential difference, so its resistance is constant, provided temperature stays constant.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying all conductors are ohmic.",
      "Avoid: Not mentioning constant temperature.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: I-V characteristics. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe an experiment to investigate how the resistance of a wire depends on its length.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes power supply, ammeter, voltmeter, switch, crocodile clips and resistance wire",
        keywords: [["resistance wire", "ammeter", "voltmeter"]],
      },
      {
        point: "Measure a chosen length of wire using a metre rule",
        keywords: [["length"]],
      },
      {
        point: "Connect the ammeter in series and the voltmeter in parallel across the wire",
        keywords: [["ammeter", "voltmeter", "v/i"]],
      },
      {
        point: "Record current and potential difference for each wire length",
        keywords: [["length"]],
      },
      {
        point: "Calculate resistance using resistance = voltage / current",
        keywords: [["resistance wire", "v/i"]],
      },
      {
        point:
          "Keep wire material and diameter constant, use low current to reduce heating and repeat readings",
        keywords: [["keep", "wire", "material"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "length",
      "ammeter",
      "voltmeter",
      "V/I",
      "control variables",
      "mean",
    ],
    modelAnswer:
      "Set up a circuit with a power supply, ammeter in series and voltmeter across the wire. Use crocodile clips to select different lengths of the same wire. Record V and I, calculate R = V / I, keep material and diameter constant, use low current to reduce heating and repeat readings.",
    difficulty: "medium",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Changing thickness as well as length.",
      "Avoid: Forgetting to calculate resistance.",
      "Avoid: Allowing the wire to heat up significantly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resistance practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
        point: "The fuse melts and breaks the circuit",
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
      "Avoid: Saying the fuse reduces current gradually.",
      "Avoid: Saying the fuse can be reset after melting.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Static electricity. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field pattern around a bar magnet.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Field lines go from the north pole to the south pole outside the magnet",
        keywords: [["north pole", "south pole", "field lines"]],
      },
      {
        point: "The field is strongest near the poles where field lines are closest together",
        keywords: [["field lines", "strongest near poles"]],
      },
      {
        point: "Field lines form complete loops and do not cross",
        keywords: [["field lines"]],
      },
    ],
    examinerKeywords: [
      "magnetic field",
      "north pole",
      "south pole",
      "field lines",
      "strongest near poles",
    ],
    modelAnswer:
      "The field lines leave the north pole and enter the south pole outside the magnet. They are closest near the poles, where the field is strongest, and they do not cross.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing arrows from south to north outside the magnet.",
      "Avoid: Saying field lines cross.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Magnetic fields. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
        point: "Increase the number of turns on the coil or use a soft iron core",
        keywords: [["increase current", "soft iron core"]],
      },
    ],
    examinerKeywords: ["electromagnet", "increase current", "more turns", "soft iron core"],
    modelAnswer:
      "The electromagnet can be made stronger by increasing the current and adding more turns to the coil.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying use a wooden core.", "Avoid: Saying decrease the current."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electromagnets. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
      "A current-carrying wire has magnetic field lines in concentric circles around it. The field direction depends on current direction, and the field is stronger close to the wire or with a larger current.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Drawing straight field lines along the wire.",
      "Avoid: Saying field direction is independent of current direction.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Magnetic effect of current. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Motor effect. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the purpose of the split-ring commutator in a simple d.c. motor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The split-ring commutator reverses the current in the coil every half-turn",
        keywords: [["split-ring commutator", "reverse current", "half-turn"]],
      },
      {
        point: "This reverses the forces on the sides of the coil at the correct time",
        keywords: [["reverse current", "coil"]],
      },
      {
        point: "The coil continues rotating in the same direction",
        keywords: [["coil"]],
      },
    ],
    examinerKeywords: [
      "split-ring commutator",
      "reverse current",
      "half-turn",
      "coil",
      "continuous rotation",
    ],
    modelAnswer:
      "The split-ring commutator reverses the current in the coil every half-turn. This reverses the forces at the correct time so the coil keeps rotating in the same direction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the commutator reverses the magnetic field.",
      "Avoid: Not explaining why current reversal is needed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electric motor. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
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
    examinerKeywords: [
      "induced potential difference",
      "coil",
      "magnet",
      "changing magnetic field",
      "movement",
    ],
    modelAnswer:
      "A potential difference is induced when a magnet is moved into or out of a coil because the magnetic field through the coil changes.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a stationary magnet in a stationary coil always induces a voltage.",
      "Avoid: Forgetting the magnetic field must change.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electromagnetic induction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-electricity-magnetism-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 200 turns on the primary coil and 1000 turns on the secondary coil. The primary voltage is 12 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary coil", "secondary coil", "turns ratio"]],
      },
      {
        point: "Substitution: Vs / 12 = 1000 / 200",
        keywords: [["1000", "200"]],
      },
      {
        point: "Vs = 12 × 5",
        keywords: [["mark point"]],
      },
      {
        point: "Answer: 60 V",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["transformer", "primary coil", "secondary coil", "turns ratio", "voltage"],
    modelAnswer: "Vs / Vp = Ns / Np, so Vs / 12 = 1000 / 200 = 5. Therefore Vs = 60 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the turns ratio upside down.",
      "Avoid: Using current instead of voltage.",
      "Avoid: Forgetting the unit V.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Transformer. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Avoid: Forgetting that neutrons are in the nucleus.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Atomic structure. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Isotopes. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "An atom has proton number 11 and mass number 23. Determine the number of neutrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: number of neutrons = mass number - proton number",
        keywords: [["mass number", "proton number", "neutrons"]],
      },
      {
        point: "Substitution: number of neutrons = 23 - 11",
        keywords: [["neutrons"]],
      },
      {
        point: "Answer: 12 neutrons",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["mass number", "proton number", "neutrons", "nucleus"],
    modelAnswer: "number of neutrons = 23 - 11 = 12 neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding mass number and proton number.",
      "Avoid: Confusing neutrons with electrons.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nuclear notation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Avoid: Saying alpha is the most penetrating.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Alpha radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "In beta-minus decay, a neutron changes into a proton and an electron is emitted. The proton number increases by 1, while the mass number stays the same.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying an orbital electron is emitted.",
      "Avoid: Saying mass number decreases by 4.",
      "Avoid: Saying proton number decreases.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Beta radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
        point: "Gamma radiation has no charge, while alpha radiation has a +2 charge",
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
      "Avoid: Forgetting to compare ionising ability.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gamma radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by ionising radiation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ionising radiation has enough energy to remove electrons from atoms",
        keywords: [["ionising radiation", "remove electrons", "atoms"]],
      },
      {
        point: "Removing electrons forms ions",
        keywords: [["ions"]],
      },
      {
        point: "Ionisation can damage living cells or DNA",
        keywords: [["damage cells", "dna"]],
      },
    ],
    examinerKeywords: [
      "ionising radiation",
      "remove electrons",
      "atoms",
      "ions",
      "damage cells",
      "DNA",
    ],
    modelAnswer:
      "Ionising radiation has enough energy to remove electrons from atoms, forming ions. This can damage living cells or DNA.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying ionising radiation adds protons to atoms.",
      "Avoid: Not mentioning electron removal.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Ionisation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Background radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to measure the corrected count rate from a radioactive source using a Geiger-Muller tube and counter.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure the background count rate without the source",
        keywords: [["background count", "count rate"]],
      },
      {
        point: "Place the radioactive source a fixed distance from the Geiger-Muller tube",
        keywords: [["geiger-muller tube"]],
      },
      {
        point: "Record the count for a measured time and calculate count rate",
        keywords: [["count rate"]],
      },
      {
        point: "Subtract the background count rate to find corrected count rate",
        keywords: [["background count", "count rate", "corrected count"]],
      },
      {
        point: "Use safety precautions such as tongs, distance, shielding and short exposure time",
        keywords: [["safety"]],
      },
    ],
    examinerKeywords: [
      "Geiger-Muller tube",
      "counter",
      "background count",
      "count rate",
      "corrected count",
      "safety",
    ],
    modelAnswer:
      "First measure the background count rate. Place the source a fixed distance from the GM tube and record the count for a known time. Calculate count rate, then subtract background count rate. Use tongs, keep distance and minimise exposure.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting to subtract background count rate.",
      "Avoid: Changing the source-detector distance.",
      "Avoid: Handling the source directly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Detecting radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Half-life is the time taken for the activity or count rate of a source, or the number of undecayed nuclei, to fall to half its original value.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying half-life is half the total lifetime of a sample.",
      "Avoid: Saying the source disappears after one half-life.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Half-life. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has an initial count rate of 800 counts per minute. Its half-life is 4.0 minutes. Calculate the count rate after 12 minutes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of half-lives = 12 / 4.0 = 3",
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
      "12 minutes is 3 half-lives. The count rate halves three times: 800 → 400 → 200 → 100 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Dividing by 3 instead of halving three times.",
      "Avoid: Subtracting 4 each half-life.",
      "Avoid: Forgetting the unit counts per minute.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Half-life calculation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Random decay. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "A nucleus emits an alpha particle. Describe the changes to its proton number and nucleon number.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The proton number decreases by 2",
        keywords: [["proton number", "decreases by 2", "decreases by 4"]],
      },
      {
        point: "The nucleon number or mass number decreases by 4",
        keywords: [["decreases by 2", "nucleon number", "decreases by 4"]],
      },
    ],
    examinerKeywords: [
      "alpha decay",
      "proton number",
      "decreases by 2",
      "nucleon number",
      "decreases by 4",
    ],
    modelAnswer:
      "After alpha decay, the proton number decreases by 2 and the nucleon number decreases by 4.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the mass number stays the same.",
      "Avoid: Saying the proton number increases by 2.",
      "Avoid: Confusing alpha decay with beta decay.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Alpha decay. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["exposure time", "shielded container"]],
      },
    ],
    examinerKeywords: [
      "radioactive source",
      "tongs",
      "distance",
      "exposure time",
      "shielded container",
    ],
    modelAnswer:
      "Use tongs, keep the source away from the body, minimise exposure time and store it in a shielded container when not in use.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying gloves alone fully protect from radiation.",
      "Avoid: Suggesting direct handling of the source.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a radioactive tracer used inside the body should emit gamma radiation and have a short half-life.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gamma radiation is penetrating enough to leave the body and be detected",
        keywords: [["gamma radiation", "penetrating", "radiation dose"]],
      },
      {
        point: "A short half-life reduces the time the patient is exposed to radiation",
        keywords: [["short half-life", "radiation dose"]],
      },
      {
        point: "This reduces the radiation dose and risk of cell damage",
        keywords: [["radiation dose"]],
      },
      {
        point:
          "The half-life must still be long enough for the tracer to be detected during the test",
        keywords: [["tracer", "detected"]],
      },
    ],
    examinerKeywords: [
      "tracer",
      "gamma radiation",
      "penetrating",
      "short half-life",
      "radiation dose",
      "detected",
    ],
    modelAnswer:
      "Gamma radiation is suitable because it can escape the body and be detected outside the patient. A short half-life reduces exposure time and dose, lowering the risk of cell damage. It must not be so short that the tracer cannot be detected during the test.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Choosing alpha radiation for a tracer inside the body.",
      "Avoid: Saying the half-life should be as long as possible.",
      "Avoid: Forgetting that the tracer still needs to be detected.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Medical uses. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Avoid: Forgetting that neutrons are released.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nuclear fission. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Nuclear fusion. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the purpose of control rods in a nuclear reactor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Control rods absorb neutrons",
        keywords: [["control rods", "absorb neutrons"]],
      },
      {
        point: "This reduces the number of neutrons available to cause further fission",
        keywords: [["fission rate"]],
      },
      {
        point: "Moving the rods controls the rate of the chain reaction",
        keywords: [["control rods", "chain reaction"]],
      },
    ],
    examinerKeywords: [
      "control rods",
      "absorb neutrons",
      "chain reaction",
      "fission rate",
      "reactor",
    ],
    modelAnswer:
      "Control rods absorb neutrons. This reduces the number of neutrons that can cause further fission, so moving the rods controls the rate of the chain reaction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying control rods cool the reactor directly.",
      "Avoid: Saying they release neutrons.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nuclear reactor. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the risks and benefits of using nuclear power to generate electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Nuclear power stations can generate large amounts of electricity reliably",
        keywords: [["nuclear power", "electricity"]],
      },
      {
        point: "They do not release carbon dioxide during normal operation",
        keywords: [["carbon dioxide"]],
      },
      {
        point: "They use non-renewable nuclear fuel",
        keywords: [["nuclear power"]],
      },
      {
        point: "They produce radioactive waste that must be stored safely for a long time",
        keywords: [["radioactive waste"]],
      },
      {
        point: "Accidents can release radioactive material",
        keywords: [["radioactive waste"]],
      },
      {
        point:
          "A justified conclusion should balance reliable low-carbon generation against waste and safety risks",
        keywords: [["reliable", "carbon dioxide", "safety"]],
      },
    ],
    examinerKeywords: [
      "nuclear power",
      "electricity",
      "reliable",
      "carbon dioxide",
      "radioactive waste",
      "safety",
      "conclusion",
    ],
    modelAnswer:
      "Nuclear power stations can generate large amounts of reliable electricity and do not release carbon dioxide during normal operation. However, they use non-renewable fuel and produce radioactive waste that must be stored safely for a long time. Accidents could release radioactive material. Overall, nuclear power is useful for low-carbon electricity, but waste and safety must be carefully managed.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying nuclear power releases lots of carbon dioxide during normal operation.",
      "Avoid: Only giving advantages or only giving disadvantages.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radioactive waste. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-nuclear-physics-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "graph",
    questionType: "Determine",
    questionText:
      "A corrected count rate decreases from 640 counts per minute to 80 counts per minute. Determine how many half-lives have passed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "640 to 320 is one half-life",
        keywords: [["half-life"]],
      },
      {
        point: "320 to 160 is two half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "160 to 80 is three half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "Answer: 3 half-lives",
        keywords: [["half-life"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "corrected count rate"],
    modelAnswer:
      "The count rate halves from 640 to 320, then to 160, then to 80. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing 640 by 80 and saying 8 half-lives.",
      "Avoid: Subtracting a fixed amount each half-life.",
      "Avoid: Not using corrected count rate.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Half-life graph. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "The planets are kept in orbit by gravitational force.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying magnetism keeps planets in orbit.",
      "Avoid: Saying no force acts on planets in space.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Solar System. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "The planet's speed may be constant, but its direction is always changing. Since velocity includes direction, its velocity changes, so it is accelerating.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying constant speed means no acceleration.",
      "Avoid: Confusing speed with velocity.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Orbital motion. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A moon travels 360000 km in one orbit around a planet. The orbit takes 30 days. Calculate the average orbital speed in km/day.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["distance", "time"]],
      },
      {
        point: "Substitution: speed = 360000 / 30",
        keywords: [["speed", "360000"]],
      },
      {
        point: "Answer: 12000 km/day",
        keywords: [["km/day"]],
      },
    ],
    examinerKeywords: ["orbital speed", "distance", "time", "km/day"],
    modelAnswer: "speed = distance / time = 360000 / 30 = 12000 km/day.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit km/day."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Orbital speed. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a satellite in a lower orbit has a shorter orbital period than a satellite in a higher orbit.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A lower orbit has a smaller orbital radius or shorter path length",
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
      "Cambridge IGCSE Physics 0625: Orbital radius. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "A comet moves fastest when it is closest to the Sun and slowest when it is furthest away. This is because the Sun's gravitational force is stronger at smaller distances.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying comets move at constant speed.",
      "Avoid: Saying the comet stops at the furthest point.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Comets. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the main energy source of the Sun.",
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
      "The Sun's energy comes from nuclear fusion, mainly hydrogen nuclei fusing to form helium.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the Sun burns coal or oxygen like a fire.",
      "Avoid: Confusing fusion with fission.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: The Sun. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Avoid: Saying fusion occurs because the star contains oxygen.",
      "Avoid: Not mentioning high temperature or pressure.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
        point: "A protostar forms and later becomes a main sequence star when fusion begins",
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
      "Cambridge IGCSE Physics 0625: Star formation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "A main sequence star is stable because gravity pulls inwards while pressure from fusion pushes outwards. These forces balance while hydrogen fusion continues steadily.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying no forces act on a stable star.",
      "Avoid: Ignoring fusion as the source of outward pressure.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Main sequence stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Life cycle of stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Massive stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Galaxies. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Redshift. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Expanding Universe. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Cosmic microwave background radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "The Big Bang model is supported by redshift from distant galaxies, showing they are moving away and that the Universe is expanding. More distant galaxies have greater redshifts. Cosmic microwave background radiation is also detected from all directions and is interpreted as cooled radiation from the early Universe. Together, these strongly support a hot, dense beginning.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Only mentioning one piece of evidence.",
      "Avoid: Saying CMB radiation is visible light from stars.",
      "Avoid: Not giving a conclusion.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Big Bang model. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Light-year. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Light travels at 3.0 × 10⁸ m/s. Calculate the distance travelled by light in 20 s.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: distance = 3.0 × 10⁸ × 20",
        keywords: [["distance"]],
      },
      {
        point: "Answer: 6.0 × 10⁹ m",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["light", "speed", "distance", "time", "standard form"],
    modelAnswer: "distance = speed × time = 3.0 × 10⁸ × 20 = 6.0 × 10⁹ m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing speed by time.",
      "Avoid: Writing 6.0 × 10⁸ m.",
      "Avoid: Forgetting the unit m.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Light distance. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Star colour and temperature. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-physics-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Apparent brightness. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define independent variable and dependent variable.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The independent variable is the variable deliberately changed by the investigator",
        keywords: [["independent variable", "changed", "dependent variable"]],
      },
      {
        point: "The dependent variable is the variable measured in response",
        keywords: [["dependent variable", "measured", "response"]],
      },
    ],
    examinerKeywords: [
      "independent variable",
      "changed",
      "dependent variable",
      "measured",
      "response",
    ],
    modelAnswer:
      "The independent variable is the variable changed by the investigator. The dependent variable is the variable measured in response.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Swapping independent and dependent variables.",
      "Avoid: Saying both variables are kept constant.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Variables. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why control variables are important in an experiment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Control variables are kept constant",
        keywords: [["control variables", "constant"]],
      },
      {
        point: "This makes the experiment a fair test",
        keywords: [["fair test"]],
      },
      {
        point:
          "It helps ensure changes in the dependent variable are caused by the independent variable",
        keywords: [["independent variable", "dependent variable"]],
      },
    ],
    examinerKeywords: [
      "control variables",
      "constant",
      "fair test",
      "independent variable",
      "dependent variable",
    ],
    modelAnswer:
      "Control variables are kept constant to make the experiment fair. This makes it more likely that changes in the dependent variable are caused by the independent variable.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying control variables are measured.",
      "Avoid: Not linking control variables to a fair test.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Control variables. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare accuracy and precision in measurements.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Accuracy is how close a measured value is to the true value",
        keywords: [["accuracy", "true value"]],
      },
      {
        point: "Precision is how close repeated measurements are to each other",
        keywords: [["precision", "repeat measurements"]],
      },
      {
        point: "Precise measurements can still be inaccurate if there is a systematic error",
        keywords: [["systematic error"]],
      },
    ],
    examinerKeywords: [
      "accuracy",
      "true value",
      "precision",
      "repeat measurements",
      "systematic error",
    ],
    modelAnswer:
      "Accuracy is closeness to the true value. Precision is closeness of repeated measurements to each other. Results can be precise but inaccurate if there is a systematic error.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using accuracy and precision as the same word.",
      "Avoid: Saying precise results must always be accurate.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Accuracy and precision. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why repeat readings are taken in practical work.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Repeats help identify anomalous results",
        keywords: [["repeat readings"]],
      },
      {
        point: "Repeats allow a mean to be calculated",
        keywords: [["repeat readings", "mean"]],
      },
      {
        point: "This improves reliability",
        keywords: [["reliability"]],
      },
    ],
    examinerKeywords: ["repeat readings", "anomaly", "mean", "reliability"],
    modelAnswer:
      "Repeat readings help identify anomalies and allow a mean to be calculated. This improves reliability.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Saying repeats remove all errors.", "Avoid: Not mentioning mean or anomalies."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Repeat readings. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "short-answer",
    questionType: "State",
    questionText: "A stopwatch reads to the nearest 0.01 s. State its resolution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "The resolution is 0.01 s",
        keywords: [["resolution", "0.01 s"]],
      },
    ],
    examinerKeywords: ["resolution", "0.01 s", "smallest division"],
    modelAnswer: "The resolution is 0.01 s.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Saying the resolution is 1 s.", "Avoid: Forgetting the unit."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resolution. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A length is measured as 25.0 cm with an uncertainty of ±0.1 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage uncertainty", "uncertainty", "measured value"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.1 / 25.0 × 100",
        keywords: [["percentage uncertainty", "uncertainty", "percentage"]],
      },
      {
        point: "Answer: 0.4%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.1 / 25.0 × 100 = 0.4%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Percentage uncertainty. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to present experimental readings in a results table.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Each column should have a clear heading",
        keywords: [["column", "should", "have"]],
      },
      {
        point: "Units should be included in the column headings, not repeated in every row",
        keywords: [["headings", "units"]],
      },
      {
        point: "Readings should be recorded to a suitable number of decimal places",
        keywords: [["decimal places"]],
      },
      {
        point: "Repeat readings and mean values should be shown where appropriate",
        keywords: [["mean"]],
      },
    ],
    examinerKeywords: ["results table", "headings", "units", "decimal places", "mean"],
    modelAnswer:
      "A results table should have clear column headings with units in the headings. Readings should be recorded consistently to suitable decimal places, and repeats and mean values should be included where appropriate.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Putting units in every data cell.",
      "Avoid: Using inconsistent decimal places.",
      "Avoid: Not labelling columns.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Tables. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "graph",
    questionType: "Describe",
    questionText: "Describe how to plot a good graph from experimental data.",
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
        keywords: [["scale"]],
      },
      {
        point: "Plot points accurately using small crosses or dots",
        keywords: [["y-axis", "plot points"]],
      },
      {
        point: "Draw a line of best fit or smooth curve as appropriate",
        keywords: [["line of best fit"]],
      },
    ],
    examinerKeywords: ["x-axis", "y-axis", "units", "scale", "plot points", "line of best fit"],
    modelAnswer:
      "Put the independent variable on the x-axis and dependent variable on the y-axis. Label axes with units, choose a suitable scale, plot points accurately and draw a line of best fit or smooth curve.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting units on axes.",
      "Avoid: Joining point-to-point when a best-fit line is needed.",
      "Avoid: Using a poor scale that wastes graph paper.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Graph plotting. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
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
        point: "Include units from the y-axis divided by units from the x-axis if required",
        keywords: [["units"]],
      },
    ],
    examinerKeywords: ["gradient", "line of best fit", "change in y", "change in x", "units"],
    modelAnswer:
      "Choose two points far apart on the line of best fit. Calculate gradient = change in y / change in x, including units if needed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using raw data points not on the best-fit line.",
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Choosing points too close together.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gradient. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "data-response",
    questionType: "Explain",
    questionText:
      "A student records times of 1.8 s, 1.9 s and 4.6 s. Explain how the student should treat these results.",
    marks: 3,
    markSchemePoints: [
      {
        point: "4.6 s is likely to be an anomalous result",
        keywords: [["likely", "anomalous", "result"]],
      },
      {
        point: "The student should repeat the measurement to check it",
        keywords: [["repeat"]],
      },
      {
        point: "The anomaly should not be included in the mean if it is confirmed as anomalous",
        keywords: [["anomaly", "mean"]],
      },
    ],
    examinerKeywords: ["anomaly", "repeat", "mean", "reliability"],
    modelAnswer:
      "The 4.6 s reading is likely to be anomalous because it is very different from the other readings. The student should repeat it and exclude it from the mean if it is confirmed as anomalous.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Averaging all readings without comment.",
      "Avoid: Deleting the reading without justification.",
      "Avoid: Calling 1.8 s the anomaly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Anomalies. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student measures currents of 0.18 A, 0.20 A and 0.19 A. Calculate the mean current.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: mean = sum of readings / number of readings",
        keywords: [["mean", "readings", "a"]],
      },
      {
        point: "Substitution: mean = (0.18 + 0.20 + 0.19) / 3",
        keywords: [["mean", "a"]],
      },
      {
        point: "Answer: 0.19 A",
        keywords: [["a"]],
      },
    ],
    examinerKeywords: ["mean", "current", "readings", "A"],
    modelAnswer: "mean = (0.18 + 0.20 + 0.19) / 3 = 0.57 / 3 = 0.19 A.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing by 2 instead of 3.", "Avoid: Forgetting the unit A."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Mean calculation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText: "Suggest two safety precautions when using hot water in a cooling experiment.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Wear eye protection or handle hot water carefully to avoid burns",
        keywords: [["hot water", "burns", "eye protection"]],
      },
      {
        point: "Place the beaker on a stable surface and allow apparatus to cool before moving it",
        keywords: [["stable surface", "cool"]],
      },
    ],
    examinerKeywords: ["hot water", "burns", "eye protection", "stable surface", "cool"],
    modelAnswer:
      "Wear eye protection and handle the hot water carefully. Keep the beaker on a stable surface and allow it to cool before moving it.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Only saying be careful.", "Avoid: Ignoring the burn hazard."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to reduce parallax error when measuring length with a ruler.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place the ruler close to the object being measured",
        keywords: [["ruler"]],
      },
      {
        point: "Read the scale with the eye directly above the mark",
        keywords: [["eye level", "scale"]],
      },
    ],
    examinerKeywords: ["parallax error", "ruler", "eye level", "scale"],
    modelAnswer:
      "Place the ruler close to the object and read the scale with your eye directly above the mark.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Viewing the scale from an angle.",
      "Avoid: Holding the ruler far away from the object.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Measuring length. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to read the volume of water in a measuring cylinder accurately.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place the measuring cylinder on a flat surface",
        keywords: [["measuring cylinder", "flat surface"]],
      },
      {
        point: "Read the bottom of the meniscus at eye level",
        keywords: [["meniscus", "eye level"]],
      },
    ],
    examinerKeywords: ["measuring cylinder", "meniscus", "eye level", "flat surface"],
    modelAnswer:
      "Place the measuring cylinder on a flat surface and read the bottom of the meniscus at eye level.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Reading the top of the meniscus.",
      "Avoid: Reading from above or below eye level.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Meniscus reading. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to connect an ammeter and voltmeter when finding the resistance of a resistor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Connect the ammeter in series with the resistor",
        keywords: [["ammeter", "series"]],
      },
      {
        point: "Connect the voltmeter in parallel across the resistor",
        keywords: [["voltmeter", "parallel"]],
      },
      {
        point: "Include a power supply and switch",
        keywords: [["include", "power", "supply"]],
      },
      {
        point: "Record current and potential difference, then calculate resistance",
        keywords: [["resistance"]],
      },
    ],
    examinerKeywords: ["ammeter", "series", "voltmeter", "parallel", "resistance"],
    modelAnswer:
      "Connect the ammeter in series with the resistor and the voltmeter in parallel across the resistor. Use a power supply and switch, then record current and potential difference to calculate resistance.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Connecting the ammeter in parallel.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Forgetting to calculate R = V / I.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the length of a pendulum affects its period.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Apparatus includes string, pendulum bob, clamp stand, ruler and stopwatch",
        keywords: [["pendulum"]],
      },
      {
        point: "Independent variable is length of pendulum and dependent variable is period",
        keywords: [["pendulum", "length", "period"]],
      },
      {
        point: "Control variables include mass of bob and angle of release",
        keywords: [["control variables"]],
      },
      {
        point: "Measure length from pivot to centre of bob",
        keywords: [["length"]],
      },
      {
        point: "Time several oscillations and divide by the number of oscillations to find period",
        keywords: [["period", "oscillations"]],
      },
      {
        point: "Repeat for each length and calculate means",
        keywords: [["length", "mean"]],
      },
    ],
    examinerKeywords: ["pendulum", "length", "period", "oscillations", "control variables", "mean"],
    modelAnswer:
      "Attach a bob to a string on a clamp stand. Measure the length from pivot to centre of bob. Release it from a small fixed angle and time ten oscillations. Divide by ten to find the period. Repeat for different lengths, keeping bob mass and release angle constant, and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Timing only one oscillation.",
      "Avoid: Changing the release angle each time.",
      "Avoid: Measuring only the string rather than pivot to centre of bob.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Planning. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student measures speed using a stopwatch and metre rule. Suggest two improvements to reduce uncertainty.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use light gates and a data logger instead of a hand-operated stopwatch",
        keywords: [["light gates", "data logger"]],
      },
      {
        point: "Measure over a longer distance or repeat readings and calculate a mean",
        keywords: [["longer distance", "repeat"]],
      },
    ],
    examinerKeywords: ["uncertainty", "light gates", "data logger", "longer distance", "repeat"],
    modelAnswer:
      "Use light gates connected to a data logger to reduce reaction-time error. Measure over a longer distance and repeat readings to calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Only saying use better equipment without naming it.",
      "Avoid: Only saying be more careful.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Evaluation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the density of a liquid.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Use a balance and measuring cylinder",
        keywords: [["balance", "measuring cylinder"]],
      },
      {
        point: "Measure the mass of the empty measuring cylinder",
        keywords: [["measuring cylinder", "mass"]],
      },
      {
        point: "Pour a measured volume of liquid into the cylinder",
        keywords: [["liquid", "volume"]],
      },
      {
        point: "Measure the mass of the cylinder plus liquid and subtract the empty cylinder mass",
        keywords: [["liquid", "mass"]],
      },
      {
        point: "Calculate density using density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
    ],
    examinerKeywords: ["density", "liquid", "balance", "measuring cylinder", "mass", "volume"],
    modelAnswer:
      "Measure the mass of an empty measuring cylinder. Add a known volume of liquid and measure the mass of the cylinder plus liquid. Subtract to find the liquid mass, then calculate density using mass divided by volume.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using the total mass of cylinder plus liquid as the liquid mass.",
      "Avoid: Not reading the meniscus correctly.",
      "Avoid: Forgetting the density unit.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Density practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest why a student should switch off a circuit between readings when investigating a resistance wire.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The wire can heat up if current flows for too long",
        keywords: [["wire", "can", "heat"]],
      },
      {
        point: "Heating changes the resistance of the wire and can make results less reliable",
        keywords: [["resistance wire", "heating", "resistance changes"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "switch off",
      "heating",
      "resistance changes",
      "reliability",
    ],
    modelAnswer:
      "The wire may heat up if the current flows for too long. Heating changes the resistance, making the results less reliable.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying heating has no effect on resistance.",
      "Avoid: Only giving safety without linking to results.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Circuit safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-practical-skills-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "A student measures the time for a ball to roll down a ramp using a stopwatch. Explain why this method may have a large uncertainty and suggest an improvement.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Human reaction time affects starting and stopping the stopwatch",
        keywords: [["reaction time"]],
      },
      {
        point: "The time measured may be short, so reaction time is a large percentage uncertainty",
        keywords: [["reaction time", "uncertainty", "short time"]],
      },
      {
        point: "Use light gates connected to a data logger",
        keywords: [["light gates", "data logger"]],
      },
      {
        point: "Repeat readings and calculate a mean",
        keywords: [["mean"]],
      },
    ],
    examinerKeywords: [
      "reaction time",
      "uncertainty",
      "short time",
      "light gates",
      "data logger",
      "mean",
    ],
    modelAnswer:
      "The time may be short, so human reaction time is a large percentage of the reading. The student should use light gates and a data logger, and repeat readings to calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Only saying the student should be faster.",
      "Avoid: Not identifying reaction time as the main uncertainty.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Method improvement. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A cyclist travels 1.2 km in 4.0 minutes. Calculate the average speed in m/s.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert distance: 1.2 km = 1200 m",
        keywords: [["distance", "m/s"]],
      },
      {
        point: "Convert time: 4.0 minutes = 240 s",
        keywords: [["time", "m/s"]],
      },
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 1200 / 240 = 5.0 m/s",
        keywords: [["speed", "m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "conversion", "m/s"],
    modelAnswer: "1.2 km = 1200 m and 4.0 minutes = 240 s. speed = 1200 / 240 = 5.0 m/s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using 4.0 s instead of 240 s.", "Avoid: Using 1.2 m instead of 1200 m."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Motion. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a gas exerts pressure on the walls of its container.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gas particles move randomly in all directions",
        keywords: [["gas particles", "random motion"]],
      },
      {
        point: "They collide with the container walls",
        keywords: [["they", "collide", "container"]],
      },
      {
        point: "The collisions exert a force on the walls",
        keywords: [["collisions", "force"]],
      },
      {
        point: "Pressure is force per unit area",
        keywords: [["force", "pressure"]],
      },
    ],
    examinerKeywords: ["gas particles", "random motion", "collisions", "force", "pressure"],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls. These collisions exert a force on the walls, and the force per unit area produces pressure.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying pressure is caused by particles sticking to the walls.",
      "Avoid: Not mentioning collisions.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal physics. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
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
    hints: ["Avoid: Dividing wavelength by frequency.", "Avoid: Giving the answer in Hz."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Waves. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resistor has current 0.40 A and resistance 15 Ω. Calculate the potential difference across it.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Substitution: voltage = 0.40 × 15",
        keywords: [["voltage", "v"]],
      },
      {
        point: "Answer: 6.0 V",
        keywords: [["v"]],
      },
    ],
    examinerKeywords: ["voltage", "current", "resistance", "potential difference", "V"],
    modelAnswer: "V = IR = 0.40 × 15 = 6.0 V.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing resistance by current.", "Avoid: Writing Ω as the unit."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electricity. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe the changes to proton number and nucleon number when a nucleus emits an alpha particle.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The proton number decreases by 2",
        keywords: [["proton number", "decreases"]],
      },
      {
        point: "The nucleon number decreases by 4",
        keywords: [["nucleon number", "decreases"]],
      },
    ],
    examinerKeywords: ["alpha decay", "proton number", "nucleon number", "decreases"],
    modelAnswer: "The proton number decreases by 2 and the nucleon number decreases by 4.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the nucleon number stays the same.",
      "Avoid: Confusing alpha decay with beta decay.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nuclear physics. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why redshift of distant galaxies supports the expanding Universe model.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Light from distant galaxies is shifted to longer wavelengths",
        keywords: [["longer wavelength", "distant galaxies"]],
      },
      {
        point: "This shows the galaxies are moving away",
        keywords: [["moving away"]],
      },
      {
        point: "More distant galaxies usually have greater redshift",
        keywords: [["redshift", "distant galaxies"]],
      },
      {
        point: "This supports the idea that space is expanding",
        keywords: [["expanding universe"]],
      },
    ],
    examinerKeywords: [
      "redshift",
      "longer wavelength",
      "moving away",
      "distant galaxies",
      "expanding Universe",
    ],
    modelAnswer:
      "Redshift means light from distant galaxies has longer wavelength, showing they are moving away. More distant galaxies have greater redshift, supporting the idea that the Universe is expanding.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying redshift means galaxies move towards us.",
      "Avoid: Not linking redshift to wavelength.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Space physics. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 12 N acts at a perpendicular distance of 0.50 m from a pivot. Calculate the moment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: moment = 12 × 0.50",
        keywords: [["moment", "n m"]],
      },
      {
        point: "Answer: 6.0 N m",
        keywords: [["n m"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 12 × 0.50 = 6.0 N m.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using cm without conversion.",
      "Avoid: Forgetting the distance must be perpendicular.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Moments. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A machine has useful output energy 180 J and total input energy 600 J. Calculate the efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output", "input energy"]],
      },
      {
        point: "Substitution: efficiency = 180 / 600 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 30%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "input energy", "percentage"],
    modelAnswer: "efficiency = 180 / 600 × 100 = 30%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy instead of useful energy.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why convection cannot occur in a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Convection requires bulk movement of particles",
        keywords: [["convection", "bulk movement"]],
      },
      {
        point: "Particles in a solid are fixed in position and only vibrate",
        keywords: [["solid", "fixed positions", "vibrate"]],
      },
      {
        point: "Therefore particles cannot flow to transfer thermal energy by convection",
        keywords: [["convection"]],
      },
    ],
    examinerKeywords: ["convection", "bulk movement", "solid", "fixed positions", "vibrate"],
    modelAnswer:
      "Convection needs particles to move in bulk. In a solid, particles are fixed in position and only vibrate, so they cannot flow and form convection currents.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying solids have no particles.",
      "Avoid: Saying convection is the main transfer method in solids.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal transfer. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Electromagnetic spectrum. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two ways to increase the strength of an electromagnet.",
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
      "Cambridge IGCSE Physics 0625: Magnetism. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has a count rate of 480 counts per minute. After two half-lives, calculate the count rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "After one half-life: 480 / 2 = 240 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "After two half-lives: 240 / 2 = 120 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "Answer: 120 counts per minute",
        keywords: [["count rate", "counts per minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "The count rate halves twice: 480 → 240 → 120 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Dividing by 2 only once.", "Avoid: Subtracting a fixed amount."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Half-life. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A liquid has mass 90 g and volume 75 cm³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 90 / 75",
        keywords: [["density"]],
      },
      {
        point: "Answer: 1.2 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 90 / 75 = 1.2 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying mass by volume.", "Avoid: Using cm² instead of cm³."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Density. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
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
        point: "One side of the wavefront changes speed before the other",
        keywords: [["speed changes", "wavefront"]],
      },
      {
        point: "The ray changes direction towards the normal",
        keywords: [["normal"]],
      },
    ],
    examinerKeywords: ["refraction", "speed changes", "glass", "wavefront", "normal"],
    modelAnswer:
      "Light slows down when it enters glass from air. Since it enters at an angle, one side of the wavefront slows first and the ray bends towards the normal.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying light bends because it loses energy.",
      "Avoid: Saying it bends away from the normal when entering glass.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Refraction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A motor transfers 2400 J of energy in 8.0 s. Calculate the power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 2400 / 8.0",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 300 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "W"],
    modelAnswer: "power = 2400 / 8.0 = 300 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Giving the unit as J."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Power. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 100 turns on the primary coil and 500 turns on the secondary coil. The primary voltage is 6.0 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["turns ratio", "primary voltage", "secondary voltage"]],
      },
      {
        point: "Substitution: Vs / 6.0 = 500 / 100",
        keywords: [["500", "100"]],
      },
      {
        point: "Vs = 6.0 × 5",
        keywords: [["mark point"]],
      },
      {
        point: "Answer: 30 V",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["transformer", "turns ratio", "primary voltage", "secondary voltage"],
    modelAnswer: "Vs / Vp = Ns / Np. Vs / 6.0 = 500 / 100 = 5, so Vs = 30 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using the turns ratio upside down.", "Avoid: Forgetting the unit V."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Transformer. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.50 kg ball moves at 6.0 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.50 × 6.0",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 3.0 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.50 × 6.0 = 3.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing the unit as N.", "Avoid: Dividing velocity by mass."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Momentum. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Compare",
    questionText:
      "Compare the final stage of a Sun-like star with the final stage of a very massive star.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A Sun-like star becomes a red giant after the main sequence",
        keywords: [["sun-like star"]],
      },
      {
        point: "It ends as a white dwarf",
        keywords: [["white dwarf"]],
      },
      {
        point: "A very massive star becomes a red supergiant and explodes as a supernova",
        keywords: [["massive star", "supernova"]],
      },
      {
        point: "It may end as a neutron star or black hole",
        keywords: [["neutron star", "black hole"]],
      },
    ],
    examinerKeywords: [
      "Sun-like star",
      "white dwarf",
      "massive star",
      "supernova",
      "neutron star",
      "black hole",
    ],
    modelAnswer:
      "A Sun-like star becomes a red giant and eventually a white dwarf. A very massive star becomes a red supergiant, explodes as a supernova and may form a neutron star or black hole.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying the Sun will become a black hole.",
      "Avoid: Forgetting the supernova stage for massive stars.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Stellar evolution. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Electrical safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper34-mixed-mock-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-3-4-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a machine is never 100% efficient in practice.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Some energy is transferred to non-useful stores",
        keywords: [["some", "energy", "transferred"]],
      },
      {
        point: "Energy may be dissipated by friction, heating or sound",
        keywords: [["dissipated", "friction"]],
      },
      {
        point: "Useful output energy is less than total input energy",
        keywords: [["useful", "output", "energy"]],
      },
    ],
    examinerKeywords: ["efficiency", "wasted energy", "dissipated", "friction", "thermal energy"],
    modelAnswer:
      "Some input energy is always dissipated to the surroundings, for example by friction as thermal energy or sound. Therefore the useful output energy is less than the total input energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Not identifying wasted energy transfers.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Synoptic energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student measures the mass of a measuring cylinder and liquid as 156 g. The empty measuring cylinder has mass 76 g. The liquid volume is 100 cm³. Calculate the density of the liquid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of liquid = 156 - 76 = 80 g",
        keywords: [["mass by subtraction", "g/cm³"]],
      },
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass by subtraction", "volume"]],
      },
      {
        point: "Substitution: density = 80 / 100",
        keywords: [["density"]],
      },
      {
        point: "Answer: 0.80 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass by subtraction", "volume", "g/cm³"],
    modelAnswer: "Mass of liquid = 156 - 76 = 80 g. density = 80 / 100 = 0.80 g/cm³.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using 156 g as the liquid mass.",
      "Avoid: Forgetting to subtract the empty cylinder mass.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Density practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to use a measuring cylinder to measure the volume of an irregular stone.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Add water to the measuring cylinder and record the initial volume",
        keywords: [["measuring cylinder", "initial volume"]],
      },
      {
        point: "Lower the stone fully into the water",
        keywords: [["lower", "stone", "fully"]],
      },
      {
        point: "Record the final volume",
        keywords: [["final volume"]],
      },
      {
        point: "Volume of stone = final volume - initial volume",
        keywords: [["initial volume", "final volume"]],
      },
    ],
    examinerKeywords: ["measuring cylinder", "initial volume", "final volume", "displacement"],
    modelAnswer:
      "Record the initial water volume in a measuring cylinder. Lower the stone fully into the water and record the final volume. The difference between the two volumes is the volume of the stone.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Not fully submerging the stone.",
      "Avoid: Using the final water level as the stone volume.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Volume measurement. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A spring has original length 8.0 cm. Its length is 11.2 cm when a load is added. Calculate the extension.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: extension = loaded length - original length",
        keywords: [["extension", "loaded length", "original length"]],
      },
      {
        point: "Substitution: extension = 11.2 - 8.0",
        keywords: [["extension"]],
      },
      {
        point: "Answer: 3.2 cm",
        keywords: [["cm"]],
      },
    ],
    examinerKeywords: ["extension", "loaded length", "original length", "cm"],
    modelAnswer: "extension = 11.2 - 8.0 = 3.2 cm.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using loaded length as extension.", "Avoid: Subtracting in the wrong order."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Spring practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A force-extension graph is a straight line through the origin. Explain what this shows.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Force is directly proportional to extension",
        keywords: [["force", "extension", "directly proportional"]],
      },
      {
        point: "The spring obeys Hooke's law in this region",
        keywords: [["hooke's law"]],
      },
      {
        point: "The spring has not exceeded its limit of proportionality",
        keywords: [["limit of proportionality"]],
      },
    ],
    examinerKeywords: [
      "force",
      "extension",
      "directly proportional",
      "Hooke's law",
      "limit of proportionality",
    ],
    modelAnswer:
      "A straight line through the origin shows force is directly proportional to extension, so the spring obeys Hooke's law in this region.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the spring has no extension.",
      "Avoid: Not mentioning direct proportionality.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Spring graph. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A pendulum completes 20 oscillations in 32.0 s. Calculate the period of the pendulum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: period = total time / number of oscillations",
        keywords: [["period", "oscillations", "time"]],
      },
      {
        point: "Substitution: period = 32.0 / 20",
        keywords: [["period", "s"]],
      },
      {
        point: "Answer: 1.60 s",
        keywords: [["s"]],
      },
    ],
    examinerKeywords: ["pendulum", "period", "oscillations", "time", "s"],
    modelAnswer: "period = 32.0 / 20 = 1.60 s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using 20 / 32.0.", "Avoid: Forgetting the unit s."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pendulum practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why timing 20 oscillations gives a more reliable value for the period than timing one oscillation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Timing many oscillations gives a larger measured time",
        keywords: [["oscillations"]],
      },
      {
        point: "Reaction time uncertainty is a smaller percentage of the total time",
        keywords: [["reaction time", "percentage uncertainty"]],
      },
      {
        point: "The period is found by dividing the total time by 20",
        keywords: [["period"]],
      },
    ],
    examinerKeywords: [
      "oscillations",
      "period",
      "reaction time",
      "percentage uncertainty",
      "divide",
    ],
    modelAnswer:
      "Timing 20 oscillations gives a larger total time, so reaction-time uncertainty is a smaller percentage. The period is found by dividing the total time by 20.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the pendulum period changes after 20 oscillations.",
      "Avoid: Forgetting to divide by 20.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pendulum method. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A beaker of hot water cools from 82 °C to 70 °C in 6.0 minutes. Calculate the average rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Temperature change = 82 - 70 = 12 °C",
        keywords: [["temperature change", "°c/min"]],
      },
      {
        point: "Formula: rate of cooling = temperature change / time",
        keywords: [["cooling", "temperature change", "time"]],
      },
      {
        point: "Substitution: rate = 12 / 6.0",
        keywords: [["rate"]],
      },
      {
        point: "Answer: 2.0 °C/min",
        keywords: [["°c/min"]],
      },
    ],
    examinerKeywords: ["cooling", "temperature change", "time", "rate", "°C/min"],
    modelAnswer: "Temperature change = 12 °C. Rate of cooling = 12 / 6.0 = 2.0 °C/min.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final temperature only.", "Avoid: Forgetting the unit °C/min."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A cooling curve becomes less steep as time increases. Explain what this shows about the rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The gradient of a temperature-time graph represents rate of temperature change",
        keywords: [["gradient", "rate of cooling", "temperature difference"]],
      },
      {
        point: "A less steep gradient means the rate of cooling decreases",
        keywords: [["cooling curve", "gradient", "rate of cooling"]],
      },
      {
        point: "The temperature difference between the water and surroundings becomes smaller",
        keywords: [["temperature difference"]],
      },
    ],
    examinerKeywords: ["cooling curve", "gradient", "rate of cooling", "temperature difference"],
    modelAnswer:
      "The gradient shows the rate of cooling. As the curve becomes less steep, the rate of cooling decreases because the temperature difference between the water and surroundings is smaller.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying less steep means faster cooling.",
      "Avoid: Not linking gradient to rate.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Cooling graph. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A resistor has potential difference 3.0 V and current 0.15 A. Calculate its resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["resistance", "voltage", "current"]],
      },
      {
        point: "Rearrangement: resistance = voltage / current",
        keywords: [["resistance", "voltage", "current"]],
      },
      {
        point: "Substitution: resistance = 3.0 / 0.15",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "voltage", "current", "Ω"],
    modelAnswer: "R = V / I = 3.0 / 0.15 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Giving the unit as V."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resistance practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "State",
    questionText:
      "State two control variables when investigating how the resistance of a wire depends on its length.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Keep the wire material constant",
        keywords: [["material"]],
      },
      {
        point:
          "Keep the wire diameter or thickness constant; temperature should also be kept constant",
        keywords: [["diameter", "temperature"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "material",
      "diameter",
      "temperature",
      "control variable",
    ],
    modelAnswer: "Keep the material of the wire and the diameter of the wire constant.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying length should be kept constant when length is the independent variable.",
      "Avoid: Not naming specific variables.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Circuit practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to measure the angle of incidence and angle of reflection for a plane mirror.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Draw the mirror line and normal at the point where the ray hits the mirror",
        keywords: [["normal"]],
      },
      {
        point: "Use a ray box to shine an incident ray at the mirror",
        keywords: [["incident ray"]],
      },
      {
        point: "Mark and draw the incident and reflected rays",
        keywords: [["incident ray", "reflected ray"]],
      },
      {
        point: "Measure both angles from the normal using a protractor",
        keywords: [["normal", "protractor"]],
      },
    ],
    examinerKeywords: ["plane mirror", "normal", "incident ray", "reflected ray", "protractor"],
    modelAnswer:
      "Draw the mirror line and a normal at the point of incidence. Shine a ray at the mirror, mark the incident and reflected rays, then measure both angles from the normal using a protractor.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Not drawing the normal at 90°.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Light practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText: "Suggest why a ray-tracing experiment should use a thin, sharp ray of light.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A thin ray makes the path of the ray easier to mark accurately",
        keywords: [["thin ray"]],
      },
      {
        point: "It reduces uncertainty in measuring angles",
        keywords: [["angles", "uncertainty"]],
      },
    ],
    examinerKeywords: ["thin ray", "sharp ray", "accuracy", "angles", "uncertainty"],
    modelAnswer:
      "A thin, sharp ray makes the light path easier to mark accurately and reduces uncertainty when measuring angles.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying it makes the light travel faster.",
      "Avoid: Not linking ray thickness to measurement uncertainty.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Refraction practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A straight-line graph has points on the line at (1.0, 2.5) and (5.0, 10.5). Calculate the gradient.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: gradient = change in y / change in x",
        keywords: [["gradient", "change in y", "change in x"]],
      },
      {
        point: "Substitution: gradient = (10.5 - 2.5) / (5.0 - 1.0)",
        keywords: [["gradient"]],
      },
      {
        point: "Answer: 2.0",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["gradient", "change in y", "change in x", "line"],
    modelAnswer: "gradient = (10.5 - 2.5) / (5.0 - 1.0) = 8.0 / 4.0 = 2.0.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Using inconsistent subtraction order.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Graph gradient. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A ripple tank produces 10 waves in 5.0 s. The wavelength is 0.040 m. Calculate the wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "wave speed", "m/s"]],
      },
      {
        point: "Substitution: frequency = 10 / 5.0 = 2.0 Hz",
        keywords: [["frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["frequency", "wavelength", "wave speed"]],
      },
      {
        point: "Substitution: wave speed = 2.0 × 0.040",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 0.080 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["ripple tank", "frequency", "wavelength", "wave speed", "m/s"],
    modelAnswer: "frequency = 10 / 5.0 = 2.0 Hz. wave speed = 2.0 × 0.040 = 0.080 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: ["Avoid: Using 5.0 / 10 for frequency.", "Avoid: Giving the wave speed in Hz."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Wave practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to use plotting compasses to show the magnetic field around a bar magnet.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Place the bar magnet on paper and draw around it",
        keywords: [["bar magnet"]],
      },
      {
        point: "Place a plotting compass near the magnet and mark the direction of the needle",
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
      "Place the magnet on paper and draw around it. Put a plotting compass near the magnet and mark the needle direction. Repeat at many positions and join the marks to draw field lines with arrows from north to south outside the magnet.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Drawing field lines without using compass directions.",
      "Avoid: Putting arrows from south to north outside the magnet.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Magnetism practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure corrected count rate from a radioactive source.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure background count rate without the source",
        keywords: [["background count"]],
      },
      {
        point: "Place the source a fixed distance from the detector",
        keywords: [["detector", "fixed distance"]],
      },
      {
        point: "Measure the count for a known time",
        keywords: [["measure", "count", "known"]],
      },
      {
        point: "Calculate measured count rate and subtract background count rate",
        keywords: [["background count"]],
      },
      {
        point: "Use tongs, shielding, distance and short exposure time for safety",
        keywords: [["safety"]],
      },
    ],
    examinerKeywords: [
      "background count",
      "corrected count rate",
      "detector",
      "fixed distance",
      "safety",
    ],
    modelAnswer:
      "Measure background count rate first. Place the source a fixed distance from the detector and measure counts for a known time. Calculate count rate and subtract background. Use tongs, shielding, distance and short exposure time.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Adding background count.",
      "Avoid: Changing the source-detector distance.",
      "Avoid: Handling the source directly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radiation practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A length is measured as 40.0 cm with uncertainty ±0.2 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage uncertainty", "uncertainty", "measured value"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.2 / 40.0 × 100",
        keywords: [["percentage uncertainty", "uncertainty", "percentage"]],
      },
      {
        point: "Answer: 0.5%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.2 / 40.0 × 100 = 0.5%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Uncertainty. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student records times of 2.1 s, 2.0 s, 2.2 s and 3.8 s. Identify the anomaly and calculate the mean excluding it.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The anomaly is 3.8 s",
        keywords: [["anomaly", "s"]],
      },
      {
        point: "Formula: mean = sum of valid readings / number of valid readings",
        keywords: [["mean", "s"]],
      },
      {
        point: "Substitution: mean = (2.1 + 2.0 + 2.2) / 3",
        keywords: [["mean", "s"]],
      },
      {
        point: "Answer: 2.1 s",
        keywords: [["s"]],
      },
    ],
    examinerKeywords: ["anomaly", "mean", "exclude", "repeat readings", "s"],
    modelAnswer: "The anomaly is 3.8 s. Mean = (2.1 + 2.0 + 2.2) / 3 = 6.3 / 3 = 2.1 s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Including the anomaly in the mean.",
      "Avoid: Dividing by 4 after excluding the anomaly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Anomaly and mean. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to compare the effectiveness of two materials as thermal insulators.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes identical beakers, hot water, thermometers, stopwatch and insulating materials",
        keywords: [["hot water safety"]],
      },
      {
        point: "Independent variable is type of insulating material",
        keywords: [["independent", "variable", "type"]],
      },
      {
        point: "Dependent variable is temperature drop or rate of cooling",
        keywords: [["temperature drop", "cooling curves"]],
      },
      {
        point:
          "Control variables include water volume, starting temperature, beaker type and insulation thickness",
        keywords: [["temperature drop", "control variables"]],
      },
      {
        point: "Record temperature at regular time intervals and repeat for each material",
        keywords: [["temperature drop", "repeat"]],
      },
      {
        point: "Calculate mean temperature drop or plot cooling curves; handle hot water safely",
        keywords: [["temperature drop", "cooling curves", "hot water safety"]],
      },
    ],
    examinerKeywords: [
      "thermal insulation",
      "temperature drop",
      "control variables",
      "repeat",
      "cooling curves",
      "hot water safety",
    ],
    modelAnswer:
      "Wrap identical beakers with equal thicknesses of the two materials. Add the same volume of hot water at the same starting temperature. Record temperature at regular time intervals using a stopwatch. Repeat for each material and compare mean temperature drops or cooling curves. Handle hot water carefully.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing both material and thickness.",
      "Avoid: Using different starting temperatures.",
      "Avoid: Only taking one final temperature reading.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Planning investigation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-paper56-practical-mock-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "paper-5-6-practical",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student measures the density of a small irregular stone using a measuring cylinder. Suggest two sources of uncertainty and how each could be reduced.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Uncertainty from reading water level can be reduced by reading the bottom of the meniscus at eye level",
        keywords: [["uncertainty", "meniscus", "eye level"]],
      },
      {
        point:
          "Small volume change can be improved by using a narrower measuring cylinder with smaller divisions",
        keywords: [["small", "volume", "change"]],
      },
      {
        point: "Air bubbles can be reduced by fully wetting the stone or gently tapping it",
        keywords: [["air bubbles"]],
      },
      {
        point: "Water splashing can be reduced by lowering the stone carefully using thread",
        keywords: [["water", "splashing", "can"]],
      },
    ],
    examinerKeywords: [
      "density",
      "irregular stone",
      "uncertainty",
      "meniscus",
      "eye level",
      "air bubbles",
    ],
    modelAnswer:
      "Reading the water level can cause uncertainty, so read the bottom of the meniscus at eye level. A small volume change gives high percentage uncertainty, so use a narrower measuring cylinder with smaller divisions. Air bubbles can be reduced by lowering the stone carefully.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only saying human error.",
      "Avoid: Not explaining how to reduce the uncertainty.",
      "Avoid: Forgetting displacement is used.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Evaluation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "2.4 km = 2400 m. speed = 2400 / 80 = 30 m/s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using 2.4 directly without converting.",
      "Avoid: Multiplying distance by time.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Speed. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A car accelerates from 6.0 m/s to 24 m/s in 9.0 s. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
      {
        point: "Substitution: acceleration = (24 - 6.0) / 9.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 2.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (24 - 6.0) / 9.0 = 18 / 9.0 = 2.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final velocity only.", "Avoid: Writing m/s instead of m/s²."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Acceleration. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A resultant force of 84 N acts on a 12 kg object. Calculate its acceleration.",
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
        point: "Substitution: acceleration = 84 / 12",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 7.0 m/s²",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "resultant force"],
    modelAnswer: "F = ma, so a = 84 / 12 = 7.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by mass.", "Avoid: Forgetting that force must be resultant."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Force. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An object has a mass of 18 kg. The gravitational field strength is 9.8 N/kg. Calculate its weight.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: weight = 18 × 9.8",
        keywords: [["weight", "n"]],
      },
      {
        point: "Answer: 176.4 N, or 176 N to 3 significant figures",
        keywords: [["n", "significant figures"]],
      },
    ],
    examinerKeywords: [
      "weight",
      "mass",
      "gravitational field strength",
      "N",
      "significant figures",
    ],
    modelAnswer:
      "weight = mass × gravitational field strength = 18 × 9.8 = 176.4 N, which is 176 N to 3 significant figures.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Weight. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.20 kg ball moves at 15 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.20 × 15",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 3.0 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.20 × 15 = 3.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing N as the unit.", "Avoid: Dividing velocity by mass."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Momentum. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 140 N moves a box 3.5 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Substitution: work done = 140 × 3.5",
        keywords: [["work done"]],
      },
      {
        point: "Answer: 490 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "J"],
    modelAnswer: "work done = force × distance = 140 × 3.5 = 490 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using time instead of distance.", "Avoid: Giving the answer in N."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Work done. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 4.0 kg object moves at 5.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 1/2 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: KE = 0.5 × 4.0 × 5.0²",
        keywords: [["mark point"]],
      },
      {
        point: "Calculation: KE = 0.5 × 4.0 × 25",
        keywords: [["calculation"]],
      },
      {
        point: "Answer: 50 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "J"],
    modelAnswer: "KE = 1/2mv² = 0.5 × 4.0 × 5.0² = 50 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square the speed.",
      "Avoid: Using momentum instead of kinetic energy.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Kinetic energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 25 kg object is raised by 2.0 m. The gravitational field strength is 10 N/kg. Calculate the increase in gravitational potential energy.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Formula: gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "height"]],
      },
      {
        point: "Substitution: GPE = 25 × 10 × 2.0",
        keywords: [["gpe"]],
      },
      {
        point: "Answer: 500 J",
        keywords: [["j"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: [
      "gravitational potential energy",
      "mass",
      "height",
      "gravitational field strength",
      "J",
    ],
    modelAnswer: "GPE = mgh = 25 × 10 × 2.0 = 500 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Forgetting gravitational field strength.", "Avoid: Giving the answer in N."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gravitational potential energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A crane transfers 18000 J of energy in 45 s. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 18000 / 45",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 400 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "W"],
    modelAnswer: "power = energy transferred / time = 18000 / 45 = 400 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Writing J as the unit."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Power. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A motor has an input power of 500 W and useful output power of 375 W. Calculate the efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output power / input power × 100",
        keywords: [["efficiency", "useful output power", "input power"]],
      },
      {
        point: "Substitution: efficiency = 375 / 500 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 75%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output power", "input power", "percentage"],
    modelAnswer: "efficiency = 375 / 500 × 100 = 75%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Forgetting to multiply by 100.", "Avoid: Using wasted power as useful power."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Efficiency. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.25 A flows for 4.0 minutes. Calculate the charge transferred.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert time: 4.0 minutes = 240 s",
        keywords: [["time", "c"]],
      },
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.25 × 240",
        keywords: [["charge", "c"]],
      },
      {
        point: "Answer: 60 C",
        keywords: [["c"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "seconds", "C"],
    modelAnswer: "4.0 minutes = 240 s. charge = current × time = 0.25 × 240 = 60 C.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using 4.0 s instead of 240 s.", "Avoid: Writing A as the unit for charge."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Charge. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A component has potential difference 9.0 V and current 0.45 A. Calculate the resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["resistance", "voltage", "current"]],
      },
      {
        point: "Rearrangement: resistance = voltage / current",
        keywords: [["resistance", "voltage", "current"]],
      },
      {
        point: "Substitution: resistance = 9.0 / 0.45",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "voltage", "current", "Ω"],
    modelAnswer: "R = V / I = 9.0 / 0.45 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Giving the answer in V."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resistance. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A heater has current 3.0 A and potential difference 230 V. Calculate the electrical power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: electrical power = current × voltage",
        keywords: [["electrical power", "current", "voltage"]],
      },
      {
        point: "Substitution: power = 3.0 × 230",
        keywords: [["w"]],
      },
      {
        point: "Answer: 690 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["electrical power", "current", "voltage", "W"],
    modelAnswer: "power = current × voltage = 3.0 × 230 = 690 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using resistance instead of voltage.", "Avoid: Giving the unit as J."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical power. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 1200 W kettle is used for 150 s. Calculate the energy transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy transferred", "power", "time"]],
      },
      {
        point: "Substitution: energy = 1200 × 150",
        keywords: [["energy transferred"]],
      },
      {
        point: "Answer: 180000 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "J"],
    modelAnswer: "energy = power × time = 1200 × 150 = 180000 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing power by time.", "Avoid: Writing W as the unit for energy."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Energy transferred electrically. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A metal object has mass 1.6 kg and volume 2.0 × 10⁻⁴ m³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 1.6 / 2.0 × 10⁻⁴",
        keywords: [["density"]],
      },
      {
        point: "Answer: 8000 kg/m³",
        keywords: [["kg/m³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "kg/m³"],
    modelAnswer: "density = mass / volume = 1.6 / 2.0 × 10⁻⁴ = 8000 kg/m³.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Typing standard form incorrectly into a calculator.",
      "Avoid: Giving kg/m² instead of kg/m³.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Density. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A force of 300 N acts normally on an area of 0.12 m². Calculate the pressure.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: pressure = force / area",
        keywords: [["pressure", "force", "area"]],
      },
      {
        point: "Substitution: pressure = 300 / 0.12",
        keywords: [["pressure"]],
      },
      {
        point: "Answer: 2500 Pa",
        keywords: [["pa"]],
      },
    ],
    examinerKeywords: ["pressure", "force", "area", "Pa"],
    modelAnswer: "pressure = force / area = 300 / 0.12 = 2500 Pa.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by area.", "Avoid: Writing N as the unit."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pressure. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.50 kg block is heated with 6000 J of energy. Its temperature rises by 30 °C. Calculate its specific heat capacity.",
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
        point: "Substitution: c = 6000 / (0.50 × 30)",
        keywords: [["6000"]],
      },
      {
        point: "c = 6000 / 15",
        keywords: [["6000"]],
      },
      {
        point: "Answer: 400 J/kg °C",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature change", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = E / mΔT = 6000 / (0.50 × 30) = 6000 / 15 = 400 J/kg °C.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Forgetting brackets around mass × temperature change.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Specific heat capacity. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A sound wave has frequency 680 Hz and wavelength 0.50 m. Calculate the speed of sound.",
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
    hints: ["Avoid: Dividing wavelength by frequency.", "Avoid: Giving the unit as Hz."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Wave speed. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has activity 960 Bq. After 18 minutes its activity is 120 Bq. Calculate the half-life.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Activity halves from 960 to 480 to 240 to 120",
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
      "960 halves to 480, then 240, then 120, so 3 half-lives have passed. Half-life = 18 / 3 = 6 minutes.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Dividing 960 by 120 and saying 8 minutes.",
      "Avoid: Counting the number of halvings incorrectly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Half-life. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-calculation-heavy-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has primary voltage 240 V and secondary voltage 12 V. The primary coil has 800 turns. Calculate the number of turns on the secondary coil.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary voltage", "secondary voltage", "turns ratio"]],
      },
      {
        point: "Substitution: 12 / 240 = Ns / 800",
        keywords: [["240", "800"]],
      },
      {
        point: "Ns = 800 × 12 / 240",
        keywords: [["800", "240"]],
      },
      {
        point: "Answer: 40 turns",
        keywords: [["turns ratio", "turns"]],
      },
    ],
    examinerKeywords: [
      "transformer",
      "primary voltage",
      "secondary voltage",
      "turns ratio",
      "turns",
    ],
    modelAnswer: "Vs / Vp = Ns / Np, so 12 / 240 = Ns / 800. Ns = 800 × 12 / 240 = 40 turns.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the ratio upside down.",
      "Avoid: Giving the answer in volts instead of turns.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Transformer. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        point: "Spreading the force over a larger area reduces pressure on the body",
        keywords: [["force", "pressure"]],
      },
      {
        point:
          "Crumple zones increase the time taken for the car to stop and absorb energy by deformation",
        keywords: [["crumple zone", "energy absorbed"]],
      },
    ],
    examinerKeywords: [
      "momentum",
      "stopping time",
      "force",
      "airbag",
      "pressure",
      "crumple zone",
      "energy absorbed",
    ],
    modelAnswer:
      "In a crash, the passenger's momentum changes to zero. Seat belts and airbags increase the stopping time, so the force is reduced. Airbags also spread the force over a larger area, reducing pressure. Crumple zones deform and increase the time taken for the car to stop, absorbing energy and reducing the force on passengers.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying safety features stop momentum from changing.",
      "Avoid: Not linking stopping time to reduced force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Car safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate the use of solar panels and fossil-fuel power stations for generating electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Solar panels use a renewable energy resource",
        keywords: [["solar panels", "renewable"]],
      },
      {
        point: "Solar panels produce no greenhouse gases during operation",
        keywords: [["solar panels"]],
      },
      {
        point: "Solar output depends on sunlight, weather and time of day",
        keywords: [["solar panels", "weather dependent"]],
      },
      {
        point: "Fossil-fuel power stations can provide electricity reliably when demand changes",
        keywords: [["fossil fuels"]],
      },
      {
        point: "Fossil fuels are non-renewable and release carbon dioxide when burned",
        keywords: [["fossil fuels", "renewable", "carbon dioxide"]],
      },
      {
        point: "A justified conclusion should compare reliability, pollution and sustainability",
        keywords: [["sustainability"]],
      },
    ],
    examinerKeywords: [
      "solar panels",
      "fossil fuels",
      "renewable",
      "carbon dioxide",
      "reliable",
      "weather dependent",
      "sustainability",
    ],
    modelAnswer:
      "Solar panels use a renewable source and produce no greenhouse gases during operation, but their output depends on sunlight, weather and time of day. Fossil-fuel power stations can generate electricity reliably when demand changes, but fossil fuels are non-renewable and release carbon dioxide. Overall, solar is more sustainable, but fossil fuels are more controllable unless storage or backup is available.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying solar panels work equally well at night.",
      "Avoid: Saying fossil fuels are renewable.",
      "Avoid: Only giving one side of the comparison.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Energy resources. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how a vacuum flask reduces thermal energy transfer from hot liquid to the surroundings.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "The vacuum between the walls reduces conduction because there are very few particles",
        keywords: [["vacuum flask", "conduction"]],
      },
      {
        point: "The vacuum prevents convection because particles cannot move in bulk",
        keywords: [["vacuum flask", "convection"]],
      },
      {
        point: "Shiny silvered surfaces reflect infrared radiation",
        keywords: [["infrared radiation", "silvered surface"]],
      },
      {
        point: "Shiny surfaces are poor emitters of thermal radiation",
        keywords: [["shiny", "surfaces", "are"]],
      },
      {
        point: "The stopper reduces convection and evaporation from the top",
        keywords: [["convection", "evaporation", "stopper"]],
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
      "stopper",
    ],
    modelAnswer:
      "The vacuum reduces conduction because there are very few particles and prevents convection because particles cannot move in bulk. The shiny silvered surfaces reflect infrared radiation and are poor emitters. The stopper reduces convection and evaporation from the top. These features reduce thermal energy transfer, keeping the liquid hot for longer.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying convection occurs through a vacuum.",
      "Avoid: Saying shiny surfaces are good emitters.",
      "Avoid: Only naming parts of the flask without explaining them.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal insulation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a fuse and an earth wire protect a user of a metal-cased appliance.",
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
        keywords: [["earth wire", "low resistance", "large current"]],
      },
      {
        point: "The large current causes the fuse to heat up and melt",
        keywords: [["fuse", "large current"]],
      },
      {
        point: "The fuse breaks the circuit and disconnects the supply",
        keywords: [["fuse"]],
      },
      {
        point: "This prevents the user receiving a large electric shock from the metal case",
        keywords: [["metal case", "large current", "electric shock"]],
      },
    ],
    examinerKeywords: [
      "fuse",
      "earth wire",
      "metal case",
      "live wire",
      "low resistance",
      "large current",
      "electric shock",
    ],
    modelAnswer:
      "If the live wire touches the metal case, the case could become live. The earth wire gives a low-resistance path to ground, so a large current flows. This melts the fuse, breaking the circuit and disconnecting the supply. The metal case is then much less likely to give the user an electric shock.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the earth wire carries current in normal use.",
      "Avoid: Saying the fuse reduces voltage slowly.",
      "Avoid: Not linking large current to the fuse melting.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["nuclear fission", "non-renewable"]],
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
      "non-renewable",
      "accident risk",
    ],
    modelAnswer:
      "Nuclear fission power stations can produce large amounts of reliable electricity and do not release carbon dioxide during normal operation. However, the fuel is non-renewable and radioactive waste must be stored safely for a long time. Accidents could release radioactive material. Overall, nuclear power is useful for reliable low-carbon electricity, but waste and safety risks must be managed carefully.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying nuclear power releases carbon dioxide during normal operation.",
      "Avoid: Ignoring radioactive waste.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nuclear power. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["coil", "magnetic field"]],
      },
      {
        point: "A motor transfers electrical energy to kinetic energy",
        keywords: [["electric motor", "motor effect", "energy transfer"]],
      },
      {
        point: "A generator uses electromagnetic induction",
        keywords: [["generator", "electromagnetic induction", "magnetic field"]],
      },
      {
        point: "A rotating coil in a magnetic field induces a potential difference",
        keywords: [["coil", "magnetic field"]],
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
      "magnetic field",
      "energy transfer",
    ],
    modelAnswer:
      "A motor uses the motor effect: a current-carrying coil in a magnetic field experiences forces and rotates, transferring electrical energy to kinetic energy. A generator uses electromagnetic induction: a coil is rotated in a magnetic field, inducing a potential difference and transferring kinetic energy to electrical energy.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying motors and generators are identical.",
      "Avoid: Confusing motor effect with induction.",
      "Avoid: Not comparing energy transfers.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Motors and generators. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["collisions", "pressure", "constant volume"]],
      },
    ],
    examinerKeywords: [
      "gas particles",
      "random motion",
      "collisions",
      "pressure",
      "temperature",
      "kinetic energy",
      "constant volume",
    ],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls, exerting forces that produce pressure. When temperature increases, the particles gain average kinetic energy and move faster. They collide with the walls more often and more forcefully, so the pressure increases because the volume is constant.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gas particles expand.",
      "Avoid: Not linking collisions to pressure.",
      "Avoid: Saying volume increases when the container is sealed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gas pressure. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Big Bang evidence. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["radiotherapy", "cancer"]],
      },
      {
        point: "Ionising radiation can damage healthy cells and DNA",
        keywords: [["ionising radiation", "dna damage"]],
      },
      {
        point: "Risks are reduced using shielding, short exposure times and controlled doses",
        keywords: [["shielding", "dose"]],
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
      "cancer",
      "DNA damage",
      "shielding",
      "dose",
    ],
    modelAnswer:
      "Ionising radiation is useful because X-rays and tracers can diagnose conditions, and radiotherapy can kill cancer cells. However, ionising radiation can damage healthy cells and DNA, increasing cancer risk. The risks are reduced by shielding, short exposure times and controlled doses. Overall, the benefits can outweigh the risks when exposure is carefully controlled.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying medical radiation is completely safe.",
      "Avoid: Only discussing imaging and not treatment.",
      "Avoid: Not giving a judgement.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radiation in medicine. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["ultrasound", "tissue boundary"]],
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
        keywords: [["x-rays", "tissue boundary", "bone"]],
      },
      {
        point: "X-rays give clear images of bones but can damage cells or DNA",
        keywords: [["x-rays", "bone", "dna damage"]],
      },
    ],
    examinerKeywords: [
      "ultrasound",
      "X-rays",
      "medical imaging",
      "reflection",
      "tissue boundary",
      "non-ionising",
      "ionising",
      "bone",
      "DNA damage",
    ],
    modelAnswer:
      "Ultrasound is high-frequency sound that reflects at tissue boundaries to form images. It is non-ionising, so it is useful for fetus scans. X-rays are ionising electromagnetic waves. They pass through soft tissue but are absorbed more by bone, so they give clear bone images. However, X-rays can damage cells or DNA, so exposure must be limited.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying ultrasound is ionising.",
      "Avoid: Saying X-rays are sound waves.",
      "Avoid: Only giving uses with no safety comparison.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Waves in medicine. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["main sequence", "neutron star", "black hole"]],
      },
    ],
    examinerKeywords: [
      "nebula",
      "protostar",
      "main sequence",
      "fusion",
      "red supergiant",
      "supernova",
      "neutron star",
      "black hole",
    ],
    modelAnswer:
      "A massive star forms when gas and dust in a nebula collapse under gravity to form a protostar. When fusion begins, it becomes a main sequence star. After hydrogen fuel runs low, it expands into a red supergiant and then explodes as a supernova. The remaining core becomes a neutron star or black hole.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying massive stars become white dwarfs.",
      "Avoid: Forgetting the supernova stage.",
      "Avoid: Not mentioning fusion in the main sequence.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Star life cycles. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why transformers are used when electrical energy is transmitted over long distances.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Step-up transformers increase the voltage before transmission",
        keywords: [["transformer", "step-up", "step-down"]],
      },
      {
        point: "For the same power transfer, a higher voltage means a lower current",
        keywords: [["high voltage", "low current"]],
      },
      {
        point: "A lower current reduces heating in transmission cables",
        keywords: [["low current", "heating", "transmission"]],
      },
      {
        point: "Less energy is dissipated to the surroundings",
        keywords: [["energy loss"]],
      },
      {
        point: "Step-down transformers reduce the voltage near consumers",
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
      "high voltage",
      "low current",
      "heating",
      "energy loss",
      "transmission",
    ],
    modelAnswer:
      "Step-up transformers increase the voltage before transmission. For the same power, a higher voltage means a lower current, so less energy is wasted as heating in the cables. Near consumers, step-down transformers reduce the voltage to a safer value suitable for homes.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Forgetting the step-down transformer.",
      "Avoid: Saying transformers work with direct current.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Transformer and transmission. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a submarine must be designed with a strong hull for deep water.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Pressure in a liquid increases with depth",
        keywords: [["pressure", "depth", "pressure difference"]],
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
        keywords: [["submarine", "pressure", "pressure difference"]],
      },
      {
        point: "There is a large pressure difference between outside and inside",
        keywords: [["pressure", "pressure difference"]],
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
      "pressure difference",
      "strong hull",
    ],
    modelAnswer:
      "Liquid pressure increases with depth because there is more water above the submarine. The weight of the water produces a larger force per unit area, and pressure acts in all directions. Deep underwater, the outside pressure is much greater than the inside pressure, so the submarine needs a strong hull to avoid being crushed.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying pressure only acts downward.",
      "Avoid: Saying pressure decreases with depth.",
      "Avoid: Not linking pressure to force per unit area.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pressure and design. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 5 / Paper 6",
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
        point: "Measure extension by subtracting the original length from the loaded length",
        keywords: [["extension"]],
      },
      {
        point: "Add loads gradually and avoid exceeding the limit of proportionality",
        keywords: [["limit of proportionality"]],
      },
      {
        point: "Repeat each load and calculate a mean extension",
        keywords: [["extension", "repeat", "mean"]],
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
      "repeat",
      "mean",
    ],
    modelAnswer:
      "The student should fix the ruler close to the spring and use a pointer to reduce parallax error. They should measure the original length and subtract it from each loaded length to find extension. Loads should be added gradually so the limit of proportionality is not exceeded. Repeating each reading and calculating a mean improves reliability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using total length instead of extension.",
      "Avoid: Ignoring the limit of proportionality.",
      "Avoid: Only saying repeat without explaining why.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Practical evaluation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["x-rays", "shielding", "dose"]],
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
      "DNA damage",
      "shielding",
      "dose",
    ],
    modelAnswer:
      "Ultraviolet can be used in fluorescent lamps and security marking, but it can damage skin cells. X-rays are useful for medical imaging because they pass through soft tissue but are absorbed more by bone. Gamma rays can sterilise equipment and treat cancer. X-rays and gamma rays are ionising and can damage DNA, so shielding, limited exposure time and controlled dose are needed.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying all electromagnetic waves are equally dangerous.",
      "Avoid: Giving uses without hazards.",
      "Avoid: Not mentioning ionisation or DNA damage.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electromagnetic radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        point: "If the line of action of the weight is outside the base, there is a turning effect",
        keywords: [["line of action", "weight", "base"]],
      },
      {
        point: "This turning effect can cause the bus to topple",
        keywords: [["turning effect", "topple"]],
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
      "topple",
    ],
    modelAnswer:
      "The weight of the bus acts through its centre of mass. A high centre of mass makes the bus less stable. When the bus turns quickly, the line of action of the weight may pass outside the base, producing a turning effect that can make the bus topple. A lower centre of mass or wider base would make it more stable.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying a high centre of mass makes the bus more stable.",
      "Avoid: Not mentioning the line of action of weight.",
      "Avoid: Ignoring the base area.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Forces and stability. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["sound"]],
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
      "sound",
      "efficiency",
    ],
    modelAnswer:
      "The useful output power raises the lift and passengers, increasing gravitational potential energy. Some input energy is dissipated as thermal energy due to friction and as sound, so useful output power is less than input power. Lubrication and better bearings can reduce friction, reducing wasted energy and increasing efficiency.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Saying efficiency can be greater than 100%.",
      "Avoid: Not identifying useful and wasted transfers.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Energy efficiency. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
    examinerKeywords: [
      "radioactive source",
      "tongs",
      "time",
      "distance",
      "shielding",
      "dose",
      "safety",
    ],
    modelAnswer:
      "A radioactive source should be handled with tongs to increase distance, and exposure time should be kept short. Shielding or a shielded container should be used when possible, and the source should be pointed away from people. It should never be touched directly. These precautions reduce radiation dose by using time, distance and shielding.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gloves alone fully protect the user.",
      "Avoid: Ignoring time, distance or shielding.",
      "Avoid: Suggesting direct handling.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radiation safety. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 3 / Paper 4",
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
    examinerKeywords: [
      "helmet",
      "momentum",
      "stopping time",
      "force",
      "area",
      "pressure",
      "deformation",
    ],
    modelAnswer:
      "In an impact, the head's momentum changes. The helmet increases the time taken for the head to stop, so the force is smaller for the same change in momentum. It also spreads the force over a larger area, reducing pressure on the skull. Some energy is dissipated as the helmet deforms.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the helmet prevents momentum changing.",
      "Avoid: Not linking stopping time to force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Momentum and collisions. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-high-mark-synoptic-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the thickness of insulation affects the rate of cooling of hot water.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes identical beakers, hot water, thermometers or temperature probes, stopwatch and insulation of different thicknesses",
        keywords: [["insulation thickness", "temperature"]],
      },
      {
        point: "Independent variable is insulation thickness",
        keywords: [["insulation thickness"]],
      },
      {
        point: "Dependent variable is temperature drop or rate of cooling",
        keywords: [["rate of cooling", "temperature", "cooling curve"]],
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
        keywords: [["temperature", "cooling curve"]],
      },
    ],
    examinerKeywords: [
      "insulation thickness",
      "rate of cooling",
      "temperature",
      "time",
      "control variables",
      "repeat",
      "cooling curve",
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
      "Cambridge IGCSE Physics 0625: Planning experiment. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["time", "multiply"]],
      },
      {
        point: "Answer: distance = speed × time",
        keywords: [["speed", "distance", "time"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "rearrange", "multiply"],
    modelAnswer: "speed = distance / time, so distance = speed × time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing distance = speed / time.", "Avoid: Forgetting to multiply by time."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Speed equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking acceleration, change in velocity and time.",
    marks: 1,
    markSchemePoints: [
      {
        point: "acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time"],
    modelAnswer: "acceleration = change in velocity / time.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Using final velocity instead of change in velocity.",
      "Avoid: Writing acceleration = time / change in velocity.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Acceleration equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "F = ma, so acceleration = force / mass.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing acceleration = mass / force.", "Avoid: Multiplying force by mass."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Force equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Weight equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Momentum equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "work done = force × distance, so force = work done / distance.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing force = work done × distance.",
      "Avoid: Dividing distance by work done.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Work done equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation for kinetic energy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "kinetic energy = 1/2 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "The speed must be squared",
        keywords: [["speed squared"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "1/2mv²"],
    modelAnswer: "kinetic energy = 1/2 × mass × speed².",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Forgetting to square the speed.",
      "Avoid: Writing kinetic energy = mass × speed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Kinetic energy equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Gravitational potential energy equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "power = energy transferred / time, so energy transferred = power × time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing energy = power / time.", "Avoid: Forgetting to multiply by time."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Power equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Avoid: Using wasted energy as the useful output.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Efficiency equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "Q = It, so current = charge / time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing current = charge × time.", "Avoid: Dividing time by charge."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Charge equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Ohm's law. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange electrical power = current × voltage to make voltage the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with power = current × voltage",
        keywords: [["current", "voltage"]],
      },
      {
        point: "Divide both sides by current",
        keywords: [["current"]],
      },
      {
        point: "Answer: voltage = power / current",
        keywords: [["current", "voltage"]],
      },
    ],
    examinerKeywords: ["electrical power", "current", "voltage", "rearrange"],
    modelAnswer: "P = IV, so voltage = power / current.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing voltage = power × current.", "Avoid: Dividing current by power."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical power equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "density = mass / volume, so mass = density × volume.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing mass = density / volume.", "Avoid: Forgetting to multiply by volume."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Density equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Pressure equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "E = mcΔT, so c = E / (mΔT).",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Forgetting brackets around mass × temperature change.",
      "Avoid: Writing c = E × m × ΔT.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Specific heat capacity equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
    modelAnswer: "v = fλ, so wavelength = wave speed / frequency.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Writing wavelength = wave speed × frequency.",
      "Avoid: Dividing frequency by wave speed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Wave equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Frequency equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
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
      "turns ratio",
    ],
    modelAnswer: "secondary voltage / primary voltage = secondary turns / primary turns.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Mixing primary voltage with secondary turns in the same ratio.",
      "Avoid: Writing the voltage ratio upside down without matching the turns ratio.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Transformer equation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-formula-equation-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A count rate falls from 960 counts per minute to 120 counts per minute. Determine the number of half-lives that have passed.",
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
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "960 halves to 480, then 240, then 120. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing 960 by 120 and saying 8 half-lives.",
      "Avoid: Subtracting a fixed amount each time.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Half-life. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student measures the time for a trolley to travel down a ramp. The readings are 1.42 s, 1.39 s, 1.41 s and 2.10 s. Identify the anomalous result and calculate the mean time excluding it.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The anomalous result is 2.10 s",
        keywords: [["anomalous result", "s"]],
      },
      {
        point: "Formula: mean = sum of valid readings / number of valid readings",
        keywords: [["mean", "s"]],
      },
      {
        point: "Substitution: mean = (1.42 + 1.39 + 1.41) / 3",
        keywords: [["mean", "s"]],
      },
      {
        point: "Answer: 1.41 s",
        keywords: [["s"]],
      },
    ],
    examinerKeywords: ["anomalous result", "mean", "exclude", "repeat readings", "s"],
    modelAnswer:
      "The anomalous result is 2.10 s. Mean = (1.42 + 1.39 + 1.41) / 3 = 4.22 / 3 = 1.41 s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Including 2.10 s in the mean.",
      "Avoid: Dividing by 4 after excluding the anomaly.",
      "Avoid: Identifying 1.39 s as the anomaly.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Mean and anomalies. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A length is measured as 32.0 cm with an uncertainty of ±0.2 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage uncertainty", "uncertainty", "measured value"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.2 / 32.0 × 100",
        keywords: [["percentage uncertainty", "uncertainty", "percentage"]],
      },
      {
        point: "Answer: 0.625%, or 0.63% to 2 significant figures",
        keywords: [["625", "significant", "figures"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer:
      "percentage uncertainty = 0.2 / 32.0 × 100 = 0.625%, which is 0.63% to 2 significant figures.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving off the percentage sign.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Percentage uncertainty. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A line of best fit passes through the points (2.0, 4.5) and (10.0, 20.5). Calculate the gradient.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: gradient = change in y / change in x",
        keywords: [["gradient", "change in y", "change in x"]],
      },
      {
        point: "Substitution: gradient = (20.5 - 4.5) / (10.0 - 2.0)",
        keywords: [["gradient"]],
      },
      {
        point: "Answer: 2.0",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["gradient", "line of best fit", "change in y", "change in x"],
    modelAnswer: "gradient = (20.5 - 4.5) / (10.0 - 2.0) = 16.0 / 8.0 = 2.0.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Using two plotted points that are not on the best-fit line.",
      "Avoid: Subtracting coordinates inconsistently.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Graph gradient. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student measures the mass of a beaker and liquid as 128 g. The empty beaker has mass 58 g. The liquid volume is 50 cm³. Calculate the density of the liquid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of liquid = 128 - 58 = 70 g",
        keywords: [["mass by subtraction", "g/cm³"]],
      },
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass by subtraction", "volume"]],
      },
      {
        point: "Substitution: density = 70 / 50",
        keywords: [["density"]],
      },
      {
        point: "Answer: 1.4 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass by subtraction", "volume", "g/cm³"],
    modelAnswer: "Mass of liquid = 128 - 58 = 70 g. Density = 70 / 50 = 1.4 g/cm³.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using 128 g as the liquid mass.",
      "Avoid: Multiplying mass by volume.",
      "Avoid: Forgetting the unit g/cm³.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Density data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A spring has an original length of 9.4 cm. When a load is added, its length is 13.1 cm. Calculate the extension in cm.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: extension = loaded length - original length",
        keywords: [["extension", "loaded length", "original length"]],
      },
      {
        point: "Substitution: extension = 13.1 - 9.4",
        keywords: [["extension"]],
      },
      {
        point: "Answer: 3.7 cm",
        keywords: [["cm"]],
      },
    ],
    examinerKeywords: ["extension", "loaded length", "original length", "cm"],
    modelAnswer: "extension = 13.1 - 9.4 = 3.7 cm.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using loaded length as extension.", "Avoid: Subtracting in the wrong order."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Extension data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
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
      "Avoid: Saying Hooke's law applies at all forces.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Hooke's law. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A pendulum completes 25 oscillations in 37.5 s. Calculate its period.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: period = total time / number of oscillations",
        keywords: [["period", "oscillations", "time"]],
      },
      {
        point: "Substitution: period = 37.5 / 25",
        keywords: [["period", "s"]],
      },
      {
        point: "Answer: 1.50 s",
        keywords: [["s"]],
      },
    ],
    examinerKeywords: ["period", "oscillations", "time", "pendulum", "s"],
    modelAnswer: "period = 37.5 / 25 = 1.50 s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Calculating 25 / 37.5.",
      "Avoid: Forgetting the unit s.",
      "Avoid: Using the time for all oscillations as the period.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pendulum data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why timing 25 oscillations gives a more reliable value of period than timing one oscillation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Timing more oscillations gives a larger measured time",
        keywords: [["oscillations"]],
      },
      {
        point: "Reaction-time uncertainty is a smaller percentage of the total time",
        keywords: [["reaction time", "percentage uncertainty"]],
      },
      {
        point: "The period is found by dividing the total time by 25",
        keywords: [["period"]],
      },
    ],
    examinerKeywords: [
      "pendulum",
      "oscillations",
      "period",
      "reaction time",
      "percentage uncertainty",
    ],
    modelAnswer:
      "Timing 25 oscillations gives a larger total time, so reaction-time uncertainty is a smaller percentage of the reading. The period is then found by dividing by 25.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the period changes when more oscillations are timed.",
      "Avoid: Not mentioning reaction time.",
      "Avoid: Forgetting to divide by the number of oscillations.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Pendulum reliability. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A resistor has a potential difference of 4.8 V across it and a current of 0.24 A through it. Calculate the resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["resistance", "current"]],
      },
      {
        point: "Rearrangement: resistance = voltage / current",
        keywords: [["resistance", "current"]],
      },
      {
        point: "Substitution: resistance = 4.8 / 0.24",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "potential difference", "current", "Ω"],
    modelAnswer: "R = V / I = 4.8 / 0.24 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying voltage by current.",
      "Avoid: Using V as the resistance unit.",
      "Avoid: Dividing current by voltage.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Circuit data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "State",
    questionText:
      "State two control variables when investigating how the resistance of a wire depends on its length.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The material of the wire should be kept constant",
        keywords: [["material"]],
      },
      {
        point:
          "The diameter or thickness of the wire should be kept constant; temperature should also be kept constant",
        keywords: [["diameter", "temperature"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "control variable",
      "material",
      "diameter",
      "temperature",
    ],
    modelAnswer: "The material of the wire and its diameter should be kept constant.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying length should be kept constant when length is the independent variable.",
      "Avoid: Giving vague answers such as keep everything the same.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Resistance wire controls. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A beaker of hot water cools from 76 °C to 64 °C in 8.0 minutes. Calculate the average rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Temperature change = 76 - 64 = 12 °C",
        keywords: [["temperature change", "°c/min"]],
      },
      {
        point: "Formula: rate of cooling = temperature change / time",
        keywords: [["cooling", "temperature change", "time"]],
      },
      {
        point: "Substitution: rate = 12 / 8.0",
        keywords: [["rate"]],
      },
      {
        point: "Answer: 1.5 °C/min",
        keywords: [["°c/min"]],
      },
    ],
    examinerKeywords: ["cooling", "temperature change", "time", "rate", "°C/min"],
    modelAnswer: "Temperature change = 12 °C. Rate of cooling = 12 / 8.0 = 1.5 °C/min.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using the final temperature only.",
      "Avoid: Subtracting time from temperature.",
      "Avoid: Forgetting the unit °C/min.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Cooling data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A temperature-time graph for cooling water becomes less steep with time. Explain what this shows about the rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The gradient of a temperature-time graph represents the rate of temperature change",
        keywords: [["gradient", "rate of cooling", "temperature difference"]],
      },
      {
        point: "A less steep graph means the rate of cooling decreases",
        keywords: [["cooling curve", "rate of cooling"]],
      },
      {
        point: "The temperature difference between the water and surroundings becomes smaller",
        keywords: [["temperature difference", "surroundings"]],
      },
    ],
    examinerKeywords: [
      "cooling curve",
      "gradient",
      "rate of cooling",
      "temperature difference",
      "surroundings",
    ],
    modelAnswer:
      "The gradient of the graph shows the rate of cooling. As the graph becomes less steep, the rate of cooling decreases because the temperature difference between the water and surroundings becomes smaller.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying less steep means faster cooling.",
      "Avoid: Not linking gradient to rate.",
      "Avoid: Ignoring the surroundings.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Cooling curve. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A ripple tank produces 12 waves in 6.0 s. The wavelength is 0.030 m. Calculate the wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "wave speed", "m/s"]],
      },
      {
        point: "Substitution: frequency = 12 / 6.0 = 2.0 Hz",
        keywords: [["frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["frequency", "wavelength", "wave speed"]],
      },
      {
        point: "Substitution: wave speed = 2.0 × 0.030",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 0.060 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["ripple tank", "frequency", "wavelength", "wave speed", "m/s"],
    modelAnswer:
      "frequency = 12 / 6.0 = 2.0 Hz. wave speed = frequency × wavelength = 2.0 × 0.030 = 0.060 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 6.0 / 12 for frequency.",
      "Avoid: Forgetting to calculate frequency first.",
      "Avoid: Giving wave speed in Hz.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Ripple tank data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to reduce uncertainty when measuring the angle of incidence in a reflection experiment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use a sharp pencil and thin ray of light",
        keywords: [["sharp", "pencil", "thin"]],
      },
      {
        point: "Draw the normal accurately at 90° to the mirror",
        keywords: [["normal"]],
      },
      {
        point: "Measure the angle from the normal using a protractor at eye level",
        keywords: [["angle of incidence", "normal", "protractor"]],
      },
    ],
    examinerKeywords: ["reflection", "angle of incidence", "normal", "protractor", "uncertainty"],
    modelAnswer:
      "Use a thin ray and mark it with a sharp pencil. Draw the normal accurately at 90° to the mirror and measure the angle from the normal using a protractor, viewing the scale at eye level.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Measuring from the mirror surface instead of the normal.",
      "Avoid: Using a thick ray and thick pencil marks.",
      "Avoid: Not drawing the normal accurately.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Ray tracing. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "Identify",
    questionText:
      "A student investigates how the angle of a ramp affects the speed of a trolley. Identify the independent variable, dependent variable and one control variable.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Independent variable: angle of the ramp",
        keywords: [["independent variable", "dependent variable", "ramp angle"]],
      },
      {
        point: "Dependent variable: speed of the trolley",
        keywords: [["dependent variable", "speed"]],
      },
      {
        point:
          "A valid control variable is trolley mass, release point, ramp surface or distance measured",
        keywords: [["control variable", "ramp angle"]],
      },
    ],
    examinerKeywords: [
      "independent variable",
      "dependent variable",
      "control variable",
      "ramp angle",
      "speed",
    ],
    modelAnswer:
      "The independent variable is the ramp angle. The dependent variable is the speed of the trolley. One control variable is the release point on the ramp.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying speed is the independent variable.",
      "Avoid: Giving angle as a control variable when it is changed.",
      "Avoid: Not naming a specific control variable.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Planning variables. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student times a trolley using a stopwatch. Suggest two improvements to reduce uncertainty.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use light gates connected to a data logger to reduce reaction-time error",
        keywords: [["reaction time", "light gates", "data logger"]],
      },
      {
        point: "Measure over a longer distance or repeat readings and calculate a mean",
        keywords: [["repeat"]],
      },
    ],
    examinerKeywords: [
      "uncertainty",
      "stopwatch",
      "reaction time",
      "light gates",
      "data logger",
      "repeat",
    ],
    modelAnswer:
      "Use light gates connected to a data logger instead of a hand-operated stopwatch. Also repeat readings and calculate a mean, or measure over a longer distance.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Only saying be more careful.",
      "Avoid: Not identifying reaction time.",
      "Avoid: Suggesting a less precise stopwatch.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Method improvement. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to read the volume of water in a measuring cylinder accurately.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Place the measuring cylinder on a flat surface",
        keywords: [["measuring cylinder", "flat surface"]],
      },
      {
        point: "Read the bottom of the meniscus at eye level",
        keywords: [["meniscus", "eye level"]],
      },
    ],
    examinerKeywords: ["measuring cylinder", "meniscus", "eye level", "flat surface"],
    modelAnswer:
      "Place the measuring cylinder on a flat surface and read the bottom of the meniscus at eye level.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Reading the top of the meniscus.",
      "Avoid: Reading from above or below eye level.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Meniscus. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "graph",
    questionType: "State",
    questionText: "State three features of a well-drawn graph for experimental data.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Axes are labelled with quantities and units",
        keywords: [["axes", "units"]],
      },
      {
        point: "A suitable scale is chosen that uses most of the graph paper",
        keywords: [["graph", "scale"]],
      },
      {
        point:
          "Points are plotted accurately and a suitable line of best fit or smooth curve is drawn",
        keywords: [["points", "line of best fit"]],
      },
    ],
    examinerKeywords: ["graph", "axes", "units", "scale", "points", "line of best fit"],
    modelAnswer:
      "A good graph has labelled axes with units, a suitable scale using most of the graph paper, accurately plotted points and a suitable line of best fit.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting units on axes.",
      "Avoid: Using a scale that wastes graph space.",
      "Avoid: Joining every point with straight lines when a best-fit line is needed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Graph plotting. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A detector records a background count rate of 15 counts per minute. With a radioactive source present, the count rate is 92 counts per minute. Calculate the corrected count rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: corrected count rate = measured count rate - background count rate",
        keywords: [["background count", "corrected count rate"]],
      },
      {
        point: "Substitution: corrected count rate = 92 - 15",
        keywords: [["corrected count rate"]],
      },
      {
        point: "Answer: 77 counts per minute",
        keywords: [["counts per minute"]],
      },
    ],
    examinerKeywords: [
      "background count",
      "corrected count rate",
      "radioactive source",
      "subtract",
      "counts per minute",
    ],
    modelAnswer: "corrected count rate = 92 - 15 = 77 counts per minute.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Adding the background count.",
      "Avoid: Ignoring background radiation.",
      "Avoid: Forgetting the unit counts per minute.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radiation practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-atp-data-analysis-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "alternative-to-practical-data-analysis",
    paper: "Paper 6",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student measures the density of a small irregular stone using water displacement. Suggest two sources of uncertainty and how each could be reduced.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Uncertainty in reading water level can be reduced by reading the bottom of the meniscus at eye level",
        keywords: [["water displacement", "uncertainty", "meniscus"]],
      },
      {
        point:
          "A small change in volume can be measured more precisely using a narrower measuring cylinder with smaller divisions",
        keywords: [["small", "change", "volume"]],
      },
      {
        point: "Air bubbles on the stone can be reduced by wetting the stone or gently tapping it",
        keywords: [["air bubbles"]],
      },
      {
        point: "Water splashing can be reduced by lowering the stone carefully using thread",
        keywords: [["water displacement"]],
      },
    ],
    examinerKeywords: [
      "density",
      "irregular stone",
      "water displacement",
      "uncertainty",
      "meniscus",
      "air bubbles",
    ],
    modelAnswer:
      "One uncertainty is reading the water level, which can be reduced by reading the bottom of the meniscus at eye level. Another is a small volume change, which can be reduced by using a narrower measuring cylinder with smaller divisions. Air bubbles can also be reduced by lowering the stone carefully.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only saying human error.",
      "Avoid: Not explaining how to reduce uncertainty.",
      "Avoid: Forgetting the volume is found by displacement.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Experimental evaluation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two objects found in the Solar System other than planets.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Valid examples include moons, asteroids, comets and dwarf planets",
        keywords: [["moons", "asteroids", "comets"]],
      },
      {
        point: "Any two valid objects are acceptable",
        keywords: [["any", "two", "valid"]],
      },
    ],
    examinerKeywords: ["Solar System", "moons", "asteroids", "comets", "dwarf planets"],
    modelAnswer: "Moons and comets are objects found in the Solar System.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Naming stars other than the Sun as part of the Solar System.",
      "Avoid: Giving galaxies as Solar System objects.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Solar System. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why planets orbit the Sun rather than moving in straight lines through space.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Planets have forward velocity",
        keywords: [["planet", "velocity direction"]],
      },
      {
        point: "The Sun exerts a gravitational force on the planets",
        keywords: [["planet", "sun", "gravitational force"]],
      },
      {
        point: "Gravity changes the direction of the planet's velocity, producing orbital motion",
        keywords: [["planet", "velocity direction", "orbit"]],
      },
    ],
    examinerKeywords: ["planet", "Sun", "gravitational force", "velocity direction", "orbit"],
    modelAnswer:
      "A planet has forward velocity, but the Sun's gravitational force pulls it towards the Sun. This changes the direction of the planet's velocity continuously, so it follows an orbit instead of a straight line.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying no force acts in space.",
      "Avoid: Saying magnetism causes planetary orbits.",
      "Avoid: Not mentioning change in direction.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Gravity. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A satellite travels 84000 km in 12 hours. Calculate its average speed in km/h.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 84000 / 12",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 7000 km/h",
        keywords: [["km/h"]],
      },
    ],
    examinerKeywords: ["satellite", "speed", "distance", "time", "km/h"],
    modelAnswer: "speed = distance / time = 84000 / 12 = 7000 km/h.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit km/h."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Orbital speed. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText: "Suggest why a satellite closer to Earth has a shorter orbital period.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The orbital path is shorter for a lower orbit",
        keywords: [["lower orbit", "shorter period"]],
      },
      {
        point: "The gravitational force is stronger closer to Earth",
        keywords: [["gravitational", "force", "stronger"]],
      },
      {
        point: "The satellite moves faster and completes an orbit in less time",
        keywords: [["satellite", "faster"]],
      },
    ],
    examinerKeywords: ["satellite", "lower orbit", "gravity", "faster", "shorter period"],
    modelAnswer:
      "A satellite closer to Earth has a shorter orbital path and experiences stronger gravity. It moves faster, so it completes an orbit in less time.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying closer satellites move slower.",
      "Avoid: Saying period only depends on satellite mass.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Orbital period. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how the speed of a comet changes as it moves from far away towards the Sun.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The comet speeds up as it moves closer to the Sun",
        keywords: [["comet", "sun", "speeds up"]],
      },
      {
        point: "The Sun's gravitational force becomes stronger at smaller distances",
        keywords: [["sun"]],
      },
    ],
    examinerKeywords: ["comet", "Sun", "speeds up", "gravity"],
    modelAnswer:
      "The comet speeds up as it moves closer to the Sun because the Sun's gravitational force becomes stronger.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the comet slows down as it approaches the Sun.",
      "Avoid: Saying the comet moves at constant speed.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Comets. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why stars release large amounts of energy during their main sequence stage.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Hydrogen nuclei fuse to form helium nuclei",
        keywords: [["hydrogen", "helium"]],
      },
      {
        point: "This process is nuclear fusion",
        keywords: [["nuclear fusion"]],
      },
      {
        point: "Nuclear fusion releases energy from the core of the star",
        keywords: [["nuclear fusion", "energy released"]],
      },
    ],
    examinerKeywords: ["main sequence", "hydrogen", "helium", "nuclear fusion", "energy released"],
    modelAnswer:
      "During the main sequence stage, hydrogen nuclei fuse to form helium nuclei in the core. This nuclear fusion releases large amounts of energy.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying stars release energy by chemical burning.",
      "Avoid: Confusing fusion with fission.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Fusion in stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a main sequence star remains stable.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gravity pulls the star's material inwards",
        keywords: [["gravity", "inwards"]],
      },
      {
        point: "Fusion in the core produces outward pressure",
        keywords: [["fusion", "outward pressure"]],
      },
      {
        point: "The inward gravitational force and outward pressure are balanced",
        keywords: [["outward pressure", "balanced"]],
      },
      {
        point: "The star remains stable while fusion continues steadily",
        keywords: [["main sequence", "fusion"]],
      },
    ],
    examinerKeywords: [
      "main sequence",
      "gravity",
      "inwards",
      "fusion",
      "outward pressure",
      "balanced",
    ],
    modelAnswer:
      "A main sequence star is stable because gravity pulls inwards while pressure from fusion pushes outwards. These effects are balanced while fusion continues steadily.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying no forces act on a stable star.",
      "Avoid: Forgetting the outward pressure from fusion.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Main sequence stability. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the role of gravity in the formation of a star from a nebula.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Gravity pulls gas and dust in the nebula together",
        keywords: [["nebula", "gravity", "gas and dust"]],
      },
      {
        point: "The material collapses and becomes denser",
        keywords: [["collapse"]],
      },
      {
        point: "The temperature and pressure increase, forming a protostar",
        keywords: [["protostar"]],
      },
    ],
    examinerKeywords: ["nebula", "gravity", "gas and dust", "collapse", "protostar"],
    modelAnswer:
      "Gravity pulls gas and dust in the nebula together. The material collapses and becomes denser, causing temperature and pressure to increase and forming a protostar.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying stars form from planets.", "Avoid: Ignoring the role of gravity."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nebulae. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Describe",
    questionText:
      "Describe the stages after the main sequence for a star with a similar mass to the Sun.",
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
        point: "The remaining core becomes a white dwarf and cools",
        keywords: [["white dwarf", "cools"]],
      },
    ],
    examinerKeywords: ["Sun-like star", "red giant", "planetary nebula", "white dwarf", "cools"],
    modelAnswer:
      "After the main sequence, a Sun-like star becomes a red giant. Its outer layers are ejected, forming a planetary nebula, and the remaining core becomes a white dwarf that cools over time.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Saying the Sun becomes a black hole.", "Avoid: Missing the white dwarf stage."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Sun-like stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "A star is much more massive than the Sun. Describe its likely final stages.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The star becomes a red supergiant",
        keywords: [["red supergiant"]],
      },
      {
        point: "It explodes as a supernova",
        keywords: [["supernova"]],
      },
      {
        point: "The remaining core may form a neutron star",
        keywords: [["neutron star"]],
      },
      {
        point: "If the core is massive enough, it forms a black hole",
        keywords: [["massive star", "black hole"]],
      },
    ],
    examinerKeywords: ["massive star", "red supergiant", "supernova", "neutron star", "black hole"],
    modelAnswer:
      "A very massive star becomes a red supergiant and then explodes as a supernova. The remaining core may form a neutron star or, if massive enough, a black hole.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying every star becomes a white dwarf.",
      "Avoid: Forgetting the supernova stage.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Massive stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare a solar system and a galaxy.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A solar system contains a star and objects orbiting it, such as planets",
        keywords: [["solar system", "star", "planets"]],
      },
      {
        point: "A galaxy contains many stars, gas and dust",
        keywords: [["galaxy", "star", "many stars"]],
      },
      {
        point: "A galaxy is much larger than a solar system",
        keywords: [["solar system", "galaxy", "larger"]],
      },
    ],
    examinerKeywords: ["solar system", "galaxy", "star", "planets", "many stars", "larger"],
    modelAnswer:
      "A solar system is a star and the objects orbiting it, such as planets. A galaxy contains many stars, gas and dust and is much larger than a solar system.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a galaxy orbits one planet.",
      "Avoid: Saying a solar system contains many galaxies.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Galaxies. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why astronomers use light-years rather than metres for distances between stars.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Distances between stars are extremely large",
        keywords: [["distance", "stars", "large distances"]],
      },
      {
        point: "Using metres would give very large inconvenient numbers",
        keywords: [["large distances"]],
      },
      {
        point:
          "A light-year is a large unit of distance, making astronomical distances easier to express",
        keywords: [["light-year", "distance", "large distances"]],
      },
    ],
    examinerKeywords: ["light-year", "distance", "stars", "large distances", "astronomical"],
    modelAnswer:
      "Distances between stars are extremely large, so using metres gives very large numbers. A light-year is a large distance unit, making astronomical distances easier to express.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a light-year is a unit of time.",
      "Avoid: Saying metres cannot measure space distances.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Light-year. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Light from the Sun takes about 500 s to reach Earth. The speed of light is 3.0 × 10⁸ m/s. Calculate the approximate distance from the Sun to Earth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed of light", "distance", "time"]],
      },
      {
        point: "Substitution: distance = 3.0 × 10⁸ × 500",
        keywords: [["distance"]],
      },
      {
        point: "Answer: 1.5 × 10¹¹ m",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["speed of light", "distance", "time", "Sun", "Earth", "standard form"],
    modelAnswer: "distance = speed × time = 3.0 × 10⁸ × 500 = 1.5 × 10¹¹ m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing speed by time.",
      "Avoid: Writing 1.5 × 10¹⁰ m.",
      "Avoid: Forgetting the unit m.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Light travel. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State what happens to the observed wavelength of light from a galaxy moving away from Earth.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The observed wavelength increases",
        keywords: [["wavelength increases"]],
      },
      {
        point: "The spectral lines shift towards the red end of the spectrum",
        keywords: [["red end", "spectrum"]],
      },
    ],
    examinerKeywords: ["redshift", "wavelength increases", "moving away", "red end", "spectrum"],
    modelAnswer:
      "The observed wavelength increases and the spectral lines shift towards the red end of the spectrum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying wavelength decreases.",
      "Avoid: Saying the galaxy becomes physically red.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Redshift. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "data-response",
    questionType: "Suggest",
    questionText:
      "A distant galaxy has a larger redshift than a nearer galaxy. Suggest what this shows about the distant galaxy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The distant galaxy is moving away faster",
        keywords: [["distant galaxy", "moving away faster"]],
      },
      {
        point:
          "This supports the idea that more distant galaxies recede faster in an expanding Universe",
        keywords: [["distant galaxy", "expanding universe"]],
      },
    ],
    examinerKeywords: [
      "larger redshift",
      "distant galaxy",
      "moving away faster",
      "expanding Universe",
    ],
    modelAnswer:
      "The larger redshift suggests the distant galaxy is moving away faster, supporting the idea of an expanding Universe.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the galaxy is moving towards Earth.",
      "Avoid: Saying redshift only shows colour, not motion.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Expansion. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State why cosmic microwave background radiation is important evidence in cosmology.",
    marks: 2,
    markSchemePoints: [
      {
        point: "It is radiation detected from all directions in space",
        keywords: [["all directions"]],
      },
      {
        point: "It is evidence for the Big Bang model or radiation from the early Universe",
        keywords: [["big bang", "early universe"]],
      },
    ],
    examinerKeywords: [
      "cosmic microwave background radiation",
      "all directions",
      "Big Bang",
      "early Universe",
    ],
    modelAnswer:
      "Cosmic microwave background radiation is detected from all directions and is evidence for the Big Bang model.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: ["Avoid: Saying CMB radiation is sound.", "Avoid: Saying it comes only from the Sun."],
    examinerTip:
      "Cambridge IGCSE Physics 0625: CMB radiation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText:
      "A star appears dim from Earth but has very high luminosity. Suggest why it appears dim.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The star may be very far from Earth",
        keywords: [["star", "may", "very"]],
      },
      {
        point: "Its light spreads out over a larger area before reaching Earth",
        keywords: [["light spreads out"]],
      },
    ],
    examinerKeywords: ["apparent brightness", "luminosity", "distance", "light spreads out", "dim"],
    modelAnswer:
      "It may appear dim because it is very far from Earth, so its light has spread out over a large area.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying high luminosity always means high apparent brightness.",
      "Avoid: Ignoring distance.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Brightness. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText:
      "A star appears blue-white. What does this suggest about its surface temperature compared with a red star?",
    marks: 2,
    markSchemePoints: [
      {
        point: "A blue-white star has a higher surface temperature",
        keywords: [["blue-white star", "surface temperature"]],
      },
      {
        point: "A red star has a lower surface temperature",
        keywords: [["red star", "surface temperature"]],
      },
    ],
    examinerKeywords: ["blue-white star", "red star", "surface temperature", "hotter"],
    modelAnswer: "A blue-white star has a higher surface temperature than a red star.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying red stars are hotter because red is a warm colour.",
      "Avoid: Saying colour gives no information about temperature.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Star colour. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the evidence for the Big Bang model.",
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
        point: "Together these support the idea of a hot, dense beginning",
        keywords: [["hot dense beginning"]],
      },
      {
        point:
          "A justified conclusion should state that the evidence strongly supports the Big Bang model",
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
      "The Big Bang model is supported by redshift, which shows most distant galaxies are moving away. More distant galaxies generally have greater redshifts, supporting expansion. Cosmic microwave background radiation is also detected from all directions and is interpreted as cooled radiation from the early Universe. Together, this strongly supports the idea that the Universe began hot and dense.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Only discussing redshift.",
      "Avoid: Saying CMB radiation is visible light from stars.",
      "Avoid: Not giving a conclusion.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Big Bang evaluation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-space-mixed-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "space-physics-mixed",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Compare",
    questionText:
      "Compare the life cycle of a Sun-like star with the life cycle of a very massive star after the main sequence.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A Sun-like star becomes a red giant",
        keywords: [["sun-like star", "red giant", "red supergiant"]],
      },
      {
        point: "A Sun-like star ejects outer layers and forms a white dwarf",
        keywords: [["sun-like star", "white dwarf"]],
      },
      {
        point: "A very massive star becomes a red supergiant",
        keywords: [["red giant", "massive star", "red supergiant"]],
      },
      {
        point: "A very massive star explodes as a supernova",
        keywords: [["massive star", "supernova"]],
      },
      {
        point: "The core of a very massive star becomes a neutron star or black hole",
        keywords: [["massive star", "black hole"]],
      },
    ],
    examinerKeywords: [
      "Sun-like star",
      "red giant",
      "white dwarf",
      "massive star",
      "red supergiant",
      "supernova",
      "black hole",
    ],
    modelAnswer:
      "A Sun-like star becomes a red giant, ejects its outer layers and ends as a white dwarf. A very massive star becomes a red supergiant, explodes as a supernova and leaves a neutron star or black hole.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying the Sun becomes a supernova.",
      "Avoid: Saying all stars end as black holes.",
      "Avoid: Not comparing both star types.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Stellar comparison. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-001",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Terminal velocity. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-002",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how conduction, convection and radiation transfer thermal energy from a hot object.",
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
      "density",
      "infrared",
    ],
    modelAnswer:
      "Conduction transfers thermal energy through particle vibrations and collisions, and in metals by delocalised electrons. Convection occurs in fluids when warmer, less dense fluid rises and cooler, denser fluid sinks, forming a convection current. Radiation transfers energy by infrared electromagnetic waves and does not need a medium, so it can travel through a vacuum.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying convection happens in solids.",
      "Avoid: Saying radiation needs particles.",
      "Avoid: Not distinguishing the three methods.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Thermal transfer. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-003",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "In a series circuit, the current is the same at every point and the potential difference is shared between components. In a parallel circuit, each branch has the same potential difference as the supply, while current splits between branches. The total current is the sum of the branch currents, and components in parallel can operate independently.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying current is shared in series.",
      "Avoid: Saying voltage is always shared in parallel.",
      "Avoid: Not comparing both circuit types.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electric circuits. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-004",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
          "The output is alternating because the direction of the potential difference repeatedly changes",
        keywords: [["a.c. generator"]],
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
      "In an a.c. generator, a coil rotates in a magnetic field. As the coil rotates, the magnetic field through it changes and a potential difference is induced. The direction of the induced potential difference reverses every half-turn. Slip rings and brushes connect the rotating coil to the external circuit, producing an alternating output.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Confusing slip rings with a split-ring commutator.",
      "Avoid: Saying the generator stores charge.",
      "Avoid: Forgetting that the output reverses direction.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electromagnetic induction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-005",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
    paperType: "extended-response",
    questionType: "Compare",
    questionText:
      "Compare alpha, beta and gamma radiation in terms of nature, charge, ionising ability and penetrating power.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Alpha radiation is a helium nucleus with charge +2",
        keywords: [["alpha", "charge", "helium nucleus"]],
      },
      {
        point: "Alpha is strongly ionising but weakly penetrating and is stopped by paper or skin",
        keywords: [["alpha", "ionising", "penetrating"]],
      },
      {
        point: "Beta radiation is an electron with charge -1",
        keywords: [["beta", "charge", "electron"]],
      },
      {
        point:
          "Beta has medium ionising ability and medium penetrating power, stopped by thin aluminium",
        keywords: [["beta", "ionising", "penetrating"]],
      },
      {
        point: "Gamma radiation is an electromagnetic wave with no charge",
        keywords: [["gamma", "charge", "electromagnetic wave"]],
      },
      {
        point:
          "Gamma is weakly ionising but highly penetrating and is reduced by thick lead or concrete",
        keywords: [["gamma", "ionising", "penetrating"]],
      },
    ],
    examinerKeywords: [
      "alpha",
      "beta",
      "gamma",
      "charge",
      "ionising",
      "penetrating",
      "helium nucleus",
      "electron",
      "electromagnetic wave",
    ],
    modelAnswer:
      "Alpha radiation is a helium nucleus with charge +2. It is strongly ionising but weakly penetrating and is stopped by paper or skin. Beta radiation is an electron with charge -1. It has medium ionising and penetrating power and is stopped by thin aluminium. Gamma radiation is an electromagnetic wave with no charge. It is weakly ionising but highly penetrating and needs thick lead or concrete to reduce it.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gamma has high mass.",
      "Avoid: Saying alpha is the most penetrating.",
      "Avoid: Mixing up ionising ability and penetrating power.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radioactive decay. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-006",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 5 / Paper 6",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the length of a resistance wire affects its resistance.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes power supply, ammeter, voltmeter, switch, crocodile clips, resistance wire and metre rule",
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
        keywords: [["r = v/i", "repeat", "heating"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "length",
      "ammeter",
      "voltmeter",
      "R = V/I",
      "control variables",
      "repeat",
      "heating",
    ],
    modelAnswer:
      "Set up a circuit with a power supply, switch, ammeter in series and voltmeter across the selected length of resistance wire. Use crocodile clips and a metre rule to choose different lengths. Record V and I and calculate R = V / I. Keep the same wire material and diameter, use low current to reduce heating, repeat readings and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing wire thickness as well as length.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Not calculating resistance.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Practical planning. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-007",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "Refraction occurs when light changes speed at a boundary. When light enters a more optically dense medium, it slows and bends towards the normal. When it enters a less optically dense medium, it speeds up and bends away from the normal. Total internal reflection occurs when light travels from a more optically dense to a less dense medium and the angle of incidence is greater than the critical angle, so all the light is reflected back.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying refraction happens without a speed change.",
      "Avoid: Saying total internal reflection occurs from air into glass.",
      "Avoid: Saying the angle must be less than the critical angle.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Light and refraction. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-008",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["steam"]],
      },
      {
        point: "Steam turns a turbine connected to a generator, producing electrical energy",
        keywords: [["steam", "turbine", "generator"]],
      },
    ],
    examinerKeywords: [
      "nuclear fission",
      "neutron",
      "chain reaction",
      "control rods",
      "moderator",
      "steam",
      "turbine",
      "generator",
    ],
    modelAnswer:
      "In a reactor, a neutron is absorbed by a large unstable nucleus, causing fission. The nucleus splits, releasing energy and more neutrons. Control rods absorb neutrons to control the chain reaction, while a moderator slows neutrons so they can cause more fission. The released energy heats water to make steam, which turns a turbine connected to a generator, producing electrical energy.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying fusion occurs in nuclear power stations.",
      "Avoid: Confusing control rods and moderator.",
      "Avoid: Forgetting the turbine and generator.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Nuclear reactor. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-009",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 5 / Paper 6",
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
      "insulation",
    ],
    modelAnswer:
      "Measure the mass of the metal block. Insert a heater and thermometer into the block and record the initial temperature. Switch on the heater and measure current, potential difference and time so energy can be calculated using E = VIt. Record the temperature rise. Calculate c = E / (mΔT). Insulate the block and repeat readings to improve reliability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting to measure mass.",
      "Avoid: Ignoring energy loss to the surroundings.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Specific heat capacity practical. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-010",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["nebula", "planetary nebula"]],
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
      "planetary nebula",
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
      "Cambridge IGCSE Physics 0625: Stars. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-011",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 5 / Paper 6",
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
        keywords: [["graph", "gradient"]],
      },
    ],
    examinerKeywords: [
      "current",
      "potential difference",
      "table",
      "units",
      "graph",
      "line of best fit",
      "gradient",
    ],
    modelAnswer:
      "Record potential difference and current in a results table with units in the headings. Repeat readings and calculate mean currents. Plot current on the y-axis against potential difference on the x-axis using a suitable scale. Draw a line of best fit and use the graph shape or gradient to determine the relationship or resistance.",
    difficulty: "medium",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Forgetting units in table headings.",
      "Avoid: Plotting axes the wrong way round without consistency.",
      "Avoid: Joining points point-to-point instead of using a line of best fit.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Experimental data. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-012",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "Power is the rate of energy transfer. A high-power heater transfers more electrical energy each second. This energy is transferred to thermal energy, so the high-power heater heats at a greater rate than a low-power heater.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying power is the total energy stored.",
      "Avoid: Not mentioning energy per second.",
      "Avoid: Confusing power with voltage only.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Electrical power and heating. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-013",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
        keywords: [["diffraction", "gap"]],
      },
      {
        point: "Diffraction is greatest when the gap is similar in size to the wavelength",
        keywords: [["diffraction", "gap", "wavelength"]],
      },
    ],
    examinerKeywords: [
      "reflection",
      "refraction",
      "diffraction",
      "boundary",
      "speed changes",
      "gap",
      "wavelength",
    ],
    modelAnswer:
      "Reflection is when a wave bounces off a boundary, with the angle of incidence equal to the angle of reflection. Refraction is a change in direction when a wave changes speed as it enters a different medium. Diffraction is the spreading of waves through a gap or around an obstacle, and it is greatest when the gap is similar to the wavelength.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Confusing refraction with reflection.",
      "Avoid: Saying diffraction only happens for light.",
      "Avoid: Not mentioning speed change in refraction.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Wave behaviour. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-014",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "A tracer should emit gamma radiation because gamma can escape the body and be detected outside. It should have a short half-life so the patient is exposed for less time, reducing dose and risk of cell damage. However, the half-life must not be so short that the tracer decays before it can be detected.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Choosing alpha radiation for an internal tracer.",
      "Avoid: Saying the half-life should be extremely long.",
      "Avoid: Forgetting the tracer must still be detectable.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Radioactive tracers. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-015",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Conservation of energy. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-016",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "balance",
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
      "Cambridge IGCSE Physics 0625: Moments and balance. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-017",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "stronger",
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
      "Cambridge IGCSE Physics 0625: Electromagnets. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-018",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 5 / Paper 6",
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
        keywords: [["air bubbles"]],
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
      "air bubbles",
      "uncertainty",
    ],
    modelAnswer:
      "The object's mass should be measured using a balance. Its volume can be found by water displacement in a measuring cylinder. To improve the method, read the bottom of the meniscus at eye level, ensure the object is fully submerged and remove air bubbles. A narrow measuring cylinder with small divisions or repeated readings reduces uncertainty. Density is then calculated using mass divided by volume.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using length × width × height for an irregular object.",
      "Avoid: Not fully submerging the object.",
      "Avoid: Ignoring air bubbles or meniscus reading.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Practical evaluation. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-019",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "cooling",
    ],
    modelAnswer:
      "In melting, particles gain energy and overcome some forces that hold them in fixed positions. During a change of state, temperature stays constant because energy is used to overcome forces between particles. In boiling, particles throughout the liquid gain enough energy to become gas at a fixed temperature. Evaporation happens only at the surface, where the highest-energy particles escape, lowering the average kinetic energy of the remaining liquid and causing cooling.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying temperature always rises during melting.",
      "Avoid: Saying evaporation happens throughout the liquid.",
      "Avoid: Saying particles themselves expand.",
    ],
    examinerTip:
      "Cambridge IGCSE Physics 0625: Particle model. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
  {
    id: "cambridge-igcse-physics-extended-response-020",
    qualification: "IGCSE",
    examBoard: "cambridge-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 3 / Paper 4",
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
      "Cambridge IGCSE Physics 0625: Space physics. Use correct physics terminology, show working for calculations and include units where relevant.",
  },
];
