import React from "react";
import { styled } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  debug?: boolean | string;
}

export function Main({ children, debug = false }: LayoutProps) {
  return (
    <PageWrapper>
      {children}
      {debug && (
        <ColumnContainer>
          {Array.from({ length: 12 }).map((_, index) => (
            <VirtualizedColumn key={index} debug={debug} />
          ))}
        </ColumnContainer>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  flex: 1;
  max-width: 73.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  /* position: relative; */
  padding: 0px 4px 12px 4px;
  height: 100%; //TODO verificar se vai ser bom deixar isso aqui
`;

const ColumnContainer = styled(PageWrapper)`
  width: calc(100% - 8px);
  flex-direction: row;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  z-index: -1;
`;

const VirtualizedColumn = styled.div<{ debug: boolean | string }>`
  flex: 1;
  background-color: ${({ debug, theme }) =>
    typeof debug === "string"
      ? `${debug}`
      : theme.colors.container.visibleArea};
  opacity: 0.5;
  border: 1px dashed
    ${({ debug, theme }) =>
      typeof debug === "string" ? debug : theme.colors.container.visibleArea};
`;
