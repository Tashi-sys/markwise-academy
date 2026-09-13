import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { AuthError, AuthField, AuthLayout, authInputClass } from "../components/auth/AuthLayout";
import { getCurrentUser, signup, validateEmailAddress } from "../lib/auth";
import type { ExamBoardId, Qualification } from "../data/syllabusConfig";
import { EXAM_BOARDS, getExamBoard } from "../data/syllabusConfig";
import { SubjectPicker } from "../components/subjects/SubjectPicker";

function safeRedirectTarget(value: unknown) {
  return typeof value === "string" && value.startsWith("/app") ? value : "/app/dashboard";
}

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [{ title: "Sign up - MarkWise" }],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: safeRedirectTarget(search.redirect),
  }),
  beforeLoad: ({ search }) => {
    if (typeof window !== "undefined" && getCurrentUser()) {
      throw redirect({ to: safeRedirectTarget(search.redirect) });
    }
  },
  component: SignupPage,
});

const STEPS = ["Account", "Subjects"] as const;

type SignupSubjectOption = {
  key: string;
  id: string;
  name: string;
  examBoard: ExamBoardId;
  boardName: string;
  qualification: Qualification;
};

const SIGNUP_SUBJECT_OPTIONS: SignupSubjectOption[] = EXAM_BOARDS.flatMap((board) =>
  board.subjects.map((subject) => ({
    key: `${board.id}:${subject.id}`,
    id: subject.id,
    name: subject.name,
    examBoard: board.id,
    boardName: board.name,
    qualification: board.qualification,
  })),
);

function SignupPage() {
  const navigate = useNavigate();
  const { redirect: redirectTo } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState<Qualification>("IGCSE");
  const [examBoard, setExamBoard] = useState<ExamBoardId>("cambridge-igcse");
  const [selectedSubjectKeys, setSelectedSubjectKeys] = useState<string[]>([]);
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [targetGrade, setTargetGrade] = useState("8/9");
  const [weakestSubject, setWeakestSubject] = useState("biology");
  const [preferredPracticeMode, setPreferredPracticeMode] = useState<"practice" | "exam" | "mixed">(
    "practice",
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedOptions = useMemo(
    () =>
      selectedSubjectKeys
        .map((key) => SIGNUP_SUBJECT_OPTIONS.find((option) => option.key === key))
        .filter((option): option is SignupSubjectOption => Boolean(option)),
    [selectedSubjectKeys],
  );
  const selectedBoardNames = useMemo(
    () => [
      ...new Set(
        selectedOptions.map((option) => getExamBoard(option.examBoard)?.name ?? option.boardName),
      ),
    ],
    [selectedOptions],
  );
  const nextStep = () => {
    setError("");
    if (step === 0) {
      if (!name.trim()) return setError("Please enter your full name.");
      const emailStatus = validateEmailAddress(email);
      if (!emailStatus.ok) return setError(emailStatus.error);
      if (password.length < 6) return setError("Password must be at least 6 characters.");
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      nextStep();
      return;
    }

    const primary = selectedOptions[0];
    setLoading(true);
    setError("");
    const result = signup({
      name,
      email,
      password,
      role,
      qualification: primary?.qualification ?? qualification,
      examBoard: primary?.examBoard ?? examBoard,
      selectedSubjects: [...new Set(selectedOptions.map((option) => option.id))],
      subjectSyllabuses: selectedOptions.map((option) => ({
        subject: option.id,
        examBoard: option.examBoard,
        qualification: option.qualification,
      })),
      targetGrade,
      weakestSubject: primary?.id ?? weakestSubject,
      preferredPracticeMode,
    });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate({ to: redirectTo });
  };

  return (
    <AuthLayout
      title="Create your MarkWise account"
      subtitle="Pick your subjects with the syllabus shown in brackets. MarkWise saves each subject's syllabus."
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/login"
            search={{ redirect: redirectTo }}
            className="font-medium text-primary hover:underline"
          >
            Log in
          </Link>
        </>
      }
    >
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
            <AuthField label="I am joining as">
              <div className="flex gap-4">
                {(["student", "teacher"] as const).map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border p-3 capitalize"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={item}
                      checked={role === item}
                      onChange={() => setRole(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </AuthField>
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
                placeholder="you@gmail.com"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
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
                placeholder="Password"
              />
            </AuthField>
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
            <AuthField
              label="Subjects studied"
              hint="You can select subjects from different syllabuses. Each one keeps the syllabus shown in brackets."
            >
              <SubjectPicker
                selections={selectedOptions.map((option) => ({
                  subject: option.id,
                  examBoard: option.examBoard,
                  qualification: option.qualification,
                }))}
                onChange={(selections) => {
                  setSelectedSubjectKeys(
                    selections.map((item) => `${item.examBoard}:${item.subject}`),
                  );
                  const first = selections[0];
                  if (first) {
                    setExamBoard(first.examBoard);
                    setQualification(first.qualification);
                    setWeakestSubject(first.subject);
                  }
                }}
              />
            </AuthField>

            {selectedOptions.length > 0 && (
              <div className="rounded-lg border border-border bg-secondary/40 p-3 text-sm text-muted-foreground">
                Saved selections:{" "}
                <strong className="text-foreground">{selectedOptions.length}</strong> subject
                {selectedOptions.length === 1 ? "" : "s"} across {selectedBoardNames.join(", ")}.
              </div>
            )}
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
              ? "Creating account..."
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
