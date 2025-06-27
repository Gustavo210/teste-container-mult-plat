import React from "react";
import styled from "styled-components";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

function getAlignSelf(align: string) {
  return align === "CENTER"
    ? "center"
    : align === "RIGHT"
    ? "flex-end"
    : "flex-start";
}

const FlexContainer = styled.div<{
  $direction: "COLUMN";
  $align: AlignProps;
  $sizeKey?: string;
  $gapSize: string;
  $autoWidth: boolean;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ theme, $gapSize }) => theme.gaps[$gapSize.toLowerCase()]};
  align-self: ${({ $align }) => getAlignSelf($align)};
  width: 100%;

  ${({ $sizeKey, theme, $gapSize }) => {
    if (!$sizeKey) return "flex: 1 1 0;";
    const col = theme.columns[$sizeKey] || 1;
    const gap = theme.gaps[$gapSize.toLowerCase()];
    return `width: calc((100% - (${gap} * 11)) / 12 * ${col} + (${gap} * (${
      col - 1
    })));`;
  }}

  @media (max-width: 73.4375rem) and (min-width: 48rem) {
    ${({ $sizeKey, theme, $gapSize }) => {
      if (!$sizeKey) return "flex: 1 1 0;";
      const col = theme.columns[$sizeKey] || 1;
      const gap = theme.gaps[$gapSize.toLowerCase()];
      return `width: calc((100% - (${gap} * 11)) / 12 * ${col} + (${gap} * (${
        col - 1
      })));`;
    }}
  }

  @media (max-width: 47.9375rem) {
    ${({ $sizeKey, theme, $gapSize }) => {
      if (!$sizeKey) return "flex: 1 1 0;";
      const col = Math.ceil((theme.columns[$sizeKey] || 1) / 3);
      const gap = theme.gaps[$gapSize.toLowerCase()];
      return `width: calc((100% - (${gap} * 3)) / 4 * ${col} + (${gap} * (${
        col - 1
      })));`;
    }}
  }

  ${({ $autoWidth }) =>
    !$autoWidth &&
    `
    & > * {
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }
  `}
`;

interface Props {
  children: React.ReactNode;
  align: AlignProps;
  sizeKey?: string;
  gapSize: string;
  auto: boolean;
}

export default function ColumnLayout({
  children,
  align,
  sizeKey,
  gapSize,
  auto,
}: Props) {
  return (
    <FlexContainer
      $direction="COLUMN"
      $align={align}
      $sizeKey={sizeKey}
      $gapSize={gapSize}
      $autoWidth={auto}
    >
      {children}
    </FlexContainer>
  );
}
