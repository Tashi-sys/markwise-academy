import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ListChecks,
  Search,
  Settings2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { filterQuestions } from "../data/questionBank";
import { getExamBoard, getQualificationLabel, getSubjectName } from "../data/syllabusConfig";
import {
  createAssignment,
  findQuestionsForAssignment,
  formatClassroomDate,
  getClassById,
  type Assignment,
  type ClassroomAssignmentStatus,
  type ClassroomAssignmentType,
} from "../lib/classroomHub";
import { useAuth } from "../lib/auth";

export const Route = createFileRoute("/app/classroom-task/$classId")({
  component: CreateClassroomTaskPage,
});

function CreateClassroomTaskPage() {
  const { classId } = Route.useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const classroom = getClassById(classId);
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

  const topics = useMemo(() => {
    if (!classroom) return [];
    return [
      ...new Set(
        filterQuestions({
          qualification: classroom.qualification,
          examBoard: classroom.examBoard,
          subject: classroom.subject,
          syllabusCode: classroom.syllabusCode,
        }).map((question) => question.topic),
      ),
    ];
  }, [classroom]);

  const matches = useMemo(() => {
    if (!classroom) return [];
    return findQuestionsForAssignment({
      qualification: classroom.qualification,
      examBoard: classroom.examBoard,
      subject: classroom.subject,
      syllabusCode: classroom.syllabusCode,
      topic,
      paper,
      difficulty,
    });
  }, [classroom, difficulty, paper, topic]);

  const chosenIds = manualIds.length
    ? manualIds
    : matches.slice(0, questionCount).map((question) => question.id);
  const chosenMarks = matches
    .filter((question) => chosenIds.includes(question.id))
    .reduce((sum, question) => sum + question.marks, 0);

  if (!user) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground shadow-soft">
        Loading task creator...
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

  const board = getExamBoard(classroom.examBoard);

  function createTask() {
    if (!title.trim()) {
      toast.error("Task title is required");
      return;
    }
    if (assignmentType === "practice-questions" && chosenIds.length === 0) {
      toast.error("No matching questions selected");
      return;
    }

    const assignment: Assignment = createAssignment({
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

    toast.success("Task created");
    navigate({
      to: "/app/classroom-assignment/$classId/$assignmentId",
      params: { classId: classroom.id, assignmentId: assignment.id },
    });
  }

  return (
    <div className="animate-enter space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Link
            to="/app/classroom-stream/$classId"
            params={{ classId }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to classroom
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Create task</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Build a class assignment from MarkWise questions and post it to your classroom stream.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 text-sm shadow-soft">
          <div className="font-semibold">{classroom.name}</div>
          <div className="mt-1 text-muted-foreground">
            {getSubjectName(classroom.examBoard, classroom.subject)} · {board?.name}
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_22rem]">
        <main className="space-y-5">
          <section className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Task details</h2>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Title" value={title} onChange={setTitle} placeholder="Cell biology homework" />
              <label className="space-y-1 text-sm">
                <span className="font-medium">Task type</span>
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
              <label className="space-y-1 text-sm">
                <span className="font-medium">Due date</span>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(event) => setDueDate(event.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                />
              </label>
              <NumberField label="Points" value={points} onChange={setPoints} />
            </div>
            <label className="mt-4 block space-y-1 text-sm">
              <span className="font-medium">Instructions</span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="min-h-28 w-full rounded-lg border border-border bg-background px-3 py-2"
                placeholder="Tell students what to complete and how it will be marked."
              />
            </label>
          </section>

          <section className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Question selection</h2>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="space-y-1 text-sm md:col-span-2">
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
              <label className="space-y-1 text-sm">
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
              <NumberField label="Auto-pick" value={questionCount} onChange={setQuestionCount} />
              <Field label="Paper contains" value={paper} onChange={setPaper} placeholder="Paper 1" />
              <label className="space-y-1 text-sm">
                <span className="font-medium">Status</span>
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value as ClassroomAssignmentStatus)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2"
                >
                  <option value="assigned">Assign now</option>
                  <option value="draft">Save as draft</option>
                </select>
              </label>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Matching questions</h3>
                  <p className="text-sm text-muted-foreground">
                    {matches.length} found · {chosenIds.length} selected · {chosenMarks} marks
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setManualIds([])}
                  className="rounded-full border border-border px-3 py-2 text-xs font-semibold hover:bg-secondary"
                >
                  Use auto-pick
                </button>
              </div>
              {matches.length ? (
                <div className="mt-4 max-h-[30rem] space-y-2 overflow-y-auto pr-1">
                  {matches.slice(0, 50).map((question) => (
                    <label
                      key={question.id}
                      className="flex gap-3 rounded-xl border border-border bg-card p-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={chosenIds.includes(question.id)}
                        onChange={(event) =>
                          setManualIds((current) => {
                            const base = current.length ? current : matches.slice(0, questionCount).map((item) => item.id);
                            return event.target.checked
                              ? [...new Set([...base, question.id])]
                              : base.filter((id) => id !== question.id);
                          })
                        }
                      />
                      <span className="line-clamp-2 flex-1">{question.questionText}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{question.marks}m</span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                  No questions match this selection. Try another topic, paper, or difficulty.
                </p>
              )}
            </div>
          </section>
        </main>

        <aside className="space-y-4 xl:sticky xl:top-4 xl:self-start">
          <section className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Task summary</h2>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <Summary label="Class" value={classroom.name} />
              <Summary label="Syllabus" value={classroom.syllabusCode ?? "No code"} />
              <Summary label="Qualification" value={getQualificationLabel(classroom.qualification)} />
              <Summary label="Due" value={formatClassroomDate(dueDate)} />
              <Summary label="Questions" value={String(chosenIds.length)} />
              <Summary label="Marks" value={String(chosenMarks)} />
            </div>
            <button
              onClick={createTask}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              <CheckCircle2 className="h-4 w-4" />
              Create task
            </button>
            <Link
              to="/app/classroom-stream/$classId"
              params={{ classId }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              Cancel
            </Link>
          </section>

          <section className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">What happens next</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>The task appears in the classroom stream.</li>
              <li>Students can open it from Classwork.</li>
              <li>Submissions are tracked on the assignment page.</li>
            </ul>
          </section>
        </aside>
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
    <label className="space-y-1 text-sm">
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
    <label className="space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full rounded-lg border border-border bg-background px-3 py-2"
      />
    </label>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-secondary/60 px-3 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="max-w-36 truncate font-semibold">{value}</span>
    </div>
  );
}
