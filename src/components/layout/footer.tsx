import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                    <stop offset="0%" style={{stopColor: 'hsl(var(--cyan-400))'}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--blue-500))'}} />
                </linearGradient>
            </defs>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logoGradientFooter)" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="url(#logoGradientFooter)" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 12V22" stroke="url(#logoGradientFooter)" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Anexas</span>
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Digital</span>
    </Link>
  );

export default function Footer() {
  return (
    <footer className="bg-transparent text-card-foreground border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4 lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground text-justify">
              We create stunning digital experiences that drive growth and elevate your brand in the digital landscape.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.href} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pr-0">
            <h4 className="font-semibold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:-ml-16">
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              {contactDetails.map((detail) => (
                <li key={detail.value} className="flex items-start gap-3">
                    <detail.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {detail.value}
                    </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anexas. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
