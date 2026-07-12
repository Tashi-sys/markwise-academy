/** Re-exports and helpers — question data lives in src/data/questionBank.ts */
export type { MarkPoint, Question, QuestionFilter } from "../data/questionBank";
export {
  QUESTION_BANK as QUESTIONS,
  filterQuestions,
  getQuestion,
  getQuestionsByTopic,
  subjectHasQuestions,
  getTopicsWithQuestions,
  getSubjectsWithQuestions,
} from "../data/questionBank";

export { getTopicsForSubject, getTopicMeta, TOPICS_BY_SUBJECT } from "../data/topicsConfig";

export type { TopicMeta } from "../data/topicsConfig";

export {
  EXAM_BOARDS,
  getExamBoard,
  getBoardsForQualification,
  getSubjectsForBoard,
  getSubjectName,
  getSubjectAccent,
} from "../data/syllabusConfig";

export type { ExamBoardId, Qualification, SyllabusSubject } from "../data/syllabusConfig";

import type { ExamBoardId, Qualification } from "../data/syllabusConfig";
import { filterQuestions } from "../data/questionBank";

export function getUserQuestions(filter: {
  qualification: Qualification;
  examBoard: ExamBoardId;
  subject?: string;
  topic?: string;
}) {
  return filterQuestions(filter);
}
