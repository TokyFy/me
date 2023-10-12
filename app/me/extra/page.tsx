'use client'
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";


export default function Others() {

    return (
        <>
            <div className="flex flex-col gap-5">

                <p>
                    Wanna know more about me ? 😁 <br/>
                    There are some others link you can visit :
                </p>

                <div className="my-4">
                    <ul className="flex flex-col gap-2 text-xl text-neutral-500">
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/photos"}>/photos</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/musics"}>/musics</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/projects"}>/projects</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/animes"}>/animes</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/dreams"}>/dreams</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/arts"}>/arts</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/links"}>/links</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/books"}>/books</Link>
                        <Link className="hover:underline hover:text-neutral-950 dark:hover:text-white w-max" href={"/me/object"}>/object</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
