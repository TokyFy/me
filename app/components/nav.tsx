'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
    { href: '/', label: 'INDEX' },
    { href: '/blogs', label: 'WRITING' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/text', label: 'TEXT' },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-wrap gap-4 font-mono text-[14px] text-[var(--text)]/70">
            {LINKS.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={isActive ? 'underline decoration-wavy decoration-[var(--accent)] underline-offset-2 hover:underline hover:decoration-wavy hover:decoration-[var(--accent)]' : 'hover:underline hover:decoration-wavy hover:decoration-[var(--accent)] underline-offset-2'}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </nav>
    )
}