// ColumnLayout.tsx
import React from "react";
import styled from "styled-components";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

interface ColumnLayoutProps {
  children: React.ReactNode;
  gapSize?: string;
  align?: AlignProps;
}

export default function ColumnLayout({
  children,
  gapSize = "NONE",
  align = "LEFT",
}: ColumnLayoutProps) {
  return (
    <ColumnContainer $gapSize={gapSize} $align={align}>
      {children}
    </ColumnContainer>
  );
}

const ColumnContainer = styled.div<{ $gapSize: string; $align: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gapSize }) => theme.gaps[$gapSize.toLowerCase()]};
  align-items: ${({ $align }) =>
    $align === "CENTER"
      ? "center"
      : $align === "RIGHT"
      ? "flex-end"
      : "flex-start"};
`;
