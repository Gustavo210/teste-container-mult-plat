import { styled } from "styled-components/native";

export function X({ children }: { children?: React.ReactNode }) {
  return <XContainer>{children}</XContainer>;
}
const XContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: cadetblue;
`;
