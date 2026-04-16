'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPostContent as ContentType } from '@/types/blog';

interface BlogPostContentProps {
  content: ContentType;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none 
          prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
          prose-h1:text-5xl lg:prose-h1:text-7xl prose-h1:mb-12
          prose-h2:text-4xl lg:prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-8
          prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
          prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-8
          prose-li:text-text-muted prose-li:mb-2
          prose-strong:text-white prose-strong:font-bold
          prose-blockquote:border-l-accent-green prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:italic
          prose-img:rounded-[2rem] prose-img:border prose-img:border-white/10"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
}
