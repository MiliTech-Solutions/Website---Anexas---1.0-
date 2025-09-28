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
        const scrollPos = JSON.parse(json);
        if (scrollPos) {
            window.scrollTo(scrollPos.x, scrollPos.y);
        }
    }
}

export default function ScrollRestoration() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
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
