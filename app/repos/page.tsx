import Link from "next/link";
import { fetchRepos } from "./fetchRepos";

export default async function Repos() {
    const repos = await fetchRepos();
    return (
        <section>
          <h1 className="app__title">Repositories (Example for SSG). Count: {repos.length}</h1>
          {repos.length === 0 && <p className="app__text">No repositories</p>}
          <ul>
            {repos.map((repo) =>
                <li key={repo.id}>
                    <Link href={`/repos/${repo.id}`}>
                        {repo.full_name}
                    </Link>
                </li>
            )}
          </ul>
        </section>
      );
}