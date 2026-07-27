import dynamic from 'next/dynamic';
import Script from 'next/script';
import HeroSection from '@/features/home/HeroSection';
import AboutSection from '@/features/home/AboutSection';
import { getTranslations } from 'next-intl/server';

// Below-the-fold components are loaded dynamically to reduce initial JS payload
const BMICalculator = dynamic(() => import('@/features/home/BMICalculator'), {
  loading: () => <div className="min-h-[400px] bg-[#080808]" />,
});
const TransformationsSection = dynamic(() => import('@/features/home/TransformationSection'), {
  loading: () => <div className="min-h-[600px] bg-[#080808]" />,
});
const TestimonialsSection = dynamic(() => import('@/features/home/TestimonialsSection'), {
  loading: () => <div className="min-h-[400px] bg-[#080808]" />,
});
const FAQSection = dynamic(() => import('@/features/home/FAQSection'), {
  loading: () => <div className="min-h-[400px] bg-[#080808]" />,
});
const BlogLatest = dynamic(() => import('@/features/home/BlogLatest'), {
  loading: () => <div className="min-h-[400px] bg-[#080808]" />,
});
const HomeContactCTA = dynamic(() => import('@/features/home/HomeContactCTA'), {
  loading: () => <div className="min-h-[300px] bg-[#080808]" />,
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: t('homeTitle'),
    description: t('homeDesc'),
    keywords: [
      'personal trainer Charleston SC',
      'personal training near me',
      'personal trainer near me',
      'private trainer near me',
      'best personal trainers near me',
      'best personal trainer Charleston SC',
      'personal trainer South Carolina',
      'online personal training South Carolina',
      'online fitness coaching SC',
      'body transformation South Carolina',
      'weight loss coach Charleston SC',
      'fat loss coaching South Carolina',
      'muscle building coach SC',
      'NASM certified personal trainer SC',
      'Kyle Belk personal trainer',
      'Belk Body Lab',
      'personal trainer near me South Carolina',
      'fitness trainer Mount Pleasant SC',
      'personal trainer Summerville SC',
      'personal coaching cost South Carolina',
      'personal trainer rates Charleston SC',
    ],
    alternates: {
      canonical: locale === 'en' ? siteUrl : `${siteUrl}/${locale}`,
      languages: { en: siteUrl, es: `${siteUrl}/es` },
    },
  };
}

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return (
    <main className="relative bg-bg-primary min-h-screen" suppressHydrationWarning>
      <Script
        id="speakable-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Belk Body Lab | #1 Personal Trainer in South Carolina | Kyle Belk",
            "url": siteUrl,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".speakable-intro", ".hero-desc", ".about-intro"]
            }
          })
        }}
      />
      <Script
        id="aggregate-rating-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#organization`,
            "name": "Belk Body Lab",
            "url": siteUrl,
            "image": `${siteUrl}/og-home.png`,
            "priceRange": "$75–$349/month",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Charleston",
              "addressRegion": "SC",
              "addressCountry": "US",
            },
            "sameAs": [
              siteUrl,
              "https://www.instagram.com/belkbodylab",
              "https://www.facebook.com/belkbodylab",
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1",
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Marcus T." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Lost 38 lbs in 14 weeks with Kyle. The most structured, results-driven coaching I have ever experienced. Worth every penny.",
                "datePublished": "2026-03-15",
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sarah M." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "I went from 187 lbs to 152 lbs in 16 weeks. Kyle is the real deal — the nutrition plan alone changed how I think about food.",
                "datePublished": "2026-02-20",
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "DeShawn R." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Best personal trainer in Charleston SC, no question. Gained 18 lbs of muscle in 6 months while staying lean. Incredible programming.",
                "datePublished": "2026-01-10",
              },
            ],
          })
        }}
      />
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
      <BlogLatest />
      <FAQSection />
      <HomeContactCTA />
    </main>
  );
}
