'use client'

import {
    ArrowUpRightIcon,
    Dot,
    Folder,
    Trash2,
} from "lucide-react";
import Image from "next/image";
import {Techno} from "@components/Micro";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Projects() {

    return (
        <>
            <div className="max-w-lg flex flex-col gap-6">
                <div className="text-sm">
                    ~ / Project
                </div>
                <div className="flex gap-10">

                    <ProjectFolder name={"Portfolio"} link={"/me/projects/portfolio"}/>
                    <ProjectFolder name={"Yt"} link={"#"}/>
                    <ProjectFolder name={"Lirikisa"} link={"#"}/>

                    <Link
                        className="group flex flex-col items-center text-neutral-400 cursor-alias hover:text-neutral-900 gap-2 justify-between"
                        href={"/"}>
                        <div className="w-9">
                            <Image width={36} height={36} src={"/assets/trash.png"} alt={""}/>
                        </div>
                        <div
                            className="text-[12px] text-center leading-tight italic group-hover:underline font-bold">Trash
                        </div>
                    </Link>
                </div>
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
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                {description}
            </div>
            <div className="flex flex-wrap items-center text-neutral-400 border py-1 px-2 my-2 rounded w-max">
                {
                    techno.map((el, index) =>
                        <span className="flex" key={`t-${index}`}>
                            {index !== 0 && <Dot size={18}/>}
                            <Techno name={el}/>
                        </span>
                    )
                }
            </div>
            <div className="overflow-hidden bg-neutral-100 dark:bg-gray-900 mt-4 border border-neutral-300">
                <Image className="w-full h-auto dark:shadow-neutral-600" width={1090} height={720}
                       src={preview} alt={""}/>
            </div>
        </Link>
    )
}

function ProjectFolder({name , link} : {name : string , link: string}) {
    return (
        <Link
            className="group flex flex-col items-center text-neutral-400 cursor-alias hover:text-neutral-900 gap-1 justify-between"
            href={link}>
            <div className="w-9 group-hover:-translate-y-1 duration-300 ease-out">
                <Image width={36} height={36} src={"/assets/folder.ico"} alt={""}/>
            </div>
            <div
                className="text-[12px] text-center leading-tight italic group-hover:underline font-bold">{name}
            </div>
        </Link>
    )
}