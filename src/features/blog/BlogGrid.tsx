'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost, BlogCategory } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
}

const categories: (BlogCategory | 'All')[] = ['All', 'Fat Loss', 'Muscle Gain', 'Nutrition', 'Mindset', 'Lifestyle'];

export default function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<(BlogCategory | 'All')>('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="grid" className="relative py-24 lg:py-32 bg-[#050505]">
      <div className="container-custom px-6 lg:px-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-accent-green text-black border-accent-green shadow-[0_0_20px_rgba(170,255,0,0.3)]' 
                  : 'bg-white/5 text-white/60 border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
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
            className="text-center py-32"
          >
            <p className="text-text-muted text-lg">No articles found in this category yet. Stay tuned for updates.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
