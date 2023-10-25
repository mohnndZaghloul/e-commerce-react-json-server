/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      ...colors,
      'green':{
        100:'#3ae374',
        200:'#32ff7e',
      },
      'skyblue':{
        200:'#67e6dc',
        100: '#32ff7e',
      },
      'redorange':{
        200:'#ff3838',
        100: '#ff4d4d',
      },
      'darkshadow':{
        200:'#3d3d3d',
        100: '#4b4b4b',
      }
    },
    extend: {
      animation: {
        'pulse-fast': 'pulse 0.4s linear infinite',
      }
    }
  },
  plugins: [],
}