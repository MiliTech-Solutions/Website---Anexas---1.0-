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
import { Fade } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
  { href: '#about', label: 'About Us' },
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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleMenuClick = (e: React.MouseEvent) => {
    if (!isMenuOpen) {
      e.preventDefault();
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(true);
        setIsAnimating(false);
      }, 500); 
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 bg-background/90 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <ClientOnly>
          <Fade triggerOnce>
            <Logo />
          </Fade>
        </ClientOnly>
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <ClientOnly key={link.href}>
              <Fade triggerOnce delay={index * 100}>
                <div className="group relative">
                    <Link
                    href={link.href}
                    className="text-base font-headline text-muted-foreground transition-all duration-300 group-hover:text-foreground"
                    >
                    {link.label}
                    </Link>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_theme(colors.cyan.400)]"></div>
                </div>
              </Fade>
            </ClientOnly>
          ))}
        </nav>
        <div className="hidden md:block">
          <ClientOnly>
            <Fade triggerOnce delay={navLinks.length * 100}>
              <Button asChild className="bg-cyan-400 text-primary-foreground hover:bg-cyan-400/90">
                <Link href="#contact">Contact</Link>
              </Button>
            </Fade>
          </ClientOnly>
        </div>
        <div className="md:hidden">
            <ClientOnly>
              <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={cn(
                      "group transition-all duration-500 ease-in-out hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
                      isAnimating && 'animate-zoom-spin-in'
                    )}
                    onClick={handleMenuClick}
                  >
                    <Menu className="h-6 w-6 text-muted-foreground transition-all group-hover:text-cyan-400 group-hover:[filter:drop-shadow(0_0_3px_theme(colors.cyan.400))]" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] bg-background">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-8">
                      <Logo />
                    </div>
                    <nav className="flex flex-col gap-6">
                      {navLinks.map((link, index) => (
                        <ClientOnly key={link.href}>
                          <Fade triggerOnce delay={index * 100}>
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                className="text-lg font-headline text-foreground"
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          </Fade>
                        </ClientOnly>
                      ))}
                      <ClientOnly>
                       <Fade triggerOnce delay={navLinks.length * 100}>
                         <SheetClose asChild>
                            <Button asChild size="lg" className="mt-4 bg-cyan-400 text-primary-foreground hover:bg-cyan-400/90">
                                <Link href="#contact">Contact</Link>
                            </Button>
                         </SheetClose>
                       </Fade>
                      </ClientOnly>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </ClientOnly>
        </div>
      </div>
    </header>
  );
}
