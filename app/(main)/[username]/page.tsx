
import { RepoList } from "../_components/repo-list";
import { fetchReposByUser } from "./fetchReposByUser";

export interface GitHubListProps {
  params: {
    username: string;
  }
}

export default async function GitHubList({params: {username}}: GitHubListProps) {
  const repos = await fetchReposByUser(username)
  return (
    <section>
      <h1 className="app__title">Repositories of {username}</h1>
      {repos.length === 0 && <p className="app__text">No repositories</p>}
      <RepoList repos={repos} />
    </section>
  );
}
