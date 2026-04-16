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
  ShieldCheckIcon
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
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formState) });
      const result = await response.json();
      if (result.success) setSubmitted(true);
      else setError(result.message || 'Something went wrong. Please try again.');
    } catch {
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-transparent border-b border-gray-800 px-0 py-4 text-white text-base sm:text-lg font-light placeholder-gray-700 focus:outline-none focus:border-accent-green transition-colors rounded-none";

  const socialLinks = [
    { icon: <MapPinIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />, label: t('locLabel'), value: t('locValue') },
    { icon: <CameraIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />, label: t('igLabel'), value: t('igValue') },
    { icon: <FilmIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />, label: t('ttLabel'), value: t('ttValue') },
    { icon: <PlayCircleIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />, label: t('ytLabel'), value: t('ytValue') },
  ];

  const processSteps = [
    { step: '01', title: t('step1Title'), desc: t('step1Desc') },
    { step: '02', title: t('step2Title'), desc: t('step2Desc') },
    { step: '03', title: t('step3Title'), desc: t('step3Desc') },
  ];

  return (
    <section id="contact" className="relative z-10 py-32 lg:py-48 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-accent-green" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-accent-green">{t('label')}</span>
              </div>
              <h2 className="font-display font-black leading-[1.05] tracking-tighter text-white mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
                {t('title')} <br />
                <span className="italic text-accent-green pr-2">{t('titleHighlight')}</span>
              </h2>
              <h3 className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed mb-14">{t('description')}</h3>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}>
              {socialLinks.map((item, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="group flex flex-col p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 cursor-default backdrop-blur-md">
                  <div className="mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-inner">{item.icon}</div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{item.label}</span>
                  <span className="text-sm sm:text-base text-gray-200 font-medium tracking-wide">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="border-l pl-8 space-y-10" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent-green mb-8 relative -left-8 bg-[#050505] inline-block pr-4">{t('processTitle')}</h4>
              {processSteps.map((process, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 bg-black border-[2px] border-accent-green rounded-full shadow-[0_0_12px_rgba(170,255,0,0.4)]" />
                  <span className="text-[10px] font-black tracking-widest text-gray-600 mb-2 block">{process.step}</span>
                  <p className="text-sm sm:text-base font-bold text-white tracking-wide mb-2">{process.title}</p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-30" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center justify-center text-center py-20">
                    <div className="w-24 h-24 rounded-full bg-accent-green/10 flex items-center justify-center mb-8 border border-accent-green/30 shadow-[0_0_60px_rgba(170,255,0,0.2)]">
                      <svg className="w-10 h-10 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-display font-black text-4xl sm:text-5xl text-white mb-6 tracking-tight">
                      {t('successTitle')} <span className="italic text-accent-green">{t('successHighlight')}</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md mx-auto">{t('successDesc')}</p>
                    <button onClick={() => setSubmitted(false)} className="group flex flex-row items-center gap-4 px-8 py-4 border border-white/20 text-gray-300 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 mx-auto">
                      {t('submitAnother')}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div>
                      <h3 className="font-display font-light text-3xl sm:text-4xl text-white mb-2 tracking-wide">
                        {t('formTitle')} <span className="font-bold">{t('formTitleBold')}</span>
                      </h3>
                      <p className="text-gray-500 text-sm">{t('formSubtitle')}</p>
                    </div>

                    {error && <div className="p-5 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm font-medium tracking-wide">{error}</div>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14">
                      <div className="relative group">
                        <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 transition-colors group-focus-within:text-accent-green">{t('fullName')} <span className="text-accent-green">*</span></label>
                        <input type="text" name="name" required placeholder="e.g. Marcus Thompson" value={formState.name} onChange={handleChange} className={inputClass} />
                      </div>
                      <div className="relative group">
                        <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 transition-colors group-focus-within:text-accent-green">{t('email')} <span className="text-accent-green">*</span></label>
                        <input type="email" name="email" required placeholder="marcus@email.com" value={formState.email} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 transition-colors group-focus-within:text-accent-green">{t('phone')}</label>
                      <input type="tel" name="phone" placeholder="(404) 555-0182" value={formState.phone} onChange={handleChange} className={inputClass} />
                    </div>

                    <div className="relative group">
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 transition-colors group-focus-within:text-accent-green">{t('goal')} <span className="text-accent-green">*</span></label>
                      <select name="goal" required value={formState.goal} onChange={handleChange} className={`${inputClass} cursor-pointer appearance-none bg-[#0f0f0f] border-b border-gray-800`}>
                        <option value="" disabled className="text-gray-500">{t('goalPlaceholder')}</option>
                        {goals.map((g) => <option key={g} value={g} className="bg-[#111] text-white py-2">{g}</option>)}
                      </select>
                      <div className="absolute right-0 bottom-4 pointer-events-none text-gray-500 group-focus-within:text-accent-green transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 transition-colors group-focus-within:text-accent-green">{t('context')}</label>
                      <textarea name="message" rows={3} placeholder={t('contextPlaceholder')} value={formState.message} onChange={handleChange} className={`${inputClass} resize-none min-h-[100px] leading-relaxed`} />
                    </div>

                    <div className="pt-4">
                      <button type="submit" disabled={isSubmitting} className="group relative flex items-center justify-center w-full py-6 bg-accent-green text-black font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(170,255,0,0.15)] hover:shadow-[0_0_60px_rgba(170,255,0,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                        <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
                          {isSubmitting ? t('submitting') : t('submit')}
                          {!isSubmitting && <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                      </button>
                      <div className="flex items-center justify-center gap-3 mt-6">
                        <ShieldCheckIcon className="w-4 h-4 text-gray-600" />
                        <p className="text-center text-gray-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">{t('disclaimer')}</p>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}