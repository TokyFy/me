'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import {Moon, Sun} from "lucide-react";
import {useState} from "react";
import Contact from "@components/Contact";
import {A} from "@components/Micro";

export default function Home() {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    return (
        <>
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
                <button onClick={() => switchTheme()}
                        className="p-2 bg-neutral-200 rounded-full cursor-pointer dark:bg-neutral-900">
                    {dark ? <Moon/> : <Sun/>}
                </button>
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
                    Don't be shy, let's connect! , I'm on <A href={"twitter.com/TokyFy_"} value={"twitter"}/> and <A
                    href={"instagram.com/_tookyy"} value={"Instagram"}/> 👾.
                </p>
                <p>
                    When I'm not coding or browsing <A href={"github.com/TokyFy"} value={"Github"}/> , I'm
                    likely playing skateboard or just chilling at home doing nothing ☄️.
                </p>
            </div>

            <Contact/>
        </>
    )
}
