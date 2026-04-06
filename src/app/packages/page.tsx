import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesHero from './components/PackagesHero';
import PricingCards from './components/PricingCards';
import PackagesProcess from './components/PackagesProcess';
import PackagesFAQ from './components/PackagesFAQ';

export default function PackagesPage() {
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <Header />
      <PackagesHero />
      <PricingCards />
      <PackagesProcess />
      <PackagesFAQ />
      <Footer />
    </main>
  );
}