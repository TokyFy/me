import Link from 'next/link'
import { getAllPostsMetadata } from '@lib/posts'

export default async function BlogsIndexPage() {
    const posts = await getAllPostsMetadata()
    const filteredPost = posts.filter((post) => post.title !== 'INTERNAL')

    return (
        <section className="space-y-4">
            <div className="font-mono text-[14px] uppercase tracking-[0.18em] text-[var(--text)]/75">Writing</div>
            <ul className="space-y-2 list-[square] list-inside text-[var(--text)]/80">
                {filteredPost.map((post) => (
                    <li key={post.slug}>
                        <Link className="underline decoration-wavy decoration-[var(--accent)] underline-offset-2" href={`/blogs/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
