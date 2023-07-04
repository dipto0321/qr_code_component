/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        light_gray: 'hsl(212, 45%, 89%)',
        grayish_blue: 'hsl(220, 15%, 55%)',
        dark_blue: 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: []
};
