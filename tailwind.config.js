/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#4A4A4A',
        accent: '#F5F5F5',
        muted: '#888888',
      },
    },
  },
  plugins: [],
}