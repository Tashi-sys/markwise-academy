import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { callMarkWiseAI, friendlyOpenAIError } from "./openai.server";

const selectedSourceSchema = z.object({
  sourceTitle: z.string(),
  chunks: z.array(z.string()),
});

const notebookSchema = z.object({
  title: z.string(),
  examBoard: z.string(),
  subject: z.string(),
  topic: z.string().optional(),
  paper: z.string(),
});

export const askStudyNotebook = createServerFn({ method: "POST" })
  .validator(
    z.object({
      message: z.string(),
      mode: z.string(),
      requestedOutputType: z.enum(["notes", "summary", "flashcards", "mindmap", "quiz"]).optional(),
      notebook: notebookSchema,
      selectedSources: z.array(selectedSourceSchema),
    }),
  )
  .handler(async ({ data }) => {
    const fallback = sourceGroundedFallback(data.message, data.selectedSources);
    try {
      const sourceContent = data.selectedSources.flatMap((source) => source.chunks).join("\n\n");
      const reply = await callMarkWiseAI({
        instructions: `You are generating revision resources for MarkWise. You must only use the provided subject, syllabus, topic, and source text. Do not switch subject. Do not create biology content unless the selected subject is Biology. If the selected subject is Chemistry, all output must be Chemistry. If the source text is about Electrolysis, the output must be about Electrolysis. If there is not enough information, say what is missing instead of inventing unrelated content.

Summarise only the educational content from the provided source text. Ignore metadata such as exam board name, subject name, paper name, notebook title, file title, headings like 'demo notes', and labels like 'topic'. Do not create key terms, mind map nodes, or exam questions from metadata. Extract useful exam content, definitions, processes, markscheme-style phrases, common mistakes, and possible past-paper-style questions. Keep everything IGCSE-level, concise, and exam-focused. Return strict JSON only.

When the student asks for a mind map, follow this rule exactly: You are an expert IGCSE revision mind map creator. Create a useful concept map only from the provided educational source content. Ignore metadata, notebook titles, exam board names, subject names, paper names, source titles, generic headings, and labels. Extract real examinable concepts, processes, keywords, and relationships. Return strict JSON only. Do not include metadata words as nodes.

Answer mainly using the student's uploaded sources. Cite the source title or note section used.
If the answer is not clearly found in the sources, say: "I could not find that clearly in your sources. I can still give general IGCSE guidance if you want."
Keep explanations clear, concise, and exam-focused.

Return only valid JSON:
{
  "reply": "string",
  "sourcesUsed": [{"sourceTitle": "string", "section": "string"}],
  "suggestedFollowUps": ["string"]
}`,
        format: "json",
        input: {
          endpoint: "/api/study-notebook-chat",
          mode: data.mode,
          requestedOutputType: data.requestedOutputType,
          message: data.message,
          sourceContent,
          notebook: data.notebook,
          selectedSources: data.selectedSources,
        },
      });
      return reply as {
        reply: string;
        sourcesUsed: { sourceTitle: string; section: string }[];
        suggestedFollowUps: string[];
      };
    } catch (error) {
      const message = friendlyOpenAIError(error);
      if (message.includes("quota") || message.includes("key")) {
        if (data.message.toLowerCase().includes("mind map")) {
          return {
            reply:
              "AI mind map could not be generated right now. Please check your OpenAI API quota or try again later.",
            sourcesUsed: [],
            suggestedFollowUps: ["Try again later", "Check OpenAI quota"],
          };
        }
        if (data.message.toLowerCase().includes("summarise")) {
          return {
            reply:
              "AI summary could not be generated right now. Please check your OpenAI API quota or try again later.",
            sourcesUsed: [],
            suggestedFollowUps: ["Try again later", "Check OpenAI quota"],
          };
        }
        return {
          ...fallback,
          reply: `${fallback.reply}\n\nAI note: ${message}`,
        };
      }
      return fallback;
    }
  });

function sourceGroundedFallback(
  message: string,
  selectedSources: { sourceTitle: string; chunks: string[] }[],
) {
  const chunks = selectedSources.flatMap((source) =>
    source.chunks.map((chunk, index) => ({
      sourceTitle: source.sourceTitle,
      section: `chunk ${index + 1}`,
      text: chunk,
    })),
  );
  if (chunks.length === 0) {
    return {
      reply:
        "I could not find that clearly in your sources. Add notes or pasted source text first, then ask again.",
      sourcesUsed: [],
      suggestedFollowUps: ["Paste notes", "Create manual note", "Summarise sources"],
    };
  }

  const joined = chunks
    .slice(0, 4)
    .map((chunk) => chunk.text)
    .join("\n\n")
    .slice(0, 1400);
  const sourceContent = cleanSourceContent(joined);
  if (sourceContent.length < 120) {
    return {
      reply: "Add detailed source notes before generating a summary.",
      sourcesUsed: [],
      suggestedFollowUps: ["Paste detailed notes", "Upload a text source"],
    };
  }
  const lower = message.toLowerCase();
  const wantsFlashcards = lower.includes("flashcard");
  const wantsQuestion = lower.includes("question") || lower.includes("quiz");
  const wantsKeywords = lower.includes("keyword");
  const wantsMindMap = lower.includes("mind map");

  let reply = `Based on your sources, the key idea is: ${summarise(sourceContent)}.`;
  if (wantsMindMap) {
    reply =
      "AI mind map could not be generated right now. Please check your OpenAI API quota or try again later.";
  } else if (wantsFlashcards) {
    reply = `Flashcard set from your sources:\n1. Front: What is the main exam point?\nBack: ${summarise(sourceContent)}\n2. Front: Which source phrase should I remember?\nBack: ${extractKeywords(sourceContent).slice(0, 4).join(", ") || "Add more detailed source notes."}`;
  } else if (wantsQuestion) {
    reply = `Original past-paper-style question: Explain one key idea from these notes. [3 marks]\n\nMarkscheme points:\n- State the key idea accurately.\n- Use source vocabulary.\n- Link the idea to the exam context.`;
  } else if (wantsKeywords) {
    reply = `Key source keywords: ${extractKeywords(sourceContent).slice(0, 10).join(", ") || "No clear keywords found yet."}`;
  }

  return {
    reply,
    sourcesUsed: chunks.slice(0, 3).map((chunk) => ({
      sourceTitle: chunk.sourceTitle,
      section: chunk.section,
    })),
    suggestedFollowUps: [
      "Make flashcards",
      "Generate exam question",
      "Show keywords",
      "Make it simpler",
    ],
  };
}

function summarise(text: string) {
  const sentence = text
    .replace(/\s+/g, " ")
    .split(/[.!?]/)
    .map((item) => item.trim())
    .find((item) => item.length > 40);
  return sentence ? `${sentence}.` : text.slice(0, 220);
}

function cleanSourceContent(text: string) {
  return text
    .replace(/^#{1,6}\s+.*$/gm, "")
    .replace(/\b(edexcel|cambridge|aqa|ocr)\s+(international\s+)?(igcse|gcse)\b/gi, "")
    .replace(/\b(igcse|gcse)\s+(biology|chemistry|physics|maths)\s+paper\s+\d+\b/gi, "")
    .replace(/\b(topic|paper|notes|demo notes|source title|exam board|subject):?\s*\d*/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractKeywords(text: string) {
  const stop = new Set([
    "this",
    "that",
    "with",
    "from",
    "there",
    "their",
    "because",
    "which",
    "about",
    "should",
    "edexcel",
    "cambridge",
    "igcse",
    "gcse",
    "biology",
    "chemistry",
    "physics",
    "maths",
    "paper",
    "notes",
    "topic",
    "subject",
    "syllabus",
    "notebook",
    "demo",
  ]);
  return [
    ...new Set(
      text
        .toLowerCase()
        .match(/[a-z][a-z-]{4,}/g)
        ?.filter((word) => !stop.has(word)) ?? [],
    ),
  ];
}
