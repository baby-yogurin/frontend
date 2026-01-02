/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        primary: "var(--color-primary)",
        lightPrimary: "var(--color-light-primary)",
        secondary: "var(--color-secondary)",
        surface: "var(--color-surface)",
        sleep: "var(--color-sleep)",
        feeding: "var(--color-feeding)",
        nappy: "var(--color-nappy)",
        textMain: "var(--color-text-main)",
        textSub: "var(--color-text-sub)",
        disabled: "var(--color-disabled)",
        border: "var(--color-border)",
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};
