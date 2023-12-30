/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        bodyBg:"#1ebab5",
        headTxt1:"#ffffff",
        headTxt2:"#44eaaa",
        switchBg:"#1a9d99",
        switchHandleBg:"#3fc4c0",
        suggesText:"#e2e4e8",
        locBg:"#e9f9f6",
        srcBtn:"#3de0a1",
        inputBg:"#ffffff",
        inputTxt:"#9ca3af",
        inputLocBg:"#e9f9f6",


      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
 
}
