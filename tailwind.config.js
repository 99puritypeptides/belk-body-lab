/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0A0A0A',
                'bg-card': '#141414',
                'bg-card-hover': '#1A1A1A',
                'accent-green': '#AAFF00',
                'accent-orange': '#FF6B00',
                'text-primary': '#FFFFFF',
                'text-muted': '#888888',
                'text-subtle': '#555555',
                'border-subtle': 'rgba(255, 255, 255, 0.06)',
                'border-accent': 'rgba(170, 255, 0, 0.2)',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Fraunces', 'serif'],
            },
            fontSize: {
                'hero': 'clamp(3.5rem, 10vw, 9rem)',
                'display': 'clamp(2.5rem, 6vw, 6rem)',
                'section': 'clamp(2rem, 4vw, 4rem)',
            },
            animation: {
                'gradient-shift': 'gradientShift 12s ease infinite',
                'blob-morph': 'blobMorph 8s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-green': 'pulseGreen 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGreen: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(170,255,0,0.2)' },
                    '50%': { boxShadow: '0 0 50px rgba(170,255,0,0.5)' },
                },
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #0f1a00 50%, #0A0A0A 100%)',
                'card-gradient': 'linear-gradient(135deg, #141414 0%, #1a1a1a 100%)',
                'green-gradient': 'linear-gradient(135deg, #AAFF00 0%, #7FCC00 100%)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}