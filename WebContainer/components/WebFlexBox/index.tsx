import React from "react";
import styled, { css } from "styled-components";
import ColumnLayout from "./ColumnLayout";
import RowLayout from "./RowLayout";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";
interface FlexBoxProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  align?: AlignProps;
  sizeKey?: string;
  gapSize?: string;
  debug?: boolean;
  noFlex?: boolean;
}

function getWidthCalc(
  sizeKey: string | undefined,
  gapSize: string,
  theme: any,
  breakpoint: "desktop" | "tablet" | "mobile"
) {
  if (!sizeKey) return "flex: 1 1 0;";
  const col = theme.columns[sizeKey] || 1;
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

const FlexBoxContainer = styled.div<{
  $sizeKey?: string;
  $gapSize: string;
  $debug?: boolean;
  $noFlex?: boolean;
}>`
  width: 100%;

  ${({ $sizeKey, $gapSize, theme }) =>
    getWidthCalc($sizeKey, $gapSize, theme, "desktop")}

  @media (max-width: 73.4375rem) and (min-width: 48rem) {
    ${({ $sizeKey, $gapSize, theme }) =>
      getWidthCalc($sizeKey, $gapSize, theme, "tablet")}
  }

  @media (max-width: 47.9375rem) {
    ${({ $sizeKey, $gapSize, theme }) =>
      getWidthCalc($sizeKey, $gapSize, theme, "mobile")}
  }

  ${({ $debug }) =>
    $debug &&
    css`
      border: 1px solid red;
    `}

  ${({ $noFlex }) =>
    !$noFlex &&
    css`
      & > * > * {
        width: 100%;
        max-width: 100%;
        min-width: 0;
      }
    `}
`;

export default function FlexBox({
  children,
  direction = "ROW",
  align = "LEFT",
  sizeKey,
  gapSize = "MD",
  debug = false,
  noFlex = false,
}: FlexBoxProps) {
  return (
    <FlexBoxContainer
      $sizeKey={sizeKey}
      $gapSize={gapSize}
      $debug={debug}
      $noFlex={noFlex}
    >
      {direction === "ROW" ? (
        <RowLayout align={align} gapSize={gapSize}>
          {children}
        </RowLayout>
      ) : (
        <ColumnLayout align={align} gapSize={gapSize}>
          {children}
        </ColumnLayout>
      )}
    </FlexBoxContainer>
  );
}
