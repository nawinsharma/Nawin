import React from "react";
import { Spotlight } from "../../../components/ui/SpotLight";
import clsx from "clsx";
import { TextGenerateEffect } from "../../../components/ui/TextGenerateUi";

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

        <div className="mt-9 w-full flex text-gray-300  text-lg  md:text-xl max-w-3xl leading-[30px]">
          A passionate Developer 🚀 having an experience of building Full Stack
          Web applications with JavaScript / TypeScript / Reactjs / Next js /
          Nodejs / Express / Graphql / Hono and some other cool libraries and
          frameworks.
        </div>
      </div>
    </div>
  );
}
