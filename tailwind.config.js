/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txtColor : '#334155',
        bColor : '#3B82F6',
        txtBcolor : "#0F172A",
        statsBG : "#F8FAFC"
      },
      screens: {
        xs: '300px', // Extra small screens
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        xxl: '1536px', // Double extra large screens
      },
      fontSize : {
        xxs : '9px'
      }
    },
  },
  plugins: [],
}

