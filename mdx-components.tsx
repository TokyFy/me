import React from 'react'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import CodeBlock from './app/components/code-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children, ...props }) => (
            <h1
                className="font-mono text-xl font-semibold text-[var(--text)] mt-8 mb-4 tracking-tight"
                {...props}
            >
                {children}
            </h1>
        ),
        h2: ({ children, ...props }) => (
            <h2
                className="font-mono text-[17px] font-medium text-[var(--text)] mt-8 mb-3 pb-1.5 border-b border-[var(--muted-hover)]/70 tracking-tight"
                {...props}
            >
                {children}
            </h2>
        ),
        h3: ({ children, ...props }) => (
            <h3
                className="font-mono text-[15px] font-medium text-[var(--text)] mt-6 mb-2 tracking-tight"
                {...props}
            >
                {children}
            </h3>
        ),
        h4: ({ children, ...props }) => (
            <h4
                className="font-mono text-[14px] font-medium text-[var(--text)] mt-5 mb-2 text-[var(--text)]/90"
                {...props}
            >
                {children}
            </h4>
        ),
        p: ({ children, ...props }) => (
            <p
                className="my-3 leading-relaxed text-[var(--text)]/85 text-[15px]"
                {...props}
            >
                {children}
            </p>
        ),
        ul: ({ children, ...props }) => (
            <ul
                className="my-3 space-y-1.5 list-[square] list-inside pl-1 text-[15px] text-[var(--text)]/85 leading-relaxed"
                {...props}
            >
                {children}
            </ul>
        ),
        ol: ({ children, ...props }) => (
            <ol
                className="my-3 space-y-1.5 list-decimal list-inside pl-1 text-[15px] text-[var(--text)]/85 leading-relaxed"
                {...props}
            >
                {children}
            </ol>
        ),
        li: ({ children, ...props }) => (
            <li className="leading-relaxed" {...props}>
                {children}
            </li>
        ),
        blockquote: ({ children, ...props }) => (
            <blockquote
                className="my-4 border-l-2 border-[var(--accent)] pl-4 py-1.5 italic text-[14.5px] text-[var(--text)]/75 bg-[var(--muted)]/25 rounded-r-md"
                {...props}
            >
                {children}
            </blockquote>
        ),
        hr: (props) => (
            <hr
                className="my-8 border-0 border-t border-[var(--muted-hover)]"
                {...props}
            />
        ),
        pre: (props) => {
            return <CodeBlock {...props} />
        },
        code: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLElement>) => {
            // Check if this is an inline code tag (not inside a pre block with line data)
            const isInline = !className.includes('language-') && typeof children === 'string'
            if (isInline) {
                return (
                    <code
                        className="font-mono text-[13px] px-1.5 py-0.5 mx-0.5 rounded bg-[var(--code-inline-bg)] text-[var(--code-inline-text)] border border-[var(--muted-hover)]/80"
                        {...props}
                    >
                        {children}
                    </code>
                )
            }
            return (
                <code className={`font-mono text-[13.5px] ${className}`} {...props}>
                    {children}
                </code>
            )
        },
        a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
            const isExternal = href?.startsWith('http') || href?.startsWith('//')
            if (isExternal) {
                return (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[14px] text-[var(--text)] underline decoration-wavy decoration-[var(--accent)] underline-offset-2 hover:opacity-80 transition-opacity"
                        {...props}
                    >
                        {children}
                    </a>
                )
            }
            return (
                <Link
                    href={href || '#'}
                    className="font-mono text-[14px] text-[var(--text)] underline decoration-wavy decoration-[var(--accent)] underline-offset-2 hover:opacity-80 transition-opacity"
                    {...props}
                >
                    {children}
                </Link>
            )
        },
        strong: ({ children, ...props }) => (
            <strong className="font-semibold text-[var(--text)]" {...props}>
                {children}
            </strong>
        ),
        em: ({ children, ...props }) => (
            <em className="italic text-[var(--text)]/90" {...props}>
                {children}
            </em>
        ),
        del: ({ children, ...props }) => (
            <del className="line-through text-[var(--text)]/60" {...props}>
                {children}
            </del>
        ),
        kbd: ({ children, ...props }) => (
            <kbd
                className="font-mono text-[12px] px-1.5 py-0.5 mx-0.5 rounded bg-[var(--muted)] text-[var(--text)] border border-[var(--muted-hover)] shadow-xs"
                {...props}
            >
                {children}
            </kbd>
        ),
        table: ({ children, ...props }) => (
            <div className="my-5 overflow-x-auto rounded-md border border-[var(--muted-hover)]">
                <table className="w-full text-left text-[14px] border-collapse" {...props}>
                    {children}
                </table>
            </div>
        ),
        thead: ({ children, ...props }) => (
            <thead className="bg-[var(--muted)]/50 text-[var(--text)] font-mono border-b border-[var(--muted-hover)]" {...props}>
                {children}
            </thead>
        ),
        tbody: ({ children, ...props }) => (
            <tbody className="divide-y divide-[var(--muted-hover)]/60 text-[var(--text)]/85" {...props}>
                {children}
            </tbody>
        ),
        tr: ({ children, ...props }) => (
            <tr className="hover:bg-[var(--muted)]/20 transition-colors" {...props}>
                {children}
            </tr>
        ),
        th: ({ children, ...props }) => (
            <th className="px-3.5 py-2.5 font-medium" {...props}>
                {children}
            </th>
        ),
        td: ({ children, ...props }) => (
            <td className="px-3.5 py-2" {...props}>
                {children}
            </td>
        ),
    }
}
