import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flex: 1,
              position: "absolute",
              zIndex: 1000,
            }}
          >
            <CardImperativo>
              <Typography>Faça a bipagem</Typography>
            </CardImperativo>
          </View>
          <Camera>
            <Typography>Espaço da câmera</Typography>
          </Camera>
        </Conteudo>
        <Footer bottomSpace={40}>
          <Footer.Title weight="BOLD" size="LG">
            Escaneie o qrcode para continuar.
          </Footer.Title>
        </Footer>
      </Tela>
    </View>
  );
}

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
