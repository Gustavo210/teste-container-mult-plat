import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { GlobalStyle } from "@/globals";
import ThemeProvider from "@/themeProvider";
import { theme } from "@/utils/theme/index.android";
import tools from "@mobilestock-native/tools";
import { useEffect } from "react";
import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const router = useRouter();

  const [loaded, error] = useFonts(
    tools.mapFamiliesToFonts([...theme.font.families])
  );

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ThemeProvider>
        <Stack
          initialRouteName="index"
          screenOptions={{
            orientation: "all",
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
            header: (props) => {
              return (
                <View
                  style={{
                    paddingTop: 30,
                    height: 80,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#e5e5e5",
                    marginBottom: 5,
                  }}
                >
                  {props.route.name !== "index" && (
                    <Button title="Voltar" onPress={() => router.back()} />
                  )}
                  <Text
                    style={{
                      fontFamily: "SpaceMono",
                      flex: 1,
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    {Platform.OS === "web" ? "Web" : "Mobile"} -{" "}
                    {props.route.name}
                  </Text>
                  {props.route.name !== "index" && (
                    <Pressable
                      style={{
                        padding: 10,
                        backgroundColor: "#aaa",
                        borderColor: "#ccc",
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                      onPress={() => router.push("/configs")}
                    >
                      <Text>Config</Text>
                    </Pressable>
                  )}
                </View>
              );
            },
            title: "Expo Router",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
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
