import React from 'react';
import {ArrowUpRight, CornerUpRight, CornerUpLeft, CornerRightUp} from "lucide-react";
import Link from "next/link";

function Contact() {
    return (
        <div>
            <div className="my-3">
                <ContactLink platform="Github" link="github.com/TokyFy"/>
                <ContactLink platform="Mail" link="tokyfy@outlook.com"/>
                <ContactLink platform="Instagram" link="instagram.com/_tookyy"/>
                <ContactLink platform="Twiter" link="twitter.com/TokyFy_"/>
            </div>
            <div>
                <ContactLink intern platform="Musics" link="/me/musics"/>
                <ContactLink intern platform="Animes" link="#"/>
                <ContactLink intern platform="Photos" link="/me/photos"/>
                <ContactLink intern platform="Bookmarks" link="#"/>
                <ContactLink intern platform="Books" link="#"/>
                <ContactLink intern platform="Projects" link="#"/>
            </div>
        </div>
    );
}

function ContactLink({platform, link, intern}: { platform: string, link: string, intern?: boolean }) {
    return <>
        <Link className="group pt-1 flex text-sm hover:underline text-neutral-700 dark:text-neutral-300"
           href={`${intern ? "" : "https://"}${link}`}
           target={`${intern ? "" : "_blank"}`} rel="noopener noreferrer">
            <p className="flex gap-1 hover:underline">
                <span>{platform}</span>
                {
                    intern ?
                        <ArrowUpRight
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

export default Contact;