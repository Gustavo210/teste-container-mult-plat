// ColumnLayout.tsx
import React from "react";
import styled from "styled-components";

type AlignProps = "LEFT" | "CENTER" | "RIGHT";

interface ColumnLayoutProps {
  children: React.ReactNode;
  gapSize?: string;
}

export default function ColumnLayout({
  children,
  gapSize = "NONE",
}: ColumnLayoutProps) {
  return <ColumnContainer $gapSize={gapSize}>{children}</ColumnContainer>;
}

const ColumnContainer = styled.div<{ $gapSize: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gapSize }) => theme.gaps[$gapSize.toLowerCase()]};
  align-self: ${({ $align }) =>
    $align === "CENTER"
      ? "center"
      : $align === "RIGHT"
      ? "flex-end"
      : "flex-start"};
`;
