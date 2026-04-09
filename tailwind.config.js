/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['"Courier Mono"', 'monospace'],
                'pixel': ['var(--font-dotgothic16)', 'sans-serif'],
                'mono': ['monospace']
            }
        },
    },
    plugins: [],
}
