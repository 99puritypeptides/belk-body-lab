'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import LocaleSwitcher from './LocaleSwitcher';

export default function Footer() {
  const t = useTranslations('footer');

  const navLinks = [
    { label: t('home'), href: '/' as const },
    { label: t('about') || 'About', href: '/about' as const },
    { label: t('packages'), href: '/packages' as const },
    { label: t('portfolio'), href: '/portfolio' as const },
    { label: t('blog'), href: '/blog' as const },
    { label: t('contact'), href: '/#contact' as const },
    { label: t('privacy'), href: '#' as const },
    { label: t('terms'), href: '#' as const },
  ];

  return (
    <footer className="relative z-10 bg-bg-primary pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">

        {/* BRAND HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/brand/belk-body-lab-logo.png"
              alt="Belk Body Lab"
              width={160}
              height={50}
              className="h-20 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* TECHNICAL RULER */}
        <div className="mb-12">
          <div className="footer-ruler mb-4" />
          <div className="flex justify-between px-1 text-[9px] font-black tracking-widest text-white/20 uppercase">
            <span>240LBS</span>
            <span>220LBS</span>
            <span>200LBS</span>
            <span>180LBS</span>
            <span>160LBS</span>
            <span>140LBS</span>
            <span>120LBS</span>
            <span className="hidden sm:inline">100LBS</span>
            <span className="hidden sm:inline">80LBS</span>
            <span className="hidden md:inline">60LBS</span>
          </div>
        </div>

        {/* PILL NAVIGATION */}
        <div className="flex flex-wrap gap-3 mb-32 relative z-10">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-pill">
              {link.label}
            </Link>
          ))}
        </div>

        {/* MASSIVE BACKGROUND TEXT */}
        <div className="massive-outline-text">
          BELK
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">
            <span className="text-white/40">{t('copyright') || '© 2026 Belk Digital. All rights reserved.'}</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px]">✓</div>
              <span>NASM Certified Professional</span>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <LocaleSwitcher />
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center gap-6">
                {[
                  {
                    label: 'X', href: '#', icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    )
                  },
                  {
                    label: 'IG', href: '#', icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    )
                  },
                  {
                    label: 'LI', href: '#', icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    )
                  },
                ].map((s) => (
                  <a key={s.label} href={s.href} className="text-white/40 hover:text-white transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}