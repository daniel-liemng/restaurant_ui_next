/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#e8cf9b',
      },
      fontFamily: {
        title: 'Jacques Francois',
      },
      // backgroundImage: {
      //   parallax: "url('/pic-5.jpg')",
      // },
    },
  },
  plugins: [],
};
