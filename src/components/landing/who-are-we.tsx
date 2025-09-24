import Image from 'next/image';
import { Code, Rocket } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Work',
    description: 'We write clean, efficient, and scalable code that stands the test of time.',
  },
  {
    icon: Rocket,
    title: 'Modern Design',
    description: 'Our designs are modern, intuitive, and tailored to your brand\'s unique identity.',
  },
];

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/seed/whoarewe/800/600"
              alt="A person looking out over an airport tarmac."
              width={800}
              height={600}
              data-ai-hint="airport tarmac"
              className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="space-y-8">
            <p className="text-sm font-bold tracking-widest text-cyan-400">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-gradient">WHO</span> ARE WE?
            </h2>
            <p className="text-lg text-muted-foreground text-justify">
              Nexora AI is a collective of innovators, designers, and AI pioneers dedicated to pushing the boundaries of digital design. We merge cutting-edge technology with artistic vision to create products that are not just beautiful, but brilliantly smart.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-3">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground text-justify">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
