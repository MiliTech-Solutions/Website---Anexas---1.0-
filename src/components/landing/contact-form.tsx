'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/app/actions';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending} size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: ContactFormState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (Object.keys(state.errors).length === 0) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        if (state.resetKey) {
            formRef.current?.reset();
        }
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Fade triggerOnce>
        <div className="max-w-2xl mx-auto">
          <Card className="border-border">
            <CardHeader className="text-center">
              <Fade triggerOnce cascade damping={0.1}>
                <CardTitle className="text-3xl md:text-4xl">Get in Touch</CardTitle>
                <CardDescription className="mt-2 text-lg text-muted-foreground">
                  Have a project in mind? We'd love to hear about it.
                </CardDescription>
              </Fade>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={dispatch} key={state.resetKey}>
                <div className="grid gap-6">
                  <Fade triggerOnce cascade damping={0.1} delay={100}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" aria-describedby="name-error" />
                      {state.errors?.name && <p id="name-error" className="text-sm text-destructive">{state.errors.name[0]}</p>}
                    </div>
                  </Fade>
                  <Fade triggerOnce cascade damping={0.1} delay={200}>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" aria-describedby="email-error" />
                      {state.errors?.email && <p id="email-error" className="text-sm text-destructive">{state.errors.email[0]}</p>}
                    </div>
                  </Fade>
                  <Fade triggerOnce cascade damping={0.1} delay={300}>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="What's this about?" aria-describedby="subject-error" />
                      {state.errors?.subject && <p id="subject-error" className="text-sm text-destructive">{state.errors.subject[0]}</p>}
                    </div>
                  </Fade>
                  <Fade triggerOnce cascade damping={0.1} delay={400}>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" aria-describedby="message-error" />
                      {state.errors?.message && <p id="message-error" className="text-sm text-destructive">{state.errors.message[0]}</p>}
                    </div>
                  </Fade>
                  <Fade triggerOnce delay={500}>
                    <SubmitButton />
                  </Fade>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        </Fade>
      </div>
    </section>
  );
}
