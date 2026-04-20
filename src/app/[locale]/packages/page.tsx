import React from 'react';
import { getTranslations } from 'next-intl/server';
import ServicesHero    from '@/features/packages/ServicesHero';
import ServicesGrid    from '@/features/packages/ServicesGrid';
import WhoItsFor       from '@/features/packages/WhoItsFor';
import ServicesPricing from '@/features/packages/ServicesPricing';
import ServicesProcess from '@/features/packages/ServicesProcess';
import ServicesFAQ     from '@/features/packages/ServicesFAQ';
import ServicesCTA     from '@/features/packages/ServicesCTA';

// ── SEO Metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: 'Online Fitness Coaching Services — Belk Body Lab | Kyle Belk',
    description:
      'Custom online personal training, nutrition coaching, and 1-on-1 fitness coaching by Kyle Belk. Science-based fat loss and muscle-building programs for real results. 500+ clients transformed. Apply today.',
    keywords: [
      'online fitness coach',
      'personal trainer Atlanta',
      'custom workout plan',
      'nutrition coaching',
      'fat loss program',
      'muscle building coach',
      'online coaching services',
      'Kyle Belk coach',
      'Belk Body Lab',
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}/packages`,
      languages: {
        en: `${siteUrl}/en/packages`,
        es: `${siteUrl}/es/packages`,
      },
    },
    openGraph: {
      title: 'Online Fitness Coaching Services — Belk Body Lab',
      description: 'Custom programs. Real accountability. 500+ clients transformed. Apply to work with Kyle Belk.',
      url: `${siteUrl}/${locale}/packages`,
      type: 'website',
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────
export default function PackagesPage() {
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
