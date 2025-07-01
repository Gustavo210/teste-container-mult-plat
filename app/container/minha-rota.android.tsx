import { Container } from "@mobilestock-native/container";
// import { Container } from "@/Container/src";
import Feather from "react-native-vector-icons/Feather";
import { styled } from "styled-components/native";

export default function Home() {
  return (
    <>
      <SkeletonHeader>
        <SkeletonHeaderText>HEADER</SkeletonHeaderText>
      </SkeletonHeader>
      <Container gap="2XS" align="CENTER">
        <MyBox>
          <Text>
            <MyBoxText>1</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>2</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>3</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>4</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>5</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>6</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>7</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>8</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>9</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>10</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>11</MyBoxText>
          </Text>
        </MyBox>
        <MyBox>
          <Text>
            <MyBoxText>12</MyBoxText>
          </Text>
        </MyBox>
      </Container>
      <CardContainer />
    </>
  );
}

const CardContainer = () => {
  return (
    <>
      <SkeletonCard>
        <Container direction="COLUMN" id="AVO">
          <Container id="PAI">
            <Container
              id="FILHO"
              direction="ROW"
              size="MD"
              align="CENTER"
              debug="#f0f"
            >
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
          <Container direction="ROW" align="SPACE_BETWEEN">
            <Container size="XS">
              <SkeletonTextoSmall />
            </Container>
            <Container size="XS">
              <SkeletonTextoSmall />
            </Container>
          </Container>
          <Botao title="TESTE" />
        </Container>
        <Container direction="ROW">
          <Container size="SM" align="CENTER">
            <SkeletonTextoSmall />
          </Container>
        </Container>
      </SkeletonCard>
    </>
  );
};
const Step = () => {
  return (
    <>
      <SkeletonStep>
        <Container direction="COLUMN">
          <Container align="CENTER">
            <Container size="4XL" align="CENTER" direction="ROW" noFlex>
              <Feather name="check-circle" size={20} color="#007bff" />
            </Container>
          </Container>
          <Container align="CENTER">
            <Container size="4XL" align="LEFT" direction="ROW" noFlex>
              <Feather name="check-circle" size={20} color="#007bff" />
            </Container>
          </Container>
          <Container align="CENTER">
            <Container size="4XL" align="RIGHT" direction="ROW" noFlex>
              <Feather name="check-circle" size={20} color="#007bff" />
            </Container>
          </Container>
          <Container align="CENTER">
            <Container
              size="4XL"
              align="SPACE_BETWEEN"
              direction="ROW"
              noFlex
              gap="NONE"
            >
              <Feather name="check-circle" size={20} color="#007bff" />
              <Feather name="check-circle" size={20} color="#007bff" />
            </Container>
          </Container>
          <SkeletonTexto /> <SkeletonTextoSmall />
        </Container>
      </SkeletonStep>
    </>
  );
};
const Card = styled.View`
  border: 1px solid #ccc;
  flex-direction: row;
  overflow: hidden;
  border-radius: 8px;
  gap: 8px;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
const Content = styled.View`
  /* padding: 16px; */
`;
const Text = styled.Text`
  font-size: 10px;
  color: #333;
`;
const Footer = styled.View`
  padding: 8px;
  background-color: red;
`;
const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 8px 16px;
  border-radius: 4px;
  align-items: center;
`;

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
  background-color: #ff00ff;
  height: 10px;
  border-radius: 5px;
`;
const SkeletonIcon = styled.View`
  background-color: #d9d9d9;
  height: 20px;
  /* width: 20px; */
  /* width: 100%; */
  flex: 1;
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
