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
      },
      {
        title: 'AI-Powered Chatbot',
        category: 'Artificial Intelligence',
        image: {
          src: 'https://picsum.photos/seed/work10/600/400',
          alt: 'A conversation with an AI chatbot on a laptop screen.',
          hint: 'ai chatbot'
        }
      },
      {
        title: 'Social Media Platform',
        category: 'Social',
        image: {
          src: 'https://picsum.photos/seed/work11/600/400',
          alt: 'A social media feed on a smartphone.',
          hint: 'social media'
        }
      },
      {
        title: 'Educational Platform',
        category: 'EdTech',
        image: {
          src: 'https://picsum.photos/seed/work12/600/400',
          alt: 'An online learning platform with video courses.',
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
