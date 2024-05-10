import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nawin Sharma',
  description: 'A full stack developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" dark:bg-black bg-white dark:bg-grid-small-white/[0.3] sm:dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
          <AnimatedCursor />
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}