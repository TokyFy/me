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
            <body className="font-primary min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased text-[14px]">
                <div className="relative mx-auto flex min-h-screen w-full max-w-[640px] flex-col px-5 py-12 sm:px-6">
                    <header className="flex items-start justify-between gap-4 pb-8 uppercase text-[var(--text)]/70">
                        <nav className="flex flex-wrap gap-4 font-mono text-[14px]">
                            <Link href="/">INDEX</Link>
                            <Link href="/blogs/">WRITING</Link>
                            <Link href="/projects/">PROJECTS</Link>
                        </nav>
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
