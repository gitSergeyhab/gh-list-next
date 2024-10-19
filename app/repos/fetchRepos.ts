import { RepoSSG } from "@/types";

export const fetchRepos = async (): Promise<RepoSSG[]> => {
    const res = await fetch("https://api.github.com/repositories");
    if (!res.ok) {
        throw new Error("Ошибка загрузки данных");
    }           
    const repos = await res.json();
    return repos;   
}