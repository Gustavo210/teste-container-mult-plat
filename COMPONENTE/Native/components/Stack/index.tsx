import React from "react";
import { View } from "react-native";
import { DefaultTheme } from "styled-components/native";

interface StackProps {
  children?: React.ReactNode;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  columnNumber?: number;
  style?: React.CSSProperties;
}
//para o android é possivel utilizar o percent para determinar o tamanho dos filhos, a forma que imagino de fazer isso é o pai ver se um dos filhos tem tamanho se ele tiver  o pai determina o tamanho dos outros
export function Stack({ children, columnNumber, gap, ...rest }: StackProps) {
  const [width, setWidth] = React.useState(0);
  return (
    <View
      onLayout={(event) => {
        const { width: newWidth } = event.nativeEvent.layout;
        setWidth(newWidth);
      }}
      style={[rest?.style || {}]}
    >
      <View
        style={[
          rest?.style || {},
          !!columnNumber
            ? {
                width: (width / 4) * (columnNumber || 4),
              }
            : {
                flex: 1,
                // width: "100%",
              },
        ]}
      >
        {children}
      </View>
    </View>
  );
}
