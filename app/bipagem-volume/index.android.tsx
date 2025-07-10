import { Container } from "@mobilestock-native/container";
import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styled from "styled-components/native";
import { Footer } from "../-footer/Footer";

export default function IndexAndroid() {
  return (
    <>
      <Container.Vertical full>
        <Container.Vertical full>
          <Container.Horizontal>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Cliente:</Text>
            <Text style={{ fontSize: 18 }}>
              {" "}
              (58469) Erick Ferraz dos Santos
            </Text>
          </Container.Horizontal>
          <Container.Horizontal>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Entrega:</Text>
            <Text style={{ fontSize: 18 }}> 83102</Text>
          </Container.Horizontal>
          <Container.Vertical>
            <SpacerTest />
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              Entregar ao cliente
            </Text>
          </Container.Vertical>
          <Camera>
            <Text>Espaço da câmera</Text>
          </Camera>
        </Container.Vertical>
      </Container.Vertical>
      <Footer>
        <Footer.FloatArea>
          <FloatButton>
            <Typography size="XS">Float</Typography>
          </FloatButton>
        </Footer.FloatArea>
        <Footer.Title weight="BOLD" size="LG">
          Toque em confirmar
        </Footer.Title>
        <Footer.ContentArea>
          <Botao>
            <>
              <Feather name="list" size={20} color="white" />
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                volumes (1)
              </Text>
            </>
          </Botao>
          <BotaoConfirma>
            <>
              <Feather name="check" size={20} color="white" />
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Confirmar (1)
              </Text>
            </>
          </BotaoConfirma>
        </Footer.ContentArea>
      </Footer>
    </>
  );
}

const FloatButton = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  padding: 16px;
  background-color: #7a6695;
  border-radius: 100%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SpacerTest = styled.View<{ size?: number }>`
  height: ${({ size }) => (size ? `${size}px` : "8px")};
`;
const Botao = styled.TouchableHighlight`
  flex-direction: row;
  gap: 8px;
  background-color: #0095ec;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  flex: 1;
`;

const BotaoConfirma = styled.TouchableHighlight`
  flex-direction: row;
  gap: 8px;
  background-color: #35b054;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  flex: 1;
`;

const Camera = styled.View`
  background-color: #b5e48c;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
