import Image from "next/image"
import Link from "next/link"

export default function Home() {
    const labelCellClass = "w-40 py-4 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold uppercase"

    return (
            <div>
                <p>♡ Hiiiiiii ♡ , welcome to this little boring website (ﾉ◕ヮ◕)</p>
                <p>You don&apos;t know me yet ?? pleaseee check this <Link href="/me">meee</Link></p>

                <div className="grid grid-cols-4 gap-4">
                    <ul className="self-center border-r border-dotted border-neutral-400 pr-4">
                        <p className="bg-black text-white w-fit px-1 my-1">{"< links >"}</p>
                        <li className="line-through">{">@Github"}</li>
                        <li className="line-through">{">@LinkedIn"}</li>
                        <li className="line-through">{">@outlook"}</li>
                        <li className="line-through">{">@stackoverflow"}</li>
                    </ul>
                    <div className="flex flex-col items-center gap-2">
                        <Image className="mix-blend-multiply" src={"/current_playing.gif"} alt="Currently Playing" width={86} height={86} />
                        <p className="text-[14px]">{"<spotify>\"カネコアヤノ - 抱擁 / Kaneko Ayano - Houyo\""}</p>
                    </div>
                </div>
                 <ul className="py-4">
                    <p className="bg-black text-white w-fit px-1 my-1">♦ changelog</p>
                    <li> {"> 2026/03/12 : \"Staring this website\""}</li>
                    <li> {"> 2026/03/13 : \"Add home page\""}</li>
                </ul>
                <div className="grid grid-cols-4 gap-4 py-4">
                    <div className="flex flex-col border-r border-dotted border-neutral-400">
                        <p className="bg-black text-white w-fit px-1 my-1">{"< hobbies >"}</p>
                        <Image className="border border-dashed border-black" src={"/Monster_manga.jpg"} width={96} height={96} alt="Monster anime"/>
                        <p className="my-2">{">>My favorite anime/manga so far"}</p>
                    </div>

                    <div className="col-span-3 ">
                        <h3 className="bg-black text-white w-fit px-1 my-1">{"<Comments>"}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{">>franaivo<<"}</td>
                                    <td>hello, nice website</td>
                                </tr>
                                <tr>
                                    <td>{">>anonymous<<"}</td>
                                    <td>Add some color mf</td>
                                </tr>
                                <tr>
                                    <td>{">>inou<<"}</td>
                                    <td>これは何もない</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-3">
                        <h3 className="bg-black text-white w-fit px-1 my-1">{"* Web Status *"}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{">views : "}</td>
                                    <td>14</td>
                                </tr>
                                 <tr>
                                    <td>{">created : "}</td>
                                    <td>2026/03/12</td>
                                </tr>
                                <tr>
                                    <td>{">updated : "}</td>
                                    <td>2026/03/13 21:09:49</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
    )
}
