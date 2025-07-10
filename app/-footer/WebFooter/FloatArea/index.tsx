import React from "react";
import styled from "styled-components";
import { useFooterContext } from "../footerContext";

interface FloatAreaProps {
  children: React.ReactNode;
  align?: "LEFT" | "RIGHT";
}

export function FloatArea({ children, align = "LEFT" }: FloatAreaProps) {
  const { footerHeight } = useFooterContext();

  if (!footerHeight) return null;

  return (
    <FloatAreaWrapper $align={align} $footerHeight={footerHeight}>
      {children}
    </FloatAreaWrapper>
  );
}

const FloatAreaWrapper = styled.div<{
  $align: FloatAreaProps["align"];
  $footerHeight: number;
}>`
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: ${({ $footerHeight }) => `${$footerHeight}px`};
  ${({ $align }) =>
    $align === "RIGHT" ? "margin-left: auto" : "margin-right:auto"};
  padding: 8px;
  align-items: center;
  width: 12%;
  border: 1px solid #000;
  z-index: 15;
`;
