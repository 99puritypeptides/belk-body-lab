import React from 'react';
import { getTranslations } from 'next-intl/server';
import ServicesHero    from '@/features/services/ServicesHero';
import ServicesGrid    from '@/features/services/ServicesGrid';
import WhoItsFor       from '@/features/services/WhoItsFor';
import ServicesPricing from '@/features/services/ServicesPricing';
import ServicesProcess from '@/features/services/ServicesProcess';
import ServicesFAQ     from '@/features/services/ServicesFAQ';
import ServicesCTA     from '@/features/services/ServicesCTA';

// ── SEO Metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: 'Fitness Coaching Packages Charleston SC | Online Trainer',
    description:
      'Explore personalized fitness coaching packages in Charleston SC. Online coaching for fat loss, muscle building, and 90-day body transformations.',
    keywords: [
      'online fitness coach Charleston SC',
      'personal trainer Charleston SC',
      'fitness coaching packages Charleston',
      '90-day body transformation Charleston',
      'custom workout plan Charleston SC',
      'nutrition coaching Charleston SC',
      'Kyle Belk coach',
      'Belk Body Lab',
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services`,
      languages: {
        en: `${siteUrl}/en/services`,
        es: `${siteUrl}/es/services`,
      },
    },
    openGraph: {
      title: 'Fitness Coaching Packages Charleston SC | Belk Body Lab',
      description: 'Explore personalized fitness coaching packages in Charleston SC. Online coaching for fat loss, muscle building, and 90-day transformations.',
      url: `${siteUrl}/${locale}/services`,
      type: 'website',
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main
      className="relative bg-bg-primary min-h-screen"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Structured data for SEO */}
      <meta itemProp="name" content="Online Fitness Coaching — Belk Body Lab" />
      <meta itemProp="description" content="Custom personal training and nutrition coaching by Kyle Belk. Science-based fat loss and muscle building protocols." />
      <meta itemProp="provider" content="Belk Body Lab" />
      <meta itemProp="areaServed" content="United States" />
      <meta itemProp="serviceType" content="Personal Training, Nutrition Coaching, Online Fitness Coaching" />

      {/* Noise + grid */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>

      {/* Page sections */}
      <ServicesHero />
      <ServicesGrid />
      <WhoItsFor />
      <ServicesPricing />
      <ServicesProcess />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  );
}
