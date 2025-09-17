import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
    {
        icon: Mail,
        title: 'Email Us',
        value: 'hello@digitalagency.com'
    },
    {
        icon: Phone,
        title: 'Call Us',
        value: '+1 (555) 123-4567'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: '123 Digital Street, Tech City, TC 12345'
    }
]

export default function GetAQuote() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Next Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
                Let's discuss how we can help transform your digital presence and drive your business forward.
            </p>
            <div className="space-y-6">
                {contactDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-card">
                            <detail.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">{detail.title}</h3>
                            <p className="text-muted-foreground">{detail.value}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          <div>
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get a Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="project-details">Project Details</Label>
                        <Textarea id="project-details" placeholder="Tell us about your project requirements..." />
                    </div>
                    <Button type="submit" size="lg">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
