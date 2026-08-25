import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getAllPostsMetadata, getPostMetadataBySlug } from '@lib/posts'

type PageProps = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = await getAllPostsMetadata()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = await getPostMetadataBySlug(params.slug)

    if (!post) {
        return {
            title: 'Blog post not found',
        }
    }

    return {
        title: `${post.title} — Toky fy`,
        description: post.description || `Read ${post.title} on Toky fy's blog.`,
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const post = await getPostMetadataBySlug(params.slug)

    if (!post) {
        notFound()
    }

    let Post

    try {
        const postModule = await import(`@posts/${post.fileName}`)
        Post = postModule.default
    } catch {
        notFound()
    }

    return (
        <article className="space-y-6">
            {/* Top Navigation */}
            <div className="flex items-center justify-between pt-1 pb-2 border-b border-[var(--muted-hover)]/40 text-[13px] font-mono">
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-1.5 text-[var(--text)]/70 hover:text-[var(--text)] transition-colors hover:underline hover:decoration-wavy hover:decoration-[var(--accent)] underline-offset-2"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>back to blogs</span>
                </Link>
                {post.formattedDate && (
                    <time dateTime={post.date} className="text-[var(--text)]/50">
                        {post.formattedDate}
                    </time>
                )}
            </div>

            {/* Post MDX Content */}
            <div className="space-y-4 text-[var(--text)]/90">
                <Post />
            </div>

            {/* Bottom Footer Navigation */}
            <div className="pt-8 mt-12 border-t border-[var(--muted-hover)]/60 text-[13px] font-mono">
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-1.5 text-[var(--text)]/70 hover:text-[var(--text)] transition-colors hover:underline hover:decoration-wavy hover:decoration-[var(--accent)] underline-offset-2"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>back to all blogs</span>
                </Link>
            </div>
        </article>
    )
}
