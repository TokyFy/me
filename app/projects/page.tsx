import Link from 'next/link'

export default async function Project() {

    return (
        <section className="space-y-4">
            <div className="font-mono text-[14px] uppercase text-[var(--text)]/75">Projects</div>
            <ul className="space-y-2 list-[square] list-inside text-[var(--text)]/80">
                <li>
                    <Link
                        href={"https://lirikisa.vercel.app/"}
                        target='_blank'
                        className='underline decoration-wavy decoration-[var(--accent)] underline-offset-2'
                    >
                        LIRIKISA - A little helper to find the lyrics of songs
                    </Link>
                </li>
            </ul>
        </section>
    )
}
