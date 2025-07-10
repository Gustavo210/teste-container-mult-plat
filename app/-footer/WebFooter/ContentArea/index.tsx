import React from "react";
import styled, { DefaultTheme } from "styled-components";

interface ContentAreaProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  padding?: Uppercase<keyof DefaultTheme["padding"]>;
  gap?: Uppercase<keyof DefaultTheme["gaps"]>;
  noFlex?: boolean;
}

export function ContentArea({
  children,
  direction = "ROW",
  noFlex = false,
  padding = "NONE",
  gap,
}: ContentAreaProps) {
  if (direction === "ROW") {
    return (
      <RowContainer $noFlex={noFlex} $padding={padding} $gap={gap}>
        {children}
      </RowContainer>
    );
  }
  return (
    <ColumnContainer $noFlex={noFlex} $padding={padding} $gap={gap}>
      {children}
    </ColumnContainer>
  );
}

const RowContainer = styled.div<{
  $noFlex?: boolean;
  $padding?: ContentAreaProps["padding"];
  $gap?: ContentAreaProps["gap"];
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ theme, $padding }) =>
    $padding ? theme.padding[$padding.toLowerCase()] : 0};
  gap: ${({ theme, $gap }) =>
    $gap ? theme.gaps[$gap.toLowerCase()] : theme.gaps.md};
  justify-content: space-around;
  flex: ${({ $noFlex }) => ($noFlex ? "none" : 1)};
`;

const ColumnContainer = styled.div<{
  $noFlex?: boolean;
  $padding?: ContentAreaProps["padding"];
  $gap?: ContentAreaProps["gap"];
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme, $padding }) =>
    $padding ? theme.padding[$padding.toLowerCase()] : 0};
  gap: ${({ theme, $gap }) =>
    $gap ? theme.gaps[$gap.toLowerCase()] : theme.gaps.none};
  align-items: stretch;
  justify-content: space-around;
  flex: ${({ $noFlex }) => ($noFlex ? "none" : 1)};
`;
