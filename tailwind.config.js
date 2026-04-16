/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'im-green': '#22c55e',
        'im-gray': '#f5f5f5',
        'im-dark': '#111111',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tight: '-0.03em',
      }
    },
  },
  plugins: [],
}
