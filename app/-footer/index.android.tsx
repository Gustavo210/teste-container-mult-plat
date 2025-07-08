import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Ion from "react-native-vector-icons/Ionicons";
import MD from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";
import { styled } from "styled-components/native";
import { Footer } from "./Footer";

export default function IndexAndroid() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
      }}
    >
      <LayoutContent>
        <FlatList
          data={Array.from({ length: 50 }, (_, i) => ({
            id: i,
            title: `Item ${i + 1}`,
          }))}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item color="#B5E48C">
              <Typography>{item.title}</Typography>
            </Item>
          )}
        />

        <Footer.ActionArea align="RIGHT">
          <FloatButton>
            <Typography size="XS">Float</Typography>
          </FloatButton>
          {/* <FloatButton>
            <Typography size="XS">Float</Typography>
          </FloatButton> */}
        </Footer.ActionArea>

        {/* <Footer direction="COLUMN">
          <View style={{ flexDirection: "row", width: "100%" }}>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
            <ContainerA selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerA>
          </View>
        </Footer> */}

        {/* <Footer direction="COLUMN" >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View>
              <ContainerNoFlex selecionado={true}>
                <Icon />
                <ContainerATitulo>Teste</ContainerATitulo>
              </ContainerNoFlex>
              <ContainerNoFlex selecionado={true}>
                <Icon />
                <ContainerATitulo>Teste</ContainerATitulo>
              </ContainerNoFlex>
            </View>
            <ContainerNoFlex selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerNoFlex>
            <ContainerNoFlex selecionado={true}>
              <Icon />
              <ContainerATitulo>Teste</ContainerATitulo>
            </ContainerNoFlex>
            <View style={{ padding: 8 }}>
              <Typography>Footer com direction column</Typography>
              <Spacer />
              <Typography>
              1st children -> view column
              </Typography>
              <Spacer />
              <Typography>
                2nd e 3rd children -> view row
              </Typography>
              <Spacer />
              <Typography>
                texto -> view column, padding 8
                </Typography>
            </View>
          </View>
        </Footer> */}

        {/* // ! Footer MobileStock */}

        <Footer fixed>
          <View style={{ alignItems: "center" }}>
            <MD name="shopping-outline" size={24} color="black" />
            <Text>Produtos</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Ion name="cart-outline" size={24} color="black" />
            <Text>Pedido</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Feather name="credit-card" size={24} color="black" />
            <Text>Look Pay</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MI name="storefront" size={24} color="black" />
            <Text>Minha Loja</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Feather name="menu" size={24} color="black" />
            <Text>Menu</Text>
          </View>
        </Footer>
      </LayoutContent>
    </View>
  );
}

const FooterColumn = styled.View`
  flex-direction: column;
  width: 100%;
  bottom: 0;
  background-color: tomato;
`;

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

const ContainerA = styled.TouchableOpacity<{ selecionado: boolean }>`
  align-items: center;
  background-color: skyblue;
  flex: 1;
  border: 1px solid blue;
`;

const ContainerNoFlex = styled.TouchableOpacity<{ selecionado: boolean }>`
  align-items: center;
  background-color: skyblue;
  border: 1px solid blue;
`;

const ContainerATitulo = styled.Text`
  text-transform: capitalize;
  font-size: 8px;
  font-family: "Open Sans";
  color: white;
`;

const LayoutContent = styled.View`
  flex: 1;
`;

const Item = styled.View<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 12px;
  border-radius: 6px;
`;
