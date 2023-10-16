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
                    <Message author={"nae"} message={"Ggg Xd"} date={"17 . 05 . 23"}/>
                    <Message author={"Pablo"} message={"Ggg Xd"} date={"23 . 03 . 23"}/>
                    <Message author={"Ein"} message={"Ggg Xd"} date={"19 . 02 . 23"}/>
                    <Message author={"Pico"} message={"Ohh nice website :d"} date={"15 . 02 . 23"}/>
                    <Message author={"Toky"} message={"First Message Xd"} date={"12 . 02 . 23"}/>
                </div>

                <div className="flex items-center">
                    <button className="font-jost text-sm text-neutral-800 dark:text-neutral-300">
                        Sign up with <span className="underline">Google</span> or <span
                        className="underline">Github</span> to write a message
                    </button>
                </div>
            </div>
        </>
    )
}

type IMessage = {
    author : string,
    message : string,
    date : string
}

function Message({author , message , date} : IMessage) {
    return (
        <div className="w-full py-3">
            <p className="text-sm">{message}</p>
            <div className="flex justify-between">
                <p className="text-sm opacity-60">{author}</p>
                <p className="font-jost text-[12px] opacity-25">{date}</p>
            </div>
        </div>
    )
}
