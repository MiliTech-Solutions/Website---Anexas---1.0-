'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Fade, Slide } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';

const packages = [
  {
    name: 'Brand Essentials',
    price: '$75',
    priceColor: 'text-orange-400',
    description: 'Foundation package for new businesses',
    features: [
      'Logo design (3 concepts)',
      'Brand color palette',
      'Typography selection',
      'Business card design',
      'Letterhead template',
    ],
    isPopular: false,
  },
  {
    name: 'Brand Identity',
    price: '$150',
    priceColor: 'text-accent',
    description: 'Complete branding solution for established businesses',
    features: [
      'Logo design (5 concepts)',
      'Complete brand identity',
      'Brand guidelines document',
      'Stationery design suite',
      'Social media templates',
    ],
    isPopular: true,
  },
  {
    name: 'Brand Mastery',
    price: '$250',
    priceColor: 'text-purple-400',
    description: 'Premium branding for industry leaders',
    features: [
      'Unlimited logo concepts',
      'Full brand ecosystem',
      'Comprehensive guidelines',
      'Complete stationery suite',
      'Marketing collateral',
      'Social media templates',
    ],
    isPopular: false,
  },
];

export default function BrandingPackages() {
  return (
    <section id="branding-pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <ClientOnly>
            <Fade triggerOnce cascade damping={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Branding <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Packages</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-center">
                Build a powerful brand identity that resonates with your audience and sets you apart from the competition.
              </p>
            </Fade>
          </ClientOnly>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <ClientOnly key={pkg.name}>
              <Slide direction="up" delay={index * 100} triggerOnce>
                <Card className={`flex flex-col h-full bg-card border-border/50 transition-all duration-300 transform hover:-translate-y-2 ${pkg.isPopular ? 'border-accent' : 'hover:border-primary'}`}>
                  <CardHeader className="relative">
                    {pkg.isPopular && (
                      <ClientOnly>
                        <Fade triggerOnce>
                          <Badge variant="secondary" className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground flex items-center gap-1">
                            <Star className="w-4 h-4"/>
                            Recommended
                          </Badge>
                        </Fade>
                      </ClientOnly>
                    )}
                    <ClientOnly>
                      <Fade triggerOnce cascade damping={0.1}>
                        <div className="text-center pt-4">
                            <CardTitle className="text-2xl font-semibold mb-2">{pkg.name}</CardTitle>
                            <p className={`text-4xl font-bold ${pkg.priceColor}`}>{pkg.price}</p>
                            <p className="text-muted-foreground mt-2">{pkg.description}</p>
                        </div>
                      </Fade>
                    </ClientOnly>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mt-6">
                      {pkg.features.map((feature, fIndex) => (
                        <ClientOnly key={feature}>
                          <Fade delay={fIndex * 50} triggerOnce cascade damping={0.1}>
                            <li className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                <Check className="w-4 h-4 text-accent" />
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          </Fade>
                        </ClientOnly>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Slide>
            </ClientOnly>
          ))}
        </div>
      </div>
    </section>
  );
}
