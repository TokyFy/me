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
            <div className="flex flex-col gap-5">
                <div>
                    Music is a daily companion for me. To switch off my head after a long day, to focus at work or to
                    feel alive at concerts.
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 py-8">
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

                </div>
            </div>
        </>
    )
}

function Music({image, title, artist}: musicProps) {
    return <div
        className="group p-1 cursor-pointer bg-neutral-100 dark:bg-neutral-900 border border-dashed border-transparent hover:border-neutral-400 rounded w-full m-auto">
        <div className="relative aspect-square">
            <Image
                className={"object-cover grayscale-0 group-hover:grayscale-0"}
                src={image}
                alt={"Album cover Alala"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
        </div>
        <div className="mt-2 flex items-center">
            <div className="grow text-sm">
                <p className="font-medium group-hover:underline">{title}</p>
                <p className="font-grotesk opacity-50 ">{artist}</p>
            </div>
            <div>
                <div
                    className="h-max w-max p-2 rounded-full border-2 border-transparent opacity-20 group-hover:-rotate-90 group-hover:opacity-70">
                    <PlayCircle size={18}/>
                </div>
            </div>
        </div>
    </div>
}
