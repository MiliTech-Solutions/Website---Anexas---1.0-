'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Slide } from "react-awesome-reveal";

const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
];


export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-16">
        <Slide direction="right" triggerOnce cascade damping={0.1} delay={300}>
          {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-muted-foreground hover:text-cyan-400 transition-all duration-300 hover:scale-125 active:scale-150">
                  <social.icon className="w-4 h-4" />
              </a>
          ))}
        </Slide>
    </div>
  );
}
