import { Container } from "@/Container/src";
import { Img } from "@/Image/src";
// import { Image } from "@mobilestock-native/image";
import { styled, useTheme } from "styled-components/native";
const URL =
  "https://images.unsplash.com/photo-1749587452499-ea1fd591e63f?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function MinhaRota() {
  const theme = useTheme();
  return (
    <Container direction="COLUMN" gap="XS">
      <Card>
        <Img src={URL} alt="Imagem de exemplo" size="SM" borderRadius="NONE" />
        <Content>
          <Title>Minha Rota</Title>
          <Text>Esta é a minha rota personalizada.</Text>
          <Footer>
            <Button>
              <Text>Botão de Ação</Text>
            </Button>
          </Footer>
        </Content>
      </Card>
      <ContainerCard gap="NONE" direction="ROW">
        <Container size="XS" debug>
          {/* <View style={{ width: "100%", height: theme.size.sm }}> */}
          <Image src={URL} alt="Imagem de exemplo" size="SM" />
          {/* </View> */}
          {/* <Feather name="image" size={24} color="#000" /> */}
        </Container>
        <Container direction="COLUMN" gap="XS" align="RIGHT">
          <Container direction="COLUMN" gap="NONE">
            <Title>Minha Rota</Title>
            <Text>Esta é a minha rota personalizada.</Text>
          </Container>
          <Button>
            <Text>Botão de Ação</Text>
          </Button>
        </Container>
      </ContainerCard>
    </Container>
  );
}
const ContainerCard = styled(Container)`
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 8px;
`;
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
