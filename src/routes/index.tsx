import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Sparkles,
  Target,
  TrendingUp,
  BookOpenCheck,
  UserCircle,
} from "lucide-react";
import { useEffect } from "react";
import { EXAM_BOARDS } from "../data/syllabusConfig";
import { getSubjectsWithQuestions } from "../data/questionBank";
import { useAuth } from "../lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarkWise — GCSE & IGCSE STEM Exam Trainer" },
      {
        name: "description",
        content:
          "Practise GCSE and IGCSE maths, sciences, and computer science with instant marking and markscheme feedback.",
      },
      { property: "og:title", content: "MarkWise — GCSE & IGCSE STEM Exam Trainer" },
      {
        property: "og:description",
        content: "Build your STEM exam skills with maths, sciences, and computer science practice.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLandingRefreshReset();
  useLandingScrollReveal();
  const { user } = useAuth();
  const isSignedIn = !!user;

  return (
    <div className="premium-shell min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 shadow-sm shadow-slate-900/5 backdrop-blur-md dark:bg-background/88 dark:shadow-black/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold tracking-tight">MarkWise</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#demo" className="hover:text-foreground">
              Demo
            </a>
            <a href="#subjects" className="hover:text-foreground">
              Subjects
            </a>
          </nav>
          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <Link
                to="/app/dashboard"
                className="interactive-button inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
              >
                <UserCircle className="h-4 w-4" />
                My account
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="interactive-button inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:pt-24">
          <div className="animate-enter">
            <div className="glass-card inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              GCSE & IGCSE STEM exam practice
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
              Build your STEM skills. Turn practice into marks.
            </h1>
            <p className="animate-enter-delay-1 mt-6 max-w-xl text-lg text-muted-foreground">
              Practise maths, biology, chemistry, physics, and computer science — including further
              and additional maths. Get instant marking and learn how to improve every answer.
            </p>
            <div className="animate-enter-delay-2 mt-8 flex flex-wrap gap-3">
              <Link
                to={isSignedIn ? "/app/dashboard" : "/signup"}
                className="interactive-button inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                {isSignedIn ? "My account" : "Start practising"} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#demo"
                className="interactive-button glass-card inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                View demo
              </a>
              <Link
                to={isSignedIn ? "/app/subjects" : "/signup"}
                className="interactive-button glass-card inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                {isSignedIn ? "My subjects" : "Explore subjects"}
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-sm">
              <Stat n="9+" l="Topics" />
              <Stat n="500+" l="Mark points" />
              <Stat n="< 1s" l="Feedback" />
            </div>
          </div>

          {/* Preview card */}
          <div id="demo" className="animate-enter-delay-2 relative">
            <PreviewCard />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        data-reveal
        className="scroll-reveal border-y border-border/60 bg-card/40 dark:bg-card/20"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Stop reading markschemes. Start writing answers that score.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            MarkWise breaks every answer down into the exact points an examiner would award — and
            shows you how to upgrade your response.
          </p>

          <div className="scroll-stagger mt-12 grid gap-5 md:grid-cols-3">
            <Feature
              icon={<Target className="h-5 w-5" />}
              title="Mark-by-mark feedback"
              body="See which markscheme points you hit, which you missed, and the exact keywords an examiner looks for."
            />
            <Feature
              icon={<BookOpenCheck className="h-5 w-5" />}
              title="Upgrade my answer"
              body="MarkWise rewrites your response into a full-mark version so you can see the difference."
            />
            <Feature
              icon={<TrendingUp className="h-5 w-5" />}
              title="Track weak topics"
              body="Your dashboard surfaces the topics costing you the most marks and recommends what to practise next."
            />
          </div>
        </div>
      </section>

      {/* Subjects strip — driven by syllabus config, not hardcoded */}
      <section id="subjects" data-reveal className="scroll-reveal mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Focused on GCSE &amp; IGCSE STEM
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Pick your exam board at signup — Edexcel, Cambridge, OxfordAQA, AQA, or OCR. Only see
          questions from your syllabus.
        </p>
        <div className="scroll-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXAM_BOARDS.map((board) => {
            const withQuestions = getSubjectsWithQuestions(board.id, board.qualification);
            return (
              <div
                key={board.id}
                className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="text-sm font-semibold">{board.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {board.qualification} · {board.subjects.length} STEM subjects
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {board.subjects.map((subject) => subject.name).join(" · ")}
                </p>
                <div className="mt-3 text-xs text-primary">
                  {withQuestions.length > 0
                    ? `${withQuestions.length} subject${withQuestions.length === 1 ? "" : "s"} with questions`
                    : "No questions loaded"}
                </div>
              </div>
            );
          })}
        </div>
        <div data-reveal className="scroll-reveal mt-12 flex justify-center">
          <Link
            to={isSignedIn ? "/app/dashboard" : "/signup"}
            className="interactive-button inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            {isSignedIn ? "My account" : "Open MarkWise"} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer
        data-reveal
        className="scroll-reveal border-t border-border/60 py-10 text-center text-xs text-muted-foreground"
      >
        © {new Date().getFullYear()} MarkWise · Built for GCSE &amp; IGCSE STEM students who want to
        gain marks.
      </footer>
    </div>
  );
}

function useLandingRefreshReset() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (navigation?.type !== "reload") return;
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);
}

function useLandingScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Logo() {
  return (
    <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
      <span className="text-sm font-black">M</span>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/70 p-3 shadow-soft backdrop-blur dark:bg-card/55">
      <div className="text-2xl font-bold text-foreground">{n}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function PreviewCard() {
  return (
    <div className="animate-float glass-card relative rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-glow">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
          Biology · Ecology
        </span>
        <span className="font-medium">4 marks</span>
      </div>
      <p className="mt-4 text-base font-semibold leading-snug">
        Explain how deforestation can contribute to global warming.
      </p>
      <div className="mt-5 rounded-xl border border-border/70 bg-secondary/60 p-3 text-sm text-muted-foreground dark:bg-secondary/70">
        “Trees are cut down so less carbon dioxide is absorbed. CO₂ traps heat.”
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">Score</span>
        <span className="animate-pop text-2xl font-bold">
          <span className="inline-block animate-pulse-soft">4</span>
          <span className="text-muted-foreground">/4</span>
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className="progress-fill h-full w-full rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <ul className="mt-5 space-y-2 text-sm">
        <li className="animate-enter flex items-start gap-2 text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          Fewer trees, less CO₂ absorbed by photosynthesis.
        </li>
        <li className="animate-enter-delay-1 flex items-start gap-2 text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          CO₂ traps heat in the atmosphere.
        </li>
        <li className="animate-enter-delay-2 flex items-start gap-2 text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          Burning or decomposition of trees releases CO₂.
        </li>
      </ul>

      <div className="animate-pop absolute -right-3 -top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
        2/4 → 4/4
      </div>
    </div>
  );
}
