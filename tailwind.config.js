const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html", 
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.{js, jsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#',
      'secundary': '#',
      'third': '#',
    },
  },
  plugins: [require('flowbite/plugin')],
}

