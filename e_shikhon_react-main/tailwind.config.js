/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "834px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    extend: {
      colors: {
        primary_color: "#1d5276",
        primary_100: "#2872A4",
        secandary_color: "#20ac90",
        text_gray: "#2E3138",
        hero_bg: "#D6E9F5",
        teal: "#007a62",
        turquoise: "#53dfc3",
        darkslategray: {
          100: "#00526c",
          200: "#134651",
          300: "#2e3138",
          400: "#143952",
        },
      },

      fontFamily: {
        Baloo: "'Baloo Da 2'",
        inter: "Inter",
        bangle_font: "'Hind Siliguri'",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      "9xl": "28px",
      "3xs": "10px",
      "4xs-4": "8.4px",
      "mini-4": "14.4px",
      "13xl": "32px",
      "33xl": "52px",
      inherit: "inherit",
    },
  },
  plugins: [],
}

