/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        logomarca: ["Nothing You Could Do", "cursive"],
      },
      colors: {
        "verde-oliva": "#6b8e23",
        "branco-quente": "#FAF0E6",
        "verde-salvia": "#9DC183",
        "verde-escuro": "#3F4D34",
        logo: "#BB944E",
        "logo-claro": "#F2D47C",
      },
    },
  },
  plugins: [],
};

