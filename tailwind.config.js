/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"League Spartan"', 'sans-serif'],
    },
    extend: {
      gridTemplateRows: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
    }
  },
  plugins: [],
}

