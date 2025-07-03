import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import styled, { DefaultTheme, css, useTheme } from "styled-components/native";

import { AlignOptions } from "../..";
import ColumnContainer from "../ColumnContainer";
import RowContainer from "../RowContainer";
import { getAlignmentStyles } from "../utils";

export interface ContainerBoxProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  sizeKey?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gapSize?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  align?: AlignOptions;
  noFlex?: boolean;
  debug?: boolean | string;
}

export function ContainerBox({
  children,
  direction = "ROW",
  sizeKey,
  gapSize,
  align,
  noFlex = false,
  debug = false,
}: ContainerBoxProps) {
  const theme = useTheme();
  const [containerWidth, setContainerWidth] = useState(0);
  const isRow = direction === "ROW";
  const gapSizeValue = gapSize || (isRow ? "MD" : "NONE");
  const gap = theme.gaps[gapSizeValue.toLowerCase()];
  const columns = sizeKey ? theme.columns[sizeKey.toLowerCase()] || 1 : null;

  function onLayoutContainer(event: LayoutChangeEvent) {
    setContainerWidth(event.nativeEvent.layout.width);
  }

  let availableSpace;
  if (columns && containerWidth && isRow) {
    availableSpace = calculateAvailableSpace(containerWidth, columns, gap);
  }

  const Wrapper = isRow ? RowContainer : ColumnContainer;

  return (
    <Wrapper gapSize={gapSizeValue} align={align} onLayout={onLayoutContainer}>
      <FlexWrapper
        $direction={direction}
        $availableSpace={availableSpace}
        $noFlex={noFlex}
        $debug={debug}
        $align={align}
      >
        {children}
      </FlexWrapper>
    </Wrapper>
  );
}

const FlexWrapper = styled.View.attrs({ testID: "container-box-wrapper" })<{
  $align?: AlignOptions;
  $direction?: "ROW" | "COLUMN";
  $availableSpace?: number;
  $noFlex?: boolean;
  $debug?: boolean | string;
}>`
  ${({ $debug, theme }) =>
    $debug &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${typeof $debug === "string"
        ? $debug
        : theme.colors.container.visibleArea};
    `}

  ${({ $availableSpace, $noFlex }) => {
    if ($availableSpace) {
      return css`
        width: ${$availableSpace}px;
      `;
    }

    if ($noFlex) {
      return css`
        width: auto;
      `;
    }

    return css`
      flex: 1;
    `;
  }}

  ${({ $align, $noFlex }) => getAlignmentStyles($align, $noFlex)}
`;

export function calculateAvailableSpace(
  containerWidth: number,
  columns: number,
  gap: number
) {
  if (columns <= 0) return 0;
  const singleColWidth = (containerWidth - gap * 3) / 4;
  return singleColWidth * columns + gap * (columns - 1);
}
