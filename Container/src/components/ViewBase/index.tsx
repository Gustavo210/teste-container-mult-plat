import { useCallback } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'

type alignType = 'START' | 'CENTER' | 'END'

export interface ViewBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  full?: boolean
  gap?: Uppercase<keyof DefaultTheme['gaps'] & string>
  overflow?: 'HIDDEN' | 'SCROLL'
  align?: `${alignType}_${alignType}` | alignType | 'BETWEEN'
}

export function ViewBase({ children, gap, full, style, overflow, align, ...rest }: ViewBaseProps) {
  const theme = useTheme()

  if (theme === undefined) {
    throw new Error('ViewBase must be used within a ThemeProvider')
  }
  // TODO: verificar se o useCallback é necessário
  const calculateGap = useCallback(() => {
    if (!gap) return 0
    const GapTag = gap.toLowerCase()
    return theme.gaps[GapTag]
  }, [gap, theme.gaps])

  const configureAlign = useCallback(() => {
    if (!align) return {}

    const tokens = align
      .toLowerCase()
      .split('_')
      .map(token => {
        if (token === 'start') return 'flex-start'
        if (token === 'center') return 'center'
        if (token === 'end') return 'flex-end'
        if (token === 'between') return 'space-between'
        throw new Error(`Invalid alignment token: ${token}`)
      })

    if (tokens.length === 1) {
      if (tokens[0] === 'space-between') {
        return {
          justifyContent: tokens[0]
        }
      }
      return {
        justifyContent: tokens[0],
        alignItems: tokens[0]
      }
    }
    return {
      justifyContent: tokens[0],
      alignItems: tokens[1]
    }
  }, [align])

  return (
    <div
      style={{
        display: 'flex',
        gap: calculateGap(),
        ...(full && { flex: 1 }),
        ...(overflow && { overflow: overflow.toLowerCase() }),
        ...style,
        ...(align && configureAlign())
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
