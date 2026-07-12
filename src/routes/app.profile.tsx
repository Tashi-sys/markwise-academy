import { createFileRoute, Link } from "@tanstack/react-router";
import { useAuth, updateUserProfile } from "../lib/auth";
import { getExamBoard } from "../data/syllabusConfig";
import { getSyllabusSubjects } from "../data/miniPaperConfig";
import { subjectHasQuestions } from "../data/questionBank";
import { AuthField, authInputClass } from "../components/auth/AuthLayout";
import { useState, useEffect } from "react";
import { User, Mail, GraduationCap, BookMarked } from "lucide-react";
import { getAISettingsStatus } from "../lib/api/ai-tutor.functions";
import { ThemeSettingsCard } from "../components/theme/ThemeControls";
import { applyTheme, persistTheme, readStoredTheme, type MarkwiseThemeId } from "../lib/theme";

export const Route = createFileRoute("/app/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { user, refresh } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(user?.selectedSubjects ?? []);
  const [targetGrade, setTargetGrade] = useState(user?.targetGrade ?? "8/9");
  const [weakestSubject, setWeakestSubject] = useState(user?.weakestSubject ?? "biology");
  const [preferredPracticeMode, setPreferredPracticeMode] = useState<"practice" | "exam" | "mixed">(
    user?.preferredPracticeMode ?? "practice",
  );
  const [themeId, setThemeId] = useState<MarkwiseThemeId>(() => readStoredTheme());
  const [aiSettings, setAiSettings] = useState<Awaited<
    ReturnType<typeof getAISettingsStatus>
  > | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setSelectedSubjects(user.selectedSubjects);
      setTargetGrade(user.targetGrade ?? "8/9");
      setWeakestSubject(user.weakestSubject ?? "biology");
      setPreferredPracticeMode(user.preferredPracticeMode ?? "practice");
    }
  }, [user]);

  useEffect(() => {
    getAISettingsStatus().then(setAiSettings);
  }, []);

  if (!user) return null;

  const board = getExamBoard(user.examBoard);
  const subjects = getSyllabusSubjects(user.examBoard);

  const toggleSubject = (id: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const changeTheme = (nextThemeId: MarkwiseThemeId) => {
    setThemeId(nextThemeId);
    applyTheme(nextThemeId);
    persistTheme(nextThemeId);
  };

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (selectedSubjects.length === 0) {
      setError("Select at least one subject.");
      return;
    }
    const result = updateUserProfile({
      name: name.trim(),
      selectedSubjects,
      targetGrade,
      weakestSubject,
      preferredPracticeMode,
    });
    if (!result.ok) {
      setError(result.error);
      return;
    }
    refresh();
    setMessage("Profile updated.");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your profile</h1>
        <p className="mt-1 text-muted-foreground">Manage your account and syllabus preferences.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Account details
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <dt className="text-muted-foreground">Email</dt>
            <dd className="ml-auto font-medium">{user.email}</dd>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <dt className="text-muted-foreground">Qualification</dt>
            <dd className="ml-auto font-medium">{user.qualification}</dd>
          </div>
          <div className="flex items-center gap-3">
            <BookMarked className="h-4 w-4 text-muted-foreground" />
            <dt className="text-muted-foreground">Exam board</dt>
            <dd className="ml-auto font-medium">{board?.name}</dd>
          </div>
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <dt className="text-muted-foreground">Member since</dt>
            <dd className="ml-auto font-medium">{new Date(user.createdAt).toLocaleDateString()}</dd>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <dt className="text-muted-foreground">Target grade</dt>
            <dd className="ml-auto font-medium">{user.targetGrade ?? "8/9"}</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-muted-foreground">
          To change qualification or exam board, create a new account. When Supabase/Firebase is
          connected, this can be updated here.
        </p>
      </div>

      <ThemeSettingsCard themeId={themeId} onChange={changeTheme} />

      <form
        onSubmit={save}
        className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
      >
        <h2 className="text-lg font-semibold">Edit profile</h2>

        {error && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </div>
        )}
        {message && (
          <div className="rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-sm text-success">
            {message}
          </div>
        )}

        <AuthField label="Full name">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={authInputClass}
          />
        </AuthField>

        <AuthField label="Subjects studied">
          <div className="max-h-48 space-y-1 overflow-y-auto rounded-lg border border-border p-2">
            {subjects.map((s) => {
              const checked = selectedSubjects.includes(s.id);
              const hasQ = subjectHasQuestions(user.examBoard, s.id, user.qualification);
              return (
                <label
                  key={s.id}
                  className={`flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-2 text-sm ${
                    checked ? "bg-primary/10 text-primary" : "hover:bg-secondary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input type="checkbox" checked={checked} onChange={() => toggleSubject(s.id)} />
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
                onClick={() => setPreferredPracticeMode(mode.id as "practice" | "exam" | "mixed")}
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

        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
        >
          Save changes
        </button>
      </form>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-lg font-semibold">AI Settings</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          GPT calls run on the server using OPENAI_API_KEY. The API key is never typed into or
          exposed by the frontend.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-secondary/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              GPT API
            </div>
            <div className="mt-1 text-sm font-semibold">
              {aiSettings?.connected ? "Connected" : "Not connected"}
            </div>
            {!aiSettings?.connected && (
              <p className="mt-1 text-xs text-warning">OPENAI_API_KEY is missing.</p>
            )}
          </div>
          <div className="rounded-xl border border-border bg-secondary/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Default AI model
            </div>
            <div className="mt-1 text-sm font-semibold">{aiSettings?.model ?? "Loading..."}</div>
          </div>
        </div>
      </div>

      <Link
        to="/app/subjects"
        className="inline-block text-sm font-medium text-primary hover:underline"
      >
        Go to subjects →
      </Link>
    </div>
  );
}
