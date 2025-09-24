import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Search, Paintbrush, Monitor, Smartphone, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Logo & Branding',
    description: 'Creating unique brand identities that resonate with your target audience and stand out in the market.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust, scalable web applications using cutting-edge technologies and best practices.',
  },
  {
    icon: Search,
    title: 'Online Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Crafting beautiful, user-friendly websites that deliver exceptional user experiences across all devices.',
  },
  {
    icon: Smartphone,
    title: 'App Design',
    description: 'Designing intuitive mobile applications that engage users and drive business growth.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transforming your data into actionable insights to make informed business decisions.',
  },
];

export default function ServiceCatalog() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Services We Can <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Help With</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-justify">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border/50 h-full transition-all duration-300 transform hover:-translate-y-2 hover:border-primary rounded-xl">
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="p-3 rounded-md bg-primary/10">
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
                    className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
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
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-justify">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
