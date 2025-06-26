import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import styled, { DefaultTheme, css, useTheme } from "styled-components/native";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";
export interface FlexBoxProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  sizeKey?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gapSize?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  align?: AlignProps;
  debug?: boolean | string;
}

export default function FlexBox({
  children,
  direction = "ROW",
  gapSize = "MD",
  align,
  debug = false,
  ...rest
}: FlexBoxProps): JSX.Element {
  const theme = useTheme();
  const [containerWidth, setContainerWidth] = useState(0);
  const gap = theme.gaps[gapSize.toLowerCase()];
  const containerDirection = direction;

  function availableSpace(event: LayoutChangeEvent) {
    setContainerWidth(event.nativeEvent.layout.width);
  }

  const Container = direction === "COLUMN" ? ColumnContainer : RowContainer;

  return (
    <Container
      $gapSize={gapSize}
      $align={align}
      onLayout={availableSpace}
      debug={debug}
      {...rest}
    >
      {direction === "ROW"
        ? React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;
            const columnKey = child.props.size?.toLowerCase?.();
            const alignment = child.props.align;
            const columnsOnScreen = columnKey
              ? theme.columns[columnKey] || 1
              : null;
            let childAvailableSpace;

            if (columnsOnScreen && containerWidth) {
              const singleColumnWidth = (containerWidth - gap * 3) / 4;
              childAvailableSpace =
                singleColumnWidth * columnsOnScreen +
                gap * (columnsOnScreen - 1);
            }

            return (
              <FlexItemWrapper
                $align={alignment}
                $direction={containerDirection}
                $availableSpace={childAvailableSpace}
              >
                {child}
              </FlexItemWrapper>
            );
          })
        : children}
    </Container>
  );
}

const RowContainer = styled.View<{
  $gapSize: string;
  $align?: AlignProps;
  debug?: boolean | string;
}>`
  width: 100%;
  flex-direction: row;

  ${({ $gapSize, theme }) => css`
    gap: ${theme.gaps[$gapSize.toLowerCase()]}px;
  `}
  ${({ debug }) => {
    if (typeof debug === "boolean" && debug) {
      return css`
        border: 1px solid red;
      `;
    } else if (typeof debug === "string") {
      return css`
        border: 1px solid ${debug};
      `;
    }
  }}

  ${({ $align }) => {
    switch ($align) {
      case "CENTER":
        return css`
          justify-content: center;
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
        return css`
          justify-content: flex-start;
        `;
    }
  }}
`;

const ColumnContainer = styled.View<{
  $gapSize: string;
  $align?: AlignProps;
  debug?: boolean | string;
}>`
  width: 100%;
  flex-direction: column;

  ${({ debug }) => {
    if (typeof debug === "boolean" && debug) {
      return css`
        border: 1px solid red;
      `;
    } else if (typeof debug === "string") {
      return css`
        border: 1px solid ${debug};
      `;
    }
  }}

  ${({ $gapSize, theme }) => css`
    gap: ${theme.gaps[$gapSize.toLowerCase()]}px;
  `}
`;

const FlexItemWrapper = styled.View.attrs({ testID: "flex-item-wrapper" })<{
  $align?: AlignProps;
  $direction?: FlexBoxProps["direction"];
  $availableSpace?: number;
}>`
  display: flex;
  ${({ $availableSpace }) =>
    $availableSpace ? { width: $availableSpace } : { flex: 1 }}

  ${({ $align, $direction }) => {
    if ($direction === "ROW") {
      return css`
        ${$align === "CENTER" && "margin-left: auto; margin-right: auto;"}
        ${$align === "RIGHT" && "margin-left: auto;"}
      `;
    }

    const alignSelf =
      $align === "CENTER"
        ? "center"
        : $align === "RIGHT"
        ? "flex-end"
        : "flex-start";

    return css`
      align-self: ${alignSelf};
    `;
  }}
`;
