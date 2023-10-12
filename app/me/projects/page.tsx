'use client'

import {ArrowUpRightIcon} from "lucide-react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Projects() {

    return (
        <>
            <div className="max-w-3xl gap-8 mx-auto my-8 grid grid-cols-1  px-8">
                <div className="group bg-neutral-100 rounded p-2 md:p-4 flex flex-col gap-8 cursor-pointer">
                    <div className=" flex justify-between text-neutral-800">
                        <p className="group-hover:underline">Project - Lirikisa</p>

                        <div className="group-hover:rotate-45 flex justify-center items-center">
                            <ArrowUpRightIcon size={18}/>
                        </div>
                    </div>
                    <div className="border border-neutral-300 grow rounded border-dashed overflow-hidden">
                        <Image className="w-full h-auto" width={1090} height={720} src={"/assets/project-1.png"} alt={""}/>
                    </div>
                </div>
                <div className="group bg-neutral-100 rounded p-2 md:p-4 flex flex-col gap-8 cursor-pointer">
                    <div className=" flex justify-between text-neutral-800">
                        <p className="group-hover:underline">Project - Hayra.space</p>

                        <div className="group-hover:rotate-45 flex justify-center items-center">
                            <ArrowUpRightIcon size={18}/>
                        </div>
                    </div>
                    <div className="border border-neutral-300 grow rounded border-dashed overflow-hidden">
                        <Image className="w-full h-auto" width={1090} height={720} src={"/assets/project-2.png"} alt={""}/>
                    </div>
                </div>
            </div>
        </>
    )
}