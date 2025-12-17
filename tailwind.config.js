/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Playwrite': ['Playwrite US Trad', 'serif'],
      },
      colors: {
        'verde-oliva': '#6b8e23',
        'marrom-claro': '#D2B48C',
        'branco-quente': '#FAF0E6',
        'verde-salvia': '#9DC183',
        'verde-escuro': '#3F4D34',
        'amarelo-mostarda': '#ECAB0F',
      },
    },
  },
  plugins: [],
}

