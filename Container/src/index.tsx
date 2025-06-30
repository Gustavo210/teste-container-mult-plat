import React from "react";
import { DefaultTheme } from "styled-components/native";

import { FlexBox } from "./components/FlexBox";
import { Layout } from "./components/Layout";

type ContainerAlign = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

interface ContainerProps {
  children: React.ReactNode;
  variant?: "MAIN" | "BOX";
  direction?: "ROW" | "COLUMN";
  align?: ContainerAlign;
  size?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  noFlex?: boolean;
  debug?: boolean | string;
}

export function Container({
  variant = "BOX",
  children,
  direction = "ROW",
  align = "LEFT",
  size,
  gap,
  noFlex = false,
  debug = false,
}: ContainerProps): JSX.Element {
  if (variant === "MAIN") {
    return <Layout debug={debug}>{children}</Layout>;
  }

  return (
    <FlexBox
      direction={direction}
      align={align}
      sizeKey={size}
      gapSize={gap}
      noFlex={noFlex}
      debug={debug}
    >
      {children}
    </FlexBox>
  );
}
