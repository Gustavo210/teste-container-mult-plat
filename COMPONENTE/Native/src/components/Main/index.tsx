import { styled } from "styled-components/native";
import { ViewBase } from "../ViewBase";

interface ContainerMainProps {
  children: React.ReactNode;
}

export function Main({ children }: ContainerMainProps) {
  return (
    <ContainerSafeArea>
      <PageWrapper gap="NONE">{children}</PageWrapper>
    </ContainerSafeArea>
  );
}

const PageWrapper = styled(ViewBase)`
  width: 100%;
  flex-direction: column;
  padding: 0px 4px 12px 4px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.container.default};
`;
const ContainerSafeArea = styled.SafeAreaView`
  flex: 1;
  /* position: relative; */
`;
