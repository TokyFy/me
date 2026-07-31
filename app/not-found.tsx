import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="space-y-4 rounded-2xl border border-[var(--muted-hover)]/70 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] p-5">
            <h1 className="font-mono text-[14px] uppercase tracking-[0.18em]">404 / page not found</h1>
            <p className="text-[var(--text)]/75">
                looks like this page drifted away from my little corner of the internet.
            </p>
            <p className="text-[var(--text)]/75">
                you can head back to index or browse available blog posts instead.
            </p>
            <p className="font-mono uppercase text-[14px] tracking-[0.18em]">
                <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="/">Index</Link>
            </p>
        </section>
    )
}
