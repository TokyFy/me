'use client'
/* eslint-disable react/no-unescaped-entities */

import Contact from "@components/Contact";
export default function Home() {

    return (
        <div className="flex flex-col gap-6 py-12 max-w-sm pr-16">

            <div>
                <h1 className="font-grotesk font-medium text-2xl">Fy Niaina Toky  (^~^) </h1>
                <h2 className="text-neutral-700 dark:text-neutral-400">CS student from Madagascar,</h2>
                <p className="text-neutral-700 dark:text-neutral-400">He/Him  ,  Level 22 with Life (yo xd)</p>
            </div>


            <div className="flex flex-col gap-5 font-normal text-neutral-500 text-sm ">
                <p className="group hover:text-neutral-800 dark:hover:text-neutral-100">
                    Hey there, I'm just a lambda human who love sitting next to a computer all day and expect making some new friend :d
                </p>
                <p className="group hover:text-neutral-800 dark:hover:text-neutral-100">
                    I mostly touch Typescript, Rust and sometimes thing like 3d and desing.
                    So if you like these stuff too , then let's make it a match!
                </p>
                <p className="group hover:text-neutral-800 dark:hover:text-neutral-100">
                    When I'm not coding or browsing Github , I'm
                    likely playing skateboard or just chilling at home doing nothing.
                </p>
            </div>

            <div className="">
                <Contact/>
            </div>
        </div>
    )
}