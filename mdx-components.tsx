import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {

    return {
        ...components,
        h1: ({ children, ...props }) => (
            <h1 className="font-mono text-lg uppercase text-center" {...props}>
                {children}
            </h1>
        ),
        p: ({ children, ...props }) => (
            <h1 className="font-primary py-2" {...props}>
                {children}
            </h1>
        ),
        ul: ({ children, ...props }) => (
            <ul className="list-[square] list-inside" {...props}>
                {children}
            </ul>
        ),
        pre: ({ children, ...props }) => (
            <pre className='!bg-transparent border border-black my-4 p-2' {...props}>
                {children}
            </pre>
        ),
        a: ({ children, ...props }) => (
            <a className='underline decoration-wavy font-mono' {...props}>
                {children}
            </a>
        ),
        strong: ({ children, ...props }) => (
            <strong className='font-normal italic' {...props}>
                {children}
            </strong>
        ),
    }
}
