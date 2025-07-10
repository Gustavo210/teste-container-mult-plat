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
  position: fixed;
  bottom: ${({ $footerHeight }) => `${$footerHeight}px`};
  ${({ $align }) => ($align === "RIGHT" ? "right: 16px;" : "left: 16px;")}
  padding: 8px;
  align-items: center;
  width: 12%;
  border: 1px solid #000;
`;
