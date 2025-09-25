'use client';
import { Briefcase, Heart, Clock, Headset } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import ClientOnly from '@/components/client-only';

const stats = [
  { icon: Briefcase, value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: Heart, value: 250, suffix: '+', label: 'Happy Clients' },
  { icon: Clock, value: 10, suffix: '+', label: 'Years of Experience' },
  { icon: Headset, value: 24, label: 'Support Available', isSpecial: true },
];

export default function ProjectStats() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <ClientOnly key={stat.label}>
              <Slide direction="up" delay={index * 100} triggerOnce>
                <div className="flex flex-col items-center">
                  <ClientOnly>
                    <Fade triggerOnce>
                      <stat.icon className="h-10 w-10 mb-4 text-accent" />
                    </Fade>
                  </ClientOnly>
                  <ClientOnly>
                    <Fade triggerOnce delay={100}>
                    <p className="text-4xl md:text-5xl font-extrabold text-foreground">
                      {stat.isSpecial ? (
                        <>
                          <CountUp end={24} duration={2} enableScrollSpy />/
                          <CountUp end={7} duration={2} delay={0.5} enableScrollSpy />
                        </>
                      ) : (
                        <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy />
                      )}
                    </p>
                    </Fade>
                  </ClientOnly>
                  <ClientOnly>
                    <Fade triggerOnce delay={200}>
                      <p className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
                    </Fade>
                  </ClientOnly>
                </div>
              </Slide>
            </ClientOnly>
          ))}
        </div>
      </div>
    </section>
  );
}
