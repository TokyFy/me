import Link from 'next/link'
import { getAllPostsMetadata } from '@lib/posts'

export default async function BlogsIndexPage() {
    const posts = await getAllPostsMetadata()
    const filteredPost = posts.filter((post) => post.title !== 'INTERNAL')

    return (
        <section className="space-y-4">
            <ul className="space-y-2 list-[square] list-inside text-[var(--text)]/80">
                {filteredPost.map((post) => (
                    <li key={post.slug}>
                        <Link className="transition-opacity hover:underline hover:decoration-wavy hover:decoration-[var(--accent)] underline-offset-2" href={`/blogs/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
