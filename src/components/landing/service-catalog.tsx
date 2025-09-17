import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Feather, PenTool, ShoppingCart, TrendingUp, Cpu } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'eCommerce Solutions',
    description: 'Bespoke eCommerce platforms that drive sales and provide seamless user experiences.',
  },
  {
    icon: Feather,
    title: 'Content Writing',
    description: 'Engaging and SEO-optimized content that tells your story and captivates your audience.',
  },
  {
    icon: Cpu,
    title: 'Digital Products',
    description: 'Innovative digital products, from SaaS applications to mobile apps, built for scale.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom website development to establish a strong and effective online presence.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Improve your visibility on search engines and attract more organic traffic.',
  },
  {
    icon: PenTool,
    title: 'Branding & Design',
    description: 'Creating memorable brand identities and stunning visual designs that stand out.',
  },
];

export default function ServiceCatalog() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of digital services to help your business thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-1 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20">
              <Card className="h-full bg-card border-border transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 rounded-md bg-primary/10 text-accent">
                      <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
