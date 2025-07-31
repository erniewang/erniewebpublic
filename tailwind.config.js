/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 

/*
CSS
inconsistent sizing units. 
inline style concatenation
stacking context

Images
pre-generate image data

Code
data mixing/hardcoded values
lack of sepeartion of concerns. UI | state managmenet | data acces
-implement data layer
*/
