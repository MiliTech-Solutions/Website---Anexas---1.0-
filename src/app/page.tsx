import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/landing/hero';
import ServiceCatalog from '@/components/landing/service-catalog';
import ProjectStats from '@/components/landing/project-stats';
import CaseStudyShowcase from '@/components/landing/case-study-showcase';
import ContactForm from '@/components/landing/contact-form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceCatalog />
        <ProjectStats />
        <CaseStudyShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
