import React from 'react'
import styled, { css } from 'styled-components/native'

interface ColumnContainerProps {
  children: React.ReactNode
  gapSize: string
}

export default function ColumnContainer({ children, gapSize }: ColumnContainerProps) {
  return <ViewColumn $gapSize={gapSize}>{children}</ViewColumn>
}

const ViewColumn = styled.View<{
  $gapSize: string
}>`
  width: 100%;
  flex-direction: column;

  ${({ $gapSize, theme }) => css`
    gap: ${theme.gaps[$gapSize.toLowerCase()]}px;
  `}
`
