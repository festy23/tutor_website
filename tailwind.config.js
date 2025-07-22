/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f8f8f8',
        'text-primary': '#111111',
        'accent': '#000000',
        'beige': '#f5f5dc',
        'yellow': '#f0e68c',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      animation: {
        bounce: 'bounce 2s infinite',
        'marquee-scroll': 'marquee-scroll 40s linear infinite',
        pause: 'marquee-scroll 40s linear infinite paused',
        blink: 'blink 1s step-end infinite',
        'pixel-in': 'pixel-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
        'pixel-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'grid': "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 20px)",
      },
      fontSize: {
        'clamp-2xl': 'clamp(1.5rem, 4vw, 2.2rem)',
        'clamp-xl': 'clamp(1.5rem, 4vw, 2rem)',
        'clamp-base': 'clamp(1rem, 2.5vw, 1.2rem)',
        'clamp-sm': 'clamp(0.9rem, 1.5vw, 1.1rem)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
