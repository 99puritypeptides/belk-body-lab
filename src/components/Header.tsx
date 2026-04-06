'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Packages', href: '/packages' },
  { label: 'Portfolio', href: '/portfolio' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-500 ${scrolled
            ? 'py-4 bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle' : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3 group">
            <AppLogo size={36} />
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-accent-green transition-colors">
              BelkBodyLab
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`nav-link text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${pathname === link?.href ? 'text-accent-green active' : 'text-text-muted hover:text-white'
                  }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/homepage#contact"
              className="px-6 py-3 bg-accent-green text-bg-primary text-[11px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Start Today
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <button
          className="absolute top-6 right-6 p-3 text-text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks?.map((link, i) => (
          <Link
            key={link?.href}
            href={link?.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-bold italic text-white hover:text-accent-green transition-colors"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {link?.label}
          </Link>
        ))}

        <Link
          href="/homepage#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-4 bg-accent-green text-bg-primary text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all"
        >
          Start Today
        </Link>

        <div className="absolute bottom-10 flex gap-6">
          {['Instagram', 'TikTok', 'YouTube']?.map((s) => (
            <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-subtle hover:text-accent-green transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}