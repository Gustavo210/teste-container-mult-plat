import styled from "styled-components";

export default function MinhaRota() {
  return (
    <Container>
      <Title>Minha Rota web</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;
