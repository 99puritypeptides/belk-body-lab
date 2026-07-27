import React from 'react';
import Script from 'next/script';
import AboutPage from '@/features/about/AboutPage';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: t('aboutTitle'),
    description: t('aboutDesc'),
    keywords: [
      'Kyle Belk personal trainer',
      'about Belk Body Lab',
      'NASM certified trainer South Carolina',
      'personal trainer Charleston SC',
      'fitness coach South Carolina',
      'body transformation coach SC',
      'Kyle Belk fitness coach',
      'best personal trainer South Carolina',
      'NPC physique competitor South Carolina',
      'Precision Nutrition certified SC',
      'elite fitness coaching Charleston',
      'South Carolina fitness expert',
    ],
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
          alt: 'About Kyle Belk - #1 Personal Trainer in South Carolina',
        },
      ],
    },
  };
}

export default function About() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <Script
        id="speakable-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "About Kyle Belk | NASM-Certified Personal Trainer South Carolina | Belk Body Lab",
            "url": `${siteUrl}/about`,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".speakable-intro", ".about-bio", ".trainer-credentials"]
            }
          })
        }}
      />
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
