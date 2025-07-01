import React from 'react'
import { LayoutChangeEvent } from 'react-native'
import styled, { css } from 'styled-components/native'

import { AlignOptions } from '../..'
import { getAlignmentStyles } from '../utils'

interface RowContainerProps {
  children: React.ReactNode
  gapSize: string
  align?: AlignOptions
  onLayout(event: LayoutChangeEvent): void
}

export default function RowContainer({ children, gapSize, align, onLayout }: RowContainerProps) {
  return (
    <ViewRow $gapSize={gapSize} $align={align} onLayout={onLayout}>
      {children}
    </ViewRow>
  )
}

const ViewRow = styled.View<{
  $gapSize: string
  $align?: AlignOptions
}>`
  flex-direction: row;

  ${({ $gapSize, theme }) => css`
    gap: ${theme.gaps[$gapSize.toLowerCase()]}px;
  `}

  ${({ $align }) => getAlignmentStyles($align, true)}
`
