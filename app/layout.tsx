import './globals.css'
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='font-primary max-w-[600px] ml-16 text-[16px] text-black bg-neutral-100'>
                {children}
            </body>
        </html>
    )
}
