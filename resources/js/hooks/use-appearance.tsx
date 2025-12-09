import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = () => {
    // Force light mode only
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
};

export function initializeTheme() {
    // Force light mode
    applyTheme();
    localStorage.setItem('appearance', 'light');
    setCookie('appearance', 'light');
}

export function useAppearance() {
    const [appearance] = useState<Appearance>('light');

    const updateAppearance = useCallback(() => {
        // Force light mode only - dark mode disabled
        localStorage.setItem('appearance', 'light');
        setCookie('appearance', 'light');
        applyTheme();
    }, []);

    useEffect(() => {
        // Force light mode on mount
        applyTheme();
    }, []);

    return { appearance, updateAppearance } as const;
}
