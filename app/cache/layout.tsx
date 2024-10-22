import type { Metadata } from "next";
import { SideBar } from "./_components/side-bar";
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
      <SideBar />
      {children}
    </div>
  );
}
