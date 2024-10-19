import { RepoSSG } from "@/types";

export const fetchRepoById = async (id: string|number): Promise<RepoSSG> => {
    const res = await fetch(`https://api.github.com/repositories/${id}`);
    if (!res.ok) {
        throw new Error("Ошибка загрузки данных");
    }           
    const repos = await res.json();
    return repos;   
}