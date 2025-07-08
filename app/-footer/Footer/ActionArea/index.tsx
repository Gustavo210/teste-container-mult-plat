import React, { ReactNode } from "react";
import styled from "styled-components/native";

// Importar o hook do contexto do Footer
import { useFooterHeight } from "../index";

interface ActionAreaProps {
  children: ReactNode;
  align?: "LEFT" | "RIGHT";
}

export function ActionArea({ children, align = "LEFT" }: ActionAreaProps) {
  const footerHeight = useFooterHeight();

  console.log("ActionArea - Footer height:", footerHeight);

  return (
    <ActionAreaWrapper $align={align} $footerHeight={footerHeight}>
      {children}
    </ActionAreaWrapper>
  );
}

const ActionAreaWrapper = styled.View<{
  $align: ActionAreaProps["align"];
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
