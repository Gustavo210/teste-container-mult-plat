import Container from "@mobilestockweb/container";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <SkeletonHeader>HEADER</SkeletonHeader>
      <Container variant="MAIN">
        <Container>
          <MyBox>1</MyBox>
          <MyBox>2</MyBox>
          <MyBox>3</MyBox>
          <MyBox>4</MyBox>
          <MyBox>5</MyBox>
          <MyBox>6</MyBox>
          <MyBox>7</MyBox>
          <MyBox>8</MyBox>
          <MyBox>9</MyBox>
          <MyBox>10</MyBox>
          <MyBox>11</MyBox>
          <MyBox>12</MyBox>
        </Container>

        <CardContainer />
      </Container>
    </>
  );
}
const MyBox = styled.div`
  width: 100%;
  height: 20px;
  background-color: #c9c9c9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.6rem;
`;

const SkeletonHeader = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const SkeletonText = styled.span`
  height: 1rem;
  background-color: #c9c9c9;
`;
const SkeletonCard = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 10px;
`;
const SkeletonTextoSmall = styled.span`
  background-color: #d9d9d9;
  height: 10px;
  border-radius: 5px;
`;
const SkeletonIcon = styled.div`
  background-color: #d9d9d9;
  height: 20px;
  width: 20px;
  border-radius: 5px;
`;
const SkeletonTexto = styled.span`
  background-color: #d9d9d9;
  height: 20px;
  border-radius: 10px;
`;
const SkeletonStep = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
const Botao = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  height: 40px;
`;
const CardContainer = () => {
  return (
    <SkeletonCard>
      <Container direction="COLUMN">
        <Container>
          <Container direction="ROW" sizeKey="XS" align="CENTER">
            <SkeletonText />
          </Container>
        </Container>
        <Container>
          <Step />
          <Step />
          <Step />
          <Step />
        </Container>
        <Container direction="ROW">
          <SkeletonText />
          <SkeletonText />
        </Container>
        <Container direction="ROW">
          <Container sizeKey="XS" align="LEFT">
            <SkeletonTextoSmall />
          </Container>
        </Container>
        <Botao />
      </Container>
    </SkeletonCard>
  );
};
const Step = () => {
  return (
    <SkeletonStep>
      <Container direction="COLUMN">
        <Container>
          <Container align="CENTER" sizeKey="XS" direction="ROW">
            <SkeletonIcon />
          </Container>
        </Container>
        <SkeletonTexto /> <SkeletonTextoSmall />
      </Container>
    </SkeletonStep>
  );
};
