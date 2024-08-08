import Image from "next/image";
import { Link } from "./Link";
import NextJS from "../../../public/next.svg";
import TailwindCSS from "../../../icons/tailwind.svg";
import Typescript from "../../../icons/typescript.svg";

export function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="flex items-center space-x-1">
          <span className="mr-1 text-gray-400">Built with</span>
          <div className="flex space-x-1.5">
            <Link href="NextJs">
              <Image
                src={NextJS}
                alt="next"
                className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 bg-white"
              />
            </Link>
            <Link href="TailwindCSS">
              <Image
                src={TailwindCSS}
                alt="tailwind"
                className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5"
              />
            </Link>
            <Link href="Typescript">
              <Image
                src={Typescript}
                alt="ts"
                className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5"
              />
            </Link>
          </div>
          <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
          <Link
            href={"https://github.com/nawinkumarsharma/nawin"}
            className="text-gray-500 underline underline-offset-4 dark:text-gray-400 hover:text-green-500"
          >
            <span data-umami-event="view-source">View source</span>
          </Link>
        </div>
        <div className="text-center text-gray-400 font-bold cursor-pointer hover:text-white">
          Made with ❤️ by Nawin
        </div>
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>Nawins 0 and 1🌟</span>
        </div>
      </div>
    </footer>
  );
}
