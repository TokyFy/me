'use client'

import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {ArrowRight, Asterisk, CornerRightUp} from "lucide-react";

type IContact = { platform: string, link: string, intern?: boolean, disabled?: boolean }

export function ContactLink({platform, link, intern, disabled}: IContact) {

    const pathname = usePathname()

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        pathname === link ? setIsActive(true) : setIsActive(false);
    }, [link, pathname])


    return <>
        <Link
            className={`group pt-1 flex text-sm hover:underline w-max ${disabled ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "text-neutral-700 dark:text-neutral-300"} `}
            href={`${intern ? "" : "https://"}${link}`}
            target={`${intern ? "" : "_blank"}`} rel="noopener noreferrer">
            <p className="flex gap-1 hover:underline items-center relative">
                <Asterisk size={13}
                          className={`absolute left-0 -translate-x-[150%] transition-opacity duration-700 hidden sm:block ${isActive ? "opacity-100" : "opacity-0"}`}/>
                <span className={`${isActive && "underline"}`}>{platform}</span>
                {
                    intern ?
                        <ArrowRight className="opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in"
                                    size={13}/>
                        :
                        <CornerRightUp
                            className="opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in"
                            size={13}/>
                }
            </p>
        </Link>
    </>
}