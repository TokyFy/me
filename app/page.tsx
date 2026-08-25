import Link from "next/link"
import { getAllPostsMetadata } from "@lib/posts"
import ProfileAvatar from "@components/profile-avatar"

export default async function Home() {
    const posts = await getAllPostsMetadata()
    const latestPosts = posts.filter((post) => post.title !== "INTERNAL").slice(0, 3)

    return (
        <div className="space-y-4">
            <section className="space-y-6">
                <ProfileAvatar src="/me.png" alt="Toky fy" size={148} />
                <div className="text-[15px]">
                    <p className="font-mono uppercase">Toky Fy ✦</p>
                    <p>Software engineer</p>
                </div>
            </section>
            <section className="space-y-4 text-[15px] leading-relaxed text-[var(--text)]/75">
                <p>
                    Hey, I&apos;m a computer science student and developer from Madagascar.
                    I have a genuine passion for low-level systems, writing C, living inside Vim, and exploring the depths of Linux.
                    I love taking things apart and rebuilding them from first principles to truly understand how they work under the hood.
                </p>
                <p>
                    I&apos;m inspired by the UNIX philosophy and the early pioneers of software—building tools that are simple, fast, and enduring.
                    Outside the terminal, I enjoy capturing abstract photography.
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
