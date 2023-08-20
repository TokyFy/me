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
        'grotesk' : ['Schibsted Grotesk' , 'system-ui'],
        'jost': ['Jost' , 'system-ui']
      }
    },
  },
  plugins: [],
}
