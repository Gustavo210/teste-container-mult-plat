import React from "react";
import { DefaultTheme } from "styled-components/native";

import FlexBox from "./components/FlexBox";
import Layout from "./components/Layout";

// lembrar de zerar a versão no package.json
type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";
interface ContainerProps {
  children: React.ReactNode;
  variant?: "MAIN" | "BOX";
  direction?: "ROW" | "COLUMN";
  align?: AlignProps;
  size?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  debug?: boolean | string;
}

export function Container({
  variant = "BOX",
  children,
  direction = "ROW",
  align = "LEFT",
  size,
  gap = "MD",
  debug = false,
  ...rest
}: ContainerProps): JSX.Element {
  if (variant === "MAIN") {
    return <Layout debug={debug}>{children}</Layout>;
  }

  return (
    <FlexBox
      debug={debug}
      direction={direction}
      align={align}
      sizeKey={size}
      gapSize={gap}
      {...rest}
    >
      {children}
    </FlexBox>
  );
}
