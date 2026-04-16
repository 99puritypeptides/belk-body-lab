'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { BlogPost } from '@/types/blog';
import { useLocale } from 'next-intl';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const locale = useLocale();
  const content = post[locale as 'en' | 'es'] || post.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      group="true"
      className={`relative rounded-[32px] overflow-hidden bg-[#111] border border-white/5 hover:border-accent-green/30 transition-all duration-500 luxury-card ${featured ? 'lg:flex lg:items-center' : ''}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2 h-[300px] lg:h-[450px]' : 'h-[240px]'}`}>
        <Image
          src={post.image}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-accent-green text-black text-[10px] font-black uppercase tracking-widest z-10 transition-transform group-hover:scale-105">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 lg:p-10 ${featured ? 'lg:w-1/2' : ''} flex flex-col h-full`}>
        <div className="flex items-center gap-4 text-text-muted text-[10px] font-bold uppercase tracking-widest mb-4">
          <span>{post.date}</span>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <span>{post.readTime}</span>
        </div>

        <h3 className={`font-heading font-black uppercase text-white leading-tight mb-4 transition-colors group-hover:text-accent-green ${featured ? 'text-3xl lg:text-5xl' : 'text-xl'}`}>
          {content.title}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-3">
          {content.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-[0.2em] group/btn"
        >
          <span className="relative">
            Read Full Post
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-green scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
          </span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-accent-green group-hover/btn:text-black transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(170,255,0,0.05)_0%,transparent_70%)]" />
    </motion.div>
  );
}
