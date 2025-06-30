import { Platform } from "react-native";
import * as androidTheme from "./index.android";
import * as webTheme from "./index.web";

export const theme =
  Platform.OS === "web" ? webTheme.theme : androidTheme.theme;
