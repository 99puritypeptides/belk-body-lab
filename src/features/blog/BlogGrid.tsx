'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { BlogPost, BlogCategory } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
}

const categories: (BlogCategory | 'All')[] = ['All', 'Fat Loss', 'Muscle Gain', 'Nutrition', 'Mindset', 'Lifestyle'];

export default function BlogGrid({ posts }: BlogGridProps) {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState<(BlogCategory | 'All')>('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="grid" className="relative py-24 lg:py-40 bg-black overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      <div className="container-custom px-6 lg:px-20 relative z-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-start gap-4 mb-24 lg:mb-32">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 border ${
                activeCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'text-white/30 border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-48"
          >
            <div className="w-16 h-[1px] bg-white/10 mx-auto mb-8" />
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[1em]">
              No Protocols Found
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
