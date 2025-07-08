import React from "react";
import { View } from "react-native";
import { DefaultTheme, useTheme } from "styled-components/native";

export function Y({
  children,
  gap,
  noFlex,
}: {
  noFlex?: boolean;
  children?: React.ReactNode;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
}) {
  const theme = useTheme();
  function calculateGap(): number {
    if (!gap) return 0;
    const GapTag = gap.toLowerCase() as keyof DefaultTheme["gaps"];
    return Number(theme.gaps[GapTag]);
  }

  return (
    <View
      style={[
        {
          flexDirection: "column",
          backgroundColor: "cadetblue",
          gap: calculateGap(),
        },
        noFlex && {
          flex: 1,
        },
      ]}
    >
      {children}
    </View>
  );
}
