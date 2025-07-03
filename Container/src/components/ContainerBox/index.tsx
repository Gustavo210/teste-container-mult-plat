import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import styled, { DefaultTheme, css, useTheme } from "styled-components/native";

import { AlignOptions } from "../..";
import ColumnContainer from "../ColumnContainer";
import RowContainer from "../RowContainer";
import {
  AlignFlexItems,
  AlignNoFlexItems,
  calculateAvailableSpace,
  getAlignmentStyles,
} from "../utils";

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

  function onLayoutContainer(event: LayoutChangeEvent) {
    setContainerWidth(event.nativeEvent.layout.width);
  }

  if (direction === "ROW") {
    return (
      <RowContainer
        gapSize={gapSizeValue}
        align={align}
        onLayout={onLayoutContainer}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;

          const columnKey = child.props.size?.toLowerCase?.();
          const columns = columnKey ? theme.columns[columnKey] || 1 : null;
          let availableSpace;

          if (columns && containerWidth) {
            availableSpace = calculateAvailableSpace(
              containerWidth,
              columns,
              gap
            );
          }

          return (
            <FlexItem
              $direction="ROW"
              $availableSpace={availableSpace}
              $noFlex={child.props.noFlex ?? noFlex}
              $debug={debug}
              $align={child.props.align}
            >
              {child}
            </FlexItem>
          );
        })}
      </RowContainer>
    );
  }

  return <ColumnContainer gapSize={gapSizeValue}>{children}</ColumnContainer>;
}

const FlexItem = styled.View.attrs({ testID: "flex-item-wrapper" })<{
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

    ${({ $align, $noFlex }) =>
    $noFlex ? AlignFlexItems($align) : AlignNoFlexItems($align)};
  /* ${({ $align, $noFlex }) => getAlignmentStyles($align, $noFlex)} */
`;
