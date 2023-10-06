'use client'
/* eslint-disable react/no-unescaped-entities */

import {I} from "@components/Micro";
import Image from "next/image";
export default function Home() {

    return (
        <div className="max-w-5xl gap-16 py-16 mx-auto grid-cols-2 px-8 lg:grid lg:px-0">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 font-medium text-sm bg-neutral-100 w-max px-4 py-2 rounded-lg">
                    <div className="aspect-square w-3 bg-lime-400 rounded-full"></div>
                    14:16 GMT+1 / 06 - 10 - 23
                </div>
                <div className="flex flex-col gap-6 text-neutral-500">
                    <h1 className="font-grotesk font-medium text-neutral-900 text-3xl">Yet another personal website...</h1>

                    <p className={"group hover:text-neutral-900"}>
                        I have been creating several personal website in the past three yars,
                        the first is definetly the worst haha ,
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        So , whats up about this one ? , first I made the design a little simple ,
                        and added more page to it , to help other to be my friendo Xd,
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        There you can see all my strange <I href={"/"} value={"[ writting ]"}/> , my little <I href={"/"} value={"[ project ]"}/> and crafting ,
                        I like to take <I href={"/"} value={"[ photo ]"}/> so may be you can find your next wallpaper ,

                        There are some nice <I href={"/"} value={"[ Song writter ]"}/> in my contry so may be you like then too ,
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        In my free time , likely I'm watching japanese <I href={"/"} value={"[ Anime ]"}/> , so if you like too , check out
                        my recomandations.

                        My mon forced me to read some <I href={"/"} value={"[ Book ]"}/> so there some of those.

                        Finally , while browsing the vast wordl wide web , i found those <I href={"/"} value={"[ thing ]"}/> , may be you need then too
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        Thank guys visiting me there , see you soon,
                        Please leave me a little message in my <I href={"/"} value={"[ guestbook ]"}/>,
                    </p>

                    <p className={"hover:text-neutral-900"}>
                        Byeeee...
                    </p>
                </div>
            </div>

            <div className="group bg-lime-400 overflow-hidden items-end justify-center rounded-lg relative hidden lg:flex">
                <Image className="grayscale group-hover:grayscale-0 h-full object-cover" width={500} height={500} src={"/assets/ein.jpg"} alt={"ein"}/>
            </div>
        </div>
    )
}