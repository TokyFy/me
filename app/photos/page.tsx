'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Blogs() {


    return (
        <>
            <div className="flex flex-col gap-5 [&>div:nth-child(odd)]:flex-row-reverse">
                <p>
                    Enter the realm of my photographic collection, where each image weaves a story of its own, inviting
                    you to journey through moments frozen in time. 📸 ✨
                </p>
                <Photo
                    url={"https://instagram.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/369965259_17989017275478321_4343023179326741703_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.ftnr2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=3uProL-f-9kAX9kShSj&edm=ANmP7GQAAAAA&ccb=7-5&ig_cache_key=MzE3NDEyMTkxNjYzMzA3NzM5NQ%3D%3D.2-ccb7-5&oh=00_AfAvzICDJfmZViBtrM7WF6LU0an1VgmyHOEOGd-Y-nGd9Q&oe=64E906CE&_nc_sid=982cc7"}
                    description={"In the Orange tour"}
                    date={"22.08.2023"}/>

                <Photo
                    url={"https://instagram.ftnr2-2.fna.fbcdn.net/v/t51.2885-15/340337083_798149487892449_8487784359062351245_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.ftnr2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Ol4c81GJax0AX-AXf8q&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzA3Nzg1MzYwODA4NzM4MjA4Ng%3D%3D.2-ccb7-5&oh=00_AfBhDP-6bSgfGnpPjcTKQo3UICklRdRQeo8-Qr64iUx_Xw&oe=64E8928E&_nc_sid=982cc7"}
                    description={"Isoraka Lounge Bar"}
                    date={"15.12.2022"}/>

                <Photo
                    url={"https://instagram.ftnr2-2.fna.fbcdn.net/v/t51.2885-15/327381391_501123855499024_844804092355962949_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.ftnr2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=D_dLstoJ0rcAX9YqKmB&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAyNTc5NjQ0NzM1NDI1MTcwNA%3D%3D.2-ccb7-5&oh=00_AfCytygws1LfeY-z1hS1z_SFn2axUPhmbNL82yc-onz_ZQ&oe=64E9130E&_nc_sid=982cc7"}
                    description={"Home / Office"}
                    date={"12.05.2022"}/>

                <Photo
                    url={"https://instagram.ftnr2-2.fna.fbcdn.net/v/t51.2885-15/313392756_2004657663064065_6009332915003767300_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.ftnr2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aRbqAgairt8AX9TBSyj&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=Mjk2MDEzNzA2NDU3Nzk5NTk4Mw%3D%3D.2-ccb7-5&oh=00_AfCZKVVBuV6AZGtV8nTCfmvhY9fjysrYmKcXWeOkAwbG3Q&oe=64E8BA39&_nc_sid=982cc7"}
                    description={"Antananarivo , Mahamasina"}
                    date={"15.04.2022"}/>

                <Photo
                    url={"https://instagram.ftnr2-2.fna.fbcdn.net/v/t51.2885-15/324926139_872374100739578_1060121189523363219_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.ftnr2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=x1QZBcBz7dcAX95gtMo&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzAxNDkxNTMwOTI0MTAxOTMyMg%3D%3D.2-ccb7-5&oh=00_AfBCDFtS_4jl_-qhwNiXYqCNRJhaCtViZS0sKZF1v-VAhQ&oe=64E913D1&_nc_sid=982cc7"}
                    description={"Mussee de la photographie"}
                    date={"31.03.2022"}/>
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
        <div className="flex items-end gap-8 py-12">
            <div>
                <Image
                    width={300}
                    height={1000}
                    src={url}
                    alt={""}/>
            </div>
            <div>
                <p>{description}</p>
                <p className="opacity-50 text-sm">{date}</p>
            </div>
        </div>
    )
}