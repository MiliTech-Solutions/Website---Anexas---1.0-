'use client';
import { PenTool, BarChart3, Award, ShoppingCart, Code, Briefcase } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

const services = [
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Engaging, SEO-optimized content that resonates with your audience and drives conversions.',
      position: 'justify-self-end text-right items-end',
      direction: 'left' as const
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to boost your online presence and reach.',
      position: 'justify-self-start text-left items-start',
      direction: 'right' as const
    },
    {
      icon: Award,
      title: 'Brand Identity',
      description: 'Creating unique brand identities that stand out in the market.',
      position: 'justify-self-end text-right items-end',
      direction: 'left' as const
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description: 'Building robust, scalable eCommerce solutions that drive sales.',
      position: 'justify-self-start text-left items-start',
      direction: 'right' as const
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom web and application development to bring your ideas to life.',
      position: 'justify-self-end text-right items-end',
      direction: 'left' as const
    },
    {
      icon: Briefcase,
      title: 'Management Services',
      description: 'Expert project management to ensure your projects are delivered on time.',
      position: 'justify-self-start text-left items-start',
      direction: 'right' as const
    },
  ];

const ServiceCard = ({ service, delay }: { service: typeof services[0], delay: number }) => (
    <Slide direction={service.direction} delay={delay} triggerOnce>
        <div className={`flex flex-col gap-4 max-w-sm ${service.position}`}>
          <Fade triggerOnce>
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
              className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: 'hsl(var(--cyan-400))'}} />
                  <stop offset="100%" style={{stopColor: 'hsl(var(--blue-500))'}} />
                </linearGradient>
              </defs>
              <service.icon stroke="url(#iconGradient)" />
            </svg>
            </Fade>
            <Fade triggerOnce delay={100} cascade damping={0.1}>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Fade>
        </div>
    </Slide>
)

const LogoAndRipples = () => (
  <div className="flex items-center justify-center relative my-8 md:my-0">
      <Fade triggerOnce zoom delay={300}>
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-28 h-56 rounded-full bg-card/50 border border-border/50 animate-ripple"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-20 h-40 rounded-full bg-card/70 border border-border/80 animate-ripple [animation-delay:0.5s]"></div>
        </div>
        <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center border border-border shadow-2xl">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradientFeatured" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'hsl(var(--cyan-400))'}} />
                        <stop offset="100%" style={{stopColor: 'hsl(var(--blue-500))'}} />
                    </linearGradient>
                </defs>
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logoGradientFeatured)" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 7L12 12L22 7" stroke="url(#logoGradientFeatured)" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M12 12V22" stroke="url(#logoGradientFeatured)" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        </div>
      </Fade>
  </div>
);

export default function FeaturedServices() {
  return (
    <section id="featured-services" className="py-20 md:py-32 relative">
       <div 
        className="absolute inset-0 -z-20 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,144,255,0.05),rgba(255,255,255,0))]">
      </div>
      <div className="container mx-auto pl-8 pr-4 md:px-6">
        <div className="relative">
        <div className="max-w-3xl mx-auto text-center mb-16 md:-left-24">
            <Fade triggerOnce cascade damping={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Expertise</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Comprehensive digital solutions tailored to elevate your business presence and drive growth.
              </p>
            </Fade>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-16 items-center">
          <ServiceCard service={services[0]} delay={0} />
          <ServiceCard service={services[1]} delay={100} />
          <ServiceCard service={services[2]} delay={200} />
          <LogoAndRipples />
          <ServiceCard service={services[3]} delay={300} />
          <ServiceCard service={services[4]} delay={400} />
          <ServiceCard service={services[5]} delay={500} />
        </div>

        {/* Mobile/Tablet View */}
        <div className="grid grid-cols-1 gap-y-16 items-center justify-items-center md:hidden">
          <div className="max-w-sm w-full flex justify-center"><ServiceCard service={services[0]} delay={0} /></div>
          <div className="max-w-sm w-full flex justify-center"><ServiceCard service={services[1]} delay={100} /></div>
          <div className="max-w-sm w-full flex justify-center"><ServiceCard service={services[2]} delay={200} /></div>
          <LogoAndRipples />
          <div className="max-w-sm w-full flex justify-center"><ServiceCard service={services[3]} delay={300} /></div>
          <div className="max-w-sm w-full flex justify-center"><ServiceCard service={services[4]} delay={400} /></div>
          <div className="max-w-sm w-full flex justify-center"><ServiceCard service={services[5]} delay={500} /></div>
        </div>
      </div>
    </section>
  );
}
