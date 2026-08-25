import Link from "next/link"
import { getAllPostsMetadata } from "@lib/posts"
import HeroProfileSection from "@components/hero-profile-section"

export default async function Home() {
    const posts = await getAllPostsMetadata()
    const latestPosts = posts.filter((post) => post.title !== "INTERNAL").slice(0, 3)

    return (
        <div className="space-y-6">
            <HeroProfileSection src="/me.png" alt="Toky fy" size={148} />
            <section className="space-y-4 text-[15px] leading-relaxed text-[var(--text)]/75">
                <p className="bio-paragraph">
                    Hey, I&apos;m a computer science student and developer from Madagascar.
                    I have a genuine passion for low-level systems, writing <span className="kw-highlight">C</span>, living inside <span className="kw-highlight">Vim</span>, and exploring the depths of <span className="kw-highlight">Linux</span>.
                    I love taking things apart and rebuilding them from first principles to truly understand how they work under the hood.
                </p>
                <p className="bio-paragraph">
                    I&apos;m inspired by the <span className="kw-highlight">UNIX philosophy</span> and the early pioneers of software—building tools that are simple, fast, and enduring.
                    Outside the terminal, I enjoy capturing <span className="kw-highlight">abstract photography</span>.
                </p>
            </section>
            <section className="space-y-2">
                <div className="font-mono uppercase underline decoration-wavy decoration-[var(--accent)]">Latest blogs</div>
                <ul className="space-y-2 list-[square] list-inside">
                    {latestPosts.map((post) => (
                        <li key={post.slug}>
                            <Link className="transition-opacity hover:opacity-80 hover:underline hover:decoration-wavy hover:decoration-[var(--accent)] underline-offset-2" href={`/blogs/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
