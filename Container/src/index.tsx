import React from 'react'
import { DefaultTheme } from 'styled-components/native'

import { ContainerBox } from './components/ContainerBox'
import { ContainerMain } from './components/ContainerMain'

export type AlignOptions = 'LEFT' | 'CENTER' | 'RIGHT' | 'SPACE_BETWEEN'

interface ContainerProps {
  children: React.ReactNode
  variant?: 'MAIN' | 'BOX'
  direction?: 'ROW' | 'COLUMN'
  align?: AlignOptions
  size?: Uppercase<keyof DefaultTheme['columns'] & string>
  gap?: Uppercase<keyof DefaultTheme['gaps'] & string>
  noFlex?: boolean
  debug?: boolean | string
}

export function Container({
  variant = 'BOX',
  children,
  direction = 'ROW',
  align = 'LEFT',
  size,
  gap,
  noFlex = false,
  debug = false
}: ContainerProps) {
  if (variant === 'MAIN') {
    return <ContainerMain debug={debug}>{children}</ContainerMain>
  }

  return (
    <ContainerBox direction={direction} align={align} sizeKey={size} gapSize={gap} noFlex={noFlex} debug={debug}>
      {children}
    </ContainerBox>
  )
}
