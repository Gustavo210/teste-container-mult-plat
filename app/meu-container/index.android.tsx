import { Typography } from "@mobilestock-native/typography";
import React from "react";
import { styled } from "styled-components/native";

export default function IndexAndroid() {
  return (
    <AndroidContainer>
      <Typography>Rota Android para meu-container</Typography>
    </AndroidContainer>
  );
}

const AndroidContainer = styled.View``;
