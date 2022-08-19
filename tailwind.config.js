/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "cat-img": "url('/img/HeroImagelg.png')",
        "img-1": "url('/img/image 1.png')",
        "img-2": "url('/img/image 2.png')",
        "img-3": "url('/img/image 3.png')",
      })
    },
  },
  plugins: [],
}
