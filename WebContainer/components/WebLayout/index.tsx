import React from 'react'
import styled from 'styled-components'

interface WebLayoutProps {
  children: React.ReactNode
}

export default function WebLayout(props: WebLayoutProps): JSX.Element {
  return <PageWrapper>{props.children}</PageWrapper>
}

const PageWrapper = styled.div`
  width: 100%;
  max-width: 73.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;

  @media (max-width: 47.9375rem) {
    padding: 0 1rem;
    max-width: 100%;
  }
`
