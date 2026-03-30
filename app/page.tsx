import Image from "next/image"
import Link from "next/link"

export default function Home() {
    const labelCellClass = "w-40 py-4 relative after:content-[':'] after:absolute after:right-0 after:w-8 after:font-bold uppercase"

    return (
        <div>
            <p className="accent-hover">heyyo , welcome to my little corner of the internet.</p><br />
            <p className="accent-hover">this is where i build, break, and archive things i find interesting — from random ideas to actual projects.</p><br />
            <p className="accent-hover">this place is constantly evolving (and probably always will be), so expect a few rough edges here and there.</p><br />
            <p className="accent-hover">got something to share, ask, or just want to say hi? feel free to reach out through the links below.</p><br />

            <div className="flex gap-4">
                <p>
                    <Link className="italic accent-link" href="https://github.com/TokyFy/">{"Github"}</Link>{" , "}
                    <Link className="italic accent-link" target="_blank" href="https://www.linkedin.com/in/tokyfy/">{"LinkedIn"}</Link>{" , "}
                    <Link className="italic accent-link" href="mailto:tokyfy@outlook.com">{"tokyfy@outlook.com"}</Link>
                </p>
            </div>
        </div >
    )
}
