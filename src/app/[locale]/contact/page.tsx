import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ContactHero from '@/features/contact/ContactHero';
import ContactFormPage from '@/features/contact/ContactFormPage';
import ContactFAQ from '@/features/contact/ContactFAQ';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Contact | Belk Body Lab`,
    description: t('contactDesc') || 'Get in touch with Kyle Belk for elite coaching applications and business inquiries.',
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
