import React from "react";
import styled from "styled-components/native";

import { ContentArea } from "./ContentArea";
import { FloatArea } from "./FloatArea";
import { Title } from "./FooterTitle";
import { FooterProvider, useFooterContext } from "./footerContext";

interface FooterProps {
  children?: React.ReactNode;
  fixed?: boolean;
  fillColor?: string;
  padding?: number;
  bottomSpace?: number;
}

export function FooterComponent({
  children,
  fixed = false,
  fillColor,
  padding = 0,
  bottomSpace,
}: FooterProps) {
  return (
    <FooterProvider>
      <FooterWithContext
        fixed={fixed}
        fillColor={fillColor}
        padding={padding}
        bottomSpace={bottomSpace}
      >
        {children}
      </FooterWithContext>
    </FooterProvider>
  );
}

function FooterWithContext({
  children,
  fixed,
  fillColor,
  padding,
  bottomSpace,
}: FooterProps) {
  const { setFooterHeight, footerHeight } = useFooterContext();

  function returnFooterHeight(event: any) {
    const { height } = event.nativeEvent.layout;
    setFooterHeight(height);
  }

  const childrenArray = React.Children.toArray(children);

  const FloatAreas = childrenArray.filter(
    (child: any) => child.type === FloatArea
  );

  const regularChildren = childrenArray.filter(
    (child: any) => child.type !== FloatArea
  );

  return (
    <>
      {!!fixed && <AntiFooter height={footerHeight} />}

      {FloatAreas}

      <FooterContainer
        onLayout={returnFooterHeight}
        $fixed={!!fixed}
        $fillColor={fillColor}
        $padding={padding ?? 0}
        $bottomSpace={bottomSpace ?? padding ?? 0}
      >
        {regularChildren}
      </FooterContainer>
    </>
  );
}

export const Footer = Object.assign(FooterComponent, {
  FloatArea,
  Title,
  ContentArea,
});

const AntiFooter = styled.View<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const FooterContainer = styled.View<{
  $fixed: boolean;
  $fillColor?: string;
  $padding: number;
  $bottomSpace: number;
}>`
  position: ${({ $fixed }) => ($fixed ? "absolute" : "relative")};
  bottom: 0;
  width: 100%;
  min-height: 16px;
  align-items: center;
  justify-content: space-around;
  padding: ${({ $padding }) => `${$padding}px`};
  z-index: 1000;
  background-color: ${({ $fillColor }) => $fillColor || ""};
  padding-bottom: ${({ $bottomSpace }) => `${$bottomSpace}px`};
`;
