import styled from "styled-components/native";

interface FooterProps {
  children?: React.ReactNode;
}

export function Footer(props: FooterProps) {
  return <DefaultFooter>{props.children}</DefaultFooter>;
}

const DefaultFooter = styled.View`
  flex-direction: row;
  /* background-color: red; */
  position: fixed; /* é realmente necessário?*/
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: auto;
  /* flex: 1; */
`;
