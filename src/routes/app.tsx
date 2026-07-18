import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import {
  LayoutDashboard,
  BookMarked,
  ListChecks,
  LineChart,
  History,
  Menu,
  X,
  LogOut,
  User,
  KeyRound,
  Layers,
  BookOpenCheck,
  AlertTriangle,
  FileText,
  Sparkles,
  Bot,
  NotebookTabs,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser, logout, useAuth } from "../lib/auth";
import { getExamBoard } from "../data/syllabusConfig";
import { applyTheme, persistTheme, readStoredTheme, type MarkwiseThemeId } from "../lib/theme";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "MarkWise — Dashboard" },
      { name: "description", content: "Your IGCSE practice dashboard." },
    ],
  }),
  beforeLoad: () => {
    if (typeof window !== "undefined" && !getCurrentUser()) {
      throw redirect({ to: "/login" });
    }
  },
  component: AppLayout,
});

const NAV_SECTIONS = [
  {
    title: "Overview",
    items: [
      { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true },
      { to: "/app/progress", label: "Progress", icon: LineChart, exact: false },
    ],
  },
  {
    title: "Learning",
    items: [
      { to: "/app/subjects", label: "Subjects", icon: BookMarked, exact: false },
      { to: "/app/ai-tutor", label: "AI Tutor", icon: Bot, exact: true },
      { to: "/app/study-notebook", label: "Revision Notes", icon: NotebookTabs, exact: true },
      { to: "/app/keywords", label: "Keywords", icon: KeyRound, exact: true },
      { to: "/app/model-answers", label: "Model Answers", icon: BookOpenCheck, exact: true },
    ],
  },
  {
    title: "Active Recall",
    items: [
      { to: "/app/practice", label: "Practise", icon: ListChecks, exact: false },
      { to: "/app/flashcards", label: "Flashcards", icon: Layers, exact: true },
      { to: "/app/mini-paper", label: "Mini Paper", icon: FileText, exact: true },
      { to: "/app/review", label: "Review", icon: History, exact: false },
      { to: "/app/common-mistakes", label: "Mistakes", icon: AlertTriangle, exact: true },
    ],
  },
  {
    title: "Tools",
    items: [
      { to: "/app/generate", label: "Generate", icon: Sparkles, exact: true },
      { to: "/app/classroom", label: "Classroom", icon: GraduationCap, exact: false },
    ],
  },
  {
    title: "Account",
    items: [{ to: "/app/profile", label: "Profile", icon: User, exact: true }],
  },
];

const MOBILE_NAV = [
  { to: "/app/dashboard", label: "Home", icon: LayoutDashboard, exact: true },
  { to: "/app/practice", label: "Practise", icon: ListChecks, exact: false },
  { to: "/app/ai-tutor", label: "AI Tutor", icon: Bot, exact: true },
  { to: "/app/classroom", label: "Classroom", icon: GraduationCap, exact: false },
  { to: "/app/progress", label: "Progress", icon: LineChart, exact: false },
];

function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeId] = useState<MarkwiseThemeId>(() => readStoredTheme());
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  const { user, ready } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    applyTheme(themeId);
    persistTheme(themeId);
  }, [themeId]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (!user) return null;

  const board = getExamBoard(user.examBoard);

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };

  return (
    <div className="premium-shell min-h-screen bg-background text-foreground">
      {isNavigating && (
        <div className="route-progress fixed inset-x-0 top-0 z-50 h-1 bg-primary/15">
          <div className="route-progress-fill h-full bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      )}
      <div className="mx-auto flex w-full max-w-7xl">
        <aside className="glass-card sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-sidebar px-4 py-6 md:flex">
          <Link to="/" className="flex items-center gap-2 px-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
              <span className="text-sm font-black">M</span>
            </div>
            <span className="font-bold tracking-tight">MarkWise</span>
          </Link>

          <div className="mt-4 rounded-xl border border-border bg-card p-3">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
                <User className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{user.name}</div>
                <div className="truncate text-[10px] text-muted-foreground">{board?.name}</div>
              </div>
            </div>
            <Link to="/app/profile" className="mt-2 block text-xs text-primary hover:underline">
              View profile
            </Link>
          </div>

          <nav className="mt-6 flex flex-col gap-5 overflow-y-auto pr-1">
            {NAV_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-1.5">
                <div className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "bg-primary/10 text-primary shadow-sm"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <span className="absolute inset-y-1 left-0 w-1 rounded-full bg-primary shadow-glow" />
                        )}
                        <Icon className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:scale-110" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </button>

          <div className="mt-auto rounded-2xl border border-border bg-card p-4 text-sm">
            <div className="font-semibold">Tip of the day</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Always explain — don&apos;t just describe. Examiners reward cause-and-effect linking.
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur md:hidden">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <span className="text-xs font-black">M</span>
              </div>
              <span className="font-bold">MarkWise</span>
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="rounded-md border border-border p-2 text-muted-foreground"
                aria-label="Log out"
              >
                <LogOut className="h-4 w-4" />
              </button>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="rounded-md border border-border p-2"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </header>

          {mobileOpen && (
            <nav className="border-b border-border bg-card p-3 md:hidden">
              {NAV.map((item) => {
                const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                      active ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          )}

          <main className="animate-enter flex-1 px-4 py-6 md:px-8 md:py-10" key={pathname}>
            <Outlet />
          </main>

          <nav className="sticky bottom-0 z-10 grid grid-cols-5 border-t border-border bg-background/95 backdrop-blur md:hidden">
            {MOBILE_NAV.map((item) => {
              const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex flex-col items-center gap-1 py-2 text-[10px] font-medium active:scale-95 ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active ? "animate-pop" : ""}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
