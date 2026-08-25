import React from 'react'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import CodeBlock from './app/components/code-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children, ...props }) => (
            <h1
                className="font-mono text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-8 mb-4 tracking-tight"
                {...props}
            >
                {children}
            </h1>
        ),
        h2: ({ children, ...props }) => (
            <h2
                className="font-mono text-[17px] font-medium text-neutral-900 dark:text-neutral-100 mt-8 mb-3 pb-1.5 border-b border-neutral-300 dark:border-neutral-800 tracking-tight"
                {...props}
            >
                {children}
            </h2>
        ),
        h3: ({ children, ...props }) => (
            <h3
                className="font-mono text-[15px] font-medium text-neutral-900 dark:text-neutral-100 mt-6 mb-2 tracking-tight"
                {...props}
            >
                {children}
            </h3>
        ),
        h4: ({ children, ...props }) => (
            <h4
                className="font-mono text-[14px] font-medium text-neutral-800 dark:text-neutral-200 mt-5 mb-2"
                {...props}
            >
                {children}
            </h4>
        ),
        p: ({ children, ...props }) => (
            <p
                className="my-3 leading-relaxed text-neutral-800 dark:text-neutral-300 text-[15px]"
                {...props}
            >
                {children}
            </p>
        ),
        ul: ({ children, ...props }) => (
            <ul
                className="my-3 space-y-1.5 list-[square] list-inside pl-1 text-[15px] text-neutral-800 dark:text-neutral-300 leading-relaxed"
                {...props}
            >
                {children}
            </ul>
        ),
        ol: ({ children, ...props }) => (
            <ol
                className="my-3 space-y-1.5 list-decimal list-inside pl-1 text-[15px] text-neutral-800 dark:text-neutral-300 leading-relaxed"
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
                className="my-4 border-l-2 border-neutral-400 dark:border-neutral-600 pl-4 py-1.5 italic text-[14.5px] text-neutral-700 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/50"
                {...props}
            >
                {children}
            </blockquote>
        ),
        hr: (props) => (
            <hr
                className="my-8 border-0 border-t border-neutral-300 dark:border-neutral-800"
                {...props}
            />
        ),
        pre: (props) => {
            return <CodeBlock {...props} />
        },
        code: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLElement>) => {
            const isInline = !className.includes('language-') && typeof children === 'string'
            if (isInline) {
                return (
                    <code
                        className="font-mono text-[13px] px-1.5 py-0.5 mx-0.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700"
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
                        className="font-mono text-[14px] text-neutral-900 dark:text-neutral-100 underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 hover:opacity-80 transition-opacity"
                        {...props}
                    >
                        {children}
                    </a>
                )
            }
            return (
                <Link
                    href={href || '#'}
                    className="font-mono text-[14px] text-neutral-900 dark:text-neutral-100 underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 hover:opacity-80 transition-opacity"
                    {...props}
                >
                    {children}
                </Link>
            )
        },
        strong: ({ children, ...props }) => (
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100" {...props}>
                {children}
            </strong>
        ),
        em: ({ children, ...props }) => (
            <em className="italic text-neutral-800 dark:text-neutral-200" {...props}>
                {children}
            </em>
        ),
        del: ({ children, ...props }) => (
            <del className="line-through text-neutral-500 dark:text-neutral-500" {...props}>
                {children}
            </del>
        ),
        kbd: ({ children, ...props }) => (
            <kbd
                className="font-mono text-[12px] px-1.5 py-0.5 mx-0.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700"
                {...props}
            >
                {children}
            </kbd>
        ),
        table: ({ children, ...props }) => (
            <div className="my-5 overflow-x-auto border border-neutral-300 dark:border-neutral-800">
                <table className="w-full text-left text-[14px] border-collapse" {...props}>
                    {children}
                </table>
            </div>
        ),
        thead: ({ children, ...props }) => (
            <thead className="bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 font-mono border-b border-neutral-300 dark:border-neutral-800" {...props}>
                {children}
            </thead>
        ),
        tbody: ({ children, ...props }) => (
            <tbody className="divide-y divide-neutral-300/60 dark:divide-neutral-800/60 text-neutral-800 dark:text-neutral-300" {...props}>
                {children}
            </tbody>
        ),
        tr: ({ children, ...props }) => (
            <tr className="hover:bg-neutral-200/30 dark:hover:bg-neutral-800/30 transition-colors" {...props}>
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
