import { z } from "zod";
import { EXAM_BOARDS, getSyllabusCode } from "../data/syllabusConfig";
import type { UserProfile } from "./auth";
import { getUserSubjectSyllabuses } from "./userSyllabus";

export const subjectToolSearch = z.object({
  subject: z.string().optional(),
  examBoard: z.string().optional(),
  qualification: z.string().optional(),
  view: z.enum(["notes", "notebook"]).optional(),
});
export type SubjectToolSearch = z.infer<typeof subjectToolSearch>;

export const subjectScopeSchema = z.object({
  subject: z.string(),
  examBoard: z.string(),
  qualification: z.enum(["GCSE", "IGCSE"]),
});

export function resolveSubjectScope(search: SubjectToolSearch) {
  const board = EXAM_BOARDS.find(
    (item) => item.id === search.examBoard && item.qualification === search.qualification,
  );
  const subject = board?.subjects.find((item) => item.id === search.subject);
  if (!board || !subject) return null;
  return {
    subject: subject.id,
    subjectName: subject.name,
    examBoard: board.id,
    boardName: board.name,
    qualification: board.qualification,
    syllabusCode: getSyllabusCode(board.id, subject.id),
    key: `${board.id}:${board.qualification}:${subject.id}`,
  };
}

export type SubjectScope = NonNullable<ReturnType<typeof resolveSubjectScope>>;

export function resolveUserSubjectScope(user: UserProfile, search: SubjectToolSearch) {
  const scope = resolveSubjectScope(search);
  return scope && getUserSubjectSyllabuses(user).some((item) => item.key === scope.key)
    ? scope
    : null;
}

export function scopeSearch(scope: SubjectScope) {
  return { subject: scope.subject, examBoard: scope.examBoard, qualification: scope.qualification };
}

export function matchesSubjectScope(
  item: { subject: string; examBoard: string; qualification?: string },
  scope: SubjectScope,
) {
  return (
    item.subject === scope.subject &&
    item.examBoard === scope.examBoard &&
    item.qualification === scope.qualification
  );
}

export function tutorStorageKey(userId: string, scope: SubjectScope) {
  return `markwise:ai-tutor-chats:v2:${userId}:${scope.key}`;
}

export function notebookMatchesScope(
  notebook: { subject: string; examBoard: string; qualification?: string },
  scope: SubjectScope,
) {
  return (
    (notebook.subject === scope.subject || notebook.subject === scope.subjectName) &&
    (notebook.examBoard === scope.examBoard || notebook.examBoard === scope.boardName) &&
    (!notebook.qualification || notebook.qualification === scope.qualification)
  );
}
