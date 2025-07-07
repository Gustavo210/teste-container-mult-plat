import { Container } from "@/COMPONENTE/Web";
import { Img } from "@mobilestockweb/image";
import { Typography } from "@mobilestockweb/typography";
import React from "react";

export default function IndexWeb() {
  return (
    <Container.Y>
      <Container.Y columnNumber={1}>
        <Img
          size="FULL"
          alt="A beautiful view of a mountain landscape"
          src="https://images.unsplash.com/photo-1742201587774-f44fe79556f9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Container.Y>
      <Container.X gap="NONE">
        <Typography weight="BOLD">40248 - Tênis Adidas new shoes</Typography>
        <Typography>Receba entre 11/06 e 13/06</Typography>
      </Container.X>
      <Container.X columnNumber={1}>
        <button>teste</button>
      </Container.X>
    </Container.Y>
  );
}
