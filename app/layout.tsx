import './globals.css'
import type {Metadata} from 'next'
import NextTopLoader from 'nextjs-toploader';
import React from "react";
import Navigation from "@components/Navigation";

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="font-second font-normal dark:bg-black no-scrollbar max-w-[1920px] cursor-crosshair">
            <NextTopLoader shadow={false} color="#000" showSpinner={false}/>

            <main className="dark:text-neutral-50 flex">
                <div className="w-48 p-8 py-12 fixed h-full border-r border-neutral-200 left-0 flex justify-end">
                    <Navigation/>
                </div>
                <div className="ml-48 p-8 py-12 grow">
                    {children}
                </div>
            </main>
        </body>
        </html>
    )
}
