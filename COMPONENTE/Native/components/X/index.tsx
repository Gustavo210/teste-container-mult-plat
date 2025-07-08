import React from "react";
import { DefaultTheme, useTheme } from "styled-components/native";
import { Stack } from "../Stack";

export function X({
  children,
  gap,
  columnNumber,
  noFlex,
}: {
  noFlex?: boolean;
  children?: React.ReactNode;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  columnNumber?: number;
}) {
  const theme = useTheme();
  function calculateGap(): number {
    if (!gap) return 0;
    const GapTag = gap.toLowerCase() as keyof DefaultTheme["gaps"];
    return Number(theme.gaps[GapTag]);
  }
  function renderChildren() {
    // React.Children.forEach(children, (child) => {
    //   if (React.isValidElement(child)) {
    //     console.log(
    //       "child.props.columnNumber",
    //       child.props.columnNumber,
    //       React.Children.count(child)
    //     );
    //   } else {
    //     console.log("child", child);
    //   }
    // });
    if (React.Children.toArray(children).length > 1) {
      console.log(
        "React.Children.count(children)",
        React.Children.toArray(children)[0].props.children
      );
    }
  }
  renderChildren();
  return (
    <Stack
      style={[
        {
          flexDirection: "row",
          backgroundColor: "red",
          gap: calculateGap(),
        },
        (noFlex || columnNumber === 4) && { flex: 1 },
      ]}
      columnNumber={columnNumber}
    >
      {children}
    </Stack>
  );
}
