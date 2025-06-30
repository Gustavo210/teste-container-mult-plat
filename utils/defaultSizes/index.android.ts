import tools from "@mobilestock-native/tools";

export const defaultSizes = {
  font: {
    xs: tools.calculateFontSize("0.75rem"),
    sm: tools.calculateFontSize("0.875rem"),
    md: tools.calculateFontSize("1rem"),
    lg: tools.calculateFontSize("1.25rem"),
    xl: tools.calculateFontSize("1.75rem"),
    "2xl": tools.calculateFontSize("1.875rem"),
    "3xl": tools.calculateFontSize("2rem"),
  },
  layout: {
    space: {
      xs: tools.calculateSpacing("0.75rem"),
      sm: tools.calculateSpacing("0.875rem"),
      md: tools.calculateSpacing("1rem"),
      lg: tools.calculateSpacing("1.25rem"),
      xl: tools.calculateSpacing("1.75rem"),
      "2xl": tools.calculateSpacing("1.875rem"),
      "3xl": tools.calculateSpacing("2rem"),
    },
  },
  columns: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
  gaps: {
    none: 0,
    "2xs": tools.calculateSpacing("0.25rem"),
    xs: tools.calculateSpacing("0.5rem"),
    sm: tools.calculateSpacing("0.75rem"),
    md: tools.calculateSpacing("1rem"),
    lg: tools.calculateSpacing("1.25rem"),
    xl: tools.calculateSpacing("1.5rem"),
    "2xl": tools.calculateSpacing("1.75rem"),
    "3xl": tools.calculateSpacing("2rem"),
  },
};
