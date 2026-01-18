/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      colors: {
        'primary': '#09101A',
        'primary2': '#02050A',
        'secondary': '#55E6A5',
        'ternary': '#141C27'
      },
    },

  },
  plugins: [],
}

