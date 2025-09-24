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
            <div key={index} className="flex items-center gap-3">
                <div className="w-px h-6 bg-border"></div>
                <p className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{service}</p>
            </div>
        ))}
    </div>
  );
}
