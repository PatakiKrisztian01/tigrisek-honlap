/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF5F1F',
        'deep-black': '#0a0a0a',
      },
      // --- IDE KERÜLTEK BE A FUTÓ HÍRFOLYAM BEÁLLÍTÁSAI ---
      animation: {
        // 25 másodperces sebesség, egyenletes mozgás (linear), végtelenítve (infinite)
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          // Mivel balról jobbra szeretnéd, a negatív -50%-ról (balról) úsztatjuk be 0%-ra (jobbra)
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
