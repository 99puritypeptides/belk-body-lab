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
      'personal trainer South Carolina',
      'best personal trainer SC',
      'personal trainer Charleston SC',
      'fitness coach South Carolina',
      'online fitness coaching SC',
      'body transformation South Carolina',
      'weight loss coach Charleston SC',
      'fat loss coaching South Carolina',
      'muscle building coach SC',
      'NASM certified personal trainer SC',
      'Kyle Belk personal trainer',
      'Belk Body Lab',
      'personal trainer near me South Carolina',
      'online personal trainer South Carolina',
      'fitness trainer Mount Pleasant SC',
      'personal trainer Summerville SC',
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
