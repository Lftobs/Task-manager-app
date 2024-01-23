/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trans': 'rgba(0 0 0 / .3)',
        'trans2': 'rgba(0 0 0 / .1)',
      },
    },
  },
  plugins: [],
}

