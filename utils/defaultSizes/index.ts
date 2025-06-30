import { Platform } from "react-native";

export const defaultSizes =
  Platform.OS === "web"
    ? require("./defaultSizes.web")
    : require("./defaultSizes.android");
