import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

interface LayoutProps {
  children: React.ReactNode;
  debug?: boolean | string;
}

export function Layout(props: LayoutProps): JSX.Element {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <PageWrapper>{props.children}</PageWrapper>
      {props.debug && (
        <ColumnContainer>
          {Array.from({
            length: Math.max(
              ...Object.values(theme.columns).filter(
                (item, index, arr) => arr.indexOf(item) === index
              )
            ),
          }).map((_, index) => (
            <VirtualizedColumn key={index} />
          ))}
        </ColumnContainer>
      )}
    </View>
  );
}

const PageWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 0px 4px 12px 4px;
`;

const ColumnContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  gap: 16px;
  flex-direction: row;
  padding: 0px 4px 12px 4px;
  z-index: -1;
`;

const VirtualizedColumn = styled.View.attrs({
  testID: "virtual-column",
})`
  flex: 1;
  background-color: #c8348848;
  opacity: 0.3;
  border: 1px dashed #c83488;
`;
