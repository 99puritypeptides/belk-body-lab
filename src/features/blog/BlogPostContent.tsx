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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="prose prose-invert prose-lg md:prose-xl max-w-none 
          prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-5xl lg:prose-h1:text-7xl prose-h1:mb-12 prose-h1:leading-tight
          prose-h2:text-4xl lg:prose-h2:text-5xl prose-h2:mt-24 prose-h2:mb-8 prose-h2:leading-tight prose-h2:tracking-wider
          prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:leading-snug
          prose-p:text-white/80 prose-p:leading-loose prose-p:mb-8 prose-p:font-light
          prose-li:text-white/80 prose-li:leading-loose prose-li:mb-3
          prose-strong:text-white prose-strong:font-bold
          prose-a:text-accent-green prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-a:transition-all
          prose-blockquote:border-l-accent-green prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:italic
          prose-img:rounded-[2rem] prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:my-16"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
}
