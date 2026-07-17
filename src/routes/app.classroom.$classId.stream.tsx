import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  ClipboardCheck,
  Copy,
  MessageSquare,
  Plus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  createClassPost,
  deleteClassPost,
  formatClassroomDate,
  getAssignmentsForClass,
  getClassById,
  getClassPosts,
  getSubmissionsForAssignment,
} from "../lib/classroomHub";
import { useAuth } from "../lib/auth";
import { getExamBoard, getQualificationLabel, getSubjectName } from "../data/syllabusConfig";

export const Route = createFileRoute("/app/classroom/$classId/stream")({
  component: ClassroomStreamPage,
});

function ClassroomStreamPage() {
  const { classId } = Route.useParams();
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [revision, setRevision] = useState(0);
  const classroom = getClassById(classId);

  if (!user) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground shadow-soft">
        Loading classroom...
      </div>
    );
  }

  if (!classroom) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <h1 className="text-2xl font-bold">Class not found</h1>
        <p className="mt-2 text-muted-foreground">Open this class again from Classroom Hub.</p>
        <Link
          to="/app/classroom"
          className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Back to Classroom Hub
        </Link>
      </div>
    );
  }

  const posts = getClassPosts(classId);
  const assignments = getAssignmentsForClass(classId);
  const activeAssignments = assignments.filter((assignment) => assignment.status !== "closed");
  const nextAssignment = activeAssignments
    .filter((assignment) => assignment.dueDate)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];
  const board = getExamBoard(classroom.examBoard);

  function postAnnouncement() {
    if (!message.trim()) return;
    createClassPost({
      classId: classroom.id,
      authorName: user.name,
      authorRole: classroom.role,
      content: message.trim(),
      type: "announcement",
    });
    setMessage("");
    setRevision((value) => value + 1);
    toast.success("Posted to stream");
  }

  return (
    <div className="animate-enter space-y-6" data-revision={revision}>
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/app/classroom"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Classroom Hub
        </Link>
        <Link
          to="/app/classroom/$classId"
          params={{ classId }}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
        >
          Manage class
        </Link>
      </div>

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className={"bg-gradient-to-br " + classroom.bannerColor + " p-7 text-white md:p-10"}>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-white/80">{classroom.classCode}</div>
            <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
              {classroom.name}
            </h1>
            <p className="mt-3 max-w-2xl text-white/85">
              {classroom.description || "Announcements, classwork and revision tasks live here."}
            </p>
          </div>
        </div>
        <div className="grid gap-3 p-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <Mini label="Subject" value={getSubjectName(classroom.examBoard, classroom.subject)} />
          <Mini label="Exam board" value={board?.name ?? classroom.examBoard} />
          <Mini label="Qualification" value={getQualificationLabel(classroom.qualification)} />
          <Mini label="Syllabus" value={classroom.syllabusCode ?? "No code"} />
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[19rem_1fr]">
        <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
          <Card title="Class code" icon={<Users className="h-4 w-4 text-primary" />}>
            <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-center">
              <div className="font-mono text-xl font-black tracking-widest">{classroom.classCode}</div>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(classroom.classCode);
                  toast.success("Class code copied");
                }}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <Copy className="h-4 w-4" />
                Copy
              </button>
            </div>
          </Card>

          <Card title="Upcoming" icon={<CalendarClock className="h-4 w-4 text-primary" />}>
            {nextAssignment ? (
              <div className="rounded-xl border border-border bg-background/70 p-3">
                <div className="font-semibold">{nextAssignment.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Due {formatClassroomDate(nextAssignment.dueDate)}
                </div>
                <Link
                  to="/app/classroom-assignment/$classId/$assignmentId"
                  params={{ classId, assignmentId: nextAssignment.id }}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Open task <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Nothing due yet.</p>
            )}
          </Card>
        </aside>

        <main className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {user.name.slice(0, 1)}
              </div>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="min-h-20 flex-1 resize-none rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
                placeholder="Announce something to your class"
              />
            </div>
            <div className="mt-3 flex justify-end">
              <button
                onClick={postAnnouncement}
                disabled={!message.trim()}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Classwork</h2>
                <p className="text-sm text-muted-foreground">
                  {assignments.length} assignment{assignments.length === 1 ? "" : "s"} in this class.
                </p>
              </div>
              <Link
                to="/app/classroom/$classId"
                params={{ classId }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                <Plus className="h-4 w-4" />
                Create
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {assignments.length ? (
                assignments.slice(0, 5).map((assignment) => {
                  const submitted = getSubmissionsForAssignment(assignment.id).length;
                  return (
                    <Link
                      key={assignment.id}
                      to="/app/classroom-assignment/$classId/$assignmentId"
                      params={{ classId, assignmentId: assignment.id }}
                      className="interactive-card flex items-start gap-4 rounded-xl border border-border bg-background/70 p-4"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                        <ClipboardCheck className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold">{assignment.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {assignment.topic || "Mixed topics"} · due {formatClassroomDate(assignment.dueDate)} · {submitted} submitted
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  );
                })
              ) : (
                <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                  No classwork yet. Use Manage class to create an assignment.
                </p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {posts.length ? (
              posts.map((post) => (
                <article key={post.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-sm font-bold text-primary">
                        {post.authorName.slice(0, 1)}
                      </div>
                      <div>
                        <div className="font-semibold">{post.authorName}</div>
                        <div className="text-xs text-muted-foreground">
                          {post.authorRole} · {formatClassroomDate(post.createdAt)}
                        </div>
                      </div>
                    </div>
                    {classroom.role === "teacher" && (
                      <button
                        onClick={() => {
                          deleteClassPost(post.id);
                          setRevision((value) => value + 1);
                        }}
                        className="text-xs font-semibold text-destructive"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">{post.content}</p>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <MessageSquare className="mx-auto h-9 w-9 text-muted-foreground" />
                <h2 className="mt-4 text-xl font-semibold">No stream posts yet.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Announcements and assignment updates will appear here.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/70 p-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 truncate font-semibold">{value}</div>
    </div>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-semibold">{title}</h2>
        {icon}
      </div>
      {children}
    </section>
  );
}
