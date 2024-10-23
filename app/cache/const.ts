interface CacheLink {
    name: string;
    href: string;
  }
  
export const cacheTitles: CacheLink[] = [
    { name: "cache", href: "/cache" },
    { name: "revalidate", href: "/cache/revalidate" },
    { name: "no-cache", href: "/cache/no-cache" },
    { name: "revalidate-path", href: "/cache/revalidate-path" },
    { name: "revalidate-path (client-btn)", href: "/cache/revalidate-path-client" },
];