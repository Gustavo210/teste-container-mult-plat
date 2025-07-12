import { Slot } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const Container =
  Platform.OS === "web"
    ? require("@mobilestockweb/container").Container.Main
    : require("@mobilestock-native/container").Container.Main;

export default function Layout() {
  return (
    <Container debug>
      <Slot />
    </Container>
  );
}
