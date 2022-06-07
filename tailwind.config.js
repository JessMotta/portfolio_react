module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFFFF",
        "dark-purple": "#412234ff",
        "english-violet": "#6d466bff",
        "wisteria": "#b49fccff",
        "misty-rose": "#ead7d7ff",
      },
      backgroundImage: {
      'hero-pattern': 'url(./heroImage.png)',
      },
    },
  },
  plugins: [],
};
