import React from "react";
import { Spotlight } from "../../../components/ui/SpotLight";
import clsx from "clsx";
import { TextGenerateEffect } from "../../../components/ui/TextGenerateUi";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import Image from "next/image";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TwitterIcon from "../../../public/twitter.svg";
// import Threads from "../../../components/ui/threads";
import GithubCalender from "../../../components/gh";

export function HeroSection() {
  let className = clsx(
    "bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600",
    "bg-clip-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px] xl:leading-[86px] tracking-tight text-transparent"
  );
  return (
    <div className="mt-10 lg:mt-2">
      <div>
        <Spotlight
          className="-top-20 -left-5 sm:-top-30 sm:-left-8 md:-top-40 md:-left-10 lg:-left-32 lg:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[60vh] w-[40vw] sm:h-[70vh] sm:w-[45vw] md:h-[80vh] md:w-[50vw] top-5 sm:top-8 md:top-10 left-full"
          fill="purple"
        />
        <Spotlight 
          className="left-40 sm:left-60 md:left-80 top-14 sm:top-20 md:top-28 h-[60vh] w-[40vw] sm:h-[70vh] sm:w-[45vw] md:h-[80vh] md:w-[50vw]" 
          fill="blue" 
        />
      </div>
      <div
        className="min-h-[80vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto relative z-10 w-full pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center">
              <div className={className}>
                Hello, there!<i className="twa twa-waving-hand"></i>
                <span className="wave text-black">👋</span>
              </div>
            </h1>
            <div className="text-center">
              <TextGenerateEffect
                words=" I'm Nawin"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-bold mb-6 sm:mb-8"
              />
            </div>
          </div>
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mt-4 sm:mt-6">
            <GithubCalender />
          </div>
        </div>
        
        {/* Description text with improved responsive alignment */}
        <div className="mt-6 sm:mt-8 md:mt-9 mb-6 sm:mb-8 md:mb-10 w-full flex justify-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl text-justify max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[32px] px-4 sm:px-6 md:px-8">
            A Full Stack Developer 🚀, always tinkering with the latest tech. I
            love building robust and scalable web applications with beautiful UI.
            I&#39;m currently immersed in learning AI along with Devops.
            I&#39;m always learning new
            things, and I&#39;m excited to see where my next project takes me.
            Open to new opportunities and eager to collaborate on innovative
            projects.
          </p>
        </div>
        
        {/* Button with improved responsive design */}
        <div className="w-full flex justify-center px-4 sm:px-0">
          <Link
            href="https://www.mergedandshare.in/profile/NawinKumarSharma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <button
              className={`
            w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full 
            flex items-center justify-center gap-2 sm:gap-3
            text-slate-100 text-sm sm:text-base md:text-lg
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-violet-500 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
        `}
            >
              <FiSend className="text-sm sm:text-base md:text-lg flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-center leading-tight">
                <span className="block sm:inline">Dive to my Open Source</span>
                <span className="block sm:inline sm:ml-1">Contributions</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Social icons with improved spacing */}
        <div className="socials flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-0">
          <Link href="https://github.com/nawinsharma" target="_blank" className="transition-transform hover:scale-110">
            <Image 
              src={GithubIcon} 
              alt="Github Icon" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nawin-kumar-sharma-83009825a"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <Image 
              src={LinkedinIcon} 
              alt="Linkedin Icon" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </Link>
          <Link href="https://twitter.com/NawinScript" target="_blank" className="transition-transform hover:scale-110">
            <Image
              height={50}
              width={50}
              src={TwitterIcon}
              alt="Twitter Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </Link>
        </div>
        
        {/* Threads component */}
        {/* <div className="w-full mt-8 sm:mt-10 md:mt-12">
          <Threads
            amplitude={2}
            distance={0}
            enableMouseInteraction={true}
          />
        </div> */}
      </div>

    </div>
  );
}
