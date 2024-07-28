/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM Plex Mono', 'monospace'],
        'Playwrite': ['Playwrite DK Uloopet', 'sans-serif'],
      },
      colors: {
        'verde-oliva': '#6b8e23',
        'bege-claro': '#F5F5DC',
        'marrom-claro': '#D2B48C',
        'branco-quente': '#FAF0E6',
        'verde-salvia': '#9DC183',
        'verde-escuro': '#3F4D34'
      },
    },
  },
  plugins: [],
}

