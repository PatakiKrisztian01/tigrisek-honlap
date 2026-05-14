/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF5F1F',
        'deep-black': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
