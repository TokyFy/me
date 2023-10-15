'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Guests() {

    return (
        <>
            <div className="max-w-xl flex flex-col gap-2 py-12">

                <p className="font-jost text-sm">
                    Ask Me Anything (^-^)
                </p>

                <div className="flex flex-col my-6 divide-y divide-dashed">
                    <div className="w-full py-2">
                        <p>Ohh nice website :d</p>
                        <div className="justify-between flex">
                            <p className="text-sm opacity-60">Pico</p>
                            <p className="font-jost text-[12px] opacity-25">25 . 02 . 2023</p>
                        </div>
                    </div>

                    <div className="w-full py-2">
                        <p>GG Xd</p>
                        <div className="flex justify-between">
                            <p className="text-sm opacity-60">Ein</p>
                            <p className="font-jost text-[12px] opacity-25">25 . 02 . 2023</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <button className="font-jost text-sm text-neutral-800">
                        Sign up with <span className="underline">Google</span> or <span
                        className="underline">Github</span> to write a message
                    </button>
                </div>
            </div>
        </>
    )
}
