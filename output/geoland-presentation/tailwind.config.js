/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
        monsieur: ['"Monsieur La Doulaise"', 'cursive'],
        gothic: ['"League Gothic"', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
      colors: {
        white: '#F7F6ED',
        geoland: {
          blue: '#F7F6ED', // Changed blue highlights to project white
        }
      },
      fontWeight: {
        extralight: 200,
        normal: 400,
      }
    },
  },
  plugins: [],
}
