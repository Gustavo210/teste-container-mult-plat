// import Container from "@mobilestockweb/container";
import { HomeTest } from "@/HomeTest";
import WebContainer from "@/WebContainer";
import Container from "@mobilestockweb/container";
import { Spacer } from "@mobilestockweb/spacer";
import { Typography } from "@mobilestockweb/typography";
import Feather from "react-native-vector-icons/Feather";
import { styled } from "styled-components";

const MeuContaienr = styled.div<{
  aligh?: "center" | "start" | "end";
  debug?: boolean | string;
}>`
  flex-basis: calc((100% - 11 * 16px) / 1 * 16px);
  flex-grow: 1;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;

  display: flex;
  ${({ aligh }) => {
    switch (aligh) {
      case "center":
        return "justify-content: center;";
      case "start":
        return "justify-content: flex-start;";
      case "end":
        return "justify-content: flex-end;";
      default:
        return "";
    }
  }}
  ${({ debug }) =>
    typeof debug === "boolean" && debug
      ? `
        border: 1px solid red;
      `
      : debug
      ? `
        border: 1px solid ${debug};
      `
      : ""}
`;

export default function Home() {
  return (
    <>
      <HomeTest direction="row">
        <HomeTest size={1}>
          <img
            src="https://images.unsplash.com/photo-1744439916846-2e8b0113d2db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo Mobilestock"
            style={{ width: "100%", height: "100px" }}
          />
        </HomeTest>
        <HomeTest debug direction="column">
          <Typography size="LG">Meu titulo</Typography>
          <Typography size="SM">Meu subtitulo</Typography>
          <Typography size="XS">Meu texto</Typography>
          <HomeTest aligh="center">
            <MeuContaienr aligh="center">
              <Feather
                name="check-circle"
                style={{
                  borderColor: "red",
                  borderWidth: 1,
                }}
                size={20}
                color="#007bff"
              />
            </MeuContaienr>
            <MeuContaienr aligh="end">
              <Feather name="check-circle" size={20} color="#007bff" />
            </MeuContaienr>

            <MeuContaienr>
              <Feather name="check-circle" size={20} color="#007bff" />
            </MeuContaienr>

            <MeuContaienr>
              <Feather name="check-circle" size={20} color="#007bff" />
            </MeuContaienr>

            <MeuContaienr>
              <Feather name="check-circle" size={20} color="#007bff" />
            </MeuContaienr>
          </HomeTest>
        </HomeTest>
        <HomeTest size={1}>
          <HomeTest direction="column">
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                flex: 1,
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                height: "40px",
              }}
            >
              <Typography size="XS">MEU BOTAO</Typography>
            </button>
          </HomeTest>
        </HomeTest>
      </HomeTest>
      <Spacer />
      <Container direction="ROW">
        <Container sizeKey="XS">
          <img
            src="https://images.unsplash.com/photo-1744439916846-2e8b0113d2db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo Mobilestock"
            style={{ width: "100%", height: "100px" }}
          />
        </Container>
        <Container direction="COLUMN">
          <Typography size="LG">Meu titulo</Typography>
          <Typography size="SM">Meu subtitulo</Typography>
          <Typography size="XS">Meu texto</Typography>
          <Container>
            <Feather name="check-circle" size={20} color="#007bff" />
            <Feather name="check-circle" size={20} color="#007bff" />

            <Feather name="check-circle" size={20} color="#007bff" />

            <Feather name="check-circle" size={20} color="#007bff" />

            <Feather name="check-circle" size={20} color="#007bff" />
          </Container>
        </Container>
        <Container sizeKey="XS">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              flex: 1,
              borderRadius: "5px",
              padding: "10px 20px",
              height: "40px",
            }}
          >
            <Typography size="XS">MEU BOTAO</Typography>
          </button>
        </Container>
      </Container>
      {/* <SkeletonHeader>
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
      <HomeContainer /> */}
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
      </WebContainer>
    </SkeletonCard>
  );
};

const HomeContainer = () => {
  return (
    <>
      <HomeTest>
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
      </HomeTest>
      <SkeletonCard>
        <HomeTest direction="column">
          {/* <HomeTest>
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
          </HomeTest> */}
          {/* <Spacer /> */}
          <HomeTest size={1}>
            <SkeletonTextFlex />
          </HomeTest>
          {/* <Spacer /> */}
          <HomeTest size={3}>
            <SkeletonStepColumn>
              <HomeTest direction="column">
                <HomeTest size={1}>
                  <Feather name="check-circle" size={20} color="#007bff" />
                </HomeTest>
                <SkeletonTexto />
                <SkeletonTextoSmall />
                <HomeTest size={1}>
                  <SkeletonTextFlex />
                </HomeTest>
              </HomeTest>
            </SkeletonStepColumn>
          </HomeTest>
          <HomeTest>
            <SkeletonTextFlex />
            <SkeletonTextFlex />
          </HomeTest>
          {/* <Spacer /> */}
          <HomeTest size={3}>
            <SkeletonTextFlex />
          </HomeTest>
          {/* <Spacer /> */}
          <Botao>TESTE</Botao>
        </HomeTest>
      </SkeletonCard>
    </>
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

const SkeletonTextFlex = styled.span`
  height: 1rem;
  background-color: #c9c9c9;
  flex: 1;
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

const SkeletonStepColumn = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
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
