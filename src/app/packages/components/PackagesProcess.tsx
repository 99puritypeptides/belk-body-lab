
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Free Consultation Call',
    description: 'A 20-minute strategy call with Kyle to discuss your goals, current fitness level, and lifestyle. No sales pitch — just real conversation.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Custom Plan Built',
    description: 'Within 48 hours, Kyle delivers your fully personalized training and nutrition program — built specifically for your body and goals.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Training Begins',
    description: 'You start your program with full access to exercise video demonstrations, tracking tools, and Kyle\'s direct support.',
    icon: '🏋️',
  },
  {
    number: '04',
    title: 'Weekly Monitoring',
    description: 'Regular check-ins, progress tracking, and plan adjustments ensure you\'re always moving forward — never plateauing.',
    icon: '📊',
  },
  {
    number: '05',
    title: 'Final Transformation',
    description: 'Reach your goal, document your results, and decide on your next phase. Many clients continue — the transformation never has to stop.',
    icon: '🏆',
  },
];

export default function PackagesProcess() {
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-0.5 h-5 bg-accent-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">How It Works</span>
            <div className="w-0.5 h-5 bg-accent-green" />
          </div>
          <h2 className="font-display font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
            The <span className="italic gradient-text">Process.</span>
          </h2>
        </div>

        {/* Asymmetric step layout — NOT a numbered vertical timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps?.map((step, i) => (
            <div
              key={step?.number}
              className={`bg-bg-card border border-border-subtle rounded-2xl p-8 card-hover ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{step?.icon}</span>
                <span
                  className="font-display font-black text-5xl leading-none"
                  style={{ color: 'rgba(170,255,0,0.12)' }}
                >
                  {step?.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{step?.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step?.description}</p>

              {i < steps?.length - 1 && (
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex-1 h-px bg-border-subtle" />
                  <svg width="14" height="14" fill="none" stroke="#AAFF00" strokeWidth="2" viewBox="0 0 24 24" className="opacity-40">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}