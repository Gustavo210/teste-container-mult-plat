import React from "react";
import { DefaultTheme } from "styled-components";
import { Main } from "./components/Main";
import { X } from "./components/X";
import { Y } from "./components/Y";

interface ContainerProps {
  children: React.ReactNode;
  size?: Uppercase<keyof DefaultTheme["columns"] & string>;
  debug?: boolean | string;
}

function Container({ children, debug = false }: ContainerProps) {
  return <Main debug={debug}>{children}</Main>;
}

Container.X = X;
Container.Y = Y;

export { Container };
