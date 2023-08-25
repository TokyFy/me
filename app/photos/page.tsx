'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Blogs() {


    return (
        <>
            <div
                className="flex flex-col gap-5  [&>div:nth-child(odd)]:flex-col [&>div:nth-child(odd)]:md:flex-row-reverse ">
                <p>
                    Enter the realm of my photographic collection, where each image weaves a story of its own, inviting
                    you to journey through moments frozen in time. 📸 ✨
                </p>
                <Photo
                    url={"https://imagedelivery.net/3ACgl0mZV6v8RneQEVGQ5g/cd0015c0-837c-474f-d56c-5e48f49a5001/grid"}
                    description={"Nick Linnett - Leicester"}
                    date={"22.08.2023"}/>

                <Photo
                    url={"https://imagedelivery.net/3ACgl0mZV6v8RneQEVGQ5g/1ff78e58-d3a1-4f0d-39ea-829e8cc7d901/grid"}
                    description={"Louis Mas - Darker day"}
                    date={"15.12.2022"}/>

                <Photo
                    url={"https://imagedelivery.net/3ACgl0mZV6v8RneQEVGQ5g/aa596a60-d500-4f8d-d512-b23096586101/grid"}
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
        <div className="flex flex-col md:flex-row items-end gap-8 py-12">
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