import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as TPN } from "styled-components/native";

import defaultSizes from "@/defaultSizes";
import { GlobalStyle } from "@/globals";
import { Platform } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const TP = Platform.OS === "web" ? ThemeProvider : TPN;

  return (
    <TP
      theme={{
        ...defaultSizes.layout,
      }}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="minha-rota" />
        <Stack.Screen name="teste/minha-rota" />
      </Stack>
      <StatusBar style="auto" />
      {Platform.OS === "web" && <GlobalStyle />}
    </TP>
  );
}
