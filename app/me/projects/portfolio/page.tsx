'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import {CornerRightUp} from "lucide-react";
import React from "react";

export default function Projects() {

    return (
        <>
            <div className="max-w-lg flex flex-col gap-4 text-sm text-neutral-800">
                <h1 className="font-bold text-sm"># Personal website</h1>

                <p>
                    My digital garden , were I store all my public data xd
                </p>

                <p>
                    Build with <span className="font-bold underline">NextJs</span> / <span
                    className="font-bold underline">Tailwind</span> on the Front , and <span
                    className="font-bold underline">Nodejs</span> ,
                    <span className="font-bold underline">Mongodb</span> , <span
                    className="font-bold underline">NextAuth</span> for the Backend.
                </p>

                <p className="underline">Screenshot : </p>

                <div className="overflow-hidden bg-neutral-100 dark:bg-gray-900 mt-2 border border-neutral-300">
                    <Image
                        className="w-full h-auto dark:shadow-neutral-600"
                        width={1920} height={1080}
                        src={"/assets/project-1.png"} alt={""}/>
                </div>

                <ul className="list-disc list-inside py-4">
                    <li className="group">
                        <span className={"underline"}>Deployment</span>
                        <span className="px-2">:</span>
                        <a target="_blank" href="https://toky.vercel.app" className="font-bold">
                            <span>toky.vercel.app</span>
                            <CornerRightUp
                                className="opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in inline ml-1 -translate-y-0.5"
                                size={13}/>
                        </a>
                    </li>

                    <li className="group">
                        <span className={"underline"}>Source</span>
                        <span className="px-2">:</span>
                        <a target="_blank" href="https://github.com/TokyFy/me" className="font-bold">
                            <span>https://github.com/TokyFy/me</span>
                            <CornerRightUp
                                className="opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in inline ml-1 -translate-y-0.5"
                                size={13}/>
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}
