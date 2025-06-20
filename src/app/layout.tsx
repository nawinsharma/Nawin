import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { ViewTransitions } from 'next-view-transitions';
import { Provider as BalanceProvider } from 'react-wrap-balancer';


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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <main className="dark:bg-black bg-white dark:bg-grid-small-white/[0.07] sm:dark:bg-grid-white/[0.03] bg-grid-black/[0.1]">
            <link rel="icon" href="/static/images/favicon.png" sizes="any" />
            <ToastContainer />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <BalanceProvider>
                {children}
              </BalanceProvider>
            </ThemeProvider>{" "}
          </main>
          <Script async src="https://custom-web-widget.vercel.app/widget.umd.js"></Script>
        </body>
      </html>
    </ViewTransitions>
  );
}
