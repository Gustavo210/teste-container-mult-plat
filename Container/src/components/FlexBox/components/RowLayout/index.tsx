import React from "react";
import { LayoutChangeEvent } from "react-native";
import styled, { css } from "styled-components/native";

import { FlexBoxProps } from "../..";
import { getAlignmentStyles } from "../../../utils";

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

  ${({ $align }) => getAlignmentStyles($align, true)}
`;
