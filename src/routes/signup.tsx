import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { AuthError, AuthField, AuthLayout, authInputClass } from "../components/auth/AuthLayout";
import { getCurrentUser, signup } from "../lib/auth";
import type { ExamBoardId, Qualification } from "../data/syllabusConfig";
import { EXAM_BOARDS, getBoardsForQualification, getExamBoard } from "../data/syllabusConfig";
import { getSyllabusSubjects } from "../data/miniPaperConfig";
import { subjectHasQuestions } from "../data/questionBank";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [{ title: "Sign up — MarkWise" }],
  }),
  beforeLoad: () => {
    if (typeof window !== "undefined" && getCurrentUser()) {
      throw redirect({ to: "/app/dashboard" });
    }
  },
  component: SignupPage,
});

const STEPS = ["Account", "Syllabus", "Subjects"] as const;

function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState<Qualification>("IGCSE");
  const [examBoard, setExamBoard] = useState<ExamBoardId>("cambridge-igcse");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [targetGrade, setTargetGrade] = useState("8/9");
  const [weakestSubject, setWeakestSubject] = useState("biology");
  const [preferredPracticeMode, setPreferredPracticeMode] = useState<"practice" | "exam" | "mixed">(
    "practice",
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const boards = EXAM_BOARDS;
  const subjects = useMemo(() => getSyllabusSubjects(examBoard), [examBoard]);
  const boardMeta = getExamBoard(examBoard);

  const onQualificationChange = (q: Qualification) => {
    setQualification(q);
    const nextBoards = getBoardsForQualification(q);
    setExamBoard(nextBoards[0]?.id ?? "cambridge-igcse");
    setSelectedSubjects([]);
  };

  const toggleSubject = (id: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const nextStep = () => {
    setError("");
    if (step === 0) {
      if (!name.trim()) return setError("Please enter your full name.");
      if (!email.includes("@")) return setError("Please enter a valid email.");
      if (password.length < 6) return setError("Password must be at least 6 characters.");
    }
    if (step === 1 && !examBoard) return setError("Please select an exam board.");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      nextStep();
      return;
    }
    setLoading(true);
    setError("");
    const result = signup({
      name,
      email,
      password,
      qualification,
      examBoard,
      selectedSubjects,
      targetGrade,
      weakestSubject,
      preferredPracticeMode,
    });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate({ to: "/app/dashboard" });
  };

  return (
    <AuthLayout
      title="Create your MarkWise account"
      subtitle="Three quick steps — then you only see questions from your syllabus."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </>
      }
    >
      {/* Step indicator */}
      <div className="mb-6 flex items-center justify-between gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                i < step
                  ? "bg-success text-success-foreground"
                  : i === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="space-y-5">
        <AuthError message={error} />

        {step === 0 && (
          <>
            <AuthField label="Full name">
              <input
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={authInputClass}
                placeholder="Alex Smith"
              />
            </AuthField>
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
            <AuthField label="Password" hint="At least 6 characters">
              <input
                type="password"
                required
                autoComplete="new-password"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={authInputClass}
                placeholder="••••••••"
              />
            </AuthField>
            <div className="grid gap-4 sm:grid-cols-2">
              <AuthField label="Target grade">
                <select
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className={authInputClass}
                >
                  {["4/5", "6", "7", "8/9", "A/A*"].map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </AuthField>
              <AuthField label="Weakest subject">
                <select
                  value={weakestSubject}
                  onChange={(e) => setWeakestSubject(e.target.value)}
                  className={authInputClass}
                >
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </AuthField>
            </div>
            <AuthField label="Preferred practice mode">
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  { id: "practice", label: "Practice" },
                  { id: "exam", label: "Exam" },
                  { id: "mixed", label: "Mixed" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() =>
                      setPreferredPracticeMode(mode.id as "practice" | "exam" | "mixed")
                    }
                    className={`rounded-full border px-3 py-2 text-sm font-medium ${
                      preferredPracticeMode === mode.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:bg-secondary"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </AuthField>
          </>
        )}

        {step === 1 && (
          <>
            <AuthField label="Qualification level">
              <div className="flex gap-2">
                {(["GCSE", "IGCSE"] as Qualification[]).map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => onQualificationChange(q)}
                    className={`flex-1 rounded-full border px-3 py-2 text-sm font-medium transition ${
                      qualification === q
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:bg-secondary"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </AuthField>
            <AuthField label="Exam board / syllabus" hint="AQA and OCR are GCSE exam boards.">
              <select
                value={examBoard}
                onChange={(e) => {
                  const nextBoard = e.target.value as ExamBoardId;
                  setExamBoard(nextBoard);
                  setQualification(getExamBoard(nextBoard)?.qualification ?? qualification);
                  setSelectedSubjects([]);
                }}
                className={authInputClass}
              >
                {boards.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.qualification})
                  </option>
                ))}
              </select>
            </AuthField>
            {boardMeta && (
              <div className="rounded-lg border border-border bg-secondary/40 p-3 text-sm text-muted-foreground">
                You selected <strong className="text-foreground">{boardMeta.name}</strong>.
                Questions will be filtered to this syllabus only.
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <AuthField
              label="Subjects studied"
              hint={`Select all ${boardMeta?.name ?? "syllabus"} subjects you're taking`}
            >
              <div className="max-h-56 space-y-1 overflow-y-auto rounded-lg border border-border bg-background p-2">
                {subjects.map((s) => {
                  const checked = selectedSubjects.includes(s.id);
                  const hasQ = subjectHasQuestions(examBoard, s.id, qualification);
                  return (
                    <label
                      key={s.id}
                      className={`flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-2 text-sm transition ${
                        checked ? "bg-primary/10 text-primary" : "hover:bg-secondary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleSubject(s.id)}
                          className="rounded border-border"
                        />
                        {s.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {hasQ ? "Past papers" : "No papers"}
                      </span>
                    </label>
                  );
                })}
              </div>
            </AuthField>
          </>
        )}

        <div className="flex gap-3 pt-2">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 disabled:opacity-60"
          >
            {loading
              ? "Creating account…"
              : step === STEPS.length - 1
                ? "Create account"
                : "Continue"}
            {step < STEPS.length - 1 && !loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
