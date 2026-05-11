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
    title: t('blogTitle') || 'Fitness Insights & Guides | Belk Body Lab',
    description: t('blogDesc') || 'Expert fat loss guides, muscle building protocols, and nutrition science from Kyle Belk. Engineering transformations with data-driven coaching.',
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/blog` : `${siteUrl}/${locale}/blog`,
      languages: { en: `${siteUrl}/blog`, es: `${siteUrl}/es/blog` },
    },
  };
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <BlogHero />
      <BlogFeatured posts={blogPosts} />
      <BlogGrid posts={blogPosts} />
      <BlogCTA />
    </main>
  );
}
