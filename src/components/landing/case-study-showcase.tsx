import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CaseStudySearch from './case-study-search';

const caseStudies = [
  {
    title: "Revamping a Fashion eCommerce Store",
    category: "eCommerce",
    image: PlaceHolderImages.find(p => p.id === 'case-study-1'),
    tags: ["UI/UX", "Webflow", "Shopify"],
  },
  {
    title: "Fitness App for a New Generation",
    category: "Mobile App",
    image: PlaceHolderImages.find(p => p.id === 'case-study-2'),
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "Branding for a Disruptive Tech Startup",
    category: "Branding",
    image: PlaceHolderImages.find(p => p.id === 'case-study-3'),
    tags: ["Logo Design", "Brand Strategy", "Marketing"],
  },
  {
    title: "Building a Scalable SaaS Platform",
    category: "SaaS",
    image: PlaceHolderImages.find(p => p.id === 'case-study-4'),
    tags: ["Next.js", "PostgreSQL", "Vercel"],
  },
];

export default function CaseStudyShowcase() {
  return (
    <section id="work" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our portfolio and see how we've helped businesses like yours succeed. Use our AI-powered search to find relevant projects.
          </p>
        </div>
        
        <CaseStudySearch />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {caseStudies.map((study) => (
            study.image && (
              <Card key={study.title} className="overflow-hidden group border-border hover:border-primary transition-colors duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={study.image.imageUrl}
                      alt={study.image.description}
                      width={600}
                      height={400}
                      data-ai-hint={study.image.imageHint}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{study.category}</Badge>
                  <CardTitle className="leading-tight">{study.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
