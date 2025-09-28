'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Zap, Award } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import ClientOnly from '@/components/client-only';

const features = [
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'Innovative approaches to complex challenges',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals with proven expertise',
  },
  {
    icon: Award,
    title: 'Results Driven',
    description: 'Focused on achieving measurable outcomes',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
  },
];

const stats = [
    { value: 98, suffix: '%', label: 'Client Satisfaction', color: 'bg-green-500' },
    { value: 250, suffix: '%', label: 'Average ROI', color: 'bg-blue-500' },
    { value: 45, label: 'Countries Served', color: 'bg-purple-500' },
    { value: 24, suffix: 'h', label: 'Response Time', color: 'bg-orange-500' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-background overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Slide direction="left" triggerOnce>
              <ClientOnly>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Innovation</span>
                  <span className="block">Meets Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground text-justify">
                  We're a team of passionate designers and developers who believe in the power of digital transformation. Our mission is to help businesses succeed through innovative design and cutting-edge technology.
                </p>
              </ClientOnly>
            </Slide>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Fade key={feature.title} delay={index * 150} triggerOnce cascade damping={0.1}>
                  <ClientOnly>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <feature.icon className="w-8 h-8 text-accent" />
                        </div>
                      <div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </ClientOnly>
                </Fade>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_rgba(0,128,128,0.3),_transparent_70%)] -z-10"></div>
            <Slide direction="right" triggerOnce>
              <ClientOnly>
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <Fade triggerOnce>
                      <ClientOnly>
                        <CardTitle className="text-2xl text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Our Impact</CardTitle>
                      </ClientOnly>
                    </Fade>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                      {stats.map((stat, index) => (
                        <Fade key={stat.label} delay={index * 150} triggerOnce cascade damping-={0.1}>
                          <ClientOnly>
                            <div className="text-center">
                              <p className="text-4xl font-bold text-foreground mb-2">
                                <ClientOnly>
                                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ''} enableScrollSpy />
                                </ClientOnly>
                              </p>
                              <p className="text-muted-foreground text-sm mb-3">{stat.label}</p>
                              <div className="w-full bg-border h-1 rounded-full">
                                <div className={`h-1 rounded-full ${stat.color}`} style={{width: '100%'}}></div>
                              </div>
                            </div>
                          </ClientOnly>
                        </Fade>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ClientOnly>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
}
