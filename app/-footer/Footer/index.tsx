import React, { Children, ReactNode, isValidElement } from "react";
import styled from "styled-components/native";

// Tipagem dos componentes válidos que podem ser usados no ActionArea
type ComponentWithTarget = React.ElementType & {
  target?: React.ElementType;
};

interface FooterProps {
  children?: React.ReactNode;
}

interface ActionAreaProps {
  children: ReactNode;
  align?: "LEFT" | "RIGHT";
}

// Lista de componentes válidos que podem ser renderizados dentro do ActionArea
const VALID_ACTION_COMPONENTS = ["FloatButton"]; // Pode ser ajustado para os componentes reais usados

function FooterComponent(props: FooterProps) {
  return <DefaultFooter>{props.children}</DefaultFooter>;
}

// Componente ActionArea que será usado como uma área de botões flutuantes no Footer
function ActionArea({ children, align = "LEFT" }: ActionAreaProps) {
  const validatedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return null;

    const componentType = child.type as ComponentWithTarget;

    const isValid =
      typeof componentType === "string"
        ? VALID_ACTION_COMPONENTS.includes(componentType)
        : true; // Caso queira permitir qualquer componente customizado

    if (isValid) return child;

    return null;
  });

  return (
    <ActionAreaWrapper $align={align}>{validatedChildren}</ActionAreaWrapper>
  );
}

// Define Footer como compound component com ActionArea como subcomponente
export const Footer = Object.assign(FooterComponent, {
  ActionArea,
});

// Footer principal fixado no rodapé
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

// Área para renderizar botões flutuantes
const ActionAreaWrapper = styled.View<{ $align: ActionAreaProps["align"] }>`
  position: absolute;
  bottom: 20px;
  align-items: center;
  padding-inline: 16px;
  align-self: ${({ $align }) =>
    $align === "RIGHT" ? "flex-end" : "flex-start"};
  margin-bottom: 64px;

  border-style: solid;
  border-width: 1px;
  border-color: black;
`;
