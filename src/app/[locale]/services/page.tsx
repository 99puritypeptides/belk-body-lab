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
      'personal training services South Carolina',
      'personal trainer cost South Carolina',
      'personal training prices SC',
      'personal trainer fees South Carolina',
      'fitness coach price South Carolina',
      'personal training packages prices',
      'how much does a personal trainer cost',
      'average cost personal trainer SC',
      'online fitness coach South Carolina',
      'personal trainer Charleston SC',
      'personal trainer North Charleston SC',
      'fitness coaching packages SC',
      '90-day body transformation South Carolina',
      'custom workout plan South Carolina',
      'nutrition coaching South Carolina',
      'weight loss program SC',
      'fat loss coach South Carolina',
      'muscle building program SC',
      'online personal trainer South Carolina',
      'personal trainer near me SC',
      'personal trainer Summerville SC',
      'personal trainer Mount Pleasant SC',
      'Kyle Belk coach',
      'Belk Body Lab services',
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
export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

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
      <ServicesPricing />
      <ServicesGrid />
      <WhoItsFor />
      <ServicesProcess />
      <FAQSchema id="services-faq" items={SERVICES_FAQS} />
      <ServicesFAQ />
      <ServicesCTA />

      {/* HowTo Schema — captures "how to get a personal trainer" AI Overview slots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Start Personal Training with Kyle Belk at Belk Body Lab",
            "description": "Follow these steps to begin your body transformation with South Carolina's top-rated personal trainer.",
            "totalTime": "PT15M",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Apply for a Free Consultation",
                "text": "Fill out the short application form at belkbodylab.com/contact. Tell Kyle your goals, current fitness level, and schedule. There is no obligation."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Complete Your Onboarding Call",
                "text": "Kyle reviews your application and schedules a 20-minute video or phone call to discuss your goals, lifestyle, and which coaching format (online or in-person) fits you best."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Receive Your Custom Program",
                "text": "Within 48 hours of joining, you receive a fully personalized training program and nutrition plan built around your schedule, goals, and current fitness level."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Start Training and Check In Weekly",
                "text": "Begin your program, log your workouts, and attend weekly check-ins with Kyle to review progress, adjust training, and fine-tune your nutrition."
              }
            ]
          })
        }}
      />

      {/* Speakable Schema — tells Google AI Overview which content to extract */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Personal Training Services & Pricing South Carolina | Belk Body Lab",
            "url": locale === 'en' ? `${siteUrl}/services` : `${siteUrl}/${locale}/services`,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".speakable-intro", ".pricing-summary", ".services-desc"]
            }
          })
        }}
      />

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
