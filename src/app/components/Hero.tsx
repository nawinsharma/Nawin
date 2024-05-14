import React from "react";
import { Spotlight } from "../../../components/ui/SpotLight";
import clsx from "clsx";

export function HeroSection() {
  let className = clsx(
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <div className={className}>
            Hello, there!<i className="twa twa-waving-hand"></i>
            <span className="wave text-black">👋</span>

          </div>
        </h1>
        <div className="flex items-center gap-5">
          <span className="text-xl sm:text-3xl md:text-5xl font-bold text-white">
            I&apos;m Nawin
          </span>
        </div>
        <div className="mt-9 text-gray-300">
          A passionate Developer 🚀 having an experience of building Full Stack Web applications with <br /> JavaScript / TypeScript / Reactjs / Next js / Nodejs / Express / Graphql /  Hono   and some other cool libraries and frameworks.
        </div>
      </div>
    </div>
  );
}
