'use client'
/* eslint-disable react/no-unescaped-entities */

export default function Guestbooks() {

    return (
        <>
            <div className="flex flex-col gap-5">
                <p>
                    You can live me a nice message here if you want !!
                </p>

                <div className="flex flex-col gap-2 my-6">
                    <div className="w-full p-2 border border-dashed border-neutral-400 rounded-md">
                        <p>Ohh nice website 👽</p>
                        <div className="flex justify-between">
                            <p className="text-sm opacity-60">By Ushi</p>
                            <p className="text-sm opacity-60">25 August 2023</p>
                        </div>
                    </div>
                    <div className="w-full p-2 border border-dashed border-neutral-400 rounded-md">
                        <p>Yepppp 🥳</p>
                        <div className="flex justify-between">
                            <p className="text-sm opacity-60">By Lalaina</p>
                            <p className="text-sm opacity-60">26 August 2023</p>
                        </div>
                    </div>
                    <div className="w-full p-2 border border-dashed border-neutral-400 rounded-md">
                        <p>GG Xd</p>
                        <div className="flex justify-between">
                            <p className="text-sm opacity-60">By Ony</p>
                            <p className="text-sm opacity-60">26 August 2023</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="w-full bg-neutral-950 dark:bg-neutral-800 text-neutral-200 p-2 rounded">
                        Sign up with <span className="underline">Google</span> or <span
                        className="underline">Github</span> to write a message
                    </button>
                </div>
            </div>
        </>
    )
}
