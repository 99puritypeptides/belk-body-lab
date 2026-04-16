'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import {
  ArrowTrendingUpIcon,
  ScaleIcon,
  FireIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

type BMIKey = 'underweight' | 'normal' | 'overweight' | 'obese';

function getBMIData(bmi: number): { value: number; key: BMIKey; color: string; position: number } {
  const value = Math.round(bmi * 10) / 10;
  if (bmi < 18.5) return { value, key: 'underweight', color: '#60A5FA', position: Math.min((bmi / 18.5) * 20, 20) };
  if (bmi < 25) return { value, key: 'normal', color: '#4ADE80', position: 20 + ((bmi - 18.5) / 6.5) * 25 };
  if (bmi < 30) return { value, key: 'overweight', color: '#FACC15', position: 45 + ((bmi - 25) / 5) * 25 };
  return { value, key: 'obese', color: '#F87171', position: Math.min(70 + ((bmi - 30) / 10) * 30, 95) };
}

export default function BMICalculator() {
  const t = useTranslations('bmi');
  const [isMetric, setIsMetric] = useState(false);
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [result, setResult] = useState<{ value: number; key: BMIKey; color: string; position: number } | null>(null);

  const handleCalculate = () => {
    let bmiScore = 0;
    if (isMetric) {
      const cm = parseFloat(heightCm) || 0;
      const kg = parseFloat(weightKg) || 0;
      if (cm > 0 && kg > 0) { const m = cm / 100; bmiScore = kg / (m * m); }
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const lbs = parseFloat(weightLbs) || 0;
      const totalInches = ft * 12 + inches;
      if (totalInches > 0 && lbs > 0) bmiScore = (lbs / (totalInches * totalInches)) * 703;
    }
    if (bmiScore > 0) setResult(getBMIData(bmiScore));
    else setResult(null);
  };

  const descriptionMap: Record<BMIKey, string> = {
    underweight: t('descUnderweight'),
    normal: t('descNormal'),
    overweight: t('descOverweight'),
    obese: t('descObese'),
  };

  const categoriesData = [
    { icon: <ArrowTrendingUpIcon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />, title: t('cat1'), range: t('range1'), desc: t('catDesc1') },
    { icon: <ShieldCheckIcon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />, title: t('cat2'), range: t('range2'), desc: t('catDesc2') },
    { icon: <FireIcon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />, title: t('cat3'), range: t('range3'), desc: t('catDesc3') },
    { icon: <ScaleIcon className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />, title: t('cat4'), range: t('range4'), desc: t('catDesc4') },
  ];

  const noSpinnersClass = "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]";

  return (
    <section id="bmi" className="relative z-10 py-24 lg:py-36 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-green/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-green/5 blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-accent-green" />
                <span className="text-[12px] sm:text-xs font-bold uppercase tracking-[0.3em] text-accent-green">{t('label')}</span>
              </div>
              <h2 className="font-display font-black leading-[1.1] tracking-tight text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                {t('title')} <br />
                <span className="italic text-accent-green pr-2">{t('titleHighlight')}</span>
              </h2>
              <h3 className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed mb-10">{t('description')}</h3>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}>
              {categoriesData.map((item, index) => (
                <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors duration-300 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center border border-white/5 shadow-inner">{item.icon}</div>
                    <span className="text-[11px] sm:text-xs font-black tracking-widest text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">{item.range}</span>
                  </div>
                  <h4 className="text-white text-base font-bold tracking-wide uppercase mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Calculator */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-[#111] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-50" />

              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-12">
                <h3 className="font-display font-light tracking-wide text-3xl sm:text-4xl text-white">
                  {t('calculatorTitle')} <span className="font-bold">{t('calculatorBold')}</span>
                </h3>
                <div className="flex p-1 bg-[#1A1A1A] rounded-full border border-white/5 shadow-inner">
                  <button onClick={() => { setIsMetric(false); setResult(null); }} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${!isMetric ? 'bg-white text-black shadow-md' : 'text-gray-500 hover:text-white'}`}>{t('imperial')}</button>
                  <button onClick={() => { setIsMetric(true); setResult(null); }} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isMetric ? 'bg-white text-black shadow-md' : 'text-gray-500 hover:text-white'}`}>{t('metric')}</button>
                </div>
              </div>

              {!isMetric ? (
                <>
                  <div className="grid grid-cols-2 gap-8 sm:gap-10 mb-10">
                    <div className="relative group">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 transition-colors group-focus-within:text-accent-green">{t('heightFt')}</label>
                      <input type="number" placeholder="5" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} className={`w-full bg-transparent border-b-2 border-gray-800 px-2 py-4 text-white text-4xl sm:text-5xl font-light placeholder-gray-800 focus:outline-none focus:border-accent-green transition-all ${noSpinnersClass}`} />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 transition-colors group-focus-within:text-accent-green">{t('heightIn')}</label>
                      <input type="number" placeholder="10" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} className={`w-full bg-transparent border-b-2 border-gray-800 px-2 py-4 text-white text-4xl sm:text-5xl font-light placeholder-gray-800 focus:outline-none focus:border-accent-green transition-all ${noSpinnersClass}`} />
                    </div>
                  </div>
                  <div className="relative group mb-14">
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 transition-colors group-focus-within:text-accent-green">{t('weightLbs')}</label>
                    <input type="number" placeholder="175" value={weightLbs} onChange={(e) => setWeightLbs(e.target.value)} className={`w-full bg-transparent border-b-2 border-gray-800 px-2 py-4 text-white text-4xl sm:text-5xl font-light placeholder-gray-800 focus:outline-none focus:border-accent-green transition-all ${noSpinnersClass}`} />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative group mb-10">
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 transition-colors group-focus-within:text-accent-green">{t('heightCm')}</label>
                    <input type="number" placeholder="180" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className={`w-full bg-transparent border-b-2 border-gray-800 px-2 py-4 text-white text-4xl sm:text-5xl font-light placeholder-gray-800 focus:outline-none focus:border-accent-green transition-all ${noSpinnersClass}`} />
                  </div>
                  <div className="relative group mb-14">
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 transition-colors group-focus-within:text-accent-green">{t('weightKg')}</label>
                    <input type="number" placeholder="80" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} className={`w-full bg-transparent border-b-2 border-gray-800 px-2 py-4 text-white text-4xl sm:text-5xl font-light placeholder-gray-800 focus:outline-none focus:border-accent-green transition-all ${noSpinnersClass}`} />
                  </div>
                </>
              )}

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleCalculate} className="w-full py-6 bg-accent-green text-black font-black text-sm sm:text-base uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_40px_rgba(170,255,0,0.15)] hover:shadow-[0_0_60px_rgba(170,255,0,0.3)] transition-all duration-300 mb-4">
                {t('compute')}
              </motion.button>

              <AnimatePresence>
                {result && (
                  <motion.div initial={{ opacity: 0, height: 0, scale: 0.95 }} animate={{ opacity: 1, height: 'auto', scale: 1 }} exit={{ opacity: 0, height: 0, scale: 0.95 }} transition={{ duration: 0.5, ease: "easeOut" }} className="overflow-hidden">
                    <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-white/5 shadow-inner mt-8">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">{t('score')}</div>
                          <div className="text-6xl sm:text-7xl font-black font-display tracking-tighter" style={{ color: result.color }}>{result.value}</div>
                        </div>
                        <div className="pb-2">
                          <div className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em]" style={{ background: `${result.color}15`, color: result.color, border: `1px solid ${result.color}30` }}>
                            <span className="w-2.5 h-2.5 rounded-full mr-3" style={{ background: result.color }} />
                            {t(`cat${result.key === 'underweight' ? '1' : result.key === 'normal' ? '2' : result.key === 'overweight' ? '3' : '4'}`)}
                          </div>
                        </div>
                      </div>

                      <div className="mb-10">
                        <div className="h-3 w-full bg-gray-900 rounded-full overflow-hidden relative flex">
                          <div className="h-full w-[20%] bg-blue-500/80" />
                          <div className="h-full w-[25%] bg-green-500/80" />
                          <div className="h-full w-[25%] bg-yellow-500/80" />
                          <div className="h-full w-[30%] bg-red-500/80" />
                          <motion.div initial={{ left: 0 }} animate={{ left: `${result.position}%` }} transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }} className="absolute top-0 bottom-0 w-[5px] bg-white shadow-[0_0_12px_white] z-10 rounded-full" style={{ transform: 'translateX(-50%)' }} />
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-gray-500 mt-4">
                          <span className="w-[20%] text-left">{t('rangeUnder')}</span>
                          <span className="w-[25%] text-left">{t('rangeNormal')}</span>
                          <span className="w-[25%] text-left">{t('rangeOver')}</span>
                          <span className="w-[30%] text-right">{t('rangeObese')}</span>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-8">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">{t('diagnosticLabel')}</p>
                        <p className="text-base text-gray-300 leading-relaxed font-light mb-8">{descriptionMap[result.key]}</p>
                        
                        {/* Contextual Link */}
                        <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5 group/link">
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green mb-3">Recommended Reading</p>
                          <Link 
                            href={
                              result.key === 'underweight' ? '/blog/beginner-muscle-building-plan' :
                              result.key === 'normal' ? '/blog/sustainable-shred-long-term-results' :
                              '/blog/fat-loss-guide-science-based'
                            }
                            className="flex items-center justify-between group"
                          >
                            <span className="text-white text-sm font-bold group-hover:text-accent-green transition-colors">
                              {
                                result.key === 'underweight' ? 'The Beginner Muscle Building Plan' :
                                result.key === 'normal' ? 'How to Maintain Your Shredded Physique' :
                                'The Science-Based Guide to Fat Loss'
                              }
                            </span>
                            <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-accent-green group-hover:translate-x-1 transition-all" />
                          </Link>
                        </div>

                        <Link href="/#contact" className="group flex flex-row justify-between items-center w-full py-5 px-8 bg-white border border-white text-black text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-black hover:text-white transition-all duration-500">
                          {t('requestPlan')}
                          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}