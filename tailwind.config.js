/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
  './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundColor: {
        'custom': '#008080',
        'customlightblue':'#E0F8F8',
        'theme':'#008080'
      },
      textColor: {
        'custom': '#008080',
        'customgrey': '#575757',
        'custompurple': '#7660EE'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'chonburi':['Chonburi','sans-serif']
      },
      boxShadow:{
        custom:'rgba(0, 0, 0, 0.1) 2px 4px 12px',
        custom1: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
      },
      backgroundImage: {
        'gradient-tr': 'linear-gradient(to top right, #353438, #008080)',
        'gradient-tt': 'linear-gradient(to top, #353438, #008080)'
      },
    },
  },
  plugins: [],
  
}

