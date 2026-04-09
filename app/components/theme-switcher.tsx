'use client'

import { useEffect, useState } from 'react'

const THEMES = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
]

const STORAGE_KEY = 'theme'

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = window.localStorage.getItem(STORAGE_KEY)
        const initialTheme = savedTheme && THEMES.some((item) => item.value === savedTheme) ? savedTheme : 'light'

        document.documentElement.dataset.theme = initialTheme
        setTheme(initialTheme)
    }, [])

    function onThemeChange(nextTheme: string) {
        setTheme(nextTheme)
        document.documentElement.dataset.theme = nextTheme
        window.localStorage.setItem(STORAGE_KEY, nextTheme)
    }

    function onCycleTheme() {
        onThemeChange(theme === 'dark' ? 'light' : 'dark')
    }

    const currentLabel = THEMES.find((item) => item.value === theme)?.label ?? 'Theme'

    return (
        <button
            type="button"
            className='tag-pill font-pixel w-fit px-1 transition-colors uppercase'
            onClick={onCycleTheme}
            aria-label={`Switch theme, current: ${currentLabel}`}
            title={`Theme: ${currentLabel}`}
        >
            * {currentLabel}
        </button>
    )
}
