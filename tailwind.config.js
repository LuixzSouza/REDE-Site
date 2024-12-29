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
        'BlueMarineNext': '#00A3A3',
        'OrangeNext': '#de6e16',
        'BlueNext': '#256c95',
      },
      screens: {
        '@desktop': '1024px',
        '@tablet': '640px',
      },
    },
  },
  plugins: [],
};
