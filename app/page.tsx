import Link from "next/link"

export default function Home() {
    return (
        <div>
            <p>Heyyo , welcome to my little corner of the internet.</p><br />
            <p>
                This is where i build, break, and archive things i find interesting — from random ideas to actual <Link className="underline decoration-wavy decoration-[var(--accent)]" href={"#"}>projects</Link>.
            </p><br />
            <p>This place is constantly evolving (and probably always will be), so expect a few rough edges here and there.
                <Link className="underline decoration-wavy decoration-[var(--accent)]" href={"#"}>[CHANGELOG]</Link>.
            </p><br />
            <p>Got something to share, ask, or just want to say hi? feel free to reach out through the links below or add something on the Guestbok</p><br />

            <div >
                <p>
                    <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="https://github.com/TokyFy/">{"Github"}</Link>{" ✦ "}
                    <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" target="_blank" href="https://www.linkedin.com/in/tokyfy/">{"LinkedIn"}</Link>{" ✦ "}
                    <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href="mailto:tokyfy@outlook.com">{"tokyfy@outlook.com"}</Link>
                </p>
            </div>
        </div >
    )
}
