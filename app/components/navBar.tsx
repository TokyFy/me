'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function NavBar() {

    return (
        <div className="font-mono text-[13px] border-b border-b-neutral-600 border-dashed pb-2 font-bold my-12">
            <ul className="flex text-neutral-500 dark:text-neutral-400 flex-wrap gap-12 gap-y-1">
                <NavItems route={"/"}/>
                <NavItems route={"/blogs"}/>
                <NavItems route={"/musics"}/>
                <NavItems route={"/guests"}/>
                <NavItems route={"/photos"}/>
                <NavItems route={"/projects"}/>
                <NavItems route={"/animes"}/>
                <NavItems route={"/dreams"}/>
                <NavItems route={"/arts"}/>
                <NavItems route={"/links"}/>
                <NavItems route={"/books"}/>
                <NavItems route={"/object"}/>
            </ul>
        </div>
    );
}

function NavItems({route , href} : {route : string , href ?: string}) {

    const pathname = usePathname()

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        pathname === (href || route) ? setIsActive(true) : setIsActive(false);
    }, [pathname, href, route])

    return (
        <li className={`cursor-pointer hover:underline hover:text-neutral-800 dark:hover:text-neutral-200 ${isActive ? "underline text-[#9cf62b]" : "text-neutral-400"}`} >
            <Link href={href || route}>
                {route}
            </Link>
        </li>
    )
}

export default NavBar;