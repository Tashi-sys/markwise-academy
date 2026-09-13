import { getMiniPaperSyllabus } from "../../data/miniPaperConfig";
import { getTopicsForSubjectAndSyllabus } from "../../data/topicsConfig";
import { resolveSubjectScope, type SubjectToolSearch } from "../subjectScope";

export function getSubjectSyllabusGrounding(search: SubjectToolSearch) {
  const scope = resolveSubjectScope(search);
  if (!scope) throw new Error("Choose a supported subject and syllabus.");
  const topics = getTopicsForSubjectAndSyllabus({
    subjectId: scope.subject,
    examBoard: scope.examBoard,
    qualification: scope.qualification,
    syllabusCode: scope.syllabusCode,
  });
  return {
    ...scope,
    topics: Object.values(topics).map((topic) => ({ name: topic.name, description: topic.blurb })),
    papers:
      getMiniPaperSyllabus(scope.subject, scope.examBoard)?.papers.map((paper) => ({
        name: paper.label,
        description: paper.description,
        topics: paper.availableTopics ?? paper.topics,
      })) ?? [],
  };
}
