import Image from "next/image"
import Link from "next/link"
import { getAllPostsMetadata } from "@lib/posts"

export default async function Home() {
    const posts = await getAllPostsMetadata()
    const latestPosts = posts.filter((post) => post.title !== "INTERNAL").slice(0, 3)

    return (
        <div className="space-y-4">
            <section className="space-y-6">
                <Image className="melt-image rounded-sm" width={148} height={148} alt="Toky fy" src={"/me.png"} />
                <div className="text-[15px]">
                    <p className="font-mono uppercase">Toky Fy ✦</p>
                    <p>Software engineer</p>
                </div>
            </section>
            <section className="space-y-6 text-[15px] text-[var(--text)]/70">
                <p>
                    Hello, I&apos;m a computer science student from Madagascar. I love [re]building things to understand them at their root.
                    In my spare time I enjoy taking abstract photos.
                </p>
                <p>
                    My goal is to live off my passion, or at least have the time to pursue it. I want to be like those pioneers in software
                    who built things like Linux and Vim.
                </p>
            </section>
            <section className="space-y-2">
                <div className="font-mono uppercase">Latest blogs</div>
                <ul className="space-y-2 list-[square] list-inside">
                    {latestPosts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2"
                                href={`/blogs/${post.slug}`}
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
