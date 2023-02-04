/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        siteblack: '#131519',
        siteDimBlack: '#191d23',
        siteViolet: '#7f46f0',
        siteWhite: '#9eacc7',
      },
      backgroundImage: {
        astral: "url('/src/assets/background/forest.jpg')",
        saiman: "url('/src/assets/background/inForest.jpg')",
        // eoaalien: "url('/src/assets/background/eoaalien.jpg')",
        // panight: "url('/src/assets/background/panight.jpg')",
        heroImg: "url('/src/assets/background/heroImg.png')",
        landing: "url('/src/assets/background/landing.jpg')",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
