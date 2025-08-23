import "./globals.css";
import "react-day-picker/style.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "RCS Service",
  description: "RCS messaging + automations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Header />
        <main className="min-h-[calc(100dvh-64px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
