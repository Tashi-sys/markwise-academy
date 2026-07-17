import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  Copy,
  Download,
  FileText,
  MessageSquare,
  Pencil,
  Plus,
  Printer,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  BANNER_COLORS,
  MOCK_CLASS_STUDENTS,
  createAssignment,
  createClassPost,
  deleteAssignment,
  deleteClassPost,
  deleteClassroom,
  findQuestionsForAssignment,
  formatClassroomDate,
  getAssignmentsForClass,
  getClassById,
  getClassPosts,
  getSubmissionsForAssignment,
  updateAssignment,
  updateClassroom,
  type Assignment,
  type Classroom,
  type ClassroomAssignmentStatus,
  type ClassroomAssignmentType,
  useClassroomHub,
} from "../lib/classroomHub";
import { useAuth } from "../lib/auth";
import { filterQuestions } from "../data/questionBank";
import {
  EXAM_BOARDS,
  getExamBoard,
  getQualificationLabel,
  getSubjectName,
  getSubjectsForBoard,
  getSyllabusCode,
  type ExamBoardId,
} from "../data/syllabusConfig";

export const Route = createFileRoute("/app/classroom/$classId")({
  loader: ({ params }) => ({ classId: params.classId }),
  component: ClassroomDetailPage,
});

type TabId = "stream" | "assignments" | "people" | "progress" | "settings";
type AssignmentFilter = "all" | "assigned" | "draft" | "closed" | "due-soon" | "overdue";

function ClassroomDetailPage() {
  const { classId } = Route.useParams();
  const { user } = useAuth();
  const { refresh } = useClassroomHub();
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabId>("stream");
  const [assignmentFilter, setAssignmentFilter] = useState<AssignmentFilter>("all");
  const [showCreateAssignment, setShowCreateAssignment] = useState(false);

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
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          This class could not be found in your local Classroom Hub data. Go back and open it from
          your class list again.
        </p>
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
  const filteredAssignments = filterAssignments(assignments, assignmentFilter);
  const isTeacher = classroom.role === "teacher";
  const board = getExamBoard(classroom.examBoard);
  const stats = getClassStats(assignments);

  function sync() {
    refresh();
  }

  return (
    <div className="animate-enter space-y-7">
      <div className={`overflow-hidden rounded-2xl border border-border bg-card shadow-soft`}>
        <div className={`bg-gradient-to-br ${classroom.bannerColor} p-6 text-white md:p-8`}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link
                to="/app/classroom"
                className="text-sm font-semibold text-white/80 hover:text-white"
              >
                Classroom Hub
              </Link>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">{classroom.name}</h1>
              <p className="mt-2 max-w-2xl text-white/85">
                {classroom.description || "No description yet."}
              </p>
            </div>
            <div className="rounded-2xl bg-white/15 p-4 text-sm backdrop-blur">
              <div className="font-semibold">{classroom.classCode}</div>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(classroom.classCode);
                  toast.success("Class code copied");
                }}
                className="mt-1 inline-flex items-center gap-1 text-xs text-white/85 hover:text-white"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy invite code
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-3 p-4 text-sm sm:grid-cols-2 lg:grid-cols-5">
          <Mini label="Subject" value={getSubjectName(classroom.examBoard, classroom.subject)} />
          <Mini label="Exam board" value={board?.name ?? classroom.examBoard} />
          <Mini label="Qualification" value={getQualificationLabel(classroom.qualification)} />
          <Mini label="Syllabus" value={classroom.syllabusCode ?? "No code"} />
          <Mini label="Teacher" value={classroom.teacherName} />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto rounded-2xl border border-border bg-card p-2 shadow-soft">
        {[
          ["stream", "Stream", MessageSquare],
          ["assignments", "Classwork", ClipboardCheck],
          ["people", "People", Users],
          ["progress", "Grades", BarChart3],
          ["settings", "Settings", Settings],
        ].map(([id, label, Icon]) => (
          <button
            key={id as string}
            onClick={() => setTab(id as TabId)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tab === id ? "bg-primary text-primary-foreground shadow-glow" : "hover:bg-secondary"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {tab === "stream" && (
        <StreamTab
          classroom={classroom}
          posts={posts}
          assignments={assignments}
          onCreateAssignment={() => navigate({ to: "/app/classroom-task/$classId", params: { classId } })}
          onChange={sync}
        />
      )}
      {tab === "assignments" && (
        <AssignmentsTab
          classroom={classroom}
          assignments={filteredAssignments}
          rawAssignments={assignments}
          filter={assignmentFilter}
          setFilter={setAssignmentFilter}
          onCreate={() => navigate({ to: "/app/classroom-task/$classId", params: { classId } })}
          onChange={sync}
        />
      )}
      {tab === "people" && <PeopleTab classroom={classroom} assignments={assignments} />}
      {tab === "progress" && <ProgressTab assignments={assignments} stats={stats} />}
      {tab === "settings" && (
        <SettingsTab
          classroom={classroom}
          onChange={sync}
          onDeleted={() => navigate({ to: "/app/classroom" })}
        />
      )}

      {showCreateAssignment && (
        <CreateAssignmentPanel
          classroom={classroom}
          onClose={() => setShowCreateAssignment(false)}
          onCreated={(assignment) => {
            setShowCreateAssignment(false);
            sync();
            toast.success("Assignment created");
            navigate({
              to: "/app/classroom-assignment/$classId/$assignmentId",
              params: { classId, assignmentId: assignment.id },
            });
          }}
        />
      )}
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/70 p-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 truncate font-semibold">{value}</div>
    </div>
  );
}

function StreamTab({
  classroom,
  posts,
  assignments,
  onCreateAssignment,
  onChange,
}: {
  classroom: Classroom;
  posts: ReturnType<typeof getClassPosts>;
  assignments: Assignment[];
  onCreateAssignment: () => void;
  onChange: () => void;
}) {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const activeAssignments = assignments.filter((assignment) => assignment.status !== "closed");
  const nextAssignment = activeAssignments
    .filter((assignment) => assignment.dueDate)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];

  function submit() {
    if (!content.trim()) return;
    createClassPost({
      classId: classroom.id,
      authorName: user?.name ?? "You",
      authorRole: classroom.role,
      content: content.trim(),
      attachments: [],
      type: "announcement",
    });
    setContent("");
    onChange();
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[18rem_1fr]">
      <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Class code
          </div>
          <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-3">
            <span className="font-mono text-lg font-black tracking-widest">{classroom.classCode}</span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(classroom.classCode);
                toast.success("Class code copied");
              }}
              className="rounded-full border border-border bg-background p-2 text-muted-foreground hover:text-primary"
              aria-label="Copy class code"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-semibold">Upcoming</h2>
            <CalendarClock className="h-4 w-4 text-primary" />
          </div>
          {nextAssignment ? (
            <div className="mt-4 rounded-xl border border-border bg-background/70 p-3">
              <div className="text-sm font-semibold">{nextAssignment.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Due {formatClassroomDate(nextAssignment.dueDate)}
              </div>
              <Link
                to="/app/classroom-assignment/$classId/$assignmentId"
                params={{ classId: classroom.id, assignmentId: nextAssignment.id }}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Open task <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">No work due soon.</p>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 text-sm shadow-soft">
          <h2 className="font-semibold">Class details</h2>
          <div className="mt-4 space-y-3 text-muted-foreground">
            <div>{getSubjectName(classroom.examBoard, classroom.subject)}</div>
            <div>{getExamBoard(classroom.examBoard)?.name ?? classroom.examBoard}</div>
            <div>{classroom.syllabusCode ?? "No syllabus code"}</div>
          </div>
        </div>
      </aside>

      <main className="space-y-4">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="flex gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {(user?.name ?? "Y").slice(0, 1)}
            </div>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="min-h-20 flex-1 resize-none rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              placeholder="Announce something to your class"
            />
          </div>
          <div className="mt-3 flex justify-end gap-2">
            {classroom.role === "teacher" && (
              <button
                onClick={onCreateAssignment}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                <Plus className="h-4 w-4" />
                Assignment
              </button>
            )}
            <button
              onClick={submit}
              disabled={!content.trim()}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Post
            </button>
          </div>
        </div>

        {activeAssignments.slice(0, 3).map((assignment) => (
          <Link
            key={assignment.id}
            to="/app/classroom-assignment/$classId/$assignmentId"
            params={{ classId: classroom.id, assignmentId: assignment.id }}
            className="interactive-card flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold">{assignment.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {assignment.topic || "Mixed topics"} · due {formatClassroomDate(assignment.dueDate)}
              </div>
            </div>
            <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground" />
          </Link>
        ))}

        {posts.length ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="interactive-card rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
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
                      onChange();
                    }}
                    className="rounded-full border border-border p-2 text-muted-foreground hover:text-destructive"
                    aria-label="Delete post"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">{post.content}</p>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <MessageSquare className="mx-auto h-9 w-9 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">No stream posts yet.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Announcements and assignment updates will appear here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
function AssignmentsTab({
  classroom,
  assignments,
  rawAssignments,
  filter,
  setFilter,
  onCreate,
  onChange,
}: {
  classroom: Classroom;
  assignments: Assignment[];
  rawAssignments: Assignment[];
  filter: AssignmentFilter;
  setFilter: (filter: AssignmentFilter) => void;
  onCreate: () => void;
  onChange: () => void;
}) {
  return (
    <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Assignments</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {rawAssignments.length} task{rawAssignments.length === 1 ? "" : "s"} in this class.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value as AssignmentFilter)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            <option value="all">All</option>
            <option value="assigned">Assigned</option>
            <option value="draft">Draft</option>
            <option value="closed">Closed</option>
            <option value="due-soon">Due soon</option>
            <option value="overdue">Overdue</option>
          </select>
          {classroom.role === "teacher" && (
            <button
              onClick={onCreate}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Plus className="h-4 w-4" />
              Create Assignment
            </button>
          )}
        </div>
      </div>

      {assignments.length ? (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {assignments.map((assignment) => {
            const submissions = getSubmissionsForAssignment(assignment.id);
            const submitted = submissions.filter((submission) =>
              ["submitted", "marked", "late"].includes(submission.status),
            ).length;
            const notStarted = Math.max(0, MOCK_CLASS_STUDENTS.length - submitted);
            return (
              <div
                key={assignment.id}
                className="interactive-card rounded-2xl border border-border bg-background/70 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{assignment.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {assignment.assignmentType} · {assignment.topic || "Mixed topics"}
                    </div>
                  </div>
                  <StatusBadge status={assignment.status} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <Mini label="Due" value={formatClassroomDate(assignment.dueDate)} />
                  <Mini label="Points" value={String(assignment.points)} />
                  <Mini label="Submitted" value={String(submitted)} />
                  <Mini label="Not started" value={String(notStarted)} />
                </div>
                <div className="mt-4 flex flex-wrap justify-between gap-2">
                  <Link
                    to="/app/classroom-assignment/$classId/$assignmentId"
                    params={{ classId: classroom.id, assignmentId: assignment.id }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    {classroom.role === "teacher" ? "Open" : "Start"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {classroom.role === "teacher" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          updateAssignment(assignment.id, {
                            status: assignment.status === "closed" ? "assigned" : "closed",
                          });
                          onChange();
                        }}
                        className="rounded-full border border-border px-3 py-2 text-xs font-semibold"
                      >
                        {assignment.status === "closed" ? "Reopen" : "Close"}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete this assignment?")) {
                            deleteAssignment(assignment.id);
                            onChange();
                          }
                        }}
                        className="rounded-full border border-border px-3 py-2 text-xs font-semibold text-destructive"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-border bg-background/60 p-10 text-center">
          <ClipboardCheck className="mx-auto h-9 w-9 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">No assignments yet.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Create a task from the MarkWise question bank.
          </p>
        </div>
      )}
    </div>
  );
}

function CreateAssignmentPanel({
  classroom,
  onClose,
  onCreated,
}: {
  classroom: Classroom;
  onClose: () => void;
  onCreated: (assignment: Assignment) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignmentType, setAssignmentType] =
    useState<ClassroomAssignmentType>("practice-questions");
  const [topic, setTopic] = useState("");
  const [paper, setPaper] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [points, setPoints] = useState(20);
  const [difficulty, setDifficulty] = useState<"any" | "easy" | "medium" | "hard">("any");
  const [questionCount, setQuestionCount] = useState(8);
  const [manualIds, setManualIds] = useState<string[]>([]);
  const [status, setStatus] = useState<ClassroomAssignmentStatus>("assigned");

  const matches = useMemo(
    () =>
      findQuestionsForAssignment({
        qualification: classroom.qualification,
        examBoard: classroom.examBoard,
        subject: classroom.subject,
        syllabusCode: classroom.syllabusCode,
        topic,
        paper,
        difficulty,
      }),
    [classroom, difficulty, paper, topic],
  );
  const topics = [
    ...new Set(
      filterQuestions({
        qualification: classroom.qualification,
        examBoard: classroom.examBoard,
        subject: classroom.subject,
        syllabusCode: classroom.syllabusCode,
      }).map((question) => question.topic),
    ),
  ];
  const chosenIds = manualIds.length
    ? manualIds
    : matches.slice(0, questionCount).map((question) => question.id);

  function submit() {
    if (!title.trim()) {
      toast.error("Assignment title is required");
      return;
    }
    const assignment = createAssignment({
      classId: classroom.id,
      title: title.trim(),
      description,
      subject: classroom.subject,
      qualification: classroom.qualification,
      examBoard: classroom.examBoard,
      syllabusCode: classroom.syllabusCode,
      topic,
      paper,
      dueDate,
      points,
      assignmentType,
      linkedQuestionIds: chosenIds,
      status,
    });
    onCreated(assignment);
  }

  return (
    <ModalShell title="Create Assignment" onClose={onClose}>
      <div className="grid gap-3 md:grid-cols-2">
        <Field
          label="Title"
          value={title}
          onChange={setTitle}
          placeholder="Electrolysis practice"
        />
        <label className="mt-3 block space-y-1 text-sm">
          <span className="font-medium">Assignment type</span>
          <select
            value={assignmentType}
            onChange={(event) => setAssignmentType(event.target.value as ClassroomAssignmentType)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          >
            <option value="practice-questions">Practice questions</option>
            <option value="mini-mock">Mini mock</option>
            <option value="written-task">Written task</option>
            <option value="flashcards">Flashcards</option>
            <option value="revision-note">Revision note</option>
          </select>
        </label>
        <label className="mt-3 block space-y-1 text-sm">
          <span className="font-medium">Topic</span>
          <select
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
              setManualIds([]);
            }}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          >
            <option value="">All topics</option>
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <Field label="Paper contains" value={paper} onChange={setPaper} placeholder="Paper 1" />
        <label className="mt-3 block space-y-1 text-sm">
          <span className="font-medium">Due date</span>
          <input
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </label>
        <label className="mt-3 block space-y-1 text-sm">
          <span className="font-medium">Difficulty</span>
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value as typeof difficulty)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2"
          >
            <option value="any">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <NumberField label="Points" value={points} onChange={setPoints} />
        <NumberField
          label="Auto-pick questions"
          value={questionCount}
          onChange={setQuestionCount}
        />
      </div>
      <label className="mt-3 block space-y-1 text-sm">
        <span className="font-medium">Description</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="min-h-24 w-full rounded-lg border border-border bg-background px-3 py-2"
        />
      </label>

      <div className="mt-5 rounded-2xl border border-border bg-background/70 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold">Question bank link</h3>
            <p className="text-sm text-muted-foreground">
              {matches.length} matching question{matches.length === 1 ? "" : "s"} for{" "}
              {classroom.syllabusCode ?? "this syllabus"}.
            </p>
          </div>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as ClassroomAssignmentStatus)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            <option value="assigned">Assigned</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        {matches.length ? (
          <div className="mt-3 max-h-64 space-y-2 overflow-y-auto pr-1">
            {matches.slice(0, 30).map((question) => (
              <label
                key={question.id}
                className="flex gap-3 rounded-xl border border-border bg-card p-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={manualIds.includes(question.id)}
                  onChange={(event) =>
                    setManualIds((current) =>
                      event.target.checked
                        ? [...current, question.id]
                        : current.filter((id) => id !== question.id),
                    )
                  }
                />
                <span className="line-clamp-2 flex-1">{question.questionText}</span>
                <span className="text-xs text-muted-foreground">{question.marks}m</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="mt-3 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
            No questions found for this selection.
          </p>
        )}
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm">
          Cancel
        </button>
        <button
          onClick={submit}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Create Assignment
        </button>
      </div>
    </ModalShell>
  );
}

function PeopleTab({
  classroom,
  assignments,
}: {
  classroom: Classroom;
  assignments: Assignment[];
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
      <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Invite code</h2>
        <p className="mt-1 text-sm text-muted-foreground">Share this code with students.</p>
        <div className="mt-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-center">
          <div className="text-2xl font-black tracking-widest">{classroom.classCode}</div>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(classroom.classCode);
              toast.success("Class code copied");
            }}
            className="mt-3 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Copy code
          </button>
        </div>
      </div>
      <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h2 className="text-lg font-semibold">People</h2>
        <div className="mt-4 space-y-2">
          <PersonRow
            name={classroom.teacherName}
            role="Teacher"
            completed={assignments.length}
            average={92}
          />
          {MOCK_CLASS_STUDENTS.map((student, index) => (
            <PersonRow
              key={student}
              name={student}
              role="Student"
              completed={Math.max(0, assignments.length - (index % 2))}
              average={[84, 72, 66, 91][index] ?? 78}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonRow({
  name,
  role,
  completed,
  average,
}: {
  name: string;
  role: string;
  completed: number;
  average: number;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {name.slice(0, 1)}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
      <div className="text-right text-xs text-muted-foreground">
        <div>{completed} completed</div>
        <div>{average}% avg</div>
      </div>
    </div>
  );
}

function ProgressTab({
  assignments,
  stats,
}: {
  assignments: Assignment[];
  stats: ReturnType<typeof getClassStats>;
}) {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        <Mini label="Assignments" value={String(stats.totalAssignments)} />
        <Mini label="Submissions" value={String(stats.completedSubmissions)} />
        <Mini label="Average" value={`${stats.averageScore}%`} />
        <Mini label="Overdue" value={String(stats.overdueAssignments)} />
        <Mini label="Most practised" value={stats.mostPractisedTopic} />
        <Mini label="Weakest" value={stats.weakestTopic} />
      </div>
      <div className="glass-card overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className="border-b border-border p-5">
          <h2 className="text-lg font-semibold">Assignment progress</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/70 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Assignment</th>
                <th className="px-4 py-3">Due</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Average</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => {
                const submissions = getSubmissionsForAssignment(assignment.id);
                const scored = submissions.filter((submission) => submission.totalMarks);
                const average = scored.length
                  ? Math.round(
                      scored.reduce(
                        (sum, submission) =>
                          sum + ((submission.score ?? 0) / (submission.totalMarks ?? 1)) * 100,
                        0,
                      ) / scored.length,
                    )
                  : 0;
                return (
                  <tr key={assignment.id} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{assignment.title}</td>
                    <td className="px-4 py-3">{formatClassroomDate(assignment.dueDate)}</td>
                    <td className="px-4 py-3">{submissions.length}</td>
                    <td className="px-4 py-3">{average}%</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={assignment.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SettingsTab({
  classroom,
  onChange,
  onDeleted,
}: {
  classroom: Classroom;
  onChange: () => void;
  onDeleted: () => void;
}) {
  const [name, setName] = useState(classroom.name);
  const [description, setDescription] = useState(classroom.description);
  const [examBoard, setExamBoard] = useState(classroom.examBoard);
  const [subject, setSubject] = useState(classroom.subject);
  const [bannerColor, setBannerColor] = useState(classroom.bannerColor);
  const isTeacher = classroom.role === "teacher";
  const subjects = getSubjectsForBoard(examBoard);

  function save() {
    updateClassroom(classroom.id, {
      name,
      description,
      examBoard,
      qualification: getExamBoard(examBoard)?.qualification ?? classroom.qualification,
      subject,
      syllabusCode: getSyllabusCode(examBoard, subject),
      bannerColor,
    });
    toast.success("Class settings saved");
    onChange();
  }

  return (
    <div className="glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <h2 className="text-lg font-semibold">Settings</h2>
      {isTeacher ? (
        <>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Field label="Class name" value={name} onChange={setName} />
            <label className="mt-3 block space-y-1 text-sm">
              <span className="font-medium">Exam board</span>
              <select
                value={examBoard}
                onChange={(event) => {
                  const next = event.target.value as ExamBoardId;
                  setExamBoard(next);
                  setSubject(getSubjectsForBoard(next)[0]?.id ?? subject);
                }}
                className="w-full rounded-lg border border-border bg-background px-3 py-2"
              >
                {EXAM_BOARDS.map((board) => (
                  <option key={board.id} value={board.id}>
                    {board.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-3 block space-y-1 text-sm">
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
          </div>
          <label className="mt-3 block space-y-1 text-sm">
            <span className="font-medium">Description</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="min-h-24 w-full rounded-lg border border-border bg-background px-3 py-2"
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
          <button
            onClick={save}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Pencil className="h-4 w-4" />
            Save settings
          </button>
        </>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">Only teachers can edit class settings.</p>
      )}
      <div className="mt-8 rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
        <h3 className="font-semibold text-destructive">Danger zone</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {isTeacher ? "Delete this local class and its assignments." : "Leave this local class."}
        </p>
        <button
          onClick={() => {
            if (confirm(isTeacher ? "Delete this class?" : "Leave this class?")) {
              deleteClassroom(classroom.id);
              onDeleted();
            }
          }}
          className="mt-3 rounded-full bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground"
        >
          {isTeacher ? "Delete class" : "Leave class"}
        </button>
      </div>
    </div>
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

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mt-3 block space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
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
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-2xl">
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

function StatusBadge({ status }: { status: ClassroomAssignmentStatus }) {
  const className =
    status === "assigned"
      ? "bg-success/15 text-success"
      : status === "draft"
        ? "bg-warning/15 text-warning"
        : "bg-secondary text-muted-foreground";
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${className}`}>
      {status}
    </span>
  );
}

function filterAssignments(assignments: Assignment[], filter: AssignmentFilter) {
  const now = new Date();
  const soon = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  return assignments.filter((assignment) => {
    const due = assignment.dueDate ? new Date(assignment.dueDate) : null;
    if (filter === "all") return true;
    if (filter === "due-soon") return due && due >= now && due <= soon;
    if (filter === "overdue") return due && due < now && assignment.status !== "closed";
    return assignment.status === filter;
  });
}

function getClassStats(assignments: Assignment[]) {
  const submissions = assignments.flatMap((assignment) =>
    getSubmissionsForAssignment(assignment.id),
  );
  const scored = submissions.filter((submission) => submission.totalMarks);
  const averageScore = scored.length
    ? Math.round(
        scored.reduce(
          (sum, submission) => sum + ((submission.score ?? 0) / (submission.totalMarks ?? 1)) * 100,
          0,
        ) / scored.length,
      )
    : 0;
  const overdueAssignments = assignments.filter(
    (assignment) =>
      assignment.dueDate &&
      new Date(assignment.dueDate).getTime() < Date.now() &&
      assignment.status !== "closed",
  ).length;
  const topics = assignments.map((assignment) => assignment.topic).filter(Boolean) as string[];
  const mostPractisedTopic = topics[0] ?? "None yet";
  return {
    totalAssignments: assignments.length,
    completedSubmissions: submissions.filter((submission) =>
      ["submitted", "marked", "late"].includes(submission.status),
    ).length,
    averageScore,
    overdueAssignments,
    mostPractisedTopic,
    weakestTopic: topics.at(-1) ?? "None yet",
  };
}

function downloadText(filename: string, content: string, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function AssignmentExportButtons({
  classroom,
  assignment,
}: {
  classroom: Classroom;
  assignment: Assignment;
}) {
  const questions = filterQuestions({
    qualification: assignment.qualification,
    examBoard: assignment.examBoard,
    subject: assignment.subject,
    syllabusCode: assignment.syllabusCode,
  }).filter((question) => assignment.linkedQuestionIds.includes(question.id));

  const instructions = `${classroom.name}\n${assignment.title}\nDue: ${assignment.dueDate || "No date"}\n\n${assignment.description}`;
  const sheet = `${instructions}\n\n${questions
    .map(
      (question, index) =>
        `${index + 1}. ${question.questionText} [${question.marks} marks]\n\nAnswer:\n\n\n`,
    )
    .join("\n")}`;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => {
          navigator.clipboard?.writeText(instructions);
          toast.success("Assignment instructions copied");
        }}
        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-semibold"
      >
        <Copy className="h-4 w-4" />
        Copy instructions
      </button>
      <button
        onClick={() =>
          downloadText(
            "submissions.json",
            JSON.stringify(getSubmissionsForAssignment(assignment.id), null, 2),
            "application/json",
          )
        }
        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-semibold"
      >
        <Download className="h-4 w-4" />
        Submissions JSON
      </button>
      <button
        onClick={() => downloadText("assignment-sheet.txt", sheet)}
        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-semibold"
      >
        <Printer className="h-4 w-4" />
        Print sheet
      </button>
    </div>
  );
}
