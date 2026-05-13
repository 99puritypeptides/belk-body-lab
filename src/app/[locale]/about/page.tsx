import React from 'react';
import AboutPage from '@/features/about/AboutPage';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: t('aboutTitle'),
    description: t('aboutDesc'),
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/about` : `${siteUrl}/${locale}/about`,
      languages: { en: `${siteUrl}/about`, es: `${siteUrl}/es/about` },
    },
    openGraph: {
      title: t('aboutTitle'),
      description: t('aboutDesc'),
      url: locale === 'en' ? `${siteUrl}/about` : `${siteUrl}/${locale}/about`,
      type: 'website',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'About Kyle Belk - Belk Body Lab Elite Fitness Coaching',
        },
      ],
    },
  };
}

export default function About() {
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <AboutPage />
    </main>
  );
}
