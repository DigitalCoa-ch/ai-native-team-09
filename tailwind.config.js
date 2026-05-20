/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2b4a',
        'navy-light': '#2d4a7c',
        'accent-blue': '#3b82f6',
        'accent-amber': '#f59e0b',
        'accent-green': '#22c55e',
        'accent-red': '#ef4444',
      },
    },
  },
  plugins: [],
};