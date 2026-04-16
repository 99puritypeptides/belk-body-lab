'use client';

import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogFeaturedProps {
  posts: BlogPost[];
}

export default function BlogFeatured({ posts }: BlogFeaturedProps) {
  const featuredPosts = posts.filter(p => p.featured).slice(0, 1);

  if (featuredPosts.length === 0) return null;

  return (
    <section className="relative py-20 lg:py-32 bg-[#050505]">
      <div className="container-custom px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-accent-green" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent-green">Featured Article</span>
        </div>
        
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} featured />
        ))}
      </div>
    </section>
  );
}
