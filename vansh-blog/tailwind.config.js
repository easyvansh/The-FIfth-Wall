module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#11100e',
        surface: '#1a1815',
        paper: '#f8f1e3',
        primaryText: '#f5ead8',
        mutedText: '#b8aa94',
        accentAmber: '#d69b45',
        accentRed: '#8f3f2b'
      }
    }
  },
  plugins: [],
}
