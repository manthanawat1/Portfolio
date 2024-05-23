/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}