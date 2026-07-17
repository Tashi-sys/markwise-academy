import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  Copy,
  Download,
  GraduationCap,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  BANNER_COLORS,
  createClassroom,
  formatClassroomDate,
  getAssignmentsForClass,
  getClassPosts,
  getUpcomingAssignment,
  joinClassroomByCode,
  type Classroom,
  useClassroomHub,
} from "../lib/classroomHub";
import { useAuth } from "../lib/auth";
import {
  EXAM_BOARDS,
  getExamBoard,
  getQualificationLabel,
  getSubjectName,
  getSubjectsForBoard,
  getSyllabusCode,
  type ExamBoardId,
  type Qualification,
} from "../data/syllabusConfig";

export const Route = createFileRoute("/app/classroom")({
  component: ClassroomHubPage,
});

type SortMode = "updated" | "name" | "due";
type RoleFilter = "all" | "teacher" | "student";

function ClassroomHubPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { classrooms, assignments, posts } = useClassroomHub();
  const [query, setQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [boardFilter, setBoardFilter] = useState<ExamBoardId | "all">("all");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("updated");
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);

  const filtered = useMemo(() => {
    return classrooms
      .filter((room) => {
        if (query && !room.name.toLowerCase().includes(query.toLowerCase())) return false;
        if (subjectFilter !== "all" && room.subject !== subjectFilter) return false;
        if (boardFilter !== "all" && room.examBoard !== boardFilter) return false;
        if (roleFilter !== "all" && room.role !== roleFilter) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortMode === "name") return a.name.localeCompare(b.name);
        if (sortMode === "due") {
          const nextA = getUpcomingForClass(a)?.dueDate ?? "9999-12-31";
          const nextB = getUpcomingForClass(b)?.dueDate ?? "9999-12-31";
          return new Date(nextA).getTime() - new Date(nextB).getTime();
        }
        return b.updatedAt - a.updatedAt;
      });
  }, [boardFilter, classrooms, query, roleFilter, sortMode, subjectFilter]);

  const subjects = [...new Set(classrooms.map((room) => room.subject))];
  const upcoming = getUpcomingAssignment(classrooms, assignments);
  const upcomingClass = upcoming ? classrooms.find((room) => room.id === upcoming.classId) : null;
  const recentPosts = posts
    .filter((post) => classrooms.some((room) => room.id === post.classId))
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 4);

  function getUpcomingForClass(room: Classroom) {
    return getAssignmentsForClass(room.id)
      .filter((assignment) => assignment.status !== "closed" && assignment.dueDate)
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];
  }

  if (!user) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground shadow-soft">
        Loading Classroom Hub…
      </div>
    );
  }

  return (
    <div className="animate-enter space-y-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Classroom workflows
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Classroom Hub</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Create classes, assign revision tasks and track student progress.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setShowJoin(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            <Users className="h-4 w-4" />
            Join Class
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Create Class
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Upcoming assignments</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                The next class task that needs attention.
              </p>
            </div>
            <CalendarClock className="h-5 w-5 text-primary" />
          </div>
          {upcoming && upcomingClass ? (
            <div className="mt-4 rounded-xl border border-border bg-background/70 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold">{upcoming.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {upcomingClass.name} · due {formatClassroomDate(upcoming.dueDate)}
                  </div>
                </div>
                <Link
                  to="/app/classroom-assignment/$classId/$assignmentId"
                  params={{ classId: upcoming.classId, assignmentId: upcoming.id }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
                >
                  Open <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-xl border border-dashed border-border bg-background/60 p-4 text-sm text-muted-foreground">
              Create or join a class to start using classroom assignments.
            </p>
          )}
        </div>

        <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Recent class activity</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Announcements and assignment posts.
              </p>
            </div>
            <ClipboardList className="h-5 w-5 text-primary" />
          </div>
          {recentPosts.length ? (
            <div className="mt-4 space-y-2">
              {recentPosts.map((post) => {
                const room = classrooms.find((classroom) => classroom.id === post.classId);
                return (
                  <div
                    key={post.id}
                    className="rounded-xl border border-border bg-background/70 p-3"
                  >
                    <div className="text-sm font-medium">{post.content}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {room?.name ?? "Class"} · {formatClassroomDate(post.createdAt)}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-4 rounded-xl border border-dashed border-border bg-background/60 p-4 text-sm text-muted-foreground">
              No class activity yet.
            </p>
          )}
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold">My Classes</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your MarkWise revision classes.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            <label className="relative sm:col-span-2">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search classes"
                className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <select
              value={subjectFilter}
              onChange={(event) => setSubjectFilter(event.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="all">All subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {getSubjectName(user.examBoard, subject)}
                </option>
              ))}
            </select>
            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value as RoleFilter)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="all">All roles</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="updated">Recently updated</option>
              <option value="name">Class name A-Z</option>
              <option value="due">Due soon</option>
            </select>
          </div>
        </div>

        {classrooms.length > 0 && (
          <div className="mt-3">
            <select
              value={boardFilter}
              onChange={(event) => setBoardFilter(event.target.value as ExamBoardId | "all")}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="all">All exam boards</option>
              {EXAM_BOARDS.map((board) => (
                <option key={board.id} value={board.id}>
                  {board.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {filtered.length ? (
          <div className="stagger-grid mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((room) => {
              const roomAssignments = getAssignmentsForClass(room.id);
              const upcomingForRoom = getUpcomingForClass(room);
              const board = getExamBoard(room.examBoard);
              return (
                <article
                  key={room.id}
                  className="interactive-card group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <div className={`h-24 bg-gradient-to-br ${room.bannerColor}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold">{room.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {getSubjectName(room.examBoard, room.subject)} · {board?.name}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold capitalize text-primary">
                        {room.role}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <Info label="Code" value={room.classCode} />
                      <Info label="Syllabus" value={room.syllabusCode ?? "No code"} />
                      <Info label="Assignments" value={String(roomAssignments.length)} />
                      <Info
                        label="Next due"
                        value={
                          upcomingForRoom ? formatClassroomDate(upcomingForRoom.dueDate) : "None"
                        }
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Teacher: {room.teacherName}</span>
                      <a
                        href={`/app/classroom-stream/${room.id}`}
                        className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90"
                      >
                        Open
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-border bg-background/60 p-10 text-center">
            <Users className="mx-auto h-9 w-9 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">You are not in any classes yet.</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Create or join a class to get started.
            </p>
            <div className="mt-5 flex justify-center gap-2">
              <button
                onClick={() => setShowCreate(true)}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Create Class
              </button>
              <button
                onClick={() => setShowJoin(true)}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold"
              >
                Join Class
              </button>
            </div>
          </div>
        )}
      </div>

      <ExportPanel classrooms={classrooms} assignments={assignments} />

      {showCreate && (
        <CreateClassPanel
          onClose={() => setShowCreate(false)}
          onCreated={(classroom) => {
            setShowCreate(false);
            toast.success("Class created");
            navigate({ to: "/app/classroom-stream/$classId", params: { classId: classroom.id } });
          }}
        />
      )}
      {showJoin && (
        <JoinClassPanel
          onClose={() => setShowJoin(false)}
          onJoined={(classroom) => {
            setShowJoin(false);
            toast.success("Joined class");
            navigate({ to: "/app/classroom-stream/$classId", params: { classId: classroom.id } });
          }}
        />
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-secondary/60 p-2">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 truncate font-semibold text-foreground">{value}</div>
    </div>
  );
}

function CreateClassPanel({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: (classroom: Classroom) => void;
}) {
  const { user } = useAuth();
  const initialBoard = user?.examBoard ?? "edexcel-igcse";
  const [name, setName] = useState("");
  const [subject, setSubject] = useState(user?.selectedSubjects[0] ?? "biology");
  const [examBoard, setExamBoard] = useState<ExamBoardId>(initialBoard);
  const board = getExamBoard(examBoard);
  const qualification = board?.qualification ?? user?.qualification ?? "IGCSE";
  const [teacherName, setTeacherName] = useState(user?.name ?? "");
  const [description, setDescription] = useState("");
  const [bannerColor, setBannerColor] = useState(BANNER_COLORS[0]);
  const subjects = getSubjectsForBoard(examBoard);
  const syllabusCode = getSyllabusCode(examBoard, subject);

  function submit() {
    if (!name.trim()) {
      toast.error("Class name is required");
      return;
    }
    const classroom = createClassroom({
      name: name.trim(),
      subject,
      qualification,
      examBoard,
      syllabusCode,
      teacherName: teacherName.trim() || "Teacher",
      description,
      bannerColor,
      role: "teacher",
    });
    onCreated(classroom);
  }

  return (
    <ModalShell title="Create Class" onClose={onClose}>
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Class name" value={name} onChange={setName} placeholder="Year 11 Chemistry" />
        <Field label="Teacher name" value={teacherName} onChange={setTeacherName} />
        <label className="space-y-1 text-sm">
          <span className="font-medium">Exam board</span>
          <select
            value={examBoard}
            onChange={(event) => {
              const next = event.target.value as ExamBoardId;
              setExamBoard(next);
              setSubject(getSubjectsForBoard(next)[0]?.id ?? "biology");
            }}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          >
            {EXAM_BOARDS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium">Subject</span>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          >
            {subjects.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <Info label="Qualification" value={getQualificationLabel(qualification as Qualification)} />
        <Info label="Syllabus code" value={syllabusCode ?? "No code"} />
      </div>
      <label className="mt-3 block space-y-1 text-sm">
        <span className="font-medium">Description</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="min-h-24 w-full rounded-lg border border-border bg-background px-3 py-2"
          placeholder="What this class is working on..."
        />
      </label>
      <div className="mt-3 flex flex-wrap gap-2">
        {BANNER_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setBannerColor(color)}
            className={`h-8 w-14 rounded-lg bg-gradient-to-br ${color} ${
              bannerColor === color
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : ""
            }`}
            aria-label="Choose banner color"
          />
        ))}
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <button onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm">
          Cancel
        </button>
        <button
          onClick={submit}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Create Class
        </button>
      </div>
    </ModalShell>
  );
}

function JoinClassPanel({
  onClose,
  onJoined,
}: {
  onClose: () => void;
  onJoined: (classroom: Classroom) => void;
}) {
  const [code, setCode] = useState("");

  function submit() {
    const joined = joinClassroomByCode(code);
    if (!joined) {
      toast.error("Class code not found locally");
      return;
    }
    onJoined(joined);
  }

  return (
    <ModalShell title="Join Class" onClose={onClose}>
      <p className="text-sm text-muted-foreground">
        Enter a local MarkWise class code, for example MW-8A2K.
      </p>
      <Field label="Class code" value={code} onChange={setCode} placeholder="MW-8A2K" />
      <div className="mt-5 flex justify-end gap-2">
        <button onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm">
          Cancel
        </button>
        <button
          onClick={submit}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Join Class
        </button>
      </div>
    </ModalShell>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="mt-3 block space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3 py-2"
      />
    </label>
  );
}

function ModalShell({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/70 p-4 backdrop-blur">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="rounded-full border border-border px-3 py-1 text-sm">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ExportPanel({
  classrooms,
  assignments,
}: {
  classrooms: Classroom[];
  assignments: ReturnType<typeof useClassroomHub>["assignments"];
}) {
  const summary = classrooms
    .map((room) => {
      const count = assignments.filter((assignment) => assignment.classId === room.id).length;
      return `${room.name} (${room.classCode}) — ${count} assignment${count === 1 ? "" : "s"}`;
    })
    .join("\n");

  function download(filename: string, content: string, type = "text/plain") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <h2 className="text-lg font-semibold">Export tools</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Copy summaries or download local Classroom Hub data.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => {
            navigator.clipboard?.writeText(summary || "No classes yet.");
            toast.success("Class summary copied");
          }}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
        >
          <Copy className="h-4 w-4" />
          Copy class summary
        </button>
        <button
          onClick={() =>
            download(
              "markwise-classroom-data.json",
              JSON.stringify({ classrooms, assignments }, null, 2),
              "application/json",
            )
          }
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
        >
          <Download className="h-4 w-4" />
          Download JSON
        </button>
        <button
          onClick={() =>
            download(
              "markwise-assignments.md",
              assignments
                .map((item) => `- ${item.title} — due ${item.dueDate || "No date"}`)
                .join("\n") || "No assignments yet.",
              "text/markdown",
            )
          }
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
        >
          <Download className="h-4 w-4" />
          Assignment list Markdown
        </button>
      </div>
    </div>
  );
}
