import { Container, ViewBaseProps } from "@mobilestock-native/container";
import React, { ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { useFooterContext } from "../footerContext";

// Importar o hook do contexto do Footer

interface FloatAreaProps extends Omit<ViewBaseProps, "align"> {
  children: ReactNode;
  align?: "LEFT" | "RIGHT";
  padding?: Uppercase<keyof DefaultTheme["padding"]>;
}

export function FloatArea({
  children,
  align = "LEFT",
  padding = "2XS",
  ...rest
}: FloatAreaProps) {
  // Impedir o uso direto do FloatArea sem o Footer
  const { footerHeight } = useFooterContext();

  if (!footerHeight) return null;

  return (
    <FloatAreaWrapper
      $align={align}
      $footerHeight={footerHeight}
      $padding={padding}
      {...rest}
    >
      {children}
    </FloatAreaWrapper>
  );
}

// padding personalizado
const FloatAreaWrapper = styled(Container.Vertical)<{
  $align: FloatAreaProps["align"];
  $footerHeight: number;
  $padding?: Uppercase<keyof DefaultTheme["padding"]>;
}>`
  position: absolute;
  bottom: ${({ $footerHeight }) => $footerHeight + 12}px;
  padding: ${({ theme, $padding }) => theme.padding[$padding.toLowerCase()]};
  max-width: 25%;
  align-items: center;
  align-self: ${({ $align }) =>
    $align === "RIGHT" ? "flex-end" : "flex-start"};
  overflow: hidden;
`;
