'use client';
import { PenTool, BarChart3, Award, ShoppingCart, Code, Briefcase } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

const services = [
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Engaging, SEO-optimized content that resonates with your audience and drives conversions.',
      position: 'md:col-start-1 md:row-start-1 justify-self-end text-right items-end',
      direction: 'left' as const
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to boost your online presence and reach.',
      position: 'md:col-start-3 md:row-start-1 justify-self-start text-left items-start',
      direction: 'right' as const
    },
    {
      icon: Award,
      title: 'Brand Identity',
      description: 'Creating unique brand identities that stand out in the market.',
      position: 'md:col-start-1 md:row-start-2 justify-self-end text-right items-end',
      direction: 'left' as const
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description: 'Building robust, scalable eCommerce solutions that drive sales.',
      position: 'md:col-start-3 md:row-start-2 justify-self-start text-left items-start',
      direction: 'right' as const
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom web and application development to bring your ideas to life.',
      position: 'md:col-start-1 md:row-start-3 justify-self-end text-right items-end',
      direction: 'left' as const
    },
    {
      icon: Briefcase,
      title: 'Management Services',
      description: 'Expert project management to ensure your projects are delivered on time.',
      position: 'md:col-start-3 md:row-start-3 justify-self-start text-left items-start',
      direction: 'right' as const
    },
  ];

const ServiceCard = ({ service, delay }: { service: typeof services[0], delay: number }) => (
    <Slide direction={service.direction} delay={delay} triggerOnce>
        <div className={`flex flex-col gap-4 max-w-sm ${service.position}`}>
            <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center border border-border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: 'hsl(var(--cyan-400))'}} />
                      <stop offset="100%" style={{stopColor: 'hsl(var(--blue-500))'}} />
                    </linearGradient>
                  </defs>
                  <service.icon stroke="url(#iconGradient)" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-muted-foreground text-justify">{service.description}</p>
        </div>
    </Slide>
)

export default function FeaturedServices() {
  return (
    <section id="featured-services" className="py-20 md:py-32 relative">
       <div 
        className="absolute inset-0 -z-20 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,144,255,0.05),rgba(255,255,255,0))]">
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Fade triggerOnce cascade damping={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Expertise</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-justify">
              Comprehensive digital solutions tailored to elevate your business presence and drive growth.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:grid-rows-3 gap-x-12 gap-y-16 items-center">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} delay={Math.floor(index / 2) * 100} />
            ))}

            <div className="md:col-start-2 md:row-start-1 md:row-span-3 flex items-center justify-center relative my-8 md:my-0">
                <Fade triggerOnce zoom delay={300}>
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="w-64 h-48 rounded-full bg-card/50 border border-border/50 animate-ripple"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="w-28 h-28 rounded-full bg-card/70 border border-border/80 animate-ripple [animation-delay:0.5s]"></div>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center border border-border shadow-2xl">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                              <linearGradient id="logoGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" style={{stopColor: 'hsl(var(--cyan-400))'}} />
                                  <stop offset="100%" style={{stopColor: 'hsl(var(--blue-500))'}} />
                              </linearGradient>
                          </defs>
                          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logoGradientHero)" strokeWidth="1.5" strokeLinejoin="round"/>
                          <path d="M2 7L12 12L22 7" stroke="url(#logoGradientHero)" strokeWidth="1.5" strokeLinejoin="round"/>
                          <path d="M12 12V22" stroke="url(#logoGradientHero)" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                  </div>
                </Fade>
            </div>

        </div>
      </div>
    </section>
  );
}
