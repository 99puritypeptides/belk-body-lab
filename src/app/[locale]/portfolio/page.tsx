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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: t('portfolioTitle'),
    description: t('portfolioDesc'),
    keywords: [
      'body transformation results South Carolina',
      'before and after fitness SC',
      'weight loss results South Carolina',
      'fat loss transformation Charleston SC',
      'muscle gain before after SC',
      'client transformations South Carolina',
      'personal trainer results SC',
      'body recomposition South Carolina',
      'fitness transformation photos SC',
      'Kyle Belk client results',
      'Belk Body Lab transformations',
      'personal trainer before after South Carolina',
    ],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/portfolio` : `${siteUrl}/${locale}/portfolio`,
      languages: { en: `${siteUrl}/portfolio`, es: `${siteUrl}/es/portfolio` },
    },
    openGraph: {
      title: t('portfolioTitle'),
      description: t('portfolioDesc'),
      url: locale === 'en' ? `${siteUrl}/portfolio` : `${siteUrl}/${locale}/portfolio`,
      type: 'website',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'Body Transformation Results - Personal Trainer South Carolina',
        },
      ],
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
