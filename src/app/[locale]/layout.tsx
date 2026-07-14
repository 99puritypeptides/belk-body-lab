import React from 'react';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import TransitionWrapper from '@/components/layout/TransitionWrapper';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomScrollbar from '@/components/ui/CustomScrollbar';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import PerformanceScripts from '@/components/performance/PerformanceScripts';
import '../../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jumpshot = localFont({
  src: [
    {
      path: '../../../public/fonts/jumpshot/Jumpshot-gw44R.otf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/jumpshot/Jumpshot-ovYY0.ttf',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-jumpshot',
  display: 'swap',
});

const clashDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/clash/ClashDisplay.woff2',
      weight: '400 700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
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
    keywords: [
      'personal trainer South Carolina',
      'personal trainer SC',
      'fitness coach South Carolina',
      'personal trainer Charleston SC',
      'online fitness coach South Carolina',
      'body transformation South Carolina',
      'weight loss coach South Carolina',
      'fat loss coaching SC',
      'muscle building South Carolina',
      'personal training Mount Pleasant SC',
      'personal trainer Summerville SC',
      'personal trainer West Ashley SC',
      'personal trainer North Charleston SC',
      'nutrition coaching South Carolina',
      'online personal trainer SC',
      'NASM certified trainer South Carolina',
      'Kyle Belk',
      'Belk Body Lab',
      'best personal trainer South Carolina',
      'fitness transformation SC',
    ],
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
      canonical: locale === 'en' ? siteUrl : `${siteUrl}/${locale}`,
      languages: {
        en: siteUrl,
        es: `${siteUrl}/es`,
        'x-default': siteUrl,
      },
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
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'Belk Body Lab - #1 Personal Trainer in South Carolina',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDesc'),
      images: ['/og-home.png'],
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
    <html lang={locale} className={`${inter.variable} ${jumpshot.variable} ${clashDisplay.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.lordicon.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.rocket.new" crossOrigin="anonymous" />
        {/* llms.txt — tells AI search engines (ChatGPT, Perplexity, Gemini) about site content */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt — AI content index for Belk Body Lab" />
      </head>
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
                "alternateName": ["Belk Body Labs", "BBL", "BelkBodyLab", "Belk Body Lab Charleston SC"],
                "url": "https://www.belkbodylab.com",
                "description": "Belk Body Lab is a personal training and fitness coaching company founded by Kyle Belk in Charleston, South Carolina. It is not affiliated with Belk department stores or any retail brand.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.belkbodylab.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "SportsActivityLocation", "HealthClub"],
                "name": "Belk Body Lab",
                "legalName": "Belk Body Lab",
                "disambiguatingDescription": "Belk Body Lab is a personal training and online fitness coaching company in Charleston, South Carolina, founded by NASM-certified trainer Kyle Belk. It is a fitness coaching business — not a retail store, department store, or beauty product brand. Belk Body Lab specializes in body transformations, fat loss coaching, muscle building, and nutrition coaching for clients across South Carolina.",
                "description": "Belk Body Lab is the #1 personal trainer in South Carolina, specializing in body transformations, fat loss coaching, muscle building, online fitness coaching, and nutrition planning. Serving Charleston, Mount Pleasant, West Ashley, North Charleston, Summerville, Daniel Island, James Island, Goose Creek, Hanahan, and online clients statewide across SC and nationwide.",
                "slogan": "South Carolina's #1 Personal Trainer and Body Transformation Coach",
                "image": "https://www.belkbodylab.com/images/brand/belk-body-lab-logo.png",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.belkbodylab.com/images/brand/belk-body-lab-logo.png",
                  "caption": "Belk Body Lab logo - personal training company in Charleston SC"
                },
                "@id": "https://www.belkbodylab.com/#organization",
                "url": "https://www.belkbodylab.com",
                "telephone": "+18437439007",
                "email": "trainwithbelk@gmail.com",
                "priceRange": "$$$",
                "foundingDate": "2019-01-01",
                "founder": {
                  "@type": "Person",
                  "name": "Kyle Belk",
                  "jobTitle": "NASM-Certified Personal Trainer and Founder",
                  "url": "https://www.belkbodylab.com/about",
                  "sameAs": [
                    "https://www.instagram.com/kylebelk/",
                    "https://www.tiktok.com/@kyle.belk/",
                    "https://www.threads.net/@kylebelk"
                  ]
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+18437439007",
                  "email": "trainwithbelk@gmail.com",
                  "contactType": "customer support",
                  "areaServed": "US",
                  "availableLanguage": ["English", "Spanish"]
                },
                "areaServed": ["South Carolina", "Charleston, SC", "Mount Pleasant, SC", "West Ashley, SC", "North Charleston, SC", "Daniel Island, SC", "Summerville, SC", "James Island, SC", "Goose Creek, SC", "Hanahan, SC", "Johns Island, SC", "Isle of Palms, SC", "Columbia, SC", "Greenville, SC", "Myrtle Beach, SC", "Online - US"],
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
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Personal Training and Coaching Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Personal Training" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "In-Person Personal Training" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nutrition Coaching" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Body Transformation Coaching" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home-Based Fitness Coaching" } }
                  ]
                },
                "sameAs": [
                  "https://www.instagram.com/kylebelk/",
                  "https://www.tiktok.com/@kyle.belk/",
                  "https://www.threads.net/@kylebelk",
                  "https://www.youtube.com/@BelkBodyLab"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Kyle Belk",
                "givenName": "Kyle",
                "familyName": "Belk",
                "jobTitle": "NASM-Certified Personal Trainer",
                "description": "Kyle Belk is a NASM-certified personal trainer and body transformation coach based in Charleston, South Carolina. He is the founder of Belk Body Lab, a personal training and online fitness coaching company serving clients across South Carolina.",
                "url": "https://www.belkbodylab.com/about",
                "image": "https://www.belkbodylab.com/images/about/kyle-ocean-rock.png",
                "worksFor": {
                  "@type": "Organization",
                  "@id": "https://www.belkbodylab.com/#organization",
                  "name": "Belk Body Lab"
                },
                "hasCredential": [
                  { "@type": "EducationalOccupationalCredential", "name": "NASM Certified Personal Trainer (CPT)" },
                  { "@type": "EducationalOccupationalCredential", "name": "Precision Nutrition Level 1 Coach" }
                ],
                "knowsAbout": ["Personal Training", "Fat Loss", "Muscle Building", "Nutrition Coaching", "Body Transformation", "Online Fitness Coaching", "Strength Training"],
                "sameAs": [
                  "https://www.instagram.com/kylebelk/",
                  "https://www.tiktok.com/@kyle.belk/",
                  "https://www.threads.net/@kylebelk",
                  "https://www.youtube.com/@BelkBodyLab"
                ]
              }
            ])
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <TransitionWrapper>
            <Header />
            <CustomScrollbar />
            {children}
            <Footer />
          </TransitionWrapper>
        </NextIntlClientProvider>

        <PerformanceScripts />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
