import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
};

export function HomeTest({ children, direction = 'row' }: Props) {

  if (direction === 'row') {
  return (
    <Container >
      {children}
    </Container>
  );
  }

  return (
    <ContainerColumn>
      {children}
    </ContainerColumn>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 8px;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;