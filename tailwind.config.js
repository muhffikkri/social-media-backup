/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/*.jsx",
    "./src/components/Navbar/*.jsx",
    "./src/components/Post/*.jsx",
    "./src/components/Private/*.jsx",
    "./src/components/Public/*.jsx",
    "./src/pages/Private/*.jsx",
    "./src/pages/Public/*.jsx",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "d-bgc": "#17181C",
        "d-primary": "#1E1F24",
        "d-secondary": "#27292F",
        "d-accent": "#2A86FE",
        "d-text": "#D6D7D8",
        "d-danger": "#FF4242",
        "l-bgc": "#EEF1F3",
        "l-primary": "#F8F8FD",
        "l-secondary": "#EBEBEB",
        "l-accent": "#2A86FE",
        "l-text": "#0A0A12",
        "l-danger": "#B82626",
      },
      fontFamily: {
        poppins: "Poppins",
        "open-sans": ['"Open Sans"'],
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "bounce-slow": "bounce 5s ease-in-out infinite",
        "slide-bottom": "slide-bottom .4s ease-in-out both",
      },
      keyframes: {
        "slide-bottom": {
          "0%": { transform: "translateY(0)", opacity: "0%" },
          "100%": { transform: "translateY(30px)", opacity: "100%" },
        },
      },
    },
  },
  plugins: [],
};
