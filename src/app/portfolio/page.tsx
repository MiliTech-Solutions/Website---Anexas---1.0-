import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PortfolioGrid from '@/components/portfolio/portfolio-grid';

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
