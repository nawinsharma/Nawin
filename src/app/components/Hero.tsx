import React from "react";
import { Spotlight } from "../../../components/ui/SpotLight";
import clsx from "clsx";
import { TextGenerateEffect } from "../../../components/ui/TextGenerateUi";
import { Cover } from "../../../components/ui/cover";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import Image from "next/image";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import LinktreeIcon from "../../../public/linktree-logo-icon.svg";
import TwitterIcon from "../../../public/twitter.svg";

export function HeroSection() {
  let className = clsx(
    "bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600",
    "mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]"
  );
  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <div className={className}>
            Hello, there!<i className="twa twa-waving-hand"></i>
            <span className="wave text-black">👋</span>
          </div>
        </h1>
        <TextGenerateEffect
          words=" I'm Nawin"
          className=" text-4xl sm:text-5xl font-sans font-bold mb-8 md:text-6xl lg:text-7xl"
        />

        <div className="mt-9 mb-10 w-full flex text-gray-300  text-lg  md:text-xl max-w-3xl leading-[30px]">
          A passionate Developer 🚀 having an experience of building Full Stack
          Web applications with JavaScript, TypeScript, Reactjs, Next js,
          Nodejs, Express, Hono and some other cool libraries and
          frameworks.
        </div>
        <Link
          href="https://www.mergedandshare.in/profile/nawinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 md:mb-0 md:mr-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out"
        >
          <button
            className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-100
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
          >
            <FiSend />
            <span>          Dive to my Open Source Contributions
            </span>
          </button>

        </Link>

        <div className="socials flex flex-row gap-5 mt-9">
          <Link href="https://github.com/nawinsharma" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nawin-kumar-sharma-83009825a"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://twitter.com/NawinScript" target="_blank">
            <Image
              height={50}
              width={50}
              src={TwitterIcon}
              alt="Twitter Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
