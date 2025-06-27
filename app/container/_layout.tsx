import { Slot } from "expo-router";
import { lazy } from "react";
import { Platform } from "react-native";

const Container =
  Platform.OS === "web"
    ? lazy(() => import("@mobilestockweb/container"))
    : lazy(() =>
        import("@/Container/src").then((mod) => ({
          default: mod.Container,
        }))
      );
export default function RootLayout() {
  return (
    <Container variant="MAIN">
      <Slot />
    </Container>
  );
}
