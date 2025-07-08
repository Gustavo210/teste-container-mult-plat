/* eslint-disable @typescript-eslint/no-require-imports */
import { Platform } from "react-native";

function anToWeSize(value: `${number}rem`) {
  const t = require("@mobilestock-native/tools");
  return Platform.OS === "android" ? t.default.calculateRemToPx(value) : value;
}
function anToWeColumns(value: number) {
  return Platform.OS === "android" ? Math.ceil(value / 3) : value;
}
function anToWeFontSize(value: `${number}rem`) {
  const Typo =
    Platform.OS === "web"
      ? require("@mobilestockweb/tools")
      : require("@mobilestock-native/tools");
  return Platform.OS === "android"
    ? Typo.default.calculateFontSize(value)
    : value;
}

export default {
  layout: {
    colors: {
      text: {
        default: "#000",
      },
    },

    space: {
      xs: anToWeSize("0.75rem"),
      sm: anToWeSize("0.875rem"),
      md: anToWeSize("1rem"),
      lg: anToWeSize("1.25rem"),
      xl: anToWeSize("1.75rem"),
      "2xl": anToWeSize("1.875rem"),
      "3xl": anToWeSize("2rem"),
      "4xl": anToWeSize("2.25rem"),
      "5xl": anToWeSize("2.5rem"),
      "6xl": anToWeSize("2.75rem"),
      "7xl": anToWeSize("3rem"),
    },
    columns: {
      xs: anToWeColumns(1),
      sm: anToWeColumns(2),
      md: anToWeColumns(3),
      lg: anToWeColumns(4),
      xl: anToWeColumns(5),
      "2xl": anToWeColumns(6),
      "3xl": anToWeColumns(7),
      "4xl": anToWeColumns(8),
      "5xl": anToWeColumns(9),
      "6xl": anToWeColumns(10),
      "7xl": anToWeColumns(11),
    },
    gaps: {
      none: "0",
      "2xs": anToWeSize("0.25rem"),
      xs: anToWeSize("0.5rem"),
      sm: anToWeSize("0.75rem"),
      md: anToWeSize("1rem"),
      lg: anToWeSize("1.25rem"),
      xl: anToWeSize("1.5rem"),
      "2xl": anToWeSize("1.75rem"),
      "3xl": anToWeSize("2rem"),
    },
    font: {
      families: [
        "Arial",
        "Poppins",
        "Exile",
        "JetBrains Mono",
        "Monocraft",
        "sans-serif",
      ],
      lineHeight: 1.2,
      weight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      size: {
        xs: anToWeFontSize("0.75rem"),
        sm: anToWeFontSize("0.875rem"),
        md: anToWeFontSize("1rem"),
        lg: anToWeFontSize("1.25rem"),
        xl: anToWeFontSize("1.75rem"),
        "2xl": anToWeFontSize("1.875rem"),
        "3xl": anToWeFontSize("2rem"),
      },
    },
  },
} as const;
