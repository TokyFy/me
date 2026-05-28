import './globals.css'
import React from "react";
import { Metadata } from 'next';
import Link from 'next/link';
import ThemeSwitcher from '@components/theme-switcher';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`font-primary text-[14px] max-w-[640px] mx-auto bg-[#0d0d0d]`}>
                <div className="pt-12" id="index">
                    <section className='gap-4'>
                        <div className='flex gap-6 flex-wrap items-center pb-4 uppercase text-[#8f8f8f]'>
                            <Link href="/" className='font-mono'>
                                <p className='text-[14px]'>INDEX</p>
                            </Link>
                            <Link href="/blogs/" className='font-mono'>
                                <p className='text-[14px]'>WRITING</p>
                            </Link>
                            <Link href="/projects/" className='font-mono'>
                                <p className='text-[14px]'>¿¿¿</p>
                            </Link>
                        </div>

                    </section>
                    {children}
                    <div className='py-6'>
                        <p className="font-mono uppercase text-[#8f8f8f]">
                            <Link className="underline decoration-wavy" href="https://github.com/TokyFy/">{"Github"}</Link>{" ✦ "}
                            <Link className="underline decoration-wavy" target="_blank" href="https://www.linkedin.com/in/tokyfy/">{"LinkedIn"}</Link>{" ✦ "}
                            <Link className="underline decoration-wavy" href="mailto:tokyfy@outlook.com">{"tokyfy@outlook.com"}</Link>
                        </p>
                    </div>
                </div>
                <Analytics />
            </body>
        </html>
    )
}
