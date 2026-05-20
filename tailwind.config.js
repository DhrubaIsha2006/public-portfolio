/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080708',
        charcoal: '#111113',
        paper: '#f3eadc',
        cream: '#fff4df',
        blush: '#ff9dc7',
        hotpink: '#ff4fad',
        mint: '#aaf5d1',
        acid: '#d7ff6b',
        rust: '#d67b54'
      },
      fontFamily: {
        display: ['"Arial Black"', '"Inter Tight"', 'Impact', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', 'Consolas', 'monospace']
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 79, 173, 0.25)',
        paper: '0 30px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};
