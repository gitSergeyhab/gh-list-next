import { fetchRepoById } from "./fetchRepoById";
import { fetchRepos } from "../fetchRepos";
import { JsonText } from "@/shared/json-text";

export interface RepoParams {
  params: {
    id: number;
  };
}

export async function generateStaticParams() {
  const repos = await fetchRepos();
  return repos.map((repo) => ({ id: repo.id.toString() }));
}

export async function generateMetadata({ params: { id } }: RepoParams) {
  const repo = await fetchRepoById(id);
  return {
    title: `repo: ${repo.full_name}`,
  };
}

export default async function Repo({ params: { id } }: RepoParams) {
  const repo = await fetchRepoById(id);
  return (
    <section>
      <h1 className="app__title">
        Repository (Example of SSG): {repo.full_name}
      </h1>
      <JsonText>{JSON.stringify(repo, null, 2)}</JsonText>
    </section>
  );
}
