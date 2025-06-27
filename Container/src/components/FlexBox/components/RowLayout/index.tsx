import React from "react";
import { LayoutChangeEvent } from "react-native";
import styled, { css } from "styled-components/native";

import { FlexBoxProps } from "../..";

interface RowLayoutProps {
  children: React.ReactNode;
  gapSize: string;
  align?: FlexBoxProps["align"];
  onLayout(event: LayoutChangeEvent): void;
}

export default function RowLayout({
  children,
  gapSize,
  align,
  onLayout,
}: RowLayoutProps) {
  return (
    <RowContainer $gapSize={gapSize} $align={align} onLayout={onLayout}>
      {children}
    </RowContainer>
  );
}

const RowContainer = styled.View<{
  $gapSize: string;
  $align?: FlexBoxProps["align"];
}>`
  flex-direction: row;

  ${({ $gapSize, theme }) => css`
    gap: ${theme.gaps[$gapSize.toLowerCase()]}px;
  `}

  ${({ $align }) => {
    switch ($align) {
      case "CENTER":
        return css`
          justify-content: center;
        `;
      case "RIGHT":
        return css`
          justify-content: flex-end;
        `;
      case "SPACE_BETWEEN":
        return css`
          justify-content: space-between;
        `;
      default:
        return css`
          justify-content: flex-start;
        `;
    }
  }}
`;
