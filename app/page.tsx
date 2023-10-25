'use client'
/* eslint-disable react/no-unescaped-entities */

import Navigation from "@components/Navigation";
export default function Home() {

    return (
        <div className="flex flex-col gap-6 max-w-sm">
            <div className="text-sm">
                ~ / Home
            </div>

            <div className="flex flex-col gap-5 text-neutral-900 text-sm ">
                <h1>~(*-*)~</h1>
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
                <p className="group hover:text-neutral-800 dark:hover:text-neutral-100">
                    Thank for visiting me here {"<3"}
                </p>
            </div>
        </div>
    )
}