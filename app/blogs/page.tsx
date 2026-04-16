import Link from 'next/link'
import { getAllPostsMetadata } from '@lib/posts'

export default async function BlogsIndexPage() {
    const posts = await getAllPostsMetadata()

    return (
        <section>
            <ul className="space-y-2 list-[square] list-inside">
                {posts.map((post) => (
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
