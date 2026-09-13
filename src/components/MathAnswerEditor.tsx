import { useEffect, useRef, useState } from "react";
import type { MathfieldElement } from "mathlive";
import "mathlive/fonts.css";
import { isMathsSubject } from "../lib/mathAnswer";

const SYMBOLS = [
  ["Fraction", "x/y", "\\frac{#0}{#?}"],
  ["Square", "x²", "#0^{2}"],
  ["Power", "xⁿ", "#0^{#?}"],
  ["Square root", "√x", "\\sqrt{#0}"],
  ["Plus or minus", "±", "\\pm"],
  ["Multiply", "×", "\\times"],
  ["Divide", "÷", "\\div"],
  ["Equals", "=", "="],
  ["Pi", "π", "\\pi"],
  ["Brackets", "( )", "\\left(#0\\right)"],
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
  const host = useRef<HTMLDivElement>(null);
  const field = useRef<MathfieldElement | null>(null);
  const current = useRef({ value, onChange, disabled });
  current.current = { value, onChange, disabled };
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import("mathlive")
      .then(({ MathfieldElement }) => {
        if (cancelled || !host.current) return;
        MathfieldElement.fontsDirectory = null;
        MathfieldElement.soundsDirectory = null;
        const editor = new MathfieldElement();
        editor.value = current.current.value;
        editor.readOnly = current.current.disabled;
        editor.smartMode = true;
        editor.mathVirtualKeyboardPolicy = "manual";
        editor.setAttribute("aria-label", "Your mathematical answer");
        editor.style.cssText =
          "display:block;width:100%;min-height:140px;padding:20px;background:transparent;color:inherit;border:0;font-size:24px;--caret-color:currentColor;--selection-background-color:#4985ff40;";
        const input = () => current.current.onChange(editor.value);
        editor.addEventListener("input", input);
        host.current.replaceChildren(editor);
        field.current = editor;
        setStatus("ready");
        cleanup = () => {
          editor.removeEventListener("input", input);
          editor.remove();
          field.current = null;
        };
      })
      .catch(() => {
        if (!cancelled) setStatus("fallback");
      });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [resetKey]);
  useEffect(() => {
    if (field.current && field.current.value !== value)
      field.current.setValue(value, { silenceNotifications: true });
  }, [value]);
  useEffect(() => {
    if (field.current) field.current.readOnly = disabled;
  }, [disabled]);
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-input bg-background focus-within:ring-2 focus-within:ring-primary/30">
      <div ref={host} />
      {status === "loading" && (
        <p className="p-4 text-sm text-muted-foreground">Loading maths editor…</p>
      )}
      {status === "fallback" && (
        <textarea
          aria-label="Your mathematical answer"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
          rows={6}
          className="w-full bg-transparent p-4"
          placeholder="Type your answer using / for fractions and ^ for powers"
        />
      )}
      {status === "ready" && (
        <div
          className="flex flex-wrap gap-2 border-t border-border bg-secondary/40 p-3"
          aria-label="Maths symbols"
        >
          {SYMBOLS.map(([name, label, latex]) => (
            <button
              key={name}
              type="button"
              title={name}
              aria-label={name}
              disabled={disabled}
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => {
                field.current?.focus();
                field.current?.insert(latex, { selectionMode: "placeholder" });
              }}
              className="min-w-10 rounded-lg border border-border bg-card px-3 py-2 hover:bg-primary/10 disabled:opacity-50"
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <p className="p-3 text-xs text-muted-foreground">
        Use the arrow keys or Tab to move through fractions and roots. You can type words to explain
        your working.
      </p>
    </div>
  );
}
export { isMathsSubject };
