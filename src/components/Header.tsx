'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Features', href: '/#features' },
  { label: 'Service', href: '/#service' },
  { label: 'Exercise', href: '/#exercise' },
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
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-500 flex justify-center ${scrolled
          ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
          }`}
      >
        <div className="w-full max-w-[1600px] px-4 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LEFT SIDE: Logo & Nav */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Logo Pill */}
            <Link href="/" className="flex items-center justify-center bg-white rounded-full px-5 py-2.5 md:px-7 md:py-3 hover:opacity-90 transition-opacity shadow-lg">
              <Image
                src="/assets/images/belk-body-lab-logo.png"
                alt="Belk Body Lab"
                width={140}
                height={40}
                className="h-5 md:h-6 w-auto object-contain brightness-0"
                priority
              />
            </Link>

            {/* Desktop Nav Pill */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 bg-[#2A2A2A]/80 backdrop-blur-md px-8 py-3.5 rounded-full border border-white/5 shadow-lg">
              {navLinks?.map((link, index) => (
                <React.Fragment key={link?.href}>
                  <Link
                    href={link?.href}
                    className={`font-semibold text-[13px] tracking-wide transition-colors hover:text-white ${pathname === link?.href ? 'text-white' : 'text-white/60'
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

          {/* RIGHT SIDE: CTAs & Mobile Menu */}
          <div className="flex items-center gap-3">
            
            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#contact"
                className="px-8 py-3.5 bg-[#2A2A2A]/80 backdrop-blur-md border border-white/5 text-white/90 text-[13px] font-semibold tracking-wide rounded-full hover:bg-white/10 hover:text-white transition-colors shadow-lg"
              >
                Contact Us
              </Link>

              <Link
                href="/#contact"
                className="flex items-center gap-4 bg-white pl-7 pr-2 py-1.5 rounded-full text-black text-[14px] font-bold hover:bg-gray-100 transition-colors group shadow-lg"
              >
                Get started
                <div className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 px-4 py-4 md:px-5 md:py-4 bg-white rounded-full shadow-lg ml-auto"
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
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''} !bg-[#0B0B0B]`} style={{ zIndex: 490 }}>
        {navLinks?.map((link, i) => (
          <Link
            key={link?.href}
            href={link?.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-bold uppercase text-white hover:text-[#AAFF00] transition-colors"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {link?.label}
          </Link>
        ))}

        <div className="flex flex-col gap-4 mt-8">
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-8 py-4 bg-[#AAFF00] text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all"
          >
            Contact Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:border-[#AAFF00] hover:text-[#AAFF00] transition-all"
          >
            Get Started
          </Link>
        </div>

        <div className="absolute bottom-10 flex gap-6">
          {['Instagram', 'TikTok', 'YouTube']?.map((s) => (
            <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#AAFF00] transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}