'use client';
import Image from 'next/image';
import { Code, Rocket } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

const features = [
  {
    icon: Code,
    title: 'Clean Work',
    description: 'We write clean, efficient, and scalable code that stands the test of time.',
  },
  {
    icon: Rocket,
    title: 'Modern Design',
    description: 'Our designs are modern, intuitive, and tailored to your brand\'s unique identity.',
  },
];

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(ellipse_at_right,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Slide direction="left" triggerOnce>
            <div className="overflow-hidden rounded-lg">
              <Fade triggerOnce>
              <Image
                src="https://picsum.photos/seed/whoarewe/800/600"
                alt="A person looking out over an airport tarmac."
                width={800}
                height={600}
                data-ai-hint="airport tarmac"
                className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              </Fade>
            </div>
          </Slide>
          <div className="space-y-8">
            <Slide direction="right" triggerOnce>
              <p className="text-sm font-bold tracking-widest text-cyan-400">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gradient">WHO</span> ARE WE?
              </h2>
              <p className="text-lg text-muted-foreground text-justify">
                Nexora AI is a collective of innovators, designers, and AI pioneers dedicated to pushing the boundaries of digital design. We merge cutting-edge technology with artistic vision to create products that are not just beautiful, but brilliantly smart.
              </p>
            </Slide>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Fade delay={index * 150} triggerOnce key={feature.title} cascade damping={0.1}>
                  <div className="flex flex-col gap-3">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground text-justify">{feature.description}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
