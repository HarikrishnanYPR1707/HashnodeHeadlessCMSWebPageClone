/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        hashnodeOrange: "#fb923c",
        hashnodeYellow: "#facc15",
        hashnodePink: "#ec4899",
        hashnodeLightPurple: "#d8b4fe",
        hashnodeDarkPurple: "#9333ea",
        hashnodeLightGreen: "#86efac",
        hashnodeDarkGreen: "#16a34a",
        hashnodeLightBlue: "#3b82f6",
        hashnodeDarkBlue: "#010410",
        hashnodeBorder: "rgb(30 41 59 / 0.8)",
        hashnodeText: "rgb(203 213 225/1)",
      },
    },
  },
  plugins: [],
};
