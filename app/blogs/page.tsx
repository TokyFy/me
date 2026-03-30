import Link from 'next/link'
import { getAllPostsMetadata } from '@lib/posts'

export default async function BlogsIndexPage() {
    const posts = await getAllPostsMetadata()

    return (
        <section className="py-4 space-y-4">
            <ul className="space-y-2 list-[square] list-inside">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link className="accent-link" href={`/blogs/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
