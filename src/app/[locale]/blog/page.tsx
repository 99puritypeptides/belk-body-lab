import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BlogHero from '@/features/blog/BlogHero';
import BlogFeatured from '@/features/blog/BlogFeatured';
import BlogGrid from '@/features/blog/BlogGrid';
import BlogCTA from '@/features/blog/BlogCTA';
import { blogPosts } from '@/data/blog/posts';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  return {
    title: t('blogTitle') || 'Fitness Tips & Training Guides | Personal Trainer South Carolina Blog',
    description: t('blogDesc') || 'Expert fat loss guides, muscle building programs, and nutrition science from South Carolina personal trainer Kyle Belk. Actionable fitness advice for SC clients and beyond.',
    keywords: [
      'fitness blog',
      'personal trainer tips',
      'how to lose weight',
      'fat loss guide',
      'muscle building tips',
      'body recomposition guide',
      'calorie deficit meal plan',
      'strength training for women',
      'walking for weight loss',
      'how much does a personal trainer cost',
      'beginner workout plan',
      'nutrition coaching',
      'body transformation guide',
      'Kyle Belk',
      'Belk Body Lab',
    ],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/blog` : `${siteUrl}/${locale}/blog`,
      languages: { en: `${siteUrl}/blog`, es: `${siteUrl}/es/blog` },
    },
    openGraph: {
      title: t('blogTitle'),
      description: t('blogDesc'),
      url: locale === 'en' ? `${siteUrl}/blog` : `${siteUrl}/${locale}/blog`,
      type: 'website',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'Fitness Blog - Personal Trainer South Carolina | Belk Body Lab',
        },
      ],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPosts = sortedPosts.slice(0, 1);
  const gridPosts = sortedPosts;

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.belkbodylab.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Fitness Blog",
                "item": locale === 'en' ? `${siteUrl}/blog` : `${siteUrl}/${locale}/blog`
              }
            ]
          })
        }}
      />
      {/* CollectionPage Schema for blog index */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Fitness Tips & Training Guides from a South Carolina Personal Trainer",
            "description": "Expert fat loss guides, muscle building programs, nutrition science, and training tips from NASM-certified South Carolina personal trainer Kyle Belk.",
            "url": locale === 'en' ? `${siteUrl}/blog` : `${siteUrl}/${locale}/blog`,
            "author": {
              "@type": "Person",
              "name": "Kyle Belk",
              "jobTitle": "NASM Certified Personal Trainer",
              "url": `${siteUrl}/about`
            },
            "publisher": {
              "@type": "Organization",
              "name": "Belk Body Lab",
              "url": siteUrl
            }
          })
        }}
      />
      <BlogHero />
      <BlogFeatured posts={featuredPosts} />
      <BlogGrid posts={gridPosts} />

      {/* SEO Content Section */}
      <section className="py-20 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jumpshot text-white text-3xl md:text-5xl uppercase mb-8 leading-none tracking-tight">
              Real Fitness Advice from Charleston&apos;s <span className="text-accent-green">Top Personal Trainer</span>
            </h2>
            <div className="space-y-6 text-white/50 text-base md:text-lg leading-relaxed">
              <p>
                The Belk Body Lab fitness blog is where NASM-certified personal trainer Kyle Belk shares the exact fat loss strategies, muscle building guides, and nutrition advice he uses with real clients across Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Goose Creek, Johns Island, and Isle of Palms.
              </p>
              <p>
                Every article is written by Kyle himself — not a content agency. After 7+ years of coaching and 500+ client transformations in South Carolina, the topics here come from real questions real clients ask: how to lose fat without losing muscle, how to find a personal trainer near you in SC, how much a personal trainer costs in South Carolina, what to eat to build lean muscle, and how to stay consistent when life gets busy.
              </p>
              <p>
                Whether you&apos;re searching for the best personal trainer in Charleston SC, trying to figure out how to lose belly fat after 40, or just want a beginner workout plan that actually works — you&apos;ll find straightforward answers here, written for South Carolina residents with real lives and real schedules.
              </p>
              <p>
                Browse articles on fat loss, lean muscle building, nutrition coaching, body recomposition, online personal training in South Carolina, and more. New guides added regularly.
              </p>
              <p className="text-white/30 text-sm">
                Serving clients in-person across the Charleston SC metro area and online throughout South Carolina and the United States.
              </p>
            </div>
            <div className="mt-8 h-px w-24 bg-accent-green/50" />
          </div>
        </div>
      </section>

      <BlogCTA />
    </main>
  );
}
