import { NativeTest } from "@/NativeTest";
import { NMain } from "@/NativeTest/NMain";
import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { styled } from "styled-components/native";

function LayoutSize(event) {
  const totalWidth = event.nativeEvent.layout.width;

  console.log("Largura do item:", totalWidth);
}

function percentSize(event) {
  const totalWidth = event.nativeEvent.layout.width;

  console.log("Largura percetSize:", totalWidth);
}

export default function IndexAndroid() {
  return (
    <>
      <TesteGustavo />
      <Spacer />
      <MeuTeste />
      <Spacer />
      <TerceiroTeste />
    </>
  );
}

const TesteGustavo = () => {
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",

            flex: 1,
          }}
        >
          <Pressable
            style={{
              flex: 1,
              height: 50,
              width: 50,
              flexGrow: 1,
              flexShrink: 0,
              // gap: 10,
              flexBasis: 100,
              backgroundColor: "lightblue",
            }}
            onPress={() => console.log("Pressionado")}
          >
            <Text>Pressione aqui</Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              height: 50,
              width: 50,
              flexGrow: 1,
              flexShrink: 0,
              // gap: 10,
              flexBasis: 10,
              backgroundColor: "lightblue",
            }}
            onPress={() => console.log("Pressionado")}
          >
            <Text>Pressione aqui</Text>
          </Pressable>
        </View>
        <Button title="Teste" />
      </View>
    </>
  );
};

const MeuTeste = () => {
  return (
    <>
      <NMain>
        <NativeTest>
          <Item>
            <Text>1</Text>
          </Item>
          <Item>
            <Text>2</Text>
          </Item>
          <Item>
            <Text>3</Text>
          </Item>
          <Item>
            <Text>4</Text>
          </Item>
          <Item>
            <Text>5</Text>
          </Item>
          <Item>
            <Text>6</Text>
          </Item>
          <Item>
            <Text>7</Text>
          </Item>
          <Item>
            <Text>8</Text>
          </Item>
          <Item>
            <Text>9</Text>
          </Item>
          <Item>
            <Text>10</Text>
          </Item>
          <Item>
            <Text>11</Text>
          </Item>
          <Item>
            <Text>12</Text>
          </Item>
        </NativeTest>
        <Spacer />
        <Card>
          <Row>
            <SkeletonTexto />
            <SkeletonTexto />
            <SkeletonTexto />
          </Row>
        </Card>
      </NMain>
    </>
  );
};

const TerceiroTeste = () => {
  return (
    <NMain>
      <Card>
        <NativeTest direction="row" debug="red">
          <SkeletonTextoSmall />
          <SkeletonTextoSmall />
          <SkeletonTextoSmall />
          <SkeletonTextoSmall />
        </NativeTest>
        <Spacer />
        <NativeTest direction="row">
          <NativeTest size={1}>
            <SkeletonTextoSmall />
          </NativeTest>
          <SkeletonTextoSmall />
          <SkeletonTextoSmall />
          <SkeletonTextoSmall />
        </NativeTest>
      </Card>
      <Spacer />
      <Card>
        <NativeTest align="center">
          <NativeTest size={1}>
            <TestView />
          </NativeTest>
        </NativeTest>
        <NativeTest>
          <CardContainer />
        </NativeTest>
      </Card>
    </NMain>
  );
};

const CardContainer = () => {
  return (
    <Card>
      <NativeTest direction="column">
        <NativeTest align="center">
          <NativeTest size={3} debug="blue" align="center">
            <Feather name="check-circle" size={20} color="#007bff" />
          </NativeTest>
        </NativeTest>
        <NativeTest align="center">
          <NativeTest size={3} debug="purple" align="left">
            <Feather name="check-circle" size={20} color="#007bff" />
          </NativeTest>
        </NativeTest>
        <NativeTest align="center">
          <NativeTest size={3} debug="red" align="right">
            <Feather name="check-circle" size={20} color="#007bff" />
          </NativeTest>
        </NativeTest>
        <NativeTest align="center">
          <NativeTest debug="red" align="space_between">
            <Feather name="check-circle" size={20} color="#007bff" />
            <Feather name="check-circle" size={20} color="#007bff" />
          </NativeTest>
        </NativeTest>
        <TestView />
        <NativeTest size={1}>
          <TestView />
        </NativeTest>
      </NativeTest>
      <Button title="TESTE" />
    </Card>
  );
};

const Row = styled.View<{ $size?: number }>`
  flex-direction: row;
  gap: 16px;
`;

const Column = styled.View<{ $size?: number }>`
  flex: 1;
`;

const Spacer = styled.View`
  height: 20px;
`;
const Item = styled.View`
  background-color: lightblue;
  flex: 1;
`;

const Card = styled.View`
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`;

const SkeletonTexto = styled.View`
  background-color: #d9d9d9;
  height: 20px;
  border-radius: 10px;
  flex: 1;
`;

const SkeletonTextoSmall = styled.View`
  background-color: #d9d9d9;
  height: 10px;
  border-radius: 5px;
  flex: 1;
`;

const TestView = styled.View`
  background-color: lightblue;
  height: 10px;
  width: 100%;
`;
