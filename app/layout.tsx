import './globals.css'
import type {Metadata} from 'next'
import NavBar from "@components/navBar";
import NextTopLoader from 'nextjs-toploader';
import React from "react";


export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="font-second font-normal dark:bg-black no-scrollbar max-w-[1920px] cursor-cell">
        <div className="sticky top-0 left-0 z-50 border-dashed border-b-neutral-300 px-6 bg-neutral-950 dark:bg-neutral-900">
            <NavBar/>
        </div>
        <main className="dark:text-neutral-50 px-6">
            <NextTopLoader
                shadow={false}
                color="#fff"
                showSpinner={false}
            />
            {children}
        </main>
        </body>
        </html>
    )
}
