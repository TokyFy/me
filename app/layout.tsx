import './globals.css'
import React from "react";
import { Metadata } from 'next';
import portfolio from './data/portfolio.json'
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='font-primary max-w-[600px] ml-16 text-[16px] text-black bg-neutral-100'>
                <div className="py-12" id="index">
                    <section className='pb-4'>
                        <div className='flex gap-2 w-1/2 flex-wrap border-b border-dotted border-black pb-4'>
                            {portfolio.tags.map((tag) => (
                                <Link
                                    key={tag.label}
                                    href={tag.href}
                                    className='bg-neutral-200 w-fit px-1 hover:bg-neutral-300 transition-colors'
                                >
                                    <p className='text-[14px]'>{tag.label}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                    {children}
                </div>
            </body>
        </html>
    )
}
