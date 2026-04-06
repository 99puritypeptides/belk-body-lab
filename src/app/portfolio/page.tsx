import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from './components/PortfolioHero';
import PortfolioGallery from './components/PortfolioGallery';
import PortfolioStats from './components/PortfolioStats';

export default function PortfolioPage() {
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <Header />
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGallery />
      <Footer />
    </main>
  );
}