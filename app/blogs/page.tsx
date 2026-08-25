import Link from 'next/link'
import { getAllPostsMetadata } from '@lib/posts'

export const metadata = {
    title: 'Blogs — Toky fy',
    description: 'Thoughts, guides, and explorations in low-level programming and software engineering.',
}

export default async function BlogsIndexPage() {
    const posts = await getAllPostsMetadata()
    const filteredPosts = posts.filter((post) => post.title !== 'INTERNAL')

    return (
        <section className="space-y-6">
            <div className="space-y-1">
                <h1 className="font-mono text-base font-semibold text-[var(--text)] uppercase tracking-wide">
                    Blogs
                </h1>
                <p className="text-[14px] text-[var(--text)]/60">
                    Thoughts, guides, and technical notes on systems and programming.
                </p>
            </div>

            <ul className="space-y-3 list-none">
                {filteredPosts.map((post) => (
                    <li key={post.slug} className="flex items-baseline justify-between gap-4 group">
                        <div className="flex items-center gap-2">
                            <span className="text-[var(--accent)] text-xs font-mono select-none">▪</span>
                            <Link
                                className="font-mono text-[14.5px] text-[var(--text)]/90 transition-colors group-hover:text-[var(--text)] group-hover:underline group-hover:decoration-wavy group-hover:decoration-[var(--accent)] underline-offset-2"
                                href={`/blogs/${post.slug}`}
                            >
                                {post.title}
                            </Link>
                        </div>
                        {post.formattedDate && (
                            <span className="font-mono text-[12px] text-[var(--text)]/40 whitespace-nowrap select-none">
                                {post.formattedDate}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}
