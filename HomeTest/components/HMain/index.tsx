import styled from "styled-components";


interface HmainProps {
    children?: React.ReactNode;
}

export function Hmain(props: HmainProps) {
  return <Main>{props.children}</Main>;
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: DarkSlateGray;
  max-width: 73.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  `
  