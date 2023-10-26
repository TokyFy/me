import './globals.css'
import type {Metadata} from 'next'
import NextTopLoader from 'nextjs-toploader';
import React from "react";
import Navigation from "@components/Navigation";
import MobileNavigation from "@components/MobileNavigation";

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="font-second font-normal dark:bg-black no-scrollbar max-w-[1920px] cursor-crosshair">
            <NextTopLoader shadow={false} color="#000" showSpinner={false}/>

            <main className="dark:text-neutral-50 sm:flex">
                <div className="w-48 p-8 fixed h-full border-r border-neutral-200 left-0 justify-end hidden py-12 sm:flex">
                    <Navigation/>
                </div>
                <div className="fixed bottom-0 z-20 flex flex-col gap-4 w-full px-4 py-6 sm:hidden">
                    <MobileNavigation/>
                </div>
                <div id="content" className="py-8 px-4 grow sm:px-8 sm:py-12 sm:ml-48">
                    {children}
                </div>
            </main>
        </body>
        </html>
    )
}
