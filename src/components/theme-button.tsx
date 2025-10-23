"use client"

import { useTheme } from "next-themes";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <button className="text-white" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme}</button>
        </>
    );
}