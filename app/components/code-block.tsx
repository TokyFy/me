'use client'

import React from 'react'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    children?: React.ReactNode
    'data-language'?: string
}

export default function CodeBlock({ children, className = '', ...props }: CodeBlockProps) {
    return (
        <div className="my-5 border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            {/* Code Pre Container with zero border-radius and neutral Tailwind styling */}
            <pre
                className={`p-4 overflow-x-auto font-mono text-[13.5px] leading-relaxed text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 ${className}`}
                {...props}
            >
                {children}
            </pre>
        </div>
    )
}
