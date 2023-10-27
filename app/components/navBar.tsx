'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

import {
    Menu,
    ArrowUpRight,
    Asterisk,
    SunDim,
    Circle
} from "lucide-react";


function NavBar() {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    return (
        <div
            className="font-primary flex justify-between items-center py-1 ">
            <Link href={"/"}>
                <div className="group font-second font-medium text-md flex items-center text-neutral-100">
                    <div>
                        <Asterisk className="group-hover:rotate-90" size={28}/>
                    </div>
                </div>
            </Link>

            <div className="ml-auto md:hidden cursor-pointer text-neutral-100">
                <Menu/>
            </div>
        </div>
    );
}

export function NavItems({route, href}: { route: string, href?: string }) {

    const pathname = usePathname()

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        pathname === (href || route) ? setIsActive(true) : setIsActive(false);
    }, [pathname, href, route])

    return (
        <Link href={href || route}>
            <li className={`group text-sm cursor-pointer hover:text-neutral-950 dark:hover:text-neutral-200 flex items-baseline gap-1 border-b border-transparent  ${isActive ? "text-neutral-950" : "text-neutral-700"}`}>
                <p>{route}</p>
                <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={12}/>
            </li>
        </Link>
    )
}

export default NavBar;