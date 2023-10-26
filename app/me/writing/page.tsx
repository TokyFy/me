'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

export default function Blogs() {
    return (
        <div className="max-w-lg">
            <div className="text-sm">
                ~ / writing
            </div>
            <div className="max-w-lg flex flex-col my-6">
                <p className="text-sm text-neutral-500">Why I'm writing ? I guess , i just wanna learn english and
                    trying to write about my passion and struggle Xd </p>
            </div>
            <div className="mb-8">
                <div>
                    <h2 className="text-sm text-neutral-400">Life</h2>
                </div>
                <div className="flex flex-col divide-y divide-neutral-100">
                    <Blog
                        title={"Motivation on the floors"}
                        cover={"/assets/blogs/0003.jpg"}
                        preview={"Unemployment can be a real challenge for software students like me Despite the enthusiasm and skills..."}
                    />
                    <Blog
                        title={"My Keyboard dreams "}
                        cover={"/assets/blogs/0001.jpg"}
                        preview={"For developers, the keyboard is not just a tool; it's an extension of the mind. Enter the mechanical keyboard..."}
                    />
                </div>
            </div>
            <div className="mb-8">
                <div>
                    <h2 className="text-sm text-neutral-400">Geek</h2>
                </div>
                <div className="flex flex-col mb-24 divide-y divide-neutral-100">
                    <Blog
                        title={"Head first in C languages"} cover={"/assets/blogs/0011.jpg"}
                        preview={"In my free time , likely I'm watching japanese Anime , so if you like too , check out my recommendations..."}
                    />
                    <Blog
                        title={"Error handling with NodeJs"} cover={"/assets/blogs/0012.jpg"}
                        preview={"In my free time , likely I'm watching japanese Anime , so if you like too , check out my recommendations..."}
                    />
                    <Blog
                        title={"Amazing BUN"}
                        cover={"/assets/blogs/0009.jpg"}
                        preview={"In my free time , likely I'm watching japanese Anime , so if you like too , check out my recommendations..."}
                    />
                    <Blog
                        title={"Minimalist and Yet complex"}
                        cover={"/assets/blogs/0008.jpg"}
                        preview={"In my free time , likely I'm watching japanese Anime , so if you like too , check out my recommendations..."}
                    />
                    <Blog
                        title={"Your very first website"}
                        cover={"/assets/blogs/0008.jpg"}
                        preview={"In my free time , likely I'm watching japanese Anime , so if you like too , check out my recommendations..."}
                    />
                    <Blog
                        title={"Head first on the Ts land"}
                        cover={"/assets/blogs/0008.jpg"}
                        preview={"In my free time , likely I'm watching japanese Anime , so if you like too , check out my recommendations..."}
                    />
                </div>
            </div>
        </div>
    )
}

type IBlog = {
    title: string,
    preview: string,
    cover: string
}

function Blog({preview, title, cover}: IBlog) {
    return (
        <div
            className="group relative flex flex-col gap-4  py-2 hover:bg-neutral-50 sm:flex-row sm:items-center dark:border-neutral-600 dark:hover:bg-neutral-950">
            {/*<div className="flex rounded overflow-hidden w-16 max-w-sm aspect-square relative sm:w-36 dark:brightness-60">*/}
            {/*    <Image className={"object-cover"} sizes={"400px"} fill src={cover} alt={""} quality={1}/>*/}
            {/*</div>*/}
            <div>
                <h2 className="text-sm flex justify-between items-center dark:text-neutral-400">
                    <p>{title}</p>
                    <ArrowUpRight
                        className="opacity-10 w-max h-max group-hover:rotate-45 group-hover:opacity-100 absolute top-2 right-1"
                        size={12}/>
                </h2>

                <p className="text-[12px] text-neutral-400 dark:text-neutral-600">15 . 10 . 2023</p>

                {/*<div className="font-second text-sm text-neutral-400 flex flex-col gap-6 dark:text-neutral-600">*/}
                {/*    <p>*/}
                {/*        {preview}*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}