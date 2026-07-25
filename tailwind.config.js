/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050505',
        cardBg: '#0C0C0E',
        cardHover: '#141418',
        accentRed: '#C8102E',
        accentRedLight: '#E50914',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'red-glow': '0 0 35px rgba(200, 16, 46, 0.35)',
        'red-glow-lg': '0 0 70px rgba(200, 16, 46, 0.45)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}
