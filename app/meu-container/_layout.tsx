import { Slot } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const Container =
  Platform.OS === "web"
    ? require("../../COMPONENTE/Web").Container
    : require("../../COMPONENTE/Native").Container;

export default function Layout() {
  return (
    <Container debug>
      <Slot />
    </Container>
  );
}
