'use client';
import { Rocket, Smile, Code, Users } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import ClientOnly from '@/components/client-only';

const stats = [
  {
    icon: Rocket,
    value: '150',
    suffix: '+',
    label: 'PROJECTS LAUNCHED',
  },
  {
    icon: Smile,
    value: '100',
    suffix: '+',
    label: 'HAPPY CLIENTS',
  },
  {
    icon: Code,
    value: '500000',
    label: 'LINES OF CODE',
  },
  {
    icon: Users,
    value: '23',
    label: 'TEAM MEMBERS',
  },
];

export default function ByTheNumbers() {
  return (
    <section id="analytics" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-2/5 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      <div className="absolute bottom-0 right-0 h-full w-2/5 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <ClientOnly>
            <Fade triggerOnce cascade damping={0.1}>
              <p className="text-sm font-bold tracking-widest text-cyan-400 mb-2">OUR ANALYTICS</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                By the <span className="text-gradient">Numbers</span>
              </h2>
            </Fade>
          </ClientOnly>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <ClientOnly key={stat.label}>
              <Slide direction="up" delay={index * 100} triggerOnce>
                <div className="flex flex-col items-center">
                  <ClientOnly>
                    <Fade triggerOnce>
                      <stat.icon className="w-10 h-10 mb-4 text-cyan-400" />
                    </Fade>
                  </ClientOnly>
                  <ClientOnly>
                    <Fade triggerOnce delay={100}>
                    <p className="text-4xl md:text-5xl font-bold text-cyan-400">
                      <ClientOnly>
                        <CountUp end={parseInt(stat.value)} duration={2.5} separator="," suffix={stat.suffix} enableScrollSpy />
                      </ClientOnly>
                    </p>
                    </Fade>
                  </ClientOnly>
                  <ClientOnly>
                    <Fade triggerOnce delay={200}>
                     <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
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
