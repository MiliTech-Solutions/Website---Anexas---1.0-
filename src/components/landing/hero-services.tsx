'use client';

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
        <p className="text-[10px] font-bold tracking-widest bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">OUR SERVICES</p>
        {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-px h-6 bg-border transition-all duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_theme(colors.cyan.400)]"></div>
                <p className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">{service}</p>
            </div>
        ))}
    </div>
  );
}
