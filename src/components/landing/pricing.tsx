import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const packages = [
  {
    name: 'Starter',
    price: '$999',
    priceColor: 'text-primary',
    description: 'Perfect for small businesses getting started online',
    features: [
      '5-page responsive website',
      'Mobile-optimized design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month free support',
    ],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: '$2499',
    priceColor: 'text-accent',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      '10-page responsive website',
      'Custom design & branding',
      'Advanced SEO optimization',
      'CMS integration',
      'E-commerce functionality',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$4999',
    priceColor: 'text-purple-400',
    description: 'Complete solution for large-scale operations',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'Advanced integrations',
      'Priority support',
      'Performance monitoring',
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Website <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Packages</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-justify">
            Choose the perfect package for your business needs. All packages include responsive design and modern functionality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`flex flex-col h-full bg-card border-border/50 transition-all duration-300 transform hover:-translate-y-2 ${pkg.isPopular ? 'border-accent' : 'hover:border-primary'}`}>
              <CardHeader className="relative">
                {pkg.isPopular && (
                  <Badge variant="secondary" className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground flex items-center gap-1">
                    <Star className="w-4 h-4"/>
                    Most Popular
                  </Badge>
                )}
                <div className="text-center pt-4">
                    <CardTitle className="text-2xl font-semibold mb-2">{pkg.name}</CardTitle>
                    <p className={`text-4xl font-bold ${pkg.priceColor}`}>{pkg.price}</p>
                    <p className="text-muted-foreground mt-2">{pkg.description}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
