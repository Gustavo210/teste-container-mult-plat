import React from "react";
import { css, DefaultTheme, styled } from "styled-components/native";
import { Resize } from "../Resize";
import { Stack } from "../Stack";

export function Y({
  children,
  gap = "MD",
  columnNumber,
}: {
  children?: React.ReactNode;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  columnNumber?: number;
}) {
  return (
    <YContainer columnNumber={columnNumber} gap={gap}>
      <Resize>{children}</Resize>
    </YContainer>
  );
}

const YContainer = styled(Stack)<{
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
}>`
  flex-direction: row;
  ${({ theme, gap }) => {
    if (!gap) return css``;
    const GapTag = gap.toLowerCase() as keyof DefaultTheme["gaps"];
    return css`
      gap: ${theme.gaps[GapTag]};
    `;
  }}
  background-color: red;
`;
