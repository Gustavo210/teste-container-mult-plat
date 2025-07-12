import React from "react";
import styled, { DefaultTheme } from "styled-components/native";

import { Dimensions } from "react-native";
import { ContentArea } from "./ContentArea";
import { FloatArea } from "./FloatArea";
import { Title } from "./FooterTitle";
import { FooterProvider, useFooterContext } from "./footerContext";

interface FooterProps {
  children?: React.ReactNode;
  full?: boolean;
  backGroundColor?: string;
  padding?: Uppercase<keyof DefaultTheme["padding"]>;
  bottomSpace?: Uppercase<keyof DefaultTheme["padding"]>;
  gap?: Uppercase<keyof DefaultTheme["gaps"]>;
}

export function FooterComponent({
  children,
  full = true,
  backGroundColor,
  padding = "XS",
  bottomSpace,
  gap = "NONE",
}: FooterProps) {
  return (
    <FooterProvider>
      <FooterWithContext
        full={full}
        backGroundColor={backGroundColor}
        padding={padding}
        bottomSpace={bottomSpace}
        gap={gap}
      >
        {children}
      </FooterWithContext>
    </FooterProvider>
  );
}

function FooterWithContext({
  children,
  full,
  backGroundColor = "",
  padding = "XS",
  bottomSpace,
  gap = "NONE",
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
      {FloatAreas}
      <AntiFooter height={footerHeight} />
      <FooterContainer
        onLayout={returnFooterHeight}
        $backGroundColor={backGroundColor}
        $padding={padding}
        $bottomSpace={bottomSpace ?? padding}
        $full={full}
        gap={gap}
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
  $backGroundColor?: string;
  $padding: FooterProps["padding"];
  $bottomSpace: FooterProps["bottomSpace"];
  $full?: boolean;
  gap: FooterProps["gap"];
}>`
  position: absolute;
  bottom: 0;
  justify-self: center;
  width: ${({ $full }) =>
    $full ? `${Dimensions.get("window").width}px` : "100%"};

  min-height: 16px;
  /* align-items: center; */
  /* justify-content: space-around; */
  padding: ${({ $padding, theme }) =>
    theme.padding[$padding.toLocaleLowerCase()]};
  gap: ${({ gap, theme }) => theme.gaps[gap.toLocaleLowerCase()]};
  z-index: 10;
  background-color: ${({ $backGroundColor }) => $backGroundColor || ""};
  padding-bottom: ${({ $bottomSpace, theme }) =>
    theme.padding[$bottomSpace.toLocaleLowerCase()]};
  margin-bottom: 12px;
`;
