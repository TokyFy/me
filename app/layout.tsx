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
            <body className={`font-primary text-[14px] max-w-[600px] ml-4 md:ml-16`}>
                <div className="py-12" id="index">
                    <section className='gap-4'>
                        <div className='flex gap-2 flex-wrap items-center pb-4 uppercase'>
                            <Link href="/" className='font-mono w-fit px-1 transition-colors bg-[#FFFF] border border-transparent hover:border-black'>
                                <p className='text-[13px]'>✦ Index</p>
                            </Link>
                            <Link href="/blogs/" className='font-mono w-fit px-1 transition-colors bg-[#FFFF] border border-transparent hover:border-black'>
                                <p className='text-[13px]'>☆ Blog</p>
                            </Link>
                            <Link href="/projects/" className='font-mono w-fit px-1 transition-colors bg-[#FFFF] border border-transparent hover:border-black'>
                                <p className='text-[13px]'>♥ Project</p>
                            </Link>
                            <Link href="#guestbook" className='font-mono w-fit px-1 transition-colors bg-[#FFFFFF] border border-transparent hover:border-black'>
                                <p className='text-[13px]'>⁂  Guestbook</p>
                            </Link>
                            <Link href="#changelog" className='font-mono w-fit px-1 transition-colors bg-[#FFFF] border border-transparent hover:border-black'>
                                <p className='text-[13px]'>✦ Changelog</p>
                            </Link>
                            <ThemeSwitcher />
                        </div>

                    </section>
                    {children}
                </div>
                <Analytics />
            </body>
        </html>
    )
}
