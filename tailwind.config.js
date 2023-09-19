/** @type {import("tailwindcss").Config} */

module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        theme: {
          "button-accent": "rgb(var(--color-button-accent) / <alpha-value>)",
          "button-accent-hover":
            "rgb(var(--color-button-accent-hover) / <alpha-value>)",
          fill: "rgb(var(--color-fill), <alpha-value>)",
          "button-muted": "rgb(var(--color-button-muted) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["GT Walsheim Pro", "sans-serif"],
      },
      gradientColorStops: {
        theme: {
          hue: "rgb(var(--color-fill) / <alpha-value>)",
        },
      },
      textColor: {
        theme: {
          base: "rgb(var(--color-text-base) / <alpha-value>)",
          inverted: "rgb(var(--color-text-inverted) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
