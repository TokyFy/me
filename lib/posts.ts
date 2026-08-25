import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export type PostMetadata = {
    slug: string
    fileName: string
    title: string
    date?: string
    formattedDate?: string
    description?: string
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

                let rawDate = ''
                let formattedDate = ''

                if (data.date) {
                    try {
                        const parsed = new Date(data.date)
                        if (!isNaN(parsed.getTime())) {
                            rawDate = parsed.toISOString().split('T')[0]
                            formattedDate = parsed.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })
                        } else {
                            rawDate = String(data.date)
                            formattedDate = String(data.date)
                        }
                    } catch {
                        rawDate = String(data.date)
                        formattedDate = String(data.date)
                    }
                }

                return {
                    slug,
                    fileName,
                    title: typeof data.title === 'string' && data.title.trim() ? data.title : slug,
                    date: rawDate,
                    formattedDate,
                    description: typeof data.description === 'string' ? data.description : undefined,
                }
            })
    )

    return posts.sort((a, b) => {
        const timeA = a.date ? new Date(a.date).getTime() : 0
        const timeB = b.date ? new Date(b.date).getTime() : 0
        return timeB - timeA
    })
}

export async function getPostMetadataBySlug(slug: string): Promise<PostMetadata | null> {
    const posts = await getAllPostsMetadata()
    const normalizedSlug = toSlug(slug)
    return posts.find((post) => post.slug === normalizedSlug) ?? null
}
