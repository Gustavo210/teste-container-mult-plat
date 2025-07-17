import { forwardRef } from 'react'

import { ViewBaseProps } from '../..'
import { ViewBase } from '../ViewBase'

export const Horizontal = forwardRef<HTMLDivElement, ViewBaseProps>(function Horizontal({ children, ...rest }, ref) {
  return (
    <ViewBase
      style={{
        flexDirection: 'row'
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </ViewBase>
  )
})
