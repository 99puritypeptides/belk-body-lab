import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ContactHero from '@/features/contact/ContactHero';
import ContactFormPage from '@/features/contact/ContactFormPage';
import ContactFAQ from '@/features/contact/ContactFAQ';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: t('contactTitle') || `Contact | Belk Body Lab`,
    description: t('contactDesc') || 'Get in touch with Kyle Belk for elite coaching applications and business inquiries.',
    keywords: [
      'contact personal trainer South Carolina',
      'hire personal trainer SC',
      'fitness coach consultation South Carolina',
      'apply for coaching SC',
      'personal trainer free consultation',
      'contact Kyle Belk',
      'Belk Body Lab contact',
      'personal trainer inquiry Charleston SC',
      'fitness coaching application South Carolina',
      'book personal trainer SC',
    ],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/contact` : `${siteUrl}/${locale}/contact`,
      languages: { en: `${siteUrl}/contact`, es: `${siteUrl}/es/contact` },
    },
    openGraph: {
      title: t('contactTitle'),
      description: t('contactDesc'),
      url: locale === 'en' ? `${siteUrl}/contact` : `${siteUrl}/${locale}/contact`,
      type: 'website',
    },
  };
}

export default function Page() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <ContactHero />
      <ContactFormPage />
      <ContactFAQ />
    </main>
  );
}
