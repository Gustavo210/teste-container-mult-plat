import { DefaultTheme } from 'styled-components'

import { Horizontal } from './components/Horizontal'
import { Main } from './components/Main'
import { Vertical } from './components/Vertical'
import { ViewBase } from './components/ViewBase'

type alignType = 'START' | 'CENTER' | 'END'
type PaddingType = Uppercase<keyof DefaultTheme['spacing'] & string>
export interface ViewBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  full?: boolean
  gap?: Uppercase<keyof DefaultTheme['gaps'] & string>
  overflow?: 'HIDDEN' | 'SCROLL'
  align?: `${alignType}_${alignType}` | alignType | 'BETWEEN'
  padding?:
    | PaddingType
    | `${PaddingType}_${PaddingType}`
    | `${PaddingType}_${PaddingType}_${PaddingType}_${PaddingType}`
}

export const Container = Object.assign(ViewBase, {
  Horizontal,
  Vertical,
  Main
})
