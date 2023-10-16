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
            <div className="max-w-md py-12 flex flex-col gap-2">
                <div className="text-sm">
                    Music is a daily companion for me. To switch off my head after a long day, to focus at work or to
                    feel alive at concerts.
                </div>

                <div className="flex flex-col divide-y divide-dashed dark:divide-neutral-500">
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/f60623c447617dd9db22014cbac44bda/264x264-000000-80-0-0.jpg"}
                        title={"Andro marary"}
                        artist={"ALALÁ"}
                    />

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
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={"mona lisa"}
                        artist={"mxmtoon"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={"Moments "}
                        artist={"Micah Edwards "}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={"IZY"}
                        artist={"Kristel"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={"When You're Away"}
                        artist={"Ruru"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={"UMI"}
                        artist={"See You Again"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
                        title={"OUTTA MY MIND"}
                        artist={"MONSUNE"}
                    />
                    <Music
                        image={"https://e-cdn-images.dzcdn.net/images/cover/53b67897a63d1dff1f369907168e4261/264x264-000000-80-0-0.jpg"}
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
        <div className="group py-2 flex">
            <div className="flex flex-col justify-end text-sm">
                <p className="font-medium group-hover:underline">{title}</p>
                <p className="font-grotesk opacity-50 text-[12px]">{artist}</p>
            </div>
            <div className="ml-auto relative flex items-center justify-center w-12 aspect-square overflow-visible border-neutral-200 rounded-sm group-hover:-translate-x-3 group-hover:-rotate-6 duration-500">
                <Image
                    width={196}
                    height={196}
                    className={"w-full h-auto scale-110"}
                    src={"/assets/cover.jpg"}
                    alt={"Album cover Alala"}
                    priority
                />
                <div className="absolute aspect-square w-12 bg-slate-800 dark:bg-cyan-900 flex items-center justify-center rounded-full -z-[1] group-hover:translate-x-6 duration-500 ease-in-out">
                    <div className="bg-white w-3 rounded-full aspect-square dark:bg-black">

                    </div>
                </div>
            </div>
        </div>
    )
}
