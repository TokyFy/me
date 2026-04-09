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
        const postModule = (await import(`@posts/${params.slug}.mdx`))
        Post = postModule.default
    } 
    catch
    {
        notFound()
    }

    return (
        <article className="space-y-6 py-4 max-w-[72ch]">
            <h1 className="text-2xl md:text-3xl leading-tight font-semibold">{post.title}</h1>
            <div className="blog-content space-y-4 text-base leading-7">
                <Post />
            </div>
        </article>
    )
}
