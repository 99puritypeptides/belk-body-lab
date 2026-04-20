'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type BMIKey = 'underweight' | 'normal' | 'overweight' | 'obese';

interface BMIResult {
  value: number;
  key: BMIKey;
  color: string;
  label: string;
  position: number;
}

function getBMIData(bmi: number): BMIResult {
  const value = Math.round(bmi * 10) / 10;
  if (bmi < 18.5) return { value, key: 'underweight', color: '#60A5FA', label: 'Underweight', position: Math.min((bmi / 18.5) * 20, 20) };
  if (bmi < 25)   return { value, key: 'normal',      color: '#A3E635', label: 'Normal',      position: 20 + ((bmi - 18.5) / 6.5) * 30 };
  if (bmi < 30)   return { value, key: 'overweight',  color: '#FACC15', label: 'Overweight',  position: 50 + ((bmi - 25) / 5) * 25 };
  return               { value, key: 'obese',         color: '#F87171', label: 'Obese',       position: Math.min(75 + ((bmi - 30) / 10) * 25, 97) };
}

/* ── Animated counter ───────────────────────────────────────────── */
function AnimatedNumber({ target, color }: { target: number; color: string }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState('0.0');

  useEffect(() => {
    const controls = animate(mv, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(1)),
    });
    return controls.stop;
  }, [target, mv]);

  return (
    <span className="font-display font-black tabular-nums" style={{ color }}>
      {display}
    </span>
  );
}

/* ── Arc Gauge — uses strokeDashoffset (composited, no layout cost) */
function ArcGauge({ position, color }: { position: number; color: string }) {
  const r = 58;
  const cx = 80;
  const cy = 80;
  // Full arc: 240° sweep starting at 150° (bottom-left)
  const startDeg = 150;
  const sweepDeg = 240;
  const circumference = (sweepDeg / 360) * 2 * Math.PI * r;
  const fillLength = (position / 100) * circumference;
  const gapLength = circumference - fillLength;

  const toRad = (d: number) => (d * Math.PI) / 180;
  const arcD = () => {
    const pts: string[] = [];
    const steps = 64;
    for (let i = 0; i <= steps; i++) {
      const deg = startDeg + (i / steps) * sweepDeg;
      const x = cx + r * Math.cos(toRad(deg));
      const y = cy + r * Math.sin(toRad(deg));
      pts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
    }
    return pts.join(' ');
  };
  const d = arcD();

  // Needle tip position
  const needleDeg = startDeg + (position / 100) * sweepDeg;
  const nx = cx + r * Math.cos(toRad(needleDeg));
  const ny = cy + r * Math.sin(toRad(needleDeg));

  return (
    <svg viewBox="0 0 160 130" className="w-full max-w-[200px]" aria-hidden="true">
      {/* Track */}
      <path d={d} fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" />
      {/* Colored glow fill via dashoffset — GPU-composited */}
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={`${circumference}`}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: gapLength }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
      />
      {/* Needle dot — transform only, composited */}
      <motion.circle
        cx={nx}
        cy={ny}
        r="6"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        style={{ originX: `${nx}px`, originY: `${ny}px`, filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </svg>
  );
}

/* ── Input field ────────────────────────────────────────────────── */
function InputField({ label, unit, placeholder, value, onChange }: {
  label: string; unit: string; placeholder: string;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="relative group">
      <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-2 group-focus-within:text-accent-green transition-colors duration-200">
        {label}
      </label>
      <div className="flex items-baseline gap-2 border-b border-white/10 pb-2 group-focus-within:border-accent-green transition-colors duration-300">
        <input
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full bg-transparent text-white font-light placeholder-white/10 focus:outline-none
            text-[2.2rem] leading-none
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
            [-moz-appearance:textfield]
          "
        />
        <span className="text-white/20 text-xs font-bold uppercase tracking-widest shrink-0">{unit}</span>
      </div>
    </div>
  );
}

/* ── Category data ──────────────────────────────────────────────── */
const CATS = [
  { range: '< 18.5',   label: 'Underweight', color: '#60A5FA', tip: 'Prioritize lean mass gains' },
  { range: '18.5–24.9',label: 'Normal',       color: '#A3E635', tip: 'Maintain & optimize' },
  { range: '25–29.9',  label: 'Overweight',   color: '#FACC15', tip: 'Structured cut protocol' },
  { range: '≥ 30',     label: 'Obese',        color: '#F87171', tip: 'Sustainable transformation' },
];

/* ════════════════════════════════════════════════════════════════ */
export default function BMICalculator() {
  const t = useTranslations('bmi');
  const sectionRef = useRef<HTMLElement>(null);

  // ── Minimal parallax: only 1 element, no spring (no lag) ──────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Background text drifts slightly — this is a transform-only op, fully composited
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['4%', '-8%']);

  /* Form state */
  const [isMetric,   setIsMetric]   = useState(false);
  const [heightFt,   setHeightFt]   = useState('');
  const [heightIn,   setHeightIn]   = useState('');
  const [weightLbs,  setWeightLbs]  = useState('');
  const [heightCm,   setHeightCm]   = useState('');
  const [weightKg,   setWeightKg]   = useState('');
  const [result,     setResult]     = useState<BMIResult | null>(null);
  const [shake,      setShake]      = useState(false);

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
      const totalIn = ft * 12 + inches;
      if (totalIn > 0 && lbs > 0) bmiScore = (lbs / (totalIn * totalIn)) * 703;
    }
    if (bmiScore > 0) {
      setResult(getBMIData(bmiScore));
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const blogLinks: Record<BMIKey, { href: string; text: string }> = {
    underweight: { href: '/blog/beginner-muscle-building-plan',      text: 'The Beginner Muscle Building Plan' },
    normal:      { href: '/blog/sustainable-shred-long-term-results', text: 'How to Maintain Your Shredded Physique' },
    overweight:  { href: '/blog/fat-loss-guide-science-based',       text: 'The Science-Based Guide to Fat Loss' },
    obese:       { href: '/blog/fat-loss-guide-science-based',       text: 'The Science-Based Guide to Fat Loss' },
  };

  return (
    <section
      id="bmi"
      ref={sectionRef}
      className="relative z-10 overflow-hidden bg-[#080808]"
      style={{ paddingTop: 'clamp(5rem, 10vw, 9rem)', paddingBottom: 'clamp(5rem, 10vw, 9rem)' }}
    >
      {/* ── Static blobs — no transform, just CSS, no perf cost ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Reduced blur (80px not 140px) to cut GPU load */}
        <div className="absolute top-[-10%] left-[-8%] w-[45%] h-[45%] rounded-full bg-accent-green/[0.05] blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-8%] w-[40%] h-[40%] rounded-full bg-blue-500/[0.04] blur-[80px]" />
      </div>

      {/* ── Grid lines — pure CSS, zero JS cost ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),' +
            'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)',
        }}
      />

      {/* ── Ghost background word — single parallax transform, composited ── */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgTextY, willChange: 'transform' }}
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display font-black uppercase text-white/[0.025] leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(8rem, 22vw, 20rem)' }}
        >
          METRICS
        </span>
      </motion.div>

      {/* ══ CONTENT ═════════════════════════════════════════════ */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-white/20" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/40">
              {t('label')}
            </span>
          </div>
          <h2
            className="font-display font-black leading-[1.0] tracking-tight text-white max-w-2xl"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            {t('title')}{' '}
            <em className="not-italic gradient-text">{t('titleHighlight')}</em>
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.15fr] gap-10 xl:gap-16 items-start">

          {/* ── LEFT column ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-lg">
              {t('description')}
            </p>

            <div className="w-full h-px bg-white/5" />

            {/* Category strip */}
            <div className="flex flex-col gap-3">
              {CATS.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 px-5 py-4 rounded-2xl border border-white/[0.04]
                             bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10
                             transition-colors duration-300 cursor-default"
                >
                  <div
                    className="w-1 self-stretch rounded-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: cat.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-0.5">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">{cat.label}</span>
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border shrink-0"
                        style={{ color: cat.color, borderColor: `${cat.color}30`, background: `${cat.color}10` }}
                      >
                        {cat.range}
                      </span>
                    </div>
                    <p className="text-xs text-white/25 font-medium">{cat.tip}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
              {[
                { num: '500+', label: 'Clients Transformed' },
                { num: '98%',  label: 'Success Rate' },
                { num: '6 Wk', label: 'Avg Result Time' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
                  className="flex flex-col gap-1"
                >
                  <span
                    className="font-display font-black text-white leading-none"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT column: calculator ── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="
                relative rounded-[2rem] overflow-hidden
                border border-white/[0.06]
                bg-[#0f0f0f] backdrop-blur-sm
                shadow-[0_40px_100px_rgba(0,0,0,0.55)]
                p-7 sm:p-10
              "
            >
              {/* Top accent */}
              <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25 mb-1">
                    {t('calculatorTitle')}
                  </p>
                  <h3
                    className="font-display font-black text-white leading-tight"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                  >
                    {t('calculatorBold')}
                  </h3>
                </div>
                {/* Unit toggle */}
                <div className="flex h-9 bg-white/5 rounded-full border border-white/[0.06] overflow-hidden text-[11px] font-black uppercase tracking-[0.15em] shrink-0">
                  {[
                    { label: t('imperial'), metric: false },
                    { label: t('metric'),   metric: true  },
                  ].map((opt) => (
                    <button
                      key={String(opt.metric)}
                      onClick={() => { setIsMetric(opt.metric); setResult(null); }}
                      className={`px-5 transition-colors duration-250 ${
                        isMetric === opt.metric
                          ? 'bg-white text-black'
                          : 'text-white/30 hover:text-white/60'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMetric ? 'metric' : 'imperial'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {!isMetric ? (
                    <div className="grid grid-cols-2 gap-6 sm:gap-10 mb-10">
                      <InputField label={t('heightFt')} unit="ft"  placeholder="5"   value={heightFt}  onChange={setHeightFt} />
                      <InputField label={t('heightIn')} unit="in"  placeholder="10"  value={heightIn}  onChange={setHeightIn} />
                      <div className="col-span-2">
                        <InputField label={t('weightLbs')} unit="lbs" placeholder="175" value={weightLbs} onChange={setWeightLbs} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-8 mb-10">
                      <InputField label={t('heightCm')} unit="cm" placeholder="180" value={heightCm} onChange={setHeightCm} />
                      <InputField label={t('weightKg')} unit="kg" placeholder="80"  value={weightKg} onChange={setWeightKg} />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Calculate button */}
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCalculate}
                className="
                  w-full h-14 rounded-xl overflow-hidden
                  bg-black border border-accent-green/30 hover:border-accent-green text-white font-black text-xs sm:text-sm uppercase tracking-[0.25em]
                  shadow-[0_6px_30px_rgba(170,255,0,0.05)]
                  hover:shadow-[0_6px_50px_rgba(170,255,0,0.15)]
                  transition-all duration-300 mb-2
                "
              >
                {t('compute')}
              </motion.button>

              {/* Results */}
              <AnimatePresence>
                {result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-white/[0.05]">
                      {/* Gauge + score */}
                      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <ArcGauge position={result.position} color={result.color} />
                          <div className="text-center -mt-3">
                            <div style={{ fontSize: 'clamp(2.4rem, 5vw, 3.2rem)' }}>
                              <AnimatedNumber target={result.value} color={result.color} />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mt-1">BMI Score</p>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-4"
                            style={{
                              background: `${result.color}15`,
                              color: result.color,
                              border: `1px solid ${result.color}30`,
                            }}
                          >
                            <span className="w-2 h-2 rounded-full" style={{ background: result.color }} />
                            {result.label}
                          </div>
                          <p className="text-white/40 text-sm font-light leading-relaxed">
                            {result.key === 'underweight' && t('descUnderweight')}
                            {result.key === 'normal'      && t('descNormal')}
                            {result.key === 'overweight'  && t('descOverweight')}
                            {result.key === 'obese'       && t('descObese')}
                          </p>
                        </div>
                      </div>

                      {/* Scale bar */}
                      <div className="mb-8">
                        <div className="h-2 w-full rounded-full overflow-hidden flex">
                          <div className="h-full bg-blue-400/70"    style={{ width: '20%' }} />
                          <div className="h-full bg-white/20"        style={{ width: '30%' }} />
                          <div className="h-full bg-yellow-400/70"  style={{ width: '25%' }} />
                          <div className="h-full bg-red-400/70"     style={{ width: '25%' }} />
                        </div>
                        <div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-white/20 mt-2">
                          <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
                        </div>
                      </div>

                      {/* Blog link */}
                      <Link
                        href={blogLinks[result.key].href}
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-colors duration-250 group mb-4"
                      >
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-accent-green mb-0.5">Recommended Read</p>
                          <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{blogLinks[result.key].text}</p>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                      </Link>

                      {/* CTA */}
                      <Link
                        href="/#contact"
                        className="group flex items-center justify-between w-full px-7 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:border-white text-white/70 hover:text-black font-black text-xs uppercase tracking-[0.2em] transition-all duration-300"
                      >
                        {t('requestPlan')}
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}