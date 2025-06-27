import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import styled, { DefaultTheme, css, useTheme } from "styled-components/native";

import ColumnLayout from "./components/ColumnLayout";
import RowLayout from "./components/RowLayout";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

export interface FlexBoxProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  sizeKey?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gapSize?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  align?: AlignProps;
  noFlex?: boolean;
  debug?: boolean | string;
}

function getAlignmentStyles($align, $noFlex) {
  if (!$align) return "";

  if ($noFlex) {
    const flexValues = {
      LEFT: "flex-start",
      CENTER: "center",
      RIGHT: "flex-end",
      SPACE_BETWEEN: "space-between",
    };
    const value = flexValues[$align];
    return value
      ? css`
          justify-content: ${value};
        `
      : "";
  }

  const marginStyles = {
    LEFT: css`
      margin-right: auto;
    `,
    CENTER: css`
      margin-left: auto;
      margin-right: auto;
    `,
    RIGHT: css`
      margin-left: auto;
    `,
  };
  return marginStyles[$align] || "";
}

export default function FlexBox({
  children,
  direction = "ROW",
  gapSize,
  align,
  noFlex = false,
  debug = false,
}: FlexBoxProps): JSX.Element {
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
      <RowLayout
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
            const singleColWidth = (containerWidth - gap * 3) / 4;
            availableSpace = singleColWidth * columns + gap * (columns - 1);
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
      </RowLayout>
    );
  }

  return <ColumnLayout gapSize={gapSizeValue}>{children}</ColumnLayout>;
}

const FlexItem = styled.View.attrs({ testID: "flex-item-wrapper" })<{
  $align?: AlignProps;
  $direction?: "ROW" | "COLUMN";
  $availableSpace?: number;
  $noFlex?: boolean;
  $debug?: boolean | string;
}>`
  ${({ $debug }) =>
    $debug &&
    css`
      border-width: 1px;
      border-color: red;
      border-style: solid;
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
