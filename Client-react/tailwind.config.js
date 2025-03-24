/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09e5ab",
        primary1: "#1ca39c",
        secondary: "#F2F6F6",
        secondary1: "#6b7280",
        blackText: "#272b41",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1160px",
          xl: "1160px",
        },
      },
    },
  },
  plugins: [],
};
