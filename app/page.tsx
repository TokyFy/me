import Image from "next/image"
export default function Home() {
    return (
        <>
            <div>
                <div>
                    <Image width={148} height={148} alt="Toky fy" src={"/me.png"} />
                </div>
                <div className="text-white text-[15px] py-6">
                    <p>Toky Fy ✦</p>
                    <p className="text-[#8f8f8f]">Software engineer</p>
                </div>
            </div>
            <div className="text-[#8f8f8f] text-[15px] flex flex-col gap-6">
                <p>
                    Hello, I&apos;m a computer science student from Madagascar. I love [re]building things to understand them at their root.
                    In my spare time I enjoy taking abstract photos.
                </p>
                <p>
                    My goal is to live off my passion, or at least have the time to pursue it. I want to be like those pioneers in software
                    who built things like Linux and Vim.
                </p>
            </div>
        </>
    )
}
