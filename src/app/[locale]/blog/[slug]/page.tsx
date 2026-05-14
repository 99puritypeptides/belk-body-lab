import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/data/blog/posts';
import BlogPostContent from '@/features/blog/BlogPostContent';
import BlogCTA from '@/features/blog/BlogCTA';
import { Link } from '@/i18n/navigation';
import Script from 'next/script';
import FAQSchema from '@/components/seo/FAQSchema';

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: [
      `${post.category.toLowerCase()} South Carolina`,
      `${post.category.toLowerCase()} tips personal trainer SC`,
      'personal trainer South Carolina blog',
      'fitness advice South Carolina',
      'Kyle Belk fitness tips',
      'Belk Body Lab blog',
      `${post.category.toLowerCase()} guide SC`,
      'South Carolina fitness coaching',
    ],
    alternates: {
      canonical: locale === 'en' ? `${siteUrl}/blog/${slug}` : `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        en: `${siteUrl}/blog/${slug}`,
        es: `${siteUrl}/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: locale === 'en' ? `${siteUrl}/blog/${slug}` : `${siteUrl}/${locale}/blog/${slug}`,
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.belkbodylab.com';

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.metaDescription,
    "image": [`${siteUrl}${post.image}`],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
      "@type": "Person",
      "name": "Kyle Belk",
      "url": locale === 'en' ? `${siteUrl}/about` : `${siteUrl}/${locale}/about`
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Belk Body Lab",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/brand/belk-body-lab-logo.png`
      }
    }
  };

  return (
    <>
      <Script
        id={`article-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {content.faqs && <FAQSchema id={`blog-faq-${slug}`} items={content.faqs} />}
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

          {/* Breadcrumb UI */}
          <nav className="flex items-center gap-2 mb-12 text-[10px] font-bold uppercase tracking-widest text-white/20" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent-green transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/40 truncate max-w-[200px]">{content.title}</span>
          </nav>

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

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="container-custom px-6 lg:px-10 pb-24 lg:pb-40">
          <div className="w-full h-px bg-white/5 mb-24" />
          <h2 className="font-heading font-black text-white text-3xl md:text-5xl uppercase tracking-tighter mb-16">
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
