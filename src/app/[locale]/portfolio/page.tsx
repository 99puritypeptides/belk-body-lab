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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.belkbodylab.com/#organization',
    name: 'Belk Body Lab',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Marcus T.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Lost 38 lbs in 14 weeks with Kyle. The most structured, results-driven coaching I have ever experienced. Worth every penny.',
        datePublished: '2026-03-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sarah M.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'I went from 187 lbs to 152 lbs in 16 weeks. Kyle is the real deal — the nutrition plan alone changed how I think about food.',
        datePublished: '2026-02-20',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'DeShawn R.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Best personal trainer in Charleston SC, no question. Gained 18 lbs of muscle in 6 months while staying lean. Incredible programming.',
        datePublished: '2026-01-10',
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Body Transformation Results — Belk Body Lab South Carolina',
    description: 'Before and after body transformation results from personal training clients across South Carolina coached by Kyle Belk at Belk Body Lab.',
    url: `${siteUrl}/portfolio`,
    numberOfItems: 12,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '38 lb fat loss in 14 weeks — Male client, Charleston SC', url: `${siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 2, name: '35 lb weight loss in 16 weeks — Female client, Mount Pleasant SC', url: `${siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 3, name: '18 lb lean muscle gain in 24 weeks — Male client, North Charleston SC', url: `${siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 4, name: '28 lb fat loss — Online coaching client, Summerville SC', url: `${siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 5, name: 'Complete body recomposition — Female client, West Ashley SC', url: `${siteUrl}/portfolio` },
    ],
  };

  return (
    <main className="relative bg-bg-primary min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
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
