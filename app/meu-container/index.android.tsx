import { Container } from "@/COMPONENTE/Native/src";
import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

export default function IndexAndroid() {
  return (
    <>
      <Typography>Padding</Typography>
      <Container.Horizontal gap="XS" padding="NONE_2XS">
        <ContainerCrescente color="blue" />
        <ContainerCrescente />
        <ContainerCrescente color="pink" />
      </Container.Horizontal>
      {/* <PseudoFooter

      // style={{
      //   position: "absolute",
      //   bottom: 10,
      //   left: 0,
      //   right: 0,
      //   zIndex: 1,
      //   backgroundColor: "#ccc",
      // }}
      >
        <Typography align="CENTER" size="MD" weight="BOLD" family="POPPINS">
          Footer
        </Typography>
      </PseudoFooter>
      <Container full>
        <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS">
          X com alinhamento
        </Typography>
        <Container.Horizontal align="END_START" gap="MD">
          <ContainerDefinido />
          <ContainerDefinido color="blue" />
          <ContainerGrande />
        </Container.Horizontal>
        <Typography align="CENTER" size="LG" weight="BOLD" family="POPPINS">
          Lista
        </Typography>
        <FlatList
          data={Array.from({ length: 100 }, (_, i) => ({
            id: i,
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }))}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ContainerCrescente color={item.color} />}
        />
      </Container>
      <AntPseudoFooter /> */}
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
const ContainerDefinido = styled.View<{ color?: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || "red"};
`;
const ContainerGrande = styled.View`
  height: 200px;
  width: 50px;
  background-color: aqua;
`;

const PseudoFooter = styled(Container)`
  width: ${Dimensions.get("window").width}px;
  height: 50px;
  background-color: #ccc;
  position: absolute;
  bottom: 12px;
  left: 0px;
  right: 0px;
  z-index: 10;
  border: 1px solid #000;
`;
const AntPseudoFooter = styled(Container)`
  height: 50px;
  width: 100%;
  background-color: #f00;
`;
