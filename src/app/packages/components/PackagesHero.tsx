import React from 'react';


export default function PackagesHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden animated-gradient">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.05] blob-shape rounded-full"
        style={{ background: 'radial-gradient(circle, #AAFF00 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-0.5 h-5 bg-accent-green" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Coaching Programs</span>
          <div className="w-0.5 h-5 bg-accent-green" />
        </div>

        <h1 className="font-display font-black leading-tight tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}>
          Choose Your <span className="italic gradient-text">Program.</span>
        </h1>

        <p className="text-text-muted text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Every package includes a personalized plan built specifically for your body, goals, and schedule. No cookie-cutter templates. No excuses.
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          {[
            { value: '500+', label: 'Clients Coached' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '90', label: 'Day Guarantee' },
          ]?.map((stat) => (
            <div key={stat?.label} className="text-center">
              <div className="font-display font-black text-3xl text-accent-green">{stat?.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mt-1">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}