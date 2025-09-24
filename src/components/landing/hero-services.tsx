'use client';
import { Slide } from "react-awesome-reveal";

const services = [
  'ECommerce',
  'Content Writing',
  'Digital Products',
  'Digital Designing',
  'Digital Marketing',
  'Brand Identity',
  'Management Services',
];

export default function HeroServices() {
  return (
    <div className="hidden md:flex flex-col gap-4 text-left">
      <Slide direction="left" triggerOnce cascade damping={0.1} delay={300}>
        <p className="text-[10px] font-bold tracking-widest bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">OUR SERVICES</p>
        {services.map((service) => (
            <div key={service} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-px h-6 bg-border transition-all duration-300 group-hover:w-1 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_theme(colors.cyan.400)]"></div>
                <p className="text-xs text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-110 group-hover:translate-x-1">{service}</p>
            </div>
        ))}
        </Slide>
    </div>
  );
}
