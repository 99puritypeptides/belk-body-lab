import React from 'react';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'Belk Body Lab',
    url: siteUrl,
    telephone: '+1-843-555-0100',
    email: 'kyle@belkbodylab.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Charleston',
      addressRegion: 'SC',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7765,
      longitude: -79.9311,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish'],
        contactOption: 'TollFree',
        areaServed: 'US',
        url: `${siteUrl}/contact`,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        description: 'Apply for personal training or online coaching',
        url: `${siteUrl}/contact`,
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    makesOffer: {
      '@type': 'Offer',
      name: 'Free Fitness Consultation',
      description: 'A free 15–30 minute consultation call to discuss your fitness goals and find the right coaching format for you.',
      price: '0',
      priceCurrency: 'USD',
      url: `${siteUrl}/contact`,
      eligibleRegion: {
        '@type': 'Country',
        name: 'United States',
      },
    },
  };

  return (
    <main className="bg-[#080808] min-h-screen">
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactHero />
      <ContactFormPage />
      <ContactFAQ />
    </main>
  );
}
