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
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="A full stack developer" />
          <meta name="keywords" content="Nawin Sharma, Full Stack Developer, Portfolio, JavaScript, TypeScript, React, Next.js, Node.js, Web Developer" />
          <meta name="author" content="Nawin Sharma" />
          <meta name="theme-color" content="#000319" />
          <link rel="canonical" href="https://nawin.xyz/" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/static/images/favicon.png" sizes="any" />
          {/* Open Graph tags */}
          <meta property="og:title" content="Nawin Sharma" />
          <meta property="og:description" content="A full stack developer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nawin.xyz/" />
          <meta property="og:image" content="/og.png" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nawin Sharma" />
          <meta name="twitter:description" content="A full stack developer" />
          <meta name="twitter:image" content="/og.png" />
          <meta name="twitter:site" content="@NawinScript" />
        </head>
        <body className={inter.className}>
          <main className="dark:bg-black bg-white dark:bg-grid-small-white/[0.07] sm:dark:bg-grid-white/[0.03] bg-grid-black/[0.1]">
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
