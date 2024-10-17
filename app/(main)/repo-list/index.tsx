"use client";

import { FC } from "react";
import { RepoItem } from "../repo-item";
import { Repo } from "@/types";
import "./style.css";

export const RepoList: FC<{ repos: Repo[] }> = ({ repos }) => {
  return (
    <ul className="repo-list">
      {repos.map((repo) => (
        <li key={repo.id}>
          <RepoItem {...repo} />
        </li>
      ))}
    </ul>
  );
};
