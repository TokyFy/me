'use client'

import React, { useEffect, useRef, useState } from 'react'
import ProfileAvatar from './profile-avatar'

export interface AnnotationItem {
    id: string
    text: string
    accentSymbol?: string
    position?: 'top' | 'middle' | 'bottom'
}

interface FloatingProfileProps {
    src?: string
    alt?: string
    size?: number
    items?: AnnotationItem[]
}

const DEFAULT_ITEMS: AnnotationItem[] = [
    {
        id: 'name',
        text: 'Toky fy',
        accentSymbol: '✦',
        position: 'top',
    },
    {
        id: 'role',
        text: 'software engineer',
        position: 'middle',
    },
    {
        id: 'discipline',
        text: 'creative developer',
        position: 'bottom',
    },
]

export default function FloatingThreeProfile({
    src = '/me.png',
    alt = 'Toky fy',
    size = 148,
    items = DEFAULT_ITEMS,
}: FloatingProfileProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const photoRef = useRef<HTMLDivElement>(null)
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const [time, setTime] = useState(0)

    // Animation clock for subtle floating physics
    useEffect(() => {
        let frameId: number
        const startTime = performance.now()

        const updateClock = (now: number) => {
            setTime((now - startTime) / 1000)
            frameId = requestAnimationFrame(updateClock)
        }

        frameId = requestAnimationFrame(updateClock)
        return () => cancelAnimationFrame(frameId)
    }, [])

    // Parallax mouse interaction
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMouseOffset({ x, y })
        if (!isHovered) setIsHovered(true)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setMouseOffset({ x: 0, y: 0 })
    }

    // Dynamic floating offsets for harmonic waves
    const getFloatOffset = (index: number) => {
        const freq = 1.3 + index * 0.35
        const phase = index * 1.6
        const floatX = Math.cos(time * freq * 0.8 + phase) * 3 + mouseOffset.x * 6
        const floatY = Math.sin(time * freq + phase) * 3.5 + mouseOffset.y * 6
        return { x: floatX, y: floatY }
    }

    const itemTop = items[0] || DEFAULT_ITEMS[0]
    const itemMid = items[1] || DEFAULT_ITEMS[1]
    const itemBot = items[2] || DEFAULT_ITEMS[2]

    const floatTop = getFloatOffset(0)
    const floatMid = getFloatOffset(1)
    const floatBot = getFloatOffset(2)

    return (
        <div
            ref={containerRef}
            id="interactive-floating-hero"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full max-w-[520px] h-[210px] select-none overflow-visible pt-2 pb-2 cursor-pointer"
        >
            {/* SVG Layer: Curved purple arrows pointing from right-side texts to the left photo (Shown ONLY on hover) */}
            <svg
                id="floating-arrows-svg"
                className={`absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible transition-opacity duration-300 ease-out ${
                    isHovered ? 'opacity-90' : 'opacity-0'
                }`}
                viewBox="0 0 520 210"
            >
                <defs>
                    <marker
                        id="arrowhead-purple"
                        markerWidth="7"
                        markerHeight="7"
                        refX="5.5"
                        refY="3.5"
                        orient="auto"
                    >
                        <polygon
                            points="0 0.8, 6.5 3.5, 0 6.2"
                            fill="var(--accent)"
                            className="transition-colors duration-300"
                        />
                    </marker>
                </defs>

                {/* 1. TOP ARROW: From name text arching down-left into the photo's top-right corner */}
                <path
                    d={`M ${185 + floatTop.x} ${38 + floatTop.y} 
                       C ${172 + floatTop.x * 0.5} ${32 + floatTop.y * 0.5}, 
                         162 30, 
                         150 35`}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead-purple)"
                />

                {/* 2. MIDDLE ARROW: From role text arching into the photo's right-middle edge */}
                <path
                    d={`M ${185 + floatMid.x} ${96 + floatMid.y} 
                       C ${174 + floatMid.x * 0.5} ${96 + floatMid.y * 0.5}, 
                         164 96, 
                         150 96`}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead-purple)"
                />

                {/* 3. BOTTOM ARROW: From discipline text arching up-left into the photo's lower-right edge */}
                <path
                    d={`M ${185 + floatBot.x} ${154 + floatBot.y} 
                       C ${172 + floatBot.x * 0.5} ${158 + floatBot.y * 0.5}, 
                         162 160, 
                         150 155`}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    markerEnd="url(#arrowhead-purple)"
                />
            </svg>

            {/* --- Photo Anchor (Flush Left, Square, Zero Border-Radius, Borderless) --- */}
            <div
                ref={photoRef}
                id="profile-avatar-left-anchor"
                className="absolute left-0 top-[20px] z-10"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `perspective(800px) rotateX(${-mouseOffset.y * 4}deg) rotateY(${mouseOffset.x * 4}deg)`,
                    transition: 'transform 0.15s ease-out',
                }}
            >
                <div className="overflow-hidden bg-transparent">
                    <ProfileAvatar src={src} alt={alt} size={size} />
                </div>
            </div>

            {/* --- 1. TOP TEXT (Single line: Toky fy ✦) --- */}
            <div
                id="floating-text-top"
                className={`absolute z-30 pointer-events-none whitespace-nowrap transition-opacity duration-300 ease-out ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    left: '190px',
                    top: '26px',
                    transform: `translate(${floatTop.x}px, ${floatTop.y}px)`,
                }}
            >
                <span className="font-mono text-[14px] sm:text-[15px] font-medium tracking-wide text-[var(--text)]">
                    {itemTop.text}{' '}
                    {itemTop.accentSymbol && (
                        <span className="text-[var(--accent)] font-mono">{itemTop.accentSymbol}</span>
                    )}
                </span>
            </div>

            {/* --- 2. MIDDLE TEXT (Single line: software engineer) --- */}
            <div
                id="floating-text-middle"
                className={`absolute z-30 pointer-events-none whitespace-nowrap transition-opacity duration-300 ease-out ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    left: '190px',
                    top: '86px',
                    transform: `translate(${floatMid.x}px, ${floatMid.y}px)`,
                }}
            >
                <span className="font-mono text-[14px] sm:text-[15px] font-medium tracking-wide text-[var(--text)]/85">
                    {itemMid.text}
                </span>
            </div>

            {/* --- 3. BOTTOM TEXT (Single line: creative developer) --- */}
            <div
                id="floating-text-bottom"
                className={`absolute z-30 pointer-events-none whitespace-nowrap transition-opacity duration-300 ease-out ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    left: '190px',
                    top: '144px',
                    transform: `translate(${floatBot.x}px, ${floatBot.y}px)`,
                }}
            >
                <span className="font-mono text-[14px] sm:text-[15px] font-medium tracking-wide text-[var(--text)]/85">
                    {itemBot.text}
                </span>
            </div>
        </div>
    )
}
