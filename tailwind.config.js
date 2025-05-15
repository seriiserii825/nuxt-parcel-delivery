import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-300)",
          dark: "var(--primary-700)",
          hover: "var(--primary-hover)",
        },
        dark: {
          primary: {
            DEFAULT: "var(--dark-primary)",
            lighten: "var(--dark-primary-600)",
            light: "var(--dark-primary-700)",
            dark: "var(--dark-primary-900)",
            darken: "var(--dark-primary-950)",
            hover: "var(--dark-primary-hover)",
          },
          color: "var(--dark-color)",
        },
        color: "var(--color)",
        accent: "var(--accent)",
        error: "var(--error)",
        gray: "var(--gray)"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
