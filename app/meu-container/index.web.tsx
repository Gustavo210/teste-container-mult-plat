import { Container } from "@/COMPONENTE/Web";
import { Spacer } from "@mobilestockweb/spacer";
import { Typography } from "@mobilestockweb/typography";
import React from "react";
import styled from "styled-components";

export default function IndexWeb() {
  return (
    <div
      style={{
        overflow: "hidden",
        // gap: 10,
      }}
    >
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS">
        X com filhos
      </Typography>
      <Container.Horizontal gap="MD">
        <ContainerCrescente color="green" />
        <ContainerCrescente color="yellow" />
        <ContainerCrescente color="blue" />
        <ContainerCrescente color="pink" />
      </Container.Horizontal>
      <Spacer size="MD" />
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS">
        Y com filhos
      </Typography>
      <Container.Vertical gap="XS">
        <ContainerCrescente noFlex color="green" />
        <ContainerCrescente noFlex color="yellow" />
        <ContainerCrescente noFlex color="blue" />
        <ContainerCrescente noFlex color="pink" />
      </Container.Vertical>
      <Spacer size="MD" />
      <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS">
        X com filhos XY
      </Typography>
      <Container.Horizontal gap="MD">
        <Container.Vertical full gap="XS">
          <ContainerCrescente noFlex color="green" />
          <ContainerCrescente noFlex color="yellow" />
          <Container.Horizontal gap="MD">
            <ContainerCrescente color="blue" />
            <ContainerCrescente color="purple" />
          </Container.Horizontal>
        </Container.Vertical>
        <Container.Horizontal full>
          <Container.Vertical full gap="XS">
            <ContainerCrescente color="blue" />
            <ContainerCrescente color="pink" />
          </Container.Vertical>
        </Container.Horizontal>
      </Container.Horizontal>
    </div>
  );
}

const ContainerCrescente = styled.div<{ noFlex?: boolean; color?: string }>`
  /* width: 25%; */
  ${(props) => (props.noFlex ? "" : "flex: 1;")}
  /* flex: 1; */
  min-width: 50px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.color || "red"};
`;
