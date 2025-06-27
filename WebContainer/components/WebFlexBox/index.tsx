import React from "react";
import ColumnLayout from "./ColumnLayout";
import RowLayout from "./RowLayout";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";

interface WebFlexBoxProps {
  children: React.ReactNode;
  direction?: "ROW" | "COLUMN";
  align?: AlignProps;
  sizeKey?: string;
  gapSize?: string;
  auto?: boolean;
}

export default function WebFlexBox({
  children,
  direction = "ROW",
  align = "LEFT",
  sizeKey,
  gapSize,
  auto = false,
}: WebFlexBoxProps): JSX.Element {
  const resolvedGapSize = gapSize ?? (direction === "ROW" ? "MD" : "NONE");

  if (direction === "ROW") {
    return (
      <RowLayout
        align={align}
        sizeKey={sizeKey}
        gapSize={resolvedGapSize}
        auto={auto}
      >
        {children}
      </RowLayout>
    );
  }

  return (
    <ColumnLayout
      align={align}
      sizeKey={sizeKey}
      gapSize={resolvedGapSize}
      auto={auto}
    >
      {children}
    </ColumnLayout>
  );
}
