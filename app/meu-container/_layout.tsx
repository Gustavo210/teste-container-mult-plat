import { Slot } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const Container =
  Platform.OS === "web"
    ? require("../../COMPONENTE/Web").Container.Main
    : require("../../COMPONENTE/Native").Container.Main;

export default function Layout() {
  return (
    <Container debug>
      <Slot />
    </Container>
  );
}
