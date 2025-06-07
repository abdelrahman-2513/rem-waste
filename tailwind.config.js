
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // make sure these paths are correct
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        card: '#1E1E1E',
        primary: '#3AB0FF',
        secondary: '#00C2FF',
        priceBlue: '#3B82F6',
      },
    },
  },
  plugins: [],
};

export default config;
