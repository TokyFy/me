'use client'

import React, { useState, useRef } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    children?: React.ReactNode
    'data-language'?: string
}

export default function CodeBlock({ children, className = '', ...props }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)
    const preRef = useRef<HTMLPreElement | null>(null)

    const handleCopy = async () => {
        if (!preRef.current) return
        const text = preRef.current.innerText || ''
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Fallback copy if clipboard API is restricted
            const textArea = document.createElement('textarea')
            textArea.value = text
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="relative group my-5 rounded-lg border border-[var(--muted-hover)] bg-[var(--code-bg,#171717)] overflow-hidden shadow-sm">
            {/* Top Bar for Code Block: Minimal neutral status / copy button */}
            <div className="flex items-center justify-end px-3 py-1.5 border-b border-[var(--muted-hover)]/40 bg-[var(--code-header-bg,#141414)] text-[12px] font-mono text-[var(--text)]/60 select-none">
                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy code to clipboard"
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-[var(--text)]/70 hover:text-[var(--text)] hover:bg-[var(--muted)]/50 transition-colors"
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Pre Container */}
            <pre
                ref={preRef}
                className={`p-4 overflow-x-auto font-mono text-[13.5px] leading-relaxed text-[var(--code-text,#e5e5e5)] ${className}`}
                {...props}
            >
                {children}
            </pre>
        </div>
    )
}
