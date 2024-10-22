"use client";

import { navItems } from "./const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const checkPaths = (path: string, pathname: string) => {
  if (path === "/") return pathname === path;
  return pathname.startsWith(path);
};

export const Nav = () => {
  const pathname = usePathname();
  const links = navItems.map(({ name, path }) => (
    <Link
      key={name}
      className={`nav__link ${
        checkPaths(path, pathname) ? "nav__link--active" : ""
      }`}
      href={path}
    >
      {name}
    </Link>
  ));
  return <nav className="nav">{links}</nav>;
};
