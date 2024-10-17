import { User } from "@/types";

export const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(`https://api.github.com/users`);
    if (!res.ok) {
      console.error(res)
      //обрабатывается в компоненте Error
      throw new Error("Ошибка загрузки данных юзеров");
    }
    const users = await res.json();
    return users
}