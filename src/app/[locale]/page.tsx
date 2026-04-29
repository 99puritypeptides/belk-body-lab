import React from 'react';
import HeroSection from '@/features/home/HeroSection';
import AboutSection from '@/features/home/AboutSection';
import BMICalculator from '@/features/home/BMICalculator';
import TransformationsSection from '@/features/home/TransformationSection';
import TestimonialsSection from '@/features/home/TestimonialsSection';
import FAQSection from '@/features/home/FAQSection';
import ContactSection from '@/features/home/ContactSection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return {
    title: t('homeTitle'),
    description: t('homeDesc'),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: { en: `${siteUrl}/en`, es: `${siteUrl}/es` },
    },
  };
}

export default function HomePage() {
  return (
    <main className="relative bg-bg-primary min-h-screen" suppressHydrationWarning>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="bg-grid hidden lg:grid" aria-hidden="true">
        {Array.from({ length: 8 })?.map((_, i) => (
          <div key={i} className="bg-grid-line" />
        ))}
      </div>
      <HeroSection />
      <AboutSection />
      <BMICalculator />
      <TransformationsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
