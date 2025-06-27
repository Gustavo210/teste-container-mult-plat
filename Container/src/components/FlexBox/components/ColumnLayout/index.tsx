import React from "react";
import styled, { css } from "styled-components/native";

interface ColumnLayoutProps {
  children: React.ReactNode;
  gapSize: string;
}

export default function ColumnLayout({ children, gapSize }: ColumnLayoutProps) {
  return <ColumnContainer $gapSize={gapSize}>{children}</ColumnContainer>;
}

const ColumnContainer = styled.View<{
  $gapSize: string;
}>`
  width: 100%;
  flex-direction: column;

  ${({ $gapSize, theme }) => css`
    gap: ${theme.gaps[$gapSize.toLowerCase()]}px;
  `}
`;
