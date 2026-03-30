import './globals.css'
import React from "react";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`font-primary text-[13px]  max-w-[600px] ml-4 md:ml-16  bg-neutral-100`}>
                <div className="py-12" id="index">
                    <section className='pb-4'>
                        <div className='flex gap-2 md:w-1/2 flex-wrap pb-4'>
                            <Link href="/" className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'>
                                <p className='text-[13px]'>✦ Index</p>
                            </Link>
                            <Link href="/blogs/" className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'>
                                <p className='text-[13px]'>☆ Blog</p>
                            </Link>
                            <Link href="#links" className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'>
                                <p className='text-[13px]'>✦ Links</p>
                            </Link>
                            <Link href="#music" className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'>
                                <p className='text-[13px]'>♥ Music</p>
                            </Link>
                            <Link href="#changelog" className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'>
                                <p className='text-[13px]'>✦ Changelog</p>
                            </Link>
                            <Link href="#guestbook" className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'>
                                <p className='text-[13px]'>⁂  Guestbook</p>
                            </Link>
                        </div>
                    </section>
                    {children}
                </div>
            </body>
        </html>
    )
}
