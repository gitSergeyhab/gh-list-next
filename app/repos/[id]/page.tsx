import { fetchRepoById } from "./fetchRepoById";
import { fetchRepos } from "../fetchRepos";


export async function generateStaticParams () {
    const repos = await fetchRepos();
    return repos.map((repo) => ({ slug: repo.id.toString() }));
}

export interface RepoParams {
    params: {
      id: number;
    }
  }


export default async function Repo({params: {id}}: RepoParams) {
    const repo = await fetchRepoById(id)
    return (
        <section>
          <h1 className="app__title">Repository (Example of SSG): {repo.full_name}</h1>
            <code>
                <pre>{JSON.stringify(repo, null, 2)}</pre>
            </code>
        </section>
    );
}