import { styled } from "styled-components/native";

interface NMainProps {
  children?: React.ReactNode;
}

export function NMain(props: NMainProps) {
  return <Main>{props.children}</Main>;
}

const Main = styled.View`
  background-color: darkslategray;
  padding: 4px 4px 12px 4px;
`;
