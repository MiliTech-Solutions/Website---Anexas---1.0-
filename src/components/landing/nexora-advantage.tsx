import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage the latest AI and machine learning advancements to deliver solutions that are not just creative but also intelligent and forward-thinking.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Our team consists of industry veterans and AI pioneers with a track record of launching successful, high-impact digital products.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We believe in true partnership. We work closely with you to understand your vision and goals, ensuring the final product exceeds expectations.',
  },
];

export default function NexoraAdvantage() {
  return (
    <section id="advantage" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-widest text-cyan-400 mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Nexora Advantage
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center flex flex-col items-center">
              <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-justify max-w-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
