import React from 'react';
import { Metadata } from 'next';
import CommunitiesHubHero from '@/features/communities/CommunitiesHubHero';
import CommunitiesIntro from '@/features/communities/CommunitiesIntro';
import CommunitiesGrid from '@/features/communities/CommunitiesGrid';
import ServicesCTA from '@/features/services/ServicesCTA';
import TestimonialsSection from '@/features/home/TestimonialsSection';

import { locales } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Charleston Fitness Communities | Belk Body Lab',
  description: 'Explore the communities we serve across Greater Charleston. Elite personal training and body transformation coaching in Mount Pleasant, Daniel Island, Summerville, and beyond.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function CommunitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <CommunitiesHubHero />
      <CommunitiesIntro />
      <CommunitiesGrid />
      <TestimonialsSection />
      <div className="py-20 md:py-32">
        <ServicesCTA />
      </div>

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
                "item": `https://www.belkbodylab.com/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Communities",
                "item": `https://www.belkbodylab.com/communities`
              }
            ]
          })
        }}
      />
    </main>
  );
}
