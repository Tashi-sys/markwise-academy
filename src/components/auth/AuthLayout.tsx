import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Logo() {
  return (
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
      <span className="text-sm font-black">M</span>
    </div>
  );
}

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 left-0 -z-10 h-[380px] w-[380px] rounded-full bg-accent/15 blur-3xl" />

      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold tracking-tight">MarkWise</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-md flex-col px-6 py-10 md:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
          {children}
        </div>

        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </main>
    </div>
  );
}

export function AuthField({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {hint && <span className="block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

export const authInputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function AuthError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
      {message}
    </div>
  );
}
