'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {Moon, Sun, Menu} from "lucide-react";

function NavBar() {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    return (
        <div className="font-grotesk flex items-center text-[13px] font-bold border-b border-dashed border-b-neutral-200 py-4 px-8">
            <Link href={"/"}>
                <div className="font-jost font-medium text-sm flex items-center gap-2 border-2 border-neutral-100 hover:bg-neutral-100 rounded-lg p-2">
                    <div className={"rounded-md overflow-hidden border-neutral-200 bg-neutral-200"}>
                        <Image className="scale-125" src={"/assets/noface.png"} alt={""} height={24} width={24}/>
                    </div>
                    <div>
                        Toky&apos;s Byte house
                    </div>
                </div>
            </Link>

            <ul className="ml-auto justify-end items-center text-neutral-600 dark:text-neutral-400 flex-wrap w-max rounded-lg divide-x border-2 border-neutral-100 overflow-hidden hidden md:flex">
                <NavItems route={"Me"} href={"/me/about"}/>
                <NavItems route={"Writing"} href={"/me/writing"}/>
                <NavItems route={"Projects"} href={"/me/projects"}/>
                <NavItems route={"AMA"} href={"/me/guests"}/>
            </ul>

            <button onClick={() => switchTheme()}
                    className="p-2 bg-neutral-100 rounded-full cursor-pointer dark:bg-neutral-700 hidden md:ml-8 md:mr-0 md:flex">
                {dark ? <Moon size={18}/> : <Sun size={18}/>}
            </button>

            <div className="ml-auto md:hidden cursor-pointer">
                <Menu/>
            </div>
        </div>
    );
}

export function NavItems({route , href} : {route : string , href ?: string}) {

    const pathname = usePathname()

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        pathname === (href || route) ? setIsActive(true) : setIsActive(false);
    }, [pathname, href, route])

    return (
        <li className={`cursor-pointer hover:underline hover:bg-lime-50 hover:text-neutral-800 dark:hover:text-neutral-200 px-6 py-2 ${isActive ? "bg-lime-50 text-neutral-700" : "text-neutral-700"}`} >
            <Link href={href || route}>
                {route}
            </Link>
        </li>
    )
}

export default NavBar;