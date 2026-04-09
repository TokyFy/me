/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
import path from 'path'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/index',
                destination: '/',
                permanent: false,
            },
        ]
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@lib': path.resolve(process.cwd(), 'lib'),
            '@posts': path.resolve(process.cwd(), 'posts'),
        }

        return config
    },
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    },
})

export default withMDX(nextConfig)

