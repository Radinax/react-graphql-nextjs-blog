module.exports = {
  theme: {
    fontFamily: {
      jostSemiBold: ["Jost-SemiBold", "sans-serif"],
      poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
      poppinsItalic: ["Poppins-Italic", "sans-serif"],
      poppins: ["Poppins-Regular", "sans-serif"],
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      auto: "auto",
      overmap: 1500,
      popup: 150,
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    boxShadow: {
      DEFAULT: "0px 0px 15px #929293",
      xs: "0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 0px 6px 1px rgba(0, 0, 0, 0.2), 0 0px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 2px 20px -3px rgba(0, 0, 0, 0.2), 0 2px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      screens: {
        xg: "1089px",
        "2xl": "1440px",
        "3xl": "1560px",
        "4xl": "1920px",
      },
      colors: {
        blue: {
          DEFAULT: "#197ACF",
          light: "#E8F0FE",
        },
        gray: {
          darkest: "#262A35",
          dark: "#51596D",
          DEFAULT: "#606060",
          medium: "#CCCCCC",
          light: "#F2F2F2",
        },
        red: {
          DEFAULT: "#EA4444",
          light: "#F95050",
          lighter: "#FFBCBC",
        },
        green: {
          DEFAULT: "#4BBC56",
          light: "#4AB270",
        },
        yellow: {
          DEFAULT: "#FFBC00",
        },
        orange: {
          DEFAULT: "#EA7D24",
        },
      },
      fontSize: {
        xxs: ["10px"],
        xxxs: ["8px"],
        base: "14px",
        md: "16px",
      },
      borderRadius: {
        5: "5px",
      },
      padding: {
        sm: "0.3rem",
      },
      height: {
        xs: "10px",
        sm: "35px",
        3.7: "15px",
      },
      width: {
        xxs: "8px",
        sm: "35px",
        3.7: "15px",
      },
      zIndex: {
        2: 2,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
