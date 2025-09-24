'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Slide } from "react-awesome-reveal";
import { MouseEvent } from 'react';

const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
];


export default function SocialLinks() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (navigator.vibrate) {
      // Vibrate for 50ms
      navigator.vibrate(50);
    }
  };

  return (
    <div className="flex flex-col items-center gap-16">
        <Slide direction="right" triggerOnce cascade damping={0.1} delay={300}>
          {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-muted-foreground transition-all duration-300 active:scale-90 hover:-translate-y-1 hover:text-cyan-400 hover:scale-125" onClick={handleClick}>
                  <social.icon className="w-4 h-4" />
              </a>
          ))}
        </Slide>
    </div>
  );
}
