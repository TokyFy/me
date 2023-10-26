'use client'

import {ContactLink} from "@components/ContactLink";
import {Menu , Plus} from "lucide-react";
import {EventHandler, MouseEventHandler, useEffect, useState} from "react";

const MobileNavigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuOpenClickHandler:MouseEventHandler<HTMLDivElement> = () => {
        document.getElementById("content")!.classList.toggle("blur-sm")
        setIsOpen(!isOpen)
    }

    const menuCloseClickHandler = () => {
        document.getElementById("content")!.classList.remove("blur-sm")
        setIsOpen(false)
    }

    useEffect(() => {
        document.getElementById("content")!.addEventListener("click" , (evt)=>menuCloseClickHandler())
    }, []);

    return (
        <>
            <div
                className={`bg-neutral-100 rounded overflow-hidden transition-all duration-200 ease-in ${isOpen ? "h-64" : "h-0"}`}
                onClick={(event)=>menuCloseClickHandler()}
            >
                <div className='flex justify-between items-end p-2'>
                    <div>
                        <ContactLink intern platform="~ /" link="/"/>
                        <ContactLink intern platform="Colophon" link="/me/about"/>
                        <ContactLink intern platform="Writing" link="/me/writing"/>
                        <ContactLink intern platform="Projects" link="/me/projects"/>
                        <ContactLink intern platform="Musics" link="/me/musics"/>
                        <ContactLink intern platform="Photos" link="/me/photos"/>
                        <ContactLink intern platform="AMA" link="/me/guests"/>
                        <ContactLink intern disabled platform="Animes" link="/#"/>
                        <ContactLink intern disabled platform="Bookmarks" link="/#"/>
                        <ContactLink intern disabled platform="Books" link="/#"/>
                    </div>

                    <div>
                        <ContactLink platform="Github" link="github.com/TokyFy"/>
                        <ContactLink platform="Mail" link="tokyfy@outlook.com"/>
                        <ContactLink platform="Instagram" link="instagram.com/_tookyy"/>
                        <ContactLink platform="Twiter" link="twitter.com/TokyFy_"/>
                    </div>
                </div>
            </div>

            <div
                className="flex bg-neutral-200 w-full p-2 rounded justify-between items-center"
                onClick={(event)=>menuOpenClickHandler(event)}
            >
                <h1 className="text-sm font-bold text-neutral-700">Toky Fy</h1>
                <Plus className={`${isOpen && "rotate-45"}`}/>
            </div>
        </>
    );
};

export default MobileNavigation;