import { css, DefaultTheme, styled } from "styled-components";

export function Stack({
  children,
  ...rest
}: {
  children?: React.ReactNode;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  columnNumber?: number;
}) {
  return <StackContainer {...rest}>{children}</StackContainer>;
}

const StackContainer = styled.div<{
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  columnNumber?: number;
}>`
  ${({ columnNumber, gap, theme }) => {
    if (!columnNumber)
      return css`
        width: calc(100%);
      `;
    const GapTag = gap?.toLowerCase() as keyof DefaultTheme["gaps"];
    const GapCss =
      Number(theme.gaps[GapTag]) > 0 ? theme.gaps[GapTag || "md"] : "1rem";

    return css`
      width: calc(((73.5rem / 11) * ${columnNumber}) - (${GapCss} * 0.5));

      @media (max-width: 599px) {
        width: calc(((100% / 3) * ${columnNumber}) + (${GapCss} * 2.5));
      }
      @media (min-width: 600px) and (max-width: 904px) {
        width: calc(((100% / 7) * ${columnNumber}));
      }
    `;
  }}
`;
