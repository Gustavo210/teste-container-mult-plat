import React from 'react'
import { DefaultTheme } from 'styled-components'
import WebFlexBox from './components/WebFlexBox'
import WebLayout from './components/WebLayout'



type AlignProps = 'LEFT' | 'CENTER' | 'RIGHT' | 'SPACE_BETWEEN'
export interface ContainerProps {
  children: React.ReactNode
  variant?: 'MAIN' | 'BOX'
  direction?: 'ROW' | 'COLUMN'
  align?: AlignProps
  sizeKey?: Uppercase<keyof DefaultTheme['columns'] & string>
  gapSize?: Uppercase<keyof DefaultTheme['gaps'] & string>
  auto?: boolean
}

export default function WebContainer(props: ContainerProps): JSX.Element {
  if (props.variant === 'MAIN') {
    return <WebLayout>{props.children}</WebLayout>
  }

  return (
    <WebFlexBox
      direction={props.direction}
      align={props.align}
      sizeKey={props.sizeKey?.toLowerCase()}
      gapSize={props.gapSize}
      auto={props.auto}
    >
      {props.children}
    </WebFlexBox>
  )
}
