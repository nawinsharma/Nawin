import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedCursor } from "./components/AnimatedCursor";
import { Toaster } from "sonner";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawin Sharma",
  description: "A full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="dark:bg-black bg-white dark:bg-grid-small-white/[0.07] sm:dark:bg-grid-white/[0.03] bg-grid-black/[0.1]">
          <link rel="icon" href="/static/images/favicon.png" sizes="any" />
          <AnimatedCursor />
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>{" "}
        </main>
      </body>
    </html>
  );
}
