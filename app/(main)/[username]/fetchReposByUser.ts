import { Repo } from "@/types";

export const fetchReposByUser = async (username: string): Promise<Repo[]> => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?&sort=updated`
    );

    if (!res.ok) {
      //обрабатывается в компоненте Error
      throw new Error("Ошибка загрузки данных");
    }

    return await res.json();
}