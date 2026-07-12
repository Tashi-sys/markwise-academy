import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { callMarkWiseAI, jsonInstructions } from "./openai.server";

const markPointSchema = z.object({
  point: z.string(),
  keywords: z.array(z.array(z.string())),
});

export const generateAnswerUpgrade = createServerFn({ method: "POST" })
  .validator(
    z.object({
      questionText: z.string(),
      studentAnswer: z.string(),
      topic: z.string(),
      marks: z.number(),
      markSchemePoints: z.array(markPointSchema),
      modelAnswer: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      return (await callMarkWiseAI({
        format: "json",
        instructions: jsonInstructions(`{
  "upgradedAnswer": "string",
  "keywordsAdded": ["string"],
  "whatChanged": ["string"],
  "whyThisScoresHigher": "string",
  "examTechniqueTip": "string"
}`),
        input: {
          endpoint: "/api/upgrade-answer",
          task: "Upgrade this student answer into a concise full-mark IGCSE-style answer.",
          ...data,
        },
      })) as {
        upgradedAnswer: string;
        keywordsAdded: string[];
        whatChanged: string[];
        whyThisScoresHigher: string;
        examTechniqueTip: string;
      };
    } catch {
      return fallbackUpgrade(data);
    }
  });

function fallbackUpgrade(data: {
  marks: number;
  markSchemePoints: z.infer<typeof markPointSchema>[];
  modelAnswer?: string;
}) {
  const keywords = [
    ...new Set(data.markSchemePoints.flatMap((point) => point.keywords.flat()).slice(0, 8)),
  ];
  const upgraded =
    data.modelAnswer?.trim() ||
    data.markSchemePoints.map((point) => point.point.replace(/\.$/, "")).join(". ") + ".";

  return {
    upgradedAnswer: upgraded,
    whatChanged: [
      "The answer was rewritten to cover each markscheme point explicitly.",
      "Precise topic vocabulary and cause-and-effect links were added.",
    ],
    keywordsAdded: keywords,
    whyThisScoresHigher:
      "It uses more creditworthy markscheme language and makes each scoring point explicit.",
    examTechniqueTip:
      data.marks >= 4
        ? "For higher-mark questions, write one clear sentence per mark and include the key process word."
        : "For short questions, use the exact scientific term before adding detail.",
  };
}
