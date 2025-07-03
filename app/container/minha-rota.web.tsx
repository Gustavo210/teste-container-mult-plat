// import Container from "@mobilestockweb/container";
import WebContainer from "@/WebContainer";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <SkeletonHeader>
        <Text>HEADER</Text>
      </SkeletonHeader>
      <WebContainer gap="XS">
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
      </WebContainer>
      <CardContainer />
    </>
  );
}
const CardContainer = () => {
  return (
    <SkeletonCard>
      <WebContainer direction="COLUMN">
        <WebContainer>
          <WebContainer direction="ROW" size="XS" align="CENTER">
            <SkeletonText />
          </WebContainer>
        </WebContainer>
        <WebContainer>
          <Step />
          <Step />
          <Step />
          <StepDroid />
        </WebContainer>
        <WebContainer direction="ROW">
          <SkeletonText />
          <SkeletonText />
        </WebContainer>
        <WebContainer direction="ROW">
          <WebContainer size="MD" align="CENTER">
            <SkeletonTextoSmall />
          </WebContainer>
        </WebContainer>
        <Botao>TESTE</Botao>
      </WebContainer>
      <WebContainer>
        <StepDiv />
        <StepDiv />
        <StepDiv />
        <StepDiv />
      </WebContainer>
    </SkeletonCard>
  );
};
const Step = () => {
  return (
    <SkeletonStep>
      <WebContainer direction="COLUMN">
        <WebContainer>
          <WebContainer align="CENTER" size="MD" direction="ROW">
            <Feather name="check-circle" size={20} color="#007bff" />
          </WebContainer>
        </WebContainer>
        <SkeletonTexto /> <SkeletonTextoSmall />
        <WebContainer direction="ROW" gapSize="SM" size="XS">
          <SkeletonTexto />
        </WebContainer>
      </WebContainer>
    </SkeletonStep>
  );
};

const StepDroid = () => {
  return (
    <>
      <SkeletonStep>
        <WebContainer direction="COLUMN" debug="red" gap="NONE">
          <WebContainer align="CENTER" debug="blue">
            <WebContainer
              size="4XL"
              align="CENTER"
              direction="ROW"
              debug="magenta"
            >
              <Feather name="check-circle" size={20} color="#007bff" />
            </WebContainer>
          </WebContainer>
          <WebContainer align="CENTER">
            <WebContainer
              size="4XL"
              align="LEFT"
              direction="ROW"
              noFlex
              debug="magenta"
            >
              <Feather name="check-circle" size={20} color="#007bff" />
            </WebContainer>
          </WebContainer>
          <WebContainer align="CENTER">
            <WebContainer
              size="4XL"
              align="RIGHT"
              direction="ROW"
              noFlex
              debug="magenta"
            >
              <Feather name="check-circle" size={20} color="#007bff" />
            </WebContainer>
          </WebContainer>
          <WebContainer align="CENTER">
            <WebContainer
              size="LG"
              align="SPACE_BETWEEN"
              direction="ROW"
              debug="magenta"
            >
              <Feather name="check-circle" size={20} color="#007bff" />
              <Feather name="check-circle" size={20} color="#007bff" />
            </WebContainer>
          </WebContainer>
          <SkeletonTexto /> <SkeletonTextoSmall />
          <WebContainer>
            <WebContainer direction="ROW" gap="SM" size="XS">
              <SkeletonTexto />
            </WebContainer>
          </WebContainer>
        </WebContainer>
      </SkeletonStep>
    </>
  );
};

const MyBox = styled.div`
  width: 100%;
  height: 20px;
  background-color: #c9c9c9;
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
  border: 1px solid Gold;
  border-radius: 10px;
  padding: 10px;
  display: flex;
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
  display: flex;
  flex: 1;
`;
const Botao = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  height: 40px;
`;
