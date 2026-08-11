'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';

const contactDetails = [
    {
        icon: Mail,
        title: 'Email Us',
        value: 'anexas.militechsoln@gmail.com'
    },
    {
        icon: Phone,
        title: 'Call Us',
        value: '(+92) 370 977 5882'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: '121 - A, Askari XIV, Defence, Rawalpindi'
    }
]

export default function GetAQuote() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(ellipse_at_left,_rgba(0,128,128,0.3),_transparent_70%)] -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ClientOnly>
              <Slide direction="left" triggerOnce>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Ready to Start Your <span className="text-gradient">Next Project?</span>
                </h2>
                <p className="text-lg text-muted-foreground text-justify">
                    Let's discuss how we can help transform your digital presence and drive your business forward.
                </p>
              </Slide>
            </ClientOnly>
            <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <ClientOnly key={detail.title}>
                    <Fade delay={index * 150} triggerOnce cascade damping={0.1}>
                      <div className="flex items-start gap-4">
                          <detail.icon className="w-8 h-8 text-accent mt-1" />
                          <div>
                              <h3 className="font-semibold text-lg">{detail.title}</h3>
                              <p className="text-muted-foreground">{detail.value}</p>
                          </div>
                      </div>
                    </Fade>
                  </ClientOnly>
                ))}
            </div>
          </div>
          <div className="relative">
            <ClientOnly>
              <Slide direction="right" triggerOnce>
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <ClientOnly>
                      <Fade triggerOnce>
                        <CardTitle className="text-2xl text-center">Get a Free Quote</CardTitle>
                      </Fade>
                    </ClientOnly>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-6">
                      <ClientOnly>
                        <Fade triggerOnce cascade damping={0.1} delay={100}>
                          <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                  <Label htmlFor="first-name">First Name</Label>
                                  <Input
                                    id="first-name"
                                    name="first-name"
                                    autoComplete="given-name"
                                    placeholder="John"
                                  />
                              </div>
                              <div className="space-y-2">
                                  <Label htmlFor="last-name">Last Name</Label>
                                   <Input
                                    id="last-name"
                                    name="last-name"
                                    autoComplete="given-name"
                                    placeholder="Doe"
                                  />
                              </div>
                          </div>
                        </Fade>
                      </ClientOnly>
                      <ClientOnly>
                        <Fade triggerOnce cascade damping={0.1} delay={200}>
                          <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                                    <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="john@example.com"
                                  />
                          </div>
                        </Fade>
                      </ClientOnly>
                      <ClientOnly>
                        <Fade triggerOnce cascade damping={0.1} delay={300}>
                          <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="(+92) 370 977 5882"
                                  />
                          </div>
                        </Fade>
                      </ClientOnly>
                      <ClientOnly>
                        <Fade triggerOnce cascade damping={0.1} delay={400}>
                          <div className="space-y-2">
                              <Label htmlFor="project-details">Project Details</Label>
                              <Input
                                    id="project-details"
                                    name="project-details"
                                    autoComplete="OFF"
                                    placeholder="Tell us about your project requirements..."
                                  />
                          </div>
                          </Fade>
                      </ClientOnly>
                      <ClientOnly>
                        <Fade triggerOnce delay={500}>
                        <Button type="submit" size="lg">Submit</Button>
                        </Fade>
                      </ClientOnly>
                    </form>
                  </CardContent>
                </Card>
              </Slide>
            </ClientOnly>
            <div className="absolute bottom-0 left-0 h-2/5 w-full bg-[radial-gradient(ellipse_at_bottom,_rgba(0,128,128,0.3),_transparent_70%)] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
