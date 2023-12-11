/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#0F162B",
        "primary-500": "#E0F4FF",     
        "secondary-100": "rgb(10, 79, 182)",
        "secondary-500": "#F2F7F9",
      },
    },
  },
  plugins: [],
}