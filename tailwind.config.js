/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
  './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundColor: {
        'custom': '#008080',
      },
      textColor: {
        'custom': '#008080',
        'customgrey': '#575757',
        
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
}

