'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import {PlayCircle} from "lucide-react";

type musicProps = {
    image: string,
    title: string,
    artist: string
}


export default function Musics() {

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1px] p-[1px] bg-neutral-200">
                    <div className={"bg-white p-8 flex items-center justify-center dark:bg-black"}>
                        <p className="text-sm">
                            Music is a daily companion for me. To switch off my head after a long day, to focus at work or to
                            feel alive at concerts.
                        </p>
                    </div>

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/4b1e0b5d27420ca215e7521b33374cda/264x264-000000-80-0-0.jpg"}
                        title={"Akao"}
                        artist={"Kristel"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/cab6bfc826b6620295dfcc3cfb88e258/264x264-000000-80-0-0.jpg"}
                        title={"You Know"}
                        artist={"Niu Raza"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/339b988547f96a5da9d603be37ce9cc2/264x264-000000-80-0-0.jpg"}
                        title={"Anao inona"}
                        artist={"The Dizzy"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/c2a04115e58fff156484fe7f332ed12e/264x264-000000-80-0-0.jpg"}
                        title={"Remember Me"}
                        artist={"UMI"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/cb7f696b830545cf177a8e8c5c62491c/264x264-000000-80-0-0.jpg"}
                        title={"Tiako"}
                        artist={"Andrianina"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/6756e4e3769f29e11f51951bed6003d6/264x264-000000-80-0-0.jpg"}
                        title={"bad idea!"}
                        artist={"Girl in red"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={" Glimpse of Us"}
                        artist={"Joji"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/c2a04115e58fff156484fe7f332ed12e/264x264-000000-80-0-0.jpg"}
                        title={"Glass Ceiling"}
                        artist={"Matilda mann"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/cb7f696b830545cf177a8e8c5c62491c/264x264-000000-80-0-0.jpg"}
                        title={"Coffee"}
                        artist={"Beabadoobee"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/6756e4e3769f29e11f51951bed6003d6/264x264-000000-80-0-0.jpg"}
                        title={"Never Goes Away "}
                        artist={"Claire Rosinkranz"}
                    />

                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/0f73ffb55e722f8966efafbda75e8f00/264x264-000000-80-0-0.jpg"}
                        title={"mona lisa"}
                        artist={"mxmtoon"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/ff4db00cf4b1597481ad90374258cc5f/264x264-000000-80-0-0.jpg"}
                        title={"Moments "}
                        artist={"Micah Edwards "}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/29ac9a4361fc77b3c935b98816b5394c/264x264-000000-80-0-0.jpg"}
                        title={"IZY"}
                        artist={"Kristel"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/e53ec71aba25bfa311b217f1d25ec020/264x264-000000-80-0-0.jpg"}
                        title={"When You're Away"}
                        artist={"Ruru"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/f4d3a9f25856a05f055d55b3f6c1aad5/264x264-000000-80-0-0.jpg"}
                        title={"UMI"}
                        artist={"See You Again"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/565983ad4aea0e6d493905ae536f15b5/264x264-000000-80-0-0.jpg"}
                        title={"OUTTA MY MIND"}
                        artist={"MONSUNE"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/806d75ed58064112d274124fcc018e3f/264x264-000000-80-0-0.jpg"}
                        title={"I hope to be around"}
                        artist={"Men I Trust"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/565983ad4aea0e6d493905ae536f15b5/264x264-000000-80-0-0.jpg"}
                        title={"OUTTA MY MIND"}
                        artist={"MONSUNE"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/806d75ed58064112d274124fcc018e3f/264x264-000000-80-0-0.jpg"}
                        title={"I hope to be around"}
                        artist={"Men I Trust"}
                    />

                </div>
            </div>
        </>
    )
}

function Music({image, title, artist}: musicProps) {
    return (
        <div className="group flex flex-col justify-center items-center aspect-square gap-2 bg-white dark:bg-black">
            <div className="relative flex items-center justify-center w-6/12 sm:w-8/12 aspect-square border-neutral-200 mx-auto grow">
                <Image
                    width={196}
                    height={196}
                    className={"w-full h-auto scale-90 group-hover:scale-[87.5%] group-hover:-translate-x-[20%] z-10 duration-300 opacity-20 group-hover:opacity-100"}
                    src={`/assets/temp/cover-${Math.trunc(Math.random() * 127 + 1)}.jpg`}
                    alt={"Album cover Alala"}
                    priority
                />
                <div className="absolute aspect-square border border-neutral-300 flex items-center justify-center rounded-full w-8/12 group-hover:translate-x-[32.5%] duration-300 ease-in">
                    <div className="w-3/12 rounded-full aspect-square border border-neutral-300">

                    </div>
                </div>
            </div>
            <div className="flex justify-between text-sm text-center border-t border-neutral-200 w-full px-2 py-1 group-hover:bg-neutral-950 group-hover:text-neutral-50 duration-200 ease-in dark:bg-black dark:border-neutral-500 dark:group-hover:bg-white">
                <p className="dark:group-hover:text-neutral-950">{title}</p>
                <p className="font-primary text-neutral-600 text-[12px] group-hover:text-neutral-200 dark:group-hover:text-neutral-800">{artist}</p>
            </div>
        </div>
    )
}
