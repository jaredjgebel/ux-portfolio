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
        sans: ["Prodigy Sans", "Adjusted Verdana Fallback", ...defaultTheme.fontFamily.sans],
        serif: ["Bitter", "Adjusted Georgia Fallback", ...defaultTheme.fontFamily.serif],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.neutral[90]"),
            "--tw-prose-headings": theme("colors.neutral[90]"),
            "--tw-prose-links": theme("colors.primary[60]"),
            "--tw-prose-bullets": theme("colors.primary[70]"),
            "--tw-prose-quote-borders": theme("colors.primary[10]"),
            a: {
              "text-decoration": "none",
              "color": theme("colors.primary[60]"),
              "border-radius": "4px",
              "font-weight": "600",
              "&:hover": {
                color: theme("colors.primary[50]"),
                "text-decoration": "underline"
              },
              "&:focus": {
                "outline-style": "solid",
                "outline-color": theme("colors.primary[60]"),
                "outline-offset": "2px",
                "outline-width": "2px"
              },
              "&:active": {
                color: theme("colors.primary[50]"),
                "outline-style": "solid",
                "outline-color": theme("colors.primary[50]"),
                "outline-offset": "2px",
                "outline-width": "2px",
                "text-decoration": "underline"
              },
            },
            blockquote: {
              "background-color": theme("colors.primary[10]"),
              "padding-top": "1px",
              "padding-bottom": "1px",
              "padding-left": "1em",
              "padding-right": "1em",
              "border-left": "none",
              quotes: "none",
              "border-radius": "4px",
              "margin-left": "0px",
              "margin-right": "0px",
            },
            figcaption: {
              "font-family": "Bitter",
              "color": "black",
            },
            code: {
                "&::before": {
                  content: "none !important"
                },
                "&::after": {
                  content: "none !important"
                },
            }
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
