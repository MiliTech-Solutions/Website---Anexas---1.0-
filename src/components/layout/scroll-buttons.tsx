'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<'top' | 'bottom' | null>(null);

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

  const handleMouseDown = (button: 'top' | 'bottom') => {
    setActiveButton(button);
  };

  const handleMouseUp = () => {
    setActiveButton(null);
  };


  return (
    <div className={cn(
      "fixed bottom-5 right-5 z-50 flex flex-col gap-2 transition-opacity duration-300",
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
      <Button
        size="icon"
        className="translucent-button"
        onClick={scrollToTop}
        onMouseDown={() => handleMouseDown('top')}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        aria-label="Scroll to top"
      >
        <ArrowUp className={cn("h-5 w-5 transition-all", activeButton === 'top' && "text-cyan-400 [filter:drop-shadow(0_0_3px_theme(colors.cyan.400))]")} />
      </Button>
      <Button
        size="icon"
        className="translucent-button"
        onClick={scrollToBottom}
        onMouseDown={() => handleMouseDown('bottom')}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        aria-label="Scroll to bottom"
      >
        <ArrowDown className={cn("h-5 w-5 transition-all", activeButton === 'bottom' && "text-cyan-400 [filter:drop-shadow(0_0_3px_theme(colors.cyan.400))]")} />
      </Button>
    </div>
  );
}
