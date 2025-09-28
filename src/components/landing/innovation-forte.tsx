'use client';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';

export default function InnovationForte() {
  return (
    <section id="innovation" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 h-[45%] w-2/5 bg-[radial-gradient(ellipse_at_left,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      <div className="absolute bottom-0 right-0 h-1/2 w-2/5 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ClientOnly>
              <Slide direction="left" triggerOnce>
                <div>
                  <p className="text-sm font-bold tracking-widest text-cyan-400">OUR FORTE</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="tracking-wider">Innovation is</span> <span className="block text-gradient">Our Forte</span>
                  </h2>
                </div>
              </Slide>
            </ClientOnly>
            <ClientOnly>
              <Slide direction="up" triggerOnce>
                <p className="text-lg text-muted-foreground text-justify">
                  At Nexora AI, innovation isn't just a buzzword; it's our driving force. We are perpetually exploring the frontiers of artificial intelligence and design, merging advanced technologies like generative models and neural networks with intuitive user experiences. Our commitment to research and development means we deliver solutions that are not just current, but truly ahead of the curve, giving our clients a definitive competitive advantage.
                </p>
              </Slide>
            </ClientOnly>
          </div>
          <div>
            <ClientOnly>
              <Slide direction="right" triggerOnce>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://i.postimg.cc/cJLK3df8/5ce559177078cd244f889b1ca5d1ec53.jpg"
                    alt="Abstract image of a brain with network connections"
                    width={600}
                    height={750}
                    data-ai-hint="abstract brain"
                    className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </Slide>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  );
}
