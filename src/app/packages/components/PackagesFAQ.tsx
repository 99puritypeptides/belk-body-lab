'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do I need gym access to work with Kyle?',
    a: 'No — Kyle builds programs for home, gym, or hybrid setups. During the consultation call, he\'ll ask about your equipment and build your plan accordingly.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Most clients notice visible changes within 3-4 weeks. Significant transformations typically occur at the 8-12 week mark. Results depend on your consistency and adherence to the plan.',
  },
  {
    q: 'What if I travel or have an irregular schedule?',
    a: 'Kyle specializes in building flexible programs for busy people. Your plan will account for travel, work schedules, and life\'s unpredictability with workout alternatives.',
  },
  {
    q: 'Is online coaching as effective as in-person?',
    a: 'For most goals, yes — and often more convenient. Kyle\'s online clients average the same results as in-person clients because the programming, accountability, and communication are identical.',
  },
  {
    q: 'Can I switch packages after I start?',
    a: 'Absolutely. Many clients start with Starter and upgrade to Transform once they see results. Kyle will always recommend the right package for your current phase.',
  },
  {
    q: 'What does the 90-day guarantee actually mean?',
    a: 'If you complete all check-ins, follow your nutrition plan, and train as prescribed for 90 days without seeing measurable progress, Kyle will refund your investment — no questions asked.',
  },
];

export default function PackagesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="relative z-10 py-20 lg:py-28 bg-[#070707]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with rounded subtle background matching reference */}
        <div className="relative w-full bg-[#0d0d0d] rounded-[2.5rem] lg:rounded-[3rem] px-6 py-12 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 border border-white/[0.03] shadow-2xl overflow-hidden">
          
          {/* HUGE Gradient Background Watermark FAQ - Positioned left & overlapping */}
          <div className="absolute bottom-0 left-0 lg:left-8 select-none z-0 pointer-events-none translate-y-[20%] xl:translate-y-[15%]">
            <span className="font-display font-black text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] leading-none tracking-tighter bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent bg-clip-text text-transparent">
              FAQ
            </span>
          </div>

          {/* Left Column: Top Placed Heading and Contact Info */}
          <div className="lg:w-[40%] xl:w-[45%] flex flex-col justify-start relative z-10">
            <h2 className="font-jumpshot leading-tight tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Questions & <br className="hidden lg:block"/>
              <span className="text-white">Answers</span>
            </h2>
            
            <p className="text-text-muted text-base lg:text-[17px] leading-relaxed mb-10 lg:mb-12 max-w-sm">
              Have more questions? Don&apos;t hesitate to email us:
            </p>

            <div className="flex flex-col gap-6">
              {/* Phone Bubble */}
              <a href="tel:+11234561234" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-text-muted transition-all shadow-md group-hover:border-accent-green group-hover:text-accent-green">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.41-38.83-38.83l20.78-24.34a8.12,8.12,0,0,0,.56-.75,16,16,0,0,0,1.34-15.23l-21.17-47.24A16,16,0,0,0,83,24h-43A16,16,0,0,0,24,40C24,141.51,114.49,232,216,232a16,16,0,0,0,16-16V173A16,16,0,0,0,222.37,158.46ZM216,216C123.32,216,40,132.68,40,40H83l21.11,47.12-23.2,27.18a8,8,0,0,0-.78,8.87c9.55,19.26,27.35,37.06,46.61,46.61a8,8,0,0,0,8.87-.78l27.18-23.2L210.88,167Z"></path>
                  </svg>
                </div>
                <span className="text-white/80 font-medium text-sm lg:text-[15px] transition-colors group-hover:text-white">+1 123 456 1234</span>
              </a>
              
              {/* Email Bubble */}
              <a href="mailto:support@belkbodylab.com" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-text-muted transition-all shadow-md group-hover:border-accent-green group-hover:text-accent-green">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM224,192H32V74.83l90.59,83.1A16,16,0,0,0,133.41,158L224,74.83Z"></path>
                  </svg>
                </div>
                <span className="text-white/80 font-medium text-sm lg:text-[15px] transition-colors group-hover:text-white">support@belkbodylab.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Cards Matching Reference */}
          <div className="lg:w-[60%] xl:w-[55%] flex flex-col gap-4 z-20">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#161616] rounded-2xl border border-white/[0.04] transition-all overflow-hidden shadow-lg"
              >
                {/* Question Row */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between px-6 py-6 lg:p-7 text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    {/* Index Number */}
                    <span className="font-display text-lg lg:text-xl lg:pt-0.5 text-[#5e616b] font-medium leading-[1.3] lg:leading-[1.4]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Question Text */}
                    <span className={`font-semibold text-sm md:text-base lg:text-[17px] leading-relaxed transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/80'}`}>
                      {faq.q}
                    </span>
                  </div>
                  
                  {/* Chevron arrow icon */}
                  <div className={`mt-1 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.87,0,0.13,1)] ${openIndex === i ? 'rotate-180 text-white' : 'text-[#5e616b]'}`}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer Row (Collapsible) */}
                <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                  <div className="px-6 py-4 pt-0 lg:px-7 lg:pb-7 flex gap-4 lg:gap-6">
                    {/* Invisible spacer to guarantee perfect structural text alignment under query */}
                    <span className="text-transparent font-display text-lg lg:text-xl select-none leading-[1.3] lg:leading-[1.4]" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Answer Text */}
                    <p className="text-[#a0a0a0] text-[13px] lg:text-[14px] leading-relaxed pr-6 md:pr-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}