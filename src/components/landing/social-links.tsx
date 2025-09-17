'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
];


export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-6">
        {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="w-5 h-5" />
            </a>
        ))}
    </div>
  );
}
