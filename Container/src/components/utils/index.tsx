import { css } from 'styled-components/native'

export function calculateAvailableSpace(containerWidth: number, columns: number, gap: number) {
  if (columns <= 0) return 0
  const singleColWidth = (containerWidth - gap * 3) / 4
  return singleColWidth * columns + gap * (columns - 1)
}

export function getAlignmentStyles($align, $noFlex) {
  if (!$align) return ''

  if ($noFlex) {
    const flexValues = {
      LEFT: 'flex-start',
      CENTER: 'center',
      RIGHT: 'flex-end',
      SPACE_BETWEEN: 'space-between'
    }
    const value = flexValues[$align]
    return value
      ? css`
          justify-content: ${value};
        `
      : ''
  }

  const marginStyles = {
    LEFT: css`
      margin-right: auto;
    `,
    CENTER: css`
      margin-left: auto;
      margin-right: auto;
    `,
    RIGHT: css`
      margin-left: auto;
    `
  }
  return marginStyles[$align] || ''
}
