import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { useFooterContext } from "../footerContext";

// Importar o hook do contexto do Footer

interface FloatAreaProps {
  children: ReactNode;
  align?: "LEFT" | "RIGHT";
}

export function FloatArea({ children, align = "LEFT" }: FloatAreaProps) {
  // fazer isso em um contexto separado
  // Impedir o uso direto do FloatArea sem o Footer
  const { footerHeight } = useFooterContext();

  if (!footerHeight) return null;

  return (
    <FloatAreaWrapper $align={align} $footerHeight={footerHeight}>
      {children}
    </FloatAreaWrapper>
  );
}

// padding personalizado
const FloatAreaWrapper = styled.View<{
  $align: FloatAreaProps["align"];
  $footerHeight: number;
}>`
  position: absolute;
  align-items: center;
  bottom: ${({ $footerHeight }) => $footerHeight}px;
  padding-inline: 16px;
  align-self: ${({ $align }) =>
    $align === "RIGHT" ? "flex-end" : "flex-start"};
  border-style: solid;
  border-width: 1px;
  border-color: #000000;
  width: 25%;
`;
