'use client';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

export default function InnovationForte() {
  return (
    <section id="innovation" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Slide direction="left" triggerOnce>
              <p className="text-sm font-bold tracking-widest text-cyan-400">OUR FORTE</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="tracking-wider">Innovation is</span> <span className="block text-gradient">Our Forte</span>
              </h2>
              <p className="text-lg text-muted-foreground text-justify">
                At Nexora AI, innovation isn't just a buzzword; it's our driving force. We are perpetually exploring the frontiers of artificial intelligence and design, merging advanced technologies like generative models and neural networks with intuitive user experiences. Our commitment to research and development means we deliver solutions that are not just current, but truly ahead of the curve, giving our clients a definitive competitive advantage.
              </p>
            </Slide>
          </div>
          <Slide direction="right" triggerOnce>
            <div className="overflow-hidden rounded-lg">
              <Fade triggerOnce>
              <Image
                src="https://picsum.photos/seed/innovation/600/750"
                alt="Looking up at a modern glass skyscraper"
                width={600}
                height={750}
                data-ai-hint="skyscraper architecture"
                className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              </Fade>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
