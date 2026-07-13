/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#111827',
        'navy-light': '#1f2937',
        'navy-dark': '#0b1017',
        ivory: '#F9FAFB',
        'ivory-warm': '#F5F0EB',
        amber: '#D97706',
        'amber-light': '#F59E0B',
        'amber-dark': '#B45309',
        champagne: '#E8D5B7',
        'champagne-light': '#F3E8D4',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}