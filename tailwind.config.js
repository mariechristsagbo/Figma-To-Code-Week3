/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors : {
      'primary-color' : '#23A6F0',
      'danger-color' : '#E74040',
      'second-text-color' : '#737373',
      'light-gray-color' : '#FAFAFA',
      'hover-color' : '#2A7CC7',
    },
    extend: {
     
      fontFamily :  {
        'sans' : ['sans-serif', 'Monstserrat'],
      }
     
    },
  },
  plugins: [],
}