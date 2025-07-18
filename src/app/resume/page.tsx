"use client";

import { useEffect, useState } from "react";
import { FloatingBar } from "../components/FloatingDock/FloatingBar";
import Link from "next/link";
import { IconDownload, IconArrowLeft } from "@tabler/icons-react";

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <main className="relative flex justify-center overflow-hidden items-center flex-col mx-auto h-screen">
        <div className="w-full h-full">
          <iframe
            src="https://drive.google.com/file/d/195h6LvMMUNtgab-qGB3Z9HnMTOeiB8-i/view?usp=sharing"
            className="w-full h-full"
            title="Resume"
          />
        </div>
        <div className="fixed top-6 right-6 z-10">
        </div>
        <div className="fixed top-14 left-6 z-10">
          <Link 
            href="/"
            className="px-5 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-full transition-all duration-300 ease-in-out flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <IconArrowLeft stroke={2.5} size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </main>
      <FloatingBar />
    </>
  );
}
