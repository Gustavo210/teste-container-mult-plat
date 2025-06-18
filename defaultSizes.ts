import tools from '@mobilestock-native/tools'

export default {
  layout: {
    space: {
      xs: tools.calculateSpacing('0.75rem'),
      sm: tools.calculateSpacing('0.875rem'),
      md: tools.calculateSpacing('1rem'),
      lg: tools.calculateSpacing('1.25rem'),
      xl: tools.calculateSpacing('1.75rem'),
      '2xl': tools.calculateSpacing('1.875rem'),
      '3xl': tools.calculateSpacing('2rem')
    },
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }
  }
}
