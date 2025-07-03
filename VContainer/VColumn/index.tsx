import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { getWidthCalc } from "../VRow";

interface VColumnProps {
  children: React.ReactNode;
  sizeKey?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gapSize?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  debug?: boolean;
  noFlex?: boolean;
}

export default function VColumn({
  children,
  sizeKey,
  gapSize = "MD",
  debug = false,
  noFlex = false,
}: VColumnProps) {
  return (
    <ViewColumn
      $sizeKey={sizeKey}
      $gapSize={gapSize}
      $debug={debug}
      $noFlex={noFlex}
    >
      {children}
    </ViewColumn>
  );
}

const ViewColumn = styled.div<{
  $sizeKey?: string;
  $gapSize: string;
  $debug?: boolean;
  $noFlex?: boolean;
}>`
  /* display: flex; */
  flex-direction: column;
  border: 1px solid red;
  justify-content: center;
  align-items: center;

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
`;
