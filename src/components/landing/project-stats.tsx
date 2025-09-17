import { Briefcase, Heart, Clock, Headset } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '500+', label: 'Projects Completed' },
  { icon: Heart, value: '250+', label: 'Happy Clients' },
  { icon: Clock, value: '10+', label: 'Years of Experience' },
  { icon: Headset, value: '24/7', label: 'Support Available' },
];

export default function ProjectStats() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="h-10 w-10 mb-4 text-accent" />
              <p className="text-4xl md:text-5xl font-extrabold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
