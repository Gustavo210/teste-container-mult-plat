import { Container } from "@/COMPONENTE/Native";
import { Spacer } from "@mobilestock-native/spacer";
import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { styled } from "styled-components/native";

export default function IndexAndroid() {
  return (
    <>
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS-BOLD">
        X com filhos
      </Typography>
      <Container.Horizontal gap="MD">
        <ContainerCrescente full color="green" />
        <ContainerCrescente full color="yellow" />
        <ContainerCrescente full color="blue" />
        <ContainerCrescente full color="pink" />
      </Container.Horizontal>
      <Spacer size="MD" />
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS-BOLD">
        Y com filhos
      </Typography>
      <Container.Vertical gap="XS">
        <ContainerCrescente color="green" />
        <ContainerCrescente color="yellow" />
        <ContainerCrescente color="blue" />
        <ContainerCrescente color="pink" />
      </Container.Vertical>
      <Spacer size="MD" />
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS-BOLD">
        X com filhos XY
      </Typography>
      <Container.Horizontal gap="MD">
        <Container.Vertical full gap="XS">
          <ContainerCrescente color="green" />
          <ContainerCrescente color="yellow" />
          <Container.Horizontal gap="MD">
            <ContainerCrescente full color="blue" />
            <ContainerCrescente full color="purple" />
          </Container.Horizontal>
        </Container.Vertical>
        <Container.Horizontal full>
          <Container.Vertical full gap="XS">
            <ContainerCrescente full color="blue" />
            <ContainerCrescente full color="pink" />
          </Container.Vertical>
        </Container.Horizontal>
      </Container.Horizontal>
    </>
  );
}
const ContainerCrescente = styled(Container)<{
  flex?: boolean;
  color?: string;
}>`
  min-width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || "red"};
`;
