import React from "react";
import styled, { css } from "styled-components/native";

interface NativeTestProps {
  children?: React.ReactNode;
  size?: number;
  direction?: "row" | "column";
  debug?: boolean | string;
  gap?: number;
  align?: "left" | "center" | "right" | "space_between";
}

export function NativeTest({
  children,
  size,
  direction = "row",
  debug = false,
  gap = 16,
  align = "left",
}: NativeTestProps) {
  const totalColumns = 4;

  const sizePercent =
    size !== undefined
      ? ((100 - (gap * (totalColumns - 1) * 100) / containerWidth) /
          totalColumns) *
          size +
        ((gap * 100) / containerWidth) * (size - 1)
      : undefined;

  if (sizePercent !== undefined) {
    return (
      <ContainerItem $sizePercent={sizePercent} $debug={debug} $align={align}>
        {children}
      </ContainerItem>
    );
  }

  if (direction === "column") {
    return (
      <ContainerColumn $debug={debug} $gap={gap} $align={align}>
        {children}
      </ContainerColumn>
    );
  }

  return (
    <ContainerRow $debug={debug} $gap={gap} $align={align}>
      {children}
    </ContainerRow>
  );
}

const containerWidth = 360;

const ContainerRow = styled.View<{
  $debug?: boolean | string;
  $gap?: number;
  $align?: string;
}>`
  flex-direction: row;
  ${({ $gap }) =>
    $gap !== undefined &&
    css`
      gap: ${$gap}px;
    `}

  ${({ $debug, theme }) =>
    $debug &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${typeof $debug === "string"
        ? $debug
        : theme?.colors?.container?.visibleArea || "red"};
    `}

  justify-content: ${({ $align }) => {
    switch ($align) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      case "space_between":
        return "space-between";
      default:
        return "flex-start";
    }
  }};
`;

const ContainerColumn = styled.View<{
  $debug?: boolean | string;
  $align?: string;
}>`
  flex-direction: column;
  ${({ $debug, theme }) =>
    $debug &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${typeof $debug === "string"
        ? $debug
        : theme?.colors?.container?.visibleArea || "red"};
    `}

  justify-content: ${({ $align }) => {
    switch ($align) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      case "space_between":
        return "space-between";
      default:
        return "flex-start";
    }
  }};
`;

const ContainerItem = styled.View<{
  $sizePercent?: number;
  $debug?: boolean | string;
  $align?: string;
}>`
  ${({ $sizePercent }) =>
    $sizePercent !== undefined &&
    css`
      width: ${$sizePercent}%;
    `}

  ${({ $debug, theme }) =>
    $debug &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${typeof $debug === "string"
        ? $debug
        : theme?.colors?.container?.visibleArea || "blue"};
    `}

  ${({ $align }) => {
    switch ($align) {
      case "left":
        return css`
          align-items: flex-start;
        `;
      case "center":
        return css`
          align-items: center;
        `;
      case "right":
        return css`
          align-items: flex-end;
        `;
      case "space_between":
        return css`
          align-items: space-between;
        `;
      default:
        return css`
          align-items: left;
        `;
    }
  }}
`;

// import React from "react";
// import styled, { css } from "styled-components/native";

// interface NativeTestProps {
//   children?: React.ReactNode;
//   direction?: "row" | "column";
//   size?: number;
//   noFlex?: boolean;
//   debug?: boolean | string;
// }

// export function NativeTest({
//   children,
//   direction = "row",
//   size,
//   noFlex = false,
//   debug = false,
// }: NativeTestProps) {
//   return (
//     <ContainerRow
//       $direction={direction}
//       $size={size}
//       $noFlex={noFlex}
//       $debug={debug}
//     >
//       {children}
//     </ContainerRow>
//   );
// }

// const ContainerRow = styled.View<{
//   $direction: string;
//   $size?: number;
//   $noFlex?: boolean;
//   $debug?: boolean | string;
// }>`
//   gap: 16px;
//   flex-direction: ${({ $direction }) => $direction};

//   ${({ $size }) =>
//     $size &&
//     css`
//       flex-basis: 0;
//       flex-grow: ${$size};
//       flex-shrink: 1;
//     `}

//   ${({ $noFlex }) =>
//     $noFlex &&
//     css`
//       flex: 0;
//     `}

//   ${({ $debug, theme }) =>
//     $debug &&
//     css`
//       border-width: 1px;
//       border-style: solid;
//       border-color: ${typeof $debug === "string"
//         ? $debug
//         : theme?.colors?.container?.visibleArea || "red"};
//     `}
// `;
