'use client';
import { PenTool, BarChart3, Award, ShoppingCart, Code, Briefcase } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';


const services = [
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Engaging, SEO-optimized content that resonates with your audience and drives conversions.',
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to boost your online presence and reach.',
    },
    {
      icon: Award,
      title: 'Brand Identity',
      description: 'Creating unique brand identities that stand out in the market.',
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description: 'Building robust, scalable eCommerce solutions that drive sales.',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom web and application development to bring your ideas to life.',
    },
    {
      icon: Briefcase,
      title: 'Management Services',
      description: 'Expert project management to ensure your projects are delivered on time.',
    },
  ];

const ServiceCard = ({ service, alignment }: { service: typeof services[0], alignment: 'left' | 'right' }) => (
    <div className={`flex flex-col gap-4 max-w-sm ${alignment === 'left' ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center`}>
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
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
    </div>
)

const LogoAndRipples = () => (
    <div className="flex items-center justify-center relative my-8 md:my-0 h-full">
      <div className="relative w-36 h-72 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-[50px] bg-card/50 border border-cyan-400/20 animate-ripple delay-0"></div>
        <div className="absolute w-full h-full rounded-[50px] bg-card/50 border border-cyan-400/20 animate-ripple delay-1000"></div>
        <div className="absolute w-full h-full rounded-[50px] bg-card/50 border border-cyan-400/20 animate-ripple delay-2000"></div>
        <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center border border-border shadow-2xl z-10">
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
      </div>
    </div>
  );
  

export default function FeaturedServices() {
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3);

  return (
    <section id="featured-services" className="py-20 md:py-32 relative">
       <div 
        className="absolute inset-0 -z-20 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,144,255,0.05),rgba(255,255,255,0))]">
      </div>
      <div className="absolute top-[35%] right-0 h-full w-2/5 bg-[radial-gradient(ellipse_at_center_right,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-center">
            Comprehensive digital solutions tailored to elevate your business presence and drive growth.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-x-12 gap-y-16 items-center">
          <div className="flex flex-col gap-16">
            {leftServices.map((service) => (
              <ServiceCard key={service.title} service={service} alignment="right" />
            ))}
          </div>
          <LogoAndRipples />
          <div className="flex flex-col gap-16">
            {rightServices.map((service) => (
              <ServiceCard key={service.title} service={service} alignment="left" />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="grid grid-cols-1 gap-y-12 items-center justify-items-center md:hidden">
          {services.slice(0,3).map((service, index) => (
            <ServiceCard key={service.title} service={service} alignment="left" />
          ))}
          <LogoAndRipples />
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} alignment="left" />
          ))}
        </div>
      </div>
    </section>
  );
}
