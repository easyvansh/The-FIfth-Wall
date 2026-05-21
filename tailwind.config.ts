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
        base: '#11100e',
        surface: '#1a1815',
        elevated: '#24201b',
        paper: '#f8f1e3',
        border: 'rgba(245, 234, 216, 0.12)',
        ink: '#09070f',
        neon: {
          orange: '#ff4d00',
          cyan: '#00c2ff',
          violet: '#a855f7',
          green: '#34d399'
        },
        text: {
          primary: '#f5ead8',
          secondary: '#b8aa94',
          faint: '#7f725f',
          paper: '#2a1f13'
        },
        amber: {
          DEFAULT: '#d69b45',
          light: '#f5c97a',
          dim: '#7a4e18'
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
