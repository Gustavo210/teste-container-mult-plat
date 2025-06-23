import { Container } from "@mobilestock-native/container";
import { styled } from "styled-components/native";

export default function Home() {
  return (
    <>
      <SkeletonHeader>
        <SkeletonHeaderText>HEADE2R</SkeletonHeaderText>
      </SkeletonHeader>
      <Container variant="MAIN">
        <Container gap="XS">
          <MyBox>
            <MyBoxText>1</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>2</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>3</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>4</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>5</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>6</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>7</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>8</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>9</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>10</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>11</MyBoxText>
          </MyBox>
          <MyBox>
            <MyBoxText>12</MyBoxText>
          </MyBox>
        </Container>
        <CardContainer />
      </Container>
    </>
  );
}

const CardContainer = () => {
  return (
    <SkeletonCard>
      <Container direction="COLUMN" gap="NONE">
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
          <Container sizeKey="MD" align="LEFT">
            <SkeletonTextoSmall />
          </Container>
        </Container>
        <Botao title="TESTE" />
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

const MyBox = styled.View`
  width: 100%;
  height: 20px;
  background-color: #c9c9c9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkeletonHeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const MyBoxText = styled.Text`
  font-size: 10px;
`;

const SkeletonHeader = styled.View`
  width: 100%;
  height: 64px;
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SkeletonText = styled.View`
  height: 16px;
  background-color: #c9c9c9;
`;
const SkeletonCard = styled.View`
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 10px;
`;
const SkeletonTextoSmall = styled.View`
  background-color: #d9d9d9;
  height: 10px;
  border-radius: 5px;
`;
const SkeletonIcon = styled.View`
  background-color: #d9d9d9;
  height: 20px;
  width: 20px;
  border-radius: 5px;
`;
const SkeletonTexto = styled.View`
  background-color: #d9d9d9;
  height: 20px;
  border-radius: 10px;
`;
const SkeletonStep = styled.View`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
const Botao = styled.Button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  height: 40px;
`;
