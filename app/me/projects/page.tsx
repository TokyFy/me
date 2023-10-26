'use client'

import {ArrowUpRightIcon, Dot} from "lucide-react";
import Image from "next/image";
import {Techno} from "@components/Micro";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Projects() {

    return (
        <>
            <div className="max-w-lg flex flex-col gap-8">
                    <Project
                        title={"Project - Personal website"}
                        description={"My digital garder , were I store all my public data xd"}
                        techno={["Nextjs", "Tailwincss", "ReactQuery", "Api Rest", "Graphql", "Firebase", "Monorepos"]}
                        preview={"/assets/project-4.png"}
                        link={"https://toky.vercel.app/"}
                        key={"p-1"}
                    />

                    <Project
                        title={"Project - Lirikisa"}
                        description={"I'ts and web app that you can use to find the lirics of your favorite song..."}
                        techno={["React", "Scss", "Node", "Api Rest", "React Query"]}
                        preview={"/assets/project-2.png"}
                        link={"https://lirikisa.vercel.app/"}
                        key={"p-2"}
                    />
            </div>
        </>
    )
}

type IProject = {
    title: string,
    description: string,
    techno: string[],
    preview: string,
    link: string
}

function Project({title, description, techno, preview, link}: IProject) {
    return (
        <Link
            href={link}
            target={"_blank"}
            className="group flex flex-col cursor-pointer">
            <div className=" flex justify-between text-neutral-800 dark:text-neutral-400">
                <p className="group-hover:underline font-bold text-sm ">{title}</p>

                <div
                    className="group-hover:rotate-45 flex justify-center items-center opacity-25 group-hover:opacity-100">
                    <ArrowUpRightIcon size={14}/>
                </div>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                {description}
            </div>
            <div className="flex flex-wrap items-center text-neutral-400">
                {
                    techno.map((el, index) =>
                        <span className="flex" key={`t-${index}`}>
                            { index !== 0 && <Dot size={18}/> }
                            <Techno name={el}/>
                        </span>
                    )
                }
            </div>
            <div className="overflow-hidden bg-neutral-100 dark:bg-gray-900 mt-2 border border-neutral-300">
                <Image className="w-full h-auto dark:shadow-neutral-600" width={1090} height={720}
                       src={preview} alt={""}/>
            </div>
        </Link>
    )
}