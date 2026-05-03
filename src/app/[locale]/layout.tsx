import React from 'react';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import TransitionWrapper from '@/components/layout/TransitionWrapper';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import '../../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    metadataBase: new URL(siteUrl),
    title: t('homeTitle'),
    description: t('homeDesc'),
    icons: { icon: [{ url: '/favicon.ico', type: 'image/x-icon' }] },
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}`])
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        <NextIntlClientProvider messages={messages}>
          <TransitionWrapper>
            <Header />
            {children}
            <Footer />
          </TransitionWrapper>
        </NextIntlClientProvider>

        <Script
          id="rocket-web"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbelkbodyla3935back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17"
          strategy="lazyOnload"
        />
        <Script 
          id="rocket-shot"
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
