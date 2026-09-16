import GuestbookClient from './guestbook-client'

export const dynamic = 'force-dynamic'

export const metadata = {
    title: 'Text — Toky fy',
    description: 'A simple guestbook and message board.',
}

export default function TextPage() {
    return (
        <section>
            <GuestbookClient />
        </section>
    )
}
