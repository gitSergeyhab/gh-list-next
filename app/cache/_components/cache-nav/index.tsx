"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cacheTitles } from "../../const";
import "./style.css";


export const CacheNav = () => {
  const pathname = usePathname();
  return (
    <div className="cache-nav">
      <ul className="cache-nav__list">
        {cacheTitles.map(({ name, href }) => (
          <li className="cache-nav__item" key={name}>
            <Link
              href={href}
              className={
                pathname === href
                  ? "cache-nav__link cache-nav__link--active"
                  : "cache-nav__link"
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
