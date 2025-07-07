import { css, DefaultTheme, styled } from "styled-components";
import { Stack } from "../Stack";

export function X({
  children,
  gap,
  columnNumber,
}: {
  children?: React.ReactNode;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  columnNumber?: number;
}) {
  return (
    <XContainer columnNumber={columnNumber} gap={gap}>
      {children}
    </XContainer>
  );
}
const XContainer = styled(Stack)<{
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
}>`
  display: flex;
  flex-direction: column;
  ${({ theme, gap }) => {
    if (!gap) return css``;
    const GapTag = gap.toLowerCase() as keyof DefaultTheme["gaps"];
    return css`
      gap: ${theme.gaps[GapTag]};
    `;
  }}
  background-color: cadetblue;
`;
