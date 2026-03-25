import Image from "next/image"
import Link from "next/link"

export default function Home() {
    const labelCellClass = "w-40 py-4 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold uppercase"

    return (
        <div>
            <div>
                <p className="hover:underline decoration-wavy decoration-[blue]">a9F#k2LmP$zX1qW8vT&cR5uY!nB3eD0hJ</p><br/>

                <p className="hover:underline decoration-wavy decoration-[blue]">Zx8@LpQ2vN!kR5tYwE3#cB7mUoD1fH9sAqJrT6yW0&uP4VgXzM</p><br/>

                <p className="hover:underline decoration-wavy decoration-[blue]">Qw3E$rT6yU8iO0pA!sD2f ** WIP ** hJkLzXcVbN7mP9Y#@&tR5</p><br/>

                <p className="hover:underline decoration-wavy decoration-[blue]">M!nB7vC$xZ2aS4dF6gH8jK0LqW3eR5tY7uI9oP@#&VkXzA1sD</p><br/>
            </div>

            
            {/* <div className="flex gap-4">
                <div className="flex flex-col border-r border-dotted border-neutral-400 max-w-[128px]">
                    <p className="bg-black text-white w-fit px-1 my-1">{"< hobbies >"}</p>
                    <Image className="border border-dashed border-black" src={"/Monster_manga.jpg"} width={96} height={96} alt="Monster anime" />
                    <p className="my-2">{">>My favorite anime/manga so far"}</p>
                </div>
                <div className="relative">
                    <p>
                        <span className="absolute top-[16px] -right-[15px] -rotate-[25deg] ">Thanks</span>
                        <span className="absolute top-[34px] -right-2 -rotate-[6deg]">for</span>
                        <span className="absolute top-[59px] -right-[23px] rotate-[5deg]">visiting</span>
                        <span className="absolute top-[82px] right-2 -rotate-[4deg]">Us</span>
                    </p>
                    <Image className="mix-blend-multiply saturate-50" src={"/frog.jpg"} width={196} height={196} alt="just a frog"/>
                </div>

            </div> */}
            <div className="flex gap-4 flex-wrap my-4">
                {/* <div>
                    <h3 className="bg-black text-white w-fit px-1 my-1">{"* Web Status *"}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>{"views : "}</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>{"created : "}</td>
                                <td>2026/03/12</td>
                            </tr>
                            <tr>
                                <td>{"updated : "}</td>
                                <td>2026/03/13 21:09:49</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}


                {/* <div>
                    <h3 className="bg-black text-white w-fit px-1 my-1">{"<Comments>"}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>{">>franaivo<<"}</td>
                                <td className="px-2">hello, nice website</td>
                            </tr>
                            <tr>
                                <td>{">>anonymous<<"}</td>
                                <td className="px-2">Add some color mf</td>
                            </tr>
                            <tr>
                                <td>{">>inou<<"}</td>
                                <td className="px-2">これは何もない</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>

            <div className="flex gap-4">
                <p>
                    you can reach me out via these platforms : <Link className="italic underline decoration-wavy decoration-[blue]" href="https://github.com/TokyFy/">{"Github"}</Link>{" , "}
                    <Link className="italic underline decoration-wavy decoration-[blue]" target="_blank"  href="https://www.linkedin.com/in/tokyfy/">{"LinkedIn"}</Link>{" , "}
                    <Link className="italic underline decoration-wavy decoration-[blue]" href="mailto:tokyfy@outlook.com">{"tokyfy@outlook.com"}</Link>
                </p>
                {/* <ul className="self-center border-r border-dotted border-neutral-400 pr-4">
                    <p className="bg-black text-white w-fit px-1 my-1">{"< links >"}</p>
                    <li><Link href="https://github.com/TokyFy/">{">@Github"}</Link></li>
                    <li><Link target="_blank" href="https://www.linkedin.com/in/tokyfy/">{">@LinkedIn"}</Link></li>
                    <li><Link href="mailto:tokyfy@outlook.com">{">@tokyfy@outlook.com"}</Link></li>
                </ul> */}
                {/* <div className="flex flex-col items-center gap-2">
                    <Image className="mix-blend-multiply" src={"/current_playing.gif"} alt="Currently Playing" width={86} height={86} />
                    <p className="text-[14px] max-w-[202px]">{"<spotify>\"カネコアヤノ - 抱擁 / Kaneko Ayano - Houyo\""}</p>
                </div> */}
            </div>

            {/* <ul className="py-4">
                <p className="bg-black text-white w-fit px-1 my-1">♦ changelog</p>
                <li> {"> 2026/03/12 : \"Staring this website\""}</li>
                <li> {"> 2026/03/13 : \"Add home page\""}</li>
            </ul> */}
        </div>
    )
}
