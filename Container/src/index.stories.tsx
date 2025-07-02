import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import { Container } from '.'
import { theme } from '../../../../utils/theme'

const meta: Meta<typeof Container> = {
  title: 'Componentes/Container',
  component: Container,
  parameters: {
    notes: `
    ### Container
    Componente para organizar e alinhar conteúdos com base em variantes e tamanhos da grid.
    `
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['MAIN', 'BOX']
    },
    direction: {
      control: 'select',
      options: ['ROW', 'COLUMN']
    },
    align: {
      control: 'select',
      options: ['LEFT', 'CENTER', 'RIGHT']
    },
    size: {
      control: 'select',
      options: Object.keys(theme.columns).map(size => size.toUpperCase())
    }
  },
  decorators: [
    Story => (
      <View>
        <Text style={{ marginBottom: 8 }}>Exemplo de uso do Container:</Text>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </View>
    )
  ]
}

export default meta

type Story = StoryObj<typeof meta>

const StyledChildren = styled(Text)`
  background-color: aliceblue;
`
const StoryWrapper = styled(View)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.container.visibleArea};
  padding: 10px;
`

export const Main: Story = {
  args: {
    variant: 'MAIN',
    gap: 'XS',
    children: (
      <>
        <StyledChildren>Primeiro Item</StyledChildren>
        <StyledChildren>Segundo Item</StyledChildren>
        <StyledChildren>Terceiro Item</StyledChildren>
      </>
    )
  }
}

export const BoxRow: Story = {
  args: {
    variant: 'MAIN',
    children: (
      <Container>
        <StyledChildren>flex</StyledChildren>
        <Container size="SM">
          <StyledChildren>2 Colunas</StyledChildren>
        </Container>
        <StyledChildren>flex</StyledChildren>
      </Container>
    )
  }
}

export const BoxColumn: Story = {
  args: {
    variant: 'MAIN',
    children: (
      <Container direction="COLUMN" size="XS">
        <StyledChildren>1º Item</StyledChildren>
        <StyledChildren>2º Item</StyledChildren>
        <StyledChildren>3º item</StyledChildren>
      </Container>
    )
  }
}

export const BoxRowAlign: Story = {
  args: {
    variant: 'MAIN',
    children: (
      <>
        <Text>Item tamanho SM alinhado ao centro</Text>
        <Container align="SPACE_BETWEEN">
          <Container size="XS">
            <StyledChildren>Tamanho: SM</StyledChildren>
          </Container>
          <Container size="XS">
            <StyledChildren>Item Flex</StyledChildren>
          </Container>
        </Container>
        <Text>Item tamanho XS alinhado à esquerda</Text>
        <Container>
          <Container size="XS" align="CENTER">
            <StyledChildren>Tamanho: XS</StyledChildren>
          </Container>
        </Container>
        <Text>Item tamanho MD alinhado à direita</Text>
        <Container>
          <Container size="MD" align="RIGHT">
            <StyledChildren>Tamanho: MD</StyledChildren>
          </Container>
        </Container>
        <Text>Itens flex alinhados com o grid</Text>
        <Container>
          <Container size="SM">
            <StyledChildren>Item 1</StyledChildren>
          </Container>
        </Container>
      </>
    )
  }
}

export const BoxGap: Story = {
  args: {
    variant: 'MAIN',
    children: (
      <>
        <Container direction="COLUMN" gap="XS">
          <Text>Gap 2XS</Text>
          <Container gap="2XS">
            <StyledChildren>Coluna 1</StyledChildren>
            <StyledChildren>Coluna 2</StyledChildren>
            <StyledChildren>Coluna 3</StyledChildren>
            <StyledChildren>Coluna 4</StyledChildren>
          </Container>
          <Text>Gap 3XL no Item Flex e padrão nos itens SM 1 e 2</Text>
          <Container gap="3XL">
            <Container>
              <StyledChildren>Item Flex</StyledChildren>
            </Container>
            <Container size="SM">
              <StyledChildren>Item SM1</StyledChildren>
              <StyledChildren>Item SM2</StyledChildren>
            </Container>
          </Container>
        </Container>
      </>
    )
  }
}
