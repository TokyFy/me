'use client'
/* eslint-disable react/no-unescaped-entities */

import {I, Techo} from "@components/Micro";

export default function Home() {

    return (
        <div className="max-w-md gap-16 py-16">
            <div className="flex flex-col">
                <div className="flex font-grotesk items-center font-medium text-sm w-max ">
                    <p className="text-neutral-500">06 . 10 . 23</p>
                </div>
                <div className="flex flex-col gap-6 text-neutral-500 text-sm">
                    <h1 className="font-grotesk font-medium text-neutral-900 text-lg dark:text-neutral-300">Yet another personal website (*~*)</h1>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        I have been creating several personal website in the past three yars,
                        the first is definitely the worst haha ,
                    </p>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        So , whats up about this one ? , first I made the design a little simple ,
                        and added more page to it , to help other to be my friend Xd,
                    </p>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        There you can see all my strange <I href={"/me/writing"} value={" Writings "}/> , my little <I href={"/me/projects"} value={"Projects"}/> and crafting ,
                        I like to take <I href={"/me/photos"} value={"Photos"}/> so may be you can find your next wallpaper ,

                        There are some nice <I href={"/me/musics"} value={"Song writer"}/> in my country so may be you like then too
                    </p>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        In my free time , likely I'm watching japanese <I href={"/me/animes"} value={"Anime"}/> , so if you like too , check out
                        my recommendations.

                        My mon forced me to read some <I href={"/me/books"} value={"Book"}/> so there some of those.

                        Finally , while browsing the vast word wide web , i found those <I href={"/me/objects"} value={"Thing"}/> , may be you need then too
                    </p>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        Thank guys visiting me there , see you soon,
                        Please leave me a little message in my <I href={"/me/guests"} value={"Guestbook"}/>,
                    </p>
                </div>
                <div className="py-8">
                    <p className="text-md text-neutral-800 my-2 dark:text-neutral-500">Tech stack I used : </p>
                    <div className="flex gap-2 flex-wrap">
                        <Techo name={"Nextjs"}/>
                        <Techo name={"Tailwincss"}/>
                        <Techo name={"ReactQuery"}/>
                        <Techo name={"Api Rest"}/>
                        <Techo name={"Graphql"}/>
                        <Techo name={"Firebase"}/>
                        <Techo name={"Monorepos"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
