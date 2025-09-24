'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollButtons() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-5 right-5 z-50 flex flex-col gap-2 transition-opacity duration-300",
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
      <Button
        size="icon"
        className="translucent-button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        className="translucent-button"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </div>
  );
}
