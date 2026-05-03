import React from 'react';
// Force rebuild to resolve ChunkLoadError
import PortfolioHero from '@/features/portfolio/PortfolioHero';
import PortfolioStats from '@/features/portfolio/PortfolioStats';
import PortfolioGallery from '@/features/portfolio/PortfolioGallery';
import FAQSection from '@/features/home/FAQSection';
import AboutFinalCTA from '@/features/about/AboutFinalCTA';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return {
    title: t('portfolioTitle'),
    description: t('portfolioDesc'),
    alternates: {
      canonical: `${siteUrl}/${locale}/portfolio`,
      languages: { en: `${siteUrl}/en/portfolio`, es: `${siteUrl}/es/portfolio` },
    },
  };
}

export default function PortfolioPage() {
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGallery />
      <FAQSection namespace="portfolioFaq" />
      <AboutFinalCTA namespace="portfolioGallery" />
    </main>
  );
}
