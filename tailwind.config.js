/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "proj-white": "#ECECEC",
        "proj-purple": "#6A0DAD",
        "proj-gray": "#686868",
        "proj-black": "#1F1F1F",
        "proj-green": "#3AEB1D",
      },
      keyframes: {
        "blob-animation": {
          "0%": { "border-radius": "34% 65% 43% 50% / 58% 42% 56% 29%" },
          "25": {"border-radius": "68% 28% 41% 29% / 64% 44% 17% 18%"},
          "50%": { "border-radius": "30% 48% 41% 55% / 24% 62% 17% 45%" },
          "75%" : { "border-radius" : "43% 29% 41% 26% / 26% 45% 27% 46%"},
          "100%": { "border-radius": "45% 18% 42% 21% / 39% 51% 38% 57%"}
        },
        "blob-expand": {
          "100%": { "border-radius": "2rem" }
        }
      },
      animation : {
        "blob-animation": "blob-animation 5s linear infinite alternate",
        "blob-expand": "blob-expand .2s linear normal forwards"
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
