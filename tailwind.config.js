/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Slide1':'url("/bgSilide1.png")',
        'Slide2':'url("/bgSlide2.png")',
        'Slide3':'url("/bgSlide3.png")',
      },
      height: {
        'HeigthHome': '657px',
      },
      colors: {
        'BlueNext': '#00A3A3',
      }
    },
  },
  plugins: [],
};
