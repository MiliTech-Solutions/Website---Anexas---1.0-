"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
];

const Logo = () => (
    <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-foreground">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--cyan-400))'}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--blue-500))'}} />
                </linearGradient>
            </defs>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logoGradient)" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="url(#logoGradient)" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 12V22" stroke="url(#logoGradient)" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Anexas</span>
    </Link>
  );


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 bg-background/90 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-cyan-400 text-primary-foreground hover:bg-cyan-400/90">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
        <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="transition-all duration-300 ease-in-out hover:bg-transparent hover:scale-125 hover:rotate-90 hover:text-cyan-400 focus:outline-none">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] bg-background">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-8">
                    <Logo />
                    
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                     <SheetClose asChild>
                        <Button asChild size="lg" className="mt-4 bg-cyan-400 text-primary-foreground hover:bg-cyan-400/90">
                            <Link href="#contact">Contact</Link>
                        </Button>
                     </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
