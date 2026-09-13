import { SubjectToolPage } from "../components/subjects/SubjectToolPage";
import {
  subjectToolSearch,
  type SubjectScope,
  matchesSubjectScope,
  scopeSearch,
  tutorStorageKey,
} from "../lib/subjectScope";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Plus, Send, Settings, Sparkles, User } from "lucide-react";
import { askAITutor, getAISettingsStatus } from "../lib/api/ai-tutor.functions";
import { getExamBoard } from "../data/syllabusConfig";
import { getMiniPaperSyllabus } from "../data/miniPaperConfig";
import { useAuth } from "../lib/auth";
import { requestUserDataSync } from "../lib/userDataSync";
import { useAttempts } from "../lib/storage";

export const Route = createFileRoute("/app/ai-tutor")({
  validateSearch: (search) => subjectToolSearch.parse(search),
  component: ScopedPage,
});

type TutorMessage = {
  role: "user" | "assistant";
  content: string;
};

type TutorChat = {
  id: string;
  title: string;
  mode: string;
  messages: TutorMessage[];
  updatedAt: number;
};

const MODES = [
  "General Tutor",
  "Mark My Answer",
  "Upgrade My Answer",
  "Explain Topic",
  "Generate Question",
  "Mini Paper Coach",
  "Weak Topic Coach",
];
const NEUTRAL_STARTER =
  "Hi! I'm your MarkWise AI Tutor. Ask me to mark an answer, explain a topic, give keywords, or make a model answer.";

function ScopedPage() {
  const search = Route.useSearch();
  return (
    <SubjectToolPage search={search}>
      {(context, userId) => (
        <AITutorPage
          key={`${userId}:${context.key}:${search.view ?? ""}`}
          context={context}
          userId={userId}
          view={search.view}
        />
      )}
    </SubjectToolPage>
  );
}

function AITutorPage({
  context,
  userId,
}: {
  context: SubjectScope;
  userId: string;
  view?: "notes" | "notebook";
}) {
  const { user } = useAuth();
  const { attempts } = useAttempts();
  const storageKey = tutorStorageKey(userId, context);
  const [chats, setChats] = useState<TutorChat[]>(() => readChats(storageKey));
  const [activeId, setActiveId] = useState(() => chats[0]?.id ?? "");
  const [mode, setMode] = useState(MODES[0]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingMessageKey, setStreamingMessageKey] = useState<string | null>(null);
  const [settings, setSettings] = useState<Awaited<ReturnType<typeof getAISettingsStatus>> | null>(
    null,
  );
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingRef = useRef(false);

  const activeChat = chats.find((chat) => chat.id === activeId) ?? chats[0];
  const subjectForContext = context.subjectName;
  const syllabus = getMiniPaperSyllabus(context.subject, context.examBoard);
  const board = getExamBoard(context.examBoard);
  const weakTopics = useMemo(() => {
    const low = attempts
      .filter(
        (attempt) =>
          matchesSubjectScope(attempt, context) &&
          attempt.score / Math.max(1, attempt.total) < 0.65,
      )
      .map((attempt) => attempt.topic);
    return [...new Set(low)].slice(0, 5);
  }, [attempts, context]);

  useEffect(() => {
    if (!typingRef.current) saveChats(chats, storageKey);
  }, [chats, storageKey]);

  useEffect(() => {
    getAISettingsStatus().then(setSettings);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [activeChat?.messages, loading, isTyping]);

  if (!user) return null;

  const ensureChat = () => {
    if (activeChat) return activeChat;
    const chat = newChat(mode);
    setChats([chat]);
    setActiveId(chat.id);
    return chat;
  };

  const sendMessage = async () => {
    const text = message.trim();
    if (!text || loading || isTyping) return;
    const chat = ensureChat();
    const userMessage: TutorMessage = { role: "user", content: text };
    const nextMessages = [...chat.messages, userMessage];
    setMessage("");
    setLoading(true);
    updateChat(chat.id, { messages: nextMessages, title: titleFrom(text), mode });

    const intent = detectTutorIntent(text, mode);
    const localReply =
      intent === "choose-for-me"
        ? ""
        : getLocalTutorReply({
            intent,
            text,
            selectedSubject: subjectForContext,
            selectedTopic: selectedTopic.trim() || inferTopicFromMessage(text),
            profileSubjects: [context.subjectName],
            weakestSubject: context.subjectName,
            weakTopics,
          });
    if (localReply) {
      await revealAssistantReply(chat.id, nextMessages, localReply);
      return;
    }

    const response = await askAITutor({
      data: {
        subjectScope: scopeSearch(context),
        mode,
        selectedTutorMode: mode,
        userMessage: text,
        message: text,
        intent,
        chatHistory: nextMessages.slice(-10),
        studentProfile: {
          examBoard: context.boardName,
          subject: subjectForContext ?? undefined,
          paper: subjectForContext ? syllabus?.papers[0]?.label : undefined,
          targetGrade: user.targetGrade,
          userProfileSubjects: [context.subjectName],
          weakTopics: shouldUseWeakTopics(intent, mode) ? weakTopics : [],
        },
        tutorContext: {
          selectedTutorMode: mode,
          selectedExamBoard: context.boardName,
          selectedSubject: subjectForContext,
          selectedTopic: selectedTopic.trim() || inferTopicFromMessage(text) || null,
          userProfileSubjects: [context.subjectName],
          recentAttemptContext: shouldUseWeakTopics(intent, mode) ? { weakTopics } : {},
        },
        currentQuestionContext: {
          topic: selectedTopic.trim() || inferTopicFromMessage(text) || undefined,
        },
      },
    });

    await revealAssistantReply(chat.id, nextMessages, response.reply);
  };

  const updateChat = (id: string, patch: Partial<TutorChat>) => {
    setChats((items) =>
      items.map((item) => (item.id === id ? { ...item, ...patch, updatedAt: Date.now() } : item)),
    );
  };

  const revealAssistantReply = async (
    chatId: string,
    baseMessages: TutorMessage[],
    fullReply: string,
  ) => {
    typingRef.current = true;
    setIsTyping(true);
    setLoading(false);
    const messageKey = `${chatId}:${baseMessages.length}`;
    setStreamingMessageKey(messageKey);
    const assistantMessage: TutorMessage = { role: "assistant", content: "" };
    updateChat(chatId, { messages: [...baseMessages, assistantMessage], updatedAt: Date.now() });

    try {
      let visible = "";
      for (const chunk of chunkTutorReply(fullReply)) {
        visible += chunk;
        updateChat(chatId, {
          messages: [...baseMessages, { role: "assistant", content: visible }],
          updatedAt: Date.now(),
        });
        await waitForTyping(chunk);
      }
    } finally {
      typingRef.current = false;
      setIsTyping(false);
      setStreamingMessageKey(null);
      setChats((items) => {
        saveChats(items, storageKey);
        return items;
      });
    }
  };

  const createChat = () => {
    const chat = newChat(mode);
    setChats((items) => [chat, ...items]);
    setActiveId(chat.id);
  };

  return (
    <div className="ai-tutor-shell animate-enter grid gap-5 lg:grid-cols-[260px_1fr]">
      <aside className="glass-card animate-panel-left rounded-2xl border border-border bg-card p-4 shadow-soft">
        <button
          type="button"
          onClick={createChat}
          className="interactive-button tutor-new-chat-button flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          <Plus className="h-4 w-4" />
          New chat
        </button>
        <div className="mt-4 space-y-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              type="button"
              onClick={() => {
                setActiveId(chat.id);
                setMode(chat.mode);
              }}
              className={`tutor-chat-row w-full rounded-xl px-3 py-2 text-left text-sm ${
                chat.id === activeChat?.id
                  ? "is-active bg-primary/10 text-primary"
                  : "hover:bg-secondary"
              }`}
            >
              <div className="truncate font-medium">{chat.title}</div>
              <div className="text-[10px] text-muted-foreground">{chat.mode}</div>
            </button>
          ))}
        </div>
      </aside>

      <main className="space-y-5">
        <div className="tutor-hero animate-enter-delay-1">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 animate-sparkle-twinkle" />
              Live exam coach
            </div>
            <h1 className="text-3xl font-bold tracking-tight">AI Tutor</h1>
            <p className="mt-1 text-muted-foreground">
              Help with {context.subjectName} for {context.boardName} {context.syllabusCode}.
            </p>
          </div>
          <div className="hidden items-center gap-3 rounded-2xl border border-border bg-card/70 px-4 py-3 shadow-soft backdrop-blur md:flex">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
              <MessageCircle className="h-5 w-5 animate-pulse-soft" />
            </div>
            <div>
              <div className="text-sm font-semibold">Ready when you are</div>
              <div className="text-xs text-muted-foreground">Ask, mark, improve, repeat.</div>
            </div>
          </div>
        </div>

        <div className="glass-card tutor-control-panel animate-enter-delay-2 rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
            <label className="tutor-field text-sm font-medium">
              Tutor mode
              <select
                value={mode}
                onChange={(event) => setMode(event.target.value)}
                className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
              >
                {MODES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <div className="tutor-field text-sm font-medium">
              Subject
              <p className="mt-2 rounded-xl border border-border bg-secondary/30 px-3 py-2">
                {context.subjectName}
              </p>
            </div>
            <label className="tutor-field text-sm font-medium">
              Topic
              <input
                value={selectedTopic}
                onChange={(event) => setSelectedTopic(event.target.value)}
                placeholder="Optional topic"
                className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2"
              />
            </label>
            <div className="tutor-settings-card rounded-xl border border-border bg-secondary/30 p-3 text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <Settings className="h-4 w-4" />
                AI Settings
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                GPT API: {settings?.connected ? "Connected" : "Not connected"}
              </div>
              <div className="text-xs text-muted-foreground">Model: {settings?.model ?? "..."}</div>
              {!settings?.connected && (
                <div className="mt-1 text-xs text-warning">OPENAI_API_KEY is missing.</div>
              )}
            </div>
          </div>
        </div>

        <section className="glass-card tutor-chat-panel flex min-h-[520px] flex-col rounded-2xl border border-border bg-card shadow-soft md:min-h-[620px]">
          <div className="flex-1 space-y-4 overflow-y-auto scroll-smooth p-3 sm:p-4">
            {(activeChat?.messages ?? []).length === 0 && (
              <div className="grid h-full place-items-center text-center">
                <div className="tutor-empty-state max-w-md rounded-2xl border border-border bg-background/80 p-5 text-sm leading-relaxed text-muted-foreground shadow-soft">
                  <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-5 w-5 animate-float-icon" />
                  </div>
                  <div>
                    Ask me about {context.subjectName} for {context.boardName}{" "}
                    {context.syllabusCode}. I can explain a topic, help with an answer, or suggest
                    practice.
                  </div>
                </div>
              </div>
            )}
            {activeChat?.messages.map((item, index) => {
              const messageKey = `${activeChat.id}:${index}`;
              return (
                <div
                  key={`${item.role}-${index}`}
                  className={`animate-message-in tutor-message-row flex gap-3 ${
                    item.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}
                >
                  {item.role === "assistant" && (
                    <div className="tutor-avatar grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`tutor-message-bubble max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[75%] ${
                      item.role === "user"
                        ? "tutor-message-user bg-primary text-primary-foreground"
                        : "tutor-message-assistant border border-border bg-background text-foreground shadow-soft"
                    }`}
                  >
                    {item.role === "assistant" ? (
                      <TutorMarkdown
                        content={item.content}
                        mode={mode}
                        streaming={streamingMessageKey === messageKey}
                      />
                    ) : (
                      item.content
                    )}
                  </div>
                  {item.role === "user" && (
                    <div className="tutor-avatar grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-muted-foreground">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
            {loading && (
              <div className="animate-message-in flex items-center gap-3 text-sm text-muted-foreground">
                <div className="tutor-avatar grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Bot className="h-4 w-4 animate-pulse-soft" />
                </div>
                <div className="tutor-thinking-card flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-soft">
                  <span>AI Tutor is thinking</span>
                  <span className="typing-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="tutor-input-dock sticky bottom-0 border-t border-border bg-card/95 p-3 backdrop-blur sm:p-4">
            <div className="flex gap-2 sm:gap-3">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                rows={2}
                placeholder="Ask the AI Tutor..."
                className="tutor-composer min-h-12 flex-1 resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading || isTyping || !message.trim()}
                className="interactive-button tutor-send-button grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function newChat(mode: string): TutorChat {
  return {
    id: crypto.randomUUID(),
    title: "New tutor chat",
    mode,
    messages: [],
    updatedAt: Date.now(),
  };
}

function titleFrom(message: string) {
  return message.length > 34 ? `${message.slice(0, 34)}...` : message;
}

function chunkTutorReply(text: string) {
  return text.match(/\S+\s*/g) ?? [text];
}

function waitForTyping(chunk: string) {
  const sentencePause = /[.!?]\s*$/.test(chunk) ? 130 : 0;
  const linePause = chunk.includes("\n") ? 160 : 0;
  const lengthDelay = Math.min(95, Math.max(36, chunk.length * 5));
  return new Promise((resolve) =>
    window.setTimeout(resolve, lengthDelay + sentencePause + linePause),
  );
}

function TutorMarkdown({
  content,
  mode,
  streaming = false,
}: {
  content: string;
  mode: string;
  streaming?: boolean;
}) {
  const blocks = parseMarkdownBlocks(content);
  return (
    <div className="tutor-markdown">
      <ModeBadge mode={mode} />
      {blocks.map((block, index) => renderMarkdownBlock(block, index))}
      {streaming && <span className="tutor-streaming-cursor" aria-hidden="true" />}
    </div>
  );
}

function ModeBadge({ mode }: { mode: string }) {
  const label =
    mode === "Mark My Answer"
      ? "Marking"
      : mode === "Upgrade My Answer"
        ? "Model upgrade"
        : mode === "Weak Topic Coach"
          ? "Revision coach"
          : mode;
  return (
    <div className="tutor-mode-badge mb-3 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
      {label}
    </div>
  );
}

type MarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "hr" }
  | { type: "table"; rows: string[][] };

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();
    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: "code", text: codeLines.join("\n") });
      index += 1;
      continue;
    }

    const heading = /^(#{2,4})\s+(.+)$/.exec(trimmed);
    if (heading) {
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (
        index < lines.length &&
        lines[index].trim().startsWith("|") &&
        lines[index].trim().endsWith("|")
      ) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      blocks.push({
        type: "table",
        rows: tableLines
          .filter((row) => !/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(row))
          .map((row) =>
            row
              .replace(/^\||\|$/g, "")
              .split("|")
              .map((cell) => cell.trim()),
          ),
      });
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push({ type: "blockquote", text: quoteLines.join("\n") });
      continue;
    }

    if (/^([-*])\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const items: string[] = [];
      while (
        index < lines.length &&
        (ordered ? /^\d+\.\s+/.test(lines[index].trim()) : /^[-*]\s+/.test(lines[index].trim()))
      ) {
        items.push(lines[index].trim().replace(ordered ? /^\d+\.\s+/ : /^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length && lines[index].trim()) {
      const next = lines[index].trim();
      if (
        /^(#{2,4})\s+/.test(next) ||
        next.startsWith("```") ||
        next.startsWith(">") ||
        /^([-*])\s+/.test(next) ||
        /^\d+\.\s+/.test(next) ||
        (next.startsWith("|") && next.endsWith("|"))
      ) {
        break;
      }
      paragraphLines.push(next);
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join("\n") });
  }

  return blocks.length > 0 ? blocks : [{ type: "paragraph", text: markdown }];
}

function renderMarkdownBlock(block: MarkdownBlock, index: number) {
  if (block.type === "heading") {
    const className =
      block.level === 2
        ? "mt-4 text-base font-bold text-foreground first:mt-0"
        : "mt-3 text-sm font-bold text-foreground";
    return (
      <h3 key={index} className={`tutor-markdown-block ${className}`}>
        {renderInlineMarkdown(block.text)}
      </h3>
    );
  }
  if (block.type === "paragraph") {
    const callout = getCalloutKind(block.text);
    if (callout) {
      return (
        <div
          key={index}
          className={`tutor-markdown-block tutor-callout tutor-callout-${callout.kind}`}
        >
          <div className="text-xs font-bold uppercase tracking-wide">{callout.title}</div>
          <p className="mt-1">{renderInlineMarkdown(callout.body)}</p>
        </div>
      );
    }
    return (
      <p key={index} className="mt-2 whitespace-pre-line leading-7 text-foreground/90 first:mt-0">
        {renderInlineMarkdown(block.text)}
      </p>
    );
  }
  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag
        key={index}
        className={`tutor-markdown-block mt-3 space-y-1.5 pl-5 leading-7 ${
          block.ordered ? "list-decimal" : "list-disc"
        }`}
      >
        {block.items.map((item) => (
          <li key={item}>{renderInlineMarkdown(item)}</li>
        ))}
      </ListTag>
    );
  }
  if (block.type === "code") {
    return (
      <pre key={index} className="mt-3 overflow-x-auto rounded-xl bg-secondary/60 p-3 text-xs">
        <code>{block.text}</code>
      </pre>
    );
  }
  if (block.type === "blockquote") {
    const callout = getCalloutKind(block.text);
    return (
      <blockquote
        key={index}
        className={`mt-3 rounded-xl border-l-4 p-3 leading-7 ${
          callout
            ? `tutor-callout tutor-callout-${callout.kind}`
            : "border-primary bg-primary/5 text-foreground"
        }`}
      >
        {callout ? (
          <>
            <div className="text-xs font-bold uppercase tracking-wide">{callout.title}</div>
            <p className="mt-1">{renderInlineMarkdown(callout.body)}</p>
          </>
        ) : (
          renderInlineMarkdown(block.text)
        )}
      </blockquote>
    );
  }
  if (block.type === "table") {
    return (
      <div key={index} className="mt-3 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-xs">
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr
                key={`${row.join("-")}-${rowIndex}`}
                className="border-b border-border last:border-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className={`p-2 ${rowIndex === 0 ? "bg-secondary/50 font-semibold" : ""}`}
                  >
                    {renderInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <hr key={index} className="my-4 border-border" />;
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${token}-${match.index}`} className="font-bold text-foreground">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(
        <code
          key={`${token}-${match.index}`}
          className="rounded-md bg-secondary px-1.5 py-0.5 text-xs"
        >
          {token.slice(1, -1)}
        </code>,
      );
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function getCalloutKind(text: string) {
  const cleaned = text.replace(/\*\*/g, "").trim();
  const [rawTitle, ...rest] = cleaned.split(/:\s*/);
  const title = rawTitle.toLowerCase();
  const body = rest.join(": ").trim() || cleaned;
  if (/exam keywords?|key words?/.test(title)) {
    return { kind: "keywords", title: "Exam keywords", body };
  }
  if (/common mistake/.test(title)) return { kind: "mistake", title: "Common mistake", body };
  if (/grade 9|full[-\s]?mark wording|examiner wording/.test(title)) {
    return { kind: "grade", title: "Grade 9 wording", body };
  }
  if (/quick check/.test(title)) return { kind: "check", title: "Quick check", body };
  return null;
}

type TutorIntent =
  | "greeting"
  | "general"
  | "choose-for-me"
  | "subject-specific"
  | "marking"
  | "model-answer"
  | "keyword"
  | "revision-coaching";

function detectTutorIntent(message: string, mode: string): TutorIntent {
  const text = message.trim().toLowerCase();
  if (/^(hello|hi|hey|yo|sup|good morning|good afternoon|good evening)[!.?\s]*$/i.test(text)) {
    return "greeting";
  }
  if (/mark|grade|score|how many marks/.test(text) || mode === "Mark My Answer") return "marking";
  if (/model answer|sample answer|full[-\s]?mark answer/.test(text)) return "model-answer";
  if (/keyword|key word|definition/.test(text)) return "keyword";
  if (
    /(choose|pick|decide|select).*(for me)|you choose|you pick|surprise me|anything is fine|what should i do/i.test(
      text,
    )
  ) {
    return "choose-for-me";
  }
  if (/revise|revision|plan|coach|weak|recommend/.test(text) || mode === "Weak Topic Coach") {
    return "revision-coaching";
  }
  if (inferSubjectFromMessage(message) || inferTopicFromMessage(message)) return "subject-specific";
  return "general";
}

function getLocalTutorReply({
  intent,
  text,
  selectedSubject,
  selectedTopic,
  profileSubjects,
  weakestSubject,
  weakTopics,
}: {
  intent: TutorIntent;
  text: string;
  selectedSubject: string | null;
  selectedTopic: string | null;
  profileSubjects: string[];
  weakestSubject: string;
  weakTopics: string[];
}) {
  if (intent === "greeting") {
    return `Hi! What would you like to work on in ${selectedSubject ?? "this subject"}?`;
  }
  if (intent === "choose-for-me") {
    const subject =
      selectedSubject || normaliseTutorChoice(weakestSubject) || profileSubjects[0] || "Chemistry";
    const topic = selectedTopic || weakTopics[0] || defaultTopicForSubject(subject);
    return [
      `Alright, I\x27ll choose: **${subject} - ${topic}**.`,
      "",
      "Good one to do now. It is the kind of topic where a few precise keywords can be the difference between a vague answer and proper marks.",
      "",
      `Send me a quick exam-style answer about **${topic}**. It does not need to be perfect - just write what you would actually put in the exam, and I will mark it properly.`,
      "",
      `Try this: explain one key idea from **${topic}** in 3-4 sentences.`,
    ].join("\n");
  }
  if (intent === "marking" && !selectedSubject) {
    return "Sure. Send me the subject, question, total marks, mark scheme if you have it, and your answer. Then I can mark it properly.";
  }
  return "";
}

function normaliseTutorChoice(value: string) {
  const trimmed = value.trim();
  if (!trimmed || /^none|not sure|n\/a|na$/i.test(trimmed)) return "";
  return trimmed;
}

function defaultTopicForSubject(subject: string) {
  const text = subject.toLowerCase();
  if (text.includes("chem")) return "Electrolysis";
  if (text.includes("physics")) return "Forces and Motion";
  if (text.includes("math")) return "Algebra";
  if (text.includes("computer")) return "Algorithms";
  if (text.includes("business")) return "Business Activity";
  if (text.includes("economic")) return "Market Failure";
  if (text.includes("geography")) return "River Processes";
  if (text.includes("history")) return "Source Analysis";
  if (text.includes("english language")) return "Transactional Writing";
  if (text.includes("english literature")) return "Theme Analysis";
  return "Exam Technique";
}

function inferSubjectFromMessage(message: string) {
  const text = message.toLowerCase();
  if (/\b(electrolysis|chemistry|ionic|cathode|anode|moles?|alkane|acid|base|salt)\b/.test(text)) {
    return "Chemistry";
  }
  if (/\b(ecology|biology|enzyme|cell|photosynthesis|respiration|osmosis|diffusion)\b/.test(text)) {
    return "Biology";
  }
  if (/\b(physics|force|energy|voltage|current|waves?|momentum)\b/.test(text)) return "Physics";
  if (/\b(maths|math|algebra|quadratic|trigonometry|histogram)\b/.test(text)) return "Maths";
  if (/\b(computer science|algorithm|binary|python|network|programming)\b/.test(text)) {
    return "Computer Science";
  }
  return null;
}

function inferTopicFromMessage(message: string) {
  const text = message.toLowerCase();
  if (text.includes("electrolysis")) return "Electrolysis";
  if (text.includes("ecology")) return "Ecology";
  if (text.includes("enzyme")) return "Enzymes";
  if (text.includes("photosynthesis")) return "Photosynthesis";
  if (text.includes("respiration")) return "Respiration";
  return null;
}

function shouldUseWeakTopics(intent: TutorIntent, mode: string) {
  return intent === "revision-coaching" || mode === "Weak Topic Coach";
}

function readChats(storageKey: string): TutorChat[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as TutorChat[]) : [];
  } catch {
    return [];
  }
}

function saveChats(chats: TutorChat[], storageKey: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey, JSON.stringify(chats));
  window.dispatchEvent(new Event("markwise:ai-tutor-chats:changed"));
  requestUserDataSync();
}
