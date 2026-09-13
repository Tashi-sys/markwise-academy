import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BookOpenCheck,
  FileText,
  NotebookTabs,
  ListChecks,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../lib/auth";
import { subjectToolSearch, resolveUserSubjectScope, scopeSearch } from "../lib/subjectScope";

export const Route = createFileRoute("/app/subject/$subject")({
  validateSearch: (search) => subjectToolSearch.parse(search),
  component: SubjectHub,
});

const tools = [
  {
    title: "AI Tutor",
    description: "Ask questions and get help for this syllabus.",
    icon: Bot,
    to: "/app/ai-tutor",
  },
  {
    title: "Revision Notes",
    description: "Turn your sources into focused revision notes.",
    icon: FileText,
    to: "/app/study-notebook",
    view: "notes" as const,
  },
  {
    title: "Model Answers",
    description: "Study answers and markscheme points for this subject.",
    icon: BookOpenCheck,
    to: "/app/model-answers",
  },
  {
    title: "Notebook",
    description: "Keep your notes, sources, and study conversations together.",
    icon: NotebookTabs,
    to: "/app/study-notebook",
    view: "notebook" as const,
  },
  {
    title: "Practice",
    description: "Choose a topic and practise questions from your syllabus.",
    icon: ListChecks,
    to: "/app/practice/",
  },
  {
    title: "Generate Question",
    description: "Create an original practice question for a topic and paper.",
    icon: Sparkles,
    to: "/app/generate",
  },
];

function SubjectHub() {
  const { user } = useAuth();
  const { subject } = Route.useParams();
  const search = Route.useSearch();
  if (!user) return null;
  const scope = resolveUserSubjectScope(user, { ...search, subject });
  if (!scope)
    return (
      <div className="space-y-4 rounded-2xl border border-border bg-card p-8">
        <h1 className="text-2xl font-bold">Choose a subject from your profile</h1>
        <Link to="/app/subjects" className="font-semibold text-primary">
          Back to subjects
        </Link>
      </div>
    );
  return (
    <div className="space-y-7">
      <Link
        to="/app/subjects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> All subjects
      </Link>
      <header>
        <p className="text-sm font-semibold text-primary">
          {scope.boardName} · {scope.syllabusCode}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{scope.subjectName}</h1>
        <p className="mt-2 text-muted-foreground">Choose how you want to study.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tools.map(({ title, description, icon: Icon, to, view }) => (
          <Link
            key={title}
            to={to}
            search={{ ...scopeSearch(scope), ...(view ? { view } : {}) }}
            className="interactive-card group rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/50"
          >
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
