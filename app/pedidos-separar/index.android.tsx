import { Container } from "@mobilestock-native/container";
import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import { Footer } from "../-footer/Footer";

export default function IndexAndroid() {
  return (
    <>
      <Container.Vertical full>
        <Container.Vertical full>
          <Container.Vertical>
            <SpacerTest />
            <Typography family="POPPINS" weight="BOLD" size="XL">
              Pedidos para Separar
            </Typography>
          </Container.Vertical>
          <FlatList
            data={Array.from({ length: 15 }, (_, i) => ({
              id: i,
              title: `Item ${i + 1}`,
            }))}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Item>
                <Typography family="POPPINS" weight="BOLD" size="MD">
                  {item.title}
                </Typography>
              </Item>
            )}
          />
        </Container.Vertical>
      </Container.Vertical>
      <Footer gap="XS">
        <Botao confirm noFlex full>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Imprimir selecionados
          </Text>
        </Botao>

        <Footer.ContentArea noFlex gap="XS">
          <Botao>
            <>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Desmarcar tudo
              </Text>
            </>
          </Botao>
          <Botao>
            <>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Marcar tudo
              </Text>
            </>
          </Botao>
        </Footer.ContentArea>
      </Footer>
    </>
  );
}

const Item = styled.View<{ color?: string }>`
  padding: 12px;
  border-radius: 7px;
  background-color: ${({ color }) => color || "#b8bcb4"};
  border: 1px solid #7c7c7c;
  margin-bottom: 8px;
  height: 80px;
`;

export const SpacerTest = styled.View<{ size?: number }>`
  height: ${({ size }) => (size ? `${size}px` : "8px")};
`;
const Botao = styled.TouchableHighlight<{
  noFlex?: boolean;
  confirm?: boolean;
  full?: boolean;
}>`
  flex-direction: row;
  gap: 8px;
  background-color: ${({ confirm }) => (confirm ? "#35b054" : "#0095ec")};
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  ${({ full }) => (full ? "width: 100%;" : "")}
  flex: ${({ noFlex }) => (noFlex ? "none" : 1)};
`;
