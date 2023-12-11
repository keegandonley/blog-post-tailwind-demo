const { greens } = require("./theme");

const semantics = {
  "alert-primary-background": "var(--color-green-mint)",
  "alert-primary-text": "var(--color-green-moss)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    colors: {
      ...greens,
      ...semantics,
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ":root": Object.entries(greens).reduce((acc, [name, value]) => {
          const colorParts = value.match(/\d+/g);

          return {
            ...acc,
            [`--color-green-${name}-partial`]: colorParts.join(", "),
            [`--color-green-${name}`]: `rgba(var(--color-green-${name}-partial), var(--opacity, 1))`,
          };
        }, {}),
      });
    },
  ],
};
