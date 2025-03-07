const { Color } = require('antd/es/color-picker');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
  
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        color:{

        }
      },
    },
    plugins: [],
    darkMode: 'class', // Use the 'class' strategy for dark mode
  }