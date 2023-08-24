/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6ec199",
        accent_darker: "#508d8e",
        primary: "#6ec0c1",
        secondary: "#273272",
        success: "#188351",
        alert: "#b91c1c",
        alert_darker: "#a51515",
        warning: "#f09a02",
        archive: "#d4c3af ",
        dark: "#3a3b36",
      },
      fontFamily: { inter: "'Inter', sans-serif" },
      keyframes: {
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: { rotate: "rotate 2s linear infinite" },
    },
  },
  plugins: [],
};
