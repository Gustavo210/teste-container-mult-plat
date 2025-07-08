import { Container } from "@/COMPONENTE/Native";
import { Spacer } from "@mobilestock-native/spacer";
import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export default function IndexAndroid() {
  return (
    <View
      style={{
        overflow: "hidden",
        // gap: 10,
      }}
    >
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS-BOLD">
        X com filhos
      </Typography>
      <Container.X gap="MD">
        <ContainerCrescente color="green" />
        <ContainerCrescente color="yellow" />
        <ContainerCrescente color="blue" />
        <ContainerCrescente color="pink" />
      </Container.X>
      <Spacer size="MD" />
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS-BOLD">
        Y com filhos
      </Typography>
      <Container.Y gap="XS">
        <ContainerCrescente noFlex color="green" />
        <ContainerCrescente noFlex color="yellow" />
        <ContainerCrescente noFlex color="blue" />
        <ContainerCrescente noFlex color="pink" />
      </Container.Y>
      <Spacer size="MD" />
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS-BOLD">
        X com filhos XY
      </Typography>
      <Container.X gap="XS">
        <Container.Y noFlex gap="XS">
          <ContainerCrescente noFlex color="green" />
          <ContainerCrescente noFlex color="yellow" />
          <Container.X>
            <ContainerCrescente noFlex color="blue" />
            <ContainerCrescente noFlex color="pink" />
          </Container.X>
        </Container.Y>
        <Container.X columnNumber={4}>
          <Container.Y noFlex gap="XS">
            <ContainerCrescente noFlex color="blue" />
            <ContainerCrescente noFlex color="pink" />
          </Container.Y>
        </Container.X>
      </Container.X>
    </View>
  );
}
const ContainerCrescente = styled.View<{ noFlex?: boolean; color?: string }>`
  /* width: 25%; */
  ${(props) => (props.noFlex ? "" : "flex: 1;")}
  /* flex: 1; */
  min-width: 50px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.color || "red"};
`;
