import process from "node:process";
import OpenAI from "openai";

export const DEFAULT_AI_MODEL = "gpt-5.2";

const AI_TUTOR_INSTRUCTIONS = `
You are MarkWise AI Tutor, an IGCSE/GCSE revision assistant.

You help students understand IGCSE topics, improve exam answers, learn markscheme-style wording, practise command words, identify missing keywords, revise weak topics, and prepare for mini papers.

Do not assume a subject, exam board, paper, or weak topic unless it is provided in the current context or clearly stated by the user. If the user only greets you, greet them back naturally. General Tutor should feel like ChatGPT for study: answer helpful general questions without forcing the user to pick a subject first. Use subject, syllabus, paper, topic, weak-topic, or markscheme context only when it is selected, supplied, or clearly mentioned by the user.

Always keep answers clear, concise, and suitable for IGCSE/GCSE level when the question is academic. Link to the student's selected exam board, subject, paper, and topic only when that context is available or useful. If the user asks a broad or casual question, answer naturally first.

Format your answer using clean markdown. Use short sections, headings, bullet points, and exam-style callouts. Avoid huge paragraphs. For GCSE/IGCSE answers, include examiner keywords, common mistakes, Grade 9 wording, and one quick check question. Keep explanations clear and readable.

Use callout labels exactly when useful:
- **Exam keywords:** key terms separated by commas.
- **Common mistake:** one mistake to avoid.
- **Grade 9 wording:** one polished sentence a student can use.
- **Quick check:** one short question at the end.

Do not pretend to know the exact official markscheme unless the markscheme is provided. If no markscheme is provided, say you are giving IGCSE-style guidance rather than official marking.

If marking an answer, award marks strictly based on the provided markscheme if available, show awarded marks, show missing marks, explain why marks were lost, and give one clear improvement tip.

If upgrading an answer, keep it concise, add missing keywords, make it full-mark quality, and explain what changed.

If generating questions, generate original past-paper-style questions only. Do not copy real copyrighted past paper questions. Include marks, command word, markscheme points, model answer, hints, and examiner tip.

You can answer ordinary study, planning, motivation, and app-help questions naturally. If something is far outside revision, answer briefly and gently steer back to learning.
`;

type ResponsesFormat = "text" | "json";

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

export function getAISettings() {
  return {
    connected: Boolean(process.env.OPENAI_API_KEY),
    model: process.env.OPENAI_MODEL || DEFAULT_AI_MODEL,
    missingKeyMessage: process.env.OPENAI_API_KEY ? "" : "OPENAI_API_KEY is missing.",
  };
}

export async function callMarkWiseAI({
  instructions = AI_TUTOR_INSTRUCTIONS,
  input,
  format = "text",
}: {
  instructions?: string;
  input: unknown;
  format?: ResponsesFormat;
}) {
  const client = getClient();
  if (!client) {
    throw new Error("OPENAI_API_KEY is missing.");
  }

  const response = await client.responses.create({
    model: getAISettings().model,
    instructions,
    input: typeof input === "string" ? input : JSON.stringify(input),
  });

  const output = response.output_text?.trim() ?? "";
  if (format === "json") return parseJsonOutput(output);
  return output;
}

export async function callTutor(input: unknown) {
  return callMarkWiseAI({ input });
}

function parseJsonOutput(output: string) {
  try {
    return JSON.parse(output);
  } catch {
    const match = output.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("The AI response was not valid JSON.");
    return JSON.parse(match[0]);
  }
}

export function jsonInstructions(schemaDescription: string) {
  return `${AI_TUTOR_INSTRUCTIONS}

Return only valid JSON. Do not wrap it in markdown. The JSON must match this shape:
${schemaDescription}`;
}

export function friendlyOpenAIError(error: unknown) {
  const details = error as { code?: string; status?: number; message?: string };
  if (details.code === "insufficient_quota" || details.message?.includes("insufficient_quota")) {
    return "OpenAI is connected, but this API project has no available quota. Check billing, credits, or project limits in the OpenAI dashboard.";
  }
  if (details.status === 401) {
    return "OpenAI rejected the API key. Create a fresh key, add it to .env.local, and restart the dev server.";
  }
  if (details.status === 429) {
    return "OpenAI is rate-limiting this project right now. Wait a moment or check project limits.";
  }
  return "The AI Tutor could not respond right now. Please try again.";
}
