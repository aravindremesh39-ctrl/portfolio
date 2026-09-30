/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0B0B0B',
        secondaryBg: '#111111',
        cardBg: '#151515',
        cardHover: '#1c1c1c',
        accentOrange: '#FF7A00',
        accentOrangeBright: '#FF8A1F',
        accentOrangeDark: '#C95F00',
        accentRed: '#FF7A00', // alias for compatibility
        accentRedLight: '#FF8A1F',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'orange-glow': '0 0 35px rgba(255, 122, 0, 0.25)',
        'orange-glow-lg': '0 0 70px rgba(255, 122, 0, 0.35)',
        'red-glow': '0 0 35px rgba(255, 122, 0, 0.25)', // alias for compatibility
        'red-glow-lg': '0 0 70px rgba(255, 122, 0, 0.35)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}
