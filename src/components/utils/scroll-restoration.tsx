'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function saveScrollPos(url: string) {
    const scrollPos = { x: window.scrollX, y: window.scrollY };
    sessionStorage.setItem(url, JSON.stringify(scrollPos));
}

function restoreScrollPos(url: string) {
    const json = sessionStorage.getItem(url);
    if (json) {
        try {
            const scrollPos = JSON.parse(json);
            if (scrollPos) {
                // Restore after a short delay to ensure page is rendered
                setTimeout(() => window.scrollTo(scrollPos.x, scrollPos.y), 0);
            }
        } catch (e) {
            console.error("Failed to parse scroll position:", e);
        }
    }
}

export default function ScrollRestoration() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // This is necessary to disable the default browser scroll restoration.
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        const url = pathname + searchParams.toString();
        restoreScrollPos(url);
        
        const onScroll = () => {
            saveScrollPos(url);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
        };

    }, [pathname, searchParams]);

    return null;
}
