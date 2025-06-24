import { Link, Stack } from "expo-router";
import { Platform, View } from "react-native";

import { lazy } from "react";

const Typo =
  Platform.OS === "web"
    ? lazy(() =>
        import("@mobilestockweb/typography").then((mod) => ({
          default: mod.Typography,
        }))
      )
    : lazy(() =>
        import("@mobilestock-native/typography").then((mod) => ({
          default: mod.Typography,
        }))
      );
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Typo size="MD">This screen does not exist.</Typo>
        <Link href="/">
          <Typo size="MD">Go to home screen!</Typo>
        </Link>
      </View>
    </>
  );
}
