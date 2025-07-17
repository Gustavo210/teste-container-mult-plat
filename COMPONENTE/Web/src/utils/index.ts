import { DefaultTheme } from 'styled-components'

export const utils = {
  getThemeValue(theme: DefaultTheme, key: keyof DefaultTheme, value: string) {
    const lowerValue = value.toLowerCase()

    if (!theme[key] || !theme[key][lowerValue]) {
      throw new Error(`Theme.${key} does not have value: ${lowerValue}`)
    }
    return theme[key][lowerValue]
  }
}
