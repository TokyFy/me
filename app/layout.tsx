import './globals.css'
import React from "react";
import { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Nav from '@components/nav';
import ThemeSwitcher from '@components/theme-switcher';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const publicMono = localFont({
    src: '../public/mono.woff2',
    display: 'swap',
    variable: '--font-mono',
})

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${publicMono.variable} font-primary min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased text-[14px]`}>
                <div className="relative mx-auto flex min-h-screen w-full max-w-[640px] flex-col px-5 py-12 sm:px-6">
                    <header className="flex items-start justify-between gap-4 pb-8 uppercase text-[var(--text)]/70">
                        <Nav />
                        <ThemeSwitcher />
                    </header>
                    <main className="flex-1 space-y-10" id="index">
                        {children}
                    </main>
                    <footer className="pt-10">
                        <p className="flex flex-wrap gap-x-3 gap-y-2 font-mono uppercase text-[var(--text)]/70">
                            <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="https://github.com/TokyFy/">Github</Link>
                            <span>✦</span>
                            <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" target="_blank" href="https://www.linkedin.com/in/tokyfy/">LinkedIn</Link>
                            <span>✦</span>
                            <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="mailto:tokyfy@outlook.com">tokyfy@outlook.com</Link>
                        </p>
                    </footer>
                </div>
                <Analytics />
            </body>
        </html>
    )
}
