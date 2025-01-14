/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          100: '#3B4D66',
          dark: '#313E51',
          grey: '#626C7F',
        },
        light: {
          white: "#ffffff",
          grey: "#F4F6FA",
          bluish: "#ABC1E1",
        },
        accent: {
          green: '#26D782',
          red: '#EE5454',
          purple: "#A729F5"
        },
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        "pattern-mobile-light": 'url("/images/pattern-background-mobile-light.svg")',
        "pattern-mobile-dark": 'url("/images/pattern-background-mobile-dark.svg")',
        "pattern-tablet-light": 'url("/images/pattern-background-tablet-light.svg")',
        "pattern-tablet-dark": 'url("/images/pattern-background-tablet-dark.svg")',
        "pattern-desktop-light": 'url("/images/pattern-background-desktop-light.svg")',
        "pattern-desktop-dark": 'url("/images/pattern-background-desktop-dark.svg")',
      },
    },
  },
  plugins: [],
};
