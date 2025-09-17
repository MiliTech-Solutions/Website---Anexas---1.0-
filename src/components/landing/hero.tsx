import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center">
        <div 
            className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#374d60_1px,transparent_1px)] [background-size:32px_32px]">
        </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground">
            Crafting Digital Excellence
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground">
            We are a digital agency that builds beautiful, effective, and user-friendly websites and applications. Let's create something amazing together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                Get a Quote
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#work">See Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
