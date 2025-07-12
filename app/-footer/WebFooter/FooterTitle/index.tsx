import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return (
    <TitleWrapper>
      <h4>{children}</h4>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  width: 100%;
  padding: 4px;
  text-align: center;
`;
