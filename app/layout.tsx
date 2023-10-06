import './globals.css'
import type {Metadata} from 'next'
import NavBar from "@components/navBar";
import NextTopLoader from 'nextjs-toploader';


export const metadata: Metadata = {
    title: 'Toky FY',
    description: 'Frontend developer from Madagascar',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="font-jost font-normal dark:bg-black no-scrollbar">
        <main className="mb-12 lg:mb-32 dark:text-neutral-50">
            <NextTopLoader
                shadow=""
                color="#9cf62b"
                showSpinner={false}
            />
            <div>
                <NavBar/>
            </div>
            {children}
        </main>
        </body>
        </html>
    )
}
