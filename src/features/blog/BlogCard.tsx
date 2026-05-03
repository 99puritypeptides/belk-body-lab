'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import PremiumIcon from '@/components/ui/PremiumIcon';
import { BlogPost } from '@/types/blog';
import { useLocale } from 'next-intl';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const MotionLink = motion(Link);

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const locale = useLocale();
  const content = post[locale as 'en' | 'es'] || post.en;

  return (
    <MotionLink
      href={`/blog/${post.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-accent-green/20 transition-all duration-700 luxury-card ${featured ? 'lg:flex-row lg:items-stretch lg:min-h-[500px]' : ''}`}
    >
      {/* Dossier Header - visible on hover or mobile */}
      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent-green/60">PRTCL.SYS</span>
      </div>

      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'lg:w-[55%] h-[300px] lg:h-auto' : 'h-[280px]'}`}>
        <Image
          src={post.image}
          alt={content.title}
          fill
          className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="w-6 h-[1px] bg-accent-green" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-green">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 lg:p-12 ${featured ? 'lg:w-[45%]' : ''} flex flex-col justify-between relative`}>
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">Case.{String(post.id).padStart(2, '0')}</span>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">{post.date}</span>
          </div>

          <h3 className={`font-display font-black uppercase text-white leading-[0.9] tracking-tighter mb-6 transition-colors group-hover:text-accent-green ${featured ? 'text-4xl lg:text-6xl' : 'text-2xl lg:text-3xl'}`}>
            {content.title}
          </h3>

          <p className="text-white/40 text-sm lg:text-base font-light leading-relaxed mb-10 line-clamp-3 lg:line-clamp-4">
            {content.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
              <PremiumIcon name="arrow" size={18} />
            </div>
            <span
              className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-500"
            >
              Read Protocol
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
            <PremiumIcon name="target" size={10} className="text-accent-green" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Modern Grid Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </MotionLink>
  );
}
