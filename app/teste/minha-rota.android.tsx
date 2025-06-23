import { Container } from "@mobilestock-native/container";
import { Text, View } from "react-native";
import { styled } from "styled-components/native";

const SkeletonTexto = styled.View`
  background-color: #d9d9d9;
  height: 20px;
  border-radius: 10px;
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
const Card = styled.View`
  padding: 10px;
  background-color: #fff;
`;
const SkeletonStep = styled.View`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
const Spacer = styled.View`
  height: 10px;
`;

const Botao = styled.Button`
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
`;
export default function Screen() {
  return (
    <View style={{ paddingTop: 10 }}>
      <Container variant="MAIN">
        <Text>Implementação usando Container</Text>
        <CardContainer />
        <Spacer />
        <Text>Implementação usando modificação com gap customizável</Text>
        <CardComp />
      </Container>
    </View>
  );
}

const CardContainer = () => {
  return (
    <Card>
      <Container direction="COLUMN" gap="XS">
        <Container>
          <Container direction="ROW" sizeKey="XS" align="CENTER">
            <SkeletonTexto />
          </Container>
        </Container>
        <Container>
          <Step />
          <Step />
          <Step />
          <Step />
        </Container>
        <Container direction="ROW">
          <SkeletonTexto />
          <SkeletonTexto />
        </Container>
        <Container direction="ROW">
          <Container sizeKey="XS" align="LEFT">
            <SkeletonTextoSmall />
          </Container>
        </Container>
        <Botao title="Teste" />
      </Container>
    </Card>
  );
};
const Step = () => {
  return (
    <SkeletonStep>
      <Container direction="COLUMN" gap="XS">
        <Container>
          <Container align="CENTER" sizeKey="XS" direction="ROW">
            <SkeletonIcon />
          </Container>
        </Container>
        <SkeletonTexto />
        <SkeletonTextoSmall />
      </Container>
    </SkeletonStep>
  );
};
//=========================================== IMPLEMENTAÇÃO COM GAP VARIÁVEL =========================================//
const CardComp = () => {
  return (
    <CardC>
      <ContainerTitle>
        <ContainerText25>
          <SkeletonTextoc />
        </ContainerText25>
      </ContainerTitle>
      <ContainerStep>
        <StepC />
        <StepC />
        <StepC />
        <StepC />
      </ContainerStep>
      <ContainerDescription>
        <ContainerDescriptionRow>
          <ContainerText50>
            <SkeletonTextoc />
          </ContainerText50>
          <ContainerText50>
            <SkeletonTextoc />
          </ContainerText50>
        </ContainerDescriptionRow>
        <ContainerDescriptionRow>
          <ContainerText25>
            <SkeletonTextocSmall />
          </ContainerText25>
        </ContainerDescriptionRow>
      </ContainerDescription>
      <Botao title="Teste" />
    </CardC>
  );
};

const CardC = styled.View`
  padding: 10px;
  background-color: #fff;
  gap: 4px;
`;

const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const ContainerStep = styled.View`
  flex-direction: row;
  gap: 8px;
`;
const SkeletonTextoc = styled.View`
  background-color: #d9d9d9;
  height: 20px;
  border-radius: 10px;
`;

const SkeletonTextocSmall = styled.View`
  background-color: #d9d9d9;
  height: 10px;
  border-radius: 10px;
`;
const ContainerDescription = styled.View`
  flex-direction: column;
  gap: 8px;
`;
const ContainerDescriptionRow = styled.View`
  flex-direction: row;
  gap: 8px;
`;
const ContainerText50 = styled.View`
  flex-basis: 50%;
  flex-shrink: 1;
`;
const ContainerText25 = styled.View`
  flex-basis: 25%;
  flex-shrink: 1;
`;
const StepC = () => {
  return (
    <SkeletonStep
      style={{
        flexDirection: "column",
        flexBasis: "100%",
        flexGrow: 0,
        flexShrink: 1,
        gap: 4,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <SkeletonIcon />
      </View>
      <SkeletonTextoc />
      <SkeletonTextoSmall />
    </SkeletonStep>
  );
};
