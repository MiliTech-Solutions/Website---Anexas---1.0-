import { Rocket, Smile, Code, Users } from 'lucide-react';

const stats = [
  {
    icon: Rocket,
    value: '150+',
    label: 'PROJECTS LAUNCHED',
  },
  {
    icon: Smile,
    value: '100+',
    label: 'HAPPY CLIENTS',
  },
  {
    icon: Code,
    value: '500,000',
    label: 'LINES OF CODE',
  },
  {
    icon: Users,
    value: '23',
    label: 'TEAM MEMBERS',
  },
];

export default function ByTheNumbers() {
  return (
    <section id="analytics" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-widest text-cyan-400 mb-2">OUR ANALYTICS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            By the <span className="text-gradient">Numbers</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="w-10 h-10 mb-4 text-cyan-400" />
              <p className="text-4xl md:text-5xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
