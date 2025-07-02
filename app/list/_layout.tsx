import { Slot } from "expo-router";
import { lazy } from "react";
import { Platform } from "react-native";
import { styled } from "styled-components/native";

const Container =
  Platform.OS === "web"
    ? lazy(() => import("@mobilestockweb/container"))
    : lazy(() =>
        import("@mobilestock-native/container").then((mod) => ({
          default: mod.Container,
        }))
      );
export default function RootLayout() {
  return (
    <ContainerScrollView>
      <Container variant="MAIN">
        <Slot />
      </Container>
    </ContainerScrollView>
  );
}

const ContainerScrollView = styled.ScrollView`
  padding-bottom: 100px;
`;
