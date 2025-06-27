import React, { useState } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

export interface LimitedFlexBoxProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  sizeKey?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gapSize?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  align?: AlignProps;
}

export default function LimitedFlexBox({
  children,
  direction = "ROW",
  sizeKey,
  gapSize = "MD",
  align = "LEFT",
}: LimitedFlexBoxProps): JSX.Element {
  const theme = useTheme();
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = theme.gaps[gapSize.toLowerCase()];
  const columnsKey = sizeKey?.toLowerCase?.();
  const columns = columnsKey ? theme.columns[columnsKey] : null;

  let calculatedWidth;
  if (columns && containerWidth) {
    const singleColumnWidth = (containerWidth - gap * 3) / 4;
    calculatedWidth = singleColumnWidth * columns + gap * (columns - 1);
  }

  return (
    <StyledLimitedFlexBox
      $width={calculatedWidth}
      $direction={direction}
      $align={align}
    >
      {children}
    </StyledLimitedFlexBox>
  );
}

const StyledLimitedFlexBox = styled.View<{
  $width?: number;
  $direction: "ROW" | "COLUMN";
  $align: AlignProps;
}>`
  width: 100%;
  flex-direction: ${({ $direction }) => $direction.toLowerCase()};
  display: flex;
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
  background-color: purple;
`;
