import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Search, Paintbrush } from 'lucide-react';

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
];

export default function ServiceCatalog() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Services We Can <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">Help</span> With
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border/50 h-full transition-all duration-300 transform hover:-translate-y-2 hover:border-primary">
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="p-3 rounded-md bg-primary/10 text-accent">
                    <service.icon className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
