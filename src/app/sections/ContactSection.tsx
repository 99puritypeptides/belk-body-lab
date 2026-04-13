'use client';

import React, { useState } from 'react';

const goals = ['Fat Loss', 'Muscle Gain', 'Body Recomposition', 'Competition Prep', 'General Fitness', 'Other'];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  });
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-bg-card-hover border border-border-subtle rounded-xl px-5 py-4 text-white text-sm font-medium placeholder-text-subtle focus:outline-none focus:border-accent-green transition-colors';

  return (
    <section id="contact" className="relative z-10 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-card/20 to-transparent" aria-hidden="true" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-0.5 h-5 bg-accent-green" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Get Started</span>
            </div>
            <h2 className="font-display font-black leading-tight tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
              Begin Your <span className="italic gradient-text">Journey.</span>
            </h2>
            <p className="text-text-muted text-base font-light leading-relaxed mb-10">
              Fill out the form and Kyle will reach out within 24 hours to schedule your free consultation call. No commitment required.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              {[
                { icon: '📍', label: 'Location', value: 'Atlanta, GA (Remote Available)' },
                { icon: '📸', label: 'Instagram', value: '@belkbodylab' },
                { icon: '🎬', label: 'TikTok', value: '@belkbodylab' },
                { icon: '▶️', label: 'YouTube', value: 'BelkBodyLab' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-subtle">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="p-6 bg-bg-card border border-border-subtle rounded-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-green mb-4">What happens next?</p>
              {[
                '1. Kyle reviews your form within 24 hours',
                '2. Free 20-min strategy call scheduled',
                '3. Custom plan presented — no obligation',
                '4. You decide if it&apos;s right for you',
              ].map((step) => (
                <div key={step} className="flex items-start gap-3 mb-3 last:mb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                  <p className="text-text-muted text-sm">{step.replace('&apos;', "'")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-bg-card border border-accent-green/30 rounded-2xl p-12 text-center">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="font-display font-black text-3xl text-white mb-4">
                  Message <span className="gradient-text italic">Received!</span>
                </h3>
                <p className="text-text-muted text-base leading-relaxed mb-8">
                  Kyle will reach out within 24 hours to schedule your free strategy call. Get ready — your transformation starts now.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 border border-border-subtle text-text-muted text-sm font-bold uppercase tracking-[0.15em] rounded-full hover:border-accent-green hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg-card border border-border-subtle rounded-2xl p-8 lg:p-10 space-y-6">
                <h3 className="font-display font-bold text-2xl text-white">Start Your Transformation</h3>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Marcus Thompson"
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="marcus@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(404) 555-0182"
                    value={formState.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Primary Goal *</label>
                  <select
                    name="goal"
                    required
                    value={formState.goal}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select your main goal...</option>
                    {goals.map((g) => (
                      <option key={g} value={g} className="bg-bg-card">{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Tell Kyle More (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share your current situation, challenges, and what you've tried before..."
                    value={formState.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-accent-green text-bg-primary font-black text-base uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all duration-300 hover:scale-[1.02] glow-green disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? 'Sending...' : 'Start My Transformation →'}
                </button>

                <p className="text-center text-text-subtle text-[10px] font-medium">
                  Free consultation · No commitment · 100% confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}