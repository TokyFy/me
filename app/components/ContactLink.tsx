import Link from "next/link";
import {ArrowUpRight, CornerRightUp , ArrowRight} from "lucide-react";
import React from "react";

type Icontact = { platform: string, link: string, intern?: boolean, disabled?: boolean }

export function ContactLink({platform, link, intern, disabled}: Icontact) {
    return <>
        <Link
            className={`group pt-1 flex text-sm hover:underline w-max ${disabled ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "text-neutral-700 dark:text-neutral-300"}`}
            href={`${intern ? "" : "https://"}${link}`}
            target={`${intern ? "" : "_blank"}`} rel="noopener noreferrer">
            <p className="flex gap-1 hover:underline items-center">
                <span>{platform}</span>
                {
                    intern ?
                        <ArrowRight
                            className="opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in"
                            size={13}
                        />
                        :
                        <CornerRightUp
                            className="opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in"
                            size={13}
                        />

                }
            </p>
        </Link>
    </>
}