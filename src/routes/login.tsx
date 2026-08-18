import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { AuthError, AuthField, AuthLayout, authInputClass } from "../components/auth/AuthLayout";
import { getCurrentUser, login } from "../lib/auth";

function safeRedirectTarget(value: unknown) {
  return typeof value === "string" && value.startsWith("/app") ? value : "/app/dashboard";
}

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Log in — MarkWise" }],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: safeRedirectTarget(search.redirect),
  }),
  beforeLoad: ({ search }) => {
    if (typeof window !== "undefined" && getCurrentUser()) {
      throw redirect({ to: safeRedirectTarget(search.redirect) });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { redirect: redirectTo } = Route.useSearch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = login(email, password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate({ to: redirectTo });
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to continue practising with markscheme feedback."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link to="/signup" search={{ redirect: redirectTo }} className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-5">
        <AuthError message={error} />

        <AuthField label="Email">
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={authInputClass}
            placeholder="you@school.com"
          />
        </AuthField>

        <AuthField label="Password">
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={authInputClass}
            placeholder="••••••••"
          />
        </AuthField>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Log in"}
        </button>
      </form>
    </AuthLayout>
  );
}
