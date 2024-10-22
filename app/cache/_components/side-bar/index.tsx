"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

interface CacheLink {
  name: string;
  href: string;
}

const cacheTitles: CacheLink[] = [
  { name: "cache", href: "/cache" },
  { name: "revalidate", href: "/cache/revalidate" },
  { name: "no-cache", href: "/cache/no-cache" },
];

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="side-bar">
      <ul className="side-bar__list">
        {cacheTitles.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={
                pathname === href
                  ? "side-bar__link side-bar__link--active"
                  : "side-bar__link"
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
