import type { Question } from "./questionBank";

export const EDEXCEL_PHYSICS_QUESTIONS: Question[] = [
  {
    id: "edexcel-igcse-physics-forces-motion-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A cyclist travels 180 m in 24 s. Calculate the average speed of the cyclist.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 180 / 24",
        keywords: [["substitution", "speed"]],
      },
      {
        point: "Answer: 7.5 m/s",
        keywords: [["speed", "distance"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 180 / 24 = 7.5 m/s",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying distance by time instead of dividing.",
      "Avoid: Leaving the answer without the unit m/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Speed, distance and time. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how the motion of an object is shown on a distance-time graph when the line is horizontal.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The distance from the starting point is constant.",
        keywords: [["distance", "starting", "point"]],
      },
      {
        point: "The object is stationary or not moving.",
        keywords: [["object", "stationary", "moving"]],
      },
    ],
    examinerKeywords: ["constant distance", "stationary", "not moving"],
    modelAnswer:
      "A horizontal line means the distance stays constant, so the object is stationary.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the object is moving at constant speed.",
      "Avoid: Confusing a horizontal distance-time graph with a speed-time graph.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Distance-time graphs. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A car increases its velocity from 6 m/s to 22 m/s in 8 s. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change", "velocity"]],
      },
      {
        point: "Substitution: acceleration = (22 - 6) / 8",
        keywords: [["substitution", "acceleration"]],
      },
      {
        point: "Answer: 2.0 m/s²",
        keywords: [["acceleration", "change in velocity"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "change in velocity = 16 m/s, so acceleration = 16 / 8 = 2.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using the final velocity only instead of change in velocity.",
      "Avoid: Writing the unit as m/s instead of m/s².",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Acceleration. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what the gradient of a velocity-time graph represents.",
    marks: 1,
    markSchemePoints: [
      {
        point: "The gradient represents acceleration.",
        keywords: [["gradient", "represents", "acceleration"]],
      },
    ],
    examinerKeywords: ["acceleration", "gradient"],
    modelAnswer: "The gradient of a velocity-time graph represents acceleration.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying the gradient represents distance.",
      "Avoid: Saying the gradient represents velocity.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Velocity-time graphs. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resultant force of 48 N acts on a trolley of mass 12 kg. Calculate the acceleration of the trolley.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: force = mass × acceleration",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Rearrangement: acceleration = force / mass",
        keywords: [["rearrangement", "acceleration", "force"]],
      },
      {
        point: "Substitution: acceleration = 48 / 12",
        keywords: [["substitution", "acceleration"]],
      },
      {
        point: "Answer: 4.0 m/s²",
        keywords: [["resultant force", "mass"]],
      },
    ],
    examinerKeywords: ["resultant force", "mass", "acceleration", "m/s²"],
    modelAnswer: "F = ma, so a = F / m = 48 / 12 = 4.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying 48 by 12.",
      "Avoid: Forgetting that the force must be the resultant force.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Newton's second law. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the difference between mass and weight.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass is the amount of matter in an object.",
        keywords: [["mass", "amount", "matter"]],
      },
      {
        point: "Mass is measured in kilograms.",
        keywords: [["mass", "measured", "kilograms"]],
      },
      {
        point: "Weight is the gravitational force acting on an object.",
        keywords: [["weight", "gravitational", "force"]],
      },
      {
        point: "Weight is measured in newtons and depends on gravitational field strength.",
        keywords: [["weight", "measured", "newtons"]],
      },
    ],
    examinerKeywords: ["mass", "matter", "kilograms", "weight", "gravitational force", "newtons"],
    modelAnswer:
      "Mass is the amount of matter in an object and is measured in kg. Weight is the gravitational force on an object and is measured in N. Weight changes if gravitational field strength changes, but mass does not.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying mass and weight are the same thing.",
      "Avoid: Giving weight in kilograms instead of newtons.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Weight and mass. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An object has a mass of 35 kg. The gravitational field strength is 10 N/kg. Calculate the weight of the object.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational"]],
      },
      {
        point: "Substitution: weight = 35 × 10",
        keywords: [["substitution", "weight"]],
      },
      {
        point: "Answer: 350 N",
        keywords: [["weight", "mass"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "N"],
    modelAnswer: "weight = mass × gravitational field strength = 35 × 10 = 350 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength instead of multiplying.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Weight. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A ball of mass 0.40 kg moves at 15 m/s. Calculate the momentum of the ball.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.40 × 15",
        keywords: [["substitution", "momentum"]],
      },
      {
        point: "Answer: 6.0 kg m/s",
        keywords: [["momentum", "mass"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.40 × 15 = 6.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using grams instead of kilograms.",
      "Avoid: Writing the unit as N instead of kg m/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two factors that increase the thinking distance of a car driver.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Greater speed increases thinking distance.",
        keywords: [["greater", "speed", "increases"]],
      },
      {
        point:
          "Longer reaction time due to tiredness, alcohol, drugs or distractions increases thinking distance.",
        keywords: [["longer", "reaction", "time"]],
      },
    ],
    examinerKeywords: ["speed", "reaction time", "tiredness", "alcohol", "drugs", "distraction"],
    modelAnswer:
      "Thinking distance increases if the car is travelling faster or if the driver's reaction time is longer, for example because the driver is tired or distracted.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving braking distance factors only, such as worn tyres.",
      "Avoid: Saying mass of the car affects thinking distance directly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Stopping distance. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why braking distance increases on an icy road.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ice reduces friction between the tyres and the road.",
        keywords: [["reduces", "friction", "tyres"]],
      },
      {
        point: "A smaller frictional force gives a smaller deceleration.",
        keywords: [["smaller", "frictional", "force"]],
      },
      {
        point: "The car travels further before coming to rest.",
        keywords: [["travels", "further", "before"]],
      },
    ],
    examinerKeywords: ["friction", "tyres", "road", "deceleration", "braking distance"],
    modelAnswer:
      "On an icy road there is less friction between the tyres and the road. This gives a smaller braking force and smaller deceleration, so the car travels further before stopping.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying thinking distance increases because the road is icy.",
      "Avoid: Saying ice increases friction.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Stopping distance. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A box is pushed with a force of 75 N for a distance of 4.0 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work", "done", "force"]],
      },
      {
        point: "Substitution: work done = 75 × 4.0",
        keywords: [["substitution", "work", "done"]],
      },
      {
        point: "Answer: 300 J",
        keywords: [["work done", "force"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "joules"],
    modelAnswer: "work done = force × distance = 75 × 4.0 = 300 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using power instead of work done.",
      "Avoid: Forgetting that distance must be in the direction of the force.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Work done. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "Two horizontal forces act on a crate. A force of 90 N acts to the right and a force of 35 N acts to the left. Determine the resultant force on the crate.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Forces act in opposite directions, so subtract the smaller force from the larger force.",
        keywords: [["forces", "opposite", "directions"]],
      },
      {
        point: "Resultant force = 90 - 35 = 55 N to the right.",
        keywords: [["resultant", "force", "right"]],
      },
    ],
    examinerKeywords: ["resultant force", "opposite directions", "subtract", "right"],
    modelAnswer: "The forces oppose each other, so resultant force = 90 - 35 = 55 N to the right.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding the forces to get 125 N.",
      "Avoid: Giving no direction with the resultant force.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Resultant forces. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how terminal velocity is reached by a falling object.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "At first, weight is greater than air resistance, so the object accelerates downwards.",
        keywords: [["first", "weight", "greater"]],
      },
      {
        point: "As speed increases, air resistance increases.",
        keywords: [["speed", "increases", "resistance"]],
      },
      {
        point: "The resultant force decreases, so acceleration decreases.",
        keywords: [["resultant", "force", "decreases"]],
      },
      {
        point:
          "Terminal velocity is reached when air resistance equals weight and the resultant force is zero.",
        keywords: [["terminal", "velocity", "reached"]],
      },
    ],
    examinerKeywords: [
      "weight",
      "air resistance",
      "resultant force",
      "acceleration",
      "terminal velocity",
    ],
    modelAnswer:
      "Initially the object's weight is greater than air resistance, so it accelerates downwards. As its speed increases, air resistance increases. Eventually air resistance equals weight, so the resultant force is zero and the object falls at a constant terminal velocity.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying terminal velocity means the object stops moving.",
      "Avoid: Forgetting to mention balanced forces.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Terminal velocity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe an experiment to investigate the relationship between force and extension for a spring.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Apparatus includes a spring, clamp stand, ruler, mass hanger and slotted masses.",
        keywords: [["apparatus", "includes", "spring"]],
      },
      {
        point: "Measure the original length of the spring before adding masses.",
        keywords: [["measure", "original", "length"]],
      },
      {
        point:
          "Add masses one at a time and calculate force using weight = mass × gravitational field strength.",
        keywords: [["masses", "time", "calculate"]],
      },
      {
        point: "Measure the new length and calculate extension = new length - original length.",
        keywords: [["measure", "length", "calculate"]],
      },
      {
        point: "Repeat readings or remove anomalies and calculate reliable values.",
        keywords: [["repeat", "readings", "remove"]],
      },
      {
        point:
          "Plot force against extension and check for a straight line through the origin within the limit of proportionality.",
        keywords: [["plot", "force", "against"]],
      },
    ],
    examinerKeywords: [
      "spring",
      "ruler",
      "extension",
      "force",
      "limit of proportionality",
      "repeat",
    ],
    modelAnswer:
      "Clamp the spring and measure its original length with a ruler. Add known masses one at a time and calculate their weight. Measure the new length each time and calculate the extension. Repeat readings and plot force against extension. A straight line through the origin shows the spring obeys Hooke's law up to the limit of proportionality.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Measuring the total length instead of extension.",
      "Avoid: Not using a pointer or ruler placed close to the spring to reduce parallax error.",
      "Avoid: Adding too many masses and permanently deforming the spring.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Hooke's law. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 18 N acts at a perpendicular distance of 0.25 m from a pivot. Calculate the moment of the force.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: moment = force × perpendicular distance from pivot",
        keywords: [["moment", "force", "perpendicular"]],
      },
      {
        point: "Substitution: moment = 18 × 0.25",
        keywords: [["substitution", "moment"]],
      },
      {
        point: "Answer: 4.5 N m",
        keywords: [["moment", "force"]],
      },
    ],
    examinerKeywords: ["moment", "force", "perpendicular distance", "pivot", "N m"],
    modelAnswer: "moment = force × perpendicular distance = 18 × 0.25 = 4.5 N m.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using centimetres without converting to metres.",
      "Avoid: Forgetting that the distance must be perpendicular to the line of action of the force.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Moments. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.20 kg trolley moving at 3.0 m/s collides with a stationary 0.40 kg trolley. The two trolleys join together after the collision. Calculate their common velocity after the collision.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Total momentum before = (0.20 × 3.0) + (0.40 × 0)",
        keywords: [["total", "momentum", "before"]],
      },
      {
        point: "Total momentum before = 0.60 kg m/s",
        keywords: [["total", "momentum", "before"]],
      },
      {
        point: "Total mass after = 0.20 + 0.40 = 0.60 kg",
        keywords: [["total", "mass", "after"]],
      },
      {
        point: "Velocity after = 0.60 / 0.60 = 1.0 m/s",
        keywords: [["velocity", "after"]],
      },
    ],
    examinerKeywords: ["momentum", "conservation", "mass", "velocity", "kg m/s"],
    modelAnswer:
      "Initial momentum = 0.20 × 3.0 = 0.60 kg m/s. Total mass after collision = 0.60 kg. Since momentum is conserved, velocity = 0.60 / 0.60 = 1.0 m/s.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using only the mass of one trolley after the collision.",
      "Avoid: Adding velocities instead of conserving momentum.",
      "Avoid: Forgetting the stationary trolley has zero initial momentum.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum conservation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why an object moving in a circle at constant speed is accelerating.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Velocity is a vector quantity with magnitude and direction.",
        keywords: [["velocity", "vector", "quantity"]],
      },
      {
        point: "The direction of velocity is constantly changing during circular motion.",
        keywords: [["direction", "velocity", "constantly"]],
      },
      {
        point: "A change in velocity means the object is accelerating.",
        keywords: [["change", "velocity", "means"]],
      },
    ],
    examinerKeywords: ["velocity", "direction", "vector", "acceleration", "circular motion"],
    modelAnswer:
      "The object has constant speed, but its direction of motion keeps changing. Since velocity includes direction, the velocity changes, so the object is accelerating.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying it is not accelerating because speed is constant.",
      "Avoid: Confusing speed with velocity.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Circular motion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A velocity-time graph shows a car moving at 12 m/s for 5.0 s. Calculate the distance travelled during this time.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Distance travelled is the area under a velocity-time graph.",
        keywords: [["distance", "travelled", "area"]],
      },
      {
        point: "Area = rectangle = velocity × time",
        keywords: [["area", "rectangle", "velocity"]],
      },
      {
        point: "Substitution: distance = 12 × 5.0",
        keywords: [["substitution", "distance"]],
      },
      {
        point: "Answer: 60 m",
        keywords: [["area under graph", "velocity-time graph"]],
      },
    ],
    examinerKeywords: ["area under graph", "velocity-time graph", "distance", "m"],
    modelAnswer: "Distance is the area under the velocity-time graph. Area = 12 × 5.0 = 60 m.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Finding the gradient instead of the area.",
      "Avoid: Giving the answer in m/s instead of m.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Velocity-time graphs. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare distance and displacement.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Distance is a scalar quantity.",
        keywords: [["distance", "scalar", "quantity"]],
      },
      {
        point: "Displacement is a vector quantity.",
        keywords: [["displacement", "vector", "quantity"]],
      },
      {
        point:
          "Distance is the total path length, while displacement is the straight-line distance and direction from the starting point.",
        keywords: [["distance", "total", "path"]],
      },
    ],
    examinerKeywords: ["distance", "displacement", "scalar", "vector", "direction"],
    modelAnswer:
      "Distance is a scalar and measures the total path length travelled. Displacement is a vector and measures the straight-line distance from the start point in a particular direction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying distance and displacement are always equal.",
      "Avoid: Forgetting that displacement needs direction.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Scalar and vector quantities. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-forces-motion-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "forces",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how a student could use light gates to measure the average speed of a trolley moving down a ramp.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Apparatus includes a ramp, trolley, two light gates and a timer or data logger.",
        keywords: [["apparatus", "includes", "ramp"]],
      },
      {
        point: "Measure the distance between the two light gates with a metre rule.",
        keywords: [["measure", "distance", "light"]],
      },
      {
        point: "Release the trolley from the same starting point each time without pushing it.",
        keywords: [["release", "trolley", "same"]],
      },
      {
        point: "Record the time taken for the trolley to travel between the light gates.",
        keywords: [["record", "time", "taken"]],
      },
      {
        point:
          "Calculate average speed using speed = distance / time and repeat to calculate a mean.",
        keywords: [["calculate", "average", "speed"]],
      },
    ],
    examinerKeywords: ["light gates", "data logger", "distance", "time", "speed", "mean"],
    modelAnswer:
      "Place two light gates a measured distance apart on a ramp and connect them to a timer. Release the trolley from the same point without pushing it. Record the time between the light gates, calculate speed using distance divided by time, then repeat and calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Pushing the trolley, which changes the starting speed.",
      "Avoid: Measuring the ramp length instead of the distance between the light gates.",
      "Avoid: Not repeating the experiment.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Motion practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define electric current.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Electric current is the rate of flow of electric charge.",
        keywords: [["electric", "current", "rate"]],
      },
      {
        point: "Current is measured in amperes.",
        keywords: [["current", "measured", "amperes"]],
      },
    ],
    examinerKeywords: ["rate of flow", "charge", "amperes", "current"],
    modelAnswer: "Electric current is the rate of flow of electric charge, measured in amperes.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying current is the amount of energy transferred.",
      "Avoid: Confusing current with voltage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electric current. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A current of 0.80 A flows through a lamp for 45 s. Calculate the charge that passes through the lamp.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.80 × 45",
        keywords: [["substitution", "charge"]],
      },
      {
        point: "Answer: 36 C",
        keywords: [["charge", "current"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "coulombs"],
    modelAnswer: "charge = current × time = 0.80 × 45 = 36 C.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing current by time.",
      "Avoid: Using A as the unit for charge instead of C.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Charge. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by potential difference in a circuit.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Potential difference is the energy transferred per unit charge.",
        keywords: [["potential", "difference", "energy"]],
      },
      {
        point: "It is measured in volts.",
        keywords: [["measured", "volts"]],
      },
    ],
    examinerKeywords: ["energy transferred", "per unit charge", "volts", "potential difference"],
    modelAnswer:
      "Potential difference is the energy transferred per unit charge and is measured in volts.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying potential difference is the flow of charge.",
      "Avoid: Giving the unit as amperes.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Potential difference. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resistor has a current of 0.25 A through it when the potential difference is 6.0 V. Calculate the resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Rearrangement: resistance = voltage / current",
        keywords: [["rearrangement", "resistance", "voltage"]],
      },
      {
        point: "Substitution: resistance = 6.0 / 0.25",
        keywords: [["substitution", "resistance"]],
      },
      {
        point: "Answer: 24 Ω",
        keywords: [["voltage", "current"]],
      },
    ],
    examinerKeywords: ["voltage", "current", "resistance", "ohms"],
    modelAnswer: "V = IR, so R = V / I = 6.0 / 0.25 = 24 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying voltage by current.", "Avoid: Writing the unit as V instead of Ω."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Resistance. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how current behaves in a series circuit.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Current is the same at all points in a series circuit.",
        keywords: [["current", "same", "points"]],
      },
      {
        point: "There is only one path for charge to flow.",
        keywords: [["only", "path", "charge"]],
      },
    ],
    examinerKeywords: ["same current", "series circuit", "one path", "charge"],
    modelAnswer:
      "In a series circuit, the current is the same at every point because there is only one path for charge to flow.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying current is shared between components in series.",
      "Avoid: Confusing series circuits with parallel circuits.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Series circuits. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        point: "Each lamp in parallel has the full supply potential difference across it.",
        keywords: [["each", "lamp", "parallel"]],
      },
      {
        point: "In series, the supply potential difference is shared between the lamps.",
        keywords: [["series", "supply", "potential"]],
      },
      {
        point: "The lamps in parallel transfer more power, so they are brighter.",
        keywords: [["lamps", "parallel", "transfer"]],
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
      "In parallel, each lamp gets the full supply voltage. In series, the supply voltage is shared between lamps. Since the parallel lamps transfer more power, they are brighter.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying current is always the same in parallel branches.",
      "Avoid: Only saying parallel is brighter without explaining voltage or power.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Parallel circuits. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A motor has a current of 3.0 A and a potential difference of 12 V across it. Calculate the power of the motor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: electrical power = current × voltage",
        keywords: [["electrical", "power", "current"]],
      },
      {
        point: "Substitution: power = 3.0 × 12",
        keywords: [["substitution", "power"]],
      },
      {
        point: "Answer: 36 W",
        keywords: [["power", "current"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "watts"],
    modelAnswer: "power = current × voltage = 3.0 × 12 = 36 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using resistance instead of voltage.",
      "Avoid: Giving the answer in joules instead of watts.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electrical power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 60 W lamp is switched on for 300 s. Calculate the energy transferred by the lamp.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy", "transferred", "power"]],
      },
      {
        point: "Substitution: energy = 60 × 300",
        keywords: [["substitution", "energy"]],
      },
      {
        point: "Answer: 18000 J",
        keywords: [["18000"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "joules"],
    modelAnswer: "energy transferred = power × time = 60 × 300 = 18000 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using minutes instead of seconds without converting.",
      "Avoid: Writing W as the unit for energy.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy transfer. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "A student draws a circuit containing a cell, a switch, an ammeter and a lamp connected in series. Describe where the ammeter should be placed.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The ammeter should be connected in series with the lamp.",
        keywords: [["ammeter", "should", "connected"]],
      },
      {
        point:
          "It should be placed so that the same current passes through the ammeter and the lamp.",
        keywords: [["should", "placed", "same"]],
      },
    ],
    examinerKeywords: ["ammeter", "series", "same current", "lamp"],
    modelAnswer:
      "The ammeter should be connected in series with the lamp so the same current flows through both.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Connecting the ammeter in parallel.",
      "Avoid: Saying the ammeter must be placed across the cell.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Circuit symbols. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how a voltmeter should be connected to measure the potential difference across a resistor.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The voltmeter should be connected in parallel with the resistor.",
        keywords: [["voltmeter", "should", "connected"]],
      },
      {
        point: "It measures the potential difference across the resistor.",
        keywords: [["measures", "potential", "difference"]],
      },
    ],
    examinerKeywords: ["voltmeter", "parallel", "potential difference", "across"],
    modelAnswer:
      "A voltmeter is connected in parallel across the resistor to measure the potential difference across it.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Saying a voltmeter measures current.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Potential difference measurement. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe an experiment to investigate how the resistance of a wire depends on its length.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes a power supply, ammeter, voltmeter, switch, crocodile clips and resistance wire.",
        keywords: [["apparatus", "includes", "power"]],
      },
      {
        point: "Measure a chosen length of wire using a metre rule.",
        keywords: [["measure", "chosen", "length"]],
      },
      {
        point: "Connect the ammeter in series and voltmeter in parallel across the wire.",
        keywords: [["connect", "ammeter", "series"]],
      },
      {
        point: "Record current and potential difference for each wire length.",
        keywords: [["record", "current", "potential"]],
      },
      {
        point: "Calculate resistance using resistance = voltage / current.",
        keywords: [["calculate", "resistance", "voltage"]],
      },
      {
        point:
          "Keep wire material and diameter constant, use low current to reduce heating, and repeat readings to calculate a mean.",
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
      "Set up a circuit with a power supply, switch, ammeter in series and voltmeter across the wire. Use crocodile clips to select different lengths of the same wire. Record V and I, then calculate R = V / I. Keep the wire material and diameter constant, use a low current to reduce heating, repeat readings and calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing the thickness or material of the wire at the same time as length.",
      "Avoid: Forgetting to calculate resistance from V/I.",
      "Avoid: Allowing the wire to heat up, which changes resistance.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Investigating resistance. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by an ohmic conductor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "An ohmic conductor has a current directly proportional to potential difference.",
        keywords: [["ohmic", "conductor", "current"]],
      },
      {
        point: "The resistance remains constant.",
        keywords: [["resistance", "remains", "constant"]],
      },
      {
        point: "This is true only if temperature remains constant.",
        keywords: [["true", "only", "temperature"]],
      },
    ],
    examinerKeywords: [
      "ohmic conductor",
      "directly proportional",
      "constant resistance",
      "constant temperature",
    ],
    modelAnswer:
      "An ohmic conductor has current directly proportional to potential difference, so its resistance is constant, provided the temperature stays constant.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying all components are ohmic.",
      "Avoid: Not mentioning constant temperature.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Ohmic conductors. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "graph",
    questionType: "Describe",
    questionText:
      "Describe the shape of the current-potential difference graph for a filament lamp and explain why it has this shape.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The graph is curved and becomes less steep as potential difference increases.",
        keywords: [["graph", "curved", "becomes"]],
      },
      {
        point: "As current increases, the filament gets hotter.",
        keywords: [["current", "increases", "filament"]],
      },
      {
        point: "Higher temperature increases the resistance of the filament.",
        keywords: [["higher", "temperature", "increases"]],
      },
      {
        point:
          "A larger resistance means current increases less for each increase in potential difference.",
        keywords: [["larger", "resistance", "means"]],
      },
    ],
    examinerKeywords: ["filament lamp", "curved graph", "temperature", "resistance", "current"],
    modelAnswer:
      "The I-V graph for a filament lamp is curved and becomes less steep at higher potential differences. The filament heats up as current increases, which increases its resistance, so current rises more slowly.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the graph is a straight line through the origin.",
      "Avoid: Not linking heating to increased resistance.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: I-V graphs. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText:
      "Compare how the resistance of an LDR and an NTC thermistor changes in normal use.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The resistance of an LDR decreases when light intensity increases.",
        keywords: [["resistance", "decreases", "light"]],
      },
      {
        point: "The resistance of an LDR increases when light intensity decreases.",
        keywords: [["resistance", "increases", "light"]],
      },
      {
        point: "The resistance of an NTC thermistor decreases when temperature increases.",
        keywords: [["resistance", "thermistor", "decreases"]],
      },
      {
        point: "Both can be used as input sensors in potential divider circuits.",
        keywords: [["both", "used", "input"]],
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
      "An LDR has lower resistance when light intensity increases. An NTC thermistor has lower resistance when temperature increases. Both are sensors whose resistance changes with conditions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying an LDR responds to temperature.",
      "Avoid: Saying an NTC thermistor resistance increases as temperature increases.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: LDRs and thermistors. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the function of the earth wire in a mains plug.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The earth wire provides a low-resistance path to ground.",
        keywords: [["earth", "wire", "provides"]],
      },
      {
        point:
          "It allows a large current to flow if the metal case becomes live, causing the fuse to melt or circuit breaker to trip.",
        keywords: [["allows", "large", "current"]],
      },
    ],
    examinerKeywords: ["earth wire", "low resistance path", "metal case", "fuse", "safety"],
    modelAnswer:
      "The earth wire provides a low-resistance path to ground. If the metal case becomes live, a large current flows and the fuse melts, making the appliance safe.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the earth wire carries current during normal operation.",
      "Avoid: Confusing the earth wire with the neutral wire.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Mains electricity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An appliance is rated at 920 W and is connected to a 230 V mains supply. Calculate the current in the appliance and choose the most suitable fuse from 3 A, 5 A and 13 A.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: electrical power = current × voltage",
        keywords: [["electrical", "power", "current"]],
      },
      {
        point: "Rearrangement: current = power / voltage",
        keywords: [["rearrangement", "current", "power"]],
      },
      {
        point: "Substitution: current = 920 / 230",
        keywords: [["substitution", "current"]],
      },
      {
        point: "Current = 4.0 A",
        keywords: [["current"]],
      },
      {
        point: "Choose the 5 A fuse because it is just above the normal operating current.",
        keywords: [["choose", "fuse", "just"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "fuse", "just above"],
    modelAnswer:
      "P = IV, so I = P / V = 920 / 230 = 4.0 A. The best fuse is 5 A because it is above the normal current but low enough to protect the appliance.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Choosing 3 A even though it would melt during normal use.",
      "Avoid: Choosing 13 A without considering protection.",
      "Avoid: Using V = IR instead of P = IV.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Fuses. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        point: "Friction causes electrons to transfer between the cloth and the rod.",
        keywords: [["friction", "causes", "electrons"]],
      },
      {
        point: "Electrons move onto the plastic rod.",
        keywords: [["electrons", "move", "onto"]],
      },
      {
        point: "The rod becomes negatively charged because it has gained electrons.",
        keywords: [["becomes", "negatively", "charged"]],
      },
    ],
    examinerKeywords: ["friction", "electrons", "transfer", "negative charge", "gained"],
    modelAnswer:
      "When the rod is rubbed, electrons are transferred from the cloth onto the plastic rod. The rod gains electrons, so it becomes negatively charged.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying protons move between the cloth and rod.",
      "Avoid: Saying the rod becomes negative because it loses electrons.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Static electricity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe the electric field pattern around an isolated positively charged sphere.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Field lines are radial and point away from the positive charge.",
        keywords: [["field", "lines", "radial"]],
      },
      {
        point: "The field is strongest where the field lines are closest together.",
        keywords: [["field", "strongest", "lines"]],
      },
      {
        point: "The field becomes weaker further from the sphere.",
        keywords: [["field", "becomes", "weaker"]],
      },
    ],
    examinerKeywords: ["electric field", "field lines", "radial", "away", "weaker"],
    modelAnswer:
      "The electric field lines are radial and point away from the positively charged sphere. They are closest together near the sphere, so the field is strongest there and becomes weaker with distance.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing arrows towards a positive charge.",
      "Avoid: Drawing field lines that cross each other.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electric fields. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Two resistors of 4.0 Ω and 8.0 Ω are connected in series to a 12 V battery. Calculate the current in the circuit.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Total resistance in series = 4.0 + 8.0 = 12 Ω",
        keywords: [["total", "resistance", "series"]],
      },
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Rearrangement: current = voltage / resistance",
        keywords: [["rearrangement", "current", "voltage"]],
      },
      {
        point: "Substitution: current = 12 / 12",
        keywords: [["substitution", "current"]],
      },
      {
        point: "Answer: 1.0 A",
        keywords: [["series", "total resistance"]],
      },
    ],
    examinerKeywords: ["series", "total resistance", "current", "voltage", "A"],
    modelAnswer: "Total resistance = 4.0 + 8.0 = 12 Ω. Using V = IR, current = 12 / 12 = 1.0 A.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using the parallel resistance rule for series resistors.",
      "Avoid: Calculating current through only one resistor.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Circuit calculations. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-electricity-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "electricity",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate the use of a circuit breaker compared with a fuse for protecting a household circuit.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Both devices disconnect the circuit when the current becomes too large.",
        keywords: [["both", "devices", "disconnect"]],
      },
      {
        point: "A fuse melts and must be replaced after it operates.",
        keywords: [["fuse", "melts", "must"]],
      },
      {
        point: "A circuit breaker can be reset, so it is quicker and more convenient to reuse.",
        keywords: [["circuit", "breaker", "reset"]],
      },
      {
        point: "Circuit breakers can respond quickly and may be more expensive than fuses.",
        keywords: [["circuit", "breakers", "respond"]],
      },
    ],
    examinerKeywords: [
      "circuit breaker",
      "fuse",
      "large current",
      "disconnect",
      "reset",
      "replace",
    ],
    modelAnswer:
      "Both fuses and circuit breakers protect circuits by disconnecting the supply when the current is too large. A fuse melts and must be replaced, whereas a circuit breaker can be reset, making it more convenient. Circuit breakers may respond quickly, but they can cost more than fuses.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a fuse can be reset.",
      "Avoid: Only describing one device without comparison.",
      "Avoid: Saying they stop voltage rather than disconnecting current flow.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electrical safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define wavelength.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Wavelength is the distance from a point on one wave to the same point on the next wave.",
        keywords: [["wavelength", "distance", "point"]],
      },
      {
        point: "For example, crest to crest or compression to compression.",
        keywords: [["example", "crest", "compression"]],
      },
    ],
    examinerKeywords: ["distance", "same point", "next wave", "crest", "compression"],
    modelAnswer:
      "Wavelength is the distance from one point on a wave to the same point on the next wave, such as crest to crest.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying wavelength is the height of a wave.",
      "Avoid: Confusing wavelength with amplitude.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Wave properties. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A water wave has a frequency of 4.0 Hz and a wavelength of 0.75 m. Calculate the wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave", "speed", "frequency"]],
      },
      {
        point: "Substitution: wave speed = 4.0 × 0.75",
        keywords: [["substitution", "wave", "speed"]],
      },
      {
        point: "Answer: 3.0 m/s",
        keywords: [["wave speed", "frequency"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 4.0 × 0.75 = 3.0 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing frequency by wavelength.",
      "Avoid: Using Hz as the unit for wave speed.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Wave speed. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare transverse waves and longitudinal waves.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "In transverse waves, oscillations are perpendicular to the direction of energy transfer.",
        keywords: [["transverse", "waves", "oscillations"]],
      },
      {
        point:
          "In longitudinal waves, oscillations are parallel to the direction of energy transfer.",
        keywords: [["longitudinal", "waves", "oscillations"]],
      },
      {
        point: "Transverse waves have crests and troughs.",
        keywords: [["transverse", "waves", "crests"]],
      },
      {
        point: "Longitudinal waves have compressions and rarefactions.",
        keywords: [["longitudinal", "waves", "compressions"]],
      },
    ],
    examinerKeywords: [
      "transverse",
      "longitudinal",
      "perpendicular",
      "parallel",
      "compressions",
      "rarefactions",
    ],
    modelAnswer:
      "In transverse waves, vibrations are perpendicular to the direction of energy transfer and the wave has crests and troughs. In longitudinal waves, vibrations are parallel to the direction of energy transfer and the wave has compressions and rarefactions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying transverse waves are always light and longitudinal waves are always sound without explaining motion.",
      "Avoid: Mixing up perpendicular and parallel.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transverse and longitudinal waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why sound waves cannot travel through a vacuum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sound is a mechanical wave.",
        keywords: [["sound", "mechanical", "wave"]],
      },
      {
        point: "Sound travels by vibrations of particles in a medium.",
        keywords: [["sound", "travels", "vibrations"]],
      },
      {
        point: "A vacuum has no particles to vibrate and transfer the sound energy.",
        keywords: [["vacuum", "particles", "vibrate"]],
      },
    ],
    examinerKeywords: ["sound", "mechanical wave", "particles", "medium", "vacuum"],
    modelAnswer:
      "Sound waves need particles to vibrate and pass on energy. A vacuum has no particles, so sound cannot travel through it.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sound travels through empty space like light.",
      "Avoid: Only saying there is no air, without mentioning particles or vibrations.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Sound waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the law of reflection.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The angle of incidence equals the angle of reflection.",
        keywords: [["angle", "incidence", "equals"]],
      },
      {
        point: "Both angles are measured from the normal.",
        keywords: [["both", "angles", "measured"]],
      },
    ],
    examinerKeywords: ["angle of incidence", "angle of reflection", "normal", "equal"],
    modelAnswer:
      "The angle of incidence is equal to the angle of reflection, and both angles are measured from the normal.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Measuring angles from the mirror surface instead of the normal.",
      "Avoid: Saying the reflected ray bends.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Reflection. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a ray of light changes direction when it enters glass from air at an angle.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Light changes speed when it enters glass from air.",
        keywords: [["light", "changes", "speed"]],
      },
      {
        point: "One side of the wavefront slows before the other side.",
        keywords: [["side", "wavefront", "slows"]],
      },
      {
        point: "The ray refracts towards the normal because glass is optically denser than air.",
        keywords: [["refracts", "towards", "normal"]],
      },
    ],
    examinerKeywords: ["refraction", "speed changes", "air", "glass", "towards the normal"],
    modelAnswer:
      "Light slows down when it enters glass from air. Because it enters at an angle, one side of the wavefront slows first, so the ray changes direction towards the normal.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying light bends because it loses energy.",
      "Avoid: Saying the ray bends away from the normal when entering glass from air.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Refraction. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the two conditions needed for total internal reflection to occur.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "The ray must travel from a more optically dense medium to a less optically dense medium.",
        keywords: [["must", "travel", "more"]],
      },
      {
        point: "The angle of incidence must be greater than the critical angle.",
        keywords: [["angle", "incidence", "must"]],
      },
    ],
    examinerKeywords: [
      "total internal reflection",
      "optically dense",
      "less dense",
      "critical angle",
    ],
    modelAnswer:
      "Total internal reflection occurs when light travels from a more optically dense medium to a less optically dense medium and the angle of incidence is greater than the critical angle.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying it happens from air into glass.",
      "Avoid: Saying the angle must be less than the critical angle.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Total internal reflection. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State the order of the electromagnetic spectrum from longest wavelength to shortest wavelength.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Radio waves, microwaves and infrared are at the longer wavelength end.",
        keywords: [["radio", "waves", "microwaves"]],
      },
      {
        point: "Visible light, ultraviolet and X-rays follow.",
        keywords: [["visible", "light", "ultraviolet"]],
      },
      {
        point: "Gamma rays have the shortest wavelength.",
        keywords: [["gamma", "rays", "shortest"]],
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
    suggestedMinutes: 5,
    hints: [
      "Avoid: Putting gamma rays at the longest wavelength end.",
      "Avoid: Mixing up infrared and ultraviolet.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnetic spectrum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe two properties that are the same for all electromagnetic waves in a vacuum.",
    marks: 2,
    markSchemePoints: [
      {
        point: "All electromagnetic waves are transverse waves.",
        keywords: [["electromagnetic", "waves", "transverse"]],
      },
      {
        point: "All electromagnetic waves travel at the same speed in a vacuum.",
        keywords: [["electromagnetic", "waves", "travel"]],
      },
    ],
    examinerKeywords: ["electromagnetic waves", "transverse", "same speed", "vacuum"],
    modelAnswer:
      "All electromagnetic waves are transverse and travel at the same speed in a vacuum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying all electromagnetic waves have the same wavelength.",
      "Avoid: Saying they need a medium to travel.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnetic waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Give",
    questionText: "Give one use of microwaves and one hazard of microwaves.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "A valid use includes satellite communication, mobile phone communication or cooking food.",
        keywords: [["valid", "includes", "satellite"]],
      },
      {
        point: "A valid hazard is internal heating of body tissue.",
        keywords: [["valid", "hazard", "internal"]],
      },
    ],
    examinerKeywords: ["microwaves", "communication", "cooking", "heating", "body tissue"],
    modelAnswer:
      "Microwaves can be used for satellite communication. A hazard is that they can cause internal heating of body tissue.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving a use of ultraviolet instead.",
      "Avoid: Saying microwaves are ionising radiation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Uses of electromagnetic waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how ultrasound can be used to produce an image of a fetus.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Ultrasound waves are sent into the body.",
        keywords: [["ultrasound", "waves", "sent"]],
      },
      {
        point: "The waves are reflected at boundaries between different tissues.",
        keywords: [["waves", "reflected", "boundaries"]],
      },
      {
        point: "The time taken for the echoes to return is measured.",
        keywords: [["time", "taken", "echoes"]],
      },
      {
        point: "A computer uses the echo times and intensities to build an image.",
        keywords: [["computer", "uses", "echo"]],
      },
    ],
    examinerKeywords: ["ultrasound", "reflection", "tissue boundary", "echo", "image"],
    modelAnswer:
      "Ultrasound pulses are sent into the body and reflect at boundaries between different tissues. The returning echoes are detected. The time taken and strength of the echoes are used by a computer to form an image of the fetus.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying ultrasound uses ionising radiation.",
      "Avoid: Not mentioning reflection or echoes.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Ultrasound. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A ship sends an ultrasound pulse to the seabed. The echo returns after 0.80 s. The speed of ultrasound in water is 1500 m/s. Calculate the depth of the water.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["distance", "speed", "time"]],
      },
      {
        point: "Substitution for total distance: distance = 1500 × 0.80 = 1200 m",
        keywords: [["substitution", "total", "distance"]],
      },
      {
        point: "The pulse travels to the seabed and back, so depth = total distance / 2",
        keywords: [["pulse", "travels", "seabed"]],
      },
      {
        point: "Answer: depth = 600 m",
        keywords: [["depth"]],
      },
    ],
    examinerKeywords: ["ultrasound", "echo", "speed", "time", "divide by 2", "depth"],
    modelAnswer:
      "Total distance travelled = 1500 × 0.80 = 1200 m. This is down and back, so depth = 1200 / 2 = 600 m.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Forgetting to divide by 2.",
      "Avoid: Using 0.40 s without explaining it.",
      "Avoid: Giving the unit as m/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Echo sounding. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how a convex lens can form a real image of a distant object on a screen.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Parallel rays from a distant object enter the convex lens.",
        keywords: [["parallel", "rays", "distant"]],
      },
      {
        point: "The lens refracts the rays so they converge.",
        keywords: [["lens", "refracts", "rays"]],
      },
      {
        point:
          "A real image forms where the rays meet, near the focal point, and can be seen on a screen.",
        keywords: [["real", "image", "forms"]],
      },
    ],
    examinerKeywords: [
      "convex lens",
      "parallel rays",
      "refract",
      "converge",
      "real image",
      "focal point",
    ],
    modelAnswer:
      "Light rays from a distant object are nearly parallel. A convex lens refracts them so they converge and meet near the focal point, forming a real image on a screen.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the rays diverge after passing through a convex lens.",
      "Avoid: Saying a real image cannot be formed on a screen.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Lenses. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a red object appears red in white light.",
    marks: 3,
    markSchemePoints: [
      {
        point: "White light contains all colours of visible light.",
        keywords: [["white", "light", "contains"]],
      },
      {
        point: "The red object reflects red light.",
        keywords: [["object", "reflects", "light"]],
      },
      {
        point: "The object absorbs most other colours.",
        keywords: [["object", "absorbs", "most"]],
      },
    ],
    examinerKeywords: ["white light", "red light", "reflects", "absorbs", "visible spectrum"],
    modelAnswer:
      "White light contains all colours. A red object reflects red light into the eye and absorbs most other colours.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the object produces red light.",
      "Avoid: Saying it absorbs red light and reflects all other colours.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Colour. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the speed of water waves in a ripple tank.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Apparatus includes a ripple tank, water, vibrating dipper, lamp, screen and ruler.",
        keywords: [["apparatus", "includes", "ripple"]],
      },
      {
        point: "Use the vibrating dipper to produce regular waves.",
        keywords: [["vibrating", "dipper", "produce"]],
      },
      {
        point:
          "Measure the distance across several wavelengths and divide by the number of wavelengths to find wavelength.",
        keywords: [["measure", "distance", "across"]],
      },
      {
        point: "Measure or set the frequency of the dipper.",
        keywords: [["measure", "frequency", "dipper"]],
      },
      {
        point: "Calculate wave speed using wave speed = frequency × wavelength.",
        keywords: [["calculate", "wave", "speed"]],
      },
      {
        point: "Repeat measurements and calculate a mean; keep water depth constant.",
        keywords: [["repeat", "measurements", "calculate"]],
      },
    ],
    examinerKeywords: ["ripple tank", "frequency", "wavelength", "wave speed", "repeat", "mean"],
    modelAnswer:
      "Use a ripple tank and vibrating dipper to make regular waves. Measure the distance across several wavelengths on the screen and divide by the number of waves to find wavelength. Record the frequency of the dipper and calculate speed using v = fλ. Repeat and keep the water depth constant.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Measuring only one wavelength, giving a large percentage uncertainty.",
      "Avoid: Not controlling water depth.",
      "Avoid: Using period instead of frequency without converting.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Practical wave speed. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A wave has a period of 0.020 s. Calculate its frequency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: frequency = 1 / period",
        keywords: [["frequency", "period"]],
      },
      {
        point: "Substitution: frequency = 1 / 0.020",
        keywords: [["substitution", "frequency"]],
      },
      {
        point: "Answer: 50 Hz",
        keywords: [["frequency", "period"]],
      },
    ],
    examinerKeywords: ["frequency", "period", "reciprocal", "Hz"],
    modelAnswer: "frequency = 1 / period = 1 / 0.020 = 50 Hz.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using frequency = period.",
      "Avoid: Giving the unit as seconds instead of hertz.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Frequency and period. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe what happens to water waves when they pass through a narrow gap that is similar in size to their wavelength.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The waves spread out after passing through the gap.",
        keywords: [["waves", "spread", "after"]],
      },
      {
        point: "This spreading is called diffraction.",
        keywords: [["spreading", "called", "diffraction"]],
      },
      {
        point: "Diffraction is greatest when the gap size is similar to the wavelength.",
        keywords: [["diffraction", "greatest", "size"]],
      },
    ],
    examinerKeywords: ["diffraction", "spread out", "gap", "wavelength"],
    modelAnswer:
      "The water waves spread out after passing through the gap. This is diffraction, and it is greatest when the gap is about the same size as the wavelength.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the waves only reflect back.",
      "Avoid: Saying diffraction is greatest when the gap is much larger than the wavelength.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Diffraction. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why ultraviolet radiation can be more hazardous than visible light.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ultraviolet radiation has a higher frequency than visible light.",
        keywords: [["ultraviolet", "radiation", "higher"]],
      },
      {
        point: "Higher frequency electromagnetic radiation carries more energy per photon.",
        keywords: [["higher", "frequency", "electromagnetic"]],
      },
      {
        point: "Ultraviolet can damage living cells or DNA and increase the risk of skin cancer.",
        keywords: [["ultraviolet", "damage", "living"]],
      },
    ],
    examinerKeywords: ["ultraviolet", "higher frequency", "energy", "cells", "DNA", "skin cancer"],
    modelAnswer:
      "Ultraviolet has a higher frequency than visible light, so it carries more energy. It can damage cells or DNA, increasing the risk of skin cancer.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying visible light is ionising but ultraviolet is not.",
      "Avoid: Only saying ultraviolet is hot without linking to cell damage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Ionising radiation from EM waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "graph",
    questionType: "Describe",
    questionText: "Describe how to draw a ray diagram for reflection from a plane mirror.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Draw the mirror as a straight line and draw the normal at 90° to the mirror surface at the point of incidence.",
        keywords: [["draw", "mirror", "straight"]],
      },
      {
        point: "Draw the incident ray towards the mirror.",
        keywords: [["draw", "incident", "towards"]],
      },
      {
        point: "Measure the angle of incidence from the normal.",
        keywords: [["measure", "angle", "incidence"]],
      },
      {
        point:
          "Draw the reflected ray on the other side of the normal with the same angle as the angle of incidence.",
        keywords: [["draw", "reflected", "other"]],
      },
    ],
    examinerKeywords: [
      "plane mirror",
      "normal",
      "90°",
      "incident ray",
      "reflected ray",
      "equal angles",
    ],
    modelAnswer:
      "Draw the mirror and a normal at right angles to it. Draw the incident ray meeting the mirror. Measure the angle between the incident ray and the normal, then draw the reflected ray with the same angle on the opposite side of the normal.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Drawing the normal not perpendicular to the mirror.",
      "Avoid: Making the angle of reflection different from the angle of incidence.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Drawing ray diagrams. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-waves-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "waves",
    paper: "Paper 1",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student records that 12 waves pass a point in 6.0 s. The wavelength is 0.40 m. Calculate the frequency and wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "waves", "time"]],
      },
      {
        point: "Substitution: frequency = 12 / 6.0",
        keywords: [["substitution", "frequency"]],
      },
      {
        point: "Frequency = 2.0 Hz",
        keywords: [["frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave", "speed", "frequency"]],
      },
      {
        point: "Substitution: wave speed = 2.0 × 0.40 = 0.80 m/s",
        keywords: [["substitution", "wave", "speed"]],
      },
    ],
    examinerKeywords: ["frequency", "number of waves", "time", "wave speed", "wavelength"],
    modelAnswer:
      "frequency = 12 / 6.0 = 2.0 Hz. Wave speed = frequency × wavelength = 2.0 × 0.40 = 0.80 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 6.0 / 12 for frequency.",
      "Avoid: Forgetting to use the calculated frequency in the wave speed equation.",
      "Avoid: Giving wave speed in Hz.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Data response. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the main energy transfer when a battery-powered torch is switched on.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Energy is transferred from the chemical store of the battery.",
        keywords: [["energy", "transferred", "chemical"]],
      },
      {
        point: "Energy is transferred to light and thermal stores of the surroundings.",
        keywords: [["energy", "transferred", "light"]],
      },
    ],
    examinerKeywords: ["chemical store", "battery", "light", "thermal", "surroundings"],
    modelAnswer:
      "Energy is transferred from the chemical store of the battery to light and thermal stores in the surroundings.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy is used up.",
      "Avoid: Only naming electricity without describing the energy transfer.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy stores and transfers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student lifts a 20 N bag through a vertical height of 1.5 m. Calculate the work done on the bag.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work", "done", "force"]],
      },
      {
        point: "Substitution: work done = 20 × 1.5",
        keywords: [["substitution", "work", "done"]],
      },
      {
        point: "Answer: 30 J",
        keywords: [["work done", "force"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "joules"],
    modelAnswer: "work done = force × distance = 20 × 1.5 = 30 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using mass instead of weight as the force.",
      "Avoid: Giving the answer in newtons instead of joules.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Work and energy. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A machine transfers 2400 J of energy in 12 s. Calculate the power of the machine.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy", "transferred"]],
      },
      {
        point: "Substitution: power = 2400 / 12",
        keywords: [["substitution", "power", "2400"]],
      },
      {
        point: "Answer: 200 W",
        keywords: [["power", "energy transferred"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "watts"],
    modelAnswer: "power = energy transferred / time = 2400 / 12 = 200 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: ["Avoid: Multiplying energy by time.", "Avoid: Using joules as the unit for power."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A motor has an input energy of 500 J and a useful output energy of 125 J. Calculate the efficiency of the motor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful", "output"]],
      },
      {
        point: "Substitution: efficiency = 125 / 500 × 100",
        keywords: [["substitution", "efficiency"]],
      },
      {
        point: "Answer: 25%",
        keywords: [["efficiency", "useful output"]],
      },
      {
        point: "Percentage sign must be included.",
        keywords: [["percentage", "sign", "must"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "total input", "percentage"],
    modelAnswer: "efficiency = useful output / total input × 100 = 125 / 500 × 100 = 25%.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using wasted energy instead of useful output energy.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving off the percentage sign.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Efficiency. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the principle of conservation of energy.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Energy cannot be created or destroyed.",
        keywords: [["energy", "cannot", "created"]],
      },
      {
        point:
          "Energy can only be transferred from one store to another or transformed from one form to another.",
        keywords: [["energy", "only", "transferred"]],
      },
    ],
    examinerKeywords: [
      "conservation of energy",
      "cannot be created",
      "cannot be destroyed",
      "transferred",
      "transformed",
    ],
    modelAnswer:
      "Energy cannot be created or destroyed. It can only be transferred between stores or transformed into different forms.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy disappears when it is wasted.",
      "Avoid: Saying energy can be created by a battery.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Conservation of energy. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a metal spoon feels colder than a wooden spoon at the same room temperature.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Metal is a better thermal conductor than wood.",
        keywords: [["metal", "better", "thermal"]],
      },
      {
        point: "Thermal energy transfers faster from the hand to the metal spoon.",
        keywords: [["thermal", "energy", "transfers"]],
      },
      {
        point: "The hand loses thermal energy more quickly, so the metal spoon feels colder.",
        keywords: [["hand", "loses", "thermal"]],
      },
    ],
    examinerKeywords: ["thermal conductor", "metal", "wood", "thermal energy transfer", "hand"],
    modelAnswer:
      "Metal is a better thermal conductor than wood, so thermal energy leaves your hand faster when you touch the metal spoon. This makes the metal spoon feel colder even though both spoons are at the same temperature.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the metal spoon is actually colder.",
      "Avoid: Not mentioning rate of thermal energy transfer.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Thermal energy transfer. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how thermal energy is transferred by conduction in a metal.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Particles at the hot end vibrate more.",
        keywords: [["particles", "vibrate", "more"]],
      },
      {
        point: "Vibrating particles transfer energy to neighbouring particles by collisions.",
        keywords: [["vibrating", "particles", "transfer"]],
      },
      {
        point: "Delocalised electrons in metals gain kinetic energy.",
        keywords: [["delocalised", "electrons", "metals"]],
      },
      {
        point: "Delocalised electrons move through the metal and transfer energy by collisions.",
        keywords: [["delocalised", "electrons", "move"]],
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
      "At the hot end, metal ions vibrate more and pass energy to neighbouring particles by collisions. Delocalised electrons also gain kinetic energy and move through the metal, transferring energy by collisions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying particles move through the whole solid.",
      "Avoid: Forgetting the role of delocalised electrons in metals.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Conduction. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how convection currents form in a liquid heated from below.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The liquid near the heater gains thermal energy and expands.",
        keywords: [["liquid", "near", "heater"]],
      },
      {
        point: "Its density decreases.",
        keywords: [["density", "decreases"]],
      },
      {
        point: "The warmer, less dense liquid rises.",
        keywords: [["warmer", "less", "dense"]],
      },
      {
        point: "Cooler, denser liquid sinks to replace it, forming a convection current.",
        keywords: [["cooler", "denser", "liquid"]],
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
      "Liquid near the heater warms up and expands, so its density decreases. The warmer liquid rises, while cooler, denser liquid sinks to replace it. This circulation forms a convection current.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying convection happens in solids.",
      "Avoid: Not mentioning density changes.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Convection. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe two surface properties that increase the rate at which an object emits thermal radiation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A dark or black surface is a better emitter of thermal radiation.",
        keywords: [["dark", "black", "surface"]],
      },
      {
        point: "A matt surface is a better emitter than a shiny surface.",
        keywords: [["matt", "surface", "better"]],
      },
    ],
    examinerKeywords: ["thermal radiation", "black", "dark", "matt", "emitter"],
    modelAnswer:
      "A black, matt surface emits thermal radiation faster than a light, shiny surface.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying shiny surfaces are the best emitters.",
      "Avoid: Confusing emission with reflection.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two advantages of using wind turbines to generate electricity.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Wind is a renewable energy resource.",
        keywords: [["wind", "renewable", "energy"]],
      },
      {
        point: "Wind turbines produce no greenhouse gases during operation.",
        keywords: [["wind", "turbines", "produce"]],
      },
    ],
    examinerKeywords: ["wind turbines", "renewable", "no greenhouse gases", "operation"],
    modelAnswer:
      "Wind is renewable, and wind turbines do not produce greenhouse gases while generating electricity.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying wind turbines produce no environmental impacts at all.",
      "Avoid: Saying wind is non-renewable.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Renewable energy resources. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain one disadvantage of using fossil fuels to generate electricity.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Fossil fuels release carbon dioxide when burned.",
        keywords: [["fossil", "fuels", "release"]],
      },
      {
        point: "Carbon dioxide is a greenhouse gas.",
        keywords: [["carbon", "dioxide", "greenhouse"]],
      },
      {
        point: "This contributes to global warming or climate change.",
        keywords: [["contributes", "global", "warming"]],
      },
    ],
    examinerKeywords: [
      "fossil fuels",
      "carbon dioxide",
      "greenhouse gas",
      "global warming",
      "climate change",
    ],
    modelAnswer:
      "Burning fossil fuels releases carbon dioxide. Carbon dioxide is a greenhouse gas, so it contributes to global warming and climate change.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying fossil fuels release oxygen.",
      "Avoid: Only saying fossil fuels are bad without explaining why.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Non-renewable energy resources. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "data-response",
    questionType: "Explain",
    questionText:
      "A Sankey diagram for a device shows 80 J of input energy, 50 J of useful output energy and 30 J of wasted energy. Explain what the widths of the arrows represent.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The arrow widths represent the amount of energy transferred.",
        keywords: [["arrow", "widths", "represent"]],
      },
      {
        point: "A wider arrow represents a larger energy transfer.",
        keywords: [["wider", "arrow", "represents"]],
      },
      {
        point:
          "The input arrow width equals the total of the useful and wasted output arrow widths.",
        keywords: [["input", "arrow", "width"]],
      },
    ],
    examinerKeywords: ["Sankey diagram", "arrow width", "energy transfer", "useful", "wasted"],
    modelAnswer:
      "In a Sankey diagram, the width of each arrow represents the amount of energy transferred. A wider arrow shows more energy, and the total output widths equal the input width.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the arrow width represents time.",
      "Avoid: Not linking wider arrows to larger energy transfers.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Sankey diagrams. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe an experiment to determine the specific heat capacity of a metal block using an electrical heater.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes metal block, heater, thermometer, insulation, joulemeter or ammeter, voltmeter and timer.",
        keywords: [["apparatus", "includes", "metal"]],
      },
      {
        point: "Measure the mass of the metal block using a balance.",
        keywords: [["measure", "mass", "metal"]],
      },
      {
        point: "Insert the heater and thermometer into holes in the block and insulate the block.",
        keywords: [["insert", "heater", "thermometer"]],
      },
      {
        point: "Measure the initial temperature and switch on the heater for a measured time.",
        keywords: [["measure", "initial", "temperature"]],
      },
      {
        point:
          "Record the energy supplied using a joulemeter or calculate it from electrical power × time.",
        keywords: [["record", "energy", "supplied"]],
      },
      {
        point:
          "Measure the temperature rise and calculate specific heat capacity using energy = mass × specific heat capacity × temperature change; repeat where possible.",
        keywords: [["measure", "temperature", "rise"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "metal block",
      "heater",
      "mass",
      "temperature rise",
      "insulation",
      "energy",
    ],
    modelAnswer:
      "Measure the mass of the block, place a heater and thermometer into the block and insulate it. Record the initial temperature, switch on the heater for a measured time and record the energy supplied. Measure the final temperature and calculate the temperature rise. Use E = mcΔT to find c, repeating to improve reliability.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Forgetting to insulate the block.",
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Not measuring the mass of the block.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why no machine can be 100% efficient in practice.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Some energy is always transferred to non-useful stores.",
        keywords: [["some", "energy", "always"]],
      },
      {
        point: "Energy may be dissipated by friction, heating or sound.",
        keywords: [["energy", "dissipated", "friction"]],
      },
      {
        point: "Therefore useful output energy is less than total input energy.",
        keywords: [["therefore", "useful", "output"]],
      },
    ],
    examinerKeywords: [
      "efficiency",
      "wasted energy",
      "dissipated",
      "friction",
      "thermal energy",
      "useful output",
    ],
    modelAnswer:
      "In real machines, some energy is always dissipated to the surroundings, often by friction as thermal energy or sound. Therefore the useful output energy is less than the total input energy.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Only saying machines are not perfect without explaining energy dissipation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy dissipation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare nuclear power and solar power as methods of generating electricity.",
    marks: 5,
    markSchemePoints: [
      {
        point:
          "Nuclear power can produce a large, reliable output independent of weather conditions.",
        keywords: [["nuclear", "power", "produce"]],
      },
      {
        point: "Solar power is renewable, while nuclear fuel is non-renewable.",
        keywords: [["solar", "power", "renewable"]],
      },
      {
        point: "Solar power produces no radioactive waste during operation.",
        keywords: [["solar", "power", "produces"]],
      },
      {
        point: "Nuclear power produces radioactive waste that must be stored safely.",
        keywords: [["nuclear", "power", "produces"]],
      },
      {
        point: "Solar output varies with daylight, cloud cover and time of day.",
        keywords: [["solar", "output", "varies"]],
      },
    ],
    examinerKeywords: ["nuclear", "solar", "renewable", "radioactive waste", "reliable", "weather"],
    modelAnswer:
      "Nuclear power gives a large and reliable output and is not dependent on the weather, but it uses non-renewable fuel and produces radioactive waste. Solar power is renewable and produces no radioactive waste during operation, but its output depends on daylight and weather conditions.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying nuclear power releases carbon dioxide during normal operation.",
      "Avoid: Ignoring reliability and only comparing pollution.",
      "Avoid: Saying solar panels work equally well at night.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy resources comparison. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Suggest",
    questionText: "Suggest two ways to reduce thermal energy loss from a house.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use loft insulation, cavity wall insulation or double glazing.",
        keywords: [["loft", "insulation", "cavity"]],
      },
      {
        point: "Use draught excluders, thick curtains or reflective foil behind radiators.",
        keywords: [["draught", "excluders", "thick"]],
      },
    ],
    examinerKeywords: [
      "loft insulation",
      "cavity wall insulation",
      "double glazing",
      "draught excluders",
      "thermal energy loss",
    ],
    modelAnswer:
      "Thermal energy loss can be reduced by installing loft insulation and double glazing.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Suggesting ways to generate more heat instead of reducing heat loss.",
      "Avoid: Giving vague answers such as make the house warmer.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy transfer by heating. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the main energy transfers in a hydroelectric power station.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Water stored high up has gravitational potential energy.",
        keywords: [["water", "stored", "high"]],
      },
      {
        point: "As water flows down, energy is transferred to kinetic energy.",
        keywords: [["water", "flows", "down"]],
      },
      {
        point: "The moving water turns a turbine.",
        keywords: [["moving", "water", "turns"]],
      },
      {
        point: "The generator transfers kinetic energy to electrical energy.",
        keywords: [["generator", "transfers", "kinetic"]],
      },
    ],
    examinerKeywords: [
      "hydroelectric",
      "gravitational potential energy",
      "kinetic energy",
      "turbine",
      "generator",
      "electrical energy",
    ],
    modelAnswer:
      "Water stored in a high reservoir has gravitational potential energy. As it flows down, this becomes kinetic energy. The moving water turns a turbine connected to a generator, which transfers energy electrically.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying water is burned to release energy.",
      "Avoid: Forgetting the turbine or generator stage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Hydroelectric power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 2.0 kW heater is used for 3.5 hours. Calculate the energy transferred in kWh.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy", "transferred", "power"]],
      },
      {
        point: "Substitution: energy = 2.0 × 3.5",
        keywords: [["substitution", "energy"]],
      },
      {
        point: "Answer: 7.0 kWh",
        keywords: [["energy transferred", "power"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "kWh"],
    modelAnswer: "energy = power × time = 2.0 × 3.5 = 7.0 kWh.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Converting hours to seconds when the answer is required in kWh.",
      "Avoid: Using watts instead of kilowatts without converting.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electrical energy cost. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why lubricating the moving parts of a machine can improve its efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Lubrication reduces friction between moving parts.",
        keywords: [["lubrication", "reduces", "friction"]],
      },
      {
        point: "Less energy is dissipated as thermal energy.",
        keywords: [["less", "energy", "dissipated"]],
      },
      {
        point: "A greater fraction of the input energy is transferred usefully.",
        keywords: [["greater", "fraction", "input"]],
      },
    ],
    examinerKeywords: ["lubrication", "friction", "thermal energy", "dissipated", "efficiency"],
    modelAnswer:
      "Lubrication reduces friction between moving parts. Less energy is wasted as thermal energy, so a larger fraction of the input energy is transferred usefully and the efficiency increases.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying lubrication creates energy.",
      "Avoid: Not linking reduced friction to reduced wasted energy.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Reducing energy waste. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-energy-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "energy-resources-transfers",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A crane lifts a load and gives it 9000 J of useful gravitational potential energy in 15 s. The crane has an input power of 800 W. Calculate the efficiency of the crane.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Formula: input energy = power × time",
        keywords: [["input", "energy", "power"]],
      },
      {
        point: "Substitution: input energy = 800 × 15",
        keywords: [["substitution", "input", "energy"]],
      },
      {
        point: "Input energy = 12000 J",
        keywords: [["input", "energy", "12000"]],
      },
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful", "output"]],
      },
      {
        point: "Substitution: efficiency = 9000 / 12000 × 100",
        keywords: [["substitution", "efficiency", "9000"]],
      },
      {
        point: "Answer: 75%",
        keywords: [["input energy", "power"]],
      },
    ],
    examinerKeywords: [
      "input energy",
      "power",
      "time",
      "useful output",
      "efficiency",
      "percentage",
    ],
    modelAnswer:
      "Input energy = power × time = 800 × 15 = 12000 J. Efficiency = useful output / total input × 100 = 9000 / 12000 × 100 = 75%.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using useful output energy as the input energy.",
      "Avoid: Forgetting to calculate input energy first.",
      "Avoid: Forgetting to multiply by 100.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Power and efficiency combined. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define density.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Density is mass per unit volume.",
        keywords: [["density", "mass", "unit"]],
      },
      {
        point: "Density can be calculated using density = mass / volume.",
        keywords: [["density", "calculated", "mass"]],
      },
    ],
    examinerKeywords: ["density", "mass", "unit volume", "mass / volume"],
    modelAnswer: "Density is the mass per unit volume of a substance.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying density is weight per unit area.",
      "Avoid: Confusing density with pressure.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
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
        keywords: [["substitution", "density"]],
      },
      {
        point: "Answer: 2.7 g/cm³",
        keywords: [["density", "mass"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 540 / 200 = 2.7 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying mass by volume.",
      "Avoid: Giving the answer without units.",
      "Avoid: Mixing g and kg without conversion.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density calculation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to determine the density of an irregularly shaped stone.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Use a balance to measure the mass of the stone.",
        keywords: [["balance", "measure", "mass"]],
      },
      {
        point:
          "Use a measuring cylinder or displacement can filled with water to measure volume by displacement.",
        keywords: [["measuring", "cylinder", "displacement"]],
      },
      {
        point: "Record the initial and final water levels or collect displaced water.",
        keywords: [["record", "initial", "final"]],
      },
      {
        point: "Calculate volume = final reading - initial reading.",
        keywords: [["calculate", "volume", "final"]],
      },
      {
        point: "Calculate density using density = mass / volume.",
        keywords: [["calculate", "density", "mass"]],
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
      "Measure the stone's mass using a balance. Place water in a measuring cylinder and record the initial volume. Carefully lower the stone into the water and record the final volume. The difference is the stone's volume. Calculate density using mass divided by volume.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Trying to use length × width × height for an irregular object.",
      "Avoid: Forgetting to subtract the initial water level.",
      "Avoid: Not fully submerging the stone.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Measuring density. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the arrangement and motion of particles in a solid.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Particles in a solid are closely packed.",
        keywords: [["particles", "solid", "closely"]],
      },
      {
        point: "They are arranged in a fixed or regular pattern.",
        keywords: [["arranged", "fixed", "regular"]],
      },
      {
        point: "They vibrate about fixed positions.",
        keywords: [["vibrate", "about", "fixed"]],
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
      "Avoid: Saying solid particles do not move at all.",
      "Avoid: Saying solid particles flow past each other.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Particle model. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare the particles in a gas with the particles in a liquid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gas particles are much further apart than liquid particles.",
        keywords: [["particles", "much", "further"]],
      },
      {
        point: "Gas particles move randomly and rapidly in all directions.",
        keywords: [["particles", "move", "randomly"]],
      },
      {
        point: "Liquid particles are close together but can move past each other.",
        keywords: [["liquid", "particles", "close"]],
      },
      {
        point: "Forces between particles are weaker in gases than in liquids.",
        keywords: [["forces", "particles", "weaker"]],
      },
    ],
    examinerKeywords: [
      "gas",
      "liquid",
      "particles",
      "far apart",
      "random motion",
      "move past each other",
    ],
    modelAnswer:
      "Gas particles are far apart and move randomly and rapidly in all directions. Liquid particles are close together but can move past each other. The forces between particles are weaker in gases than in liquids.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying liquid particles are fixed in place.",
      "Avoid: Saying gas particles have no mass.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Particle model. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A force of 250 N acts normally on an area of 0.50 m². Calculate the pressure.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: pressure = force / area",
        keywords: [["pressure", "force", "area"]],
      },
      {
        point: "Substitution: pressure = 250 / 0.50",
        keywords: [["substitution", "pressure"]],
      },
      {
        point: "Answer: 500 Pa",
        keywords: [["pressure", "force"]],
      },
    ],
    examinerKeywords: ["pressure", "force", "area", "pascal"],
    modelAnswer: "pressure = force / area = 250 / 0.50 = 500 Pa.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying force by area.",
      "Avoid: Using N as the unit for pressure.",
      "Avoid: Forgetting pressure uses normal force.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why pressure in a liquid increases with depth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "At greater depth there is more liquid above the point.",
        keywords: [["greater", "depth", "more"]],
      },
      {
        point: "The weight of the liquid above produces a larger force.",
        keywords: [["weight", "liquid", "above"]],
      },
      {
        point: "Pressure increases because pressure = force / area.",
        keywords: [["pressure", "increases", "force"]],
      },
    ],
    examinerKeywords: ["pressure", "depth", "weight of liquid", "force", "area"],
    modelAnswer:
      "Deeper points have more liquid above them. The weight of this liquid produces a larger force on a given area, so the pressure is greater.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying pressure increases because the liquid becomes denser at the bottom.",
      "Avoid: Not linking pressure to force over area.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure in liquids. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the pressure difference between the surface of a lake and a point 3.0 m below the surface. The density of water is 1000 kg/m³ and gravitational field strength is 10 N/kg.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: pressure difference = height × density × gravitational field strength",
        keywords: [["pressure", "difference", "height"]],
      },
      {
        point: "Substitution: pressure difference = 3.0 × 1000 × 10",
        keywords: [["substitution", "pressure", "difference"]],
      },
      {
        point: "Answer: 30000 Pa",
        keywords: [["30000"]],
      },
      {
        point: "Accept 30 kPa if converted correctly.",
        keywords: [["accept", "converted", "correctly"]],
      },
    ],
    examinerKeywords: [
      "pressure difference",
      "height",
      "density",
      "gravitational field strength",
      "Pa",
    ],
    modelAnswer: "pressure difference = hρg = 3.0 × 1000 × 10 = 30000 Pa.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using area in the liquid pressure equation.",
      "Avoid: Forgetting to include gravitational field strength.",
      "Avoid: Writing the answer as 30000 N.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Liquid pressure calculation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how gas particles produce pressure on the walls of a container.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gas particles move randomly in all directions.",
        keywords: [["particles", "move", "randomly"]],
      },
      {
        point: "They collide with the walls of the container.",
        keywords: [["collide", "walls", "container"]],
      },
      {
        point: "The collisions exert a force on the walls.",
        keywords: [["collisions", "exert", "force"]],
      },
      {
        point: "Pressure is produced because force acts over an area.",
        keywords: [["pressure", "produced", "force"]],
      },
    ],
    examinerKeywords: ["gas particles", "random motion", "collisions", "force", "pressure", "area"],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls. Each collision exerts a force on the wall. The total force over the wall area produces gas pressure.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying pressure is caused by particles sticking to the wall.",
      "Avoid: Not mentioning collisions.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Gas pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "A sealed metal can contains gas at constant volume. Explain why the gas pressure increases when the can is heated.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Heating increases the kinetic energy of the gas particles.",
        keywords: [["heating", "increases", "kinetic"]],
      },
      {
        point: "The particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "They collide with the container walls more frequently or with greater force.",
        keywords: [["collide", "container", "walls"]],
      },
      {
        point: "This increases the pressure.",
        keywords: [["increases", "pressure"]],
      },
    ],
    examinerKeywords: [
      "heating",
      "kinetic energy",
      "gas particles",
      "faster",
      "collisions",
      "pressure",
    ],
    modelAnswer:
      "Heating gives the gas particles more kinetic energy, so they move faster. They collide with the walls more often and with greater force, so the pressure increases.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the particles expand.",
      "Avoid: Saying pressure increases because the volume increases, even though volume is constant.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Gas temperature and pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A gas has a volume of 0.060 m³ at a pressure of 100 kPa. The temperature is constant. The gas is compressed to a volume of 0.040 m³. Calculate the new pressure.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Use Boyle's law for a fixed mass of gas at constant temperature: p1V1 = p2V2",
        keywords: [["boyle", "fixed", "mass"]],
      },
      {
        point: "Substitution: 100 × 0.060 = p2 × 0.040",
        keywords: [["substitution"]],
      },
      {
        point: "p2 = 6.0 / 0.040",
        keywords: [["boyle's law", "pressure"]],
      },
      {
        point: "Answer: 150 kPa",
        keywords: [["boyle's law", "pressure"]],
      },
    ],
    examinerKeywords: ["Boyle's law", "pressure", "volume", "constant temperature", "kPa"],
    modelAnswer: "p1V1 = p2V2, so 100 × 0.060 = p2 × 0.040. p2 = 6.0 / 0.040 = 150 kPa.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using Celsius temperature even though temperature is constant.",
      "Avoid: Forgetting that pressure increases when volume decreases.",
      "Avoid: Changing kPa to Pa for only one pressure.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Boyle's law. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State why temperature must be measured in kelvin when using gas law equations involving temperature.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Kelvin is an absolute temperature scale.",
        keywords: [["kelvin", "absolute", "temperature"]],
      },
      {
        point:
          "Gas law relationships are directly proportional to absolute temperature, not Celsius temperature.",
        keywords: [["relationships", "directly", "proportional"]],
      },
    ],
    examinerKeywords: ["kelvin", "absolute temperature", "gas laws", "directly proportional"],
    modelAnswer:
      "Gas law equations use absolute temperature, so temperature must be measured in kelvin rather than degrees Celsius.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Using Celsius values directly in proportional gas law calculations.",
      "Avoid: Saying kelvin is used only because it has bigger numbers.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Kelvin temperature. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe what happens to the temperature of a pure substance while it is melting.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The temperature remains constant during melting.",
        keywords: [["temperature", "remains", "constant"]],
      },
      {
        point:
          "Energy supplied is used to overcome forces between particles rather than increasing kinetic energy.",
        keywords: [["energy", "supplied", "used"]],
      },
    ],
    examinerKeywords: ["melting", "constant temperature", "energy", "forces between particles"],
    modelAnswer:
      "During melting, the temperature stays constant because the energy supplied is used to overcome forces between particles instead of increasing their kinetic energy.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying temperature keeps rising during melting.",
      "Avoid: Not explaining where the energy goes.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Changes of state. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define specific latent heat.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Specific latent heat is the energy required to change the state of 1 kg of a substance.",
        keywords: [["specific", "latent", "heat"]],
      },
      {
        point: "The change of state occurs without a change in temperature.",
        keywords: [["change", "state", "occurs"]],
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
    suggestedMinutes: 3,
    hints: [
      "Avoid: Confusing specific latent heat with specific heat capacity.",
      "Avoid: Forgetting to mention 1 kg.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific latent heat. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a block of wood floats on water.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The wood has a lower density than water.",
        keywords: [["wood", "lower", "density"]],
      },
      {
        point: "The water provides an upthrust on the block.",
        keywords: [["water", "provides", "upthrust"]],
      },
      {
        point: "The block floats when the upthrust equals the weight of the block.",
        keywords: [["block", "floats", "upthrust"]],
      },
    ],
    examinerKeywords: ["density", "water", "upthrust", "weight", "float"],
    modelAnswer:
      "Wood floats because its density is less than the density of water. Water provides an upthrust, and the block floats when the upthrust balances its weight.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying wood has no weight.",
      "Avoid: Saying floating happens because there is no gravity in water.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density and floating. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why snowshoes help a person walk on soft snow without sinking as much.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Snowshoes increase the contact area with the snow.",
        keywords: [["snowshoes", "increase", "contact"]],
      },
      {
        point: "The person's weight is spread over a larger area.",
        keywords: [["person", "weight", "spread"]],
      },
      {
        point: "Pressure decreases because pressure = force / area.",
        keywords: [["pressure", "decreases", "force"]],
      },
    ],
    examinerKeywords: ["snowshoes", "area", "weight", "pressure", "force / area"],
    modelAnswer:
      "Snowshoes increase the area in contact with the snow. The person's weight is spread over a larger area, so the pressure on the snow is smaller and they sink less.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying snowshoes reduce the person's weight.",
      "Avoid: Not linking larger area to lower pressure.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure applications. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe Brownian motion and explain what it shows about particles.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Brownian motion is the random movement of small visible particles suspended in a fluid.",
        keywords: [["brownian", "motion", "random"]],
      },
      {
        point: "The visible particles are hit by smaller, invisible fluid particles.",
        keywords: [["visible", "particles", "smaller"]],
      },
      {
        point: "The collisions are uneven and random.",
        keywords: [["collisions", "uneven", "random"]],
      },
      {
        point: "This provides evidence that fluids contain moving particles.",
        keywords: [["provides", "evidence", "fluids"]],
      },
    ],
    examinerKeywords: [
      "Brownian motion",
      "random movement",
      "collisions",
      "fluid particles",
      "evidence",
    ],
    modelAnswer:
      "Brownian motion is the random movement of tiny visible particles suspended in a liquid or gas. It happens because the visible particles are struck unevenly by smaller moving fluid particles. This is evidence that fluids contain particles in random motion.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying Brownian motion is the movement of gas particles directly visible to the eye.",
      "Avoid: Not mentioning random collisions.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Brownian motion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate how pressure from a solid depends on contact area.",
    marks: 5,
    markSchemePoints: [
      {
        point:
          "Apparatus includes a rectangular block, balance, ruler and tray of sand or soft material.",
        keywords: [["apparatus", "includes", "rectangular"]],
      },
      {
        point:
          "Measure the mass of the block and calculate its weight using weight = mass × gravitational field strength.",
        keywords: [["measure", "mass", "block"]],
      },
      {
        point: "Measure different face areas of the block using a ruler.",
        keywords: [["measure", "different", "face"]],
      },
      {
        point:
          "Place the block on different faces and observe or measure the depth of the indentation.",
        keywords: [["place", "block", "different"]],
      },
      {
        point:
          "Keep the force constant by using the same block and compare indentation with pressure = force / area.",
        keywords: [["keep", "force", "constant"]],
      },
    ],
    examinerKeywords: ["pressure", "contact area", "force", "same block", "indentation", "sand"],
    modelAnswer:
      "Measure the mass of a rectangular block and calculate its weight. Measure the area of each face. Place the same block on sand using different faces and measure the indentation depth. The force is constant because the same block is used, so a smaller contact area gives greater pressure and a deeper indentation.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Changing the mass of the block as well as the area.",
      "Avoid: Not measuring the area of the face.",
      "Avoid: Confusing depth of indentation with force.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "graph",
    questionType: "Describe",
    questionText:
      "A student measures pressure difference at different depths in water. Describe the graph expected when pressure difference is plotted against depth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Depth should be on the x-axis and pressure difference on the y-axis.",
        keywords: [["depth", "should", "x-axis"]],
      },
      {
        point: "The graph should be a straight line through the origin.",
        keywords: [["graph", "should", "straight"]],
      },
      {
        point:
          "Pressure difference is directly proportional to depth if density and gravitational field strength are constant.",
        keywords: [["pressure", "difference", "directly"]],
      },
    ],
    examinerKeywords: [
      "pressure difference",
      "depth",
      "straight line",
      "origin",
      "directly proportional",
    ],
    modelAnswer:
      "The graph of pressure difference against depth should be a straight line through the origin, showing that pressure difference is directly proportional to depth.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing a curve for constant-density water.",
      "Avoid: Putting pressure difference on the x-axis when asked otherwise.",
      "Avoid: Not mentioning the origin.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Liquid pressure data. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-solids-liquids-gases-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "solids-liquids-gases",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A cube has sides of length 0.20 m and a mass of 16 kg. Calculate its density.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula for cube volume: volume = side³",
        keywords: [["cube", "volume", "side"]],
      },
      {
        point: "Substitution: volume = 0.20 × 0.20 × 0.20",
        keywords: [["substitution", "volume"]],
      },
      {
        point: "Volume = 0.0080 m³",
        keywords: [["volume", "0080"]],
      },
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 16 / 0.0080 = 2000 kg/m³",
        keywords: [["substitution", "density", "0080"]],
      },
    ],
    examinerKeywords: ["cube", "volume", "density", "mass", "kg/m³"],
    modelAnswer:
      "Volume = 0.20 × 0.20 × 0.20 = 0.0080 m³. Density = mass / volume = 16 / 0.0080 = 2000 kg/m³.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using area instead of volume.",
      "Avoid: Forgetting to cube the side length.",
      "Avoid: Giving density in kg/m².",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Combined density and pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field pattern around a bar magnet.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Magnetic field lines go from the north pole to the south pole outside the magnet.",
        keywords: [["magnetic", "field", "lines"]],
      },
      {
        point: "The field is strongest near the poles where field lines are closest together.",
        keywords: [["field", "strongest", "near"]],
      },
      {
        point: "The field lines form complete loops and do not cross.",
        keywords: [["field", "lines", "form"]],
      },
    ],
    examinerKeywords: [
      "north pole",
      "south pole",
      "field lines",
      "strongest near poles",
      "do not cross",
    ],
    modelAnswer:
      "The magnetic field lines leave the north pole and enter the south pole. The lines are closest together near the poles, so the field is strongest there. Field lines form complete loops and never cross.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing arrows from south to north outside the magnet.",
      "Avoid: Saying field lines cross at the poles.",
      "Avoid: Not mentioning that closer lines mean a stronger field.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Magnetic fields. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare a permanent magnet with an induced magnet.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A permanent magnet produces its own magnetic field all the time.",
        keywords: [["permanent", "magnet", "produces"]],
      },
      {
        point: "An induced magnet becomes magnetic only when placed in a magnetic field.",
        keywords: [["induced", "magnet", "becomes"]],
      },
      {
        point: "An induced magnet usually loses most or all magnetism when the field is removed.",
        keywords: [["induced", "magnet", "usually"]],
      },
      {
        point: "Both can exert magnetic forces on magnetic materials.",
        keywords: [["both", "exert", "magnetic"]],
      },
    ],
    examinerKeywords: [
      "permanent magnet",
      "induced magnet",
      "magnetic field",
      "field removed",
      "magnetic force",
    ],
    modelAnswer:
      "A permanent magnet always produces its own magnetic field. An induced magnet only becomes magnetic when it is in another magnetic field and usually loses its magnetism when the field is removed. Both can attract magnetic materials.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying induced magnets are always magnetic.",
      "Avoid: Saying permanent magnets need electricity to work.",
      "Avoid: Not giving both a similarity and a difference.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Permanent and induced magnets. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two materials that are attracted by a magnet.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Iron is attracted by a magnet.",
        keywords: [["iron", "attracted", "magnet"]],
      },
      {
        point: "Steel, nickel or cobalt are also attracted by a magnet.",
        keywords: [["steel", "nickel", "cobalt"]],
      },
    ],
    examinerKeywords: ["iron", "steel", "nickel", "cobalt", "magnetic material"],
    modelAnswer: "Iron and steel are attracted by a magnet.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying aluminium is strongly attracted by a magnet.",
      "Avoid: Naming non-metals such as plastic or wood.",
      "Avoid: Saying all metals are magnetic.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Magnetic materials. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the magnetic field around a straight wire carrying a current.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The magnetic field forms concentric circles around the wire.",
        keywords: [["magnetic", "field", "forms"]],
      },
      {
        point: "The direction of the field depends on the direction of the current.",
        keywords: [["direction", "field", "depends"]],
      },
      {
        point: "The field is stronger closer to the wire or when the current is larger.",
        keywords: [["field", "stronger", "closer"]],
      },
    ],
    examinerKeywords: [
      "current-carrying wire",
      "concentric circles",
      "direction",
      "stronger close to wire",
      "larger current",
    ],
    modelAnswer:
      "A current in a straight wire produces magnetic field lines in circles around the wire. The field direction depends on the current direction, and the field is strongest close to the wire or when the current is larger.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Drawing straight field lines along the wire.",
      "Avoid: Saying the field direction does not depend on current direction.",
      "Avoid: Forgetting that a larger current gives a stronger field.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Magnetic field around a wire. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain how increasing the current in a solenoid affects its magnetic field.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A current in the solenoid produces a magnetic field.",
        keywords: [["current", "solenoid", "produces"]],
      },
      {
        point: "Increasing the current increases the strength of the magnetic field.",
        keywords: [["increasing", "current", "increases"]],
      },
      {
        point: "The solenoid acts more like a stronger bar magnet, with stronger poles.",
        keywords: [["solenoid", "acts", "more"]],
      },
    ],
    examinerKeywords: ["solenoid", "current", "magnetic field", "stronger", "poles"],
    modelAnswer:
      "A solenoid produces a magnetic field when current flows. Increasing the current makes the magnetic field stronger, so the solenoid behaves like a stronger bar magnet.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying current has no effect on magnetic field strength.",
      "Avoid: Saying increasing current reverses the field direction.",
      "Avoid: Confusing current with voltage without linking to field strength.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Solenoids. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe two ways to increase the strength of an electromagnet.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Increase the current in the coil.",
        keywords: [["increase", "current", "coil"]],
      },
      {
        point: "Increase the number of turns on the coil or add a soft iron core.",
        keywords: [["increase", "turns", "coil"]],
      },
    ],
    examinerKeywords: [
      "electromagnet",
      "increase current",
      "more turns",
      "soft iron core",
      "stronger field",
    ],
    modelAnswer:
      "The electromagnet can be made stronger by increasing the current and by adding more turns to the coil.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying use a wooden core.",
      "Avoid: Saying decrease the current.",
      "Avoid: Only saying make the magnet bigger without physics detail.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnets. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a relay uses an electromagnet to switch on a separate circuit.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A small current flows through the coil of the electromagnet.",
        keywords: [["small", "current", "flows"]],
      },
      {
        point: "The electromagnet produces a magnetic field and attracts an iron armature.",
        keywords: [["electromagnet", "produces", "magnetic"]],
      },
      {
        point: "The armature moves and closes contacts in a second circuit.",
        keywords: [["armature", "moves", "closes"]],
      },
      {
        point: "This allows a larger current or separate circuit to be switched on safely.",
        keywords: [["allows", "larger", "current"]],
      },
    ],
    examinerKeywords: [
      "relay",
      "electromagnet",
      "coil",
      "armature",
      "contacts",
      "separate circuit",
    ],
    modelAnswer:
      "When a small current flows in the relay coil, it becomes an electromagnet. The electromagnet attracts an iron armature, which moves and closes contacts in another circuit. This switches on the separate circuit, which can have a larger current.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the two circuits must be directly connected.",
      "Avoid: Forgetting the armature movement.",
      "Avoid: Saying the relay uses a permanent magnet only.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Relay switches. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by the motor effect.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The motor effect is the force on a current-carrying conductor.",
        keywords: [["motor", "effect", "force"]],
      },
      {
        point: "The force occurs when the conductor is placed in a magnetic field.",
        keywords: [["force", "occurs", "conductor"]],
      },
    ],
    examinerKeywords: ["motor effect", "force", "current-carrying conductor", "magnetic field"],
    modelAnswer:
      "The motor effect is the force on a current-carrying conductor when it is placed in a magnetic field.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the motor effect is electromagnetic induction.",
      "Avoid: Forgetting that a current must be present.",
      "Avoid: Saying the force acts on the magnetic field rather than the conductor.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Motor effect. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how the direction of the force on a current-carrying wire in a magnetic field can be reversed.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Reverse the direction of the current in the wire.",
        keywords: [["reverse", "direction", "current"]],
      },
      {
        point: "Reverse the direction of the magnetic field.",
        keywords: [["reverse", "direction", "magnetic"]],
      },
    ],
    examinerKeywords: [
      "force direction",
      "reverse current",
      "reverse magnetic field",
      "motor effect",
    ],
    modelAnswer:
      "The force direction can be reversed by reversing the current direction or by reversing the magnetic field direction.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying increase the current reverses the force.",
      "Avoid: Saying increase the field strength reverses the force.",
      "Avoid: Not distinguishing strength from direction.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Motor effect direction. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the purpose of the split-ring commutator in a simple d.c. motor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The split-ring commutator reverses the current in the coil every half-turn.",
        keywords: [["split-ring", "commutator", "reverses"]],
      },
      {
        point:
          "This keeps the forces on the two sides of the coil acting in directions that continue rotation.",
        keywords: [["keeps", "forces", "sides"]],
      },
      {
        point: "Without the commutator, the coil would stop or reverse after half a turn.",
        keywords: [["without", "commutator", "coil"]],
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
      "The split-ring commutator reverses the current in the coil every half-turn. This reverses the forces at the correct time so the coil continues to rotate in the same direction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the commutator increases the voltage.",
      "Avoid: Saying it reverses the magnetic field.",
      "Avoid: Not explaining why current reversal is needed.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electric motors. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how a potential difference can be induced in a coil using a magnet.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Move a magnet into or out of the coil.",
        keywords: [["move", "magnet", "coil"]],
      },
      {
        point: "The magnetic field through the coil changes.",
        keywords: [["magnetic", "field", "through"]],
      },
      {
        point: "A potential difference is induced across the ends of the coil.",
        keywords: [["potential", "difference", "induced"]],
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
      "A potential difference is induced when a magnet is moved into or out of a coil. The movement changes the magnetic field through the coil, inducing a potential difference across it.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying a stationary magnet in a stationary coil always induces a voltage.",
      "Avoid: Forgetting the magnetic field must change.",
      "Avoid: Saying current is induced even when the circuit is open.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnetic induction. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "State two ways to increase the size of the induced potential difference in a coil.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Move the magnet or coil faster.",
        keywords: [["move", "magnet", "coil"]],
      },
      {
        point:
          "Use a stronger magnet, increase the number of turns on the coil, or use a soft iron core.",
        keywords: [["stronger", "magnet", "increase"]],
      },
    ],
    examinerKeywords: [
      "induced potential difference",
      "faster movement",
      "stronger magnet",
      "more turns",
      "soft iron core",
    ],
    modelAnswer:
      "The induced potential difference can be increased by moving the magnet faster and by using more turns on the coil.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying hold the magnet still for longer.",
      "Avoid: Saying use a weaker magnet.",
      "Avoid: Not linking the answer to rate of change of magnetic field.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Induced potential difference. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how a simple a.c. generator produces an alternating potential difference.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A coil rotates in a magnetic field.",
        keywords: [["coil", "rotates", "magnetic"]],
      },
      {
        point: "The magnetic field through the coil changes as it rotates.",
        keywords: [["magnetic", "field", "through"]],
      },
      {
        point: "This induces a potential difference across the coil.",
        keywords: [["induces", "potential", "difference"]],
      },
      {
        point: "The direction of the induced potential difference reverses every half-turn.",
        keywords: [["direction", "induced", "potential"]],
      },
      {
        point: "Slip rings and brushes connect the rotating coil to the external circuit.",
        keywords: [["slip", "rings", "brushes"]],
      },
    ],
    examinerKeywords: [
      "a.c. generator",
      "rotating coil",
      "magnetic field",
      "induced potential difference",
      "reverses",
      "slip rings",
    ],
    modelAnswer:
      "In an a.c. generator, a coil rotates in a magnetic field. As it rotates, the magnetic field through the coil changes, inducing a potential difference. The direction of the induced potential difference reverses every half-turn, producing alternating potential difference. Slip rings and brushes connect the coil to the circuit.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying the generator stores charge.",
      "Avoid: Confusing slip rings with a split-ring commutator.",
      "Avoid: Forgetting that the induced potential difference changes direction.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Generators. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 200 turns on the primary coil and 1000 turns on the secondary coil. The primary potential difference is 12 V. Calculate the secondary potential difference.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["secondary", "voltage", "primary"]],
      },
      {
        point: "Substitution: Vs / 12 = 1000 / 200",
        keywords: [["substitution", "1000"]],
      },
      {
        point: "Vs = 12 × 5",
        keywords: [["transformer", "primary coil"]],
      },
      {
        point: "Answer: 60 V",
        keywords: [["transformer", "primary coil"]],
      },
    ],
    examinerKeywords: ["transformer", "primary coil", "secondary coil", "turns ratio", "voltage"],
    modelAnswer: "Vs / Vp = Ns / Np, so Vs / 12 = 1000 / 200 = 5. Therefore Vs = 12 × 5 = 60 V.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Inverting the turns ratio.",
      "Avoid: Using current instead of voltage.",
      "Avoid: Forgetting the unit V.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why a transformer with more turns on the secondary coil than the primary coil is called a step-up transformer.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The secondary coil has more turns than the primary coil.",
        keywords: [["secondary", "coil", "more"]],
      },
      {
        point:
          "The secondary potential difference is greater than the primary potential difference.",
        keywords: [["secondary", "potential", "difference"]],
      },
      {
        point: "The transformer increases or steps up the voltage.",
        keywords: [["transformer", "increases", "steps"]],
      },
    ],
    examinerKeywords: [
      "step-up transformer",
      "secondary turns",
      "primary turns",
      "potential difference",
      "voltage increases",
    ],
    modelAnswer:
      "It is a step-up transformer because the secondary coil has more turns than the primary coil. This makes the secondary voltage greater than the primary voltage.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying it steps up current and voltage at the same time.",
      "Avoid: Saying more turns on the primary makes it step-up.",
      "Avoid: Not linking turns ratio to voltage change.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Step-up and step-down transformers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why electricity is transmitted through power lines at very high voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "For a given power, increasing voltage reduces current.",
        keywords: [["given", "power", "increasing"]],
      },
      {
        point: "Lower current reduces heating in transmission cables.",
        keywords: [["lower", "current", "reduces"]],
      },
      {
        point: "Less energy is wasted by thermal transfer to the surroundings.",
        keywords: [["less", "energy", "wasted"]],
      },
      {
        point: "This makes transmission more efficient.",
        keywords: [["makes", "transmission", "more"]],
      },
    ],
    examinerKeywords: [
      "high voltage",
      "low current",
      "power transmission",
      "heating",
      "energy wasted",
      "efficiency",
    ],
    modelAnswer:
      "For the same power transfer, using a high voltage means the current is smaller. A smaller current causes less heating in the cables, so less energy is wasted to the surroundings and transmission is more efficient.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying high voltage is used because it is safer.",
      "Avoid: Saying high voltage increases energy loss.",
      "Avoid: Not linking lower current to reduced heating.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Power transmission. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An ideal transformer has a primary voltage of 230 V and primary current of 0.40 A. The secondary voltage is 12 V. Calculate the secondary current.",
    marks: 5,
    markSchemePoints: [
      {
        point: "For an ideal transformer: primary power = secondary power",
        keywords: [["ideal", "transformer", "primary"]],
      },
      {
        point: "Formula: power = current × voltage",
        keywords: [["power", "current", "voltage"]],
      },
      {
        point: "Primary power = 230 × 0.40 = 92 W",
        keywords: [["primary", "power"]],
      },
      {
        point: "Secondary current = power / secondary voltage",
        keywords: [["secondary", "current", "power"]],
      },
      {
        point: "Substitution: Is = 92 / 12 = 7.7 A to 2 significant figures",
        keywords: [["substitution", "significant", "figures"]],
      },
    ],
    examinerKeywords: [
      "ideal transformer",
      "power",
      "current",
      "voltage",
      "secondary current",
      "significant figures",
    ],
    modelAnswer:
      "Primary power = VpIp = 230 × 0.40 = 92 W. For an ideal transformer, secondary power = 92 W. Is = P / Vs = 92 / 12 = 7.7 A to 2 significant figures.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Assuming primary current equals secondary current.",
      "Avoid: Forgetting to use power conservation.",
      "Avoid: Rounding too early or omitting the unit A.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformer power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe an experiment to investigate how the number of turns on a coil affects the strength of an electromagnet.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes insulated wire, iron nail or core, power supply, switch, ammeter and paper clips.",
        keywords: [["apparatus", "includes", "insulated"]],
      },
      {
        point: "Wrap different numbers of turns of wire around the same iron core.",
        keywords: [["wrap", "different", "numbers"]],
      },
      {
        point:
          "Keep the current constant using the same power supply setting and check with an ammeter.",
        keywords: [["keep", "current", "constant"]],
      },
      {
        point: "Measure electromagnet strength by counting the number of paper clips picked up.",
        keywords: [["measure", "electromagnet", "strength"]],
      },
      {
        point: "Repeat each number of turns and calculate a mean.",
        keywords: [["repeat", "each", "turns"]],
      },
      {
        point: "Safety: switch off between readings to prevent overheating of the coil.",
        keywords: [["safety", "switch", "readings"]],
      },
    ],
    examinerKeywords: [
      "electromagnet",
      "number of turns",
      "iron core",
      "current constant",
      "paper clips",
      "repeat",
      "mean",
    ],
    modelAnswer:
      "Wrap different numbers of turns of insulated wire around the same iron nail. Connect the coil to a power supply, switch and ammeter. Keep the current constant and measure strength by counting how many paper clips are lifted. Repeat each value and calculate a mean. Switch off between readings to prevent overheating.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing the current as well as the number of turns.",
      "Avoid: Using different cores for each test.",
      "Avoid: Leaving the circuit switched on so the coil overheats.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnet practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Describe",
    questionText:
      "A student moves a magnet into a coil connected to a sensitive voltmeter. Describe the effect of moving the magnet faster.",
    marks: 3,
    markSchemePoints: [
      {
        point:
          "Moving the magnet faster increases the rate of change of magnetic field through the coil.",
        keywords: [["moving", "magnet", "faster"]],
      },
      {
        point: "The induced potential difference becomes larger.",
        keywords: [["induced", "potential", "difference"]],
      },
      {
        point: "The voltmeter gives a larger deflection.",
        keywords: [["voltmeter", "gives", "larger"]],
      },
    ],
    examinerKeywords: [
      "magnet",
      "coil",
      "rate of change",
      "induced potential difference",
      "larger deflection",
    ],
    modelAnswer:
      "Moving the magnet faster changes the magnetic field through the coil more quickly. This induces a larger potential difference, so the voltmeter shows a larger deflection.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the deflection lasts longer but is smaller.",
      "Avoid: Saying there is no induced potential difference because the magnet is not touching the coil.",
      "Avoid: Not mentioning rate of change of magnetic field.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Induction practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-magnetism-electromagnetism-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "magnetism-electromagnetism",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how a loudspeaker uses the motor effect to produce sound.",
    marks: 5,
    markSchemePoints: [
      {
        point: "An alternating current passes through a coil in a magnetic field.",
        keywords: [["alternating", "current", "passes"]],
      },
      {
        point: "The current-carrying coil experiences a force due to the motor effect.",
        keywords: [["current-carrying", "coil", "experiences"]],
      },
      {
        point: "The direction of the force changes as the current changes direction.",
        keywords: [["direction", "force", "changes"]],
      },
      {
        point: "The coil vibrates backwards and forwards.",
        keywords: [["coil", "vibrates", "backwards"]],
      },
      {
        point: "The attached cone vibrates and produces sound waves in the air.",
        keywords: [["attached", "cone", "vibrates"]],
      },
    ],
    examinerKeywords: [
      "loudspeaker",
      "alternating current",
      "coil",
      "magnetic field",
      "motor effect",
      "vibrations",
      "sound waves",
    ],
    modelAnswer:
      "An alternating current flows through a coil placed in a magnetic field. The coil experiences a force due to the motor effect. As the current changes direction, the force reverses, making the coil vibrate. The speaker cone attached to the coil vibrates and produces sound waves.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying the loudspeaker uses electromagnetic induction to make the cone move.",
      "Avoid: Forgetting the current must alternate.",
      "Avoid: Not linking cone vibrations to sound waves.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Loudspeakers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the structure of an atom.",
    marks: 3,
    markSchemePoints: [
      {
        point: "An atom has a tiny central nucleus.",
        keywords: [["atom", "tiny", "central"]],
      },
      {
        point: "The nucleus contains protons and neutrons.",
        keywords: [["nucleus", "contains", "protons"]],
      },
      {
        point: "Electrons move around the nucleus in shells or energy levels.",
        keywords: [["electrons", "move", "around"]],
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
      "Avoid: Saying atoms are mostly solid matter.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Atomic structure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define isotopes.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Isotopes are atoms of the same element with the same number of protons.",
        keywords: [["isotopes", "atoms", "same"]],
      },
      {
        point: "They have different numbers of neutrons.",
        keywords: [["different", "numbers", "neutrons"]],
      },
    ],
    examinerKeywords: ["isotopes", "same element", "same protons", "different neutrons"],
    modelAnswer:
      "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying isotopes have different numbers of protons.",
      "Avoid: Saying isotopes are different elements.",
      "Avoid: Confusing mass number with atomic number.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Isotopes. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "An atom has proton number 17 and mass number 35. Determine the number of neutrons in the atom.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Formula: number of neutrons = mass number - proton number",
        keywords: [["neutrons", "mass", "proton"]],
      },
      {
        point: "Substitution: number of neutrons = 35 - 17",
        keywords: [["substitution", "neutrons"]],
      },
      {
        point: "Answer: 18 neutrons",
        keywords: [["neutrons"]],
      },
    ],
    examinerKeywords: ["mass number", "proton number", "neutrons", "nucleus"],
    modelAnswer: "Number of neutrons = 35 - 17 = 18 neutrons.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Adding proton number and mass number.",
      "Avoid: Saying the answer has units such as kg.",
      "Avoid: Confusing electrons with neutrons.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear notation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the nature, charge and penetrating power of alpha radiation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alpha radiation consists of helium nuclei or two protons and two neutrons.",
        keywords: [["alpha", "radiation", "consists"]],
      },
      {
        point: "Alpha radiation has a charge of +2.",
        keywords: [["alpha", "radiation", "charge"]],
      },
      {
        point: "Alpha radiation is weakly penetrating and is stopped by paper or skin.",
        keywords: [["alpha", "radiation", "weakly"]],
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
      "Avoid: Saying alpha is the most penetrating radiation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Alpha radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe what happens in the nucleus during beta-minus decay.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A neutron changes into a proton.",
        keywords: [["neutron", "changes", "proton"]],
      },
      {
        point: "An electron is emitted from the nucleus as beta-minus radiation.",
        keywords: [["electron", "emitted", "nucleus"]],
      },
      {
        point: "The proton number increases by 1 while the mass number stays the same.",
        keywords: [["proton", "increases", "while"]],
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
      "In beta-minus decay, a neutron in the nucleus changes into a proton and an electron is emitted. The proton number increases by 1, but the mass number stays the same.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying an orbital electron is emitted.",
      "Avoid: Saying mass number decreases by 4.",
      "Avoid: Saying proton number decreases.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Beta radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare gamma radiation with alpha radiation.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Gamma radiation is an electromagnetic wave, while alpha radiation is a helium nucleus.",
        keywords: [["gamma", "radiation", "electromagnetic"]],
      },
      {
        point: "Gamma radiation has no charge, while alpha radiation has a +2 charge.",
        keywords: [["gamma", "radiation", "charge"]],
      },
      {
        point: "Gamma radiation is much more penetrating than alpha radiation.",
        keywords: [["gamma", "radiation", "much"]],
      },
      {
        point: "Alpha radiation is more strongly ionising than gamma radiation.",
        keywords: [["alpha", "radiation", "more"]],
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
      "Gamma is electromagnetic radiation with no charge and high penetrating power. Alpha is a helium nucleus with a +2 charge, low penetrating power and stronger ionising ability.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying gamma is a particle with mass.",
      "Avoid: Saying alpha is more penetrating than gamma.",
      "Avoid: Forgetting to compare ionising ability.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Gamma radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain what is meant by ionising radiation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Ionising radiation has enough energy to remove electrons from atoms.",
        keywords: [["ionising", "radiation", "enough"]],
      },
      {
        point: "Removing electrons forms ions.",
        keywords: [["removing", "electrons", "forms"]],
      },
      {
        point: "Ionisation can damage living cells or DNA.",
        keywords: [["ionisation", "damage", "living"]],
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
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying ionising radiation adds protons to atoms.",
      "Avoid: Saying all electromagnetic waves are equally ionising.",
      "Avoid: Not mentioning electron removal.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Ionisation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two sources of background radiation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A natural source such as rocks, cosmic rays, food, radon gas or living things.",
        keywords: [["natural", "source", "such"]],
      },
      {
        point:
          "A man-made source such as medical radiation, nuclear power or nuclear weapons fallout.",
        keywords: [["man-made", "source", "such"]],
      },
    ],
    examinerKeywords: [
      "background radiation",
      "rocks",
      "cosmic rays",
      "radon",
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
      "Avoid: Not giving specific sources.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Background radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to use a Geiger-Muller tube and counter to measure the count rate from a radioactive source safely.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Measure the background count rate first without the source.",
        keywords: [["measure", "background", "count"]],
      },
      {
        point: "Place the radioactive source a fixed distance from the Geiger-Muller tube.",
        keywords: [["place", "radioactive", "source"]],
      },
      {
        point: "Record the count for a measured time and calculate count rate.",
        keywords: [["record", "count", "measured"]],
      },
      {
        point: "Subtract background count rate to find corrected count rate.",
        keywords: [["subtract", "background", "count"]],
      },
      {
        point:
          "Safety: use tongs, keep distance, minimise exposure time and point the source away from the body.",
        keywords: [["safety", "tongs", "keep"]],
      },
    ],
    examinerKeywords: [
      "Geiger-Muller tube",
      "counter",
      "background count",
      "count rate",
      "corrected count rate",
      "tongs",
      "minimise time",
    ],
    modelAnswer:
      "First measure the background count rate. Place the source a fixed distance from the GM tube and record the count for a known time. Calculate count rate and subtract the background count rate. Handle the source with tongs, keep it away from the body and minimise exposure time.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting to subtract background radiation.",
      "Avoid: Changing the distance during the test.",
      "Avoid: Handling the source directly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Detecting radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define half-life.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Half-life is the time taken for the activity or count rate of a radioactive source to halve.",
        keywords: [["half-life", "time", "taken"]],
      },
      {
        point: "It can also be the time taken for the number of undecayed nuclei to halve.",
        keywords: [["also", "time", "taken"]],
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
      "Avoid: Not mentioning halving.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Half-life. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive source has an initial count rate of 640 counts per minute. Its half-life is 5 minutes. Calculate the count rate after 15 minutes.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of half-lives = 15 / 5 = 3",
        keywords: [["half-lives"]],
      },
      {
        point: "After one half-life: 640 / 2 = 320 counts per minute",
        keywords: [["after", "half-life", "counts"]],
      },
      {
        point: "After three half-lives: 640 / 2 / 2 / 2",
        keywords: [["after", "three", "half-lives"]],
      },
      {
        point: "Answer: 80 counts per minute",
        keywords: [["counts", "minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "15 minutes", "counts per minute"],
    modelAnswer:
      "15 minutes is 3 half-lives. The count rate halves three times: 640 → 320 → 160 → 80 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing by 3 instead of halving three times.",
      "Avoid: Subtracting 5 each half-life.",
      "Avoid: Forgetting the unit counts per minute.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Half-life calculation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why radioactive decay is described as random.",
    marks: 2,
    markSchemePoints: [
      {
        point: "It is not possible to predict exactly when a particular nucleus will decay.",
        keywords: [["possible", "predict", "exactly"]],
      },
      {
        point:
          "Only the probability of decay or average behaviour of many nuclei can be predicted.",
        keywords: [["only", "probability", "decay"]],
      },
    ],
    examinerKeywords: ["random", "radioactive decay", "nucleus", "predict", "probability"],
    modelAnswer:
      "Radioactive decay is random because it is impossible to predict exactly when a particular nucleus will decay. We can only predict the average behaviour of a large number of nuclei.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying random means half-life changes every time.",
      "Avoid: Saying decay can be controlled by temperature.",
      "Avoid: Not referring to individual nuclei.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radioactive decay. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "A nucleus emits an alpha particle. Describe the changes to its proton number and mass number.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The mass number decreases by 4.",
        keywords: [["mass", "decreases"]],
      },
      {
        point: "The proton number decreases by 2.",
        keywords: [["proton", "decreases"]],
      },
    ],
    examinerKeywords: ["alpha decay", "mass number decreases by 4", "proton number decreases by 2"],
    modelAnswer:
      "After alpha decay, the mass number decreases by 4 and the proton number decreases by 2.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying the mass number stays the same.",
      "Avoid: Saying the proton number increases by 2.",
      "Avoid: Confusing alpha decay with beta decay.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear equations. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a gamma source is suitable for sterilising medical equipment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Gamma radiation is highly penetrating.",
        keywords: [["gamma", "radiation", "highly"]],
      },
      {
        point: "It can pass through packaging and equipment.",
        keywords: [["pass", "through", "packaging"]],
      },
      {
        point: "It kills microorganisms by ionising cells or damaging DNA.",
        keywords: [["kills", "microorganisms", "ionising"]],
      },
    ],
    examinerKeywords: [
      "gamma radiation",
      "sterilising",
      "penetrating",
      "microorganisms",
      "ionising",
      "DNA",
    ],
    modelAnswer:
      "Gamma radiation is very penetrating, so it can pass through packaging and reach microorganisms on the equipment. It ionises cells and damages DNA, killing the microorganisms.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying alpha is best because it is most ionising, without considering penetration.",
      "Avoid: Not explaining how microorganisms are killed.",
      "Avoid: Saying the equipment becomes permanently radioactive.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Uses of radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a radioactive tracer used inside the body should have a short half-life but not too short.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A short half-life reduces the time the patient is exposed to radiation.",
        keywords: [["short", "half-life", "reduces"]],
      },
      {
        point: "This reduces the dose and risk of cell damage.",
        keywords: [["reduces", "dose", "risk"]],
      },
      {
        point:
          "The half-life must not be too short because the tracer must remain active long enough to be detected.",
        keywords: [["half-life", "must", "short"]],
      },
      {
        point:
          "The tracer should emit radiation that can escape the body and be detected, such as gamma radiation.",
        keywords: [["tracer", "should", "emit"]],
      },
    ],
    examinerKeywords: [
      "tracer",
      "short half-life",
      "radiation dose",
      "detected",
      "gamma radiation",
      "cell damage",
    ],
    modelAnswer:
      "A tracer should have a short half-life so the patient is exposed to radiation for less time, reducing the dose. It must not be too short because it needs to stay active long enough to travel through the body and be detected. Gamma emission is useful because it can escape the body.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the half-life should be as long as possible.",
      "Avoid: Forgetting that it must still be detectable.",
      "Avoid: Choosing alpha radiation for a tracer inside the body.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Medical tracers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe nuclear fission in a reactor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A neutron is absorbed by a large unstable nucleus.",
        keywords: [["neutron", "absorbed", "large"]],
      },
      {
        point: "The nucleus splits into two smaller nuclei.",
        keywords: [["nucleus", "splits", "smaller"]],
      },
      {
        point: "Energy is released during the splitting.",
        keywords: [["energy", "released", "during"]],
      },
      {
        point: "More neutrons are released and can cause further fission reactions.",
        keywords: [["more", "neutrons", "released"]],
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
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying fission joins small nuclei together.",
      "Avoid: Forgetting that neutrons are released.",
      "Avoid: Saying electrons cause fission in a reactor.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear fission. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare nuclear fission and nuclear fusion.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Fission is the splitting of a large unstable nucleus.",
        keywords: [["fission", "splitting", "large"]],
      },
      {
        point: "Fusion is the joining of two small nuclei.",
        keywords: [["fusion", "joining", "small"]],
      },
      {
        point: "Both processes release energy.",
        keywords: [["both", "processes", "release"]],
      },
      {
        point: "Fusion occurs in stars and requires very high temperature and pressure.",
        keywords: [["fusion", "occurs", "stars"]],
      },
    ],
    examinerKeywords: ["fission", "fusion", "splitting", "joining", "energy released", "stars"],
    modelAnswer:
      "Fission is the splitting of a large unstable nucleus, while fusion is the joining of small nuclei. Both release energy. Fusion happens in stars and requires very high temperature and pressure.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Mixing up fission and fusion.",
      "Avoid: Saying only fission releases energy.",
      "Avoid: Not mentioning the conditions needed for fusion.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear fusion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain the purpose of control rods in a nuclear reactor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Control rods absorb neutrons.",
        keywords: [["control", "rods", "absorb"]],
      },
      {
        point: "This reduces the number of neutrons available to cause further fission.",
        keywords: [["reduces", "neutrons", "available"]],
      },
      {
        point: "Moving the rods controls the rate of the chain reaction.",
        keywords: [["moving", "rods", "controls"]],
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
      "Control rods absorb neutrons. This reduces the number of neutrons causing further fission, so moving the rods in or out controls the rate of the chain reaction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying control rods cool the reactor directly.",
      "Avoid: Saying they release neutrons.",
      "Avoid: Not linking neutron absorption to fission rate.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear reactor safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the risks and benefits of using ionising radiation in medicine.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A benefit is that radiation can diagnose disease using imaging or tracers.",
        keywords: [["benefit", "radiation", "diagnose"]],
      },
      {
        point: "A benefit is that radiation can treat cancer by killing cancer cells.",
        keywords: [["benefit", "radiation", "treat"]],
      },
      {
        point: "A risk is that ionising radiation can damage healthy cells or DNA.",
        keywords: [["risk", "ionising", "radiation"]],
      },
      {
        point: "Damaged DNA can increase the risk of cancer.",
        keywords: [["damaged", "increase", "risk"]],
      },
      {
        point: "The risk can be reduced by using the lowest effective dose and shielding.",
        keywords: [["risk", "reduced", "lowest"]],
      },
      {
        point:
          "A justified conclusion should compare the medical benefit with the controlled risk.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "ionising radiation",
      "medicine",
      "diagnosis",
      "cancer treatment",
      "DNA damage",
      "dose",
      "shielding",
      "benefit outweighs risk",
    ],
    modelAnswer:
      "Ionising radiation is useful in medicine because it can diagnose disease using imaging or tracers and can treat cancer by killing cancer cells. However, it can also damage healthy cells and DNA, increasing cancer risk. The risk is reduced by shielding and using the lowest effective dose. Overall, it is justified when the medical benefit is greater than the controlled risk.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only giving risks with no benefits.",
      "Avoid: Saying medical radiation is completely safe.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radiation risk. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-radioactivity-particles-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "radioactivity-particles",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Determine",
    questionText:
      "A half-life graph shows a corrected count rate decreasing from 400 counts per minute to 50 counts per minute. Determine how many half-lives have passed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "400 to 200 is one half-life.",
        keywords: [["half-life"]],
      },
      {
        point: "200 to 100 is two half-lives.",
        keywords: [["half-lives"]],
      },
      {
        point: "100 to 50 is three half-lives.",
        keywords: [["three", "half-lives"]],
      },
      {
        point: "Answer: 3 half-lives",
        keywords: [["half-lives"]],
      },
    ],
    examinerKeywords: ["half-life graph", "count rate", "halve", "400", "50"],
    modelAnswer:
      "The count rate halves from 400 to 200, then to 100, then to 50. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing 400 by 50 and saying 8 half-lives.",
      "Avoid: Counting only the final halving.",
      "Avoid: Not using corrected count rate.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Half-life graph. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State the force that keeps planets in orbit around the Sun.",
    marks: 1,
    markSchemePoints: [
      {
        point: "Gravity provides the force that keeps planets in orbit.",
        keywords: [["gravity", "provides", "force"]],
      },
    ],
    examinerKeywords: ["gravity", "gravitational force", "orbit"],
    modelAnswer: "The planets are kept in orbit by gravitational force.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying magnetism keeps planets in orbit.",
      "Avoid: Saying there is no force in orbit.",
      "Avoid: Saying air resistance keeps planets moving.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Solar System. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a planet orbiting the Sun at constant speed is accelerating.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Velocity is a vector quantity with direction.",
        keywords: [["velocity", "vector", "quantity"]],
      },
      {
        point: "The direction of the planet's velocity is constantly changing in orbit.",
        keywords: [["direction", "planet", "velocity"]],
      },
      {
        point: "A change in velocity means the planet is accelerating.",
        keywords: [["change", "velocity", "means"]],
      },
    ],
    examinerKeywords: ["orbit", "velocity", "direction changes", "vector", "acceleration"],
    modelAnswer:
      "The planet's speed may be constant, but its direction is constantly changing. Since velocity includes direction, the velocity changes, so the planet is accelerating.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying acceleration only happens when speed changes.",
      "Avoid: Confusing speed with velocity.",
      "Avoid: Saying gravity disappears in orbit.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Orbital motion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A moon travels 240000 km in one orbit around a planet. The orbit takes 20 days. Calculate the average orbital speed in km/day.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 240000 / 20",
        keywords: [["substitution", "speed", "240000"]],
      },
      {
        point: "Answer: 12000 km/day",
        keywords: [["12000"]],
      },
    ],
    examinerKeywords: ["orbital speed", "distance", "time", "km/day"],
    modelAnswer: "speed = distance / time = 240000 / 20 = 12000 km/day.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying distance by time.",
      "Avoid: Forgetting the unit km/day.",
      "Avoid: Trying to convert to m/s when not required.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Orbital speed. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe how the speed of a comet changes during its orbit around the Sun.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A comet travels faster when it is closer to the Sun.",
        keywords: [["comet", "travels", "faster"]],
      },
      {
        point: "A comet travels slower when it is further from the Sun.",
        keywords: [["comet", "travels", "slower"]],
      },
      {
        point: "The Sun's gravitational force is stronger when the comet is closer.",
        keywords: [["gravitational", "force", "stronger"]],
      },
    ],
    examinerKeywords: ["comet", "orbit", "faster near Sun", "slower further away", "gravity"],
    modelAnswer:
      "A comet moves faster when it is close to the Sun and slower when it is far away. This is because the Sun's gravitational force is stronger at shorter distances.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying a comet moves at constant speed throughout its orbit.",
      "Avoid: Saying it stops at the furthest point.",
      "Avoid: Not linking speed change to gravity.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Comets. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why nuclear fusion in stars releases energy.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Small nuclei join together to form larger nuclei.",
        keywords: [["small", "nuclei", "join"]],
      },
      {
        point: "This process is nuclear fusion.",
        keywords: [["process", "nuclear", "fusion"]],
      },
      {
        point:
          "Energy is released during fusion, mainly from hydrogen nuclei forming helium in main sequence stars.",
        keywords: [["energy", "released", "during"]],
      },
    ],
    examinerKeywords: [
      "nuclear fusion",
      "small nuclei",
      "larger nuclei",
      "hydrogen",
      "helium",
      "energy released",
    ],
    modelAnswer:
      "In stars, small nuclei such as hydrogen nuclei join together to form larger nuclei such as helium. This nuclear fusion process releases energy.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying stars release energy by burning oxygen like a fire.",
      "Avoid: Confusing fusion with fission.",
      "Avoid: Not mentioning nuclei.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Stars. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText:
      "Describe the life cycle of a star with a similar mass to the Sun after the main sequence stage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The star expands and cools to become a red giant.",
        keywords: [["star", "expands", "cools"]],
      },
      {
        point: "The outer layers are ejected to form a planetary nebula.",
        keywords: [["outer", "layers", "ejected"]],
      },
      {
        point: "The remaining hot core becomes a white dwarf.",
        keywords: [["remaining", "core", "becomes"]],
      },
      {
        point: "The white dwarf cools over a long time.",
        keywords: [["white", "dwarf", "cools"]],
      },
    ],
    examinerKeywords: ["Sun-like star", "red giant", "planetary nebula", "white dwarf", "cools"],
    modelAnswer:
      "After the main sequence, a Sun-like star becomes a red giant. It ejects its outer layers to form a planetary nebula, leaving a hot core called a white dwarf, which gradually cools.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying a Sun-like star becomes a black hole.",
      "Avoid: Forgetting the white dwarf stage.",
      "Avoid: Confusing planetary nebula with planet formation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Stellar evolution. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the possible final stages of a very massive star.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A very massive star expands to become a red supergiant.",
        keywords: [["very", "massive", "star"]],
      },
      {
        point: "It explodes as a supernova.",
        keywords: [["explodes", "supernova"]],
      },
      {
        point: "The core may become a neutron star.",
        keywords: [["core", "become", "neutron"]],
      },
      {
        point: "If the remaining core is massive enough, it becomes a black hole.",
        keywords: [["remaining", "core", "massive"]],
      },
    ],
    examinerKeywords: ["massive star", "red supergiant", "supernova", "neutron star", "black hole"],
    modelAnswer:
      "A very massive star becomes a red supergiant and then explodes as a supernova. The remaining core may form a neutron star or, if massive enough, a black hole.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying every massive star becomes a white dwarf.",
      "Avoid: Forgetting the supernova stage.",
      "Avoid: Saying black holes form from low-mass stars.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Massive stars. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by redshift in light from distant galaxies.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Redshift is an increase in the wavelength of light from a galaxy.",
        keywords: [["redshift", "increase", "wavelength"]],
      },
      {
        point: "The light is shifted towards the red end of the spectrum.",
        keywords: [["light", "shifted", "towards"]],
      },
    ],
    examinerKeywords: ["redshift", "wavelength increases", "red end", "spectrum", "distant galaxy"],
    modelAnswer:
      "Redshift means the wavelength of light from a distant galaxy is increased and shifted towards the red end of the spectrum.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying redshift means the galaxy turns red.",
      "Avoid: Saying wavelength decreases.",
      "Avoid: Confusing redshift with blueshift.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Redshift. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how redshift provides evidence that the Universe is expanding.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Light from most distant galaxies is redshifted.",
        keywords: [["light", "most", "distant"]],
      },
      {
        point: "Redshift shows that the galaxies are moving away from Earth.",
        keywords: [["redshift", "shows", "galaxies"]],
      },
      {
        point: "More distant galaxies generally have greater redshifts.",
        keywords: [["more", "distant", "galaxies"]],
      },
      {
        point: "This suggests space is expanding and galaxies are moving away from each other.",
        keywords: [["suggests", "space", "expanding"]],
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
      "Light from most distant galaxies is redshifted, showing they are moving away from us. More distant galaxies usually have greater redshifts, meaning they are moving away faster. This supports the idea that the Universe is expanding.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying redshift shows galaxies are moving towards us.",
      "Avoid: Not mentioning distant galaxies.",
      "Avoid: Saying only Earth is at the centre of expansion.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Expanding universe. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe cosmic microwave background radiation and state what it is evidence for.",
    marks: 3,
    markSchemePoints: [
      {
        point:
          "Cosmic microwave background radiation is microwave radiation detected from all directions in space.",
        keywords: [["cosmic", "microwave", "background"]],
      },
      {
        point: "It is the cooled remnant radiation from the early Universe.",
        keywords: [["cooled", "remnant", "radiation"]],
      },
      {
        point: "It provides evidence for the Big Bang model.",
        keywords: [["provides", "evidence", "bang"]],
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
      "Cosmic microwave background radiation is microwave radiation arriving from all directions in space. It is leftover radiation from the early Universe and is evidence for the Big Bang model.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying it comes only from stars today.",
      "Avoid: Saying it is sound from the Big Bang.",
      "Avoid: Not linking it to the Big Bang.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Cosmic microwave background radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A galaxy is 80 million light-years away and is moving away at 1600 km/s. Calculate the value of speed divided by distance in km/s per million light-year.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: value = speed / distance",
        keywords: [["value", "speed", "distance"]],
      },
      {
        point: "Substitution: value = 1600 / 80",
        keywords: [["substitution", "value", "1600"]],
      },
      {
        point: "Answer: 20 km/s per million light-year",
        keywords: [["million", "light-year"]],
      },
    ],
    examinerKeywords: [
      "speed",
      "distance",
      "galaxy",
      "Hubble relationship",
      "km/s per million light-year",
    ],
    modelAnswer: "speed / distance = 1600 / 80 = 20 km/s per million light-year.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing distance by speed.",
      "Avoid: Forgetting the compound unit.",
      "Avoid: Using light-years as a time unit only.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Hubble relationship. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define one light-year.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A light-year is a distance, not a time.",
        keywords: [["light-year", "distance", "time"]],
      },
      {
        point: "It is the distance light travels in one year.",
        keywords: [["distance", "light", "travels"]],
      },
    ],
    examinerKeywords: ["light-year", "distance", "light travels", "one year"],
    modelAnswer: "One light-year is the distance that light travels in one year.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a light-year is a unit of time.",
      "Avoid: Saying it is the time taken for light to reach Earth from the Sun.",
      "Avoid: Not mentioning light.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Light-year. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why two stars with the same luminosity can have different apparent brightnesses when viewed from Earth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Apparent brightness depends on distance from Earth.",
        keywords: [["apparent", "brightness", "depends"]],
      },
      {
        point: "A star further away appears dimmer because its light is spread over a larger area.",
        keywords: [["star", "further", "away"]],
      },
      {
        point: "A closer star with the same luminosity appears brighter.",
        keywords: [["closer", "star", "same"]],
      },
    ],
    examinerKeywords: [
      "luminosity",
      "apparent brightness",
      "distance",
      "light spread out",
      "dimmer",
    ],
    modelAnswer:
      "Stars with the same luminosity can appear different in brightness because they are at different distances from Earth. The further star appears dimmer because its light is spread out over a larger area.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying apparent brightness depends only on colour.",
      "Avoid: Saying stars with the same luminosity must look equally bright.",
      "Avoid: Not mentioning distance.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Apparent brightness. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare the surface temperature of a blue star with a red star.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A blue star has a higher surface temperature than a red star.",
        keywords: [["blue", "star", "higher"]],
      },
      {
        point: "A red star has a lower surface temperature than a blue star.",
        keywords: [["star", "lower", "surface"]],
      },
    ],
    examinerKeywords: ["blue star", "red star", "surface temperature", "hotter", "cooler"],
    modelAnswer:
      "A blue star is hotter at the surface than a red star. A red star has a lower surface temperature.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying red stars are hotter because red is a warm colour.",
      "Avoid: Saying star colour does not relate to temperature.",
      "Avoid: Not making a comparison.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Temperature and colour. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "graph",
    questionType: "Describe",
    questionText: "Describe the main sequence on a Hertzsprung-Russell diagram.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The main sequence is a band of stars on the Hertzsprung-Russell diagram.",
        keywords: [["main", "sequence", "band"]],
      },
      {
        point: "It runs from hot, luminous stars to cool, dimmer stars.",
        keywords: [["runs", "luminous", "stars"]],
      },
      {
        point: "Main sequence stars are fusing hydrogen into helium in their cores.",
        keywords: [["main", "sequence", "stars"]],
      },
    ],
    examinerKeywords: [
      "Hertzsprung-Russell diagram",
      "main sequence",
      "hot luminous",
      "cool dim",
      "hydrogen fusion",
    ],
    modelAnswer:
      "The main sequence is the band of stars on the H-R diagram from hot, luminous stars to cool, dimmer stars. Main sequence stars produce energy by fusing hydrogen into helium in their cores.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying all stars stay on the main sequence forever.",
      "Avoid: Not linking main sequence stars to hydrogen fusion.",
      "Avoid: Confusing white dwarfs with the main sequence.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Hertzsprung-Russell diagram. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "data-response",
    questionType: "Suggest",
    questionText:
      "A star has much greater mass than the Sun. Suggest why it will have a shorter main sequence lifetime than the Sun.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A more massive star has more fuel than the Sun.",
        keywords: [["more", "massive", "star"]],
      },
      {
        point: "It has a much higher core temperature and fusion rate.",
        keywords: [["much", "higher", "core"]],
      },
      {
        point: "It uses up its hydrogen fuel faster, so its main sequence lifetime is shorter.",
        keywords: [["uses", "hydrogen", "fuel"]],
      },
    ],
    examinerKeywords: [
      "massive star",
      "core temperature",
      "fusion rate",
      "hydrogen fuel",
      "shorter lifetime",
    ],
    modelAnswer:
      "Although a massive star has more hydrogen fuel, its core is much hotter and fusion happens much faster. It uses up its hydrogen more quickly, so it has a shorter main sequence lifetime.",
    difficulty: "hard",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying more massive stars always live longer because they have more fuel.",
      "Avoid: Not mentioning faster fusion.",
      "Avoid: Confusing mass with apparent brightness.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Life cycle data. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a satellite in a lower orbit has a shorter orbital period.",
    marks: 3,
    markSchemePoints: [
      {
        point: "A lower orbit has a smaller orbital radius or shorter path length.",
        keywords: [["lower", "orbit", "smaller"]],
      },
      {
        point: "Gravity is stronger closer to the planet.",
        keywords: [["gravity", "stronger", "closer"]],
      },
      {
        point: "The satellite moves faster, so it completes an orbit in less time.",
        keywords: [["satellite", "moves", "faster"]],
      },
    ],
    examinerKeywords: [
      "satellite",
      "lower orbit",
      "orbital radius",
      "stronger gravity",
      "faster",
      "shorter period",
    ],
    modelAnswer:
      "In a lower orbit, the satellite is closer to the planet, so gravity is stronger and the orbital path is shorter. The satellite moves faster and completes an orbit in a shorter time.",
    difficulty: "hard",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying lower satellites move slower.",
      "Avoid: Not mentioning gravity.",
      "Avoid: Saying period only depends on satellite mass.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Satellites. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain how the Doppler effect causes a redshift in light from a galaxy moving away from Earth.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The galaxy is moving away from Earth.",
        keywords: [["galaxy", "moving", "away"]],
      },
      {
        point: "The observed wavelength of light is increased.",
        keywords: [["observed", "wavelength", "light"]],
      },
      {
        point: "The spectral lines are shifted towards the red end of the spectrum.",
        keywords: [["spectral", "lines", "shifted"]],
      },
    ],
    examinerKeywords: [
      "Doppler effect",
      "moving away",
      "wavelength increases",
      "spectral lines",
      "redshift",
    ],
    modelAnswer:
      "When a galaxy moves away from Earth, the light waves are stretched. Their wavelength increases, so the spectral lines shift towards the red end of the spectrum.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the frequency increases for a galaxy moving away.",
      "Avoid: Saying redshift means the light travels slower.",
      "Avoid: Not mentioning increased wavelength.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Doppler effect. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the evidence supporting the Big Bang model.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Redshift of light from distant galaxies shows most galaxies are moving away.",
        keywords: [["redshift", "light", "distant"]],
      },
      {
        point: "More distant galaxies generally have greater redshift, supporting expansion.",
        keywords: [["more", "distant", "galaxies"]],
      },
      {
        point: "Cosmic microwave background radiation is observed from all directions.",
        keywords: [["cosmic", "microwave", "background"]],
      },
      {
        point: "CMB radiation is interpreted as cooled radiation from the early Universe.",
        keywords: [["radiation", "interpreted", "cooled"]],
      },
      {
        point:
          "Together these observations support the idea that the Universe began from a hot, dense state.",
        keywords: [["together", "these", "observations"]],
      },
      {
        point:
          "A justified conclusion should state that the evidence strongly supports the Big Bang model.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "Big Bang",
      "redshift",
      "distant galaxies",
      "expansion",
      "cosmic microwave background radiation",
      "hot dense state",
    ],
    modelAnswer:
      "The Big Bang model is supported by redshift from distant galaxies, which shows most galaxies are moving away and that the Universe is expanding. More distant galaxies have greater redshifts. It is also supported by cosmic microwave background radiation, which is detected from all directions and is interpreted as cooled radiation from the early Universe. Together, these provide strong evidence that the Universe began in a hot, dense state.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only mentioning one piece of evidence.",
      "Avoid: Saying CMB radiation is visible light from stars.",
      "Avoid: Not giving a conclusion.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Big Bang model. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-astrophysics-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "astrophysics",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Light travels at 3.0 × 10⁸ m/s. Calculate the distance travelled by light in 60 s.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: distance = speed × time",
        keywords: [["distance", "speed", "time"]],
      },
      {
        point: "Substitution: distance = 3.0 × 10⁸ × 60",
        keywords: [["substitution", "distance"]],
      },
      {
        point: "Answer: 1.8 × 10¹⁰ m",
        keywords: [["light", "speed"]],
      },
    ],
    examinerKeywords: ["light", "speed", "distance", "time", "standard form", "m"],
    modelAnswer: "distance = speed × time = 3.0 × 10⁸ × 60 = 1.8 × 10¹⁰ m.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing speed by time.",
      "Avoid: Writing the answer as 1.8 × 10⁹ m.",
      "Avoid: Forgetting the unit m.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Astronomical measurements. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Define",
    questionText: "Define independent variable and dependent variable.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The independent variable is the variable deliberately changed by the investigator.",
        keywords: [["independent", "variable", "deliberately"]],
      },
      {
        point: "The dependent variable is the variable measured or recorded in response.",
        keywords: [["dependent", "variable", "measured"]],
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
      "The independent variable is the variable changed by the investigator. The dependent variable is the variable measured in response to that change.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Swapping independent and dependent variables.",
      "Avoid: Saying both variables are kept constant.",
      "Avoid: Only giving examples without definitions.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Variables. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why control variables are important in an experiment.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Control variables are kept constant.",
        keywords: [["control", "variables", "kept"]],
      },
      {
        point: "This makes the test fair.",
        keywords: [["makes", "test", "fair"]],
      },
      {
        point:
          "It helps ensure changes in the dependent variable are caused by the independent variable only.",
        keywords: [["helps", "ensure", "changes"]],
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
      "Control variables are kept constant to make the experiment fair. This means any change in the dependent variable is more likely to be caused by the independent variable.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying control variables are the variables being measured.",
      "Avoid: Not linking control variables to a fair test.",
      "Avoid: Saying control variables should change each time.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Control variables. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare accuracy and precision in measurements.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Accuracy is how close a measured value is to the true value.",
        keywords: [["accuracy", "close", "measured"]],
      },
      {
        point: "Precision is how close repeated measurements are to each other.",
        keywords: [["precision", "close", "repeated"]],
      },
      {
        point:
          "A set of measurements can be precise without being accurate if there is a systematic error.",
        keywords: [["measurements", "precise", "without"]],
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
      "Accuracy is how close a measurement is to the true value. Precision is how close repeated measurements are to each other. Results can be precise but not accurate if there is a systematic error.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using accuracy and precision as identical words.",
      "Avoid: Saying precise results must always be accurate.",
      "Avoid: Not referring to repeated measurements.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Accuracy and precision. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why repeat readings are taken in physics experiments.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Repeat readings help identify anomalous results.",
        keywords: [["repeat", "readings", "help"]],
      },
      {
        point: "They allow a mean to be calculated.",
        keywords: [["allow", "mean", "calculated"]],
      },
      {
        point: "This improves the reliability of the results.",
        keywords: [["improves", "reliability", "results"]],
      },
    ],
    examinerKeywords: ["repeat readings", "anomalous results", "mean", "reliability"],
    modelAnswer:
      "Repeat readings help spot anomalies and allow a mean to be calculated. This improves reliability.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying repeats always remove all errors.",
      "Avoid: Not mentioning mean or anomalies.",
      "Avoid: Confusing reliability with validity.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Repeat readings. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText:
      "A ruler has a resolution of 1 mm. State the approximate uncertainty when measuring a length using this ruler.",
    marks: 2,
    markSchemePoints: [
      {
        point: "The uncertainty is usually taken as half the smallest division.",
        keywords: [["uncertainty", "usually", "taken"]],
      },
      {
        point: "Approximate uncertainty = ±0.5 mm.",
        keywords: [["approximate", "uncertainty"]],
      },
    ],
    examinerKeywords: ["resolution", "smallest division", "uncertainty", "±0.5 mm"],
    modelAnswer:
      "The approximate uncertainty is ±0.5 mm because this is half the smallest division.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Giving ±5 mm.",
      "Avoid: Forgetting the ± sign.",
      "Avoid: Saying uncertainty is always zero for a ruler.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Uncertainty. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student measures a length as 25.0 cm with an uncertainty of ±0.1 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage", "uncertainty", "measured"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.1 / 25.0 × 100",
        keywords: [["substitution", "percentage", "uncertainty"]],
      },
      {
        point: "Answer: 0.4%",
        keywords: [["percentage uncertainty", "uncertainty"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.1 / 25.0 × 100 = 0.4%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using measured value divided by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving out the percentage sign.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Percentage uncertainty. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Describe",
    questionText: "Describe how to plot a graph correctly from experimental data.",
    marks: 5,
    markSchemePoints: [
      {
        point:
          "Put the independent variable on the x-axis and the dependent variable on the y-axis.",
        keywords: [["independent", "variable", "x-axis"]],
      },
      {
        point: "Label both axes with quantities and units.",
        keywords: [["label", "both", "axes"]],
      },
      {
        point: "Choose a suitable linear scale that uses most of the graph paper.",
        keywords: [["choose", "suitable", "linear"]],
      },
      {
        point: "Plot points accurately using small crosses or dots.",
        keywords: [["plot", "points", "accurately"]],
      },
      {
        point: "Draw a line of best fit or smooth curve as appropriate, ignoring clear anomalies.",
        keywords: [["draw", "line", "best"]],
      },
    ],
    examinerKeywords: ["x-axis", "y-axis", "units", "scale", "plot points", "line of best fit"],
    modelAnswer:
      "The independent variable goes on the x-axis and the dependent variable on the y-axis. Both axes should be labelled with units. Use a suitable scale, plot points accurately and draw a line of best fit or smooth curve, ignoring clear anomalies.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Forgetting units on axes.",
      "Avoid: Joining point-to-point when a line of best fit is needed.",
      "Avoid: Using a scale that does not use most of the graph paper.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Graph plotting. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Describe",
    questionText: "Describe how to determine the gradient of a straight-line graph.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Choose two points far apart on the line of best fit.",
        keywords: [["choose", "points", "apart"]],
      },
      {
        point: "Calculate change in y divided by change in x.",
        keywords: [["calculate", "change", "divided"]],
      },
      {
        point: "Use units from the y-axis divided by units from the x-axis if required.",
        keywords: [["units", "y-axis", "divided"]],
      },
    ],
    examinerKeywords: ["gradient", "line of best fit", "change in y", "change in x", "units"],
    modelAnswer:
      "Choose two points far apart on the line of best fit. Find the change in y and the change in x between them, then calculate gradient = change in y / change in x.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using two raw data points not on the line of best fit.",
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Choosing points too close together.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Gradient. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Explain",
    questionText:
      "A student repeats a measurement three times and gets 2.1 s, 2.2 s and 4.8 s. Explain how the student should treat these results.",
    marks: 3,
    markSchemePoints: [
      {
        point: "4.8 s is likely to be an anomalous result.",
        keywords: [["likely", "anomalous", "result"]],
      },
      {
        point: "The student should repeat the measurement to check it.",
        keywords: [["student", "should", "repeat"]],
      },
      {
        point:
          "The anomaly should not be included when calculating the mean if it is clearly anomalous.",
        keywords: [["anomaly", "should", "included"]],
      },
    ],
    examinerKeywords: ["anomalous result", "repeat", "mean", "ignore anomaly", "reliability"],
    modelAnswer:
      "The 4.8 s result is likely to be anomalous because it is very different from 2.1 s and 2.2 s. The student should repeat the reading and should not include 4.8 s in the mean if it is confirmed as an anomaly.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Averaging all three readings without comment.",
      "Avoid: Deleting the result without repeating or justifying.",
      "Avoid: Calling 2.1 s the anomaly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Anomalies. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest two safety precautions when using an electrical heater to warm water in a beaker.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Do not touch the heater or hot water directly; allow apparatus to cool before handling.",
        keywords: [["touch", "heater", "water"]],
      },
      {
        point:
          "Keep electrical connections dry and switch off the power before adjusting the circuit.",
        keywords: [["keep", "electrical", "connections"]],
      },
    ],
    examinerKeywords: [
      "electrical heater",
      "hot water",
      "cool down",
      "dry connections",
      "switch off",
    ],
    modelAnswer:
      "Keep the electrical connections dry and switch off the power before changing the apparatus. Do not touch the hot heater or water directly; allow them to cool before handling.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Only saying be careful.",
      "Avoid: Ignoring electrical safety.",
      "Avoid: Suggesting touching the heater to check if it is working.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to connect an ammeter and a voltmeter when investigating a resistor.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The ammeter is connected in series with the resistor.",
        keywords: [["ammeter", "connected", "series"]],
      },
      {
        point: "The voltmeter is connected in parallel across the resistor.",
        keywords: [["voltmeter", "connected", "parallel"]],
      },
      {
        point: "The circuit should include a power supply and switch.",
        keywords: [["circuit", "should", "include"]],
      },
      {
        point: "Readings of current and potential difference can be recorded for the resistor.",
        keywords: [["readings", "current", "potential"]],
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
      "Connect the ammeter in series with the resistor so it measures the current through it. Connect the voltmeter in parallel across the resistor to measure the potential difference across it. Use a power supply and switch to complete the circuit.",
    difficulty: "easy",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Connecting the ammeter in parallel.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Measuring voltage across the power supply when the resistor voltage is needed.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Measuring current and voltage. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate how the angle of a ramp affects the acceleration of a trolley.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes ramp, trolley, light gates, data logger, protractor and blocks to change height.",
        keywords: [["apparatus", "includes", "ramp"]],
      },
      {
        point: "Independent variable is ramp angle.",
        keywords: [["independent", "variable", "ramp"]],
      },
      {
        point: "Dependent variable is acceleration of the trolley.",
        keywords: [["dependent", "variable", "acceleration"]],
      },
      {
        point:
          "Control variables include trolley mass, release point and distance between light gates.",
        keywords: [["control", "variables", "include"]],
      },
      {
        point:
          "Release the trolley without pushing and record acceleration or speeds and times using light gates.",
        keywords: [["release", "trolley", "without"]],
      },
      {
        point:
          "Repeat for each angle, calculate means and use a shallow ramp or catch block for safety.",
        keywords: [["repeat", "each", "angle"]],
      },
    ],
    examinerKeywords: [
      "ramp angle",
      "trolley",
      "light gates",
      "acceleration",
      "control variables",
      "repeat",
      "mean",
    ],
    modelAnswer:
      "Set up a trolley on a ramp with two light gates connected to a data logger. Change the ramp angle using blocks and measure the angle with a protractor. Release the trolley from the same point without pushing. Measure acceleration, or speeds and time, for each angle. Keep trolley mass and light gate spacing constant, repeat and calculate means. Use a catch block for safety.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Pushing the trolley each time.",
      "Avoid: Changing the release point as well as the angle.",
      "Avoid: Not repeating readings.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Motion experiment. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to measure the density of a liquid.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Apparatus includes a balance and measuring cylinder.",
        keywords: [["apparatus", "includes", "balance"]],
      },
      {
        point: "Measure the mass of the empty measuring cylinder.",
        keywords: [["measure", "mass", "empty"]],
      },
      {
        point: "Pour a measured volume of liquid into the cylinder and record the volume.",
        keywords: [["pour", "measured", "volume"]],
      },
      {
        point:
          "Measure the mass of the cylinder plus liquid and calculate the mass of the liquid by subtraction.",
        keywords: [["measure", "mass", "cylinder"]],
      },
      {
        point: "Calculate density using density = mass / volume and repeat if required.",
        keywords: [["calculate", "density", "mass"]],
      },
    ],
    examinerKeywords: [
      "density",
      "liquid",
      "balance",
      "measuring cylinder",
      "mass",
      "volume",
      "mass / volume",
    ],
    modelAnswer:
      "Measure the mass of an empty measuring cylinder. Add a known volume of liquid and record the volume. Measure the mass of the cylinder plus liquid, then subtract the empty cylinder mass to find the liquid mass. Calculate density using mass divided by volume.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using the total mass of cylinder plus liquid as the liquid mass.",
      "Avoid: Not reading the bottom of the meniscus.",
      "Avoid: Forgetting the unit for density.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Identify",
    questionText:
      "Identify the independent variable, dependent variable and one control variable in an experiment measuring how temperature rise depends on energy supplied to a metal block.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Independent variable: energy supplied to the block.",
        keywords: [["independent", "variable", "energy"]],
      },
      {
        point: "Dependent variable: temperature rise of the block.",
        keywords: [["dependent", "variable", "temperature"]],
      },
      {
        point:
          "A valid control variable is mass of block, material of block, insulation or starting temperature.",
        keywords: [["valid", "control", "variable"]],
      },
    ],
    examinerKeywords: [
      "independent variable",
      "energy supplied",
      "dependent variable",
      "temperature rise",
      "control variable",
    ],
    modelAnswer:
      "The independent variable is energy supplied. The dependent variable is the temperature rise of the block. One control variable is the mass of the metal block.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying temperature is the independent variable.",
      "Avoid: Giving time as the dependent variable when temperature rise is measured.",
      "Avoid: Giving no control variable.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why measuring the distance across ten waves gives a more reliable wavelength than measuring one wave.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Measuring a longer distance reduces the percentage uncertainty.",
        keywords: [["measuring", "longer", "distance"]],
      },
      {
        point: "Random reading error has a smaller effect on the final wavelength.",
        keywords: [["random", "reading", "error"]],
      },
      {
        point: "The wavelength is found by dividing the total distance by the number of waves.",
        keywords: [["wavelength", "found", "dividing"]],
      },
    ],
    examinerKeywords: [
      "wavelength",
      "ten waves",
      "percentage uncertainty",
      "random error",
      "divide",
    ],
    modelAnswer:
      "Measuring across ten waves gives a larger distance, so the percentage uncertainty is smaller. The wavelength is then found by dividing the total distance by ten, making the result more reliable.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying ten waves have a different wavelength.",
      "Avoid: Not mentioning uncertainty.",
      "Avoid: Dividing by the wrong number of waves.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Wave practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the absorption of radiation by different thicknesses of aluminium.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes radioactive source, Geiger-Muller tube, counter, aluminium sheets, ruler and tongs.",
        keywords: [["apparatus", "includes", "radioactive"]],
      },
      {
        point: "Measure the background count rate first.",
        keywords: [["measure", "background", "count"]],
      },
      {
        point: "Place the source at a fixed distance from the detector.",
        keywords: [["place", "source", "fixed"]],
      },
      {
        point: "Place increasing thicknesses of aluminium between the source and detector.",
        keywords: [["place", "increasing", "thicknesses"]],
      },
      {
        point: "Record count rate for a fixed time and subtract background count rate.",
        keywords: [["record", "count", "rate"]],
      },
      {
        point:
          "Repeat readings, calculate means and follow safety precautions such as using tongs, distance and minimising exposure time.",
        keywords: [["repeat", "readings", "calculate"]],
      },
    ],
    examinerKeywords: [
      "absorption",
      "aluminium",
      "Geiger-Muller tube",
      "background count",
      "fixed distance",
      "corrected count rate",
      "safety",
    ],
    modelAnswer:
      "Measure background count rate first. Place the radioactive source a fixed distance from a GM tube. Put different thicknesses of aluminium between the source and detector, recording counts for the same time each time. Subtract background count rate, repeat readings and calculate means. Use tongs, keep distance and minimise exposure time.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing the source-detector distance.",
      "Avoid: Forgetting to subtract background radiation.",
      "Avoid: Handling the radioactive source directly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radiation practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "A stopwatch reads to the nearest 0.01 s. State its resolution.",
    marks: 1,
    markSchemePoints: [
      {
        point: "The resolution is 0.01 s.",
        keywords: [["resolution"]],
      },
    ],
    examinerKeywords: ["resolution", "0.01 s", "smallest change"],
    modelAnswer: "The resolution of the stopwatch is 0.01 s.",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Saying the resolution is 1 s.",
      "Avoid: Giving no unit.",
      "Avoid: Confusing resolution with reaction time.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Resolution. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A student measures currents of 0.22 A, 0.24 A and 0.23 A. Calculate the mean current.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: mean = sum of readings / number of readings",
        keywords: [["mean", "readings"]],
      },
      {
        point: "Substitution: mean = (0.22 + 0.24 + 0.23) / 3",
        keywords: [["substitution", "mean"]],
      },
      {
        point: "Answer: 0.23 A",
        keywords: [["mean", "current"]],
      },
    ],
    examinerKeywords: ["mean", "current", "sum", "readings", "A"],
    modelAnswer: "mean = (0.22 + 0.24 + 0.23) / 3 = 0.69 / 3 = 0.23 A.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing by 2 instead of 3.",
      "Avoid: Rounding before adding.",
      "Avoid: Forgetting the unit A.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Data analysis. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how the length of a pendulum affects its period.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Apparatus includes string, bob, clamp stand, ruler and stopwatch.",
        keywords: [["apparatus", "includes", "string"]],
      },
      {
        point: "Independent variable is length of pendulum; dependent variable is period.",
        keywords: [["independent", "variable", "length"]],
      },
      {
        point: "Control variables include mass of bob and angle of release.",
        keywords: [["control", "variables", "include"]],
      },
      {
        point: "Measure the length from pivot to centre of bob.",
        keywords: [["measure", "length", "pivot"]],
      },
      {
        point:
          "Time several oscillations and divide by the number of oscillations to find one period.",
        keywords: [["time", "several", "oscillations"]],
      },
      {
        point: "Repeat for each length, calculate means and use small angles to reduce error.",
        keywords: [["repeat", "each", "length"]],
      },
    ],
    examinerKeywords: [
      "pendulum",
      "length",
      "period",
      "oscillations",
      "stopwatch",
      "control variables",
      "mean",
    ],
    modelAnswer:
      "Attach a bob to string on a clamp stand. Measure the length from the pivot to the centre of the bob. Displace the bob by a small angle and release it without pushing. Time ten oscillations and divide by ten to find the period. Repeat for different lengths, keeping bob mass and release angle constant, and calculate means.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Timing only one oscillation, causing large reaction-time error.",
      "Avoid: Changing the release angle each time.",
      "Avoid: Measuring the string only instead of pivot to centre of bob.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Planning experiments. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-practical-skills-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "practical",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student measures speed using a stopwatch and metre rule. Suggest two improvements to reduce uncertainty.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Use light gates and a data logger instead of a hand-operated stopwatch.",
        keywords: [["light", "gates", "data"]],
      },
      {
        point: "Measure over a longer distance or repeat readings and calculate a mean.",
        keywords: [["measure", "over", "longer"]],
      },
    ],
    examinerKeywords: [
      "uncertainty",
      "light gates",
      "data logger",
      "longer distance",
      "repeat",
      "mean",
    ],
    modelAnswer:
      "Use light gates connected to a data logger to reduce reaction-time error. Also measure over a longer distance and repeat readings to calculate a mean.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying use a stopwatch with no improvement detail.",
      "Avoid: Only saying be more careful.",
      "Avoid: Changing the experiment aim instead of reducing uncertainty.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Evaluating methods. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A runner travels 150 m in 20 s. Calculate the runner's average speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 150 / 20",
        keywords: [["substitution", "speed"]],
      },
      {
        point: "Answer: 7.5 m/s",
        keywords: [["average speed", "distance"]],
      },
    ],
    examinerKeywords: ["average speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 150 / 20 = 7.5 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying distance by time.",
      "Avoid: Giving the unit as seconds.",
      "Avoid: Forgetting to use average speed.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Forces and motion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A current of 2.5 A flows through a heater for 40 s. Calculate the charge that flows through the heater.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 2.5 × 40",
        keywords: [["substitution", "charge"]],
      },
      {
        point: "Answer: 100 C",
        keywords: [["charge", "current"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "coulombs"],
    modelAnswer: "charge = current × time = 2.5 × 40 = 100 C.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing current by time.",
      "Avoid: Writing A as the unit for charge.",
      "Avoid: Using minutes instead of seconds when seconds are given.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electricity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State two differences between transverse and longitudinal waves.",
    marks: 2,
    markSchemePoints: [
      {
        point:
          "Transverse wave oscillations are perpendicular to the direction of energy transfer.",
        keywords: [["transverse", "wave", "oscillations"]],
      },
      {
        point:
          "Longitudinal wave oscillations are parallel to the direction of energy transfer or have compressions and rarefactions.",
        keywords: [["longitudinal", "wave", "oscillations"]],
      },
    ],
    examinerKeywords: [
      "transverse",
      "longitudinal",
      "perpendicular",
      "parallel",
      "compressions",
      "rarefactions",
    ],
    modelAnswer:
      "In transverse waves, oscillations are perpendicular to the direction of energy transfer. In longitudinal waves, oscillations are parallel and the wave has compressions and rarefactions.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying transverse waves are always faster.",
      "Avoid: Mixing up perpendicular and parallel.",
      "Avoid: Only giving examples without differences.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A device has an input energy of 200 J and wastes 70 J. Calculate the efficiency.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Useful output energy = 200 - 70 = 130 J",
        keywords: [["useful", "output", "energy"]],
      },
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful", "output"]],
      },
      {
        point: "Substitution: efficiency = 130 / 200 × 100",
        keywords: [["substitution", "efficiency"]],
      },
      {
        point: "Answer: 65%",
        keywords: [["efficiency", "useful output"]],
      },
    ],
    examinerKeywords: [
      "efficiency",
      "useful output",
      "wasted energy",
      "input energy",
      "percentage",
    ],
    modelAnswer: "Useful output = 200 - 70 = 130 J. Efficiency = 130 / 200 × 100 = 65%.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using wasted energy as useful output.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Giving the answer as 0.65%.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy transfers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A liquid has a mass of 360 g and a volume of 300 cm³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 360 / 300",
        keywords: [["substitution", "density"]],
      },
      {
        point: "Answer: 1.2 g/cm³",
        keywords: [["density", "mass"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "g/cm³"],
    modelAnswer: "density = mass / volume = 360 / 300 = 1.2 g/cm³.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying mass by volume.",
      "Avoid: Forgetting the unit g/cm³.",
      "Avoid: Using cm² instead of cm³.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how plotting compasses can be used to show the magnetic field around a bar magnet.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Place the bar magnet on paper and mark its outline.",
        keywords: [["place", "magnet", "paper"]],
      },
      {
        point: "Place a plotting compass near the magnet and mark the direction of the needle.",
        keywords: [["place", "plotting", "compass"]],
      },
      {
        point: "Move the compass to different positions and mark more directions.",
        keywords: [["move", "compass", "different"]],
      },
      {
        point:
          "Join the marks to show field lines, with arrows from north to south outside the magnet.",
        keywords: [["join", "marks", "show"]],
      },
    ],
    examinerKeywords: [
      "plotting compass",
      "bar magnet",
      "needle direction",
      "field lines",
      "north to south",
    ],
    modelAnswer:
      "Put the bar magnet on paper and draw around it. Place a plotting compass near the magnet and mark the direction of the needle. Repeat at many positions around the magnet, then join the marks to draw field lines with arrows from north to south outside the magnet.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Drawing field lines without using compass directions.",
      "Avoid: Putting arrows from south to north outside the magnet.",
      "Avoid: Letting nearby magnets or iron objects affect the result.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Magnetism. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A source has a count rate of 320 counts per minute. After two half-lives, calculate the count rate.",
    marks: 3,
    markSchemePoints: [
      {
        point: "After one half-life: 320 / 2 = 160 counts per minute",
        keywords: [["after", "half-life", "counts"]],
      },
      {
        point: "After two half-lives: 160 / 2 = 80 counts per minute",
        keywords: [["after", "half-lives", "counts"]],
      },
      {
        point: "Answer: 80 counts per minute",
        keywords: [["counts", "minute"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "The count rate halves twice: 320 → 160 → 80 counts per minute.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing by 2 only once.",
      "Avoid: Subtracting 2 from the count rate.",
      "Avoid: Forgetting the unit counts per minute.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radioactivity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why a seat belt reduces the risk of injury during a car crash.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The seat belt increases the time taken for the passenger to stop.",
        keywords: [["seat", "belt", "increases"]],
      },
      {
        point: "For the same change in momentum, a longer stopping time reduces the force.",
        keywords: [["same", "change", "momentum"]],
      },
      {
        point: "The seat belt spreads the force over a stronger area of the body.",
        keywords: [["seat", "belt", "spreads"]],
      },
      {
        point: "This reduces the chance of serious injury.",
        keywords: [["reduces", "chance", "serious"]],
      },
    ],
    examinerKeywords: ["seat belt", "stopping time", "momentum", "force", "injury", "spread force"],
    modelAnswer:
      "A seat belt increases the time taken for the passenger to stop. For the same change in momentum, increasing stopping time reduces the force. The belt also spreads the force across stronger parts of the body, reducing injury risk.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the seat belt reduces the passenger's mass.",
      "Avoid: Not mentioning stopping time or force.",
      "Avoid: Saying the seat belt prevents momentum from changing.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Forces. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 6.0 Ω resistor has a current of 0.50 A through it. Calculate the potential difference across the resistor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Substitution: voltage = 0.50 × 6.0",
        keywords: [["substitution", "voltage"]],
      },
      {
        point: "Answer: 3.0 V",
        keywords: [["voltage", "current"]],
      },
    ],
    examinerKeywords: ["voltage", "current", "resistance", "potential difference", "V"],
    modelAnswer: "V = IR = 0.50 × 6.0 = 3.0 V.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing resistance by current.",
      "Avoid: Giving the answer in ohms.",
      "Avoid: Forgetting to include V.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Circuits. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why sound travels faster in solids than in gases.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Sound is transferred by vibrations of particles.",
        keywords: [["sound", "transferred", "vibrations"]],
      },
      {
        point: "Particles in solids are closer together than particles in gases.",
        keywords: [["particles", "solids", "closer"]],
      },
      {
        point: "Vibrations are passed from particle to particle more quickly in solids.",
        keywords: [["vibrations", "passed", "particle"]],
      },
    ],
    examinerKeywords: ["sound", "vibrations", "particles", "solid", "gas", "closer together"],
    modelAnswer:
      "Sound travels by particles vibrating and passing on energy. Particles in a solid are closer together than in a gas, so the vibrations are transferred more quickly.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying sound travels fastest in a vacuum.",
      "Avoid: Not mentioning particles.",
      "Avoid: Saying gas particles are closer together.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Sound waves. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how thermal energy is transferred through a vacuum from the Sun to Earth.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Thermal energy is transferred by infrared radiation or electromagnetic radiation.",
        keywords: [["thermal", "energy", "transferred"]],
      },
      {
        point: "Radiation can travel through a vacuum because it does not need particles.",
        keywords: [["radiation", "travel", "through"]],
      },
    ],
    examinerKeywords: [
      "thermal energy",
      "infrared radiation",
      "electromagnetic radiation",
      "vacuum",
      "no particles needed",
    ],
    modelAnswer:
      "Thermal energy travels from the Sun to Earth by infrared electromagnetic radiation. Radiation can travel through a vacuum because it does not need particles.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying energy travels by conduction through space.",
      "Avoid: Saying convection happens in a vacuum.",
      "Avoid: Not mentioning radiation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Thermal transfer. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A force of 120 N acts on an area of 0.030 m². Calculate the pressure.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: pressure = force / area",
        keywords: [["pressure", "force", "area"]],
      },
      {
        point: "Substitution: pressure = 120 / 0.030",
        keywords: [["substitution", "pressure"]],
      },
      {
        point: "Answer: 4000 Pa",
        keywords: [["4000"]],
      },
    ],
    examinerKeywords: ["pressure", "force", "area", "Pa"],
    modelAnswer: "pressure = force / area = 120 / 0.030 = 4000 Pa.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying force by area.",
      "Avoid: Using N as the unit for pressure.",
      "Avoid: Ignoring the decimal in 0.030.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 50 turns on the primary coil and 250 turns on the secondary coil. The primary voltage is 6.0 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["secondary", "voltage", "primary"]],
      },
      {
        point: "Substitution: Vs / 6.0 = 250 / 50",
        keywords: [["substitution"]],
      },
      {
        point: "Vs = 6.0 × 5",
        keywords: [["transformer", "turns ratio"]],
      },
      {
        point: "Answer: 30 V",
        keywords: [["transformer", "turns ratio"]],
      },
    ],
    examinerKeywords: ["transformer", "turns ratio", "primary voltage", "secondary voltage", "V"],
    modelAnswer: "Vs / Vp = Ns / Np. Vs / 6.0 = 250 / 50 = 5, so Vs = 30 V.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using the ratio upside down.",
      "Avoid: Giving the answer as 1.2 V.",
      "Avoid: Forgetting the voltage unit.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how a chain reaction can occur during nuclear fission.",
    marks: 4,
    markSchemePoints: [
      {
        point: "A neutron is absorbed by a large unstable nucleus.",
        keywords: [["neutron", "absorbed", "large"]],
      },
      {
        point: "The nucleus splits and releases energy.",
        keywords: [["nucleus", "splits", "releases"]],
      },
      {
        point: "More neutrons are released.",
        keywords: [["more", "neutrons", "released"]],
      },
      {
        point: "These neutrons can be absorbed by other nuclei and cause further fission.",
        keywords: [["these", "neutrons", "absorbed"]],
      },
    ],
    examinerKeywords: [
      "chain reaction",
      "neutron",
      "fission",
      "unstable nucleus",
      "energy released",
      "further fission",
    ],
    modelAnswer:
      "A neutron is absorbed by a large unstable nucleus, causing it to split and release energy. More neutrons are released, and these can be absorbed by other nuclei, causing more fission reactions.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying electrons cause the chain reaction.",
      "Avoid: Forgetting that more neutrons are released.",
      "Avoid: Confusing fission with fusion.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear fission. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A metal block has a mass of 2.0 kg and specific heat capacity 450 J/kg °C. Calculate the energy needed to raise its temperature by 10 °C.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["energy", "mass", "specific"]],
      },
      {
        point: "Substitution: energy = 2.0 × 450 × 10",
        keywords: [["substitution", "energy"]],
      },
      {
        point: "Answer: 9000 J",
        keywords: [["9000"]],
      },
      {
        point: "Unit J must be included.",
        keywords: [["unit", "must", "included"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "mass", "temperature change", "energy", "J"],
    modelAnswer: "E = mcΔT = 2.0 × 450 × 10 = 9000 J.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using final temperature instead of temperature change.",
      "Avoid: Forgetting to multiply by mass.",
      "Avoid: Giving the unit as W.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "A student investigates how current through a resistor changes with potential difference. Describe how the student should process the results.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Record current and potential difference in a results table with units.",
        keywords: [["record", "current", "potential"]],
      },
      {
        point: "Repeat readings where possible and calculate means.",
        keywords: [["repeat", "readings", "possible"]],
      },
      {
        point: "Plot current on the y-axis against potential difference on the x-axis.",
        keywords: [["plot", "current", "y-axis"]],
      },
      {
        point: "Draw a line of best fit and use the shape or gradient to analyse the relationship.",
        keywords: [["draw", "line", "best"]],
      },
    ],
    examinerKeywords: [
      "current",
      "potential difference",
      "results table",
      "units",
      "graph",
      "line of best fit",
    ],
    modelAnswer:
      "The student should record current and potential difference in a table with units, repeat readings and calculate means. They should plot current against potential difference, draw a line of best fit and use the graph to analyse the relationship.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Plotting without units on axes.",
      "Avoid: Not repeating readings.",
      "Avoid: Joining points with straight lines instead of drawing a line of best fit.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Practical skills. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.50 kg ball moves at 8.0 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.50 × 8.0",
        keywords: [["substitution", "momentum"]],
      },
      {
        point: "Answer: 4.0 kg m/s",
        keywords: [["momentum", "mass"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.50 × 8.0 = 4.0 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using grams instead of kilograms.",
      "Avoid: Writing the unit as N.",
      "Avoid: Dividing velocity by mass.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why X-rays are useful for imaging bones but can also be hazardous.",
    marks: 4,
    markSchemePoints: [
      {
        point: "X-rays can pass through soft tissue.",
        keywords: [["x-rays", "pass", "through"]],
      },
      {
        point: "X-rays are absorbed more by bone.",
        keywords: [["x-rays", "absorbed", "more"]],
      },
      {
        point: "This creates contrast on a detector or image.",
        keywords: [["creates", "contrast", "detector"]],
      },
      {
        point: "X-rays are ionising and can damage cells or DNA.",
        keywords: [["x-rays", "ionising", "damage"]],
      },
    ],
    examinerKeywords: ["X-rays", "soft tissue", "bone", "absorbed", "ionising", "DNA damage"],
    modelAnswer:
      "X-rays pass through soft tissue but are absorbed more by bone, so bones show clearly on an image. However, X-rays are ionising radiation and can damage cells or DNA, making them hazardous.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying X-rays are not ionising.",
      "Avoid: Saying bones let through more X-rays than soft tissue.",
      "Avoid: Only giving the use and not the hazard.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnetic spectrum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why the pressure of a gas in a sealed container increases when the temperature increases.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Gas particles gain kinetic energy.",
        keywords: [["particles", "gain", "kinetic"]],
      },
      {
        point: "The particles move faster.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "They collide with the container walls more frequently.",
        keywords: [["collide", "container", "walls"]],
      },
      {
        point: "The collisions exert a greater force on the walls, increasing pressure.",
        keywords: [["collisions", "exert", "greater"]],
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
      "When temperature increases, gas particles gain kinetic energy and move faster. They collide with the container walls more often and with greater force, so the pressure increases.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the gas particles expand.",
      "Avoid: Saying pressure increases because mass increases.",
      "Avoid: Not mentioning particle collisions.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Gas pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper1-mixed-mock-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-1-mixed",
    paper: "Paper 1",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "A student wants to investigate how insulation thickness affects the rate of cooling of hot water. Plan a suitable experiment.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes beakers, hot water, thermometer or temperature probe, stopwatch and insulating material of different thicknesses.",
        keywords: [["apparatus", "includes", "beakers"]],
      },
      {
        point: "Independent variable is insulation thickness.",
        keywords: [["independent", "variable", "insulation"]],
      },
      {
        point: "Dependent variable is temperature drop or rate of cooling.",
        keywords: [["dependent", "variable", "temperature"]],
      },
      {
        point:
          "Control variables include volume of water, starting temperature, beaker type and room conditions.",
        keywords: [["control", "variables", "include"]],
      },
      {
        point: "Record temperature at regular time intervals and repeat for each thickness.",
        keywords: [["record", "temperature", "regular"]],
      },
      {
        point:
          "Calculate temperature drop per minute or plot temperature against time; safety includes care with hot water.",
        keywords: [["calculate", "temperature", "drop"]],
      },
    ],
    examinerKeywords: [
      "insulation thickness",
      "rate of cooling",
      "temperature",
      "time",
      "control variables",
      "repeat",
      "hot water safety",
    ],
    modelAnswer:
      "Wrap identical beakers with different thicknesses of insulation. Put the same volume of hot water at the same starting temperature into each beaker. Measure temperature at regular time intervals using a thermometer or temperature probe. Keep beaker type and room conditions constant. Repeat each thickness, calculate means and compare temperature drop per minute or plot cooling curves. Take care with hot water.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using different starting temperatures.",
      "Avoid: Changing water volume as well as insulation thickness.",
      "Avoid: Only measuring final temperature without considering time.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Synoptic practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "State",
    questionText: "State what is meant by a light-year.",
    marks: 2,
    markSchemePoints: [
      {
        point: "A light-year is a distance, not a time.",
        keywords: [["light-year", "distance", "time"]],
      },
      {
        point: "It is the distance travelled by light in one year.",
        keywords: [["distance", "travelled", "light"]],
      },
    ],
    examinerKeywords: ["light-year", "distance", "light travels", "one year"],
    modelAnswer: "A light-year is the distance that light travels in one year.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying a light-year is a unit of time.",
      "Avoid: Saying it is the time taken for Earth to orbit the Sun.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Astrophysics. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how a potential difference is induced when a magnet is moved into a coil connected to a voltmeter.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The magnet moves relative to the coil.",
        keywords: [["magnet", "moves", "relative"]],
      },
      {
        point: "The magnetic field through the coil changes.",
        keywords: [["magnetic", "field", "through"]],
      },
      {
        point:
          "A potential difference is induced across the coil, shown by a voltmeter deflection.",
        keywords: [["potential", "difference", "induced"]],
      },
    ],
    examinerKeywords: [
      "relative motion",
      "magnetic field changes",
      "coil",
      "induced potential difference",
      "voltmeter deflection",
    ],
    modelAnswer:
      "As the magnet moves into the coil, the magnetic field through the coil changes. This induces a potential difference across the coil, so the voltmeter deflects.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying a stationary magnet always induces a potential difference.",
      "Avoid: Forgetting that the magnetic field must change.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnetic induction. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has 120 turns on the primary coil and 600 turns on the secondary coil. The primary voltage is 9.0 V. Calculate the secondary voltage.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["secondary", "voltage", "primary"]],
      },
      {
        point: "Substitution: Vs / 9.0 = 600 / 120",
        keywords: [["substitution"]],
      },
      {
        point: "Vs = 9.0 × 5",
        keywords: [["transformer", "turns ratio"]],
      },
      {
        point: "Answer: 45 V",
        keywords: [["transformer", "turns ratio"]],
      },
    ],
    examinerKeywords: ["transformer", "turns ratio", "primary voltage", "secondary voltage", "V"],
    modelAnswer: "Vs / Vp = Ns / Np, so Vs / 9.0 = 600 / 120 = 5. Therefore Vs = 45 V.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using the turns ratio upside down.",
      "Avoid: Forgetting the unit V.",
      "Avoid: Using current instead of voltage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText:
      "Explain why alpha radiation is dangerous if an alpha-emitting source is taken inside the body.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Alpha radiation is strongly ionising.",
        keywords: [["alpha", "radiation", "strongly"]],
      },
      {
        point: "Inside the body, alpha radiation is close to living cells.",
        keywords: [["inside", "body", "alpha"]],
      },
      {
        point: "It can damage cells or DNA, increasing the risk of cancer.",
        keywords: [["damage", "cells", "increasing"]],
      },
    ],
    examinerKeywords: [
      "alpha radiation",
      "strongly ionising",
      "inside body",
      "cells",
      "DNA damage",
      "cancer",
    ],
    modelAnswer:
      "Alpha radiation is strongly ionising. If the source is inside the body, the alpha particles can reach nearby cells and damage DNA, increasing cancer risk.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying alpha is harmless inside the body because paper stops it.",
      "Avoid: Only saying alpha is weakly penetrating without considering internal exposure.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radioactivity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how redshift supports the idea that the Universe is expanding.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Light from most distant galaxies is redshifted.",
        keywords: [["light", "most", "distant"]],
      },
      {
        point: "Redshift means the wavelength of the light has increased.",
        keywords: [["redshift", "means", "wavelength"]],
      },
      {
        point: "This shows the galaxies are moving away from Earth.",
        keywords: [["shows", "galaxies", "moving"]],
      },
      {
        point:
          "More distant galaxies usually have greater redshifts, supporting expansion of space.",
        keywords: [["more", "distant", "galaxies"]],
      },
    ],
    examinerKeywords: [
      "redshift",
      "wavelength increases",
      "distant galaxies",
      "moving away",
      "expanding Universe",
    ],
    modelAnswer:
      "Most distant galaxies show redshift, meaning their light has increased in wavelength. This shows they are moving away. More distant galaxies tend to have greater redshifts, which supports the idea that the Universe is expanding.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying redshift means galaxies are moving towards Earth.",
      "Avoid: Not linking redshift to increased wavelength.",
      "Avoid: Saying Earth is the centre of the Universe.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Redshift. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.30 kg ball moving at 12 m/s hits a wall and rebounds at 8.0 m/s in the opposite direction. Calculate the change in momentum of the ball.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point:
          "Take the initial direction as positive, so initial momentum = 0.30 × 12 = 3.6 kg m/s",
        keywords: [["take", "initial", "direction"]],
      },
      {
        point: "Final momentum = 0.30 × -8.0 = -2.4 kg m/s",
        keywords: [["final", "momentum"]],
      },
      {
        point: "Change in momentum = final momentum - initial momentum = -2.4 - 3.6",
        keywords: [["change", "momentum", "final"]],
      },
      {
        point: "Magnitude of change in momentum = 6.0 kg m/s",
        keywords: [["magnitude", "change", "momentum"]],
      },
    ],
    examinerKeywords: [
      "momentum",
      "mass",
      "velocity",
      "opposite direction",
      "change in momentum",
      "kg m/s",
    ],
    modelAnswer:
      "Initial momentum = 0.30 × 12 = 3.6 kg m/s. Final momentum = 0.30 × -8.0 = -2.4 kg m/s. Change = -2.4 - 3.6 = -6.0 kg m/s, so the magnitude is 6.0 kg m/s.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Ignoring the opposite direction.",
      "Avoid: Adding speeds without using momentum.",
      "Avoid: Forgetting the unit kg m/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText:
      "Describe how the direction of the force on a current-carrying wire in a magnetic field can be found.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Use Fleming's left-hand rule.",
        keywords: [["fleming", "left-hand", "rule"]],
      },
      {
        point: "First finger shows the magnetic field direction from north to south.",
        keywords: [["first", "finger", "shows"]],
      },
      {
        point: "Second finger shows current direction and thumb shows force direction.",
        keywords: [["second", "finger", "shows"]],
      },
    ],
    examinerKeywords: [
      "Fleming's left-hand rule",
      "first finger",
      "magnetic field",
      "second finger",
      "current",
      "thumb",
      "force",
    ],
    modelAnswer:
      "Use Fleming's left-hand rule. The first finger points in the magnetic field direction, the second finger points in the current direction, and the thumb gives the force direction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using the right-hand rule for the motor effect.",
      "Avoid: Mixing up current and force fingers.",
      "Avoid: Forgetting field direction is from north to south.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Magnetic fields. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive isotope has an initial activity of 960 Bq. Its half-life is 2 hours. Calculate its activity after 6 hours.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Number of half-lives = 6 / 2 = 3",
        keywords: [["half-lives"]],
      },
      {
        point: "Activity halves three times: 960 to 480 to 240 to 120",
        keywords: [["activity", "halves", "three"]],
      },
      {
        point: "Answer: 120 Bq",
        keywords: [["half-life", "activity"]],
      },
      {
        point: "Unit Bq must be included.",
        keywords: [["unit", "must", "included"]],
      },
    ],
    examinerKeywords: ["half-life", "activity", "halve", "becquerel", "Bq"],
    modelAnswer:
      "6 hours is 3 half-lives. The activity halves three times: 960 → 480 → 240 → 120 Bq.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Dividing 960 by 3.",
      "Avoid: Subtracting 2 each hour.",
      "Avoid: Forgetting the unit Bq.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radioactive decay. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText:
      "Compare the life cycle of a Sun-like star with the life cycle of a very massive star after the main sequence.",
    marks: 5,
    markSchemePoints: [
      {
        point: "A Sun-like star becomes a red giant after the main sequence.",
        keywords: [["sun-like", "star", "becomes"]],
      },
      {
        point: "A Sun-like star forms a planetary nebula and then a white dwarf.",
        keywords: [["sun-like", "star", "forms"]],
      },
      {
        point: "A very massive star becomes a red supergiant.",
        keywords: [["very", "massive", "star"]],
      },
      {
        point: "A very massive star explodes as a supernova.",
        keywords: [["very", "massive", "star"]],
      },
      {
        point: "The core of a very massive star may become a neutron star or black hole.",
        keywords: [["core", "very", "massive"]],
      },
    ],
    examinerKeywords: [
      "Sun-like star",
      "red giant",
      "planetary nebula",
      "white dwarf",
      "massive star",
      "red supergiant",
      "supernova",
      "black hole",
    ],
    modelAnswer:
      "A Sun-like star becomes a red giant, then loses its outer layers as a planetary nebula and leaves a white dwarf. A very massive star becomes a red supergiant and explodes as a supernova, leaving a neutron star or black hole.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying the Sun will become a black hole.",
      "Avoid: Forgetting the supernova stage for massive stars.",
      "Avoid: Confusing planetary nebula with planet formation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Astrophysics. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why the coil in a simple d.c. motor continues to rotate in the same direction.",
    marks: 4,
    markSchemePoints: [
      {
        point: "The current-carrying coil experiences forces in a magnetic field.",
        keywords: [["current-carrying", "coil", "experiences"]],
      },
      {
        point:
          "The forces on opposite sides of the coil act in opposite directions, producing a turning effect.",
        keywords: [["forces", "opposite", "sides"]],
      },
      {
        point: "The split-ring commutator reverses the current every half-turn.",
        keywords: [["split-ring", "commutator", "reverses"]],
      },
      {
        point: "This keeps the turning effect in the same rotational direction.",
        keywords: [["keeps", "turning", "effect"]],
      },
    ],
    examinerKeywords: [
      "d.c. motor",
      "coil",
      "magnetic field",
      "turning effect",
      "split-ring commutator",
      "reverse current",
    ],
    modelAnswer:
      "The current-carrying coil experiences opposite forces on its two sides, giving a turning effect. The split-ring commutator reverses the current every half-turn, so the forces reverse at the right time and the coil keeps rotating in the same direction.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Saying the commutator reverses the magnetic field.",
      "Avoid: Forgetting the forces on opposite sides of the coil.",
      "Avoid: Saying the coil rotates because current is stored in it.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electric motors. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Describe",
    questionText: "Describe the role of a moderator in a nuclear reactor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The moderator slows down fast neutrons.",
        keywords: [["moderator", "slows", "down"]],
      },
      {
        point: "Slower neutrons are more likely to be absorbed by fuel nuclei.",
        keywords: [["slower", "neutrons", "more"]],
      },
      {
        point: "This helps maintain the chain reaction.",
        keywords: [["helps", "maintain", "chain"]],
      },
    ],
    examinerKeywords: ["moderator", "slows neutrons", "fuel nuclei", "chain reaction", "fission"],
    modelAnswer:
      "The moderator slows down fast neutrons so they are more likely to be absorbed by fuel nuclei and cause further fission, helping maintain the chain reaction.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the moderator absorbs all neutrons.",
      "Avoid: Confusing moderator with control rods.",
      "Avoid: Saying the moderator cools the reactor only.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear fission. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why a satellite moving in a circular orbit needs a resultant force.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The satellite's velocity direction is constantly changing.",
        keywords: [["satellite", "velocity", "direction"]],
      },
      {
        point: "A changing velocity means the satellite is accelerating.",
        keywords: [["changing", "velocity", "means"]],
      },
      {
        point: "A resultant force is needed to cause acceleration, provided by gravity.",
        keywords: [["resultant", "force", "cause"]],
      },
    ],
    examinerKeywords: [
      "satellite",
      "velocity changes direction",
      "acceleration",
      "resultant force",
      "gravity",
    ],
    modelAnswer:
      "A satellite in circular orbit constantly changes direction, so its velocity changes and it accelerates. A resultant force is needed for this acceleration, and gravity provides it.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying no force acts because the satellite is in space.",
      "Avoid: Saying constant speed means no acceleration.",
      "Avoid: Forgetting gravity acts in orbit.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Circular motion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "An ideal transformer has an input voltage of 240 V and input current of 0.50 A. The output voltage is 12 V. Calculate the output current.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: input power = input voltage × input current",
        keywords: [["input", "power", "voltage"]],
      },
      {
        point: "Substitution: input power = 240 × 0.50 = 120 W",
        keywords: [["substitution", "input", "power"]],
      },
      {
        point: "For an ideal transformer, output power = input power",
        keywords: [["ideal", "transformer", "output"]],
      },
      {
        point: "Formula: output current = output power / output voltage",
        keywords: [["output", "current", "power"]],
      },
      {
        point: "Substitution: output current = 120 / 12 = 10 A",
        keywords: [["substitution", "output", "current"]],
      },
    ],
    examinerKeywords: ["ideal transformer", "power", "voltage", "current", "output current", "A"],
    modelAnswer:
      "Input power = 240 × 0.50 = 120 W. For an ideal transformer, output power is also 120 W. Output current = 120 / 12 = 10 A.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Assuming input current equals output current.",
      "Avoid: Not using conservation of power.",
      "Avoid: Forgetting the unit A.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformer efficiency. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why background radiation must be measured before testing a radioactive source.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The detector records radiation from the surroundings even without the source.",
        keywords: [["detector", "records", "radiation"]],
      },
      {
        point: "This background count adds to the measured count from the source.",
        keywords: [["background", "count", "adds"]],
      },
      {
        point: "Subtracting background count gives a corrected count rate for the source.",
        keywords: [["subtracting", "background", "count"]],
      },
    ],
    examinerKeywords: [
      "background radiation",
      "detector",
      "count rate",
      "subtract",
      "corrected count",
    ],
    modelAnswer:
      "A detector records background radiation even when the source is not present. This adds to the measured count, so the background count rate must be subtracted to find the corrected count rate from the source.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Ignoring background radiation.",
      "Avoid: Adding background count instead of subtracting it.",
      "Avoid: Saying background radiation only exists near radioactive sources.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Background radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A galaxy is 120 million light-years away and has a recession speed of 2400 km/s. Calculate speed divided by distance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: value = speed / distance",
        keywords: [["value", "speed", "distance"]],
      },
      {
        point: "Substitution: value = 2400 / 120",
        keywords: [["substitution", "value", "2400"]],
      },
      {
        point: "Answer: 20 km/s per million light-year",
        keywords: [["million", "light-year"]],
      },
    ],
    examinerKeywords: [
      "galaxy",
      "recession speed",
      "distance",
      "speed divided by distance",
      "km/s per million light-year",
    ],
    modelAnswer: "speed divided by distance = 2400 / 120 = 20 km/s per million light-year.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing distance by speed.",
      "Avoid: Forgetting the compound unit.",
      "Avoid: Converting units unnecessarily and incorrectly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Hubble relationship. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to investigate how current affects the strength of an electromagnet.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes power supply, variable resistor, ammeter, switch, coil, soft iron core and paper clips.",
        keywords: [["apparatus", "includes", "power"]],
      },
      {
        point: "Independent variable is current in the coil.",
        keywords: [["independent", "variable", "current"]],
      },
      {
        point:
          "Dependent variable is electromagnet strength, measured by number or mass of paper clips lifted.",
        keywords: [["dependent", "variable", "electromagnet"]],
      },
      {
        point:
          "Control variables include number of turns, core material and distance from paper clips.",
        keywords: [["control", "variables", "include"]],
      },
      {
        point: "Repeat each current and calculate a mean.",
        keywords: [["repeat", "each", "current"]],
      },
      {
        point: "Safety: switch off between readings to prevent overheating.",
        keywords: [["safety", "switch", "readings"]],
      },
    ],
    examinerKeywords: [
      "electromagnet",
      "current",
      "ammeter",
      "variable resistor",
      "paper clips",
      "control variables",
      "repeat",
      "mean",
      "overheating",
    ],
    modelAnswer:
      "Set up a coil around a soft iron core with a power supply, switch, variable resistor and ammeter. Change the current using the variable resistor and measure strength by counting paper clips lifted. Keep the number of turns, core and distance from clips constant. Repeat each current, calculate means and switch off between readings to avoid overheating.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing the number of turns while changing current.",
      "Avoid: Not measuring current with an ammeter.",
      "Avoid: Leaving the coil switched on for too long.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnet practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Explain",
    questionText: "Explain why nuclear fusion occurs in the cores of stars.",
    marks: 3,
    markSchemePoints: [
      {
        point: "The core of a star has extremely high temperature.",
        keywords: [["core", "star", "extremely"]],
      },
      {
        point: "The core has extremely high pressure or density.",
        keywords: [["core", "extremely", "high"]],
      },
      {
        point:
          "These conditions allow small nuclei to overcome repulsion and join together, releasing energy.",
        keywords: [["these", "conditions", "allow"]],
      },
    ],
    examinerKeywords: [
      "nuclear fusion",
      "star core",
      "high temperature",
      "high pressure",
      "nuclei join",
      "energy released",
    ],
    modelAnswer:
      "The core of a star has very high temperature and pressure. These conditions allow small nuclei to overcome electrostatic repulsion and fuse together, releasing energy.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying fusion happens because stars contain oxygen for burning.",
      "Avoid: Confusing fusion with fission.",
      "Avoid: Not mentioning high temperature or pressure.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Fusion. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe how a loudspeaker produces sound from an alternating current.",
    marks: 5,
    markSchemePoints: [
      {
        point: "An alternating current flows in a coil placed in a magnetic field.",
        keywords: [["alternating", "current", "flows"]],
      },
      {
        point: "The current-carrying coil experiences a force due to the motor effect.",
        keywords: [["current-carrying", "coil", "experiences"]],
      },
      {
        point: "The direction of the force changes when the current changes direction.",
        keywords: [["direction", "force", "changes"]],
      },
      {
        point: "The coil and attached cone vibrate backwards and forwards.",
        keywords: [["coil", "attached", "cone"]],
      },
      {
        point: "The vibrating cone produces sound waves in air.",
        keywords: [["vibrating", "cone", "produces"]],
      },
    ],
    examinerKeywords: [
      "loudspeaker",
      "alternating current",
      "coil",
      "magnetic field",
      "motor effect",
      "cone",
      "sound waves",
    ],
    modelAnswer:
      "An alternating current passes through a coil in a magnetic field. The coil experiences a force due to the motor effect. As the current changes direction, the force reverses, so the coil and cone vibrate. The cone makes sound waves in the air.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Saying the speaker works by electromagnetic induction only.",
      "Avoid: Forgetting that the current alternates.",
      "Avoid: Not linking vibrations to sound waves.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Loudspeakers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "short-answer",
    questionType: "Compare",
    questionText: "Compare irradiation and contamination.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Irradiation means an object is exposed to ionising radiation from a source outside it.",
        keywords: [["irradiation", "means", "object"]],
      },
      {
        point: "Contamination means radioactive material is on or inside an object.",
        keywords: [["contamination", "means", "radioactive"]],
      },
      {
        point: "Irradiation does not usually make the object radioactive.",
        keywords: [["irradiation", "does", "usually"]],
      },
      {
        point:
          "Contamination can continue to expose the object until the radioactive material is removed or decays.",
        keywords: [["contamination", "continue", "expose"]],
      },
    ],
    examinerKeywords: [
      "irradiation",
      "contamination",
      "radioactive material",
      "ionising radiation",
      "exposure",
      "decays",
    ],
    modelAnswer:
      "Irradiation is exposure to ionising radiation from a source. Contamination is when radioactive material gets on or inside an object. Irradiation does not usually make the object radioactive, but contamination can keep emitting radiation until removed or decayed.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using irradiation and contamination as the same word.",
      "Avoid: Saying all irradiated objects become radioactive.",
      "Avoid: Not mentioning radioactive material in contamination.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radioactive contamination. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-paper2-mixed-mock-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "paper-2-mixed",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the evidence for the Big Bang model.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Redshift of distant galaxies shows most galaxies are moving away.",
        keywords: [["redshift", "distant", "galaxies"]],
      },
      {
        point: "Greater redshift for more distant galaxies supports an expanding Universe.",
        keywords: [["greater", "redshift", "more"]],
      },
      {
        point: "Cosmic microwave background radiation is detected from all directions.",
        keywords: [["cosmic", "microwave", "background"]],
      },
      {
        point: "CMB radiation is interpreted as cooled radiation from the early hot Universe.",
        keywords: [["radiation", "interpreted", "cooled"]],
      },
      {
        point: "Together, redshift and CMB support a hot, dense beginning.",
        keywords: [["together", "redshift", "support"]],
      },
      {
        point:
          "A justified conclusion states that the evidence strongly supports the Big Bang model.",
        keywords: [["justified", "conclusion", "states"]],
      },
    ],
    examinerKeywords: [
      "Big Bang",
      "redshift",
      "distant galaxies",
      "expanding Universe",
      "cosmic microwave background radiation",
      "hot dense beginning",
      "evidence",
    ],
    modelAnswer:
      "The Big Bang model is supported by redshift, because light from most distant galaxies is shifted to longer wavelengths, showing they are moving away. More distant galaxies have greater redshifts, supporting expansion. Cosmic microwave background radiation is also detected from all directions and is seen as leftover radiation from the early Universe. Together, this strongly supports a hot, dense beginning.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Only giving redshift and ignoring CMB radiation.",
      "Avoid: Saying CMB radiation comes from nearby stars.",
      "Avoid: Not giving an evaluative conclusion.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Big Bang evidence. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        keywords: [["convert", "distance", "3600"]],
      },
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 3600 / 120",
        keywords: [["substitution", "speed", "3600"]],
      },
      {
        point: "Answer: 30 m/s",
        keywords: [["speed", "distance"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "convert km to m", "m/s"],
    modelAnswer: "3.6 km = 3600 m. speed = distance / time = 3600 / 120 = 30 m/s.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using 3.6 directly without converting to metres.",
      "Avoid: Multiplying distance by time.",
      "Avoid: Giving the answer in km/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Speed. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A car accelerates uniformly from 4.0 m/s to 28 m/s in 6.0 s. Calculate its acceleration.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: acceleration = change in velocity / time",
        keywords: [["acceleration", "change", "velocity"]],
      },
      {
        point: "Substitution: acceleration = (28 - 4.0) / 6.0",
        keywords: [["substitution", "acceleration"]],
      },
      {
        point: "Answer: 4.0 m/s²",
        keywords: [["acceleration", "change in velocity"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time", "m/s²"],
    modelAnswer: "acceleration = (28 - 4.0) / 6.0 = 24 / 6.0 = 4.0 m/s².",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using final velocity only.",
      "Avoid: Writing m/s instead of m/s².",
      "Avoid: Subtracting in the wrong order without considering direction.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Acceleration. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 1500 kg car accelerates at 2.4 m/s². Calculate the resultant force on the car.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: force = mass × acceleration",
        keywords: [["force", "mass", "acceleration"]],
      },
      {
        point: "Substitution: force = 1500 × 2.4",
        keywords: [["substitution", "force", "1500"]],
      },
      {
        point: "Answer: 3600 N",
        keywords: [["3600"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "resultant force", "N"],
    modelAnswer: "F = ma = 1500 × 2.4 = 3600 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing mass by acceleration.",
      "Avoid: Forgetting force must be resultant force.",
      "Avoid: Giving the unit kg m/s instead of N.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Newton's second law. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A spacecraft component has a mass of 85 kg. The gravitational field strength on the Moon is 1.6 N/kg. Calculate its weight on the Moon.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: weight = mass × gravitational field strength",
        keywords: [["weight", "mass", "gravitational"]],
      },
      {
        point: "Substitution: weight = 85 × 1.6",
        keywords: [["substitution", "weight"]],
      },
      {
        point: "Answer: 136 N",
        keywords: [["weight", "mass"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength", "Moon", "N"],
    modelAnswer: "weight = mass × gravitational field strength = 85 × 1.6 = 136 N.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using 10 N/kg instead of the Moon's gravitational field strength.",
      "Avoid: Writing kg as the unit for weight.",
      "Avoid: Dividing by gravitational field strength.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Weight. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A 0.060 kg tennis ball moves at 35 m/s. Calculate its momentum.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: momentum = mass × velocity",
        keywords: [["momentum", "mass", "velocity"]],
      },
      {
        point: "Substitution: momentum = 0.060 × 35",
        keywords: [["substitution", "momentum"]],
      },
      {
        point: "Answer: 2.1 kg m/s",
        keywords: [["momentum", "mass"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "kg m/s"],
    modelAnswer: "momentum = mass × velocity = 0.060 × 35 = 2.1 kg m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using grams instead of kilograms.",
      "Avoid: Writing the unit as N.",
      "Avoid: Dividing velocity by mass.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A force of 180 N moves a crate 2.5 m in the direction of the force. Calculate the work done.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: work done = force × distance",
        keywords: [["work", "done", "force"]],
      },
      {
        point: "Substitution: work done = 180 × 2.5",
        keywords: [["substitution", "work", "done"]],
      },
      {
        point: "Answer: 450 J",
        keywords: [["work done", "force"]],
      },
    ],
    examinerKeywords: ["work done", "force", "distance", "joules"],
    modelAnswer: "work done = force × distance = 180 × 2.5 = 450 J.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using time instead of distance.",
      "Avoid: Forgetting the distance must be in the direction of the force.",
      "Avoid: Giving the unit N instead of J.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Work done. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A motor transfers 7200 J of energy in 24 s. Calculate its power.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: power = energy transferred / time",
        keywords: [["power", "energy", "transferred"]],
      },
      {
        point: "Substitution: power = 7200 / 24",
        keywords: [["substitution", "power", "7200"]],
      },
      {
        point: "Answer: 300 W",
        keywords: [["power", "energy transferred"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time", "W"],
    modelAnswer: "power = energy transferred / time = 7200 / 24 = 300 W.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying energy by time.",
      "Avoid: Giving the unit J instead of W.",
      "Avoid: Using current instead of time.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A device transfers 640 J usefully from an input of 800 J. Calculate the efficiency.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: efficiency = useful output energy / total input energy × 100",
        keywords: [["efficiency", "useful", "output"]],
      },
      {
        point: "Substitution: efficiency = 640 / 800 × 100",
        keywords: [["substitution", "efficiency"]],
      },
      {
        point: "Answer: 80%",
        keywords: [["efficiency", "useful output"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "input energy", "percentage"],
    modelAnswer: "efficiency = 640 / 800 × 100 = 80%.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy instead of useful energy.",
      "Avoid: Writing the answer as 0.8%.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Efficiency. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText: "A current of 0.45 A flows for 3.0 minutes. Calculate the charge transferred.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Convert time: 3.0 minutes = 180 s",
        keywords: [["convert", "time", "minutes"]],
      },
      {
        point: "Formula: charge = current × time",
        keywords: [["charge", "current", "time"]],
      },
      {
        point: "Substitution: charge = 0.45 × 180",
        keywords: [["substitution", "charge"]],
      },
      {
        point: "Answer: 81 C",
        keywords: [["charge", "current"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "seconds", "C"],
    modelAnswer: "3.0 minutes = 180 s. charge = current × time = 0.45 × 180 = 81 C.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using 3.0 instead of 180 s.",
      "Avoid: Dividing current by time.",
      "Avoid: Giving the unit A instead of C.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Charge. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A resistor has a resistance of 18 Ω and a current of 0.25 A. Calculate the potential difference across it.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Substitution: voltage = 0.25 × 18",
        keywords: [["substitution", "voltage"]],
      },
      {
        point: "Answer: 4.5 V",
        keywords: [["voltage", "current"]],
      },
    ],
    examinerKeywords: ["voltage", "current", "resistance", "potential difference", "V"],
    modelAnswer: "V = IR = 0.25 × 18 = 4.5 V.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing resistance by current.",
      "Avoid: Writing Ω as the unit.",
      "Avoid: Forgetting voltage and potential difference mean the same here.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Ohm's law. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A laptop charger transfers energy at 65 W when connected to a 230 V supply. Calculate the current.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: electrical power = current × voltage",
        keywords: [["electrical", "power", "current"]],
      },
      {
        point: "Rearrangement: current = power / voltage",
        keywords: [["rearrangement", "current", "power"]],
      },
      {
        point: "Substitution: current = 65 / 230",
        keywords: [["substitution", "current"]],
      },
      {
        point: "Answer: 0.28 A to 2 significant figures",
        keywords: [["significant", "figures"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "A", "significant figures"],
    modelAnswer: "P = IV, so I = P / V = 65 / 230 = 0.28 A to 2 significant figures.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Multiplying 65 by 230.",
      "Avoid: Rounding to 0 A.",
      "Avoid: Forgetting the unit A.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electrical power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 1.5 kW kettle is used for 4.0 minutes. Calculate the energy transferred in joules.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Convert power: 1.5 kW = 1500 W",
        keywords: [["convert", "power", "1500"]],
      },
      {
        point: "Convert time: 4.0 minutes = 240 s",
        keywords: [["convert", "time", "minutes"]],
      },
      {
        point: "Formula: energy transferred = power × time",
        keywords: [["energy", "transferred", "power"]],
      },
      {
        point: "Substitution: energy = 1500 × 240",
        keywords: [["substitution", "energy", "1500"]],
      },
      {
        point: "Answer: 360000 J",
        keywords: [["360000"]],
      },
    ],
    examinerKeywords: ["energy transferred", "power", "time", "convert kW", "convert minutes", "J"],
    modelAnswer:
      "1.5 kW = 1500 W and 4.0 minutes = 240 s. Energy = power × time = 1500 × 240 = 360000 J.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 1.5 W instead of 1500 W.",
      "Avoid: Using 4.0 s instead of 240 s.",
      "Avoid: Giving the answer in W.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Energy transferred electrically. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A metal cylinder has a mass of 1.2 kg and a volume of 1.5 × 10⁻⁴ m³. Calculate its density.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 1.2 / 1.5 × 10⁻⁴",
        keywords: [["substitution", "density"]],
      },
      {
        point: "Answer: 8000 kg/m³",
        keywords: [["8000"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "kg/m³"],
    modelAnswer: "density = mass / volume = 1.2 / 1.5 × 10⁻⁴ = 8000 kg/m³.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Misreading 1.5 × 10⁻⁴ on a calculator.",
      "Avoid: Multiplying mass by volume.",
      "Avoid: Giving kg/m² instead of kg/m³.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A box has a weight of 240 N and rests on a face with area 0.080 m². Calculate the pressure on the floor.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: pressure = force / area",
        keywords: [["pressure", "force", "area"]],
      },
      {
        point: "Substitution: pressure = 240 / 0.080",
        keywords: [["substitution", "pressure"]],
      },
      {
        point: "Answer: 3000 Pa",
        keywords: [["3000"]],
      },
    ],
    examinerKeywords: ["pressure", "force", "area", "Pa"],
    modelAnswer: "pressure = force / area = 240 / 0.080 = 3000 Pa.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying force by area.",
      "Avoid: Using mass instead of weight when weight is given.",
      "Avoid: Giving N as the unit.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "Calculate the pressure difference at a depth of 4.5 m in water of density 1000 kg/m³. Gravitational field strength is 9.8 N/kg.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: pressure difference = height × density × gravitational field strength",
        keywords: [["pressure", "difference", "height"]],
      },
      {
        point: "Substitution: pressure difference = 4.5 × 1000 × 9.8",
        keywords: [["substitution", "pressure", "difference"]],
      },
      {
        point: "Answer: 44100 Pa",
        keywords: [["44100"]],
      },
      {
        point: "Accept 44 kPa to 2 significant figures.",
        keywords: [["accept", "significant", "figures"]],
      },
    ],
    examinerKeywords: [
      "pressure difference",
      "depth",
      "density",
      "gravitational field strength",
      "Pa",
    ],
    modelAnswer:
      "pressure difference = hρg = 4.5 × 1000 × 9.8 = 44100 Pa, or 44 kPa to 2 significant figures.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using pressure = force / area instead.",
      "Avoid: Forgetting gravitational field strength.",
      "Avoid: Writing 44100 N.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Liquid pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A wave has a frequency of 250 Hz and a wavelength of 1.4 m. Calculate the wave speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave", "speed", "frequency"]],
      },
      {
        point: "Substitution: wave speed = 250 × 1.4",
        keywords: [["substitution", "wave", "speed"]],
      },
      {
        point: "Answer: 350 m/s",
        keywords: [["wave speed", "frequency"]],
      },
    ],
    examinerKeywords: ["wave speed", "frequency", "wavelength", "m/s"],
    modelAnswer: "wave speed = frequency × wavelength = 250 × 1.4 = 350 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing wavelength by frequency.",
      "Avoid: Giving the unit Hz.",
      "Avoid: Confusing wavelength with amplitude.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Wave speed. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A radioactive sample has an activity of 1200 Bq. After 18 minutes, its activity is 150 Bq. Calculate the half-life.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Activity halves from 1200 to 600 to 300 to 150",
        keywords: [["activity", "halves", "1200"]],
      },
      {
        point: "This is 3 half-lives.",
        keywords: [["half-lives"]],
      },
      {
        point: "Total time = 18 minutes",
        keywords: [["total", "time", "minutes"]],
      },
      {
        point: "Formula: half-life = total time / number of half-lives",
        keywords: [["half-life", "total", "time"]],
      },
      {
        point: "Half-life = 18 / 3 = 6 minutes",
        keywords: [["half-life", "minutes"]],
      },
    ],
    examinerKeywords: ["half-life", "activity", "halve", "Bq", "minutes"],
    modelAnswer:
      "1200 halves to 600, then 300, then 150, so 3 half-lives have passed. Half-life = 18 / 3 = 6 minutes.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Dividing 1200 by 150 and saying 8 minutes.",
      "Avoid: Counting the number of halvings incorrectly.",
      "Avoid: Forgetting the unit minutes.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Half-life. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A transformer has a primary voltage of 230 V and a secondary voltage of 46 V. The primary coil has 500 turns. Calculate the number of turns on the secondary coil.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: secondary voltage / primary voltage = secondary turns / primary turns",
        keywords: [["secondary", "voltage", "primary"]],
      },
      {
        point: "Substitution: 46 / 230 = Ns / 500",
        keywords: [["substitution"]],
      },
      {
        point: "Ns = 500 × 46 / 230",
        keywords: [["transformer", "turns"]],
      },
      {
        point: "Answer: 100 turns",
        keywords: [["turns"]],
      },
    ],
    examinerKeywords: ["transformer", "turns", "primary", "secondary", "voltage ratio"],
    modelAnswer: "Vs / Vp = Ns / Np, so 46 / 230 = Ns / 500. Ns = 500 × 46 / 230 = 100 turns.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using the ratio upside down.",
      "Avoid: Leaving the answer with voltage units.",
      "Avoid: Rounding unnecessarily.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformers. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 0.75 kg block is heated using 9000 J of energy. Its temperature rises by 24 °C. Calculate the specific heat capacity of the block.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["energy", "mass", "specific"]],
      },
      {
        point: "Rearrangement: specific heat capacity = energy / (mass × temperature change)",
        keywords: [["rearrangement", "specific", "heat"]],
      },
      {
        point: "Substitution: c = 9000 / (0.75 × 24)",
        keywords: [["substitution", "9000"]],
      },
      {
        point: "c = 9000 / 18",
        keywords: [["9000"]],
      },
      {
        point: "Answer: 500 J/kg °C",
        keywords: [["specific heat capacity", "energy"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature change", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = E / mΔT = 9000 / (0.75 × 24) = 9000 / 18 = 500 J/kg °C.",
    difficulty: "hard",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting brackets around mass × temperature change.",
      "Avoid: Giving the unit as J.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-calculation-heavy-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "calculation-heavy",
    paper: "Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A satellite travels a distance of 4.2 × 10⁷ m in one orbit. The orbit takes 5.6 × 10³ s. Calculate its average orbital speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 4.2 × 10⁷ / 5.6 × 10³",
        keywords: [["substitution", "speed"]],
      },
      {
        point: "Answer: 7500 m/s",
        keywords: [["7500"]],
      },
    ],
    examinerKeywords: ["orbital speed", "distance", "time", "standard form", "m/s"],
    modelAnswer: "speed = distance / time = 4.2 × 10⁷ / 5.6 × 10³ = 7500 m/s.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying distance by time.",
      "Avoid: Entering standard form incorrectly on a calculator.",
      "Avoid: Giving the answer without m/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Orbital speed. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate the advantages and disadvantages of using electric cars instead of petrol cars.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Electric cars produce no exhaust gases during use.",
        keywords: [["electric", "cars", "produce"]],
      },
      {
        point: "They can reduce air pollution in cities.",
        keywords: [["reduce", "pollution", "cities"]],
      },
      {
        point:
          "Electric cars still require electricity, which may be generated using fossil fuels.",
        keywords: [["electric", "cars", "still"]],
      },
      {
        point: "Battery manufacture and disposal can have environmental impacts.",
        keywords: [["battery", "manufacture", "disposal"]],
      },
      {
        point: "Electric motors can be more efficient than petrol engines.",
        keywords: [["electric", "motors", "more"]],
      },
      {
        point:
          "A justified conclusion should compare reduced local emissions with electricity generation and battery issues.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "electric cars",
      "petrol cars",
      "exhaust gases",
      "air pollution",
      "fossil fuels",
      "battery",
      "efficiency",
      "conclusion",
    ],
    modelAnswer:
      "Electric cars produce no exhaust gases while driving, so they reduce local air pollution. Their motors are often more efficient than petrol engines. However, the electricity used to charge them may still come from fossil fuels, and making or disposing of batteries can cause environmental damage. Overall, electric cars are usually cleaner during use, but their full impact depends on how electricity and batteries are produced.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying electric cars produce no pollution at any stage.",
      "Avoid: Only giving advantages with no disadvantages.",
      "Avoid: Not giving a final judgement.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electric vehicles and energy. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how crumple zones, seat belts and airbags reduce injury during a collision.",
    marks: 6,
    markSchemePoints: [
      {
        point: "During a collision, the passenger's momentum changes.",
        keywords: [["during", "collision", "passenger"]],
      },
      {
        point: "Crumple zones increase the time taken for the car to stop.",
        keywords: [["crumple", "zones", "increase"]],
      },
      {
        point: "Seat belts increase the time taken for the passenger to stop.",
        keywords: [["seat", "belts", "increase"]],
      },
      {
        point: "For the same change in momentum, increasing stopping time reduces force.",
        keywords: [["same", "change", "momentum"]],
      },
      {
        point: "Airbags spread the force over a larger area and reduce pressure on the body.",
        keywords: [["airbags", "spread", "force"]],
      },
      {
        point: "Seat belts and airbags reduce the risk of hitting hard surfaces inside the car.",
        keywords: [["seat", "belts", "airbags"]],
      },
    ],
    examinerKeywords: [
      "momentum",
      "collision",
      "stopping time",
      "force",
      "crumple zone",
      "seat belt",
      "airbag",
      "pressure",
    ],
    modelAnswer:
      "In a crash, the passenger's momentum must change to zero. Crumple zones and seat belts increase the time taken for this change, so the force is reduced. Airbags also increase stopping time and spread the force over a larger area, reducing pressure on the body. These features also reduce the chance of hitting hard surfaces.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying safety features reduce the passenger's mass.",
      "Avoid: Not mentioning momentum or stopping time.",
      "Avoid: Saying airbags remove the force completely.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Car safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the use of nuclear power stations for generating electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Nuclear power stations can produce large amounts of electricity reliably.",
        keywords: [["nuclear", "power", "stations"]],
      },
      {
        point: "They produce no carbon dioxide during normal operation.",
        keywords: [["produce", "carbon", "dioxide"]],
      },
      {
        point: "They use non-renewable nuclear fuel.",
        keywords: [["non-renewable", "nuclear", "fuel"]],
      },
      {
        point: "They produce radioactive waste that must be stored safely for a long time.",
        keywords: [["produce", "radioactive", "waste"]],
      },
      {
        point: "Accidents or leaks can release radioactive material.",
        keywords: [["accidents", "leaks", "release"]],
      },
      {
        point:
          "A justified conclusion should balance reliable low-carbon generation against radioactive waste and safety risks.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "nuclear power",
      "electricity generation",
      "reliable",
      "carbon dioxide",
      "radioactive waste",
      "non-renewable",
      "safety",
      "conclusion",
    ],
    modelAnswer:
      "Nuclear power stations provide large, reliable electricity output and do not release carbon dioxide during normal operation. However, they use non-renewable fuel and produce radioactive waste that must be stored safely for a long time. There is also a risk of radioactive release during accidents. Nuclear power can be useful for reliable low-carbon electricity, but waste and safety must be managed carefully.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying nuclear power releases large amounts of carbon dioxide during normal operation.",
      "Avoid: Ignoring radioactive waste.",
      "Avoid: Only giving one side of the argument.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Nuclear power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain how different methods of home insulation reduce thermal energy loss.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Loft insulation reduces conduction and convection through the roof.",
        keywords: [["loft", "insulation", "reduces"]],
      },
      {
        point:
          "Cavity wall insulation traps air and reduces conduction and convection through walls.",
        keywords: [["cavity", "wall", "insulation"]],
      },
      {
        point:
          "Double glazing reduces conduction through windows because air or gas is trapped between panes.",
        keywords: [["double", "glazing", "reduces"]],
      },
      {
        point: "Draught excluders reduce convection by stopping warm air escaping.",
        keywords: [["draught", "excluders", "reduce"]],
      },
      {
        point: "Shiny foil behind radiators reflects infrared radiation back into the room.",
        keywords: [["shiny", "foil", "behind"]],
      },
      {
        point: "Reducing thermal energy loss means less energy is needed for heating.",
        keywords: [["reducing", "thermal", "energy"]],
      },
    ],
    examinerKeywords: [
      "insulation",
      "conduction",
      "convection",
      "radiation",
      "loft insulation",
      "double glazing",
      "draught excluders",
      "thermal energy loss",
    ],
    modelAnswer:
      "Loft and cavity wall insulation trap air, reducing conduction and convection. Double glazing traps air or gas between glass panes, reducing conduction through windows. Draught excluders stop warm air escaping by convection. Reflective foil behind radiators reflects infrared radiation back into the room. These reduce heat loss, so less energy is needed for heating.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying insulation creates heat.",
      "Avoid: Only naming methods without explaining how they work.",
      "Avoid: Confusing conduction, convection and radiation.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Home insulation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how a fuse and earth wire protect a person using a metal-cased appliance.",
    marks: 6,
    markSchemePoints: [
      {
        point: "If the live wire touches the metal case, the case could become live.",
        keywords: [["live", "wire", "touches"]],
      },
      {
        point: "The earth wire provides a low-resistance path to ground.",
        keywords: [["earth", "wire", "provides"]],
      },
      {
        point: "A large current flows through the earth wire.",
        keywords: [["large", "current", "flows"]],
      },
      {
        point: "The large current melts the fuse.",
        keywords: [["large", "current", "melts"]],
      },
      {
        point: "The fuse breaks the circuit and disconnects the supply.",
        keywords: [["fuse", "breaks", "circuit"]],
      },
      {
        point: "This prevents a person touching the case from receiving an electric shock.",
        keywords: [["prevents", "person", "touching"]],
      },
    ],
    examinerKeywords: [
      "fuse",
      "earth wire",
      "metal case",
      "live wire",
      "low resistance path",
      "large current",
      "electric shock",
    ],
    modelAnswer:
      "If the live wire touches the metal case, the case could become live. The earth wire provides a low-resistance path to ground, so a large current flows. This melts the fuse, breaking the circuit and disconnecting the supply. The metal case is then not dangerous to touch, reducing the risk of electric shock.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying the earth wire carries current during normal operation.",
      "Avoid: Saying the fuse reduces voltage slowly.",
      "Avoid: Not linking large current to melting the fuse.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electrical safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText: "Explain why transformers are used in the National Grid to transmit electricity.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Step-up transformers increase voltage before transmission.",
        keywords: [["step-up", "transformers", "increase"]],
      },
      {
        point: "For the same power transfer, higher voltage means lower current.",
        keywords: [["same", "power", "transfer"]],
      },
      {
        point: "Lower current reduces heating in transmission cables.",
        keywords: [["lower", "current", "reduces"]],
      },
      {
        point: "Less energy is wasted to the surroundings.",
        keywords: [["less", "energy", "wasted"]],
      },
      {
        point: "Step-down transformers reduce voltage near consumers.",
        keywords: [["step-down", "transformers", "reduce"]],
      },
      {
        point: "This makes the electricity supply safer and more suitable for homes.",
        keywords: [["makes", "electricity", "supply"]],
      },
    ],
    examinerKeywords: [
      "transformers",
      "National Grid",
      "step-up",
      "step-down",
      "high voltage",
      "low current",
      "heating",
      "energy loss",
    ],
    modelAnswer:
      "Step-up transformers increase the voltage before electricity is sent through power lines. For the same power, a higher voltage means a lower current, so less energy is wasted as heating in the cables. Near homes, step-down transformers reduce the voltage to a safer, usable value.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying high current is used to reduce energy loss.",
      "Avoid: Forgetting the role of step-down transformers.",
      "Avoid: Saying transformers work with direct current.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Power transmission. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate the use of ionising radiation for medical imaging and cancer treatment.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ionising radiation can be used for imaging, such as X-rays or tracers.",
        keywords: [["ionising", "radiation", "used"]],
      },
      {
        point: "It can help diagnose conditions without surgery.",
        keywords: [["help", "diagnose", "conditions"]],
      },
      {
        point: "Radiotherapy can kill cancer cells.",
        keywords: [["radiotherapy", "kill", "cancer"]],
      },
      {
        point: "Ionising radiation can damage healthy cells or DNA.",
        keywords: [["ionising", "radiation", "damage"]],
      },
      {
        point:
          "Risks are reduced using shielding, careful targeting and the lowest effective dose.",
        keywords: [["risks", "reduced", "shielding"]],
      },
      {
        point:
          "A justified conclusion should state that benefits can outweigh risks when exposure is controlled.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "ionising radiation",
      "medical imaging",
      "tracers",
      "radiotherapy",
      "cancer cells",
      "DNA damage",
      "shielding",
      "dose",
    ],
    modelAnswer:
      "Ionising radiation is useful because X-rays and tracers can diagnose disease without surgery, and radiotherapy can kill cancer cells. However, it can damage healthy cells and DNA, increasing cancer risk. Doctors reduce risk using shielding, careful targeting and the lowest effective dose. The benefits can outweigh the risks when exposure is controlled.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying all medical radiation is completely safe.",
      "Avoid: Only discussing X-rays and not treatment.",
      "Avoid: Not giving a judgement.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Medical radiation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        point: "Light from distant galaxies is redshifted.",
        keywords: [["light", "distant", "galaxies"]],
      },
      {
        point: "Redshift shows that galaxies are moving away.",
        keywords: [["redshift", "shows", "galaxies"]],
      },
      {
        point: "More distant galaxies generally have greater redshift, showing expansion.",
        keywords: [["more", "distant", "galaxies"]],
      },
      {
        point: "Cosmic microwave background radiation is detected from all directions.",
        keywords: [["cosmic", "microwave", "background"]],
      },
      {
        point: "CMB radiation is leftover cooled radiation from the early Universe.",
        keywords: [["radiation", "leftover", "cooled"]],
      },
      {
        point: "Together, these support the idea that the Universe began hot and dense.",
        keywords: [["together", "these", "support"]],
      },
    ],
    examinerKeywords: [
      "redshift",
      "galaxies moving away",
      "expansion",
      "cosmic microwave background radiation",
      "early Universe",
      "Big Bang",
    ],
    modelAnswer:
      "Redshift shows that light from distant galaxies has increased in wavelength, so most galaxies are moving away. More distant galaxies have greater redshift, supporting expansion. Cosmic microwave background radiation comes from all directions and is interpreted as cooled radiation from the early Universe. Together, these support the Big Bang model of a hot, dense beginning.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying redshift means galaxies are moving towards us.",
      "Avoid: Saying CMB radiation is sound.",
      "Avoid: Only describing one piece of evidence.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Astrophysics evidence. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare wind, solar and fossil fuel power stations for electricity generation.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Wind and solar are renewable, while fossil fuels are non-renewable.",
        keywords: [["wind", "solar", "renewable"]],
      },
      {
        point: "Fossil fuels can provide a reliable output when demand changes.",
        keywords: [["fossil", "fuels", "provide"]],
      },
      {
        point: "Wind and solar output depends on weather and time of day.",
        keywords: [["wind", "solar", "output"]],
      },
      {
        point: "Fossil fuels release carbon dioxide when burned.",
        keywords: [["fossil", "fuels", "release"]],
      },
      {
        point: "Wind and solar produce no greenhouse gases during operation.",
        keywords: [["wind", "solar", "produce"]],
      },
      {
        point: "A balanced conclusion should consider reliability, pollution and sustainability.",
        keywords: [["balanced", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "wind",
      "solar",
      "fossil fuels",
      "renewable",
      "reliable",
      "carbon dioxide",
      "weather dependent",
      "sustainability",
    ],
    modelAnswer:
      "Wind and solar power are renewable and produce no greenhouse gases during operation, but their output depends on wind, sunlight and time of day. Fossil fuel power stations are more reliable and can respond to demand, but they use non-renewable fuels and release carbon dioxide. Overall, wind and solar are more sustainable, but storage or backup may be needed.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying wind and solar are always reliable.",
      "Avoid: Saying fossil fuels are renewable.",
      "Avoid: Only comparing cost without physics detail.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Renewable energy. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 2",
    paperType: "extended-response",
    questionType: "Describe",
    questionText: "Describe and explain the main stages in the life cycle of a massive star.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A star forms from a nebula as gas and dust collapse under gravity.",
        keywords: [["star", "forms", "nebula"]],
      },
      {
        point: "A protostar forms and temperature rises.",
        keywords: [["protostar", "forms", "temperature"]],
      },
      {
        point: "A main sequence star forms when hydrogen fusion becomes stable.",
        keywords: [["main", "sequence", "star"]],
      },
      {
        point: "After hydrogen runs low, the star expands into a red supergiant.",
        keywords: [["after", "hydrogen", "runs"]],
      },
      {
        point: "The star explodes as a supernova.",
        keywords: [["star", "explodes", "supernova"]],
      },
      {
        point: "The remaining core becomes a neutron star or black hole.",
        keywords: [["remaining", "core", "becomes"]],
      },
    ],
    examinerKeywords: [
      "nebula",
      "gravity",
      "protostar",
      "main sequence",
      "hydrogen fusion",
      "red supergiant",
      "supernova",
      "neutron star",
      "black hole",
    ],
    modelAnswer:
      "A massive star forms when gas and dust in a nebula collapse under gravity, forming a protostar. As temperature rises, hydrogen fusion starts and the star becomes main sequence. When hydrogen runs low, it expands into a red supergiant. It then explodes as a supernova, leaving a neutron star or black hole.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying massive stars become white dwarfs.",
      "Avoid: Forgetting fusion in the main sequence.",
      "Avoid: Missing the supernova stage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Star life cycles. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain how the particle model accounts for the pressure of a gas and the effect of increasing temperature at constant volume.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Gas particles move randomly in all directions.",
        keywords: [["particles", "move", "randomly"]],
      },
      {
        point: "They collide with the walls of the container.",
        keywords: [["collide", "walls", "container"]],
      },
      {
        point: "Collisions exert force on the walls and pressure is force per unit area.",
        keywords: [["collisions", "exert", "force"]],
      },
      {
        point: "Increasing temperature increases the particles' kinetic energy.",
        keywords: [["increasing", "temperature", "increases"]],
      },
      {
        point: "Particles move faster and collide more frequently with the walls.",
        keywords: [["particles", "move", "faster"]],
      },
      {
        point: "Collisions are harder, so pressure increases at constant volume.",
        keywords: [["collisions", "harder", "pressure"]],
      },
    ],
    examinerKeywords: [
      "gas particles",
      "random motion",
      "collisions",
      "force",
      "pressure",
      "temperature",
      "kinetic energy",
      "constant volume",
    ],
    modelAnswer:
      "Gas particles move randomly and collide with the container walls. These collisions exert a force on the walls, producing pressure. If temperature increases at constant volume, particles gain kinetic energy and move faster. They collide more often and with greater force, so the pressure increases.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying gas particles expand.",
      "Avoid: Not linking collisions to force.",
      "Avoid: Saying pressure increases because volume increases even though volume is constant.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure and particles. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText: "Evaluate the uses and dangers of ultraviolet, X-ray and gamma radiation.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Ultraviolet can be used in fluorescent lamps or security marking but can damage skin cells.",
        keywords: [["ultraviolet", "used", "fluorescent"]],
      },
      {
        point:
          "X-rays can be used for medical imaging because they pass through soft tissue but are absorbed by bone.",
        keywords: [["x-rays", "used", "medical"]],
      },
      {
        point: "Gamma radiation can be used for sterilising equipment or cancer treatment.",
        keywords: [["gamma", "radiation", "used"]],
      },
      {
        point: "X-rays and gamma rays are ionising and can damage DNA.",
        keywords: [["x-rays", "gamma", "rays"]],
      },
      {
        point: "Risk can be reduced by shielding, limiting exposure time and controlling dose.",
        keywords: [["risk", "reduced", "shielding"]],
      },
      {
        point: "A justified conclusion should link usefulness to controlled risk.",
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
      "Ultraviolet can be useful in fluorescent lamps and security marking, but it can damage skin cells. X-rays are useful for imaging bones because they pass through soft tissue but are absorbed by bone. Gamma rays can sterilise equipment and treat cancer. These radiations can be dangerous because they can ionise atoms and damage DNA. The risks are reduced by shielding, short exposure times and controlled doses.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying ultraviolet, X-rays and gamma are all harmless.",
      "Avoid: Giving uses but no dangers.",
      "Avoid: Not mentioning ionisation or DNA damage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electromagnetic spectrum. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare how a simple electric motor and a generator work.",
    marks: 6,
    markSchemePoints: [
      {
        point: "A motor uses a current-carrying coil in a magnetic field to produce a force.",
        keywords: [["motor", "uses", "current-carrying"]],
      },
      {
        point: "The motor effect causes rotation of the coil.",
        keywords: [["motor", "effect", "causes"]],
      },
      {
        point: "A generator rotates a coil in a magnetic field to induce a potential difference.",
        keywords: [["generator", "rotates", "coil"]],
      },
      {
        point: "A generator uses electromagnetic induction.",
        keywords: [["generator", "uses", "electromagnetic"]],
      },
      {
        point: "A motor transfers electrical energy to kinetic energy.",
        keywords: [["motor", "transfers", "electrical"]],
      },
      {
        point: "A generator transfers kinetic energy to electrical energy.",
        keywords: [["generator", "transfers", "kinetic"]],
      },
    ],
    examinerKeywords: [
      "motor",
      "generator",
      "coil",
      "magnetic field",
      "motor effect",
      "electromagnetic induction",
      "energy transfer",
    ],
    modelAnswer:
      "A motor uses the motor effect: a current-carrying coil in a magnetic field experiences forces that make it rotate, transferring electrical energy to kinetic energy. A generator does the reverse: a coil is rotated in a magnetic field, changing the magnetic field through the coil and inducing a potential difference, transferring kinetic energy to electrical energy.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying motors and generators work in exactly the same way.",
      "Avoid: Confusing motor effect with electromagnetic induction.",
      "Avoid: Not comparing energy transfers.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Motors and generators. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Evaluate",
    questionText:
      "A student investigates the relationship between force and extension for a spring. Evaluate how the method could be improved to produce more reliable results.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use a ruler fixed close to the spring to reduce parallax error.",
        keywords: [["ruler", "fixed", "close"]],
      },
      {
        point: "Measure extension rather than total length by subtracting original length.",
        keywords: [["measure", "extension", "rather"]],
      },
      {
        point: "Add masses gradually and avoid exceeding the limit of proportionality.",
        keywords: [["masses", "gradually", "avoid"]],
      },
      {
        point: "Repeat each force and calculate a mean extension.",
        keywords: [["repeat", "each", "force"]],
      },
      {
        point: "Use a pointer attached to the spring to improve reading accuracy.",
        keywords: [["pointer", "attached", "spring"]],
      },
      {
        point:
          "A justified conclusion should explain that these changes reduce uncertainty and improve reliability.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "spring",
      "force",
      "extension",
      "parallax",
      "limit of proportionality",
      "repeat",
      "mean",
      "uncertainty",
    ],
    modelAnswer:
      "The method can be improved by fixing a ruler close to the spring and using a pointer to reduce parallax error. The student should measure the original length and subtract it from each new length to find extension. Masses should be added gradually so the spring is not permanently deformed. Repeating each force and calculating a mean improves reliability and reduces the effect of random error.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using total length instead of extension.",
      "Avoid: Ignoring the limit of proportionality.",
      "Avoid: Only saying repeat without explaining why.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Practical evaluation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "A helmet protects a cyclist in a crash. Explain how ideas about momentum, force and pressure explain this protection.",
    marks: 6,
    markSchemePoints: [
      {
        point: "In a crash, the cyclist's head has a change in momentum.",
        keywords: [["crash", "cyclist", "head"]],
      },
      {
        point: "The helmet increases the time taken for the head to stop.",
        keywords: [["helmet", "increases", "time"]],
      },
      {
        point: "For the same change in momentum, increasing stopping time reduces force.",
        keywords: [["same", "change", "momentum"]],
      },
      {
        point: "The helmet spreads the force over a larger area.",
        keywords: [["helmet", "spreads", "force"]],
      },
      {
        point: "Pressure is reduced because pressure = force / area.",
        keywords: [["pressure", "reduced", "force"]],
      },
      {
        point: "The helmet absorbs or dissipates some energy as it deforms.",
        keywords: [["helmet", "absorbs", "dissipates"]],
      },
    ],
    examinerKeywords: [
      "helmet",
      "momentum",
      "stopping time",
      "force",
      "pressure",
      "area",
      "energy dissipated",
      "deformation",
    ],
    modelAnswer:
      "During a crash, the head's momentum changes to zero. A helmet increases the stopping time, so the force is smaller for the same change in momentum. It also spreads the force over a larger area, reducing pressure on the skull. Some energy is also dissipated as the helmet deforms.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying the helmet prevents momentum changing.",
      "Avoid: Not mentioning stopping time.",
      "Avoid: Forgetting pressure depends on area.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum and safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Evaluate",
    questionText:
      "Evaluate safety precautions for handling radioactive sources in a school laboratory.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Use tongs to keep the source away from the body.",
        keywords: [["tongs", "keep", "source"]],
      },
      {
        point: "Keep exposure time as short as possible.",
        keywords: [["keep", "exposure", "time"]],
      },
      {
        point: "Keep as much distance as possible from the source.",
        keywords: [["keep", "much", "distance"]],
      },
      {
        point: "Store the source in a lead-lined container when not in use.",
        keywords: [["store", "source", "lead-lined"]],
      },
      {
        point: "Point the source away from people and never touch it directly.",
        keywords: [["point", "source", "away"]],
      },
      {
        point: "A justified conclusion should link precautions to reducing radiation dose.",
        keywords: [["justified", "conclusion", "should"]],
      },
    ],
    examinerKeywords: [
      "radioactive source",
      "tongs",
      "exposure time",
      "distance",
      "lead-lined container",
      "radiation dose",
      "safety",
    ],
    modelAnswer:
      "Radioactive sources should be handled with tongs to increase distance from the body, and exposure time should be kept short. The source should be pointed away from people and stored in a lead-lined container when not being used. It should never be touched directly. These precautions reduce the radiation dose and lower the risk of cell damage.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying gloves alone fully protect from radiation.",
      "Avoid: Forgetting time, distance and shielding.",
      "Avoid: Suggesting direct handling of the source.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radioactivity safety. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "A lift motor raises a load. Explain why the input power is greater than the useful power output and how engineers could improve the efficiency.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Useful output power increases the gravitational potential energy of the load.",
        keywords: [["useful", "output", "power"]],
      },
      {
        point: "Some input energy is dissipated as thermal energy due to friction.",
        keywords: [["some", "input", "energy"]],
      },
      {
        point: "Some energy may be transferred as sound.",
        keywords: [["some", "energy", "transferred"]],
      },
      {
        point: "Therefore useful output power is less than input power.",
        keywords: [["therefore", "useful", "output"]],
      },
      {
        point: "Lubrication can reduce friction.",
        keywords: [["lubrication", "reduce", "friction"]],
      },
      {
        point:
          "Using better bearings or reducing moving mass can reduce wasted energy and improve efficiency.",
        keywords: [["better", "bearings", "reducing"]],
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
      "lubrication",
    ],
    modelAnswer:
      "The useful output power raises the load and increases its gravitational potential energy. Some input energy is wasted as thermal energy due to friction and as sound, so the useful output power is less than the input power. Engineers could reduce friction using lubrication and better bearings, reducing wasted energy and increasing efficiency.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying energy is destroyed.",
      "Avoid: Not identifying useful and wasted transfers.",
      "Avoid: Suggesting efficiency can be over 100%.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Efficiency and power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Compare",
    questionText: "Compare the use of ultrasound and X-rays in medical imaging.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Ultrasound uses sound waves with frequency above human hearing.",
        keywords: [["ultrasound", "uses", "sound"]],
      },
      {
        point: "Ultrasound reflects at boundaries between tissues and can form images.",
        keywords: [["ultrasound", "reflects", "boundaries"]],
      },
      {
        point: "Ultrasound is non-ionising and is suitable for imaging a fetus.",
        keywords: [["ultrasound", "non-ionising", "suitable"]],
      },
      {
        point: "X-rays are electromagnetic waves and are ionising.",
        keywords: [["x-rays", "electromagnetic", "waves"]],
      },
      {
        point: "X-rays pass through soft tissue but are absorbed more by bone.",
        keywords: [["x-rays", "pass", "through"]],
      },
      {
        point: "X-rays give clear bone images but carry a risk of cell or DNA damage.",
        keywords: [["x-rays", "give", "clear"]],
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
      "Ultrasound is a high-frequency sound wave that reflects at tissue boundaries, allowing images such as fetus scans to be formed. It is non-ionising. X-rays are ionising electromagnetic waves that pass through soft tissue but are absorbed more by bone, making them useful for bone images. However, X-rays can damage cells or DNA, so exposure must be limited.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying ultrasound is ionising.",
      "Avoid: Saying X-rays are sound waves.",
      "Avoid: Only discussing uses with no safety comparison.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Wave applications. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "extended-response",
    questionType: "Explain",
    questionText:
      "Explain why a submarine experiences greater pressure as it dives deeper and how this affects its design.",
    marks: 6,
    markSchemePoints: [
      {
        point: "Pressure in a liquid increases with depth.",
        keywords: [["pressure", "liquid", "increases"]],
      },
      {
        point: "At greater depth there is more water above the submarine.",
        keywords: [["greater", "depth", "more"]],
      },
      {
        point: "The weight of this water produces a greater force per unit area.",
        keywords: [["weight", "water", "produces"]],
      },
      {
        point: "The pressure acts in all directions on the submarine.",
        keywords: [["pressure", "acts", "directions"]],
      },
      {
        point: "The submarine needs a strong hull to withstand the large pressure difference.",
        keywords: [["submarine", "needs", "strong"]],
      },
      {
        point: "The hull shape and materials reduce the risk of crushing.",
        keywords: [["hull", "shape", "materials"]],
      },
    ],
    examinerKeywords: [
      "submarine",
      "pressure",
      "depth",
      "weight of water",
      "force per unit area",
      "strong hull",
      "pressure difference",
    ],
    modelAnswer:
      "As a submarine dives deeper, there is more water above it. The weight of this water produces a greater force per unit area, so liquid pressure increases with depth. Pressure acts in all directions, so the submarine needs a strong hull and suitable shape to withstand the large pressure difference and avoid being crushed.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Saying pressure only acts downward.",
      "Avoid: Saying pressure decreases with depth.",
      "Avoid: Not linking pressure to force per unit area.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density and pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-high-mark-synoptic-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "high-mark-synoptic",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Plan",
    questionText:
      "Plan an experiment to compare the effectiveness of different materials as thermal insulators.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes identical beakers, hot water, thermometer or temperature probe, stopwatch and insulating materials.",
        keywords: [["apparatus", "includes", "identical"]],
      },
      {
        point: "Independent variable is type of insulating material.",
        keywords: [["independent", "variable", "type"]],
      },
      {
        point: "Dependent variable is temperature drop over a fixed time or rate of cooling.",
        keywords: [["dependent", "variable", "temperature"]],
      },
      {
        point:
          "Control variables include volume of water, starting temperature, beaker size and thickness of insulation.",
        keywords: [["control", "variables", "include"]],
      },
      {
        point: "Record temperature at regular intervals and repeat for each material.",
        keywords: [["record", "temperature", "regular"]],
      },
      {
        point:
          "Process data by calculating mean temperature drop or plotting cooling curves; safety includes care with hot water.",
        keywords: [["process", "data", "calculating"]],
      },
    ],
    examinerKeywords: [
      "thermal insulation",
      "independent variable",
      "temperature drop",
      "rate of cooling",
      "control variables",
      "repeat",
      "cooling curve",
      "hot water safety",
    ],
    modelAnswer:
      "Wrap identical beakers with equal thicknesses of different insulating materials. Add the same volume of hot water at the same starting temperature to each beaker. Measure temperature at regular time intervals for a fixed time. Keep beaker size and room conditions constant. Repeat and calculate mean temperature drop or plot cooling curves. Handle hot water carefully.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Using different volumes of water.",
      "Avoid: Changing both material and thickness.",
      "Avoid: Only measuring one final temperature without timing.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Practical synoptic. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student uses two light gates to measure the speed of a trolley. The light gates are 0.80 m apart and the trolley takes 1.6 s to travel between them. Calculate the average speed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: speed = distance / time",
        keywords: [["speed", "distance", "time"]],
      },
      {
        point: "Substitution: speed = 0.80 / 1.6",
        keywords: [["substitution", "speed"]],
      },
      {
        point: "Answer: 0.50 m/s",
        keywords: [["light gates", "speed"]],
      },
    ],
    examinerKeywords: ["light gates", "speed", "distance", "time", "m/s"],
    modelAnswer: "speed = distance / time = 0.80 / 1.6 = 0.50 m/s.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying distance by time.",
      "Avoid: Using the full ramp length instead of light gate separation.",
      "Avoid: Forgetting the unit m/s.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Motion practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A spring has an original length of 12.0 cm. When a force is added, its length becomes 16.5 cm. Calculate the extension in metres.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: extension = new length - original length",
        keywords: [["extension", "length", "original"]],
      },
      {
        point: "Substitution: extension = 16.5 - 12.0 = 4.5 cm",
        keywords: [["substitution", "extension"]],
      },
      {
        point: "Convert to metres: 4.5 cm = 0.045 m",
        keywords: [["convert", "metres"]],
      },
    ],
    examinerKeywords: ["extension", "new length", "original length", "convert cm to m"],
    modelAnswer: "extension = 16.5 - 12.0 = 4.5 cm = 0.045 m.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using total length as extension.",
      "Avoid: Forgetting to convert cm to m.",
      "Avoid: Subtracting in the wrong order.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Force and extension. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A force-extension graph for a spring is a straight line through the origin up to 5 N. Explain what this shows about the spring.",
    marks: 3,
    markSchemePoints: [
      {
        point:
          "A straight line through the origin shows force is directly proportional to extension.",
        keywords: [["straight", "line", "through"]],
      },
      {
        point: "The spring obeys Hooke's law up to 5 N.",
        keywords: [["spring", "obeys", "hooke"]],
      },
      {
        point: "5 N is within or at the limit of proportionality for this data.",
        keywords: [["within", "limit", "proportionality"]],
      },
    ],
    examinerKeywords: [
      "force-extension graph",
      "straight line",
      "origin",
      "directly proportional",
      "Hooke's law",
      "limit of proportionality",
    ],
    modelAnswer:
      "The straight line through the origin shows force is directly proportional to extension, so the spring obeys Hooke's law up to 5 N.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying the spring has no extension.",
      "Avoid: Not mentioning direct proportionality.",
      "Avoid: Saying Hooke's law applies beyond all forces.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Spring graph. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student measures the mass of a liquid and measuring cylinder as 145 g. The empty cylinder has a mass of 65 g. The liquid volume is 100 cm³. Calculate the density of the liquid.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Mass of liquid = 145 - 65 = 80 g",
        keywords: [["mass", "liquid"]],
      },
      {
        point: "Formula: density = mass / volume",
        keywords: [["density", "mass", "volume"]],
      },
      {
        point: "Substitution: density = 80 / 100",
        keywords: [["substitution", "density"]],
      },
      {
        point: "Answer: 0.80 g/cm³",
        keywords: [["density", "liquid"]],
      },
    ],
    examinerKeywords: ["density", "liquid", "mass by subtraction", "volume", "g/cm³"],
    modelAnswer:
      "Mass of liquid = 145 - 65 = 80 g. Density = mass / volume = 80 / 100 = 0.80 g/cm³.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using 145 g as the mass of liquid.",
      "Avoid: Multiplying mass by volume.",
      "Avoid: Forgetting the unit g/cm³.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate the current-potential difference relationship for a fixed resistor.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes power supply, fixed resistor, ammeter, voltmeter, switch and variable resistor.",
        keywords: [["apparatus", "includes", "power"]],
      },
      {
        point: "Connect the ammeter in series with the resistor.",
        keywords: [["connect", "ammeter", "series"]],
      },
      {
        point: "Connect the voltmeter in parallel across the resistor.",
        keywords: [["connect", "voltmeter", "parallel"]],
      },
      {
        point: "Use the variable resistor to change the potential difference.",
        keywords: [["variable", "resistor", "change"]],
      },
      {
        point: "Record current and potential difference for several readings.",
        keywords: [["record", "current", "potential"]],
      },
      {
        point:
          "Repeat readings, plot current against potential difference and draw a line of best fit.",
        keywords: [["repeat", "readings", "plot"]],
      },
    ],
    examinerKeywords: [
      "fixed resistor",
      "ammeter",
      "series",
      "voltmeter",
      "parallel",
      "variable resistor",
      "I-V graph",
    ],
    modelAnswer:
      "Connect the fixed resistor in series with an ammeter, switch, power supply and variable resistor. Connect a voltmeter in parallel across the fixed resistor. Change the potential difference using the variable resistor and record V and I for several values. Repeat readings and plot current against potential difference with a line of best fit.",
    difficulty: "medium",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Connecting the ammeter in parallel.",
      "Avoid: Connecting the voltmeter in series.",
      "Avoid: Only taking one reading.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Circuit practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A resistor has a potential difference of 4.0 V and a current of 0.20 A. Calculate its resistance.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
      {
        point: "Rearrangement: resistance = voltage / current",
        keywords: [["rearrangement", "resistance", "voltage"]],
      },
      {
        point: "Substitution: resistance = 4.0 / 0.20",
        keywords: [["substitution", "resistance"]],
      },
      {
        point: "Answer: 20 Ω",
        keywords: [["resistance", "voltage"]],
      },
    ],
    examinerKeywords: ["resistance", "voltage", "current", "Ohm's law", "Ω"],
    modelAnswer: "R = V / I = 4.0 / 0.20 = 20 Ω.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Multiplying voltage by current.",
      "Avoid: Writing V as the unit.",
      "Avoid: Using current divided by voltage.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: I-V data. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A 1.0 kg metal block is heated with 4200 J of energy. Its temperature rises by 10 °C. Calculate the specific heat capacity.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Formula: energy = mass × specific heat capacity × temperature change",
        keywords: [["energy", "mass", "specific"]],
      },
      {
        point: "Rearrangement: specific heat capacity = energy / (mass × temperature change)",
        keywords: [["rearrangement", "specific", "heat"]],
      },
      {
        point: "Substitution: c = 4200 / (1.0 × 10)",
        keywords: [["substitution", "4200"]],
      },
      {
        point: "Answer: 420 J/kg °C",
        keywords: [["specific heat capacity", "energy"]],
      },
    ],
    examinerKeywords: ["specific heat capacity", "energy", "mass", "temperature rise", "J/kg °C"],
    modelAnswer: "E = mcΔT, so c = 4200 / (1.0 × 10) = 420 J/kg °C.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Using final temperature instead of temperature rise.",
      "Avoid: Forgetting to divide by mass and temperature change.",
      "Avoid: Giving the unit J.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "Suggest two improvements to reduce energy loss in a specific heat capacity experiment using a metal block.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Insulate the block to reduce thermal energy loss to the surroundings.",
        keywords: [["insulate", "block", "reduce"]],
      },
      {
        point:
          "Ensure the heater fits tightly in the block or add thermal paste to improve energy transfer.",
        keywords: [["ensure", "heater", "fits"]],
      },
    ],
    examinerKeywords: [
      "specific heat capacity",
      "insulation",
      "thermal energy loss",
      "heater",
      "thermal contact",
    ],
    modelAnswer:
      "Insulate the metal block and make sure the heater fits tightly in the hole so more energy is transferred to the block.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying use a hotter room without explaining energy loss.",
      "Avoid: Changing the mass of the block instead of improving the method.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity method. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A ripple tank produces 8 waves in 4.0 s. The wavelength is 0.035 m. Calculate the wave speed.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Formula: frequency = number of waves / time",
        keywords: [["frequency", "waves", "time"]],
      },
      {
        point: "Substitution: frequency = 8 / 4.0 = 2.0 Hz",
        keywords: [["substitution", "frequency"]],
      },
      {
        point: "Formula: wave speed = frequency × wavelength",
        keywords: [["wave", "speed", "frequency"]],
      },
      {
        point: "Substitution: wave speed = 2.0 × 0.035",
        keywords: [["substitution", "wave", "speed"]],
      },
      {
        point: "Answer: 0.070 m/s",
        keywords: [["ripple tank", "frequency"]],
      },
    ],
    examinerKeywords: ["ripple tank", "frequency", "wavelength", "wave speed", "m/s"],
    modelAnswer:
      "frequency = 8 / 4.0 = 2.0 Hz. wave speed = frequency × wavelength = 2.0 × 0.035 = 0.070 m/s.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Using 4.0 / 8 for frequency.",
      "Avoid: Forgetting to calculate frequency first.",
      "Avoid: Giving the answer in Hz.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Wave speed practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A beaker of hot water cools from 80 °C to 68 °C in 6.0 minutes. Calculate the average rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Temperature change = 80 - 68 = 12 °C",
        keywords: [["temperature", "change"]],
      },
      {
        point: "Formula: rate of cooling = temperature change / time",
        keywords: [["rate", "cooling", "temperature"]],
      },
      {
        point: "Substitution: rate = 12 / 6.0",
        keywords: [["substitution", "rate"]],
      },
      {
        point: "Answer: 2.0 °C/min",
        keywords: [["cooling", "temperature change"]],
      },
    ],
    examinerKeywords: ["cooling", "temperature change", "time", "rate", "°C/min"],
    modelAnswer: "Temperature change = 12 °C. Rate of cooling = 12 / 6.0 = 2.0 °C/min.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Using final temperature only.",
      "Avoid: Subtracting time from temperature.",
      "Avoid: Forgetting the unit °C/min.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Cooling practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A detector records a background count rate of 18 counts per minute. With a source present, the count rate is 145 counts per minute. Calculate the corrected count rate from the source.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: corrected count rate = measured count rate - background count rate",
        keywords: [["corrected", "count", "rate"]],
      },
      {
        point: "Substitution: corrected count rate = 145 - 18",
        keywords: [["substitution", "corrected", "count"]],
      },
      {
        point: "Answer: 127 counts per minute",
        keywords: [["counts", "minute"]],
      },
    ],
    examinerKeywords: [
      "background count",
      "corrected count rate",
      "source",
      "subtract",
      "counts per minute",
    ],
    modelAnswer: "corrected count rate = 145 - 18 = 127 counts per minute.",
    difficulty: "easy",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Adding background count rate.",
      "Avoid: Ignoring background radiation.",
      "Avoid: Forgetting the unit counts per minute.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radiation count rate. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText:
      "Describe how to investigate how absorber thickness affects corrected count rate from a radioactive source.",
    marks: 6,
    markSchemePoints: [
      {
        point:
          "Apparatus includes radioactive source, Geiger-Muller tube, counter, absorber sheets, ruler and tongs.",
        keywords: [["apparatus", "includes", "radioactive"]],
      },
      {
        point: "Measure background count rate first.",
        keywords: [["measure", "background", "count"]],
      },
      {
        point: "Keep the source-detector distance constant.",
        keywords: [["keep", "source-detector", "distance"]],
      },
      {
        point: "Place different thicknesses of absorber between source and detector.",
        keywords: [["place", "different", "thicknesses"]],
      },
      {
        point: "Measure count rate for the same time each trial and subtract background.",
        keywords: [["measure", "count", "rate"]],
      },
      {
        point:
          "Repeat readings, calculate means and follow safety precautions: tongs, distance and short exposure time.",
        keywords: [["repeat", "readings", "calculate"]],
      },
    ],
    examinerKeywords: [
      "absorber thickness",
      "Geiger-Muller tube",
      "background count",
      "corrected count rate",
      "fixed distance",
      "repeat",
      "safety",
    ],
    modelAnswer:
      "Measure background count rate first. Place the source a fixed distance from a GM tube. Put increasing thicknesses of absorber between the source and detector. Measure count rate for the same time, subtract background, repeat and calculate means. Use tongs, keep distance and minimise exposure time.",
    difficulty: "hard",
    suggestedMinutes: 9,
    hints: [
      "Avoid: Changing the source-detector distance.",
      "Avoid: Not subtracting background count.",
      "Avoid: Handling the source directly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Radiation absorption. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Calculate",
    questionText:
      "A straight-line graph has points on the line at (2.0, 5.0) and (8.0, 17.0). Calculate the gradient.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: gradient = change in y / change in x",
        keywords: [["gradient", "change"]],
      },
      {
        point: "Substitution: gradient = (17.0 - 5.0) / (8.0 - 2.0)",
        keywords: [["substitution", "gradient"]],
      },
      {
        point: "Answer: 2.0",
        keywords: [["gradient", "change in y"]],
      },
    ],
    examinerKeywords: ["gradient", "change in y", "change in x", "line of best fit"],
    modelAnswer: "gradient = (17.0 - 5.0) / (8.0 - 2.0) = 12.0 / 6.0 = 2.0.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing change in x by change in y.",
      "Avoid: Using two points not on the line.",
      "Avoid: Subtracting coordinates in inconsistent order.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Graph gradient. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Calculate",
    questionText:
      "A length is measured as 42.0 cm with an uncertainty of ±0.2 cm. Calculate the percentage uncertainty.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Formula: percentage uncertainty = uncertainty / measured value × 100",
        keywords: [["percentage", "uncertainty", "measured"]],
      },
      {
        point: "Substitution: percentage uncertainty = 0.2 / 42.0 × 100",
        keywords: [["substitution", "percentage", "uncertainty"]],
      },
      {
        point: "Answer: 0.48% or 0.5% to 1 significant figure",
        keywords: [["significant", "figure"]],
      },
    ],
    examinerKeywords: ["percentage uncertainty", "uncertainty", "measured value", "percentage"],
    modelAnswer: "percentage uncertainty = 0.2 / 42.0 × 100 = 0.48%, which is about 0.5%.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing measured value by uncertainty.",
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Leaving off the percentage sign.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Uncertainty. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "data-response",
    questionType: "Calculate",
    questionText:
      "A student records times of 1.21 s, 1.19 s, 1.20 s and 1.82 s. Identify the anomaly and calculate the mean time excluding it.",
    marks: 4,
    markSchemePoints: [
      {
        point: "Anomaly: 1.82 s",
        keywords: [["anomaly"]],
      },
      {
        point: "Formula: mean = sum of valid readings / number of valid readings",
        keywords: [["mean", "valid", "readings"]],
      },
      {
        point: "Substitution: mean = (1.21 + 1.19 + 1.20) / 3",
        keywords: [["substitution", "mean"]],
      },
      {
        point: "Answer: 1.20 s",
        keywords: [["anomaly", "mean"]],
      },
    ],
    examinerKeywords: ["anomaly", "mean", "repeat readings", "exclude", "seconds"],
    modelAnswer:
      "The anomaly is 1.82 s. Mean excluding it = (1.21 + 1.19 + 1.20) / 3 = 3.60 / 3 = 1.20 s.",
    difficulty: "medium",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Including the anomaly in the mean.",
      "Avoid: Calling 1.19 s the anomaly.",
      "Avoid: Dividing by 4 after excluding the anomaly.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Mean and anomalies. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "State",
    questionText:
      "In an experiment on resistance of a wire, state two control variables that should be kept constant when changing the length of the wire.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Keep the material of the wire constant.",
        keywords: [["keep", "material", "wire"]],
      },
      {
        point:
          "Keep the diameter or thickness of the wire constant; temperature should also be kept constant.",
        keywords: [["keep", "diameter", "thickness"]],
      },
    ],
    examinerKeywords: [
      "resistance wire",
      "material",
      "diameter",
      "thickness",
      "temperature",
      "control variable",
    ],
    modelAnswer: "The material of the wire and the diameter of the wire should be kept constant.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Saying length should be kept constant when length is the independent variable.",
      "Avoid: Giving current as a control variable without explaining heating effects.",
      "Avoid: Not naming specific variables.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Resistance wire practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Explain",
    questionText:
      "Explain why timing 20 oscillations of a pendulum gives a more accurate period than timing one oscillation.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Timing many oscillations gives a larger measured time.",
        keywords: [["timing", "many", "oscillations"]],
      },
      {
        point: "Reaction time uncertainty is a smaller percentage of the total time.",
        keywords: [["reaction", "time", "uncertainty"]],
      },
      {
        point: "The period is found by dividing the total time by 20.",
        keywords: [["period", "found", "dividing"]],
      },
    ],
    examinerKeywords: [
      "pendulum",
      "oscillations",
      "period",
      "reaction time",
      "percentage uncertainty",
      "divide by 20",
    ],
    modelAnswer:
      "Timing 20 oscillations gives a larger total time, so reaction-time uncertainty is a smaller percentage. The period is then found by dividing the total time by 20.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying 20 oscillations changes the period.",
      "Avoid: Not mentioning reaction time.",
      "Avoid: Forgetting to divide by 20.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pendulum practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Describe",
    questionText: "Describe how to investigate reflection from a plane mirror using a ray box.",
    marks: 5,
    markSchemePoints: [
      {
        point: "Apparatus includes ray box, plane mirror, paper, pencil, ruler and protractor.",
        keywords: [["apparatus", "includes", "plane"]],
      },
      {
        point: "Draw around the mirror and draw a normal at 90° to the mirror.",
        keywords: [["draw", "around", "mirror"]],
      },
      {
        point: "Shine a ray at the mirror and mark the incident and reflected rays.",
        keywords: [["shine", "mirror", "mark"]],
      },
      {
        point: "Measure the angle of incidence and angle of reflection from the normal.",
        keywords: [["measure", "angle", "incidence"]],
      },
      {
        point: "Repeat for different angles and compare the angles.",
        keywords: [["repeat", "different", "angles"]],
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
      "Place a plane mirror on paper and draw around it. Draw a normal at right angles to the mirror. Shine a ray at the mirror using a ray box and mark the incident and reflected rays. Measure both angles from the normal with a protractor. Repeat for different incident angles.",
    difficulty: "medium",
    suggestedMinutes: 8,
    hints: [
      "Avoid: Measuring angles from the mirror surface.",
      "Avoid: Not drawing the normal at 90°.",
      "Avoid: Only taking one reading.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Light practical. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "graph",
    questionType: "Explain",
    questionText:
      "A cooling curve becomes less steep as time increases. Explain what this shows about the rate of cooling.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Gradient of a temperature-time graph represents rate of temperature change.",
        keywords: [["gradient", "temperature-time", "graph"]],
      },
      {
        point: "A less steep gradient means the rate of cooling decreases.",
        keywords: [["less", "steep", "gradient"]],
      },
      {
        point:
          "This happens as the temperature difference between the object and surroundings becomes smaller.",
        keywords: [["happens", "temperature", "difference"]],
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
      "The gradient of a cooling curve shows the rate of cooling. As the graph becomes less steep, the rate of cooling decreases because the temperature difference between the water and surroundings becomes smaller.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Saying a less steep graph means faster cooling.",
      "Avoid: Not linking gradient to rate.",
      "Avoid: Ignoring the temperature difference.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Cooling graph. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-required-practical-data-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "required-practical-data-analysis",
    paper: "Paper 1 / Paper 2",
    paperType: "practical",
    questionType: "Suggest",
    questionText:
      "A student measures the density of an irregular stone using a measuring cylinder. Suggest two sources of uncertainty and how each could be reduced.",
    marks: 4,
    markSchemePoints: [
      {
        point:
          "Uncertainty from reading the water level can be reduced by reading the bottom of the meniscus at eye level.",
        keywords: [["uncertainty", "reading", "water"]],
      },
      {
        point:
          "Uncertainty from small volume change can be reduced by using a narrower measuring cylinder with smaller scale divisions.",
        keywords: [["uncertainty", "small", "volume"]],
      },
      {
        point:
          "Air bubbles on the stone can affect volume and can be reduced by gently tapping or fully wetting the stone.",
        keywords: [["bubbles", "stone", "affect"]],
      },
      {
        point:
          "Water splashing or overflow can be reduced by lowering the stone carefully using a thread.",
        keywords: [["water", "splashing", "overflow"]],
      },
    ],
    examinerKeywords: [
      "density",
      "irregular stone",
      "measuring cylinder",
      "meniscus",
      "eye level",
      "air bubbles",
      "uncertainty",
    ],
    modelAnswer:
      "Reading the water level can cause uncertainty, so the student should read the bottom of the meniscus at eye level. A small volume change gives a large percentage uncertainty, so a narrower measuring cylinder with smaller divisions could be used. Air bubbles should also be removed by lowering the stone carefully.",
    difficulty: "hard",
    suggestedMinutes: 6,
    hints: [
      "Avoid: Only saying human error.",
      "Avoid: Not explaining how to reduce the uncertainty.",
      "Avoid: Forgetting that volume is measured by displacement.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Practical evaluation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-001",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange speed = distance / time to make distance the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with speed = distance / time.",
        keywords: [["start", "speed", "distance"]],
      },
      {
        point: "Multiply both sides by time.",
        keywords: [["multiply", "both", "sides"]],
      },
      {
        point: "Answer: distance = speed × time.",
        keywords: [["distance", "speed", "time"]],
      },
    ],
    examinerKeywords: ["speed", "distance", "time", "rearrange", "multiply"],
    modelAnswer: "speed = distance / time, so distance = speed × time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing distance = speed / time.", "Avoid: Forgetting to multiply by time."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Speed equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-002",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        keywords: [["acceleration", "change", "velocity"]],
      },
    ],
    examinerKeywords: ["acceleration", "change in velocity", "time"],
    modelAnswer: "acceleration = change in velocity / time",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Using final velocity instead of change in velocity.",
      "Avoid: Writing acceleration = time / change in velocity.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Acceleration equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-003",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange force = mass × acceleration to make acceleration the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with force = mass × acceleration.",
        keywords: [["start", "force", "mass"]],
      },
      {
        point: "Divide both sides by mass.",
        keywords: [["divide", "both", "sides"]],
      },
      {
        point: "Answer: acceleration = force / mass.",
        keywords: [["acceleration", "force", "mass"]],
      },
    ],
    examinerKeywords: ["force", "mass", "acceleration", "rearrange", "divide"],
    modelAnswer: "F = ma, so acceleration = force / mass.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing acceleration = mass / force.", "Avoid: Multiplying force by mass."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Force equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-004",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        keywords: [["weight", "mass", "gravitational"]],
      },
    ],
    examinerKeywords: ["weight", "mass", "gravitational field strength"],
    modelAnswer: "weight = mass × gravitational field strength",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Writing weight = mass / gravitational field strength.",
      "Avoid: Using kg as the unit for weight.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Weight equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-005",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Correct",
    questionText: "A student writes momentum = velocity / mass. Correct the equation.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Momentum is found by multiplying mass and velocity.",
        keywords: [["momentum", "found", "multiplying"]],
      },
      {
        point: "Correct equation: momentum = mass × velocity.",
        keywords: [["correct", "equation", "momentum"]],
      },
    ],
    examinerKeywords: ["momentum", "mass", "velocity", "multiply"],
    modelAnswer: "The correct equation is momentum = mass × velocity.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Dividing velocity by mass.", "Avoid: Using acceleration instead of velocity."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Momentum equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-006",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange work done = force × distance to make force the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with work done = force × distance.",
        keywords: [["start", "work", "done"]],
      },
      {
        point: "Divide both sides by distance.",
        keywords: [["divide", "both", "sides"]],
      },
      {
        point: "Answer: force = work done / distance.",
        keywords: [["force", "work", "done"]],
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
      "Edexcel International GCSE Physics 4PH1: Work done equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-007",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking power, energy transferred and time.",
    marks: 1,
    markSchemePoints: [
      {
        point: "power = energy transferred / time",
        keywords: [["power", "energy", "transferred"]],
      },
    ],
    examinerKeywords: ["power", "energy transferred", "time"],
    modelAnswer: "power = energy transferred / time",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Writing power = energy transferred × time.",
      "Avoid: Using current and voltage for every power question without checking the data.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Power equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-008",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        keywords: [["efficiency", "useful", "output"]],
      },
      {
        point: "Accept equivalent equation using useful output power and total input power.",
        keywords: [["accept", "equivalent", "equation"]],
      },
    ],
    examinerKeywords: ["efficiency", "useful output", "total input", "× 100", "percentage"],
    modelAnswer: "efficiency = useful output energy / total input energy × 100",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy as the useful output.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Efficiency equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-009",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange charge = current × time to make current the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with charge = current × time.",
        keywords: [["start", "charge", "current"]],
      },
      {
        point: "Divide both sides by time.",
        keywords: [["divide", "both", "sides"]],
      },
      {
        point: "Answer: current = charge / time.",
        keywords: [["current", "charge", "time"]],
      },
    ],
    examinerKeywords: ["charge", "current", "time", "rearrange"],
    modelAnswer: "Q = It, so current = charge / time.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing current = charge × time.", "Avoid: Dividing time by charge."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Charge equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-010",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText: "State the equation linking voltage, current and resistance.",
    marks: 1,
    markSchemePoints: [
      {
        point: "voltage = current × resistance",
        keywords: [["voltage", "current", "resistance"]],
      },
    ],
    examinerKeywords: ["voltage", "current", "resistance", "V = IR"],
    modelAnswer: "voltage = current × resistance",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: [
      "Avoid: Writing voltage = current / resistance.",
      "Avoid: Confusing resistance with power.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Ohm's law. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-011",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange electrical power = current × voltage to make voltage the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with power = current × voltage.",
        keywords: [["start", "power", "current"]],
      },
      {
        point: "Divide both sides by current.",
        keywords: [["divide", "both", "sides"]],
      },
      {
        point: "Answer: voltage = power / current.",
        keywords: [["voltage", "power", "current"]],
      },
    ],
    examinerKeywords: ["power", "current", "voltage", "rearrange"],
    modelAnswer: "P = IV, so voltage = power / current.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing voltage = power × current.", "Avoid: Dividing current by power."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Electrical power. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-012",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange density = mass / volume to make mass the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with density = mass / volume.",
        keywords: [["start", "density", "mass"]],
      },
      {
        point: "Multiply both sides by volume.",
        keywords: [["multiply", "both", "sides"]],
      },
      {
        point: "Answer: mass = density × volume.",
        keywords: [["mass", "density", "volume"]],
      },
    ],
    examinerKeywords: ["density", "mass", "volume", "rearrange"],
    modelAnswer: "density = mass / volume, so mass = density × volume.",
    difficulty: "easy",
    suggestedMinutes: 3,
    hints: ["Avoid: Writing mass = density / volume.", "Avoid: Forgetting to multiply by volume."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Density equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-013",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
    modelAnswer: "pressure = force / area",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing pressure = force × area.", "Avoid: Using volume instead of area."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Pressure equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-014",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Write",
    questionText:
      "Write the equation for pressure difference in a liquid in terms of height, density and gravitational field strength.",
    marks: 2,
    markSchemePoints: [
      {
        point: "pressure difference = height × density × gravitational field strength",
        keywords: [["pressure", "difference", "height"]],
      },
      {
        point: "Symbols may be written as p = hρg.",
        keywords: [["symbols", "written"]],
      },
    ],
    examinerKeywords: [
      "pressure difference",
      "height",
      "density",
      "gravitational field strength",
      "hρg",
    ],
    modelAnswer: "pressure difference = height × density × gravitational field strength.",
    difficulty: "medium",
    suggestedMinutes: 3,
    hints: [
      "Avoid: Using pressure = force / area for liquid depth questions.",
      "Avoid: Forgetting gravitational field strength.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Liquid pressure. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-015",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "Rearrange",
    questionText: "Rearrange wave speed = frequency × wavelength to make wavelength the subject.",
    marks: 2,
    markSchemePoints: [
      {
        point: "Start with wave speed = frequency × wavelength.",
        keywords: [["start", "wave", "speed"]],
      },
      {
        point: "Divide both sides by frequency.",
        keywords: [["divide", "both", "sides"]],
      },
      {
        point: "Answer: wavelength = wave speed / frequency.",
        keywords: [["wavelength", "wave", "speed"]],
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
      "Edexcel International GCSE Physics 4PH1: Wave equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-016",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
    modelAnswer: "frequency = 1 / period",
    difficulty: "easy",
    suggestedMinutes: 2,
    hints: ["Avoid: Writing frequency = period.", "Avoid: Writing frequency = period / 1."],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Frequency and period. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-017",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "calculation",
    questionType: "Determine",
    questionText:
      "A count rate halves from 800 counts per minute to 100 counts per minute. Determine the number of half-lives.",
    marks: 3,
    markSchemePoints: [
      {
        point: "800 to 400 is one half-life.",
        keywords: [["half-life"]],
      },
      {
        point: "400 to 200 is two half-lives.",
        keywords: [["half-lives"]],
      },
      {
        point: "200 to 100 is three half-lives.",
        keywords: [["three", "half-lives"]],
      },
      {
        point: "Answer: 3 half-lives.",
        keywords: [["half-lives"]],
      },
    ],
    examinerKeywords: ["half-life", "count rate", "halve", "counts per minute"],
    modelAnswer: "800 halves to 400, then 200, then 100. Therefore 3 half-lives have passed.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Dividing 800 by 100 and saying 8 half-lives.",
      "Avoid: Subtracting a constant amount each half-life.",
      "Avoid: Not counting each halving.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Half-life. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-018",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        keywords: [["secondary", "voltage", "primary"]],
      },
      {
        point: "Accept Vs / Vp = Ns / Np.",
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
    suggestedMinutes: 3,
    hints: [
      "Avoid: Mixing primary voltage with secondary turns in the same ratio.",
      "Avoid: Writing voltage ratio upside down without matching the turns ratio.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Transformer equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-019",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
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
        point: "Start with energy = mass × specific heat capacity × temperature change.",
        keywords: [["start", "energy", "mass"]],
      },
      {
        point: "Divide both sides by mass × temperature change.",
        keywords: [["divide", "both", "sides"]],
      },
      {
        point: "Answer: specific heat capacity = energy / (mass × temperature change).",
        keywords: [["specific", "heat", "capacity"]],
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
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting brackets around mass × temperature change.",
      "Avoid: Writing c = E × m × ΔT.",
      "Avoid: Using final temperature instead of temperature change.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Specific heat capacity equation. Quote the equation, substitute clearly and include correct units.",
  },
  {
    id: "edexcel-igcse-physics-formula-equation-020",
    qualification: "IGCSE",
    examBoard: "edexcel-igcse",
    subject: "physics",
    topic: "formula-equation-practice",
    paper: "Paper 1 / Paper 2",
    paperType: "equation",
    questionType: "State",
    questionText:
      "A question gives useful output energy, total input energy and asks for percentage efficiency. State the correct equation and explain why multiplying by 100 is needed.",
    marks: 3,
    markSchemePoints: [
      {
        point: "Equation: efficiency = useful output energy / total input energy × 100.",
        keywords: [["equation", "efficiency", "useful"]],
      },
      {
        point: "The ratio useful output / total input gives efficiency as a decimal.",
        keywords: [["ratio", "useful", "output"]],
      },
      {
        point: "Multiplying by 100 converts the decimal to a percentage.",
        keywords: [["multiplying", "converts", "decimal"]],
      },
    ],
    examinerKeywords: [
      "efficiency",
      "useful output energy",
      "total input energy",
      "ratio",
      "percentage",
      "× 100",
    ],
    modelAnswer:
      "efficiency = useful output energy / total input energy × 100. The division gives a decimal fraction, and multiplying by 100 converts it into a percentage.",
    difficulty: "medium",
    suggestedMinutes: 5,
    hints: [
      "Avoid: Forgetting to multiply by 100.",
      "Avoid: Using wasted energy instead of useful output energy.",
      "Avoid: Writing the decimal as a percentage without converting.",
    ],
    examinerTip:
      "Edexcel International GCSE Physics 4PH1: Equation selection. Quote the equation, substitute clearly and include correct units.",
  },
];
