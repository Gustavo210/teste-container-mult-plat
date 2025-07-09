import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Typography } from "@mobilestock-native/typography";
import Feather from "react-native-vector-icons/Feather";
import styled from "styled-components/native";
import { Footer } from "../-footer/Footer";

export default function IndexAndroid() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
        backgroundColor: "lightgray",
      }}
    >
      <Tela>
        <Conteudo>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Cliente:</Text>
            <Text style={{ fontSize: 18 }}>
              {" "}
              (58469) Erick Ferraz dos Santos
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Entrega:</Text>
            <Text style={{ fontSize: 18 }}> 83102</Text>
          </View>
          <View style={{ alignItems: "center", padding: 8 }}>
            <SpacerTest />
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              Entregar ao cliente
            </Text>
          </View>
          <Camera>
            <Text>Espaço da câmera</Text>
          </Camera>
        </Conteudo>

        <Footer bottomSpace={20}>
          <Footer.FloatArea>
            <FloatButton>
              <Typography size="XS">Float</Typography>
            </FloatButton>
          </Footer.FloatArea>
          <Footer.Title weight="BOLD" size="LG">
            Toque em confirmar
          </Footer.Title>
          <Footer.ContentArea noFlex>
            <Botao>
              <>
                <Feather name="list" size={24} color="white" />
                <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
                >
                  volumes (1)
                </Text>
              </>
            </Botao>
            <BotaoConfirma>
              <>
                <Feather name="check" size={24} color="white" />
                <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
                >
                  Confirmar (1)
                </Text>
              </>
            </BotaoConfirma>
          </Footer.ContentArea>
        </Footer>
      </Tela>
    </View>
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

const SpacerTest = styled.View<{ size?: number }>`
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

const Tela = styled.View`
  flex: 1;
  background-color: white;
`;
const Conteudo = styled.View`
  flex: 1;
  padding: 4px;
`;
const CardImperativo = styled.View`
  background-color: #7c7c7c;
  padding: 8px;
  border-radius: 8px;
  margin: 8px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Camera = styled.View`
  background-color: #b5e48c;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
