import React, { ReactNode } from "react";
import { LayoutChangeEvent } from "react-native";
import styled from "styled-components/native";

type RowContainerProps = {
  children: ReactNode;
};

export const RowContainer = ({ children }: RowContainerProps) => {
  const [itemSize, setItemSize] = React.useState<number | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const totalWidth = event.nativeEvent.layout.width;
    const gap = 16;
    const numberOfItems = React.Children.count(children);
    const totalGap = gap * (numberOfItems - 1);
    const itemWidth = (totalWidth - totalGap) / numberOfItems;
    setItemSize(itemWidth);
    console.log("Largura de cada item:", itemWidth);
  };

  React.useEffect(() => {
    if (itemSize) {
      console.log("Item size updated:", itemSize);
    }
  }, [itemSize]);

  return <StyledRow onLayout={handleLayout}>{children}</StyledRow>;
};

const StyledRow = styled.View`
  flex-direction: row;
  gap: 16px;
`;
