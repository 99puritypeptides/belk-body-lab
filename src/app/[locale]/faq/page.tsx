import { GENERAL_FAQS } from '@/data/faqs/general';
import FAQPageClient from '@/features/faq/FAQPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  return {
    title: 'Personal Training FAQ | South Carolina Fitness Questions Answered | Belk Body Lab',
    description:
      'Answers to the most common personal training questions in South Carolina — pricing, fat loss, muscle building, online coaching, and how to get started with Kyle Belk at Belk Body Lab.',
    keywords: [
      'personal training FAQ South Carolina',
      'personal trainer cost SC',
      'how much does a personal trainer cost',
      'personal training near me Charleston',
      'online personal training FAQ',
      'how to lose belly fat South Carolina',
      'personal trainer near me',
      'gym trainer near me',
      'private trainer near me',
      'personal trainer fees',
      'fitness coach price',
      'how to build muscle',
      'fat loss coaching SC',
      'Kyle Belk FAQ',
      'Belk Body Lab questions',
    ],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/faq` : `${siteUrl}/${locale}/faq`,
      languages: {
        en: `${siteUrl}/faq`,
        es: `${siteUrl}/es/faq`,
      },
    },
    openGraph: {
      title: 'Personal Training FAQ | Belk Body Lab South Carolina',
      description:
        'Every question about personal training in South Carolina answered — pricing, fat loss, online coaching, and more from NASM-certified coach Kyle Belk.',
      url: locale === 'en' ? `${siteUrl}/faq` : `${siteUrl}/${locale}/faq`,
      type: 'website',
      images: [{ url: '/og-home.png', width: 1200, height: 630, alt: 'Belk Body Lab FAQ' }],
    },
  };
}

export default async function FAQRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  const pageUrl = locale === 'en' ? `${siteUrl}/faq` : `${siteUrl}/${locale}/faq`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GENERAL_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Personal Training FAQ — Belk Body Lab South Carolina',
    url: pageUrl,
    description:
      'Comprehensive FAQ covering personal training pricing, fat loss, muscle building, online coaching, and how to work with Kyle Belk in South Carolina.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.speakable-intro', 'h2'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: pageUrl },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
