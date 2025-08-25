import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "../components/ui/sonner";

export const metadata: Metadata = {
  title: "RCS Service",
  description: "RCS messaging + automations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100dvh-64px)]">{children}</main>
          <Footer />
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
