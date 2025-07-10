"use client";
import Image from "next/image";
import React from "react";
import {
    CardBody,
    CardContainer,
    CardItem,
} from "../../../components/ui/3d-card";
import projectsData from "../../../data/projectsData.json";
import Link from "next/link";

export function Projects() {
    return (
        <div id="projects" className="min-h-screen bg-black py-6 pt-8">
            <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
                projects
            </h1>
            <div className="flex flex-wrap justify-center">
                {projectsData.details.map((project) => (
                    <CardContainer key={`${project.demoLink}`} className="inter-var m-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                            >
                                {project.title}
                            </CardItem>
                            <CardItem
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {project.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <Link href={project.github} target="_blank">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Github
                                    </CardItem>
                                </Link>
                                <Link href={`${project.demoLink}`} target="_blank">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Live demo
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
