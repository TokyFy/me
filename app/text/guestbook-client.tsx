'use client'

import React, { useState, useRef, useEffect } from 'react'
import type { GuestbookEntry } from '@/lib/guestbook'

interface GuestbookClientProps {
    initialEntries: GuestbookEntry[]
}

export default function GuestbookClient({ initialEntries }: GuestbookClientProps) {
    const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries)
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [message, setMessage] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [message, showForm])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const trimmedName = name.trim()
        const trimmedMessage = message.trim()

        if (!trimmedName || !trimmedMessage) {
            setStatusMessage({ type: 'error', text: 'Name and message are required.' })
            return
        }

        setSubmitting(true)
        setStatusMessage(null)

        try {
            const res = await fetch('/api/guestbook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: trimmedName,
                    message: trimmedMessage,
                    link: link.trim(),
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to post message')
            }

            if (data.entry) {
                setEntries((prev) => [data.entry, ...prev])
                setName('')
                setLink('')
                setMessage('')
                setShowForm(false)
                setStatusMessage({ type: 'success', text: 'Message posted.' })
                setTimeout(() => setStatusMessage(null), 3000)
            }
        } catch (err) {
            setStatusMessage({
                type: 'error',
                text: err instanceof Error ? err.message : 'Error posting message',
            })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="space-y-6">
            {/* Messages on Top */}
            <div className="space-y-3">
                {entries.length === 0 ? (
                    <p className="font-mono text-[13px] text-[var(--text)]/50 py-2">
                        No messages yet. Be the first to leave a note.
                    </p>
                ) : (
                    <ul className="space-y-3.5 list-none p-0 m-0">
                        {entries.map((entry) => {
                            const dateFormatted = formatDate(entry.createdAt)
                            return (
                                <li key={entry.id} className="space-y-0.5">
                                    <div className="flex items-baseline justify-between gap-3 font-mono text-[12px]">
                                        {entry.link ? (
                                            <a
                                                href={entry.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-[var(--text)] hover:underline hover:opacity-80 transition-opacity"
                                            >
                                                {entry.name}
                                            </a>
                                        ) : (
                                            <span className="font-medium text-[var(--text)]">
                                                {entry.name}
                                            </span>
                                        )}

                                        <time dateTime={entry.createdAt} className="text-[11px] text-[var(--text)]/40 whitespace-nowrap">
                                            {dateFormatted}
                                        </time>
                                    </div>

                                    <p className="text-[13px] leading-snug text-[var(--text)]/85 whitespace-pre-wrap break-words">
                                        {entry.message}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>

            {/* Link to Toggle Form / Form Container */}
            <div className="pt-2">
                {!showForm ? (
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => {
                                setShowForm(true)
                                setStatusMessage(null)
                            }}
                            className="font-mono text-[13px] text-[var(--text)]/60 hover:text-[var(--text)] underline underline-offset-4 decoration-dotted transition-colors cursor-pointer"
                        >
                            Add your comment
                        </button>
                        {statusMessage && (
                            <span
                                className={`font-mono text-[12px] ${
                                    statusMessage.type === 'error' ? 'text-red-500' : 'text-emerald-500'
                                }`}
                            >
                                {statusMessage.text}
                            </span>
                        )}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-2.5 pt-1 font-mono">
                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <input
                                id="guestbook-name"
                                type="text"
                                required
                                maxLength={60}
                                placeholder="name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="flex-1 bg-transparent border-b border-dotted border-neutral-400 dark:border-neutral-600 py-1 font-mono text-[12px] text-[var(--text)] placeholder:font-mono placeholder:text-[11px] placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-[var(--text)] transition-colors"
                            />
                            <input
                                id="guestbook-link"
                                type="text"
                                maxLength={120}
                                placeholder="link (optional)"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                className="flex-1 bg-transparent border-b border-dotted border-neutral-400 dark:border-neutral-600 py-1 font-mono text-[12px] text-[var(--text)] placeholder:font-mono placeholder:text-[11px] placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-[var(--text)] transition-colors"
                            />
                        </div>

                        <div>
                            <textarea
                                ref={textareaRef}
                                id="guestbook-message"
                                required
                                rows={1}
                                maxLength={500}
                                placeholder="message *"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-transparent border-b border-dotted border-neutral-400 dark:border-neutral-600 py-1 font-mono text-[12px] text-[var(--text)] placeholder:font-mono placeholder:text-[11px] placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-[var(--text)] transition-colors resize-none overflow-hidden"
                            />
                        </div>

                        <div className="flex items-center gap-3 pt-1 text-[11px]">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="underline decoration-dotted underline-offset-4 text-[var(--text)] hover:opacity-70 disabled:opacity-40 cursor-pointer"
                            >
                                {submitting ? 'posting...' : 'submit'}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm(false)
                                    setStatusMessage(null)
                                }}
                                className="text-[var(--text)]/50 hover:text-[var(--text)] transition-colors cursor-pointer"
                            >
                                cancel
                            </button>

                            {statusMessage && (
                                <span
                                    className={statusMessage.type === 'error' ? 'text-red-500' : 'text-emerald-500'}
                                >
                                    {statusMessage.text}
                                </span>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString)
        if (isNaN(date.getTime())) return dateString
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    } catch {
        return dateString
    }
}
