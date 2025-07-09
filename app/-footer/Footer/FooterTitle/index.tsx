import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

interface Title {
  children: string;
  family?: Uppercase<DefaultTheme["font"]["families"][number]>;
  weight?: Uppercase<keyof DefaultTheme["font"]["weight"] & string>;
  size?: Uppercase<keyof DefaultTheme["font"]["size"] & string>;
}

export function Title({
  children,
  family = "POPPINS",
  weight = "REGULAR",
  size = "MD",
}: Title) {
  return (
    <TitleWrapper>
      <Typography family={"POPPINS"} weight={weight} size={size}>
        {children}
      </Typography>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.View`
  width: 100%;
  padding: 4px;
  align-items: center;
`;
