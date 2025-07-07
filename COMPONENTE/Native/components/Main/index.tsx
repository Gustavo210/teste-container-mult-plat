import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { styled } from "styled-components/native";
import { Resize } from "../Resize";

interface ContainerMainProps {
  children: React.ReactNode;
  debug?: boolean | string;
}

export function Main({ children, debug = false }: ContainerMainProps) {
  return (
    <ContainerRelative>
      <PageWrapper>{children}</PageWrapper>
      {debug && (
        <ColumnContainer>
          <Resize>
            {Array.from({
              length: 12,
            }).map((_, index) => (
              <VirtualizedColumn key={index} debug={debug}>
                <Typography
                  size="SM"
                  align="CENTER"
                  family="POPPINS-BOLD"
                  weight="BOLD"
                >
                  Coluna: {index + 1}
                </Typography>
              </VirtualizedColumn>
            ))}
          </Resize>
        </ColumnContainer>
      )}
    </ContainerRelative>
  );
}
const ContainerRelative = styled.View`
  position: relative;
  flex: 1;
`;

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

const VirtualizedColumn = styled.View<{ debug: boolean | string }>`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ debug, theme }) =>
    typeof debug === "string"
      ? `${debug}`
      : theme.colors.container.visibleArea};
  opacity: 0.5;
  border: 1px dashed
    ${({ debug, theme }) =>
      typeof debug === "string" ? debug : theme.colors.container.visibleArea};
`;
