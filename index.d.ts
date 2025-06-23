import theme from "./defaultSizes";

declare module "styled-components" {
  type ThemeType = typeof theme.layout;

  export interface DefaultTheme extends ThemeType {}
}
declare module "styled-components/native" {
  type ThemeType = typeof theme.layout;

  export interface DefaultTheme extends ThemeType {}
}
