'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Blogs() {


    return (
        <>
            <div className="my-12">
                <p className="text-sm text-neutral-500 max-w-lg">
                    Enter the realm of my photographic collection, where each image weaves a story of its own, inviting
                    you to journey through moments frozen in time.
                </p>
            </div>
            <div
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <Photo
                    url={"https://instagram.ftnr5-1.fna.fbcdn.net/v/t51.2885-15/175312253_498847174630992_4863653468022846492_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.ftnr5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=EXiJ-ozcstYAX_orauW&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjU1Mzg0MDE3ODMwODQwMjU1MA%3D%3D.2-ccb7-5&oh=00_AfA5i3Fs3U7XHLor-Bk3teMQFQtYIQLE_CAvPzNVs8ynEg&oe=64EAD0FA&_nc_sid=982cc7"}
                    description={"Garden - Antanimena"}
                    date={"22.08.2023"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/317846054_467752152163933_3217733649400616176_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=oQmQA9PwWB8AX_3g1gM&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=Mjk4NTEzNTEyNTY3OTg1NTQzMw%3D%3D.2-ccb7-5&oh=00_AfCbK1PFxNExuiPVVCuJJ96EJuaUKg3JVO30dkPJLShjbw&oe=64EB0016&_nc_sid=982cc7"}
                    description={"Antananarivo , Mahamasina"}
                    date={"15.12.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/327567241_3005481059760936_3892900561889553307_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=A2wrv7xzHvgAX-nXY-c&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyNTU3NDE2NTczNDM3MjQ0Nw%3D%3D.2-ccb7-5&oh=00_AfCOGXPyYd1RHuqNYAksCVP_pmoakzD2C4otWhC-G6Y9gQ&oe=64EB0F08&_nc_sid=982cc7"}
                    description={"School / Mandrimena"}
                    date={"12.05.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/327876175_738723244192271_8759018860158322438_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=hvddtlTnEhAAX-tmOdr&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyOTI0OTk5OTc3OTI5MTM0MQ%3D%3D.2-ccb7-5&oh=00_AfABpPVbqRVm2J5C7EvD8LpMfvwqELIqcFCNACK2Jjqrog&oe=64EA789C&_nc_sid=982cc7"}
                    description={"Shop - Ankadifotsy"}
                    date={"15.04.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/348865966_3649141738694426_5475722131201844719_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=MH0xQ7-fmVAAX9E5VGY&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzExMTIzMzIzMDAwOTg5MDc2OQ%3D%3D.2-ccb7-5&oh=00_AfAoq1jjaI8J_29XJm0PC6ihyd4TTzT7b3RyoG2WC1ziJA&oe=64EAB20D&_nc_sid=982cc7"}
                    description={"Hakanto - Analakely"}
                    date={"31.03.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/347454989_2276492419218318_948999523732347125_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=21yrOFPZX7gAX_Tg9mz&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzEwNjk2MDk3NTk2MTYyNjcyMg%3D%3D.2-ccb7-5&oh=00_AfAELl_rxEGnIoMu69kLV0jn668TgME4tDeb6HPsFXAgSA&oe=64EA7EC6&_nc_sid=982cc7"}
                    description={"... - Alarobia"}
                    date={"31.03.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/339514959_239107551854350_1616258458078257165_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=TMAFswiicgcAX9bVUFN&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzA3NDMyMzAyNzc3MjY5Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfCv4hcxqwnq4GhvmSrYhdmUpPKDiE8n5j91OEN4WFb7gw&oe=64EAF020&_nc_sid=982cc7"}
                    description={"Untitled"}
                    date={"31.03.2022"}/>
                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/280098956_5767410993275039_2405246384558160184_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=11DkV2RPR4EAX98JkV6&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjgzMzExODIxMjQ5MDc0Mzc4Mg%3D%3D.2-ccb7-5&oh=00_AfDZRr6ALjxPeThaB08rhifoBKmvJvTY0OpKhdj6-FG9WA&oe=64EAC7C1&_nc_sid=982cc7"}
                    description={"Some party - Home"}
                    date={"31.03.2022"}/>
                <Photo
                    url={"https://instagram.ftnr5-1.fna.fbcdn.net/v/t51.2885-15/175312253_498847174630992_4863653468022846492_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.ftnr5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=EXiJ-ozcstYAX_orauW&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjU1Mzg0MDE3ODMwODQwMjU1MA%3D%3D.2-ccb7-5&oh=00_AfA5i3Fs3U7XHLor-Bk3teMQFQtYIQLE_CAvPzNVs8ynEg&oe=64EAD0FA&_nc_sid=982cc7"}
                    description={"Garden - Antanimena"}
                    date={"22.08.2023"}/>
                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/327876175_738723244192271_8759018860158322438_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=hvddtlTnEhAAX-tmOdr&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyOTI0OTk5OTc3OTI5MTM0MQ%3D%3D.2-ccb7-5&oh=00_AfABpPVbqRVm2J5C7EvD8LpMfvwqELIqcFCNACK2Jjqrog&oe=64EA789C&_nc_sid=982cc7"}
                    description={"Shop - Ankadifotsy"}
                    date={"15.04.2022"}/>
                <Photo
                    url={"https://instagram.ftnr5-1.fna.fbcdn.net/v/t51.2885-15/175312253_498847174630992_4863653468022846492_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.ftnr5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=EXiJ-ozcstYAX_orauW&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjU1Mzg0MDE3ODMwODQwMjU1MA%3D%3D.2-ccb7-5&oh=00_AfA5i3Fs3U7XHLor-Bk3teMQFQtYIQLE_CAvPzNVs8ynEg&oe=64EAD0FA&_nc_sid=982cc7"}
                    description={"Garden - Antanimena"}
                    date={"22.08.2023"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/317846054_467752152163933_3217733649400616176_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=oQmQA9PwWB8AX_3g1gM&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=Mjk4NTEzNTEyNTY3OTg1NTQzMw%3D%3D.2-ccb7-5&oh=00_AfCbK1PFxNExuiPVVCuJJ96EJuaUKg3JVO30dkPJLShjbw&oe=64EB0016&_nc_sid=982cc7"}
                    description={"Antananarivo , Mahamasina"}
                    date={"15.12.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/327567241_3005481059760936_3892900561889553307_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=A2wrv7xzHvgAX-nXY-c&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyNTU3NDE2NTczNDM3MjQ0Nw%3D%3D.2-ccb7-5&oh=00_AfCOGXPyYd1RHuqNYAksCVP_pmoakzD2C4otWhC-G6Y9gQ&oe=64EB0F08&_nc_sid=982cc7"}
                    description={"School / Mandrimena"}
                    date={"12.05.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/327876175_738723244192271_8759018860158322438_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=hvddtlTnEhAAX-tmOdr&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyOTI0OTk5OTc3OTI5MTM0MQ%3D%3D.2-ccb7-5&oh=00_AfABpPVbqRVm2J5C7EvD8LpMfvwqELIqcFCNACK2Jjqrog&oe=64EA789C&_nc_sid=982cc7"}
                    description={"Shop - Ankadifotsy"}
                    date={"15.04.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/348865966_3649141738694426_5475722131201844719_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=MH0xQ7-fmVAAX9E5VGY&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzExMTIzMzIzMDAwOTg5MDc2OQ%3D%3D.2-ccb7-5&oh=00_AfAoq1jjaI8J_29XJm0PC6ihyd4TTzT7b3RyoG2WC1ziJA&oe=64EAB20D&_nc_sid=982cc7"}
                    description={"Hakanto - Analakely"}
                    date={"31.03.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/347454989_2276492419218318_948999523732347125_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=21yrOFPZX7gAX_Tg9mz&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzEwNjk2MDk3NTk2MTYyNjcyMg%3D%3D.2-ccb7-5&oh=00_AfAELl_rxEGnIoMu69kLV0jn668TgME4tDeb6HPsFXAgSA&oe=64EA7EC6&_nc_sid=982cc7"}
                    description={"... - Alarobia"}
                    date={"31.03.2022"}/>

                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/339514959_239107551854350_1616258458078257165_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=TMAFswiicgcAX9bVUFN&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzA3NDMyMzAyNzc3MjY5Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfCv4hcxqwnq4GhvmSrYhdmUpPKDiE8n5j91OEN4WFb7gw&oe=64EAF020&_nc_sid=982cc7"}
                    description={"Untitled"}
                    date={"31.03.2022"}/>
                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/280098956_5767410993275039_2405246384558160184_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=11DkV2RPR4EAX98JkV6&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjgzMzExODIxMjQ5MDc0Mzc4Mg%3D%3D.2-ccb7-5&oh=00_AfDZRr6ALjxPeThaB08rhifoBKmvJvTY0OpKhdj6-FG9WA&oe=64EAC7C1&_nc_sid=982cc7"}
                    description={"Some party - Home"}
                    date={"31.03.2022"}/>
                <Photo
                    url={"https://instagram.ftnr5-1.fna.fbcdn.net/v/t51.2885-15/175312253_498847174630992_4863653468022846492_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.ftnr5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=EXiJ-ozcstYAX_orauW&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MjU1Mzg0MDE3ODMwODQwMjU1MA%3D%3D.2-ccb7-5&oh=00_AfA5i3Fs3U7XHLor-Bk3teMQFQtYIQLE_CAvPzNVs8ynEg&oe=64EAD0FA&_nc_sid=982cc7"}
                    description={"Garden - Antanimena"}
                    date={"22.08.2023"}/>
                <Photo
                    url={"https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/327876175_738723244192271_8759018860158322438_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=hvddtlTnEhAAX-tmOdr&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyOTI0OTk5OTc3OTI5MTM0MQ%3D%3D.2-ccb7-5&oh=00_AfABpPVbqRVm2J5C7EvD8LpMfvwqELIqcFCNACK2Jjqrog&oe=64EA789C&_nc_sid=982cc7"}
                    description={"Shop - Ankadifotsy"}
                    date={"15.04.2022"}/>
            </div>
        </>
    )
}


type Photo = {
    url: string,
    description: string,
    date: string
}

function Photo({url, description, date}: Photo) {
    return (
        <div className="group flex flex-col justify-between items-center border border-dashed border-neutral-200 p-4 gap-4 rounded-md bg-neutral-50">
            <div className="max-w-sm max-h-60">
                <Image
                    width={300}
                    height={600}
                    src={url}
                    alt={""}
                    className="h-full w-auto grayscale group-hover:grayscale-0"
                />
            </div>
            <div className="group-hover:underline text-neutral-500 text-sm">
                <p>{description}</p>
            </div>
        </div>
    )
}
