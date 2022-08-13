/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '4sm': {'max': '400px'},

      '3sm': {'max': '550px', 'min': '401px'},

      '2sm': {'max': '700px', 'min': '550px'},

      '1sm': {'max': '776px','min': '700px'},
      
      'sm': {'max': '860px','min': '776px'},

      'md': {'max': '950px','min': '860px'},
    },
      extend: {},
  },
  plugins: [],
}
