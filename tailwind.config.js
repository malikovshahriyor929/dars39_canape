/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lines': "#ddd",
        "orange-buttons": "#f17e00",
        "green-buttons": "#75c94d",
        'select': "#fff000",
        'red': "#f00",
        'white': "#fff",
        "text-grey": "#6f6f6f",
        "text-black": "#111",
        "background-main": "#f5f5f5",
        "background-header": "#ededed",
      },
    },
  },
  plugins: [],
};
