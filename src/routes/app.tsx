import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  BookMarked,
  ListChecks,
  LineChart,
  History,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "MarkWise — Dashboard" },
      { name: "description", content: "Your IGCSE practice dashboard." },
    ],
  }),
  component: AppLayout,
});

const NAV = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/subjects", label: "Subjects", icon: BookMarked, exact: false },
  { to: "/app/practice", label: "Practise", icon: ListChecks, exact: false },
  { to: "/app/progress", label: "Progress", icon: LineChart, exact: false },
  { to: "/app/review", label: "Review", icon: History, exact: false },
];

function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-sidebar px-4 py-6 md:flex">
          <Link to="/" className="flex items-center gap-2 px-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
              <span className="text-sm font-black">M</span>
            </div>
            <span className="font-bold tracking-tight">MarkWise</span>
          </Link>
          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map((item) => {
              const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-border bg-card p-4 text-sm">
            <div className="font-semibold">Tip of the day</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Always explain — don't just describe. Examiners reward cause-and-effect linking.
            </p>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile header */}
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur md:hidden">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <span className="text-xs font-black">M</span>
              </div>
              <span className="font-bold">MarkWise</span>
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-md border border-border p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
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

          <main className="flex-1 px-4 py-6 md:px-8 md:py-10">
            <Outlet />
          </main>

          {/* Mobile bottom nav */}
          <nav className="sticky bottom-0 z-10 grid grid-cols-5 border-t border-border bg-background/95 backdrop-blur md:hidden">
            {NAV.map((item) => {
              const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex flex-col items-center gap-1 py-2 text-[10px] font-medium ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
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