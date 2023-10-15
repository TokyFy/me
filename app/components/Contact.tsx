import React from 'react';
import {ArrowUpRight} from "lucide-react";

function Contact() {
    return (
        <div>
            <div className="divide-y divide my-3 divide-neutral-200 dark:divide-neutral-500">
                <ContactLink platform="Github" link="github.com/TokyFy"/>
                <ContactLink platform="Mail" link="tokyfy@outlook.com"/>
                <ContactLink platform="Instagram" link="instagram.com/_tookyy"/>
                <ContactLink platform="Twiter" link="twitter.com/TokyFy_"/>
            </div>
        </div>
    );
}

function ContactLink({platform, link}: { platform: string, link: string }) {
    return <>
        <a className="group flex py-2 hover:bg-neutral-900 hover:text-neutral-50 text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-900 text-sm"
           href={`https://${link}`}
           target="_blank" rel="noopener noreferrer">
            <p className="grow group-hover:translate-x-1 transition-all duration-200 ease-in">{platform}</p>
            <p className="flex gap-1 hover:underline group-hover:-translate-x-1 transition-all duration-200 ease-in">
                <span>{link}</span>
                <ArrowUpRight
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in"
                    size={14}
                />
            </p>
        </a>
    </>
}

export default Contact;