import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PortfolioGrid from '@/components/portfolio/portfolio-grid';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Explore our latest projects, case studies, and creative work at Anexas Digital.',
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  );
}