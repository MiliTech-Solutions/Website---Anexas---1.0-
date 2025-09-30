'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fade } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';

const allProjects = [
    {
        title: 'Corp. Analytics Dashboard',
        category: 'Business Intelligence',
        image: {
          src: 'https://i.postimg.cc/4yMh1qbT/10.webp',
          alt: 'A corporate analytics dashboard showing charts and graphs.',
          hint: 'analytics dashboard'
        }
      },
      {
        title: 'Financial Services Platform',
        category: 'Fintech',
        image: {
          src: 'https://i.postimg.cc/m2xTLVd2/ab30ce71a9f8ac8e987e3608e5b9952e.jpg',
          alt: 'An abstract image representing financial services technology.',
          hint: 'financial services'
        }
      },
      {
        title: 'Enterprise Resource',
        category: 'Business Solutions',
        image: {
          src: 'https://i.postimg.cc/fRTYhGBy/e6aec7ec58f28492aac8f4beb5ac5be4.jpg',
          alt: 'Abstract background for Enterprise Resource project.',
          hint: 'abstract background'
        }
      },
      {
        title: 'Mobile Banking App',
        category: 'Mobile App',
        image: {
          src: 'https://i.postimg.cc/tC9BYmBq/IMG-20250927-152313.jpg',
          alt: 'A smartphone displaying a mobile banking application interface.',
          hint: 'mobile banking'
        }
      },
      {
        title: 'Fashion eCom. Store',
        category: 'E-commerce',
        image: {
          src: 'https://i.postimg.cc/Hsfj6FF1/ce5010565453a674f39b5068d403b2c2.jpg',
          alt: 'A stylish layout of clothing and accessories for an online store.',
          hint: 'fashion ecommerce'
        }
      },
      {
        title: 'HR SaaS Platform',
        category: 'SaaS',
        image: {
          src: 'https://i.postimg.cc/0N9k3vfn/99f405c6a00426001fed40383998985e.jpg',
          alt: 'Abstract design for a SaaS platform for HR.',
          hint: 'hr saas'
        }
      },
        {
        title: 'Healthcare System',
        category: 'Healthcare',
        image: {
          src: 'https://i.postimg.cc/Jh7R9ZXX/dd7b9965920110d32585eee96176c3b9.jpg',
          alt: 'An abstract medical background with DNA strands.',
          hint: 'healthcare system'
        }
      },
      {
        title: 'Real Estate Portal',
        category: 'Real Estate',
        image: {
          src: 'https://i.postimg.cc/hvLwD3W9/wizard-banner-1-1.jpg',
          alt: 'A wizard-themed banner for a real estate portal.',
          hint: 'real estate'
        }
      },
      {
        title: 'Travel Website',
        category: 'Travel',
        image: {
          src: 'https://i.postimg.cc/MKr0cm6X/7534c3c3a56603158a516a3475125329.jpg',
          alt: 'A scenic travel destination with booking options on a screen.',
          hint: 'travel website'
        }
      },
      {
        title: 'AI-Powered Chatbot',
        category: 'Artificial Intelligence',
        image: {
          src: 'https://i.postimg.cc/gk5jPyw8/09e7bdbcf6c74d8fc9f1005da84e1112.jpg',
          alt: 'Abstract image representing an AI-powered chatbot.',
          hint: 'ai chatbot'
        }
      },
      {
        title: 'Social Media Platform',
        category: 'Social',
        image: {
          src: 'https://i.postimg.cc/TwYwrLRb/a13884dd4c518000aabaece74a2b2742.jpg',
          alt: 'Abstract representation of a social media network.',
          hint: 'social media'
        }
      },
      {
        title: 'Educational Platform',
        category: 'EdTech',
        image: {
          src: 'https://i.postimg.cc/Ss3BgMqc/cc45d2cb3b8d798e6829a8f0d5b0f218.jpg',
          alt: 'A student studying on a laptop, representing an educational platform.',
          hint: 'online learning'
        }
      },
      {
        title: 'Food Delivery App',
        category: 'Mobile App',
        image: {
          src: 'https://picsum.photos/seed/work13/600/400',
          alt: 'A food delivery app interface on a smartphone.',
          hint: 'food delivery'
        }
      },
      {
        title: 'Music Streaming Service',
        category: 'Entertainment',
        image: {
          src: 'https://picsum.photos/seed/work14/600/400',
          alt: 'A music streaming app on a tablet with headphones.',
          hint: 'music streaming'
        }
      },
      {
        title: 'Online Gaming Platform',
        category: 'Gaming',
        image: {
          src: 'https://picsum.photos/seed/work15/600/400',
          alt: 'A person playing a video game on a high-end PC setup.',
          hint: 'gaming platform'
        }
      },
];

type ProjectCardProps = {
  work: typeof allProjects[0];
  index: number;
};

const ProjectCard = ({ work, index }: ProjectCardProps) => {
  return (
    <ClientOnly>
      <Fade triggerOnce delay={index * 50}>
        <Card className="bg-card border-border/50 overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:border-primary">
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={work.image.src}
              alt={work.image.alt}
              width={600}
              height={400}
              data-ai-hint={work.image.hint}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <CardContent className="p-6">
            <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent">{work.category}</Badge>
            <h3 className="text-xl font-semibold text-foreground">{work.title}</h3>
          </CardContent>
        </Card>
      </Fade>
    </ClientOnly>
  );
};


export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <ClientOnly>
            <Fade triggerOnce cascade damping={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Portfolio</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground text-justify">
                Explore our portfolio of successful projects that showcase our expertise and creativity across various industries.
              </p>
            </Fade>
          </ClientOnly>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((work, index) => (
            <ProjectCard key={work.title} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
