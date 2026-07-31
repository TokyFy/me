import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {

    return {
        ...components,
        h1: ({ children, ...props }) => (
            <h1 className="font-mono text-lg uppercase text-[var(--text)]" {...props}>
                {children}
            </h1>
        ),
        p: ({ children, ...props }) => (
            <p className="font-primary py-2 text-[var(--text)]/92" {...props}>
                {children}
            </p>
        ),
        ul: ({ children, ...props }) => (
            <ul className="list-[square] list-inside text-[var(--text)]/92" {...props}>
                {children}
            </ul>
        ),
        pre: ({ children, ...props }) => (
            <pre className='my-4 overflow-x-auto rounded-xl border border-[var(--muted-hover)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] p-4 text-[var(--text)]/95' {...props}>
                {children}
            </pre>
        ),
        a: ({ children, ...props }) => (
            <a target='_blank' className='font-mono underline decoration-wavy decoration-[var(--accent)] underline-offset-2' {...props}>
                {children}
            </a>
        ),
        strong: ({ children, ...props }) => (
            <strong className='font-semibold text-[var(--text)]' {...props}>
                {children}
            </strong>
        ),
    }
}
