'use client';

import React, { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightIcon, 
  CheckIcon, 
  ShieldCheckIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
  TrophyIcon,
  FireIcon,
  BoltIcon,
  ScaleIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import PremiumIcon from '@/components/ui/PremiumIcon';
import { sendContactForm } from '@/actions/contact';

interface GoalCardProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function GoalCard({ label, icon, isActive, onClick }: GoalCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center gap-4 p-6 rounded-3xl border transition-all duration-500
        ${isActive 
          ? 'bg-accent-green border-accent-green shadow-[0_0_30px_rgba(170,255,0,0.2)]' 
          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'}
      `}
    >
      <div className={`transition-transform duration-500 ${isActive ? 'text-black scale-110' : 'text-white/40'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-black uppercase tracking-widest text-center ${isActive ? 'text-black' : 'text-white/60'}`}>
        {label}
      </span>
    </button>
  );
}

export default function ContactFormPage() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    { id: 'fat-loss', label: t('goal1'), icon: <FireIcon className="w-6 h-6" /> },
    { id: 'muscle', label: t('goal2'), icon: <BoltIcon className="w-6 h-6" /> },
    { id: 'recomp', label: t('goal3'), icon: <ScaleIcon className="w-6 h-6" /> },
    { id: 'comp', label: t('goal4'), icon: <TrophyIcon className="w-6 h-6" /> },
    { id: 'fitness', label: t('goal5'), icon: <UserGroupIcon className="w-6 h-6" /> },
    { id: 'other', label: t('goal6'), icon: <QuestionMarkCircleIcon className="w-6 h-6" /> },
  ];

  const handleAction = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendContactForm(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        // Optionally handle errors here
        console.error("Failed to send contact form", result.error);
      }
    });
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#080808] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent-green/[0.03] blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-blue-500/[0.02] blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Transmission Channel Open</span>
              </div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 backdrop-blur-md">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent-green">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green">Serving Charleston & Surrounding Areas</span>
              </div>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">
              Submit Your <br />
              <span className="text-accent-green">Intake Protocol</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0c0c0c] border border-accent-green/20 rounded-[3rem] p-12 lg:p-24 text-center space-y-10"
              >
                <div className="w-24 h-24 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(170,255,0,0.15)]">
                  <CheckIcon className="w-12 h-12 text-accent-green" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-5xl font-black text-white uppercase tracking-tighter">{t('successTitle')}</h3>
                  <p className="text-white/40 text-xl font-light leading-relaxed max-w-lg mx-auto">{t('successDesc')}</p>
                </div>
                <button 
                  onClick={() => { setSubmitted(false); setSelectedGoal(null); }}
                  className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  {t('submitAnother')}
                </button>
              </motion.div>
            ) : (
              <form action={handleAction} className="space-y-10">
                
                {/* SECTION 1: Personal Intelligence */}
                <div className="bg-[#0c0c0c] border border-white/5 rounded-[3rem] p-8 lg:p-16 space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                      <IdentificationIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight">Personal Intelligence</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-accent-green transition-colors">{t('fullName')}</label>
                      <div className="relative">
                        <UserIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/10 group-focus-within:text-accent-green transition-colors" />
                        <input 
                          type="text" required placeholder="Marcus Thompson" name="fullName"
                          className="w-full bg-white/[0.01] border border-white/5 rounded-2xl pl-16 pr-6 py-5 text-white focus:outline-none focus:border-accent-green/30 focus:bg-white/[0.03] transition-all text-lg font-light"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-accent-green transition-colors">{t('email')}</label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/10 group-focus-within:text-accent-green transition-colors" />
                        <input 
                          type="email" required placeholder="marcus@email.com" name="email"
                          className="w-full bg-white/[0.01] border border-white/5 rounded-2xl pl-16 pr-6 py-5 text-white focus:outline-none focus:border-accent-green/30 focus:bg-white/[0.03] transition-all text-lg font-light"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 group md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-accent-green transition-colors">{t('phone')}</label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/10 group-focus-within:text-accent-green transition-colors" />
                        <input 
                          type="tel" required placeholder="(555) 555-5555" name="phone"
                          className="w-full bg-white/[0.01] border border-white/5 rounded-2xl pl-16 pr-6 py-5 text-white focus:outline-none focus:border-accent-green/30 focus:bg-white/[0.03] transition-all text-lg font-light"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Objective Selection */}
                <div className="bg-[#0c0c0c] border border-white/5 rounded-[3rem] p-8 lg:p-16 space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                      <BoltIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight">Primary Objective</h4>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {goals.map((goal) => (
                      <GoalCard 
                        key={goal.id}
                        {...goal}
                        isActive={selectedGoal === goal.id}
                        onClick={() => setSelectedGoal(goal.id)}
                      />
                    ))}
                  </div>
                  <input type="hidden" name="goal" required value={selectedGoal || ''} />
                </div>

                {/* SECTION 3: Detailed Context */}
                <div className="bg-[#0c0c0c] border border-white/5 rounded-[3rem] p-8 lg:p-16 space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                      <ChatBubbleLeftRightIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight">Diagnostic Context</h4>
                  </div>

                  <div className="space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-accent-green transition-colors">Project Notes & Challenges</label>
                    <textarea 
                      rows={5}
                      name="notes"
                      className="w-full bg-white/[0.01] border border-white/5 rounded-[2rem] px-8 py-8 text-white focus:outline-none focus:border-accent-green/30 focus:bg-white/[0.03] transition-all text-lg font-light resize-none"
                      placeholder={t('contextPlaceholder')}
                    />
                  </div>

                  <div className="pt-10">
                    <motion.button 
                      type="submit" 
                      disabled={isPending}
                      whileHover="hover"
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full h-24 rounded-3xl overflow-hidden bg-black border border-white/10 transition-all duration-500"
                    >
                      {/* Interactive Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-green/0 via-accent-green/5 to-accent-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Inner Content */}
                      <div className="relative z-10 h-full flex items-center justify-between px-10 md:px-16">
                        <div className="flex flex-col items-start text-left">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-green mb-1">
                            {isPending ? 'Transmitting' : 'Final Step'}
                          </span>
                          <span className="text-white text-xl md:text-2xl font-black uppercase tracking-tight">
                            {isPending ? 'Submitting...' : 'Submit Application'}
                          </span>
                        </div>
 
                        <div className="w-16 h-16 rounded-2xl bg-accent-green flex items-center justify-center text-black transition-all duration-500 shadow-[0_0_30px_rgba(170,255,0,0.3)]">
                          {isPending ? (
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <BoltIcon className="w-8 h-8" />
                            </motion.div>
                          ) : (
                            <PremiumIcon name="arrow" size={32} color="#000000" />
                          )}
                        </div>
                      </div>

                      {/* Moving Border Highlight */}
                      <div className="absolute inset-0 border border-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-accent-green/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    </motion.button>
                    
                    <div className="flex items-center justify-center gap-4 mt-12 opacity-30">
                      <ShieldCheckIcon className="w-5 h-5 text-white" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Encrypted Diagnostic Transmission</span>
                    </div>
                  </div>
                </div>

              </form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* HQ Signal Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green">Operational Headquarters</span>
              </div>
              <h3 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Charleston <br />
                <span className="text-white/20">South Carolina</span>
              </h3>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                Belk Body Lab operates out of Charleston, SC, serving high-performance individuals locally and globally through elite digital protocols.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Coordinates</span>
                  <span className="text-white font-mono text-sm tracking-widest">32.7765° N, 79.9311° W</span>
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Service Area</span>
                  <span className="text-white text-sm font-bold uppercase tracking-widest">Greater Charleston Area</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 group">
              <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000">
                 {/* Stylized Map Placeholder - In production, this would be a dark-themed Google Map */}
                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent-green flex items-center justify-center shadow-[0_0_50px_rgba(170,255,0,0.3)] animate-bounce">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
