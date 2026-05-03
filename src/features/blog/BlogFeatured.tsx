'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogFeaturedProps {
  posts: BlogPost[];
}

export default function BlogFeatured({ posts }: BlogFeaturedProps) {
  const t = useTranslations('blog');
  const featuredPosts = posts.filter(p => p.featured).slice(0, 1);

  if (featuredPosts.length === 0) return null;

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 bg-[#050505]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-custom px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-green">
                {t('grid.featured')}
              </span>
            </div>
            <h2 className="text-white text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-none">
              Primary <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Analysis</span>
            </h2>
          </div>
          
          <div className="hidden lg:block">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[1em] vertical-text">
              PROTOCOL.v2
            </p>
          </div>
        </div>
        
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} featured />
        ))}
      </div>
    </section>
  );
}
