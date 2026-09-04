import { getMongoDb, isMongoConfigured } from './mongodb'

export interface GuestbookEntry {
    id: string
    name: string
    message: string
    link?: string
    createdAt: string
}

export async function getGuestbookEntries(): Promise<{
    entries: GuestbookEntry[]
    isConnectedToDb: boolean
}> {
    const isConfigured = isMongoConfigured()

    if (isConfigured) {
        try {
            const db = await getMongoDb()
            if (db) {
                const collection = db.collection('guestbook')
                const rawDocs = await collection
                    .find({})
                    .sort({ createdAt: -1 })
                    .limit(100)
                    .toArray()

                const entries: GuestbookEntry[] = rawDocs.map((doc) => ({
                    id: String(doc.id || doc._id),
                    name: String(doc.name || 'Anonymous'),
                    message: String(doc.message || ''),
                    link: doc.link ? String(doc.link) : undefined,
                    createdAt: doc.createdAt ? String(doc.createdAt) : new Date().toISOString(),
                }))

                return { entries, isConnectedToDb: true }
            }
        } catch (error) {
            console.warn('[Guestbook] Failed to query MongoDB:', error)
        }
    }

    return {
        entries: [],
        isConnectedToDb: false,
    }
}

export async function addGuestbookEntry(data: {
    name: string
    message: string
    link?: string
}): Promise<{
    entry?: GuestbookEntry
    isConnectedToDb: boolean
    error?: string
}> {
    const entry: GuestbookEntry = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        name: data.name.trim(),
        message: data.message.trim(),
        link: data.link?.trim() ? normalizeLink(data.link.trim()) : undefined,
        createdAt: new Date().toISOString(),
    }

    const isConfigured = isMongoConfigured()
    if (!isConfigured) {
        return {
            isConnectedToDb: false,
            error: 'MongoDB is not configured.',
        }
    }

    try {
        const db = await getMongoDb()
        if (!db) {
            return {
                isConnectedToDb: false,
                error: 'Could not connect to MongoDB database.',
            }
        }

        const collection = db.collection('guestbook')
        await collection.insertOne({
            id: entry.id,
            name: entry.name,
            message: entry.message,
            link: entry.link || null,
            createdAt: entry.createdAt,
        })

        return { entry, isConnectedToDb: true }
    } catch (error) {
        console.error('[Guestbook] Error inserting into MongoDB:', error)
        return {
            isConnectedToDb: false,
            error: error instanceof Error ? error.message : 'Database error',
        }
    }
}

function normalizeLink(rawLink: string): string {
    const trimmed = rawLink.trim()
    if (!trimmed) return ''
    if (/^https?:\/\//i.test(trimmed)) {
        return trimmed
    }
    // If user provided a github username like "tokyfy" or "github.com/tokyfy"
    if (/^github\.com\//i.test(trimmed)) {
        return `https://${trimmed}`
    }
    if (!trimmed.includes('.') && !trimmed.includes('/')) {
        return `https://github.com/${trimmed}`
    }
    return `https://${trimmed}`
}
