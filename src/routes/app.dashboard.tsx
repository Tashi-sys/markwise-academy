import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Trophy,
  Target,
  TrendingUp,
  ArrowRight,
  Check,
  CircleAlert,
  FileText,
  BookOpen,
  Clock3,
  Activity,
  Zap,
  GraduationCap,
} from "lucide-react";
import { useAttempts, topicStats, computeStreak, useFlashcards } from "../lib/storage";
import { getQuestion, getTopicMeta } from "../lib/questions";
import { useAuth } from "../lib/auth";
import { getExamBoard, getSubjectName } from "../data/syllabusConfig";
import { filterQuestions, getTopicsWithQuestions } from "../data/questionBank";
import { buildStudyPlan, missedKeywords } from "../lib/examTraining";
import { formatClassroomDate, getUpcomingAssignment, useClassroomHub } from "../lib/classroomHub";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app/dashboard")({
  component: Dashboard,
});

type WeakTopicRow = {
  subject: string;
  subjectName: string;
  topic: string;
  topicName: string;
  accuracy: number;
  attempted: number;
};

type QuickSubject = {
  subject: string;
  subjectName: string;
  examBoard: string;
  topics: number;
  questions: number;
};

type RecentActivityItem = {
  subject: string;
  topic: string;
  action: string;
  timeAgo: string;
  accuracy?: number;
};


const MOCK_DAILY_STREAK = {
  currentStreak: 5,
  bestStreak: 12,
  completedToday: false,
  dailyGoal: 10,
  questionsCompletedToday: 4,
};

const MOCK_RECENT_ACTIVITY: RecentActivityItem[] = [
  {
    subject: "Chemistry",
    topic: "Atomic Structure",
    action: "Completed 10 questions",
    timeAgo: "12 min ago",
    accuracy: 80,
  },
  {
    subject: "Physics",
    topic: "Forces and Motion",
    action: "Finished mini mock",
    timeAgo: "1 hour ago",
    accuracy: 72,
  },
  {
    subject: "Biology",
    topic: "Plant Transport",
    action: "Improved weak topic",
    timeAgo: "Yesterday",
    accuracy: 84,
  },
  {
    subject: "Maths",
    topic: "Algebra",
    action: "Reviewed flashcards",
    timeAgo: "2 days ago",
  },
];

function Dashboard() {
  const { user } = useAuth();
  const { attempts } = useAttempts();
  const { flashcards } = useFlashcards();
  const { classrooms, assignments } = useClassroomHub();

  if (!user) return null;

  const board = getExamBoard(user.examBoard);
  const userAttempts = attempts.filter((a) => a.examBoard === user.examBoard);

  const totalQ = userAttempts.length;
  const totalScore = userAttempts.reduce((s, a) => s + a.score, 0);
  const totalPossible = userAttempts.reduce((s, a) => s + a.total, 0);
  const avg = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
  const streak = computeStreak(userAttempts);
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayAttempts = userAttempts.filter((attempt) => attempt.date >= todayStart.getTime());
  const questionsCompletedToday =
    todayAttempts.length ||
    (totalQ > 0
      ? Math.min(MOCK_DAILY_STREAK.questionsCompletedToday, totalQ)
      : MOCK_DAILY_STREAK.questionsCompletedToday);
  const dailyGoal = 10;
  const completedToday = questionsCompletedToday >= dailyGoal;
  const bestStreak = Math.max(MOCK_DAILY_STREAK.bestStreak, streak);
  const todayGoalProgress = Math.min(100, Math.round((questionsCompletedToday / dailyGoal) * 100));
  const xp = totalScore * 20 + totalQ * 10 + streak * 15;
  const level = Math.max(1, Math.floor(xp / 250) + 1);

  const topicAcc = user.selectedSubjects.flatMap((subjectId) => {
    const topics = getTopicsWithQuestions(user.examBoard, subjectId, user.qualification);
    return topics.map((t) => ({
      t,
      subject: subjectId,
      ...topicStats(userAttempts, t, subjectId),
    }));
  });

  const tried = topicAcc.filter((x) => x.count > 0);
  const strongest = tried.length ? [...tried].sort((a, b) => b.acc - a.acc)[0] : null;
  const weakest = tried.length ? [...tried].sort((a, b) => a.acc - b.acc)[0] : null;
  const weakTopics: WeakTopicRow[] = tried.length
    ? [...tried]
        .sort((a, b) => a.acc - b.acc || b.count - a.count)
        .slice(0, 3)
        .map((item) => ({
          subject: item.subject,
          subjectName: getSubjectName(user.examBoard, item.subject),
          topic: item.t,
          topicName: getTopicMeta(item.subject, item.t).name,
          accuracy: item.acc,
          attempted: item.count,
        }))
    : [];

  const recent = [...userAttempts].slice(-5).reverse();
  const quickSubjects: QuickSubject[] = (
    user.selectedSubjects.length ? user.selectedSubjects : ["physics", "chemistry", "biology"]
  )
    .slice(0, 4)
    .map((subjectId) => {
      const topics = getTopicsWithQuestions(user.examBoard, subjectId, user.qualification);
      const questions = filterQuestions({
        qualification: user.qualification,
        examBoard: user.examBoard,
        subject: subjectId,
      });
      return {
        subject: subjectId,
        subjectName: getSubjectName(user.examBoard, subjectId),
        examBoard: board?.name ?? user.examBoard,
        topics: topics.length,
        questions: questions.length,
      };
    });
  const questionOfTheDay =
    quickSubjects
      .flatMap((subject) =>
        filterQuestions({
          qualification: user.qualification,
          examBoard: user.examBoard,
          subject: subject.subject,
        }),
      )
      .find((question) => question.difficulty === "medium") ??
    filterQuestions({
      qualification: user.qualification,
      examBoard: user.examBoard,
      subject: quickSubjects[0]?.subject,
    })[0] ??
    null;
  const lastAttempt = userAttempts.at(-1);
  const continueStudy = lastAttempt
    ? (() => {
        const topicAttempts = userAttempts.filter(
          (attempt) =>
            attempt.subject === lastAttempt.subject && attempt.topic === lastAttempt.topic,
        );
        const topicTotalScore = topicAttempts.reduce((sum, attempt) => sum + attempt.score, 0);
        const topicTotalMarks = topicAttempts.reduce((sum, attempt) => sum + attempt.total, 0);
        const topicQuestionCount = filterQuestions({
          qualification: user.qualification,
          examBoard: user.examBoard,
          subject: lastAttempt.subject,
          topic: lastAttempt.topic,
        }).length;
        const completedQuestions = topicAttempts.length;

        return {
          subject: lastAttempt.subject,
          subjectName: getSubjectName(user.examBoard, lastAttempt.subject),
          examBoard: board?.name ?? user.examBoard,
          topic: lastAttempt.topic,
          topicName: getTopicMeta(lastAttempt.subject, lastAttempt.topic).name,
          completedQuestions,
          totalQuestions: topicQuestionCount || Math.max(100, completedQuestions),
          accuracy: topicTotalMarks > 0 ? Math.round((topicTotalScore / topicTotalMarks) * 100) : 0,
          completion: topicQuestionCount
            ? Math.min(100, Math.round((completedQuestions / topicQuestionCount) * 100))
            : Math.min(100, completedQuestions),
        };
      })()
    : null;
  const plan = buildStudyPlan(userAttempts);
  const missed = missedKeywords(userAttempts);
  const recentMistakes = userAttempts
    .filter((attempt) => attempt.score < attempt.total)
    .slice(-3)
    .reverse();
  const recentActivity: RecentActivityItem[] = recent.length
    ? recent.slice(0, 4).map((attempt) => {
        const pct = Math.round((attempt.score / attempt.total) * 100);
        return {
          subject: getSubjectName(user.examBoard, attempt.subject),
          topic: getTopicMeta(attempt.subject, attempt.topic).name,
          action: `Completed ${attempt.score}/${attempt.total} marks`,
          timeAgo: formatTimeAgo(attempt.date),
          accuracy: pct,
        };
      })
    : MOCK_RECENT_ACTIVITY;
  const classroomUpcoming = getUpcomingAssignment(classrooms, assignments);
  const classroomUpcomingRoom = classroomUpcoming
    ? classrooms.find((room) => room.id === classroomUpcoming.classId)
    : null;

  const badges = [
    { label: "Full Marks", earned: userAttempts.some((a) => a.score === a.total) },
    { label: "Keyword King", earned: userAttempts.filter((a) => a.score === a.total).length >= 5 },
    {
      label: "Biology Beast",
      earned: userAttempts.filter((a) => a.subject === "biology").length >= 50,
    },
    { label: "Comeback Student", earned: false },
    { label: "Exam Ready", earned: avg >= 80 && totalQ > 0 },
  ];

  return (
    <div className="animate-enter space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user.name.split(" ")[0]}. Ready to gain some marks?
        </h1>
        <p className="mt-1 text-muted-foreground">
          {board?.name} · {user.selectedSubjects.length} subject
          {user.selectedSubjects.length === 1 ? "" : "s"} selected
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]">
        <ContinueStudyingCard data={continueStudy} />
        <WeakTopicsPanel topics={weakTopics} />
      </div>

      <ClassroomHubCard
        classCount={classrooms.length}
        upcomingTitle={classroomUpcoming?.title}
        upcomingDueDate={classroomUpcoming?.dueDate}
        upcomingClassName={classroomUpcomingRoom?.name}
      />

      <div className="stagger-grid grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatCard icon={<Target className="h-4 w-4" />} label="Attempted" value={totalQ} />
        <StatCard
          icon={<TrendingUp className="h-4 w-4" />}
          label="Average"
          value={avg}
          suffix="%"
        />
        <StatCard
          icon={<Trophy className="h-4 w-4" />}
          label="Strongest"
          value={strongest ? getTopicMeta(strongest.subject, strongest.t).name : "—"}
          small
        />
        <StatCard
          icon={<CircleAlert className="h-4 w-4" />}
          label="Weakest"
          value={weakest ? getTopicMeta(weakest.subject, weakest.t).name : "—"}
          small
          tone="warning"
        />
        <StatCard
          icon={<Flame className="h-4 w-4" />}
          label="Streak"
          value={streak}
          suffix={` day${streak === 1 ? "" : "s"}`}
        />
      </div>

      <div className="stagger-grid grid gap-3 md:grid-cols-3">
        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            XP
          </div>
          <div className="mt-1 text-2xl font-bold">
            <AnimatedNumber value={xp} />
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="progress-fill h-full rounded-full bg-gradient-to-r from-primary via-accent to-cyan-500"
              style={{ width: `${Math.min(100, xp % 250 === 0 ? 100 : (xp % 250) / 2.5)}%` }}
            />
          </div>
        </div>
        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Level
          </div>
          <div className="mt-1 text-2xl font-bold">
            <AnimatedNumber value={level} />
          </div>
        </div>
        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Badges
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  badge.earned ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"
                }`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
          <DailyStreakCard
            currentStreak={streak || MOCK_DAILY_STREAK.currentStreak}
            bestStreak={bestStreak}
            completedToday={completedToday}
            dailyGoal={dailyGoal}
            questionsCompletedToday={questionsCompletedToday}
          />
          <TodayGoalCard
            completed={questionsCompletedToday}
            target={dailyGoal}
            progress={todayGoalProgress}
          />
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <QuestionOfTheDayCard question={questionOfTheDay} />
          <RecentActivityCard items={recentActivity} />
        </div>
      </div>

      <QuickSubjectsSection subjects={quickSubjects} />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recommended practice</h2>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Personalised
            </span>
          </div>
          {weakest ? (
            <>
              <p className="mt-2 text-muted-foreground">
                You lost the most marks in{" "}
                <strong className="text-foreground">
                  {getTopicMeta(weakest.subject, weakest.t).name}
                </strong>{" "}
                ({getSubjectName(user.examBoard, weakest.subject)}).
              </p>
              <Link
                to="/app/practice/$subject/$topic"
                params={{ subject: weakest.subject, topic: weakest.t }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                Practise {getTopicMeta(weakest.subject, weakest.t).name}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/app/mini-paper"
                className="ml-3 mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Mini paper <FileText className="h-4 w-4" />
              </Link>
            </>
          ) : (
            <>
              <p className="mt-2 text-muted-foreground">
                Pick a subject and start your first question for {board?.name}.
              </p>
              <Link
                to="/app/subjects"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                Browse subjects <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
        </div>

        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Quick actions</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/app/subjects"
              className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary"
            >
              Browse subjects
            </Link>
            <Link
              to="/app/progress"
              className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary"
            >
              View progress
            </Link>
            <Link
              to="/app/review"
              className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary"
            >
              Review mistakes
            </Link>
            <Link
              to="/app/keywords"
              className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary"
            >
              Exam keywords
            </Link>
            <button
              type="button"
              onClick={() => {
                window.print();
                toast.success("Revision report ready to print or save as PDF");
              }}
              className="rounded-lg border border-border px-3 py-2 text-left text-sm hover:bg-secondary"
            >
              Download Revision Report
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Today's Study Plan</h2>
          <ol className="stagger-grid mt-4 space-y-2 text-sm">
            {plan.map((item, index) => (
              <li key={item} className="flex gap-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Recent mistakes</h2>
          {recentMistakes.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Demo: missing keyword, vague phrasing, and timing warnings will appear here.
            </p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {recentMistakes.map((attempt) => (
                <li key={attempt.id} className="rounded-xl bg-secondary/50 p-3">
                  {getTopicMeta(attempt.subject, attempt.topic).name}: {attempt.score}/
                  {attempt.total}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-semibold">Missed keywords</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {(missed.length ? missed : ["active site", "carbon dioxide", "because"]).map(
              (keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-warning/15 px-2.5 py-1 text-xs font-medium text-warning"
                >
                  {keyword}
                </span>
              ),
            )}
          </div>
          <Link
            to="/app/flashcards"
            className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
          >
            {flashcards.length || "Demo"} flashcards ready
          </Link>
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent feedback</h2>
          <Link to="/app/review" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No attempts yet. Answer your first question to populate your feedback log.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-border">
            {recent.map((a) => {
              const q = getQuestion(a.questionId);
              const pct = Math.round((a.score / a.total) * 100);
              return (
                <li key={a.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <div className="min-w-0">
                    <div className="truncate font-medium">{q?.questionText ?? "Question"}</div>
                    <div className="text-xs text-muted-foreground">
                      {getSubjectName(user.examBoard, a.subject)} ·{" "}
                      {getTopicMeta(a.subject, a.topic).name}
                    </div>
                  </div>
                  <span
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      pct >= 80
                        ? "bg-success/15 text-success"
                        : pct >= 50
                          ? "bg-warning/15 text-warning"
                          : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {pct >= 80 ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <CircleAlert className="h-3 w-3" />
                    )}
                    {a.score}/{a.total}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

function DailyStreakCard({
  currentStreak,
  bestStreak,
  completedToday,
  dailyGoal,
  questionsCompletedToday,
}: {
  currentStreak: number;
  bestStreak: number;
  completedToday: boolean;
  dailyGoal: number;
  questionsCompletedToday: number;
}) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Daily Streak</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Complete {dailyGoal} questions today to keep your streak.
          </p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-warning/15 text-warning">
          <Flame className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-background/60 p-3">
          <div className="text-xs font-medium text-muted-foreground">Current</div>
          <div className="mt-1 text-2xl font-bold">{currentStreak} days</div>
        </div>
        <div className="rounded-xl border border-border bg-background/60 p-3">
          <div className="text-xs font-medium text-muted-foreground">Best</div>
          <div className="mt-1 text-2xl font-bold">{bestStreak} days</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            completedToday ? "bg-success/15 text-success" : "bg-warning/15 text-warning"
          }`}
        >
          {completedToday ? "Completed today" : "Not studied yet"}
        </span>
        <span className="text-muted-foreground">
          {questionsCompletedToday}/{dailyGoal} today
        </span>
      </div>
    </div>
  );
}

function TodayGoalCard({
  completed,
  target,
  progress,
}: {
  completed: number;
  target: number;
  progress: number;
}) {
  const message =
    progress >= 100
      ? "Goal completed. Great work."
      : progress >= 50
        ? "Halfway there."
        : "Start strong today.";

  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Today&apos;s Goal</h2>
          <p className="mt-1 text-sm text-muted-foreground">{message}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
          <Target className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <div className="text-3xl font-bold">{completed}</div>
          <div className="text-sm text-muted-foreground">of {target} questions</div>
        </div>
        <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          {progress}%
        </div>
      </div>

      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="progress-fill h-full rounded-full bg-gradient-to-r from-primary via-accent to-cyan-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Link
        to="/app/subjects"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        Continue Revision <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function QuestionOfTheDayCard({
  question,
}: {
  question: ReturnType<typeof filterQuestions>[number] | null;
}) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Question of the Day</h2>
          <p className="mt-1 text-sm text-muted-foreground">One focused question to keep moving.</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
          <Zap className="h-5 w-5" />
        </span>
      </div>

      {question ? (
        <>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">
              {getSubjectName(question.examBoard, question.subject)}
            </span>
            <span className="rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">
              {getTopicMeta(question.subject, question.topic).name}
            </span>
            <span className="rounded-full bg-warning/15 px-2.5 py-1 text-warning">
              {question.difficulty}
            </span>
          </div>
          <p className="mt-4 line-clamp-4 text-sm leading-relaxed">{question.questionText}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              {question.marks} mark{question.marks === 1 ? "" : "s"}
            </span>
            <Link
              to="/app/question/$id"
              params={{ id: question.id }}
              search={{ mode: "practice" as const }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              Answer Question <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </>
      ) : (
        <p className="mt-4 rounded-xl border border-dashed border-border bg-background/60 p-4 text-sm text-muted-foreground">
          No question available today.
        </p>
      )}
    </div>
  );
}

function RecentActivityCard({ items }: { items: RecentActivityItem[] }) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">Your latest revision actions.</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
          <Activity className="h-5 w-5" />
        </span>
      </div>

      {items.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-border bg-background/60 p-4 text-sm text-muted-foreground">
          No recent activity yet. Start revising to see your progress here.
        </p>
      ) : (
        <div className="mt-4 space-y-2">
          {items.slice(0, 4).map((item) => (
            <div
              key={`${item.subject}-${item.topic}-${item.action}-${item.timeAgo}`}
              className="rounded-xl border border-border bg-background/60 p-3 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{item.action}</div>
                  <div className="mt-1 truncate text-xs text-muted-foreground">
                    {item.subject} · {item.topic}
                  </div>
                </div>
                {typeof item.accuracy === "number" ? (
                  <span className="shrink-0 rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success">
                    {item.accuracy}%
                  </span>
                ) : null}
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock3 className="h-3.5 w-3.5" />
                {item.timeAgo}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuickSubjectsSection({ subjects }: { subjects: QuickSubject[] }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Quick Subjects</h2>
          <p className="text-sm text-muted-foreground">
            Jump straight into your selected subjects.
          </p>
        </div>
        <Link to="/app/subjects" className="text-sm font-semibold text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="stagger-grid grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {subjects.map((subject) => (
          <div
            key={subject.subject}
            className="interactive-card glass-card rounded-2xl border border-border bg-card p-4 shadow-soft"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate font-semibold">{subject.subjectName}</h3>
                <p className="mt-1 truncate text-xs text-muted-foreground">{subject.examBoard}</p>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-xl bg-secondary/60 p-3">
                <div className="text-lg font-bold">{subject.topics}</div>
                <div className="text-xs text-muted-foreground">topics</div>
              </div>
              <div className="rounded-xl bg-secondary/60 p-3">
                <div className="text-lg font-bold">{subject.questions}</div>
                <div className="text-xs text-muted-foreground">questions</div>
              </div>
            </div>
            <Link
              to="/app/topics/$subject"
              params={{ subject: subject.subject }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary/40 hover:text-primary"
            >
              Study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function WeakTopicsPanel({ topics }: { topics: WeakTopicRow[] }) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Weak Topics</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Focus on these topics to improve your score fastest.
          </p>
        </div>
        <span className="rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold text-warning">
          {topics.length ? "Priority" : "Personal"}
        </span>
      </div>

      {topics.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-border bg-background/60 p-4 text-sm text-muted-foreground">
          No weak topics yet. Complete more questions to unlock insights.
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {topics.map((topic) => {
            const tone =
              topic.accuracy < 50
                ? "bg-destructive/15 text-destructive"
                : topic.accuracy < 65
                  ? "bg-warning/15 text-warning"
                  : "bg-primary/10 text-primary";

            return (
              <div
                key={`${topic.subject}-${topic.topic}`}
                className="group rounded-xl border border-border bg-background/60 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary/50 hover:shadow-soft"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-muted-foreground">
                      {topic.subjectName}
                    </div>
                    <div className="mt-0.5 truncate font-semibold">{topic.topicName}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className={`rounded-full px-2.5 py-1 font-semibold ${tone}`}>
                        {topic.accuracy}% accuracy
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">
                        {topic.attempted} attempted
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/app/practice/$subject/$topic"
                    params={{ subject: topic.subject, topic: topic.topic }}
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold transition group-hover:border-primary/40 group-hover:text-primary"
                  >
                    Practice
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ClassroomHubCard({
  classCount,
  upcomingTitle,
  upcomingDueDate,
  upcomingClassName,
}: {
  classCount: number;
  upcomingTitle?: string;
  upcomingDueDate?: string;
  upcomingClassName?: string;
}) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold">Classroom Hub</h2>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                {classCount} class{classCount === 1 ? "" : "es"}
              </span>
            </div>
            {upcomingTitle ? (
              <p className="mt-1 text-sm text-muted-foreground">
                Next: <strong className="text-foreground">{upcomingTitle}</strong>
                {upcomingClassName ? ` in ${upcomingClassName}` : ""} · due{" "}
                {formatClassroomDate(upcomingDueDate)}
              </p>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">
                Create or join a class to start using classroom assignments.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/app/classroom"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            Open Classroom <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/app/classroom"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
          >
            Create / Join
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  suffix = "",
  tone = "primary",
  small = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
  tone?: "primary" | "warning";
  small?: boolean;
}) {
  return (
    <div className="interactive-card glass-card rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className={`${tone === "warning" ? "text-warning" : "text-primary"} animate-pop`}>
          {icon}
        </span>
        {label}
      </div>
      <div className={`mt-2 font-bold ${small ? "text-base" : "text-2xl"}`}>
        {typeof value === "number" ? <AnimatedNumber value={value} suffix={suffix} /> : value}
      </div>
    </div>
  );
}

function ContinueStudyingCard({
  data,
}: {
  data: null | {
    subject: string;
    subjectName: string;
    examBoard: string;
    topic: string;
    topicName: string;
    completedQuestions: number;
    totalQuestions: number;
    accuracy: number;
    completion: number;
  };
}) {
  return (
    <div className="interactive-card glass-card overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Continue Studying
            </span>
            {data ? (
              <span className="text-xs font-medium text-muted-foreground">{data.examBoard}</span>
            ) : null}
          </div>

          {data ? (
            <>
              <h2 className="mt-3 truncate text-2xl font-bold tracking-tight">{data.topicName}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{data.subjectName}</p>
            </>
          ) : (
            <>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                You have not started a topic yet.
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Choose a subject and answer your first question to build your study streak.
              </p>
            </>
          )}
        </div>

        {data ? (
          <Link
            to="/app/practice/$subject/$topic"
            params={{ subject: data.subject, topic: data.topic }}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            Resume <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            to="/app/subjects"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            Start Revision <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      {data ? (
        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-2 flex items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
              <span>
                {data.completedQuestions}/{data.totalQuestions} questions completed
              </span>
              <span>{data.completion}% complete</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="progress-fill h-full rounded-full bg-gradient-to-r from-primary via-accent to-cyan-500"
                style={{ width: `${data.completion}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-2 md:w-56">
            <div className="rounded-xl border border-border bg-background/60 p-3">
              <div className="text-xs font-medium text-muted-foreground">Accuracy</div>
              <div className="mt-1 text-xl font-bold">{data.accuracy}%</div>
            </div>
            <div className="rounded-xl border border-border bg-background/60 p-3">
              <div className="text-xs font-medium text-muted-foreground">Completed</div>
              <div className="mt-1 text-xl font-bold">{data.completedQuestions}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function formatTimeAgo(date: number) {
  const diffMs = Date.now() - date;
  const minutes = Math.max(1, Math.floor(diffMs / 60000));
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}
