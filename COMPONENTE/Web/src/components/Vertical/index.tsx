import { forwardRef } from 'react'

import { ViewBaseProps } from '../..'
import { ViewBase } from '../ViewBase'

export const Vertical = forwardRef<HTMLDivElement, ViewBaseProps>(function Vertical({ children, ...rest }, ref) {
  return (
    <ViewBase
      style={{
        flexDirection: 'column'
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </ViewBase>
  )
})
