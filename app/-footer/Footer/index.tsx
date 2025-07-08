import React from "react";
import styled from "styled-components/native";

import { ActionArea } from "./ActionArea"; // importando ActionArea como componente separado

interface FooterProps {
  children?: React.ReactNode;
}

 export function FooterComponent(props: FooterProps) {
  return <DefaultFooter>{props.children}</DefaultFooter>;
}

export const Footer = Object.assign(FooterComponent, {
  ActionArea,
});

const DefaultFooter = styled.View`
  flex-direction: row;
  background-color: red;
  position: relative;
  /* Tentei usar o sticky, pra não precisar de um container extra só pra ele, mas não consegui fazer funcionar */
  /* Na maioria dos casos de uso que vi, é usado como fixed. Neste caso, não é melhor ele ser o padrão? */
  bottom: 0;
  align-items: center;
  justify-content: space-around;
  height: 56px;
`;
