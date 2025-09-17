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

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400">Digital <span className="text-white">Agency</span></h3>
            <p className="text-muted-foreground">
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

          <div>
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
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              {contactDetails.map((detail) => (
                <li key={detail.value} className="flex items-start gap-3">
                    <detail.icon className="w-5 h-5 text-cyan-400 mt-1" />
                    <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {detail.value}
                    </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
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
