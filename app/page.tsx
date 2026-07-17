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
                    Hello , I'm a computer science student from Madagascar , I love [re]building things to enderstant it in it's root.
                    In my spar time I enjoy taking abstract picture.
                </p>
                <p>
                    My goal is to live of my passion or just have the time to do it , I vant to be like those pioner in softwar building 
                    thing like linux and vim.
                </p>
                <p className="text-neutral-600">
                    Note for recruiter : Please please please call me TT  
                </p>
            </div >
        </>
    )
}
