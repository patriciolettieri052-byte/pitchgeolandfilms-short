/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'raw': '(min-width: 640px), print'},
      'md': {'raw': '(min-width: 768px), print'},
      'lg': {'raw': '(min-width: 1024px), print'},
      'xl': {'raw': '(min-width: 1280px), print'},
      '2xl': {'raw': '(min-width: 1536px), print'},
    },
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
