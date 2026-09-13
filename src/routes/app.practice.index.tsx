import { createFileRoute } from "@tanstack/react-router";
import { SubjectToolPage } from "../components/subjects/SubjectToolPage";
import { SubjectTopics } from "../components/subjects/SubjectTopics";
import { subjectToolSearch } from "../lib/subjectScope";

export const Route = createFileRoute("/app/practice/")({
  validateSearch: (search) => subjectToolSearch.parse(search),
  component: PracticeIndex,
});
function PracticeIndex() {
  const search = Route.useSearch();
  return (
    <SubjectToolPage search={search}>
      {(context) => <SubjectTopics key={context.key} context={context} />}
    </SubjectToolPage>
  );
}
