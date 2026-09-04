import { NextRequest, NextResponse } from 'next/server'
import { getGuestbookEntries, addGuestbookEntry } from '@/lib/guestbook'
import { checkMongoUriCoherence } from '@/lib/mongodb'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const { entries, isConnectedToDb } = await getGuestbookEntries()
        return NextResponse.json({ entries, isConnectedToDb })
    } catch (error) {
        console.error('Error in GET /api/guestbook:', error)
        return NextResponse.json(
            { error: 'Failed to fetch guestbook messages' },
            { status: 500 }
        )
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, message, link, github, website } = body

        if (!name || typeof name !== 'string' || !name.trim()) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 })
        }

        if (!message || typeof message !== 'string' || !message.trim()) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 })
        }

        // Support either 'link', 'github', or 'website' from user request
        const userLink = (link || github || website || '') as string

        const result = await addGuestbookEntry({
            name,
            message,
            link: userLink,
        })

        if (!result.isConnectedToDb || !result.entry) {
            return NextResponse.json(
                { error: result.error || 'Database is not connected.' },
                { status: 503 }
            )
        }

        return NextResponse.json({ success: true, entry: result.entry }, { status: 201 })
    } catch (error) {
        console.error('Error in POST /api/guestbook:', error)
        return NextResponse.json(
            { error: 'Failed to save guestbook message' },
            { status: 500 }
        )
    }
}
