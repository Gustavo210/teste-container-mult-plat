import React from "react";
import { DefaultTheme } from "styled-components";
import VColumn from "./VColumn";
import VMain from "./VMain";
import VRow from "./VRow";

type AlignProps = "LEFT" | "CENTER" | "RIGHT" | "SPACE_BETWEEN";
export interface VContainerProps {
  children: React.ReactNode;
  variant?: "MAIN" | "BOX";
  direction?: "ROW" | "COLUMN";
  align?: AlignProps;
  sizeKey?: Uppercase<keyof DefaultTheme["columns"] & string>;
  gapSize?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  noFlex?: boolean;
  debug?: boolean;
}

export default function VContainer(props: VContainerProps) {
  const direction = props.direction || "ROW";

  if (props.variant === "MAIN") {
    return <VMain>{props.children}</VMain>;
  }

  return direction === "ROW" ? (
    <VRow
      direction={direction}
      align={props.align}
      sizeKey={props.sizeKey}
      gapSize={props.gapSize}
      debug={props.debug}
      noFlex={props.noFlex}
    >
      {props.children}
    </VRow>
  ) : (
    <VColumn
      sizeKey={props.sizeKey}
      gapSize={props.gapSize}
      debug={props.debug}
      noFlex={props.noFlex}
    >
      {props.children}
    </VColumn>
  );
}
