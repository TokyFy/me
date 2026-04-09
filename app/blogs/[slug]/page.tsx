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
        <article>
            <h1>{post.title}</h1>
             <Post />
        </article>
    )
}
