import tools from "@mobilestock-native/tools";

export default {
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
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    gaps: {
      "2xs": "0.25rem",
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
    },
  },
};
