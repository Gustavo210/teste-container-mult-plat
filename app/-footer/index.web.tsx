import { Container } from "@mobilestockweb/container";
import { Typography } from "@mobilestockweb/typography";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import React from "react";
import styled from "styled-components";
import { WebFooter } from "./WebFooter";

export default function IndexWeb() {
  return (
    <>
      <Container.Vertical gap="XS">
        <Container.Horizontal gap="XS">
          <CardCatalogo />
          <CardCatalogo />
          <CardCatalogo />
        </Container.Horizontal>
        <Container.Horizontal gap="XS">
          <CardCatalogo />
          <CardCatalogo />
          <CardCatalogo />
        </Container.Horizontal>
        <Container.Horizontal gap="XS">
          <CardCatalogo />
          <CardCatalogo />
          <CardCatalogo />
        </Container.Horizontal>
        <Container.Horizontal gap="XS">
          <CardCatalogo />
          <CardCatalogo />
          <CardCatalogo />
        </Container.Horizontal>
      </Container.Vertical>
      <WebFooter fillColor="red" fixed>
        <WebFooter.FloatArea align="RIGHT">
          <FloatButton>
            <Typography size="XS">Float</Typography>
          </FloatButton>
          <FloatButton>
            <Typography size="XS">Float</Typography>
          </FloatButton>
        </WebFooter.FloatArea>
        <WebFooter.ContentArea>
          <ItemFooter>
            <LocalMallOutlinedIcon fontSize="medium" />
            <Typography style={{ fontSize: 12 }}>Produtos</Typography>
          </ItemFooter>
          <ItemFooter>
            <ShoppingCartOutlinedIcon
              name="cart-outline"
              fontSize="medium"
              color="secondary"
            />
            <Typography style={{ fontSize: 12 }}>Pedido</Typography>
          </ItemFooter>
          <ItemFooter>
            <CreditCardOutlinedIcon fontSize="medium" color="secondary" />
            <Typography style={{ fontSize: 12 }}>Look Pay</Typography>
          </ItemFooter>
          <ItemFooter>
            <StorefrontOutlinedIcon fontSize="medium" />
            <Typography style={{ fontSize: 12 }}>Minha Loja</Typography>
          </ItemFooter>
          <div style={{ flex: 1 }}>
            <ItemFooter>
              <MenuOutlinedIcon fontSize="medium" />
              <Typography>Menu</Typography>
            </ItemFooter>
          </div>
        </WebFooter.ContentArea>
      </WebFooter>
    </>
  );
}

const ItemFooter = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const CardCatalogo = styled.div`
  background-color: #918d8d;
  width: 100%;
  height: 394px;
  border-radius: 7px;
`;

const FloatButton = styled.div`
  height: 64px;
  width: 64px;
  padding: 16px;
  background-color: #7a6695;
  border-radius: 100%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
