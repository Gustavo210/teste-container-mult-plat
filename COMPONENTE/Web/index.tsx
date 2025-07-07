import React from "react";
import { DefaultTheme } from "styled-components";
import { Main } from "./components/Main";

interface ContainerProps {
  children: React.ReactNode;
  size?: Uppercase<keyof DefaultTheme["columns"] & string>;
  debug?: boolean | string;
}

export function Container({ children, debug = false }: ContainerProps) {
  return <Main debug={debug}>{children}</Main>;
}
