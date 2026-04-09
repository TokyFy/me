import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
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
        title: `Blog: ${post.title}`,
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const post = await getPostMetadataBySlug(params.slug)

    if (!post) {
        notFound()
    }

    let Post

    try 
    {
        const postModule = (await import(`@posts/${post.fileName}`))
        Post = postModule.default
    } 
    catch
    {
        notFound()
    }

    return (
        <article className="space-y-6 py-4 max-w-[72ch]">
            <h1 className="text-2xl md:text-3xl leading-tight font-semibold">{post.title}</h1>
            <div className="space-y-4 text-base leading-7 [&_h1]:mt-7 [&_h1]:mb-3 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:mt-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-tight [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:mb-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-[var(--muted)] [&_pre]:p-4 [&_table]:mb-4 [&_figure]:mb-4 [&_a]:underline [&_a]:decoration-[var(--accent)] [&_a]:underline-offset-[0.15em] [&_img]:my-5 [&_img]:block [&_img]:h-auto [&_img]:max-w-full [&_video]:my-5 [&_video]:block [&_video]:h-auto [&_video]:max-w-full [&_audio]:my-5 [&_audio]:block [&_audio]:h-auto [&_audio]:max-w-full [&_iframe]:my-5 [&_iframe]:block [&_iframe]:h-auto [&_iframe]:max-w-full [&_code]:text-[0.95em]">
                <Post />
            </div>
        </article>
    )
}
