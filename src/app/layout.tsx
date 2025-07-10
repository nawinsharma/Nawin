import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { ViewTransitions } from 'next-view-transitions';
import { Provider as BalanceProvider } from 'react-wrap-balancer';


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000319",
};

export const metadata: Metadata = {
  title: "Nawin Sharma",
  description: "A full stack developer",
  keywords: ["Nawin Sharma", "Full Stack Developer", "Portfolio", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Web Developer"],
  authors: [{ name: "Nawin Sharma" }],
  creator: "Nawin Sharma",
  metadataBase: new URL("https://nawin.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nawin Sharma",
    description: "A full stack developer",
    url: "https://nawin.xyz/",
    siteName: "Nawin Sharma Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1322,
        height: 905,
        alt: "Nawin Sharma - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawin Sharma",
    description: "A full stack developer",
    images: ["/og.png"],
    creator: "@NawinScript",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/static/images/favicon.png",
  },
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
