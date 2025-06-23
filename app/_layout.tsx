import { useFonts } from "expo-font";
import { Stack, useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { GlobalStyle } from "@/globals";
import ThemeProvider from "@/themeProvider";
import { Platform, Text } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const t = useNavigation();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerTitle: (props) => {
            return (
              <Text style={{ fontFamily: "SpaceMono", fontSize: 18 }}>
                {Platform.OS === "web" ? "Web" : "Mobile"}
              </Text>
            );
          },
          title: "Expo Router",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="minha-rota" />
        <Stack.Screen name="teste/minha-rota" />
      </Stack>
      <StatusBar style="dark" />
      {Platform.OS === "web" && <GlobalStyle />}
    </ThemeProvider>
  );
}
