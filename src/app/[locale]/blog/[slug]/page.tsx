import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/data/blog/posts';
import BlogPostContent from '@/features/blog/BlogPostContent';
import BlogCTA from '@/features/blog/BlogCTA';
import BlogFAQ from '@/features/blog/BlogFAQ';
import { Link } from '@/i18n/navigation';
import Script from 'next/script';
import FAQSchema from '@/components/seo/FAQSchema';

// Natural-language keyword phrases per category — avoids nonsensical
// auto-generated combinations like "how to coaching" or "lifestyle for beginners".
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  'Fat Loss': ['fat loss guide', 'how to lose fat', 'fat loss tips', 'fat loss personal trainer'],
  'Muscle Gain': ['muscle building guide', 'how to build muscle', 'muscle gain tips', 'muscle building coach'],
  'Nutrition': ['nutrition coaching guide', 'nutrition tips', 'macro coaching', 'nutrition coach'],
  'Mindset': ['fitness mindset guide', 'workout consistency tips', 'fitness motivation coach'],
  'Lifestyle': ['healthy lifestyle guide', 'lifestyle coaching tips', 'sustainable fitness coach'],
  'Training': ['training guide', 'strength training tips', 'workout plan', 'personal trainer'],
  'Recovery': ['recovery guide', 'injury prevention tips', 'recovery coach'],
  'Coaching': ['personal training guide', 'coaching tips', 'personal trainer near me'],
};

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function toISODate(dateStr: string): string {
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? dateStr : parsed.toISOString().split('T')[0];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const content = post[locale as 'en' | 'es'] || post.en;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';
  const isoDate = toISODate(post.date);

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: [
      content.metaTitle,
      ...(CATEGORY_KEYWORDS[post.category] || []),
      'Kyle Belk',
      'Belk Body Lab',
    ],
    authors: [{ name: 'Kyle Belk', url: `${siteUrl}/about` }],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/blog/${slug}` : `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        en: `${siteUrl}/blog/${slug}`,
        es: `${siteUrl}/es/blog/${slug}`,
        'x-default': `${siteUrl}/blog/${slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: locale === 'en' ? `${siteUrl}/blog/${slug}` : `${siteUrl}/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: isoDate,
      modifiedTime: isoDate,
      authors: [`${siteUrl}/about`],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = post[locale as 'en' | 'es'] || post.en;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const postUrl = locale === 'en' ? `${siteUrl}/blog/${slug}` : `${siteUrl}/${locale}/blog/${slug}`;
  const isoDate = toISODate(post.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": content.title,
    "description": content.metaDescription,
    "image": [`${siteUrl}${post.image}`],
    "datePublished": isoDate,
    "dateModified": isoDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "author": [{
      "@type": "Person",
      "name": "Kyle Belk",
      "jobTitle": "NASM-Certified Personal Trainer",
      "url": `${siteUrl}/about`,
      "sameAs": [
        "https://www.instagram.com/kylebelk/",
        "https://www.tiktok.com/@kyle.belk/",
        "https://www.threads.net/@kylebelk"
      ],
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Belk Body Lab",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/brand/belk-body-lab-logo.png`,
      },
    },
    "inLanguage": locale === 'es' ? 'es' : 'en-US',
    "isPartOf": {
      "@type": "Blog",
      "@id": `${siteUrl}/blog`,
      "name": "Belk Body Lab Blog",
      "publisher": {
        "@type": "Organization",
        "name": "Belk Body Lab",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/blog` },
      { "@type": "ListItem", "position": 3, "name": content.title, "item": postUrl },
    ],
  };

  return (
    <>
      <Script
        id={`article-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {content.faqs && <FAQSchema id={`blog-faq-${slug}`} items={content.faqs} />}
      {content.customSchemas && content.customSchemas.map((schemaStr, idx) => (
        <Script
          key={`custom-schema-${slug}-${idx}`}
          id={`custom-schema-${slug}-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaStr }}
        />
      ))}
      <main className="min-h-screen bg-[#050505]">
      <article>
        {/* Post Header */}
        <header className="relative w-full min-h-[65vh] lg:min-h-[80vh] mb-16 lg:mb-24 flex flex-col justify-end pb-12 lg:pb-24 pt-40 border-b border-white/5">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
            <Image
              src={post.image}
              alt={content.title}
              fill
              className="object-cover opacity-90"
              priority
            />
            {/* Bottom gradient strictly for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="container-custom px-6 lg:px-10 relative z-10 w-full">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-accent-green text-xs font-black uppercase tracking-[0.2em] mb-8 lg:mb-10 hover:gap-4 transition-all opacity-90 hover:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>

            {/* Breadcrumb UI */}
            <nav className="flex flex-wrap items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest text-white/40" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent-green transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70 truncate max-w-[200px] lg:max-w-none">{content.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-widest mb-6 lg:mb-8">
              <span className="text-accent-green px-4 py-1.5 bg-accent-green/10 rounded-full border border-accent-green/20 backdrop-blur-md">
                {post.category}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>{post.date}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-sans font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize leading-[1.25] tracking-tight max-w-[1200px] text-balance drop-shadow-2xl">
              {content.title.toLowerCase()}
            </h1>
          </div>
        </header>

        {/* Post Content */}
        <section className="container-custom px-6 lg:px-10 pb-12">
          <BlogPostContent content={content} />
          {content.faqs && <BlogFAQ faqs={content.faqs} />}
        </section>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="container-custom px-6 lg:px-10 pb-24 lg:pb-40">
          <div className="w-full h-px bg-white/5 mb-24" />
          <h2 className="font-sans font-bold text-white text-2xl md:text-4xl uppercase tracking-tight mb-16">
            Continue <span className="text-accent-green">Reading</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => {
              const rContent = related[locale as 'en' | 'es'] || related.en;
              return (
                <Link 
                  key={related.id} 
                  href={`/blog/${related.slug}`}
                  className="group relative bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image 
                      src={related.image} 
                      alt={rContent.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-accent-green text-[10px] font-black uppercase tracking-widest mb-4 block">
                      {related.category}
                    </span>
                    <h3 className="text-white text-xl font-bold uppercase tracking-tight leading-snug group-hover:text-accent-green transition-colors">
                      {rContent.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <BlogCTA />
    </main>
    </>
  );
}
