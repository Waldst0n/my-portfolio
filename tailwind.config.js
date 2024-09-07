/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: '#0a1128',
      secondaryColor: '#23B5D3',
      tertiaryColor: '#F7F7FF',
      white: '#F7F7FF',
      pink: '#EA526F',
      contactButton: '#25d366'
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui" ]
      },
    },
  },
  plugins: [],
}