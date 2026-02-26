import './globals.css'
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
                    {children}
        </body>
        </html>
    )
}
