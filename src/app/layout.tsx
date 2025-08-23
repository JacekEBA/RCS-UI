import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "RCS Service",
  description: "RCS messaging + automations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Toggle dark mode by adding `className="dark"` to html or body */}
      <body className="bg-background text-foreground">
        <Header />
        <main className="min-h-[calc(100dvh-64px)]">{children}</main>
      </body>
    </html>
  );
}
