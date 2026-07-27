import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { blogPosts } from '@/data/blog/posts';

export default function BlogLatest() {
  const latestPost = blogPosts[blogPosts.length - 1]; // The one we just added
  if (!latestPost) return null;

  return (
    <section className="py-20 md:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="container-custom px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-heading font-black text-white text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              Latest from the <span className="text-accent-green">Blog</span>
            </h2>
            <p className="text-white/50 max-w-xl">
              Science-backed protocols, training guides, and nutrition advice from South Carolina's top personal trainer.
            </p>
          </div>
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center h-14 px-8 border border-white/10 rounded-full text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
          >
            View All Articles
          </Link>
        </div>

        <Link 
          href={`/blog/${latestPost.slug}`}
          className="group block relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-6 lg:p-12 items-center">
            <div className="relative aspect-video lg:aspect-square w-full rounded-3xl overflow-hidden mb-8 lg:mb-0">
              <Image 
                src={latestPost.image} 
                alt={latestPost.en.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-text-muted text-xs font-bold uppercase tracking-widest mb-6">
                <span className="text-accent-green">{latestPost.category}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <span>{latestPost.date}</span>
              </div>
              <h3 className="font-heading font-black text-white text-3xl md:text-5xl uppercase leading-tight mb-6 group-hover:text-accent-green transition-colors">
                {latestPost.en.title}
              </h3>
              <p className="text-white/50 text-lg mb-8 line-clamp-3">
                {latestPost.en.excerpt}
              </p>
              <div className="inline-flex items-center gap-4 text-accent-green font-bold uppercase tracking-widest text-xs">
                Read Article
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
