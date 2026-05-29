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
      'fitness blog South Carolina',
      'personal trainer tips SC',
      'fat loss guide South Carolina',
      'muscle building tips SC',
      'nutrition advice South Carolina',
      'workout tips personal trainer SC',
      'fitness tips Charleston SC',
      'weight loss advice South Carolina',
      'body transformation guide SC',
      'exercise tips personal trainer',
      'Kyle Belk fitness blog',
      'Belk Body Lab blog',
      'South Carolina fitness articles',
      'how to lose weight SC',
      'best exercises for fat loss',
      'personal training advice South Carolina',
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

  const sortedPosts = [...blogPosts].reverse();
  const featuredPosts = sortedPosts.slice(0, 1);
  const gridPosts = sortedPosts.slice(1);

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
              Expert Fitness <span className="text-accent-green">Knowledge</span> from South Carolina&apos;s Top Personal Trainer
            </h2>
            <div className="space-y-6 text-white/50 text-base md:text-lg leading-relaxed">
              <p>
                Welcome to the Belk Body Lab fitness blog — your source for science-backed training guides, fat loss strategies, muscle building programs, and nutrition advice from NASM-certified personal trainer Kyle Belk. Based in Charleston, South Carolina, Kyle has spent 7+ years and 500+ client transformations developing the systems and methods shared in these articles.
              </p>
              <p>
                Whether you&apos;re a complete beginner searching for your first personal trainer in South Carolina, an experienced lifter looking to optimize your training, or someone trying to lose weight and keep it off for good — these articles cover the exact strategies Kyle uses with his coaching clients across Charleston, Mount Pleasant, Summerville, West Ashley, North Charleston, and online throughout SC.
              </p>
              <p>
                Every article is written by Kyle Belk personally — not outsourced content writers. The advice here comes from real coaching experience with real South Carolina clients. Topics include how to structure a fat loss diet without starving, the best compound exercises for body transformation, how to choose the right personal trainer in SC, beginner muscle building frameworks, nutrition macro planning, and much more.
              </p>
              <p className="text-white/30 text-sm">
                New articles published regularly. Covering fat loss, muscle building, nutrition coaching, fitness tips, workout programs, and personal training advice for South Carolina residents and beyond.
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
