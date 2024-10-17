import { FC } from "react";
import Link from "next/link";
import { User as IUser } from "@/types";
import "./style.css";


export const User: FC<IUser> = ({ login }) => (
  <Link href={`/${login}`} className="user-link">
    {login}
  </Link>
  );

