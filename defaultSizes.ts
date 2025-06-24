import tools from "@mobilestock-native/tools";
import { Platform } from "react-native";

function anToWeSize(value: `${number}rem`) {
  return Platform.OS === "android" ? tools.calculateSpacing(value) : value;
}
function anToWeColumns(value: number) {
  return Platform.OS === "android" ? Math.ceil(value / 3) : value;
}

export default {
  layout: {
    space: {
      xs: anToWeSize("0.75rem"),
      sm: anToWeSize("0.875rem"),
      md: anToWeSize("1rem"),
      lg: anToWeSize("1.25rem"),
      xl: anToWeSize("1.75rem"),
      "2xl": anToWeSize("1.875rem"),
      "3xl": anToWeSize("2rem"),
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
  },
} as const;
