'use client';
import { Rocket, Smile, Code, Users } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';

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
    <section id="analytics" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <Fade triggerOnce cascade damping={0.1}>
            <p className="text-sm font-bold tracking-widest text-cyan-400 mb-2">OUR ANALYTICS</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              By the <span className="text-gradient">Numbers</span>
            </h2>
          </Fade>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Slide direction="up" delay={index * 100} triggerOnce key={stat.label}>
              <div className="flex flex-col items-center">
                <Fade triggerOnce>
                  <stat.icon className="w-10 h-10 mb-4 text-cyan-400" />
                </Fade>
                <p className="text-4xl md:text-5xl font-bold text-cyan-400">
                  <CountUp end={parseInt(stat.value)} duration={2.5} separator="," suffix={stat.suffix} enableScrollSpy />
                </p>
                <Fade triggerOnce delay={200}>
                 <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
                </Fade>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}
