'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: t('home'),      href: '/'          as const },
    { label: t('about'),     href: '/about'     as const },
    { label: t('packages'),  href: '/packages'  as const },
    { label: t('portfolio'), href: '/portfolio' as const },
    { label: t('blog'),      href: '/blog'      as const },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-500 flex justify-center backdrop-blur-none ${scrolled
          ? 'py-4 !bg-transparent' : 'py-6 !bg-transparent'
          }`}
      >
        <div className="w-full max-w-[1600px] px-4 md:px-8 lg:px-12 flex items-center justify-between">

          {/* LEFT SIDE: Logo & Nav */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Logo Pill */}
            <Link href="/" className="flex items-center justify-center bg-white rounded-full px-5 py-2.5 md:px-7 md:py-3 hover:opacity-90 transition-all shadow-lg shadow-white/10">
              <Image
                src="/images/brand/belk-body-lab-logo.png"
                alt="Belk Body Lab"
                width={140}
                height={40}
                className="h-5 md:h-6 w-auto object-contain brightness-0"
                priority
              />
            </Link>

            {/* Desktop Nav Pill */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 bg-[#2A2A2A] px-8 py-3.5 rounded-full border border-white/5 shadow-lg">
              {navLinks?.map((link, index) => (
                <React.Fragment key={link?.href}>
                  <Link
                    href={link?.href}
                    className={`font-semibold text-[13px] tracking-wide transition-colors hover:text-white ${pathname === link?.href || (pathname === '/' && link.href === '/') ? 'text-white' : 'text-white/60'
                      }`}
                  >
                    {link?.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: LocaleSwitcher + CTAs + Mobile Menu */}
          <div className="flex items-center gap-3">

            {/* Language Switcher */}
            <LocaleSwitcher />

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#contact"
                className="px-8 py-3.5 bg-[#2A2A2A] border border-white/5 text-white/90 text-[13px] font-semibold tracking-wide rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
              >
                {t('contact')}
              </Link>

              <Link
                href="/#contact"
                className="flex items-center gap-4 bg-white pl-7 pr-2 py-1.5 rounded-full text-black text-[14px] font-bold hover:bg-gray-100 transition-all group shadow-lg"
              >
                {t('getStarted')}
                <div className="w-9 h-9 rounded-full bg-[#111111] group-hover:bg-accent-green flex items-center justify-center text-white group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </Link>
            </div>

            <button
              className="lg:hidden flex flex-col gap-1.5 px-4 py-4 md:px-5 md:py-4 bg-white rounded-full shadow-lg ml-auto transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''} !bg-[#0E0E0E]`} style={{ zIndex: 600 }}>

        {/* MENU HEADER */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/" onClick={() => setMenuOpen(false)} className="group">
            <Image
              src="/images/brand/belk-body-lab-logo.png"
              alt="Logo"
              width={100}
              height={30}
              className="h-5 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* MAIN NAV */}
        <nav className="flex flex-col gap-6 mb-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">{t('menuTitle') || 'Navigation'}</p>
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline gap-4"
              style={{
                transitionDelay: `${0.1 + i * 0.08}s`,
                transitionProperty: 'all',
                transitionDuration: '0.6s',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <span className="text-[10px] sm:text-xs font-black text-accent-green opacity-60 transition-opacity">0{i + 1}</span>
              <span className="font-display text-4xl sm:text-5xl font-bold uppercase text-white group-hover:text-white transition-colors leading-none">
                {link?.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* MENU FOOTER */}
        <div
          className="mt-auto pt-10 border-t border-white/5"
          style={{
            transitionDelay: '0.6s',
            transitionProperty: 'all',
            transitionDuration: '0.8s',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-8 mb-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">{t('followUs') || 'Social Connect'}</p>
              <div className="flex gap-5">
                {['Instagram', 'TikTok', 'YouTube']?.map((s) => (
                  <a key={s} href="#" className="text-[11px] font-black uppercase tracking-widest text-white hover:text-white/60 transition-colors">
                    {s.substring(0, 2)}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4 text-right">{t('language') || 'Language'}</p>
              <LocaleSwitcher />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center px-8 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-100 transition-all shadow-xl"
            >
              {t('getStarted')}
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center px-8 py-5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:border-white transition-all"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}