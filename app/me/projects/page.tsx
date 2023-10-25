'use client'

import {ArrowUpRightIcon} from "lucide-react";
import Image from "next/image";
import {Techno} from "@components/Micro";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Projects() {

    return (
        <>
            <div className="max-w-lg flex flex-col gap-8">
                <div className="flex flex-col first:-mt-1">

                    <Project
                        title={"Project - Personal website"}
                        description={"My digital garder , were I store all my public data xd"}
                        techno={["Nextjs" , "Tailwincss" , "ReactQuery" , "Api Rest" , "Graphql" , "Firebase" , "Monorepos"]}
                        preview={"/assets/project-4.png"}
                        link={"https://toky.vercel.app/"}
                    />

                    <Project
                        title={"Project - Lirikisa"}
                        description={"I'ts and web app that you can use to find the lirics of your favorite song..."}
                        techno={["React" , "Scss" , "Node" , "Api Rest" , "React Query"]}
                        preview={"/assets/project-2.png"}
                        link={"https://lirikisa.vercel.app/"}
                    />

                </div>
            </div>
        </>
    )
}

type IProject = {
    title : string,
    description : string,
    techno : string[],
    preview : string,
    link : string
}

function Project({title , description , techno , preview , link} : IProject) {
    return (
        <Link
            href={link}
            target={"_blank"}
            className="group flex flex-col gap-3 cursor-pointer p-1 mb-14 border border-transparent hover:border-dashed hover:border-neutral-400 dark:border-neutral-600">
            <div className=" flex justify-between text-neutral-800 dark:text-neutral-300">
                <p className="group-hover:underline font-bold text-sm ">{title}</p>

                <div className="group-hover:rotate-45 flex justify-center items-center opacity-25 group-hover:opacity-100">
                    <ArrowUpRightIcon size={14}/>
                </div>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {description}
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex gap-2 flex-wrap">
                    {
                        techno.map((el, index) => <Techno name={el} key={index}/>)
                    }
                </div>
            </div>
            <div className="rounded overflow-hidden bg-neutral-100 dark:bg-gray-900">
                <Image className="w-full h-auto scale-90 shadow-xl dark:shadow-neutral-600" width={1090} height={720} src={preview} alt={""}/>
            </div>
        </Link>
    )
}