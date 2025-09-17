import { PenTool, BarChart3, Award, ShoppingCart, Code, Briefcase } from 'lucide-react';

const services = [
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Engaging, SEO-optimized content that resonates with your audience and drives conversions.',
      position: 'md:col-start-1 md:row-start-1 justify-self-end text-right items-end',
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to boost your online presence and reach.',
      position: 'md:col-start-3 md:row-start-1 justify-self-start text-left items-start',
    },
    {
      icon: Award,
      title: 'Brand Identity',
      description: 'Creating unique brand identities that stand out in the market.',
      position: 'md:col-start-1 md:row-start-2 justify-self-end text-right items-end',
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description: 'Building robust, scalable eCommerce solutions that drive sales.',
      position: 'md:col-start-3 md:row-start-2 justify-self-start text-left items-start',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom web and application development to bring your ideas to life.',
      position: 'md:col-start-1 md:row-start-3 justify-self-end text-right items-end',
    },
    {
      icon: Briefcase,
      title: 'Management Services',
      description: 'Expert project management to ensure your projects are delivered on time.',
      position: 'md:col-start-3 md:row-start-3 justify-self-start text-left items-start',
    },
  ];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <div className={`flex flex-col gap-4 max-w-sm ${service.position}`}>
        <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center border border-border">
            <service.icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
    </div>
)

export default function FeaturedServices() {
  return (
    <section id="featured-services" className="py-20 md:py-32 relative">
       <div 
        className="absolute inset-0 -z-20 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,144,255,0.05),rgba(255,255,255,0))]">
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Services We Can <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">Help</span> With
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Comprehensive digital solutions tailored to elevate your business presence and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:grid-rows-3 gap-x-12 gap-y-16 items-center">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}

            <div className="md:col-start-2 md:row-start-1 md:row-span-3 flex items-center justify-center relative my-8 md:my-0">
                <div className="absolute w-72 h-72 rounded-full bg-card/50 border border-border/50 -z-10"></div>
                <div className="absolute w-56 h-56 rounded-full bg-card/70 border border-border/80 -z-10"></div>
                <div className="w-48 h-48 rounded-full bg-card flex items-center justify-center border border-border shadow-2xl">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="logoGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor: 'hsl(var(--accent))'}} />
                                <stop offset="100%" style={{stopColor: 'hsl(var(--primary))'}} />
                            </linearGradient>
                        </defs>
                        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logoGradientHero)" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M2 7L12 12L22 7" stroke="url(#logoGradientHero)" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M12 12V22" stroke="url(#logoGradientHero)" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
