const MATHS_SUBJECTS = new Set([
  "mathematics",
  "mathematics-a",
  "additional-mathematics",
  "further-mathematics",
  "further-pure-mathematics",
]);

export function isMathsSubject(subject: string) {
  return MATHS_SUBJECTS.has(subject.toLowerCase());
}

/** Make common maths notation searchable by the existing keyword marker. */
export function normaliseMathAnswer(value: string) {
  return value
    .replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, "$1/$2")
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, "sqrt $1")
    .replace(/\^\{([^{}]*)\}/g, "^$1")
    .replace(/[{}$]/g, "")
    .replace(/\\(times|cdot)/g, "*")
    .replace(/\\(div)/g, "/")
    .replace(/\\pm/g, "+/-")
    .replace(/\\(leq|le)/g, "<=")
    .replace(/\\(geq|ge)/g, ">=")
    .replace(/\\([a-zA-Z]+)/g, "$1");
}
