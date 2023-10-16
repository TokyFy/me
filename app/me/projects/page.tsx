'use client'

import {ArrowUpRightIcon} from "lucide-react";
import Image from "next/image";
import {Techo} from "@components/Micro";

/* eslint-disable react/no-unescaped-entities */

export default function Projects() {

    return (
        <>
            <div className="max-w-md flex flex-col gap-8 my-8">
                <div className="text-md">
                    I like crafting stuff , so there are few thing that I'm proud of
                </div>
                <div className="flex flex-col">

                    <Project
                        title={"Project - Personal website"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate, debitis dicta distinctio ea exercitationem illo in ipsam itaque..."}
                        techno={["Nextjs" , "Tailwincss" , "ReactQuery" , "Api Rest" , "Graphql" , "Firebase" , "Monorepos"]}
                        preview={"/assets/project-4.png"}/>

                    <Project
                        title={"Project - Lirikisa"}
                        description={"I'ts and web app that you can use to find the lirics of your favorite song..."}
                        techno={["React" , "Scss" , "Node" , "Api Rest" , "React Query"]}
                        preview={"/assets/project-2.png"}/>
                </div>
            </div>
        </>
    )
}

type IProject = {
    title : string,
    description : string,
    techno : string[],
    preview : string
}

function Project({title , description , techno , preview} : IProject) {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer my-6 p-2 border border-dashed border-neutral-400 rounded dark:border-neutral-600">
            <div className=" flex justify-between text-neutral-800 dark:text-neutral-300">
                <p className="group-hover:underline font-bold text-sm ">{title}</p>

                <div className="group-hover:rotate-45 flex justify-center items-center">
                    <ArrowUpRightIcon size={14}/>
                </div>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {description}
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-sm text-neutral-500 dark:text-neutral-300">Tech stack :</div>
                <div className="flex gap-2 flex-wrap">
                    {
                        techno.map((el, index) => <Techo name={el} key={index}/>)
                    }
                </div>
            </div>
            <div className="rounded overflow-hidden bg-blue-50 dark:bg-gray-900">
                <Image className="w-full h-auto scale-90 translate-y-3 shadow-xl dark:shadow-neutral-600" width={1090} height={720} src={preview} alt={""}/>
            </div>
        </div>
    )
}