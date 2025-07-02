import { Platform } from "react-native";
import * as defaultSizesAndroid from "./index.android";
import * as defaultSizesWeb from "./index.web";

export const defaultSizes =
  Platform.OS === "web"
    ? defaultSizesWeb.defaultSizes
    : defaultSizesAndroid.defaultSizes;
