/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002B5B',
          light: '#003875',
        },
        secondary: {
          DEFAULT: '#00C2CB',
          light: '#00E1EB',
        },
        highlight: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.teal.400), 0 0 20px theme(colors.teal.500)',
      },
    },
  },
  plugins: [],
};