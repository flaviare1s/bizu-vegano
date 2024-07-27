/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Playwrite': ['Playwrite DK Uloopet', 'sans-serif'],
      },
      colors: {
        'verde-oliva': '#6b8e23',
        'bege-claro': '#F5F5DC',
        'marrom-claro': '#D2B48C',
        'branco-quente': '#FAF0E6',
        'verde-salvia': '#9DC183',
      },
    },
  },
  plugins: [],
}

