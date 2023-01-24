/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#18181B',
          800: '#000000'
        },
        warm: {
          800: '#D9D9D9'
        },
        sharedark: {
          900: '#000'
        },
        pink: {
          900: '#E8A754',
          800: '#f7e0bc'
        }
      },
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      }
    }
  },
  plugins: []
}
