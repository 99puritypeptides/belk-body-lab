import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BlogHero from '@/features/blog/BlogHero';
import BlogFeatured from '@/features/blog/BlogFeatured';
import BlogGrid from '@/features/blog/BlogGrid';
import BlogCTA from '@/features/blog/BlogCTA';
import { blogPosts } from '@/data/blog/posts';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('blogTitle') || 'Fitness Insights & Guides | Belk Body Lab',
    description: t('blogDesc') || 'Expert fat loss guides, muscle building protocols, and nutrition science from Kyle Belk. Engineering transformations with data-driven coaching.',
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
