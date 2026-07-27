'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  CameraIcon,
  PlayCircleIcon,
  FilmIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export default function ContactSection() {
  const t = useTranslations('contact');

  const goals = [
    t('goal1'), t('goal2'), t('goal3'), t('goal4'), t('goal5'), t('goal6'),
  ];

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', goal: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      // Simulation or actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ), 
      label: t('locLabel'), value: t('locValue'), href: 'https://www.google.com/maps/search/?api=1&query=Charleston+SC' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ), 
      label: t('igLabel'), value: t('igValue'), href: 'https://www.instagram.com/kylebelk/' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 976.98 1082" fill="currentColor">
          <path d="M770.35,500.35c-1.35-156.85-86.39-251.37-230.02-251.37-95.87,0-176.5,43.36-218.85,112.47l92.82,64.71c24.05-37.94,57.25-69.45,118.23-69.45,68.77,0,104.34,38.28,114.5,109.42-33.2-5.08-66.4-7.79-100.61-7.79-185.65,0-273.05,84.02-273.05,195.13s87.4,179.55,216.14,179.55c141.27,0,225.62-95.19,260.18-213.09,35.91,16.26,60.64,54.2,60.64,111.12,0,152.45-175.82,235.45-324.88,235.45-219.86,0-363.5-144.32-363.5-379.08,0-287.62,190.05-471.91,445.48-471.91,171.42,0,256.11,75.21,313.7,176.16l94.86-66.4C913.31,94.5,773.4,1,563.36,1,228.65,1,1,238.48,1,583.01c0,315.06,222.91,497.99,488.51,497.99,219.52,0,441.42-128.05,441.42-347.24,0-114.5-65.72-190.39-160.58-233.41h0ZM485.44,718.85c-48.44,0-91.13-23.04-91.13-65.38,0-66.74,81.98-87.06,162.27-87.06,30.49,0,60.3,2.03,86.72,7.79-18.97,86.72-75.21,144.66-157.87,144.66h0Z" />
        </svg>
      ), 
      label: t('thLabel'), value: t('thValue'), href: 'https://www.threads.net/@kylebelk' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.43a6.33 6.33 0 0 0-1.01-.08 6.34 6.34 0 0 0-6.14 7.53 6.34 6.34 0 0 0 10.73 2.19V8.79a9.6 9.6 0 0 0 5.7 1.83V7.17a4.83 4.83 0 0 1-1.01-.48z"/>
        </svg>
      ), 
      label: t('ttLabel'), value: t('ttValue'), href: 'https://www.tiktok.com/@kyle.belk/' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ), 
      label: t('emailLabel'), value: t('emailValue'), href: `mailto:${t('emailValue')}` 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ), 
      label: t('phoneLabel'), value: t('phoneValue'), href: `tel:${t('phoneValue').replace(/\D/g, '')}` 
    },
  ];

  const processSteps = [
    { step: '01', title: t('step1Title'), desc: t('step1Desc') },
    { step: '02', title: t('step2Title'), desc: t('step2Desc') },
    { step: '03', title: t('step3Title'), desc: t('step3Desc') },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-40 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/[0.03] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-green/[0.03] blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-start">
          
          {/* LEFT: Information & Process */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-1 bg-accent-green mb-8" />
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8">
                {t('title')} <br />
                <span className="text-accent-green">{t('titleHighlight')}</span>
              </h2>
              <p className="text-white/50 text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                {t('description')}
              </p>
            </motion.div>

            {/* Steps / Process */}
            <div className="space-y-12">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-green/60">
                {t('processTitle')}
              </h4>
              <div className="grid grid-cols-1 gap-8">
                {processSteps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white font-black text-xs group-hover:border-accent-green transition-colors">
                        {step.step}
                      </div>
                      {i !== processSteps.length - 1 && (
                        <div className="w-px h-full bg-white/5 my-2" />
                      )}
                    </div>
                    <div className="pt-1">
                      <h5 className="text-white font-bold text-lg uppercase mb-2 tracking-wide">{step.title}</h5>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${link.label}: ${link.value}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="text-accent-green group-hover:scale-110 transition-transform">{link.icon}</div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/60">{link.label}</p>
                    <p className="text-xs font-bold text-white/80">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: The Intake Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-green to-transparent" />
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mx-auto">
                      <CheckIcon className="w-10 h-10 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white uppercase mb-4">{t('successTitle')}</h3>
                      <p className="text-white/50 text-lg">{t('successDesc')}</p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-accent-green font-black text-xs uppercase tracking-widest hover:underline"
                    >
                      {t('submitAnother')}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="mb-12">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-2">
                        {t('formTitle')} <span className="text-accent-green">{t('formTitleBold')}</span>
                      </h3>
                      <p className="text-white/60 text-sm font-medium">{t('formSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{t('fullName')}</label>
                        <input 
                          type="text" name="name" required
                          className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent-green transition-colors text-lg font-light"
                          placeholder="Marcus Thompson"
                        />
                      </div>
                      <div className="relative space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{t('email')}</label>
                        <input 
                          type="email" name="email" required
                          className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent-green transition-colors text-lg font-light"
                          placeholder="marcus@email.com"
                        />
                      </div>
                    </div>

                    <div className="relative space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{t('phone')}</label>
                      <input 
                        type="tel" name="phone"
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent-green transition-colors text-lg font-light"
                        placeholder="(404) 555-0182"
                      />
                    </div>

                    <div className="relative space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{t('goal')}</label>
                      <select 
                        name="goal" required
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent-green transition-colors text-lg font-light appearance-none"
                      >
                        <option value="" disabled className="bg-black text-white/40">{t('goalPlaceholder')}</option>
                        {goals.map(g => <option key={g} value={g} className="bg-black text-white">{g}</option>)}
                      </select>
                    </div>

                    <div className="relative space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{t('context')}</label>
                      <textarea 
                        name="message" rows={3}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accent-green transition-colors text-lg font-light resize-none"
                        placeholder={t('contextPlaceholder')}
                      />
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit" disabled={isSubmitting}
                        className="group relative w-full py-6 bg-accent-green text-black font-black text-sm uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? t('submitting') : t('submit')}
                          {!isSubmitting && <ArrowRightIcon className="w-5 h-5" />}
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      </button>
                      
                      <div className="flex items-center justify-center gap-3 mt-8 opacity-40">
                        <ShieldCheckIcon className="w-4 h-4 text-white" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{t('disclaimer')}</span>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}