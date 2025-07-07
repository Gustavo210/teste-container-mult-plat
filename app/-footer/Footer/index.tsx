import React from "react";
import styled from "styled-components/native";

interface FooterProps {
  children?: React.ReactNode;
}

interface FooterFloatButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

function FooterComponent(props: FooterProps) {
  return <DefaultFooter>{props.children}</DefaultFooter>;
}

function FooterFloatButton(props: FooterFloatButtonProps) {
  return (
    <FloatingButtonWrapper>
      <FloatButton onPress={props.onPress}>{props.children}</FloatButton>
    </FloatingButtonWrapper>
  );
}

FooterComponent.FloatButton = FooterFloatButton;

export const Footer = FooterComponent;

const DefaultFooter = styled.View`
  flex-direction: row;
  background-color: red;
  position: relative;
  /* Tentei usar o sticky, pra não precisar de um container extra só pra ele, mas não consegui fazer funcionar */
  /* Na maioria dos casos de uso que vi, é usado como fixed. Neste caso, não é melhor ele ser o padrão? */
  bottom: 0;

  align-items: center;
  justify-content: space-around;
  height: 56px;
`;

const FloatingButtonWrapper = styled.View`
  margin-bottom: 64px;
  position: absolute;
  bottom: 48px;
  padding: 16px;
  justify-content: center;
`;

const FloatButton = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  padding: 16px;
  background-color: #7a6695;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px; /* espaço entre o botão flutuante e o footer */
  flex: 1;
`;
