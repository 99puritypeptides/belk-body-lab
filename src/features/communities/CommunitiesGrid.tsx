'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

const communityKeys = [
  'charleston',
  'mountPleasant',
  'danielIsland',
  'westAshley',
  'summerville',
  'johnsIsland',
  'isleOfPalms',
  'northCharleston',
  'jamesIsland',
  'gooseCreek'
];

// Map of images to match the translations (using Unsplash IDs)
const communityImages: Record<string, string> = {
  'charleston': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
  'mountPleasant': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
  'danielIsland': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
  'westAshley': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
  'summerville': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
  'johnsIsland': 'https://images.unsplash.com/photo-1594882645126-14020914d58d',
  'isleOfPalms': 'https://images.unsplash.com/photo-1483721310020-03333e577078',
  'northCharleston': 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
  'jamesIsland': 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
  'gooseCreek': 'https://images.unsplash.com/photo-1550345332-09e3ac987658'
};

export default function CommunitiesGrid() {
  const tGrid = useTranslations('communities.grid');

  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={tGrid(`${key}.slug`) as any}
                className="group block relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 transition-all duration-700 bg-black"
              >
                {/* Background Image */}
                <Image
                  src={`${communityImages[key]}?auto=format&fit=crop&q=80&w=800`}
                  alt={tGrid(`${key}.name`)}
                  fill
                  className="object-cover brightness-[0.4] grayscale group-hover:grayscale-0 group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Noise/Grain Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                
                {/* Progressive Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl flex items-center justify-center border border-white/10">
                      <MapPin className="w-5 h-5 text-accent-green" />
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Charleston SC</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-2 leading-none tracking-tight uppercase group-hover:text-accent-green transition-colors duration-500">
                        {tGrid(`${key}.name`)}
                      </h3>
                      <div className="h-0.5 w-12 bg-accent-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                    </div>
                    
                    <p className="text-sm text-white/50 font-medium uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                      {tGrid(`${key}.intent`)}
                    </p>

                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      View Insights
                      <div className="w-8 h-px bg-accent-green" />
                      <ArrowRight className="w-4 h-4 text-accent-green" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
