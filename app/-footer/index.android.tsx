import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { ButtonNative } from "./ButtonNative";
import { Footer } from "./Footer";
// import { Footer } from "./Footer";

export default function IndexAndroid() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <LayoutContent>
          <ScrollContainer contentContainerStyle={{ paddingBottom: 200 }}>
            <View>
              <Card>
                <CardTitle>Card de Informação</CardTitle>
                <CardContent>
                  Este é um card com algum conteúdo de exemplo.
                </CardContent>
              </Card>

              <Card color="#FFD93D">
                <CardTitle>Promoção</CardTitle>
                <CardContent>Veja as novidades e aproveite!</CardContent>
              </Card>

              <SectionTitle>Lista de Itens</SectionTitle>

              <Item color="#B5E48C">Item 1</Item>
              <Item color="#99D98C">Item 2</Item>
              <Item color="#76C893">Item 3</Item>
              <Item color="#52B69A">Item 4</Item>
              <Item color="#34A0A4">Item 5</Item>
              <Item color="#3a86b8">Item 6</Item>
              <Item color="#3a71b8">Item 7</Item>
              <Item color="#4262ca">Item 8</Item>
              <Item color="#3246ac">Item 9</Item>
              <Item color="#202e7b">Item 10</Item>

              <SectionTitle>Ações</SectionTitle>

              <ButtonMB color="#4D96FF">
                <ButtonMBText>Ação 1</ButtonMBText>
              </ButtonMB>
              <ButtonMB color="#FF6B6B">
                <ButtonMBText>Ação 2</ButtonMBText>
              </ButtonMB>
              <ButtonMB color="#6A4C93">
                <Typography>Ação 3</Typography>
              </ButtonMB>

              <SectionTitle>Lista de Itens</SectionTitle>

              <Item color="#B5E48C">
                <Typography>Item 1</Typography>
              </Item>
              <Item color="#99D98C">
                <Typography>Item 2</Typography>
              </Item>
              <Item color="#76C893">
                <Typography>Item 3</Typography>
              </Item>
              <Item color="#52B69A">
                <Typography>Item 4</Typography>
              </Item>
              <Item color="#34A0A4">
                <Typography>Item 5</Typography>
              </Item>
              <Item color="#3a86b8">
                <Typography>Item 6</Typography>
              </Item>
              <Item color="#3a71b8">
                <Typography>Item 7</Typography>
              </Item>
              <Item color="#4262ca">
                <Typography>Item 8</Typography>
              </Item>
              <Item color="#3246ac">
                <Typography>Item 9</Typography>
              </Item>
              <Item color="#202e7b">
                <Typography>Item 10</Typography>
              </Item>
            </View>
          </ScrollContainer>

          <Footer>
            <ButtonNative>
              <Typography>Botão do Footer</Typography>
            </ButtonNative>
          </Footer>
        </LayoutContent>
      </SafeAreaView>
    </>
  );
}

// ! Por que tem um padding minusculo na lista de itens?

const ScrollContainer = styled.ScrollView`
  padding: 4px;
  /* flex: 1; */
  background-color: #c9caca;
`;
const Layout = styled.View`
  background-color: #a66161;
  padding-top: 4px;
  height: ${Dimensions.get("window").height}px;
  flex: 1;
`;

const LayoutContent = styled.View`
  background-color: #a7bf6a;
  flex: 1;
`;

const Card = styled.View<{ color?: string }>`
  background-color: ${(props) => props.color || "#ffffff"};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  elevation: 3;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardContent = styled.Text`
  font-size: 14px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 10px;
`;

const Item = styled.View<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 12px;
  border-radius: 6px;
  /* margin-bottom: 10px; */
`;

const ButtonMB = styled.TouchableOpacity<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

const ButtonMBText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
