/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        dark: '#1a202c', // Dark background color
        light: '#f7fafc', // Light background color
        'gray-900': '#1a202c', // Dark text color
        'gray-800': '#2d3748', // Slightly lighter dark text color
        'gray-700': '#4a5568', // Darker gray for borders
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

