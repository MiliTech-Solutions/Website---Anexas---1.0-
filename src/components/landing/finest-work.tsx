'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Fade, Slide } from 'react-awesome-reveal';
import { useIsMobile } from '@/hooks/use-mobile';

const finestWork = [
  {
    title: 'Corporate Analytics Dashboard',
    category: 'Business Intelligence',
    image: {
      src: 'https://picsum.photos/seed/work1/600/400',
      alt: 'A corporate analytics dashboard showing charts and graphs.',
      hint: 'analytics dashboard'
    }
  },
  {
    title: 'Financial Services Platform',
    category: 'Fintech',
    image: {
      src: 'https://picsum.photos/seed/work2/600/400',
      alt: 'A desk with financial documents, a calculator, and a smartphone.',
      hint: 'financial platform'
    }
  },
  {
    title: 'Enterprise Resource',
    category: 'Business Solutions',
    image: {
      src: 'https://picsum.photos/seed/work3/600/400',
      alt: 'Two people collaborating in a modern office with laptops.',
      hint: 'enterprise solution'
    }
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: {
      src: 'https://picsum.photos/seed/work4/600/400',
      alt: 'A smartphone displaying a mobile banking application interface.',
      hint: 'mobile banking'
    }
  },
  {
    title: 'E-commerce Store for Fashion',
    category: 'E-commerce',
    image: {
      src: 'https://picsum.photos/seed/work5/600/400',
      alt: 'A stylish layout of clothing and accessories for an online store.',
      hint: 'fashion ecommerce'
    }
  },
  {
    title: 'SaaS Platform for HR',
    category: 'SaaS',
    image: {
      src: 'https://picsum.photos/seed/work6/600/400',
      alt: 'An HR management software dashboard on a laptop screen.',
      hint: 'hr saas'
    }
  },
    {
    title: 'Healthcare System',
    category: 'Healthcare',
    image: {
      src: 'https://picsum.photos/seed/work7/600/400',
      alt: 'A doctor reviewing patient data on a tablet.',
      hint: 'healthcare system'
    }
  },
  {
    title: 'Real Estate Portal',
    category: 'Real Estate',
    image: {
      src: 'https://picsum.photos/seed/work8/600/400',
      alt: 'A modern house with a for sale sign.',
      hint: 'real estate'
    }
  },
  {
    title: 'Travel & Booking Website',
    category: 'Travel',
    image: {
      src: 'https://picsum.photos/seed/work9/600/400',
      alt: 'A scenic travel destination with booking options on a screen.',
      hint: 'travel website'
    }
  }
]

export default function FinestWork() {
  const isMobile = useIsMobile();

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Fade triggerOnce cascade damping={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Some of Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Finest Work</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {finestWork.map((work, index) => {
            const AnimationWrapper = isMobile ? Slide : Fade;
            
            const getMobileAnimationDirection = () => {
              const patternIndex = index % 4;
              if (patternIndex === 0) return 'left' as const;
              if (patternIndex === 1) return 'right' as const;
              if (patternIndex === 2) return 'up' as const;
              return 'down' as const;
            };

            const animationProps = isMobile 
              ? { direction: getMobileAnimationDirection(), delay: 0, triggerOnce: true }
              : { delay: index * 100, triggerOnce: true, cascade: true, damping: 0.1 };

            return (
              <AnimationWrapper {...animationProps} key={work.title}>
                <Card className="bg-card border-border/50 overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:border-primary">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Fade triggerOnce>
                    <Image
                      src={work.image.src}
                      alt={work.image.alt}
                      width={600}
                      height={400}
                      data-ai-hint={work.image.hint}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    </Fade>
                  </div>
                  <CardContent className="p-6">
                    <Fade triggerOnce cascade damping={0.1}>
                      <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent">{work.category}</Badge>
                      <h3 className="text-xl font-semibold text-foreground">{work.title}</h3>
                    </Fade>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            );
          })}
        </div>
        <div className="mt-16 text-center">
            <Fade triggerOnce>
              <Button asChild size="lg" variant="outline" className="hover:bg-cyan-400 hover:text-primary-foreground hover:border-cyan-400">
                  <Link href="#work">View All Projects</Link>
              </Button>
            </Fade>
        </div>
      </div>
    </section>
  )
}
