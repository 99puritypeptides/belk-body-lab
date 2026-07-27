'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import LocaleSwitcher from './LocaleSwitcher';

export default function Footer() {
  const t = useTranslations('footer');

  const navLinks = [
    { label: t('home'),      href: '/'          as const },
    { label: t('about'),     href: '/about'     as const },
    { label: t('packages'),  href: '/services'  as const },
    { label: t('portfolio'), href: '/portfolio' as const },
    { label: t('blog'),      href: '/blog'      as const },
    { label: t('communities'), href: '/communities' as const },
    { label: t('faq'),       href: '/faq'        as const },
    { label: t('contact'),   href: '/contact'   as const },
  ];

  return (
    <footer className="relative z-10 bg-bg-primary pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">

        {/* BRAND HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/brand/belk-body-lab-logo.png"
              alt="Belk Body Lab Logo - Charleston Fitness Excellence"
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
          <div className="flex justify-between px-1 text-[9px] font-black tracking-widest text-white/50 uppercase">
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
            <span className="text-white/60">{t('copyright') || '© 2026 Belk Body Lab. All rights reserved.'}</span>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent-green" />
            <a href="https://www.belkdigital.com/en" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent-green transition-colors flex items-center gap-2 group">
              Designed & Developed by 
              <span className="text-white group-hover:text-accent-green underline decoration-white/10 underline-offset-4 transition-colors">Belk Digital</span>
            </a>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <LocaleSwitcher />
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center gap-6">
                {[
                  {
                    label: 'TH', href: 'https://www.threads.net/@kylebelk', icon: (
                      <svg width="14" height="14" viewBox="0 0 976.98 1082" fill="currentColor">
                        <path d="M770.35,500.35c-1.35-156.85-86.39-251.37-230.02-251.37-95.87,0-176.5,43.36-218.85,112.47l92.82,64.71c24.05-37.94,57.25-69.45,118.23-69.45,68.77,0,104.34,38.28,114.5,109.42-33.2-5.08-66.4-7.79-100.61-7.79-185.65,0-273.05,84.02-273.05,195.13s87.4,179.55,216.14,179.55c141.27,0,225.62-95.19,260.18-213.09,35.91,16.26,60.64,54.2,60.64,111.12,0,152.45-175.82,235.45-324.88,235.45-219.86,0-363.5-144.32-363.5-379.08,0-287.62,190.05-471.91,445.48-471.91,171.42,0,256.11,75.21,313.7,176.16l94.86-66.4C913.31,94.5,773.4,1,563.36,1,228.65,1,1,238.48,1,583.01c0,315.06,222.91,497.99,488.51,497.99,219.52,0,441.42-128.05,441.42-347.24,0-114.5-65.72-190.39-160.58-233.41h0ZM485.44,718.85c-48.44,0-91.13-23.04-91.13-65.38,0-66.74,81.98-87.06,162.27-87.06,30.49,0,60.3,2.03,86.72,7.79-18.97,86.72-75.21,144.66-157.87,144.66h0Z" />
                      </svg>
                    )
                  },
                  {
                    label: 'IG', href: 'https://www.instagram.com/kylebelk/', icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    )
                  },
                  {
                    label: 'TT', href: 'https://www.tiktok.com/@kyle.belk/', icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                    )
                  },
                  {
                    label: 'MAIL', href: 'mailto:trainwithbelk@gmail.com', icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )
                  },
                ].map((s) => (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`Follow Kyle Belk on ${s.label}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
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