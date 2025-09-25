import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Fade, Slide } from 'react-awesome-reveal';
import ClientOnly from '@/components/client-only';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const serviceLinks = [
  { href: '#', label: 'Web Design' },
  { href: '#', label: 'Web Development' },
  { href: '#', label: 'Mobile Apps' },
  { href: '#', label: 'Digital Marketing' },
  { href: '#', label: 'Branding' },
  { href: '#', label: 'SEO' },
];

const companyLinks = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Our Team' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

const contactDetails = [
  { icon: Mail, value: 'hello@digitalagency.com', href: 'mailto:hello@digitalagency.com' },
  { icon: Phone, value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, value: '123 Digital Street, Tech City, TC 12345', href: '#' },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-foreground">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--cyan-400))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--blue-500))' }} />
        </linearGradient>
      </defs>
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logoGradientFooter)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 7L12 12L22 7" stroke="url(#logoGradientFooter)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 12V22" stroke="url(#logoGradientFooter)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Anexas</span>
    <span>Digital</span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-transparent text-card-foreground border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:pr-16">
          <div className="space-y-4 lg:col-span-5">
            <ClientOnly>
              <Fade triggerOnce>
                <Logo />
              </Fade>
            </ClientOnly>
            <ClientOnly>
              <Fade triggerOnce delay={100}>
                <p className="text-muted-foreground text-justify">
                  Anexas is a digital agency specializing in modern, functional, and user-friendly solutions. We help businesses thrive in the digital landscape.
                </p>
              </Fade>
            </ClientOnly>
            <ClientOnly>
              <Fade triggerOnce delay={200}>
                <p className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
                  “Transforming bold ideas into sleek
                  <span className="block">& contemporary experiences.”</span>
                </p>
              </Fade>
            </ClientOnly>
            <div className="flex justify-center space-x-8 pt-4">
              {socialLinks.map((social, index) => (
                <ClientOnly key={social.href}>
                  <Fade triggerOnce delay={300 + index * 100}>
                    <Link href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </Fade>
                </ClientOnly>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <ClientOnly>
                <Fade triggerOnce>
                  <h4 className="font-semibold text-lg mb-4 text-white">Services</h4>
                </Fade>
              </ClientOnly>
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <ClientOnly key={link.label}>
                    <Fade triggerOnce delay={index * 50}>
                      <li>
                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    </Fade>
                  </ClientOnly>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <ClientOnly>
                  <Fade triggerOnce>
                    <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
                  </Fade>
                </ClientOnly>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <ClientOnly key={link.label}>
                      <Fade triggerOnce delay={index * 50}>
                        <li>
                          <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      </Fade>
                    </ClientOnly>
                  ))}
                </ul>
              </div>

              <div>
                <ClientOnly>
                  <Fade triggerOnce>
                    <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
                  </Fade>
                </ClientOnly>
                <ul className="space-y-3">
                  {contactDetails.map((detail, index) => (
                    <ClientOnly key={detail.value}>
                      <Fade triggerOnce delay={index * 100}>
                        <li className="flex items-start gap-3">
                          <detail.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                          <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {detail.value}
                          </a>
                        </li>
                      </Fade>
                    </ClientOnly>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center text-sm text-muted-foreground">
          <ClientOnly>
            <Fade triggerOnce>
              <p>&copy; {new Date().getFullYear()} Anexas. All rights reserved.</p>
            </Fade>
          </ClientOnly>
          <div className="flex gap-4 mt-4">
            <ClientOnly>
              <Fade triggerOnce delay={100}>
                <Link href="#" className="hover:text-primary">Privacy</Link>
              </Fade>
            </ClientOnly>
            <ClientOnly>
              <Fade triggerOnce delay={200}>
                <Link href="#" className="hover:text-primary">Terms</Link>
              </Fade>
            </ClientOnly>
            <ClientOnly>
              <Fade triggerOnce delay={300}>
                <Link href="#" className="hover:text-primary">Cookies</Link>
              </Fade>
            </ClientOnly>
          </div>
        </div>
      </div>
    </footer>
  );
}
