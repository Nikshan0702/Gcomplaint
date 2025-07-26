module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          500: '#f59e0b', // Gold/yellow color
          600: '#d97706', // Darker gold
          200: '#fde68a', // Lighter gold for indicators
        },
      },
    },
  },
  plugins: [],
};