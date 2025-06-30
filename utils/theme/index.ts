import { Platform } from "react-native";

export const theme =
  Platform.OS === "web" ? require("./theme.web") : require("./theme.android");
