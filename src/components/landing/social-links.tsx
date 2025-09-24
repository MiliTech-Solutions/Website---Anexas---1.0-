'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Fade, Slide } from "react-awesome-reveal";
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
    <div className="flex flex-col items-end gap-8">
        <Slide direction="right" triggerOnce cascade damping={0.1} delay={300}>
          {socialLinks.map((social, index) => (
            <Fade key={index} delay={500 + index * 100} triggerOnce>
              <div className="flex items-center justify-end gap-3 group cursor-pointer">
                  <a href={social.href} className="text-muted-foreground transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 group-hover:-translate-x-1" onClick={handleClick}>
                      <social.icon className="w-4 h-4" />
                  </a>
                  <div className="w-px h-6 bg-border transition-all duration-300 group-hover:w-1.5 group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_theme(colors.cyan.400)]"></div>
              </div>
            </Fade>
          ))}
        </Slide>
    </div>
  );
}
