import type { Question } from "./questionBank";

export const OXFORD_AQA_PHYSICS_QUESTIONS: Question[] = [
  {
    id: "oxfordaqa-igcse-physics-forces-effects-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Forces and interactions. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Contact and non-contact forces. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A box has a force of 70 N acting to the right and a force of 25 N acting to the left. Calculate the resultant force on the box.",
    marks: 3,
    markSchemePoints: [
      {
        point:
          "Forces act in opposite directions, so subtract the smaller force from the larger force",
        keywords: [["opposite directions", "subtract", "n"]],
      },
      {
        point: "Substitution: resultant force = 70 - 25",
        keywords: [["resultant force", "n"]],
      },
      {
        point: "Answer: 45 N to the right",
        keywords: [["n"]],
      },
    ],
    examinerKeywords: ["resultant force", "opposite directions", "subtract", "N", "direction"],
    modelAnswer: "Resultant force = 70 - 25 = 45 N to the right.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Adding the forces to get 95 N.", "Avoid: Forgetting to give the direction."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Resultant force. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Balanced forces. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A cyclist travels 600 m in 80 s. Calculate the average speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 600 / 80",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 7.5 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 600 / 80 = 7.5 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit m/s."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Speed. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A car accelerates from 8.0 m/s to 28 m/s in 5.0 s. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
      {
        point: "Substitution: acceleration = (28 - 8.0) / 5.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 4.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (28 - 8.0) / 5.0 = 20 / 5.0 = 4.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final velocity only.", "Avoid: Writing m/s instead of m/s²."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Acceleration. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Distance-time graphs. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A velocity-time graph shows a constant velocity of 12 m/s for 15 s. Calculate the distance travelled.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Distance travelled is the area under a velocity-time graph",
        keywords: [["velocity-time graph", "area under graph", "distance"]],
      },
      {
        point: "Substitution: distance = 12 × 15",
        keywords: [["distance"]],
      },
      {
        point: "Answer: 180 m",
        keywords: [["m"]],
      },
    ],
    examinerKeywords: ["velocity-time graph", "area under graph", "distance", "m"],
    modelAnswer: "Distance is the area under the graph. distance = 12 × 15 = 180 m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Finding the gradient instead of the area.", "Avoid: Giving the unit as m/s."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Velocity-time graphs. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resultant force of 120 N acts on a 30 kg object. Calculate the acceleration of the object.",
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
        point: "Substitution: acceleration = 120 / 30",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 4.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "resultant force", "m/s²"],
    modelAnswer: "F = ma, so a = F / m = 120 / 30 = 4.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by mass.", "Avoid: Forgetting the force must be resultant."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Newton's second law. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An object has a mass of 6.5 kg. The gravitational field strength is 10 N/kg. Calculate its weight.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: weight = 6.5 × 10",
        keywords: [["weight", "n"]],
      },
      {
        point: "Answer: 65 N",
        keywords: [["n"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "N"],
    modelAnswer: "weight = mass × gravitational field strength = 6.5 × 10 = 65 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Weight. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.20 kg ball moves at 18 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.20 × 18",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 3.6 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.20 × 18 = 3.6 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using grams instead of kilograms.", "Avoid: Writing the unit as N."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Momentum. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Conservation of momentum. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Stopping distance. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Vehicle safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Terminal velocity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Centre of mass. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Stability. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 18 N acts at a perpendicular distance of 0.40 m from a pivot. Calculate the moment of the force.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance from pivot",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: moment = 18 × 0.40",
        keywords: [["moment", "n m"]],
      },
      {
        point: "Answer: 7.2 N m",
        keywords: [["n m"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 18 × 0.40 = 7.2 N m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using distance not perpendicular to the force.",
      "Avoid: Forgetting the unit N m.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Moments. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Levers. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-forces-effects-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "forces-effects",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Force-extension practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two energy stores of a moving object raised above the ground.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The object has a kinetic energy store because it is moving",
        keywords: [["kinetic energy", "moving"]],
      },
      {
        point:
          "The object has a gravitational potential energy store because it is raised above the ground",
        keywords: [["gravitational potential energy", "raised"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "gravitational potential energy", "moving", "raised"],
    modelAnswer: "It has kinetic energy and gravitational potential energy.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying electrical energy for a moving object with no circuit.",
      "Avoid: Only naming one energy store.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Energy stores. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 80 N moves a box 3.0 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Substitution: work done = 80 × 3.0",
        keywords: [["work done"]],
      },
      {
        point: "Answer: 240 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "J"],
    modelAnswer: "work done = force × distance = 80 × 3.0 = 240 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using time instead of distance.", "Avoid: Giving the unit as N instead of J."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Work done. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 5.0 kg trolley moves at 4.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 1/2 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: KE = 0.5 × 5.0 × 4.0²",
        keywords: [["mark point"]],
      },
      {
        point: "Calculation: KE = 0.5 × 5.0 × 16",
        keywords: [["calculation"]],
      },
      {
        point: "Answer: 40 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "J"],
    modelAnswer: "KE = 1/2mv² = 0.5 × 5.0 × 4.0² = 40 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square the speed.",
      "Avoid: Using momentum instead of kinetic energy.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Kinetic energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 12 kg object is lifted through a height of 2.5 m. The gravitational field strength is 10 N/kg. Calculate the increase in gravitational potential energy.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Formula: gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "height"]],
      },
      {
        point: "Substitution: GPE = 12 × 10 × 2.5",
        keywords: [["gpe"]],
      },
      {
        point: "Answer: 300 J",
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
    modelAnswer: "GPE = mgh = 12 × 10 × 2.5 = 300 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Forgetting gravitational field strength.", "Avoid: Giving the answer in N."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Gravitational potential energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
      "Avoid: Saying elastic energy is only stored in rubber bands.",
      "Avoid: Confusing elastic energy with kinetic energy.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Elastic potential energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
      "Energy cannot be created or destroyed; it can only be transferred between stores or transformed.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Saying energy is used up.", "Avoid: Saying wasted energy disappears."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Conservation of energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by energy being dissipated.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Dissipated energy is transferred to less useful stores",
        keywords: [["dissipated", "less useful"]],
      },
      {
        point: "It is often transferred to thermal energy stores of the surroundings",
        keywords: [["thermal energy", "surroundings"]],
      },
      {
        point: "The energy becomes spread out and harder to use",
        keywords: [["spread out"]],
      },
    ],
    examinerKeywords: ["dissipated", "less useful", "thermal energy", "surroundings", "spread out"],
    modelAnswer:
      "Dissipated energy is transferred to less useful stores, usually thermal energy stores of the surroundings. It becomes spread out and harder to use.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying dissipated energy is destroyed.",
      "Avoid: Saying dissipated energy can always be fully recovered.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Energy dissipation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A machine transfers 3600 J of energy in 12 s. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 3600 / 12",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 300 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "W"],
    modelAnswer: "power = energy transferred / time = 3600 / 12 = 300 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Giving the unit as J."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Power. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A device has an input energy of 900 J and a useful output energy of 540 J. Calculate the efficiency.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output", "input energy"]],
      },
      {
        point: "Substitution: efficiency = 540 / 900 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 60%",
        keywords: [["mark point"]],
      },
      {
        point: "Percentage sign must be included",
        keywords: [["percentage"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "input energy", "percentage"],
    modelAnswer: "efficiency = 540 / 900 × 100 = 60%.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy instead of useful output.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Efficiency. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe what a Sankey diagram shows about energy transfers.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A Sankey diagram shows energy transfers in a system",
        keywords: [["sankey diagram", "energy transfer"]],
      },
      {
        point: "The width of each arrow represents the amount of energy transferred",
        keywords: [["energy transfer", "arrow width"]],
      },
      {
        point: "It can show useful and wasted energy transfers",
        keywords: [["energy transfer", "useful energy", "wasted energy"]],
      },
    ],
    examinerKeywords: [
      "Sankey diagram",
      "energy transfer",
      "arrow width",
      "useful energy",
      "wasted energy",
    ],
    modelAnswer:
      "A Sankey diagram shows energy transfers. Wider arrows represent larger amounts of energy, and the diagram can show useful and wasted energy transfers.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying all arrows must be the same width.",
      "Avoid: Not linking arrow width to energy amount.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Sankey diagrams. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why the brakes of a bicycle become warm when used.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Friction acts between the brake pads and wheel rim or disc",
        keywords: [["friction"]],
      },
      {
        point: "Work is done against friction",
        keywords: [["friction", "work done"]],
      },
      {
        point:
          "Kinetic energy is transferred to thermal energy stores of the brakes and surroundings",
        keywords: [["brakes", "kinetic energy", "thermal energy"]],
      },
    ],
    examinerKeywords: ["brakes", "friction", "work done", "kinetic energy", "thermal energy"],
    modelAnswer:
      "Friction acts between the brake pads and wheel. Work is done against friction, transferring kinetic energy to thermal energy stores of the brakes and surroundings.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Saying heat is created from nothing.", "Avoid: Not mentioning friction."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Heating by work. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 2.0 kg block has a specific heat capacity of 450 J/kg °C. Calculate the energy needed to raise its temperature by 20 °C.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["specific heat capacity", "mass", "temperature change"]],
      },
      {
        point: "Substitution: energy = 2.0 × 450 × 20",
        keywords: [["energy"]],
      },
      {
        point: "Answer: 18000 J",
        keywords: [["j"]],
      },
      {
        point: "Unit J must be included",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "mass", "temperature change", "energy", "J"],
    modelAnswer: "E = mcΔT = 2.0 × 450 × 20 = 18000 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Forgetting to multiply by mass.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Specific heat capacity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
        point: "Place a heater and thermometer or temperature probe into the block",
        keywords: [["heater", "temperature rise", "e = vit"]],
      },
      {
        point: "Measure the initial temperature",
        keywords: [["temperature rise", "e = vit"]],
      },
      {
        point: "Measure current, potential difference and time to find energy using E = VIt",
        keywords: [["e = vit"]],
      },
      {
        point: "Measure the temperature rise",
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
      "Measure the mass of the block. Insert a heater and thermometer, then record the initial temperature. Switch on the heater and measure current, potential difference and time so energy can be calculated using E = VIt. Measure the temperature rise and calculate c = E / (mΔT). Insulate the block to reduce energy loss.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting to measure mass.",
      "Avoid: Ignoring energy loss.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Specific heat capacity practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two renewable energy resources.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Valid examples include solar, wind, hydroelectric, tidal, wave, geothermal and biomass",
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
      "OxfordAQA International GCSE Physics 9203: Energy resources. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
        keywords: [["used faster", "replaced"]],
      },
    ],
    examinerKeywords: [
      "fossil fuels",
      "non-renewable",
      "millions of years",
      "used faster",
      "replaced",
    ],
    modelAnswer:
      "Fossil fuels are non-renewable because they take millions of years to form and are used much faster than they are replaced.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying fossil fuels can never run out.",
      "Avoid: Saying fossil fuels are renewable because they come from nature.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Non-renewable resources. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Solar energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Wind energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Fossil fuel power stations. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText: "Suggest two ways to improve the efficiency of a machine with moving parts.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Lubricate moving parts to reduce friction",
        keywords: [["friction"]],
      },
      {
        point: "Use better bearings, smoother surfaces or reduce unnecessary moving mass",
        keywords: [["bearings"]],
      },
    ],
    examinerKeywords: ["efficiency", "lubrication", "friction", "bearings", "wasted energy"],
    modelAnswer: "Lubricate the moving parts and use better bearings to reduce friction.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying increase friction.",
      "Avoid: Saying efficiency can be made greater than 100%.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Energy efficiency improvement. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-energy-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "energy",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Synoptic energy transfer. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Wave properties. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Frequency. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A wave has frequency 8.0 Hz and wavelength 0.50 m. Calculate the wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 8.0 × 0.50",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 4.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 8.0 × 0.50 = 4.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing frequency by wavelength.", "Avoid: Giving the answer in Hz."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Wave speed. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Transverse and longitudinal waves. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Sound waves. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student hears an echo 0.80 s after making a sound. The speed of sound is 340 m/s. Calculate the distance to the wall.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed of sound", "distance", "m"]],
      },
      {
        point: "Total distance travelled by sound = 340 × 0.80 = 272 m",
        keywords: [["distance", "m"]],
      },
      {
        point: "The sound travels to the wall and back",
        keywords: [["sound", "travels", "wall"]],
      },
      {
        point: "Distance to wall = 272 / 2 = 136 m",
        keywords: [["distance", "m"]],
      },
    ],
    examinerKeywords: ["echo", "speed of sound", "distance", "divide by 2", "m"],
    modelAnswer:
      "Total distance = 340 × 0.80 = 272 m. This is to the wall and back, so distance to wall = 272 / 2 = 136 m.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Forgetting to divide by 2.", "Avoid: Giving the unit as m/s."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Echoes. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Reflection. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Reflection practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Refraction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Total internal reflection. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
        keywords: [["converging lens"]],
      },
      {
        point: "A real image forms where the rays meet, near the principal focus",
        keywords: [["principal focus", "real image"]],
      },
    ],
    examinerKeywords: [
      "converging lens",
      "parallel rays",
      "refraction",
      "principal focus",
      "real image",
    ],
    modelAnswer:
      "Rays from a distant object are almost parallel. A converging lens refracts them so they meet near the principal focus, forming a real image on the screen.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a converging lens always makes rays diverge.",
      "Avoid: Saying a real image cannot form on a screen.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Lenses. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnetic spectrum. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnetic wave properties. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Uses of electromagnetic radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Hazards of electromagnetic radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Ultrasound. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Diffraction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Ripple tank practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: The eye. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-waves-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student counts 18 waves passing a point in 6.0 s. The wavelength is 0.40 m. Calculate the frequency and wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "number of waves", "time"]],
      },
      {
        point: "Substitution: frequency = 18 / 6.0",
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
        point: "Substitution: wave speed = 3.0 × 0.40 = 1.2 m/s",
        keywords: [["wave speed"]],
      },
    ],
    examinerKeywords: ["frequency", "number of waves", "time", "wavelength", "wave speed"],
    modelAnswer:
      "frequency = 18 / 6.0 = 3.0 Hz. wave speed = frequency × wavelength = 3.0 × 0.40 = 1.2 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 6.0 / 18 for frequency.",
      "Avoid: Giving wave speed in Hz.",
      "Avoid: Forgetting to calculate frequency first.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Wave data. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
        keywords: [["fixed positions", "regular"]],
      },
      {
        point: "Particles vibrate about fixed positions",
        keywords: [["fixed positions", "vibrate"]],
      },
    ],
    examinerKeywords: ["solid", "closely packed", "fixed positions", "regular", "vibrate"],
    modelAnswer:
      "In a solid, particles are closely packed in fixed positions and vibrate about those positions.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying solid particles do not move at all.",
      "Avoid: Saying solid particles move freely past each other.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: States of matter. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Liquids and gases. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Density. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A block has a mass of 720 g and volume of 300 cm³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 720 / 300",
        keywords: [["density"]],
      },
      {
        point: "Answer: 2.4 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 720 / 300 = 2.4 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying mass by volume.", "Avoid: Forgetting the unit g/cm³."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Density calculation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Density practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Internal energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Temperature. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Thermal expansion. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
        point: "Unit is J/kg °C or J/kg K",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "1 kg", "1 °C", "J/kg °C"],
    modelAnswer:
      "Specific heat capacity is the energy needed to raise the temperature of 1 kg of a substance by 1 °C.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: ["Avoid: Forgetting to mention 1 kg.", "Avoid: Confusing it with specific latent heat."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Specific heat capacity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.50 kg block is heated using 4200 J of energy. Its temperature rises by 20 °C. Calculate the specific heat capacity of the block.",
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
        point: "Substitution: c = 4200 / (0.50 × 20)",
        keywords: [["4200"]],
      },
      {
        point: "c = 4200 / 10",
        keywords: [["4200"]],
      },
      {
        point: "Answer: 420 J/kg °C",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature change", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = E / mΔT = 4200 / (0.50 × 20) = 420 J/kg °C.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting brackets around mass × temperature change.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Heating calculation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Change of state. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Specific latent heat. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Gas pressure. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Gas pressure and temperature. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A gas at constant volume has pressure 120 kPa at 300 K. The temperature increases to 450 K. Calculate the new pressure.",
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
        point: "Substitution: 120 / 300 = p2 / 450",
        keywords: [["120", "300", "450"]],
      },
      {
        point: "Answer: p2 = 180 kPa",
        keywords: [["kpa"]],
      },
    ],
    examinerKeywords: ["pressure", "temperature", "constant volume", "kelvin", "kPa"],
    modelAnswer: "p1 / T1 = p2 / T2, so 120 / 300 = p2 / 450. p2 = 180 kPa.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using Celsius instead of kelvin.",
      "Avoid: Assuming pressure decreases when temperature increases.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Pressure law. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Conduction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Convection. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State two surface properties that make an object a good absorber of thermal radiation.",
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
    examinerKeywords: ["thermal radiation", "black", "dark", "matt", "absorber"],
    modelAnswer: "A black, matt surface is a good absorber of thermal radiation.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying shiny white surfaces are the best absorbers.",
      "Avoid: Confusing absorption with reflection.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Thermal radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Evaporation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-particle-model-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "particle-model",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Cooling practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electric current. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.75 A flows for 40 s. Calculate the charge transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.75 × 40",
        keywords: [["charge", "c"]],
      },
      {
        point: "Answer: 30 C",
        keywords: [["c"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "C"],
    modelAnswer: "charge = current × time = 0.75 × 40 = 30 C.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing current by time.", "Avoid: Using A as the unit for charge."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Charge. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Potential difference. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A component has a potential difference of 9.0 V and a current of 0.30 A. Calculate its resistance.",
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
        point: "Substitution: resistance = 9.0 / 0.30",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 30 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "potential difference", "current", "Ω"],
    modelAnswer: "R = V / I = 9.0 / 0.30 = 30 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Giving the answer in volts."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Resistance. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Series circuits. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why lamps connected in parallel are usually brighter than identical lamps connected in series to the same supply.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Each lamp in parallel has the full supply potential difference across it",
        keywords: [["parallel", "full voltage"]],
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
    examinerKeywords: ["parallel", "full voltage", "series", "shared voltage", "power"],
    modelAnswer:
      "In parallel, each lamp has the full supply voltage. In series, the voltage is shared between lamps. The parallel lamps transfer more power, so they are brighter.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying current is always the same in each parallel branch.",
      "Avoid: Only saying parallel is brighter without explaining why.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Parallel circuits. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A motor has a current of 2.5 A and a potential difference of 12 V. Calculate the electrical power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: electrical power = current × voltage",
        keywords: [["power", "current", "voltage"]],
      },
      {
        point: "Substitution: power = 2.5 × 12",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 30 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "W"],
    modelAnswer: "power = current × voltage = 2.5 × 12 = 30 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using resistance instead of voltage.", "Avoid: Giving the unit as J."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electrical power. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 60 W lamp is switched on for 180 s. Calculate the energy transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy transferred", "power", "time"]],
      },
      {
        point: "Substitution: energy = 60 × 180",
        keywords: [["energy transferred"]],
      },
      {
        point: "Answer: 10800 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "J"],
    modelAnswer: "energy transferred = power × time = 60 × 180 = 10800 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing power by time.", "Avoid: Writing W as the unit for energy."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electrical energy transfer. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Circuit meters. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
    hints: ["Avoid: Saying all conductors are ohmic.", "Avoid: Forgetting constant temperature."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Ohmic conductors. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
        point: "Dependent variable is resistance calculated from R = V / I",
        keywords: [["resistance wire", "r = v/i"]],
      },
      {
        point:
          "Connect the ammeter in series and the voltmeter in parallel across the selected wire length",
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
      "OxfordAQA International GCSE Physics 9203: Resistance wire practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Static electricity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
    modelAnswer: "They repel each other due to an electrostatic force.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying same charges attract.",
      "Avoid: Saying objects must touch to exert a force.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electric fields. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Magnetic fields. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Magnetic field practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnets. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnet practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Magnetic effect of current. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Motor effect. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-electricity-magnetism-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "electricity-magnetism",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnetic induction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the main energy transfer in a generator in a power station.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Kinetic energy is transferred to electrical energy",
        keywords: [["kinetic energy", "electrical energy"]],
      },
      {
        point: "The generator is turned by a turbine or rotating input",
        keywords: [["generator", "turbine"]],
      },
    ],
    examinerKeywords: ["generator", "kinetic energy", "electrical energy", "turbine"],
    modelAnswer:
      "A generator transfers kinetic energy from a rotating turbine into electrical energy.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a generator stores electricity.",
      "Avoid: Saying electrical energy is transferred into kinetic energy in a generator.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electricity generation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by electromagnetic induction.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Electromagnetic induction is the production of a potential difference across a conductor",
        keywords: [["electromagnetic induction", "potential difference", "conductor"]],
      },
      {
        point: "It occurs when there is a change in magnetic field through or around the conductor",
        keywords: [["conductor"]],
      },
    ],
    examinerKeywords: [
      "electromagnetic induction",
      "potential difference",
      "conductor",
      "changing magnetic field",
    ],
    modelAnswer:
      "Electromagnetic induction is the production of a potential difference across a conductor when the magnetic field through it changes.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying induction needs a battery.",
      "Avoid: Forgetting the magnetic field must change.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electromagnetic induction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Induced potential difference. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Direction of induced current. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: AC generator. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare alternating current and direct current.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Direct current flows in one direction only",
        keywords: [["direct current", "direction"]],
      },
      {
        point: "Alternating current repeatedly changes direction",
        keywords: [["alternating current", "direct current", "direction"]],
      },
      {
        point: "Direct current is supplied by cells and batteries",
        keywords: [["direct current"]],
      },
      {
        point: "Mains electricity is alternating current",
        keywords: [["alternating current", "mains"]],
      },
    ],
    examinerKeywords: ["alternating current", "direct current", "direction", "battery", "mains"],
    modelAnswer:
      "Direct current flows in one direction only and is supplied by cells or batteries. Alternating current repeatedly changes direction and is used in the mains supply.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying a.c. and d.c. are the same.",
      "Avoid: Saying batteries produce alternating current.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: AC and DC. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the main parts of a transformer.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A transformer has a primary coil",
        keywords: [["transformer", "primary coil"]],
      },
      {
        point: "A transformer has a secondary coil",
        keywords: [["transformer", "secondary coil"]],
      },
      {
        point: "The coils are wound around an iron core",
        keywords: [["iron core"]],
      },
    ],
    examinerKeywords: ["transformer", "primary coil", "secondary coil", "iron core"],
    modelAnswer: "A transformer has a primary coil and a secondary coil wound around an iron core.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying transformers need a split-ring commutator.",
      "Avoid: Forgetting the iron core.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Transformer structure. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Transformer action. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 200 turns on the primary coil and 1000 turns on the secondary coil. The primary voltage is 24 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary turns", "secondary turns", "voltage"]],
      },
      {
        point: "Substitution: Vs / 24 = 1000 / 200",
        keywords: [["1000", "200"]],
      },
      {
        point: "Vs = 24 × 5",
        keywords: [["mark point"]],
      },
      {
        point: "Answer: 120 V",
        keywords: [["120"]],
      },
    ],
    examinerKeywords: ["transformer", "primary turns", "secondary turns", "voltage", "turns ratio"],
    modelAnswer: "Vs / Vp = Ns / Np, so Vs / 24 = 1000 / 200 = 5. Therefore Vs = 120 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the turns ratio upside down.",
      "Avoid: Giving the answer in turns instead of volts.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Step-up transformers. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has a primary voltage of 230 V and a secondary voltage of 46 V. The primary coil has 500 turns. Calculate the number of turns on the secondary coil.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary voltage", "secondary voltage", "turns ratio"]],
      },
      {
        point: "Substitution: 46 / 230 = Ns / 500",
        keywords: [["230", "500"]],
      },
      {
        point: "Ns = 500 × 46 / 230",
        keywords: [["500", "230"]],
      },
      {
        point: "Answer: 100 turns",
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
    modelAnswer: "Vs / Vp = Ns / Np, so 46 / 230 = Ns / 500. Ns = 500 × 46 / 230 = 100 turns.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the voltage ratio upside down.",
      "Avoid: Writing volts as the unit for turns.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Step-down transformers. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why electrical energy is transmitted at high voltage in the National Grid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "For the same power transfer, increasing voltage decreases current",
        keywords: [["same", "power", "transfer"]],
      },
      {
        point: "Lower current reduces heating in transmission cables",
        keywords: [["low current", "heating"]],
      },
      {
        point: "Less energy is dissipated to the surroundings",
        keywords: [["energy loss"]],
      },
      {
        point: "This makes transmission more efficient",
        keywords: [["makes", "transmission", "more"]],
      },
    ],
    examinerKeywords: [
      "National Grid",
      "high voltage",
      "low current",
      "heating",
      "energy loss",
      "efficiency",
    ],
    modelAnswer:
      "For the same power, a higher voltage means a lower current. Lower current reduces heating in the cables, so less energy is wasted and transmission is more efficient.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Saying voltage is stepped up to make electricity safer for homes.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: National grid. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the roles of step-up and step-down transformers in the National Grid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Step-up transformers increase voltage before long-distance transmission",
        keywords: [["step-up transformer", "step-down transformer", "voltage"]],
      },
      {
        point: "Increasing voltage reduces current for the same power transfer",
        keywords: [["voltage", "current"]],
      },
      {
        point: "Step-down transformers reduce voltage before electricity reaches consumers",
        keywords: [["step-up transformer", "step-down transformer", "voltage"]],
      },
      {
        point: "Reducing voltage makes the supply safer and suitable for domestic use",
        keywords: [["voltage"]],
      },
    ],
    examinerKeywords: [
      "step-up transformer",
      "step-down transformer",
      "National Grid",
      "voltage",
      "current",
      "consumers",
    ],
    modelAnswer:
      "Step-up transformers increase the voltage before transmission, reducing current and energy losses. Step-down transformers reduce the voltage before electricity reaches homes, making it safer and suitable for use.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Swapping the roles of step-up and step-down transformers.",
      "Avoid: Not explaining why high voltage is used.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Step-up and step-down transformers. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A power station transfers 500000 W of power at a voltage of 25000 V. Calculate the current in the transmission cable.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = current × voltage",
        keywords: [["power", "current", "voltage"]],
      },
      {
        point: "Rearrangement: current = power / voltage",
        keywords: [["power", "current", "voltage"]],
      },
      {
        point: "Substitution: current = 500000 / 25000",
        keywords: [["current"]],
      },
      {
        point: "Answer: 20 A",
        keywords: [["a"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "transmission cable", "A"],
    modelAnswer: "P = IV, so I = P / V = 500000 / 25000 = 20 A.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Multiplying power by voltage.",
      "Avoid: Giving the answer in watts instead of amperes.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Power transmission calculation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A cable transfers 200 kJ of electrical energy. 12 kJ is dissipated as thermal energy. Calculate the percentage efficiency of the transfer.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Useful energy transferred = 200 - 12 = 188 kJ",
        keywords: [["useful energy", "kj"]],
      },
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful energy"]],
      },
      {
        point: "Substitution: efficiency = 188 / 200 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 94%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful energy", "dissipated energy", "percentage", "kJ"],
    modelAnswer: "Useful energy = 200 - 12 = 188 kJ. efficiency = 188 / 200 × 100 = 94%.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using dissipated energy as useful output.",
      "Avoid: Forgetting to subtract the wasted energy.",
      "Avoid: Forgetting to multiply by 100.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Efficiency of transmission. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe the energy transfers in a fossil-fuel power station.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Chemical energy is stored in the fuel",
        keywords: [["chemical energy"]],
      },
      {
        point: "The fuel is burned and energy is transferred to thermal energy of water",
        keywords: [["thermal energy"]],
      },
      {
        point: "Water becomes steam with kinetic energy",
        keywords: [["steam"]],
      },
      {
        point: "The steam turns a turbine, transferring energy mechanically",
        keywords: [["steam", "turbine"]],
      },
      {
        point: "The generator transfers kinetic energy to electrical energy",
        keywords: [["generator", "electrical energy"]],
      },
    ],
    examinerKeywords: [
      "fossil fuel",
      "chemical energy",
      "thermal energy",
      "steam",
      "turbine",
      "generator",
      "electrical energy",
    ],
    modelAnswer:
      "The fuel has chemical energy. When it burns, energy is transferred to the thermal energy store of water, producing steam. The moving steam turns a turbine, and the generator transfers kinetic energy into electrical energy.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying electricity is stored inside the fuel.",
      "Avoid: Forgetting the turbine or generator.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Fossil fuel power stations. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare wind turbines and gas-fired power stations for electricity generation.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Wind turbines use a renewable energy resource",
        keywords: [["wind turbine", "renewable"]],
      },
      {
        point: "Wind turbines produce no greenhouse gases during operation",
        keywords: [["wind turbine", "gas-fired power station"]],
      },
      {
        point: "Wind turbine output is variable because wind speed changes",
        keywords: [["wind turbine", "variable output"]],
      },
      {
        point: "Gas-fired power stations can respond quickly to demand",
        keywords: [["gas-fired power station", "demand"]],
      },
      {
        point: "Gas-fired power stations burn a non-renewable fuel",
        keywords: [["gas-fired power station", "renewable"]],
      },
      {
        point:
          "Burning gas releases carbon dioxide, so a justified conclusion should balance reliability against environmental impact",
        keywords: [["gas-fired power station", "carbon dioxide"]],
      },
    ],
    examinerKeywords: [
      "wind turbine",
      "gas-fired power station",
      "renewable",
      "variable output",
      "reliable",
      "carbon dioxide",
      "demand",
    ],
    modelAnswer:
      "Wind turbines use a renewable resource and release no greenhouse gases during operation, but their output varies with wind speed. Gas-fired power stations can respond quickly to demand, but they burn a non-renewable fuel and release carbon dioxide. Wind is cleaner, while gas is more reliable and controllable.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying wind turbines release carbon dioxide during operation.",
      "Avoid: Saying gas is renewable.",
      "Avoid: Only giving one side of the comparison.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Renewable generation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Mains electricity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Fuse safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Earth wire safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-generating-distributing-electricity-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "generating-distributing-electricity",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why step-up and step-down transformers are both needed in a national electricity distribution system.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Step-up transformers increase voltage before transmission",
        keywords: [["step-up transformer", "step-down transformer"]],
      },
      {
        point: "For the same power, higher voltage means lower current",
        keywords: [["high voltage", "low current"]],
      },
      {
        point: "Lower current reduces heating losses in cables",
        keywords: [["low current", "heating losses"]],
      },
      {
        point: "This makes long-distance transmission more efficient",
        keywords: [["makes", "long", "distance"]],
      },
      {
        point: "Step-down transformers reduce voltage near consumers",
        keywords: [["step-up transformer", "step-down transformer", "consumers"]],
      },
      {
        point: "Lower voltage is safer and suitable for domestic appliances",
        keywords: [["low current"]],
      },
    ],
    examinerKeywords: [
      "step-up transformer",
      "step-down transformer",
      "high voltage",
      "low current",
      "heating losses",
      "consumers",
      "safety",
    ],
    modelAnswer:
      "Step-up transformers increase the voltage before transmission. For the same power, this reduces the current, so less energy is dissipated as heating in the cables. Step-down transformers then reduce the voltage near consumers, making the supply safer and suitable for domestic appliances.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Forgetting the step-down transformer.",
      "Avoid: Saying transformers work with d.c.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Transmission synoptic. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Atomic structure. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An atom has mass number 27 and proton number 13. Calculate the number of neutrons.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: number of neutrons = mass number - proton number",
        keywords: [["mass number", "proton number", "neutrons"]],
      },
      {
        point: "Substitution: neutrons = 27 - 13",
        keywords: [["neutrons"]],
      },
      {
        point: "Answer: 14 neutrons",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["mass number", "proton number", "neutrons", "nucleus"],
    modelAnswer: "number of neutrons = 27 - 13 = 14 neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding mass number and proton number.",
      "Avoid: Confusing neutrons with electrons.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Nuclear notation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Isotopes. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Alpha radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Beta radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Gamma radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Ionisation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Background radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Detecting radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Half-life. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has an initial count rate of 640 counts per minute. Its half-life is 5.0 minutes. Calculate the count rate after 15 minutes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of half-lives = 15 / 5.0 = 3",
        keywords: [["half-life"]],
      },
      {
        point: "After one half-life: 640 / 2 = 320 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "After three half-lives: 640 / 2 / 2 / 2",
        keywords: [["half-life"]],
      },
      {
        point: "Answer: 80 counts per minute",
        keywords: [["count rate", "counts per minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer:
      "15 minutes is 3 half-lives. The count rate halves three times: 640 → 320 → 160 → 80 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Dividing by 3 instead of halving three times.",
      "Avoid: Subtracting a fixed amount each half-life.",
      "Avoid: Forgetting the unit.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Half-life calculation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Random decay. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Alpha decay. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Radiation safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Medical tracers. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Nuclear fission. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Nuclear fusion. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Nuclear reactor. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Nuclear power evaluation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-nuclear-physics-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "nuclear-physics",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A corrected count rate decreases from 800 counts per minute to 100 counts per minute. Determine how many half-lives have passed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "800 to 400 is one half-life",
        keywords: [["half-life"]],
      },
      {
        point: "400 to 200 is two half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "200 to 100 is three half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "Answer: 3 half-lives",
        keywords: [["half-life"]],
      },
    ],
    examinerKeywords: ["half-life", "corrected count rate", "halve", "counts per minute"],
    modelAnswer:
      "The count rate halves from 800 to 400, then 200, then 100. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing 800 by 100 and saying 8 half-lives.",
      "Avoid: Subtracting a fixed amount each half-life.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Half-life graph. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Solar System. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Orbital motion. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A moon travels 720000 km in one orbit. The orbit takes 60 days. Calculate the average orbital speed in km/day.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["distance", "time"]],
      },
      {
        point: "Substitution: speed = 720000 / 60",
        keywords: [["speed", "720000"]],
      },
      {
        point: "Answer: 12000 km/day",
        keywords: [["km/day"]],
      },
    ],
    examinerKeywords: ["orbital speed", "distance", "time", "km/day"],
    modelAnswer: "speed = distance / time = 720000 / 60 = 12000 km/day.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit km/day."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Orbital speed. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Satellite orbit. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Comets. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: The Sun. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Fusion in stars. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Star formation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Main sequence stars. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Sun-like star life cycle. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Massive star life cycle. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Galaxies. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Light-year. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Light travels at 3.0 × 10⁸ m/s. Calculate the distance travelled by light in 40 s.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: distance = 3.0 × 10⁸ × 40",
        keywords: [["distance"]],
      },
      {
        point: "Answer: 1.2 × 10¹⁰ m",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["light", "speed", "distance", "time", "standard form"],
    modelAnswer: "distance = speed × time = 3.0 × 10⁸ × 40 = 1.2 × 10¹⁰ m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing speed by time.",
      "Avoid: Writing 1.2 × 10⁹ m.",
      "Avoid: Forgetting the unit m.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Light distance. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Redshift. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Expanding Universe. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Cosmic microwave background radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Big Bang evidence. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Star colour and temperature. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-space-physics-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "space-physics",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Apparent brightness. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
        keywords: [["dependent variable", "measured"]],
      },
    ],
    examinerKeywords: ["independent variable", "changed", "dependent variable", "measured"],
    modelAnswer:
      "The independent variable is changed by the investigator. The dependent variable is measured in response.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Swapping independent and dependent variables.",
      "Avoid: Saying both variables are kept constant.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Variables. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "Control variables are kept constant to make the experiment fair. This helps show that changes in the dependent variable are caused by the independent variable.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying control variables are measured.",
      "Avoid: Not linking control variables to a fair test.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Control variables. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Repeat readings. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
        point: "Precise results can still be inaccurate if there is a systematic error",
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
      "OxfordAQA International GCSE Physics 9203: Accuracy and precision. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Resolution. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A length is measured as 20.0 cm with an uncertainty of ±0.1 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage uncertainty", "uncertainty", "measured value"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.1 / 20.0 × 100",
        keywords: [["percentage uncertainty", "uncertainty", "percentage"]],
      },
      {
        point: "Answer: 0.5%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.1 / 20.0 × 100 = 0.5%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Percentage uncertainty. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
        point: "Units should be included in column headings, not repeated in every row",
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
      "A results table should have clear column headings with units in the headings. Readings should use suitable decimal places, and repeats and mean values should be included where appropriate.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Putting units in every data cell.",
      "Avoid: Using inconsistent decimal places.",
      "Avoid: Not labelling columns.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Tables. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Graph plotting. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
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
      "OxfordAQA International GCSE Physics 9203: Gradient. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Explain",
    questionText:
      "A student records times of 1.8 s, 1.9 s and 4.7 s. Explain how the student should treat these results.",
    marks: 3,
    markSchemePoints: [
      {
        point: "4.7 s is likely to be an anomalous result",
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
      "The 4.7 s reading is likely to be anomalous because it is very different from the other readings. The student should repeat it and exclude it from the mean if it is confirmed as anomalous.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Averaging all readings without comment.",
      "Avoid: Deleting the reading without justification.",
      "Avoid: Calling 1.8 s the anomaly.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Anomalies. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student measures currents of 0.26 A, 0.24 A and 0.25 A. Calculate the mean current.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: mean = sum of readings / number of readings",
        keywords: [["mean", "readings", "a"]],
      },
      {
        point: "Substitution: mean = (0.26 + 0.24 + 0.25) / 3",
        keywords: [["mean", "a"]],
      },
      {
        point: "Answer: 0.25 A",
        keywords: [["a"]],
      },
    ],
    examinerKeywords: ["mean", "current", "readings", "A"],
    modelAnswer: "mean = (0.26 + 0.24 + 0.25) / 3 = 0.75 / 3 = 0.25 A.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing by 2 instead of 3.", "Avoid: Forgetting the unit A."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Mean calculation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Parallax error. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Meniscus. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Density practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Circuit practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Pendulum practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Uncertainty reduction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Resistance wire safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-required-practical-skills-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "required-practical-skills",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Method improvement. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A car travels 1.5 km in 100 s. Calculate its average speed in m/s.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert distance: 1.5 km = 1500 m",
        keywords: [["distance", "m/s"]],
      },
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 1500 / 100",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 15 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "conversion", "m/s"],
    modelAnswer: "1.5 km = 1500 m. speed = 1500 / 100 = 15 m/s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using 1.5 m instead of 1500 m.", "Avoid: Multiplying distance by time."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Motion. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A resultant force of 48 N acts on a 6.0 kg object. Calculate its acceleration.",
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
        point: "Substitution: acceleration = 48 / 6.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 8.0 m/s²",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "resultant force"],
    modelAnswer: "F = ma, so a = 48 / 6.0 = 8.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by mass.", "Avoid: Writing m/s instead of m/s²."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Forces. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A machine has useful output energy 240 J and total input energy 800 J. Calculate the efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful output", "input energy"]],
      },
      {
        point: "Substitution: efficiency = 240 / 800 × 100",
        keywords: [["efficiency"]],
      },
      {
        point: "Answer: 30%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "input energy", "percentage"],
    modelAnswer: "efficiency = 240 / 800 × 100 = 30%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy instead of useful output.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A wave has frequency 15 Hz and wavelength 0.20 m. Calculate its wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 15 × 0.20",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 3.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 15 × 0.20 = 3.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing wavelength by frequency.", "Avoid: Giving the unit as Hz."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Waves. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resistor has current 0.50 A and resistance 18 Ω. Calculate the potential difference across it.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Substitution: voltage = 0.50 × 18",
        keywords: [["voltage", "v"]],
      },
      {
        point: "Answer: 9.0 V",
        keywords: [["v"]],
      },
    ],
    examinerKeywords: ["voltage", "current", "resistance", "potential difference", "V"],
    modelAnswer: "V = IR = 0.50 × 18 = 9.0 V.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing resistance by current.", "Avoid: Writing Ω as the unit."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electricity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Particle model. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has a count rate of 720 counts per minute. After two half-lives, calculate the count rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "After one half-life: 720 / 2 = 360 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "After two half-lives: 360 / 2 = 180 counts per minute",
        keywords: [["half-life", "count rate", "counts per minute"]],
      },
      {
        point: "Answer: 180 counts per minute",
        keywords: [["count rate", "counts per minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "The count rate halves twice: 720 → 360 → 180 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Dividing by 2 only once.", "Avoid: Subtracting a fixed amount."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Nuclear physics. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Space physics. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 100 turns on the primary coil and 400 turns on the secondary coil. The primary voltage is 12 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["turns ratio", "primary voltage", "secondary voltage"]],
      },
      {
        point: "Substitution: Vs / 12 = 400 / 100",
        keywords: [["400", "100"]],
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
    examinerKeywords: ["transformer", "turns ratio", "primary voltage", "secondary voltage"],
    modelAnswer: "Vs / Vp = Ns / Np. Vs / 12 = 400 / 100 = 4, so Vs = 48 V.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using the turns ratio upside down.", "Avoid: Forgetting the unit V."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Transformer. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnets. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 25 N acts at a perpendicular distance of 0.30 m from a pivot. Calculate the moment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance",
        keywords: [["moment", "force", "perpendicular distance"]],
      },
      {
        point: "Substitution: moment = 25 × 0.30",
        keywords: [["moment", "n m"]],
      },
      {
        point: "Answer: 7.5 N m",
        keywords: [["n m"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 25 × 0.30 = 7.5 N m.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using distance that is not perpendicular.", "Avoid: Forgetting the unit N m."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Moments. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A liquid has mass 84 g and volume 70 cm³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 84 / 70",
        keywords: [["density"]],
      },
      {
        point: "Answer: 1.2 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 84 / 70 = 1.2 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying mass by volume.", "Avoid: Using cm² instead of cm³."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Density. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Thermal transfer. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnetic spectrum. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Refraction. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electrical safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe the changes to proton number and mass number when a nucleus emits an alpha particle.",
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
    modelAnswer: "The proton number decreases by 2 and the mass number decreases by 4.",
    difficulty: "medium",
    suggestedMinutes: 4,
    hints: [
      "Avoid: Saying the mass number stays the same.",
      "Avoid: Confusing alpha decay with beta decay.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Alpha decay. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Stellar evolution. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Momentum and safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-paper12-mixed-mock-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "paper-1-2-mixed",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why transformers are used in electricity transmission over long distances.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Step-up transformers increase voltage before transmission",
        keywords: [["transformer", "step-down"]],
      },
      {
        point: "For the same power, higher voltage means lower current",
        keywords: [["high voltage", "low current"]],
      },
      {
        point: "Lower current reduces heating losses in cables",
        keywords: [["low current", "heating losses"]],
      },
      {
        point: "Less energy is dissipated to the surroundings",
        keywords: [["energy dissipated"]],
      },
      {
        point: "Step-down transformers reduce voltage near consumers for safer use",
        keywords: [["transformer", "step-down"]],
      },
    ],
    examinerKeywords: [
      "transformer",
      "high voltage",
      "low current",
      "heating losses",
      "energy dissipated",
      "step-down",
    ],
    modelAnswer:
      "Step-up transformers increase the voltage before transmission. For the same power, this reduces the current, so less energy is wasted as heating in the cables. Step-down transformers reduce the voltage near consumers so the electricity is safer to use.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Forgetting step-down transformers.",
      "Avoid: Saying transformers work with direct current.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Power transmission. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A runner travels 400 m in 50 s. Calculate the average speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 400 / 50",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 8.0 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 400 / 50 = 8.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying distance by time.", "Avoid: Forgetting the unit m/s."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Speed. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A train travels 3.6 km in 120 s. Calculate its average speed in m/s.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert distance: 3.6 km = 3600 m",
        keywords: [["distance", "m/s"]],
      },
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 3600 / 120",
        keywords: [["speed"]],
      },
      {
        point: "Answer: 30 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "conversion", "m/s"],
    modelAnswer: "3.6 km = 3600 m. speed = 3600 / 120 = 30 m/s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using 3.6 m instead of 3600 m.", "Avoid: Giving the answer in km/s."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Unit conversion. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A cyclist accelerates from 2.0 m/s to 14 m/s in 6.0 s. Calculate the acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change in velocity", "time"]],
      },
      {
        point: "Substitution: acceleration = (14 - 2.0) / 6.0",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 2.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (14 - 2.0) / 6.0 = 12 / 6.0 = 2.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using final velocity only.", "Avoid: Writing m/s instead of m/s²."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Acceleration. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A resultant force of 96 N acts on a 12 kg object. Calculate the acceleration.",
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
        point: "Substitution: acceleration = 96 / 12",
        keywords: [["acceleration"]],
      },
      {
        point: "Answer: 8.0 m/s²",
        keywords: [["m/s²"]],
      },
    ],
    examinerKeywords: ["resultant force", "mass", "acceleration", "m/s²"],
    modelAnswer: "F = ma, so a = F / m = 96 / 12 = 8.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying force by mass.", "Avoid: Forgetting the force must be resultant."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Resultant force. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An object has a mass of 4.8 kg. The gravitational field strength is 10 N/kg. Calculate the weight.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational field strength"]],
      },
      {
        point: "Substitution: weight = 4.8 × 10",
        keywords: [["weight", "n"]],
      },
      {
        point: "Answer: 48 N",
        keywords: [["n"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "N"],
    modelAnswer: "weight = mass × gravitational field strength = 4.8 × 10 = 48 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Weight. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.60 kg ball moves at 9.0 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.60 × 9.0",
        keywords: [["momentum"]],
      },
      {
        point: "Answer: 5.4 kg m/s",
        keywords: [["kg m/s"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.60 × 9.0 = 5.4 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Writing the unit as N.", "Avoid: Dividing velocity by mass."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Momentum. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 150 N moves an object 2.4 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work done", "force", "distance"]],
      },
      {
        point: "Substitution: work done = 150 × 2.4",
        keywords: [["work done"]],
      },
      {
        point: "Answer: 360 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "J"],
    modelAnswer: "work done = force × distance = 150 × 2.4 = 360 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using time instead of distance.", "Avoid: Giving the answer in N."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Work done. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 3.0 kg object moves at 6.0 m/s. Calculate its kinetic energy.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: kinetic energy = 1/2 × mass × speed²",
        keywords: [["kinetic energy", "mass", "speed squared"]],
      },
      {
        point: "Substitution: KE = 0.5 × 3.0 × 6.0²",
        keywords: [["mark point"]],
      },
      {
        point: "Calculation: KE = 0.5 × 3.0 × 36",
        keywords: [["calculation"]],
      },
      {
        point: "Answer: 54 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["kinetic energy", "mass", "speed squared", "J"],
    modelAnswer: "KE = 1/2mv² = 0.5 × 3.0 × 6.0² = 54 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting to square speed.",
      "Avoid: Using momentum instead of kinetic energy.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Kinetic energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 20 kg object is raised by 1.8 m. The gravitational field strength is 10 N/kg. Calculate the increase in gravitational potential energy.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Formula: gravitational potential energy = mass × gravitational field strength × height",
        keywords: [["gravitational potential energy", "mass", "height"]],
      },
      {
        point: "Substitution: GPE = 20 × 10 × 1.8",
        keywords: [["gpe"]],
      },
      {
        point: "Answer: 360 J",
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
    modelAnswer: "GPE = mgh = 20 × 10 × 1.8 = 360 J.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Forgetting gravitational field strength.",
      "Avoid: Using N as the energy unit.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Gravitational potential energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A motor transfers 8400 J of energy in 21 s. Calculate the power output.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy transferred", "time"]],
      },
      {
        point: "Substitution: power = 8400 / 21",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 400 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "W"],
    modelAnswer: "power = energy transferred / time = 8400 / 21 = 400 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Giving the unit as J."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Power. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A device has useful output power of 180 W and input power of 600 W. Calculate the efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output power / input power × 100",
        keywords: [["efficiency", "useful output power", "input power"]],
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
    examinerKeywords: ["efficiency", "useful output power", "input power", "percentage"],
    modelAnswer: "efficiency = 180 / 600 × 100 = 30%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using input / output instead of output / input.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Efficiency. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.40 A flows for 2.5 minutes. Calculate the charge transferred.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert time: 2.5 minutes = 150 s",
        keywords: [["time", "c"]],
      },
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.40 × 150",
        keywords: [["charge", "c"]],
      },
      {
        point: "Answer: 60 C",
        keywords: [["c"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "seconds", "C"],
    modelAnswer: "2.5 minutes = 150 s. charge = current × time = 0.40 × 150 = 60 C.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: ["Avoid: Using 2.5 s instead of 150 s.", "Avoid: Giving the answer in A."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Charge. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A component has a potential difference of 7.5 V and a current of 0.25 A. Calculate the resistance.",
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
        point: "Substitution: resistance = 7.5 / 0.25",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 30 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "voltage", "current", "Ω"],
    modelAnswer: "R = V / I = 7.5 / 0.25 = 30 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Giving the answer in volts."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Resistance. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A heater has current 4.0 A and potential difference 230 V. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = current × voltage",
        keywords: [["power", "current", "voltage"]],
      },
      {
        point: "Substitution: power = 4.0 × 230",
        keywords: [["power", "w"]],
      },
      {
        point: "Answer: 920 W",
        keywords: [["w"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "W"],
    modelAnswer: "power = current × voltage = 4.0 × 230 = 920 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Using resistance instead of voltage.", "Avoid: Giving the unit as J."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electrical power. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 750 W microwave is used for 120 s. Calculate the energy transferred.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy transferred", "power", "time"]],
      },
      {
        point: "Substitution: energy = 750 × 120",
        keywords: [["energy transferred"]],
      },
      {
        point: "Answer: 90000 J",
        keywords: [["j"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "J"],
    modelAnswer: "energy = power × time = 750 × 120 = 90000 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing power by time.", "Avoid: Writing W as the unit for energy."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Energy transferred electrically. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A metal cube has mass 2.7 kg and volume 1.0 × 10⁻³ m³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 2.7 / 1.0 × 10⁻³",
        keywords: [["density"]],
      },
      {
        point: "Answer: 2700 kg/m³",
        keywords: [["kg/m³"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "kg/m³"],
    modelAnswer: "density = mass / volume = 2.7 / 1.0 × 10⁻³ = 2700 kg/m³.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: ["Avoid: Multiplying mass by volume.", "Avoid: Giving kg/m² instead of kg/m³."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Density. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.80 kg block is heated with 9600 J of energy. Its temperature rises by 30 °C. Calculate the specific heat capacity.",
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
        point: "Substitution: c = 9600 / (0.80 × 30)",
        keywords: [["9600"]],
      },
      {
        point: "c = 9600 / 24",
        keywords: [["9600"]],
      },
      {
        point: "Answer: 400 J/kg °C",
        keywords: [["j/kg °c"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature change", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = E / mΔT = 9600 / (0.80 × 30) = 400 J/kg °C.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting brackets around mass × temperature change.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Specific heat capacity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A sound wave has frequency 850 Hz and wavelength 0.40 m. Calculate the speed of sound.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave speed", "frequency", "wavelength"]],
      },
      {
        point: "Substitution: wave speed = 850 × 0.40",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 340 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 850 × 0.40 = 340 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Dividing wavelength by frequency.", "Avoid: Giving the unit as Hz."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Wave speed. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has activity 960 Bq. After 24 minutes its activity is 120 Bq. Calculate the half-life.",
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
        point: "Total time = 24 minutes",
        keywords: [["minutes"]],
      },
      {
        point: "Formula: half-life = total time / number of half-lives",
        keywords: [["half-life"]],
      },
      {
        point: "Half-life = 24 / 3 = 8 minutes",
        keywords: [["half-life", "minutes"]],
      },
    ],
    examinerKeywords: ["half-life", "activity", "halve", "Bq", "minutes"],
    modelAnswer:
      "960 halves to 480, then 240, then 120, so 3 half-lives have passed. Half-life = 24 / 3 = 8 minutes.",
    difficulty: "hard",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Dividing 960 by 120 and saying 8 minutes.",
      "Avoid: Counting the number of halvings incorrectly.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Half-life. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-calculation-heavy-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has primary voltage 230 V and secondary voltage 46 V. The primary coil has 750 turns. Calculate the number of turns on the secondary coil.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["primary voltage", "secondary voltage", "turns ratio"]],
      },
      {
        point: "Substitution: 46 / 230 = Ns / 750",
        keywords: [["230", "750"]],
      },
      {
        point: "Ns = 750 × 46 / 230",
        keywords: [["750", "230"]],
      },
      {
        point: "Answer: 150 turns",
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
    modelAnswer: "Vs / Vp = Ns / Np, so 46 / 230 = Ns / 750. Ns = 150 turns.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using the ratio upside down.",
      "Avoid: Giving the answer in volts instead of turns.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Transformer. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
    examinerKeywords: [
      "momentum",
      "stopping time",
      "force",
      "airbag",
      "pressure",
      "crumple zone",
      "deformation",
    ],
    modelAnswer:
      "In a crash, the passenger's momentum changes to zero. Seat belts and airbags increase the stopping time, reducing the force. Airbags also spread the force over a larger area, reducing pressure. Crumple zones deform, absorb energy and increase the stopping time of the car, reducing forces on passengers.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying safety features stop momentum from changing.",
      "Avoid: Not linking stopping time to reduced force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Vehicle safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Solar panels use a renewable source and produce no greenhouse gases during operation, but their output depends on sunlight, weather and time of day. Fossil-fuel power stations can generate electricity reliably when demand changes, but fossil fuels are non-renewable and release carbon dioxide. Solar is more sustainable, while fossil fuels are more controllable.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying solar panels work equally well at night.",
      "Avoid: Saying fossil fuels are renewable.",
      "Avoid: Only giving one side of the comparison.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Energy resources. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
        point: "The vacuum prevents convection because there are no particles to move in bulk",
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
      "The vacuum reduces conduction because there are very few particles and prevents convection because particles cannot move in bulk. Silvered surfaces reflect infrared radiation and are poor emitters. The stopper reduces convection and evaporation from the top. These features reduce thermal energy transfer.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying convection occurs through a vacuum.",
      "Avoid: Saying shiny surfaces are good emitters.",
      "Avoid: Only naming parts without explaining them.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Thermal insulation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
        point: "This prevents the user receiving a large electric shock from the case",
        keywords: [["large current", "electric shock"]],
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
      "If the live wire touches the metal case, the case could become live. The earth wire gives a low-resistance path to ground, so a large current flows. This melts the fuse, breaking the circuit and disconnecting the supply, reducing electric shock risk.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the earth wire carries current in normal use.",
      "Avoid: Saying the fuse reduces voltage slowly.",
      "Avoid: Not linking large current to the fuse melting.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electrical safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Nuclear fission power stations produce large amounts of reliable electricity and do not release carbon dioxide during normal operation. However, the fuel is non-renewable and radioactive waste must be stored safely for a long time. Accidents could release radioactive material. Nuclear power is useful for low-carbon reliable electricity, but waste and safety risks must be managed.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying nuclear power releases carbon dioxide during normal operation.",
      "Avoid: Ignoring radioactive waste.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Nuclear power. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "A motor uses the motor effect: a current-carrying coil in a magnetic field experiences forces and rotates, transferring electrical energy to kinetic energy. A generator uses electromagnetic induction: rotating a coil in a magnetic field induces a potential difference, transferring kinetic energy to electrical energy.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying motors and generators are identical.",
      "Avoid: Confusing motor effect with induction.",
      "Avoid: Not comparing energy transfers.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Motors and generators. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Gas particles move randomly and collide with the container walls, exerting forces that produce pressure. When temperature increases, particles gain average kinetic energy and move faster. They collide with the walls more often and more forcefully, so pressure increases because volume is constant.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gas particles expand.",
      "Avoid: Not linking collisions to pressure.",
      "Avoid: Saying volume increases when the container is sealed.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Gas pressure. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Big Bang evidence. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
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
      "Ionising radiation is useful because X-rays and tracers can diagnose conditions, and radiotherapy can kill cancer cells. However, it can damage healthy cells and DNA. Risks are reduced by shielding, short exposure times and controlled doses. The benefits can outweigh the risks when exposure is carefully controlled.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying medical radiation is completely safe.",
      "Avoid: Only discussing imaging and not treatment.",
      "Avoid: Not giving a judgement.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Medical radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Ultrasound is high-frequency sound that reflects at tissue boundaries to form images. It is non-ionising, so it is useful for fetus scans. X-rays are ionising electromagnetic waves. They pass through soft tissue but are absorbed more by bone, giving clear bone images. However, X-rays can damage cells or DNA.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying ultrasound is ionising.",
      "Avoid: Saying X-rays are sound waves.",
      "Avoid: Only giving uses with no safety comparison.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Ultrasound and X-rays. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "A massive star forms when gas and dust in a nebula collapse under gravity to form a protostar. When fusion begins, it becomes a main sequence star. After hydrogen fuel runs low, it expands into a red supergiant and explodes as a supernova. The remaining core becomes a neutron star or black hole.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying massive stars become white dwarfs.",
      "Avoid: Forgetting the supernova stage.",
      "Avoid: Not mentioning fusion in the main sequence.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Star life cycles. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Step-up transformers increase voltage before transmission. For the same power, a higher voltage means a lower current, so less energy is wasted as heating in cables. Near consumers, step-down transformers reduce the voltage to a safer value suitable for homes.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying high current reduces energy loss.",
      "Avoid: Forgetting the step-down transformer.",
      "Avoid: Saying transformers work with direct current.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electricity transmission. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
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
      "Liquid pressure increases with depth because there is more water above the submarine. The weight of water produces a larger force per unit area, and pressure acts in all directions. Deep underwater, outside pressure is much greater than inside pressure, so a strong hull is needed to prevent crushing.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying pressure only acts downward.",
      "Avoid: Saying pressure decreases with depth.",
      "Avoid: Not linking pressure to force per unit area.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Pressure and depth. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "The ruler should be fixed close to the spring and a pointer used to reduce parallax error. The student should measure original length and subtract it from each loaded length to find extension. Loads should be added gradually so the limit of proportionality is not exceeded. Repeating readings and calculating a mean improves reliability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using total length instead of extension.",
      "Avoid: Ignoring the limit of proportionality.",
      "Avoid: Only saying repeat without explaining why.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Practical evaluation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Ultraviolet is useful in fluorescent lamps and security marking but can damage skin. X-rays are useful for medical imaging because they pass through soft tissue but are absorbed by bone. Gamma rays can sterilise equipment and treat cancer. X-rays and gamma are ionising and can damage DNA, so shielding, exposure time and dose must be controlled.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying all electromagnetic waves are equally dangerous.",
      "Avoid: Giving uses without hazards.",
      "Avoid: Not mentioning ionisation or DNA damage.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electromagnetic radiation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "The weight of the bus acts through its centre of mass. A high centre of mass makes it less stable. When the bus turns quickly, the line of action of weight may pass outside the base, producing a turning effect that can make the bus topple. A lower centre of mass or wider base improves stability.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying a high centre of mass makes the bus more stable.",
      "Avoid: Not mentioning the line of action of weight.",
      "Avoid: Ignoring the base.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Stability. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "Useful output power raises the lift and passengers, increasing gravitational potential energy. Some input energy is dissipated as thermal energy due to friction and as sound, so useful output power is less than input power. Lubrication and better bearings reduce friction, reducing wasted energy and increasing efficiency.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Saying efficiency can be greater than 100%.",
      "Avoid: Not identifying useful and wasted transfers.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Efficiency. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "A radioactive source should be handled with tongs to increase distance, and exposure time should be kept short. Shielding or a shielded container should be used, and the source should be pointed away from people. It should never be touched directly. These precautions reduce dose by using time, distance and shielding.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gloves alone fully protect the user.",
      "Avoid: Ignoring time, distance or shielding.",
      "Avoid: Suggesting direct handling.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Radiation safety. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "In an impact, the head's momentum changes. The helmet increases the time taken for the head to stop, reducing force for the same change in momentum. It also spreads the force over a larger area, reducing pressure on the skull, and dissipates energy as it deforms.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying the helmet prevents momentum changing.",
      "Avoid: Not linking stopping time to force.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Momentum and helmets. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-high-mark-synoptic-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Planning cooling experiment. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Speed equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Acceleration equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Force equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Weight equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Momentum equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Work done equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
    hints: ["Avoid: Forgetting to square speed.", "Avoid: Writing kinetic energy = mass × speed."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Kinetic energy equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Gravitational potential energy equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Power equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Efficiency equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Charge equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Ohm's law. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
    modelAnswer: "voltage = power / current.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing voltage = power × current.", "Avoid: Dividing current by power."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Electrical power equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Density equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
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
      "OxfordAQA International GCSE Physics 9203: Pressure equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Specific heat capacity equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Wave equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Frequency and period. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Transformer equation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-formula-equation-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A count rate falls from 1200 counts per minute to 150 counts per minute. Determine the number of half-lives that have passed.",
    marks: 3,
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
        point: "Answer: 3 half-lives",
        keywords: [["half-life"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "1200 halves to 600, then 300, then 150. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing 1200 by 150 and saying 8 half-lives.",
      "Avoid: Subtracting a fixed amount each time.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Half-life. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student measures the time for a trolley to travel down a ramp. The readings are 1.32 s, 1.35 s, 1.34 s and 2.08 s. Identify the anomalous result and calculate the mean time excluding it.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The anomalous result is 2.08 s",
        keywords: [["anomalous result", "s"]],
      },
      {
        point: "Formula: mean = sum of valid readings / number of valid readings",
        keywords: [["mean", "s"]],
      },
      {
        point: "Substitution: mean = (1.32 + 1.35 + 1.34) / 3",
        keywords: [["mean", "s"]],
      },
      {
        point: "Answer: 1.34 s",
        keywords: [["s"]],
      },
    ],
    examinerKeywords: ["anomalous result", "mean", "exclude", "repeat readings", "s"],
    modelAnswer:
      "The anomalous result is 2.08 s. Mean = (1.32 + 1.35 + 1.34) / 3 = 4.01 / 3 = 1.34 s.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Including the anomaly in the mean.",
      "Avoid: Dividing by 4 after excluding the anomaly.",
      "Avoid: Identifying 1.32 s as the anomaly.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Mean and anomalies. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A length is measured as 25.0 cm with an uncertainty of ±0.2 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage uncertainty", "uncertainty", "measured value"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.2 / 25.0 × 100",
        keywords: [["percentage uncertainty", "uncertainty", "percentage"]],
      },
      {
        point: "Answer: 0.8%",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.2 / 25.0 × 100 = 0.8%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving off the percentage sign.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Percentage uncertainty. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A line of best fit passes through the points (2.0, 5.0) and (8.0, 17.0). Calculate the gradient.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: gradient = change in y / change in x",
        keywords: [["gradient", "change in y", "change in x"]],
      },
      {
        point: "Substitution: gradient = (17.0 - 5.0) / (8.0 - 2.0)",
        keywords: [["gradient"]],
      },
      {
        point: "Answer: 2.0",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["gradient", "line of best fit", "change in y", "change in x"],
    modelAnswer: "gradient = (17.0 - 5.0) / (8.0 - 2.0) = 12.0 / 6.0 = 2.0.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Using two plotted points not on the best-fit line.",
      "Avoid: Subtracting coordinates inconsistently.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Gradient. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student measures the mass of a beaker and liquid as 142 g. The empty beaker has mass 62 g. The liquid volume is 64 cm³. Calculate the density of the liquid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of liquid = 142 - 62 = 80 g",
        keywords: [["mass by subtraction", "g/cm³"]],
      },
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass by subtraction", "volume"]],
      },
      {
        point: "Substitution: density = 80 / 64",
        keywords: [["density"]],
      },
      {
        point: "Answer: 1.25 g/cm³",
        keywords: [["g/cm³"]],
      },
    ],
    examinerKeywords: ["density", "mass by subtraction", "volume", "g/cm³"],
    modelAnswer: "Mass of liquid = 142 - 62 = 80 g. Density = 80 / 64 = 1.25 g/cm³.",
    difficulty: "medium",
    suggestedMinutes: 7,
    hints: [
      "Avoid: Using 142 g as the liquid mass.",
      "Avoid: Multiplying mass by volume.",
      "Avoid: Forgetting the unit g/cm³.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Density practical data. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A spring has an original length of 7.6 cm. When a load is added, its length is 12.4 cm. Calculate the extension.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: extension = loaded length - original length",
        keywords: [["extension", "loaded length", "original length"]],
      },
      {
        point: "Substitution: extension = 12.4 - 7.6",
        keywords: [["extension"]],
      },
      {
        point: "Answer: 4.8 cm",
        keywords: [["cm"]],
      },
    ],
    examinerKeywords: ["extension", "loaded length", "original length", "cm"],
    modelAnswer: "extension = 12.4 - 7.6 = 4.8 cm.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Using loaded length as extension.", "Avoid: Subtracting in the wrong order."],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Spring extension. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A force-extension graph is a straight line through the origin up to 5.0 N. Explain what this shows about the spring.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Force is directly proportional to extension",
        keywords: [["force-extension graph", "directly proportional"]],
      },
      {
        point: "The spring obeys Hooke's law up to 5.0 N",
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
      "The straight line through the origin shows that force is directly proportional to extension, so the spring obeys Hooke's law up to 5.0 N.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the spring does not extend.",
      "Avoid: Not mentioning direct proportionality.",
      "Avoid: Saying Hooke's law applies at all forces.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Hooke's law graph. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A pendulum completes 20 oscillations in 28.0 s. Calculate its period.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: period = total time / number of oscillations",
        keywords: [["period", "oscillations", "time"]],
      },
      {
        point: "Substitution: period = 28.0 / 20",
        keywords: [["period", "s"]],
      },
      {
        point: "Answer: 1.40 s",
        keywords: [["s"]],
      },
    ],
    examinerKeywords: ["period", "oscillations", "time", "pendulum", "s"],
    modelAnswer: "period = 28.0 / 20 = 1.40 s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Calculating 20 / 28.0.",
      "Avoid: Using the time for all oscillations as the period.",
      "Avoid: Forgetting the unit s.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Pendulum data. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why timing 20 oscillations gives a more reliable value of period than timing one oscillation.",
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
        point: "The period is found by dividing the total time by 20",
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
      "Timing 20 oscillations gives a larger total time, so reaction-time uncertainty is a smaller percentage of the reading. The period is found by dividing the total time by 20.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the period changes when more oscillations are timed.",
      "Avoid: Not mentioning reaction time.",
      "Avoid: Forgetting to divide by the number of oscillations.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Pendulum reliability. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A resistor has a potential difference of 6.0 V across it and a current of 0.30 A through it. Calculate the resistance.",
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
        point: "Substitution: resistance = 6.0 / 0.30",
        keywords: [["resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["mark point"]],
      },
    ],
    examinerKeywords: ["resistance", "potential difference", "current", "Ω"],
    modelAnswer: "R = V / I = 6.0 / 0.30 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying voltage by current.",
      "Avoid: Using V as the resistance unit.",
      "Avoid: Dividing current by voltage.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Circuit data. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Resistance wire controls. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A beaker of hot water cools from 82 °C to 67 °C in 10 minutes. Calculate the average rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Temperature change = 82 - 67 = 15 °C",
        keywords: [["temperature change", "°c/min"]],
      },
      {
        point: "Formula: rate of cooling = temperature change / time",
        keywords: [["cooling", "temperature change", "time"]],
      },
      {
        point: "Substitution: rate = 15 / 10",
        keywords: [["rate"]],
      },
      {
        point: "Answer: 1.5 °C/min",
        keywords: [["°c/min"]],
      },
    ],
    examinerKeywords: ["cooling", "temperature change", "time", "rate", "°C/min"],
    modelAnswer: "Temperature change = 15 °C. Rate of cooling = 15 / 10 = 1.5 °C/min.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using final temperature only.",
      "Avoid: Subtracting time from temperature.",
      "Avoid: Forgetting the unit °C/min.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Cooling data. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "The gradient shows the rate of cooling. As the graph becomes less steep, the rate of cooling decreases because the temperature difference between the water and surroundings becomes smaller.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying less steep means faster cooling.",
      "Avoid: Not linking gradient to rate.",
      "Avoid: Ignoring the surroundings.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Cooling curve. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A ripple tank produces 15 waves in 5.0 s. The wavelength is 0.024 m. Calculate the wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "wave speed", "m/s"]],
      },
      {
        point: "Substitution: frequency = 15 / 5.0 = 3.0 Hz",
        keywords: [["frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["frequency", "wavelength", "wave speed"]],
      },
      {
        point: "Substitution: wave speed = 3.0 × 0.024",
        keywords: [["wave speed"]],
      },
      {
        point: "Answer: 0.072 m/s",
        keywords: [["m/s"]],
      },
    ],
    examinerKeywords: ["ripple tank", "frequency", "wavelength", "wave speed", "m/s"],
    modelAnswer: "frequency = 15 / 5.0 = 3.0 Hz. wave speed = 3.0 × 0.024 = 0.072 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 5.0 / 15 for frequency.",
      "Avoid: Forgetting to calculate frequency first.",
      "Avoid: Giving wave speed in Hz.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Ripple tank data. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "Use a thin ray and mark it with a sharp pencil. Draw the normal accurately at 90° to the mirror and measure the angle from the normal using a protractor at eye level.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Measuring from the mirror surface instead of the normal.",
      "Avoid: Using thick pencil marks.",
      "Avoid: Not drawing the normal accurately.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Ray tracing. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Variables. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Method improvement. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Meniscus. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Graph quality. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A detector records a background count rate of 18 counts per minute. With a radioactive source present, the count rate is 86 counts per minute. Calculate the corrected count rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: corrected count rate = measured count rate - background count rate",
        keywords: [["background count", "corrected count rate"]],
      },
      {
        point: "Substitution: corrected count rate = 86 - 18",
        keywords: [["corrected count rate"]],
      },
      {
        point: "Answer: 68 counts per minute",
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
    modelAnswer: "corrected count rate = 86 - 18 = 68 counts per minute.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Adding the background count.",
      "Avoid: Ignoring background radiation.",
      "Avoid: Forgetting the unit counts per minute.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Radiation practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-practical-data-analysis-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "practical-data-analysis",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Experimental evaluation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-001",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Terminal velocity. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-002",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Conduction transfers thermal energy through particle vibrations and collisions, and in metals by delocalised electrons. Convection occurs in fluids when warmer, less dense fluid rises and cooler, denser fluid sinks, forming a convection current. Radiation transfers energy by infrared electromagnetic waves and does not need a medium.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying convection happens in solids.",
      "Avoid: Saying radiation needs particles.",
      "Avoid: Not distinguishing the three methods.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Thermal transfer. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-003",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Series and parallel circuits. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-004",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: AC generator. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-005",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Alpha radiation is a helium nucleus with +2 charge. It is strongly ionising but weakly penetrating and is stopped by paper or skin. Beta radiation is an electron with -1 charge. It has medium ionising and penetrating power and is stopped by thin aluminium. Gamma radiation is an electromagnetic wave with no charge. It is weakly ionising but highly penetrating.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying gamma has high mass.",
      "Avoid: Saying alpha is the most penetrating.",
      "Avoid: Mixing up ionising ability and penetrating power.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Alpha beta gamma. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-006",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Set up a circuit with a power supply, switch, ammeter in series and voltmeter across the selected length of resistance wire. Use crocodile clips and a metre rule to choose different lengths. Record V and I and calculate R = V / I. Keep wire material and diameter constant, use low current to reduce heating, repeat readings and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Changing wire thickness as well as length.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Not calculating resistance.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Resistance wire practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-007",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Refraction and total internal reflection. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-008",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "In a reactor, a neutron is absorbed by a large unstable nucleus, causing fission. The nucleus splits, releasing energy and more neutrons. Control rods absorb neutrons to control the chain reaction, while a moderator slows neutrons so they can cause more fission. The released energy heats water to make steam, which turns a turbine connected to a generator.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying fusion occurs in nuclear power stations.",
      "Avoid: Confusing control rods and moderator.",
      "Avoid: Forgetting the turbine and generator.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Nuclear reactor. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-009",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Avoid: Ignoring energy loss to surroundings.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Specific heat capacity practical. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-010",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Sun-like star life cycle. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-011",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Record potential difference and current in a table with units in headings. Repeat readings and calculate mean currents. Plot current on the y-axis against potential difference on the x-axis using a suitable scale. Draw a line of best fit and use the graph shape or gradient to determine the relationship or resistance.",
    difficulty: "medium",
    suggestedMinutes: 10,
    hints: [
      "Avoid: Forgetting units in table headings.",
      "Avoid: Plotting axes the wrong way round without consistency.",
      "Avoid: Joining points point-to-point instead of using a best-fit line.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Data processing. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-012",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electrical heating. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-013",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Reflection is when a wave bounces off a boundary, with angle of incidence equal to angle of reflection. Refraction is a change in direction when a wave changes speed as it enters a different medium. Diffraction is the spreading of waves through a gap or around an obstacle, greatest when the gap is similar to the wavelength.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Confusing refraction with reflection.",
      "Avoid: Saying diffraction only happens for light.",
      "Avoid: Not mentioning speed change in refraction.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Wave behaviour. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-014",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Radioactive tracers. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-015",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Conservation of energy. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-016",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Moments. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-017",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Electromagnets. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-018",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "Measure the object's mass using a balance. Its volume can be found by water displacement in a measuring cylinder. To improve the method, read the bottom of the meniscus at eye level, ensure the object is fully submerged and remove air bubbles. A narrow measuring cylinder with small divisions or repeated readings reduces uncertainty. Density is mass divided by volume.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Using length × width × height for an irregular object.",
      "Avoid: Not fully submerging the object.",
      "Avoid: Ignoring air bubbles or meniscus reading.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Density evaluation. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-019",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "In melting, particles gain energy and overcome some forces holding them in fixed positions. During a change of state, temperature stays constant because energy is used to overcome forces. In boiling, particles throughout the liquid gain enough energy to become gas at a fixed temperature. Evaporation happens only at the surface, where the highest-energy particles escape, lowering the average kinetic energy of the remaining liquid and causing cooling.",
    difficulty: "hard",
    suggestedMinutes: 12,
    hints: [
      "Avoid: Saying temperature always rises during melting.",
      "Avoid: Saying evaporation happens throughout the liquid.",
      "Avoid: Saying particles themselves expand.",
    ],
    examinerTip:
      "OxfordAQA International GCSE Physics 9203: Particle model. Use precise markscheme language, show calculation working and include units where relevant.",
  },
  {
    id: "oxfordaqa-igcse-physics-extended-response-020",
    qualification: "IGCSE",
    examBoard: "oxfordaqa-igcse",
    subject: "physics",
    topic: "extended-response-practice",
    paper: "Paper 1 / Paper 2",
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
      "OxfordAQA International GCSE Physics 9203: Expanding Universe. Use precise markscheme language, show calculation working and include units where relevant.",
  },
];
