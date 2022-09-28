/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#37B600",

          "secondary": "#9D0F0B",

          "accent": "#4444d6",

          "neutral": "#27182B",

          "base-100": "#3B3B45",

          "info": "#4072C9",

          "success": "#1D7265",

          "warning": "#F78B18",

          "error": "#F71D48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
