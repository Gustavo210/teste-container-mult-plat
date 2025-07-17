import { styled } from 'styled-components'

import { ViewBase } from '../ViewBase'

interface LayoutProps {
  children: React.ReactNode
}

export function Main({ children }: LayoutProps) {
  return (
    <PageWrapper full gap="NONE">
      {children}
    </PageWrapper>
  )
}

const PageWrapper = styled(ViewBase)`
  max-width: 73.5rem;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding: 0px 4px 12px 4px;
`
