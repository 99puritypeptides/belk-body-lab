/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // ─── Colors ───────────────────────────────────────────────────
            colors: {
                background:      'hsl(var(--background))',
                foreground:      'hsl(var(--foreground))',
                card: {
                    DEFAULT:     'hsl(var(--card))',
                    foreground:  'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT:     'hsl(var(--popover))',
                    foreground:  'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT:     'hsl(var(--primary))',
                    foreground:  'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT:     'hsl(var(--secondary))',
                    foreground:  'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT:     'hsl(var(--muted))',
                    foreground:  'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT:     'hsl(var(--accent))',
                    foreground:  'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT:     'hsl(var(--destructive))',
                    foreground:  'hsl(var(--destructive-foreground))',
                },
                border:          'hsl(var(--border))',
                input:           'hsl(var(--input))',
                ring:            'hsl(var(--ring))',
                chart: {
                    '1':         'hsl(var(--chart-1))',
                    '2':         'hsl(var(--chart-2))',
                    '3':         'hsl(var(--chart-3))',
                    '4':         'hsl(var(--chart-4))',
                    '5':         'hsl(var(--chart-5))',
                },
                'bg-primary':    '#0A0A0A',
                'bg-card':       '#141414',
                'bg-card-hover': '#1A1A1A',
                'accent-green':  '#AAFF00',
                'accent-orange': '#FF6B00',
                'text-primary':  '#FFFFFF',
                'text-muted':    '#A1A1AA',
                'text-subtle':   '#71717A',
                'border-subtle': 'rgba(255, 255, 255, 0.06)',
                'border-accent': 'rgba(170, 255, 0, 0.2)',
            },

            // ─── Font Families ────────────────────────────────────────────
            fontFamily: {
                // Body — Inter loaded via next/font
                sans:     ['var(--font-inter)', 'system-ui', 'sans-serif'],
                // Heading — Clash Display (self-hosted).  ALL aliases point here
                // so font-display, font-heading and font-jumpshot all resolve to
                // the same font with zero component changes.
                display:  ['ClashDisplay', 'Impact', 'sans-serif'],
                heading:  ['ClashDisplay', 'Impact', 'sans-serif'],
                jumpshot: ['ClashDisplay', 'Impact', 'sans-serif'],
            },

            // ─── Type Scale ───────────────────────────────────────────────
            // Named steps from the spec.  Each can be used as `text-{name}`.
            fontSize: {
                // Fluid hero / display
                'fluid-hero':    ['clamp(2.5rem, 8vw, 5.5rem)',    { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
                'fluid-display': ['clamp(2rem, 5.5vw, 4rem)',      { lineHeight: '1.08', letterSpacing: '-0.01em',  fontWeight: '700' }],
                'fluid-section': ['clamp(1.6rem, 3.5vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.008em', fontWeight: '600' }],

                // Fixed scale (desktop)
                'h1':  ['3.75rem',  { lineHeight: '1.08', letterSpacing: '-0.015em', fontWeight: '700' }], // 60px
                'h2':  ['2.75rem',  { lineHeight: '1.12', letterSpacing: '-0.01em',  fontWeight: '700' }], // 44px
                'h3':  ['2rem',     { lineHeight: '1.18', letterSpacing: '-0.005em', fontWeight: '600' }], // 32px
                'h4':  ['1.5rem',   { lineHeight: '1.25', letterSpacing: '-0.003em', fontWeight: '600' }], // 24px
                'h5':  ['1.25rem',  { lineHeight: '1.3',  letterSpacing: '0',        fontWeight: '600' }], // 20px

                // Body scale
                'body-xl': ['1.25rem',  { lineHeight: '1.65', fontWeight: '400' }],  // 20px
                'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],  // 18px
                'body':    ['1rem',     { lineHeight: '1.7',  fontWeight: '400' }],  // 16px
                'body-sm': ['0.9375rem',{ lineHeight: '1.65', fontWeight: '400' }],  // 15px
                'body-xs': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }],  // 14px

                // UI scale
                'label':   ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.04em',  fontWeight: '500' }], // 13px
                'caption': ['0.75rem',   { lineHeight: '1.4', letterSpacing: '0.05em',  fontWeight: '500' }], // 12px
                'overline':['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.12em',  fontWeight: '700' }], // 11px
                'btn':     ['0.875rem',  { lineHeight: '1',   letterSpacing: '0.02em',  fontWeight: '600' }], // 14px
                'nav':     ['0.875rem',  { lineHeight: '1',   letterSpacing: '0.005em', fontWeight: '500' }], // 14px
            },

            // ─── Spacing (8px base system) ────────────────────────────────
            spacing: {
                '0.5': '0.125rem',  // 2px
                '1':   '0.25rem',   // 4px — micro
                '2':   '0.5rem',    // 8px — tight
                '3':   '0.75rem',   // 12px
                '4':   '1rem',      // 16px — standard
                '5':   '1.25rem',   // 20px
                '6':   '1.5rem',    // 24px — medium
                '7':   '1.75rem',   // 28px
                '8':   '2rem',      // 32px — section inner
                '9':   '2.25rem',   // 36px
                '10':  '2.5rem',    // 40px
                '11':  '2.75rem',   // 44px
                '12':  '3rem',      // 48px — large
                '14':  '3.5rem',    // 56px
                '16':  '4rem',      // 64px — section gap
                '20':  '5rem',      // 80px
                '24':  '6rem',      // 96px — section gap
                '28':  '7rem',      // 112px
                '32':  '8rem',      // 128px
                '36':  '9rem',      // 144px
                '40':  '10rem',     // 160px
                '48':  '12rem',     // 192px
                '56':  '14rem',     // 224px
                '64':  '16rem',     // 256px
            },

            // ─── Line Height tokens ───────────────────────────────────────
            lineHeight: {
                'heading-tight':  '1.05',
                'heading':        '1.12',
                'heading-loose':  '1.25',
                'body-tight':     '1.5',
                'body':           '1.65',
                'body-loose':     '1.75',
            },

            // ─── Letter Spacing tokens ────────────────────────────────────
            letterSpacing: {
                'heading-xl':  '-0.015em',
                'heading-lg':  '-0.01em',
                'heading-md':  '-0.005em',
                'heading-sm':  '-0.003em',
                'body':         '0',
                'btn':         '0.02em',
                'label':       '0.04em',
                'overline':    '0.12em',
                'caps':        '0.2em',
            },

            // ─── Animations ───────────────────────────────────────────────
            animation: {
                'gradient-shift': 'gradientShift 12s ease infinite',
                'blob-morph':     'blobMorph 8s ease-in-out infinite',
                'float':          'float 6s ease-in-out infinite',
                'pulse-green':    'pulseGreen 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-12px)' },
                },
                pulseGreen: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(170,255,0,0.2)' },
                    '50%':      { boxShadow: '0 0 50px rgba(170,255,0,0.5)' },
                },
            },

            // ─── Background Images ─────────────────────────────────────────
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #0f1a00 50%, #0A0A0A 100%)',
                'card-gradient': 'linear-gradient(135deg, #141414 0%, #1a1a1a 100%)',
                'green-gradient':'linear-gradient(135deg, #AAFF00 0%, #7FCC00 100%)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
};