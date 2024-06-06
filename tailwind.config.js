/** @type {import('tailwindcss').Config */
export default {
  content: ['./src/**/*.html', './src/**/*.jsx'], // Adjust the paths according to your project structure
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter','serif']
      }
    },
  },
  plugins: [],
}
