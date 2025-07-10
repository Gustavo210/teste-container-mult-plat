import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdCheck, MdCreditCard, MdShoppingCart, MdStorefront } from "react-icons/md";
import styled, { createGlobalStyle } from "styled-components";
import { WebFooter } from "./WebFooter";

export default function IndexWeb() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <ScrollContainer>
          {Array.from({ length: 50 }, (_, i) => (
            <Item key={i} color="#B5E48C">
              <span>Item {i + 1}</span>
            </Item>
          ))}
        </ScrollContainer>

        <WebFooter>
          <WebFooter.FloatArea align="RIGHT">
            <FloatButton>
              <span >Float</span>
            </FloatButton>
            <FloatButton>
              <span >Float</span>
            </FloatButton>
          </WebFooter.FloatArea>

          <WebFooter.ContentArea padding="XS" noFlex>
            <ItemWebFooter>
              <MdShoppingCart size={24} />
              <span>Produtos</span>
            </ItemWebFooter>
            <ItemWebFooter>
              <IoCartOutline size={24} />
              <span>Pedido</span>
            </ItemWebFooter>
            <ItemWebFooter>
              <MdCreditCard size={24} />
              <span>Look Pay</span>
            </ItemWebFooter>
            <ItemWebFooter>
              <MdStorefront size={24} />
              <span>Minha Loja</span>
            </ItemWebFooter>
            <ItemWebFooter as="button" onClick={() => setModalVisible(true)}>
              <FiMenu size={24} />
              <span>Menu</span>
            </ItemWebFooter>
          </WebFooter.ContentArea>
        </WebFooter>
      </PageContainer>

      {modalVisible && (
        <ModalOverlay onClick={() => setModalVisible(false)}>
          <DialogContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <HeaderText>ALERTA</HeaderText>
            </ModalHeader>
            <ModalBody>
              <BodyText>
                Este cliente não possui nenhuma troca ou entrega disponível para coleta
              </BodyText>
            </ModalBody>

            <WebFooter >
              <WebFooter.FloatArea>
                <DialogButton>
                  <MdCheck size={24} color="white" />
                </DialogButton>
                <DialogButton>
                  <MdCheck size={24} color="white" />
                </DialogButton>
              </WebFooter.FloatArea>
              <WebFooter.ContentArea padding="SM">
                <CloseButtonArea onClick={() => setModalVisible(false)}>
                  <CloseButtonText>Fechar</CloseButtonText>
                </CloseButtonArea>
              </WebFooter.ContentArea>
            </WebFooter>
          </DialogContainer>
        </ModalOverlay>
      )}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

const Item = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const FloatButton = styled.button`
  height: 64px;
  width: 64px;
  background-color: #7a6695;
  border-radius: 100%;
  margin-bottom: 16px;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const DialogButton = styled.button`
  height: 64px;
  width: 64px;
  background-color: #7a6695;
  border-radius: 100%;
  margin-bottom: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ItemWebFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 4px;
  font-size: 14px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const DialogContainer = styled.div`
  background-color: #ffcc00;
  width: 600px;
  height: 80%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background-color: #ff6f00;
  padding: 16px;
  text-align: center;
`;

const HeaderText = styled.h3`
  margin: 0;
  font-weight: bold;
  color: black;
`;

const ModalBody = styled.div`
  padding: 24px 16px;
  flex: 1;
  text-align: center;
`;

const BodyText = styled.p`
  font-size: 16px;
  color: black;
`;

const CloseButtonArea = styled.button`
  background-color: #ff6f00;
  padding: 16px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const CloseButtonText = styled.span`
  color: white;
`;
