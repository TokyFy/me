'use client'

/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import {ArrowUpRight, Moon, Sun} from "lucide-react";
import {useState} from "react";


export default function Home() {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    return (
        <main className="container mx-auto my-12 lg:my-32 px-6 dark:text-neutral-50">
            <div className="max-w-xl flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="relative max-w-max border-2 rounded-full border-neutral-300 dark:bg-neutral-100">
                        <Image
                            height={96} width={96}
                            src={"/assets/noface.png"}
                            alt={"noface illustration"}/>
                        <a href={"https://hayra.app"} target="_blank" rel="noopener noreferrer"
                           className="max-w-max absolute right-0 -translate-y-full rounded-full overflow-hidden z-40 border-2 border-transparent hover:border-neutral-900 transition duration-200 ease-in">
                            <Image height={24} width={24} src={"/assets/hayra.svg"} alt={"Hayra Logo"}/>
                        </a>
                    </div>
                    <div onClick={() => switchTheme()}
                         className="p-2 bg-neutral-200 rounded-full cursor-pointer dark:bg-neutral-900">
                        {dark ? <Moon/> : <Sun/>}
                    </div>
                </div>

                <div>
                    <h1 className="font-grotesk font-medium text-3xl">Fy Niaina Toky</h1>
                    <h2 className="text-neutral-500 dark:text-neutral-400">Frontend developer from Madagascar,</h2>
                    <p className="text-neutral-500 dark:text-neutral-400">He/Him , Level 22 with Life (yo xd)</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p>
                        Hey there, I'm a developer with a passion for turning caffeine into code and transforming
                        ideas into digital artistry. Let's craft some tech wizardry together! ✨
                    </p>
                    <p>
                        I mostly talk about Typescript, Rust, Frontend Design , 3D and lot more.
                        If these tech marvels also steal your heart, then let's make it a match!
                        Don't be shy, let's connect! , I'm on <a className="underline"
                                                                 href="https://twitter.com/TokyFy_" target="_blank"
                                                                 rel="noopener noreferrer">Twitter</a> and <a
                        className="underline" href="https://instagram.com/_tookyy" target="_blank"
                        rel="noopener noreferrer">Instagram</a> 👾.
                    </p>
                    <p>
                        When I'm not coding or browsing <a className="underline" href="https://github.com/TokyFy"
                                                           target="_blank" rel="noopener noreferrer">GitHub</a> , I'm
                        likely playing skateboard or just chilling at home doing nothing ☄️.
                    </p>
                </div>

                <div>
                    <h2 className="text-neutral-500 dark:text-neutral-400">Contact</h2>
                    <div className="divide-y divide-dashed my-3 dark:divide-neutral-500">
                        <Contact platform="Github" link="github.com/TokyFy"/>
                        <Contact platform="Mail" link="tokyfy@outlook.com"/>
                        <Contact platform="Instagram" link="instagram.com/_tookyy"/>
                        <Contact platform="Twiter" link="twitter.com/TokyFy_"/>
                    </div>
                </div>
            </div>
        </main>
    )
}

function Contact({platform, link}: { platform: string, link: string }) {
    return <>
        <a className="group flex py-2 hover:bg-neutral-100 hover:text-neutral-900 text-neutral-400 dark:text-neutral-300"
           href={`https://${link}`}
           target="_blank" rel="noopener noreferrer">
            <p className="grow group-hover:translate-x-1 transition-all duration-200 ease-in">{platform}</p>
            <p className="flex gap-1 hover:underline group-hover:-translate-x-1 transition-all duration-200 ease-in">
                <span>{link}</span>
                <ArrowUpRight
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in"
                    size={14}
                />
            </p>
        </a>
    </>
}