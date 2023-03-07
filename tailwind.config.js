const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1440px',
    }
  },
  plugins: [
    createThemes(
      {
        dark: {
          'primary-400': '#088dc2',
          'primary-500': '#0875A1',
          'primary-600': '#03658C',
          'primary-700': '#044761',

          'secondary-400': '#0dcad4',
          'secondary-500': '#12aab3',

          'alternative': '#707373',

          'background': '#23272F',
          'txt': '#FAFAFA',
        }
      }
    )
  ],
}