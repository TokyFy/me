'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Blogs() {
    return (
        <>
            <div>
                <div className="mx-auto max-w-sm flex flex-col my-12 px-8">
                    <h1 className="text-lg font-grotesk font-bold">Memories</h1>
                    <p className="text-md text-neutral-500">A personal feed of memories and thoughts...</p>
                </div>
            </div>
            <div className="mx-auto max-w-sm flex flex-col divide-y divide-dashed px-8">
                <div className="flex flex-col gap-3 py-12">
                    <h2 className="font-grotesk font-medium text-lg ">
                        Encourage the future women to enter the amazing tech
                        word with Hello women
                    </h2>

                    <p className="text-sm font-grotesk text-neutral-400">10.02.2023</p>

                    <div className="font-jost text-md text-neutral-500 flex flex-col gap-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam asperiores aut
                            beatae delectus, dicta eos facilis labore maiores minima obcaecati, perspiciatis quas quia
                            quo similique tempora velit veniam!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aliquid atque
                            consectetur delectus distinctio dolor et facere.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem, dolorum eveniet
                            in maxime minima necessitatibus nostrum quibusdam!
                        </p>
                    </div>

                    <div className="flex rounded overflow-hidden my-8">
                        <Image className="w-full h-auto" width={320} height={120} src={"/assets/hellowomen.jpg"} alt={""}/>
                    </div>
                </div>

                <div className="flex flex-col gap-3 py-12">
                    <h2 className="font-grotesk font-medium text-lg ">
                        The ultimate keyboard for developer
                    </h2>

                    <p className="text-sm font-grotesk text-neutral-400">10.02.2023</p>

                    <div className="font-jost text-md text-neutral-500 flex flex-col gap-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam asperiores aut
                            beatae delectus, dicta eos facilis labore maiores minima obcaecati, perspiciatis quas quia
                            quo similique tempora velit veniam!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aliquid atque
                            consectetur delectus distinctio dolor et facere.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem, dolorum eveniet
                            in maxime minima necessitatibus nostrum quibusdam!
                        </p>
                    </div>

                    <div className="flex rounded overflow-hidden my-8">
                        <Image className="w-full h-auto" width={320} height={120} src={"/assets/keyboard.jpeg"} alt={""}/>
                    </div>
                </div>

                <div className="flex flex-col gap-3 py-12">
                    <h2 className="font-grotesk font-medium text-lg ">
                        Unemployment sucks
                    </h2>

                    <p className="text-sm font-grotesk text-neutral-400">10.03.2023</p>

                    <div className="font-jost text-md text-neutral-500 flex flex-col gap-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam asperiores aut
                            beatae delectus, dicta eos facilis labore maiores minima obcaecati, perspiciatis quas quia
                            quo similique tempora velit veniam!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aliquid atque
                            consectetur delectus distinctio dolor et facere.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem, dolorum eveniet
                            in maxime minima necessitatibus nostrum quibusdam!
                        </p>
                    </div>

                    <div className="flex rounded overflow-hidden my-8">
                        <Image className="w-full h-auto" width={320} height={120} src={"/assets/blog-3.jpg"} alt={""}/>
                    </div>
                </div>
            </div>
        </>
    )
}
