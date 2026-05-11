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
import CustomScrollbar from '@/components/ui/CustomScrollbar';
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('homeTitle'),
      template: `%s | Belk Body Lab`,
    },
    description: t('homeDesc'),
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
        { url: '/images/brand/logo-192.png', type: 'image/png', sizes: '192x192' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}`])
      ),
    },
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDesc'),
      url: siteUrl,
      siteName: 'Belk Body Lab',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/images/brand/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Belk Body Lab - Elite Fitness Coaching Charleston SC',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDesc'),
      images: ['/images/brand/og-image.jpg'],
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Belk Body Lab",
                "alternateName": ["BBL", "BelkBodyLab", "Belk Body Lab Charleston"],
                "url": "https://www.belkbodylab.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.belkbodylab.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Belk Body Lab",
                "description": "Belk Body Lab is the premier personal trainer in Charleston SC, specializing in elite body transformations, online fitness coaching, weight loss, and strength training in Mount Pleasant, West Ashley, and globally.",
                "image": "https://www.belkbodylab.com/images/brand/belk-body-lab-logo.png",
                "logo": "https://www.belkbodylab.com/images/brand/belk-body-lab-logo.png",
                "@id": "https://www.belkbodylab.com/#organization",
                "url": "https://www.belkbodylab.com",
                "telephone": "+18430000000",
                "priceRange": "$$$",
                "foundingDate": "2019-01-01",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "trainwithbelk@gmail.com",
                  "contactType": "customer support"
                },
                "areaServed": ["Charleston, SC", "Mount Pleasant, SC", "West Ashley, SC", "Daniel Island, SC", "Summerville, SC", "Global"],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Charleston",
                  "addressRegion": "SC",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 32.7765,
                  "longitude": -79.9311
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "06:00",
                  "closes": "21:00"
                },
                "sameAs": [
                  "https://www.instagram.com/kylebelk/",
                  "https://www.tiktok.com/@belkbodylab"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.belkbodylab.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": "https://www.belkbodylab.com/about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Services",
                    "item": "https://www.belkbodylab.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Portfolio",
                    "item": "https://www.belkbodylab.com/portfolio"
                  }
                ]
              }
            ])
          }}
        />
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        <NextIntlClientProvider messages={messages}>
          <TransitionWrapper>
            <Header />
            <CustomScrollbar />
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
