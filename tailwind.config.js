/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      hashnodeOrange: "#fb923c",
      hashnodeYellow: "#facc15",
      hashnodePink: "#ec4899",
      hashnodeLightPurple: "#d8b4fe",
      hashnodeDarkPurple: "#9333ea",
      hashnodeLightGreen: "#86efac",
      hashnodeDarkGreen: "#16a34a",
      hashnodeLightBlue: "#3b82f6",
      hashnodeDarkBlue: "#010410",
    },
  },
  plugins: [],
};
