export interface Repo {
  id: number;
  visibility: string;
  name: string;
  html_url: string;
  topics: string[];
  updated_at: string;
  description: string;
  language: string;
  stargazers_count: number;
}

export type Language = "TypeScript" | "JavaScript" | "Python" | "HTML";

export type Status = "idle" | "loading" | "success" | "error";

export interface User {
  login: string;
  id: number;
}

export interface RepoSSG {
  id: number;
  full_name: string;
}

export type CountAction = "increment" | "decrement" | "reset";
