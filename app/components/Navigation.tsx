import React from 'react';
import {ContactLink} from "@components/ContactLink";

function Navigation() {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-sm">
                <h1 className="font-bold text-lg">Toky Fy</h1>
                <p className="text-neutral-500">He/Him ,</p>
                <p className="text-neutral-500">B.2001 ,</p>
                <p className="text-neutral-500" >Madagascar</p>
            </div>

            <div className="text-sm">
                <p className="text-neutral-500">CS. Student ,<br/> 42 Schools</p>
            </div>

            <div>
                <ContactLink intern platform="Home" link="/"/>
                <ContactLink intern platform="Writing" link="/me/writing"/>
                <ContactLink intern platform="Projects" link="/me/projects"/>
                <ContactLink intern platform="Musics" link="/me/musics"/>
                <ContactLink intern platform="Photos" link="/me/photos"/>
                <ContactLink intern platform="AMA" link="/me/guests"/>
                <ContactLink intern platform="Colophon" link="/me/about"/>
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
    );
}

export default Navigation;