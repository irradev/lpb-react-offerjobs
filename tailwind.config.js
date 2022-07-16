/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      extend: {
         height: {
            'screen-40': '40vh',
         },
         zIndex: {
            60: '60',
         },
      },
   },
   plugins: [],
};
