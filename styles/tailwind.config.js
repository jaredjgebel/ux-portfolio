const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    screens: {
      sm: "320px",
      md: "672px",
      lg: "1056px",
      xl: "1312px",
      max: "1584px",
    },
    extend: {
      spacing: {
        1: "0.125rem",
        2: "0.25rem",
        3: "0.5rem",
        4: "0.75rem",
        5: "1rem",
        6: "1.5rem",
        7: "2rem",
        8: "2.5rem",
        9: "3rem",
        10: "4rem",
        11: "5rem",
        12: "6rem",
        13: "10rem",
      },
      colors: {
        primary: {
          0: "#E6EBED",
          10: "#B2CAD6",
          20: "#84ACBE",
          30: "#5C8FA7",
          40: "#3C758F",
          50: "#1A5B79",
          60: "#0B4863",
          70: "#003249",
          80: "#002333",
          90: "#00131D",
          100: "#000507",
        },
        neutral: {
          0: "#FCFAF3",
          10: "#E3E1DB",
          20: "#CAC8C2",
          30: "#B0AFAA",
          40: "#979692",
          50: "#7E7D7A",
          60: "#656461",
          70: "#4C4B49",
          80: "#323231",
          90: "#191918",
          100: "#000000",
        },
      },
      fontFamily: {
        sans: ["Prodigy Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Bitter", ...defaultTheme.fontFamily.serif],
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-body": theme("colors.neutral[90]"),
            "--tw-prose-headings": theme("colors.neutral[90]"),
            "--tw-prose-links": theme("colors.primary[70]"),
            "--tw-prose-bullets": theme("colors.primary[70]"),
          },
        },
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: theme("colors.primary[50]"),
              },
              "&:focus": {
                "outline-style": "auto",
                "outline-color": theme("colors.primary[70]"),
              },
              "&:active": {
                color: theme("colors.primary[50]"),
                "outline-style": "auto",
                "outline-color": theme("colors.primary[50]"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
