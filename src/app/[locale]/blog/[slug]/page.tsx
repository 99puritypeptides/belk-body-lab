import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/data/blog/posts';
import BlogPostContent from '@/features/blog/BlogPostContent';
import BlogCTA from '@/features/blog/BlogCTA';
import { Link } from '@/i18n/navigation';

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const content = post[locale as 'en' | 'es'] || post.en;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = post[locale as 'en' | 'es'] || post.en;

  return (
    <main className="min-h-screen bg-[#050505] pt-32">
      <article>
        {/* Post Header */}
        <header className="container-custom px-6 lg:px-10 mb-16 lg:mb-24">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-green text-xs font-black uppercase tracking-[0.2em] mb-12 hover:gap-4 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>

          <div className="max-w-[1000px]">
            <div className="flex items-center gap-4 text-text-muted text-xs font-bold uppercase tracking-widest mb-6">
              <span className="text-accent-green">{post.category}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span>{post.date}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-heading font-black text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] mb-12 tracking-tighter">
              {content.title}
            </h1>
          </div>

          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
            <Image
              src={post.image}
              alt={content.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
          </div>
        </header>

        {/* Post Content */}
        <section className="container-custom px-6 lg:px-10 pb-20 lg:pb-32">
          <BlogPostContent content={content} />
        </section>
      </article>

      <BlogCTA />
    </main>
  );
}
