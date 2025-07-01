import * as androidTheme from "./utils/theme/index.android";
import * as webTheme from "./utils/theme/index.web";
declare module "styled-components" {
  type ThemeType = typeof webTheme.theme;

  export interface DefaultTheme extends ThemeType {}
}
declare module "styled-components/native" {
  type ThemeType = typeof androidTheme.theme;

  export interface DefaultTheme extends ThemeType {}
}
