import Link from 'next/link'

export default async function Project() {

    return (
        <section>
            <ul className="space-y-2 list-[square] list-inside">
                <li>
                    <Link
                        href={"https://lirikisa.vercel.app/"}
                        target='_blank'
                        className='underline decoration-wavy decoration-transparent hover:decoration-black'
                    >
                        LIRIKISA - A little helper to find the lyrics of songs
                    </Link>
                </li>
            </ul>
        </section>
    )
}
