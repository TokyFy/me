import Link from "next/link"

export default function Home() {
    return (
        <div>
            <p className="hover:underline hover:decoration-wavy hover:decoration-[var(--accent)]">heyyo , welcome to my little corner of the internet.</p><br />
            <p className="hover:underline hover:decoration-wavy hover:decoration-[var(--accent)]">this is where i build, break, and archive things i find interesting — from random ideas to actual projects.</p><br />
            <p className="hover:underline hover:decoration-wavy hover:decoration-[var(--accent)]">this place is constantly evolving (and probably always will be), so expect a few rough edges here and there.</p><br />
            <p className="hover:underline hover:decoration-wavy hover:decoration-[var(--accent)]">got something to share, ask, or just want to say hi? feel free to reach out through the links below.</p><br />

            <div className="flex gap-4 font-mono uppercase">
                <p>
                    <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="https://github.com/TokyFy/">{"Github"}</Link>{" ✦ "}
                    <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" target="_blank" href="https://www.linkedin.com/in/tokyfy/">{"LinkedIn"}</Link>{" ✦ "}
                    <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="mailto:tokyfy@outlook.com">{"tokyfy@outlook.com"}</Link>
                </p>
            </div>
        </div >
    )
}
