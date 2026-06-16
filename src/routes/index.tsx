import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleAlert, Sparkles, Target, TrendingUp, BookOpenCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarkWise — Train with past papers. Improve with markscheme feedback." },
      { name: "description", content: "Practise IGCSE exam questions, get instant marking, and learn how to turn your answers into full-mark responses." },
      { property: "og:title", content: "MarkWise — IGCSE Past Paper Trainer" },
      { property: "og:description", content: "Train with past papers. Get instant markscheme feedback. Gain marks." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold tracking-tight">MarkWise</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#demo" className="hover:text-foreground">Demo</a>
            <a href="#subjects" className="hover:text-foreground">Subjects</a>
          </nav>
          <Link
            to="/app"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
          >
            Open app <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
        <div className="absolute -top-32 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 left-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Markscheme-trained feedback for IGCSE
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Train with past papers.{" "}
              <span className="text-gradient-brand">Improve with markscheme feedback.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Practise IGCSE exam questions, get instant marking, and learn exactly how to turn your
              answers into full-mark responses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                Start practising <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                View demo
              </a>
              <Link
                to="/app/subjects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Explore subjects
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-sm">
              <Stat n="9+" l="Topics" />
              <Stat n="500+" l="Mark points" />
              <Stat n="< 1s" l="Feedback" />
            </div>
          </div>

          {/* Preview card */}
          <div id="demo" className="relative">
            <PreviewCard />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Stop reading markschemes. Start writing answers that score.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            MarkWise breaks every answer down into the exact points an examiner would award —
            and shows you how to upgrade your response.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
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

      {/* Subjects strip */}
      <section id="subjects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Built for the IGCSE syllabus</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Biology is live now. More subjects rolling in.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Biology", "Chemistry", "Physics", "Maths", "Psychology"].map((s, i) => (
            <div
              key={s}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="text-sm font-semibold">{s}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {i === 0 ? "Available" : "Coming soon"}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            Open MarkWise <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MarkWise · Built for IGCSE students who want to gain marks.
      </footer>
    </div>
  );
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
    <div>
      <div className="text-2xl font-bold">{n}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
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
    <div className="relative rotate-[0.5deg] rounded-3xl border border-border bg-card p-6 shadow-glow">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
          Biology · Ecology
        </span>
        <span className="font-medium">4 marks</span>
      </div>
      <p className="mt-4 text-base font-semibold leading-snug">
        Explain how deforestation can contribute to global warming.
      </p>
      <div className="mt-5 rounded-xl bg-secondary/60 p-3 text-sm text-muted-foreground">
        “Trees are cut down so less carbon dioxide is absorbed. CO₂ traps heat.”
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">Score</span>
        <span className="text-2xl font-bold">
          3<span className="text-muted-foreground">/4</span>
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <ul className="mt-5 space-y-2 text-sm">
        <li className="flex items-start gap-2 text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          Fewer trees, less CO₂ absorbed by photosynthesis.
        </li>
        <li className="flex items-start gap-2 text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          CO₂ traps heat in the atmosphere.
        </li>
        <li className="flex items-start gap-2 text-muted-foreground">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
          Missing: burning or decomposition of trees releases CO₂.
        </li>
      </ul>

      <div className="absolute -right-3 -top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
        Instant feedback
      </div>
    </div>
  );
}
