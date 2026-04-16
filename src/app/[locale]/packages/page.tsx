import React from 'react';
import PackagesHero from '@/features/packages/PackagesHero';
import PricingCards from '@/features/packages/PricingCards';
import PackagesProcess from '@/features/packages/PackagesProcess';
import PackagesFAQ from '@/features/packages/PackagesFAQ';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return {
    title: t('packagesTitle'),
    description: t('packagesDesc'),
    alternates: {
      canonical: `${siteUrl}/${locale}/packages`,
      languages: { en: `${siteUrl}/en/packages`, es: `${siteUrl}/es/packages` },
    },
  };
}

export default function PackagesPage() {
  return (
    <main className="relative bg-bg-primary min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <PackagesHero />
      <PricingCards />
      <PackagesProcess />
      <PackagesFAQ />
    </main>
  );
}
