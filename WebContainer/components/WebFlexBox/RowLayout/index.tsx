// RowLayout.tsx
import React from "react";
import styled, { css } from "styled-components";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

interface RowLayoutProps {
  children: React.ReactNode;
  align?: AlignProps;
  gapSize?: string;
}

export function alignmentStyle(
  align: RowLayoutProps["align"]
): ReturnType<typeof css> {
  switch (align) {
    case "CENTER":
      return css`
        justify-content: center;
      `;
    case "LEFT":
      return css`
        justify-content: flex-start;
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
      return css``;
  }
}

export default function RowLayout({
  children,
  align = "LEFT",
  gapSize = "MD",
}: RowLayoutProps) {
  return (
    <RowContainer $align={align} $gapSize={gapSize}>
      {children}
    </RowContainer>
  );
}

const RowContainer = styled.div<{ $align: AlignProps; $gapSize: string }>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme, $gapSize }) => theme.gaps[$gapSize.toLowerCase()]};
  /* justify-content: flex-end; */
  ${({ $align }) => {
    const teste = alignmentStyle($align);
    console.log("teste", $align, teste);
    return teste;
  }}
`;
