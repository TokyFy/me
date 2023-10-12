'use client'
/* eslint-disable react/no-unescaped-entities */

import {I} from "@components/Micro";
import Image from "next/image";
export default function Home() {

    return (
        <div className="max-w-5xl gap-16 py-16 mx-auto grid-cols-2 px-8 lg:grid lg:px-0">
            <div className="flex flex-col gap-3 justify-center">
                <div className="flex items-center gap-2 font-medium text-[13px] bg-neutral-100 w-max px-4 py-2 rounded-lg">
                    <div className="aspect-square w-3 bg-lime-400 rounded-full"></div>
                    14:16 GMT+1 / 06 - 10 - 23
                </div>
                <div className="flex flex-col gap-6 text-neutral-500 text-md">
                    <h1 className="font-grotesk font-medium text-neutral-900 text-2xl">Yet another personal website...</h1>

                    <p className={"group hover:text-neutral-900"}>
                        I have been creating several personal website in the past three yars,
                        the first is definitely the worst haha ,
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        So , whats up about this one ? , first I made the design a little simple ,
                        and added more page to it , to help other to be my friend Xd,
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        There you can see all my strange <I href={"/me/writing"} value={"[ writing ]"}/> , my little <I href={"/me/projects"} value={"[ projects ]"}/> and crafting ,
                        I like to take <I href={"/me/photos"} value={"[ photo ]"}/> so may be you can find your next wallpaper ,

                        There are some nice <I href={"/me/musics"} value={"[ Song writer ]"}/> in my country so may be you like then too
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        In my free time , likely I'm watching japanese <I href={"/me/animes"} value={"[ Anime ]"}/> , so if you like too , check out
                        my recommendations.

                        My mon forced me to read some <I href={"/me/books"} value={"[ Book ]"}/> so there some of those.

                        Finally , while browsing the vast word wide web , i found those <I href={"/me/objects"} value={"[_thing_]"}/> , may be you need then too
                    </p>

                    <p className={"group hover:text-neutral-900"}>
                        Thank guys visiting me there , see you soon,
                        Please leave me a little message in my <I href={"/me/guests"} value={"[ guestbook ]"}/>,
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