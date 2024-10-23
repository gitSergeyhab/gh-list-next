import type { Metadata } from "next";
import { CacheNav } from "./_components/cache-nav";
import "./style.css";

export const metadata: Metadata = {
  title: "Cache",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="cache-layout">
      <CacheNav />
      {children}
    </div>
  );
}
