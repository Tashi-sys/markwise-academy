import {
  getExamBoard,
  getSubjectName,
  type ExamBoardId,
  type Qualification,
} from "../data/syllabusConfig";
import type { Question } from "../data/questionBank";
import type { SubjectSyllabusSelection, UserProfile } from "./auth";

export type UserSubjectSyllabus = SubjectSyllabusSelection & {
  key: string;
  subjectName: string;
  boardName: string;
};

export function selectionKey(selection: SubjectSyllabusSelection) {
  return `${selection.examBoard}:${selection.qualification}:${selection.subject}`;
}

export function getUserSubjectSyllabuses(user: UserProfile): UserSubjectSyllabus[] {
  const raw =
    user.subjectSyllabuses?.length > 0
      ? user.subjectSyllabuses
      : user.selectedSubjects.map((subject) => ({
          subject,
          examBoard: user.examBoard,
          qualification: user.qualification,
        }));

  return raw
    .filter((selection) =>
      getExamBoard(selection.examBoard)?.subjects.some(
        (subject) => subject.id === selection.subject,
      ),
    )
    .map((selection) => {
      const board = getExamBoard(selection.examBoard);
      return {
        ...selection,
        key: selectionKey(selection),
        subjectName: getSubjectName(selection.examBoard, selection.subject),
        boardName: board?.name ?? selection.examBoard,
      };
    });
}

export function getSyllabusSummary(user: UserProfile) {
  const selections = getUserSubjectSyllabuses(user);
  const boards = [...new Set(selections.map((selection) => selection.boardName))];
  if (selections.length === 0) return "No syllabuses selected";
  if (boards.length <= 1) {
    return `${selections.length} subject syllabus${selections.length === 1 ? "" : "es"}`;
  }
  return `${selections.length} subjects · ${boards.length} syllabuses`;
}

export function findUserSubjectSyllabus(
  user: UserProfile,
  subject: string,
  examBoard?: string,
  qualification?: string,
) {
  const selections = getUserSubjectSyllabuses(user).filter(
    (selection) => selection.subject === subject,
  );
  return (
    selections.find(
      (selection) =>
        (!examBoard || selection.examBoard === examBoard) &&
        (!qualification || selection.qualification === qualification),
    ) ??
    selections[0] ??
    null
  );
}

export function canUseQuestion(
  user: UserProfile,
  question: Pick<Question, "subject" | "examBoard" | "qualification">,
) {
  return getUserSubjectSyllabuses(user).some(
    (selection) =>
      selection.subject === question.subject &&
      selection.examBoard === question.examBoard &&
      selection.qualification === question.qualification,
  );
}

export function parseExamBoard(value: unknown): ExamBoardId | undefined {
  return typeof value === "string" ? (value as ExamBoardId) : undefined;
}

export function parseQualification(value: unknown): Qualification | undefined {
  return typeof value === "string" ? (value as Qualification) : undefined;
}
