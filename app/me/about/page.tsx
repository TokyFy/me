'use client'
/* eslint-disable react/no-unescaped-entities */

import {I, Techno} from "@components/Micro";
import {Dot} from "lucide-react";

export default function Home() {

    return (
        <div className="max-w-md gap-16">
            <div className="flex flex-col">
                <div className="flex font-primary items-center text-sm w-max ">
                    <p className="text-neutral-400">Last update : 25 . Oct . 2023</p>
                </div>
                <div className="flex flex-col gap-6 text-neutral-800 text-sm">
                    <h1 className="font-primary font-medium text-neutral-900 text-lg dark:text-neutral-300">Yet another
                        personal website (*~*)</h1>

                    <div>
                        <h2 className="text-sm text-neutral-400">Content</h2>
                    </div>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        I have been creating several personal website in the past three years,
                        the first is definitely the worst haha ,
                    </p>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        So , whats up about this one ? , first I made the design a little simple ,
                        and added more page to it , to help other to be my friend Xd,
                    </p>

                    <div>
                        <h2 className="text-sm text-neutral-400">Typography</h2>
                    </div>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        I used the Favorit Pro of the Dynamo Foundries , suitable for tiny font size.
                    </p>

                    <div>
                        <h2 className="text-sm text-neutral-400">Technical</h2>
                    </div>

                    <p className={"group hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-300"}>
                        Built with NextJs and Tailwind for the styling , Some Nodejs Server for the Auth process , And
                        Mdx and ContentLayer for the blogging stuff
                    </p>

                    <div>
                        <h2 className="text-sm text-neutral-400">Global stack</h2>
                    </div>
                    <p className="flex flex-wrap text-neutral-400">
                        {
                            ["Nextjs", "Tailwincss", "ReactQuery", " Api Rest", "Graphql", "Firebase", "Monorepos"]
                                .map(
                                    (el, index) =>
                                        <span className="flex" key={`t-${index}`}>
                                            {index !== 0 && <Dot size={18}/>}
                                            <Techno name={el}/>
                                         </span>
                                    )
                        }

                    </p>
                </div>
            </div>
        </div>
    )
}
