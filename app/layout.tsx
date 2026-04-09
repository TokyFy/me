import './globals.css'
import React from "react";
import { Metadata } from 'next';
import Link from 'next/link';
import { DotGothic16 } from 'next/font/google';
import ThemeSwitcher from '@components/theme-switcher';

const dotGothic16 = DotGothic16({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-dotgothic16',
})

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${dotGothic16.variable} font-primary text-[13px] max-w-[600px] ml-4 md:ml-16`}>
                <div className="py-12" id="index">
                    <section className='gap-4'>
                        <div className='flex gap-2 flex-wrap items-center pb-4 uppercase'>
                            <Link href="/" className='tag-pill font-pixel w-fit px-1 transition-colors'>
                                <p className='text-[13px]'>✦ Index</p>
                            </Link>
                            <Link href="/blogs/" className='tag-pill font-pixel w-fit px-1 transition-colors'>
                                <p className='text-[13px]'>☆ Blog</p>
                            </Link>
                            <Link href="#links" className='tag-pill font-pixel w-fit px-1 transition-colors'>
                                <p className='text-[13px]'>✦ Links</p>
                            </Link>
                            <Link href="#music" className='tag-pill font-pixel w-fit px-1 transition-colors'>
                                <p className='text-[13px]'>♥ Music</p>
                            </Link>
                            <Link href="#changelog" className='tag-pill font-pixel w-fit px-1 transition-colors'>
                                <p className='text-[13px]'>✦ Changelog</p>
                            </Link>
                            <Link href="#guestbook" className='tag-pill font-pixel w-fit px-1 transition-colors'>
                                <p className='text-[13px]'>⁂  Guestbook</p>
                            </Link>
                            <ThemeSwitcher />
                        </div>
                        
                    </section>
                    {children}
                </div>
            </body>
        </html>
    )
}
