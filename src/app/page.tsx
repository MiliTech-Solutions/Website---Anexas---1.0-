import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/landing/hero';
import ServiceCatalog from '@/components/landing/service-catalog';
import FeaturedServices from '@/components/landing/featured-services';
import Pricing from '@/components/landing/pricing';
import About from '@/components/landing/about';
import ProjectStats from '@/components/landing/project-stats';
import CaseStudyShowcase from '@/components/landing/case-study-showcase';
import ContactForm from '@/components/landing/contact-form';
import BrandingPackages from '@/components/landing/branding-packages';
import FinestWork from '@/components/landing/finest-work';
import Testimonials from '@/components/landing/testimonials';
import GetAQuote from '@/components/landing/get-a-quote';
import ByTheNumbers from '@/components/landing/by-the-numbers';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceCatalog />
        <FeaturedServices />
        <Pricing />
        <About />
        <BrandingPackages />
        <FinestWork />
        <Testimonials />
        <ByTheNumbers />
        <GetAQuote />
        {/* The sections below are currently not visible in the new design.
            You can uncomment them if you wish to bring them back. */}
        {/* <ProjectStats /> */}
        {/* <CaseStudyShowcase /> */}
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
}
