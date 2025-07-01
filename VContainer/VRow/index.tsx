import React from "react";
import styled, { css } from "styled-components";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";
interface VRowProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  align?: AlignProps;
  sizeKey?: string;
  gapSize?: string;
  debug?: boolean;
  noFlex?: boolean;
}

export function getWidthCalc(
  sizeKey: string | undefined,
  gapSize: string,
  theme: any,
  breakpoint: "desktop" | "tablet" | "mobile",
  noFlex?: boolean
) {
  if (!sizeKey && !noFlex) {
    return "flex: 1 1 0;";
  }

  const col = theme.columns[sizeKey.toLowerCase()] || 1;
  const gap = theme.gaps[gapSize.toLowerCase()];

  if (breakpoint === "desktop") {
    return `width: calc((73.5rem - (${gap} * 11)) / 12 * ${col} + (${gap} * (${
      col - 1
    })));`;
  }

  if (breakpoint === "tablet") {
    return `width: calc((100% - (${gap} * 11)) / 12 * ${col} + (${gap} * (${
      col - 1
    })));`;
  }

  const mobileCol = Math.ceil(col / 3);
  return `width: calc((100% - (${gap} * 3)) / 4 * ${mobileCol} + (${gap} * (${
    mobileCol - 1
  })));`;
}

const VRowContainer = styled.div<{
  $sizeKey?: string;
  $gapSize: string;
  $debug?: boolean;
  $align?: AlignProps;
  $noFlex?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $align }) => {
    switch ($align) {
      case "LEFT":
        return "flex-start";
      case "CENTER":
        return "center";
      case "RIGHT":
        return "flex-end";
      case "SPACE_BETWEEN":
        return "space-between";
      default:
        return "flex-start";
    }
  }};

  ${({ $sizeKey, $gapSize, theme, $noFlex }) =>
    getWidthCalc($sizeKey, $gapSize, theme, "desktop", $noFlex)}

  @media (max-width: 73.4375rem) and (min-width: 48rem) {
    ${({ $sizeKey, $gapSize, theme, $noFlex }) =>
      getWidthCalc($sizeKey, $gapSize, theme, "tablet", $noFlex)}
  }

  @media (max-width: 47.9375rem) {
    ${({ $sizeKey, $gapSize, theme, $noFlex }) =>
      getWidthCalc($sizeKey, $gapSize, theme, "mobile", $noFlex)}
  }

  ${({ $debug }) => `
    ${
      $debug
        ? css`
            border: 1px solid blue;
          `
        : ""
    }
  `}
`;

export default function VRow({
  children,
  align,
  sizeKey,
  gapSize = "MD",
  debug = false,
  noFlex = false,
}: VRowProps) {
  return (
    <VRowContainer
      $sizeKey={sizeKey}
      $gapSize={gapSize}
      $debug={debug}
      $align={align}
      $noFlex={noFlex}
    >
      {children}
    </VRowContainer>
  );
}
