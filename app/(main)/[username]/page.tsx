
import { NoContent } from "@/shared/no-content";
import { RepoList } from "../_components/repo-list";
import { fetchReposByUser } from "./fetchReposByUser";

export interface GitHubListProps {
  params: {
    username: string;
  }
}

export function generateMetadata({params: {username}}: GitHubListProps) {
  return {
    title: `Repos of ${username}`,
  };
}

export default async function GitHubList({params: {username}}: GitHubListProps) {
  const repos = await fetchReposByUser(username)
  return (
    <section>
      <h1 className="app__title">Repositories of {username}</h1>
      {repos.length === 0 && <NoContent title="No repositories" />}
      <RepoList repos={repos} />
    </section>
  );
}
