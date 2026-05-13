import React from 'react';
import { getTranslations } from 'next-intl/server';
import ServicesHero    from '@/features/services/ServicesHero';
import ServicesGrid    from '@/features/services/ServicesGrid';
import WhoItsFor       from '@/features/services/WhoItsFor';
import ServicesPricing from '@/features/services/ServicesPricing';
import ServicesProcess from '@/features/services/ServicesProcess';
import ServicesFAQ     from '@/features/services/ServicesFAQ';
import ServicesCTA     from '@/features/services/ServicesCTA';
import FAQSchema       from '@/components/seo/FAQSchema';
import { SERVICES_FAQS } from '@/data/faqs/services';

// ── SEO Metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  return {
    title: t('packagesTitle'),
    description: t('packagesDesc'),
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
      canonical: locale === 'en' ? `${siteUrl}/services` : `${siteUrl}/${locale}/services`,
      languages: {
        en: `${siteUrl}/services`,
        es: `${siteUrl}/es/services`,
      },
    },
    openGraph: {
      title: t('packagesTitle'),
      description: t('packagesDesc'),
      url: locale === 'en' ? `${siteUrl}/services` : `${siteUrl}/${locale}/services`,
      type: 'website',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'Belk Body Lab - Elite Fitness Coaching & Transformation Packages',
        },
      ],
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
      <FAQSchema id="services-faq" items={SERVICES_FAQS} />
      <ServicesFAQ />
      <ServicesCTA />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.belkbodylab.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": locale === 'en' ? `${siteUrl}/services` : `${siteUrl}/${locale}/services`
              }
            ]
          })
        }}
      />
    </main>
  );
}
