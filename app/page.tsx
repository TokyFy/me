'use client'

import Image from 'next/image'

export default function Home() {
    return (
        <div className="py-12">
            <div>
                <div className='flex gap-2 w-1/2 flex-wrap'>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"✦ index"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"☆  About"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"✦ Links"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"♥ Musics"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"✢ TXT"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"✦ changelog"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"✦ microblog"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"⁂  guestbook"}</p>
                    <p className='bg-neutral-200 w-fit text-sm px-1'>{"⁂  login"}</p>
                </div>
                <div className='py-11 flex justify-center'>
                    <Image src="/franaivo.png" width={132} height={132} alt="Monster anime" />
                </div>
                <table>
                    <tbody className="divide-y align-top">
                        <tr>
                            <td className="w-28 py-4 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold">Name</td>
                            <td className="py-4">Toky / franaivo</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold">Profile</td>
                            <td className="py-4 ">I'm a computer student at 42 Antananarivo since two years now , wich I learn a lot about computer and stuff like that , I like re-envent the whell
                                to enderstant the core of a technologie , I'm curently learning to document thing that I learn . *_*</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold">Location</td>
                            <td className="py-4 ">Madagascar ♡  - The 2nd bigest country in the world (AFAYK)</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold">Hobby</td>
                            <td className="py-4 ">Manga: Kiyohiko Azuma's "Azumanga Daioh", Barasui's "Strawberry Marshmallow", Hitoshi Tomizawa's "Alien 9"
                                Anime: Dennou Coil, Haibane Renmei, Jewelpet Sunshine, FLCL, Alien 9, Kaiba, Lucky Star, K-On!, Ascendance of a Bookworm, etc... Also the Ghost in the Shell series and works directed by Mamoru Oshii</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold">Musics</td>
                            <td className="py-4 ">My musics taste is hard to explain so I made my collection public , so you can check it THERE</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold after:top-4">What<br />influenced</td>
                            <td className="py-4 ">
                                I was very Influenced by the Old internet where people have shared their niche interest on their personal website ,
                                and also , by some Anime like Monster , Coboy bebop that I boroed with my friend back then . </td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold after:top-4">Favorite <br /> subject</td>
                            <td className="py-4 "> Computer Science / Skate / Musics / Linux / Manga / Anime / Arts / Photography</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold">Fun Fact</td>
                            <td className="py-4 "> I stutter when I speak to a new person / I'm bad a color so I tend to not use them HAHA</td>
                        </tr>
                        <tr>
                            <td className="py-4 w-28 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold after:top-4">things I <br /> try to <br />Avoid</td>
                            <td className="py-4 ">Politics , one-sided conversations, being moody</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
