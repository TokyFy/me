import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="py-4 space-y-4">
            <h1 className="font-semibold">404 / page not found</h1>
            <p className="hover:underline decoration-wavy decoration-[blue]">
                looks like this page drifted away from my little corner of the internet.
            </p>
            <p className="hover:underline decoration-wavy decoration-[blue]">
                you can head back to index or browse available blog posts instead.
            </p>
        </section>
    )
}
