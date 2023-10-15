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
                <div className="flex flex-col gap-4">

                    <div className="group rounded flex flex-col gap-3 cursor-pointer">
                        <div className=" flex justify-between text-neutral-800">
                            <p className="group-hover:underline text-sm">Project - Personal website</p>

                            <div className="group-hover:rotate-45 flex justify-center items-center">
                                <ArrowUpRightIcon size={14}/>
                            </div>
                        </div>
                        <div className="text-sm text-neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate, debitis dicta distinctio ea exercitationem illo in ipsam itaque...
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm text-neutral-500">Tech stack :</div>
                            <div className="flex gap-2 flex-wrap">
                                <Techo name={"Nextjs"}/>
                                <Techo name={"Tailwincss"}/>
                                <Techo name={"ReactQuery"}/>
                                <Techo name={"Api Rest"}/>
                                <Techo name={"Graphql"}/>
                                <Techo name={"Firebase"}/>
                                <Techo name={"Monorepos"}/>
                            </div>
                        </div>
                        <div className="border border-neutral-300 grow rounded border-dashed overflow-hidden">
                            <Image className="w-full h-auto" width={1090} height={720} src={"/assets/project-4.png"} alt={""}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}