import { DefaultTheme, styled } from "styled-components/native";
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
const XContainer = styled(Stack)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: cadetblue;
`;
