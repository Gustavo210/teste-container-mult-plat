import { useFonts } from "expo-font";
import { Stack, useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { GlobalStyle } from "@/globals";
import ThemeProvider from "@/themeProvider";
import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
            headerRight: () => (
              <Button title="Configs" onPress={() => alert("Opa")} />
            ),
            header: () => {
              return (
                <View
                  style={{
                    paddingTop: 30,
                    height: 80,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  <Button title="Voltar" onPress={() => router.back()} />
                  <Text
                    style={{
                      fontFamily: "SpaceMono",
                      flex: 1,
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    {Platform.OS === "web" ? "Web" : "Mobile"}
                  </Text>
                  <Pressable
                    style={{
                      padding: 10,
                      backgroundColor: "#e0e0e0",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => router.push("/configs")}
                  >
                    <Text>Config</Text>
                  </Pressable>
                </View>
              );
            },
            title: "Expo Router",
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="minha-rota" />
          <Stack.Screen name="teste/minha-rota" />
          <Stack.Screen
            name="configs"
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
              presentation: "transparentModal",
            }}
          />
        </Stack>
        <StatusBar style="dark" />
        {Platform.OS === "web" && <GlobalStyle />}
      </ThemeProvider>
    </SafeAreaView>
  );
}
