import Image from "next/image"

export default function Home() {
    return (
        <>
            <svg aria-hidden style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter
                        id="melt-filter"
                        x="-150%" y="-150%" width="400%" height="400%"
                        colorInterpolationFilters="sRGB"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.070 0.030"
                            numOctaves="3"
                            seed="4"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic" in2="noise"
                            scale="10"
                            xChannelSelector="R" yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <div>
                <div>
                    <Image className="melt-image" width={114} height={114} alt="Toky fy" src={"/me.png"} />
                </div>
                <div className="text-white py-4">
                    <p>Toky Fy ✦</p>
                    <p className="text-[#8f8f8f]">Software engineer</p>
                </div>
            </div>
            <div className="text-[#8f8f8f] text-[15px] flex flex-col gap-6">
                <p>
                    Maecenas dolor libero, cursus in consectetur non, semper non neque. Morbi ultrices purus sit amet arcu finibus, a varius arcu feugiat. Praesent vel justo vitae mi volutpat molestie. Nulla tempus ac urna ut pellentesque.
                </p>
                <p>
                    Phasellus tellus tellus, accumsan eu leo eget, dictum laoreet sapien. Nam efficitur libero a purus pretium viverra. Curabitur sed tempor diam, non blandit nunc. In vel tristique nibh.
                </p>
                <p>
                    Fusce ut rhoncus erat. Mauris vel augue eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam blandit sem, ut facilisis mauris consectetur id.
                </p>
            </div >
        </>
    )
}
