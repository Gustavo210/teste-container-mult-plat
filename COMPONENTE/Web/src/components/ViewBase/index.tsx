import { forwardRef } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { ViewBaseProps } from '../..'
import { utils } from '../../utils'

export const ViewBase = forwardRef<HTMLDivElement, ViewBaseProps>(function ViewBase(
  { children, gap, full, overflow, align, padding, ...rest },
  ref
) {
  const theme = useTheme()

  if (!theme.gaps) {
    throw new Error('ViewBase requires a theme with gaps defined')
  }
  if (!theme.spacing) {
    throw new Error('ViewBase requires a theme with spacing defined')
  }
  return (
    <ContainerRoot ref={ref} $gap={gap} $full={full} $overflow={overflow} $align={align} $padding={padding} {...rest}>
      {children}
    </ContainerRoot>
  )
})

const ContainerRoot = styled.div<{
  $gap?: ViewBaseProps['gap']
  $full?: ViewBaseProps['full']
  $overflow?: ViewBaseProps['overflow']
  $align?: ViewBaseProps['align']
  $padding?: ViewBaseProps['padding']
}>`
  display: flex;
  ${({ $gap, theme }) =>
    $gap &&
    css`
      gap: ${utils.getThemeValue(theme, 'gaps', $gap)};
    `}
  ${({ $full }) =>
    $full &&
    css`
      flex: 1;
    `}
  ${({ $overflow }) =>
    $overflow &&
    css`
      overflow: ${$overflow.toLowerCase()};
    `}
  ${({ $align }) => {
    if (!$align) return ''
    const tokens = $align
      .toLowerCase()
      .split('_')
      .map(token => {
        switch (token) {
          case 'start':
            return 'flex-start'
          case 'center':
            return 'center'
          case 'end':
            return 'flex-end'
          case 'between':
            return 'space-between'
          default:
            throw new Error(`Invalid alignment token: ${token}`)
        }
      })

    if (tokens.length === 1) {
      if (tokens[0] === 'space-between') {
        return css`
          justify-content: ${tokens[0]};
        `
      }
      return css`
        justify-content: ${tokens[0]};
        align-items: ${tokens[0]};
      `
    }
    return css`
      justify-content: ${tokens[0]};
      align-items: ${tokens[1]};
    `
  }}
  ${({ $padding, theme }) => {
    if (!$padding) return ''
    const paddingTokens = $padding.toLowerCase().split('_')
    switch (paddingTokens.length) {
      case 1:
        return css`
          padding: ${utils.getThemeValue(theme, 'spacing', paddingTokens[0])};
        `
      case 2:
        return css`
          padding: ${utils.getThemeValue(theme, 'spacing', paddingTokens[0])}
            ${utils.getThemeValue(theme, 'spacing', paddingTokens[1])};
        `
      default:
        return css`
          padding-top: ${utils.getThemeValue(theme, 'spacing', paddingTokens[0])};
          padding-right: ${utils.getThemeValue(theme, 'spacing', paddingTokens[1])};
          padding-bottom: ${utils.getThemeValue(theme, 'spacing', paddingTokens[2])};
          padding-left: ${utils.getThemeValue(theme, 'spacing', paddingTokens[3])};
        `
    }
  }}
`
