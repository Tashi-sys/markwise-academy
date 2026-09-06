import { useEffect, useRef } from "react";
import { isMathsSubject } from "../lib/mathAnswer";

const SYMBOLS = [
  ["x/y", "\\frac{}{}"],
  ["x²", "^{2}"],
  ["√x", "\\sqrt{}"],
  ["±", "\\pm"],
  ["×", "\\times"],
  ["÷", "\\div"],
  ["≤", "\\le"],
  ["≥", "\\ge"],
  ["π", "\\pi"],
  ["∞", "\\infty"],
  ["( )", "()"],
] as const;

export function MathAnswerEditor({
  value,
  onChange,
  disabled = false,
  resetKey,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  resetKey?: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const lastKey = useRef(resetKey);
  useEffect(() => {
    lastKey.current = resetKey;
  }, [resetKey]);
  const insert = (symbol: string) => {
    const textarea = ref.current;
    if (!textarea || disabled) return;
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const next = `${value.slice(0, start)}${symbol}${value.slice(end)}`;
    onChange(next);
    requestAnimationFrame(() => {
      textarea.focus();
      const cursor = start + symbol.length;
      textarea.setSelectionRange(cursor, cursor);
    });
  };
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-input bg-background shadow-inner focus-within:ring-2 focus-within:ring-primary/30">
      <textarea
        ref={ref}
        aria-label="Your mathematical answer"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="Type your working, or use the maths buttons below…"
        rows={8}
        className="w-full resize-y border-0 bg-transparent px-4 py-3 text-sm leading-relaxed outline-none placeholder:text-muted-foreground disabled:opacity-70"
      />
      <div
        className="flex flex-wrap gap-1 border-t border-border bg-secondary/60 p-2"
        aria-label="Maths symbols"
      >
        {SYMBOLS.map(([label, symbol]) => (
          <button
            key={label}
            type="button"
            disabled={disabled}
            onClick={() => insert(symbol)}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-primary/10 disabled:opacity-50"
          >
            {label}
          </button>
        ))}
      </div>
      <p className="px-3 pb-2 text-xs text-muted-foreground">
        Use ^ for powers and / for fractions. Maths answers do not need a word target.
      </p>
    </div>
  );
}

export { isMathsSubject };
