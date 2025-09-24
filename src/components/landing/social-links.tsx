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
            <a key={index} href={social.href} className="text-muted-foreground hover:text-cyan-400 transition-all duration-300 active:scale-90 hover:scale-110">
                <social.icon className="w-4 h-4" />
            </a>
        ))}
    </div>
  );
}
