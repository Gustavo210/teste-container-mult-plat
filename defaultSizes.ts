import tools from "@mobilestock-native/tools";
import { Platform } from "react-native";

export default {
  layout: {
    space: {
      xs:
        Platform.OS === "android"
          ? tools.calculateSpacing("0.75rem")
          : "0.75rem",
      sm:
        Platform.OS === "android"
          ? tools.calculateSpacing("0.875rem")
          : "0.875rem",
      md: Platform.OS === "android" ? tools.calculateSpacing("1rem") : "1rem",
      lg:
        Platform.OS === "android"
          ? tools.calculateSpacing("1.25rem")
          : "1.25rem",
      xl:
        Platform.OS === "android"
          ? tools.calculateSpacing("1.75rem")
          : "1.75rem",
      "2xl":
        Platform.OS === "android"
          ? tools.calculateSpacing("1.875rem")
          : "1.875rem",
      "3xl":
        Platform.OS === "android" ? tools.calculateSpacing("2rem") : "2rem",
    },
    columns: {
      xs: Platform.OS === "android" ? Math.ceil(1 / 3) : 1,
      sm: Platform.OS === "android" ? Math.ceil(2 / 3) : 2,
      md: Platform.OS === "android" ? Math.ceil(3 / 3) : 3,
      lg: Platform.OS === "android" ? Math.ceil(4 / 3) : 4,
      xl: Platform.OS === "android" ? Math.ceil(5 / 3) : 5,
      "2xl": Platform.OS === "android" ? Math.ceil(6 / 3) : 6,
      "3xl": Platform.OS === "android" ? Math.ceil(7 / 3) : 7,
      "4xl": Platform.OS === "android" ? Math.ceil(8 / 3) : 8,
      "5xl": Platform.OS === "android" ? Math.ceil(9 / 3) : 9,
      "6xl": Platform.OS === "android" ? Math.ceil(10 / 3) : 10,
      "7xl": Platform.OS === "android" ? Math.ceil(11 / 3) : 11,
    },
    gaps: {
      "2xs":
        Platform.OS === "android"
          ? tools.calculateSpacing("0.25rem")
          : "0.25rem",
      xs:
        Platform.OS === "android" ? tools.calculateSpacing("0.5rem") : "0.5rem",
      sm:
        Platform.OS === "android"
          ? tools.calculateSpacing("0.75rem")
          : "0.75rem",
      md: Platform.OS === "android" ? tools.calculateSpacing("1rem") : "1rem",
      lg:
        Platform.OS === "android"
          ? tools.calculateSpacing("1.25rem")
          : "1.25rem",
      xl:
        Platform.OS === "android" ? tools.calculateSpacing("1.5rem") : "1.5rem",
      "2xl":
        Platform.OS === "android"
          ? tools.calculateSpacing("1.75rem")
          : "1.75rem",
      "3xl":
        Platform.OS === "android" ? tools.calculateSpacing("2rem") : "2rem",
    },
  },
};
