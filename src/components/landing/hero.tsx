import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import HeroServices from './hero-services';
import SocialLinks from './social-links';

const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '150+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col py-12">
        <div 
            className="absolute top-0 left-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]">
        </div>
        <div 
            className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,144,255,0.1),rgba(255,255,255,0))]">
        </div>
      <div className="container mx-auto px-4 md:px-6 h-full flex-grow flex flex-col">
        <div className="grid md:grid-cols-12 gap-8 items-center h-full">
          
          <div className="md:col-span-2">
            <HeroServices />
          </div>

          <div className="md:col-span-8 text-center">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Digital</span> Agency
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground text-justify">
              We create stunning digital experiences that drive growth and elevate your brand in the digital landscape.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-primary-foreground hover:bg-cyan-400 active:scale-90 transition-all duration-150">
                <Link href="#contact">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-cyan-400 hover:text-primary-foreground hover:border-cyan-400">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1 md:col-start-12">
             <SocialLinks />
          </div>

        </div>
      </div>

        <div className="mt-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                {stats.map((stat) => (
                    <div key={stat.label}>
                    <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="relative mt-12">
              <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2">
                  <div className="w-6 h-12 rounded-full flex items-center justify-center p-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 animate-scroll-indicator shadow-[0_0_15px_theme(colors.cyan.400)]">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-scroll-indicator shadow-[0_0_15px_theme(colors.cyan.400)]"></div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  );
}
