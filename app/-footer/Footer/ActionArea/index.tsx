import React, { ReactNode } from "react";
import styled from "styled-components/native";

interface ActionAreaProps {
  children: ReactNode;
  align?: "LEFT" | "RIGHT";
}

export function ActionArea({ children, align = "LEFT" }: ActionAreaProps) {
  return (
    <ActionAreaWrapper $align={align}>
      {children}
    </ActionAreaWrapper>
  );
}

const ActionAreaWrapper = styled.View<{ $align: ActionAreaProps["align"] }>`
  position: absolute;
  bottom: 20px;
  align-items: center;
  padding-inline: 16px;
  align-self: ${({ $align }) =>
    $align === "RIGHT" ? "flex-end" : "flex-start"};
  margin-bottom: 64px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
`;
