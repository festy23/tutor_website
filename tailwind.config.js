/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Golos Text"', 'sans-serif'],
        'pixel': ['"VT323"', 'monospace'],
        'sans': [
          '"Avenir Next"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        'mono': ['"Space Mono"', 'monospace'],
        'podkova': ['"Podkova"', 'serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'beige': '#f5f5dc',
        'darkCoffee': '#2D1F1A',
        'paper': '#FFFFFF',
        'accent': '#000000',
        'brand-red': '#EF4444',
        'background': '#f8f8f8',
        'text-primary': '#111111',
        'yellow': '#f0e68c',
        'dark-bg': '#1e1e1e',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee 15s linear infinite',
        'marquee-mobile': 'marquee 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shining: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}


