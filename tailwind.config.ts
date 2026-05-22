import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        border: 'rgb(var(--color-border) / var(--color-border-alpha))',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        neon: {
          orange: 'rgb(var(--color-neon-orange) / <alpha-value>)',
          cyan: 'rgb(var(--color-neon-cyan) / <alpha-value>)',
          violet: 'rgb(var(--color-neon-violet) / <alpha-value>)',
          green: 'rgb(var(--color-neon-green) / <alpha-value>)'
        },
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          faint: 'rgb(var(--color-text-faint) / <alpha-value>)',
          paper: 'rgb(var(--color-text-paper) / <alpha-value>)'
        },
        amber: {
          DEFAULT: 'rgb(var(--color-amber) / <alpha-value>)',
          light: 'rgb(var(--color-amber-light) / <alpha-value>)',
          dim: 'rgb(var(--color-amber-dim) / <alpha-value>)'
        },
        red: {
          deep: '#8b3828'
        },
        blue: {
          ink: '#2c4a7a'
        },
        green: {
          sage: '#3a5c3f'
        },
        violet: {
          dusk: '#4a3568'
        }
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0,0,0,0.18)',
        poster: '6px 6px 0 rgba(255,77,0,0.85)',
        cyan: '6px 6px 0 rgba(0,194,255,0.75)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        handwritten: ['var(--font-handwritten)', 'cursive'],
        mono: ['var(--font-mono)', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;
