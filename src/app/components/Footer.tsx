import Image from "next/image";
import { Link } from "./Link";
import NextJS from "../../../public/next.svg";
import TailwindCSS from "../../../icons/tailwind.svg";
import Typescript from "../../../icons/typescript.svg";

export function Footer() {
  return (
    <footer className="container mx-auto px-4">
      <div className="flex flex-col space-y-6 py-8 lg:py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Built with section */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
            <span className="text-sm text-gray-400">Built with</span>
            <div className="flex items-center space-x-1.5">
              <Link href="NextJs" className="transition-transform hover:scale-110">
                <Image
                  src={NextJS}
                  alt="next"
                  className="h-4 w-4 bg-white lg:h-5 lg:w-5"
                />
              </Link>
              <Link href="TailwindCSS" className="transition-transform hover:scale-110">
                <Image
                  src={TailwindCSS}
                  alt="tailwind"
                  className="h-4 w-4 lg:h-5 lg:w-5"
                />
              </Link>
              <Link href="Typescript" className="transition-transform hover:scale-110">
                <Image
                  src={Typescript}
                  alt="ts"
                  className="h-4 w-4 lg:h-5 lg:w-5"
                />
              </Link>
            </div>
            <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
            <Link
              href="https://github.com/nawinsharma/nawin"
              className="text-sm text-gray-500 underline underline-offset-4 transition-colors hover:text-green-500 dark:text-gray-400"
            >
              <span data-umami-event="view-source">View source</span>
            </Link>
          </div>

          {/* Made with love section */}
          <div className="text-center">
            <span className="cursor-pointer text-sm font-bold text-gray-400 transition-colors hover:text-white">
              Made with ❤️ by Nawin
            </span>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col items-center space-y-2 border-t border-gray-800 pt-6 text-sm text-gray-400 sm:flex-row sm:justify-center sm:space-x-2 sm:space-y-0">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span className="hidden sm:inline">{` • `}</span>
          <span>Nawins 0 and 1🌟</span>
        </div>
      </div>
    </footer>
  );
}