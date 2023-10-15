'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function Blogs() {
    return (
        <>
            <div >
                <div className="max-w-sm flex flex-col my-12">
                    <h1 className="text-lg font-grotesk font-bold">Memories</h1>
                    <p className="text-md text-neutral-500">A personal feed of memories and thoughts...</p>
                </div>
            </div>
            <div className="max-w-sm flex flex-col divide-y divide-dashed pr-16">
                <div className="flex flex-col gap-3 py-12">
                    <h2 className="font-grotesk font-medium text-lg ">
                        Encourage the future women to enter the amazing tech
                        word with Hello women
                    </h2>

                    <p className="text-sm font-grotesk text-neutral-400">10.02.2023</p>

                    <div className="font-jost text-md text-neutral-500 flex flex-col gap-6">
                        <p>
                            In a world driven by technology, it's essential to encourage and support women to enter the
                            exciting realm of tech. 'Hello Women' serves as a beacon of inspiration, creating a
                            welcoming space for women to explore their potential in this dynamic field.
                        </p>

                        <p>
                            By providing
                            resources, mentorship, and opportunities, 'Hello Women' is fostering a community where women
                            can break barriers, challenge stereotypes, and thrive in the ever-evolving tech industry.
                            It's time to amplify the voices and talents of women in tech, ensuring a brighter future for
                            all.
                        </p>
                    </div>

                    <div className="flex rounded overflow-hidden my-8">
                        <Image className="w-full h-auto" width={320} height={120} src={"/assets/hellowomen.jpg"}
                               alt={""}/>
                    </div>
                </div>

                <div className="flex flex-col gap-3 py-12">
                    <h2 className="font-grotesk font-medium text-lg ">
                        The ultimate keyboard for developer
                    </h2>

                    <p className="text-sm font-grotesk text-neutral-400">10.02.2023</p>

                    <div className="font-jost text-md text-neutral-500 flex flex-col gap-6">
                        <p>
                            For developers, the keyboard is not just a tool; it's an extension of the mind. Enter the
                            mechanical keyboard, a device that has become the ultimate choice for those who write code
                            and craft software. Mechanical keyboards aren't just tools; they're a
                            symphony of precision, making them the preferred instrument for developers seeking that
                            perfect keystroke.
                        </p>

                        <p>
                            What sets mechanical keyboards apart? It's the tactile feedback, the
                            audible click of each keypress, and the unparalleled durability.
                        </p>

                        <p>
                            With distinct key switches
                            and customizable keycaps, they offer a personalized experience that enhances productivity
                            and comfort during long coding sessions.
                        </p>
                    </div>

                    <div className="flex rounded overflow-hidden my-8">
                        <Image className="w-full h-auto" width={320} height={120} src={"/assets/keyboard.jpeg"}
                               alt={""}/>
                    </div>
                </div>

                <div className="flex flex-col gap-3 py-12">
                    <h2 className="font-grotesk font-medium text-lg ">
                        Unemployment sucks
                    </h2>

                    <p className="text-sm font-grotesk text-neutral-400">10.03.2023</p>

                    <div className="font-jost text-md text-neutral-500 flex flex-col gap-6">
                        <p>
                            Unemployment can be a real challenge for software students like me. Despite the enthusiasm
                            and skills we bring to the table, finding that first job in the tech industry can be tough.
                        </p>

                        <p>
                            However, every project we work on and every skill we acquire brings us closer to our goals.
                            We're determined to overcome this hurdle and put our coding expertise to good use in the
                            real world.
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
