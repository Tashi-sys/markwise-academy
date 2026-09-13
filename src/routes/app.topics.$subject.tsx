import { createFileRoute } from "@tanstack/react-router";
import { SubjectToolPage } from "../components/subjects/SubjectToolPage";
import { SubjectTopics } from "../components/subjects/SubjectTopics";
import { subjectToolSearch } from "../lib/subjectScope";

export const Route = createFileRoute("/app/topics/$subject")({
  validateSearch: (search) => subjectToolSearch.parse(search),
  component: TopicsPage,
});
function TopicsPage() {
  const { subject } = Route.useParams();
  const search = Route.useSearch();
  return (
    <SubjectToolPage search={{ ...search, subject }}>
      {(context) => <SubjectTopics key={context.key} context={context} />}
    </SubjectToolPage>
  );
}
