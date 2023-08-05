import './globals.css'
import type { Metadata } from 'next'

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
      <body className="font-jost font-normal dark:bg-black">{children}</body>
    </html>
  )
}
