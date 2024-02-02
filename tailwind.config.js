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
        'custompurple': '#7660EE'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow:{
        custom:'rgba(0, 0, 0, 0.1) 2px 4px 12px'
      },
      backgroundImage: {
        'gradient-tr': 'linear-gradient(to top right, #353438, #008080)',
      },
    },
  },
  plugins: [],
  
}

