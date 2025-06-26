import React from 'react'
import styled from 'styled-components'

type AlignProps = 'LEFT' | 'CENTER' | 'RIGHT' | 'SPACE_BETWEEN'
interface WebFlexBoxProps {
  children: React.ReactNode
  direction?: 'ROW' | 'COLUMN'
  align?: AlignProps
  sizeKey?: string
  gapSize?: string
  auto?: boolean
}

function getJustifyContent(align: string) {
  return align === 'CENTER' ? 'center' : align === 'RIGHT' ? 'flex-end' : 'flex-start'
}

function getAlignSelf(align: string) {
  return align === 'CENTER' ? 'center' : align === 'RIGHT' ? 'flex-end' : 'flex-start'
}

const FlexContainer = styled.div<{
  $direction: 'ROW' | 'COLUMN'
  $align: AlignProps
  $sizeKey?: string
  $gapSize: string
  $autoWidth: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ theme, $gapSize }) => theme.gaps[$gapSize.toLowerCase()]};

  ${({ $sizeKey, theme, $gapSize }) => {
    if (!$sizeKey) return 'flex: 1 1 0;'
    const col = theme.columns[$sizeKey] || 1
    const gap = theme.gaps[$gapSize.toLowerCase()]
    return `width: calc((73.5rem - (${gap} * 11)) / 12 * ${col} + (${gap} * (${col - 1})));`
  }}

  @media (max-width: 73.4375rem) and (min-width: 48rem) {
    ${({ $sizeKey, theme, $gapSize }) => {
      if (!$sizeKey) return 'flex: 1 1 0;'
      const col = theme.columns[$sizeKey] || 1
      const gap = theme.gaps[$gapSize.toLowerCase()]
      return `width: calc((100% - (${gap} * 11)) / 12 * ${col} + (${gap} * (${col - 1})));`
    }}
  }

  @media (max-width: 47.9375rem) {
    ${({ $sizeKey, theme, $gapSize }) => {
      if (!$sizeKey) return 'flex: 1 1 0;'
      const col = Math.ceil((theme.columns[$sizeKey] || 1) / 3)
      const gap = theme.gaps[$gapSize.toLowerCase()]
      return `width: calc((100% - (${gap} * 3)) / 4 * ${col} + (${gap} * (${col - 1})));`
    }}
  }

  ${({ $autoWidth }) =>
    !$autoWidth &&
    `
    & > * {
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }
  `}

  ${({ $direction, $align }) =>
    $direction === 'ROW'
      ? `
        justify-content: ${getJustifyContent($align)};
        ${$align === 'CENTER' ? 'margin: 0 auto;' : ''}
        ${$align === 'RIGHT' ? 'margin-left: auto;' : ''}
        ${$align === 'SPACE_BETWEEN' ? 'justify-content: space-between;' : ''}
      `
      : `align-self: ${getAlignSelf($align)};`}
`

export default function WebFlexBox({
  children,
  direction = 'ROW',
  align = 'LEFT',
  sizeKey,
  gapSize = 'MD',
  auto = false
}: WebFlexBoxProps): JSX.Element {
  return (
    <FlexContainer
      $direction={direction}
      $align={align}
      $sizeKey={sizeKey}
      $gapSize={gapSize}
      $autoWidth={auto}
    >
      {children}
    </FlexContainer>
  )
}
