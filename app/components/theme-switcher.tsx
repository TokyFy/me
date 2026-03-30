'use client'

import { useEffect, useState } from 'react'

const THEMES = [
    { value: 'paper', label: 'Paper' },
    { value: 'mint', label: 'Mint' },
    { value: 'sunset', label: 'Sunset' },
    { value: 'win95', label: 'Win95' },
    { value: 'mono', label: 'Black & White' },
    { value: 'hacker', label: 'Hacker' },
    { value: 'amber', label: 'Amber CRT' },
]

const STORAGE_KEY = 'theme'

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('paper')

    useEffect(() => {
        const savedTheme = window.localStorage.getItem(STORAGE_KEY)
        const initialTheme = savedTheme && THEMES.some((item) => item.value === savedTheme) ? savedTheme : 'paper'

        document.documentElement.dataset.theme = initialTheme
        setTheme(initialTheme)
    }, [])

    function onThemeChange(nextTheme: string) {
        setTheme(nextTheme)
        document.documentElement.dataset.theme = nextTheme
        window.localStorage.setItem(STORAGE_KEY, nextTheme)
    }

    function onCycleTheme() {
        const currentIndex = THEMES.findIndex((item) => item.value === theme)
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % THEMES.length
        onThemeChange(THEMES[nextIndex].value)
    }

    const currentLabel = THEMES.find((item) => item.value === theme)?.label ?? 'Theme'

    return (
        <button
            type="button"
            className='tag-pill w-fit px-1 transition-colors'
            onClick={onCycleTheme}
            aria-label={`Switch theme, current: ${currentLabel}`}
            title={`Theme: ${currentLabel}`}
        >
            * themes
        </button>
    )
}
