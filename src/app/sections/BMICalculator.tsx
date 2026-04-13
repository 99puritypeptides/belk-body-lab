'use client';

import React, { useState } from 'react';

interface BMIResult {
  value: number;
  category: string;
  color: string;
  position: number;
  description: string;
}

function calcBMI(heightFt: number, heightIn: number, weightLbs: number): BMIResult | null {
  const totalInches = heightFt * 12 + heightIn;
  if (totalInches <= 0 || weightLbs <= 0) return null;
  const bmi = (weightLbs / (totalInches * totalInches)) * 703;
  const rounded = Math.round(bmi * 10) / 10;

  let category = '';
  let color = '';
  let position = 0;
  let description = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#3b82f6';
    position = Math.min((bmi / 18.5) * 20, 20);
    description = 'Focus on muscle-building and caloric surplus. Kyle can build a mass gain plan tailored for you.';
  } else if (bmi < 25) {
    category = 'Normal Weight';
    color = '#22c55e';
    position = 20 + ((bmi - 18.5) / 6.5) * 25;
    description = 'Great foundation! Time to optimize body composition — more muscle, less fat.';
  } else if (bmi < 30) {
    category = 'Overweight';
    color = '#eab308';
    position = 45 + ((bmi - 25) / 5) * 25;
    description = 'A structured fat loss program will get you back to optimal. You\'re closer than you think.';
  } else {
    category = 'Obese';
    color = '#ef4444';
    position = Math.min(70 + ((bmi - 30) / 10) * 30, 95);
    description = 'Sustainable fat loss starts with the right plan. Kyle specializes in transformations at every starting point.';
  }

  return { value: rounded, category, color, position, description };
}

export default function BMICalculator() {
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleCalculate = () => {
    const ft = parseFloat(heightFt) || 0;
    const inches = parseFloat(heightIn) || 0;
    const lbs = parseFloat(weight) || 0;
    const r = calcBMI(ft, inches, lbs);
    setResult(r);
  };

  const inputClass =
    'w-full bg-bg-card-hover border border-border-subtle rounded-xl px-4 py-4 text-white text-sm font-medium placeholder-text-subtle focus:outline-none focus:border-accent-green transition-colors';

  return (
    <section id="bmi" className="relative z-10 py-24 lg:py-32">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse at center, #AAFF00 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-0.5 h-5 bg-accent-green" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Free Tool</span>
            </div>
            <h2 className="font-display font-black leading-tight tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
              Check Your <span className="italic gradient-text">BMI.</span>
            </h2>
            <p className="text-text-muted text-base font-light leading-relaxed mb-8">
              Your BMI is a starting point — not a finish line. Use this calculator to understand where you are, then let Kyle build a plan to get you where you want to be.
            </p>

            <div className="space-y-4 p-6 bg-bg-card border border-border-subtle rounded-2xl">
              {[
                { icon: '📊', title: 'Underweight', desc: 'BMI below 18.5 — muscle building focus' },
                { icon: '✅', title: 'Normal Weight', desc: 'BMI 18.5–24.9 — optimize composition' },
                { icon: '⚡', title: 'Overweight', desc: 'BMI 25–29.9 — structured fat loss' },
                { icon: '🎯', title: 'Obese', desc: 'BMI 30+ — sustainable transformation' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <span className="text-sm font-bold text-white">{item.title}: </span>
                    <span className="text-sm text-text-muted">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calculator */}
          <div className="lg:col-span-7">
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-white mb-8">BMI Calculator</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Height (ft)</label>
                  <input
                    type="number"
                    placeholder="5"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className={inputClass}
                    min="1"
                    max="8"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Height (in)</label>
                  <input
                    type="number"
                    placeholder="10"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className={inputClass}
                    min="0"
                    max="11"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Weight (lbs)</label>
                <input
                  type="number"
                  placeholder="175"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={inputClass}
                  min="50"
                  max="600"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="w-full py-4 bg-accent-green text-bg-primary font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all duration-300 hover:scale-[1.02] mb-8"
              >
                Calculate My BMI
              </button>

              {/* Result */}
              {result && (
                <div className="space-y-6 animate-[fadeIn_0.5s_ease]">
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-5xl font-black font-display" style={{ color: result.color }}>
                        {result.value}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mt-1">Your BMI Score</div>
                    </div>
                    <div className="flex-1 pb-2">
                      <div
                        className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
                        style={{ background: `${result.color}20`, color: result.color, border: `1px solid ${result.color}40` }}
                      >
                        {result.category}
                      </div>
                    </div>
                  </div>

                  {/* BMI bar */}
                  <div>
                    <div className="bmi-bar mb-1">
                      <div
                        className="bmi-indicator"
                        style={{ left: `${result.position}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.1em] text-text-subtle mt-2">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="p-4 bg-bg-card-hover border border-border-accent rounded-xl">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent-green mb-2">Kyle&apos;s Recommendation</p>
                    <p className="text-sm text-text-muted leading-relaxed">{result.description}</p>
                  </div>

                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-accent-green text-accent-green text-sm font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-accent-green hover:text-bg-primary transition-all duration-300"
                  >
                    Get My Custom Plan
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}