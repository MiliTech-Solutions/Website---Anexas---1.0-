'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Fade, Slide } from 'react-awesome-reveal';

const testimonials = [
  {
    quote: "Working with this team transformed our digital presence completely. The results exceeded our expectations and our revenue increased by 300% within 6 months.",
    name: "Sarah Johnson",
    title: "CEO at TechStart Inc.",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-sarah'),
  },
  {
    quote: "Their strategic approach to digital marketing and exceptional design skills helped us achieve our goals faster than we thought possible. Highly recommended!",
    name: "Michael Chen",
    title: "Marketing Director at Growth Labs",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-michael'),
  },
  {
    quote: "The team's expertise in both design and development is unmatched. They delivered a beautiful, functional website that perfectly represents our brand.",
    name: "Emily Rodriguez",
    title: "Founder at Innovate Solutions",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-emily'),
  },
];

const companies = [
    { name: 'Google', logo: () => <svg className="w-24 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C14.03,4.73 15.6,5.33 16.8,6.39L19.1,4.22C17.14,2.56 14.8,1.6 12.19,1.6C6.7,1.6 2,6.2 2,12C2,17.8 6.7,22.4 12.19,22.4C17.62,22.4 22,18.33 22,12.33C22,11.67 21.68,11.1 21.35,11.1Z"/></svg> },
    { name: 'Microsoft', logo: () => <svg className="w-24 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M2,3.25h9.5v9.5H2V3.25z M12.5,3.25h9.5v9.5h-9.5V3.25z M2,13.75h9.5v9.5H2V13.75z M12.5,13.75h9.5v9.5h-9.5V13.75z"/></svg> },
    { name: 'Amazon', logo: () => <svg className="w-24 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 1024 1024"><path d="M999.033 400.33l-285.34-40.895 129.582-248.86c3.7-7.12 1.48-15.93-5.64-19.62-7.12-3.7-15.93-1.48-19.62 5.64L572.78 317.062 331.062 135.842c-7.92-2.92-16.63.22-20.9 7.42-4.27 7.2-2.18 16.52 4.67 21.68l221.73 168.17L315.65 528.25c-15.9 8.5-35.3 2.1-43.8-13.8s-2.1-35.3 13.8-43.8l201.2-107.5 137.9-183 180.7 94.7-98.3 189.2 216.9 31.05c7.9 1.1 14.1 6.5 16.3 14.2s-.1 15.9-6 21.6zm-452.4-239.5c-28.8-15.1-60.8-23.8-94-23.8-100.3 0-181.7 81.4-181.7 181.7s81.4 181.7 181.7 181.7c33.2 0 65.2-9 94-24.2v167.3c0 8.8 7.2 16 16 16s16-7.2 16-16V160.83c0-2.3-.5-4.6-1.5-6.7-1.4-3.3-3.9-6-7.2-7.8l-.2.1c-.1 0-8.8-4.6-8.8-4.6z m-94 319c-80.5 0-145.7-65.2-145.7-145.7s65.2-145.7 145.7-145.7c26.8 0 52.4 7.2 74.7 20.4v250.6c-22.3 13.2-47.9 20.4-74.7 20.4z"/></svg> },
    { name: 'Apple', logo: () => <svg className="w-24 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M19.1,12.87c0,1.3-0.08,2.57-0.22,3.81c-0.12,1.06-0.25,2.12-0.37,3.17c-0.07,0.6-0.1,1.11-0.1,1.48c-0.05,0.61-0.07,1.21-0.07,1.78c-0.05,2.2,1.25,4.3,3.31,4.4c1.2,0,2.1-0.3,3-0.8c0.6-0.3,1.2-0.7,1.8-1.2c0.2-0.2,0.4-0.4,0.6-0.6c-0.2-0.2-0.4-0.4-0.6-0.5c-1.3-0.8-2.6-1.5-3.9-2.3c-1.5-0.9-3-1.8-4.4-2.7c-0.2-0.1-0.4-0.3-0.6-0.4c0.1-0.1,0.2-0.2,0.3-0.2c1.7,0,3.3,0,5,0c1.2,0,2.4-0.2,3.6-0.5c1-0.3,2-0.6,2.9-1.1c1.2-0.6,2.3-1.4,3.2-2.4c0.5-0.5,0.9-1.1,1.3-1.7c-2.3-1.4-4.8-2.4-7.4-2.9c-2.1-0.4-4.3-0.4-6.4-0.2c-0.1,0-0.2,0-0.3,0c-0.2-1.3-0.4-2.6-0.6-3.8c-0.2-1.5-0.5-3-0.7-4.5c-0.1-0.4-0.1-0.8-0.2-1.2c-0.3-1.7-0.6-3.4-0.9-5.1c-0.1-0.3-0.1-0.5-0.2-0.8c-0.1-0.5-0.2-1-0.3-1.5c-0.1-0.7-0.1-1.3-0.2-2c-0.1-0.8-0.1-1.6-0.2-2.4c-0.1-0.9-0.1-1.8-0.1-2.7c0-0.3,0-0.6,0-1c0-0.7,0-1.5,0-2.2c0-1.1,0.2-2.2,0.5-3.3c0.3-0.9,0.7-1.8,1.2-2.6C16.8,1,17.4,0.5,18,0c0.1,0.1,0.2,0.2,0.3,0.3c0.7,0.7,1.3,1.5,1.9,2.4c0.5,0.8,1,1.7,1.4,2.7c0.2,0.5,0.4,1.1,0.5,1.6c0.1,0.7,0.1,1.4,0.1,2.1c0.1,1.2,0.1,2.4,0.1,3.6c0,1,0,1.9,0,2.9c0,0.8-0.1,1.6-0.1,2.4c-0.1,1.1-0.3,2.2-0.5,3.3c-0.2,1.3-0.5,2.6-0.8,3.9c-0.4,1.6-0.8,3.2-1.2,4.8c-0.1,0.3-0.2,0.6-0.2,0.9c0.7-0.1,1.4-0.1,2.1-0.1c1.5,0,3,0.1,4.5,0.4c2.5,0.4,4.9,1.2,7.1,2.4c0.1,0.1,0.2,0.1,0.3,0.2c-1.1,1.8-2.5,3.4-4.2,4.7c-1.3,1,2.8,1.9-4.3,2.6c-1.1,0.5-2.2,0.9-3.4,1.2c-0.9,0.2-1.9,0.4-2.8,0.5c-2.8,0.3-5.6,0.2-8.4-0.2c-1.2-0.2-2.3-0.4-3.5-0.8c-1.3-0.4-2.6-0.9-3.8-1.5c-0.9-0.5-1.8-1-2.6-1.7c-0.3-0.3-0.7-0.5-1-0.8c1.3-2,2.1-4.2,2.2-6.5c0.1-1.2,0-2.4-0.1-3.6c-0.1-1.3-0.2-2.5-0.4-3.8c-0.2-1.3-0.5-2.6-0.8-3.9c-0.3-1.4-0.7-2.7-1.1-4.1c-0.4-1.3-0.8-2.6-1.2-3.8c-0.2-0.7-0.4-1.3-0.7-2c-0.2-0.5-0.4-1-0.7-1.5c-0.3-0.6-0.6-1.2-1-1.7c-0.3-0.5-0.7-1-1.1-1.4C1.9,10,1.5,9.5,1.1,9.1C1.2,9,1.3,8.9,1.4,8.8c2-1.3,4.2-2.2,6.5-2.6c1.3-0.2,2.6-0.3,3.9-0.3c0.7,0,1.4,0,2.1,0c0.3,1.1,0.6,2.2,0.8,3.3c0.3,1.4,0.6,2.8,0.8,4.2c0.2,1,0.3,2,0.4,3c0.1,0.7,0.1,1.3,0.1,2c0,0.3,0,0.5,0,0.8c0.1,1.3,0,2.6-0.1,3.8c-0.1,1.1-0.3,2.2-0.5,3.3c-0.2,1.3-0.5,2.6-0.9,3.8c-0.4,1.4-0.9,2.8-1.5,4.1c-0.1,0.3-0.2,0.5-0.3,0.8c-0.5,1.2-1.1,2.3-1.8,3.4c-0.1,0.2-0.2,0.4-0.3,0.5c0.3,0.2,0.6,0.3,0.9,0.5c1.4,0.7,3,1.3,4.6,1.7c1.7,0.4,3.5,0.6,5.3,0.6c1.3,0,2.6-0.1,3.9-0.2c2.2-0.3,4.4-0.8,6.4-1.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.6-1.3-1-2.7-1.3-4c-0.3-1.2-0.5-2.5-0.5-3.8c0-0.8,0.1-1.7,0.2-2.5c0.1-0.9,0.3-1.8,0.5-2.7c0.2-0.8,0.4-1.7,0.6-2.5c0.2-0.6,0.4-1.2,0.6-1.8c0.1-0.3,0.2-0.6,0.3-0.9C19.1,12.87,19.1,12.87,19.1,12.87z"/></svg> },
    { name: 'Meta', logo: () => <svg className="w-24 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M22.4,12c0-5.7-4.1-10.4-9.6-11.8C12.3,0.1,12,0.1,11.7,0.2C5.9,1.6,1.6,6,1.6,12c0,5.7,4.1,10.4,9.6,11.8c0.3,0.1,0.6,0.1,0.9,0.1C18.1,23.9,22.4,18.3,22.4,12z M12,2.4c5.1,0,9.2,4.1,9.2,9.2s-4.1,9.2-9.2,9.2s-9.2-4.1-9.2-9.2S6.9,2.4,12,2.4z M12,6.5c-3.5,0-6.4,2.9-6.4,6.4s2.9,6.4,6.4,6.4s6.4-2.9,6.4-6.4S15.5,6.5,12,6.5z"/></svg> },
  ];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Fade triggerOnce cascade damping={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Clients Say</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            testimonial.avatar && (
              <Slide direction="up" delay={index * 100} triggerOnce key={testimonial.name}>
                <Card className="bg-card border-border/50 flex flex-col p-6">
                  <CardContent className="flex-grow p-0 space-y-4">
                    <Fade triggerOnce>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                      </div>
                    </Fade>
                    <Fade triggerOnce delay={100}>
                      <blockquote className="text-muted-foreground italic text-justify">"{testimonial.quote}"</blockquote>
                    </Fade>
                  </CardContent>
                  <Fade triggerOnce delay={200}>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar.imageUrl}
                      alt={testimonial.avatar.description}
                      width={48}
                      height={48}
                      data-ai-hint={testimonial.avatar.imageHint}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  </Fade>
                </Card>
              </Slide>
            )
          ))}
        </div>
        <div className="mt-16 text-center">
          <Fade triggerOnce>
            <p className="text-muted-foreground mb-6">Trusted by companies worldwide</p>
          </Fade>
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
                {companies.map((company, index) => (
                  <Fade delay={index * 100} triggerOnce key={company.name}>
                    <company.logo />
                  </Fade>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
