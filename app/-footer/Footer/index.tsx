import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { ActionArea } from "./ActionArea";

// Variável global para armazenar a altura do footer
let globalFooterHeight = 0;
const footerHeightListeners: ((height: number) => void)[] = [];

// Hook para usar a altura do footer
export const useFooterHeight = () => {
  const [height, setHeight] = useState(globalFooterHeight);

  useEffect(() => {
    const listener = (newHeight: number) => setHeight(newHeight);
    footerHeightListeners.push(listener);

    return () => {
      const index = footerHeightListeners.indexOf(listener);
      if (index > -1) {
        footerHeightListeners.splice(index, 1);
      }
    };
  }, []);

  return height;
};

// Função para atualizar a altura globalmente
const updateGlobalFooterHeight = (height: number) => {
  globalFooterHeight = height;
  footerHeightListeners.forEach((listener) => listener(height));
};

interface FooterProps {
  children?: React.ReactNode;
  fixed?: boolean;
  direction?: "ROW" | "COLUMN";
}

export function FooterComponent({
  children,
  fixed = false,
  direction = "ROW",
}: FooterProps) {
  const [footerHeight, setFooterHeight] = useState(0);

  function returnFooterHeight(event: any) {
    const { height } = event.nativeEvent.layout;
    setFooterHeight(height);
    updateGlobalFooterHeight(height);
  }

  if (direction === "ROW") {
    return (
      <>
        {!!fixed && <AntiFooter height={footerHeight} />}
        <RowFooter onLayout={returnFooterHeight} $fixed={fixed}>
          {children}
        </RowFooter>
      </>
    );
  }

  return (
    <>
      {!!fixed && <AntiFooter height={footerHeight} />}
      <ColumnFooter onLayout={returnFooterHeight} $fixed={fixed}>
        {children}
      </ColumnFooter>
    </>
  );
}

export const Footer = Object.assign(FooterComponent, {
  ActionArea,
});

const AntiFooter = styled.View<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const RowFooter = styled.View<{ $fixed: boolean }>`
  flex-direction: row;
  position: ${({ $fixed }) => ($fixed ? "absolute" : "relative")};
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  min-height: 16px;
  padding: 8px;
  /* background-color: red; */
  flex: 1;
`;

const ColumnFooter = styled.View<{ $fixed: boolean }>`
  flex-direction: column;
  position: ${({ $fixed }) => ($fixed ? "absolute" : "relative")};
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  min-height: 16px;
  background-color: tomato;
`;
