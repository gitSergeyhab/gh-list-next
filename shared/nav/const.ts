interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    name: "GithubUsers",
    path: "/",
  },
  {
    name: "Forms",
    path: "/forms",
  },
  {
    name: "Repos(SSG)",
    path: "/repos",
  },
  {
    name: "Cache",
    path: "/cache",
  },
];
