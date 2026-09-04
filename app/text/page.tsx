import { getGuestbookEntries } from '@/lib/guestbook'
import GuestbookClient from './guestbook-client'

export const dynamic = 'force-dynamic'

export const metadata = {
    title: 'Text — Toky fy',
    description: 'A simple guestbook and message board.',
}

export default async function TextPage() {
    const { entries } = await getGuestbookEntries()

    return (
        <section>
            <GuestbookClient initialEntries={entries} />
        </section>
    )
}
