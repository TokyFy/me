'use client'

import React, { useState, useEffect, useRef } from 'react'
import ProfileAvatar from './profile-avatar'

interface HeroProfileSectionProps {
    src?: string
    alt?: string
    size?: number
}

const ORIGINAL_NAME = 'Toky fy'
const ORIGINAL_ROLE = 'Software developer'

// Deterministic default cipher to guarantee identical SSR and client hydration output
const STATIC_SCRAMBLED_NAME = 'Adxf rx'
const STATIC_SCRAMBLED_ROLE = 'Mvpskwxy hsdfoipw'

// Helper to generate a scrambled version of a text string preserving spaces and casing
function generateScrambledString(text: string): string {
    return text
        .split('')
        .map((c) => {
            if (c === ' ') return ' '
            const isUpper = c === c.toUpperCase()
            const letters = isUpper
                ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                : 'abcdefghijklmnopqrstuvwxyz'
            return letters[Math.floor(Math.random() * letters.length)]
        })
        .join('')
}

export default function HeroProfileSection({
    src = '/me.png',
    alt = 'Toky fy',
    size = 148,
}: HeroProfileSectionProps) {
    // By default, the hero is NOT revealed (scrambled text + pixelated photo)
    const [isRevealed, setIsRevealed] = useState(false)
    const [displayName, setDisplayName] = useState(STATIC_SCRAMBLED_NAME)
    const [displayRole, setDisplayRole] = useState(STATIC_SCRAMBLED_ROLE)
    
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const animRef = useRef<number | null>(null)

    // Clear timeout helper
    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }

    // Trigger reveal on user interaction (hover or touch)
    const handleTriggerReveal = () => {
        clearTimer()
        setIsRevealed(true)

        // After 3 seconds of reveal, re-scramble text and pixelate photo again
        timeoutRef.current = setTimeout(() => {
            setIsRevealed(false)
        }, 2000)
    }

    // When isRevealed changes: animate text to normal or scramble
    useEffect(() => {
        if (animRef.current) {
            cancelAnimationFrame(animRef.current)
        }

        const duration = 400 // ms
        const startTime = performance.now()

        const animate = (now: number) => {
            const elapsed = now - startTime
            const rawProgress = Math.min(elapsed / duration, 1)

            if (isRevealed) {
                // Decoding animation into original text
                const currentN = ORIGINAL_NAME.split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        if (rawProgress > (i + 1) / ORIGINAL_NAME.length) {
                            return char
                        }
                        const isUpper = char === char.toUpperCase()
                        const letters = isUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz'
                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join('')

                const currentR = ORIGINAL_ROLE.split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        if (rawProgress > (i + 1) / ORIGINAL_ROLE.length) {
                            return char
                        }
                        const isUpper = char === char.toUpperCase()
                        const letters = isUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz'
                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join('')

                setDisplayName(currentN)
                setDisplayRole(currentR)

                if (rawProgress < 1) {
                    animRef.current = requestAnimationFrame(animate)
                } else {
                    setDisplayName(ORIGINAL_NAME)
                    setDisplayRole(ORIGINAL_ROLE)
                }
            } else {
                // Encoding/scrambling animation back to random cipher
                const currentN = ORIGINAL_NAME.split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        if (rawProgress < i / ORIGINAL_NAME.length) {
                            return char
                        }
                        const isUpper = char === char.toUpperCase()
                        const letters = isUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz'
                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join('')

                const currentR = ORIGINAL_ROLE.split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        if (rawProgress < i / ORIGINAL_ROLE.length) {
                            return char
                        }
                        const isUpper = char === char.toUpperCase()
                        const letters = isUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz'
                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join('')

                setDisplayName(currentN)
                setDisplayRole(currentR)

                if (rawProgress < 1) {
                    animRef.current = requestAnimationFrame(animate)
                }
            }
        }

        animRef.current = requestAnimationFrame(animate)

        return () => {
            if (animRef.current) {
                cancelAnimationFrame(animRef.current)
            }
        }
    }, [isRevealed])

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            clearTimer()
        }
    }, [])

    return (
        <section
            id="hero-profile-section"
            className="group w-fit space-y-4 cursor-pointer select-none"
            onMouseEnter={handleTriggerReveal}
            onTouchStart={handleTriggerReveal}
        >
            <div className="w-fit">
                <ProfileAvatar
                    src={src}
                    alt={alt}
                    size={size}
                    isRevealed={isRevealed}
                />
            </div>
            <h1 className="font-mono text-[15px] font-medium text-[var(--text)] transition-colors">
                <span suppressHydrationWarning>{displayName}</span>{' '}
                <span className="text-[var(--accent)] font-mono">*</span>{' '}
                <span suppressHydrationWarning className="text-[var(--text)]/85">{displayRole}</span>
            </h1>
        </section>
    )
}
