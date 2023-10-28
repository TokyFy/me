'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Blogs() {


    return (
        <>
            <div className="text-sm">
                ~ / photos
            </div>
            {/*<p className="text-sm py-4">I lost my phone so There's no picture at the moment , <br/> Sorry T_T</p>*/}
            <div
                className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 mt-7">
                <Photo url={"https://images.unsplash.com/photo-1696061416696-98cb5e9c3b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"} description={"landscape-001.jpg"} />
                <Photo url={"https://images.unsplash.com/photo-1632827326368-a1980704e53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"} description={"portrait-002.jpg"} />
                <Photo url={"https://images.unsplash.com/photo-1697032217861-46327ba5f5d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"} description={"shutter-003.jpg"} />
                <Photo url={"https://images.unsplash.com/photo-1606764765380-105d13e2918b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"} description={"aperture-004.jpg"} />
                <Photo url={"https://images.unsplash.com/photo-1617972882867-3707f274c115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"} description={"exposure-005.jpg"} />
                <Photo url={"https://images.unsplash.com/photo-1554049264-8ff0bee7eacd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"} description={"focus-006.jpg"} />
            </div>
        </>
    )
}


type Photo = {
    url: string,
    description: string,
    date?: string
}

function Photo({url, description, date}: Photo) {
    return (
        <div className="group flex flex-col justify-between items-center p-4 gap-4 rounded-sm bg-neutral-100 dark:bg-neutral-950 dark:bg-opacity-25 dark:border-neutral-800 aspect-square">
            <div className="max-w-[60%] max-h-[60%] flex justify-center items-center grow overflow-hidden m-auto">
                <Image
                    width={300}
                    height={600}
                    src={url}
                    alt={""}
                    className="w-auto h-full grayscale group-hover:grayscale-0 object-contain"
                />
            </div>
            <div className="text-neutral-400 text-sm group-hover:text-neutral-600 dark:text-neutral-700 dark:group-hover:text-neutral-100">
                <p>{description}</p>
            </div>
        </div>
    )
}
