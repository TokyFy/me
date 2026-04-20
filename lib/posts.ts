import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export type PostMetadata = {
    slug: string
    fileName: string
    title: string
    date?: string
}

const POSTS_DIR = path.join(process.cwd(), 'posts')

function toSlug(fileName: string): string {
    return fileName
        .replace(/\.(mdx|md)$/i, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

function isPostFile(fileName: string): boolean {
    return fileName.endsWith('.mdx') || fileName.endsWith('.md')
}

export async function getAllPostsMetadata(): Promise<PostMetadata[]> {
    const files = await readdir(POSTS_DIR)

    const posts = await Promise.all(
        files
            .filter(isPostFile)
            .map(async (fileName) => {
                const slug = toSlug(fileName)
                const fullPath = path.join(POSTS_DIR, fileName)
                const source = await readFile(fullPath, 'utf8')
                const { data } = matter(source)


                return {
                    slug,
                    fileName,
                    title: typeof data.title === 'string' && data.title.trim() ? data.title : slug,
                    date: String(data.date)
                }
            })
    )

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostMetadataBySlug(slug: string): Promise<PostMetadata | null> {
    const posts = await getAllPostsMetadata()
    const normalizedSlug = toSlug(slug)
    return posts.find((post) => post.slug === normalizedSlug) ?? null
}
