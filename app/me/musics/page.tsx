'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import {CornerDownLeft} from "lucide-react";

type musicProps = {
    title: string,
    artist: string,
    genre?: string,
    album?: string,
    link?: string,
    year?: Number
}


export default function Musics() {

    return (
        <>
            <div className="flex flex-col gap-2 max-w-xl">
                <div>
                    <h2 className="text-sm text-neutral-400">Madagascar's</h2>
                </div>

                <div className="flex flex-col">
                    <Music
                        title={"Akao"}
                        artist={"Kristel"}
                        album={"Akao"}
                        genre={"Rock"}
                        year={2017}
                    />

                    <Music
                        artist={"Niu Raza"}
                        genre={"Jazz"}
                        title={"Any e"}
                        album={"Niu Loko"}
                        year={2022}
                    />

                    <Music
                        title={"Anao inona"}
                        artist={"The Dizzy Brains"}
                        album={"Out of the Cage"}
                        genre={"Rock"}
                        year={2015}
                    />


                    <Music
                        title={"Tiako"}
                        artist={"Andrianina"}
                        genre={"Pop"}
                        album={"Seven"}
                        year={2022}
                    />

                    <Music
                        title={"Ianao, Tiako"}
                        artist={"Ny Beka"}
                        genre={"pop"}
                        year={2017}
                    />

                    <Music
                        title={"Ianao"}
                        artist={"ALALÁ"}
                        genre={"pop"}
                        album={"Ianao"}
                        year={2018}
                    />

                    <Music
                        title={"Ampindramo ahy"}
                        artist={"Mika & Davis"}
                        album={"Ravoravo"}
                        year={2006}
                    />

                    <Music
                        title={"Nolalovanao"}
                        artist={"'Zay"}
                        album={"Nantenaina"}
                        year={2004}
                    />

                    <Music
                        title={"OAY"}
                        artist={"LohArano"}
                        album={"OAY"}
                        year={2020}
                        genre={"Metal"}
                    />

                    <Music
                        title={"Masoandro"}
                        artist={"Moni"}
                        album={"Masoandro"}
                        year={2023}
                        genre={"Jazz"}
                    />
                </div>
            </div>
        </>
    )
}

function Music({title, artist, album, genre = "~", link}: musicProps) {
    return (
        <div className="group flex text-sm gap-4 my-[2px]">
            <div className="grow flex justify-between items-center border px-2 py-1 group-hover:bg-neutral-100 rounded">
                <p>{artist}</p>
                <CornerDownLeft className="text-neutral-400 group-hover:text-neutral-800" size={12}/>
            </div>
            <div className="min-w-[6rem] px-4 border text-center py-1 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-100 rounded">{genre}</div>
        </div>
    )
}
