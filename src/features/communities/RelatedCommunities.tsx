'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import { communitiesData } from '@/data/communities/content';
import { motion } from 'framer-motion';

interface RelatedCommunitiesProps {
  currentSlug: string;
  locale: string;
}

export default function RelatedCommunities({ currentSlug, locale }: RelatedCommunitiesProps) {
  // Get all other communities, limit to 4 for a clean grid
  const otherCommunities = Object.values(communitiesData)
    .filter(c => c.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-20 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-accent-green text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Regional Network</span>
            <h2 className="text-white font-display text-4xl md:text-5xl font-bold uppercase leading-none">
              Explore Nearby <br /> <span className="text-white/20">Communities</span>
            </h2>
          </div>
          <Link 
            href="/communities" 
            className="text-white/40 hover:text-accent-green text-[11px] font-black uppercase tracking-widest transition-colors flex items-center gap-3"
          >
            View All Locations
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCommunities.map((community, i) => (
            <motion.div
              key={community.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/${community.slug}` as any}
                className="group block p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-accent-green/30 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mb-4 group-hover:text-accent-green transition-colors">
                  {community.intent}
                </p>
                <h3 className="text-white text-2xl font-display font-bold uppercase mb-2 group-hover:translate-x-1 transition-transform">
                  {community.name}
                </h3>
                <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 mb-6">
                  {community.metaDesc}
                </p>
                <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  Explore Location
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
